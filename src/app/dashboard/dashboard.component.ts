import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';

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

  challenges = [
    { name: 'Daily Challenge', qs: 3, icon: 'bi-clock-history', color: '#FF9100' },
    { name: 'Weekly Challenge', qs: 5, icon: 'bi-calendar-event', color: '#2979FF' },
    { name: 'Monthly Challenge', qs: 10, icon: 'bi-trophy', color: '#FFD600' }
  ];

  getQuestionCount(category: string): number {
    return this.dataService.getQuestions(category).length;
  }

  getCategoryProgress(category: string): number {
    return this.dataService.getProgress(category);
  }

  navigateToCategory(category: string) {
    this.router.navigate(['/practice', category]);
  }

  startChallenge(challenge: any) {
    // Navigate to challenge component (to be implemented)
    this.router.navigate(['/challenge', challenge.name]);
  }

  startRandomQuiz() {
    this.router.navigate(['/practice', 'All']);
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
