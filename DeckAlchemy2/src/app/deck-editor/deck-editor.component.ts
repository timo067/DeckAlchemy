import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-deck-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './deck-editor.component.html',
  styleUrls: ['./deck-editor.component.css'],
})
export class DeckEditorComponent {
  allCards: any[] = []; // Cards fetched from the API
  deck: any[] = []; // Cards added to the user's deck
  searchTerm: string = ''; // Search input value
  loading: boolean = false; // Loading indicator
  error: string | null = null; // Error message

  constructor(private http: HttpClient) {}

  searchCards(): void {
    if (!this.searchTerm.trim()) {
      this.error = 'Please enter a search term.';
      return;
    }

    this.loading = true;
    this.error = null;

    const apiUrl = `https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${encodeURIComponent(
      this.searchTerm
    )}`;

    this.http.get<any>(apiUrl).subscribe({
      next: (response) => {
        if (response && response.data) {
          this.allCards = response.data.map((card: any) => ({
            id: card.id,
            name: card.name,
            imageUrl: card.card_images[0]?.image_url || 'https://via.placeholder.com/150',
          }));
        } else {
          this.allCards = [];
          this.error = 'No cards found.';
        }
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.error = 'An error occurred while fetching cards.';
        console.error(err);
      },
    });
  }

  errorMessage: string = '';

addToDeck(card: any): void {
  const cardCount = this.deck.filter((c) => c.id === card.id).length;

  if (cardCount < 3) {
    this.deck.push(card);
    this.errorMessage = ''; // Clear the error message if the card is added
  } else {
    this.errorMessage = `You can only add "${card.name}" up to 3 times.`;
  }
}

  

  removeFromDeck(card: any): void {
    this.deck = this.deck.filter((c) => c.id !== card.id);
  }
}
