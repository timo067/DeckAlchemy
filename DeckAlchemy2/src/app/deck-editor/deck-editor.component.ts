import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface Card {
  id: number;
  name: string;
  imageUrl: string;
}

interface Deck {
  name: string;
  cards: Card[];
}

@Component({
  selector: 'app-deck-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './deck-editor.component.html',
  styleUrls: ['./deck-editor.component.css'],
})
export class DeckEditorComponent {
  decks: Deck[] = []; // Now Deck has a proper type
  selectedDeck: Deck | null = null; // This is either a Deck or null
  allCards: Card[] = []; // Cards fetched from API
  searchTerm: string = '';
  loading: boolean = false;
  error: string | null = null;
  errorMessage: string = '';
  newDeckName: string = '';

  constructor(private http: HttpClient) {}

  createDeck(): void {
    if (!this.newDeckName.trim()) {
      alert('Please enter a deck name.');
      return;
    }

    const newDeck: Deck = { name: this.newDeckName, cards: [] };
    this.decks.push(newDeck);
    this.selectedDeck = newDeck;
    this.newDeckName = '';
  }

  selectDeck(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const selectedIndex = target.selectedIndex;
    
    if (selectedIndex !== -1) {
      this.selectedDeck = this.decks[selectedIndex];
      this.allCards = [];
    }
  }  
  

  searchCards(): void {
    if (!this.selectedDeck) {
      alert('Please select or create a deck first.');
      return;
    }

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

  addToDeck(card: Card): void {
    if (!this.selectedDeck) {
      alert('Please select a deck first.');
      return;
    }

    const cardCount = this.selectedDeck.cards.filter((c: Card) => c.id === card.id).length;

    if (cardCount < 3) {
      this.selectedDeck.cards.push(card);
      this.errorMessage = '';
    } else {
      this.errorMessage = `You can only add "${card.name}" up to 3 times.`;
    }
  }

  removeFromDeck(card: Card): void {
    if (this.selectedDeck) {
      this.selectedDeck.cards = this.selectedDeck.cards.filter((c: Card) => c.id !== card.id);
    }
  }
}
