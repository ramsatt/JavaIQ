import { Injectable, inject, signal } from '@angular/core';
import {
  AdMob, BannerAdSize, BannerAdPosition, RewardAdOptions,
  BannerAdOptions, RewardAdPluginEvents, AdOptions,
  AdMobRewardItem, InterstitialAdPluginEvents, BannerAdPluginEvents,
  RewardInterstitialAdPluginEvents, RewardInterstitialAdOptions,
} from '@capacitor-community/admob';
import { Capacitor } from '@capacitor/core';
import { AlertService } from './alert.service';
import { environment } from '../environments/environment';
import { PurchaseService } from './services/purchase.service';
import { NativeAdPlugin } from './plugins/native-ad.plugin';

const PROD_IDS = {
  banner:             'ca-app-pub-8970665297590705/6472553354',
  interstitial:       'ca-app-pub-8970665297590705/3343517666',
  reward:             'ca-app-pub-8970665297590705/8219096903',
  rewardInterstitial: 'ca-app-pub-8970665297590705/7665906054',
  appOpen:            'ca-app-pub-8970665297590705/7691168238',
};

const TEST_IDS = {
  banner:             'ca-app-pub-3940256099942544/6300978111',
  interstitial:       'ca-app-pub-3940256099942544/1033173712',
  reward:             'ca-app-pub-3940256099942544/5224354917',
  rewardInterstitial: 'ca-app-pub-3940256099942544/6978759866',
  appOpen:            'ca-app-pub-3940256099942544/9257395921',
};

const AD_IDS = environment.adMobTesting ? TEST_IDS : PROD_IDS;

const INTERSTITIAL_COOLDOWN_MS = 3 * 60 * 1000; // 3 minutes
const SESSION_START_COOLDOWN_MS = 60 * 1000; // 60 seconds
const MAX_INTERSTITIALS_PER_SESSION = 4;
const INTERSTITIAL_MIN_NAVIGATIONS = 2;
const APP_OPEN_COOLDOWN_MS = 4 * 60 * 60 * 1000; // 4 hours

@Injectable({ providedIn: 'root' })
export class AdMobService {
  private alertService = inject(AlertService);
  private purchaseService = inject(PurchaseService);

  rewardEarned = signal(false);

  private adShowing = signal(false);
  private readonly isNative = Capacitor.getPlatform() !== 'web';

  // Preload state
  private interstitialReady = false;
  private interstitialLoading = false;
  private rewardReady = false;
  private rewardLoading = false;
  private rewardInterstitialReady = false;
  private rewardInterstitialLoading = false;
  private bannerVisible = false;

  private initPromise: Promise<void> = Promise.resolve();

  // Frequency cap state
  private lastInterstitialTime = 0;
  private lastAppOpenTime = 0;
  private navigationCount = 0;
  private sessionStartTime = Date.now();
  private interstitialCount = 0;

  constructor() {
    if (this.isNative) {
      this.initPromise = this.initialize();
    }
  }

  // ── Frequency cap ───────────────────────────────────────────────────────
  canShowInterstitial(): boolean {
    if (this.purchaseService.isProOrTrial()) return false;
    
    // Check session limits
    if (this.interstitialCount >= MAX_INTERSTITIALS_PER_SESSION) return false;
    
    const now = Date.now();
    // 60 seconds session start cooldown
    if (now - this.sessionStartTime < SESSION_START_COOLDOWN_MS) return false;

    // 3 minutes cooldown between interstitials
    if (now - this.lastInterstitialTime < INTERSTITIAL_COOLDOWN_MS) return false;

    this.navigationCount++;
    if (this.navigationCount <= INTERSTITIAL_MIN_NAVIGATIONS) return false;

    return true;
  }

  // ── Initialization ──────────────────────────────────────────────────────
  async initialize(): Promise<void> {
    if (this.purchaseService.isProOrTrial()) return;
    try {
      await AdMob.initialize({
        ...(environment.adMobTesting ? { testingDevices: ['2077ef9a63d2b398840261c8221a0c9b'] } : {}),
        initializeForTesting: environment.adMobTesting,
      });
      AdMob.addListener(BannerAdPluginEvents.SizeChanged, (info) => {
        const h = (info as { height?: number }).height ?? 60;
        document.documentElement.style.setProperty('--admob-banner-height', `${h}px`);
      });
      // Preload all ad types in background
      this.preloadInterstitial();
      this.preloadRewardAd();
      this.preloadRewardInterstitial();
      this.preloadAppOpen();
    } catch (e) {
      // Silent fail
    }
  }

  // ── Preloading ──────────────────────────────────────────────────────────
  private async preloadInterstitial() {
    if (this.interstitialLoading || this.interstitialReady || !this.isNative) return;
    this.interstitialLoading = true;
    try {
      await AdMob.prepareInterstitial({ adId: AD_IDS.interstitial, isTesting: environment.adMobTesting });
      this.interstitialReady = true;
    } catch { } finally { this.interstitialLoading = false; }
  }

  private async preloadRewardAd() {
    if (this.rewardLoading || this.rewardReady || !this.isNative) return;
    this.rewardLoading = true;
    try {
      await AdMob.prepareRewardVideoAd({ adId: AD_IDS.reward, isTesting: environment.adMobTesting } as RewardAdOptions);
      this.rewardReady = true;
    } catch { } finally { this.rewardLoading = false; }
  }

