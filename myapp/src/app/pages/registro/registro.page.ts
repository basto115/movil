import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthenticatorService } from 'src/app/servicios/authenticator.service';
import { StorageService } from 'src/app/servicios/storage.service'; 

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
    rut: '', 
  };

  burbuja = false; 

  constructor(
    private auth: AuthenticatorService,
    private router: Router,
    private toastController: ToastController,
    private storageService: StorageService 
  ) {}

  ngOnInit() {}

  
  async registrar() {
    const { username, email, password, fecha_nacimiento, rut } = this.user;

    if (username && email && password && fecha_nacimiento && rut) {
      this.burbuja = true; 

      try {
        
        const res = await this.auth.registrar(this.user);

        
        await this.storageService.set('usuario', this.user);

        this.burbuja = false; 
        this.router.navigate(['/home']); 

        
        const toast = await this.toastController.create({
          message: 'Registrado con éxito',
          duration: 5000,
          position: 'bottom',
        });
        toast.present();
      } catch (error) {
        this.burbuja = false; 

        const toast = await this.toastController.create({
          message: 'Error al registrar',
          duration: 5000,
          position: 'bottom',
        });
        toast.present();
      }
    } else {
      
      const toast = await this.toastController.create({
        message: 'Por favor completa todos los campos',
        duration: 5000,
        position: 'bottom',
      });
      toast.present();
    }
  }
}
