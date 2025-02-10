import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule] // Import necessary modules
})
export class AppComponent {
  title = 'DeckAlchemy2';

  constructor(private router: Router) {} // Inject the Router service

  navigateToSimilarGame() {
    this.router.navigate(['/similar-game']); // Navigate to the Similar Game page
  }
}
