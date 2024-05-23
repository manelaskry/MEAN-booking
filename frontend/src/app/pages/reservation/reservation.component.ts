import { Component, OnInit, inject } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from '../../services/room.service';
import Room from '../../types/room';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ReservationService } from '../../services/reservation.service';



@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [NavbarComponent, ReactiveFormsModule],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent implements OnInit {
  
  formBuilder=inject(FormBuilder);
  bookingForm=this.formBuilder.group({
    room:[''],
    startTime:[''],
    endTime:[''],
  });

 

  roomId: string="";
  rooms: Room[] = [];

  constructor(
    private route: ActivatedRoute,
    private roomService:RoomService,
    private resservice:ReservationService,
   ) {}

   addReservation(){
    console.log(this.bookingForm.value);
    console.log(this.roomId);
    this.resservice.createReservation(this.bookingForm.value, this.roomId).subscribe((res)=>{
     console.log("reservation", res)
    })
  }

  ngOnInit() {
  
    this.route.queryParams.subscribe(params => {
      this.roomId = params['roomId'];
     
    });
    console.log(this.roomId);
    
  }

  getRoomHours(){
    
  }
}