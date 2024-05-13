import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  rightPanelActive: boolean = false;

  constructor() {}
  

  signUp(): void {
    this.rightPanelActive = true;
  }

  signIn(): void {
    this.rightPanelActive = false;
  }
}
