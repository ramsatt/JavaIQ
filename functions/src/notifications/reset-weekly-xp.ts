import * as admin from 'firebase-admin';
import { onSchedule } from 'firebase-functions/v2/scheduler';

const BATCH_LIMIT = 500;

/**
 * Resets weeklyXp to 0 for all leaderboard documents.
 * Runs every Sunday at 18:30 UTC (= Sunday midnight IST / Monday 00:00 IST).
 *
 * This gives the weekly leaderboard a clean slate each week.
 */
export const resetWeeklyXp = onSchedule(
  { schedule: '30 18 * * 0', timeZone: 'UTC' },
  async () => {
    const db = admin.firestore();
    const leaderRef = db.collection('leaderboard');

    let lastDoc: admin.firestore.DocumentSnapshot | undefined;
    let totalReset = 0;

    // Paginate to avoid hitting the 500-write batch limit in one pass
    while (true) {
      let q = leaderRef.orderBy('__name__').limit(BATCH_LIMIT);
      if (lastDoc) q = q.startAfter(lastDoc);

      const snap = await q.get();
      if (snap.empty) break;

      const batch = db.batch();
      snap.docs.forEach(doc => {
        batch.update(doc.ref, { weeklyXp: 0 });
      });
      await batch.commit();

      totalReset += snap.docs.length;
      lastDoc = snap.docs[snap.docs.length - 1];

      if (snap.docs.length < BATCH_LIMIT) break;
    }

    console.log(`[resetWeeklyXp] Reset weeklyXp for ${totalReset} leaderboard documents.`);
  }
);
