import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';
import { AchievementService } from '../services/achievement.service';
import { Router } from '@angular/router';

interface LeaderboardUser {
  id: string;
  displayName: string;
  photoURL?: string | null;
  points: number;
}

const PERIOD_LABELS: Record<string, string> = {
  alltime: 'All Time',
  monthly: 'This Month',
  weekly:  'This Week'
};

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="lb-page">

      <!-- Header -->
      <div class="lb-header">
        <button class="back-btn" (click)="goBack()">
          <i class="bi bi-arrow-left"></i>
        </button>
        <div class="lb-title-block">
          <h1 class="lb-title">Leaderboard</h1>
          <p class="lb-sub">Global Java Champions</p>
        </div>
        <div class="lb-trophy">🏆</div>
      </div>

      <!-- Period tabs -->
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
              <div class="podium-avatar" [class.you]="isMe(u.id)">
                @if (u.photoURL) {
                  <img [src]="u.photoURL" class="avatar-img" alt="">
                } @else {
                  <span class="avatar-initials">{{ initials(u.displayName) }}</span>
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
              <div class="podium-avatar podium-avatar-1" [class.you]="isMe(u.id)">
                @if (u.photoURL) {
                  <img [src]="u.photoURL" class="avatar-img" alt="">
                } @else {
                  <span class="avatar-initials">{{ initials(u.displayName) }}</span>
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
              <div class="podium-avatar" [class.you]="isMe(u.id)">
                @if (u.photoURL) {
                  <img [src]="u.photoURL" class="avatar-img" alt="">
                } @else {
                  <span class="avatar-initials">{{ initials(u.displayName) }}</span>
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

      <!-- Rest of the list -->
      <div class="lb-list">
        @if (loading()) {
          <div class="lb-loading">
            <div class="lb-spinner"></div>
            <span>Loading champions…</span>
          </div>
        } @else {
          @for (u of rest(); track u.id; let i = $index) {
            <div class="lb-row" [class.lb-me]="isMe(u.id)">
              <span class="lb-rank">{{ i + 4 }}</span>
              <div class="lb-avatar-sm">
                @if (u.photoURL) {
                  <img [src]="u.photoURL" class="avatar-img-sm" alt="">
                } @else {
                  <span class="avatar-initials-sm">{{ initials(u.displayName) }}</span>
                }
              </div>
              <div class="lb-info">
                <span class="lb-name">{{ u.displayName || 'Anonymous' }}</span>
                @if (isMe(u.id)) {
                  <span class="you-chip">You</span>
                }
              </div>
              <span class="lb-pts">
                <i class="bi bi-lightning-charge-fill"></i> {{ u.points }}
              </span>
            </div>
          }

          @if (rest().length === 0 && podium().length === 0) {
            <div class="lb-empty">
              <span style="font-size:2.5rem">🏅</span>
              <p>No activity yet — be the first!</p>
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
  `,
  styles: [`
    :host { display: block; }

    .lb-page {
      min-height: 100vh;
      background: linear-gradient(180deg, #060e09 0%, #0c1910 40%, #040c06 100%);
      color: #e4efe7;
      font-family: 'Inter', -apple-system, sans-serif;
      padding-bottom: 40px;
    }

    /* ── Header ── */
    .lb-header {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 56px 20px 20px;
      background: linear-gradient(180deg, #020706 0%, transparent 100%);
    }
    .back-btn {
      width: 38px; height: 38px;
      border-radius: 12px;
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.10);
      color: rgba(255,255,255,0.75);
      cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      font-size: 0.95rem;
      flex-shrink: 0;
      transition: all 0.18s;
    }
    .back-btn:hover { background: rgba(255,255,255,0.14); }
    .lb-title-block { flex: 1; }
    .lb-title {
      margin: 0 0 2px;
      font-size: 1.4rem;
      font-weight: 900;
      color: #fff;
      letter-spacing: -0.03em;
    }
    .lb-sub { margin: 0; font-size: 0.72rem; color: rgba(255,255,255,0.4); }
    .lb-trophy { font-size: 1.8rem; }

    /* ── Tabs ── */
    .lb-tabs {
      display: flex;
      gap: 8px;
      padding: 0 20px 16px;
    }
    .lb-tab {
      padding: 6px 16px;
      border-radius: 20px;
      border: 1px solid rgba(255,255,255,0.1);
      background: rgba(255,255,255,0.05);
      color: rgba(255,255,255,0.5);
      font-size: 0.75rem;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.2s;
    }
    .lb-tab-active {
      background: linear-gradient(135deg, #d4a853, #f5c84a);
      border-color: transparent;
      color: #1B1B1B;
      box-shadow: 0 4px 16px rgba(212,168,83,0.35);
    }

    /* ── Podium ── */
    .lb-podium {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      gap: 10px;
      padding: 0 20px 24px;
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
      background: rgba(255,255,255,0.08);
      border: 2.5px solid rgba(255,255,255,0.18);
      display: flex; align-items: center; justify-content: center;
      overflow: hidden;
    }
    .podium-avatar.you { border-color: #d4a853; box-shadow: 0 0 16px rgba(212,168,83,0.4); }
    .podium-avatar-1 { width: 62px; height: 62px; }
    .avatar-img { width: 100%; height: 100%; object-fit: cover; }
    .avatar-initials {
      font-size: 1.1rem;
      font-weight: 800;
      color: rgba(255,255,255,0.7);
    }
    .podium-medal { font-size: 1.4rem; line-height: 1; }
    .podium-name {
      font-size: 0.72rem;
      font-weight: 700;
      color: rgba(255,255,255,0.85);
      max-width: 70px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      text-align: center;
    }
    .podium-pts {
      font-size: 0.65rem;
      font-weight: 800;
      color: #d4a853;
    }
    .podium-bar {
      width: 72px;
      border-radius: 6px 6px 0 0;
    }
    .bar-1 { height: 60px; background: linear-gradient(180deg, #d4a853 0%, rgba(212,168,83,0.3) 100%); }
    .bar-2 { height: 44px; background: linear-gradient(180deg, #94a3b8 0%, rgba(148,163,184,0.3) 100%); }
    .bar-3 { height: 32px; background: linear-gradient(180deg, #9b6b3a 0%, rgba(155,107,58,0.3) 100%); }

    /* ── List ── */
    .lb-list { padding: 0 16px; display: flex; flex-direction: column; gap: 8px; }

    .lb-row {
      display: flex;
      align-items: center;
      gap: 12px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 14px;
      padding: 12px 14px;
      transition: all 0.18s;
    }
    .lb-row.lb-me {
      background: rgba(212,168,83,0.07);
      border-color: rgba(212,168,83,0.28);
    }

    .lb-rank {
      width: 26px;
      font-size: 0.82rem;
      font-weight: 800;
      color: rgba(255,255,255,0.4);
      text-align: center;
      flex-shrink: 0;
    }

    .lb-avatar-sm {
      width: 34px; height: 34px;
      border-radius: 50%;
      background: rgba(255,255,255,0.07);
      border: 1.5px solid rgba(255,255,255,0.12);
      display: flex; align-items: center; justify-content: center;
      overflow: hidden;
      flex-shrink: 0;
    }
    .avatar-img-sm { width: 100%; height: 100%; object-fit: cover; }
    .avatar-initials-sm { font-size: 0.72rem; font-weight: 800; color: rgba(255,255,255,0.65); }

    .lb-info { flex: 1; display: flex; align-items: center; gap: 7px; min-width: 0; }
    .lb-name {
      font-size: 0.88rem;
      font-weight: 600;
      color: rgba(255,255,255,0.85);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .you-chip {
      font-size: 0.55rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      background: rgba(212,168,83,0.15);
      color: #d4a853;
      border: 1px solid rgba(212,168,83,0.3);
      border-radius: 5px;
      padding: 2px 6px;
      flex-shrink: 0;
    }

    .lb-pts {
      font-size: 0.82rem;
      font-weight: 800;
      color: #d4a853;
      display: flex;
      align-items: center;
      gap: 4px;
      flex-shrink: 0;
    }
    .lb-pts .bi { font-size: 0.7rem; color: #f59e0b; }

    /* ── Loading / empty ── */
    .lb-loading, .lb-empty {
      text-align: center;
      padding: 48px 0;
      color: rgba(255,255,255,0.35);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }
    .lb-spinner {
      width: 36px; height: 36px;
      border: 3px solid rgba(212,168,83,0.12);
      border-top-color: #d4a853;
      border-radius: 50%;
      animation: spin 0.9s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
    .lb-empty p { font-size: 0.82rem; margin: 0; }

    /* ── My rank callout ── */
    .my-rank-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 14px 16px 0;
      padding: 12px 16px;
      background: rgba(212,168,83,0.07);
      border: 1.5px solid rgba(212,168,83,0.22);
      border-radius: 14px;
    }
    .my-rank-label { font-size: 0.72rem; color: rgba(255,255,255,0.5); }
    .my-rank-num { font-size: 1.1rem; font-weight: 900; color: #d4a853; }
    .my-rank-pts { font-size: 0.8rem; font-weight: 700; color: rgba(255,255,255,0.6); }
  `]
})
export class LeaderboardComponent implements OnInit {
  private dataService = inject(DataService);
  private authService = inject(AuthService);
  private achSvc      = inject(AchievementService);
  private router      = inject(Router);

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

      // Check rank achievement for current user
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
