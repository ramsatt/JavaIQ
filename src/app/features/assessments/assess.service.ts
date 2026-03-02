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

@Injectable({ providedIn: 'root' })
export class AssessService {
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
  }

  clearResult(): void {
    this._result.set(null);
    this._answers.set([]);
  }
}
