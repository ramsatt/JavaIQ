import { Component, inject, signal, computed, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonToolbar, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { DailyChallengeService } from '../daily-challenge.service';
import { GamificationService } from '../gamification.service';
import { DataService } from '../data.service';
import { AnalyticsService } from '../analytics.service';
import { Question } from '../data/question.model';

const XP_MULTIPLIER = 2;
const BASE_XP_PER_CORRECT = 10;
const TOTAL_QUESTIONS = 5;

@Component({
  selector: 'app-daily-challenge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonContent, IonHeader, IonToolbar, IonButtons, IonBackButton],
  template: `
    <ion-header class="ion-no-border">
      <ion-toolbar class="dc-toolbar">
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/tutorials" text="" color="light"></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="dc-content">

      <!-- Already done today -->
      @if (alreadyDone()) {
        <div class="dc-done-wrap">
          <div class="dc-done-card">
            <div class="done-emoji">✅</div>
            <h2 class="done-title">Already completed today!</h2>
            <p class="done-sub">Come back tomorrow for a fresh challenge.</p>
            <div class="done-countdown">
              <i class="fa-solid fa-clock"></i>
              Resets in {{ countdown() }}
            </div>
            <button class="dc-btn-primary" (click)="goBack()">Back to Learning</button>
          </div>
        </div>
      }

      <!-- Finished state -->
      @else if (finished()) {
        <div class="dc-result-wrap">
          <div class="dc-result-card">
            <div class="result-emoji">{{ resultEmoji() }}</div>
            <h2 class="result-title">Daily Challenge Done!</h2>
            <div class="result-score">{{ score() }} / {{ TOTAL_QUESTIONS }}</div>
            <div class="result-xp">
              <i class="fa-solid fa-bolt"></i>
              +{{ earnedXp() }} XP
              <span class="xp-badge">2× Bonus</span>
            </div>
            @if (gameService.dailyChallengeStreak() > 1) {
              <div class="result-streak">
                <i class="fa-solid fa-fire"></i>
                {{ gameService.dailyChallengeStreak() }}-day challenge streak!
              </div>
            }
            <button class="dc-btn-primary" (click)="goBack()">Done</button>
          </div>
        </div>
      }

      <!-- Loading -->
      @else if (dcService.loading()) {
        <div class="dc-loading">
          <div class="dc-spinner"></div>
          <p>Loading today's challenge...</p>
        </div>
      }

      <!-- Active challenge -->
      @else if (currentQuestion(); as q) {
        <div class="dc-wrap">

          <!-- Header -->
          <div class="dc-head">
            <div class="dc-head-left">
              <span class="dc-badge">
                <i class="fa-solid fa-bolt"></i> Daily Challenge · 2× XP
              </span>
              <p class="dc-date">{{ todayLabel() }}</p>
            </div>
            <div class="dc-progress-ring">
              <span class="progress-num">{{ currentIndex() + 1 }}</span>
              <span class="progress-denom">/ {{ TOTAL_QUESTIONS }}</span>
            </div>
          </div>

          <!-- Progress bar -->
          <div class="dc-prog-track">
            <div class="dc-prog-fill" [style.width.%]="progressPct()"></div>
          </div>

          <!-- Question Card -->
          <div class="dc-question-card">
            <p class="dc-question-text">{{ q.question }}</p>
            @if (q.asked_metadata) {
              <span class="dc-meta">{{ q.asked_metadata }}</span>
            }
          </div>

          <!-- Answer (revealed) -->
          @if (answerVisible()) {
            <div class="dc-answer-card">
              <div class="dc-answer-label">
                <i class="fa-solid fa-lightbulb"></i> Answer
              </div>
              <p class="dc-answer-text">{{ q.answer }}</p>
            </div>

            <div class="dc-vote-row">
              <button class="dc-vote-btn dc-vote-wrong" (click)="submit(false)">
                <i class="fa-solid fa-xmark"></i> Didn't know
              </button>
              <button class="dc-vote-btn dc-vote-correct" (click)="submit(true)">
                <i class="fa-solid fa-check"></i> Got it!
              </button>
            </div>
          } @else {
            <button class="dc-reveal-btn" (click)="reveal()">
              <i class="fa-solid fa-eye"></i>
              Reveal Answer
            </button>
          }

        </div>
      }

    </ion-content>
  `,
  styles: `
    .dc-toolbar { --background: #0b1120; --color: white; --border-style: none; }
    .dc-content  { --background: #0b1120; }

    /* Loading */
    .dc-loading {
      display: flex; flex-direction: column; align-items: center;
      justify-content: center; height: 60%; gap: 16px;
    }
    .dc-spinner {
      width: 40px; height: 40px;
      border: 3px solid rgba(245,158,11,0.15);
      border-top-color: #f59e0b;
      border-radius: 50%;
      animation: spin 0.9s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
    .dc-loading p { color: #64748b; font-size: 0.82rem; }

    /* Already done */
    .dc-done-wrap {
      display: flex; align-items: center; justify-content: center;
      min-height: 80vh; padding: 24px;
    }
    .dc-done-card {
      text-align: center; max-width: 360px;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 24px; padding: 40px 28px;
    }
    .done-emoji { font-size: 3rem; margin-bottom: 16px; }
    .done-title { font-size: 1.2rem; font-weight: 800; color: #e2e8f0; margin: 0 0 8px; }
    .done-sub   { font-size: 0.82rem; color: #64748b; margin: 0 0 20px; }
    .done-countdown {
      display: inline-flex; align-items: center; gap: 8px;
      font-size: 0.78rem; font-weight: 600; color: #f59e0b;
      background: rgba(245,158,11,0.1);
      border: 1px solid rgba(245,158,11,0.2);
      border-radius: 20px; padding: 8px 16px; margin-bottom: 24px;
    }

    /* Result */
    .dc-result-wrap {
      display: flex; align-items: center; justify-content: center;
      min-height: 80vh; padding: 24px;
    }
    .dc-result-card {
      text-align: center; max-width: 360px;
      background: rgba(245,158,11,0.05);
      border: 1px solid rgba(245,158,11,0.2);
      border-radius: 24px; padding: 40px 28px;
    }
    .result-emoji { font-size: 3.5rem; margin-bottom: 16px; }
    .result-title { font-size: 1.2rem; font-weight: 800; color: #e2e8f0; margin: 0 0 12px; }
    .result-score {
      font-size: 2.2rem; font-weight: 900; color: #f59e0b;
      letter-spacing: -0.04em; margin-bottom: 12px;
    }
    .result-xp {
      display: inline-flex; align-items: center; gap: 8px;
      font-size: 1.1rem; font-weight: 800; color: #fbbf24;
      margin-bottom: 12px;
    }
    .xp-badge {
      font-size: 0.6rem; font-weight: 800;
      background: rgba(245,158,11,0.2); color: #f59e0b;
      border: 1px solid rgba(245,158,11,0.35);
      border-radius: 6px; padding: 2px 8px;
    }
    .result-streak {
      font-size: 0.82rem; color: #f97316; font-weight: 700;
      margin-bottom: 20px;
    }

    /* Active challenge */
    .dc-wrap { padding: 20px 20px 100px; max-width: 540px; margin: 0 auto; }

    .dc-head {
      display: flex; align-items: flex-start; justify-content: space-between;
      margin-bottom: 16px;
    }
    .dc-badge {
      display: inline-flex; align-items: center; gap: 6px;
      font-size: 0.65rem; font-weight: 700; text-transform: uppercase;
      letter-spacing: 0.1em; color: #f59e0b;
      background: rgba(245,158,11,0.1); border: 1px solid rgba(245,158,11,0.25);
      border-radius: 20px; padding: 5px 12px; margin-bottom: 4px; display: flex;
    }
    .dc-date { font-size: 0.65rem; color: #475569; margin: 0; }
    .dc-progress-ring {
      display: flex; align-items: baseline; gap: 2px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 10px; padding: 6px 12px;
    }
    .progress-num { font-size: 1.3rem; font-weight: 900; color: #f59e0b; line-height: 1; }
    .progress-denom { font-size: 0.7rem; color: #64748b; }

    .dc-prog-track {
      height: 4px; background: rgba(255,255,255,0.06); border-radius: 2px;
      margin-bottom: 24px; overflow: hidden;
    }
    .dc-prog-fill {
      height: 100%; border-radius: 2px;
      background: linear-gradient(90deg, #f59e0b, #fbbf24);
      transition: width 0.4s ease;
    }

    .dc-question-card {
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 20px; padding: 24px; margin-bottom: 16px;
    }
    .dc-question-text {
      font-size: 1.05rem; font-weight: 700; color: #e2e8f0;
      line-height: 1.5; margin: 0 0 10px;
    }
    .dc-meta { font-size: 0.62rem; color: #475569; font-weight: 500; }

    .dc-answer-card {
      background: rgba(16,185,129,0.06);
      border: 1px solid rgba(16,185,129,0.2);
      border-radius: 16px; padding: 18px; margin-bottom: 16px;
    }
    .dc-answer-label {
      font-size: 0.6rem; font-weight: 700; text-transform: uppercase;
      letter-spacing: 0.1em; color: #10b981; margin-bottom: 8px;
      display: flex; align-items: center; gap: 6px;
    }
    .dc-answer-text { font-size: 0.88rem; color: #cbd5e1; line-height: 1.65; margin: 0; }

    .dc-vote-row { display: flex; gap: 12px; }
    .dc-vote-btn {
      flex: 1; padding: 14px;
      border: none; border-radius: 14px;
      font-size: 0.88rem; font-weight: 700;
      display: flex; align-items: center; justify-content: center; gap: 8px;
      cursor: pointer; transition: all 0.2s;
    }
    .dc-vote-wrong {
      background: rgba(239,68,68,0.1);
      color: #f87171;
      border: 1px solid rgba(239,68,68,0.2);
    }
    .dc-vote-wrong:hover { background: rgba(239,68,68,0.18); }
    .dc-vote-correct {
      background: rgba(16,185,129,0.12);
      color: #34d399;
      border: 1px solid rgba(16,185,129,0.25);
    }
    .dc-vote-correct:hover { background: rgba(16,185,129,0.2); }

    .dc-reveal-btn {
      width: 100%; padding: 16px;
      background: linear-gradient(135deg, #f59e0b, #d97706);
      border: none; border-radius: 16px;
      color: white; font-size: 0.92rem; font-weight: 700;
      display: flex; align-items: center; justify-content: center; gap: 10px;
      cursor: pointer; transition: all 0.2s;
      box-shadow: 0 4px 20px rgba(245,158,11,0.3);
    }
    .dc-reveal-btn:hover { box-shadow: 0 6px 28px rgba(245,158,11,0.4); transform: translateY(-1px); }

    .dc-btn-primary {
      width: 100%; padding: 14px;
      background: linear-gradient(135deg, #f59e0b, #d97706);
      border: none; border-radius: 14px;
      color: white; font-size: 0.9rem; font-weight: 700;
      cursor: pointer; transition: all 0.2s; margin-top: 20px;
      box-shadow: 0 4px 16px rgba(245,158,11,0.25);
    }
    .dc-btn-primary:hover { transform: translateY(-1px); }
  `
})
export class DailyChallengeComponent implements OnInit, OnDestroy {
  readonly TOTAL_QUESTIONS = TOTAL_QUESTIONS;

  dcService = inject(DailyChallengeService);
  gameService = inject(GamificationService);
  private dataService = inject(DataService);
  private analytics = inject(AnalyticsService);
  private router = inject(Router);

  questions = signal<Question[]>([]);
  currentIndex = signal(0);
  answerVisible = signal(false);
  finished = signal(false);
  alreadyDone = signal(false);
  score = signal(0);
  earnedXp = signal(0);

  currentQuestion = computed(() => this.questions()[this.currentIndex()] ?? null);
  progressPct = computed(() => ((this.currentIndex()) / TOTAL_QUESTIONS) * 100);
  resultEmoji = computed(() => {
    const s = this.score();
    if (s === TOTAL_QUESTIONS) return '🏆';
    if (s >= 3) return '🎉';
    return '💪';
  });

  async ngOnInit() {
    if (this.dcService.isCompletedToday()) {
      this.alreadyDone.set(true);
      return;
    }

    this.analytics.track('daily_challenge_started');
    await this.dcService.loadTodayChallenge();
    this.questions.set(this.dcService.getQuestionsForToday());
  }

  reveal() {
    this.answerVisible.set(true);
  }

  async submit(correct: boolean) {
    if (correct) {
      const xp = BASE_XP_PER_CORRECT * XP_MULTIPLIER;
      this.score.update(s => s + 1);
      this.earnedXp.update(v => v + xp);
      this.gameService.addXp(xp);
      this.dataService.markAsRevealed(this.currentQuestion()!.id);
    }

    this.answerVisible.set(false);

    if (this.currentIndex() + 1 >= TOTAL_QUESTIONS) {
      await this.complete();
    } else {
      this.currentIndex.update(i => i + 1);
    }
  }

  private async complete() {
    this.finished.set(true);
    this.gameService.updateDailyStreak();
    await this.dcService.markCompleted(this.earnedXp());
    this.analytics.track('daily_challenge_completed', {
      score: this.score(),
      xp_earned: this.earnedXp()
    });
  }

  countdown(): string {
    const now = new Date();
    const reset = new Date();
    reset.setDate(reset.getDate() + 1);
    reset.setHours(0, 0, 0, 0);
    const diff = reset.getTime() - now.getTime();
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    return `${h}h ${m}m`;
  }

  todayLabel(): string {
    return new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  }

  ngOnDestroy() {
    // Fire skipped event only if challenge was started but not finished
    if (!this.finished() && !this.alreadyDone() && this.currentIndex() > 0) {
      this.analytics.track('daily_challenge_skipped', {
        questions_seen: this.currentIndex(),
        score_so_far: this.score()
      });
    }
  }

  goBack() {
    this.router.navigate(['/tutorials']);
  }
}
