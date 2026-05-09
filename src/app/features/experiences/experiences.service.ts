import { Injectable, inject, signal } from '@angular/core';
import {
  Firestore, collection, query, where,
  orderBy, getDocs, QueryDocumentSnapshot
} from '@angular/fire/firestore';
import { InterviewExperience } from '../../data/experience.model';
import { CURATED_EXPERIENCES } from '../../data/experiences/curated-experiences';

@Injectable({ providedIn: 'root' })
export class ExperiencesService {
  private firestore = inject(Firestore);

  /** Merged list: curated first, then approved community entries. */
  experiences = signal<InterviewExperience[]>(CURATED_EXPERIENCES);
  loading     = signal(false);
  loaded      = false;

  /**
   * Fetch approved community experiences from Firestore and merge them
   * with the curated list. Subsequent calls within the same session
   * are no-ops (curated data never changes, community entries are
   * appended once per session).
   */
  async loadCommunity(): Promise<void> {
    if (this.loaded) return;
    this.loading.set(true);
    try {
      const q = query(
        collection(this.firestore, 'experiences'),
        where('source', '==', 'community'),
        where('approved', '==', true),
        orderBy('createdAt', 'desc')
      );
      const snap = await getDocs(q);
      const community = snap.docs.map((d: QueryDocumentSnapshot) => ({
        id: d.id,
        ...d.data(),
      } as InterviewExperience));

      this.experiences.set([...CURATED_EXPERIENCES, ...community]);
      this.loaded = true;
    } catch {
      // Network error — curated list is still available as fallback
    } finally {
      this.loading.set(false);
    }
  }
}
