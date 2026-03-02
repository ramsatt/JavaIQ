import { Injectable, inject, signal } from '@angular/core';
import {
  AdMob, BannerAdSize, BannerAdPosition, RewardAdOptions,
  BannerAdOptions, RewardAdPluginEvents, AdOptions,
  AdMobRewardItem, InterstitialAdPluginEvents, BannerAdPluginEvents
} from '@capacitor-community/admob';
import { Capacitor } from '@capacitor/core';
import { AlertService } from './alert.service';

// ─── Ad Unit IDs ────────────────────────────────────────────────────────────
const AD_IDS = {
  banner: 'ca-app-pub-8970665297590705/6472553354',
  interstitial: 'ca-app-pub-8970665297590705/1779267104',
  reward: 'ca-app-pub-8970665297590705/8219096903',
};

// Test IDs (used when isTesting = true)
const TEST_IDS = {
  banner: 'ca-app-pub-3940256099942544/6300978111',
  interstitial: 'ca-app-pub-3940256099942544/1033173712',
  reward: 'ca-app-pub-3940256099942544/5224354917',
};

@Injectable({ providedIn: 'root' })
export class AdMobService {
  private alertService = inject(AlertService);

  /** Signal tracking if a reward ad was successfully earned this session */
  rewardEarned = signal(false);

  /** Whether an ad is currently visible (blocks double-shows) */
  private adShowing = signal(false);

  private readonly isNative = Capacitor.getPlatform() !== 'web';

  // Interstitial preload state
  private interstitialReady = false;
  private interstitialLoading = false;

  // Reward ad preload state
  private rewardReady = false;
  private rewardLoading = false;

  constructor() {
    if (this.isNative) {
      this.initialize();
    }
  }

  // ── Initialization ──────────────────────────────────────────────────────
  async initialize() {
    try {
      await AdMob.initialize({
        testingDevices: ['2077ef9a63d2b398840261c8221a0c9b'],
        initializeForTesting: false,
      });
      console.log('[AdMob] Initialized');
      // Preload both ad types in background
      this.preloadInterstitial();
      this.preloadRewardAd();
    } catch (e) {
      console.error('[AdMob] init failed', e);
    }
  }

  // ── Preloading ──────────────────────────────────────────────────────────
  private async preloadInterstitial() {
    if (this.interstitialLoading || this.interstitialReady || !this.isNative) return;
    this.interstitialLoading = true;
    try {
      await AdMob.prepareInterstitial({
        adId: AD_IDS.interstitial,
        isTesting: false
      });
      this.interstitialReady = true;
      console.log('[AdMob] Interstitial preloaded');
    } catch (e) {
      console.error('[AdMob] Interstitial preload failed', e);
    } finally {
      this.interstitialLoading = false;
    }
  }

  private async preloadRewardAd() {
    if (this.rewardLoading || this.rewardReady || !this.isNative) return;
    this.rewardLoading = true;
    try {
      await AdMob.prepareRewardVideoAd({
        adId: AD_IDS.reward,
        isTesting: false
      } as RewardAdOptions);
      this.rewardReady = true;
      console.log('[AdMob] Reward ad preloaded');
    } catch (e) {
      console.error('[AdMob] Reward ad preload failed', e);
    } finally {
      this.rewardLoading = false;
    }
  }

  // ── Banner ────────────────────────────────────────────────────────────
  async showBanner() {
    if (!this.isNative) return;
    try {
      // When banner renders, get its actual height and expose it as a CSS variable.
      // All fixed-bottom UI (nav-bar, buttons) use var(--admob-banner-height)
      // to shift themselves above the ad.
      await AdMob.addListener(BannerAdPluginEvents.SizeChanged, (info) => {
        const h = (info as { height?: number }).height ?? 60;
        document.documentElement.style.setProperty('--admob-banner-height', `${h}px`);
        console.log(`[AdMob] Banner height set: ${h}px`);
      });

      await AdMob.showBanner({
        adId: AD_IDS.banner,
        adSize: BannerAdSize.ADAPTIVE_BANNER,
        position: BannerAdPosition.BOTTOM_CENTER,
        margin: 0,
        isTesting: false
      } as BannerAdOptions);
    } catch (e) {
      console.error('[AdMob] Banner failed', e);
    }
  }

  async hideBanner() {
    if (!this.isNative) return;
    try {
      await AdMob.hideBanner();
      document.documentElement.style.setProperty('--admob-banner-height', '0px');
    } catch { }
  }

  // ── Reward Ad ────────────────────────────────────────────────────────
  /**
   * Show a reward ad. On web, shows a confirmation dialog as a stand-in.
   * @returns Promise<boolean> true if user earned the reward, false if dismissed/failed
   */
  async showRewardAd(): Promise<boolean> {
    if (this.adShowing()) return false;

    // Web simulation — show a confirmation to simulate the ad flow
    if (!this.isNative) {
      const agreed = await this.alertService.showAlert({
        title: '🎬 Watch a Short Ad',
        message: 'Watch a short video ad to unlock this content for free!',
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
        const rewardListener = await AdMob.addListener(
          RewardAdPluginEvents.Rewarded,
          (_item: AdMobRewardItem) => {
            rewarded = true;
            this.rewardEarned.set(true);
          }
        );

        const dismissListener = await AdMob.addListener(
          RewardAdPluginEvents.Dismissed,
          () => {
            rewardListener.remove();
            dismissListener.remove();
            this.adShowing.set(false);
            this.rewardReady = false;
            // Preload next one in background
            this.preloadRewardAd();
            resolve(rewarded);
          }
        );

        const failListener = await AdMob.addListener(
          RewardAdPluginEvents.FailedToLoad,
          (error: unknown) => {
            console.error('[AdMob] Reward failed', error);
            rewardListener.remove();
            dismissListener.remove();
            failListener.remove();
            this.adShowing.set(false);
            this.rewardReady = false;
            resolve(false);
          }
        );

        // If preloaded, show immediately; otherwise prepare+show
        if (!this.rewardReady) {
          await AdMob.prepareRewardVideoAd({
            adId: AD_IDS.reward,
            isTesting: false
          } as RewardAdOptions);
        }
        await AdMob.showRewardVideoAd();

      } catch (e) {
        console.error('[AdMob] showRewardAd error', e);
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
  async showInterstitial(): Promise<void> {
    if (this.adShowing() || !this.isNative) return;

    return new Promise(async (resolve) => {
      this.adShowing.set(true);
      try {
        // Set up dismiss listener first
        const dismissListener = await AdMob.addListener(
          InterstitialAdPluginEvents.Dismissed,
          () => {
            dismissListener.remove();
            this.adShowing.set(false);
            this.interstitialReady = false;
            // Preload next one
            this.preloadInterstitial();
            resolve();
          }
        );

        const failListener = await AdMob.addListener(
          InterstitialAdPluginEvents.FailedToLoad,
          (err: unknown) => {
            console.error('[AdMob] Interstitial failed', err);
            failListener.remove();
            this.adShowing.set(false);
            this.interstitialReady = false;
            resolve();
          }
        );

        if (!this.interstitialReady) {
          await AdMob.prepareInterstitial({
            adId: AD_IDS.interstitial,
            isTesting: false
          });
        }
        await AdMob.showInterstitial();

      } catch (e) {
        console.error('[AdMob] showInterstitial error', e);
        this.adShowing.set(false);
        resolve();
      }
    });
  }
}
