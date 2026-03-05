import {
  Injectable,
  effect,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-L6VISU4K.js";

// src/app/theme.service.ts
var ThemeService = class _ThemeService {
  THEME_KEY = "app-theme";
  theme = signal(this.getInitialTheme(), ...ngDevMode ? [{ debugName: "theme" }] : []);
  constructor() {
    effect(() => this.applyTheme(this.theme()));
  }
  toggle() {
    this.theme.update((t) => t === "light" ? "dark" : "light");
  }
  getInitialTheme() {
    const saved = localStorage.getItem(this.THEME_KEY);
    if (saved === "light" || saved === "dark")
      return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  applyTheme(theme) {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem(this.THEME_KEY, theme);
  }
  static \u0275fac = function ThemeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ThemeService, factory: _ThemeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

export {
  ThemeService
};
//# sourceMappingURL=chunk-I4GECOKO.js.map
