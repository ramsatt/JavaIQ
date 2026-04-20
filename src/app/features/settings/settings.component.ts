import { Component, inject, signal, computed, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonToolbar, IonButtons, IonMenuButton } from '@ionic/angular/standalone';
import { ThemeService } from '../../theme.service';
import { AuthService } from '../../auth.service';
import { AlertService } from '../../alert.service';
import { NotificationService } from '../../services/notification.service';
import { PurchaseService } from '../../services/purchase.service';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
import { environment } from '../../../environments/environment';

const GOALS = [
  { key: 'faang',   label: 'Crack FAANG',   emoji: '🎯' },
  { key: 'switch',  label: 'Switch Jobs',   emoji: '🚀' },
  { key: 'first',   label: 'Get First Job', emoji: '🌱' },
  { key: 'upskill', label: 'Upskill',       emoji: '📈' },
];

const REMINDER_TIMES = [
  { hour: 8,  label: '8:00 AM'  },
  { hour: 12, label: '12:00 PM' },
  { hour: 18, label: '6:00 PM'  },
  { hour: 21, label: '9:00 PM'  },
];

@Component({
  selector: 'app-settings',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, IonContent, IonHeader, IonToolbar, IonButtons, IonMenuButton],
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

        <!-- Goal -->
        <div class="set-section">
          <span class="set-section-label">Learning Goal</span>
          <div class="set-card">
            @if (!showGoalPicker()) {
              <div class="set-row" (click)="showGoalPicker.set(true)">
                <div class="set-row-left">
                  <div class="set-icon-wrap" style="background:rgba(245,158,11,0.12)">
                    <span style="font-size:1rem">{{ currentGoalEmoji() }}</span>
                  </div>
                  <div>
                    <span class="set-row-label">{{ currentGoalLabel() }}</span>
                    <span class="set-row-sub">Tap to change your goal</span>
                  </div>
                </div>
                <i class="fa-solid fa-chevron-right set-chevron"></i>
              </div>
            } @else {
              <div class="goal-picker">
                @for (g of goals; track g.key) {
                  <button class="goal-opt" [class.goal-opt-sel]="goalKey() === g.key" (click)="setGoal(g.key)">
                    <span>{{ g.emoji }}</span>
                    <span class="goal-opt-label">{{ g.label }}</span>
                  </button>
                }
              </div>
            }
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
              <div class="toggle-track" [class.toggle-on]="notifSvc.notificationsEnabled()" (click)="$event.stopPropagation(); toggleNotifications()">
                <div class="toggle-thumb"></div>
              </div>
            </div>

            @if (notifSvc.notificationsEnabled()) {
              <div class="set-divider"></div>
              <div class="set-row set-version-row">
                <div class="set-row-left">
                  <div class="set-icon-wrap" style="background:rgba(99,102,241,0.12)">
                    <i class="fa-solid fa-clock" style="color:#818cf8"></i>
                  </div>
                  <span class="set-row-label">Reminder Time</span>
                </div>
              </div>
              <div class="time-picker-row">
                @for (t of reminderTimes; track t.hour) {
                  <button class="time-chip" [class.time-chip-sel]="notifSvc.reminderHour() === t.hour"
                    (click)="setReminderHour(t.hour)">
                    {{ t.label }}
                  </button>
                }
              </div>
            }
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
              <span class="set-version-val">{{ appVersion }}</span>
            </div>
          </div>
        </div>

        <!-- Pro -->
        <div class="set-section">
          <span class="set-section-label">Pro</span>
          <div class="set-card">
            @if (purchaseService.isPro()) {
              <div class="set-row set-version-row">
                <div class="set-row-left">
                  <div class="set-icon-wrap" style="background:rgba(250,204,21,0.12)">
                    <i class="fa-solid fa-crown" style="color:#fbbf24"></i>
                  </div>
                  <div>
                    <span class="set-row-label">JavaIQ Pro</span>
                    <span class="set-row-sub">You're a Pro member — ad-free forever</span>
                  </div>
                </div>
                <span class="pro-badge-active">PRO</span>
              </div>
              <div class="set-divider"></div>
              <div class="set-row" (click)="openCustomerCenter()">
                <div class="set-row-left">
                  <div class="set-icon-wrap" style="background:rgba(250,204,21,0.1)">
                    <i class="fa-solid fa-gear" style="color:#fbbf24"></i>
                  </div>
                  <span class="set-row-label">Manage Subscription</span>
                </div>
                <i class="fa-solid fa-chevron-right set-chevron"></i>
              </div>
              <div class="set-divider"></div>
              <div class="set-row" (click)="restorePurchases()">
                <div class="set-row-left">
                  <div class="set-icon-wrap" style="background:rgba(99,102,241,0.1)">
                    <i class="fa-solid fa-rotate" style="color:#818cf8"></i>
                  </div>
                  <span class="set-row-label">Restore Purchase</span>
                </div>
                <i class="fa-solid fa-chevron-right set-chevron"></i>
              </div>
            } @else {
              <button class="pro-upgrade-btn" [disabled]="purchaseService.purchasing()" (click)="upgradeToPro()">
                @if (purchaseService.purchasing()) {
                  <i class="fa-solid fa-spinner fa-spin"></i>
                  Processing...
                } @else {
                  <i class="fa-solid fa-crown"></i>
                  Upgrade to Pro — Ad-Free Forever
                }
              </button>
              <div class="set-divider"></div>
              <div class="set-row" (click)="restorePurchases()">
                <div class="set-row-left">
                  <div class="set-icon-wrap" style="background:rgba(99,102,241,0.1)">
                    <i class="fa-solid fa-rotate" style="color:#818cf8"></i>
                  </div>
                  <span class="set-row-label">Restore Purchase</span>
                </div>
                <i class="fa-solid fa-chevron-right set-chevron"></i>
              </div>
            }
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
    .set-toolbar { --background: var(--ion-background-color); --color: var(--ion-text-color); --border-style: none; }
    .set-content { --background: var(--ion-background-color); }

    .set-body { padding: 8px 16px 80px; max-width: 520px; margin: 0 auto; }

    .set-header { padding: 8px 4px 24px; }
    .set-title { font-size: 1.8rem; font-weight: 900; color: var(--ion-text-color); letter-spacing: -0.03em; margin: 0 0 4px; }
    .set-sub { font-size: 0.78rem; color: var(--ion-color-medium); margin: 0; }

    .set-section { margin-bottom: 20px; }
    .set-section-label {
      display: block;
      font-size: 0.6rem; font-weight: 700;
      text-transform: uppercase; letter-spacing: 0.12em;
      color: var(--ion-color-medium); margin-bottom: 8px; padding-left: 4px;
    }

    .set-card {
      background: var(--ion-card-background, var(--ion-item-background));
      border: 1px solid var(--ion-border-color, rgba(0,0,0,0.09));
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 1px 4px rgba(0,0,0,0.06);
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
    .account-name { display: block; font-size: 0.95rem; font-weight: 700; color: var(--ion-text-color); }
    .account-email { display: block; font-size: 0.72rem; color: var(--ion-color-medium); margin-top: 2px; }

    /* Rows */
    .set-row {
      display: flex; align-items: center; justify-content: space-between;
      padding: 14px 16px;
      cursor: pointer;
      transition: background 0.15s;
    }
    .set-row:hover { background: var(--ion-color-light-tint, rgba(0,0,0,0.03)); }
    .set-version-row { cursor: default; }
    .set-version-row:hover { background: transparent; }

    .set-row-left { display: flex; align-items: center; gap: 12px; }
    .set-icon-wrap {
      width: 34px; height: 34px;
      border-radius: 9px;
      display: flex; align-items: center; justify-content: center;
      font-size: 0.8rem; flex-shrink: 0;
    }
    .set-row-label { font-size: 0.88rem; font-weight: 600; color: var(--ion-text-color); }
    .set-row-sub { font-size: 0.65rem; color: var(--ion-color-medium); display: block; margin-top: 1px; }
    .set-chevron { font-size: 0.6rem; color: var(--ion-color-medium); }
    .set-version-val { font-size: 0.78rem; font-weight: 600; color: var(--ion-color-medium); }
    .set-divider { height: 1px; background: var(--ion-border-color, rgba(0,0,0,0.07)); margin: 0 16px; }

    /* Toggle */
    .toggle-track {
      width: 44px; height: 26px;
      border-radius: 13px;
      background: var(--ion-border-color, rgba(0,0,0,0.15));
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

    /* Goal picker */
    .goal-picker {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
      padding: 12px;
    }

    .goal-opt {
      display: flex; flex-direction: column; align-items: center; gap: 4px;
      padding: 12px 8px;
      border-radius: 12px;
      background: var(--ion-color-light, rgba(0,0,0,0.03));
      border: 1.5px solid var(--ion-border-color, rgba(0,0,0,0.09));
      cursor: pointer;
      transition: all 0.18s;
      font-size: 1.2rem;
    }
    .goal-opt:hover { background: rgba(16,185,129,0.08); border-color: rgba(16,185,129,0.25); }
    .goal-opt-sel { background: rgba(16,185,129,0.12) !important; border-color: #10b981 !important; }
    .goal-opt-label { font-size: 0.72rem; font-weight: 600; color: var(--ion-color-medium-shade); }

    /* Time picker */
    .time-picker-row {
      display: flex; flex-wrap: wrap; gap: 8px;
      padding: 0 16px 14px;
    }
    .time-chip {
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 0.75rem; font-weight: 600;
      background: var(--ion-color-light, rgba(0,0,0,0.05));
      border: 1px solid var(--ion-border-color, rgba(0,0,0,0.1));
      color: var(--ion-color-medium);
      cursor: pointer;
      transition: all 0.18s;
    }
    .time-chip:hover { background: rgba(99,102,241,0.12); color: #818cf8; }
    .time-chip-sel { background: rgba(99,102,241,0.15) !important; border-color: #818cf8 !important; color: #6366f1 !important; }

    /* Pro */
    .pro-upgrade-btn {
      width: 100%; padding: 15px;
      background: linear-gradient(135deg, #f59e0b, #d97706);
      border: none;
      color: #0b1120;
      font-size: 0.9rem; font-weight: 800;
      display: flex; align-items: center; justify-content: center; gap: 10px;
      cursor: pointer;
      transition: opacity 0.2s;
      border-radius: 16px 16px 0 0;
    }
    .pro-upgrade-btn:hover { opacity: 0.88; }
    .pro-upgrade-btn:disabled { opacity: 0.5; cursor: not-allowed; }
    .pro-badge-active {
      font-size: 0.62rem; font-weight: 800;
      color: #d97706;
      background: rgba(251,191,36,0.15);
      border: 1px solid rgba(251,191,36,0.4);
      border-radius: 6px;
      padding: 2px 7px;
      letter-spacing: 0.06em;
    }

    /* Logout */
    .set-logout-btn {
      width: 100%; padding: 14px;
      background: rgba(239,68,68,0.08);
      border: none;
      color: #ef4444;
      font-size: 0.88rem; font-weight: 700;
      display: flex; align-items: center; justify-content: center; gap: 10px;
      cursor: pointer;
      transition: background 0.2s;
      border-radius: 16px;
    }
    .set-logout-btn:hover { background: rgba(239,68,68,0.14); }

    /* Dark mode overrides */
    @media (prefers-color-scheme: dark) {
      .set-card { background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.08); box-shadow: none; }
      .set-row:hover { background: rgba(255,255,255,0.03); }
      .set-divider { background: rgba(255,255,255,0.06); }
      .toggle-track { background: rgba(255,255,255,0.12); }
      .goal-opt { background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.08); }
      .time-chip { background: rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.1); }
      .time-chip-sel { color: #c7d2fe !important; }
      .pro-badge-active { color: #fbbf24; }
      .set-logout-btn { color: #f87171; }
    }
  `
})
export class SettingsComponent implements OnInit {
  themeService  = inject(ThemeService);
  auth          = inject(AuthService);
  notifSvc      = inject(NotificationService);
  private alertService = inject(AlertService);
  private router       = inject(Router);
  private firestore    = inject(Firestore);
  purchaseService      = inject(PurchaseService);

  readonly goals         = GOALS;
  readonly reminderTimes = REMINDER_TIMES;
  readonly appVersion    = environment.appVersion;

  goalKey        = signal(localStorage.getItem('user_goal') ?? '');
  showGoalPicker = signal(false);

  currentGoalLabel  = computed(() => GOALS.find(g => g.key === this.goalKey())?.label ?? 'Set a goal');
  currentGoalEmoji  = computed(() => GOALS.find(g => g.key === this.goalKey())?.emoji ?? '🎯');

  ngOnInit() { /* signals already loaded from localStorage */ }

  toggleTheme() { this.themeService.toggle(); }

  async toggleNotifications() {
    await this.notifSvc.toggle(!this.notifSvc.notificationsEnabled());
  }

  async setReminderHour(hour: number) {
    await this.notifSvc.setReminderHour(hour);
  }

  async setGoal(key: string) {
    this.goalKey.set(key);
    this.showGoalPicker.set(false);
    localStorage.setItem('user_goal', key);
    const user = this.auth.user();
    if (user) {
      const ref = doc(this.firestore, `users/${user.uid}`);
      await setDoc(ref, { goal: key }, { merge: true });
    }
  }

  openPrivacyPolicy() {
    window.open('https://javaiq.app/privacy', '_blank', 'noopener,noreferrer');
  }

  openAbout() { this.router.navigate(['/about']); }

  async upgradeToPro() {
    const uid = this.auth.user()?.uid ?? 'anonymous';
    await this.purchaseService.presentPaywall(uid);
  }

  async openCustomerCenter() {
    await this.purchaseService.openCustomerCenter();
  }

  async restorePurchases() {
    const uid = this.auth.user()?.uid;
    if (uid) await this.purchaseService.restorePurchases(uid);
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
      this.router.navigate(['/dashboard'], { replaceUrl: true });
    }
  }
}
