import { Injectable, signal, computed, inject, NgZone } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { Firestore, doc, updateDoc, getDoc } from '@angular/fire/firestore';
import { ModalController } from '@ionic/angular/standalone';
import { AlertService } from '../alert.service';
import { environment } from '../../environments/environment';

// ── CdvPurchase types (the plugin writes to window.CdvPurchase after deviceready) ──
declare const CdvPurchase: {
  store: CdvStore;
  ProductType: { PAID_SUBSCRIPTION: string; NON_CONSUMABLE: string; CONSUMABLE: string };
  Platform: { GOOGLE_PLAY: string; APPLE_APPSTORE: string };
};

interface CdvProduct {
  id: string;
  type: string;
  platform: string;
  title: string;
  description: string;
  offers: CdvOffer[];
  owned: boolean;
}

interface CdvOffer {
  id: string;
  product: CdvProduct;
  pricingPhases: CdvPricingPhase[];
  order(): Promise<void>;
}

interface CdvPricingPhase {
  price: string;
  currency: string;
  paymentMode: string;
  billingPeriod?: string;
}

interface CdvTransaction {
  transactionId: string;
  verify(): void;
  finish(): void;
}

interface CdvReceipt {
  finish(): void;
}

interface CdvVerifiedReceipt {
  id: string;
  products: Array<{ id: string }>;
  expiryDate: Date | null;
  isExpired(): boolean;
  finish(): void;
}

interface CdvWhenAPI {
  productUpdated(cb: (p: CdvProduct) => void): CdvWhenAPI;
  approved(cb: (t: CdvTransaction) => void): CdvWhenAPI;
  verified(cb: (r: CdvVerifiedReceipt) => void): CdvWhenAPI;
  unverified(cb: (r: CdvReceipt) => void): CdvWhenAPI;
  finished(cb: (t: CdvTransaction) => void): CdvWhenAPI;
}

interface CdvStore {
  register(products: Array<{ id: string; type: string; platform: string }>): void;
  initialize(platforms: string[]): Promise<void>;
  get(id: string, platform?: string): CdvProduct | undefined;
  order(offer: CdvOffer): Promise<{ isError: boolean; code?: number; message?: string }>;
  restore(): void;
  update(): void;
  when(): CdvWhenAPI;
  verifiedPurchases: CdvVerifiedReceipt[];
  localReceipts: CdvReceipt[];
  log: { level: number };
  verbosity: number;
}

/** Maps plan key → product ID from environment */
const PRODUCT_IDS = {
  monthly: environment.iap.monthlyId,
  annual:  environment.iap.annualId,
} as const;

@Injectable({ providedIn: 'root' })
export class PurchaseService {
  private firestore    = inject(Firestore);
  private alertService = inject(AlertService);
  private modalCtrl    = inject(ModalController);
  private ngZone       = inject(NgZone);

  private readonly isNative = Capacitor.isNativePlatform();
  private storeReady        = false;
  private currentUid: string | null = null;

  // ── Public signals (keep same API so all consumers need no changes) ──────────

  /** True when the user has an active paid subscription */
  isPro = signal<boolean>(true); // IAP disabled — all users get Pro access

  /** True while an active 7-day free trial is running (Firestore-tracked) */
  trialEndsDate = signal<Date | null>(null);

  trialActive = computed((): boolean => {
    const end = this.trialEndsDate();
    return end !== null && new Date() < end;
  });

  /** Feature gate — use this everywhere instead of isPro() directly */
  isProOrTrial = computed((): boolean => this.isPro() || this.trialActive());

  trialDaysLeft = computed((): number => {
    const end = this.trialEndsDate();
    if (!end) return 0;
    return Math.max(0, Math.ceil((end.getTime() - Date.now()) / 86_400_000));
  });

  /** Plan selected in the paywall UI */
  selectedPlan = signal<'monthly' | 'annual'>('annual');

  /** True while a restore network call is in-flight */
  purchasing = signal<boolean>(false);

  /**
   * Loaded product metadata from the platform store.
   * Each entry exposes `.offers[0].pricingPhases[0].price` for display.
   */
  products = signal<CdvProduct[]>([]);

  // ── Initialization ─────────────────────────────────────────────────────────

