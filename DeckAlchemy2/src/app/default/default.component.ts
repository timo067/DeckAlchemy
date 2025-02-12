import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class DefaultComponent {
  constructor(private router: Router) {}

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