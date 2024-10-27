import { Component, OnInit } from '@angular/core';
import { APIControllerService } from 'src/app/servicios/apicontroller.service';
import { firstValueFrom } from 'rxjs';

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

  async cargarUsuarios() {
    try {
      const data = await firstValueFrom(this.api.getUsers());
      this.users = data;
      console.log(this.users);
    } catch (error: any) {  
      console.error("Error en la llamada:", error.message ? error.message : error);
    }
  }

  async modificarUsuario(id: any, usuarioActualizado: any) {
    try {
      const data = await firstValueFrom(this.api.updateUser(id, usuarioActualizado));
      console.log("Usuario modificado exitosamente:", data);
      
      await this.cargarUsuarios(); 
    } catch (error: any) {  
      console.error("Error al modificar el usuario:", error.message ? error.message : error);
    }
  }

  async eliminarUsuario(id: any) {
    try {
      const data = await firstValueFrom(this.api.deleteUser(id));
      console.log("Usuario eliminado exitosamente:", data);
      
      await this.cargarUsuarios(); 
    } catch (error: any) {  
      console.error("Error al eliminar el usuario:", error.message ? error.message : error);
    }
  }
}