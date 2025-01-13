import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class LoginComponent {
  constructor(private router: Router) {}

  login() {
    // Implement your login logic here
    this.router.navigate(['/default']);
  }
}