import { Injectable, signal, computed, inject } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { Purchases, LOG_LEVEL } from '@revenuecat/purchases-capacitor';
import { RevenueCatUI, PAYWALL_RESULT } from '@revenuecat/purchases-capacitor-ui';
import { Firestore, doc, updateDoc, getDoc } from '@angular/fire/firestore';
import { AlertService } from '../alert.service';
import { environment } from '../../environments/environment';

/** Entitlement identifier as configured in the RevenueCat dashboard */
const PRO_ENTITLEMENT_ID = 'JavaIQ Pro';

@Injectable({ providedIn: 'root' })
export class PurchaseService {
  private firestore = inject(Firestore);
  private alertService = inject(AlertService);

  private readonly isNative = Capacitor.isNativePlatform();

  /** True when the current user has an active RevenueCat Pro entitlement */
  isPro = signal<boolean>(false);

  /** True while the user has an active 7-day free trial */
  trialEndsDate = signal<Date | null>(null);

  /** True when the trial is active and has not expired */
  trialActive = computed((): boolean => {
    const end = this.trialEndsDate();
    return end !== null && new Date() < end;
  });

  /**
   * True when the user should receive Pro-level access —
   * either through a paid subscription or an active free trial.
   * Use this instead of `isPro()` for all feature gating.
   */
  isProOrTrial = computed((): boolean => this.isPro() || this.trialActive());

  /** True while a restore network call is in-flight */
  purchasing = signal<boolean>(false);

  /** Whether RevenueCat SDK was successfully initialized */
  private rcInitialized = false;

  // ── Initialization ────────────────────────────────────────────────────────

  /**
   * Configure the RevenueCat SDK. Call once at app startup (before any other method).
   * Safe to call on web — silently skips on non-native platforms.
   * Skips gracefully if API keys have not been configured yet.
   */
  async init(): Promise<void> {
    if (!this.isNative) return;

    const apiKey = Capacitor.getPlatform() === 'ios'
      ? environment.revenueCatApiKeyIos
      : environment.revenueCatApiKeyAndroid;

    // Skip placeholder keys to prevent native SDK crash
    if (!apiKey || apiKey.includes('PLACEHOLDER') || apiKey.trim() === '') {
      console.warn('[PurchaseService] RevenueCat API key not configured — IAP disabled');
      return;
    }

    try {
      await Purchases.setLogLevel({ level: LOG_LEVEL.DEBUG });
      await Purchases.configure({ apiKey });
      this.rcInitialized = true;

      // React to subscription changes in real time (e.g., paywall purchase, renewal)
      await Purchases.addCustomerInfoUpdateListener((customerInfo) => {
        const isActive = !!customerInfo.entitlements.active[PRO_ENTITLEMENT_ID];
        this.isPro.set(isActive);
      });
    } catch (e) {
      console.error('[PurchaseService] init failed', e);
    }
  }

  // ── User Identity ─────────────────────────────────────────────────────────

  /**
   * Link RevenueCat's anonymous user to the authenticated Firebase UID.
   * Call after the user signs in so purchases are tied to their account.
   */
  async identifyUser(uid: string): Promise<void> {
    if (!this.rcInitialized) return;
    try {
      await Purchases.logIn({ appUserID: uid });
    } catch {
      // Ignore — user will be identified by anonymous ID
    }
  }

  /**
   * Fast status load: read isPro + trialStartDate from Firestore first
   * (no RevenueCat round-trip). Falls back to RevenueCat if Firestore says
   * false (handles reinstalls / cross-device).
   */
  async loadProStatus(uid: string): Promise<void> {
    try {
      const snap = await getDoc(doc(this.firestore, `users/${uid}`));
      if (snap.exists()) {
        const data = snap.data();
        if (data['isPro'] === true) {
          this.isPro.set(true);
          return;
        }
        // Restore trial state from Firestore
        const trialStart: { toDate?: () => Date } | undefined = data['trialStartDate'];
        if (trialStart?.toDate) {
          const end = new Date(trialStart.toDate());
          end.setDate(end.getDate() + 7);
          this.trialEndsDate.set(end);
          if (this.trialActive()) return; // still in trial — no RC round-trip needed
        }
      }
    } catch { /* offline — fall through to RevenueCat */ }

    await this.syncProFromRevenueCat(uid);
  }

  /**
   * Activate a free trial for the given user.
   * Writes trialStartDate to Firestore and updates the local signal.
   * @param uid   Firebase UID
   * @param days  Trial length in days (default: 7)
   */
  async activateTrial(uid: string, days = 7): Promise<void> {
    const now = new Date();
    const end = new Date(now);
    end.setDate(end.getDate() + days);
    this.trialEndsDate.set(end);
    try {
      await updateDoc(doc(this.firestore, `users/${uid}`), {
        trialStartDate: now,
        trialEndsDate: end
      });
    } catch { /* offline — trial still active locally */ }
  }

