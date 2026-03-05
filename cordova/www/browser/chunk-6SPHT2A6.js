import {
  ShareService
} from "./chunk-2BOY2CH4.js";
import {
  AchievementService
} from "./chunk-44FD6GSA.js";
import "./chunk-7TOJMDEE.js";
import "./chunk-CTHSCSLP.js";
import "./chunk-QFFHBMTJ.js";
import "./chunk-KHYVC3NX.js";
import "./chunk-YU6DDDO5.js";
import {
  Router
} from "./chunk-CSRIGHDB.js";
import "./chunk-QYTOD3XC.js";
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-L6VISU4K.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/achievements/achievement-gallery.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AchievementGalleryComponent_For_13_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 14);
    \u0275\u0275domElement(1, "i", 19);
    \u0275\u0275domElementEnd();
  }
}
function AchievementGalleryComponent_For_13_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "button", 21);
    \u0275\u0275domListener("click", function AchievementGalleryComponent_For_13_Conditional_11_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const a_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.share(a_r2));
    });
    \u0275\u0275domElement(3, "i", 22);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const a_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.formatDate(a_r2.unlockedAt));
  }
}
function AchievementGalleryComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 11)(1, "div", 12);
    \u0275\u0275domElement(2, "i", 13);
    \u0275\u0275conditionalCreate(3, AchievementGalleryComponent_For_13_Conditional_3_Template, 2, 0, "div", 14);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "div", 15)(5, "span", 16);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "span", 17);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "span", 18);
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(11, AchievementGalleryComponent_For_13_Conditional_11_Template, 4, 1);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const a_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("badge-locked", !a_r2.unlockedAt);
    \u0275\u0275advance();
    \u0275\u0275styleProp("border-color", a_r2.unlockedAt ? a_r2.iconColor : "transparent");
    \u0275\u0275advance();
    \u0275\u0275classMap(a_r2.icon);
    \u0275\u0275styleProp("color", a_r2.unlockedAt ? a_r2.iconColor : "#94a3b8");
    \u0275\u0275advance();
    \u0275\u0275conditional(!a_r2.unlockedAt ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", ctx_r2.rarityColor(a_r2));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.rarityLabel(a_r2), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r2.description);
    \u0275\u0275advance();
    \u0275\u0275conditional(a_r2.unlockedAt ? 11 : -1);
  }
}
var RARITY_LABEL = {
  common: "Common",
  rare: "Rare",
  epic: "Epic",
  legendary: "Legendary"
};
var RARITY_COLOR = {
  common: "#6b7280",
  rare: "#3b82f6",
  epic: "#8b5cf6",
  legendary: "#d4a853"
};
var AchievementGalleryComponent = class _AchievementGalleryComponent {
  router = inject(Router);
  achSvc = inject(AchievementService);
  shareSvc = inject(ShareService);
  achievements = this.achSvc.achievements;
  total = computed(() => this.achievements().length, ...ngDevMode ? [{ debugName: "total" }] : []);
  unlockedCount = computed(() => this.achievements().filter((a) => !!a.unlockedAt).length, ...ngDevMode ? [{ debugName: "unlockedCount" }] : []);
  overallPct = computed(() => Math.round(this.unlockedCount() / this.total() * 100), ...ngDevMode ? [{ debugName: "overallPct" }] : []);
  back() {
    this.router.navigate(["/tutorials"]);
  }
  rarityLabel(a) {
    return RARITY_LABEL[a.rarity] ?? a.rarity;
  }
  rarityColor(a) {
    return RARITY_COLOR[a.rarity] ?? "#6b7280";
  }
  formatDate(iso) {
    return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  }
  share(a) {
    this.shareSvc.shareAchievement(a.title, a.description);
  }
  static \u0275fac = function AchievementGalleryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AchievementGalleryComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AchievementGalleryComponent, selectors: [["app-achievement-gallery"]], decls: 14, vars: 4, consts: [[1, "gallery-page"], [1, "gallery-header"], [1, "back-btn", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "header-text"], [1, "gallery-title"], [1, "gallery-sub"], [1, "overall-track"], [1, "overall-fill"], [1, "badge-grid"], [1, "badge-card", 3, "badge-locked"], [1, "badge-card"], [1, "badge-icon-wrap"], [1, "bi"], [1, "lock-overlay"], [1, "badge-info"], [1, "badge-rarity"], [1, "badge-name"], [1, "badge-desc"], [1, "bi", "bi-lock-fill", "lock-icon"], [1, "badge-date"], ["title", "Share achievement", 1, "share-btn", 3, "click"], [1, "bi", "bi-share-fill"]], template: function AchievementGalleryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
      \u0275\u0275domListener("click", function AchievementGalleryComponent_Template_button_click_2_listener() {
        return ctx.back();
      });
      \u0275\u0275domElement(3, "i", 3);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "div", 4)(5, "h1", 5);
      \u0275\u0275text(6, "Achievements");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(7, "p", 6);
      \u0275\u0275text(8);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(9, "div", 7);
      \u0275\u0275domElement(10, "div", 8);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(11, "div", 9);
      \u0275\u0275repeaterCreate(12, AchievementGalleryComponent_For_13_Template, 12, 15, "div", 10, _forTrack0);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate2("", ctx.unlockedCount(), " / ", ctx.total(), " unlocked");
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("width", ctx.overallPct(), "%");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.achievements());
    }
  }, styles: ["\n\n.gallery-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: var(--ion-background-color, #f8fafc);\n  padding: 0 0 40px;\n}\nhtml.dark[_nghost-%COMP%]   .gallery-page[_ngcontent-%COMP%], html.dark   [_nghost-%COMP%]   .gallery-page[_ngcontent-%COMP%] {\n  background: #0f172a;\n}\n.gallery-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 56px 20px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #1B4332,\n      #2D6A4F);\n}\n.back-btn[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.15);\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  flex-shrink: 0;\n}\n.header-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.gallery-title[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 900;\n  color: #fff;\n  margin: 0;\n}\n.gallery-sub[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.6);\n  margin: 0;\n}\n.overall-track[_ngcontent-%COMP%] {\n  height: 4px;\n  background: rgba(27, 67, 50, 0.15);\n}\n.overall-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #d4a853,\n      #f5c84a);\n  transition: width 0.6s ease;\n}\n.badge-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  padding: 20px 16px;\n}\n.badge-card[_ngcontent-%COMP%] {\n  background: var(--ion-card-background, #ffffff);\n  border-radius: 16px;\n  padding: 16px;\n  border: 1.5px solid rgba(0, 0, 0, 0.06);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  text-align: center;\n  transition: all 0.2s;\n}\nhtml.dark[_nghost-%COMP%]   .badge-card[_ngcontent-%COMP%], html.dark   [_nghost-%COMP%]   .badge-card[_ngcontent-%COMP%] {\n  background: #1a2332;\n  border-color: rgba(255, 255, 255, 0.06);\n}\n.badge-card.badge-locked[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  filter: grayscale(1);\n}\n.badge-icon-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  width: 56px;\n  height: 56px;\n  border-radius: 16px;\n  background: rgba(0, 0, 0, 0.04);\n  border: 2px solid transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\nhtml.dark[_nghost-%COMP%]   .badge-icon-wrap[_ngcontent-%COMP%], html.dark   [_nghost-%COMP%]   .badge-icon-wrap[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n}\n.badge-icon-wrap[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n}\n.lock-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.lock-icon[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: rgba(255, 255, 255, 0.8);\n}\n.badge-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.badge-rarity[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n}\n.badge-name[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 800;\n  color: #1a2e1a;\n}\nhtml.dark[_nghost-%COMP%]   .badge-name[_ngcontent-%COMP%], html.dark   [_nghost-%COMP%]   .badge-name[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.badge-desc[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #6b7280;\n  line-height: 1.4;\n}\nhtml.dark[_nghost-%COMP%]   .badge-desc[_ngcontent-%COMP%], html.dark   [_nghost-%COMP%]   .badge-desc[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.badge-date[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 600;\n  color: #10b981;\n  margin-top: 2px;\n}\n.share-btn[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  background: rgba(27, 67, 50, 0.08);\n  border: 1px solid rgba(27, 67, 50, 0.18);\n  border-radius: 8px;\n  color: #1B4332;\n  font-size: 0.72rem;\n  padding: 4px 10px;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  transition: all 0.18s;\n}\n.share-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(27, 67, 50, 0.16);\n}\nhtml.dark[_nghost-%COMP%]   .share-btn[_ngcontent-%COMP%], html.dark   [_nghost-%COMP%]   .share-btn[_ngcontent-%COMP%] {\n  background: rgba(82, 183, 136, 0.1);\n  border-color: rgba(82, 183, 136, 0.22);\n  color: #52b788;\n}\nhtml.dark[_nghost-%COMP%]   .share-btn[_ngcontent-%COMP%]:hover, html.dark   [_nghost-%COMP%]   .share-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(82, 183, 136, 0.18);\n}\n/*# sourceMappingURL=achievement-gallery.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AchievementGalleryComponent, [{
    type: Component,
    args: [{ selector: "app-achievement-gallery", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <div class="gallery-page">
      <!-- Header -->
      <div class="gallery-header">
        <button class="back-btn" (click)="back()">
          <i class="bi bi-arrow-left"></i>
        </button>
        <div class="header-text">
          <h1 class="gallery-title">Achievements</h1>
          <p class="gallery-sub">{{ unlockedCount() }} / {{ total() }} unlocked</p>
        </div>
      </div>

      <!-- Progress bar -->
      <div class="overall-track">
        <div class="overall-fill" [style.width.%]="overallPct()"></div>
      </div>

      <!-- Badge grid -->
      <div class="badge-grid">
        @for (a of achievements(); track a.id) {
          <div class="badge-card" [class.badge-locked]="!a.unlockedAt">
            <div class="badge-icon-wrap" [style.border-color]="a.unlockedAt ? a.iconColor : 'transparent'">
              <i class="bi" [class]="a.icon"
                 [style.color]="a.unlockedAt ? a.iconColor : '#94a3b8'"></i>
              @if (!a.unlockedAt) {
                <div class="lock-overlay">
                  <i class="bi bi-lock-fill lock-icon"></i>
                </div>
              }
            </div>

            <div class="badge-info">
              <span class="badge-rarity" [style.color]="rarityColor(a)">
                {{ rarityLabel(a) }}
              </span>
              <span class="badge-name">{{ a.title }}</span>
              <span class="badge-desc">{{ a.description }}</span>
              @if (a.unlockedAt) {
                <span class="badge-date">{{ formatDate(a.unlockedAt) }}</span>
                <button class="share-btn" (click)="share(a)" title="Share achievement">
                  <i class="bi bi-share-fill"></i>
                </button>
              }
            </div>
          </div>
        }
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;0e19b40fd8905d6609b20036c746499ede05f0b02bc70816837379e19172dd71;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/features/achievements/achievement-gallery.component.ts */\n.gallery-page {\n  min-height: 100vh;\n  background: var(--ion-background-color, #f8fafc);\n  padding: 0 0 40px;\n}\n:host-context(html.dark) .gallery-page {\n  background: #0f172a;\n}\n.gallery-header {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 56px 20px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #1B4332,\n      #2D6A4F);\n}\n.back-btn {\n  width: 38px;\n  height: 38px;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.15);\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  flex-shrink: 0;\n}\n.header-text {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.gallery-title {\n  font-size: 1.4rem;\n  font-weight: 900;\n  color: #fff;\n  margin: 0;\n}\n.gallery-sub {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.6);\n  margin: 0;\n}\n.overall-track {\n  height: 4px;\n  background: rgba(27, 67, 50, 0.15);\n}\n.overall-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #d4a853,\n      #f5c84a);\n  transition: width 0.6s ease;\n}\n.badge-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  padding: 20px 16px;\n}\n.badge-card {\n  background: var(--ion-card-background, #ffffff);\n  border-radius: 16px;\n  padding: 16px;\n  border: 1.5px solid rgba(0, 0, 0, 0.06);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  text-align: center;\n  transition: all 0.2s;\n}\n:host-context(html.dark) .badge-card {\n  background: #1a2332;\n  border-color: rgba(255, 255, 255, 0.06);\n}\n.badge-card.badge-locked {\n  opacity: 0.5;\n  filter: grayscale(1);\n}\n.badge-icon-wrap {\n  position: relative;\n  width: 56px;\n  height: 56px;\n  border-radius: 16px;\n  background: rgba(0, 0, 0, 0.04);\n  border: 2px solid transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n:host-context(html.dark) .badge-icon-wrap {\n  background: rgba(255, 255, 255, 0.05);\n}\n.badge-icon-wrap .bi {\n  font-size: 1.6rem;\n}\n.lock-overlay {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.lock-icon {\n  font-size: 0.9rem;\n  color: rgba(255, 255, 255, 0.8);\n}\n.badge-info {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.badge-rarity {\n  font-size: 0.6rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n}\n.badge-name {\n  font-size: 0.82rem;\n  font-weight: 800;\n  color: #1a2e1a;\n}\n:host-context(html.dark) .badge-name {\n  color: #e2e8f0;\n}\n.badge-desc {\n  font-size: 0.7rem;\n  color: #6b7280;\n  line-height: 1.4;\n}\n:host-context(html.dark) .badge-desc {\n  color: #94a3b8;\n}\n.badge-date {\n  font-size: 0.65rem;\n  font-weight: 600;\n  color: #10b981;\n  margin-top: 2px;\n}\n.share-btn {\n  margin-top: 6px;\n  background: rgba(27, 67, 50, 0.08);\n  border: 1px solid rgba(27, 67, 50, 0.18);\n  border-radius: 8px;\n  color: #1B4332;\n  font-size: 0.72rem;\n  padding: 4px 10px;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  transition: all 0.18s;\n}\n.share-btn:hover {\n  background: rgba(27, 67, 50, 0.16);\n}\n:host-context(html.dark) .share-btn {\n  background: rgba(82, 183, 136, 0.1);\n  border-color: rgba(82, 183, 136, 0.22);\n  color: #52b788;\n}\n:host-context(html.dark) .share-btn:hover {\n  background: rgba(82, 183, 136, 0.18);\n}\n/*# sourceMappingURL=achievement-gallery.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AchievementGalleryComponent, { className: "AchievementGalleryComponent", filePath: "src/app/features/achievements/achievement-gallery.component.ts", lineNumber: 255 });
})();
export {
  AchievementGalleryComponent
};
//# sourceMappingURL=chunk-6SPHT2A6.js.map
