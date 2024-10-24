import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RegisterPage } from './registro.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule  // Asegúrate de que ReactiveFormsModule está aquí
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule { }
