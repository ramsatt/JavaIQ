import {
  Component, inject, signal, computed, ChangeDetectionStrategy
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonContent, IonHeader } from '@ionic/angular/standalone';
import { DataService } from '../../data.service';
import { GamificationService } from '../../gamification.service';
import { WrongAnswerService } from '../../services/wrong-answer.service';
import { DailyChallengeService } from '../../daily-challenge.service';
import { AchievementService } from '../../services/achievement.service';
import { AppHeaderComponent } from '../../shared/app-header.component';

// ── Constants ─────────────────────────────────────────────────────────────────

const CATEGORIES = [
  { name: 'Core Java', emoji: '☕', color: '#f97316' },
  { name: 'Spring Boot', emoji: '🌿', color: '#22c55e' },
  { name: 'Microservices', emoji: '🔗', color: '#38bdf8' },
  { name: 'Hibernate', emoji: '🗄️', color: '#a855f7' },
  { name: 'Multithreading', emoji: '🧵', color: '#ec4899' },
  { name: 'Spring Reactive', emoji: '⚡', color: '#eab308' },
  { name: 'Reactive Programming', emoji: '📡', color: '#fb923c' },
  { name: 'Coding Questions', emoji: '💻', color: '#10b981' },
];

// ── Component ─────────────────────────────────────────────────────────────────

