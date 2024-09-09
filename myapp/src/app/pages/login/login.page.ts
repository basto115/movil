import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }
  

  validar(){
     if (this.user.username.length != 0) {
      if (this.user.password.length != 0) {
        console.log('Yippieee')
        console.log('Datos validos')
      }else{
        console.log('Sin contraseña')

      }
     }else{
        console.log('Sing usuario')
     }
  }
}
