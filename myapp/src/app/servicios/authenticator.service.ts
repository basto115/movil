import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatorService {
  private connectionStatus: boolean = false;

  constructor(private storage: StorageService) {}

  // Iniciar sesión utilizando credenciales almacenadas en la base de datos (BDD)
  async loginBDD(user: string, pass: string): Promise<boolean> {
    try {
      const res = await this.storage.get(user);
      if (res && res.password === pass) {
        this.connectionStatus = true;
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error en el sistema:', error);
      return false;
    }
  }

  // Cerrar sesión
  logout(): void {
    this.connectionStatus = false;
  }

  // Consultar el estado de conexión
  isConnected(): boolean {
    return this.connectionStatus;
  }

  // Registrar un nuevo usuario en la base de datos (BDD)
  async registrar(user: { username: string; password: string }): Promise<boolean> {
    try {
      const res = await this.storage.set(user.username, user);
      return res !== null;
    } catch (error) {
      console.error('Error en el registro:', error);
      return false;
    }
  }
}