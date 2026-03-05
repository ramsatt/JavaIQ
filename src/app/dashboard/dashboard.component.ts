import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonContent, IonMenuButton } from '@ionic/angular/standalone';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';
import { GamificationService } from '../gamification.service';
import { StreakCardComponent } from '../shared/streak-card.component';
import { QotdCardComponent } from '../shared/qotd-card.component';
import { ContinueLearningCardComponent } from '../shared/continue-learning-card.component';
import { DailyGoalCardComponent } from '../shared/daily-goal-card.component';
import { AchievementService } from '../services/achievement.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  host: { 'class': 'ion-page' },
  imports: [
    CommonModule,
    IonContent,
    IonMenuButton,
    StreakCardComponent,
    QotdCardComponent,
    ContinueLearningCardComponent,
    DailyGoalCardComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  private router = inject(Router);
  public dataService   = inject(DataService);
  public authService   = inject(AuthService);
  public gameService   = inject(GamificationService);
  public achService    = inject(AchievementService);

  goToAchievements() { this.router.navigate(['/achievements']); }

  unlockedAchievements(): number {
    return this.achService.achievements().filter(a => !!a.unlockedAt).length;
  }

  categories = [
    { name: 'Core Java',           emoji: '☕', color: '#f97316' },
    { name: 'Spring Boot',         emoji: '🌿', color: '#22c55e' },
    { name: 'Microservices',       emoji: '🔗', color: '#38bdf8' },
    { name: 'Hibernate',           emoji: '🗄️', color: '#a855f7' },
    { name: 'Spring Reactive',     emoji: '⚡', color: '#eab308' },
    { name: 'Multithreading',      emoji: '🧵', color: '#ec4899' },
    { name: 'Reactive Programming',emoji: '📡', color: '#fb923c' },
    { name: 'Coding Questions',    emoji: '💻', color: '#10b981' },
  ];

  getQuestionCount(category: string): number {
    return this.dataService.getQuestions(category).length;
  }

  getCategoryProgress(category: string): number {
    return this.dataService.getProgress(category);
  }

  getCategoryStars(category: string): number {
    return this.dataService.getCategoryStars(category);
  }

  isLocked(category: string): boolean {
    return this.dataService.isCategoryLocked(category);
  }

  navigateToCategory(category: string) {
    if (this.isLocked(category)) return;
    // Route to Challenge Component for the "Game" experience
    this.router.navigate(['/challenge', category]);
  }

  goToLeaderboard() {
    this.router.navigate(['/leaderboard']);
  }

  login() {
    this.authService.loginWithGoogle();
  }

  logout() {
    this.authService.logout();
  }
}