@Component({
  selector: 'app-progress',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'ion-page' },
  standalone: true,
  imports: [CommonModule, IonContent, AppHeaderComponent, IonHeader],
  template: `
    <ion-header class="ion-no-border">
      <app-header></app-header>
    </ion-header>
    <ion-content class="pr-content">
      <div class="pr-body">

        <!-- Header -->
        <div class="pr-header">
          <button class="pr-back" (click)="back()">
            <i class="bi bi-arrow-left"></i>
          </button>
          <div>
            <h1 class="pr-title">My Progress</h1>
            <p class="pr-sub">Track your Java mastery journey</p>
          </div>
        </div>

        <!-- ── XP Hero ── -->
        <div class="pr-hero">
          <div class="pr-hero-left">
            <div class="pr-level-badge">
              <span class="pr-lv-num">{{ gameSvc.level() }}</span>
              <span class="pr-lv-lbl">Level</span>
            </div>
            <div class="pr-xp-info">
              <span class="pr-xp-val">{{ gameSvc.xp() | number:'1.0-0' }} XP</span>
              <span class="pr-xp-hint">{{ gameSvc.xpToNextLevel() | number:'1.0-0' }} XP to next level</span>
            </div>
          </div>
          <div class="pr-hero-right">
            <div class="pr-streak-ring" [class.pr-streak-active]="gameSvc.streak() > 0">
              <span class="pr-streak-icon">🔥</span>
              <span class="pr-streak-num">{{ gameSvc.streak() }}</span>
              <span class="pr-streak-lbl">day streak</span>
            </div>
          </div>
        </div>

        <!-- XP bar -->
        <div class="pr-xp-bar-wrap">
          <div class="pr-xp-track">
            <div class="pr-xp-fill" [style.width.%]="gameSvc.levelProgress()"></div>
          </div>
          <span class="pr-xp-pct">{{ gameSvc.levelProgress() | number:'1.0-0' }}%</span>
        </div>

        <!-- ── Stats Row ── -->
        <div class="pr-stats-row">
          <div class="pr-stat">
            <span class="pr-stat-num">{{ totalAnswered() }}</span>
            <span class="pr-stat-lbl">Answered</span>
          </div>
          <div class="pr-stat">
            <span class="pr-stat-num">{{ overallPct() }}%</span>
            <span class="pr-stat-lbl">Complete</span>
          </div>
          <div class="pr-stat">
            <span class="pr-stat-num">{{ unlockedAch() }}</span>
            <span class="pr-stat-lbl">Badges</span>
          </div>
          <div class="pr-stat">
            <span class="pr-stat-num pr-dc-done" [class.pr-dc-yes]="dcService.isCompletedToday()">
              {{ dcService.isCompletedToday() ? '✓' : '—' }}
            </span>
            <span class="pr-stat-lbl">Daily Done</span>
          </div>
        </div>

        <!-- ── 7-Day Activity ── -->
        <div class="pr-section">
          <span class="pr-section-label">Last 7 Days</span>
          <div class="pr-week-grid">
            @for (day of weekDays(); track day.label) {
              <div class="pr-day-col">
                <div class="pr-day-dot"
                  [class.pr-day-active]="day.active"
                  [class.pr-day-today]="day.isToday">
                </div>
                <span class="pr-day-label">{{ day.label }}</span>
              </div>
            }
          </div>
        </div>

        <!-- ── Category Mastery ── -->
        <div class="pr-section">
          <span class="pr-section-label">Category Mastery</span>
          <div class="pr-cat-list">
            @for (cat of categories; track cat.name) {
              <div class="pr-cat-row" (click)="goToCategory(cat.name)">
                <div class="pr-cat-icon" [style.background]="cat.color + '22'">
                  <span>{{ cat.emoji }}</span>
                </div>
                <div class="pr-cat-info">
                  <div class="pr-cat-name-row">
                    <span class="pr-cat-name">{{ cat.name }}</span>
                    <div class="pr-cat-stars">
                      @for (s of [1,2,3]; track s) {
                        <span [style.color]="getStars(cat.name) >= s ? '#f59e0b' : '#334155'">★</span>
                      }
                    </div>
                  </div>
                  <div class="pr-cat-bar-row">
                    <div class="pr-cat-track">
                      <div class="pr-cat-fill"
                        [style.width.%]="getPct(cat.name)"
                        [style.background]="cat.color">
                      </div>
                    </div>
                    <span class="pr-cat-pct">{{ getPct(cat.name) }}%</span>
                  </div>
                </div>
                <i class="bi bi-chevron-right pr-cat-arrow"></i>
              </div>
            }
          </div>
        </div>

        <!-- ── Weak Areas ── -->
        @if (weakQuestions().length > 0) {
          <div class="pr-section">
            <div class="pr-section-head-row">
              <span class="pr-section-label">Weak Areas</span>
              <span class="pr-section-count">{{ weakQuestions().length }} to review</span>
            </div>

            <div class="pr-weak-list">
              @for (q of weakQuestions().slice(0, 5); track q.id) {
                <div class="pr-weak-card" (click)="goToCategory(q.category)">
                  <div class="pr-weak-left">
                    <span class="pr-weak-cat">{{ q.category }}</span>
                    <p class="pr-weak-q">{{ q.question }}</p>
                  </div>
                  <div class="pr-weak-badge">
                    <i class="bi bi-arrow-repeat"></i>
                  </div>
                </div>
              }

              @if (weakQuestions().length > 5) {
                <button class="pr-show-more" (click)="showAllWeak.set(!showAllWeak())">
                  {{ showAllWeak() ? 'Show Less' : 'Show ' + (weakQuestions().length - 5) + ' More' }}
                </button>
              }

              @if (showAllWeak()) {
                @for (q of weakQuestions().slice(5); track q.id) {
                  <div class="pr-weak-card" (click)="goToCategory(q.category)">
                    <div class="pr-weak-left">
                      <span class="pr-weak-cat">{{ q.category }}</span>
                      <p class="pr-weak-q">{{ q.question }}</p>
                    </div>
                    <div class="pr-weak-badge">
                      <i class="bi bi-arrow-repeat"></i>
                    </div>
                  </div>
                }
              }
            </div>
          </div>
        } @else {
          <div class="pr-no-weak">
            <span class="pr-no-weak-icon">🎯</span>
            <span class="pr-no-weak-txt">No weak areas — great work!</span>
          </div>
        }

      </div>
    </ion-content>
  `,
  styles: `
    .pr-content { --background: #0b1120; }

    .pr-body {
      padding: 24px 20px 60px;
      max-width: 540px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    /* Header */
    .pr-header {
      display: flex; align-items: flex-start; gap: 14px;
    }
    .pr-back {
      width: 38px; height: 38px;
      border-radius: 10px;
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.08);
      color: #94a3b8;
      display: flex; align-items: center; justify-content: center;
      font-size: 1rem; cursor: pointer; flex-shrink: 0; margin-top: 4px;
    }
    .pr-title { font-size: 1.7rem; font-weight: 900; color: #e2e8f0; letter-spacing: -0.03em; margin: 0 0 4px; }
    .pr-sub   { font-size: 0.78rem; color: #64748b; margin: 0; }

    /* XP Hero */
    .pr-hero {
      display: flex; justify-content: space-between; align-items: center;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 18px;
      padding: 20px;
    }
    .pr-hero-left  { display: flex; align-items: center; gap: 14px; }
    .pr-level-badge {
      width: 56px; height: 56px;
      border-radius: 50%;
      background: linear-gradient(135deg, #6366f1, #8b5cf6);
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      box-shadow: 0 0 20px rgba(99,102,241,0.3);
    }
    .pr-lv-num { font-size: 1.3rem; font-weight: 900; color: white; line-height: 1; }
    .pr-lv-lbl { font-size: 0.5rem; font-weight: 700; color: rgba(255,255,255,0.7); text-transform: uppercase; letter-spacing: 0.08em; }
    .pr-xp-val  { display: block; font-size: 1.05rem; font-weight: 800; color: #e2e8f0; }
    .pr-xp-hint { display: block; font-size: 0.68rem; color: #64748b; margin-top: 2px; }

    .pr-streak-ring {
      width: 72px; height: 72px;
      border-radius: 50%;
      border: 3px solid rgba(255,255,255,0.07);
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      gap: 1px;
      transition: border-color 0.3s;
    }
    .pr-streak-active { border-color: #f97316; box-shadow: 0 0 16px rgba(249,115,22,0.25); }
    .pr-streak-icon { font-size: 1.3rem; line-height: 1; }
    .pr-streak-num  { font-size: 1rem; font-weight: 900; color: #e2e8f0; line-height: 1; }
    .pr-streak-lbl  { font-size: 0.5rem; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.06em; }

    /* XP bar */
    .pr-xp-bar-wrap { display: flex; align-items: center; gap: 10px; }
    .pr-xp-track {
      flex: 1; height: 8px; border-radius: 4px;
      background: rgba(255,255,255,0.07);
    }
    .pr-xp-fill {
      height: 100%; border-radius: 4px;
      background: linear-gradient(90deg, #6366f1, #8b5cf6);
      transition: width 0.5s cubic-bezier(0.4,0,0.2,1);
    }
    .pr-xp-pct { font-size: 0.72rem; font-weight: 700; color: #64748b; min-width: 36px; text-align: right; }

    /* Stats row */
    .pr-stats-row { display: flex; gap: 10px; }
    .pr-stat {
      flex: 1;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 14px;
      padding: 12px 6px;
      display: flex; flex-direction: column; align-items: center; gap: 3px;
    }
    .pr-stat-num  { font-size: 1.3rem; font-weight: 900; color: #e2e8f0; }
    .pr-stat-lbl  { font-size: 0.6rem; font-weight: 600; color: #64748b; text-align: center; }
    .pr-dc-yes    { color: #10b981 !important; }

    /* Sections */
    .pr-section { display: flex; flex-direction: column; gap: 12px; }
    .pr-section-label {
      font-size: 0.6rem; font-weight: 800;
      text-transform: uppercase; letter-spacing: 0.12em;
      color: #475569;
    }
    .pr-section-head-row { display: flex; justify-content: space-between; align-items: center; }
    .pr-section-count { font-size: 0.72rem; font-weight: 600; color: #f87171; }

    /* 7-day grid */
    .pr-week-grid {
      display: flex; justify-content: space-between; gap: 4px;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 14px;
      padding: 16px 20px;
    }
    .pr-day-col { display: flex; flex-direction: column; align-items: center; gap: 6px; }
    .pr-day-dot {
      width: 28px; height: 28px;
      border-radius: 8px;
      background: rgba(255,255,255,0.05);
      border: 1.5px solid rgba(255,255,255,0.07);
      transition: all 0.2s;
    }
    .pr-day-active { background: rgba(16,185,129,0.25) !important; border-color: #10b981 !important; }
    .pr-day-today  { border-color: #6366f1 !important; box-shadow: 0 0 8px rgba(99,102,241,0.35); }
    .pr-day-active.pr-day-today { background: rgba(99,102,241,0.3) !important; border-color: #818cf8 !important; }
    .pr-day-label  { font-size: 0.58rem; font-weight: 600; color: #475569; }

    /* Category list */
    .pr-cat-list { display: flex; flex-direction: column; gap: 8px; }
    .pr-cat-row {
      display: flex; align-items: center; gap: 12px;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 14px;
      padding: 12px 14px;
      cursor: pointer;
      transition: background 0.18s;
    }
    .pr-cat-row:hover { background: rgba(255,255,255,0.055); }
    .pr-cat-icon {
      width: 36px; height: 36px;
      border-radius: 10px;
      display: flex; align-items: center; justify-content: center;
      font-size: 1rem; flex-shrink: 0;
    }
    .pr-cat-info { flex: 1; display: flex; flex-direction: column; gap: 6px; min-width: 0; }
    .pr-cat-name-row { display: flex; align-items: center; justify-content: space-between; }
    .pr-cat-name   { font-size: 0.82rem; font-weight: 700; color: #e2e8f0; }
    .pr-cat-stars  { font-size: 0.75rem; letter-spacing: 1px; }
    .pr-cat-bar-row { display: flex; align-items: center; gap: 8px; }
    .pr-cat-track {
      flex: 1; height: 5px; border-radius: 3px;
      background: rgba(255,255,255,0.07);
    }
    .pr-cat-fill { height: 100%; border-radius: 3px; transition: width 0.5s ease; }
    .pr-cat-pct  { font-size: 0.65rem; font-weight: 700; color: #64748b; min-width: 28px; text-align: right; }
    .pr-cat-arrow { font-size: 0.65rem; color: #334155; flex-shrink: 0; }

    /* Weak areas */
    .pr-weak-list { display: flex; flex-direction: column; gap: 8px; }
    .pr-weak-card {
      display: flex; align-items: center; gap: 12px;
      background: rgba(239,68,68,0.05);
      border: 1px solid rgba(239,68,68,0.12);
      border-radius: 14px;
      padding: 12px 14px;
      cursor: pointer;
      transition: background 0.18s;
    }
    .pr-weak-card:hover { background: rgba(239,68,68,0.1); }
    .pr-weak-left { flex: 1; display: flex; flex-direction: column; gap: 4px; min-width: 0; }
    .pr-weak-cat {
      font-size: 0.6rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em;
      color: #f87171;
    }
    .pr-weak-q {
      font-size: 0.8rem; color: #cbd5e1;
      line-height: 1.4; margin: 0;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .pr-weak-badge {
      width: 30px; height: 30px;
      border-radius: 8px;
      background: rgba(239,68,68,0.12);
      color: #f87171;
      display: flex; align-items: center; justify-content: center;
      font-size: 0.85rem; flex-shrink: 0;
    }
    .pr-show-more {
      width: 100%; padding: 10px;
      border-radius: 10px;
      background: transparent;
      border: 1px dashed rgba(255,255,255,0.1);
      color: #64748b;
      font-size: 0.78rem; font-weight: 600;
      cursor: pointer;
      transition: all 0.18s;
    }
    .pr-show-more:hover { background: rgba(255,255,255,0.04); color: #94a3b8; }

    /* No weak areas */
    .pr-no-weak {
      display: flex; align-items: center; justify-content: center; gap: 10px;
      padding: 20px;
      background: rgba(16,185,129,0.05);
      border: 1px solid rgba(16,185,129,0.12);
      border-radius: 14px;
    }
    .pr-no-weak-icon { font-size: 1.2rem; }
    .pr-no-weak-txt  { font-size: 0.82rem; font-weight: 600; color: #34d399; }

    /* Light mode overrides */
    :host-context(html:not(.dark)) .pr-content { --background: #f8fafc; }
    :host-context(html:not(.dark)) .pr-title { color: #0f172a; }
    :host-context(html:not(.dark)) .pr-sub   { color: #64748b; }
    :host-context(html:not(.dark)) .pr-hero,
    :host-context(html:not(.dark)) .pr-stat,
    :host-context(html:not(.dark)) .pr-week-grid,
    :host-context(html:not(.dark)) .pr-cat-row {
      background: #fff; border-color: #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,0.05);
    }
    :host-context(html:not(.dark)) .pr-cat-row:hover { background: #f1f5f9; }
    :host-context(html:not(.dark)) .pr-cat-name { color: #0f172a; }
    :host-context(html:not(.dark)) .pr-weak-q   { color: #334155; }
    :host-context(html:not(.dark)) .pr-xp-val,
    :host-context(html:not(.dark)) .pr-streak-num,
    :host-context(html:not(.dark)) .pr-stat-num { color: #0f172a; }
    :host-context(html:not(.dark)) .pr-cat-track { background: #e2e8f0; }
    :host-context(html:not(.dark)) .pr-day-dot { background: #f1f5f9; border-color: #e2e8f0; }
  `
})
export class ProgressComponent {
  private router = inject(Router);
  gameSvc = inject(GamificationService);
  dataSvc = inject(DataService);
  wrongSvc = inject(WrongAnswerService);
  dcService = inject(DailyChallengeService);
  achSvc = inject(AchievementService);

