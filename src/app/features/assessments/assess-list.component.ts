import { Component, ChangeDetectionStrategy, signal, computed, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IonContent, IonHeader } from '@ionic/angular/standalone';
import { AppHeaderComponent } from '../../shared/app-header.component';
import { AssessService, PersistedQuizRecord } from './assess.service';

type DiffFilter   = 'all' | 'beginner' | 'intermediate' | 'advanced';
type StatusFilter = 'all' | 'new' | 'passed' | 'retake';

interface Assessment {
  id: string;
  title: string;
  category: string;
  faIcon: string;
  iconColor: string;
  iconBg: string;
  questions: number;
  time: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
}

@Component({
  selector: 'app-assess-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, IonContent, AppHeaderComponent, IonHeader],
  template: `
    <ion-header class="ion-no-border">
      <app-header></app-header>
    </ion-header>

    <ion-content class="assess-content">

      <!-- ── Hero ── -->
      <div class="hero">
        <div class="hero-glow g1"></div>
        <div class="hero-glow g2"></div>
        <div class="hero-inner">
          <div class="hero-top-row">
            <div>
              <h1 class="hero-title">Assess Your<br><span class="hero-accent">Java Knowledge</span></h1>
              @if (!hasHistory()) {
                <p class="hero-sub">MCQ quizzes with instant feedback · Score history · Pass certificates</p>
              }
            </div>

            @if (!hasHistory()) {
              <!-- Catalog stats for new users -->
              <div class="hero-stat-group" aria-label="Quiz catalog overview">
                <div class="hero-stat">
                  <span class="stat-num">{{ assessments.length }}</span>
                  <span class="stat-lbl">Quizzes</span>
                </div>
                <div class="stat-div"></div>
                <div class="hero-stat">
                  <span class="stat-num">{{ avgTime }}m</span>
                  <span class="stat-lbl">Avg Each</span>
                </div>
              </div>
            } @else {
              <!-- Personalised stats for returning users -->
              <div class="hero-stat-group pers" aria-label="Your assessment performance">
                <div class="hero-stat">
                  <span class="stat-num pers-num">{{ personalStats()!.completed }}/{{ assessments.length }}</span>
                  <span class="stat-lbl">Completed</span>
                </div>
                <div class="stat-div"></div>
                <div class="hero-stat">
                  <span class="stat-num pers-num" [class.good]="personalStats()!.avgScore >= 70">
                    {{ personalStats()!.avgScore }}%
                  </span>
                  <span class="stat-lbl">Avg Score</span>
                </div>
              </div>
            }
          </div>

          @if (!hasHistory()) {
            <!-- New-user CTA -->
            <a [routerLink]="['/assessments', 'java-basics']" class="hero-cta-link">
              Start with Java Fundamentals →
            </a>
          }
        </div>
      </div>

      <div class="body">

        <!-- ── Resume card (returning users) ── -->
        @if (resumeQuiz(); as rv) {
          <div class="resume-row">
            <div class="resume-card">
              <div class="resume-icon-wrap" aria-hidden="true">
                <i class="fa-solid fa-rotate-right"></i>
              </div>
              <div class="resume-info">
                <span class="resume-lbl">Last attempt</span>
                <span class="resume-title">{{ rv.quiz.title }}</span>
                <span class="resume-score" [class.pass]="rv.record.lastScore >= 70">
                  {{ rv.record.lastScore }}%
                  {{ rv.record.lastScore >= 70 ? '· Passed' : '· Needs retake' }}
                  · {{ relativeTime(rv.record.lastAttemptAt) }}
                </span>
              </div>
              <button class="resume-btn" (click)="openPreQuiz(rv.quiz)" type="button">
                {{ rv.record.bestScore >= 70 ? 'Retake' : 'Try Again' }} →
              </button>
            </div>
          </div>
        }

        <!-- ── Filters ── -->
        <div class="filter-area">
          <!-- Row 1: difficulty + status + count -->
          <div class="filter-row">
            <div class="filter-group" role="radiogroup" aria-label="Filter by difficulty">
              @for (f of diffOptions; track f.val) {
                <button
                  class="fpill"
                  [attr.data-val]="f.val"
                  [class.fpill-active]="activeDiff() === f.val"
                  (click)="setDiff(f.val)"
                  role="radio"
                  [attr.aria-checked]="activeDiff() === f.val">
                  {{ f.label }}
                </button>
              }
            </div>

            <div class="filter-spacer"></div>

            <span class="filter-count">
              Showing {{ filtered().length }} of {{ assessments.length }}
            </span>
          </div>

          <!-- Row 2: status + topic chips -->
          <div class="filter-row filter-row-2">
            <div class="filter-group" role="radiogroup" aria-label="Filter by status">
              @for (s of statusOptions; track s.val) {
                <button
                  class="status-pill"
                  [class.status-active]="activeStatus() === s.val"
                  (click)="setStatus(s.val)"
                  role="radio"
                  [attr.aria-checked]="activeStatus() === s.val">
                  {{ s.label }}
                </button>
              }
            </div>

            <div class="filter-spacer"></div>

            <!-- Topic filter (scrollable) -->
            <div class="topic-scroll" role="radiogroup" aria-label="Filter by topic">
              @for (t of topics(); track t) {
                <button
                  class="topic-pill"
                  [class.topic-active]="activeTopic() === t"
                  (click)="activeTopic.set(t)"
                  role="radio"
                  [attr.aria-checked]="activeTopic() === t">
                  {{ t === 'all' ? 'All Topics' : t }}
                </button>
              }
            </div>
          </div>
        </div>

        <!-- ── No results ── -->
        @if (filtered().length === 0) {
          <div class="no-results" role="status">
            <i class="fa-solid fa-filter-circle-xmark" aria-hidden="true"></i>
            <p>No quizzes match the current filters.</p>
            <button class="no-results-clear" (click)="clearFilters()">Clear filters</button>
          </div>
        }

        <!-- ── Card grid ── -->
        <div class="card-grid">
          @for (a of filtered(); track a.id) {
            <button
              class="assess-card"
              type="button"
              (click)="openPreQuiz(a)"
              [style.--diff-color]="diffColor(a.difficulty)"
              [attr.aria-label]="a.title + ' — ' + a.difficulty + ' — ' + a.questions + ' questions — ' + a.time + ' minutes'">

              <!-- Difficulty tint bar -->
              <div class="card-top-bar" aria-hidden="true"></div>

              <div class="card-inner">
                <!-- Icon -->
                <div class="card-icon" [style.background]="a.iconBg" aria-hidden="true">
                  <i [class]="a.faIcon" [style.color]="a.iconColor"></i>
                </div>

                <!-- Content -->
                <div class="card-content">
                  <!-- Title row -->
                  <div class="card-title-row">
                    <div class="card-title-area">
                      <h3 class="card-title">{{ a.title }}</h3>
                      <div class="card-badges">
                        <span class="cat-chip">{{ a.category }}</span>
                        @if (quizRecord(a.id); as rec) {
                          <span class="status-badge" [attr.data-st]="rec.bestScore >= 70 ? 'passed' : 'retake'">
                            {{ rec.bestScore >= 70 ? 'Passed' : 'Needs retake' }}
                          </span>
                        } @else {
                          <span class="status-badge" data-st="new">New</span>
                        }
                      </div>
                    </div>
                    <span class="diff-badge" [attr.data-d]="a.difficulty">{{ a.difficulty }}</span>
                  </div>

                  <!-- Description -->
                  <p class="card-desc">{{ a.description }}</p>

                  <!-- History strip (if attempted) -->
                  @if (quizRecord(a.id); as rec) {
                    <div class="history-strip">
                      <div class="score-bar-track" role="progressbar"
                           [attr.aria-valuenow]="rec.bestScore"
                           aria-valuemax="100"
                           [attr.aria-label]="'Best score ' + rec.bestScore + '%'">
                        <div class="score-bar-fill"
                             [style.width.%]="rec.bestScore"
                             [style.background]="rec.bestScore >= 70 ? '#10b981' : '#ef4444'"></div>
                      </div>
                      <span class="history-meta">
                        <span class="best-score" [class.pass]="rec.bestScore >= 70">{{ rec.bestScore }}%</span>
                        <span class="history-dot" aria-hidden="true">·</span>
                        <span class="attempts-label">{{ rec.attempts }}× attempted</span>
                        <span class="history-dot" aria-hidden="true">·</span>
                        <span class="last-date">{{ relativeTime(rec.lastAttemptAt) }}</span>
                      </span>
                    </div>
                  }

                  <!-- Meta + CTA row -->
                  <div class="card-meta-row">
                    <span class="meta-chip">
                      <i class="fa-solid fa-pen meta-icon" aria-hidden="true"></i>
                      {{ a.questions }} Qs
                    </span>
                    <span class="meta-chip">
                      <i class="fa-regular fa-clock meta-icon" aria-hidden="true"></i>
                      {{ a.time }} min
                    </span>
                    <span class="meta-chip pass-mark" aria-label="Pass mark 70%">
                      <i class="fa-solid fa-flag-checkered meta-icon" aria-hidden="true"></i>
                      Pass: 70%
                    </span>
                    <span class="card-cta">
                      {{ ctaLabel(a.id) }}
                      <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
              </div>
            </button>
          }
        </div>

      </div>

      <!-- ── Pre-Quiz Modal ── -->
      @if (pendingQuiz(); as quiz) {
        <div
          class="modal-backdrop"
          (click)="dismissModal()"
          role="dialog"
          aria-modal="true"
          [attr.aria-label]="'Start ' + quiz.title">
          <div class="modal-box" (click)="$event.stopPropagation()">

            <!-- Modal header -->
            <div class="modal-header">
              <div class="modal-icon" [style.background]="quiz.iconBg" aria-hidden="true">
                <i [class]="quiz.faIcon" [style.color]="quiz.iconColor"></i>
              </div>
              <div>
                <h2 class="modal-title">{{ quiz.title }}</h2>
                <span class="modal-diff" [attr.data-d]="quiz.difficulty">{{ quiz.difficulty }}</span>
              </div>
            </div>

            <!-- Rules grid -->
            <div class="modal-rules" role="list">
              <div class="rule-item" role="listitem">
                <i class="fa-solid fa-pen rule-icon" aria-hidden="true"></i>
                <div>
                  <span class="rule-label">Questions</span>
                  <span class="rule-val">{{ quiz.questions }} multiple choice</span>
                </div>
              </div>
              <div class="rule-item" role="listitem">
                <i class="fa-regular fa-clock rule-icon" aria-hidden="true"></i>
                <div>
                  <span class="rule-label">Time Limit</span>
                  <span class="rule-val">{{ quiz.time }} minutes</span>
                </div>
              </div>
              <div class="rule-item" role="listitem">
                <i class="fa-solid fa-flag-checkered rule-icon" aria-hidden="true"></i>
                <div>
                  <span class="rule-label">Pass Mark</span>
                  <span class="rule-val">70% or above</span>
                </div>
              </div>
              <div class="rule-item" role="listitem">
                <i class="fa-solid fa-bolt rule-icon" aria-hidden="true"></i>
                <div>
                  <span class="rule-label">Instant Results</span>
                  <span class="rule-val">Explanation after each answer</span>
                </div>
              </div>
            </div>

            <!-- Prior attempt hint -->
            @if (quizRecord(quiz.id); as rec) {
              <div class="modal-prior">
                <i class="fa-solid fa-chart-line" aria-hidden="true"></i>
                Your best score: <strong>{{ rec.bestScore }}%</strong> over {{ rec.attempts }} {{ rec.attempts === 1 ? 'attempt' : 'attempts' }}
              </div>
            }

            <!-- Timer warning -->
            <p class="modal-warning">
              <i class="fa-solid fa-circle-info" aria-hidden="true"></i>
              Timer starts the moment you click Begin.
            </p>

            <!-- Actions -->
            <div class="modal-actions">
              <button class="modal-cancel" (click)="dismissModal()" type="button">Cancel</button>
              <button class="modal-begin" (click)="beginQuiz()" type="button">
                Begin Quiz →
              </button>
            </div>
          </div>
        </div>
      }

    </ion-content>
  `,
  styles: `
    /* ── Layout ── */
    .assess-content { --background: #0b1120; --padding-start: 0; --padding-end: 0; }

    /* ── Hero ── */
    .hero {
      position: relative;
      padding: 20px clamp(16px, 4vw, 64px) 24px;
      overflow: hidden;
    }
    .hero-glow {
      position: absolute;
      border-radius: 50%;
      pointer-events: none;
    }
    .g1 {
      top: -50px; right: -30px;
      width: 220px; height: 220px;
      background: radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%);
    }
    .g2 {
      bottom: -20px; left: -30px;
      width: 160px; height: 160px;
      background: radial-gradient(circle, rgba(236,72,153,0.07) 0%, transparent 70%);
    }
    .hero-inner { position: relative; z-index: 1; }

    .hero-top-row {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 14px;
    }
    .hero-title {
      font-size: 1.55rem;
      font-weight: 900;
      color: #e2e8f0;
      letter-spacing: -0.03em;
      line-height: 1.15;
      margin: 0 0 6px;
    }
    .hero-accent {
      background: linear-gradient(135deg, #8b5cf6 0%, #a78bfa 60%, #c4b5fd 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .hero-sub { font-size: 0.78rem; color: #64748b; margin: 0; line-height: 1.45; }

    /* Stat group */
    .hero-stat-group {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      gap: 12px;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 12px;
      padding: 10px 16px;
    }
    .hero-stat { text-align: center; }
    .stat-num {
      display: block;
      font-size: 1.25rem;
      font-weight: 800;
      letter-spacing: -0.03em;
      background: linear-gradient(135deg, #8b5cf6, #a78bfa);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .pers-num {
      background: linear-gradient(135deg, #a78bfa, #c4b5fd);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .pers-num.good {
      background: linear-gradient(135deg, #10b981, #34d399);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .stat-lbl {
      display: block;
      font-size: 0.58rem;
      font-weight: 600;
      color: #475569;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-top: 2px;
    }
    .stat-div { width: 1px; height: 22px; background: rgba(255,255,255,0.07); }

    /* New-user hero CTA */
    .hero-cta-link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 0.8rem;
      font-weight: 700;
      color: #a78bfa;
      text-decoration: none;
      background: rgba(139,92,246,0.08);
      border: 1px solid rgba(139,92,246,0.2);
      border-radius: 20px;
      padding: 7px 16px;
      transition: all 0.2s;
    }
    .hero-cta-link:hover {
      background: rgba(139,92,246,0.14);
      border-color: rgba(139,92,246,0.35);
    }
    .hero-cta-link:focus-visible { outline: 2px solid #8b5cf6; outline-offset: 2px; }

    /* ── Body ── */
    .body { padding: 16px clamp(16px, 4vw, 64px) 100px; }
    @media (min-width: 640px) { .body { padding: 16px clamp(24px, 5vw, 72px) 100px; } }
    @media (min-width: 1024px) { .body { padding: 20px clamp(32px, 5vw, 80px) 100px; } }

    /* ── Resume row ── */
    .resume-row { margin-bottom: 18px; }
    .resume-card {
      display: flex;
      align-items: center;
      gap: 12px;
      background: rgba(139,92,246,0.05);
      border: 1px solid rgba(139,92,246,0.15);
      border-radius: 14px;
      padding: 14px 16px;
    }
    .resume-icon-wrap {
      flex-shrink: 0;
      width: 38px; height: 38px;
      border-radius: 10px;
      background: rgba(139,92,246,0.12);
      display: flex; align-items: center; justify-content: center;
      color: #a78bfa;
      font-size: 0.9rem;
    }
    .resume-info {
      flex: 1;
      min-width: 0;
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .resume-lbl { font-size: 0.62rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #64748b; }
    .resume-title {
      font-size: 0.88rem;
      font-weight: 700;
      color: #e2e8f0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .resume-score { font-size: 0.7rem; font-weight: 600; color: #64748b; }
    .resume-score.pass { color: #10b981; }
    .resume-btn {
      flex-shrink: 0;
      background: rgba(139,92,246,0.12);
      border: 1px solid rgba(139,92,246,0.25);
      border-radius: 20px;
      color: #a78bfa;
      font-size: 0.75rem;
      font-weight: 700;
      padding: 6px 14px;
      cursor: pointer;
      transition: all 0.2s;
      white-space: nowrap;
    }
    .resume-btn:hover { background: rgba(139,92,246,0.2); }
    .resume-btn:focus-visible { outline: 2px solid #8b5cf6; outline-offset: 2px; }

    /* ── Filter area ── */
    .filter-area { margin-bottom: 18px; display: flex; flex-direction: column; gap: 8px; }

    .filter-row {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
    }
    .filter-row-2 { flex-wrap: nowrap; overflow-x: auto; -webkit-overflow-scrolling: touch; }
    .filter-row-2::-webkit-scrollbar { display: none; }
    .filter-group { display: flex; gap: 6px; flex-shrink: 0; }
    .filter-spacer { flex: 1; min-width: 8px; }
    .filter-count {
      flex-shrink: 0;
      font-size: 0.68rem;
      font-weight: 600;
      color: #475569;
      white-space: nowrap;
    }

    /* Difficulty pills */
    .fpill {
      padding: 6px 14px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 20px;
      color: #94a3b8;
      font-size: 0.72rem;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.15s;
      white-space: nowrap;
    }
    .fpill:hover { color: #e2e8f0; background: rgba(255,255,255,0.07); }
    .fpill:focus-visible { outline: 2px solid #8b5cf6; outline-offset: 2px; }
    /* Active states per difficulty value */
    .fpill-active[data-val="all"]          { background: rgba(148,163,184,0.12); border-color: rgba(148,163,184,0.28); color: #94a3b8; }
    .fpill-active[data-val="beginner"]     { background: rgba(16,185,129,0.12); border-color: rgba(16,185,129,0.3); color: #10b981; }
    .fpill-active[data-val="intermediate"] { background: rgba(245,158,11,0.12); border-color: rgba(245,158,11,0.3); color: #f59e0b; }
    .fpill-active[data-val="advanced"]     { background: rgba(239,68,68,0.12); border-color: rgba(239,68,68,0.3); color: #ef4444; }

    /* Status pills */
    .status-pill {
      padding: 5px 12px;
      background: transparent;
      border: 1px solid transparent;
      border-radius: 6px;
      color: #64748b;
      font-size: 0.7rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.15s;
      white-space: nowrap;
      flex-shrink: 0;
    }
    .status-pill:hover { color: #94a3b8; }
    .status-active { background: rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.1); color: #e2e8f0; }
    .status-pill:focus-visible { outline: 2px solid #8b5cf6; outline-offset: 2px; }

    /* Topic scroll */
    .topic-scroll { display: flex; gap: 6px; flex-shrink: 0; }
    .topic-pill {
      padding: 5px 12px;
      background: transparent;
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 20px;
      color: #475569;
      font-size: 0.68rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.15s;
      white-space: nowrap;
    }
    .topic-pill:hover { color: #94a3b8; }
    .topic-active { border-color: rgba(139,92,246,0.35); color: #a78bfa; background: rgba(139,92,246,0.08); }
    .topic-pill:focus-visible { outline: 2px solid #8b5cf6; outline-offset: 2px; }

    /* ── No results ── */
    .no-results {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      padding: 48px 24px;
      color: #475569;
      font-size: 0.82rem;
    }
    .no-results i { font-size: 1.4rem; color: #334155; }
    .no-results p { margin: 0; color: #64748b; }
    .no-results-clear {
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 6px;
      color: #94a3b8;
      font-size: 0.75rem;
      font-weight: 600;
      padding: 6px 16px;
      cursor: pointer;
      margin-top: 4px;
      transition: all 0.15s;
    }
    .no-results-clear:hover { color: #e2e8f0; }

    /* ── Card grid ── */
    .card-grid { display: flex; flex-direction: column; gap: 12px; }
    @media (min-width: 640px) {
      .card-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
    }
    @media (min-width: 1440px) {
      .card-grid { grid-template-columns: repeat(3, 1fr); }
    }

    /* ── Assessment card ── */
    .assess-card {
      position: relative;
      display: flex;
      flex-direction: column;
      width: 100%;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 16px;
      text-align: left;
      cursor: pointer;
      overflow: hidden;
      padding: 0;
      transition: all 0.2s ease;
    }
    .assess-card:hover {
      background: rgba(255,255,255,0.055);
      border-color: rgba(255,255,255,0.12);
      box-shadow: 0 8px 28px rgba(0,0,0,0.28);
      transform: translateY(-2px);
    }
    .assess-card:active { transform: scale(0.99); }
    .assess-card:focus-visible { outline: 2px solid #8b5cf6; outline-offset: 2px; }

    /* Difficulty tint bar */
    .card-top-bar {
      height: 3px;
      background: var(--diff-color, #8b5cf6);
      opacity: 0.6;
      transition: opacity 0.2s, height 0.2s;
    }
    .assess-card:hover .card-top-bar { opacity: 1; height: 4px; }

    .card-inner {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      padding: 14px 16px 16px;
      flex: 1;
    }
    .card-icon {
      flex-shrink: 0;
      width: 44px; height: 44px;
      border-radius: 13px;
      display: flex; align-items: center; justify-content: center;
      font-size: 1.15rem;
      margin-top: 1px;
    }
    .card-content { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 8px; }

    /* Title row */
    .card-title-row {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 8px;
    }
    .card-title-area { flex: 1; min-width: 0; }
    .card-title {
      font-size: 0.9rem;
      font-weight: 700;
      color: #e2e8f0;
      margin: 0 0 5px;
      letter-spacing: -0.01em;
      line-height: 1.3;
    }
    .card-badges { display: flex; align-items: center; gap: 5px; flex-wrap: wrap; }
    .cat-chip {
      font-size: 0.6rem;
      font-weight: 600;
      color: #64748b;
      background: rgba(255,255,255,0.05);
      border-radius: 4px;
      padding: 2px 7px;
    }
    .status-badge {
      font-size: 0.6rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      padding: 2px 7px;
      border-radius: 4px;
    }
    .status-badge[data-st="new"]    { color: #64748b; background: rgba(255,255,255,0.04); }
    .status-badge[data-st="passed"] { color: #10b981; background: rgba(16,185,129,0.1); }
    .status-badge[data-st="retake"] { color: #ef4444; background: rgba(239,68,68,0.1); }

    /* Difficulty badge */
    .diff-badge {
      flex-shrink: 0;
      font-size: 0.58rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      padding: 3px 10px;
      border-radius: 6px;
    }
    .diff-badge[data-d="beginner"]     { background: rgba(16,185,129,0.1);  color: #10b981; }
    .diff-badge[data-d="intermediate"] { background: rgba(245,158,11,0.12); color: #f59e0b; }
    .diff-badge[data-d="advanced"]     { background: rgba(239,68,68,0.1);   color: #ef4444; }

    /* Description */
    .card-desc {
      font-size: 0.75rem;
      color: #64748b;
      line-height: 1.5;
      margin: 0;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    /* History strip */
    .history-strip {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
    .score-bar-track {
      height: 4px;
      background: rgba(255,255,255,0.06);
      border-radius: 2px;
      overflow: hidden;
    }
    .score-bar-fill {
      height: 100%;
      border-radius: 2px;
      transition: width 0.4s ease;
    }
    .history-meta {
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 0.68rem;
      color: #475569;
    }
    .best-score { font-weight: 700; color: #ef4444; }
    .best-score.pass { color: #10b981; }
    .history-dot { color: #334155; }
    .attempts-label, .last-date { color: #475569; }

    /* Meta + CTA row */
    .card-meta-row {
      display: flex;
      align-items: center;
      gap: 6px;
      flex-wrap: wrap;
    }
    .meta-chip {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      font-size: 0.62rem;
      font-weight: 600;
      color: #64748b;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 5px;
      padding: 3px 7px;
    }
    .meta-icon { font-size: 0.52rem; }
    .pass-mark { opacity: 0.7; }

    .card-cta {
      margin-left: auto;
      display: inline-flex;
      align-items: center;
      gap: 5px;
      font-size: 0.72rem;
      font-weight: 700;
      color: #fff;
      background: #1B4332;
      padding: 5px 12px;
      border-radius: 20px;
      flex-shrink: 0;
      transition: background 0.18s;
    }
    .assess-card:hover .card-cta { background: #2D6A4F; }
    .card-cta i { font-size: 0.65rem; }

    /* ── Pre-Quiz Modal ── */
    .modal-backdrop {
      position: fixed;
      inset: 0;
      z-index: 1000;
      background: rgba(0,0,0,0.7);
      backdrop-filter: blur(6px);
      -webkit-backdrop-filter: blur(6px);
      display: flex;
      align-items: flex-end;
      justify-content: center;
      padding: 0 0 env(safe-area-inset-bottom, 0);
      animation: backdropIn 0.2s ease;
    }
    @keyframes backdropIn {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    @media (min-width: 480px) {
      .modal-backdrop { align-items: center; padding: 24px; }
    }

    .modal-box {
      background: #141e30;
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 24px 24px 0 0;
      padding: 24px 20px 32px;
      width: 100%;
      max-width: 440px;
      animation: modalUp 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    @media (min-width: 480px) {
      .modal-box { border-radius: 20px; padding: 28px 28px 28px; }
    }
    @keyframes modalUp {
      from { opacity: 0; transform: translateY(24px) scale(0.96); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }

    .modal-header {
      display: flex;
      align-items: center;
      gap: 14px;
      margin-bottom: 20px;
    }
    .modal-icon {
      flex-shrink: 0;
      width: 48px; height: 48px;
      border-radius: 14px;
      display: flex; align-items: center; justify-content: center;
      font-size: 1.2rem;
    }
    .modal-title {
      font-size: 1.1rem;
      font-weight: 800;
      color: #e2e8f0;
      margin: 0 0 4px;
      letter-spacing: -0.02em;
    }
    .modal-diff {
      font-size: 0.62rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      padding: 3px 10px;
      border-radius: 6px;
    }
    .modal-diff[data-d="beginner"]     { background: rgba(16,185,129,0.12);  color: #10b981; }
    .modal-diff[data-d="intermediate"] { background: rgba(245,158,11,0.12); color: #f59e0b; }
    .modal-diff[data-d="advanced"]     { background: rgba(239,68,68,0.12);   color: #ef4444; }

    .modal-rules {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      margin-bottom: 16px;
    }
    .rule-item {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 10px;
      padding: 10px 12px;
    }
    .rule-icon { font-size: 0.85rem; color: #8b5cf6; flex-shrink: 0; margin-top: 2px; }
    .rule-label {
      display: block;
      font-size: 0.6rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.07em;
      color: #475569;
      margin-bottom: 2px;
    }
    .rule-val { font-size: 0.78rem; font-weight: 600; color: #cbd5e1; }

    .modal-prior {
      background: rgba(16,185,129,0.06);
      border: 1px solid rgba(16,185,129,0.15);
      border-radius: 8px;
      padding: 9px 12px;
      font-size: 0.75rem;
      color: #94a3b8;
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 12px;
    }
    .modal-prior i { color: #10b981; }
    .modal-prior strong { color: #10b981; }

    .modal-warning {
      font-size: 0.72rem;
      color: #64748b;
      margin: 0 0 20px;
      display: flex;
      align-items: center;
      gap: 7px;
    }
    .modal-warning i { color: #475569; }

    .modal-actions {
      display: flex;
      gap: 10px;
    }
    .modal-cancel {
      flex: 1;
      padding: 12px;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 12px;
      color: #94a3b8;
      font-size: 0.85rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.15s;
    }
    .modal-cancel:hover { background: rgba(255,255,255,0.08); color: #e2e8f0; }
    .modal-cancel:focus-visible { outline: 2px solid #8b5cf6; outline-offset: 2px; }
    .modal-begin {
      flex: 2;
      padding: 12px;
      background: linear-gradient(135deg, #1B4332, #2D6A4F);
      border: none;
      border-radius: 12px;
      color: #fff;
      font-size: 0.9rem;
      font-weight: 800;
      letter-spacing: -0.01em;
      cursor: pointer;
      transition: all 0.2s;
    }
    .modal-begin:hover { background: linear-gradient(135deg, #2D6A4F, #40916C); transform: translateY(-1px); }
    .modal-begin:active { transform: scale(0.98); }
    .modal-begin:focus-visible { outline: 2px solid #10b981; outline-offset: 2px; }

    /* ── Light mode overrides ── */
    :host-context(html:not(.dark)) .assess-content { --background: #F5F7F2; }
    :host-context(html:not(.dark)) .hero {
      background: linear-gradient(135deg, #1B4332 0%, #2D6A4F 55%, #40916C 100%);
    }
    :host-context(html:not(.dark)) .hero-title { color: #fff; }
    :host-context(html:not(.dark)) .hero-accent {
      background: linear-gradient(135deg, #d8b4fe 0%, #ede9fe 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    :host-context(html:not(.dark)) .hero-sub { color: rgba(255,255,255,0.7); }
    :host-context(html:not(.dark)) .hero-stat-group {
      background: rgba(255,255,255,0.14);
      border-color: rgba(255,255,255,0.2);
    }
    :host-context(html:not(.dark)) .stat-num {
      background: linear-gradient(135deg, #d8b4fe, #ede9fe);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    }
    :host-context(html:not(.dark)) .pers-num {
      background: linear-gradient(135deg, #d8b4fe, #ede9fe);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    }
    :host-context(html:not(.dark)) .pers-num.good {
      background: linear-gradient(135deg, #86efac, #d1fae5);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    }
    :host-context(html:not(.dark)) .stat-lbl { color: rgba(255,255,255,0.6); }
    :host-context(html:not(.dark)) .stat-div { background: rgba(255,255,255,0.2); }
    :host-context(html:not(.dark)) .hero-cta-link {
      color: #f3e8ff;
      background: rgba(255,255,255,0.12);
      border-color: rgba(255,255,255,0.25);
    }
    :host-context(html:not(.dark)) .hero-cta-link:hover {
      background: rgba(255,255,255,0.2);
    }

    :host-context(html:not(.dark)) .resume-card {
      background: rgba(139,92,246,0.06);
      border-color: rgba(139,92,246,0.18);
    }
    :host-context(html:not(.dark)) .resume-title { color: #1B1B1B; }
    :host-context(html:not(.dark)) .resume-score { color: #8A9B8F; }
    :host-context(html:not(.dark)) .resume-score.pass { color: #059669; }

    :host-context(html:not(.dark)) .fpill { background: #fff; border-color: #D6DDD2; color: #52665A; }
    :host-context(html:not(.dark)) .fpill:hover { background: #f0f4f2; }
    :host-context(html:not(.dark)) .fpill-active[data-val="all"] {
      background: #f0f4f2; border-color: #B7CCBB; color: #52665A;
    }
    :host-context(html:not(.dark)) .fpill-active[data-val="beginner"] {
      background: rgba(16,185,129,0.1); border-color: rgba(16,185,129,0.3); color: #059669;
    }
    :host-context(html:not(.dark)) .fpill-active[data-val="intermediate"] {
      background: rgba(245,158,11,0.1); border-color: rgba(245,158,11,0.3); color: #d97706;
    }
    :host-context(html:not(.dark)) .fpill-active[data-val="advanced"] {
      background: rgba(239,68,68,0.1); border-color: rgba(239,68,68,0.3); color: #dc2626;
    }
    :host-context(html:not(.dark)) .status-pill { color: #8A9B8F; }
    :host-context(html:not(.dark)) .status-active { background: #f0f4f2; border-color: #C7D9CC; color: #1B4332; }
    :host-context(html:not(.dark)) .topic-pill { border-color: #D6DDD2; color: #8A9B8F; }
    :host-context(html:not(.dark)) .topic-active { border-color: rgba(139,92,246,0.3); color: #7c3aed; background: rgba(139,92,246,0.05); }
    :host-context(html:not(.dark)) .filter-count { color: #8A9B8F; }

    :host-context(html:not(.dark)) .assess-card { background: #fff; border-color: #D6DDD2; box-shadow: 0 1px 3px rgba(0,0,0,0.05); }
    :host-context(html:not(.dark)) .assess-card:hover { border-color: #B7CCBB; box-shadow: 0 6px 20px rgba(27,67,50,0.1); }
    :host-context(html:not(.dark)) .card-title { color: #1B1B1B; }
    :host-context(html:not(.dark)) .cat-chip { color: #8A9B8F; background: #f0f4f2; }
    :host-context(html:not(.dark)) .card-desc { color: #52665A; }
    :host-context(html:not(.dark)) .score-bar-track { background: #E8EDE5; }
    :host-context(html:not(.dark)) .history-dot { color: #C7D9CC; }
    :host-context(html:not(.dark)) .attempts-label, :host-context(html:not(.dark)) .last-date { color: #8A9B8F; }
    :host-context(html:not(.dark)) .meta-chip { color: #8A9B8F; background: #f5f7f2; border-color: #D6DDD2; }
    :host-context(html:not(.dark)) .diff-badge[data-d="beginner"]     { color: #059669; background: rgba(16,185,129,0.1); }
    :host-context(html:not(.dark)) .diff-badge[data-d="intermediate"] { color: #d97706; background: rgba(245,158,11,0.1); }
    :host-context(html:not(.dark)) .diff-badge[data-d="advanced"]     { color: #dc2626; background: rgba(239,68,68,0.1); }
    :host-context(html:not(.dark)) .status-badge[data-st="passed"] { color: #059669; background: rgba(16,185,129,0.1); }
    :host-context(html:not(.dark)) .status-badge[data-st="retake"] { color: #dc2626; background: rgba(239,68,68,0.1); }

    :host-context(html:not(.dark)) .modal-box { background: #fff; border-color: #D6DDD2; }
    :host-context(html:not(.dark)) .modal-title { color: #1B1B1B; }
    :host-context(html:not(.dark)) .rule-item { background: #f5f7f2; border-color: #D6DDD2; }
    :host-context(html:not(.dark)) .rule-label { color: #8A9B8F; }
    :host-context(html:not(.dark)) .rule-val { color: #1B1B1B; }
    :host-context(html:not(.dark)) .modal-prior { background: rgba(16,185,129,0.05); border-color: rgba(16,185,129,0.15); color: #52665A; }
    :host-context(html:not(.dark)) .modal-warning { color: #8A9B8F; }
    :host-context(html:not(.dark)) .modal-cancel { background: #f0f4f2; border-color: #D6DDD2; color: #52665A; }
    :host-context(html:not(.dark)) .modal-cancel:hover { background: #e6ede8; }
  `
})
export class AssessListComponent {
  private readonly assessSvc = inject(AssessService);
  private readonly router    = inject(Router);

