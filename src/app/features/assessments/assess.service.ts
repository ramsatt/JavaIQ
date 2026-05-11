import { Injectable, signal } from '@angular/core';
import { QuizQuestion } from './assess-data';

export interface QuizResult {
  quizId: string;
  title: string;
  category: string;    // e.g. 'Core Java', 'Spring Boot'
  score: number;       // 0–100
  correct: number;
  total: number;
  timeTaken: number;   // seconds
  answers: number[];   // user's chosen option index (-1 = skipped)
  questions: QuizQuestion[];
}

export interface PersistedQuizRecord {
  bestScore: number;
  lastScore: number;
  attempts: number;
  lastAttemptAt: number; // ms timestamp
}

@Injectable({ providedIn: 'root' })
export class AssessService {
  private readonly HISTORY_KEY = 'assess_history';

  private _answers = signal<number[]>([]);
  private _result  = signal<QuizResult | null>(null);

  readonly answers = this._answers.asReadonly();
  readonly result  = this._result.asReadonly();

  startQuiz(questionCount: number): void {
    this._answers.set(new Array(questionCount).fill(-1));
  }

  setAnswer(qIndex: number, optIndex: number): void {
    this._answers.update(arr => {
      const copy = [...arr];
      copy[qIndex] = optIndex;
      return copy;
    });
  }

  submitQuiz(quizId: string, title: string, category: string, questions: QuizQuestion[], timeTaken: number): void {
    const answers = this._answers();
    const correct = questions.reduce(
      (sum, q, i) => sum + (answers[i] === q.ans ? 1 : 0), 0
    );
    const score = Math.round((correct / questions.length) * 100);
    this._result.set({ quizId, title, category, score, correct, total: questions.length, timeTaken, answers: [...answers], questions });
    this.persistResult(quizId, score);
  }

  /** Returns the full history map keyed by quizId. */
  getHistory(): Record<string, PersistedQuizRecord> {
    return this.loadHistory();
  }

  clearResult(): void {
    this._result.set(null);
    this._answers.set([]);
  }

  private persistResult(quizId: string, score: number): void {
    try {
      const history = this.loadHistory();
      const existing = history[quizId];
      history[quizId] = {
        bestScore: existing ? Math.max(existing.bestScore, score) : score,
        lastScore: score,
        attempts: existing ? existing.attempts + 1 : 1,
        lastAttemptAt: Date.now(),
      };
      localStorage.setItem(this.HISTORY_KEY, JSON.stringify(history));
    } catch { /* ignore storage errors */ }
  }

  private loadHistory(): Record<string, PersistedQuizRecord> {
    try {
      const raw = localStorage.getItem(this.HISTORY_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  }
}
