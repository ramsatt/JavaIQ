import { Injectable, inject, signal } from '@angular/core';
import { Firestore, doc, getDoc, setDoc } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { CORE_JAVA_QUESTIONS } from './data/core-java';
import { SPRING_BOOT_QUESTIONS } from './data/spring-boot';
import { MULTITHREADING_QUESTIONS } from './data/multithreading';
import { MICROSERVICES_QUESTIONS } from './data/microservices';
import { Question } from './data/question.model';

export interface DailyChallenge {
  date: string;           // YYYY-MM-DD
  questionIds: number[];  // 5 question IDs
  title: string;
  category: string;
}

const CACHE_KEY = 'daily_challenge_cache';
const COMPLETION_KEY = 'daily_challenge_completed';

// Fallback pool when Firestore doc doesn't exist for today
const FALLBACK_POOL: Question[] = [
  ...CORE_JAVA_QUESTIONS,
  ...SPRING_BOOT_QUESTIONS,
  ...MULTITHREADING_QUESTIONS,
  ...MICROSERVICES_QUESTIONS
];

@Injectable({ providedIn: 'root' })
export class DailyChallengeService {
  private firestore = inject(Firestore);
  private authService = inject(AuthService);

  todayChallenge = signal<DailyChallenge | null>(null);
  loading = signal(false);

  get todayKey(): string {
    return new Date().toISOString().split('T')[0];
  }

  isCompletedToday(): boolean {
    return localStorage.getItem(COMPLETION_KEY) === this.todayKey;
  }

  async loadTodayChallenge(): Promise<DailyChallenge> {
    // Check localStorage cache first
    const cached = this.getCached();
    if (cached) {
      this.todayChallenge.set(cached);
      return cached;
    }

    this.loading.set(true);
    try {
      const ref = doc(this.firestore, `daily_challenges/${this.todayKey}`);
      const snap = await getDoc(ref);

      let challenge: DailyChallenge;
      if (snap.exists()) {
        challenge = snap.data() as DailyChallenge;
      } else {
        challenge = this.generateFallback();
      }

      this.todayChallenge.set(challenge);
      this.saveCache(challenge);
      return challenge;
    } catch {
      const fallback = this.generateFallback();
      this.todayChallenge.set(fallback);
      return fallback;
    } finally {
      this.loading.set(false);
    }
  }

  async markCompleted(xpEarned: number) {
    localStorage.setItem(COMPLETION_KEY, this.todayKey);

    const user = this.authService.user();
    if (!user) return;

    const ref = doc(this.firestore, `daily_challenge_results/${user.uid}_${this.todayKey}`);
    await setDoc(ref, {
      uid: user.uid,
      date: this.todayKey,
      xpEarned,
      completedAt: new Date()
    }).catch(() => {});
  }

  getQuestionsForToday(): Question[] {
    const challenge = this.todayChallenge();
    if (!challenge) return this.generateFallback().questionIds.map(id =>
      FALLBACK_POOL.find(q => q.id === id)!
    ).filter(Boolean);

    return challenge.questionIds
      .map(id => FALLBACK_POOL.find(q => q.id === id))
      .filter((q): q is Question => !!q);
  }

  private generateFallback(): DailyChallenge {
    const shuffled = [...FALLBACK_POOL].sort(() => Math.random() - 0.5);
    const picked = shuffled.slice(0, 5);
    return {
      date: this.todayKey,
      questionIds: picked.map(q => q.id),
      title: 'Daily Java Challenge',
      category: 'Mixed'
    };
  }

  private getCached(): DailyChallenge | null {
    try {
      const raw = localStorage.getItem(CACHE_KEY);
      if (!raw) return null;
      const data = JSON.parse(raw) as DailyChallenge;
      return data.date === this.todayKey ? data : null;
    } catch {
      return null;
    }
  }

  private saveCache(challenge: DailyChallenge) {
    localStorage.setItem(CACHE_KEY, JSON.stringify(challenge));
  }
}
