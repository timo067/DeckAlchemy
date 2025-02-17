import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private auth;

  constructor() {
    // Your Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyDTyTJCU7CI0mzyiXMEd_QEmHfOLfzccqk",
      authDomain: "deckalchemy-382dd.firebaseapp.com",
      projectId: "deckalchemy-382dd",
      storageBucket: "deckalchemy-382dd.firebasestorage.app",
      messagingSenderId: "850541189614",
      appId: "1:850541189614:web:297645fafea6367021d6ff"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // Initialize Firebase Authentication and Firestore
    this.auth = getAuth(app);
    getFirestore(app);
  }

  // Register a new user
  register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  // Log in with email and password
  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  // Logout function (optional)
  logout() {
    return this.auth.signOut();
  }
}
