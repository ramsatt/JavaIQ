import { Injectable, inject } from '@angular/core';
import { Analytics, logEvent } from '@angular/fire/analytics';

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  private analytics = inject(Analytics, { optional: true });

  track(eventName: string, params?: Record<string, unknown>) {
    if (!this.analytics) return;
    try {
      logEvent(this.analytics, eventName, params);
    } catch {
      // Silent fail — analytics should never break the app
    }
  }

  // ── Typed event helpers ──────────────────────────────────────────────────

  onboardingStarted() { this.track('onboarding_started'); }
  onboardingCompleted() { this.track('onboarding_completed'); }
  onboardingSkipped(slide: number) { this.track('onboarding_skipped', { slide }); }

  searchPerformed(query: string, resultCount: number) {
    this.track('search_performed', { query, result_count: resultCount });
  }

  questionBookmarked(id: string, type: string) {
    this.track('question_bookmarked', { item_id: id, item_type: type });
  }

  challengeStarted(category: string) { this.track('challenge_started', { category }); }
  challengeCompleted(category: string, score: number) {
    this.track('challenge_completed', { category, score });
  }

  dailyChallengeCompleted() { this.track('daily_challenge_completed'); }
  certificateGenerated(course: string) { this.track('certificate_generated', { course }); }

  questionViewed(id: number, category: string) {
    this.track('question_viewed', { question_id: id, category });
  }

  screenView(screenName: string) {
    this.track('screen_view', { screen_name: screenName });
  }
}
