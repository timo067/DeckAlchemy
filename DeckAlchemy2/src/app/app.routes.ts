import { Routes } from '@angular/router';
import { DeckEditorComponent } from './deck-editor/deck-editor.component'; // Import the DeckEditorComponent

export const appRoutes: Routes = [
  { path: 'default', component: DeckEditorComponent }, // Route for DeckEditor
  { path: '', redirectTo: '/default', pathMatch: 'full' }, // Redirect root to /default
  { path: '**', redirectTo: '/default' }, // Wildcard route for undefined paths
];
