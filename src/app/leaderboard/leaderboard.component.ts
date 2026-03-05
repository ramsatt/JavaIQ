import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="leaderboard-container">
      <header class="header">
        <button (click)="goBack()" class="back-link">
          <i class="bi bi-arrow-left"></i>
        </button>
        <h1>Leaderboard</h1>
      </header>

      <div class="tabs">
        <button [class.active]="activePeriod() === 'alltime'" (click)="setPeriod('alltime')">All Time</button>
        <button [class.active]="activePeriod() === 'monthly'" (click)="setPeriod('monthly')">This Month</button>
        <button [class.active]="activePeriod() === 'weekly'" (click)="setPeriod('weekly')">This Week</button>
      </div>

      <div class="list">
        @if (loading()) {
          <div class="loading-state">
            <div class="spinner"></div>
            <span>Finding champions...</span>
          </div>
        } @else {
          @for (user of users(); track user.id; let i = $index) {
            <div class="user-row"
                 [class.top-three]="i < 3"
                 [class.current-user]="isCurrentUser(user.id)">
              <div class="rank">
                @if (i === 0) { 🥇 }
                @else if (i === 1) { 🥈 }
                @else if (i === 2) { 🥉 }
                @else { {{ i + 1 }} }
              </div>
              <div class="user-info">
                <span class="name">{{ user.displayName || 'Anonymous' }}</span>
                @if (isCurrentUser(user.id)) {
                  <span class="you-badge">You</span>
                }
              </div>
              <div class="points">
                <i class="bi bi-lightning-charge-fill"></i>
                {{ user.points }} XP
              </div>
            </div>
          } @empty {
            <div class="empty-state">
              <i class="bi bi-trophy"></i>
              <p>No activity this period yet. Be the first!</p>
            </div>
          }
        }
      </div>
    </div>
  `,
  styles: [`
    .leaderboard-container {
      padding: 24px;
      background: #020617;
      min-height: 100vh;
      color: white;
    }
    .header {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 30px;
    }
    .back-link {
      background: rgba(255,255,255,0.05);
      border: none;
      color: white;
      width: 40px;
      height: 40px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
    }
    .tabs {
      display: flex;
      gap: 10px;
      margin-bottom: 24px;
    }
    .tabs button {
      background: rgba(255,255,255,0.05);
      border: none;
      color: #94a3b8;
      padding: 8px 18px;
      border-radius: 25px;
      font-weight: 600;
      font-size: 0.78rem;
      transition: all 0.2s;
      cursor: pointer;
    }
    .tabs button.active {
      background: linear-gradient(135deg, #F2994A 0%, #F2C94C 100%);
      color: white;
      box-shadow: 0 4px 15px rgba(242, 153, 74, 0.3);
    }
    .list {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .user-row {
      display: flex;
      align-items: center;
      background: rgba(30, 41, 59, 0.4);
      padding: 18px;
      border-radius: 20px;
      border: 1px solid rgba(255, 255, 255, 0.05);
      transition: transform 0.2s;
    }
    .top-three {
      background: rgba(242, 153, 74, 0.08);
      border-color: rgba(242, 153, 74, 0.2);
    }
    .rank {
      width: 40px;
      font-weight: 800;
      font-size: 1.2rem;
      color: #94a3b8;
    }
    .top-three .rank {
      color: #F2994A;
      font-size: 1.4rem;
    }
    .user-info {
      flex: 1;
    }
    .name {
      font-weight: 600;
      font-size: 1.1rem;
    }
    .points {
      font-weight: 700;
      color: #ffd700;
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 1.1rem;
    }
    .loading-state, .empty-state {
      padding: 60px 0;
      text-align: center;
      color: #64748b;
    }
    .spinner {
      width: 40px;
      height: 40px;
      border: 3px solid rgba(242, 153, 74, 0.1);
      border-top-color: #F2994A;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin: 0 auto 15px;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
    .empty-state i {
      font-size: 3rem;
      margin-bottom: 15px;
      display: block;
      opacity: 0.5;
    }
    .current-user {
      border-color: rgba(242, 153, 74, 0.4) !important;
      background: rgba(242, 153, 74, 0.06) !important;
    }
    .user-info {
      display: flex;
      align-items: center;
      gap: 8px;
      flex: 1;
    }
    .you-badge {
      font-size: 0.55rem;
      font-weight: 800;
      background: rgba(242,153,74,0.15);
      color: #F2994A;
      border: 1px solid rgba(242,153,74,0.35);
      border-radius: 5px;
      padding: 2px 7px;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }
  `]
})
export class LeaderboardComponent implements OnInit {
  private dataService = inject(DataService);
  private authService = inject(AuthService);
  private router = inject(Router);

  users = signal<any[]>([]);
  loading = signal<boolean>(true);
  activePeriod = signal<'alltime' | 'monthly' | 'weekly'>('alltime');

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
      const data = await this.dataService.getLeaderboard(20, this.activePeriod());
      this.users.set(data);
    } catch {
      this.users.set([]);
    } finally {
      this.loading.set(false);
    }
  }

  isCurrentUser(uid: string): boolean {
    return this.authService.user()?.uid === uid;
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
