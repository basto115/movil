import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticatorService } from '../servicios/authenticator.service'; // Ajusta la ruta según tu estructura

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthenticatorService, private router: Router) {}

  async iniciarSesion() {
    const isLoginSuccessful = await this.authService.loginBDD(this.username, this.password);
    
    if (isLoginSuccessful) {
      this.router.navigate(['/ruta-protegida']); // Redirige a la ruta protegida si la autenticación es exitosa
    } else {
      console.log('Inicio de sesión fallido.');
      // Aquí podrías mostrar un mensaje de error al usuario
    }
  }
}
