import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class anyService {

  private baseURL = 'http://localhost:8800/';


  constructor(private httpClient: HttpClient) {}

  getUsersList(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseURL+ 'getAll'}`);
  }

  createUser(user: any): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, user);
  }

  deleteUser(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  getUserById(id: string): Observable<any> {
    return this.httpClient.get<any>(`${this.baseURL}/${id}`);
  }

  updateany(id: number, user: any): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, user);
  }

}
