import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthenticatorService } from 'src/app/servicios/authenticator.service';
import { StorageService } from 'src/app/servicios/storage.service'; // Importar el servicio Storage

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
    fecha_nacimiento: '',
    rut: '', // Incluimos RUT
  };

  burbuja = false; // Indicador de carga

  constructor(
    private auth: AuthenticatorService,
    private router: Router,
    private toastController: ToastController,
    private storageService: StorageService // Inyectar el servicio Storage
  ) {}

  ngOnInit() {}

  // Método para registrar al usuario
  async registrar() {
    const { username, email, password, fecha_nacimiento, rut } = this.user;

    if (username && email && password && fecha_nacimiento && rut) {
      this.burbuja = true; // Mostrar la burbuja de carga

      try {
        // Registrar al usuario mediante el servicio de autenticación
        const res = await this.auth.registrar(this.user);

        // Guardar la información del usuario en el Storage local
        await this.storageService.set('usuario', this.user);

        this.burbuja = false; // Ocultar la burbuja de carga
        this.router.navigate(['/home']); // Redirigir a la página de inicio

        // Mostrar un mensaje de éxito
        const toast = await this.toastController.create({
          message: 'Registrado con éxito',
          duration: 5000,
          position: 'bottom',
        });
        toast.present();
      } catch (error) {
        this.burbuja = false; // Ocultar la burbuja en caso de error

        const toast = await this.toastController.create({
          message: 'Error al registrar',
          duration: 5000,
          position: 'bottom',
        });
        toast.present();
      }
    } else {
      // Mostrar mensaje si faltan campos
      const toast = await this.toastController.create({
        message: 'Por favor completa todos los campos',
        duration: 5000,
        position: 'bottom',
      });
      toast.present();
    }
  }
}
