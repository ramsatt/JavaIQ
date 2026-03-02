import { Injectable, effect, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly THEME_KEY = 'app-theme';
  theme = signal<'light' | 'dark'>(this.getInitialTheme());

  constructor() {
    effect(() => this.applyTheme(this.theme()));
  }

  toggle() {
    this.theme.update(t => (t === 'light' ? 'dark' : 'light'));
  }

  private getInitialTheme(): 'light' | 'dark' {
    const saved = localStorage.getItem(this.THEME_KEY);
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  private applyTheme(theme: 'light' | 'dark') {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem(this.THEME_KEY, theme);
  }
}
