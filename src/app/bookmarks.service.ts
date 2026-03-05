import { Injectable, inject, signal, effect } from '@angular/core';
import { Firestore, doc, updateDoc, getDoc, setDoc } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

export type BookmarkType = 'interview' | 'coding' | 'leetcode' | 'tutorial' | 'experience';

export interface Bookmark {
  id: string;           // e.g. "iq-42", "lc-1", "tut-java-fundamentals-ch1", "exp-amazon-sde2-2024"
  type: BookmarkType;
  title: string;
  subtitle: string;
  route: string[];
  savedAt: number;      // timestamp ms
}

const LOCAL_KEY = 'bookmarks_v1';

@Injectable({ providedIn: 'root' })
export class BookmarksService {
  private firestore = inject(Firestore);
  private authService = inject(AuthService);

  bookmarks = signal<Bookmark[]>([]);

  constructor() {
    effect(() => {
      const user = this.authService.user();
      if (user) {
        this.loadFromFirestore(user.uid);
      } else {
        this.loadFromLocal();
      }
    });
  }

  isBookmarked(id: string): boolean {
    return this.bookmarks().some(b => b.id === id);
  }

  async toggle(bookmark: Omit<Bookmark, 'savedAt'>): Promise<boolean> {
    const existing = this.bookmarks().findIndex(b => b.id === bookmark.id);
    let updated: Bookmark[];
    if (existing >= 0) {
      updated = this.bookmarks().filter(b => b.id !== bookmark.id);
    } else {
      updated = [{ ...bookmark, savedAt: Date.now() }, ...this.bookmarks()];
    }
    this.bookmarks.set(updated);
    this.saveLocal(updated);
    await this.syncFirestore(updated);
    return existing < 0; // returns true if now bookmarked
  }

  getByType(type: BookmarkType): Bookmark[] {
    return this.bookmarks().filter(b => b.type === type);
  }

  private loadFromLocal() {
    try {
      const raw = localStorage.getItem(LOCAL_KEY);
      this.bookmarks.set(raw ? JSON.parse(raw) : []);
    } catch {
      this.bookmarks.set([]);
    }
  }

  private saveLocal(bookmarks: Bookmark[]) {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(bookmarks));
  }

  private async loadFromFirestore(uid: string) {
    const ref = doc(this.firestore, `users/${uid}`);
    const snap = await getDoc(ref);
    if (snap.exists()) {
      const data = snap.data();
      const bm: Bookmark[] = data['bookmarks'] ?? [];
      this.bookmarks.set(bm);
      this.saveLocal(bm);
    } else {
      this.loadFromLocal();
    }
  }

  private async syncFirestore(bookmarks: Bookmark[]) {
    const user = this.authService.user();
    if (!user) return;
    const ref = doc(this.firestore, `users/${user.uid}`);
    await updateDoc(ref, { bookmarks }).catch(() =>
      setDoc(ref, { bookmarks }, { merge: true })
    );
  }
}