  // ── Filter state ──
  activeDiff   = signal<DiffFilter>('all');
  activeStatus = signal<StatusFilter>('all');
  activeTopic  = signal<string>('all');

  // ── Pre-quiz modal ──
  pendingQuiz = signal<Assessment | null>(null);

  // ── History (reloaded on component init, refreshes on return from quiz) ──
  history = signal<Record<string, PersistedQuizRecord>>(this.assessSvc.getHistory());

  // ── Static options ──
  readonly diffOptions = [
    { val: 'all',          label: 'All'          },
    { val: 'beginner',     label: 'Beginner'     },
    { val: 'intermediate', label: 'Intermediate' },
    { val: 'advanced',     label: 'Advanced'     },
  ];

  readonly statusOptions = [
    { val: 'all',    label: 'All'           },
    { val: 'new',    label: 'Not attempted' },
    { val: 'passed', label: 'Passed'        },
    { val: 'retake', label: 'Needs retake'  },
  ];

  readonly assessments: Assessment[] = [
    {
      id: 'java-basics',        title: 'Java Fundamentals',      category: 'Core Java',
      faIcon: 'fa-solid fa-mug-hot',         iconColor: '#f59e0b', iconBg: 'rgba(245,158,11,0.12)',
      questions: 20, time: 15, difficulty: 'beginner',
      description: 'Core Java syntax, data types, control flow, OOP principles, and JVM concepts.',
    },
    {
      id: 'oop-concepts',       title: 'OOP Concepts',           category: 'Core Java',
      faIcon: 'fa-solid fa-cubes',           iconColor: '#10b981', iconBg: 'rgba(16,185,129,0.12)',
      questions: 15, time: 12, difficulty: 'beginner',
      description: 'Encapsulation, inheritance, polymorphism, abstraction, and SOLID principles.',
    },
    {
      id: 'collections',        title: 'Collections Framework',  category: 'Core Java',
      faIcon: 'fa-solid fa-layer-group',     iconColor: '#22d3ee', iconBg: 'rgba(34,211,238,0.12)',
      questions: 20, time: 15, difficulty: 'intermediate',
      description: 'List, Set, Map, Queue implementations, iterators, Comparable, and Comparator.',
    },
    {
      id: 'spring-boot-quiz',   title: 'Spring Boot Essentials', category: 'Spring Boot',
      faIcon: 'fa-solid fa-leaf',            iconColor: '#34d399', iconBg: 'rgba(52,211,153,0.12)',
      questions: 20, time: 20, difficulty: 'intermediate',
      description: 'Auto-configuration, starters, REST controllers, dependency injection, and profiles.',
    },
    {
      id: 'hibernate-quiz',     title: 'Hibernate & JPA',        category: 'Hibernate',
      faIcon: 'fa-solid fa-database',        iconColor: '#f97316', iconBg: 'rgba(249,115,22,0.12)',
      questions: 15, time: 15, difficulty: 'intermediate',
      description: 'Entity mapping, relationships, lazy loading, caching levels, and JPQL queries.',
    },
    {
      id: 'concurrency',        title: 'Concurrency & Threads',  category: 'Multithreading',
      faIcon: 'fa-solid fa-bolt',            iconColor: '#eab308', iconBg: 'rgba(234,179,8,0.12)',
      questions: 15, time: 20, difficulty: 'advanced',
      description: 'Thread lifecycle, synchronization, ExecutorService, CompletableFuture, and virtual threads.',
    },
    {
      id: 'microservices-quiz', title: 'Microservices Patterns', category: 'Microservices',
      faIcon: 'fa-solid fa-diagram-project', iconColor: '#8b5cf6', iconBg: 'rgba(139,92,246,0.12)',
      questions: 18, time: 20, difficulty: 'advanced',
      description: 'Service discovery, API gateway, circuit breaker, saga pattern, and event-driven architecture.',
    },
    {
      id: 'design-patterns-quiz', title: 'Design Patterns',      category: 'Core Java',
      faIcon: 'fa-solid fa-puzzle-piece',    iconColor: '#ec4899', iconBg: 'rgba(236,72,153,0.12)',
      questions: 20, time: 18, difficulty: 'intermediate',
      description: 'Singleton, Factory, Observer, Strategy, Builder, Decorator, and other GoF patterns.',
    },
  ];

