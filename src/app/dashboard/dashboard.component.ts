import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';
import { GamificationService } from '../gamification.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  private router = inject(Router);
  public dataService = inject(DataService);
  public authService = inject(AuthService);
  public gameService = inject(GamificationService);

  categories = [
    { name: 'Core Java', icon: 'bi-cup-hot', color: '#FF5252' },
    { name: 'Spring Boot', icon: 'bi-flower1', color: '#69F0AE' },
    { name: 'Microservices', icon: 'bi-diagram-3', color: '#40C4FF' },
    { name: 'Hibernate', icon: 'bi-database', color: '#E040FB' },
    { name: 'Spring Reactive', icon: 'bi-lightning', color: '#FFD740' },
    { name: 'Multithreading', icon: 'bi-cpu', color: '#FF4081' },
    { name: 'Reactive Programming', icon: 'bi-broadcast', color: '#FF6E40' },
    { name: 'Coding Questions', icon: 'bi-code-slash', color: '#00E676' }
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
