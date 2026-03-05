import { Component, inject, signal, computed, ViewChild, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SearchModalComponent } from '../search-modal/search-modal.component';
import { IonContent, IonMenuButton } from '@ionic/angular/standalone';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';
import { GamificationService } from '../gamification.service';
import { DailyChallengeService } from '../daily-challenge.service';
import { StudyPlanService } from '../services/study-plan.service';
import { WrongAnswerService } from '../services/wrong-answer.service';
import { StreakCardComponent } from '../shared/streak-card.component';
import { QotdCardComponent } from '../shared/qotd-card.component';
import { ContinueLearningCardComponent } from '../shared/continue-learning-card.component';
import { DailyGoalCardComponent } from '../shared/daily-goal-card.component';
import { AchievementService } from '../services/achievement.service';
import { AlertService } from '../alert.service';

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
    DailyGoalCardComponent,
    SearchModalComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnDestroy {
  @ViewChild(SearchModalComponent) searchModal!: SearchModalComponent;
  private router = inject(Router);
  public dataService = inject(DataService);
  public authService = inject(AuthService);
  public gameService = inject(GamificationService);
  public achService = inject(AchievementService);
  public dcService   = inject(DailyChallengeService);
  public studyPlan   = inject(StudyPlanService);
  public wrongSvc    = inject(WrongAnswerService);
  private alertSvc   = inject(AlertService);

  showAllModules = signal(false);

  // Countdown to midnight for daily challenge reset
  dcCountdown = signal('--:--:--');
  private countdownTimer: ReturnType<typeof setInterval>;

  constructor() {
    this.updateCountdown();
    this.countdownTimer = setInterval(() => this.updateCountdown(), 1000);
  }

  ngOnDestroy() {
    clearInterval(this.countdownTimer);
  }

  private updateCountdown() {
    const now = new Date();
    const midnight = new Date(now);
    midnight.setDate(midnight.getDate() + 1);
    midnight.setHours(0, 0, 0, 0);
    const diff = midnight.getTime() - now.getTime();
    const h = Math.floor(diff / 3_600_000);
    const m = Math.floor((diff % 3_600_000) / 60_000);
    const s = Math.floor((diff % 60_000) / 1_000);
    this.dcCountdown.set(
      `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
    );
  }

  goToAchievements() { this.router.navigate(['/achievements']); }
  goToDailyChallenge() { this.router.navigate(['/daily-challenge']); }
  goToStudyPlan() { this.router.navigate(['/study-plan']); }
  goToMockInterview() { this.router.navigate(['/mock-interview']); }
  goToProgress()      { this.router.navigate(['/progress']); }
  goToReview()        { this.router.navigate(['/review']); }
  openSearch()        { this.searchModal?.open(); }

  overallPct = computed(() => {
    const total = this.dataService.getAllQuestionsStable().length;
    if (total === 0) return 0;
    return Math.round((this.dataService.revealedQuestionIds().size / total) * 100);
  });

  todayFocusCard = computed(() => {
    if (!this.dcService.isCompletedToday()) {
      return {
        label: 'Daily Challenge',
        desc: '5 Questions · +50 XP · 2× Bonus',
        icon: 'bi-lightning-charge-fill',
        color: '#f59e0b',
        bg: 'rgba(245,158,11,0.12)',
        action: 'daily-challenge'
      };
    }
    if (this.wrongSvc.reviewCount() > 0) {
      return {
        label: 'Review Queue',
        desc: `${this.wrongSvc.reviewCount()} question(s) to revisit · +5 XP each`,
        icon: 'bi-arrow-repeat',
        color: '#f87171',
        bg: 'rgba(239,68,68,0.08)',
        action: 'review'
      };
    }
    const pending = this.studyPlan.todayTasks().find(t => !this.studyPlan.isTaskDone(t.id));
    if (pending) {
      return {
        label: 'Study Plan',
        desc: "Continue today's tasks",
        icon: 'bi-calendar-check-fill',
        color: '#52b788',
        bg: 'rgba(82,183,136,0.08)',
        action: 'study-plan'
      };
    }
    return null;
  });

  focusAction(action: string) {
    if (action === 'daily-challenge') this.goToDailyChallenge();
    else if (action === 'review') this.goToReview();
    else if (action === 'study-plan') this.goToStudyPlan();
  }

  goToBookmarks() { this.router.navigate(['/bookmarks']); }

  unlockedAchievements(): number {
    return this.achService.achievements().filter(a => !!a.unlockedAt).length;
  }

  categories = [
    { name: 'Core Java', emoji: '☕', color: '#f97316' },
    { name: 'Spring Boot', emoji: '🌿', color: '#22c55e' },
    { name: 'Microservices', emoji: '🔗', color: '#38bdf8' },
    { name: 'Hibernate', emoji: '🗄️', color: '#a855f7' },
    { name: 'Spring Reactive', emoji: '⚡', color: '#eab308' },
    { name: 'Multithreading', emoji: '🧵', color: '#ec4899' },
    { name: 'Reactive Programming', emoji: '📡', color: '#fb923c' },
    { name: 'Coding Questions', emoji: '💻', color: '#10b981' },
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

  greeting(): string {
    const h = new Date().getHours();
    if (h < 12) return 'Good morning';
    if (h < 17) return 'Good afternoon';
    return 'Good evening';
  }

  visibleCategories = computed(() =>
    this.showAllModules() ? this.categories : this.categories.slice(0, 3)
  );

  login() {
    this.authService.loginWithGoogle();
  }

  async logout() {
    const confirmed = await this.alertSvc.confirm(
      'Are you sure you want to sign out?',
      'Sign Out'
    );
    if (confirmed) {
      this.authService.logout();
    }
  }
}
