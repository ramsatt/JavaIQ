import { Page } from '@playwright/test';

// ─── localStorage helpers ─────────────────────────────────────────────────────

/** Seed localStorage to simulate a logged-in user with baseline game state. */
export async function seedAuthUser(page: Page, overrides: Record<string, unknown> = {}) {
  await page.addInitScript((data) => {
    const defaults: Record<string, string> = {
      // Skip onboarding
      onboarding_done: 'true',
      // Gamification baseline
      game_xp: '0',
      game_streak: '0',
      game_best_streak: '0',
      game_last_active: new Date(Date.now() - 86_400_000).toDateString(), // yesterday
      // Theme
      'app-theme': 'dark',
      // Notifications off by default in tests
      notifications_enabled: 'false',
    };
    const merged = { ...defaults, ...data };
    for (const [key, value] of Object.entries(merged)) {
      localStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value));
    }
  }, overrides);
}

/** Seed localStorage to simulate a fresh (first-time) user. */
export async function seedFreshUser(page: Page) {
  await page.addInitScript(() => {
    localStorage.clear();
  });
}

/** Seed XP and streak values. */
export async function seedGameState(
  page: Page,
  opts: { xp?: number; streak?: number; bestStreak?: number } = {}
) {
  await page.addInitScript((o) => {
    if (o.xp !== undefined) localStorage.setItem('game_xp', String(o.xp));
    if (o.streak !== undefined) localStorage.setItem('game_streak', String(o.streak));
    if (o.bestStreak !== undefined) localStorage.setItem('game_best_streak', String(o.bestStreak));
  }, opts);
}

/** Seed a specific topic as already unlocked via AdGate. */
export async function seedUnlockedTopic(page: Page, topicId: string) {
  await page.addInitScript((id) => {
    const existing = JSON.parse(localStorage.getItem('adgate_unlocked') ?? '[]') as string[];
    if (!existing.includes(id)) existing.push(id);
    localStorage.setItem('adgate_unlocked', JSON.stringify(existing));
  }, topicId);
}

/** Seed a topic as visited (so second visit triggers interstitial path). */
export async function seedVisitedTopic(page: Page, topicId: string) {
  await page.addInitScript((id) => {
    const existing = JSON.parse(localStorage.getItem('adgate_visited_items') ?? '[]') as string[];
    if (!existing.includes(id)) existing.push(id);
    localStorage.setItem('adgate_visited_items', JSON.stringify(existing));
  }, topicId);
}

/** Seed daily challenge as already completed today. */
export async function seedChallengeCompleted(page: Page) {
  await page.addInitScript(() => {
    localStorage.setItem('dc_last_completed', new Date().toDateString());
    localStorage.setItem('dc_completed_count', '1');
  });
}

/** Seed the QOTD as already answered today. */
export async function seedQotdAnswered(page: Page) {
  await page.addInitScript(() => {
    localStorage.setItem('qotd_last_answered', new Date().toDateString());
  });
}

/** Seed last visited topic for notification context. */
export async function seedLastVisited(
  page: Page,
  courseSlug: string,
  topicSlug: string,
  topicTitle: string
) {
  await page.addInitScript(
    (data) => {
      localStorage.setItem('notif_last_visited', JSON.stringify(data));
    },
    { courseSlug, topicSlug, topicTitle }
  );
}

// ─── Firebase mock ────────────────────────────────────────────────────────────

/**
 * Intercept Firebase REST API and Firestore calls to prevent real network
 * requests during tests. Returns mocked user data for auth endpoints.
 */
export async function mockFirebase(page: Page) {
  // Mock Firebase Auth token exchange
  await page.route('**/identitytoolkit.googleapis.com/**', (route) => {
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        kind: 'identitytoolkit#VerifyPasswordResponse',
        localId: 'test-uid-001',
        email: 'test@javaiq.dev',
        displayName: 'Test User',
        idToken: 'mock-id-token',
        registered: true,
        refreshToken: 'mock-refresh-token',
        expiresIn: '3600',
      }),
    });
  });

  // Mock Firestore reads
  await page.route('**/firestore.googleapis.com/**', (route) => {
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ fields: {} }),
    });
  });

  // Mock Firebase FCM token endpoint
  await page.route('**/fcm.googleapis.com/**', (route) => {
    route.fulfill({ status: 200, body: '{"token": "mock-fcm-token"}' });
  });
}

// ─── Theme helpers ────────────────────────────────────────────────────────────

export async function setTheme(page: Page, theme: 'dark' | 'light') {
  await page.addInitScript((t) => {
    localStorage.setItem('app-theme', t);
  }, theme);
}
