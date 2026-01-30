import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlashcardListComponent } from './flashcard-list/flashcard-list.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'practice/:category', component: FlashcardListComponent },
  { path: '**', redirectTo: '' }
];
