import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private baseURL = 'http://localhost:8800/api/res/';


  constructor(private httpClient: HttpClient) {}

  getReservation(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseURL}`);
  }

  createReservation(user: any, roomId:string): Observable<Object> {
    return this.httpClient.post(`${this.baseURL+'createres'}`, {user,roomId});
  }

  deleteReservation(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  getReservationById(id: string): Observable<any> {
    return this.httpClient.get<any>(`${this.baseURL}/${id}`);
  }

  updateany(id: number, user: any): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, user);
  }
}
