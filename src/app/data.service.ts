import { Injectable, signal, inject, effect } from '@angular/core';
import { Firestore, doc, getDoc, setDoc, updateDoc, increment, collection, query, orderBy, limit, getDocs } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { Question } from './data/question.model';
import { CORE_JAVA_QUESTIONS } from './data/core-java';
import { SPRING_BOOT_QUESTIONS } from './data/spring-boot';
import { HIBERNATE_QUESTIONS } from './data/hibernate';
import { SPRING_REACTIVE_QUESTIONS } from './data/spring-reactive';
import { MICROSERVICES_QUESTIONS } from './data/microservices';
import { MULTITHREADING_QUESTIONS } from './data/multithreading';
import { REACTIVE_PROGRAMMING_QUESTIONS } from './data/reactive-programming';
import { CODING_QUESTIONS } from './data/coding-questions';

export type { Question } from './data/question.model';

const QUESTION_MAP: Record<string, Question[]> = {
  'Core Java': CORE_JAVA_QUESTIONS,
  'Spring Boot': SPRING_BOOT_QUESTIONS,
  'Hibernate': HIBERNATE_QUESTIONS,
  'Spring Reactive': SPRING_REACTIVE_QUESTIONS,
  'Microservices': MICROSERVICES_QUESTIONS,
  'Multithreading': MULTITHREADING_QUESTIONS,
  'Reactive Programming': REACTIVE_PROGRAMMING_QUESTIONS,
  'Coding Questions': CODING_QUESTIONS
};

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private firestore = inject(Firestore);
  private authService = inject(AuthService);

  // Signals for local state
  points = signal<number>(0);
  revealedQuestionIds = signal<Set<number>>(new Set());
  
  constructor() {
    // Synchronize points and progress when user changes
    effect(() => {
      const user = this.authService.user();
      if (user) {
        this.loadUserData(user.uid);
      } else {
        // Fallback to local storage for guests or reset
        this.loadLocalData();
      }
    });
  }

  private async loadUserData(uid: string) {
    const userDocRef = doc(this.firestore, `users/${uid}`);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      const data = userDoc.data();
      this.points.set(data['points'] || 0);
      this.revealedQuestionIds.set(new Set(data['revealedIds'] || []));
    } else {
      // Initialize new user in Firestore
      await setDoc(userDocRef, {
        points: 0,
        revealedIds: [],
        displayName: this.authService.user()?.displayName || 'Anonymous',
        lastUpdated: new Date()
      });
    }
  }

  private loadLocalData() {
    const storedPoints = localStorage.getItem('user_points');
    const storedRevealed = localStorage.getItem('revealed_questions');
    
    if (storedPoints) this.points.set(parseInt(storedPoints));
    if (storedRevealed) this.revealedQuestionIds.set(new Set(JSON.parse(storedRevealed)));
  }

  private saveLocalData() {
    localStorage.setItem('user_points', this.points().toString());
    localStorage.setItem('revealed_questions', JSON.stringify(Array.from(this.revealedQuestionIds())));
  }

  async addPoints(amount: number) {
    this.points.update(p => p + amount);
    this.saveLocalData();

    const user = this.authService.user();
    if (user) {
      const userDocRef = doc(this.firestore, `users/${user.uid}`);
      await updateDoc(userDocRef, {
        points: increment(amount),
        lastUpdated: new Date()
      });
    }
  }

  async spendPoint(): Promise<boolean> {
    if (this.points() <= 0) return false;

    this.points.update(p => p - 1);
    this.saveLocalData();

    const user = this.authService.user();
    if (user) {
      const userDocRef = doc(this.firestore, `users/${user.uid}`);
      await updateDoc(userDocRef, {
        points: increment(-1),
        lastUpdated: new Date()
      });
    }
    return true;
  }

  async markAsRevealed(id: number) {
    if (this.revealedQuestionIds().has(id)) return;

    this.revealedQuestionIds.update(set => {
      const newSet = new Set(set);
      newSet.add(id);
      return newSet;
    });
    this.saveLocalData();

    const user = this.authService.user();
    if (user) {
      const userDocRef = doc(this.firestore, `users/${user.uid}`);
      await updateDoc(userDocRef, {
        revealedIds: Array.from(this.revealedQuestionIds()),
        lastUpdated: new Date()
      });
    }
  }

  getQuestions(category: string = 'All'): Question[] {
    let filtered: Question[] = [];

    if (category === 'All') {
      filtered = Object.values(QUESTION_MAP).flat();
    } else {
      filtered = QUESTION_MAP[category] || [];
    }

    // Sort: Uncompleted first
    return filtered.sort((a, b) => {
      const aDone = this.revealedQuestionIds().has(a.id);
      const bDone = this.revealedQuestionIds().has(b.id);
      if (aDone === bDone) return 0;
      return aDone ? 1 : -1;
    });
  }

  getProgress(category: string): number {
    const categoryQuestions = QUESTION_MAP[category] || [];
    if (categoryQuestions.length === 0) return 0;

    const revealedInCategory = categoryQuestions.filter(q => this.revealedQuestionIds().has(q.id)).length;
    return Math.round((revealedInCategory / categoryQuestions.length) * 100);
  }

  getCategoryStars(category: string): number {
    const progress = this.getProgress(category);
    if (progress >= 100) return 3;
    if (progress >= 60) return 2;
    if (progress >= 30) return 1;
    return 0;
  }

  // Defined order for the "Path"
  private readonly CATEGORY_PATH = [
    'Core Java',
    'Spring Boot',
    'Microservices', 
    'Hibernate',
    'Spring Reactive',
    'Multithreading',
    'Reactive Programming',
    'Coding Questions'
  ];

  isCategoryLocked(category: string): boolean {
    const index = this.CATEGORY_PATH.indexOf(category);
    if (index <= 0) return false; // First one is always unlocked

    // Check previous category
    const prevCategory = this.CATEGORY_PATH[index - 1];
    // Unlock if previous category has at least 1 star (30% complete)
    return this.getCategoryStars(prevCategory) < 1;
  }

  async getLeaderboard(limitCount: number = 10) {
    const leaderRef = collection(this.firestore, 'leaderboard');
    const q = query(leaderRef, orderBy('points', 'desc'), limit(limitCount));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  // Legacy support for older components (can be removed once all components are updated)
  isQuestionLocked(category: string, indexInCategory: number): boolean {
    return false; // Point-based system replaces batch locking
  }
}
