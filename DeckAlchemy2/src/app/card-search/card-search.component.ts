import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface Card {
  id: number;
  name: string;
  imageUrl: string;
  type: string;
  desc: string;
  atk?: number;
  def?: number;
  level?: number;
  race: string;
  linkval?: number;
  scale?: number;
  archetype?: string;
}

@Component({
  selector: 'app-card-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.css'],
})
export class CardSearchComponent {
  allCards: Card[] = [];
  searchTerm: string = '';
  loading: boolean = false;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  searchCards(): void {
    if (!this.searchTerm.trim()) {
      this.error = 'Please enter a search term.';
      return;
    }

    this.loading = true;
    this.error = null;

    const apiUrl = `https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${encodeURIComponent(this.searchTerm)}`;

    this.http.get<any>(apiUrl).subscribe({
      next: (response) => {
        if (response && response.data) {
          this.allCards = response.data.map((card: any) => ({
            id: card.id,
            name: card.name,
            imageUrl: card.card_images[0]?.image_url || 'https://via.placeholder.com/150',
            type: card.type,
            desc: card.desc,
            atk: card.atk,
            def: card.def,
            level: card.level,
            race: card.race,
            scale: card.scale,
            archetype: card.archetype,
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
}
