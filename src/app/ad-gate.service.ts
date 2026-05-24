import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AdMobService } from './admob.service';
import { AlertService } from './alert.service';
import { PurchaseService } from './services/purchase.service';
import { AuthService } from './auth.service';

/**
 * AdGateService
 *
 * Manages two ad flows:
 *
 * 1. PER-ITEM PERMANENT LOCK:
 *    Every "premium" item (tutorial topic, interview question, experience, etc.)
 *    is locked by default. An interstitial ad is shown to unlock a specific item
 *    for the session. Visited state is persisted in localStorage.
 *
 * 2. INTERSTITIAL ON COMPLETE:
 *    After the user completes something (marks topic done, finishes quiz),
 *    show an interstitial — but no more than once every INTERSTITIAL_COOLDOWN_MS.
 */
/** Routes where interstitial ads should never fire (core navigation pages). */
const NO_INTERSTITIAL_ROUTES = ['/progress', '/settings', '/leaderboard', '/achievements', '/onboarding'];

@Injectable({ providedIn: 'root' })
export class AdGateService {
    private admob = inject(AdMobService);
    private alertService = inject(AlertService);
    private router = inject(Router);
    private purchaseService = inject(PurchaseService);
    private authService = inject(AuthService);

    // ── Constants ──────────────────────────────────────────────────────────
    /** Minimum gap (ms) between interstitial ads */
    private readonly INTERSTITIAL_COOLDOWN_MS = 5 * 60 * 1000; // 5 minutes

    /** Number of topics a new user may open for free before ads kick in */
    private readonly FREE_UNLOCK_LIMIT = 2;

    // ── Storage keys ────────────────────────────────────────────────────────
    private readonly STORAGE_KEY_UNLOCKED = 'adgate_unlocked_items';
    private readonly STORAGE_KEY_INTERSTITIAL = 'adgate_interstitial_time';
    private readonly STORAGE_KEY_VISITED = 'adgate_visited_items';
    private readonly STORAGE_KEY_DAILY_UNLOCKS = 'adgate_daily_unlocks';
    private readonly STORAGE_KEY_FREE_UNLOCKS = 'adgate_free_unlocks';

    // ── State ────────────────────────────────────────────────────────────────
    /**
     * Set of permanently unlocked item IDs.
     * Format: "category::itemId"
     * Signal so Angular templates can react to unlock events.
     */
    unlockedItems = signal<Set<string>>(new Set());

    private lastInterstitialTime = 0;

    /**
     * Items the user has previously unlocked (persisted across sessions).
     * On return visits, an interstitial is shown instead of a reward ad.
     */
    private visitedItems = new Set<string>();

    constructor() {
        // Unlocked items are session-only (in-memory only, not restored from storage).
        // This ensures a reward ad is required each new session for locked content,
        // preventing permanent free access after a single ad view.

        // Restore last interstitial timestamp
        const storedInter = localStorage.getItem(this.STORAGE_KEY_INTERSTITIAL);
        if (storedInter) this.lastInterstitialTime = parseInt(storedInter, 10);

        // Restore visited items (persisted — used to show interstitial on return visits)
        const storedVisited = localStorage.getItem(this.STORAGE_KEY_VISITED);
        if (storedVisited) {
            try {
                const arr: string[] = JSON.parse(storedVisited);
                this.visitedItems = new Set(arr);
            } catch { /* ignore corrupt data */ }
        }
    }

    // ── Per-Item Unlock ─────────────────────────────────────────────────────

    /**
     * Check if an item is unlocked.
     * @param itemId  Unique ID for the item (e.g. "core-java::arrays", "iq::123")
     */
    isItemUnlocked(itemId: string): boolean {
        if (this.purchaseService.isProOrTrial()) return true;
        return this.unlockedItems().has(itemId);
    }

