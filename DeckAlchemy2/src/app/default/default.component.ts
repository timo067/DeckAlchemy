import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
// Assume you have an AuthService that manages logged-in users
import { AuthService } from '../services/auth.service'; // Adjust the import path accordingly

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class DefaultComponent {
  loggedInAccounts: string[] = [];

  constructor(private router: Router, private authService: AuthService) {
    // Fetch logged-in accounts from AuthService or similar
    this.loggedInAccounts = this.authService.getLoggedInAccounts();
  }

  navigateToDeckEditor() {
    this.router.navigate(['/deck-editor']);
  }

  navigateToSimilarGame() {
    this.router.navigate(['/similar-game']);
  }

  navigateToCardSearch() {
    this.router.navigate(['/card-search']);
  }

  navigateToLogin() {
    this.router.navigate(['/']);
  }
}
