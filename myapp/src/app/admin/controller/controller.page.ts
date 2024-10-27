import { Component, OnInit } from '@angular/core';
import { APIControllerService } from 'src/app/servicios/apicontroller.service';


@Component({
  selector: 'app-controller',
  templateUrl: './controller.page.html',
  styleUrls: ['./controller.page.scss'],
})
export class ControllerPage implements OnInit {

  users: any[] = [];
  constructor(private api: APIControllerService) { }

  ngOnInit() {
    this.cargarUsuarios();
  }
  
  cargarUsuarios() {
    this.api.getUsers().subscribe(
      (data) => {
        this.users = data
        console.log(this.users)
      },
      (error) => {
        console.log("Error en la llamada :" + error)
      });
  }
  modificarUsuario(id: any, usuarioActualizado: any) {
    this.api.updateUser(id, usuarioActualizado).subscribe(
      (data): void => {
        console.log("Usuario modificado exitosamente:", data);
        
        this.cargarUsuarios();
      },
      (error) => {
        console.error("Error al modificar el usuario:", error.message ? error.message : error);
      }
    );
  }
  eliminarUsuario(id: any) {
    this.api.deleteUser(id).subscribe(
      (data) => {
        console.log("Usuario eliminado exitosamente:", data);
        
        this.cargarUsuarios(); 
      },
      (error) => {
        console.error("Error al eliminar el usuario:", error.message ? error.message : error);
      }
    );
  }
}
