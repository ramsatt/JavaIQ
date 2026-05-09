import {
  Component, inject, signal, computed, ChangeDetectionStrategy
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';
import { DataService } from '../../data.service';
import { WrongAnswerService } from '../../services/wrong-answer.service';
import { GamificationService } from '../../gamification.service';
import { AnalyticsService } from '../../analytics.service';
import { AiExplanationService } from '../../core/ai-explanation.service';
import { Question } from '../../data/question.model';

// ── Types ─────────────────────────────────────────────────────────────────────

type Phase = 'empty' | 'session' | 'complete';

// ── Component ─────────────────────────────────────────────────────────────────

@Component({
  selector: 'app-review',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'ion-page' },
  standalone: true,
  imports: [CommonModule, IonContent],
  template: `
    <ion-content class="rv-content">
      <div class="rv-wrap">

        <!-- Back button always visible -->
        <button class="rv-back" (click)="back()">
          <i class="bi bi-arrow-left"></i>
        </button>

        <!-- ── EMPTY STATE ── -->
        @if (phase() === 'empty') {
          <div class="rv-center">
            <div class="rv-empty-icon">🎯</div>
            <h1 class="rv-empty-title">All caught up!</h1>
            <p class="rv-empty-sub">
              You have no questions in your review queue.<br>
              Missed answers from challenges and mock interviews appear here.
            </p>
            <button class="rv-cta-btn" (click)="router.navigate(['/daily-challenge'])">Practice Now</button>
          </div>
        }

        <!-- ── SESSION ── -->
        @if (phase() === 'session') {
          <div class="rv-session">

            <!-- Header -->
            <div class="rv-session-head">
              <div class="rv-progress-info">
                <span class="rv-prog-num">{{ currentIdx() + 1 }} / {{ queue().length }}</span>
                <span class="rv-cleared-badge">{{ clearedThisSession() }} cleared</span>
              </div>
              <div class="rv-prog-track">
                <div class="rv-prog-fill"
                  [style.width.%]="((currentIdx() + 1) / queue().length) * 100">
                </div>
              </div>
            </div>

            <!-- Flip card -->
            <div class="rv-card-wrap" [class.rv-flipped]="answerVisible()">

              <!-- Front: question -->
              <div class="rv-card rv-card-front">
                <span class="rv-card-cat">{{ currentQ()!.category }}</span>
                <p class="rv-card-q">{{ currentQ()!.question }}</p>
                @if (currentQ()!.code) {
                  <pre class="rv-card-code"><code>{{ currentQ()!.code }}</code></pre>
                }
              </div>

              <!-- Back: answer -->
              <div class="rv-card rv-card-back">
                <span class="rv-card-cat rv-cat-answer">ANSWER</span>
                <p class="rv-card-a">{{ currentQ()!.answer }}</p>
              </div>

            </div>

            <!-- Action area -->
            @if (!answerVisible()) {
              <button class="rv-reveal-btn" (click)="reveal()">
                <i class="bi bi-eye"></i> Reveal Answer
              </button>
            } @else {
              <!-- AI explanation panel (Pro/trial only) -->
              <div class="rv-ai-wrap">
                @if (aiSvc.loading() === currentQ()!.id) {
                  <div class="rv-ai-loading">
                    <i class="bi bi-stars rv-ai-icon"></i>
                    <span>Generating explanation…</span>
                  </div>
                } @else if (explanation()) {
                  <div class="rv-ai-panel">
                    <span class="rv-ai-label"><i class="bi bi-stars"></i> AI Explanation</span>
                    <p class="rv-ai-text">{{ explanation() }}</p>
                  </div>
                } @else if (aiSvc.lastError() === 'pro_required') {
                  <div class="rv-ai-upgrade">
                    <i class="bi bi-stars rv-ai-icon"></i>
                    <span>Upgrade to Pro for AI explanations</span>
                  </div>
                } @else {
                  <button class="rv-ai-btn" (click)="fetchExplanation()">
                    <i class="bi bi-stars"></i> Why is this correct?
                  </button>
                }
              </div>

              <div class="rv-verdict-row">
                <button class="rv-verdict rv-still-learning" (click)="grade(0)">
                  <i class="bi bi-arrow-repeat"></i>
                  Still Learning
                </button>
                <button class="rv-verdict rv-hard" (click)="grade(2)">
                  <i class="bi bi-exclamation-circle"></i>
                  Hard
                </button>
                <button class="rv-verdict rv-got-it" (click)="grade(5)">
                  <i class="bi bi-check-lg"></i>
                  Got It!
                </button>
              </div>
              <p class="rv-hint">
                "Got It!" schedules next review · "Still Learning" requeues for tomorrow
              </p>
            }

          </div>
        }

        <!-- ── COMPLETE ── -->
        @if (phase() === 'complete') {
          <div class="rv-center">
            <div class="rv-complete-ring"
              [style.border-color]="clearedThisSession() === startCount() ? '#10b981' : '#6366f1'">
              <span class="rv-complete-num">{{ clearedThisSession() }}</span>
              <span class="rv-complete-lbl">cleared</span>
            </div>

            <h1 class="rv-empty-title" style="margin-top:20px">
              @if (clearedThisSession() === startCount()) {
                Queue cleared!
              } @else {
                Session complete
              }
            </h1>
            <p class="rv-empty-sub">
              {{ clearedThisSession() }} of {{ startCount() }} cards cleared ·
              <strong style="color:#f59e0b">+{{ earnedXp() }} XP</strong>
            </p>

            @if (wrongSvc.reviewCount() > 0) {
              <button class="rv-cta-btn" (click)="restart()">
                Review {{ wrongSvc.reviewCount() }} Remaining
              </button>
            } @else {
              <button class="rv-cta-btn rv-cta-green" (click)="back()">
                All Done!
              </button>
            }
            <button class="rv-link-btn" (click)="back()">Back to Dashboard</button>
          </div>
        }

      </div>
    </ion-content>
  `,
  styles: `
    .rv-content { --background: var(--ion-background-color, #0b1120); --padding-start: 0; --padding-end: 0; }

    .rv-wrap {
      min-height: 100%;
      display: flex;
      flex-direction: column;
      padding: 56px clamp(16px, 4vw, 64px) 40px;
    }

    @media (min-width: 640px) {
      .rv-wrap { padding: 56px clamp(24px, 5vw, 72px) 40px; }
    }
    @media (min-width: 1024px) {
      .rv-wrap { padding: 56px clamp(32px, 5vw, 80px) 40px; }
    }
    @media (min-width: 1440px) {
      .rv-wrap { padding: 56px clamp(48px, 6vw, 96px) 40px; }
    }

    /* Back button */
    .rv-back {
      position: absolute;
      top: 16px; left: 20px;
      width: 38px; height: 38px;
      border-radius: 10px;
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.08);
      color: #94a3b8;
      display: flex; align-items: center; justify-content: center;
      font-size: 1rem; cursor: pointer;
    }

    /* ── EMPTY / COMPLETE CENTER ── */
    .rv-center {
      flex: 1;
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      text-align: center; gap: 16px; padding: 20px;
    }
    .rv-empty-icon { font-size: 3.5rem; }
    .rv-empty-title {
      font-size: 1.6rem; font-weight: 900; color: #e2e8f0;
      letter-spacing: -0.03em; margin: 0;
    }
    .rv-empty-sub { font-size: 0.82rem; color: #64748b; line-height: 1.6; margin: 0; max-width: 280px; }

    .rv-complete-ring {
      width: 100px; height: 100px;
      border-radius: 50%;
      border: 4px solid #40916C;
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      gap: 2px;
    }
    .rv-complete-num { font-size: 2rem; font-weight: 900; color: #e2e8f0; line-height: 1; }
    .rv-complete-lbl { font-size: 0.6rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #64748b; }

    .rv-cta-btn {
      padding: 14px 32px;
      border-radius: 14px;
      background: linear-gradient(135deg, #1B4332, #40916C);
      border: none;
      color: white;
      font-size: 0.95rem; font-weight: 700;
      cursor: pointer;
      box-shadow: 0 4px 20px rgba(27,67,50,0.4);
      transition: all 0.2s;
    }
    .rv-cta-btn:hover { transform: translateY(-1px); box-shadow: 0 6px 28px rgba(27,67,50,0.5); }
    .rv-cta-green { background: linear-gradient(135deg, #10b981, #059669) !important; box-shadow: 0 4px 20px rgba(16,185,129,0.35) !important; }
    .rv-link-btn {
      background: transparent; border: none;
      color: #475569; font-size: 0.82rem; font-weight: 600; cursor: pointer;
    }

    /* ── SESSION ── */
    .rv-session {
      flex: 1; display: flex; flex-direction: column; gap: 20px; padding-top: 32px;
    }

    .rv-session-head { display: flex; flex-direction: column; gap: 8px; }
    .rv-progress-info { display: flex; justify-content: space-between; align-items: center; }
    .rv-prog-num { font-size: 0.78rem; font-weight: 700; color: #64748b; }
    .rv-cleared-badge {
      font-size: 0.68rem; font-weight: 700;
      color: #10b981;
      background: rgba(16,185,129,0.1);
      padding: 3px 10px; border-radius: 10px;
    }
    .rv-prog-track {
      height: 4px; border-radius: 2px;
      background: rgba(255,255,255,0.07);
    }
    .rv-prog-fill {
      height: 100%; border-radius: 2px;
      background: linear-gradient(90deg, #1B4332, #40916C);
      transition: width 0.4s ease;
    }

    /* Flip card */
    .rv-card-wrap {
      flex: 1;
      min-height: 260px;
      position: relative;
      perspective: 1200px;
    }
    .rv-card {
      position: absolute; inset: 0;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
      border-radius: 20px;
      padding: 24px;
      display: flex; flex-direction: column; gap: 14px;
      transition: transform 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.3s;
    }
    .rv-card-front {
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.09);
      transform: rotateY(0deg);
      opacity: 1;
    }
    .rv-card-back {
      background: rgba(99,102,241,0.07);
      border: 1px solid rgba(99,102,241,0.2);
      transform: rotateY(180deg);
      opacity: 0;
    }
    .rv-flipped .rv-card-front { transform: rotateY(-180deg); opacity: 0; }
    .rv-flipped .rv-card-back  { transform: rotateY(0deg);    opacity: 1; }

    .rv-card-cat {
      font-size: 0.6rem; font-weight: 800;
      text-transform: uppercase; letter-spacing: 0.12em;
      color: #818cf8;
      background: rgba(99,102,241,0.1);
      padding: 3px 10px; border-radius: 8px;
      align-self: flex-start;
    }
    .rv-cat-answer { color: #10b981; background: rgba(16,185,129,0.1); }
    .rv-card-q {
      font-size: 1rem; font-weight: 600; color: #e2e8f0;
      line-height: 1.6; margin: 0; flex: 1;
    }
    .rv-card-a {
      font-size: 0.88rem; color: #cbd5e1;
      line-height: 1.65; margin: 0; flex: 1;
    }
    .rv-card-code {
      background: rgba(0,0,0,0.3);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 10px;
      padding: 10px 12px;
      font-size: 0.7rem; color: #93c5fd;
      overflow-x: auto; white-space: pre-wrap;
      word-break: break-word; margin: 0;
    }

    /* Reveal / verdict */
    .rv-reveal-btn {
      display: flex; align-items: center; justify-content: center; gap: 8px;
      padding: 14px;
      border-radius: 14px;
      background: rgba(255,255,255,0.05);
      border: 1.5px dashed rgba(255,255,255,0.15);
      color: #94a3b8;
      font-size: 0.9rem; font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }
    .rv-reveal-btn:hover { background: rgba(99,102,241,0.12); color: #a5b4fc; border-color: rgba(99,102,241,0.3); }

    .rv-verdict-row { display: flex; gap: 12px; }
    .rv-verdict {
      flex: 1; padding: 14px;
      border-radius: 14px;
      border: none;
      font-size: 0.9rem; font-weight: 700;
      display: flex; align-items: center; justify-content: center; gap: 8px;
      cursor: pointer;
      transition: all 0.2s;
    }
    .rv-hard {
      border-color: rgba(245,158,11,0.35);
      color: #f59e0b;
      flex: 1;
    }
    .rv-hard:hover { background: rgba(245,158,11,0.12); }
    .rv-still-learning {
      background: rgba(100,116,139,0.12);
      color: #94a3b8;
      border: 1px solid rgba(100,116,139,0.2);
    }
    .rv-still-learning:hover { background: rgba(100,116,139,0.2); }
    .rv-got-it {
      background: rgba(16,185,129,0.14);
      color: #34d399;
      border: 1px solid rgba(16,185,129,0.3);
      box-shadow: 0 0 16px rgba(16,185,129,0.15);
    }
    .rv-got-it:hover { background: rgba(16,185,129,0.22); }
    .rv-hint {
      font-size: 0.68rem; color: #475569;
      text-align: center; margin: 0;
    }

    /* ── AI Explanation ── */
    .rv-ai-wrap { margin-bottom: 14px; }
    .rv-ai-btn {
      width: 100%; padding: 10px 16px; border-radius: 12px;
      border: 1.5px solid rgba(139,92,246,0.35);
      background: rgba(139,92,246,0.08); color: #a78bfa;
      font-size: 0.82rem; font-weight: 700; cursor: pointer;
      display: flex; align-items: center; justify-content: center; gap: 7px;
      transition: background 0.15s, border-color 0.15s;
    }
    .rv-ai-btn:hover { background: rgba(139,92,246,0.14); border-color: rgba(139,92,246,0.5); }
    .rv-ai-panel {
      background: rgba(139,92,246,0.08); border: 1.5px solid rgba(139,92,246,0.25);
      border-radius: 12px; padding: 12px 14px;
      display: flex; flex-direction: column; gap: 6px;
    }
    .rv-ai-label {
      font-size: 0.65rem; font-weight: 800; text-transform: uppercase;
      letter-spacing: 0.08em; color: #a78bfa;
      display: flex; align-items: center; gap: 5px;
    }
    .rv-ai-text { font-size: 0.82rem; color: #cbd5e1; line-height: 1.6; margin: 0; }
    .rv-ai-loading {
      display: flex; align-items: center; justify-content: center; gap: 8px;
      padding: 10px; color: #7c3aed; font-size: 0.78rem; font-weight: 600;
    }
    .rv-ai-icon { font-size: 1rem; }
    .rv-ai-upgrade {
      display: flex; align-items: center; justify-content: center; gap: 8px;
      padding: 10px; color: #6b7280; font-size: 0.75rem; font-style: italic;
    }
  `
})
export class ReviewComponent {
  protected router = inject(Router);
  private dataSvc = inject(DataService);
  wrongSvc = inject(WrongAnswerService);
  private gameSvc = inject(GamificationService);
  private analytics = inject(AnalyticsService);
  aiSvc = inject(AiExplanationService);

