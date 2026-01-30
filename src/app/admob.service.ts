import { Injectable, inject } from '@angular/core';
import { AlertService } from './alert.service';
import { AdMob, BannerAdSize, BannerAdPosition, AdMobRewardItem, RewardAdOptions, BannerAdOptions, RewardAdPluginEvents, AdOptions } from '@capacitor-community/admob';
import { Capacitor } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class AdMobService {
  private alertService = inject(AlertService);

  constructor() {
    this.initialize();
  }

  async initialize() {
    if (Capacitor.getPlatform() === 'web') return;
    
    try {
      await AdMob.initialize({
        testingDevices: ['2077ef9a63d2b398840261c8221a0c9b'],
        initializeForTesting: true,
      });
      console.log('AdMob initialized');
    } catch (e) {
      console.error('AdMob initialization failed', e);
    }
  }

  async showBanner() {
    if (Capacitor.getPlatform() === 'web') return;

    const options: BannerAdOptions = {
      adId: 'ca-app-pub-8970665297590705/6472553354', // Real Banner ID
      adSize: BannerAdSize.ADAPTIVE_BANNER,
      position: BannerAdPosition.BOTTOM_CENTER,
      margin: 0,
      isTesting: false
    };

    try {
      await AdMob.showBanner(options);
    } catch (e) {
      console.error('Failed to show banner', e);
    }
  }

  async hideBanner() {
    if (Capacitor.getPlatform() === 'web') return;
    try {
      await AdMob.hideBanner();
    } catch (e) {
      console.error('Failed to hide banner', e);
    }
  }

  async showRewardVideo(): Promise<boolean> {
    if (Capacitor.getPlatform() === 'web') {
      return this.alertService.confirm('You have 0 points. Watch a short video to earn 10 points?', 'Earn Points');
    }

    return new Promise(async (resolve) => {
      const options: RewardAdOptions = {
        adId: 'ca-app-pub-8970665297590705/8219096903', // Real Reward ID
        isTesting: false,
        // @ts-ignore
        autoShow: false
      };

      try {
        let rewarded = false;

        const rewardListener = await AdMob.addListener(RewardAdPluginEvents.Rewarded, (item) => {
          console.log('AdMob Reward Earned', item);
          rewarded = true;
        });

        const dismissListener = await AdMob.addListener(RewardAdPluginEvents.Dismissed, () => {
          console.log('AdMob Ad Dismissed. Rewarded:', rewarded);
          rewardListener.remove();
          dismissListener.remove();
          resolve(rewarded);
        });

        const failedToLoadListener = await AdMob.addListener(RewardAdPluginEvents.FailedToLoad, (error) => {
             console.error('AdMob Failed to Load', error);
             rewardListener.remove();
             dismissListener.remove();
             failedToLoadListener.remove();
             resolve(false);
        });

        await AdMob.prepareRewardVideoAd(options);
        await AdMob.showRewardVideoAd();
        
      } catch (e) {
        console.error('Failed to show reward video', e);
        resolve(false);
      }
    });
  }

  async showInterstitial() {
    if (Capacitor.getPlatform() === 'web') return;

    const options: AdOptions = {
      adId: 'ca-app-pub-8970665297590705/1779267104', // Place holder or Real
      isTesting: false
    };

    try {
      await AdMob.prepareInterstitial(options);
      await AdMob.showInterstitial();
    } catch (e) {
      console.error('Failed to show interstitial', e);
    }
  }
}

