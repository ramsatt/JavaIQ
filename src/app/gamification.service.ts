import { Injectable, signal, computed, effect, inject } from '@angular/core';
import { Firestore, doc, getDoc, setDoc, updateDoc } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { NotificationService } from './services/notification.service';
import { RatingService } from './services/rating.service';
import { PurchaseService } from './services/purchase.service';

@Injectable({
  providedIn: 'root'
})
export class GamificationService {
  private firestore = inject(Firestore);
  private authService = inject(AuthService);
  private notifService = inject(NotificationService);
  private ratingSvc = inject(RatingService);
  private purchaseSvc = inject(PurchaseService);

  // --- Signals for State ---
  xp = signal<number>(0);
  streak = signal<number>(0);
  bestStreak = signal<number>(0);
  lastActiveDate = signal<string | null>(null);
  activeDays = signal<Set<string>>(new Set());

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
    const diffTime = Math.abs(currentDate.getTime() - lastDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays > 1) {
      this.streak.set(0);
    }
  }

  // --- Core Logic ---

  addXp(amount: number) {
    // Pro users earn 1.5× XP
    const earned = this.purchaseSvc.isProOrTrial() ? Math.round(amount * 1.5) : amount;
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
  }

  private saveState() {
    localStorage.setItem('game_xp', this.xp().toString());
    localStorage.setItem('game_streak', this.streak().toString());
    localStorage.setItem('game_best_streak', this.bestStreak().toString());
    if (this.lastActiveDate()) {
      localStorage.setItem('game_last_active', this.lastActiveDate()!);
    }
    localStorage.setItem('game_active_days', JSON.stringify([...this.activeDays()]));
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
        lastUpdated: new Date()
      }, { merge: true });

      // Also update global leaderboard
      this.updateLeaderboard(user);
    } catch (e) {
      // Silent fail for offline
    }
  }

  private async updateLeaderboard(user: any) {
    const leaderRef = doc(this.firestore, `leaderboard/${user.uid}`);
    try {
      await setDoc(leaderRef, {
        displayName: user.displayName || 'Anonymous',
        photoURL: user.photoURL || null,
        points: this.xp(), // Using XP as 'points' for leaderboard
        isPro: this.purchaseSvc.isProOrTrial(),
        lastUpdated: new Date()
      }, { merge: true });
    } catch (e) {
      console.error("Leaderboard sync failed", e);
    }
  }
}
