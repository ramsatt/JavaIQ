import {
  Analytics,
  logEvent
} from "./chunk-BJOCJFQ2.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-L6VISU4K.js";

// src/app/analytics.service.ts
var AnalyticsService = class _AnalyticsService {
  analytics = inject(Analytics, { optional: true });
  track(eventName, params) {
    if (!this.analytics)
      return;
    try {
      logEvent(this.analytics, eventName, params);
    } catch {
    }
  }
  // ── Typed event helpers ──────────────────────────────────────────────────
  onboardingStarted() {
    this.track("onboarding_started");
  }
  onboardingCompleted() {
    this.track("onboarding_completed");
  }
  onboardingSkipped(slide) {
    this.track("onboarding_skipped", { slide });
  }
  searchPerformed(query, resultCount) {
    this.track("search_performed", { query, result_count: resultCount });
  }
  questionBookmarked(id, type) {
    this.track("question_bookmarked", { item_id: id, item_type: type });
  }
  challengeStarted(category) {
    this.track("challenge_started", { category });
  }
  challengeCompleted(category, score) {
    this.track("challenge_completed", { category, score });
  }
  dailyChallengeCompleted() {
    this.track("daily_challenge_completed");
  }
  certificateGenerated(course) {
    this.track("certificate_generated", { course });
  }
  questionViewed(id, category) {
    this.track("question_viewed", { question_id: id, category });
  }
  screenView(screenName) {
    this.track("screen_view", { screen_name: screenName });
  }
  static \u0275fac = function AnalyticsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnalyticsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AnalyticsService, factory: _AnalyticsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnalyticsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  AnalyticsService
};
//# sourceMappingURL=chunk-EPXUGUMG.js.map
