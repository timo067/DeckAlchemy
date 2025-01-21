import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { provideRouter } from '@angular/router';
import { DefaultComponent } from './app/default/default.component';
import { DeckEditorComponent } from './app/deck-editor/deck-editor.component';
import { SimilarGameComponent } from './app/similar-game/similar-game.component';

const routes = [
  { path: '', component: DefaultComponent },
  { path: 'default', component: DefaultComponent },
  { path: 'deck-editor', component: DeckEditorComponent },
  { path: 'similar-game', component: SimilarGameComponent }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule, FormsModule)
  ],
}).catch(err => console.error(err));
