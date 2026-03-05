import { Injectable, signal, computed, effect, inject } from '@angular/core';
import { Firestore, doc, getDoc, setDoc, updateDoc } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { NotificationService } from './services/notification.service';
import { RatingService } from './services/rating.service';

@Injectable({
  providedIn: 'root'
})
export class GamificationService {
  private firestore = inject(Firestore);
  private authService = inject(AuthService);
  private notifService = inject(NotificationService);
  private ratingSvc = inject(RatingService);

  // --- Signals for State ---
  xp = signal<number>(0);
  streak = signal<number>(0);
  bestStreak = signal<number>(0);
  lastActiveDate = signal<string | null>(null);

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

    // Auto-save on changes
    effect(() => {
      this.saveState(); // Local
      this.saveToCloud(); // Cloud
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
    this.xp.update(val => val + amount);
    this.updateStreak();
    this.ratingSvc.checkAfterLevel(this.level());
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

    // Schedule tomorrow's reminder (lazy permission request on first meaningful activity)
    this.notifService.requestPermissionAndSchedule(this.streak());
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
  }

  private saveState() {
    localStorage.setItem('game_xp', this.xp().toString());
    localStorage.setItem('game_streak', this.streak().toString());
    localStorage.setItem('game_best_streak', this.bestStreak().toString());
    if (this.lastActiveDate()) {
      localStorage.setItem('game_last_active', this.lastActiveDate()!);
    }
  }

  private async syncWithCloud(uid: string) {
    const docRef = doc(this.firestore, `gamification/${uid}`);
    try {
      const snap = await getDoc(docRef);
      if (snap.exists()) {
        const data = snap.data();
        // Merge strategy: Take max XP (in case local was ahead or behind? usually max is safer for XP)
        const cloudXp = data['xp'] || 0;
        if (cloudXp > this.xp()) this.xp.set(cloudXp);

        this.streak.set(data['streak'] || 0);
        const cloudBest = data['bestStreak'] || 0;
        if (cloudBest > this.bestStreak()) this.bestStreak.set(cloudBest);
        this.lastActiveDate.set(data['lastActiveDate'] || null);
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
        lastUpdated: new Date()
      }, { merge: true });
    } catch (e) {
      console.error("Leaderboard sync failed", e);
    }
  }
}
