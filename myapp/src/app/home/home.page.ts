import { Component } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private animationController: AnimationController
  ) {}
  ngAfterContentInit() {
    this.animarLogo();
}
animarLogo() {
  // Seleccionamos el elemento con la clase .logo
  const logo = document.querySelector('.logo') as HTMLElement;

  // Crear la animación con AnimationController
  const animacion = this.animationController
    .create()
    .addElement(logo)
    .duration(3000)
    .iterations(Infinity)
    .keyframes([
      { offset: 0, transform: 'rotate(0deg) translateX(15px) rotate(0deg)' },
      { offset: 1, transform: 'rotate(360deg) translateX(15px) rotate(-360deg)' },
    ]);

  animacion.play();
}
}
