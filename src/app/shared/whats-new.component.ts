import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

// Bump this key whenever you want the dialog to reappear for all users.
const SEEN_KEY = 'whats_new_seen_v1.3';

const HIGHLIGHTS = [
  { emoji: '🎯', title: 'Mock Interview Mode',        desc: 'Timed flashcard sessions across any topic with XP rewards.' },
  { emoji: '📊', title: 'Progress Dashboard',         desc: 'Category mastery bars, 7-day activity grid, and weak areas.' },
  { emoji: '🔁', title: 'Review Queue',               desc: 'Spaced-repetition flashcards for questions you\'ve missed.' },
  { emoji: '📅', title: 'Adaptive Study Plan',        desc: 'Goal-based daily tasks that evolve as your streak grows.' },
  { emoji: '🏅', title: 'Achievements & Badges',      desc: 'Unlock 10 milestones and share them with your network.' },
  { emoji: '📜', title: 'Course Certificates',        desc: 'Print-ready certificates when you complete a category.' },
  { emoji: '🔔', title: 'Smart Reminders',            desc: 'Daily streak notifications at your chosen time.' },
  { emoji: '🌐', title: 'Offline Resilience',         desc: 'Writes queue and flush automatically when you\'re back online.' },
];

@Component({
  selector: 'app-whats-new',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (visible()) {
      <!-- Backdrop -->
      <div class="wn-backdrop" (click)="dismiss()"></div>

      <!-- Sheet -->
      <div class="wn-sheet" role="dialog" aria-modal="true" aria-label="What's New">
        <div class="wn-handle"></div>

        <div class="wn-header">
          <span class="wn-sparkle">✨</span>
          <div>
            <h2 class="wn-title">What's New in JavaIQ</h2>
            <p class="wn-version">Version 1.3 · 24-week journey complete</p>
          </div>
        </div>

        <div class="wn-list">
          @for (h of highlights; track h.title) {
            <div class="wn-item">
              <span class="wn-emoji">{{ h.emoji }}</span>
              <div class="wn-item-text">
                <span class="wn-item-title">{{ h.title }}</span>
                <span class="wn-item-desc">{{ h.desc }}</span>
              </div>
            </div>
          }
        </div>

        <button class="wn-btn" (click)="dismiss()">Got it — Let's Go!</button>
      </div>
    }
  `,
  styles: `
    .wn-backdrop {
      position: fixed; inset: 0;
      background: rgba(0,0,0,0.6);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      z-index: 9000;
      animation: fadein 0.25s ease;
    }

    .wn-sheet {
      position: fixed;
      left: 0; right: 0; bottom: 0;
      z-index: 9001;
      background: #111827;
      border-radius: 24px 24px 0 0;
      border-top: 1px solid rgba(255,255,255,0.08);
      padding: 12px 20px 48px;
      max-height: 88vh;
      overflow-y: auto;
      animation: slideup 0.35s cubic-bezier(0.4,0,0.2,1);
    }

    @keyframes fadein  { from { opacity: 0; } to { opacity: 1; } }
    @keyframes slideup { from { transform: translateY(100%); } to { transform: translateY(0); } }

    .wn-handle {
      width: 40px; height: 4px;
      border-radius: 2px;
      background: rgba(255,255,255,0.12);
      margin: 0 auto 20px;
    }

    .wn-header {
      display: flex; align-items: flex-start; gap: 14px;
      margin-bottom: 20px;
    }
    .wn-sparkle { font-size: 2rem; flex-shrink: 0; margin-top: 2px; }
    .wn-title   {
      font-size: 1.2rem; font-weight: 900; color: #e2e8f0;
      letter-spacing: -0.02em; margin: 0 0 4px;
    }
    .wn-version { font-size: 0.72rem; color: #64748b; margin: 0; }

    .wn-list { display: flex; flex-direction: column; gap: 16px; margin-bottom: 28px; }

    .wn-item { display: flex; align-items: flex-start; gap: 14px; }
    .wn-emoji { font-size: 1.4rem; flex-shrink: 0; width: 32px; text-align: center; margin-top: 1px; }
    .wn-item-text { display: flex; flex-direction: column; gap: 2px; }
    .wn-item-title { font-size: 0.88rem; font-weight: 700; color: #e2e8f0; }
    .wn-item-desc  { font-size: 0.74rem; color: #64748b; line-height: 1.5; }

    .wn-btn {
      display: block; width: 100%;
      padding: 15px;
      border-radius: 16px;
      background: linear-gradient(135deg, #6366f1, #8b5cf6);
      border: none;
      color: white;
      font-size: 1rem; font-weight: 700;
      cursor: pointer;
      box-shadow: 0 4px 20px rgba(99,102,241,0.4);
      transition: all 0.2s;
    }
    .wn-btn:hover { transform: translateY(-1px); box-shadow: 0 6px 28px rgba(99,102,241,0.5); }
  `
})
export class WhatsNewComponent {
  readonly highlights = HIGHLIGHTS;
  visible = signal(false);

  constructor() {
    if (!localStorage.getItem(SEEN_KEY)) {
      // Small delay so the app layout settles first
      setTimeout(() => this.visible.set(true), 1200);
    }
  }

  dismiss() {
    localStorage.setItem(SEEN_KEY, '1');
    this.visible.set(false);
  }
}
