import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; // Import LoginComponent
import { DeckEditorComponent } from './deck-editor/deck-editor.component'; // Import DeckEditorComponent
import { DefaultComponent } from './default/default.component'; // Import DefaultComponent

export const appRoutes: Routes = [
  { path: '', component: LoginComponent }, // Default route loads LoginComponent
  { path: 'default', component: DefaultComponent }, // Route for DefaultComponent
  { path: 'deck-editor', component: DeckEditorComponent }, // Route for DeckEditor
  { path: '**', redirectTo: '' }, // Wildcard route redirects to LoginComponent for undefined paths
];
