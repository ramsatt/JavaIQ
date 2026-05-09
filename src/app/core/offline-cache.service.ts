import { Injectable, signal } from '@angular/core';
import { Question } from '../data/question.model';

const CACHE_KEY       = 'javaiq_cached_questions';
const CACHE_TS_KEY    = 'javaiq_cache_timestamp';
const CACHE_TTL_MS    = 24 * 60 * 60 * 1000; // 24 hours

@Injectable({ providedIn: 'root' })
export class OfflineCacheService {
  /** Reflects current network status. */
  isOnline = signal<boolean>(navigator.onLine);

  /** True once the warm cache has been written this session. */
  cacheReady = signal<boolean>(false);

  constructor() {
    window.addEventListener('online',  () => this.isOnline.set(true));
    window.addEventListener('offline', () => this.isOnline.set(false));
  }

  /** Returns true if the existing cache is older than CACHE_TTL_MS. */
  isCacheStale(): boolean {
    const ts = parseInt(localStorage.getItem(CACHE_TS_KEY) ?? '0', 10);
    return Date.now() - ts > CACHE_TTL_MS;
  }

  /**
   * Serialize the top 50 questions into localStorage.
   * Called from AppComponent when online and cache is stale.
   */
  warmCache(questions: Question[]): void {
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify(questions.slice(0, 50)));
      localStorage.setItem(CACHE_TS_KEY, String(Date.now()));
      this.cacheReady.set(true);
    } catch {
      // Storage quota exceeded — skip silently
    }
  }

  /** Returns cached questions, or an empty array if no cache exists. */
  getCachedQuestions(): Question[] {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return [];
    try {
      return JSON.parse(raw) as Question[];
    } catch {
      return [];
    }
  }
}
