import { registerPlugin } from '@capacitor/core';

export interface NativeAdPlugin {
  // Native inline ads
  loadAd(options: { adUnitId: string; slotId: string }): Promise<void>;
  showAd(options: { slotId: string; x: number; y: number; width: number; height: number }): Promise<void>;
  updatePosition(options: { slotId: string; x: number; y: number }): Promise<void>;
  setVisible(options: { slotId: string; visible: boolean }): Promise<void>;
  destroyAd(options: { slotId: string }): Promise<void>;
  destroyAll(options?: Record<string, never>): Promise<void>;
  // App Open ad
  loadAppOpen(options: { adUnitId: string }): Promise<void>;
  showAppOpen(options: Record<string, never>): Promise<void>;
  addListener(
    eventName: 'adLoaded',
    listenerFunc: (data: { slotId: string }) => void
  ): Promise<{ remove: () => void }>;
  addListener(
    eventName: 'adFailedToLoad',
    listenerFunc: (data: { slotId: string; error: string }) => void
  ): Promise<{ remove: () => void }>;
  addListener(
    eventName: 'appOpenLoaded' | 'appOpenDismissed',
    listenerFunc: () => void
  ): Promise<{ remove: () => void }>;
  addListener(
    eventName: 'appOpenFailed',
    listenerFunc: (data: { error: string }) => void
  ): Promise<{ remove: () => void }>;
}

export const NativeAdPlugin = registerPlugin<NativeAdPlugin>('NativeAd');
