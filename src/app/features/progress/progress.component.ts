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
  { name: 'Core Java',            emoji: '☕', route: '/challenge' },
  { name: 'Spring Boot',          emoji: '🌿', route: '/challenge' },
  { name: 'Spring Framework',     emoji: '🌱', route: '/challenge' },
  { name: 'Microservices',        emoji: '🔗', route: '/challenge' },
  { name: 'Hibernate',            emoji: '🗄️', route: '/challenge' },
  { name: 'Multithreading',       emoji: '🧵', route: '/challenge' },
  { name: 'Spring Reactive',      emoji: '⚡', route: '/challenge' },
  { name: 'Reactive Programming', emoji: '📡', route: '/challenge' },
  { name: 'Coding Questions',     emoji: '💻', route: '/challenge' },
  { name: 'Design Patterns',      emoji: '🧩', route: '/challenge' },
];

/** Semantic bar color based on mastery tier — not category-specific */
function tierColor(pct: number): string {
  if (pct >= 75) return '#10b981';   // mastered — emerald
  if (pct >= 25) return '#f59e0b';   // progressing — amber
  return '#f87171';                   // starting — red
}

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

        <!-- ── Page header ── -->
        <div class="pr-header">
          <button class="pr-back" (click)="back()" aria-label="Back to Dashboard">
            <i class="bi bi-arrow-left" aria-hidden="true"></i>
          </button>
          <div>
            <h1 class="pr-title">My Progress</h1>
            <p class="pr-sub">{{ heroSubtitle() }}</p>
          </div>
        </div>

        <!-- ── Next Best Action strip ── -->
        @if (nextBestAction(); as action) {
          <button class="pr-nba" (click)="router.navigate(action.route)" [attr.aria-label]="action.title">
            <div class="pr-nba-icon" [class]="'pr-nba-icon--' + action.type" aria-hidden="true">
              <i class="bi" [class.bi-lightning-charge-fill]="action.type === 'challenge'"
                            [class.bi-arrow-right-circle-fill]="action.type === 'category'"
                            [class.bi-play-circle-fill]="action.type === 'start'"></i>
            </div>
            <div class="pr-nba-text">
              <span class="pr-nba-label">Next Best Action</span>
              <span class="pr-nba-title">{{ action.title }}</span>
              <span class="pr-nba-sub">{{ action.sub }}</span>
            </div>
            <i class="bi bi-chevron-right pr-nba-arrow" aria-hidden="true"></i>
          </button>
        }

        <!-- ── Level + XP card (unified) ── -->
        <div class="pr-level-card">
          <div class="pr-level-card-top">
            <div class="pr-level-badge" aria-label="Level {{ gameSvc.level() }}">
              <span class="pr-lv-num" aria-hidden="true">{{ gameSvc.level() }}</span>
              <span class="pr-lv-lbl" aria-hidden="true">Level</span>
            </div>
            <div class="pr-xp-info">
              <span class="pr-xp-val">{{ gameSvc.xp() | number:'1.0-0' }} XP total</span>
              <span class="pr-xp-hint">
                <strong>{{ gameSvc.xpToNextLevel() | number:'1.0-0' }} XP</strong> to Level {{ gameSvc.level() + 1 }}
              </span>
            </div>
            <div class="pr-xp-pct-badge">{{ gameSvc.levelProgress() | number:'1.0-0' }}%</div>
          </div>
          <!-- XP bar bound directly to level context -->
          <div class="pr-xp-track"
               role="progressbar"
               [attr.aria-valuenow]="gameSvc.levelProgress()"
               aria-valuemin="0" aria-valuemax="100"
               [attr.aria-label]="gameSvc.levelProgress() + '% to Level ' + (gameSvc.level() + 1)">
            <div class="pr-xp-fill" [style.width.%]="gameSvc.levelProgress()"></div>
          </div>
          <div class="pr-xp-bar-foot">
            <span>Level {{ gameSvc.level() }}</span>
            <span>Level {{ gameSvc.level() + 1 }}</span>
          </div>
        </div>

        <!-- ── KPI row ── -->
        <div class="pr-stats-row" role="list">
          <!-- Questions Answered -->
          <div class="pr-stat" role="listitem">
            <span class="pr-stat-num">{{ totalAnswered() }}</span>
            @if (totalAnswered() > 0) {
              <span class="pr-stat-delta">↑ this session</span>
            }
            <span class="pr-stat-lbl">Questions Answered</span>
          </div>

          <!-- Course Completion -->
          <div class="pr-stat" role="listitem">
            <span class="pr-stat-num">{{ overallPct() }}%</span>
            <span class="pr-stat-lbl">Course Completion</span>
          </div>

          <!-- Badges Earned -->
          <div class="pr-stat" role="listitem" [class.pr-stat-zero]="unlockedAch() === 0">
            <span class="pr-stat-num">{{ unlockedAch() }}</span>
            @if (unlockedAch() === 0) {
              <span class="pr-stat-cta" (click)="router.navigate(['/achievements'])" role="link" tabindex="0">
                Earn first →
              </span>
            }
            <span class="pr-stat-lbl">Badges Earned</span>
          </div>

          <!-- Today's Quests -->
          <div class="pr-stat" role="listitem" [class.pr-stat-zero]="!dcService.isCompletedToday()">
            @if (dcService.isCompletedToday()) {
              <span class="pr-stat-num pr-dc-yes" aria-label="Daily challenge completed">✓</span>
            } @else {
              <span class="pr-stat-num pr-stat-zero-num" aria-label="Daily challenge not started">0</span>
              <span class="pr-stat-cta" (click)="router.navigate(['/daily-challenge'])" role="link" tabindex="0">
                Start now →
              </span>
            }
            <span class="pr-stat-lbl">Today's Quests</span>
          </div>
        </div>

        <!-- ── 7-Day Activity ── -->
        <div class="pr-section">
          <div class="pr-section-head-row">
            <span class="pr-section-label">Last 7 Days</span>
            <span class="pr-week-summary">
              {{ weekSummary().activeDays }} / 7 days active
            </span>
          </div>
          <div class="pr-week-card">
            <div class="pr-week-grid" role="list" aria-label="7-day activity">
              @for (day of weekDays(); track day.label) {
                <div class="pr-day-col" role="listitem">
                  <div class="pr-day-tile"
                       [class.pr-day-active]="day.active"
                       [class.pr-day-today]="day.isToday"
                       [attr.aria-label]="day.label + (day.isToday ? ' (today)' : '') + (day.active ? ': active' : ': no activity')">
                  </div>
                  <span class="pr-day-label" [class.pr-day-label-today]="day.isToday">
                    {{ day.label }}
                  </span>
                </div>
              }
            </div>
            @if (!dcService.isCompletedToday()) {
              <div class="pr-week-nudge">
                <i class="bi bi-lightning-charge" aria-hidden="true"></i>
                Today: +50 XP available if you complete your quests
              </div>
            }
          </div>
        </div>

        <!-- ── Category Mastery ── -->
        <div class="pr-section">
          <div class="pr-section-head-row">
            <span class="pr-section-label">Category Mastery</span>
            <!-- Tier legend -->
            <div class="pr-tier-legend" aria-label="Mastery tier guide">
              <span class="pr-tier-dot" style="background:#f87171" aria-hidden="true"></span><span>&lt;25%</span>
              <span class="pr-tier-dot" style="background:#f59e0b" aria-hidden="true"></span><span>25–74%</span>
              <span class="pr-tier-dot" style="background:#10b981" aria-hidden="true"></span><span>≥75%</span>
            </div>
          </div>

          <!-- In Progress -->
          @if (inProgressCategories().length > 0) {
            <div class="pr-cat-group-label">In Progress</div>
            <div class="pr-cat-list">
              @for (cat of inProgressCategories(); track cat.name) {
                <button class="pr-cat-row" (click)="goToCategory(cat.name)"
                        [attr.aria-label]="cat.name + ': ' + getPct(cat.name) + '% complete, ' + getStars(cat.name) + ' of 3 stars'">
                  <div class="pr-cat-icon" [style.background]="tierColor(getPct(cat.name)) + '22'">
                    <span aria-hidden="true">{{ cat.emoji }}</span>
                  </div>
                  <div class="pr-cat-info">
                    <div class="pr-cat-name-row">
                      <span class="pr-cat-name">{{ cat.name }}</span>
                      <div class="pr-cat-stars" [attr.aria-label]="getStars(cat.name) + ' of 3 stars earned'">
                        @for (s of [1,2,3]; track s) {
                          <span class="pr-star" [class.pr-star-on]="getStars(cat.name) >= s" aria-hidden="true">★</span>
                        }
                      </div>
                    </div>
                    <div class="pr-cat-bar-row">
                      <div class="pr-cat-track"
                           role="progressbar"
                           [attr.aria-valuenow]="getPct(cat.name)"
                           aria-valuemin="0" aria-valuemax="100"
                           [attr.aria-label]="cat.name + ' progress'">
                        <div class="pr-cat-fill"
                             [style.width.%]="getPct(cat.name)"
                             [style.background]="tierColor(getPct(cat.name))">
                        </div>
                      </div>
                      <span class="pr-cat-pct">{{ getPct(cat.name) }}%</span>
                    </div>
                  </div>
                  <span class="pr-cat-cta">View →</span>
                </button>
              }
            </div>
          }

          <!-- Mastered -->
          @if (masteredCategories().length > 0) {
            <div class="pr-cat-group-label pr-cat-group-label--mastered">
              <i class="bi bi-patch-check-fill" aria-hidden="true"></i> Mastered
            </div>
            <div class="pr-cat-list">
              @for (cat of masteredCategories(); track cat.name) {
                <button class="pr-cat-row pr-cat-row--mastered" (click)="goToCategory(cat.name)"
                        [attr.aria-label]="cat.name + ': mastered, 3 of 3 stars'">
                  <div class="pr-cat-icon" style="background: rgba(16,185,129,0.15)">
                    <span aria-hidden="true">{{ cat.emoji }}</span>
                  </div>
                  <div class="pr-cat-info">
                    <div class="pr-cat-name-row">
                      <span class="pr-cat-name">{{ cat.name }}</span>
                      <div class="pr-cat-stars" aria-label="3 of 3 stars earned">
                        @for (s of [1,2,3]; track s) {
                          <span class="pr-star pr-star-on" aria-hidden="true">★</span>
                        }
                      </div>
                    </div>
                    <div class="pr-cat-bar-row">
                      <div class="pr-cat-track"
                           role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"
                           [attr.aria-label]="cat.name + ' progress'">
                        <div class="pr-cat-fill" style="width:100%; background:#10b981"></div>
                      </div>
                      <span class="pr-cat-pct pr-cat-pct--mastered">100%</span>
                    </div>
                  </div>
                  <span class="pr-cat-cta">View →</span>
                </button>
              }
            </div>
          }

          <!-- Not Started — collapsed -->
          @if (notStartedCategories().length > 0) {
            <button class="pr-not-started-toggle"
                    (click)="showNotStarted.set(!showNotStarted())"
                    [attr.aria-expanded]="showNotStarted()"
                    aria-controls="not-started-list">
              <i class="bi" [class.bi-chevron-right]="!showNotStarted()" [class.bi-chevron-down]="showNotStarted()" aria-hidden="true"></i>
              {{ notStartedCategories().length }} topics not started
            </button>
            @if (showNotStarted()) {
              <div class="pr-cat-list" id="not-started-list">
                @for (cat of notStartedCategories(); track cat.name) {
                  <button class="pr-cat-row pr-cat-row--unstarted" (click)="goToCategory(cat.name)"
                          [attr.aria-label]="cat.name + ': not started'">
                    <div class="pr-cat-icon" style="background: rgba(255,255,255,0.04)">
                      <span aria-hidden="true">{{ cat.emoji }}</span>
                    </div>
                    <div class="pr-cat-info">
                      <div class="pr-cat-name-row">
                        <span class="pr-cat-name pr-cat-name--muted">{{ cat.name }}</span>
                        <span class="pr-cat-not-started-tag">Not started</span>
                      </div>
                      <div class="pr-cat-bar-row">
                        <div class="pr-cat-track pr-cat-track--empty"
                             role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
                             [attr.aria-label]="cat.name + ' — not started'">
                        </div>
                        <span class="pr-cat-pct pr-cat-pct--muted">0%</span>
                      </div>
                    </div>
                    <span class="pr-cat-start-cta">Start →</span>
                  </button>
                }
              </div>
            }
          }
        </div>

        <!-- ── Weak Areas ── -->
        @if (weakQuestions().length > 0) {
          <div class="pr-section">
            <div class="pr-section-head-row">
              <span class="pr-section-label">Weak Areas</span>
              <span class="pr-section-count">{{ weakQuestions().length }} to review</span>
            </div>
            <div class="pr-weak-list">
              @for (q of visibleWeak(); track q.id) {
                <button class="pr-weak-card" (click)="goToCategory(q.category)"
                        [attr.aria-label]="q.category + ': ' + q.question">
                  <div class="pr-weak-left">
                    <span class="pr-weak-cat">{{ q.category }}</span>
                    <p class="pr-weak-q">{{ q.question }}</p>
                  </div>
                  <div class="pr-weak-badge" aria-hidden="true">
                    <i class="bi bi-arrow-repeat"></i>
                  </div>
                </button>
              }
              @if (weakQuestions().length > 5) {
                <button class="pr-show-more" (click)="showAllWeak.set(!showAllWeak())">
                  {{ showAllWeak() ? 'Show Less' : 'Show ' + (weakQuestions().length - 5) + ' More' }}
                </button>
              }
            </div>
            <!-- CTA — not a dead-end banner -->
            <button class="pr-review-cta" (click)="router.navigate(['/review'])">
              <i class="bi bi-arrow-repeat" aria-hidden="true"></i>
              Start Review Session
            </button>
          </div>

        } @else if (hasUnstartedCategories()) {
          <div class="pr-empty-banner">
            <div class="pr-empty-icon" aria-hidden="true">📚</div>
            <div class="pr-empty-text">
              <span class="pr-empty-title">No weak areas yet</span>
              <span class="pr-empty-sub">Start practising to reveal your personalised focus areas</span>
            </div>
            <button class="pr-empty-cta" (click)="router.navigate(['/daily-challenge'])">
              Start a 5-min quiz →
            </button>
          </div>

        } @else {
          <div class="pr-empty-banner pr-empty-banner--success">
            <div class="pr-empty-icon" aria-hidden="true">🎯</div>
            <div class="pr-empty-text">
              <span class="pr-empty-title">No weak areas — great work!</span>
              <span class="pr-empty-sub">Keep practising to stay sharp</span>
            </div>
          </div>
        }

      </div>
    </ion-content>
  `,
  styles: `
    .pr-content { --background: #0b1120; --padding-start: 0; --padding-end: 0; }

    .pr-body {
      padding: 24px clamp(16px, 4vw, 64px) 80px;
      display: flex; flex-direction: column; gap: 20px;
    }

    @media (min-width: 640px) { .pr-body { padding: 24px clamp(24px, 5vw, 72px) 80px; } }
    @media (min-width: 1024px) {
      .pr-body { padding: 32px clamp(32px, 5vw, 80px) 80px; }
      .pr-cat-list { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
    }
    @media (min-width: 1440px) {
      .pr-body { padding: 40px clamp(48px, 6vw, 96px) 80px; }
      .pr-cat-list { grid-template-columns: repeat(3, 1fr); }
    }

    /* ── Header ── */
    .pr-header { display: flex; align-items: flex-start; gap: 14px; }
    .pr-back {
      width: 38px; height: 38px; border-radius: 10px;
      background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.08);
      color: #94a3b8; display: flex; align-items: center; justify-content: center;
      font-size: 1rem; cursor: pointer; flex-shrink: 0; margin-top: 4px;
      transition: background 0.18s;
    }
    .pr-back:hover { background: rgba(255,255,255,0.10); }
    .pr-back:focus-visible { outline: 2px solid #40916C; outline-offset: 2px; }
    .pr-title { font-size: 1.7rem; font-weight: 900; color: #e2e8f0; letter-spacing: -0.03em; margin: 0 0 4px; }
    /* Personalized subtitle */
    .pr-sub { font-size: 0.78rem; color: #52b788; margin: 0; font-weight: 600; }

    /* ── Next Best Action strip ── */
    .pr-nba {
      display: flex; align-items: center; gap: 14px;
      background: rgba(64,145,108,0.08);
      border: 1.5px solid rgba(64,145,108,0.30);
      border-radius: 16px; padding: 14px 16px;
      cursor: pointer; width: 100%; text-align: left;
      transition: all 0.2s;
    }
    .pr-nba:hover { background: rgba(64,145,108,0.14); border-color: rgba(64,145,108,0.5); }
    .pr-nba:focus-visible { outline: 2px solid #40916C; outline-offset: 2px; }
    .pr-nba-icon {
      width: 40px; height: 40px; border-radius: 12px;
      display: flex; align-items: center; justify-content: center;
      font-size: 1.15rem; flex-shrink: 0;
    }
    .pr-nba-icon--challenge { background: rgba(245,158,11,0.15); color: #fbbf24; }
    .pr-nba-icon--category  { background: rgba(64,145,108,0.18); color: #52b788; }
    .pr-nba-icon--start     { background: rgba(99,102,241,0.15); color: #a5b4fc; }
    .pr-nba-text { flex: 1; display: flex; flex-direction: column; gap: 1px; min-width: 0; }
    .pr-nba-label { font-size: 0.58rem; font-weight: 800; color: #52b788; text-transform: uppercase; letter-spacing: 0.1em; }
    .pr-nba-title { font-size: 0.9rem; font-weight: 700; color: #e2e8f0; }
    .pr-nba-sub   { font-size: 0.7rem; color: #64748b; }
    .pr-nba-arrow { color: #52b788; font-size: 0.75rem; flex-shrink: 0; }

    /* ── Level card (unified) ── */
    .pr-level-card {
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 18px; padding: 18px 20px;
      display: flex; flex-direction: column; gap: 12px;
    }
    .pr-level-card-top {
      display: flex; align-items: center; gap: 14px;
    }
    .pr-level-badge {
      width: 52px; height: 52px; border-radius: 50%;
      background: linear-gradient(135deg, #1B4332, #40916C);
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      box-shadow: 0 0 20px rgba(27,67,50,0.40); flex-shrink: 0;
    }
    .pr-lv-num { font-size: 1.3rem; font-weight: 900; color: white; line-height: 1; }
    .pr-lv-lbl { font-size: 0.48rem; font-weight: 700; color: rgba(255,255,255,0.7); text-transform: uppercase; letter-spacing: 0.08em; }
    .pr-xp-info { flex: 1; }
    .pr-xp-val  { display: block; font-size: 1.05rem; font-weight: 800; color: #e2e8f0; }
    .pr-xp-hint { display: block; font-size: 0.7rem; color: #64748b; margin-top: 2px; }
    .pr-xp-hint strong { color: #52b788; }
    .pr-xp-pct-badge {
      font-size: 1.1rem; font-weight: 900; color: #52b788;
      background: rgba(64,145,108,0.12);
      border: 1px solid rgba(64,145,108,0.22);
      border-radius: 10px; padding: 6px 12px;
      flex-shrink: 0;
    }
    /* XP track — thicker, gradient fill */
    .pr-xp-track {
      height: 10px; border-radius: 5px;
      background: rgba(255,255,255,0.07);
      overflow: hidden;
      box-shadow: inset 0 1px 2px rgba(0,0,0,0.3);
    }
    .pr-xp-fill {
      height: 100%; border-radius: 5px;
      background: linear-gradient(90deg, #1B4332 0%, #40916C 60%, #52b788 100%);
      transition: width 0.6s cubic-bezier(0.4,0,0.2,1);
    }
    .pr-xp-bar-foot {
      display: flex; justify-content: space-between;
      font-size: 0.6rem; font-weight: 600; color: #475569;
    }

    /* ── Stats row ── */
    .pr-stats-row {
      display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;
    }
    @media (min-width: 640px) { .pr-stats-row { grid-template-columns: repeat(4, 1fr); } }
    .pr-stat {
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 14px; padding: 14px 8px;
      display: flex; flex-direction: column; align-items: center; gap: 2px;
    }
    .pr-stat-zero {
      border-color: rgba(255,255,255,0.04);
      background: rgba(255,255,255,0.015);
    }
    /* Large numerals — tabular, bold */
    .pr-stat-num {
      font-size: 1.6rem; font-weight: 900;
      color: #e2e8f0; line-height: 1; font-variant-numeric: tabular-nums;
    }
    .pr-stat-zero-num { color: #334155 !important; }
    .pr-stat-delta { font-size: 0.6rem; font-weight: 700; color: #52b788; }
    .pr-stat-lbl { font-size: 0.6rem; font-weight: 600; color: #475569; text-align: center; line-height: 1.3; margin-top: 2px; }
    .pr-dc-yes { color: #10b981 !important; }
    /* Zero-state "Start now →" inline nudge */
    .pr-stat-cta {
      font-size: 0.62rem; font-weight: 700; color: #52b788;
      cursor: pointer; text-decoration: underline; text-underline-offset: 2px;
    }
    .pr-stat-cta:focus-visible { outline: 2px solid #40916C; outline-offset: 2px; border-radius: 2px; }

    /* ── 7-Day Activity ── */
    .pr-section { display: flex; flex-direction: column; gap: 10px; }
    .pr-section-label {
      font-size: 0.6rem; font-weight: 800;
      text-transform: uppercase; letter-spacing: 0.12em; color: #475569;
    }
    .pr-section-head-row { display: flex; justify-content: space-between; align-items: center; }
    .pr-section-count { font-size: 0.72rem; font-weight: 600; color: #f87171; }

    .pr-week-summary { font-size: 0.68rem; font-weight: 600; color: #52b788; }

    .pr-week-card {
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 16px; padding: 16px 20px;
      display: flex; flex-direction: column; gap: 12px;
    }
    .pr-week-grid {
      display: flex; justify-content: space-between; gap: 4px;
    }
    .pr-day-col { display: flex; flex-direction: column; align-items: center; gap: 6px; }
    .pr-day-tile {
      width: 32px; height: 32px; border-radius: 8px;
      background: rgba(255,255,255,0.05);
      border: 1.5px solid rgba(255,255,255,0.07);
      transition: all 0.2s;
    }
    .pr-day-active {
      background: rgba(16,185,129,0.28) !important;
      border-color: #10b981 !important;
    }
    .pr-day-today {
      border-color: #52b788 !important;
      box-shadow: 0 0 0 2px rgba(64,145,108,0.35), 0 0 10px rgba(64,145,108,0.20);
    }
    .pr-day-label { font-size: 0.58rem; font-weight: 600; color: #475569; }
    .pr-day-label-today { color: #52b788; font-weight: 800; }

    /* Today nudge */
    .pr-week-nudge {
      display: flex; align-items: center; gap: 6px;
      font-size: 0.68rem; font-weight: 600; color: #f59e0b;
      padding-top: 4px; border-top: 1px solid rgba(255,255,255,0.05);
    }
    .pr-week-nudge i { font-size: 0.75rem; }

    /* ── Category mastery ── */
    .pr-cat-group-label {
      font-size: 0.62rem; font-weight: 700;
      text-transform: uppercase; letter-spacing: 0.1em;
      color: #475569; padding: 4px 0;
      display: flex; align-items: center; gap: 5px;
    }
    .pr-cat-group-label--mastered { color: #10b981; }

    .pr-tier-legend {
      display: flex; align-items: center; gap: 6px;
      font-size: 0.6rem; font-weight: 600; color: #475569;
    }
    .pr-tier-dot {
      width: 8px; height: 8px; border-radius: 50%; display: inline-block;
    }

    .pr-cat-list { display: flex; flex-direction: column; gap: 8px; margin-bottom: 4px; }

    .pr-cat-row {
      display: flex; align-items: center; gap: 12px;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 14px; padding: 12px 14px;
      cursor: pointer; width: 100%; text-align: left;
      transition: all 0.2s;
    }
    .pr-cat-row:hover {
      background: rgba(255,255,255,0.06);
      border-color: rgba(255,255,255,0.12);
      transform: translateY(-1px);
      box-shadow: 0 3px 12px rgba(0,0,0,0.3);
    }
    .pr-cat-row:focus-visible { outline: 2px solid #40916C; outline-offset: 2px; }

    .pr-cat-row--mastered {
      background: rgba(16,185,129,0.04);
      border-color: rgba(16,185,129,0.15);
    }
    .pr-cat-row--unstarted {
      border-style: dashed;
      border-color: rgba(255,255,255,0.06);
      background: transparent;
    }

    .pr-cat-icon {
      width: 36px; height: 36px; border-radius: 10px;
      display: flex; align-items: center; justify-content: center;
      font-size: 1rem; flex-shrink: 0;
    }
    .pr-cat-info { flex: 1; display: flex; flex-direction: column; gap: 6px; min-width: 0; }
    .pr-cat-name-row { display: flex; align-items: center; justify-content: space-between; }
    .pr-cat-name { font-size: 0.82rem; font-weight: 700; color: #e2e8f0; }
    .pr-cat-name--muted { color: #475569; }

    /* Stars — single color system */
    .pr-cat-stars { display: flex; gap: 1px; font-size: 0.8rem; }
    .pr-star { color: rgba(255,255,255,0.12); transition: color 0.2s; }
    .pr-star-on { color: #f59e0b; }

    .pr-cat-bar-row { display: flex; align-items: center; gap: 8px; }
    .pr-cat-track {
      flex: 1; height: 6px; border-radius: 3px;
      background: rgba(255,255,255,0.07);
      overflow: hidden;
    }
    .pr-cat-track--empty { background: rgba(255,255,255,0.04); }
    .pr-cat-fill { height: 100%; border-radius: 3px; transition: width 0.5s ease; }
    .pr-cat-pct { font-size: 0.65rem; font-weight: 700; color: #64748b; min-width: 30px; text-align: right; }
    .pr-cat-pct--mastered { color: #10b981; }
    .pr-cat-pct--muted    { color: #334155; }

    /* Hover CTA on rows */
    .pr-cat-cta {
      font-size: 0.68rem; font-weight: 700; color: #52b788;
      opacity: 0; flex-shrink: 0; transition: opacity 0.18s;
    }
    .pr-cat-start-cta {
      font-size: 0.68rem; font-weight: 700; color: #818cf8;
      opacity: 0; flex-shrink: 0; transition: opacity 0.18s;
    }
    .pr-cat-row:hover .pr-cat-cta,
    .pr-cat-row:hover .pr-cat-start-cta,
    .pr-cat-row:focus-visible .pr-cat-cta,
    .pr-cat-row:focus-visible .pr-cat-start-cta { opacity: 1; }

    .pr-cat-not-started-tag {
      font-size: 0.58rem; font-weight: 700;
      color: #475569; background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 20px; padding: 1px 7px;
    }

    /* Not started toggle */
    .pr-not-started-toggle {
      display: flex; align-items: center; gap: 7px;
      font-size: 0.72rem; font-weight: 600; color: #475569;
      background: none; border: 1px dashed rgba(255,255,255,0.08);
      border-radius: 10px; padding: 9px 14px; cursor: pointer; width: 100%;
      transition: all 0.18s;
    }
    .pr-not-started-toggle:hover { background: rgba(255,255,255,0.03); color: #64748b; }
    .pr-not-started-toggle:focus-visible { outline: 2px solid #40916C; outline-offset: 2px; }

    /* ── Weak areas ── */
    .pr-weak-list { display: flex; flex-direction: column; gap: 8px; }
    .pr-weak-card {
      display: flex; align-items: center; gap: 12px;
      background: rgba(239,68,68,0.05); border: 1px solid rgba(239,68,68,0.12);
      border-radius: 14px; padding: 12px 14px; cursor: pointer; width: 100%; text-align: left;
      transition: background 0.18s;
    }
    .pr-weak-card:hover { background: rgba(239,68,68,0.10); }
    .pr-weak-card:focus-visible { outline: 2px solid #f87171; outline-offset: 2px; }
    .pr-weak-left { flex: 1; display: flex; flex-direction: column; gap: 4px; min-width: 0; }
    .pr-weak-cat {
      font-size: 0.6rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #f87171;
    }
    .pr-weak-q {
      font-size: 0.8rem; color: #cbd5e1; line-height: 1.4; margin: 0;
      overflow: hidden; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;
    }
    .pr-weak-badge {
      width: 30px; height: 30px; border-radius: 8px;
      background: rgba(239,68,68,0.12); color: #f87171;
      display: flex; align-items: center; justify-content: center;
      font-size: 0.85rem; flex-shrink: 0;
    }
    .pr-show-more {
      width: 100%; padding: 10px; border-radius: 10px;
      background: transparent; border: 1px dashed rgba(255,255,255,0.1);
      color: #64748b; font-size: 0.78rem; font-weight: 600;
      cursor: pointer; transition: all 0.18s;
    }
    .pr-show-more:hover { background: rgba(255,255,255,0.04); color: #94a3b8; }
    .pr-show-more:focus-visible { outline: 2px solid #40916C; outline-offset: 2px; }

    /* Review session CTA */
    .pr-review-cta {
      display: flex; align-items: center; justify-content: center; gap: 8px;
      width: 100%; padding: 13px;
      background: rgba(239,68,68,0.08); border: 1px solid rgba(239,68,68,0.20);
      border-radius: 12px; cursor: pointer;
      color: #fca5a5; font-size: 0.85rem; font-weight: 700;
      transition: all 0.18s;
    }
    .pr-review-cta:hover { background: rgba(239,68,68,0.14); }
    .pr-review-cta:focus-visible { outline: 2px solid #f87171; outline-offset: 2px; }

    /* ── Empty state banners ── */
    .pr-empty-banner {
      display: flex; align-items: center; gap: 14px;
      background: rgba(99,102,241,0.05); border: 1px solid rgba(99,102,241,0.12);
      border-radius: 16px; padding: 16px;
    }
    .pr-empty-banner--success {
      background: rgba(16,185,129,0.05); border-color: rgba(16,185,129,0.12);
    }
    .pr-empty-icon { font-size: 1.5rem; flex-shrink: 0; }
    .pr-empty-text { flex: 1; display: flex; flex-direction: column; gap: 2px; }
    .pr-empty-title { font-size: 0.85rem; font-weight: 700; color: #e2e8f0; }
    .pr-empty-sub { font-size: 0.7rem; color: #64748b; }
    .pr-empty-cta {
      background: linear-gradient(135deg, #1B4332, #40916C);
      color: #fff; border: none; border-radius: 10px;
      padding: 9px 14px; font-size: 0.75rem; font-weight: 700;
      cursor: pointer; white-space: nowrap; flex-shrink: 0;
      transition: opacity 0.18s;
    }
    .pr-empty-cta:hover { opacity: 0.85; }
    .pr-empty-cta:focus-visible { outline: 2px solid #40916C; outline-offset: 2px; }

    /* ── Light-mode overrides ── */
    :host-context(html:not(.dark)) .pr-content  { --background: #f8fafc; }
    :host-context(html:not(.dark)) .pr-title    { color: #0f172a; }
    :host-context(html:not(.dark)) .pr-sub      { color: #2D6A4F; }
    :host-context(html:not(.dark)) .pr-nba      { background: rgba(27,67,50,0.05); border-color: rgba(27,67,50,0.20); }
    :host-context(html:not(.dark)) .pr-nba:hover { background: rgba(27,67,50,0.10); }
    :host-context(html:not(.dark)) .pr-level-card,
    :host-context(html:not(.dark)) .pr-stat,
    :host-context(html:not(.dark)) .pr-week-card,
    :host-context(html:not(.dark)) .pr-cat-row  { background: #fff; border-color: #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,0.05); }
    :host-context(html:not(.dark)) .pr-cat-row:hover { background: #f1f5f9; box-shadow: 0 3px 12px rgba(0,0,0,0.08); }
    :host-context(html:not(.dark)) .pr-cat-row--unstarted { background: transparent; border-color: #e2e8f0; }
    :host-context(html:not(.dark)) .pr-cat-name { color: #0f172a; }
    :host-context(html:not(.dark)) .pr-cat-name--muted { color: #94a3b8; }
    :host-context(html:not(.dark)) .pr-xp-track,
    :host-context(html:not(.dark)) .pr-cat-track { background: #e2e8f0; }
    :host-context(html:not(.dark)) .pr-day-tile { background: #f1f5f9; border-color: #e2e8f0; }
    :host-context(html:not(.dark)) .pr-xp-val,
    :host-context(html:not(.dark)) .pr-stat-num { color: #0f172a; }
    :host-context(html:not(.dark)) .pr-stat-zero-num { color: #cbd5e1; }
    :host-context(html:not(.dark)) .pr-star { color: #e2e8f0; }
    :host-context(html:not(.dark)) .pr-weak-q { color: #334155; }
    :host-context(html:not(.dark)) .pr-section-label { color: #94a3b8; }
    :host-context(html:not(.dark)) .pr-cat-group-label { color: #94a3b8; }
    :host-context(html:not(.dark)) .pr-not-started-toggle { border-color: #e2e8f0; color: #94a3b8; }
    :host-context(html:not(.dark)) .pr-not-started-toggle:hover { background: #f8fafc; }
  `
})
export class ProgressComponent {
  router     = inject(Router);
  gameSvc    = inject(GamificationService);
  dataSvc    = inject(DataService);
  wrongSvc   = inject(WrongAnswerService);
  dcService  = inject(DailyChallengeService);
  achSvc     = inject(AchievementService);

  readonly categories = CATEGORIES;
  readonly tierColor  = tierColor;

  showAllWeak    = signal(false);
  showNotStarted = signal(false);

  // ── Stats ─────────────────────────────────────────────────────────────────

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

  visibleWeak = computed(() =>
    this.showAllWeak() ? this.weakQuestions() : this.weakQuestions().slice(0, 5)
  );

  hasUnstartedCategories = computed(() =>
    this.categories.some(cat => this.dataSvc.getProgress(cat.name) === 0)
  );

  // ── Category grouping ────────────────────────────────────────────────────

  inProgressCategories = computed(() =>
    this.categories
      .filter(c => { const p = this.dataSvc.getProgress(c.name); return p > 0 && p < 100; })
      .sort((a, b) => this.dataSvc.getProgress(b.name) - this.dataSvc.getProgress(a.name))
  );

  masteredCategories = computed(() =>
    this.categories.filter(c => this.dataSvc.getProgress(c.name) === 100)
  );

  notStartedCategories = computed(() =>
    this.categories.filter(c => this.dataSvc.getProgress(c.name) === 0)
  );

  // ── Personalized title ───────────────────────────────────────────────────

  heroSubtitle = computed((): string => {
    const pct     = this.gameSvc.levelProgress();
    const xpNeeded = this.gameSvc.xpToNextLevel();
    const nextLv   = this.gameSvc.level() + 1;
    return `${pct}% to Level ${nextLv} — ${xpNeeded} XP to go`;
  });

  // ── Next Best Action ─────────────────────────────────────────────────────

  nextBestAction = computed((): { type: string; title: string; sub: string; route: string[] } | null => {
    // 1. Daily challenge not done → highest urgency
    if (!this.dcService.isCompletedToday()) {
      return {
        type: 'challenge',
        title: 'Complete today\'s Daily Challenge',
        sub: '5 questions · 2× XP bonus · keeps your streak alive',
        route: ['/daily-challenge'],
      };
    }
    // 2. Lowest in-progress category
    const inProgress = this.inProgressCategories();
    if (inProgress.length) {
      const cat = inProgress[inProgress.length - 1]; // lowest % (sorted desc, so last)
      const pct = this.dataSvc.getProgress(cat.name);
      const target = Math.min(100, pct + 10);
      return {
        type: 'category',
        title: `Continue ${cat.name}`,
        sub: `${pct}% complete — practice a few questions to reach ${target}%`,
        route: ['/challenge', cat.name],
      };
    }
    // 3. Start an unstarted category
    const unstarted = this.notStartedCategories()[0];
    if (unstarted) {
      return {
        type: 'start',
        title: `Start ${unstarted.name}`,
        sub: 'New topic — answer your first question to begin tracking progress',
        route: ['/challenge', unstarted.name],
      };
    }
    return null;
  });

  // ── 7-Day activity ───────────────────────────────────────────────────────

  weekDays = computed(() => {
    const today    = new Date();
    const todayStr = today.toISOString().split('T')[0];
    const activeDays = this.gameSvc.activeDays();
    const labels   = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(today);
      d.setDate(today.getDate() - (6 - i));
      const dateStr = d.toISOString().split('T')[0];
      return {
        label: labels[d.getDay()],
        active: activeDays.has(dateStr),
        isToday: dateStr === todayStr,
      };
    });
  });

  weekSummary = computed(() => ({
    activeDays: this.weekDays().filter(d => d.active).length,
  }));

  // ── Helpers ───────────────────────────────────────────────────────────────

  getPct(category: string)   { return this.dataSvc.getProgress(category); }
  getStars(category: string) { return this.dataSvc.getCategoryStars(category); }

  goToCategory(category: string) {
    this.router.navigate(['/challenge', category]);
  }

  back() { this.router.navigate(['/dashboard']); }
}
