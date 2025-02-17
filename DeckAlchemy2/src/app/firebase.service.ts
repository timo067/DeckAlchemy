import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private auth;

  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyDTyTJCU7CI0mzyiXMEd_QEmHfOLfzccqk",
      authDomain: "deckalchemy-382dd.firebaseapp.com",
      projectId: "deckalchemy-382dd",
      storageBucket: "deckalchemy-382dd.firebasestorage.app",
      messagingSenderId: "850541189614",
      appId: "1:850541189614:web:297645fafea6367021d6ff"
    };

    const app = initializeApp(firebaseConfig);
    this.auth = getAuth(app);
    getFirestore(app);
  }

  // Register a new user
  register(email: string, password: string, username: string) {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        return updateProfile(user, { displayName: username }); // Set displayName as username
      });
  }  

  // Log in with email and password
  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  // Get current logged-in user's username
  getUsername() {
    const user = this.auth.currentUser;
    return user ? user.displayName : null;  // This gets the username if logged in
  }  

  // Logout function
  logout() {
    return this.auth.signOut();
  }
}
