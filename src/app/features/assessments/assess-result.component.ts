import { Component, ChangeDetectionStrategy, inject, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonToolbar, IonButtons } from '@ionic/angular/standalone';
import { AssessService } from './assess.service';
import { AuthService } from '../../auth.service';
import { CertificateComponent } from '../../shared/certificate.component';

@Component({
  selector: 'app-assess-result',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonContent, IonHeader, IonToolbar, IonButtons, CertificateComponent],
  template: `
    <ion-header class="ion-no-border">
      <ion-toolbar class="result-toolbar">
        <ion-buttons slot="start">
          <button class="back-btn" (click)="goBack()">
            <i class="fa-solid fa-chevron-left"></i>
          </button>
        </ion-buttons>
        <span class="toolbar-title">Results</span>
      </ion-toolbar>
    </ion-header>

    <ion-content class="result-content">
      <div class="result-wrapper">

        @if (result(); as r) {

          <!-- ── Score Card ── -->
          <div class="score-card">
            <div class="score-ring-wrap">
              <svg class="score-ring" viewBox="0 0 100 100">
                <circle class="ring-bg" cx="50" cy="50" r="42" />
                <circle class="ring-fill"
                  cx="50" cy="50" r="42"
                  [attr.stroke]="scoreColor(r.score)"
                  [style.stroke-dasharray]="264"
                  [style.stroke-dashoffset]="264 - (264 * r.score / 100)" />
              </svg>
              <div class="score-inner">
                <span class="score-pct">{{ r.score }}%</span>
                <span class="score-sub">Score</span>
              </div>
            </div>

            <div class="score-meta">
              <h2 class="score-title">{{ r.title }}</h2>
              <span class="pass-badge" [attr.data-pass]="r.score >= 70">
                {{ r.score >= 70 ? '🏆 Passed' : '📘 Keep Practising' }}
              </span>
              <div class="score-stats">
                <div class="score-stat">
                  <i class="fa-solid fa-circle-check score-stat-icon correct-icon"></i>
                  <span>{{ r.correct }} correct</span>
                </div>
                <div class="score-stat">
                  <i class="fa-solid fa-circle-xmark score-stat-icon wrong-icon"></i>
                  <span>{{ r.total - r.correct }} incorrect</span>
                </div>
                <div class="score-stat">
                  <i class="fa-regular fa-clock score-stat-icon time-icon"></i>
                  <span>{{ formatTime(r.timeTaken) }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- ── Actions ── -->
          <div class="action-row">
            <button class="btn-retake" (click)="retake(r.quizId)">
              <i class="fa-solid fa-rotate-right"></i> Retake
            </button>
            <button class="btn-home" (click)="goBack()">
              <i class="fa-solid fa-list"></i> All Quizzes
            </button>
          </div>

          <!-- ── Certificate CTA ── -->
          @if (r.score >= 70) {
            <div class="cert-cta-row">
              <button class="btn-certificate" (click)="showCert.set(true)">
                <i class="fa-solid fa-certificate"></i>
                Get Certificate
              </button>
            </div>
          }

          <!-- ── Question Review ── -->
          <div class="review-header">
            <i class="fa-solid fa-clipboard-list review-hdr-icon"></i>
            <span>Question Review</span>
          </div>

          <div class="review-list">
            @for (q of r.questions; track qIdx; let qIdx = $index) {
              <div class="review-card" [class.correct]="r.answers[qIdx] === q.ans" [class.wrong]="r.answers[qIdx] !== q.ans">

                <div class="review-status">
                  @if (r.answers[qIdx] === q.ans) {
                    <span class="status-chip correct-chip"><i class="fa-solid fa-check"></i> Correct</span>
                  } @else {
                    <span class="status-chip wrong-chip"><i class="fa-solid fa-xmark"></i> Incorrect</span>
                  }
                  <span class="review-q-num">Q{{ qIdx + 1 }}</span>
                </div>

                <p class="review-q-text">{{ q.q }}</p>

                <div class="review-opts">
                  @for (opt of q.opts; track optIdx; let optIdx = $index) {
                    <div class="review-opt"
                      [class.review-correct]="optIdx === q.ans"
                      [class.review-wrong]="optIdx === r.answers[qIdx] && optIdx !== q.ans">
                      <span class="review-opt-letter">{{ letters[optIdx] }}</span>
                      <span class="review-opt-text">{{ opt }}</span>
                      @if (optIdx === q.ans) {
                        <i class="fa-solid fa-check review-opt-icon correct-opt-icon"></i>
                      }
                      @if (optIdx === r.answers[qIdx] && optIdx !== q.ans) {
                        <i class="fa-solid fa-xmark review-opt-icon wrong-opt-icon"></i>
                      }
                    </div>
                  }
                </div>

                <div class="explanation">
                  <i class="fa-solid fa-lightbulb exp-icon"></i>
                  <p class="exp-text">{{ q.exp }}</p>
                </div>
              </div>
            }
          </div>

        } @else {
          <div class="no-result">
            <div class="no-result-icon">📋</div>
            <p>No results found. Please take a quiz first.</p>
            <button class="btn-home" (click)="goBack()">Browse Quizzes</button>
          </div>
        }

      </div>
    </ion-content>

    <!-- Certificate modal — mounted outside ion-content for proper print stacking -->
    @if (showCert()) {
      <app-certificate
        type="assessment"
        [title]="result()!.title"
        [category]="result()!.category"
        [score]="result()!.score"
        [visible]="showCert()"
        [recipientName]="userName()"
        (closed)="showCert.set(false)" />
    }
  `,
  styles: `
    .result-toolbar { --background: #0b1120; --border-style: none; --color: white; }
    .result-content { --background: #0b1120; }
    .result-wrapper { max-width: 600px; margin: 0 auto; padding: 16px 16px 100px; }

    .back-btn {
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.08);
      color: #94a3b8;
      border-radius: 8px;
      padding: 6px 10px;
      cursor: pointer;
      font-size: 0.8rem;
      margin-left: 8px;
      transition: all 0.18s;
    }
    .back-btn:hover { background: rgba(255,255,255,0.1); color: white; }
    .toolbar-title { font-size: 0.9rem; font-weight: 700; color: #e2e8f0; margin-left: 8px; }

    /* Score Card */
    .score-card {
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 20px;
      padding: 24px 20px;
      display: flex;
      gap: 20px;
      align-items: center;
      margin-bottom: 14px;
    }
    .score-ring-wrap { position: relative; flex-shrink: 0; width: 90px; height: 90px; }
    .score-ring { width: 100%; height: 100%; transform: rotate(-90deg); }
    .ring-bg   { fill: none; stroke: rgba(255,255,255,0.06); stroke-width: 8; }
    .ring-fill { fill: none; stroke-width: 8; stroke-linecap: round; transition: stroke-dashoffset 0.8s ease; }
    .score-inner {
      position: absolute; inset: 0;
      display: flex; flex-direction: column; align-items: center; justify-content: center;
    }
    .score-pct  { font-size: 1.3rem; font-weight: 900; color: #e2e8f0; letter-spacing: -0.03em; line-height: 1; }
    .score-sub  { font-size: 0.55rem; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.08em; }
    .score-meta { flex: 1; min-width: 0; }
    .score-title { font-size: 0.9rem; font-weight: 800; color: #e2e8f0; margin: 0 0 8px; letter-spacing: -0.01em; }
    .pass-badge {
      display: inline-block;
      font-size: 0.68rem; font-weight: 700;
      padding: 4px 12px; border-radius: 20px; margin-bottom: 12px;
    }
    .pass-badge[data-pass="true"]  { background: rgba(16,185,129,0.15); color: #34d399; }
    .pass-badge[data-pass="false"] { background: rgba(139,92,246,0.15); color: #a78bfa; }
    .score-stats { display: flex; flex-direction: column; gap: 5px; }
    .score-stat  { display: flex; align-items: center; gap: 7px; font-size: 0.75rem; color: #94a3b8; font-weight: 500; }
    .score-stat-icon { font-size: 0.7rem; }
    .correct-icon { color: #10b981; }
    .wrong-icon   { color: #f87171; }
    .time-icon    { color: #a78bfa; }

    /* Actions */
    .action-row { display: flex; gap: 10px; margin-bottom: 24px; }
    .btn-retake, .btn-home {
      flex: 1; padding: 12px; border-radius: 12px;
      font-size: 0.82rem; font-weight: 700;
      cursor: pointer; border: none;
      display: flex; align-items: center; justify-content: center; gap: 7px;
      transition: all 0.18s ease;
    }
    .btn-retake { background: #8b5cf6; color: white; }
    .btn-retake:hover { opacity: 0.88; transform: translateY(-1px); }
    .btn-home { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); color: #94a3b8; }
    .btn-home:hover { background: rgba(255,255,255,0.1); color: #e2e8f0; }

    /* Review header */
    .review-header {
      display: flex; align-items: center; gap: 8px;
      font-size: 0.68rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em;
      color: #64748b; margin-bottom: 14px;
    }
    .review-hdr-icon { color: #8b5cf6; font-size: 0.65rem; }

    .review-list { display: flex; flex-direction: column; gap: 12px; }

    .review-card { border-radius: 14px; padding: 16px; }
    .review-card.correct { background: rgba(16,185,129,0.05); border: 1px solid rgba(16,185,129,0.2); border-left: 3px solid #10b981; }
    .review-card.wrong   { background: rgba(239,68,68,0.04);  border: 1px solid rgba(239,68,68,0.15);  border-left: 3px solid #f87171; }

    .review-status { display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; }
    .status-chip {
      display: inline-flex; align-items: center; gap: 5px;
      font-size: 0.62rem; font-weight: 700; padding: 3px 10px; border-radius: 20px;
    }
    .correct-chip { background: rgba(16,185,129,0.15); color: #34d399; }
    .wrong-chip   { background: rgba(239,68,68,0.15);  color: #f87171; }
    .review-q-num { font-size: 0.6rem; font-weight: 700; color: #475569; text-transform: uppercase; letter-spacing: 0.08em; }
    .review-q-text { font-size: 0.85rem; font-weight: 600; color: #e2e8f0; line-height: 1.5; margin: 0 0 12px; }

    .review-opts { display: flex; flex-direction: column; gap: 6px; margin-bottom: 12px; }
    .review-opt {
      display: flex; align-items: center; gap: 10px;
      padding: 8px 12px; border-radius: 8px;
      background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05);
      font-size: 0.78rem; color: #64748b;
    }
    .review-correct { background: rgba(16,185,129,0.12) !important; border-color: rgba(16,185,129,0.3) !important; color: #d1fae5 !important; }
    .review-wrong   { background: rgba(239,68,68,0.1)  !important; border-color: rgba(239,68,68,0.25)  !important; color: #fecaca !important; }
    .review-opt-letter {
      flex-shrink: 0; width: 22px; height: 22px; border-radius: 6px;
      background: rgba(255,255,255,0.06);
      display: flex; align-items: center; justify-content: center;
      font-size: 0.62rem; font-weight: 700;
    }
    .review-correct .review-opt-letter { background: rgba(16,185,129,0.3); color: #34d399; }
    .review-wrong   .review-opt-letter { background: rgba(239,68,68,0.25); color: #f87171; }
    .review-opt-text { flex: 1; line-height: 1.4; }
    .review-opt-icon { flex-shrink: 0; font-size: 0.7rem; }
    .correct-opt-icon { color: #34d399; }
    .wrong-opt-icon   { color: #f87171; }

    .explanation {
      display: flex; gap: 10px; align-items: flex-start;
      padding: 10px 12px;
      background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 8px;
    }
    .exp-icon { color: #f59e0b; font-size: 0.75rem; flex-shrink: 0; margin-top: 2px; }
    .exp-text  { font-size: 0.72rem; color: #94a3b8; line-height: 1.6; margin: 0; }

    .no-result { text-align: center; padding: 60px 20px; }
    .no-result-icon { font-size: 3rem; margin-bottom: 16px; }
    .no-result p { color: #64748b; font-size: 0.85rem; margin-bottom: 20px; }

    /* Certificate CTA */
    .cert-cta-row {
      display: flex; justify-content: center; margin-bottom: 24px;
    }
    .btn-certificate {
      display: flex; align-items: center; gap: 8px;
      padding: 13px 28px; border-radius: 12px; border: none; cursor: pointer;
      font-size: 0.85rem; font-weight: 700; letter-spacing: 0.02em;
      background: linear-gradient(135deg, #1B4332, #2D6A4F);
      color: #d4a853;
      box-shadow: 0 4px 14px rgba(27, 67, 50, 0.4);
      transition: all 0.2s ease;
    }
    .btn-certificate:hover { transform: translateY(-2px); box-shadow: 0 8px 22px rgba(27,67,50,0.45); }
    :host-context(html:not(.dark)) .btn-certificate { box-shadow: 0 4px 14px rgba(27,67,50,0.3); }

    /* Light Mode */
    :host-context(html:not(.dark)) .result-toolbar { --background: #1B4332; }
    :host-context(html:not(.dark)) .result-content { --background: #F5F7F2; }
    :host-context(html:not(.dark)) .back-btn { background: rgba(255,255,255,0.15); border-color: rgba(255,255,255,0.25); color: rgba(255,255,255,0.85); }
    :host-context(html:not(.dark)) .toolbar-title { color: #ffffff; }
    :host-context(html:not(.dark)) .score-card { background: #ffffff; border-color: #D6DDD2; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }
    :host-context(html:not(.dark)) .ring-bg { stroke: #E8EDE5; }
    :host-context(html:not(.dark)) .score-pct  { color: #1B1B1B; }
    :host-context(html:not(.dark)) .score-sub  { color: #8A9B8F; }
    :host-context(html:not(.dark)) .score-title { color: #1B1B1B; }
    :host-context(html:not(.dark)) .score-stat { color: #52665A; }
    :host-context(html:not(.dark)) .btn-retake { background: #1B4332; }
    :host-context(html:not(.dark)) .btn-home { background: #ffffff; border-color: #D6DDD2; color: #52665A; }
    :host-context(html:not(.dark)) .btn-home:hover { background: #F5F7F2; color: #1B1B1B; }
    :host-context(html:not(.dark)) .review-header { color: #8A9B8F; }
    :host-context(html:not(.dark)) .review-hdr-icon { color: #1B4332; }
    :host-context(html:not(.dark)) .review-q-text { color: #1B1B1B; }
    :host-context(html:not(.dark)) .review-opt { background: #F5F7F2; border-color: #D6DDD2; color: #52665A; }
    :host-context(html:not(.dark)) .review-opt-letter { background: #E8EDE5; }
    :host-context(html:not(.dark)) .review-q-num { color: #8A9B8F; }
    :host-context(html:not(.dark)) .explanation { background: #FFF8ED; border-color: rgba(245,158,11,0.2); }
    :host-context(html:not(.dark)) .exp-text { color: #52665A; }
    :host-context(html:not(.dark)) .review-card.correct { background: rgba(16,185,129,0.04); }
    :host-context(html:not(.dark)) .review-card.wrong   { background: rgba(239,68,68,0.03); }
  `
})
export class AssessResultComponent {
  private router = inject(Router);
  private svc    = inject(AssessService);
  private auth   = inject(AuthService);

  readonly letters  = ['A', 'B', 'C', 'D'];
  readonly result   = this.svc.result;
  readonly showCert = signal(false);
  readonly userName = computed(() => this.auth.user()?.displayName ?? 'Java Developer');

  scoreColor(score: number): string {
    if (score >= 70) return '#10b981';
    if (score >= 50) return '#f59e0b';
    return '#f87171';
  }

  formatTime(s: number): string {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}m ${sec}s`;
  }

  retake(quizId: string): void {
    this.svc.clearResult();
    this.router.navigate(['/assessments', quizId]);
  }

  goBack(): void {
    this.svc.clearResult();
    this.router.navigate(['/assessments']);
  }
}