  private async preloadRewardInterstitial() {
    if (this.rewardInterstitialLoading || this.rewardInterstitialReady || !this.isNative) return;
    this.rewardInterstitialLoading = true;
    try {
      await AdMob.prepareRewardInterstitialAd({ adId: AD_IDS.rewardInterstitial, isTesting: environment.adMobTesting } as RewardInterstitialAdOptions);
      this.rewardInterstitialReady = true;
    } catch { } finally { this.rewardInterstitialLoading = false; }
  }

  private async preloadAppOpen() {
    if (!this.isNative) return;
    try {
      await NativeAdPlugin.loadAppOpen({ adUnitId: AD_IDS.appOpen });
    } catch { }
  }

  // ── Banner ──────────────────────────────────────────────────────────────
  async showBanner() {
    if (!this.isNative || this.purchaseService.isProOrTrial()) return;
    if (this.bannerVisible) return;
    this.bannerVisible = true;
    try {
      await this.initPromise;
      await AdMob.showBanner({
        adId: AD_IDS.banner,
        adSize: BannerAdSize.ADAPTIVE_BANNER,
        position: BannerAdPosition.BOTTOM_CENTER,
        margin: 0,
        isTesting: environment.adMobTesting
      } as BannerAdOptions);
    } catch { this.bannerVisible = false; }
  }

  async hideBanner() {
    if (!this.isNative) return;
    try {
      await AdMob.hideBanner();
      this.bannerVisible = false;
      document.documentElement.style.setProperty('--admob-banner-height', '0px');
    } catch { }
  }

  // ── Reward Ad ───────────────────────────────────────────────────────────
  async showRewardAd(): Promise<boolean> {
    if (this.adShowing()) return false;

    if (!this.isNative) {
      const agreed = await this.alertService.showAlert({
        title: '🎬 Watch a Short Ad',
        message: 'Watch a short video ad to reveal the answer!',
        confirmText: 'Watch Ad ✓',
        cancelText: 'Cancel',
        showCancel: true,
        type: 'info'
      });
      if (agreed) this.rewardEarned.set(true);
      return agreed;
    }

    return new Promise(async (resolve) => {
      this.adShowing.set(true);
      let rewarded = false;
      try {
        const rewardListener = await AdMob.addListener(RewardAdPluginEvents.Rewarded, (_item: AdMobRewardItem) => {
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
          await AdMob.prepareRewardVideoAd({ adId: AD_IDS.reward, isTesting: environment.adMobTesting } as RewardAdOptions);
        }
        await AdMob.showRewardVideoAd();
      } catch { this.adShowing.set(false); resolve(false); }
    });
  }

  // ── Rewarded Interstitial ───────────────────────────────────────────────
  /** Show a rewarded interstitial. Always grants access (user can skip), but rewards if completed. */
  async showRewardedInterstitial(): Promise<void> {
    if (this.adShowing() || !this.isNative || this.purchaseService.isProOrTrial()) return;

    return new Promise(async (resolve) => {
      this.adShowing.set(true);
      try {
        const dismissListener = await AdMob.addListener(RewardInterstitialAdPluginEvents.Dismissed, () => {
          dismissListener.remove();
          this.adShowing.set(false);
          this.rewardInterstitialReady = false;
          this.preloadRewardInterstitial();
          resolve();
        });
        const failListener = await AdMob.addListener(RewardInterstitialAdPluginEvents.FailedToLoad, () => {
          failListener.remove();
          this.adShowing.set(false);
          this.rewardInterstitialReady = false;
          resolve();
        });
        if (!this.rewardInterstitialReady) {
          await AdMob.prepareRewardInterstitialAd({ adId: AD_IDS.rewardInterstitial, isTesting: environment.adMobTesting } as RewardInterstitialAdOptions);
        }
        await AdMob.showRewardInterstitialAd();
      } catch { this.adShowing.set(false); resolve(); }
    });
  }

  // ── Interstitial ────────────────────────────────────────────────────────
  async showInterstitial(): Promise<void> {
    if (this.adShowing() || !this.isNative) return;
    if (!this.canShowInterstitial()) return;

    return new Promise(async (resolve) => {
      this.adShowing.set(true);
      try {
        const dismissListener = await AdMob.addListener(InterstitialAdPluginEvents.Dismissed, () => {
          dismissListener.remove();
          this.adShowing.set(false);
          this.interstitialReady = false;
          this.lastInterstitialTime = Date.now();
          this.interstitialCount++;
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
          await AdMob.prepareInterstitial({ adId: AD_IDS.interstitial, isTesting: environment.adMobTesting });
        }
        await AdMob.showInterstitial();
      } catch { this.adShowing.set(false); resolve(); }
    });
  }

  // ── App Open ────────────────────────────────────────────────────────────
  /** Show app open ad on resume. Respects 4-hour cooldown and skips for Pro users. */
  async showAppOpen(): Promise<void> {
    if (!this.isNative || this.purchaseService.isProOrTrial()) return;
    if (this.adShowing()) return;
    const now = Date.now();
    if (now - this.lastAppOpenTime < APP_OPEN_COOLDOWN_MS) return;

    try {
      await NativeAdPlugin.showAppOpen({});
      this.lastAppOpenTime = now;
      // Preload next one immediately after showing
      setTimeout(() => this.preloadAppOpen(), 1000);
    } catch { }
  }
}
