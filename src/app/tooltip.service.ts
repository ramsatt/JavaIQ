import { Injectable, signal } from '@angular/core';

const STORAGE_KEY = 'shown_tooltips';

@Injectable({ providedIn: 'root' })
export class TooltipService {
  private shownIds = new Set<string>(this.loadShown());

  /** Returns true if the tooltip should be shown (first time only) */
  shouldShow(id: string): boolean {
    return !this.shownIds.has(id);
  }

  /** Mark a tooltip as shown so it won't appear again */
  markShown(id: string) {
    this.shownIds.add(id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(this.shownIds)));
  }

  private loadShown(): string[] {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]');
    } catch {
      return [];
    }
  }
}
