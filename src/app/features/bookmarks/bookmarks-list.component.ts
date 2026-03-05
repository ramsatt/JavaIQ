import { Component, inject, ChangeDetectionStrategy, computed } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonToolbar, IonButtons, IonMenuButton } from '@ionic/angular/standalone';
import { BookmarksService, BookmarkType } from '../../bookmarks.service';

const TYPE_CONFIG: Record<BookmarkType, { label: string; icon: string; color: string }> = {
  tutorial: { label: 'Tutorials', icon: 'fa-solid fa-book-open', color: '#10b981' },
  interview: { label: 'Interview Questions', icon: 'fa-solid fa-circle-question', color: '#6366f1' },
  coding: { label: 'Coding Questions', icon: 'fa-solid fa-terminal', color: '#3b82f6' },
  leetcode: { label: 'LeetCode', icon: 'fa-solid fa-trophy', color: '#f59e0b' },
  experience: { label: 'Experiences', icon: 'fa-solid fa-microphone-lines', color: '#10b981' },
};

const TYPE_ORDER: BookmarkType[] = ['tutorial', 'interview', 'coding', 'leetcode', 'experience'];

@Component({
  selector: 'app-bookmarks-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonContent, IonHeader, IonToolbar, IonButtons, IonMenuButton],
  template: `
    <ion-header class="ion-no-border" translucent="true">
      <ion-toolbar class="bm-toolbar">
        <ion-buttons slot="start">
          <ion-menu-button color="light"></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="bm-content">

      <div class="hero">
        <div class="hero-glow g1"></div>
        <div class="hero-inner">
          <span class="hero-badge">
            <i class="fa-solid fa-bookmark hero-badge-icon"></i>
            Saved Items
          </span>
          <h1 class="hero-title">Your <span class="hero-accent">Bookmarks</span></h1>
          <p class="hero-sub">Everything you saved, organised by type</p>
          <div class="hero-stats">
            <div class="hero-stat">
              <span class="stat-num">{{ bookmarks.bookmarks().length }}</span>
              <span class="stat-lbl">Saved</span>
            </div>
          </div>
        </div>
      </div>

      <div class="body">

        @if (bookmarks.bookmarks().length === 0) {
          <div class="empty-state">
            <i class="fa-solid fa-bookmark empty-icon"></i>
            <p class="empty-title">Nothing saved yet</p>
            <p class="empty-sub">Tap the bookmark icon on any question, tutorial, or experience to save it here</p>
          </div>
        } @else {
          @for (group of groups(); track group.type) {
            <div class="section">
              <div class="section-head">
                <i [class]="cfg(group.type).icon" [style.color]="cfg(group.type).color" class="sh-icon"></i>
                <span class="sh-title">{{ cfg(group.type).label }}</span>
                <span class="sh-count">{{ group.items.length }}</span>
              </div>
              @for (item of group.items; track item.id) {
                <button class="bm-card" (click)="open(item.route)">
                  <div class="bm-icon-wrap" [style.background]="cfg(group.type).color + '1a'">
                    <i [class]="cfg(group.type).icon" [style.color]="cfg(group.type).color"></i>
                  </div>
                  <div class="bm-info">
                    <span class="bm-title">{{ item.title }}</span>
                    <span class="bm-sub">{{ item.subtitle }}</span>
                  </div>
                  <i class="fa-solid fa-chevron-right bm-arrow"></i>
                </button>
              }
            </div>
          }
        }

      </div>
    </ion-content>
  `,
  styles: `
    .bm-toolbar { --background: #0b1120; --color: white; --border-style: none; }
    .bm-content { --background: #0b1120; }

    .hero {
      position: relative;
      padding: 0 20px 28px;
      overflow: hidden;
    }
    .hero-glow.g1 {
      position: absolute;
      top: -60px; right: -40px;
      width: 220px; height: 220px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%);
      pointer-events: none;
    }
    .hero-inner { position: relative; z-index: 1; }

    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 0.65rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: #6366f1;
      background: rgba(99,102,241,0.1);
      border: 1px solid rgba(99,102,241,0.25);
      border-radius: 20px;
      padding: 5px 14px;
      margin-bottom: 14px;
    }
    .hero-badge-icon { font-size: 0.65rem; }
    .hero-title {
      font-size: 1.8rem; font-weight: 900; color: #e2e8f0;
      letter-spacing: -0.03em; line-height: 1.15; margin: 0 0 8px;
    }
    .hero-accent {
      background: linear-gradient(135deg, #6366f1, #818cf8);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .hero-sub { font-size: 0.8rem; color: #64748b; margin: 0 0 22px; }
    .hero-stats {
      display: flex;
      background: rgba(255,255,255,0.035);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 14px;
      padding: 14px 24px;
    }
    .hero-stat { text-align: center; }
    .stat-num {
      display: block; font-size: 1.4rem; font-weight: 800;
      background: linear-gradient(135deg, #6366f1, #818cf8);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .stat-lbl {
      display: block; font-size: 0.58rem; font-weight: 600;
      color: #64748b; text-transform: uppercase; letter-spacing: 0.08em;
    }

    .body { padding: 8px 16px 100px; }

    .section { margin-bottom: 24px; }
    .section-head {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 10px;
    }
    .sh-icon { font-size: 0.7rem; }
    .sh-title {
      font-size: 0.68rem; font-weight: 700;
      text-transform: uppercase; letter-spacing: 0.1em; color: #94a3b8;
      flex: 1;
    }
    .sh-count { font-size: 0.65rem; font-weight: 600; color: #475569; }

    .bm-card {
      display: flex;
      align-items: center;
      gap: 12px;
      width: 100%;
      text-align: left;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 14px;
      padding: 12px 14px;
      color: inherit;
      cursor: pointer;
      transition: all 0.2s;
      margin-bottom: 8px;
    }
    .bm-card:hover {
      background: rgba(255,255,255,0.055);
      border-color: rgba(255,255,255,0.12);
      transform: translateY(-1px);
    }
    .bm-icon-wrap {
      flex-shrink: 0;
      width: 38px; height: 38px;
      border-radius: 10px;
      display: flex; align-items: center; justify-content: center;
      font-size: 0.85rem;
    }
    .bm-info { flex: 1; min-width: 0; }
    .bm-title {
      display: block; font-size: 0.85rem; font-weight: 600; color: #e2e8f0;
      white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    }
    .bm-sub { display: block; font-size: 0.65rem; color: #64748b; margin-top: 2px; }
    .bm-arrow { font-size: 0.6rem; color: #334155; flex-shrink: 0; }

    .empty-state {
      display: flex; flex-direction: column; align-items: center;
      padding: 80px 24px; text-align: center; gap: 12px;
    }
    .empty-icon { font-size: 2.5rem; color: #334155; }
    .empty-title { font-size: 1rem; font-weight: 700; color: #94a3b8; margin: 0; }
    .empty-sub { font-size: 0.78rem; color: #475569; line-height: 1.6; margin: 0; max-width: 260px; }
  `
})
export class BookmarksListComponent {
  bookmarks = inject(BookmarksService);
  private router = inject(Router);

  groups = computed(() => {
    return TYPE_ORDER
      .map(type => ({ type, items: this.bookmarks.getByType(type) }))
      .filter(g => g.items.length > 0);
  });

  cfg(type: BookmarkType) {
    return TYPE_CONFIG[type];
  }

  open(route: string[]) {
    this.router.navigate(route);
  }
}
