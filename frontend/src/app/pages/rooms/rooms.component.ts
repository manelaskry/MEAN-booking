import { Component, OnInit, inject } from '@angular/core';
import { RoomComponent } from '../../components/room/room.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterLink } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';
import Room from '../../types/room';
import { RoomService } from '../../services/room.service';



@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [RoomComponent, NavbarComponent, FooterComponent, RouterLink, ContactComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent {
  rooms: Room[] = [];
  roomService = inject(RoomService);
  ngOnInit() {
    
    this.roomService.getRooms().subscribe(
      (result) => {
      this.rooms = result;
      console.log(this.rooms);
      
    });
    
  }



}
