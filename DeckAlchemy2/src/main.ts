import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { DefaultComponent } from './app/default/default.component';
import { DeckEditorComponent } from './app/deck-editor/deck-editor.component';
import { SimilarGameComponent } from './app/similar-game/similar-game.component';
import { LoginComponent } from './app/login/login.component';
import { importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes = [
  { path: '', component: LoginComponent },
  { path: 'default', component: DefaultComponent },
  { path: 'deck-editor', component: DeckEditorComponent },
  { path: 'similar-game', component: SimilarGameComponent }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(CommonModule, RouterModule)
  ]
}).catch(err => console.error(err));