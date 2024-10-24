import { HttpClient } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIControllerService {

   
  apiURL = "http://localhost:8100";

  constructor(private http: HttpClient) { }
  
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiURL}/users`);
  }
  
  postUser(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiURL}/users`, data);
  }
  
  updateUser(id: string, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiURL}/users/${id}`, data);
  }
  
  deleteUser(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/users/${id}`);
  }
}
