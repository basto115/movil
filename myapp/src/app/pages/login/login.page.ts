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
  

  validar(){
    if (this.user.username.length != 0) {
     if (this.user.password.length != 0) {
       console.log('Yippieee')
       console.log('Datos validos')

       let navigationExtras: NavigationExtras = {
         state:{
           user: this.user.username,
           pass: this.user.password,
         }
       };
       this.cambiarSpin();

       setTimeout(() => {
         this.router.navigate(['/inicio'], navigationExtras);
         this.cambiarSpin();
       }, 3500);

     }else{
       console.log('Sin contraseña')

     }
    }else{
       console.log('Sin usuario')
    }
 }
}
