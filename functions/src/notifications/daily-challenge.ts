import * as admin from 'firebase-admin';
import { onSchedule } from 'firebase-functions/v2/scheduler';

/**
 * Sends a daily challenge push notification to all opted-in users.
 * Runs every day at 9:00 AM IST (3:30 AM UTC).
 */
export const sendDailyChallenge = onSchedule(
  { schedule: '30 3 * * *', timeZone: 'Asia/Kolkata' },
  async () => {
    const db = admin.firestore();
    const messaging = admin.messaging();

    const snapshot = await db
      .collection('users')
      .where('notificationsEnabled', '!=', false)
      .where('fcmToken', '!=', null)
      .get();

    if (snapshot.empty) return;

    const messages: admin.messaging.Message[] = snapshot.docs
      .filter(d => d.data()['fcmToken'])
      .map(d => ({
        token: d.data()['fcmToken'] as string,
        notification: {
          title: '☕ Daily Java Challenge Ready!',
          body: 'Your daily interview question is waiting. Keep the streak alive!'
        },
        data: { route: '/daily-challenge' },
        android: { priority: 'high' as const },
        apns: { payload: { aps: { sound: 'default' } } }
      }));

    if (messages.length === 0) return;

    // Send in batches of 500 (FCM limit)
    for (let i = 0; i < messages.length; i += 500) {
      await messaging.sendEach(messages.slice(i, i + 500));
    }
  }
);
