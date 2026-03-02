import { Injectable, inject, signal } from '@angular/core';
import { AdMobService } from './admob.service';
import { AlertService } from './alert.service';

/**
 * AdGateService
 *
 * Manages two ad flows:
 *
 * 1. PER-ITEM PERMANENT LOCK:
 *    Every "premium" item (tutorial topic, interview question, experience, etc.)
 *    is locked by default. The user watches one reward ad to permanently unlock
 *    a specific item. Unlocked state is persisted in localStorage.
 *
 * 2. INTERSTITIAL ON COMPLETE:
 *    After the user completes something (marks topic done, finishes quiz),
 *    show an interstitial — but no more than once every INTERSTITIAL_COOLDOWN_MS.
 */
@Injectable({ providedIn: 'root' })
export class AdGateService {
    private admob = inject(AdMobService);
    private alertService = inject(AlertService);

    // ── Constants ──────────────────────────────────────────────────────────
    /** Minimum gap (ms) between interstitial ads */
    private readonly INTERSTITIAL_COOLDOWN_MS = 5 * 60 * 1000; // 5 minutes

    // ── Storage keys ────────────────────────────────────────────────────────
    private readonly STORAGE_KEY_UNLOCKED = 'adgate_unlocked_items';
    private readonly STORAGE_KEY_INTERSTITIAL = 'adgate_interstitial_time';

    // ── State ────────────────────────────────────────────────────────────────
    /**
     * Set of permanently unlocked item IDs.
     * Format: "category::itemId"
     * Signal so Angular templates can react to unlock events.
     */
    unlockedItems = signal<Set<string>>(new Set());

    private lastInterstitialTime = 0;

    constructor() {
        // Restore persisted unlocked items
        try {
            const raw = localStorage.getItem(this.STORAGE_KEY_UNLOCKED);
            if (raw) {
                const arr: string[] = JSON.parse(raw);
                this.unlockedItems.set(new Set(arr));
            }
        } catch { /* corrupt storage — start fresh */ }

        // Restore last interstitial timestamp
        const storedInter = localStorage.getItem(this.STORAGE_KEY_INTERSTITIAL);
        if (storedInter) this.lastInterstitialTime = parseInt(storedInter, 10);
    }

    // ── Per-Item Unlock ─────────────────────────────────────────────────────

    /**
     * Check if an item is unlocked.
     * @param itemId  Unique ID for the item (e.g. "core-java::arrays", "iq::123")
     */
    isItemUnlocked(itemId: string): boolean {
        return this.unlockedItems().has(itemId);
    }

    /**
     * Attempt to unlock an item by watching a reward ad.
     * On web the ad is simulated with a confirmation dialog.
     *
     * @returns Promise<boolean>  true → item was unlocked; false → user cancelled
     */
    async unlockItemWithAd(itemId: string, itemTitle = 'this content'): Promise<boolean> {
        // Already unlocked — no ad needed
        if (this.isItemUnlocked(itemId)) return true;

        const earned = await this.admob.showRewardAd();

        if (earned) {
            this.persistUnlock(itemId);
            return true;
        }

        // User dismissed without earning
        await this.alertService.showAlert({
            title: '🔒 Watch Ad to Unlock',
            message: `Watch the short video ad to permanently unlock "${itemTitle}". This helps keep JavaIQ free!`,
            confirmText: 'OK',
            showCancel: false,
            type: 'warning'
        });
        return false;
    }

    /** Persist the unlock of an item to localStorage */
    private persistUnlock(itemId: string) {
        const current = new Set(this.unlockedItems());
        current.add(itemId);
        this.unlockedItems.set(current);
        try {
            localStorage.setItem(this.STORAGE_KEY_UNLOCKED, JSON.stringify([...current]));
        } catch { /* storage full or unavailable */ }
    }

    // ── Interstitial on Complete ─────────────────────────────────────────────

    /**
     * Call when the user finishes content (marks topic done, completes quiz).
     * Shows an interstitial if the cooldown has passed.
     */
    async onContentCompleted(): Promise<void> {
        const now = Date.now();
        const msSinceLast = now - this.lastInterstitialTime;

        if (msSinceLast < this.INTERSTITIAL_COOLDOWN_MS) {
            const remaining = Math.round((this.INTERSTITIAL_COOLDOWN_MS - msSinceLast) / 1000);
            console.log(`[AdGate] Interstitial skipped — cooldown ${remaining}s remaining`);
            return;
        }

        this.lastInterstitialTime = now;
        localStorage.setItem(this.STORAGE_KEY_INTERSTITIAL, now.toString());
        await this.admob.showInterstitial();
    }

    // ── Dev Utilities ────────────────────────────────────────────────────────

    /** Reset everything — useful for testing */
    resetAll() {
        this.unlockedItems.set(new Set());
        this.lastInterstitialTime = 0;
        localStorage.removeItem(this.STORAGE_KEY_UNLOCKED);
        localStorage.removeItem(this.STORAGE_KEY_INTERSTITIAL);
    }
}