  readonly categories = CATEGORIES;

  // ── Signal-derived stats ───────────────────────────────────────────────────

  totalAnswered = computed(() => this.dataSvc.revealedQuestionIds().size);

  overallPct = computed(() => {
    const total = this.dataSvc.getAllQuestionsStable().length;
    if (total === 0) return 0;
    return Math.round((this.totalAnswered() / total) * 100);
  });

  unlockedAch = computed(() =>
    this.achSvc.achievements().filter(a => !!a.unlockedAt).length
  );

  weakQuestions = computed(() =>
    this.wrongSvc.filterReviewQuestions(this.dataSvc.getAllQuestionsStable())
  );

  showAllWeak = signal(false);

  /** Last 7 days activity derived from streak + lastActiveDate */
  weekDays = computed(() => {
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];
    const lastActive = this.gameSvc.lastActiveDate();
    const streak = this.gameSvc.streak();

    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(today);
      d.setDate(today.getDate() - (6 - i));
      const dateStr = d.toISOString().split('T')[0];
      const isToday = dateStr === todayStr;

      // A day is "active" if it falls within the current streak window
      let active = false;
      if (lastActive && streak > 0) {
        const lastDate = new Date(lastActive);
        const diffMs = lastDate.getTime() - d.getTime();
        const diffDays = Math.round(diffMs / 86_400_000);
        active = diffDays >= 0 && diffDays < streak;
      }

      const labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      return { label: labels[d.getDay()], active, isToday };
    });
  });

  // ── Template helpers ───────────────────────────────────────────────────────

  getPct(category: string) { return this.dataSvc.getProgress(category); }
  getStars(category: string) { return this.dataSvc.getCategoryStars(category); }

  goToCategory(category: string) {
    this.router.navigate(['/challenge', category]);
  }

  back() { this.router.navigate(['/dashboard']); }
}
