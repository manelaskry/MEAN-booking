import { Component } from '@angular/core';
import { BookingComponent } from '../../components/booking/booking.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ReservationService } from '../../services/reservation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mybooking',
  standalone: true,
  imports: [BookingComponent, NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './mybooking.component.html',
  styleUrl: './mybooking.component.css'
})
export class MybookingComponent {
  
  reservationList:any[]=[]
  constructor(private resService: ReservationService ){  }
  ngOnInit(){
    this.resService.getReservation().subscribe((reservationList)=>{
      console.log(reservationList)
      this.reservationList=reservationList
    })
  }

  deleteRes(id:any){
    this.resService.deleteReservation(id).subscribe((data)=>{console.log("deleted reservation",data)})
  }

}
