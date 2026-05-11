import { Component, inject, signal, computed, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonToolbar, IonButtons, IonMenuButton } from '@ionic/angular/standalone';
import { ThemeService, ThemePreference } from '../../theme.service';
import { AuthService } from '../../auth.service';
import { AlertService } from '../../alert.service';
import { NotificationService } from '../../services/notification.service';
import { PurchaseService } from '../../services/purchase.service';
import { ReferralService } from '../../core/referral.service';
import { LangService, AppLang } from '../../core/lang.service';
import { ShareService } from '../../services/share.service';
import { GamificationService } from '../../gamification.service';
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

const THEME_OPTIONS: { value: ThemePreference; label: string; icon: string }[] = [
  { value: 'system', label: 'System', icon: 'bi-circle-half' },
  { value: 'light',  label: 'Light',  icon: 'bi-sun'         },
  { value: 'dark',   label: 'Dark',   icon: 'bi-moon-stars'  },
];

@Component({
  selector: 'app-settings',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, IonContent, IonHeader, IonToolbar, IonButtons, IonMenuButton],
  template: `
    <ion-header class="ion-no-border">
      <ion-toolbar class="set-toolbar">
        <ion-buttons slot="start">
          <ion-menu-button color="light"></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="set-content">
      <div class="set-body">

        <!-- Page header -->
        <div class="set-header">
          <h1 class="set-title">Settings</h1>
          <p class="set-sub">Manage your account, learning preferences, and subscription.</p>
        </div>

        <div class="set-grid">

          <!-- ══ LEFT COLUMN ══ -->
          <div class="set-col">

            <!-- Account -->
            @if (auth.user(); as user) {
              <div class="set-section">
                <div class="set-card">
                  <div class="set-card-header">
                    <span class="set-card-title">Account</span>
                  </div>
                  <div class="account-row" role="button" tabindex="0"
                       aria-label="View account details"
                       (click)="openAccountDetails()"
                       (keydown.enter)="openAccountDetails()"
                       (keydown.space)="openAccountDetails()">
                    <div class="account-avatar" aria-hidden="true">
                      {{ user.displayName?.charAt(0)?.toUpperCase() ?? '?' }}
                    </div>
                    <div class="account-info">
                      <span class="account-name">{{ user.displayName || 'Anonymous' }}</span>
                      <span class="account-email">{{ user.email }}</span>
                      <span class="account-meta">
                        {{ planLabel() }}
                        &nbsp;·&nbsp;
                        {{ game.xp() | number:'1.0-0' }} XP earned
                        @if (memberSince()) {
                          &nbsp;·&nbsp;Since {{ memberSince() }}
                        }
                      </span>
                    </div>
                    <i class="bi bi-chevron-right set-chevron" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            }

            <!-- Appearance -->
            <div class="set-section">
              <div class="set-card">
                <div class="set-card-header">
                  <span class="set-card-title">Appearance</span>
                </div>
                <div class="set-row set-row-noclick">
                  <div class="set-row-left">
                    <div class="set-icon-wrap" style="background:rgba(99,102,241,0.12)">
                      <i class="bi bi-palette" style="color:#818cf8" aria-hidden="true"></i>
                    </div>
                    <span class="set-row-label">Theme</span>
                  </div>
                  <!-- System / Light / Dark segmented control -->
                  <div class="theme-seg" role="radiogroup" aria-label="Theme preference">
                    @for (opt of themeOptions; track opt.value) {
                      <button class="theme-seg-btn"
                              [class.theme-seg-sel]="themeService.preference() === opt.value"
                              role="radio"
                              [attr.aria-checked]="themeService.preference() === opt.value"
                              [attr.aria-label]="opt.label + ' theme'"
                              (click)="setTheme(opt.value)">
                        <i class="bi" [class]="opt.icon" aria-hidden="true"></i>
                        <span>{{ opt.label }}</span>
                      </button>
                    }
                  </div>
                </div>

                <div class="set-divider"></div>

                <!-- Language -->
                <div class="set-row set-row-noclick">
                  <div class="set-row-left">
                    <div class="set-icon-wrap" style="background:rgba(16,185,129,0.12)">
                      <i class="bi bi-translate" style="color:#10b981" aria-hidden="true"></i>
                    </div>
                    <div>
                      <span class="set-row-label">Language</span>
                      <span class="set-row-sub">More languages coming soon</span>
                    </div>
                  </div>
                  <div class="lang-seg" role="radiogroup" aria-label="App language">
                    <button class="lang-btn"
                            [class.lang-btn-sel]="langSvc.currentLang() === 'en'"
                            role="radio"
                            [attr.aria-checked]="langSvc.currentLang() === 'en'"
                            aria-label="English"
                            (click)="setLang('en')">EN</button>
                    <button class="lang-btn"
                            [class.lang-btn-sel]="langSvc.currentLang() === 'hi'"
                            role="radio"
                            [attr.aria-checked]="langSvc.currentLang() === 'hi'"
                            aria-label="Hindi"
                            (click)="setLang('hi')">हि</button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Learning Goal -->
            <div class="set-section">
              <div class="set-card">
                <div class="set-card-header">
                  <span class="set-card-title">Learning Goal</span>
                  <span class="set-card-sub">Shapes your daily study plan</span>
                </div>

                @if (!showGoalPicker()) {
                  <div class="set-row" (click)="showGoalPicker.set(true)"
                       role="button" tabindex="0"
                       (keydown.enter)="showGoalPicker.set(true)"
                       aria-label="Change learning goal, current: {{ currentGoalLabel() }}">
                    <div class="set-row-left">
                      <div class="set-icon-wrap" style="background:rgba(245,158,11,0.12)">
                        <span aria-hidden="true" style="font-size:1rem">{{ currentGoalEmoji() }}</span>
                      </div>
                      <div>
                        <span class="set-row-label">{{ currentGoalLabel() }}</span>
                        <span class="set-row-sub">Switch goal →</span>
                      </div>
                    </div>
                    <i class="bi bi-chevron-right set-chevron" aria-hidden="true"></i>
                  </div>
                } @else {
                  <div class="goal-picker" role="radiogroup" aria-label="Learning goal">
                    @for (g of goals; track g.key) {
                      <button class="goal-opt"
                              [class.goal-opt-sel]="goalKey() === g.key"
                              role="radio"
                              [attr.aria-checked]="goalKey() === g.key"
                              (click)="setGoal(g.key)">
                        <span aria-hidden="true">{{ g.emoji }}</span>
                        <span class="goal-opt-label">{{ g.label }}</span>
                      </button>
                    }
                  </div>
                }
              </div>
            </div>

            <!-- Notifications -->
            <div class="set-section">
              <div class="set-card">
                <div class="set-card-header">
                  <span class="set-card-title">Notifications</span>
                </div>

                <div class="set-row" (click)="toggleNotifications()"
                     role="button" tabindex="0"
                     (keydown.enter)="toggleNotifications()">
                  <div class="set-row-left">
                    <div class="set-icon-wrap" style="background:rgba(16,185,129,0.12)">
                      <i class="bi bi-bell" style="color:#10b981" aria-hidden="true"></i>
                    </div>
                    <div>
                      <span class="set-row-label">Daily Reminders</span>
                      <span class="set-row-sub">Daily push reminders so you don't break your streak</span>
                    </div>
                  </div>
                  <button class="toggle-track"
                          [class.toggle-on]="notifSvc.notificationsEnabled()"
                          role="switch"
                          [attr.aria-checked]="notifSvc.notificationsEnabled()"
                          aria-label="Daily reminders"
                          (click)="$event.stopPropagation(); toggleNotifications()">
                    <div class="toggle-thumb"></div>
                  </button>
                </div>

                @if (notifSvc.notificationsEnabled()) {
                  <div class="set-divider"></div>
                  <div class="set-row set-row-noclick">
                    <div class="set-row-left">
                      <div class="set-icon-wrap" style="background:rgba(99,102,241,0.12)">
                        <i class="bi bi-clock" style="color:#818cf8" aria-hidden="true"></i>
                      </div>
                      <span class="set-row-label">Reminder Time</span>
                    </div>
                  </div>
                  <div class="time-picker-row" role="radiogroup" aria-label="Reminder time">
                    @for (t of reminderTimes; track t.hour) {
                      <button class="time-chip"
                              [class.time-chip-sel]="notifSvc.reminderHour() === t.hour"
                              [disabled]="!notifSvc.notificationsEnabled()"
                              role="radio"
                              [attr.aria-checked]="notifSvc.reminderHour() === t.hour"
                              [attr.aria-label]="t.label"
                              (click)="setReminderHour(t.hour)">
                        {{ t.label }}
                      </button>
                    }
                  </div>
                }
              </div>
            </div>

          </div><!-- /left col -->

          <!-- ══ RIGHT COLUMN ══ -->
          <div class="set-col">

            <!-- Pro -->
            <div class="set-section">
              <div class="set-card-header set-card-header--standalone">
                <span class="set-card-title">Subscription</span>
              </div>

              @if (purchaseService.isPro()) {
                <div class="set-card">
                  <div class="pro-active-header">
                    <div class="pro-active-crown" aria-hidden="true"><i class="bi bi-crown"></i></div>
                    <div>
                      <span class="pro-active-title">JavaIQ Pro</span>
                      <span class="pro-active-sub">Ad-free · Unlimited access · AI explanations</span>
                    </div>
                    <span class="pro-badge-active" aria-label="Pro plan active">PRO</span>
                  </div>
                  <div class="set-divider"></div>
                  <div class="set-row" (click)="openCustomerCenter()" role="button" tabindex="0"
                       aria-label="Manage subscription">
                    <div class="set-row-left">
                      <div class="set-icon-wrap" style="background:rgba(250,204,21,0.1)">
                        <i class="bi bi-gear" style="color:#fbbf24" aria-hidden="true"></i>
                      </div>
                      <span class="set-row-label">Manage Subscription</span>
                    </div>
                    <i class="bi bi-chevron-right set-chevron" aria-hidden="true"></i>
                  </div>
                  <div class="set-divider"></div>
                  <div class="set-row" (click)="restorePurchases()" role="button" tabindex="0"
                       aria-label="Restore purchase">
                    <div class="set-row-left">
                      <div class="set-icon-wrap" style="background:rgba(99,102,241,0.1)">
                        <i class="bi bi-arrow-repeat" style="color:#818cf8" aria-hidden="true"></i>
                      </div>
                      <span class="set-row-label">Restore Purchase</span>
                    </div>
                    <i class="bi bi-chevron-right set-chevron" aria-hidden="true"></i>
                  </div>
                </div>

              } @else if (purchaseService.trialActive()) {
                <div class="set-card">
                  <div class="trial-active-banner">
                    <div class="trial-active-icon" aria-hidden="true"><i class="bi bi-hourglass-split"></i></div>
                    <div>
                      <span class="trial-active-title">Free Trial Active</span>
                      <span class="trial-active-sub">
                        {{ purchaseService.trialDaysLeft() }} day{{ purchaseService.trialDaysLeft() === 1 ? '' : 's' }} remaining — all Pro features unlocked
                      </span>
                    </div>
                  </div>
                  <div class="set-divider"></div>
                  <div class="set-row" (click)="upgradeToPro()" role="button" tabindex="0"
                       aria-label="Upgrade to keep Pro access">
                    <div class="set-row-left">
                      <div class="set-icon-wrap" style="background:rgba(250,204,21,0.12)">
                        <i class="bi bi-crown" style="color:#fbbf24" aria-hidden="true"></i>
                      </div>
                      <div>
                        <span class="set-row-label">Upgrade to Keep Pro</span>
                        <span class="set-row-sub">Don't lose access when trial ends</span>
                      </div>
                    </div>
                    <i class="bi bi-chevron-right set-chevron" aria-hidden="true"></i>
                  </div>
                </div>

              } @else {
                <!-- Paywall conversion card -->
                <div class="paywall-card" aria-label="Upgrade to JavaIQ Pro">
                  <div class="paywall-header">
                    <div class="paywall-crown" aria-hidden="true"><i class="bi bi-crown"></i></div>
                    <div>
                      <span class="paywall-title">JavaIQ Pro</span>
                      <span class="paywall-tagline">Crack your next Java interview faster</span>
                    </div>
                  </div>

                  <ul class="paywall-benefits" aria-label="Pro plan benefits">
                    <li><i class="bi bi-ban" aria-hidden="true"></i> Ad-free experience</li>
                    <li><i class="bi bi-infinity" aria-hidden="true"></i> Unlimited topic unlocks</li>
                    <li><i class="bi bi-robot" aria-hidden="true"></i> AI wrong-answer explanations</li>
                    <li><i class="bi bi-arrow-repeat" aria-hidden="true"></i> Spaced repetition review</li>
                    <li><i class="bi bi-bookmark-check" aria-hidden="true"></i> Unlimited bookmarks</li>
                    <li><i class="bi bi-patch-check" aria-hidden="true"></i> Shareable certificates</li>
                  </ul>

                  <div class="plan-toggle" role="radiogroup" aria-label="Select plan">
                    <button class="plan-card"
                            [class.plan-card-sel]="purchaseService.selectedPlan() === 'monthly'"
                            role="radio"
                            [attr.aria-checked]="purchaseService.selectedPlan() === 'monthly'"
                            aria-label="Monthly plan"
                            (click)="purchaseService.selectedPlan.set('monthly')">
                      <span class="plan-name">Monthly</span>
                      <span class="plan-price">₹199<span class="plan-period">/mo</span></span>
                      <span class="plan-billed">Billed monthly</span>
                    </button>
                    <button class="plan-card plan-card-annual"
                            [class.plan-card-sel]="purchaseService.selectedPlan() === 'annual'"
                            role="radio"
                            [attr.aria-checked]="purchaseService.selectedPlan() === 'annual'"
                            aria-label="Annual plan, save 58%"
                            (click)="purchaseService.selectedPlan.set('annual')">
                      <span class="plan-save-badge">SAVE 58%</span>
                      <span class="plan-name">Annual</span>
                      <span class="plan-price">₹999<span class="plan-period">/yr</span></span>
                      <span class="plan-billed">₹83/mo · billed yearly</span>
                    </button>
                  </div>

                  <button class="paywall-cta" [disabled]="purchaseService.purchasing()" (click)="upgradeToPro()">
                    @if (purchaseService.purchasing()) {
                      <i class="bi bi-arrow-repeat spin" aria-hidden="true"></i> Processing...
                    } @else {
                      <i class="bi bi-crown" aria-hidden="true"></i> Start 7-Day Free Trial
                    }
                  </button>
                  <p class="paywall-trial-note">No charge for 7 days · Cancel anytime</p>

                  <button class="paywall-restore" (click)="restorePurchases()">
                    <i class="bi bi-arrow-repeat" aria-hidden="true"></i>
                    Already subscribed? Restore purchase
                  </button>
                </div>
              }
            </div>

            <!-- Refer a Friend -->
            @if (auth.user()) {
              <div class="set-section">
                <div class="set-card">
                  <div class="set-card-header">
                    <span class="set-card-title">Refer a Friend</span>
                  </div>
                  <div class="referral-wrap">
                    <p class="referral-desc">
                      <strong>Give 30 days of Pro. Get 30 days free</strong> when they subscribe.
                    </p>
                    @if (referralSvc.referralCode()) {
                      <div class="referral-code-row">
                        <span class="referral-code" aria-label="Your referral code: {{ referralSvc.referralCode() }}">
                          {{ referralSvc.referralCode() }}
                        </span>
                        <button class="referral-copy-btn" (click)="copyReferralCode()" aria-label="Copy referral code">
                          <i class="bi bi-copy" aria-hidden="true"></i>
                        </button>
                      </div>
                    }
                    <button class="referral-share-btn" (click)="shareReferral()" aria-label="Share referral link">
                      <i class="bi bi-share" aria-hidden="true"></i>
                      Share Invite Link
                    </button>
                  </div>
                </div>
              </div>
            }

            <!-- About -->
            <div class="set-section">
              <div class="set-card">
                <div class="set-card-header">
                  <span class="set-card-title">About</span>
                </div>
                <div class="set-row" (click)="openPrivacyPolicy()" role="button" tabindex="0"
                     aria-label="Privacy Policy">
                  <div class="set-row-left">
                    <div class="set-icon-wrap" style="background:rgba(59,130,246,0.12)">
                      <i class="bi bi-shield-check" style="color:#60a5fa" aria-hidden="true"></i>
                    </div>
                    <span class="set-row-label">Privacy Policy</span>
                  </div>
                  <i class="bi bi-chevron-right set-chevron" aria-hidden="true"></i>
                </div>
                <div class="set-divider"></div>
                <div class="set-row" (click)="openTerms()" role="button" tabindex="0"
                     aria-label="Terms of Service">
                  <div class="set-row-left">
                    <div class="set-icon-wrap" style="background:rgba(99,102,241,0.12)">
                      <i class="bi bi-file-text" style="color:#818cf8" aria-hidden="true"></i>
                    </div>
                    <span class="set-row-label">Terms of Service</span>
                  </div>
                  <i class="bi bi-chevron-right set-chevron" aria-hidden="true"></i>
                </div>
                <div class="set-divider"></div>
                <div class="set-row" (click)="openAbout()" role="button" tabindex="0"
                     aria-label="About JavaIQ">
                  <div class="set-row-left">
                    <div class="set-icon-wrap" style="background:rgba(245,158,11,0.12)">
                      <i class="bi bi-info-circle" style="color:#f59e0b" aria-hidden="true"></i>
                    </div>
                    <span class="set-row-label">About JavaIQ</span>
                  </div>
                  <i class="bi bi-chevron-right set-chevron" aria-hidden="true"></i>
                </div>
              </div>
            </div>

          </div><!-- /right col -->
        </div><!-- /grid -->

        <!-- ══ FULL-WIDTH BOTTOM ACTIONS ══ -->
        @if (auth.user()) {
          <div class="set-actions-footer">
            <!-- Sign out — text button, not destructive styling -->
            <button class="set-signout-btn" (click)="confirmLogout()" aria-label="Sign out">
              <i class="bi bi-box-arrow-right" aria-hidden="true"></i>
              Sign Out
            </button>

            <!-- Version — footer, not a nav row -->
            <span class="set-version">v{{ appVersion }}</span>
          </div>

          <!-- Danger zone — visually separated -->
          <div class="set-danger-zone" role="region" aria-label="Danger zone">
            <div class="set-danger-header">
              <i class="bi bi-exclamation-triangle" aria-hidden="true"></i>
              Danger Zone
            </div>
            <p class="set-danger-desc">
              Permanently delete your account and all associated data. This cannot be undone.
            </p>
            <button class="set-delete-btn" (click)="confirmDeleteAccount()" aria-label="Delete account permanently">
              <i class="bi bi-trash" aria-hidden="true"></i>
              Delete My Account
            </button>
          </div>
        }

      </div>
    </ion-content>
  `,
  styles: `
    .set-toolbar { --background: var(--ion-background-color); --color: var(--ion-text-color); --border-style: none; }
    .set-content { --background: var(--ion-background-color); --padding-start: 0; --padding-end: 0; }
    .set-body { padding: 8px 16px 80px; }

    .set-header { padding: 8px 4px 24px; }
    .set-title { font-size: clamp(1.6rem, 4vw, 2.4rem); font-weight: 900; color: var(--ion-text-color); letter-spacing: -0.03em; margin: 0 0 4px; }
    .set-sub { font-size: 0.78rem; color: var(--ion-color-medium); margin: 0; }

    @media (min-width: 640px) { .set-body { padding: 16px 32px 80px; } }
    @media (min-width: 1024px) {
      .set-body { padding: 24px 48px 80px; }
      .set-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0 32px; align-items: start; }
    }
    @media (min-width: 1440px) {
      .set-body { padding: 32px 64px 80px; }
      .set-grid { gap: 0 48px; }
    }

    /* ── Cards ── */
    .set-section { margin-bottom: 20px; }

    .set-card {
      background: var(--ion-card-background, var(--ion-item-background));
      border: 1px solid var(--ion-border-color, rgba(0,0,0,0.09));
      border-radius: 16px; overflow: hidden;
      box-shadow: 0 1px 4px rgba(0,0,0,0.06);
    }

    /* Card headers inside the card */
    .set-card-header {
      display: flex; align-items: baseline; justify-content: space-between;
      padding: 12px 16px 8px;
      border-bottom: 1px solid var(--ion-border-color, rgba(0,0,0,0.06));
    }
    .set-card-header--standalone {
      display: flex; align-items: baseline;
      padding: 0 4px 8px;
    }
    .set-card-title {
      font-size: 0.72rem; font-weight: 800;
      text-transform: uppercase; letter-spacing: 0.10em;
      color: var(--ion-text-color);
    }
    .set-card-sub {
      font-size: 0.6rem; color: var(--ion-color-medium);
    }

    /* ── Account ── */
    .account-row {
      display: flex; align-items: center; gap: 14px;
      padding: 14px 16px; cursor: pointer;
      transition: background 0.15s;
    }
    .account-row:hover { background: var(--ion-color-light-tint, rgba(0,0,0,0.03)); }
    .account-row:focus-visible { outline: 2px solid #10b981; outline-offset: -2px; border-radius: 8px; }
    .account-avatar {
      width: 46px; height: 46px; border-radius: 50%; flex-shrink: 0;
      background: linear-gradient(135deg, #10b981, #059669);
      display: flex; align-items: center; justify-content: center;
      font-size: 1.1rem; font-weight: 700; color: white;
    }
    .account-name  { display: block; font-size: 0.95rem; font-weight: 700; color: var(--ion-text-color); }
    .account-email { display: block; font-size: 0.72rem; color: var(--ion-color-medium); margin-top: 1px; }
    .account-meta  {
      display: block; font-size: 0.63rem; color: var(--ion-color-medium);
      margin-top: 3px; opacity: 0.8;
    }

    /* ── Rows ── */
    .set-row {
      display: flex; align-items: center; justify-content: space-between;
      padding: 13px 16px; cursor: pointer; transition: background 0.15s;
    }
    .set-row:hover { background: var(--ion-color-light-tint, rgba(0,0,0,0.03)); }
    .set-row:focus-visible { outline: 2px solid #10b981; outline-offset: -2px; border-radius: 8px; }
    .set-row-noclick { cursor: default; }
    .set-row-noclick:hover { background: transparent; }
    .set-row-left { display: flex; align-items: center; gap: 12px; }
    .set-icon-wrap {
      width: 34px; height: 34px; border-radius: 9px;
      display: flex; align-items: center; justify-content: center;
      font-size: 0.8rem; flex-shrink: 0;
    }
    .set-row-label { font-size: 0.88rem; font-weight: 600; color: var(--ion-text-color); }
    .set-row-sub { font-size: 0.63rem; color: var(--ion-color-medium); display: block; margin-top: 1px; }
    .set-chevron { font-size: 0.6rem; color: var(--ion-color-medium); }
    .set-divider { height: 1px; background: var(--ion-border-color, rgba(0,0,0,0.07)); margin: 0 16px; }

    /* ── Theme segmented control ── */
    .theme-seg {
      display: flex; gap: 3px;
      background: var(--ion-color-light, rgba(0,0,0,0.05));
      border: 1px solid var(--ion-border-color, rgba(0,0,0,0.1));
      border-radius: 10px; padding: 3px;
    }
    .theme-seg-btn {
      display: flex; align-items: center; gap: 5px;
      padding: 5px 10px; border-radius: 7px; border: none;
      font-size: 0.72rem; font-weight: 600;
      background: transparent; color: var(--ion-color-medium);
      cursor: pointer; transition: all 0.18s;
      white-space: nowrap;
    }
    .theme-seg-btn:hover { color: var(--ion-text-color); }
    .theme-seg-btn:focus-visible { outline: 2px solid #10b981; outline-offset: 2px; border-radius: 7px; }
    .theme-seg-sel { background: var(--ion-background-color, #fff) !important; color: #10b981 !important; box-shadow: 0 1px 3px rgba(0,0,0,0.12); }
    .theme-seg-sel i { color: #10b981 !important; }

    /* ── Language ── */
    .lang-seg {
      display: flex; gap: 3px;
      background: var(--ion-color-light, rgba(0,0,0,0.05));
      border: 1px solid var(--ion-border-color, rgba(0,0,0,0.1));
      border-radius: 8px; padding: 3px;
    }
    .lang-btn {
      padding: 4px 12px; border-radius: 6px; border: none;
      font-size: 0.78rem; font-weight: 700;
      background: transparent; color: var(--ion-color-medium);
      cursor: pointer; transition: all 0.18s;
    }
    .lang-btn:hover { color: var(--ion-text-color); }
    .lang-btn:focus-visible { outline: 2px solid #10b981; outline-offset: 2px; border-radius: 6px; }
    .lang-btn-sel { background: #10b981 !important; color: #fff !important; }

    /* ── Goal picker ── */
    .goal-picker {
      display: grid; grid-template-columns: 1fr 1fr; gap: 8px;
      padding: 12px;
    }
    .goal-opt {
      display: flex; flex-direction: column; align-items: center; gap: 4px;
      padding: 12px 8px; border-radius: 12px;
      background: var(--ion-color-light, rgba(0,0,0,0.03));
      border: 1.5px solid var(--ion-border-color, rgba(0,0,0,0.09));
      cursor: pointer; transition: all 0.18s; font-size: 1.2rem;
    }
    .goal-opt:hover { background: rgba(16,185,129,0.08); border-color: rgba(16,185,129,0.25); }
    .goal-opt:focus-visible { outline: 2px solid #10b981; outline-offset: 2px; }
    .goal-opt-sel { background: rgba(16,185,129,0.12) !important; border-color: #10b981 !important; }
    .goal-opt-label { font-size: 0.72rem; font-weight: 600; color: var(--ion-color-medium-shade); }

    /* ── Toggle ── */
    .toggle-track {
      width: 44px; height: 26px; border-radius: 13px;
      background: var(--ion-border-color, rgba(0,0,0,0.15));
      position: relative; cursor: pointer; transition: background 0.25s; flex-shrink: 0;
      border: none;
    }
    .toggle-track:focus-visible { outline: 2px solid #10b981; outline-offset: 2px; }
    .toggle-on { background: #10b981 !important; }
    .toggle-thumb {
      position: absolute; top: 3px; left: 3px;
      width: 20px; height: 20px; border-radius: 50%; background: white;
      transition: transform 0.25s; box-shadow: 0 1px 4px rgba(0,0,0,0.3);
    }
    .toggle-on .toggle-thumb { transform: translateX(18px); }

    /* ── Reminder time chips ── */
    .time-picker-row { display: flex; flex-wrap: wrap; gap: 8px; padding: 0 16px 14px; }
    .time-chip {
      padding: 6px 14px; border-radius: 20px;
      font-size: 0.75rem; font-weight: 600;
      background: var(--ion-color-light, rgba(0,0,0,0.05));
      border: 1.5px solid var(--ion-border-color, rgba(0,0,0,0.1));
      color: var(--ion-color-medium);
      cursor: pointer; transition: all 0.18s;
    }
    .time-chip:hover:not(:disabled) { background: rgba(16,185,129,0.10); color: #10b981; border-color: rgba(16,185,129,0.35); }
    .time-chip:focus-visible { outline: 2px solid #10b981; outline-offset: 2px; }
    .time-chip:disabled { opacity: 0.35; cursor: not-allowed; }
    /* Selected: brand green fill, consistent with lang/theme controls */
    .time-chip-sel {
      background: #10b981 !important; border-color: #10b981 !important;
      color: #fff !important; font-weight: 700;
    }

    /* ── Pro active ── */
    .pro-active-header {
      display: flex; align-items: center; gap: 12px; padding: 14px 16px;
    }
    .pro-active-crown {
      width: 38px; height: 38px; border-radius: 10px;
      background: rgba(251,191,36,0.15);
      display: flex; align-items: center; justify-content: center;
      font-size: 1rem; color: #fbbf24; flex-shrink: 0;
    }
    .pro-active-title { display: block; font-size: 0.9rem; font-weight: 700; color: var(--ion-text-color); }
    .pro-active-sub   { display: block; font-size: 0.63rem; color: var(--ion-color-medium); margin-top: 2px; }
    .pro-badge-active {
      font-size: 0.62rem; font-weight: 800; color: #d97706;
      background: rgba(251,191,36,0.15); border: 1px solid rgba(251,191,36,0.4);
      border-radius: 6px; padding: 2px 7px; letter-spacing: 0.06em; margin-left: auto;
    }

    /* ── Trial banner ── */
    .trial-active-banner {
      display: flex; align-items: center; gap: 12px;
      padding: 14px 16px;
      background: rgba(99,102,241,0.07);
    }
    .trial-active-icon {
      width: 38px; height: 38px; border-radius: 10px;
      background: rgba(99,102,241,0.15);
      display: flex; align-items: center; justify-content: center;
      font-size: 1rem; color: #818cf8; flex-shrink: 0;
    }
    .trial-active-title { display: block; font-size: 0.9rem; font-weight: 700; color: var(--ion-text-color); }
    .trial-active-sub   { display: block; font-size: 0.63rem; color: var(--ion-color-medium); margin-top: 2px; }

    /* ── Paywall card ── */
    .paywall-card {
      border: 1.5px solid rgba(251,191,36,0.35); border-radius: 18px; overflow: hidden;
      background: var(--ion-card-background, var(--ion-item-background));
      box-shadow: 0 4px 20px rgba(251,191,36,0.10);
    }
    .paywall-header {
      display: flex; align-items: center; gap: 12px;
      padding: 14px 16px 12px;
      background: linear-gradient(135deg, rgba(251,191,36,0.12), rgba(245,158,11,0.06));
      border-bottom: 1px solid rgba(251,191,36,0.15);
    }
    .paywall-crown {
      width: 40px; height: 40px; border-radius: 12px;
      background: linear-gradient(135deg, #f59e0b, #d97706);
      display: flex; align-items: center; justify-content: center;
      font-size: 1.1rem; color: #0b1120; flex-shrink: 0;
    }
    .paywall-title   { display: block; font-size: 1rem; font-weight: 800; color: var(--ion-text-color); }
    .paywall-tagline { display: block; font-size: 0.68rem; color: var(--ion-color-medium); margin-top: 2px; }

    .paywall-benefits {
      list-style: none; margin: 0; padding: 12px 16px;
      display: grid; grid-template-columns: 1fr 1fr; gap: 6px 12px;
    }
    .paywall-benefits li {
      display: flex; align-items: center; gap: 7px;
      font-size: 0.75rem; font-weight: 600; color: var(--ion-text-color);
    }
    .paywall-benefits li i { color: #10b981; font-size: 0.7rem; flex-shrink: 0; }

    .plan-toggle { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; padding: 8px 12px 12px; }
    .plan-card {
      display: flex; flex-direction: column; align-items: center; gap: 2px; padding: 12px 8px;
      border-radius: 14px; border: 2px solid var(--ion-border-color, rgba(0,0,0,0.1));
      background: var(--ion-color-light, rgba(0,0,0,0.03));
      cursor: pointer; transition: all 0.2s; position: relative;
    }
    .plan-card:focus-visible { outline: 2px solid #f59e0b; outline-offset: 2px; }
    .plan-card-sel {
      border-color: #f59e0b !important;
      background: rgba(245,158,11,0.08) !important;
      box-shadow: 0 0 0 3px rgba(245,158,11,0.15);
    }
    .plan-name   { font-size: 0.72rem; font-weight: 700; color: var(--ion-color-medium); text-transform: uppercase; letter-spacing: 0.08em; }
    .plan-price  { font-size: 1.3rem; font-weight: 900; color: var(--ion-text-color); line-height: 1.2; margin: 4px 0 2px; }
    .plan-period { font-size: 0.7rem; font-weight: 600; color: var(--ion-color-medium); }
    .plan-billed { font-size: 0.62rem; color: var(--ion-color-medium); }
    .plan-save-badge {
      position: absolute; top: -9px; left: 50%; transform: translateX(-50%);
      background: linear-gradient(90deg, #10b981, #059669);
      color: #fff; font-size: 0.55rem; font-weight: 800;
      padding: 2px 8px; border-radius: 20px; letter-spacing: 0.06em; white-space: nowrap;
    }

    .paywall-cta {
      width: calc(100% - 24px); margin: 0 12px; padding: 14px;
      background: linear-gradient(135deg, #f59e0b, #d97706);
      border: none; border-radius: 14px; color: #0b1120;
      font-size: 0.92rem; font-weight: 800;
      display: flex; align-items: center; justify-content: center; gap: 10px;
      cursor: pointer; transition: opacity 0.2s;
    }
    .paywall-cta:hover { opacity: 0.88; }
    .paywall-cta:disabled { opacity: 0.5; cursor: not-allowed; }
    .paywall-cta:focus-visible { outline: 2px solid #f59e0b; outline-offset: 2px; border-radius: 14px; }
    @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
    .spin { animation: spin 1s linear infinite; display: inline-block; }

    .paywall-trial-note {
      text-align: center; font-size: 0.65rem; color: var(--ion-color-medium);
      margin: 8px 0 4px; padding: 0 16px;
    }
    .paywall-restore {
      width: 100%; padding: 12px; background: none; border: none;
      color: var(--ion-color-medium); font-size: 0.75rem; font-weight: 600;
      display: flex; align-items: center; justify-content: center; gap: 7px;
      cursor: pointer; border-top: 1px solid var(--ion-border-color, rgba(0,0,0,0.07));
      margin-top: 8px; transition: color 0.2s;
    }
    .paywall-restore:hover { color: var(--ion-text-color); }
    .paywall-restore:focus-visible { outline: 2px solid #10b981; outline-offset: 2px; }

    /* ── Referral ── */
    .referral-wrap { display: flex; flex-direction: column; gap: 12px; padding: 12px 16px 14px; }
    .referral-desc { font-size: 0.78rem; color: var(--ion-color-medium); margin: 0; line-height: 1.5; }
    .referral-code-row {
      display: flex; align-items: center; gap: 8px;
      background: rgba(16,185,129,0.08); border: 1.5px solid rgba(16,185,129,0.25);
      border-radius: 10px; padding: 8px 12px;
    }
    .referral-code {
      flex: 1; font-family: monospace; font-size: 1rem; font-weight: 800;
      letter-spacing: 0.12em; color: #10b981;
    }
    .referral-copy-btn {
      background: none; border: none; cursor: pointer; color: #10b981; font-size: 1rem; padding: 2px 6px;
    }
    .referral-copy-btn:focus-visible { outline: 2px solid #10b981; outline-offset: 2px; border-radius: 4px; }
    .referral-share-btn {
      display: flex; align-items: center; justify-content: center; gap: 8px;
      padding: 11px 18px; border-radius: 11px; border: none; cursor: pointer;
      font-size: 0.85rem; font-weight: 700;
      background: linear-gradient(135deg, #10b981, #059669); color: #fff; transition: opacity 0.2s;
    }
    .referral-share-btn:hover { opacity: 0.88; }
    .referral-share-btn:focus-visible { outline: 2px solid #10b981; outline-offset: 2px; border-radius: 11px; }

    /* ══ BOTTOM FOOTER ACTIONS ══ */
    .set-actions-footer {
      display: flex; align-items: center; justify-content: space-between;
      padding: 12px 4px 0; margin-top: 8px;
      border-top: 1px solid var(--ion-border-color, rgba(0,0,0,0.07));
    }
    /* Sign out — text link style, NOT red */
    .set-signout-btn {
      display: flex; align-items: center; gap: 8px;
      background: none; border: none; cursor: pointer;
      color: var(--ion-color-medium); font-size: 0.82rem; font-weight: 600;
      padding: 6px 0; transition: color 0.18s;
    }
    .set-signout-btn:hover { color: var(--ion-text-color); }
    .set-signout-btn:focus-visible { outline: 2px solid #10b981; outline-offset: 2px; border-radius: 4px; }
    .set-version { font-size: 0.65rem; color: var(--ion-color-medium); opacity: 0.7; }

    /* Danger zone */
    .set-danger-zone {
      margin-top: 24px;
      border: 1px solid rgba(239,68,68,0.25); border-radius: 16px;
      padding: 16px; background: rgba(239,68,68,0.03);
    }
    .set-danger-header {
      display: flex; align-items: center; gap: 7px;
      font-size: 0.7rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em;
      color: #ef4444; margin-bottom: 8px;
    }
    .set-danger-desc {
      font-size: 0.75rem; color: var(--ion-color-medium); margin: 0 0 14px; line-height: 1.5;
    }
    .set-delete-btn {
      display: flex; align-items: center; gap: 8px;
      background: none; border: 1px solid rgba(239,68,68,0.40); border-radius: 10px;
      padding: 9px 16px; color: #ef4444; font-size: 0.8rem; font-weight: 700;
      cursor: pointer; transition: all 0.18s;
    }
    .set-delete-btn:hover { background: rgba(239,68,68,0.08); border-color: #ef4444; }
    .set-delete-btn:focus-visible { outline: 2px solid #ef4444; outline-offset: 2px; }

    /* ── Dark mode overrides ── */
    @media (prefers-color-scheme: dark) {
      .set-card { background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.08); box-shadow: none; }
      .set-row:hover { background: rgba(255,255,255,0.03); }
      .set-divider { background: rgba(255,255,255,0.06); }
      .toggle-track { background: rgba(255,255,255,0.12); }
      .goal-opt { background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.08); }
      .time-chip { background: rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.1); }
      .plan-card { background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.08); }
      .theme-seg,
      .lang-seg { background: rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.09); }
      .theme-seg-sel { background: rgba(255,255,255,0.12) !important; }
      .set-danger-zone { background: rgba(239,68,68,0.04); border-color: rgba(239,68,68,0.20); }
      .set-actions-footer { border-top-color: rgba(255,255,255,0.08); }
    }
  `
})
export class SettingsComponent implements OnInit {
  themeService     = inject(ThemeService);
  auth             = inject(AuthService);
  notifSvc         = inject(NotificationService);
  private alertSvc = inject(AlertService);
  private router   = inject(Router);
  private firestore = inject(Firestore);
  purchaseService  = inject(PurchaseService);
  referralSvc      = inject(ReferralService);
  langSvc          = inject(LangService);
  private shareSvc = inject(ShareService);
  game             = inject(GamificationService);

