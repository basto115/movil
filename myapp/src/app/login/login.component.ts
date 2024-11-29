import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticatorService } from '../servicios/authenticator.service'; 

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
      this.router.navigate(['/ruta-protegida']); 
    } else {
      console.log('Inicio de sesión fallido.');
     
    }
  }
}
