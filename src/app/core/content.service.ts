import { Injectable, inject } from '@angular/core';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';
import { DataService } from '../data.service';
import { Question } from '../data/question.model';

/**
 * ContentService — thin wrapper over DataService.
 *
 * Phase 1: `getQuestion(id)` checks Firestore `content_overrides/{id}` first.
 * If a document exists it overrides the local copy, enabling hot-patch of
 * question corrections without a Play Store release. All other methods
 * delegate to DataService unchanged.
 *
 * Phase 2 (future): `getQuestions()` will switch to Firestore primary +
 * TS-array fallback once the `questions` collection is seeded.
 */
@Injectable({ providedIn: 'root' })
export class ContentService {
  private firestore   = inject(Firestore);
  private dataService = inject(DataService);

  /** Resolve a single question by numeric ID, with Firestore override support. */
  async getQuestion(id: number): Promise<Question | null> {
    // 1. Try Firestore override
    try {
      const overrideRef = doc(this.firestore, `content_overrides/${id}`);
      const snap = await getDoc(overrideRef);
      if (snap.exists()) {
        return snap.data() as Question;
      }
    } catch {
      // Network unavailable or permission denied — fall through to local copy
    }

    // 2. Fall back to local TS array
    return this.dataService.getAllQuestionsStable().find(q => q.id === id) ?? null;
  }

  /** Delegates to DataService — maintained for drop-in migration later. */
  getQuestions(category: string = 'All'): Question[] {
    return this.dataService.getQuestions(category);
  }

  getAllQuestionsStable(): Question[] {
    return this.dataService.getAllQuestionsStable();
  }
}
