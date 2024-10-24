import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private navCtrl: NavController) { }

  ngOnInit() {
    // Inicializamos el formulario
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  // Método que se ejecuta al enviar el formulario
  onSubmit() {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;

      // Guardar los datos en localStorage
      localStorage.setItem('userData', JSON.stringify(formData));

      // Aquí puedes redirigir al usuario o mostrar un mensaje de éxito
      console.log('Datos guardados en localStorage:', formData);
      alert('¡Registro exitoso! Datos guardados en localStorage.');

      // Ejemplo de redirección a otra página después de registrarse
      this.navCtrl.navigateRoot('/home');
    } else {
      alert('Por favor, complete todos los campos correctamente.');
    }
  }
}