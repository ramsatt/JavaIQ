import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader } from '@ionic/angular/standalone';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';
import { AchievementService } from '../services/achievement.service';
import { PurchaseService } from '../services/purchase.service';
import { AppHeaderComponent } from '../shared/app-header.component';
import { Router } from '@angular/router';

interface LeaderboardUser {
  id: string;
  displayName: string;
  photoURL?: string | null;
  points: number;
  isPro?: boolean;
}

const PERIOD_LABELS: Record<string, string> = {
  alltime: 'All Time',
  monthly: 'This Month',
  weekly:  'This Week'
};

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [CommonModule, IonContent, IonHeader, AppHeaderComponent],
  template: `
    <ion-header class="ion-no-border">
      <app-header></app-header>
    </ion-header>

    <ion-content class="lb-content">
      <div class="lb-wrap">

        <!-- Page Header -->
        <div class="lb-page-head">
          <button class="lb-back-btn" (click)="goBack()">
            <i class="bi bi-arrow-left"></i>
          </button>
          <div class="lb-head-text">
            <h1 class="lb-title">Leaderboard</h1>
            <p class="lb-sub">Global Java Champions</p>
          </div>
          <span class="lb-trophy">🏆</span>
        </div>

        <!-- Period Tabs -->
        <div class="lb-tabs">
          @for (p of periods; track p) {
            <button class="lb-tab" [class.lb-tab-active]="activePeriod() === p"
                    (click)="setPeriod(p)">{{ periodLabel(p) }}</button>
          }
        </div>

        <!-- Podium (top 3) -->
        @if (!loading() && podium().length > 0) {
          <div class="lb-podium">
            <!-- 2nd place (left) -->
            @if (podium()[1]; as u) {
              <div class="podium-col podium-2">
                <div class="podium-avatar" [class.podium-me]="isMe(u.id)">
                  @if (u.photoURL) {
                    <img [src]="u.photoURL" class="av-img" alt="">
                  } @else {
                    <span class="av-init">{{ initials(u.displayName) }}</span>
                  }
                </div>
                <div class="podium-medal">🥈</div>
                <span class="podium-name">{{ shortName(u.displayName) }}</span>
                <span class="podium-pts">{{ u.points }} XP</span>
                <div class="podium-bar bar-2"></div>
              </div>
            }

            <!-- 1st place (center, elevated) -->
            @if (podium()[0]; as u) {
              <div class="podium-col podium-1">
                <div class="podium-crown">👑</div>
                <div class="podium-avatar podium-avatar-lg" [class.podium-me]="isMe(u.id)">
                  @if (u.photoURL) {
                    <img [src]="u.photoURL" class="av-img" alt="">
                  } @else {
                    <span class="av-init">{{ initials(u.displayName) }}</span>
                  }
                </div>
                <div class="podium-medal">🥇</div>
                <span class="podium-name">{{ shortName(u.displayName) }}</span>
                <span class="podium-pts">{{ u.points }} XP</span>
                <div class="podium-bar bar-1"></div>
              </div>
            }

            <!-- 3rd place (right) -->
            @if (podium()[2]; as u) {
              <div class="podium-col podium-3">
                <div class="podium-avatar" [class.podium-me]="isMe(u.id)">
                  @if (u.photoURL) {
                    <img [src]="u.photoURL" class="av-img" alt="">
                  } @else {
                    <span class="av-init">{{ initials(u.displayName) }}</span>
                  }
                </div>
                <div class="podium-medal">🥉</div>
                <span class="podium-name">{{ shortName(u.displayName) }}</span>
                <span class="podium-pts">{{ u.points }} XP</span>
                <div class="podium-bar bar-3"></div>
              </div>
            }
          </div>
        }

        <!-- Invite prompt when fewer than 3 competitors -->
        @if (!loading() && podium().length > 0 && podium().length < 3) {
          <div class="lb-invite">
            <span class="lb-invite-icon">🏆</span>
            <div class="lb-invite-text">
              <span class="lb-invite-title">You're a top learner!</span>
              <span class="lb-invite-sub">Invite friends to compete on the leaderboard.</span>
            </div>
          </div>
        }

        <!-- List -->
        <div class="lb-list">
          @if (loading()) {
            <div class="lb-loading">
              <div class="lb-spinner"></div>
              <span class="lb-loading-txt">Loading champions…</span>
            </div>
          } @else {
            @for (u of rest(); track u.id; let i = $index) {
              <div class="lb-row" [class.lb-me]="isMe(u.id)">
                <span class="lb-rank">{{ i + 4 }}</span>
                <div class="lb-av-sm">
                  @if (u.photoURL) {
                    <img [src]="u.photoURL" class="av-img" alt="">
                  } @else {
                    <span class="av-init-sm">{{ initials(u.displayName) }}</span>
                  }
                </div>
                <div class="lb-info">
                  <span class="lb-name">{{ u.displayName || 'Anonymous' }}</span>
                  @if (isMe(u.id)) {
                    <span class="you-chip">You</span>
                  }
                  @if (u.isPro) {
                    <span class="pro-chip">PRO</span>
                  }
                </div>
                <span class="lb-pts">
                  <i class="bi bi-lightning-charge-fill lb-bolt"></i>{{ u.points }}
                </span>
              </div>
            }

            @if (rest().length === 0 && podium().length === 0) {
              <div class="lb-empty">
                <span class="lb-empty-icon">🏅</span>
                <p class="lb-empty-title">No activity yet — be the first!</p>
                <button class="lb-empty-cta" (click)="router.navigate(['/tutorials'])">
                  Start Learning
                </button>
              </div>
            }
          }
        </div>

        <!-- Your rank callout (if outside top 20) -->
        @if (myRank() > 0 && !isInList()) {
          <div class="my-rank-bar">
            <span class="my-rank-label">Your rank</span>
            <span class="my-rank-num">#{{ myRank() }}</span>
            <span class="my-rank-pts">{{ myPoints() }} XP</span>
          </div>
        }

      </div>
    </ion-content>
  `,
  styles: `
    .lb-content {
      --background: #0b1120;
      --padding-start: 0;
      --padding-end: 0;
    }
    :host-context(html:not(.dark)) .lb-content { --background: #f8fafc; }

    .lb-wrap {
      min-height: 100%;
      padding: 0 0 48px;
    }

    /* ── Page Header ── */
    .lb-page-head {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 20px clamp(16px,4vw,32px) 20px;
    }
    .lb-back-btn {
      width: 38px; height: 38px;
      border-radius: 12px;
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.09);
      color: #94a3b8;
      cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      font-size: 0.95rem;
      flex-shrink: 0;
      transition: background 0.18s;
    }
    .lb-back-btn:hover { background: rgba(255,255,255,0.1); }
    :host-context(html:not(.dark)) .lb-back-btn {
      background: #f1f5f2; border-color: #D6DDD2; color: #374151;
    }
    .lb-head-text { flex: 1; }
    .lb-title {
      margin: 0 0 2px;
      font-size: 1.5rem;
      font-weight: 900;
      color: #e2e8f0;
      letter-spacing: -0.03em;
    }
    :host-context(html:not(.dark)) .lb-title { color: #1B1B1B; }
    .lb-sub { margin: 0; font-size: 0.72rem; color: #64748b; }
    .lb-trophy { font-size: 1.8rem; }

    /* ── Period Tabs ── */
    .lb-tabs {
      display: flex;
      gap: 8px;
      padding: 0 clamp(16px,4vw,32px) 20px;
    }
    .lb-tab {
      padding: 6px 16px;
      border-radius: 20px;
      border: 1.5px solid rgba(255,255,255,0.08);
      background: rgba(255,255,255,0.04);
      color: #64748b;
      font-size: 0.75rem;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.2s;
    }
    .lb-tab:hover { color: #94a3b8; }
    .lb-tab-active {
      background: linear-gradient(135deg, #d4a853, #f5c84a) !important;
      border-color: transparent !important;
      color: #1B1B1B !important;
      box-shadow: 0 4px 16px rgba(212,168,83,0.3);
    }
    :host-context(html:not(.dark)) .lb-tab {
      background: #f1f5f2; border-color: #D6DDD2; color: #52665A;
    }

    /* ── Podium ── */
    .lb-podium {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      gap: 10px;
      padding: 0 clamp(16px,4vw,32px) 24px;
    }
    .podium-col {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
    }
    .podium-crown { font-size: 1.4rem; margin-bottom: 2px; }
    .podium-avatar {
      width: 52px; height: 52px;
      border-radius: 50%;
      background: rgba(255,255,255,0.06);
      border: 2.5px solid rgba(255,255,255,0.15);
      display: flex; align-items: center; justify-content: center;
      overflow: hidden;
    }
    .podium-avatar-lg { width: 62px; height: 62px; }
    .podium-me { border-color: #d4a853 !important; box-shadow: 0 0 16px rgba(212,168,83,0.4); }
    .av-img { width: 100%; height: 100%; object-fit: cover; }
    .av-init {
      font-size: 1.1rem; font-weight: 800; color: #94a3b8;
    }
    .podium-medal { font-size: 1.4rem; line-height: 1; }
    .podium-name {
      font-size: 0.72rem; font-weight: 700; color: #cbd5e1;
      max-width: 70px;
      overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
      text-align: center;
    }
    :host-context(html:not(.dark)) .podium-name { color: #374151; }
    .podium-pts { font-size: 0.65rem; font-weight: 800; color: #d4a853; }
    .podium-bar {
      width: 72px;
      border-radius: 6px 6px 0 0;
    }
    .bar-1 { height: 60px; background: linear-gradient(180deg, #d4a853 0%, rgba(212,168,83,0.2) 100%); }
    .bar-2 { height: 44px; background: linear-gradient(180deg, #94a3b8 0%, rgba(148,163,184,0.2) 100%); }
    .bar-3 { height: 32px; background: linear-gradient(180deg, #9b6b3a 0%, rgba(155,107,58,0.2) 100%); }

    /* ── List ── */
    .lb-list {
      padding: 0 clamp(12px,4vw,24px);
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .lb-row {
      display: flex;
      align-items: center;
      gap: 12px;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 14px;
      padding: 12px 14px;
      transition: background 0.18s;
    }
    .lb-row.lb-me {
      background: rgba(212,168,83,0.06);
      border-color: rgba(212,168,83,0.22);
    }
    :host-context(html:not(.dark)) .lb-row {
      background: #ffffff; border-color: #e5e7eb;
    }
    :host-context(html:not(.dark)) .lb-row.lb-me {
      background: rgba(212,168,83,0.06); border-color: rgba(212,168,83,0.3);
    }

    .lb-rank {
      width: 26px;
      font-size: 0.82rem; font-weight: 800; color: #475569;
      text-align: center; flex-shrink: 0;
    }
    .lb-av-sm {
      width: 34px; height: 34px;
      border-radius: 50%;
      background: rgba(255,255,255,0.06);
      border: 1.5px solid rgba(255,255,255,0.1);
      display: flex; align-items: center; justify-content: center;
      overflow: hidden; flex-shrink: 0;
    }
    :host-context(html:not(.dark)) .lb-av-sm { background: #f1f5f2; border-color: #D6DDD2; }
    .av-init-sm { font-size: 0.72rem; font-weight: 800; color: #94a3b8; }

    .lb-info { flex: 1; display: flex; align-items: center; gap: 7px; min-width: 0; }
    .lb-name {
      font-size: 0.88rem; font-weight: 600; color: #cbd5e1;
      white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    }
    :host-context(html:not(.dark)) .lb-name { color: #1B1B1B; }

    .you-chip {
      font-size: 0.55rem; font-weight: 800;
      text-transform: uppercase; letter-spacing: 0.06em;
      background: rgba(212,168,83,0.12);
      color: #d4a853;
      border: 1px solid rgba(212,168,83,0.28);
      border-radius: 5px;
      padding: 2px 6px; flex-shrink: 0;
    }
    .pro-chip {
      font-size: 0.55rem; font-weight: 800;
      text-transform: uppercase; letter-spacing: 0.06em;
      background: rgba(168,85,247,0.12);
      color: #c084fc;
      border: 1px solid rgba(168,85,247,0.3);
      border-radius: 5px;
      padding: 2px 6px; flex-shrink: 0;
    }

    .lb-pts {
      font-size: 0.82rem; font-weight: 800; color: #d4a853;
      display: flex; align-items: center; gap: 4px; flex-shrink: 0;
    }
    .lb-bolt { font-size: 0.7rem; color: #f59e0b; }

    /* ── Loading / Empty ── */
    .lb-loading, .lb-empty {
      text-align: center;
      padding: 48px 0;
      display: flex; flex-direction: column; align-items: center; gap: 12px;
    }
    .lb-spinner {
      width: 36px; height: 36px;
      border: 3px solid rgba(212,168,83,0.1);
      border-top-color: #d4a853;
      border-radius: 50%;
      animation: spin 0.9s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
    .lb-loading-txt { font-size: 0.82rem; color: #64748b; }
    .lb-empty-icon { font-size: 2.5rem; }
    .lb-empty-title { font-size: 0.82rem; color: #64748b; margin: 0; }
    .lb-empty-cta {
      padding: 10px 24px; border-radius: 10px; border: none; cursor: pointer;
      font-size: 0.82rem; font-weight: 700;
      background: linear-gradient(135deg, #1B4332, #40916C);
      color: white;
      box-shadow: 0 4px 16px rgba(27,67,50,0.4);
      transition: opacity 0.2s;
    }
    .lb-empty-cta:hover { opacity: 0.85; }

    /* ── Invite Prompt ── */
    .lb-invite {
      display: flex; align-items: center; gap: 12px;
      margin: 0 clamp(12px,4vw,24px) 16px;
      padding: 14px 16px;
      background: rgba(212,168,83,0.05);
      border: 1px solid rgba(212,168,83,0.16);
      border-radius: 14px;
    }
    .lb-invite-icon { font-size: 1.6rem; flex-shrink: 0; }
    .lb-invite-text { display: flex; flex-direction: column; gap: 2px; }
    .lb-invite-title { font-size: 0.82rem; font-weight: 700; color: #d4a853; }
    .lb-invite-sub { font-size: 0.72rem; color: #64748b; }

    /* ── My Rank Callout ── */
    .my-rank-bar {
      display: flex; align-items: center; justify-content: space-between;
      margin: 14px clamp(12px,4vw,24px) 0;
      padding: 12px 16px;
      background: rgba(212,168,83,0.06);
      border: 1.5px solid rgba(212,168,83,0.2);
      border-radius: 14px;
    }
    .my-rank-label { font-size: 0.72rem; color: #64748b; }
    .my-rank-num { font-size: 1.1rem; font-weight: 900; color: #d4a853; }
    .my-rank-pts { font-size: 0.8rem; font-weight: 700; color: #94a3b8; }
    :host-context(html:not(.dark)) .my-rank-pts { color: #52665A; }
  `
})
export class LeaderboardComponent implements OnInit {
  private dataService = inject(DataService);
  private authService = inject(AuthService);
  private achSvc      = inject(AchievementService);
  private purchaseSvc = inject(PurchaseService);
  protected router    = inject(Router);