    /**
     * Unlock an item by showing an interstitial ad.
     * Content is always granted after the ad is shown (or skipped by frequency cap).
     *
     * @returns Promise<boolean>  always true once past the free-unlock quota
     */
    async unlockItemWithAd(itemId: string, _itemTitle = ''): Promise<boolean> {
        // Pro/trial users get instant access — no ad required
        if (this.purchaseService.isProOrTrial()) {
            this.persistUnlock(itemId);
            return true;
        }

        // Already unlocked this session — no ad needed
        if (this.isItemUnlocked(itemId)) return true;

        // First FREE_UNLOCK_LIMIT topic opens are always free (no ad required).
        // Keyed by UID so shared-device users don't share each other's quota.
        const uid = this.authService.user()?.uid ?? 'anon';
        const freeUsed = parseInt(
            localStorage.getItem(`${this.STORAGE_KEY_FREE_UNLOCKS}_${uid}`) ?? '0', 10
        );
        if (freeUsed < this.FREE_UNLOCK_LIMIT) {
            localStorage.setItem(
                `${this.STORAGE_KEY_FREE_UNLOCKS}_${uid}`,
                String(freeUsed + 1)
            );
            this.persistUnlock(itemId);
            this.markVisited(itemId);
            return true;
        }

        // First or return visit: show interstitial then grant access
        await this.admob.showInterstitial();
        this.markVisited(itemId);
        this.persistUnlock(itemId);
        // Soft paywall: show upgrade prompt on the 4th free unlock of the day
        if (!this.purchaseService.isProOrTrial()) {
            const count = this.incrementDailyUnlockCount();
            if (count >= 4) {
                const uid = this.authService.user()?.uid;
                if (uid) this.purchaseService.presentPaywallIfNeeded(uid).catch(() => {});
            }
        }
        return true;
    }

    /**
     * Unlock an item using a rewarded interstitial (for interview/coding questions).
     * User can skip the ad early — access is always granted.
     */
    async unlockItemWithRewardedInterstitial(itemId: string): Promise<boolean> {
        if (this.purchaseService.isProOrTrial()) {
            this.persistUnlock(itemId);
            return true;
        }
        if (this.isItemUnlocked(itemId)) return true;

        const uid = this.authService.user()?.uid ?? 'anon';
        const freeUsed = parseInt(
            localStorage.getItem(`${this.STORAGE_KEY_FREE_UNLOCKS}_${uid}`) ?? '0', 10
        );
        if (freeUsed < this.FREE_UNLOCK_LIMIT) {
            localStorage.setItem(
                `${this.STORAGE_KEY_FREE_UNLOCKS}_${uid}`,
                String(freeUsed + 1)
            );
            this.persistUnlock(itemId);
            this.markVisited(itemId);
            return true;
        }

        await this.admob.showRewardedInterstitial();
        this.markVisited(itemId);
        this.persistUnlock(itemId);
        return true;
    }

    /** Unlock an item for the current session only (in-memory, not persisted) */
    private persistUnlock(itemId: string) {
        const current = new Set(this.unlockedItems());
        current.add(itemId);
        this.unlockedItems.set(current);
    }

    /** Mark item as previously visited (persisted across sessions) */
    private markVisited(itemId: string) {
        this.visitedItems.add(itemId);
        localStorage.setItem(this.STORAGE_KEY_VISITED, JSON.stringify([...this.visitedItems]));
    }

    // ── Daily unlock counter ─────────────────────────────────────────────────

    private getDailyUnlockCount(): number {
        const today = new Date().toISOString().split('T')[0];
        try {
            const raw = localStorage.getItem(this.STORAGE_KEY_DAILY_UNLOCKS);
            if (raw) {
                const parsed = JSON.parse(raw);
                if (parsed.date === today) return parsed.count as number;
            }
        } catch { /* ignore */ }
        return 0;
    }

    private incrementDailyUnlockCount(): number {
        const today = new Date().toISOString().split('T')[0];
        const count = this.getDailyUnlockCount() + 1;
        localStorage.setItem(this.STORAGE_KEY_DAILY_UNLOCKS, JSON.stringify({ date: today, count }));
        return count;
    }

    // ── Interstitial on Complete ─────────────────────────────────────────────

    /**
     * Call when the user finishes content (marks topic done, completes quiz).
     * Shows an interstitial if the cooldown has passed.
     */
    async onContentCompleted(): Promise<void> {
        // Pro/trial users never see interstitials
        if (this.purchaseService.isProOrTrial()) return;

        const currentUrl = this.router.url;
        if (NO_INTERSTITIAL_ROUTES.some(r => currentUrl.startsWith(r))) {
            return;
        }

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
        this.visitedItems = new Set();
        localStorage.removeItem(this.STORAGE_KEY_INTERSTITIAL);
        localStorage.removeItem(this.STORAGE_KEY_VISITED);
        const uid = this.authService.user()?.uid ?? 'anon';
        localStorage.removeItem(`${this.STORAGE_KEY_FREE_UNLOCKS}_${uid}`);
    }
}
