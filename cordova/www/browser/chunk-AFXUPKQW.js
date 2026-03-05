import {
  AchievementService
} from "./chunk-44FD6GSA.js";
import "./chunk-7TOJMDEE.js";
import {
  DataService
} from "./chunk-CTHSCSLP.js";
import "./chunk-QFFHBMTJ.js";
import "./chunk-KHYVC3NX.js";
import {
  AuthService
} from "./chunk-YU6DDDO5.js";
import {
  CommonModule,
  Router
} from "./chunk-CSRIGHDB.js";
import "./chunk-QYTOD3XC.js";
import {
  Component,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-L6VISU4K.js";
import "./chunk-PAXKX5KU.js";

// src/app/leaderboard/leaderboard.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function LeaderboardComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 14);
    \u0275\u0275domListener("click", function LeaderboardComponent_For_13_Template_button_click_0_listener() {
      const p_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setPeriod(p_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("lb-tab-active", ctx_r2.activePeriod() === p_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.periodLabel(p_r2));
  }
}
function LeaderboardComponent_Conditional_14_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "img", 19);
  }
  if (rf & 2) {
    const u_r4 = \u0275\u0275nextContext();
    \u0275\u0275domProperty("src", u_r4.photoURL, \u0275\u0275sanitizeUrl);
  }
}
function LeaderboardComponent_Conditional_14_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const u_r4 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.initials(u_r4.displayName));
  }
}
function LeaderboardComponent_Conditional_14_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 15)(1, "div", 18);
    \u0275\u0275conditionalCreate(2, LeaderboardComponent_Conditional_14_Conditional_1_Conditional_2_Template, 1, 1, "img", 19)(3, LeaderboardComponent_Conditional_14_Conditional_1_Conditional_3_Template, 2, 1, "span", 20);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "div", 21);
    \u0275\u0275text(5, "\u{1F948}");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "span", 22);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "span", 23);
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(10, "div", 24);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const u_r4 = ctx;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("you", ctx_r2.isMe(u_r4.id));
    \u0275\u0275advance();
    \u0275\u0275conditional(u_r4.photoURL ? 2 : 3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.shortName(u_r4.displayName));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", u_r4.points, " XP");
  }
}
function LeaderboardComponent_Conditional_14_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "img", 19);
  }
  if (rf & 2) {
    const u_r5 = \u0275\u0275nextContext();
    \u0275\u0275domProperty("src", u_r5.photoURL, \u0275\u0275sanitizeUrl);
  }
}
function LeaderboardComponent_Conditional_14_Conditional_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const u_r5 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.initials(u_r5.displayName));
  }
}
function LeaderboardComponent_Conditional_14_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 16)(1, "div", 25);
    \u0275\u0275text(2, "\u{1F451}");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 26);
    \u0275\u0275conditionalCreate(4, LeaderboardComponent_Conditional_14_Conditional_2_Conditional_4_Template, 1, 1, "img", 19)(5, LeaderboardComponent_Conditional_14_Conditional_2_Conditional_5_Template, 2, 1, "span", 20);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "div", 21);
    \u0275\u0275text(7, "\u{1F947}");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "span", 22);
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "span", 23);
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(12, "div", 27);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const u_r5 = ctx;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("you", ctx_r2.isMe(u_r5.id));
    \u0275\u0275advance();
    \u0275\u0275conditional(u_r5.photoURL ? 4 : 5);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.shortName(u_r5.displayName));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", u_r5.points, " XP");
  }
}
function LeaderboardComponent_Conditional_14_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "img", 19);
  }
  if (rf & 2) {
    const u_r6 = \u0275\u0275nextContext();
    \u0275\u0275domProperty("src", u_r6.photoURL, \u0275\u0275sanitizeUrl);
  }
}
function LeaderboardComponent_Conditional_14_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const u_r6 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.initials(u_r6.displayName));
  }
}
function LeaderboardComponent_Conditional_14_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 17)(1, "div", 18);
    \u0275\u0275conditionalCreate(2, LeaderboardComponent_Conditional_14_Conditional_3_Conditional_2_Template, 1, 1, "img", 19)(3, LeaderboardComponent_Conditional_14_Conditional_3_Conditional_3_Template, 2, 1, "span", 20);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "div", 21);
    \u0275\u0275text(5, "\u{1F949}");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "span", 22);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "span", 23);
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(10, "div", 28);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const u_r6 = ctx;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("you", ctx_r2.isMe(u_r6.id));
    \u0275\u0275advance();
    \u0275\u0275conditional(u_r6.photoURL ? 2 : 3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.shortName(u_r6.displayName));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", u_r6.points, " XP");
  }
}
function LeaderboardComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 10);
    \u0275\u0275conditionalCreate(1, LeaderboardComponent_Conditional_14_Conditional_1_Template, 11, 5, "div", 15);
    \u0275\u0275conditionalCreate(2, LeaderboardComponent_Conditional_14_Conditional_2_Template, 13, 5, "div", 16);
    \u0275\u0275conditionalCreate(3, LeaderboardComponent_Conditional_14_Conditional_3_Template, 11, 5, "div", 17);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_1_0 = ctx_r2.podium()[1]) ? 1 : -1, tmp_1_0);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_2_0 = ctx_r2.podium()[0]) ? 2 : -1, tmp_2_0);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_3_0 = ctx_r2.podium()[2]) ? 3 : -1, tmp_3_0);
  }
}
function LeaderboardComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 12);
    \u0275\u0275domElement(1, "div", 29);
    \u0275\u0275domElementStart(2, "span");
    \u0275\u0275text(3, "Loading champions\u2026");
    \u0275\u0275domElementEnd()();
  }
}
function LeaderboardComponent_Conditional_17_For_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "img", 35);
  }
  if (rf & 2) {
    const u_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275domProperty("src", u_r7.photoURL, \u0275\u0275sanitizeUrl);
  }
}
function LeaderboardComponent_Conditional_17_For_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 36);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const u_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.initials(u_r7.displayName));
  }
}
function LeaderboardComponent_Conditional_17_For_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 39);
    \u0275\u0275text(1, "You");
    \u0275\u0275domElementEnd();
  }
}
function LeaderboardComponent_Conditional_17_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 32)(1, "span", 33);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 34);
    \u0275\u0275conditionalCreate(4, LeaderboardComponent_Conditional_17_For_1_Conditional_4_Template, 1, 1, "img", 35)(5, LeaderboardComponent_Conditional_17_For_1_Conditional_5_Template, 2, 1, "span", 36);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "div", 37)(7, "span", 38);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(9, LeaderboardComponent_Conditional_17_For_1_Conditional_9_Template, 2, 0, "span", 39);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "span", 40);
    \u0275\u0275domElement(11, "i", 41);
    \u0275\u0275text(12);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const u_r7 = ctx.$implicit;
    const \u0275$index_112_r8 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("lb-me", ctx_r2.isMe(u_r7.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_112_r8 + 4);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(u_r7.photoURL ? 4 : 5);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(u_r7.displayName || "Anonymous");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isMe(u_r7.id) ? 9 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", u_r7.points, " ");
  }
}
function LeaderboardComponent_Conditional_17_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 31)(1, "span", 42);
    \u0275\u0275text(2, "\u{1F3C5}");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p");
    \u0275\u0275text(4, "No activity yet \u2014 be the first!");
    \u0275\u0275domElementEnd()();
  }
}
function LeaderboardComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, LeaderboardComponent_Conditional_17_For_1_Template, 13, 7, "div", 30, _forTrack0);
    \u0275\u0275conditionalCreate(2, LeaderboardComponent_Conditional_17_Conditional_2_Template, 5, 0, "div", 31);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.rest());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.rest().length === 0 && ctx_r2.podium().length === 0 ? 2 : -1);
  }
}
function LeaderboardComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 13)(1, "span", 43);
    \u0275\u0275text(2, "Your rank");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 44);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "span", 45);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("#", ctx_r2.myRank());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.myPoints(), " XP");
  }
}
var PERIOD_LABELS = {
  alltime: "All Time",
  monthly: "This Month",
  weekly: "This Week"
};
var LeaderboardComponent = class _LeaderboardComponent {
  dataService = inject(DataService);
  authService = inject(AuthService);
  achSvc = inject(AchievementService);
  router = inject(Router);
  periods = ["alltime", "monthly", "weekly"];
  users = signal([], ...ngDevMode ? [{ debugName: "users" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  activePeriod = signal("alltime", ...ngDevMode ? [{ debugName: "activePeriod" }] : []);
  podium = computed(() => this.users().slice(0, 3), ...ngDevMode ? [{ debugName: "podium" }] : []);
  rest = computed(() => this.users().slice(3), ...ngDevMode ? [{ debugName: "rest" }] : []);
  myRank = computed(() => {
    const uid = this.authService.user()?.uid;
    if (!uid)
      return 0;
    const idx = this.users().findIndex((u) => u.id === uid);
    return idx >= 0 ? idx + 1 : 0;
  }, ...ngDevMode ? [{ debugName: "myRank" }] : []);
  myPoints = computed(() => {
    const uid = this.authService.user()?.uid;
    return this.users().find((u) => u.id === uid)?.points ?? 0;
  }, ...ngDevMode ? [{ debugName: "myPoints" }] : []);
  async ngOnInit() {
    await this.fetchLeaderboard();
  }
  async setPeriod(period) {
    this.activePeriod.set(period);
    await this.fetchLeaderboard();
  }
  async fetchLeaderboard() {
    this.loading.set(true);
    try {
      const data = await this.dataService.getLeaderboard(20, this.activePeriod());
      this.users.set(data);
      const rank = this.myRank();
      if (rank > 0)
        this.achSvc.checkLeaderboardAchievement(rank);
    } catch {
      this.users.set([]);
    } finally {
      this.loading.set(false);
    }
  }
  isMe(uid) {
    return this.authService.user()?.uid === uid;
  }
  isInList() {
    return this.myRank() > 0 && this.myRank() <= this.users().length;
  }
  periodLabel(p) {
    return PERIOD_LABELS[p] ?? p;
  }
  initials(name) {
    if (!name)
      return "?";
    return name.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  }
  shortName(name) {
    if (!name)
      return "Anonymous";
    return name.split(" ")[0];
  }
  goBack() {
    this.router.navigate(["/dashboard"]);
  }
  static \u0275fac = function LeaderboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LeaderboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LeaderboardComponent, selectors: [["app-leaderboard"]], decls: 19, vars: 3, consts: [[1, "lb-page"], [1, "lb-header"], [1, "back-btn", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "lb-title-block"], [1, "lb-title"], [1, "lb-sub"], [1, "lb-trophy"], [1, "lb-tabs"], [1, "lb-tab", 3, "lb-tab-active"], [1, "lb-podium"], [1, "lb-list"], [1, "lb-loading"], [1, "my-rank-bar"], [1, "lb-tab", 3, "click"], [1, "podium-col", "podium-2"], [1, "podium-col", "podium-1"], [1, "podium-col", "podium-3"], [1, "podium-avatar"], ["alt", "", 1, "avatar-img", 3, "src"], [1, "avatar-initials"], [1, "podium-medal"], [1, "podium-name"], [1, "podium-pts"], [1, "podium-bar", "bar-2"], [1, "podium-crown"], [1, "podium-avatar", "podium-avatar-1"], [1, "podium-bar", "bar-1"], [1, "podium-bar", "bar-3"], [1, "lb-spinner"], [1, "lb-row", 3, "lb-me"], [1, "lb-empty"], [1, "lb-row"], [1, "lb-rank"], [1, "lb-avatar-sm"], ["alt", "", 1, "avatar-img-sm", 3, "src"], [1, "avatar-initials-sm"], [1, "lb-info"], [1, "lb-name"], [1, "you-chip"], [1, "lb-pts"], [1, "bi", "bi-lightning-charge-fill"], [2, "font-size", "2.5rem"], [1, "my-rank-label"], [1, "my-rank-num"], [1, "my-rank-pts"]], template: function LeaderboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
      \u0275\u0275domListener("click", function LeaderboardComponent_Template_button_click_2_listener() {
        return ctx.goBack();
      });
      \u0275\u0275domElement(3, "i", 3);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "div", 4)(5, "h1", 5);
      \u0275\u0275text(6, "Leaderboard");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(7, "p", 6);
      \u0275\u0275text(8, "Global Java Champions");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(9, "div", 7);
      \u0275\u0275text(10, "\u{1F3C6}");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(11, "div", 8);
      \u0275\u0275repeaterCreate(12, LeaderboardComponent_For_13_Template, 2, 3, "button", 9, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(14, LeaderboardComponent_Conditional_14_Template, 4, 3, "div", 10);
      \u0275\u0275domElementStart(15, "div", 11);
      \u0275\u0275conditionalCreate(16, LeaderboardComponent_Conditional_16_Template, 4, 0, "div", 12)(17, LeaderboardComponent_Conditional_17_Template, 3, 1);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(18, LeaderboardComponent_Conditional_18_Template, 7, 2, "div", 13);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275repeater(ctx.periods);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.loading() && ctx.podium().length > 0 ? 14 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading() ? 16 : 17);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.myRank() > 0 && !ctx.isInList() ? 18 : -1);
    }
  }, dependencies: [CommonModule], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.lb-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      180deg,\n      #060e09 0%,\n      #0c1910 40%,\n      #040c06 100%);\n  color: #e4efe7;\n  font-family:\n    "Inter",\n    -apple-system,\n    sans-serif;\n  padding-bottom: 40px;\n}\n.lb-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 56px 20px 20px;\n  background:\n    linear-gradient(\n      180deg,\n      #020706 0%,\n      transparent 100%);\n}\n.back-btn[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.10);\n  color: rgba(255, 255, 255, 0.75);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.95rem;\n  flex-shrink: 0;\n  transition: all 0.18s;\n}\n.back-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.14);\n}\n.lb-title-block[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.lb-title[_ngcontent-%COMP%] {\n  margin: 0 0 2px;\n  font-size: 1.4rem;\n  font-weight: 900;\n  color: #fff;\n  letter-spacing: -0.03em;\n}\n.lb-sub[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.72rem;\n  color: rgba(255, 255, 255, 0.4);\n}\n.lb-trophy[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n}\n.lb-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  padding: 0 20px 16px;\n}\n.lb-tab[_ngcontent-%COMP%] {\n  padding: 6px 16px;\n  border-radius: 20px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  background: rgba(255, 255, 255, 0.05);\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 0.75rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.lb-tab-active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #d4a853,\n      #f5c84a);\n  border-color: transparent;\n  color: #1B1B1B;\n  box-shadow: 0 4px 16px rgba(212, 168, 83, 0.35);\n}\n.lb-podium[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  gap: 10px;\n  padding: 0 20px 24px;\n}\n.podium-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n}\n.podium-crown[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  margin-bottom: 2px;\n}\n.podium-avatar[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.08);\n  border: 2.5px solid rgba(255, 255, 255, 0.18);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.podium-avatar.you[_ngcontent-%COMP%] {\n  border-color: #d4a853;\n  box-shadow: 0 0 16px rgba(212, 168, 83, 0.4);\n}\n.podium-avatar-1[_ngcontent-%COMP%] {\n  width: 62px;\n  height: 62px;\n}\n.avatar-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.avatar-initials[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: rgba(255, 255, 255, 0.7);\n}\n.podium-medal[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  line-height: 1;\n}\n.podium-name[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.85);\n  max-width: 70px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  text-align: center;\n}\n.podium-pts[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 800;\n  color: #d4a853;\n}\n.podium-bar[_ngcontent-%COMP%] {\n  width: 72px;\n  border-radius: 6px 6px 0 0;\n}\n.bar-1[_ngcontent-%COMP%] {\n  height: 60px;\n  background:\n    linear-gradient(\n      180deg,\n      #d4a853 0%,\n      rgba(212, 168, 83, 0.3) 100%);\n}\n.bar-2[_ngcontent-%COMP%] {\n  height: 44px;\n  background:\n    linear-gradient(\n      180deg,\n      #94a3b8 0%,\n      rgba(148, 163, 184, 0.3) 100%);\n}\n.bar-3[_ngcontent-%COMP%] {\n  height: 32px;\n  background:\n    linear-gradient(\n      180deg,\n      #9b6b3a 0%,\n      rgba(155, 107, 58, 0.3) 100%);\n}\n.lb-list[_ngcontent-%COMP%] {\n  padding: 0 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.lb-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 14px;\n  padding: 12px 14px;\n  transition: all 0.18s;\n}\n.lb-row.lb-me[_ngcontent-%COMP%] {\n  background: rgba(212, 168, 83, 0.07);\n  border-color: rgba(212, 168, 83, 0.28);\n}\n.lb-rank[_ngcontent-%COMP%] {\n  width: 26px;\n  font-size: 0.82rem;\n  font-weight: 800;\n  color: rgba(255, 255, 255, 0.4);\n  text-align: center;\n  flex-shrink: 0;\n}\n.lb-avatar-sm[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.07);\n  border: 1.5px solid rgba(255, 255, 255, 0.12);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.avatar-img-sm[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.avatar-initials-sm[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 800;\n  color: rgba(255, 255, 255, 0.65);\n}\n.lb-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  min-width: 0;\n}\n.lb-name[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.85);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.you-chip[_ngcontent-%COMP%] {\n  font-size: 0.55rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  background: rgba(212, 168, 83, 0.15);\n  color: #d4a853;\n  border: 1px solid rgba(212, 168, 83, 0.3);\n  border-radius: 5px;\n  padding: 2px 6px;\n  flex-shrink: 0;\n}\n.lb-pts[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 800;\n  color: #d4a853;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  flex-shrink: 0;\n}\n.lb-pts[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #f59e0b;\n}\n.lb-loading[_ngcontent-%COMP%], \n.lb-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px 0;\n  color: rgba(255, 255, 255, 0.35);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n.lb-spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid rgba(212, 168, 83, 0.12);\n  border-top-color: #d4a853;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.9s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.lb-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  margin: 0;\n}\n.my-rank-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 14px 16px 0;\n  padding: 12px 16px;\n  background: rgba(212, 168, 83, 0.07);\n  border: 1.5px solid rgba(212, 168, 83, 0.22);\n  border-radius: 14px;\n}\n.my-rank-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: rgba(255, 255, 255, 0.5);\n}\n.my-rank-num[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 900;\n  color: #d4a853;\n}\n.my-rank-pts[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.6);\n}\n/*# sourceMappingURL=leaderboard.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LeaderboardComponent, [{
    type: Component,
    args: [{ selector: "app-leaderboard", standalone: true, imports: [CommonModule], template: `
    <div class="lb-page">

      <!-- Header -->
      <div class="lb-header">
        <button class="back-btn" (click)="goBack()">
          <i class="bi bi-arrow-left"></i>
        </button>
        <div class="lb-title-block">
          <h1 class="lb-title">Leaderboard</h1>
          <p class="lb-sub">Global Java Champions</p>
        </div>
        <div class="lb-trophy">\u{1F3C6}</div>
      </div>

      <!-- Period tabs -->
      <div class="lb-tabs">
        @for (p of periods; track p) {
          <button class="lb-tab" [class.lb-tab-active]="activePeriod() === p"
                  (click)="setPeriod(p)">{{ periodLabel(p) }}</button>
        }
      </div>

      <!-- Podium (top 3) -->
      @if (!loading() && podium().length > 0) {
        <div class="lb-podium">
          <!-- 2nd place (left) -->
          @if (podium()[1]; as u) {
            <div class="podium-col podium-2">
              <div class="podium-avatar" [class.you]="isMe(u.id)">
                @if (u.photoURL) {
                  <img [src]="u.photoURL" class="avatar-img" alt="">
                } @else {
                  <span class="avatar-initials">{{ initials(u.displayName) }}</span>
                }
              </div>
              <div class="podium-medal">\u{1F948}</div>
              <span class="podium-name">{{ shortName(u.displayName) }}</span>
              <span class="podium-pts">{{ u.points }} XP</span>
              <div class="podium-bar bar-2"></div>
            </div>
          }

          <!-- 1st place (center, elevated) -->
          @if (podium()[0]; as u) {
            <div class="podium-col podium-1">
              <div class="podium-crown">\u{1F451}</div>
              <div class="podium-avatar podium-avatar-1" [class.you]="isMe(u.id)">
                @if (u.photoURL) {
                  <img [src]="u.photoURL" class="avatar-img" alt="">
                } @else {
                  <span class="avatar-initials">{{ initials(u.displayName) }}</span>
                }
              </div>
              <div class="podium-medal">\u{1F947}</div>
              <span class="podium-name">{{ shortName(u.displayName) }}</span>
              <span class="podium-pts">{{ u.points }} XP</span>
              <div class="podium-bar bar-1"></div>
            </div>
          }

          <!-- 3rd place (right) -->
          @if (podium()[2]; as u) {
            <div class="podium-col podium-3">
              <div class="podium-avatar" [class.you]="isMe(u.id)">
                @if (u.photoURL) {
                  <img [src]="u.photoURL" class="avatar-img" alt="">
                } @else {
                  <span class="avatar-initials">{{ initials(u.displayName) }}</span>
                }
              </div>
              <div class="podium-medal">\u{1F949}</div>
              <span class="podium-name">{{ shortName(u.displayName) }}</span>
              <span class="podium-pts">{{ u.points }} XP</span>
              <div class="podium-bar bar-3"></div>
            </div>
          }
        </div>
      }

      <!-- Rest of the list -->
      <div class="lb-list">
        @if (loading()) {
          <div class="lb-loading">
            <div class="lb-spinner"></div>
            <span>Loading champions\u2026</span>
          </div>
        } @else {
          @for (u of rest(); track u.id; let i = $index) {
            <div class="lb-row" [class.lb-me]="isMe(u.id)">
              <span class="lb-rank">{{ i + 4 }}</span>
              <div class="lb-avatar-sm">
                @if (u.photoURL) {
                  <img [src]="u.photoURL" class="avatar-img-sm" alt="">
                } @else {
                  <span class="avatar-initials-sm">{{ initials(u.displayName) }}</span>
                }
              </div>
              <div class="lb-info">
                <span class="lb-name">{{ u.displayName || 'Anonymous' }}</span>
                @if (isMe(u.id)) {
                  <span class="you-chip">You</span>
                }
              </div>
              <span class="lb-pts">
                <i class="bi bi-lightning-charge-fill"></i> {{ u.points }}
              </span>
            </div>
          }

          @if (rest().length === 0 && podium().length === 0) {
            <div class="lb-empty">
              <span style="font-size:2.5rem">\u{1F3C5}</span>
              <p>No activity yet \u2014 be the first!</p>
            </div>
          }
        }
      </div>

      <!-- Your rank callout (if outside top 20) -->
      @if (myRank() > 0 && !isInList()) {
        <div class="my-rank-bar">
          <span class="my-rank-label">Your rank</span>
          <span class="my-rank-num">#{{ myRank() }}</span>
          <span class="my-rank-pts">{{ myPoints() }} XP</span>
        </div>
      }

    </div>
  `, styles: ['/* angular:styles/component:css;d4b37e8d74f53915594c418625ceac50783a8b6b5de56374f4eedd268156af18;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/leaderboard/leaderboard.component.ts */\n:host {\n  display: block;\n}\n.lb-page {\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      180deg,\n      #060e09 0%,\n      #0c1910 40%,\n      #040c06 100%);\n  color: #e4efe7;\n  font-family:\n    "Inter",\n    -apple-system,\n    sans-serif;\n  padding-bottom: 40px;\n}\n.lb-header {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 56px 20px 20px;\n  background:\n    linear-gradient(\n      180deg,\n      #020706 0%,\n      transparent 100%);\n}\n.back-btn {\n  width: 38px;\n  height: 38px;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.10);\n  color: rgba(255, 255, 255, 0.75);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.95rem;\n  flex-shrink: 0;\n  transition: all 0.18s;\n}\n.back-btn:hover {\n  background: rgba(255, 255, 255, 0.14);\n}\n.lb-title-block {\n  flex: 1;\n}\n.lb-title {\n  margin: 0 0 2px;\n  font-size: 1.4rem;\n  font-weight: 900;\n  color: #fff;\n  letter-spacing: -0.03em;\n}\n.lb-sub {\n  margin: 0;\n  font-size: 0.72rem;\n  color: rgba(255, 255, 255, 0.4);\n}\n.lb-trophy {\n  font-size: 1.8rem;\n}\n.lb-tabs {\n  display: flex;\n  gap: 8px;\n  padding: 0 20px 16px;\n}\n.lb-tab {\n  padding: 6px 16px;\n  border-radius: 20px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  background: rgba(255, 255, 255, 0.05);\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 0.75rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.lb-tab-active {\n  background:\n    linear-gradient(\n      135deg,\n      #d4a853,\n      #f5c84a);\n  border-color: transparent;\n  color: #1B1B1B;\n  box-shadow: 0 4px 16px rgba(212, 168, 83, 0.35);\n}\n.lb-podium {\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  gap: 10px;\n  padding: 0 20px 24px;\n}\n.podium-col {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n}\n.podium-crown {\n  font-size: 1.4rem;\n  margin-bottom: 2px;\n}\n.podium-avatar {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.08);\n  border: 2.5px solid rgba(255, 255, 255, 0.18);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.podium-avatar.you {\n  border-color: #d4a853;\n  box-shadow: 0 0 16px rgba(212, 168, 83, 0.4);\n}\n.podium-avatar-1 {\n  width: 62px;\n  height: 62px;\n}\n.avatar-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.avatar-initials {\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: rgba(255, 255, 255, 0.7);\n}\n.podium-medal {\n  font-size: 1.4rem;\n  line-height: 1;\n}\n.podium-name {\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.85);\n  max-width: 70px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  text-align: center;\n}\n.podium-pts {\n  font-size: 0.65rem;\n  font-weight: 800;\n  color: #d4a853;\n}\n.podium-bar {\n  width: 72px;\n  border-radius: 6px 6px 0 0;\n}\n.bar-1 {\n  height: 60px;\n  background:\n    linear-gradient(\n      180deg,\n      #d4a853 0%,\n      rgba(212, 168, 83, 0.3) 100%);\n}\n.bar-2 {\n  height: 44px;\n  background:\n    linear-gradient(\n      180deg,\n      #94a3b8 0%,\n      rgba(148, 163, 184, 0.3) 100%);\n}\n.bar-3 {\n  height: 32px;\n  background:\n    linear-gradient(\n      180deg,\n      #9b6b3a 0%,\n      rgba(155, 107, 58, 0.3) 100%);\n}\n.lb-list {\n  padding: 0 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.lb-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 14px;\n  padding: 12px 14px;\n  transition: all 0.18s;\n}\n.lb-row.lb-me {\n  background: rgba(212, 168, 83, 0.07);\n  border-color: rgba(212, 168, 83, 0.28);\n}\n.lb-rank {\n  width: 26px;\n  font-size: 0.82rem;\n  font-weight: 800;\n  color: rgba(255, 255, 255, 0.4);\n  text-align: center;\n  flex-shrink: 0;\n}\n.lb-avatar-sm {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.07);\n  border: 1.5px solid rgba(255, 255, 255, 0.12);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.avatar-img-sm {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.avatar-initials-sm {\n  font-size: 0.72rem;\n  font-weight: 800;\n  color: rgba(255, 255, 255, 0.65);\n}\n.lb-info {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  min-width: 0;\n}\n.lb-name {\n  font-size: 0.88rem;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.85);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.you-chip {\n  font-size: 0.55rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  background: rgba(212, 168, 83, 0.15);\n  color: #d4a853;\n  border: 1px solid rgba(212, 168, 83, 0.3);\n  border-radius: 5px;\n  padding: 2px 6px;\n  flex-shrink: 0;\n}\n.lb-pts {\n  font-size: 0.82rem;\n  font-weight: 800;\n  color: #d4a853;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  flex-shrink: 0;\n}\n.lb-pts .bi {\n  font-size: 0.7rem;\n  color: #f59e0b;\n}\n.lb-loading,\n.lb-empty {\n  text-align: center;\n  padding: 48px 0;\n  color: rgba(255, 255, 255, 0.35);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n.lb-spinner {\n  width: 36px;\n  height: 36px;\n  border: 3px solid rgba(212, 168, 83, 0.12);\n  border-top-color: #d4a853;\n  border-radius: 50%;\n  animation: spin 0.9s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.lb-empty p {\n  font-size: 0.82rem;\n  margin: 0;\n}\n.my-rank-bar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 14px 16px 0;\n  padding: 12px 16px;\n  background: rgba(212, 168, 83, 0.07);\n  border: 1.5px solid rgba(212, 168, 83, 0.22);\n  border-radius: 14px;\n}\n.my-rank-label {\n  font-size: 0.72rem;\n  color: rgba(255, 255, 255, 0.5);\n}\n.my-rank-num {\n  font-size: 1.1rem;\n  font-weight: 900;\n  color: #d4a853;\n}\n.my-rank-pts {\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.6);\n}\n/*# sourceMappingURL=leaderboard.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LeaderboardComponent, { className: "LeaderboardComponent", filePath: "src/app/leaderboard/leaderboard.component.ts", lineNumber: 386 });
})();
export {
  LeaderboardComponent
};
//# sourceMappingURL=chunk-AFXUPKQW.js.map
