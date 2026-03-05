import { Component, inject, signal, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonToolbar, IonButtons, IonMenuButton } from '@ionic/angular/standalone';
import { ThemeService } from '../../theme.service';
import { AuthService } from '../../auth.service';
import { AlertService } from '../../alert.service';
import { Firestore, doc, updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-settings',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonContent, IonHeader, IonToolbar, IonButtons, IonMenuButton],
  template: `
    <ion-header class="ion-no-border" translucent="true">
      <ion-toolbar class="set-toolbar">
        <ion-buttons slot="start">
          <ion-menu-button color="light"></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="set-content">
      <div class="set-body">

        <!-- Header -->
        <div class="set-header">
          <h1 class="set-title">Settings</h1>
          <p class="set-sub">Preferences & account</p>
        </div>

        <!-- Account Section -->
        @if (auth.user(); as user) {
          <div class="set-section">
            <span class="set-section-label">Account</span>
            <div class="set-card">
              <div class="account-row">
                <div class="account-avatar">
                  {{ user.displayName?.charAt(0) ?? '?' }}
                </div>
                <div class="account-info">
                  <span class="account-name">{{ user.displayName || 'Anonymous' }}</span>
                  <span class="account-email">{{ user.email }}</span>
                </div>
              </div>
            </div>
          </div>
        }

        <!-- Appearance -->
        <div class="set-section">
          <span class="set-section-label">Appearance</span>
          <div class="set-card">
            <div class="set-row" (click)="toggleTheme()">
              <div class="set-row-left">
                <div class="set-icon-wrap" style="background: rgba(99,102,241,0.12)">
                  <i class="fa-solid fa-moon" style="color:#818cf8"></i>
                </div>
                <span class="set-row-label">Dark Mode</span>
              </div>
              <div class="toggle-track" [class.toggle-on]="themeService.theme() === 'dark'" (click)="$event.stopPropagation(); toggleTheme()">
                <div class="toggle-thumb"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Notifications -->
        <div class="set-section">
          <span class="set-section-label">Notifications</span>
          <div class="set-card">
            <div class="set-row" (click)="toggleNotifications()">
              <div class="set-row-left">
                <div class="set-icon-wrap" style="background: rgba(16,185,129,0.12)">
                  <i class="fa-solid fa-bell" style="color:#10b981"></i>
                </div>
                <div>
                  <span class="set-row-label">Daily Reminders</span>
                  <span class="set-row-sub">Get nudged to keep your streak</span>
                </div>
              </div>
              <div class="toggle-track" [class.toggle-on]="notifEnabled()" (click)="$event.stopPropagation(); toggleNotifications()">
                <div class="toggle-thumb"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- About -->
        <div class="set-section">
          <span class="set-section-label">About</span>
          <div class="set-card">
            <div class="set-row" (click)="openPrivacyPolicy()">
              <div class="set-row-left">
                <div class="set-icon-wrap" style="background: rgba(59,130,246,0.12)">
                  <i class="fa-solid fa-shield-halved" style="color:#60a5fa"></i>
                </div>
                <span class="set-row-label">Privacy Policy</span>
              </div>
              <i class="fa-solid fa-chevron-right set-chevron"></i>
            </div>
            <div class="set-divider"></div>
            <div class="set-row" (click)="openAbout()">
              <div class="set-row-left">
                <div class="set-icon-wrap" style="background: rgba(245,158,11,0.12)">
                  <i class="fa-solid fa-circle-info" style="color:#f59e0b"></i>
                </div>
                <span class="set-row-label">About JavaIQ</span>
              </div>
              <i class="fa-solid fa-chevron-right set-chevron"></i>
            </div>
            <div class="set-divider"></div>
            <div class="set-row set-version-row">
              <div class="set-row-left">
                <div class="set-icon-wrap" style="background: rgba(100,116,139,0.12)">
                  <i class="fa-solid fa-code-branch" style="color:#94a3b8"></i>
                </div>
                <span class="set-row-label">Version</span>
              </div>
              <span class="set-version-val">1.3.0</span>
            </div>
          </div>
        </div>

        <!-- Danger Zone -->
        @if (auth.user()) {
          <div class="set-section">
            <div class="set-card">
              <button class="set-logout-btn" (click)="confirmLogout()">
                <i class="fa-solid fa-arrow-right-from-bracket"></i>
                Sign Out
              </button>
            </div>
          </div>
        }

      </div>
    </ion-content>
  `,
  styles: `
    .set-toolbar { --background: #0b1120; --color: white; --border-style: none; }
    .set-content { --background: #0b1120; }

    .set-body { padding: 8px 16px 80px; max-width: 520px; margin: 0 auto; }

    .set-header { padding: 8px 4px 24px; }
    .set-title { font-size: 1.8rem; font-weight: 900; color: #e2e8f0; letter-spacing: -0.03em; margin: 0 0 4px; }
    .set-sub { font-size: 0.78rem; color: #64748b; margin: 0; }

    .set-section { margin-bottom: 20px; }
    .set-section-label {
      display: block;
      font-size: 0.6rem; font-weight: 700;
      text-transform: uppercase; letter-spacing: 0.12em;
      color: #475569; margin-bottom: 8px; padding-left: 4px;
    }

    .set-card {
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 16px;
      overflow: hidden;
    }

    /* Account */
    .account-row {
      display: flex; align-items: center; gap: 14px;
      padding: 16px;
    }
    .account-avatar {
      width: 48px; height: 48px;
      border-radius: 50%;
      background: linear-gradient(135deg, #10b981, #059669);
      display: flex; align-items: center; justify-content: center;
      font-size: 1.2rem; font-weight: 700; color: white;
      flex-shrink: 0;
    }
    .account-name { display: block; font-size: 0.95rem; font-weight: 700; color: #e2e8f0; }
    .account-email { display: block; font-size: 0.72rem; color: #64748b; margin-top: 2px; }

    /* Rows */
    .set-row {
      display: flex; align-items: center; justify-content: space-between;
      padding: 14px 16px;
      cursor: pointer;
      transition: background 0.15s;
    }
    .set-row:hover { background: rgba(255,255,255,0.025); }
    .set-version-row { cursor: default; }
    .set-version-row:hover { background: transparent; }

    .set-row-left { display: flex; align-items: center; gap: 12px; }
    .set-icon-wrap {
      width: 34px; height: 34px;
      border-radius: 9px;
      display: flex; align-items: center; justify-content: center;
      font-size: 0.8rem; flex-shrink: 0;
    }
    .set-row-label { font-size: 0.88rem; font-weight: 600; color: #e2e8f0; }
    .set-row-sub { font-size: 0.65rem; color: #64748b; display: block; margin-top: 1px; }
    .set-chevron { font-size: 0.6rem; color: #475569; }
    .set-version-val { font-size: 0.78rem; font-weight: 600; color: #475569; }
    .set-divider { height: 1px; background: rgba(255,255,255,0.05); margin: 0 16px; }

    /* Toggle */
    .toggle-track {
      width: 44px; height: 26px;
      border-radius: 13px;
      background: rgba(255,255,255,0.1);
      position: relative;
      cursor: pointer;
      transition: background 0.25s;
      flex-shrink: 0;
    }
    .toggle-on { background: #10b981 !important; }
    .toggle-thumb {
      position: absolute;
      top: 3px; left: 3px;
      width: 20px; height: 20px;
      border-radius: 50%;
      background: white;
      transition: transform 0.25s;
      box-shadow: 0 1px 4px rgba(0,0,0,0.3);
    }
    .toggle-on .toggle-thumb { transform: translateX(18px); }

    /* Logout */
    .set-logout-btn {
      width: 100%; padding: 14px;
      background: rgba(239,68,68,0.08);
      border: none;
      color: #f87171;
      font-size: 0.88rem; font-weight: 700;
      display: flex; align-items: center; justify-content: center; gap: 10px;
      cursor: pointer;
      transition: background 0.2s;
      border-radius: 16px;
    }
    .set-logout-btn:hover { background: rgba(239,68,68,0.14); }
  `
})
export class SettingsComponent implements OnInit {
  themeService = inject(ThemeService);
  auth = inject(AuthService);
  private alertService = inject(AlertService);
  private router = inject(Router);
  private firestore = inject(Firestore);