  /**
   * Fetch latest CustomerInfo from RevenueCat and update the isPro signal + Firestore.
   */
  private async syncProFromRevenueCat(uid?: string): Promise<boolean> {
    if (!this.rcInitialized) return false;
    try {
      const { customerInfo } = await Purchases.getCustomerInfo();
      const isActive = !!customerInfo.entitlements.active[PRO_ENTITLEMENT_ID];
      this.isPro.set(isActive);
      if (isActive && uid) await this.saveProToFirestore(uid);
      return isActive;
    } catch {
      return false;
    }
  }

  // ── Paywall ───────────────────────────────────────────────────────────────

  /**
   * Present the native RevenueCat Paywall for the current offering.
   * Handles all products (Lifetime, Yearly, Monthly) configured in the RC dashboard.
   * Returns true if the user purchased or restored Pro.
   */
  async presentPaywall(uid: string): Promise<boolean> {
    if (!this.isNative || !this.rcInitialized) {
      await this.alertService.showAlert({
        title: '📱 Not Available',
        message: 'In-app purchases are only available on the Android and iOS apps.',
        confirmText: 'OK',
        showCancel: false,
        type: 'info'
      });
      return false;
    }
    try {
      const { result } = await RevenueCatUI.presentPaywall();
      const purchased = result === PAYWALL_RESULT.PURCHASED || result === PAYWALL_RESULT.RESTORED;
      if (purchased) await this.syncProFromRevenueCat(uid);
      return purchased;
    } catch (e) {
      console.error('[PurchaseService] presentPaywall failed', e);
      return false;
    }
  }

  /**
   * Present the paywall ONLY if the user does not have the JavaIQ Pro entitlement.
   * Use this when gating premium content to avoid showing the paywall to existing Pro users.
   */
  async presentPaywallIfNeeded(uid: string): Promise<boolean> {
    if (!this.isNative || !this.rcInitialized) return false;
    try {
      const { result } = await RevenueCatUI.presentPaywallIfNeeded({
        requiredEntitlementIdentifier: PRO_ENTITLEMENT_ID
      });
      const purchased = result === PAYWALL_RESULT.PURCHASED || result === PAYWALL_RESULT.RESTORED;
      if (purchased) await this.syncProFromRevenueCat(uid);
      return purchased;
    } catch (e) {
      console.error('[PurchaseService] presentPaywallIfNeeded failed', e);
      return false;
    }
  }

  // ── Customer Center ───────────────────────────────────────────────────────

  /**
   * Open the native RevenueCat Customer Center.
   * Lets subscribers manage, cancel, or restore their subscription without contacting support.
   */
  async openCustomerCenter(): Promise<void> {
    if (!this.isNative || !this.rcInitialized) {
      await this.alertService.showAlert({
        title: '📱 Not Available',
        message: 'Subscription management is only available on the Android and iOS apps.',
        confirmText: 'OK',
        showCancel: false,
        type: 'info'
      });
      return;
    }
    try {
      await RevenueCatUI.presentCustomerCenter();
    } catch (e) {
      console.error('[PurchaseService] Customer Center failed', e);
    }
  }

  // ── Restore ───────────────────────────────────────────────────────────────

  /**
   * Restore previous purchases (required by App Store / Play Store guidelines).
   */
  async restorePurchases(uid: string): Promise<boolean> {
    if (!this.isNative || !this.rcInitialized) return false;
    this.purchasing.set(true);
    try {
      const { customerInfo } = await Purchases.restorePurchases();
      const isActive = !!customerInfo.entitlements.active[PRO_ENTITLEMENT_ID];
      this.isPro.set(isActive);
      if (isActive) {
        await this.saveProToFirestore(uid);
        await this.alertService.showAlert({
          title: '✅ Pro Restored',
          message: 'Your Pro access has been restored!',
          confirmText: 'Great!',
          showCancel: false,
          type: 'success'
        });
      } else {
        await this.alertService.showAlert({
          title: 'No Purchase Found',
          message: 'No previous Pro purchase was found for this account.',
          confirmText: 'OK',
          showCancel: false,
          type: 'info'
        });
      }
      return isActive;
    } catch {
      await this.alertService.showAlert({
        title: 'Restore Failed',
        message: 'Could not restore purchases. Please try again.',
        confirmText: 'OK',
        showCancel: false,
        type: 'error'
      });
      return false;
    } finally {
      this.purchasing.set(false);
    }
  }

  // ── Sign Out ──────────────────────────────────────────────────────────────

  /** Reset RevenueCat user on sign-out. */
  async resetUser(): Promise<void> {
    this.isPro.set(false);
    this.trialEndsDate.set(null);
    if (!this.rcInitialized) return;
    try { await Purchases.logOut(); } catch { /* ignore */ }
  }

  // ── Firestore ─────────────────────────────────────────────────────────────

  private async saveProToFirestore(uid: string): Promise<void> {
    try {
      await updateDoc(doc(this.firestore, `users/${uid}`), { isPro: true });
    } catch { /* offline — will sync on next launch */ }
  }

  // ── Backward compat ───────────────────────────────────────────────────────

  /**
   * @deprecated Use presentPaywall(uid) instead.
   * Kept for callers that used the old purchasePro API.
   */
  async purchasePro(uid: string): Promise<boolean> {
    return this.presentPaywall(uid);
  }
}
