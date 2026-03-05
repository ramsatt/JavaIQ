import {
  AlertService
} from "./chunk-ZI6SYS5B.js";
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
} from "./chunk-L6VISU4K.js";

// src/environments/environment.ts
var environment = {
  production: true,
  adMobTesting: false,
  firebaseConfig: {
    apiKey: "AIzaSyAhhnYTEfU724e-FgAr9pVwpPQ259AzhZQ",
    authDomain: "javaiq.firebaseapp.com",
    databaseURL: "https://javaiq-default-rtdb.firebaseio.com",
    projectId: "javaiq",
    storageBucket: "javaiq.firebasestorage.app",
    messagingSenderId: "1014219218540",
    appId: "1:1014219218540:web:5eef46263d6f2f120e0249",
    measurementId: "G-M2S2VRZ6F4"
  }
};

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
var INTERSTITIAL_COOLDOWN_MS = 5 * 60 * 1e3;
var INTERSTITIAL_MIN_NAVIGATIONS = 2;
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
  // ─── Frequency cap state ─────────────────────────────────────────────────
  lastInterstitialTime = 0;
  navigationCount = 0;
  constructor() {
    if (this.isNative) {
      this.initialize();
    }
  }
  // ── Frequency cap guard ─────────────────────────────────────────────────
  canShowInterstitial() {
    this.navigationCount++;
    if (this.navigationCount <= INTERSTITIAL_MIN_NAVIGATIONS)
      return false;
    const now = Date.now();
    if (now - this.lastInterstitialTime < INTERSTITIAL_COOLDOWN_MS)
      return false;
    return true;
  }
  // ── Initialization ──────────────────────────────────────────────────────
  async initialize() {
    try {
      await AdMob.initialize({
        testingDevices: ["2077ef9a63d2b398840261c8221a0c9b"],
        initializeForTesting: environment.adMobTesting
      });
      this.preloadInterstitial();
      this.preloadRewardAd();
    } catch (e) {
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
        isTesting: environment.adMobTesting
      });
      this.interstitialReady = true;
    } catch (e) {
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
        isTesting: environment.adMobTesting
      });
      this.rewardReady = true;
    } catch (e) {
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
      });
      await AdMob.showBanner({
        adId: AD_IDS.banner,
        adSize: BannerAdSize.ADAPTIVE_BANNER,
        position: BannerAdPosition.BOTTOM_CENTER,
        margin: 0,
        isTesting: environment.adMobTesting
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
        const failListener = await AdMob.addListener(RewardAdPluginEvents.FailedToLoad, () => {
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
            isTesting: environment.adMobTesting
          });
        }
        await AdMob.showRewardVideoAd();
      } catch (e) {
        this.adShowing.set(false);
        resolve(false);
      }
    });
  }
  // ── Interstitial ─────────────────────────────────────────────────────
  /**
   * Show an interstitial ad.
   * On web, silently skips. Respects 5-minute cooldown and 2-navigation minimum.
   */
  async showInterstitial() {
    if (this.adShowing() || !this.isNative)
      return;
    if (!this.canShowInterstitial())
      return;
    return new Promise(async (resolve) => {
      this.adShowing.set(true);
      try {
        const dismissListener = await AdMob.addListener(InterstitialAdPluginEvents.Dismissed, () => {
          dismissListener.remove();
          this.adShowing.set(false);
          this.interstitialReady = false;
          this.lastInterstitialTime = Date.now();
          this.preloadInterstitial();
          resolve();
        });
        const failListener = await AdMob.addListener(InterstitialAdPluginEvents.FailedToLoad, () => {
          failListener.remove();
          this.adShowing.set(false);
          this.interstitialReady = false;
          resolve();
        });
        if (!this.interstitialReady) {
          await AdMob.prepareInterstitial({
            adId: AD_IDS.interstitial,
            isTesting: environment.adMobTesting
          });
        }
        await AdMob.showInterstitial();
      } catch (e) {
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
  environment,
  AdMobService
};
//# sourceMappingURL=chunk-4DYJ5SOT.js.map
