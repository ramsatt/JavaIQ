import * as admin from 'firebase-admin';
import { onDocumentCreated } from 'firebase-functions/v2/firestore';

/**
 * Fires whenever a new document is created under `experiences/{docId}`.
 *
 * Community submissions arrive with `approved: false`. This function:
 *   1. Sends an email notification to the admin (logged for now — wire
 *      SendGrid / Firebase Extensions when ready).
 *   2. Auto-approves if the submission passes a basic quality gate
 *      (has at least 1 round, summary ≥ 50 chars, ≥ 1 tag).
 *
 * Curated entries (source === 'curated') are auto-approved immediately.
 */
export const onExperienceCreated = onDocumentCreated(
  'experiences/{docId}',
  async (event) => {
    const snap = event.data;
    if (!snap) return;

    const data = snap.data() as {
      source: string;
      rounds?: unknown[];
      summary?: string;
      tags?: string[];
      approved?: boolean;
    };

    // Already approved (e.g., curated entries seeded directly) — skip
    if (data.approved === true) return;

    const isCurated = data.source === 'curated';
    const passesQuality =
      Array.isArray(data.rounds) && data.rounds.length >= 1 &&
      typeof data.summary === 'string' && data.summary.trim().length >= 50 &&
      Array.isArray(data.tags) && data.tags.length >= 1;

    if (isCurated || passesQuality) {
      await admin.firestore()
        .collection('experiences')
        .doc(snap.id)
        .update({ approved: true });
      console.log(`[onExperienceCreated] Auto-approved: ${snap.id}`);
    } else {
      // Log for manual review — replace with SendGrid email when ready
      console.log(`[onExperienceCreated] Queued for review: ${snap.id}`, {
        source: data.source,
        rounds: data.rounds?.length ?? 0,
        summaryLen: data.summary?.length ?? 0,
        tags: data.tags?.length ?? 0,
      });
    }
  }
);
