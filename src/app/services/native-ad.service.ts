import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Capacitor } from '@capacitor/core';
import { NativeAdPlugin } from '../plugins/native-ad.plugin';
import { environment } from '../../environments/environment';

const NATIVE_AD_HEIGHT_CSS = 110; // px — must match InlineAdComponent placeholder height

const PROD_NATIVE_ID = 'ca-app-pub-8970665297590705/9192637925';
const TEST_NATIVE_ID = 'ca-app-pub-3940256099942544/2247696110';
const AD_UNIT_ID = environment.adMobTesting ? TEST_NATIVE_ID : PROD_NATIVE_ID;

@Injectable({ providedIn: 'root' })
export class NativeAdService implements OnDestroy {
  readonly isNative = Capacitor.getPlatform() !== 'web';

  /** Emits the current scrollTop whenever ion-content scrolls */
  readonly scroll$ = new Subject<number>();

  private listeners: Array<{ remove: () => void }> = [];
  private activeSlots = new Set<string>();

  constructor() {
    if (this.isNative) {
      this.setupListeners();
    }
  }

  /** Called by topic-router on (ionScroll) */
  reportScroll(scrollTop: number): void {
    this.scroll$.next(scrollTop);
  }

  /** Load a native ad for a given slot. Resolves immediately; listen to adLoaded event. */
  async loadAd(slotId: string): Promise<void> {
    if (!this.isNative) return;
    this.activeSlots.add(slotId);
    await NativeAdPlugin.loadAd({ adUnitId: AD_UNIT_ID, slotId }).catch(() => {});
  }

  async showAd(slotId: string, x: number, y: number, width: number): Promise<void> {
    if (!this.isNative) return;
    await NativeAdPlugin.showAd({
      slotId, x, y, width, height: NATIVE_AD_HEIGHT_CSS
    }).catch(() => {});
  }

  async updatePosition(slotId: string, x: number, y: number): Promise<void> {
    if (!this.isNative) return;
    await NativeAdPlugin.updatePosition({ slotId, x, y }).catch(() => {});
  }

  async setVisible(slotId: string, visible: boolean): Promise<void> {
    if (!this.isNative) return;
    await NativeAdPlugin.setVisible({ slotId, visible }).catch(() => {});
  }

  async destroyAd(slotId: string): Promise<void> {
    if (!this.isNative) return;
    this.activeSlots.delete(slotId);
    await NativeAdPlugin.destroyAd({ slotId }).catch(() => {});
  }

  /** Destroy all active slots — call when leaving the tutorial screen */
  async destroyAll(): Promise<void> {
    if (!this.isNative) return;
    this.activeSlots.clear();
    await NativeAdPlugin.destroyAll({}).catch(() => {});
  }

  onAdLoaded(cb: (slotId: string) => void): void {
    if (!this.isNative) return;
    NativeAdPlugin.addListener('adLoaded', ({ slotId }) => cb(slotId))
      .then(l => this.listeners.push(l))
      .catch(() => {});
  }

  private setupListeners(): void {
    NativeAdPlugin.addListener('adFailedToLoad', ({ slotId, error }) => {
      console.warn(`[NativeAd] slot ${slotId} failed:`, error);
      this.activeSlots.delete(slotId);
    }).then(l => this.listeners.push(l)).catch(() => {});
  }

  ngOnDestroy(): void {
    this.listeners.forEach(l => l.remove());
    this.scroll$.complete();
  }
}
