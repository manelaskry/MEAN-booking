import { Component } from '@angular/core';
import { BookingComponent } from '../../components/booking/booking.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-mybooking',
  standalone: true,
  imports: [BookingComponent, NavbarComponent, FooterComponent],
  templateUrl: './mybooking.component.html',
  styleUrl: './mybooking.component.css'
})
export class MybookingComponent {

}
