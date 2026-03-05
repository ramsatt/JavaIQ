import {
  BookmarksService
} from "./chunk-DHYW54IZ.js";
import "./chunk-YU6DDDO5.js";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonToolbar
} from "./chunk-PWZS7QID.js";
import {
  Router
} from "./chunk-CSRIGHDB.js";
import "./chunk-CSKJ3OEL.js";
import "./chunk-T5LCTCQ6.js";
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-L6VISU4K.js";
import "./chunk-PUOSPVYE.js";
import "./chunk-YDDVKQH4.js";
import "./chunk-URDQGTEH.js";
import "./chunk-3KNZXPVP.js";
import "./chunk-DZBRP4UD.js";
import "./chunk-7GPIVXJN.js";
import "./chunk-CEAAMTO4.js";
import "./chunk-256GWCFY.js";
import "./chunk-5EU4VLVR.js";
import "./chunk-GZ5BDCOT.js";
import "./chunk-HUY7ESWV.js";
import "./chunk-GXFEW35R.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/bookmarks/bookmarks-list.component.ts
var _forTrack0 = ($index, $item) => $item.type;
var _forTrack1 = ($index, $item) => $item.id;
function BookmarksListComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "i", 19);
    \u0275\u0275elementStart(2, "p", 20);
    \u0275\u0275text(3, "Nothing saved yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 21);
    \u0275\u0275text(5, "Tap the bookmark icon on any question, tutorial, or experience to save it here");
    \u0275\u0275elementEnd()();
  }
}
function BookmarksListComponent_Conditional_25_For_1_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function BookmarksListComponent_Conditional_25_For_1_For_8_Template_button_click_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.open(item_r2.route));
    });
    \u0275\u0275elementStart(1, "div", 29);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 30)(4, "span", 31);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 32);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "i", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const group_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r2.cfg(group_r4.type).color + "1a");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.cfg(group_r4.type).icon);
    \u0275\u0275styleProp("color", ctx_r2.cfg(group_r4.type).color);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.subtitle);
  }
}
function BookmarksListComponent_Conditional_25_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23);
    \u0275\u0275element(2, "i", 24);
    \u0275\u0275elementStart(3, "span", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 26);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(7, BookmarksListComponent_Conditional_25_For_1_For_8_Template, 9, 8, "button", 27, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.cfg(group_r4.type).icon);
    \u0275\u0275styleProp("color", ctx_r2.cfg(group_r4.type).color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.cfg(group_r4.type).label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(group_r4.items.length);
    \u0275\u0275advance();
    \u0275\u0275repeater(group_r4.items);
  }
}
function BookmarksListComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, BookmarksListComponent_Conditional_25_For_1_Template, 9, 6, "div", 22, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.groups());
  }
}
var TYPE_CONFIG = {
  tutorial: { label: "Tutorials", icon: "fa-solid fa-book-open", color: "#10b981" },
  interview: { label: "Interview Questions", icon: "fa-solid fa-circle-question", color: "#6366f1" },
  coding: { label: "Coding Questions", icon: "fa-solid fa-terminal", color: "#3b82f6" },
  leetcode: { label: "LeetCode", icon: "fa-solid fa-trophy", color: "#f59e0b" },
  experience: { label: "Experiences", icon: "fa-solid fa-microphone-lines", color: "#10b981" }
};
var TYPE_ORDER = ["tutorial", "interview", "coding", "leetcode", "experience"];
var BookmarksListComponent = class _BookmarksListComponent {
  bookmarks = inject(BookmarksService);
  router = inject(Router);
  groups = computed(() => {
    return TYPE_ORDER.map((type) => ({ type, items: this.bookmarks.getByType(type) })).filter((g) => g.items.length > 0);
  }, ...ngDevMode ? [{ debugName: "groups" }] : []);
  cfg(type) {
    return TYPE_CONFIG[type];
  }
  open(route) {
    this.router.navigate(route);
  }
  static \u0275fac = function BookmarksListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BookmarksListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookmarksListComponent, selectors: [["app-bookmarks-list"]], decls: 26, vars: 2, consts: [["translucent", "true", 1, "ion-no-border"], [1, "bm-toolbar"], ["slot", "start"], ["color", "light"], [1, "bm-content"], [1, "hero"], [1, "hero-glow", "g1"], [1, "hero-inner"], [1, "hero-badge"], [1, "fa-solid", "fa-bookmark", "hero-badge-icon"], [1, "hero-title"], [1, "hero-accent"], [1, "hero-sub"], [1, "hero-stats"], [1, "hero-stat"], [1, "stat-num"], [1, "stat-lbl"], [1, "body"], [1, "empty-state"], [1, "fa-solid", "fa-bookmark", "empty-icon"], [1, "empty-title"], [1, "empty-sub"], [1, "section"], [1, "section-head"], [1, "sh-icon"], [1, "sh-title"], [1, "sh-count"], [1, "bm-card"], [1, "bm-card", 3, "click"], [1, "bm-icon-wrap"], [1, "bm-info"], [1, "bm-title"], [1, "bm-sub"], [1, "fa-solid", "fa-chevron-right", "bm-arrow"]], template: function BookmarksListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2);
      \u0275\u0275element(3, "ion-menu-button", 3);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(4, "ion-content", 4)(5, "div", 5);
      \u0275\u0275element(6, "div", 6);
      \u0275\u0275elementStart(7, "div", 7)(8, "span", 8);
      \u0275\u0275element(9, "i", 9);
      \u0275\u0275text(10, " Saved Items ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "h1", 10);
      \u0275\u0275text(12, "Your ");
      \u0275\u0275elementStart(13, "span", 11);
      \u0275\u0275text(14, "Bookmarks");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "p", 12);
      \u0275\u0275text(16, "Everything you saved, organised by type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 13)(18, "div", 14)(19, "span", 15);
      \u0275\u0275text(20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "span", 16);
      \u0275\u0275text(22, "Saved");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(23, "div", 17);
      \u0275\u0275conditionalCreate(24, BookmarksListComponent_Conditional_24_Template, 6, 0, "div", 18)(25, BookmarksListComponent_Conditional_25_Template, 2, 0);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(20);
      \u0275\u0275textInterpolate(ctx.bookmarks.bookmarks().length);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.bookmarks.bookmarks().length === 0 ? 24 : 25);
    }
  }, dependencies: [IonContent, IonHeader, IonToolbar, IonButtons, IonMenuButton], styles: ["\n\n.bm-toolbar[_ngcontent-%COMP%] {\n  --background: #0b1120;\n  --color: white;\n  --border-style: none;\n}\n.bm-content[_ngcontent-%COMP%] {\n  --background: #0b1120;\n}\n.hero[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0 20px 28px;\n  overflow: hidden;\n}\n.hero-glow.g1[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -60px;\n  right: -40px;\n  width: 220px;\n  height: 220px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(99, 102, 241, 0.12) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.hero-inner[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.hero-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.65rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n  color: #6366f1;\n  background: rgba(99, 102, 241, 0.1);\n  border: 1px solid rgba(99, 102, 241, 0.25);\n  border-radius: 20px;\n  padding: 5px 14px;\n  margin-bottom: 14px;\n}\n.hero-badge-icon[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 900;\n  color: #e2e8f0;\n  letter-spacing: -0.03em;\n  line-height: 1.15;\n  margin: 0 0 8px;\n}\n.hero-accent[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #818cf8);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.hero-sub[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #64748b;\n  margin: 0 0 22px;\n}\n.hero-stats[_ngcontent-%COMP%] {\n  display: flex;\n  background: rgba(255, 255, 255, 0.035);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 14px;\n  padding: 14px 24px;\n}\n.hero-stat[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.stat-num[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.4rem;\n  font-weight: 800;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #818cf8);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.stat-lbl[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.58rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n.body[_ngcontent-%COMP%] {\n  padding: 8px 16px 100px;\n}\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.section-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 10px;\n}\n.sh-icon[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n}\n.sh-title[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #94a3b8;\n  flex: 1;\n}\n.sh-count[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 600;\n  color: #475569;\n}\n.bm-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n  text-align: left;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 14px;\n  padding: 12px 14px;\n  color: inherit;\n  cursor: pointer;\n  transition: all 0.2s;\n  margin-bottom: 8px;\n}\n.bm-card[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.055);\n  border-color: rgba(255, 255, 255, 0.12);\n  transform: translateY(-1px);\n}\n.bm-icon-wrap[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.85rem;\n}\n.bm-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.bm-title[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #e2e8f0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.bm-sub[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.65rem;\n  color: #64748b;\n  margin-top: 2px;\n}\n.bm-arrow[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  color: #334155;\n  flex-shrink: 0;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 80px 24px;\n  text-align: center;\n  gap: 12px;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  color: #334155;\n}\n.empty-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #94a3b8;\n  margin: 0;\n}\n.empty-sub[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #475569;\n  line-height: 1.6;\n  margin: 0;\n  max-width: 260px;\n}\n/*# sourceMappingURL=bookmarks-list.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookmarksListComponent, [{
    type: Component,
    args: [{ selector: "app-bookmarks-list", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IonContent, IonHeader, IonToolbar, IonButtons, IonMenuButton], template: `
    <ion-header class="ion-no-border" translucent="true">
      <ion-toolbar class="bm-toolbar">
        <ion-buttons slot="start">
          <ion-menu-button color="light"></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="bm-content">

      <div class="hero">
        <div class="hero-glow g1"></div>
        <div class="hero-inner">
          <span class="hero-badge">
            <i class="fa-solid fa-bookmark hero-badge-icon"></i>
            Saved Items
          </span>
          <h1 class="hero-title">Your <span class="hero-accent">Bookmarks</span></h1>
          <p class="hero-sub">Everything you saved, organised by type</p>
          <div class="hero-stats">
            <div class="hero-stat">
              <span class="stat-num">{{ bookmarks.bookmarks().length }}</span>
              <span class="stat-lbl">Saved</span>
            </div>
          </div>
        </div>
      </div>

      <div class="body">

        @if (bookmarks.bookmarks().length === 0) {
          <div class="empty-state">
            <i class="fa-solid fa-bookmark empty-icon"></i>
            <p class="empty-title">Nothing saved yet</p>
            <p class="empty-sub">Tap the bookmark icon on any question, tutorial, or experience to save it here</p>
          </div>
        } @else {
          @for (group of groups(); track group.type) {
            <div class="section">
              <div class="section-head">
                <i [class]="cfg(group.type).icon" [style.color]="cfg(group.type).color" class="sh-icon"></i>
                <span class="sh-title">{{ cfg(group.type).label }}</span>
                <span class="sh-count">{{ group.items.length }}</span>
              </div>
              @for (item of group.items; track item.id) {
                <button class="bm-card" (click)="open(item.route)">
                  <div class="bm-icon-wrap" [style.background]="cfg(group.type).color + '1a'">
                    <i [class]="cfg(group.type).icon" [style.color]="cfg(group.type).color"></i>
                  </div>
                  <div class="bm-info">
                    <span class="bm-title">{{ item.title }}</span>
                    <span class="bm-sub">{{ item.subtitle }}</span>
                  </div>
                  <i class="fa-solid fa-chevron-right bm-arrow"></i>
                </button>
              }
            </div>
          }
        }

      </div>
    </ion-content>
  `, styles: ["/* angular:styles/component:css;a43ee152b4e3fb9007872fcd0852591212c33cdb38d56a064a96d9bfa3537dbf;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/features/bookmarks/bookmarks-list.component.ts */\n.bm-toolbar {\n  --background: #0b1120;\n  --color: white;\n  --border-style: none;\n}\n.bm-content {\n  --background: #0b1120;\n}\n.hero {\n  position: relative;\n  padding: 0 20px 28px;\n  overflow: hidden;\n}\n.hero-glow.g1 {\n  position: absolute;\n  top: -60px;\n  right: -40px;\n  width: 220px;\n  height: 220px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(99, 102, 241, 0.12) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.hero-inner {\n  position: relative;\n  z-index: 1;\n}\n.hero-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.65rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n  color: #6366f1;\n  background: rgba(99, 102, 241, 0.1);\n  border: 1px solid rgba(99, 102, 241, 0.25);\n  border-radius: 20px;\n  padding: 5px 14px;\n  margin-bottom: 14px;\n}\n.hero-badge-icon {\n  font-size: 0.65rem;\n}\n.hero-title {\n  font-size: 1.8rem;\n  font-weight: 900;\n  color: #e2e8f0;\n  letter-spacing: -0.03em;\n  line-height: 1.15;\n  margin: 0 0 8px;\n}\n.hero-accent {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #818cf8);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.hero-sub {\n  font-size: 0.8rem;\n  color: #64748b;\n  margin: 0 0 22px;\n}\n.hero-stats {\n  display: flex;\n  background: rgba(255, 255, 255, 0.035);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 14px;\n  padding: 14px 24px;\n}\n.hero-stat {\n  text-align: center;\n}\n.stat-num {\n  display: block;\n  font-size: 1.4rem;\n  font-weight: 800;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #818cf8);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.stat-lbl {\n  display: block;\n  font-size: 0.58rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n.body {\n  padding: 8px 16px 100px;\n}\n.section {\n  margin-bottom: 24px;\n}\n.section-head {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 10px;\n}\n.sh-icon {\n  font-size: 0.7rem;\n}\n.sh-title {\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #94a3b8;\n  flex: 1;\n}\n.sh-count {\n  font-size: 0.65rem;\n  font-weight: 600;\n  color: #475569;\n}\n.bm-card {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n  text-align: left;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 14px;\n  padding: 12px 14px;\n  color: inherit;\n  cursor: pointer;\n  transition: all 0.2s;\n  margin-bottom: 8px;\n}\n.bm-card:hover {\n  background: rgba(255, 255, 255, 0.055);\n  border-color: rgba(255, 255, 255, 0.12);\n  transform: translateY(-1px);\n}\n.bm-icon-wrap {\n  flex-shrink: 0;\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.85rem;\n}\n.bm-info {\n  flex: 1;\n  min-width: 0;\n}\n.bm-title {\n  display: block;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #e2e8f0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.bm-sub {\n  display: block;\n  font-size: 0.65rem;\n  color: #64748b;\n  margin-top: 2px;\n}\n.bm-arrow {\n  font-size: 0.6rem;\n  color: #334155;\n  flex-shrink: 0;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 80px 24px;\n  text-align: center;\n  gap: 12px;\n}\n.empty-icon {\n  font-size: 2.5rem;\n  color: #334155;\n}\n.empty-title {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #94a3b8;\n  margin: 0;\n}\n.empty-sub {\n  font-size: 0.78rem;\n  color: #475569;\n  line-height: 1.6;\n  margin: 0;\n  max-width: 260px;\n}\n/*# sourceMappingURL=bookmarks-list.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookmarksListComponent, { className: "BookmarksListComponent", filePath: "src/app/features/bookmarks/bookmarks-list.component.ts", lineNumber: 211 });
})();
export {
  BookmarksListComponent
};
//# sourceMappingURL=chunk-EWP2YUR2.js.map
