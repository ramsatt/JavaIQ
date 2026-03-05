import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';

// Lazy native import — keeps specifier hidden from Vite static analysis
const dynamicImport = new Function('specifier', 'return import(specifier)');

/**
 * RatingService
 *
 * Triggers the native in-app review dialog (Google Play / App Store)
 * at meaningful milestones — only once, guarded by localStorage.
 *
 * Milestone triggers (call the corresponding check method):
 *  - checkAfterLevel(level)       → fires at level 5
 *  - checkAfterDailyChallenge(n)  → fires after 5th daily challenge
 *
 * On web it is a silent no-op.
 */
@Injectable({ providedIn: 'root' })
export class RatingService {
  private readonly LS_KEY     = 'rating_prompted';
  private readonly LEVEL_GATE = 5;
  private readonly DC_GATE    = 5;

  private get alreadyPrompted(): boolean {
    return localStorage.getItem(this.LS_KEY) === '1';
  }

  /** Call after the user levels up. */
  checkAfterLevel(level: number): void {
    if (level >= this.LEVEL_GATE) this.tryPrompt();
  }

  /** Call after completing a daily challenge.
   *  @param totalCompleted  Cumulative daily challenges done. */
  checkAfterDailyChallenge(totalCompleted: number): void {
    if (totalCompleted >= this.DC_GATE) this.tryPrompt();
  }

  private async tryPrompt(): Promise<void> {
    if (this.alreadyPrompted) return;
    if (!Capacitor.isNativePlatform()) return;

    try {
      const { RateApp } = await dynamicImport('@capacitor-community/rate-app');
      await RateApp.requestReview();
      localStorage.setItem(this.LS_KEY, '1');
    } catch {
      // Plugin not installed or review dialog unavailable — silent fail
    }
  }
}
