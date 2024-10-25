import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm!: FormGroup; 

  constructor(private formBuilder: FormBuilder, private navCtrl: NavController) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;
      localStorage.setItem('userData', JSON.stringify(formData));
      alert('¡Registro exitoso!');
      this.navCtrl.navigateRoot('/register');
    } else {
      alert('Por favor, complete todos los campos correctamente.');
    }
  }
}