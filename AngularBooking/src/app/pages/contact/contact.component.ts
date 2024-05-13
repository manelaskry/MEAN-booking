import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterLink } from '@angular/router';
import { RoomsComponent } from '../rooms/rooms.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ FooterComponent, RouterLink, RoomsComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
