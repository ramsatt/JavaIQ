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

    const tokens: string[] = snapshot.docs.map(d => d.data()['fcmToken'] as string);

    // Send in batches of 500 (FCM limit) and clean up stale tokens
    for (let i = 0; i < messages.length; i += 500) {
      const batchMessages = messages.slice(i, i + 500);
      const batchTokens   = tokens.slice(i, i + 500);
      const response = await messaging.sendEach(batchMessages);

      // Remove invalid/unregistered tokens from Firestore
      const staleUids: Promise<void>[] = [];
      response.responses.forEach((res, idx) => {
        if (!res.success) {
          const code = (res.error as any)?.code ?? '';
          if (
            code === 'messaging/invalid-registration-token' ||
            code === 'messaging/registration-token-not-registered'
          ) {
            const staleToken = batchTokens[idx];
            const docRef = snapshot.docs.find(d => d.data()['fcmToken'] === staleToken)?.ref;
            if (docRef) {
              staleUids.push(
                docRef.update({ fcmToken: admin.firestore.FieldValue.delete() })
              );
            }
          }
        }
      });
      await Promise.all(staleUids);
    }
  }
);