  readonly goals         = GOALS;
  readonly reminderTimes = REMINDER_TIMES;
  readonly themeOptions  = THEME_OPTIONS;
  readonly appVersion    = environment.appVersion;

  goalKey        = signal(localStorage.getItem('user_goal') ?? '');
  showGoalPicker = signal(false);

  currentGoalLabel = computed(() => GOALS.find(g => g.key === this.goalKey())?.label ?? 'Set a goal');
  currentGoalEmoji = computed(() => GOALS.find(g => g.key === this.goalKey())?.emoji ?? '🎯');

  memberSince = computed((): string => {
    const u = this.auth.user() as any;
    const t = u?.metadata?.creationTime;
    if (!t) return '';
    const d = new Date(t);
    return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  });

  planLabel = computed((): string => {
    if (this.purchaseService.isPro()) return 'Pro plan';
    if (this.purchaseService.trialActive()) return 'Trial';
    return 'Free plan';
  });

  ngOnInit() { /* signals loaded from localStorage */ }

  // ── Theme ────────────────────────────────────────────────────────────────

  setTheme(pref: ThemePreference): void {
    this.themeService.setPreference(pref);
  }

  // ── Language ─────────────────────────────────────────────────────────────

  async setLang(lang: AppLang) { await this.langSvc.setLang(lang); }

  // ── Notifications ────────────────────────────────────────────────────────

  async toggleNotifications() {
    await this.notifSvc.toggle(!this.notifSvc.notificationsEnabled());
  }

  async setReminderHour(hour: number) {
    await this.notifSvc.setReminderHour(hour);
  }

  // ── Goal ─────────────────────────────────────────────────────────────────

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

  // ── Pro / IAP ────────────────────────────────────────────────────────────

  async upgradeToPro() {
    const uid = this.auth.user()?.uid ?? 'anonymous';
    await this.purchaseService.purchasePlan(uid, this.purchaseService.selectedPlan());
  }

  async openCustomerCenter() {
    await this.purchaseService.openCustomerCenter();
  }

  async restorePurchases() {
    const uid = this.auth.user()?.uid;
    if (uid) await this.purchaseService.restorePurchases(uid);
  }

  // ── Referral ─────────────────────────────────────────────────────────────

  shareReferral() {
    const code = this.referralSvc.referralCode();
    if (!code) return;
    this.shareSvc.shareText(
      'Join me on JavaIQ!',
      'I\'ve been using JavaIQ to master Java interview skills. Join with my referral link and we both get bonus XP! 🚀',
      `https://javaiq.app/ref/${code}`
    );
  }

  copyReferralCode() {
    const code = this.referralSvc.referralCode();
    if (!code) return;
    navigator.clipboard.writeText(`https://javaiq.app/ref/${code}`).catch(() => {});
  }

