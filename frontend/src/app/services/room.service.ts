import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import Room from '../types/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  apiUrl="http://localhost:8800";
  httpClient=inject(HttpClient);
  constructor() {}


  getRooms(){
   return this.httpClient.get<Room[]>(this.apiUrl+'/api/room/rooms');
  }

  getRoomById(roomId: string) {
    return this.httpClient.get<Room>(this.apiUrl + '/api/getroom' + roomId);
  }
}
