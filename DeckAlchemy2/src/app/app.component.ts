import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FirebaseService } from './firebase.service'; // Import Firebase service
import { getAuth, onAuthStateChanged } from 'firebase/auth'; // Import Firebase Authentication

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule], // Import necessary modules
})
export class AppComponent implements OnInit {
  title = 'DeckAlchemy2';

  constructor(
    private router: Router,
    private firebaseService: FirebaseService // Inject Firebase service
  ) {}

  ngOnInit(): void {
    // Firebase Authentication check on component initialization
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('User is signed in:', user);
      } else {
        console.log('No user is signed in');
      }
    });

    console.log('Firebase initialized');
  }

  navigateToSimilarGame() {
    this.router.navigate(['/similar-game']); // Navigate to the Similar Game page
  }
}
