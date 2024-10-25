import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RegisterPage } from './register.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule  
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule { }
