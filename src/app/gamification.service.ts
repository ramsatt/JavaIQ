import { Injectable, signal, computed, effect, inject } from '@angular/core';
import { Firestore, doc, getDoc, setDoc, updateDoc, increment } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { NotificationService } from './services/notification.service';
import { RatingService } from './services/rating.service';
import { PurchaseService } from './services/purchase.service';
import { ShareService } from './services/share.service';

@Injectable({
  providedIn: 'root'
})
export class GamificationService {
  private firestore = inject(Firestore);
  private authService = inject(AuthService);
  private notifService = inject(NotificationService);
  private ratingSvc = inject(RatingService);
  private purchaseSvc = inject(PurchaseService);
  private shareSvc = inject(ShareService);

  // --- Signals for State ---
  xp = signal<number>(0);
  streak = signal<number>(0);
  bestStreak = signal<number>(0);
  lastActiveDate = signal<string | null>(null);
  activeDays = signal<Set<string>>(new Set());

  /** Number of available streak freezes */
  streakFreezes = signal<number>(0);

  /** True for the current session when a freeze was auto-applied on startup */
  streakFrozenToday = signal<boolean>(false);

  /** Set to the milestone day count (7/14/30/60/100) briefly when just reached, then back to 0 */
  streakMilestoneJustHit = signal<number>(0);

  // --- Computed Values ---
  level = computed(() => Math.floor(Math.sqrt(this.xp() / 100)) + 1);
  xpToNextLevel = computed(() => {
    const nextLevel = this.level() + 1;
    return Math.pow(nextLevel - 1, 2) * 100 - this.xp();
  });

  levelProgress = computed(() => {
    const currentLevelBaseXp = Math.pow(this.level() - 1, 2) * 100;
    const nextLevelBaseXp = Math.pow(this.level(), 2) * 100;
    const levelSpan = nextLevelBaseXp - currentLevelBaseXp;
    const progressIntoLevel = this.xp() - currentLevelBaseXp;

    if (levelSpan === 0) return 0;
    return (progressIntoLevel / levelSpan) * 100;
  });

  constructor() {
    this.loadState();
    this.refillFreezesIfNewWeek();
    this.checkStreak();

    // Listen for auth changes to sync cloud data
    effect(() => {
      const user = this.authService.user();
      if (user) {
        this.syncWithCloud(user.uid);
      }
    });

    // Auto-save to local storage on signal changes
    effect(() => {
      this.saveState();
    });
  }

  private checkStreak() {
    const today = new Date().toISOString().split('T')[0];
    const last = this.lastActiveDate();
    if (!last) return;

    const lastDate = new Date(last);
    const currentDate = new Date(today);
    const diffTime = currentDate.getTime() - lastDate.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays > 1) {
      // Exactly 1 missed day — try to save with a freeze
      if (diffDays === 2 && this.streakFreezes() > 0) {
        this.streakFreezes.update(f => f - 1);
        this.streakFrozenToday.set(true);
        // Advance lastActiveDate to yesterday so updateStreak() increments normally
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        this.lastActiveDate.set(yesterday.toISOString().split('T')[0]);
      } else {
        this.streak.set(0);
      }
    }
  }

  /**
   * Returns the ISO week number for a given date (or today).
   * Used to track per-week freeze quota resets.
   */
  private getISOWeek(date = new Date()): number {
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil(((d.getTime() - yearStart.getTime()) / 86_400_000 + 1) / 7);
  }

  /**
   * Refills freezes at the start of a new ISO week.
   * Free users: 1 freeze/week. Pro users: 7 freezes/week (effectively unlimited).
   */
  private refillFreezesIfNewWeek(): void {
    const thisWeek = this.getISOWeek();
    const storedWeek = parseInt(localStorage.getItem('freeze_week') ?? '0', 10);
    if (thisWeek !== storedWeek) {
      const max = this.purchaseSvc.isProOrTrial() ? 7 : 1;
      this.streakFreezes.set(max);
      localStorage.setItem('freeze_week', String(thisWeek));
    }
  }

  // --- Core Logic ---

  /** Accumulates XP delta between cloud saves so weeklyXp can be incremented correctly. */
  private _pendingXpDelta = 0;

  addXp(amount: number) {
    // Pro users earn 1.5× XP
    const earned = this.purchaseSvc.isProOrTrial() ? Math.round(amount * 1.5) : amount;
    this._pendingXpDelta += earned;
    const prevLevel = this.level();
    this.xp.update(val => val + earned);
    // Level 10 soft paywall — trigger once when crossing this milestone
    const newLevel = this.level();
    if (!this.purchaseSvc.isProOrTrial() && prevLevel < 10 && newLevel >= 10) {
      const uid = this.authService.user()?.uid;
      if (uid) this.purchaseSvc.presentPaywallIfNeeded(uid).catch(() => {});
    }
    this.updateStreak();
    this.ratingSvc.checkAfterLevel(this.level());
    this.saveToCloud();
  }

  updateStreak() {
    const today = new Date().toISOString().split('T')[0];
    const last = this.lastActiveDate();

    if (last === today) return;

    if (last) {
      const lastDate = new Date(last);
      const currentDate = new Date(today);
      const diffTime = Math.abs(currentDate.getTime() - lastDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        this.streak.update(s => s + 1);
        if (this.streak() > this.bestStreak()) this.bestStreak.set(this.streak());
      } else {
        this.streak.set(1);
      }
    } else {
      this.streak.set(1);
      if (this.bestStreak() === 0) this.bestStreak.set(1);
    }

    this.lastActiveDate.set(today);
    this.activeDays.update(s => { s.add(today); return new Set(s); });

    // Schedule tomorrow's reminder (lazy permission request on first meaningful activity)
    this.notifService.requestPermissionAndSchedule(this.streak());

    // 7-day streak soft paywall (fires the first time streak hits 7)
    if (!this.purchaseSvc.isProOrTrial() && this.streak() === 7) {
      const uid = this.authService.user()?.uid;
      if (uid) this.purchaseSvc.presentPaywallIfNeeded(uid).catch(() => {});
    }
    // In-app review prompt at 7-day streak milestone
    this.ratingSvc.checkAfterStreak(this.streak());

    // Streak milestone share nudge at 7, 14, 30, 60, 100-day boundaries
    const SHARE_MILESTONES = [7, 14, 30, 60, 100];
    if (SHARE_MILESTONES.includes(this.streak())) {
      this.streakMilestoneJustHit.set(this.streak());
    }
  }

  // --- Persistence ---

  private loadState() {
    const storedXp = localStorage.getItem('game_xp');
    const storedStreak = localStorage.getItem('game_streak');
    const storedBestStreak = localStorage.getItem('game_best_streak');
    const storedLastDate = localStorage.getItem('game_last_active');

    if (storedXp) this.xp.set(parseInt(storedXp, 10));
    if (storedStreak) this.streak.set(parseInt(storedStreak, 10));
    if (storedBestStreak) this.bestStreak.set(parseInt(storedBestStreak, 10));
    if (storedLastDate) this.lastActiveDate.set(storedLastDate);
    const storedDays = localStorage.getItem('game_active_days');
    if (storedDays) {
      try { this.activeDays.set(new Set(JSON.parse(storedDays))); } catch { /* ignore */ }
    }
    const storedFreezes = localStorage.getItem('streak_freezes');
    if (storedFreezes) this.streakFreezes.set(parseInt(storedFreezes, 10));
  }

  private saveState() {
    localStorage.setItem('game_xp', this.xp().toString());
    localStorage.setItem('game_streak', this.streak().toString());
    localStorage.setItem('game_best_streak', this.bestStreak().toString());
    if (this.lastActiveDate()) {
      localStorage.setItem('game_last_active', this.lastActiveDate()!);
    }
    localStorage.setItem('game_active_days', JSON.stringify([...this.activeDays()]));
    localStorage.setItem('streak_freezes', this.streakFreezes().toString());
  }

  private async syncWithCloud(uid: string) {
    const docRef = doc(this.firestore, `gamification/${uid}`);
    try {
      const snap = await getDoc(docRef);
      if (snap.exists()) {
        const data = snap.data();
        // Merge strategy: Take max XP
        const cloudXp = data['xp'] || 0;
        if (cloudXp > this.xp()) this.xp.set(cloudXp);

        this.streak.set(data['streak'] || 0);
        const cloudBest = data['bestStreak'] || 0;
        if (cloudBest > this.bestStreak()) this.bestStreak.set(cloudBest);
        this.lastActiveDate.set(data['lastActiveDate'] || null);
        if (data['streakFreezes'] !== undefined) {
          this.streakFreezes.set(data['streakFreezes']);
        }

        // Merge activeDays: union of local and cloud sets
        const cloudDays: string[] = data['activeDays'] || [];
        if (cloudDays.length > 0) {
          this.activeDays.update(local => {
            const merged = new Set(local);
            cloudDays.forEach(d => merged.add(d));
            return merged;
          });
        }
      }
    } catch (e) {
      console.error("Cloud sync failed", e);
    }
  }

  private async saveToCloud() {
    const user = this.authService.user();
    if (!user) return;

    const docRef = doc(this.firestore, `gamification/${user.uid}`);
    try {
      await setDoc(docRef, {
        xp: this.xp(),
        streak: this.streak(),
        bestStreak: this.bestStreak(),
        lastActiveDate: this.lastActiveDate(),
        activeDays: [...this.activeDays()],
        streakFreezes: this.streakFreezes(),
        lastUpdated: new Date()
      }, { merge: true });

      // Also update global leaderboard
      this.updateLeaderboard(user, this._pendingXpDelta);
      this._pendingXpDelta = 0;
    } catch (e) {
      // Silent fail for offline
    }
  }

  private async updateLeaderboard(user: any, xpDelta = 0) {
    const leaderRef = doc(this.firestore, `leaderboard/${user.uid}`);
    try {
      await setDoc(leaderRef, {
        displayName: user.displayName || 'Anonymous',
        photoURL: user.photoURL || null,
        points:    this.xp(),
        isPro:     this.purchaseSvc.isProOrTrial(),
        lastUpdated: new Date(),
        // Increment weeklyXp; Cloud Function resets to 0 every Sunday midnight IST
        weeklyXp: increment(xpDelta > 0 ? xpDelta : 0),
      }, { merge: true });
    } catch (e) {
      console.error("Leaderboard sync failed", e);
    }
  }
}
