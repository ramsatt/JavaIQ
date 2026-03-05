import {
  Capacitor
} from "./chunk-QYTOD3XC.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-L6VISU4K.js";

// src/app/services/share.service.ts
var dynamicImport = new Function("specifier", "return import(specifier)");
var ShareService = class _ShareService {
  /**
   * Core share method.
   * Priority: Capacitor Share (native) → Web Share API → clipboard copy.
   */
  async shareText(title, text, url) {
    if (Capacitor.isNativePlatform()) {
      try {
        const { Share } = await dynamicImport("@capacitor/share");
        await Share.share({ title, text, url, dialogTitle: title });
        return;
      } catch {
      }
    }
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, text, url });
        return;
      } catch {
      }
    }
    const content = url ? `${text}
${url}` : text;
    try {
      await navigator.clipboard.writeText(content);
    } catch {
    }
  }
  /** Share an unlocked achievement badge. */
  shareAchievement(title, description) {
    return this.shareText(`\u{1F3C6} Achievement Unlocked: ${title}`, `I just unlocked "${title}" on JavaIQ!
${description}

#JavaIQ #Java #Coding`);
  }
  /** Share a daily challenge result. */
  shareDailyResult(score, total, xp) {
    const emoji = score === total ? "\u{1F3C6}" : score >= Math.ceil(total / 2) ? "\u{1F389}" : "\u{1F4AA}";
    return this.shareText("JavaIQ Daily Challenge", `${emoji} I scored ${score}/${total} on today's Java Daily Challenge and earned +${xp} XP!
Can you beat that? #JavaIQ #Java`);
  }
  /** Share a course completion certificate. */
  shareCertificate(courseName) {
    return this.shareText(`JavaIQ Certificate \u2014 ${courseName}`, `I just completed "${courseName}" on JavaIQ and earned my certificate! \u{1F393}
#JavaIQ #Java #Learning`);
  }
  static \u0275fac = function ShareService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShareService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ShareService, factory: _ShareService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShareService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  ShareService
};
//# sourceMappingURL=chunk-2BOY2CH4.js.map