  // ── Derived data ──
  readonly avgTime = Math.round(
    this.assessments.reduce((s, a) => s + a.time, 0) / this.assessments.length
  );

  topics = computed(() => [
    'all',
    ...new Set(this.assessments.map(a => a.category)),
  ]);

  filtered = computed(() => {
    const diff   = this.activeDiff();
    const status = this.activeStatus();
    const topic  = this.activeTopic();
    const h      = this.history();

    return this.assessments.filter(a => {
      if (diff !== 'all' && a.difficulty !== diff) return false;
      if (topic !== 'all' && a.category !== topic) return false;
      const rec = h[a.id];
      if (status === 'new'    && rec) return false;
      if (status === 'passed' && (!rec || rec.bestScore < 70))  return false;
      if (status === 'retake' && (!rec || rec.bestScore >= 70)) return false;
      return true;
    });
  });

  hasHistory = computed(() => Object.keys(this.history()).length > 0);

  personalStats = computed(() => {
    const h = this.history();
    const attempted = this.assessments.filter(a => h[a.id]);
    if (!attempted.length) return null;
    const avgScore = Math.round(
      attempted.reduce((s, a) => s + h[a.id].lastScore, 0) / attempted.length
    );
    const bestQuiz = attempted.reduce((best, a) =>
      h[a.id].bestScore > h[best.id].bestScore ? a : best
    );
    return {
      completed: attempted.length,
      avgScore,
      bestTitle: bestQuiz.title,
      bestScore: h[bestQuiz.id].bestScore,
    };
  });

