import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) {} // Inject Router service

  login() {
    // Implement your login logic here
    console.log('Login button clicked');

    // Navigate to the default route after login
    this.router.navigate(['/default']);
  }
}
