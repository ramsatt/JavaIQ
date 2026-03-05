import {
  AdMobService,
  AlertService
} from "./chunk-LTABZLCA.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-VBTVL2BZ.js";

// src/app/ad-gate.service.ts
var AdGateService = class _AdGateService {
  admob = inject(AdMobService);
  alertService = inject(AlertService);
  // ── Constants ──────────────────────────────────────────────────────────
  /** Minimum gap (ms) between interstitial ads */
  INTERSTITIAL_COOLDOWN_MS = 5 * 60 * 1e3;
  // 5 minutes
  // ── Storage keys ────────────────────────────────────────────────────────
  STORAGE_KEY_UNLOCKED = "adgate_unlocked_items";
  STORAGE_KEY_INTERSTITIAL = "adgate_interstitial_time";
  // ── State ────────────────────────────────────────────────────────────────
  /**
   * Set of permanently unlocked item IDs.
   * Format: "category::itemId"
   * Signal so Angular templates can react to unlock events.
   */
  unlockedItems = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "unlockedItems" }] : []);
  lastInterstitialTime = 0;
  constructor() {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY_UNLOCKED);
      if (raw) {
        const arr = JSON.parse(raw);
        this.unlockedItems.set(new Set(arr));
      }
    } catch {
    }
    const storedInter = localStorage.getItem(this.STORAGE_KEY_INTERSTITIAL);
    if (storedInter)
      this.lastInterstitialTime = parseInt(storedInter, 10);
  }
  // ── Per-Item Unlock ─────────────────────────────────────────────────────
  /**
   * Check if an item is unlocked.
   * @param itemId  Unique ID for the item (e.g. "core-java::arrays", "iq::123")
   */
  isItemUnlocked(itemId) {
    return this.unlockedItems().has(itemId);
  }
  /**
   * Attempt to unlock an item by watching a reward ad.
   * On web the ad is simulated with a confirmation dialog.
   *
   * @returns Promise<boolean>  true → item was unlocked; false → user cancelled
   */
  async unlockItemWithAd(itemId, itemTitle = "this content") {
    if (this.isItemUnlocked(itemId))
      return true;
    const earned = await this.admob.showRewardAd();
    if (earned) {
      this.persistUnlock(itemId);
      return true;
    }
    await this.alertService.showAlert({
      title: "\u{1F512} Watch Ad to Unlock",
      message: `Watch the short video ad to permanently unlock "${itemTitle}". This helps keep JavaIQ free!`,
      confirmText: "OK",
      showCancel: false,
      type: "warning"
    });
    return false;
  }
  /** Persist the unlock of an item to localStorage */
  persistUnlock(itemId) {
    const current = new Set(this.unlockedItems());
    current.add(itemId);
    this.unlockedItems.set(current);
    try {
      localStorage.setItem(this.STORAGE_KEY_UNLOCKED, JSON.stringify([...current]));
    } catch {
    }
  }
  // ── Interstitial on Complete ─────────────────────────────────────────────
  /**
   * Call when the user finishes content (marks topic done, completes quiz).
   * Shows an interstitial if the cooldown has passed.
   */
  async onContentCompleted() {
    const now = Date.now();
    const msSinceLast = now - this.lastInterstitialTime;
    if (msSinceLast < this.INTERSTITIAL_COOLDOWN_MS) {
      const remaining = Math.round((this.INTERSTITIAL_COOLDOWN_MS - msSinceLast) / 1e3);
      console.log(`[AdGate] Interstitial skipped \u2014 cooldown ${remaining}s remaining`);
      return;
    }
    this.lastInterstitialTime = now;
    localStorage.setItem(this.STORAGE_KEY_INTERSTITIAL, now.toString());
    await this.admob.showInterstitial();
  }
  // ── Dev Utilities ────────────────────────────────────────────────────────
  /** Reset everything — useful for testing */
  resetAll() {
    this.unlockedItems.set(/* @__PURE__ */ new Set());
    this.lastInterstitialTime = 0;
    localStorage.removeItem(this.STORAGE_KEY_UNLOCKED);
    localStorage.removeItem(this.STORAGE_KEY_INTERSTITIAL);
  }
  static \u0275fac = function AdGateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdGateService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdGateService, factory: _AdGateService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdGateService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

export {
  AdGateService
};
//# sourceMappingURL=chunk-5ZV5RXHW.js.map
