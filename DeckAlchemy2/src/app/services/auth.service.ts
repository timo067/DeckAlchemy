import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // This makes the service available throughout your app
})
export class AuthService {
  // Mock list of logged-in accounts (in a real-world scenario, this data could come from an API or a token)
  private loggedInAccounts: string[] = [];

  constructor() {
    // Simulate logged-in users (you can replace this with actual logic based on your authentication method)
    this.loggedInAccounts = ['User1', 'User2', 'User3'];
  }

  // Method to get the list of logged-in accounts
  getLoggedInAccounts(): string[] {
    return this.loggedInAccounts;
  }

  // You can add more methods related to authentication here, like login, logout, etc.
  login(username: string): boolean {
    if (username) {
      this.loggedInAccounts.push(username);
      return true;
    }
    return false;
  }

  logout(username: string): boolean {
    const index = this.loggedInAccounts.indexOf(username);
    if (index !== -1) {
      this.loggedInAccounts.splice(index, 1);
      return true;
    }
    return false;
  }

  // Additional methods related to authentication can be added as needed
}