  resumeQuiz = computed(() => {
    const h = this.history();
    let latest: { quiz: Assessment; record: PersistedQuizRecord } | null = null;
    for (const quiz of this.assessments) {
      const record = h[quiz.id];
      if (record && (!latest || record.lastAttemptAt > latest.record.lastAttemptAt)) {
        latest = { quiz, record };
      }
    }
    return latest;
  });

  // ── Helpers (read history signal → reactive in template) ──
  quizRecord(id: string): PersistedQuizRecord | null {
    return this.history()[id] ?? null;
  }

  ctaLabel(id: string): string {
    const rec = this.history()[id];
    if (!rec) return 'Start Quiz';
    return rec.bestScore >= 70 ? 'Retake' : 'Try Again';
  }

  diffColor(diff: string): string {
    if (diff === 'beginner')     return '#10b981';
    if (diff === 'intermediate') return '#f59e0b';
    return '#ef4444';
  }

  relativeTime(ts: number): string {
    const days = Math.floor((Date.now() - ts) / 86_400_000);
    if (days === 0) return 'today';
    if (days === 1) return 'yesterday';
    if (days < 7)  return `${days}d ago`;
    return `${Math.floor(days / 7)}w ago`;
  }

  setDiff(val: string): void   { this.activeDiff.set(val as DiffFilter); }
  setStatus(val: string): void { this.activeStatus.set(val as StatusFilter); }

  // ── Actions ──
  openPreQuiz(quiz: Assessment): void {
    this.pendingQuiz.set(quiz);
  }

  dismissModal(): void {
    this.pendingQuiz.set(null);
  }

  beginQuiz(): void {
    const quiz = this.pendingQuiz();
    if (quiz) {
      this.pendingQuiz.set(null);
      this.router.navigate(['/assessments', quiz.id]);
    }
  }

  clearFilters(): void {
    this.activeDiff.set('all');
    this.activeStatus.set('all');
    this.activeTopic.set('all');
  }
}
