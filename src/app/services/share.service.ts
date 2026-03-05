import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';

// Hide specifier from Vite static analysis to allow lazy native import
const dynamicImport = new Function('specifier', 'return import(specifier)');

@Injectable({ providedIn: 'root' })
export class ShareService {

  /**
   * Core share method.
   * Priority: Capacitor Share (native) → Web Share API → clipboard copy.
   */
  async shareText(title: string, text: string, url?: string): Promise<void> {
    // 1. Native (Android / iOS)
    if (Capacitor.isNativePlatform()) {
      try {
        const { Share } = await dynamicImport('@capacitor/share');
        await Share.share({ title, text, url, dialogTitle: title });
        return;
      } catch { /* fall through to web */ }
    }

    // 2. Web Share API (Chrome / Safari)
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({ title, text, url });
        return;
      } catch { /* user cancelled or not supported */ }
    }

    // 3. Clipboard fallback
    const content = url ? `${text}\n${url}` : text;
    try {
      await navigator.clipboard.writeText(content);
    } catch { /* silent — clipboard blocked */ }
  }

  /** Share an unlocked achievement badge. */
  shareAchievement(title: string, description: string): Promise<void> {
    return this.shareText(
      `🏆 Achievement Unlocked: ${title}`,
      `I just unlocked "${title}" on JavaIQ!\n${description}\n\n#JavaIQ #Java #Coding`
    );
  }

  /** Share a daily challenge result. */
  shareDailyResult(score: number, total: number, xp: number): Promise<void> {
    const emoji = score === total ? '🏆' : score >= Math.ceil(total / 2) ? '🎉' : '💪';
    return this.shareText(
      'JavaIQ Daily Challenge',
      `${emoji} I scored ${score}/${total} on today's Java Daily Challenge and earned +${xp} XP!\nCan you beat that? #JavaIQ #Java`
    );
  }

  /** Share a course completion certificate. */
  shareCertificate(courseName: string): Promise<void> {
    return this.shareText(
      `JavaIQ Certificate — ${courseName}`,
      `I just completed "${courseName}" on JavaIQ and earned my certificate! 🎓\n#JavaIQ #Java #Learning`
    );
  }
}
