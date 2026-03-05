import { Injectable, signal, computed, effect, inject } from '@angular/core';
import { Firestore, doc, getDoc, setDoc, updateDoc } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GamificationService {
  private firestore = inject(Firestore);
  private authService = inject(AuthService);

  // --- Signals for State ---
  xp = signal<number>(0);
  streak = signal<number>(0);
  lastActiveDate = signal<string | null>(null);
  streakShields = signal<number>(0);           // Streak freeze power-ups
  dailyChallengeStreak = signal<number>(0);    // Consecutive daily challenge completions
  lastDailyChallengeDate = signal<string | null>(null);

  // Milestone streak days that award a shield
  private readonly SHIELD_MILESTONES = [7, 14, 30];
  // Daily challenge streak milestones: [days, xpBonus]
  private readonly DC_MILESTONES: [number, number][] = [[3, 200], [7, 500], [30, 1000]];

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

    const diffDays = Math.round(
      (new Date(today).getTime() - new Date(last).getTime()) / (1000 * 60 * 60 * 24)
    );

    if (diffDays > 1) {
      if (this.streakShields() > 0) {
        // Consume one shield instead of resetting streak
        this.streakShields.update(s => s - 1);
      } else {
        this.streak.set(0);
      }
    }
  }

  // --- Core Logic ---

  addXp(amount: number) {
    this.xp.update(val => val + amount);
    this.updateStreak();
  }

  updateStreak() {
    const today = new Date().toISOString().split('T')[0];
    const last = this.lastActiveDate();

    if (last === today) return;

    if (last) {
      const diffDays = Math.round(
        (new Date(today).getTime() - new Date(last).getTime()) / (1000 * 60 * 60 * 24)
      );
      if (diffDays === 1) {
        this.streak.update(s => s + 1);
      } else {
        this.streak.set(1);
      }
    } else {
      this.streak.set(1);
    }

    this.lastActiveDate.set(today);
    this.checkMilestoneShield();
  }

  /** Award 1 shield at 7, 14, and 30-day streak milestones */
  private checkMilestoneShield() {
    if (this.SHIELD_MILESTONES.includes(this.streak())) {
      this.streakShields.update(s => s + 1);
    }
  }

  /** Called when daily challenge is completed */
  updateDailyStreak() {
    const today = new Date().toISOString().split('T')[0];
    const last = this.lastDailyChallengeDate();

    if (last === today) return; // Already completed today

    if (last) {
      const diffDays = Math.round(
        (new Date(today).getTime() - new Date(last).getTime()) / (1000 * 60 * 60 * 24)
      );
      if (diffDays === 1) {
        this.dailyChallengeStreak.update(s => s + 1);
      } else {
        this.dailyChallengeStreak.set(1);
      }
    } else {
      this.dailyChallengeStreak.set(1);
    }

    this.lastDailyChallengeDate.set(today);
    this.checkDcMilestone();
  }

  private checkDcMilestone() {
    const streak = this.dailyChallengeStreak();
    for (const [days, xpBonus] of this.DC_MILESTONES) {
      if (streak === days) {
        this.xp.update(v => v + xpBonus);
        break;
      }
    }
  }

  /** Earn a shield via reward ad (once per day) */
  earnShieldFromAd() {
    const today = new Date().toISOString().split('T')[0];
    const lastEarned = localStorage.getItem('shield_earned_date');
    if (lastEarned === today) return; // Already earned today
    this.streakShields.update(s => s + 1);
    localStorage.setItem('shield_earned_date', today);
  }

  // --- Persistence ---

  private loadState() {
    const storedXp = localStorage.getItem('game_xp');
    const storedStreak = localStorage.getItem('game_streak');
    const storedLastDate = localStorage.getItem('game_last_active');
    const storedShields = localStorage.getItem('game_shields');

    const storedDcStreak = localStorage.getItem('game_dc_streak');
    const storedDcDate   = localStorage.getItem('game_dc_date');

    if (storedXp) this.xp.set(parseInt(storedXp, 10));
    if (storedStreak) this.streak.set(parseInt(storedStreak, 10));
    if (storedLastDate) this.lastActiveDate.set(storedLastDate);
    if (storedShields) this.streakShields.set(parseInt(storedShields, 10));
    if (storedDcStreak) this.dailyChallengeStreak.set(parseInt(storedDcStreak, 10));
    if (storedDcDate) this.lastDailyChallengeDate.set(storedDcDate);
  }

  private saveState() {
    localStorage.setItem('game_xp', this.xp().toString());
    localStorage.setItem('game_streak', this.streak().toString());
    localStorage.setItem('game_shields', this.streakShields().toString());
    localStorage.setItem('game_dc_streak', this.dailyChallengeStreak().toString());
    if (this.lastActiveDate()) localStorage.setItem('game_last_active', this.lastActiveDate()!);
    if (this.lastDailyChallengeDate()) localStorage.setItem('game_dc_date', this.lastDailyChallengeDate()!);
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
            this.streakShields.set(data['streakShields'] || 0);
            this.lastActiveDate.set(data['lastActiveDate'] || null);
        }
      } catch {
          // Silent fail
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
              streakShields: this.streakShields(),
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
      } catch {
          // Silent fail for offline
      }
  }
}
