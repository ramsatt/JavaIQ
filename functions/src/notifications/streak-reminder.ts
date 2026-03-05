import * as admin from 'firebase-admin';
import { onSchedule } from 'firebase-functions/v2/scheduler';

/**
 * Sends a streak reminder at 8 PM IST to users who haven't been active today.
 * Runs every day at 8:00 PM IST (2:30 PM UTC).
 */
export const sendStreakReminder = onSchedule(
  { schedule: '30 14 * * *', timeZone: 'Asia/Kolkata' },
  async () => {
    const db = admin.firestore();
    const messaging = admin.messaging();

    const today = new Date().toISOString().split('T')[0];

    const snapshot = await db
      .collection('gamification')
      .where('lastActiveDate', '<', today)
      .get();

    if (snapshot.empty) return;

    const uids = snapshot.docs.map(d => d.id);

    // Fetch FCM tokens for these users
    const userSnaps = await Promise.all(
      uids.map(uid => db.doc(`users/${uid}`).get())
    );

    const messages: admin.messaging.Message[] = userSnaps
      .filter(snap => snap.exists && snap.data()?.['fcmToken'] && snap.data()?.['notificationsEnabled'] !== false)
      .map(snap => {
        const streak = snapshot.docs.find(d => d.id === snap.id)?.data()['streak'] ?? 0;
        return {
          token: snap.data()!['fcmToken'] as string,
          notification: {
            title: streak > 0 ? `🔥 Don't break your ${streak}-day streak!` : '📚 Come back to JavaIQ!',
            body: 'A quick question a day keeps the offer letter in play.'
          },
          data: { route: '/interview-questions' },
          android: { priority: 'high' as const },
          apns: { payload: { aps: { sound: 'default' } } }
        };
      });

    if (messages.length === 0) return;

    for (let i = 0; i < messages.length; i += 500) {
      await messaging.sendEach(messages.slice(i, i + 500));
    }
  }
);
