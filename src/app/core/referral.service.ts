import { Injectable, inject, signal } from '@angular/core';
import { Firestore, doc, getDoc, updateDoc, setDoc, arrayUnion } from '@angular/fire/firestore';
import { AuthService } from '../auth.service';

const LS_PENDING_REFERRAL = 'pending_referral_code';

@Injectable({ providedIn: 'root' })
export class ReferralService {
  private firestore = inject(Firestore);
  private authSvc   = inject(AuthService);

  /** The current user's shareable referral code. */
  referralCode = signal<string | null>(null);

  constructor() {
    // Generate/load code whenever the user signs in
    const user = this.authSvc.user();
    if (user) this.loadOrGenerate(user.uid);
  }

  // ── Code generation ─────────────────────────────────────────────────────────

  /**
   * Load existing code from Firestore; generate a new one if absent.
   * Stores result in `this.referralCode`.
   */
  async loadOrGenerate(uid: string): Promise<void> {
    try {
      const userRef = doc(this.firestore, `users/${uid}`);
      const snap = await getDoc(userRef);
      if (snap.exists() && snap.data()['referralCode']) {
        this.referralCode.set(snap.data()['referralCode'] as string);
      } else {
        const code = this.generateCode(uid);
        this.referralCode.set(code);
        await setDoc(userRef, { referralCode: code }, { merge: true });
        // Create the referrals lookup document
        await setDoc(doc(this.firestore, `referrals/${code}`), {
          ownerUid:     uid,
          createdAt:    new Date(),
          usedBy:       [],
          trialGranted: false,
        });
      }
    } catch { /* offline — code will be null; retry next load */ }
  }

  /**
   * Store a referral code captured from a deep link before the user has
   * authenticated. Applied during/after sign-in.
   */
  storeReferralCode(code: string): void {
    if (code) localStorage.setItem(LS_PENDING_REFERRAL, code);
  }

  /** Returns the pending code (if any) captured from a pre-auth deep link. */
  getPendingReferralCode(): string | null {
    return localStorage.getItem(LS_PENDING_REFERRAL);
  }

  /** Clear the pending code once applied. */
  clearPendingReferralCode(): void {
    localStorage.removeItem(LS_PENDING_REFERRAL);
  }

  /**
   * Apply a referral code for a newly-registered user.
   * Records `newUid` in `referrals/{code}.usedBy` and credits the owner.
   */
  async applyReferral(code: string, newUid: string): Promise<void> {
    try {
      const refDoc = doc(this.firestore, `referrals/${code}`);
      const snap = await getDoc(refDoc);
      if (!snap.exists()) return;

      const data = snap.data();
      const ownerUid: string = data['ownerUid'];

      // Prevent self-referral and duplicate application
      if (ownerUid === newUid) return;
      const usedBy: string[] = data['usedBy'] ?? [];
      if (usedBy.includes(newUid)) return;

      // Record usage
      await updateDoc(refDoc, { usedBy: arrayUnion(newUid) });

      // Credit owner with bonus XP (write a Firestore field — GamificationService
      // will pick this up on next sync via gamification/{uid}.bonusXp)
      const ownerGamRef = doc(this.firestore, `gamification/${ownerUid}`);
      await updateDoc(ownerGamRef, { bonusXp: 100 }).catch(() => {});

      this.clearPendingReferralCode();
    } catch { /* offline or invalid code — silent fail */ }
  }

  // ── Helpers ─────────────────────────────────────────────────────────────────

  /**
   * Generates a deterministic 8-char code from uid + timestamp.
   * Uses a simple base-36 hash (no crypto dependency).
   */
  private generateCode(uid: string): string {
    const seed = uid + Date.now().toString(36);
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
      hash = (Math.imul(31, hash) + seed.charCodeAt(i)) | 0;
    }
    return Math.abs(hash).toString(36).toUpperCase().padStart(8, '0').slice(0, 8);
  }
}
