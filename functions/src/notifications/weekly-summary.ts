import * as admin from 'firebase-admin';
import { onSchedule } from 'firebase-functions/v2/scheduler';

/**
 * Weekly summary notification — runs every Sunday at 6 PM IST (12:30 PM UTC).
 */
export const sendWeeklySummary = onSchedule(
  { schedule: '30 12 * * 0', timeZone: 'Asia/Kolkata' },
  async () => {
    const db = admin.firestore();
    const messaging = admin.messaging();

    // Cutoff = 7 days ago
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    const cutoffDate = weekAgo.toISOString().split('T')[0];

    const gamSnap = await db
      .collection('gamification')
      .where('lastActiveDate', '>=', cutoffDate)
      .get();

    if (gamSnap.empty) return;

    const messages: admin.messaging.Message[] = [];

    for (const doc of gamSnap.docs) {
      const uid = doc.id;
      const data = doc.data();

      const userSnap = await db.doc(`users/${uid}`).get();
      const token: string | undefined = userSnap.data()?.['fcmToken'];
      const enabled: boolean = userSnap.data()?.['notificationsEnabled'] !== false;

      if (!token || !enabled) continue;

      const xp = data['xp'] ?? 0;
      const streak = data['streak'] ?? 0;
      const name = userSnap.data()?.['displayName']?.split(' ')[0] ?? 'there';

      messages.push({
        token,
        notification: {
          title: `📊 ${name}'s Weekly Report`,
          body: `Streak: ${streak} days 🔥 | Total XP: ${xp} ⚡ — Great work this week!`
        },
        data: { route: '/leaderboard' },
        android: { priority: 'normal' as const },
        apns: { payload: { aps: { sound: 'default' } } }
      });
    }

    if (messages.length === 0) return;

    for (let i = 0; i < messages.length; i += 500) {
      await messaging.sendEach(messages.slice(i, i + 500));
    }
  }
);