  /**
   * Boot the IAP layer. Call once at app startup.
   * Silently no-ops on web.
   */
  async init(): Promise<void> {
    if (!this.isNative) return;

    // CdvPurchase is injected into window by the Capacitor plugin after load
    const cdv: typeof CdvPurchase | undefined = (window as any)['CdvPurchase'];
    if (!cdv?.store) {
      console.warn('[PurchaseService] CdvPurchase not available yet');
      return;
    }

    const { store, ProductType, Platform } = cdv;

    // Reduce log noise in production
    store.verbosity = 1; // ERROR only

    // Register both products on both platforms
    const platforms = [Platform.GOOGLE_PLAY, Platform.APPLE_APPSTORE];
    const registrations = Object.values(PRODUCT_IDS).flatMap(id =>
      platforms.map(platform => ({ id, type: ProductType.PAID_SUBSCRIPTION, platform }))
    );
    store.register(registrations);

    // ── Event pipeline ──────────────────────────────────────────────────────
    store.when()
      // Update local product catalog for paywall price display
      .productUpdated((product) => {
        this.ngZone.run(() => {
          this.products.update(prev => {
            const others = prev.filter(p => !(p.id === product.id && p.platform === product.platform));
            return [...others, product];
          });
        });
      })
      // Step 1: store approved the transaction → request verification
      .approved((transaction) => {
        // Without a server validator, CdvPurchase accepts the receipt locally.
        // Call verify() so the plugin moves the transaction to "verified" state.
        transaction.verify();
      })
      // Step 2: receipt verified → grant Pro access, finish transaction
      .verified((receipt) => {
        this.ngZone.run(() => {
          const hasProProduct = receipt.products.some(p =>
            Object.values(PRODUCT_IDS).includes(p.id as any)
          );
          if (hasProProduct && !receipt.isExpired()) {
            this.isPro.set(true);
            if (this.currentUid) this.saveProToFirestore(this.currentUid);
          }
        });
        receipt.finish();
      })
      // Unverified (e.g. network error during verification)
      .unverified(() => {
        console.warn('[PurchaseService] receipt unverified — will retry on next launch');
      });

    try {
      await store.initialize(platforms);
      this.storeReady = true;
      // Reflect any existing active purchases (reinstalls, cross-device)
      this.reflectVerifiedPurchases(store);
    } catch (e) {
      console.error('[PurchaseService] store.initialize failed', e);
    }
  }

  // ── User Identity ─────────────────────────────────────────────────────────

  /**
   * Store the current UID so the service can persist Pro status to Firestore
   * after a purchase completes. Call after the user signs in.
   */
  async identifyUser(uid: string): Promise<void> {
    this.currentUid = uid;
  }

  /**
   * Load Pro status: Firestore first (fast), then fall back to live store check.
   * Call after sign-in and after store initialization.
   */
  async loadProStatus(uid: string): Promise<void> {
    this.currentUid = uid;

    try {
      const snap = await getDoc(doc(this.firestore, `users/${uid}`));
      if (snap.exists()) {
        const data = snap.data();

        if (data['isPro'] === true) {
          this.isPro.set(true);
          return;
        }
        // Restore trial state from Firestore
        const trialStart = data['trialStartDate'] as { toDate?: () => Date } | undefined;
        if (trialStart?.toDate) {
          const end = new Date(trialStart.toDate());
          end.setDate(end.getDate() + 7);
          this.trialEndsDate.set(end);
          if (this.trialActive()) return;
        }
      }
    } catch { /* offline — fall through to store check */ }

    // Cross-device / reinstall fallback: query live store
    if (this.storeReady) {
      const cdv: typeof CdvPurchase | undefined = (window as any)['CdvPurchase'];
      if (cdv?.store) this.reflectVerifiedPurchases(cdv.store);
    }
  }

  /**
   * Activate a local 7-day free trial (Firestore-persisted).
   * Does NOT create a store-level subscription — used for soft trial gating only.
   */
  async activateTrial(uid: string, days = 7): Promise<void> {
    const now = new Date();
    const end = new Date(now);
    end.setDate(end.getDate() + days);
    this.trialEndsDate.set(end);
    try {
      await updateDoc(doc(this.firestore, `users/${uid}`), {
        trialStartDate: now,
        trialEndsDate: end,
      });
    } catch { /* offline — trial active locally */ }
  }

  // ── Purchase flow ──────────────────────────────────────────────────────────

  /**
   * Purchase the given plan directly (used by the Settings paywall card
   * which already has its own plan-toggle UI).
   * Returns true if the purchase completed successfully.
   */
  async purchasePlan(uid: string, plan: 'monthly' | 'annual'): Promise<boolean> {
    if (!this.isNative || !this.storeReady) {
      this.showWebAlert();
      return false;
    }

    const cdv: typeof CdvPurchase | undefined = (window as any)['CdvPurchase'];
    if (!cdv?.store) return false;

    const productId = PRODUCT_IDS[plan];
    const platform  = Capacitor.getPlatform() === 'ios'
      ? cdv.Platform.APPLE_APPSTORE
      : cdv.Platform.GOOGLE_PLAY;

    const product = cdv.store.get(productId, platform);
    const offer   = product?.offers?.[0];
    if (!offer) {
      console.warn('[PurchaseService] offer not found for', productId);
      return false;
    }

    this.purchasing.set(true);
    try {
      const result = await cdv.store.order(offer);
      if (result.isError) {
        if (result.code !== 6777010) { // 6777010 = user cancelled
          await this.alertService.showAlert({
            title: 'Purchase Failed',
            message: result.message ?? 'Something went wrong. Please try again.',
            confirmText: 'OK', showCancel: false, type: 'error',
          });
        }
        return false;
      }
      // isPro signal is set reactively inside the verified() handler
      return true;
    } catch (e: any) {
      if (e?.code !== 6777010) {
        await this.alertService.showAlert({
          title: 'Purchase Failed',
          message: 'Something went wrong. Please try again.',
          confirmText: 'OK', showCancel: false, type: 'error',
        });
      }
      return false;
    } finally {
      this.purchasing.set(false);
    }
  }

