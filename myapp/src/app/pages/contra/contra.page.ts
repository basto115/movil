import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-contra',
  templateUrl: './contra.page.html',
  styleUrls: ['./contra.page.scss'],
})
export class ContraPage implements OnInit {

  user = {
    username: '',
    password: '',
    pass2: '',
  };

  burbuja = false;
  
  mensaje = '';
  
  cambiarSpin(){
    this.burbuja = !this.burbuja
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  validar() {
    if (!this.user.password || this.user.password.length === 0) {
      console.log('Sin contraseña');
      return;
    }
  
    if (!this.user.pass2 || this.user.pass2.length === 0) {
      console.log('Sin confirmar');
      return;
    }
  
    console.log('Yippieee');
    console.log('Datos válidos');
    this.mensaje = "Cambio exitoso waos";
  
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.user.pass2,
        pass: this.user.password
      }
    };
  
    this.cambiarSpin();
  
    setTimeout(() => {
      this.router.navigate(['/login'], navigationExtras);
      this.cambiarSpin();
      
    }, 3500);
  }
}