  // ── State ──────────────────────────────────────────────────────────────────

  phase = signal<Phase>('empty');
  queue = signal<Question[]>([]);
  explanation = signal<string | null>(null);
  currentIdx = signal(0);
  answerVisible = signal(false);
  clearedThisSession = signal(0);
  startCount = signal(0);
  earnedXp = signal(0);

  currentQ = computed(() => this.queue()[this.currentIdx()] ?? null);

  constructor() {
    this._load();
  }

  // ── Load / Start ───────────────────────────────────────────────────────────

  private _load() {
    const allQ = this.dataSvc.getAllQuestionsStable();
    const reviewQ = this.wrongSvc.filterReviewQuestions(allQ);
    if (reviewQ.length === 0) {
      this.phase.set('empty');
    } else {
      this.queue.set(reviewQ);
      this.startCount.set(reviewQ.length);
      this.clearedThisSession.set(0);
      this.earnedXp.set(0);
      this.currentIdx.set(0);
      this.answerVisible.set(false);
      this.phase.set('session');
      this.analytics.track('review_session_started', { count: reviewQ.length });
    }
  }

  // ── Session actions ────────────────────────────────────────────────────────

  reveal() {
    this.answerVisible.set(true);
    this.explanation.set(null);
    this.aiSvc.lastError.set(null);
  }