  /**
   * Present the full paywall modal.
   * Use from soft-paywall triggers (level milestone, ad gate, etc.).
   */
  async presentPaywall(uid: string): Promise<boolean> {
    if (!this.isNative) {
      this.showWebAlert();
      return false;
    }

    // Lazy-import to keep the initial chunk small
    const { PaywallModalComponent } = await import('../shared/paywall-modal.component');
    const modal = await this.modalCtrl.create({
      component: PaywallModalComponent,
      cssClass: 'paywall-modal',
      breakpoints: [0, 1],
      initialBreakpoint: 1,
    });
    await modal.present();
    const { data } = await modal.onDidDismiss<{ purchased: boolean }>();
    return data?.purchased ?? false;
  }

  /**
   * Present paywall only if the user does not already have Pro access.
   */
  async presentPaywallIfNeeded(uid: string): Promise<boolean> {
    if (this.isProOrTrial()) return false;
    return this.presentPaywall(uid);
  }

  // ── Restore ────────────────────────────────────────────────────────────────

  async restorePurchases(uid: string): Promise<boolean> {
    if (!this.isNative || !this.storeReady) return false;

    this.purchasing.set(true);
    try {
      const cdv: typeof CdvPurchase | undefined = (window as any)['CdvPurchase'];
      if (!cdv?.store) return false;

      // restore() triggers the platform's restore flow; verified() handler fires on success
      cdv.store.restore();

      // Wait briefly for the verified handler to fire
      await new Promise(resolve => setTimeout(resolve, 3000));

      if (this.isPro()) {
        await this.alertService.showAlert({
          title: '✅ Pro Restored',
          message: 'Your Pro access has been restored!',
          confirmText: 'Great!', showCancel: false, type: 'success',
        });
        return true;
      } else {
        await this.alertService.showAlert({
          title: 'No Purchase Found',
          message: 'No previous Pro purchase was found for this account.',
          confirmText: 'OK', showCancel: false, type: 'info',
        });
        return false;
      }
    } catch {
      await this.alertService.showAlert({
        title: 'Restore Failed',
        message: 'Could not restore purchases. Please try again.',
        confirmText: 'OK', showCancel: false, type: 'error',
      });
      return false;
    } finally {
      this.purchasing.set(false);
    }
  }

  // ── Subscription Management ────────────────────────────────────────────────

  /**
   * Open the platform's native subscription management screen.
   * Android: Google Play subscriptions page.
   * iOS: Apple Settings → Subscriptions.
   */
  async openCustomerCenter(): Promise<void> {
    if (!this.isNative) {
      this.showWebAlert();
      return;
    }
    const url = Capacitor.getPlatform() === 'ios'
      ? 'https://apps.apple.com/account/subscriptions'
      : 'https://play.google.com/store/account/subscriptions?sku=javaiq_pro_monthly&package=in.sangathi.javaiq';
    window.open(url, '_system');
  }

  // ── Sign Out ───────────────────────────────────────────────────────────────

  async resetUser(): Promise<void> {
    this.isPro.set(false);
    this.trialEndsDate.set(null);
    this.currentUid = null;
    this.products.set([]);
  }

  // ── Backward compat ────────────────────────────────────────────────────────

  /** @deprecated Use presentPaywall(uid) */
  async purchasePro(uid: string): Promise<boolean> {
    return this.presentPaywall(uid);
  }

  // ── Private helpers ────────────────────────────────────────────────────────

  private reflectVerifiedPurchases(store: CdvStore): void {
    const hasActive = store.verifiedPurchases.some(vp => {
      const hasProId = vp.products.some(p => Object.values(PRODUCT_IDS).includes(p.id as any));
      return hasProId && !vp.isExpired();
    });
    if (hasActive) {
      this.ngZone.run(() => this.isPro.set(true));
    }
  }

  private async saveProToFirestore(uid: string): Promise<void> {
    try {
      await updateDoc(doc(this.firestore, `users/${uid}`), { isPro: true });
    } catch { /* offline — will sync on next launch */ }
  }

  private async showWebAlert(): Promise<void> {
    await this.alertService.showAlert({
      title: 'Mobile App Only',
      message: 'In-app purchases are available on the Android and iOS apps.',
      confirmText: 'OK', showCancel: false, type: 'info',
    });
  }
}
