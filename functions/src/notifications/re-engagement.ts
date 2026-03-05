import * as admin from 'firebase-admin';
import { onSchedule } from 'firebase-functions/v2/scheduler';

/**
 * Re-engagement notification for users inactive for 3+ days.
 * Runs every day at 10 AM IST (4:30 AM UTC).
 */
export const sendReEngagement = onSchedule(
  { schedule: '30 4 * * *', timeZone: 'Asia/Kolkata' },
  async () => {
    const db = admin.firestore();
    const messaging = admin.messaging();

    const threeDaysAgo = new Date();
    threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
    const cutoff = threeDaysAgo.toISOString().split('T')[0];

    const snapshot = await db
      .collection('gamification')
      .where('lastActiveDate', '<', cutoff)
      .get();

    if (snapshot.empty) return;

    const uids = snapshot.docs.map(d => d.id);

    const userSnaps = await Promise.all(
      uids.map(uid => db.doc(`users/${uid}`).get())
    );

    const MESSAGES = [
      { title: '👋 We miss you!', body: 'Your Java skills are waiting to be sharpened. Jump back in!' },
      { title: '💡 New questions added!', body: 'Fresh interview questions are ready for you in JavaIQ.' },
      { title: '🎯 Interview season is here!', body: 'Stay sharp — a few questions a day keeps the rejections away.' },
    ];

    const messages: admin.messaging.Message[] = userSnaps
      .filter(snap => snap.exists && snap.data()?.['fcmToken'] && snap.data()?.['notificationsEnabled'] !== false)
      .map((snap, i) => ({
        token: snap.data()!['fcmToken'] as string,
        notification: MESSAGES[i % MESSAGES.length],
        data: { route: '/tutorials' },
        android: { priority: 'normal' as const },
        apns: { payload: { aps: { sound: 'default' } } }
      }));

    if (messages.length === 0) return;

    for (let i = 0; i < messages.length; i += 500) {
      await messaging.sendEach(messages.slice(i, i + 500));
    }
  }
);
