import { Injectable, inject, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Firestore, doc, updateDoc, getDoc } from '@angular/fire/firestore';
import { AuthService } from '../auth.service';

export type AppLang = 'en' | 'hi';

const LANG_KEY = 'app_language';

@Injectable({ providedIn: 'root' })
export class LangService {
  private translate = inject(TranslateService);
  private firestore  = inject(Firestore);
  private authSvc    = inject(AuthService);

  currentLang = signal<AppLang>('en');

  init(): void {
    this.translate.addLangs(['en', 'hi']);
    const stored = (localStorage.getItem(LANG_KEY) ?? 'en') as AppLang;
    this.apply(stored);
  }

  async setLang(lang: AppLang): Promise<void> {
    this.apply(lang);
    const uid = this.authSvc.user()?.uid;
    if (uid) {
      try {
        await updateDoc(doc(this.firestore, `users/${uid}`), { preferredLanguage: lang });
      } catch {
        // Non-critical — ignore Firestore write failures
      }
    }
  }

  async loadFromFirestore(uid: string): Promise<void> {
    try {
      const snap = await getDoc(doc(this.firestore, `users/${uid}`));
      const lang = snap.data()?.['preferredLanguage'] as AppLang | undefined;
      if (lang && (lang === 'en' || lang === 'hi')) {
        this.apply(lang);
      }
    } catch {
      // Fall back to stored preference
    }
  }

  private apply(lang: AppLang): void {
    this.translate.use(lang);
    this.currentLang.set(lang);
    localStorage.setItem(LANG_KEY, lang);
    document.documentElement.lang = lang;
  }
}