  notifEnabled = signal(true);

  ngOnInit() {
    // Load notification preference from localStorage as quick read
    const stored = localStorage.getItem('notif_enabled');
    if (stored !== null) this.notifEnabled.set(stored !== 'false');
  }

  toggleTheme() {
    this.themeService.toggle();
  }

  async toggleNotifications() {
    const newVal = !this.notifEnabled();
    this.notifEnabled.set(newVal);
    localStorage.setItem('notif_enabled', String(newVal));

    const user = this.auth.user();
    if (user) {
      const ref = doc(this.firestore, `users/${user.uid}`);
      await updateDoc(ref, { notificationsEnabled: newVal }).catch(() => {});
    }
  }

  openPrivacyPolicy() {
    window.open('https://javaiq.app/privacy', '_blank', 'noopener,noreferrer');
  }

  openAbout() {
    this.router.navigate(['/about']);
  }

  async confirmLogout() {
    const confirmed = await this.alertService.showAlert({
      title: 'Sign Out',
      message: 'Are you sure you want to sign out? Your progress is saved to the cloud.',
      confirmText: 'Sign Out',
      cancelText: 'Cancel',
      showCancel: true,
      type: 'warning'
    });
    if (confirmed) {
      await this.auth.logout();
      this.router.navigate(['/tutorials'], { replaceUrl: true });
    }
  }
}
