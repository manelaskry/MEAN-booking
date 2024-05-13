import { Component } from '@angular/core';
import { RoomComponent } from '../../components/room/room.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterLink } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';


@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [RoomComponent, NavbarComponent, FooterComponent, RouterLink, ContactComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent {

}
