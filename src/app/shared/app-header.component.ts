import { Component, ChangeDetectionStrategy, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonMenuButton, IonHeader } from '@ionic/angular/standalone';
import { AuthService } from '../auth.service';
import { GamificationService } from '../gamification.service';
import { AlertService } from '../alert.service';
import { SearchModalComponent } from '../search-modal/search-modal.component';

@Component({
  selector: 'app-header',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, IonMenuButton, SearchModalComponent],
  template: `
    
      <header class="dash-header">
      <div class="header-left">
        <ion-menu-button class="menu-btn" color="light"></ion-menu-button>
        <div class="wordmark">
          Java<span class="wm-accent">IQ</span>
          <span class="wm-pro">PRO</span>
        </div>
      </div>

      <div class="header-right">
        <button class="icon-btn search-btn" (click)="openSearch()" title="Search">🔍</button>

        <div class="streak-badge" [class.streak-on]="gameService.streak() > 0">
          🔥 <span>{{ gameService.streak() }}</span>
        </div>

        @if (authService.user()) {
          <img [src]="authService.user()?.photoURL" class="avatar" (click)="logout()" title="Sign out">
        } @else {
          <button class="btn-signin" (click)="login()">Sign In</button>
        }
      </div>
    </header>
    

    <app-search-modal></app-search-modal>
  `,
  styles: [`
    /* ────────── Custom Header ────────── */
    .dash-header {
      position: sticky;
      top: 0;
      z-index: 1000;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 16px;
      padding-top: max(12px, env(safe-area-inset-top));
      background: #1B4332;
      border-bottom: 1px solid rgba(255,255,255,0.06);
      /* Subtle dark glow */
      box-shadow: 0 4px 20px rgba(0,0,0,0.15);
    }
    :host-context(html:not(.dark)) .dash-header {
      background: #1B4332; /* Keep dark green in light mode for premium contrast */
    }

    .header-left {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .menu-btn {
      --padding-start: 0;
      --padding-end: 4px;
      font-size: 1.4rem;
    }
    .wordmark {
      font-size: 1.18rem;
      font-weight: 900;
      color: #ffffff;
      letter-spacing: -0.04em;
      display: flex;
      align-items: baseline;
      gap: 1px;
    }
    .wm-accent { color: #74c69d; }

    .wm-pro {
      font-size: 0.6rem;
      font-weight: 800;
      letter-spacing: 0.16em;
      background: linear-gradient(135deg, #c89432 20%, #f5c84a 55%, #c89432 100%);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      margin-left: 2px;
      transform: translateY(-2px);
    }

    .header-right {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .icon-btn {
      background: rgba(255,255,255,0.07);
      border: 1px solid rgba(255,255,255,0.10);
      font-size: 1.05rem;
      cursor: pointer;
      padding: 5px 7px;
      border-radius: 10px;
      opacity: 0.90;
      transition: all 0.2s ease;
      color: white;
    }
    .icon-btn:hover {
      opacity: 1;
      background: rgba(255,255,255,0.14);
      border-color: rgba(255,255,255,0.18);
    }

    .streak-badge {
      display: flex;
      align-items: center;
      gap: 3px;
      background: rgba(255,255,255,0.07);
      border: 1px solid rgba(255,255,255,0.10);
      border-radius: 20px;
      padding: 4px 10px;
      font-size: 0.78rem;
      font-weight: 700;
      color: rgba(255,255,255,0.50);
      transition: all 0.25s ease;
    }
    .streak-badge.streak-on {
      background: rgba(249,115,22,0.18);
      border-color: rgba(249,115,22,0.38);
      color: #fb923c;
      box-shadow: 0 0 16px rgba(249,115,22,0.22), inset 0 1px 0 rgba(255,180,100,0.12);
    }

    .avatar {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 2px solid rgba(255,255,255,0.22);
      cursor: pointer;
      object-fit: cover;
      transition: border-color 0.2s, box-shadow 0.2s;
    }
    .avatar:hover {
      border-color: rgba(255,255,255,0.50);
      box-shadow: 0 0 10px rgba(255,255,255,0.12);
    }

    .btn-signin {
      background: linear-gradient(135deg, rgba(255,255,255,0.13), rgba(255,255,255,0.05));
      border: 1px solid rgba(255,255,255,0.22);
      color: white;
      padding: 5px 14px;
      border-radius: 20px;
      font-size: 0.78rem;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .btn-signin:hover {
      background: rgba(255,255,255,0.22);
      border-color: rgba(255,255,255,0.38);
    }
  `]
})
export class AppHeaderComponent {
  public authService = inject(AuthService);
  public gameService = inject(GamificationService);
  private alertSvc = inject(AlertService);

  @ViewChild(SearchModalComponent) searchModal!: SearchModalComponent;

  openSearch() {
    this.searchModal?.open();
  }

  login() {
    this.authService.loginWithGoogle();
  }

  async logout() {
    const confirmed = await this.alertSvc.confirm(
      'Are you sure you want to sign out?',
      'Sign Out'
    );
    if (confirmed) {
      this.authService.logout();
    }
  }
}
