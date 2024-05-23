import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent {
  
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  

  signIn(): void {
    
    console.log(this.username, this.password);
    this.authService.login(this.username, this.password).subscribe((res) => {
      console.log('login', res);
    });
  }
}
