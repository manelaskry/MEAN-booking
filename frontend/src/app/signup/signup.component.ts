import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  user: any = {
    username: '',
    email: '',
    password: '',
  };
  
  constructor(private authService: AuthService, private router:Router) {}

  signUp() {
    console.log('Full Name:', this.user.username);
    console.log('Email:', this.user.email);
    console.log('Password:', this.user.password);
    this.authService.signup(this.user).subscribe( (res) => {
      console.log("register", res);
      window.alert("Account created successfully");
      this.router.navigate(['/app-signin']);
    },
    (err) => {
      console.error(err);
      window.alert("There was an error creating the account");
    });
  }
}
