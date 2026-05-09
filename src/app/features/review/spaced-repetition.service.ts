import { Injectable } from '@angular/core';

/**
 * SM-2 Spaced Repetition Algorithm
 *
 * Quality grades (passed from ReviewComponent):
 *   0 — "Still Learning"  complete blackout, reset
 *   2 — "Hard"            incorrect but remembered with serious difficulty
 *   5 — "Got It!"         perfect response
 *
 * Produces a next review date and updated interval/easeFactor.
 */
export interface SRCard {
  nextReviewDate: string;   // ISO date string (YYYY-MM-DD), default: today
  interval:       number;   // days until next review (default: 1)
  easeFactor:     number;   // SM-2 EF — starts at 2.5, min 1.3
  repetitions:    number;   // consecutive successful reviews
}

export interface SRResult {
  nextReviewDate: string;
  interval:       number;
  easeFactor:     number;
  repetitions:    number;
}

/** Returns today as YYYY-MM-DD in local time. */
export function today(): string {
  return new Date().toISOString().split('T')[0];
}

/** Returns the ISO date N days from today. */
function daysFromNow(n: number): string {
  const d = new Date();
  d.setDate(d.getDate() + Math.round(n));
  return d.toISOString().split('T')[0];
}

@Injectable({ providedIn: 'root' })
export class SpacedRepetitionService {

  /** Default SR fields for entries that predate spaced repetition (migration). */
  static defaults(): SRCard {
    return {
      nextReviewDate: today(),
      interval:       1,
      easeFactor:     2.5,
      repetitions:    0,
    };
  }

  /**
   * Apply one SM-2 review step.
   *
   * @param card   Current SR state for the card.
   * @param quality  0 (Still Learning), 2 (Hard), or 5 (Got It!)
   * @returns Updated SR state to persist.
   */
  review(card: SRCard, quality: 0 | 2 | 5): SRResult {
    let { interval, easeFactor, repetitions } = card;

    if (quality < 3) {
      // Failed — reset to start of interval sequence but keep EF
      repetitions = 0;
      interval    = 1;
    } else {
      // Successful recall
      if (repetitions === 0) {
        interval = 1;
      } else if (repetitions === 1) {
        interval = 6;
      } else {
        interval = Math.round(interval * easeFactor);
      }
      repetitions += 1;
    }

    // Update ease factor (SM-2 formula)
    easeFactor = easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
    easeFactor = Math.max(1.3, easeFactor);

    return {
      nextReviewDate: daysFromNow(interval),
      interval,
      easeFactor,
      repetitions,
    };
  }

  /** Returns true if a card is due for review today or overdue. */
  isDue(card: SRCard): boolean {
    return card.nextReviewDate <= today();
  }
}
