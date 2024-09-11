import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {

  user = {
    username: '',
    password: '',
  };

  burbuja = false;
  
  cambiarSpin(){
    this.burbuja = !this.burbuja
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }
  

  validar() {
    if (!this.user.username || this.user.username.length === 0) {
      console.log('Sin usuario');
      return;
    }
  
    if (!this.user.password || this.user.password.length === 0) {
      console.log('Sin contraseña');
      return;
    }
  
    console.log('Yippieee');
    console.log('Datos válidos');
  
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.user.username,
        pass: this.user.password,
      }
    };
  
    this.cambiarSpin();
  
    setTimeout(() => {
      this.router.navigate(['/inicio'], navigationExtras);
      this.cambiarSpin();
    }, 3500);
  }
}
