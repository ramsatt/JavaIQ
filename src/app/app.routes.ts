import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlashcardListComponent } from './flashcard-list/flashcard-list.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'practice/:category', component: FlashcardListComponent },
  { path: 'challenge/:type', component: ChallengeComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: '**', redirectTo: '' }
];