  readonly periods = ['alltime', 'monthly', 'weekly'] as const;

  users        = signal<LeaderboardUser[]>([]);
  loading      = signal(true);
  activePeriod = signal<'alltime' | 'monthly' | 'weekly'>('alltime');

  podium = computed(() => this.users().slice(0, 3));
  rest   = computed(() => this.users().slice(3));

  myRank = computed(() => {
    const uid = this.authService.user()?.uid;
    if (!uid) return 0;
    const idx = this.users().findIndex(u => u.id === uid);
    return idx >= 0 ? idx + 1 : 0;
  });

  myPoints = computed(() => {
    const uid = this.authService.user()?.uid;
    return this.users().find(u => u.id === uid)?.points ?? 0;
  });

  async ngOnInit() {
    await this.fetchLeaderboard();
  }

  async setPeriod(period: 'alltime' | 'monthly' | 'weekly') {
    this.activePeriod.set(period);
    await this.fetchLeaderboard();
  }

  async fetchLeaderboard() {
    this.loading.set(true);
    try {
      const data: LeaderboardUser[] = await this.dataService.getLeaderboard(20, this.activePeriod());
      this.users.set(data);
      const rank = this.myRank();
      if (rank > 0) this.achSvc.checkLeaderboardAchievement(rank);
    } catch {
      this.users.set([]);
    } finally {
      this.loading.set(false);
    }
  }

  isMe(uid: string): boolean {
    return this.authService.user()?.uid === uid;
  }

  isInList(): boolean {
    return this.myRank() > 0 && this.myRank() <= this.users().length;
  }

  periodLabel(p: string): string { return PERIOD_LABELS[p] ?? p; }

  initials(name: string): string {
    if (!name) return '?';
    return name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase();
  }

  shortName(name: string): string {
    if (!name) return 'Anonymous';
    return name.split(' ')[0];
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }
}