  // ── Navigation ───────────────────────────────────────────────────────────

  openPrivacyPolicy() { window.open('https://javaiq.app/privacy', '_blank', 'noopener,noreferrer'); }
  openTerms()         { window.open('https://javaiq.app/terms',   '_blank', 'noopener,noreferrer'); }
  openAbout()         { this.router.navigate(['/about']); }
  openAccountDetails() { /* future: navigate to /profile or show edit sheet */ }

  // ── Account actions ──────────────────────────────────────────────────────

  async confirmLogout() {
    const confirmed = await this.alertSvc.showAlert({
      title: 'Sign Out',
      message: 'Are you sure you want to sign out? Your progress is saved to the cloud.',
      confirmText: 'Sign Out', cancelText: 'Cancel', showCancel: true, type: 'warning'
    });
    if (confirmed) {
      await this.auth.logout();
      this.router.navigate(['/dashboard'], { replaceUrl: true });
    }
  }

  async confirmDeleteAccount() {
    const confirmed = await this.alertSvc.showAlert({
      title: 'Delete Account',
      message: 'This will permanently delete your account and all data. This cannot be undone.',
      confirmText: 'Delete Forever', cancelText: 'Cancel', showCancel: true, type: 'error'
    });
    if (!confirmed) return;

    // Second confirmation
    const confirmed2 = await this.alertSvc.showAlert({
      title: 'Are you absolutely sure?',
      message: 'All your XP, streaks, progress and purchase history will be lost forever.',
      confirmText: 'Yes, Delete', cancelText: 'No, Keep Account', showCancel: true, type: 'error'
    });
    if (!confirmed2) return;

    try {
      // Firebase auth deletion — user must have recently authenticated
      const firebaseUser = this.auth.user() as any;
      if (firebaseUser?.delete) await firebaseUser.delete();
      await this.auth.logout();
      this.router.navigate(['/dashboard'], { replaceUrl: true });
    } catch (e: any) {
      await this.alertSvc.showAlert({
        title: 'Error',
        message: 'Could not delete account. Please sign out and sign back in, then try again.',
        confirmText: 'OK', showCancel: false, type: 'error'
      });
    }
  }
}
