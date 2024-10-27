import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIControllerService {
  private baseUrl: string = 'http:/localhost:8100'; 
  constructor(private http: HttpClient) {}

  async loadUsers(): Promise<User[]> {
    const users = await this.http.get<User[]>(`${this.baseUrl}/users`).toPromise();
    return users || []; 
  }

  addUser(username: string, email: string, password: string, fechaNacimiento: string, rut: string): Promise<void> {
    return this.http.post<void>(`${this.baseUrl}/users`, { username, email, password, fechaNacimiento, rut }).toPromise();
  }

  modifyUser(id: number, username: string, email: string, password: string, fechaNacimiento: string, rut: string): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/users/${id}`, { username, email, password, fechaNacimiento, rut });
  }

  deleteUser(id: number): Promise<void> {
    return this.http.delete<void>(`${this.baseUrl}/users/${id}`).toPromise();
  }
}
