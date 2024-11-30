import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import * as bcrypt from 'bcryptjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatorService {
  private connectionStatus: boolean = false;

  constructor(private storage: StorageService, private http: HttpClient) {}

  async loginBDD(user: string, pass: string): Promise<boolean> {
    try {
      console.log('Intentando autenticación...');
      const res = await this.storage.get(user);
      if (res && bcrypt.compareSync(pass, res.password)) {
        this.connectionStatus = true;
        console.log('Autenticación exitosa, estado actualizado:', this.connectionStatus);
        return true;
      } else {
        this.connectionStatus = false;
        console.log('Autenticación fallida, estado actualizado:', this.connectionStatus);
        return false;
      }
    } catch (error) {
      console.error('Error en el sistema:', error);
      this.connectionStatus = false;
      return false;
    }
  }

  logout(): void {
    this.connectionStatus = false;
  }

  isConnected(): boolean {
    return this.connectionStatus;
  }

  async registrar(user: { username: string; password: string }): Promise<boolean> {
    try {
      const res = await this.storage.set(user.username, user); //const response = await this.http.post('sqlite.service.ts', user).toPromise(); //no tengo idea cual es lol
      return res !== null;
    } catch (error) {
      console.error('Error en el registro:', error);
      return false;
    }
  }
}