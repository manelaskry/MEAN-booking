import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ RouterLink ,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  private subscription: Subscription=new Subscription();
  loggedIn:boolean=false;
  constructor(private authservice:AuthService){}
  
  ngOnInit(){
   this.loggedIn= this.authservice.isLoggedIn()
   console.log(this.loggedIn);
   
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


  logout(){
    this.authservice.logout()

  }

}