  /**
   * Grade the current card.
   * 0 = Still Learning (requeue for tomorrow)
   * 2 = Hard (reschedule with reduced ease)
   * 5 = Got It! (schedule with SM-2 interval, graduate at ≥21 days)
   */
  async fetchExplanation() {
    const q = this.currentQ();
    if (!q) return;
    const text = await this.aiSvc.getExplanation(q.id, q.question, q.answer);
    if (text) this.explanation.set(text);
  }

  grade(quality: 0 | 2 | 5) {
    const q = this.currentQ();
    if (!q) return;

    this.explanation.set(null);
    this.aiSvc.lastError.set(null);
    this.wrongSvc.applyReview(q.id, quality);

    if (quality === 5) {
      this.gameSvc.addXp(5);
      this.clearedThisSession.update(n => n + 1);
      this.earnedXp.update(n => n + 5);
    } else if (quality === 2) {
      // Hard — partial XP for effort
      this.gameSvc.addXp(2);
      this.earnedXp.update(n => n + 2);
    }

    this._advance();
  }

  private _advance() {
    const next = this.currentIdx() + 1;
    if (next >= this.queue().length) {
      this.analytics.track('review_session_completed', {
        cleared: this.clearedThisSession(),
        total: this.startCount(),
        xp: this.earnedXp()
      });
      this.phase.set('complete');
    } else {
      this.currentIdx.set(next);
      this.answerVisible.set(false);
      this.explanation.set(null);
    }
  }

  // ── Result actions ─────────────────────────────────────────────────────────

  restart() { this._load(); }
  back() { this.router.navigate(['/dashboard']); }
}
