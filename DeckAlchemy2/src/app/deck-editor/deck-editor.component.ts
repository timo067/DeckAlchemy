import { Component } from '@angular/core';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-deck-editor',
  templateUrl: './deck-editor.component.html',
  styleUrls: ['./deck-editor.component.css'],
})
export class DeckEditorComponent {
  searchQuery: string = '';
  searchResults: any[] = [];
  isLoading: boolean = false;
  error: string | null = null;

  constructor(private cardService: CardService) {}

  searchCards() {
    if (!this.searchQuery.trim()) {
      this.error = 'Please enter a search term.';
      this.searchResults = [];
      return;
    }

    this.isLoading = true;
    this.error = null;

    this.cardService.searchCards(this.searchQuery).subscribe(
      (response: any) => {
        this.isLoading = false;
        this.searchResults = response.data || [];
        if (this.searchResults.length === 0) {
          this.error = 'No cards found.';
        }
      },
      (err) => {
        this.isLoading = false;
        this.error = 'An error occurred while fetching card data.';
        console.error(err);
      }
    );
  }
}
