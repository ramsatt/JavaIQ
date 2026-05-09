import { Injectable, inject, signal } from '@angular/core';
import { Functions, httpsCallable } from '@angular/fire/functions';
import { PurchaseService } from '../services/purchase.service';

interface ExplanationRequest {
  questionId: number;
  question:   string;
  answer:     string;
}

interface ExplanationResponse {
  explanation: string;
  cached:      boolean;
}

/** Cache layer on the client — avoids re-calling the function within a session. */
const sessionCache = new Map<number, string>();

@Injectable({ providedIn: 'root' })
export class AiExplanationService {
  private functions    = inject(Functions);
  private purchaseSvc  = inject(PurchaseService);

  /** Loading state per question id. */
  loading  = signal<number | null>(null);
  /** Last error message (cleared on next successful call). */
  lastError = signal<string | null>(null);

  /**
   * Fetch an AI-generated explanation for a review card.
   *
   * Returns null and sets `lastError` if the user is not Pro/trial
   * or if the Cloud Function fails.
   */
  async getExplanation(
    questionId: number,
    question:   string,
    answer:     string
  ): Promise<string | null> {
    // Gate: Pro / trial only
    if (!this.purchaseSvc.isProOrTrial()) {
      this.lastError.set('pro_required');
      return null;
    }

    // Session-level cache hit
    if (sessionCache.has(questionId)) {
      return sessionCache.get(questionId)!;
    }

    this.loading.set(questionId);
    this.lastError.set(null);

    try {
      const fn = httpsCallable<ExplanationRequest, ExplanationResponse>(
        this.functions,
        'getExplanation'
      );
      const result = await fn({ questionId, question, answer });
      const text = result.data.explanation;
      sessionCache.set(questionId, text);
      return text;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Failed to get explanation.';
      this.lastError.set(msg);
      return null;
    } finally {
      this.loading.set(null);
    }
  }
}
