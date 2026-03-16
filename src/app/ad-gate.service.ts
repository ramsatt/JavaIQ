import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
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
/** Routes where interstitial ads should never fire (core navigation pages). */
const NO_INTERSTITIAL_ROUTES = ['/progress', '/settings', '/leaderboard', '/achievements', '/onboarding'];

@Injectable({ providedIn: 'root' })
export class AdGateService {
    private admob = inject(AdMobService);
    private alertService = inject(AlertService);
    private router = inject(Router);

    // ── Constants ──────────────────────────────────────────────────────────
    /** Minimum gap (ms) between interstitial ads */
    private readonly INTERSTITIAL_COOLDOWN_MS = 5 * 60 * 1000; // 5 minutes

    // ── Storage keys ────────────────────────────────────────────────────────
    private readonly STORAGE_KEY_UNLOCKED = 'adgate_unlocked_items';
    private readonly STORAGE_KEY_INTERSTITIAL = 'adgate_interstitial_time';
    private readonly STORAGE_KEY_VISITED = 'adgate_visited_items';

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
        return this.unlockedItems().has(itemId);
    }

    /**
     * Attempt to unlock an item by watching a reward ad.
     * On web the ad is simulated with a confirmation dialog.
     *
     * @returns Promise<boolean>  true → item was unlocked; false → user cancelled
     */
    async unlockItemWithAd(itemId: string, itemTitle = 'this content'): Promise<boolean> {
        // Already unlocked this session — no ad needed
        if (this.isItemUnlocked(itemId)) return true;

        const isReturnVisit = this.visitedItems.has(itemId);

        if (isReturnVisit) {
            // Return visitor: show a non-blocking interstitial, then grant access
            await this.admob.showInterstitial();
            this.persistUnlock(itemId);
            return true;
        }

        // First visit: require a reward ad to earn access
        const earned = await this.admob.showRewardAd();

        if (earned) {
            this.markVisited(itemId);
            this.persistUnlock(itemId);
            return true;
        }

        // User dismissed without earning
        await this.alertService.showAlert({
            title: '🔒 Watch Ad to Unlock',
            message: `Watch the short video ad to unlock "${itemTitle}" for this session. This helps keep JavaIQ free!`,
            confirmText: 'OK',
            showCancel: false,
            type: 'warning'
        });
        return false;
    }

    /** Unlock an item for the current session only (in-memory, not persisted) */
    private persistUnlock(itemId: string) {
        const current = new Set(this.unlockedItems());
        current.add(itemId);
        this.unlockedItems.set(current);
    }

    /** Mark item as previously visited so future sessions show an interstitial instead of reward ad */
    private markVisited(itemId: string) {
        this.visitedItems.add(itemId);
        localStorage.setItem(this.STORAGE_KEY_VISITED, JSON.stringify([...this.visitedItems]));
    }

    // ── Interstitial on Complete ─────────────────────────────────────────────

    /**
     * Call when the user finishes content (marks topic done, completes quiz).
     * Shows an interstitial if the cooldown has passed.
     */
    async onContentCompleted(): Promise<void> {
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
    }
}
