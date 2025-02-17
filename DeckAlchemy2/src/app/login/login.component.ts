import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  username: string = ''; // For registering new user
  isRegistering: boolean = false; // Track whether we are in Register mode
  errorMessage: string = '';
  loggedInUsername: string = ''; // To store logged-in username

  constructor(
    private router: Router,
    private firebaseService: FirebaseService
  ) {}

  ngOnInit(): void {
    // Get the logged-in user's username
    const username = this.firebaseService.getUsername();
    if (username) {
      this.loggedInUsername = username;
    }
  }

  // Method to log in with email and password
  login() {
    if (this.email && this.password) {
      this.firebaseService.login(this.email, this.password)
        .then(() => {
          // After successful login, set loggedInUsername
          this.loggedInUsername = this.firebaseService.getUsername() || ''; // Get the username from Firebase
          this.router.navigate(['/default']);
        })
        .catch(error => {
          this.errorMessage = error.message;
        });
    } else {
      this.errorMessage = 'Please enter both email and password';
    }
  }  

  // Method to register a new user with username, email, and password
  register() {
    if (this.username && this.email && this.password && this.password === this.confirmPassword) {
      this.firebaseService.register(this.email, this.password, this.username)
        .then(() => {
          this.router.navigate(['/login']);
        })
        .catch(error => {
          this.errorMessage = error.message;
        });
    } else {
      this.errorMessage = 'Please ensure all fields are filled correctly and passwords match.';
    }
  }

  // Toggle between Login and Register view
  toggleRegister() {
    this.isRegistering = !this.isRegistering;
    this.errorMessage = ''; // Reset error message when toggling
  }
}
