import { DatabaseService } from './../../servicios/sqlite.service';
import { Component, OnInit } from '@angular/core';
import { APIControllerService } from 'src/app/servicios/apicontroller.service';
import { User } from 'src/app/models/user.model';
import { firstValueFrom } from 'rxjs';


@Component({
  selector: 'app-controller',
  templateUrl: './controller.page.html',
  styleUrls: ['./controller.page.scss'],
})
export class ControllerPage {
  users: User[] = [];

  constructor(private APIControllerService: APIControllerService, DatabaseServicece : DatabaseService) {}

  ionViewDidEnter() {
    this.loadUsers(); 
  }

  loadUsers() {
    this.APIControllerService.loadUsers().then(data => {
      this.users = data; 
    });
  }

  addUser() {
    this.APIControllerService.addUser('', '', '','','').then(() => {
      this.loadUsers(); 
    });
  }

  modificarUsuario(id: number, username: string, email: string, password: string, fechaNacimiento: string, rut: string) {
    this.APIControllerService.modifyUser(id, username, email, password, fechaNacimiento, rut)
      .subscribe(() => {
        this.loadUsers();
      }, error => {
        console.error('Error al modificar el usuario:', error);
      });
  }

  eliminarUsuario(userId: number) {
    this.APIControllerService.deleteUser(userId)
      .then(() => {
        this.loadUsers(); 
      })
      .catch(error => {
        console.error('Error al eliminar el usuario:', error);
      });
  }
}