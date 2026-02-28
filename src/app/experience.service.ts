import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collection,
  query,
  where,
  orderBy,
  limit,
  getDocs,
  doc,
  setDoc,
  serverTimestamp
} from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { InterviewExperience, ExperienceDifficulty, ExperienceResult } from './data/experience.model';
import { CURATED_EXPERIENCES } from './data/experiences/curated-experiences';

export interface ExperienceFilters {
  company?: string;
  difficulty?: ExperienceDifficulty;
  result?: ExperienceResult;
  tag?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private firestore = inject(Firestore);
  private authService = inject(AuthService);

  async getExperiences(filters?: ExperienceFilters): Promise<InterviewExperience[]> {
    // Start with curated experiences
    let results: InterviewExperience[] = [...CURATED_EXPERIENCES];

    // Fetch approved community experiences from Firestore
    try {
      const expRef = collection(this.firestore, 'experiences');
      const q = query(
        expRef,
        where('approved', '==', true),
        orderBy('createdAt', 'desc'),
        limit(50)
      );
      const snap = await getDocs(q);
      const community = snap.docs.map(d => ({ id: d.id, ...d.data() } as InterviewExperience));
      results = [...results, ...community];
    } catch (e) {
      console.warn('Could not load community experiences from Firestore', e);
    }

    // Apply filters client-side
    if (filters?.company) {
      const q = filters.company.toLowerCase();
      results = results.filter(e => e.company.toLowerCase().includes(q));
    }
    if (filters?.difficulty) {
      results = results.filter(e => e.difficulty === filters.difficulty);
    }
    if (filters?.result) {
      results = results.filter(e => e.result === filters.result);
    }
    if (filters?.tag) {
      results = results.filter(e => e.tags.includes(filters.tag!));
    }

    return results;
  }

  getExperienceById(id: string): InterviewExperience | undefined {
    return CURATED_EXPERIENCES.find(e => e.id === id);
  }

  async submitExperience(
    data: Omit<InterviewExperience, 'id' | 'authorId' | 'authorName' | 'approved' | 'createdAt' | 'source'>
  ): Promise<string> {
    const user = this.authService.user();
    if (!user) throw new Error('Must be authenticated to submit');

    const expRef = collection(this.firestore, 'experiences');
    const docRef = doc(expRef);

    await setDoc(docRef, {
      ...data,
      id: docRef.id,
      source: 'community',
      authorId: user.uid,
      authorName: user.displayName || 'Anonymous',
      approved: false,
      createdAt: serverTimestamp()
    });

    return docRef.id;
  }
}
