import { Injectable, signal, inject, effect } from '@angular/core';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
import { AuthService } from '../auth.service';
import { GamificationService } from '../gamification.service';
import { DataService } from '../data.service';

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;       // Bootstrap icon class, e.g. 'bi-fire'
  iconColor: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  unlockedAt: string | null;  // ISO date string when unlocked, null if locked
}

const ACHIEVEMENT_DEFINITIONS: Omit<Achievement, 'unlockedAt'>[] = [
  // ── Streak ──────────────────────────────────────────────────────────────────
  {
    id: 'streak-7',
    title: '7-Day Streak',
    description: 'Opened the app 7 days in a row',
    icon: 'bi-fire',
    iconColor: '#f97316',
    rarity: 'common'
  },
  {
    id: 'streak-30',
    title: '30-Day Streak',
    description: 'Maintained a 30-day learning streak',
    icon: 'bi-fire',
    iconColor: '#ef4444',
    rarity: 'rare'
  },
  {
    id: 'streak-100',
    title: '100-Day Champion',
    description: '100 consecutive days of learning',
    icon: 'bi-trophy-fill',
    iconColor: '#FFD700',
    rarity: 'legendary'
  },
  // ── Learning ────────────────────────────────────────────────────────────────
  {
    id: 'topic-first',
    title: 'First Step',
    description: 'Completed your first tutorial topic',
    icon: 'bi-book-fill',
    iconColor: '#10b981',
    rarity: 'common'
  },
  {
    id: 'topic-10',
    title: 'Quick Learner',
    description: 'Completed 10 tutorial topics',
    icon: 'bi-layers-fill',
    iconColor: '#3b82f6',
    rarity: 'common'
  },
  {
    id: 'course-done',
    title: 'Course Complete',
    description: 'Finished an entire course',
    icon: 'bi-award-fill',
    iconColor: '#8b5cf6',
    rarity: 'rare'
  },
  // ── Challenge ───────────────────────────────────────────────────────────────
  {
    id: 'combo-10',
    title: 'Combo Master',
    description: '10 correct answers in a row in a single challenge',
    icon: 'bi-lightning-fill',
    iconColor: '#eab308',
    rarity: 'rare'
  },
  {
    id: 'speed-demon',
    title: 'Speed Demon',
    description: 'Answered all 10 questions with under 5 seconds average',
    icon: 'bi-stopwatch-fill',
    iconColor: '#06b6d4',
    rarity: 'epic'
  },
  // ── Assessment ──────────────────────────────────────────────────────────────
  {
    id: 'assess-pass',
    title: 'First Pass',
    description: 'Scored 70% or higher on an assessment',
    icon: 'bi-patch-check-fill',
    iconColor: '#10b981',
    rarity: 'common'
  },
  {
    id: 'assess-100',
    title: 'Perfect Score',
    description: 'Scored 100% on an assessment',
    icon: 'bi-star-fill',
    iconColor: '#FFD700',
    rarity: 'epic'
  },
  // ── Social ──────────────────────────────────────────────────────────────────
  {
    id: 'top-10',
    title: 'Top 10',
    description: 'Ranked in the top 10 on the global leaderboard',
    icon: 'bi-people-fill',
    iconColor: '#8b5cf6',
    rarity: 'legendary'
  }
];

@Injectable({ providedIn: 'root' })
export class AchievementService {
  private firestore    = inject(Firestore);
  private authService  = inject(AuthService);
  private gamService   = inject(GamificationService);  // one-way, no circular
  private dataService  = inject(DataService);           // one-way, no circular

  private readonly LS_KEY = 'achievements_state';

  /** Full achievement list with unlock state */
  achievements = signal<Achievement[]>(this.loadFromLocal());

  /** Emits the most recently unlocked achievement for the toast overlay */
  justUnlocked = signal<Achievement | null>(null);

  constructor() {
    // ── Reactive streak watcher (avoids injecting AchievementService into GamificationService) ──
    effect(() => {
      const streak = this.gamService.streak();
      if (streak > 0) this.checkStreakAchievements(streak);
    });

    // ── Reactive topic watcher — check topic achievements when completedTopicIds grows ──
    effect(() => {
      const size = this.dataService.completedTopicIds().size;
      if (size > 0) this.checkTopicAchievements(size);
    });
  }

  // ─── Public check methods ──────────────────────────────────────────────────

  checkStreakAchievements(streak: number): void {
    if (streak >= 7)   this.unlockById('streak-7');
    if (streak >= 30)  this.unlockById('streak-30');
    if (streak >= 100) this.unlockById('streak-100');
  }

  checkTopicAchievements(totalCompleted: number): void {
    if (totalCompleted >= 1)  this.unlockById('topic-first');
    if (totalCompleted >= 10) this.unlockById('topic-10');
  }

  checkCourseCompletion(): void {
    this.unlockById('course-done');
  }

  /**
   * @param maxCombo      Highest consecutive correct streak in the session
   * @param totalTimeMs   Total ms taken across all answered questions
   * @param totalAnswered Number of questions answered (for avg calculation)
   */
  checkChallengeAchievements(maxCombo: number, totalTimeMs: number, totalAnswered: number): void {
    if (maxCombo >= 10) this.unlockById('combo-10');
    if (totalAnswered > 0 && (totalTimeMs / totalAnswered) < 5000) {
      this.unlockById('speed-demon');
    }
  }

  checkAssessmentAchievements(score: number): void {
    if (score >= 70)  this.unlockById('assess-pass');
    if (score >= 100) this.unlockById('assess-100');
  }

  checkLeaderboardAchievement(rank: number): void {
    if (rank <= 10) this.unlockById('top-10');
  }

  clearJustUnlocked(): void {
    this.justUnlocked.set(null);
  }

  // ─── Core unlock logic ─────────────────────────────────────────────────────

  private unlockById(id: string): void {
    const existing = this.achievements().find(a => a.id === id);
    if (existing?.unlockedAt) return;  // idempotent — already unlocked

    const today = new Date().toISOString();
    this.achievements.update(list =>
      list.map(a => a.id === id ? { ...a, unlockedAt: today } : a)
    );

    const unlocked = this.achievements().find(a => a.id === id)!;
    this.justUnlocked.set(unlocked);

    this.persistLocal();
    this.syncToFirestore();
  }

  // ─── Persistence ───────────────────────────────────────────────────────────

  private loadFromLocal(): Achievement[] {
    try {
      const raw = localStorage.getItem(this.LS_KEY);
      if (raw) {
        const savedMap: Record<string, string | null> = JSON.parse(raw);
        return ACHIEVEMENT_DEFINITIONS.map(def => ({
          ...def,
          unlockedAt: savedMap[def.id] ?? null
        }));
      }
    } catch { /* malformed JSON */ }

    return ACHIEVEMENT_DEFINITIONS.map(def => ({ ...def, unlockedAt: null }));
  }

  private persistLocal(): void {
    const map: Record<string, string | null> = {};
    this.achievements().forEach(a => { map[a.id] = a.unlockedAt; });
    localStorage.setItem(this.LS_KEY, JSON.stringify(map));
  }

  private async syncToFirestore(): Promise<void> {
    const user = this.authService.user();
    if (!user) return;
    const docRef = doc(this.firestore, `achievements/${user.uid}`);
    const map: Record<string, string | null> = {};
    this.achievements().forEach(a => { map[a.id] = a.unlockedAt; });
    try {
      await setDoc(docRef, map, { merge: true });
    } catch { /* offline — silent fail */ }
  }
}
