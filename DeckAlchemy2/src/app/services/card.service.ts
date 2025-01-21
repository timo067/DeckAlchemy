import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private apiUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';

  constructor(private http: HttpClient) {}

  searchCards(query: string): Observable<any[]> {
    // Append the search query as a filter parameter if applicable
    const url = `${this.apiUrl}?fname=${query}`;
    return this.http.get<any[]>(url); // The API returns a JSON object
  }
}
