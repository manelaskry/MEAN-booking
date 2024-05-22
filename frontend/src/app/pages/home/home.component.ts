import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterLink } from '@angular/router';
import { RoomsComponent } from '../rooms/rooms.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ RouterLink, RoomsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
