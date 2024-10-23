import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthenticatorService } from 'src/app/servicios/authenticator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  user = {
    username: '',
    email: '',
    password: '',
  };
  burbuja = false;

  constructor(
    private auth: AuthenticatorService,
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  async registrar() {
    if (this.user.username && this.user.email && this.user.password) {
      this.burbuja = true; // Muestra la burbuja de "cargando"

      this.auth
        .registrar(this.user)
        .then((res) => {
          this.burbuja = false; // Oculta la burbuja
          this.router.navigate(['/home']);
          return this.toastController.create({
            message: 'Registrado con éxito',
            duration: 5000,
            position: 'bottom',
          });
        })
        .then((toast) => toast.present())
        .catch((error) => {
          this.burbuja = false; // Oculta la burbuja en caso de error
          return this.toastController
            .create({
              message: 'Error al registrar',
              duration: 5000,
              position: 'bottom',
            })
            .then((toast) => toast.present());
        });
    } else {
      // Muestra mensaje si faltan datos
      this.toastController
        .create({
          message: 'Por favor completa todos los campos',
          duration: 5000,
          position: 'bottom',
        })
        .then((toast) => toast.present());
    }
  }


}
