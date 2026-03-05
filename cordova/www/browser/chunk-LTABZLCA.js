import {
  Capacitor,
  registerPlugin
} from "./chunk-QYTOD3XC.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-VBTVL2BZ.js";

// src/app/alert.service.ts
var AlertService = class _AlertService {
  alertState = signal(null, ...ngDevMode ? [{ debugName: "alertState" }] : []);
  resolveCallback;
  get alert() {
    return this.alertState();
  }
  showAlert(options) {
    this.alertState.set(options);
    return new Promise((resolve) => {
      this.resolveCallback = resolve;
    });
  }
  confirm(message, title = "Confirm") {
    return this.showAlert({
      title,
      message,
      showCancel: true,
      confirmText: "Yes",
      cancelText: "No",
      type: "info"
    });
  }
  alertInfo(message, title = "Information") {
    return this.showAlert({
      title,
      message,
      showCancel: false,
      confirmText: "OK",
      type: "info"
    });
  }
  onConfirm() {
    this.alertState.set(null);
    if (this.resolveCallback)
      this.resolveCallback(true);
  }
  onCancel() {
    this.alertState.set(null);
    if (this.resolveCallback)
      this.resolveCallback(false);
  }
  static \u0275fac = function AlertService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AlertService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AlertService, factory: _AlertService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlertService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/@capacitor-community/admob/dist/esm/definitions.js
var MaxAdContentRating;
(function(MaxAdContentRating2) {
  MaxAdContentRating2["General"] = "General";
  MaxAdContentRating2["ParentalGuidance"] = "ParentalGuidance";
  MaxAdContentRating2["Teen"] = "Teen";
  MaxAdContentRating2["MatureAudience"] = "MatureAudience";
})(MaxAdContentRating || (MaxAdContentRating = {}));

// node_modules/@capacitor-community/admob/dist/esm/banner/banner-ad-plugin-events.enum.js
var BannerAdPluginEvents;
(function(BannerAdPluginEvents2) {
  BannerAdPluginEvents2["SizeChanged"] = "bannerAdSizeChanged";
  BannerAdPluginEvents2["Loaded"] = "bannerAdLoaded";
  BannerAdPluginEvents2["FailedToLoad"] = "bannerAdFailedToLoad";
  BannerAdPluginEvents2["Opened"] = "bannerAdOpened";
  BannerAdPluginEvents2["Closed"] = "bannerAdClosed";
  BannerAdPluginEvents2["AdImpression"] = "bannerAdImpression";
})(BannerAdPluginEvents || (BannerAdPluginEvents = {}));

// node_modules/@capacitor-community/admob/dist/esm/banner/banner-ad-position.enum.js
var BannerAdPosition;
(function(BannerAdPosition2) {
  BannerAdPosition2["TOP_CENTER"] = "TOP_CENTER";
  BannerAdPosition2["CENTER"] = "CENTER";
  BannerAdPosition2["BOTTOM_CENTER"] = "BOTTOM_CENTER";
})(BannerAdPosition || (BannerAdPosition = {}));

// node_modules/@capacitor-community/admob/dist/esm/banner/banner-ad-size.enum.js
var BannerAdSize;
(function(BannerAdSize2) {
  BannerAdSize2["BANNER"] = "BANNER";
  BannerAdSize2["FULL_BANNER"] = "FULL_BANNER";
  BannerAdSize2["LARGE_BANNER"] = "LARGE_BANNER";
  BannerAdSize2["MEDIUM_RECTANGLE"] = "MEDIUM_RECTANGLE";
  BannerAdSize2["LEADERBOARD"] = "LEADERBOARD";
  BannerAdSize2["ADAPTIVE_BANNER"] = "ADAPTIVE_BANNER";
  BannerAdSize2["SMART_BANNER"] = "SMART_BANNER";
})(BannerAdSize || (BannerAdSize = {}));

// node_modules/@capacitor-community/admob/dist/esm/interstitial/interstitial-ad-plugin-events.enum.js
var InterstitialAdPluginEvents;
(function(InterstitialAdPluginEvents2) {
  InterstitialAdPluginEvents2["Loaded"] = "interstitialAdLoaded";
  InterstitialAdPluginEvents2["FailedToLoad"] = "interstitialAdFailedToLoad";
  InterstitialAdPluginEvents2["Showed"] = "interstitialAdShowed";
  InterstitialAdPluginEvents2["FailedToShow"] = "interstitialAdFailedToShow";
  InterstitialAdPluginEvents2["Dismissed"] = "interstitialAdDismissed";
})(InterstitialAdPluginEvents || (InterstitialAdPluginEvents = {}));

// node_modules/@capacitor-community/admob/dist/esm/reward-interstitial/reward-interstitial-ad-plugin-events.enum.js
var RewardInterstitialAdPluginEvents;
(function(RewardInterstitialAdPluginEvents2) {
  RewardInterstitialAdPluginEvents2["Loaded"] = "onRewardedInterstitialAdLoaded";
  RewardInterstitialAdPluginEvents2["FailedToLoad"] = "onRewardedInterstitialAdFailedToLoad";
  RewardInterstitialAdPluginEvents2["Showed"] = "onRewardedInterstitialAdShowed";
  RewardInterstitialAdPluginEvents2["FailedToShow"] = "onRewardedInterstitialAdFailedToShow";
  RewardInterstitialAdPluginEvents2["Dismissed"] = "onRewardedInterstitialAdDismissed";
  RewardInterstitialAdPluginEvents2["Rewarded"] = "onRewardedInterstitialAdReward";
})(RewardInterstitialAdPluginEvents || (RewardInterstitialAdPluginEvents = {}));

// node_modules/@capacitor-community/admob/dist/esm/reward/reward-ad-plugin-events.enum.js
var RewardAdPluginEvents;
(function(RewardAdPluginEvents2) {
  RewardAdPluginEvents2["Loaded"] = "onRewardedVideoAdLoaded";
  RewardAdPluginEvents2["FailedToLoad"] = "onRewardedVideoAdFailedToLoad";
  RewardAdPluginEvents2["Showed"] = "onRewardedVideoAdShowed";
  RewardAdPluginEvents2["FailedToShow"] = "onRewardedVideoAdFailedToShow";
  RewardAdPluginEvents2["Dismissed"] = "onRewardedVideoAdDismissed";
  RewardAdPluginEvents2["Rewarded"] = "onRewardedVideoAdReward";
})(RewardAdPluginEvents || (RewardAdPluginEvents = {}));

// node_modules/@capacitor-community/admob/dist/esm/consent/consent-debug-geography.enum.js
var AdmobConsentDebugGeography;
(function(AdmobConsentDebugGeography2) {
  AdmobConsentDebugGeography2[AdmobConsentDebugGeography2["DISABLED"] = 0] = "DISABLED";
  AdmobConsentDebugGeography2[AdmobConsentDebugGeography2["EEA"] = 1] = "EEA";
  AdmobConsentDebugGeography2[AdmobConsentDebugGeography2["NOT_EEA"] = 2] = "NOT_EEA";
  AdmobConsentDebugGeography2[AdmobConsentDebugGeography2["US"] = 3] = "US";
  AdmobConsentDebugGeography2[AdmobConsentDebugGeography2["OTHER"] = 4] = "OTHER";
})(AdmobConsentDebugGeography || (AdmobConsentDebugGeography = {}));

// node_modules/@capacitor-community/admob/dist/esm/index.js
var AdMob = registerPlugin("AdMob", {
  web: () => import("./chunk-YAYFLVSN.js").then((m) => new m.AdMobWeb())
});

// src/app/admob.service.ts
var AD_IDS = {
  banner: "ca-app-pub-8970665297590705/6472553354",
  interstitial: "ca-app-pub-8970665297590705/1779267104",
  reward: "ca-app-pub-8970665297590705/8219096903"
};
var AdMobService = class _AdMobService {
  alertService = inject(AlertService);
  /** Signal tracking if a reward ad was successfully earned this session */
  rewardEarned = signal(false, ...ngDevMode ? [{ debugName: "rewardEarned" }] : []);
  /** Whether an ad is currently visible (blocks double-shows) */
  adShowing = signal(false, ...ngDevMode ? [{ debugName: "adShowing" }] : []);
  isNative = Capacitor.getPlatform() !== "web";
  // Interstitial preload state
  interstitialReady = false;
  interstitialLoading = false;
  // Reward ad preload state
  rewardReady = false;
  rewardLoading = false;
  constructor() {
    if (this.isNative) {
      this.initialize();
    }
  }
  // ── Initialization ──────────────────────────────────────────────────────
  async initialize() {
    try {
      await AdMob.initialize({
        testingDevices: ["2077ef9a63d2b398840261c8221a0c9b"],
        initializeForTesting: false
      });
      console.log("[AdMob] Initialized");
      this.preloadInterstitial();
      this.preloadRewardAd();
    } catch (e) {
      console.error("[AdMob] init failed", e);
    }
  }
  // ── Preloading ──────────────────────────────────────────────────────────
  async preloadInterstitial() {
    if (this.interstitialLoading || this.interstitialReady || !this.isNative)
      return;
    this.interstitialLoading = true;
    try {
      await AdMob.prepareInterstitial({
        adId: AD_IDS.interstitial,
        isTesting: false
      });
      this.interstitialReady = true;
      console.log("[AdMob] Interstitial preloaded");
    } catch (e) {
      console.error("[AdMob] Interstitial preload failed", e);
    } finally {
      this.interstitialLoading = false;
    }
  }
  async preloadRewardAd() {
    if (this.rewardLoading || this.rewardReady || !this.isNative)
      return;
    this.rewardLoading = true;
    try {
      await AdMob.prepareRewardVideoAd({
        adId: AD_IDS.reward,
        isTesting: false
      });
      this.rewardReady = true;
      console.log("[AdMob] Reward ad preloaded");
    } catch (e) {
      console.error("[AdMob] Reward ad preload failed", e);
    } finally {
      this.rewardLoading = false;
    }
  }
  // ── Banner ────────────────────────────────────────────────────────────
  async showBanner() {
    if (!this.isNative)
      return;
    try {
      await AdMob.addListener(BannerAdPluginEvents.SizeChanged, (info) => {
        const h = info.height ?? 60;
        document.documentElement.style.setProperty("--admob-banner-height", `${h}px`);
        console.log(`[AdMob] Banner height set: ${h}px`);
      });
      await AdMob.showBanner({
        adId: AD_IDS.banner,
        adSize: BannerAdSize.ADAPTIVE_BANNER,
        position: BannerAdPosition.BOTTOM_CENTER,
        margin: 0,
        isTesting: false
      });
    } catch (e) {
      console.error("[AdMob] Banner failed", e);
    }
  }
  async hideBanner() {
    if (!this.isNative)
      return;
    try {
      await AdMob.hideBanner();
      document.documentElement.style.setProperty("--admob-banner-height", "0px");
    } catch {
    }
  }
  // ── Reward Ad ────────────────────────────────────────────────────────
  /**
   * Show a reward ad. On web, shows a confirmation dialog as a stand-in.
   * @returns Promise<boolean> true if user earned the reward, false if dismissed/failed
   */
  async showRewardAd() {
    if (this.adShowing())
      return false;
    if (!this.isNative) {
      const agreed = await this.alertService.showAlert({
        title: "\u{1F3AC} Watch a Short Ad",
        message: "Watch a short video ad to unlock this content for free!",
        confirmText: "Watch Ad \u2713",
        cancelText: "Cancel",
        showCancel: true,
        type: "info"
      });
      if (agreed)
        this.rewardEarned.set(true);
      return agreed;
    }
    return new Promise(async (resolve) => {
      this.adShowing.set(true);
      let rewarded = false;
      try {
        const rewardListener = await AdMob.addListener(RewardAdPluginEvents.Rewarded, (_item) => {
          rewarded = true;
          this.rewardEarned.set(true);
        });
        const dismissListener = await AdMob.addListener(RewardAdPluginEvents.Dismissed, () => {
          rewardListener.remove();
          dismissListener.remove();
          this.adShowing.set(false);
          this.rewardReady = false;
          this.preloadRewardAd();
          resolve(rewarded);
        });
        const failListener = await AdMob.addListener(RewardAdPluginEvents.FailedToLoad, (error) => {
          console.error("[AdMob] Reward failed", error);
          rewardListener.remove();
          dismissListener.remove();
          failListener.remove();
          this.adShowing.set(false);
          this.rewardReady = false;
          resolve(false);
        });
        if (!this.rewardReady) {
          await AdMob.prepareRewardVideoAd({
            adId: AD_IDS.reward,
            isTesting: false
          });
        }
        await AdMob.showRewardVideoAd();
      } catch (e) {
        console.error("[AdMob] showRewardAd error", e);
        this.adShowing.set(false);
        resolve(false);
      }
    });
  }
  // ── Interstitial ─────────────────────────────────────────────────────
  /**
   * Show an interstitial ad.
   * On web, silently skips (no blocking dialog after content).
   */
  async showInterstitial() {
    if (this.adShowing() || !this.isNative)
      return;
    return new Promise(async (resolve) => {
      this.adShowing.set(true);
      try {
        const dismissListener = await AdMob.addListener(InterstitialAdPluginEvents.Dismissed, () => {
          dismissListener.remove();
          this.adShowing.set(false);
          this.interstitialReady = false;
          this.preloadInterstitial();
          resolve();
        });
        const failListener = await AdMob.addListener(InterstitialAdPluginEvents.FailedToLoad, (err) => {
          console.error("[AdMob] Interstitial failed", err);
          failListener.remove();
          this.adShowing.set(false);
          this.interstitialReady = false;
          resolve();
        });
        if (!this.interstitialReady) {
          await AdMob.prepareInterstitial({
            adId: AD_IDS.interstitial,
            isTesting: false
          });
        }
        await AdMob.showInterstitial();
      } catch (e) {
        console.error("[AdMob] showInterstitial error", e);
        this.adShowing.set(false);
        resolve();
      }
    });
  }
  static \u0275fac = function AdMobService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdMobService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdMobService, factory: _AdMobService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdMobService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

export {
  AlertService,
  AdMobService
};
//# sourceMappingURL=chunk-LTABZLCA.js.map
