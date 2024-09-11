import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  user: string | undefined;
  
  constructor(private router: Router) { }

  ngOnInit() {
    // Obtener los datos pasados desde la página anterior
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras?.state;

    if (state) {
      this.user = state['user'];  // Guardar el nombre de usuario
    }
  }

}
