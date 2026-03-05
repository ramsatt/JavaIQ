import { Injectable, signal, inject, computed } from '@angular/core';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';
import { AuthService } from '../auth.service';
import { DailyEngagementService } from './daily-engagement.service';

export type StudyGoal = 'faang' | 'switch' | 'first' | 'upskill';

export interface StudyTask {
  id: string;
  type: 'tutorial' | 'interview' | 'challenge' | 'leetcode' | 'assessment';
  label: string;
  description: string;
  route: string[];
  icon: string;
  xpReward: number;
}

// Goal → ordered focus areas (categories) for daily tasks
const GOAL_TRACKS: Record<StudyGoal, string[][]> = {
  faang: [
    ['Core Java', 'Multithreading'],
    ['Data Structures', 'Algorithms'],
    ['System Design', 'Microservices'],
    ['Spring Boot', 'Spring Reactive'],
    ['Hibernate', 'Reactive Programming']
  ],
  switch: [
    ['Spring Boot', 'Microservices'],
    ['Core Java', 'Spring Reactive'],
    ['Hibernate', 'Multithreading'],
    ['Microservices', 'Spring Boot'],
    ['Core Java', 'Reactive Programming']
  ],
  first: [
    ['Core Java', 'Spring Boot'],
    ['Core Java', 'Hibernate'],
    ['Spring Boot', 'Microservices'],
    ['Core Java', 'Multithreading'],
    ['Spring Boot', 'Spring Reactive']
  ],
  upskill: [
    ['Spring Reactive', 'Reactive Programming'],
    ['Microservices', 'Spring Boot'],
    ['Multithreading', 'Core Java'],
    ['Hibernate', 'Spring Boot'],
    ['Core Java', 'Reactive Programming']
  ]
};

// Cycle index: day 0..29 → week 0..4, day within week 0..5
function dayIndex(): number {
  const epochDay = Math.floor(Date.now() / 86_400_000);
  return epochDay % 30;
}

function buildTasks(goal: StudyGoal): StudyTask[] {
  const idx = dayIndex();
  const weekIdx = Math.floor(idx / 6) % 5;
  const [cat1, cat2] = GOAL_TRACKS[goal][weekIdx];

  return [
    {
      id: 'tutorial',
      type: 'tutorial',
      label: `Study ${cat1}`,
      description: `Read through today's ${cat1} topic`,
      route: ['/tutorials'],
      icon: '📖',
      xpReward: 20
    },
    {
      id: 'interview',
      type: 'interview',
      label: `${cat2} Interview Prep`,
      description: `Practice ${cat2} interview questions`,
      route: ['/interview-questions', cat2],
      icon: '💬',
      xpReward: 30
    },
    {
      id: 'challenge',
      type: 'challenge',
      label: 'Daily Challenge',
      description: '5 questions · 2× XP bonus',
      route: ['/daily-challenge'],
      icon: '⚡',
      xpReward: 50
    }
  ];
}

@Injectable({ providedIn: 'root' })
export class StudyPlanService {
  private firestore   = inject(Firestore);
  private authService = inject(AuthService);
  private daily       = inject(DailyEngagementService);

  private readonly LS_GOAL_KEY = 'study_plan_goal';

  goal          = signal<StudyGoal>('upskill');
  goalLoaded    = signal(false);
  todayTasks    = computed(() => buildTasks(this.goal()));

  /** Current day within the 30-day cycle (0–29) */
  readonly currentDay = dayIndex() + 1;      // 1-based for display
  readonly totalDays  = 30;

  /** How many tasks done today (0–3) */
  tasksCompletedToday = computed((): number => {
    const s = this.daily.dailyState();
    const today = new Date().toISOString().split('T')[0];
    if (s.date !== today) return 0;
    let count = 0;
    if (s.challengeDoneToday)        count++;
    if (s.qotdAnsweredToday)         count++;
    if (s.topicsCompletedToday >= 1) count++;
    return count;
  });

  overallProgress = computed((): number =>
    Math.round((this.tasksCompletedToday() / this.todayTasks().length) * 100)
  );

  constructor() {
    this.loadGoal();
  }

  /** Check if a specific task type is done today */
  isTaskDone(taskId: string): boolean {
    const s = this.daily.dailyState();
    const today = new Date().toISOString().split('T')[0];
    if (s.date !== today) return false;

    switch (taskId) {
      case 'challenge': return s.challengeDoneToday;
      case 'tutorial':  return s.topicsCompletedToday >= 1;
      case 'interview': return s.qotdAnsweredToday;   // proxy: any Q answered
      default:          return false;
    }
  }

  private async loadGoal(): Promise<void> {
    // 1. Try Firestore (user profile)
    const user = this.authService.user();
    if (user) {
      try {
        const snap = await getDoc(doc(this.firestore, `users/${user.uid}`));
        if (snap.exists()) {
          const raw = snap.data()['goal'] as string | undefined;
          if (raw) {
            this.goal.set(this.normalizeGoal(raw));
            localStorage.setItem(this.LS_GOAL_KEY, this.goal());
            this.goalLoaded.set(true);
            return;
          }
        }
      } catch { /* offline — fall through */ }
    }

    // 2. Local cache
    const cached = localStorage.getItem(this.LS_GOAL_KEY);
    if (cached) this.goal.set(this.normalizeGoal(cached));
    this.goalLoaded.set(true);
  }

  private normalizeGoal(raw: string): StudyGoal {
    const map: Record<string, StudyGoal> = {
      'Crack FAANG': 'faang',
      'faang':       'faang',
      'Switch Job':  'switch',
      'switch':      'switch',
      'First Job':   'first',
      'first':       'first',
      'Upskill':     'upskill',
      'upskill':     'upskill'
    };
    return map[raw] ?? 'upskill';
  }
}
