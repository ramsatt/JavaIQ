import { Injectable, effect, signal } from '@angular/core';

export type ThemePreference = 'system' | 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly THEME_KEY = 'app-theme';

  /** Stored preference — drives the segmented control in Settings */
  preference = signal<ThemePreference>(this.getInitialPreference());

  /** Resolved applied theme ('system' → actual OS value) */
  theme = signal<'light' | 'dark'>(this.resolve(this.getInitialPreference()));

  constructor() {
    effect(() => this.applyTheme(this.theme()));
  }

  setPreference(pref: ThemePreference): void {
    this.preference.set(pref);
    this.theme.set(this.resolve(pref));
    localStorage.setItem(this.THEME_KEY, pref);
  }

  /** Legacy binary toggle — kept for backwards compat */
  toggle(): void {
    this.setPreference(this.theme() === 'light' ? 'dark' : 'light');
  }

  private getInitialPreference(): ThemePreference {
    const saved = localStorage.getItem(this.THEME_KEY);
    if (saved === 'system' || saved === 'light' || saved === 'dark') return saved;
    return 'system';
  }

  private resolve(pref: ThemePreference): 'light' | 'dark' {
    if (pref === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return pref;
  }

  private applyTheme(theme: 'light' | 'dark'): void {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }
}
