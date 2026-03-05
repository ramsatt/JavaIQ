import * as admin from 'firebase-admin';
import { onDocumentWritten } from 'firebase-functions/v2/firestore';

/**
 * Fires when XP changes. Checks if the user levelled up and sends a push notification.
 */
export const onLevelUp = onDocumentWritten('gamification/{uid}', async (event) => {
  const before = event.data?.before?.data();
  const after = event.data?.after?.data();

  if (!before || !after) return;

  const levelBefore = Math.floor(Math.sqrt((before['xp'] ?? 0) / 100)) + 1;
  const levelAfter  = Math.floor(Math.sqrt((after['xp']  ?? 0) / 100)) + 1;

  if (levelAfter <= levelBefore) return; // No level-up

  const uid = event.params['uid'];
  const userSnap = await admin.firestore().doc(`users/${uid}`).get();
  const token: string | undefined = userSnap.data()?.['fcmToken'];
  const enabled: boolean = userSnap.data()?.['notificationsEnabled'] !== false;

  if (!token || !enabled) return;

  await admin.messaging().send({
    token,
    notification: {
      title: `🎉 Level ${levelAfter} Unlocked!`,
      body: `You reached Level ${levelAfter}! Keep going — the next level is within reach.`
    },
    data: { route: '/tutorials' },
    android: { priority: 'high' as const },
    apns: { payload: { aps: { sound: 'default' } } }
  });
});
