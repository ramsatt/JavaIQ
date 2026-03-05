import {
  AdGateService
} from "./chunk-JEJRJ2G2.js";
import "./chunk-4DYJ5SOT.js";
import "./chunk-ZI6SYS5B.js";
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
import "./chunk-3W5KDKG7.js";
import "./chunk-QYTOD3XC.js";
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
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
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
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

// src/app/features/experiences/exp-list.component.ts
var _forTrack0 = ($index, $item) => $item.val;
var _forTrack1 = ($index, $item) => $item.id;
function ExpListComponent_For_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 44);
    \u0275\u0275listener("click", function ExpListComponent_For_43_Template_button_click_0_listener() {
      const c_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setCompany(c_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("cpill-active", ctx_r2.selectedCompany() === c_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r2, " ");
  }
}
function ExpListComponent_For_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function ExpListComponent_For_50_Template_button_click_0_listener() {
      const d_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setDiff(d_r5.val));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("--chip-color", d_r5.color);
    \u0275\u0275classProp("schip-active", ctx_r2.selectedDiff() === d_r5.val);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", d_r5.label, " ");
  }
}
function ExpListComponent_For_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function ExpListComponent_For_56_Template_button_click_0_listener() {
      const r_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setResult(r_r7.val));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("--chip-color", r_r7.color);
    \u0275\u0275classProp("schip-active", ctx_r2.selectedResult() === r_r7.val);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r7.label, " ");
  }
}
function ExpListComponent_For_66_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("#", tag_r10);
  }
}
function ExpListComponent_For_66_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 65);
  }
}
function ExpListComponent_For_66_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 66);
  }
}
function ExpListComponent_For_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function ExpListComponent_For_66_Template_button_click_0_listener() {
      const exp_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openExp(exp_r9));
    });
    \u0275\u0275element(1, "div", 47);
    \u0275\u0275elementStart(2, "div", 48)(3, "div", 49);
    \u0275\u0275element(4, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 50)(6, "div", 51)(7, "div", 52)(8, "span", 53);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 54);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "span", 55);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 56)(15, "span", 57);
    \u0275\u0275element(16, "i", 58);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 57);
    \u0275\u0275element(19, "i", 59);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 60);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 61);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 62);
    \u0275\u0275repeaterCreate(26, ExpListComponent_For_66_For_27_Template, 2, 1, "span", 63, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 64);
    \u0275\u0275conditionalCreate(29, ExpListComponent_For_66_Conditional_29_Template, 1, 0, "i", 65)(30, ExpListComponent_For_66_Conditional_30_Template, 1, 0, "i", 66);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const exp_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", exp_r9.companyColor);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", exp_r9.companyBg);
    \u0275\u0275advance();
    \u0275\u0275classMap(exp_r9.companyIcon);
    \u0275\u0275styleProp("color", exp_r9.companyColor);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(exp_r9.company);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(exp_r9.role);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-r", exp_r9.result);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.resultLabel(exp_r9.result), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", exp_r9.rounds, " rounds ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", exp_r9.yoe, "y exp ");
    \u0275\u0275advance();
    \u0275\u0275attribute("data-d", exp_r9.difficulty);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", exp_r9.difficulty, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatDate(exp_r9.date));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(exp_r9.tags.slice(0, 3));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.isUnlocked(exp_r9.id) ? 29 : 30);
  }
}
function ExpListComponent_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275element(1, "i", 67);
    \u0275\u0275elementStart(2, "p", 68);
    \u0275\u0275text(3, "No stories match your filters");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 69);
    \u0275\u0275listener("click", function ExpListComponent_Conditional_67_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearFilters());
    });
    \u0275\u0275text(5, "Clear Filters");
    \u0275\u0275elementEnd()();
  }
}
var ExpListComponent = class _ExpListComponent {
  router = inject(Router);
  adGate = inject(AdGateService);
  companies = ["All", "Amazon", "Google", "Flipkart", "Microsoft", "Walmart", "J.P. Morgan", "Zomato", "Infosys", "Swiggy", "PayPal", "Uber", "PhonePe", "Paytm", "TCS", "Wipro", "Myntra"];
  difficulties = [
    { val: "all", label: "All", color: "#94a3b8" },
    { val: "easy", label: "Easy", color: "#10b981" },
    { val: "medium", label: "Medium", color: "#facc15" },
    { val: "hard", label: "Hard", color: "#f87171" }
  ];
  results = [
    { val: "all", label: "All", color: "#94a3b8" },
    { val: "offer", label: "Offer \u2713", color: "#10b981" },
    { val: "rejected", label: "Rejected", color: "#f87171" },
    { val: "pending", label: "Pending", color: "#facc15" }
  ];
  selectedCompany = signal("All", ...ngDevMode ? [{ debugName: "selectedCompany" }] : []);
  selectedDiff = signal("all", ...ngDevMode ? [{ debugName: "selectedDiff" }] : []);
  selectedResult = signal("all", ...ngDevMode ? [{ debugName: "selectedResult" }] : []);
  experiences = [
    {
      id: "exp-amazon-sde2-2024",
      company: "Amazon",
      companyIcon: "fa-brands fa-amazon",
      companyColor: "#f59e0b",
      companyBg: "rgba(245,158,11,0.12)",
      role: "SDE-2 (Java Backend)",
      yoe: 4,
      result: "offer",
      difficulty: "hard",
      rounds: 4,
      date: "2024-09-15",
      tags: ["java", "spring-boot", "microservices", "system-design", "lld"]
    },
    {
      id: "exp-google-swe3-2024",
      company: "Google",
      companyIcon: "fa-brands fa-google",
      companyColor: "#6366f1",
      companyBg: "rgba(99,102,241,0.12)",
      role: "Software Engineer L3",
      yoe: 2,
      result: "offer",
      difficulty: "hard",
      rounds: 5,
      date: "2024-07-20",
      tags: ["java", "algorithms", "data-structures", "system-design"]
    },
    {
      id: "exp-flipkart-sde2-2024",
      company: "Flipkart",
      companyIcon: "fa-solid fa-shopping-cart",
      companyColor: "#f97316",
      companyBg: "rgba(249,115,22,0.12)",
      role: "SDE-2 (Java Microservices)",
      yoe: 3,
      result: "offer",
      difficulty: "medium",
      rounds: 4,
      date: "2024-05-10",
      tags: ["java", "spring-boot", "kafka", "redis"]
    },
    {
      id: "exp-microsoft-sde2-2024",
      company: "Microsoft",
      companyIcon: "fa-brands fa-microsoft",
      companyColor: "#22d3ee",
      companyBg: "rgba(34,211,238,0.12)",
      role: "SDE-2 (Backend Java)",
      yoe: 4,
      result: "offer",
      difficulty: "medium",
      rounds: 4,
      date: "2024-03-22",
      tags: ["java", "system-design", "oop", "design-patterns", "lld"]
    },
    {
      id: "exp-walmart-se3-2024",
      company: "Walmart",
      companyIcon: "fa-solid fa-store",
      companyColor: "#3b82f6",
      companyBg: "rgba(59,130,246,0.12)",
      role: "Software Engineer 3 (Java)",
      yoe: 5,
      result: "offer",
      difficulty: "medium",
      rounds: 3,
      date: "2024-01-18",
      tags: ["java", "spring-boot", "elasticsearch", "database"]
    },
    {
      id: "exp-jpmorgan-javadev-2024",
      company: "J.P. Morgan",
      companyIcon: "fa-solid fa-building-columns",
      companyColor: "#8b5cf6",
      companyBg: "rgba(139,92,246,0.12)",
      role: "Java Developer (Associate)",
      yoe: 3,
      result: "offer",
      difficulty: "medium",
      rounds: 3,
      date: "2024-08-07",
      tags: ["java", "spring-boot", "multithreading", "concurrency"]
    },
    {
      id: "exp-zomato-sde1-2024",
      company: "Zomato",
      companyIcon: "fa-solid fa-utensils",
      companyColor: "#ef4444",
      companyBg: "rgba(239,68,68,0.12)",
      role: "SDE-1 (Java Backend)",
      yoe: 1,
      result: "offer",
      difficulty: "medium",
      rounds: 3,
      date: "2024-06-14",
      tags: ["java", "spring-boot", "algorithms", "lld"]
    },
    {
      id: "exp-swiggy-sde2-2024",
      company: "Swiggy",
      companyIcon: "fa-solid fa-bowl-food",
      companyColor: "#f97316",
      companyBg: "rgba(249,115,22,0.12)",
      role: "SDE-2 (Java Backend)",
      yoe: 3,
      result: "offer",
      difficulty: "medium",
      rounds: 5,
      date: "2024-10-03",
      tags: ["java", "spring-boot", "kafka", "redis", "lld"]
    },
    {
      id: "exp-paypal-javadev-2024",
      company: "PayPal",
      companyIcon: "fa-brands fa-paypal",
      companyColor: "#003087",
      companyBg: "rgba(0,48,135,0.18)",
      role: "Software Engineer II (Java)",
      yoe: 4,
      result: "offer",
      difficulty: "hard",
      rounds: 5,
      date: "2024-11-12",
      tags: ["java", "spring-boot", "payments", "security", "concurrency"]
    },
    {
      id: "exp-uber-sde2-2024",
      company: "Uber",
      companyIcon: "fa-solid fa-car",
      companyColor: "#e2e8f0",
      companyBg: "rgba(226,232,240,0.08)",
      role: "Software Engineer II (Backend Java)",
      yoe: 3,
      result: "offer",
      difficulty: "hard",
      rounds: 5,
      date: "2024-04-29",
      tags: ["java", "microservices", "system-design", "algorithms", "distributed-systems"]
    },
    {
      id: "exp-phonepe-sde2-2024",
      company: "PhonePe",
      companyIcon: "fa-solid fa-mobile-screen",
      companyColor: "#6d28d9",
      companyBg: "rgba(109,40,217,0.12)",
      role: "SDE-2 (Java Backend)",
      yoe: 3,
      result: "offer",
      difficulty: "medium",
      rounds: 5,
      date: "2024-12-10",
      tags: ["java", "spring-boot", "kafka", "payments", "lld"]
    },
    {
      id: "exp-infosys-seniordev-2024",
      company: "Infosys",
      companyIcon: "fa-solid fa-laptop-code",
      companyColor: "#10b981",
      companyBg: "rgba(16,185,129,0.12)",
      role: "Senior Developer (Java Full Stack)",
      yoe: 6,
      result: "offer",
      difficulty: "easy",
      rounds: 3,
      date: "2024-02-05",
      tags: ["java", "spring-boot", "hibernate", "rest-api"]
    },
    {
      id: "exp-google-l4-rejected-2024",
      company: "Google",
      companyIcon: "fa-brands fa-google",
      companyColor: "#6366f1",
      companyBg: "rgba(99,102,241,0.12)",
      role: "Software Engineer L4",
      yoe: 5,
      result: "rejected",
      difficulty: "hard",
      rounds: 5,
      date: "2024-08-14",
      tags: ["java", "algorithms", "system-design", "distributed-systems", "lld"]
    },
    {
      id: "exp-paytm-sde2-rejected-2024",
      company: "Paytm",
      companyIcon: "fa-solid fa-wallet",
      companyColor: "#0ea5e9",
      companyBg: "rgba(14,165,233,0.12)",
      role: "SDE-2 (Java Backend)",
      yoe: 3,
      result: "rejected",
      difficulty: "medium",
      rounds: 3,
      date: "2024-09-05",
      tags: ["java", "spring-boot", "payments", "multithreading"]
    },
    {
      id: "exp-tcs-seniordev-2024",
      company: "TCS",
      companyIcon: "fa-solid fa-building",
      companyColor: "#06b6d4",
      companyBg: "rgba(6,182,212,0.12)",
      role: "Senior Developer (Java)",
      yoe: 5,
      result: "offer",
      difficulty: "easy",
      rounds: 3,
      date: "2024-10-22",
      tags: ["java", "spring-boot", "hibernate", "rest-api", "microservices"]
    },
    {
      id: "exp-wipro-techlead-withdrew-2024",
      company: "Wipro",
      companyIcon: "fa-solid fa-network-wired",
      companyColor: "#a78bfa",
      companyBg: "rgba(167,139,250,0.12)",
      role: "Tech Lead (Java)",
      yoe: 8,
      result: "withdrew",
      difficulty: "easy",
      rounds: 2,
      date: "2024-11-08",
      tags: ["java", "spring-boot", "architecture", "team-lead"]
    },
    {
      id: "exp-myntra-sde2-pending-2024",
      company: "Myntra",
      companyIcon: "fa-solid fa-shirt",
      companyColor: "#f472b6",
      companyBg: "rgba(244,114,182,0.12)",
      role: "SDE-2 (Java Backend)",
      yoe: 3,
      result: "pending",
      difficulty: "medium",
      rounds: 3,
      date: "2024-12-18",
      tags: ["java", "spring-boot", "kafka", "redis", "lld"]
    }
  ];
  get offerCount() {
    return this.experiences.filter((e) => e.result === "offer").length;
  }
  filtered = computed(() => {
    const company = this.selectedCompany();
    const diff = this.selectedDiff();
    const result = this.selectedResult();
    return this.experiences.filter((e) => {
      if (company !== "All" && e.company !== company)
        return false;
      if (diff !== "all" && e.difficulty !== diff)
        return false;
      if (result !== "all" && e.result !== result)
        return false;
      return true;
    });
  }, ...ngDevMode ? [{ debugName: "filtered" }] : []);
  setCompany(c) {
    this.selectedCompany.set(c);
  }
  setDiff(d) {
    this.selectedDiff.set(d);
  }
  setResult(r) {
    this.selectedResult.set(r);
  }
  clearFilters() {
    this.selectedCompany.set("All");
    this.selectedDiff.set("all");
    this.selectedResult.set("all");
  }
  resultLabel(r) {
    const map = { offer: "Offer \u2713", rejected: "Rejected", pending: "Pending", withdrew: "Withdrew" };
    return map[r] ?? r;
  }
  formatDate(d) {
    const dt = new Date(d);
    return dt.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  }
  isUnlocked(id) {
    this.adGate.unlockedItems();
    return this.adGate.isItemUnlocked(`exp::${id}`);
  }
  submitExperience() {
    window.open("https://forms.gle/JavaIQExperience", "_blank", "noopener,noreferrer");
  }
  async openExp(exp) {
    const itemId = `exp::${exp.id}`;
    if (!this.adGate.isItemUnlocked(itemId)) {
      const allowed = await this.adGate.unlockItemWithAd(itemId, "this interview experience");
      if (!allowed)
        return;
    }
    this.router.navigate(["/experiences", exp.id]);
  }
  static \u0275fac = function ExpListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExpListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExpListComponent, selectors: [["app-exp-list"]], decls: 78, vars: 4, consts: [["translucent", "true", 1, "ion-no-border"], [1, "exp-toolbar"], ["slot", "start"], ["color", "light"], [1, "exp-content"], [1, "hero"], [1, "hero-glow", "g1"], [1, "hero-glow", "g2"], [1, "hero-inner"], [1, "hero-badge"], [1, "fa-solid", "fa-microphone-lines", "hero-badge-icon"], [1, "hero-title"], [1, "hero-accent"], [1, "hero-sub"], [1, "hero-stats"], [1, "hero-stat"], [1, "stat-num"], [1, "stat-lbl"], [1, "stat-div"], [1, "hero-disclaimer"], [1, "fa-solid", "fa-circle-info"], [1, "body"], [1, "filter-scroll"], [1, "cpill", 3, "cpill-active"], [1, "filter-row2"], [1, "filter-group"], [1, "filter-label"], [1, "filter-chips"], [1, "schip", 3, "schip-active", "--chip-color"], [1, "section-head"], [1, "sh-left"], [1, "fa-solid", "fa-briefcase", "sh-icon"], [1, "sh-title"], [1, "sh-count"], [1, "card-list"], [1, "exp-card"], [1, "empty-state"], [1, "cta-card"], [1, "cta-icon-wrap"], [1, "fa-solid", "fa-pen-to-square", "cta-icon"], [1, "cta-title"], [1, "cta-sub"], [1, "cta-btn", 3, "click"], [1, "fa-solid", "fa-plus"], [1, "cpill", 3, "click"], [1, "schip", 3, "click"], [1, "exp-card", 3, "click"], [1, "exp-accent"], [1, "exp-card-inner"], [1, "exp-logo"], [1, "exp-info"], [1, "exp-top"], [1, "exp-title-group"], [1, "exp-company"], [1, "exp-role"], [1, "result-badge"], [1, "exp-meta"], [1, "meta-pill"], [1, "fa-solid", "fa-rotate", "meta-icon"], [1, "fa-solid", "fa-user-tie", "meta-icon"], [1, "diff-badge"], [1, "exp-date"], [1, "tag-row"], [1, "tag-chip"], [1, "exp-arrow-container"], [1, "fa-solid", "fa-chevron-right", "exp-arrow"], [1, "fa-solid", "fa-lock", 2, "color", "#f59e0b", "font-size", "11px"], [1, "fa-solid", "fa-magnifying-glass", "empty-icon"], [1, "empty-text"], [1, "clear-btn", 3, "click"]], template: function ExpListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2);
      \u0275\u0275element(3, "ion-menu-button", 3);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(4, "ion-content", 4)(5, "div", 5);
      \u0275\u0275element(6, "div", 6)(7, "div", 7);
      \u0275\u0275elementStart(8, "div", 8)(9, "span", 9);
      \u0275\u0275element(10, "i", 10);
      \u0275\u0275text(11, " Real Interview Stories ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "h1", 11);
      \u0275\u0275text(13, "Learn From");
      \u0275\u0275element(14, "br");
      \u0275\u0275elementStart(15, "span", 12);
      \u0275\u0275text(16, "Real Experiences");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "p", 13);
      \u0275\u0275text(18, "Round-by-round breakdowns from Java developers at top companies");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 14)(20, "div", 15)(21, "span", 16);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "span", 17);
      \u0275\u0275text(24, "Stories");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(25, "div", 18);
      \u0275\u0275elementStart(26, "div", 15)(27, "span", 16);
      \u0275\u0275text(28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "span", 17);
      \u0275\u0275text(30, "Offers");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(31, "div", 18);
      \u0275\u0275elementStart(32, "div", 15)(33, "span", 16);
      \u0275\u0275text(34, "8+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "span", 17);
      \u0275\u0275text(36, "Companies");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(37, "p", 19);
      \u0275\u0275element(38, "i", 20);
      \u0275\u0275text(39, " Experiences shared by community members. Results may vary. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(40, "div", 21)(41, "div", 22);
      \u0275\u0275repeaterCreate(42, ExpListComponent_For_43_Template, 2, 3, "button", 23, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 24)(45, "div", 25)(46, "span", 26);
      \u0275\u0275text(47, "Difficulty");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 27);
      \u0275\u0275repeaterCreate(49, ExpListComponent_For_50_Template, 2, 5, "button", 28, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div", 25)(52, "span", 26);
      \u0275\u0275text(53, "Result");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "div", 27);
      \u0275\u0275repeaterCreate(55, ExpListComponent_For_56_Template, 2, 5, "button", 28, _forTrack0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(57, "div", 29)(58, "div", 30);
      \u0275\u0275element(59, "i", 31);
      \u0275\u0275elementStart(60, "span", 32);
      \u0275\u0275text(61, "Interview Stories");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "span", 33);
      \u0275\u0275text(63);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "div", 34);
      \u0275\u0275repeaterCreate(65, ExpListComponent_For_66_Template, 31, 18, "button", 35, _forTrack1);
      \u0275\u0275conditionalCreate(67, ExpListComponent_Conditional_67_Template, 6, 0, "div", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "div", 37)(69, "div", 38);
      \u0275\u0275element(70, "i", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "h3", 40);
      \u0275\u0275text(72, "Share Your Story");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "p", 41);
      \u0275\u0275text(74, "Help fellow Java developers by sharing your interview experience");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "button", 42);
      \u0275\u0275listener("click", function ExpListComponent_Template_button_click_75_listener() {
        return ctx.submitExperience();
      });
      \u0275\u0275element(76, "i", 43);
      \u0275\u0275text(77, " Submit Experience ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(22);
      \u0275\u0275textInterpolate(ctx.experiences.length);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.offerCount);
      \u0275\u0275advance(14);
      \u0275\u0275repeater(ctx.companies);
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.difficulties);
      \u0275\u0275advance(6);
      \u0275\u0275repeater(ctx.results);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1("", ctx.filtered().length, " stories");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.filtered());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.filtered().length === 0 ? 67 : -1);
    }
  }, dependencies: [IonContent, IonHeader, IonToolbar, IonButtons, IonMenuButton], styles: ["\n\n.exp-toolbar[_ngcontent-%COMP%] {\n  --background: #0b1120;\n  --color: white;\n  --border-style: none;\n}\n.exp-content[_ngcontent-%COMP%] {\n  --background: #0b1120;\n}\n.hero[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0 20px 28px;\n  overflow: hidden;\n}\n.hero-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n}\n.g1[_ngcontent-%COMP%] {\n  top: -60px;\n  right: -40px;\n  width: 220px;\n  height: 220px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(16, 185, 129, 0.12) 0%,\n      transparent 70%);\n}\n.g2[_ngcontent-%COMP%] {\n  bottom: -20px;\n  left: -20px;\n  width: 160px;\n  height: 160px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(99, 102, 241, 0.1) 0%,\n      transparent 70%);\n}\n.hero-inner[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.hero-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.65rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n  color: #10b981;\n  background: rgba(16, 185, 129, 0.1);\n  border: 1px solid rgba(16, 185, 129, 0.25);\n  border-radius: 20px;\n  padding: 5px 14px;\n  margin-bottom: 14px;\n}\n.hero-badge-icon[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 900;\n  color: #e2e8f0;\n  letter-spacing: -0.03em;\n  line-height: 1.15;\n  margin: 0 0 8px;\n}\n.hero-accent[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #34d399 60%,\n      #6ee7b7 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.hero-sub[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #64748b;\n  font-weight: 500;\n  margin: 0 0 22px;\n  line-height: 1.5;\n}\n.hero-stats[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  background: rgba(255, 255, 255, 0.035);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 14px;\n  padding: 14px 8px;\n}\n.hero-stat[_ngcontent-%COMP%] {\n  text-align: center;\n  flex: 1;\n}\n.stat-num[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.4rem;\n  font-weight: 800;\n  letter-spacing: -0.03em;\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #34d399);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.stat-lbl[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.58rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  margin-top: 2px;\n}\n.stat-div[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 24px;\n  background: rgba(255, 255, 255, 0.07);\n}\n.hero-disclaimer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.62rem;\n  color: #475569;\n  margin: 10px 0 0;\n  font-weight: 500;\n}\n.hero-disclaimer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  opacity: 0.7;\n}\n.body[_ngcontent-%COMP%] {\n  padding: 20px 16px 100px;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.filter-scroll[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  overflow-x: auto;\n  padding-bottom: 4px;\n  margin-bottom: 16px;\n  scrollbar-width: none;\n}\n.filter-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.cpill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 7px 16px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 20px;\n  color: #94a3b8;\n  font-size: 0.72rem;\n  font-weight: 600;\n  white-space: nowrap;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.cpill[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.07);\n  color: #e2e8f0;\n}\n.cpill-active[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.14) !important;\n  border-color: rgba(16, 185, 129, 0.3) !important;\n  color: #10b981 !important;\n}\n.filter-row2[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n}\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.filter-label[_ngcontent-%COMP%] {\n  font-size: 0.62rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #475569;\n}\n.filter-chips[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.schip[_ngcontent-%COMP%] {\n  padding: 5px 12px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 8px;\n  font-size: 0.65rem;\n  font-weight: 600;\n  color: #64748b;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.schip[_ngcontent-%COMP%]:hover {\n  color: #e2e8f0;\n  border-color: rgba(255, 255, 255, 0.15);\n}\n.schip-active[_ngcontent-%COMP%] {\n  background: rgba(from var(--chip-color, #10b981) r g b / 0.15) !important;\n  border-color: rgba(from var(--chip-color, #10b981) r g b / 0.35) !important;\n  color: var(--chip-color, #10b981) !important;\n}\n.section-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 14px;\n}\n.sh-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.sh-icon[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: #10b981;\n}\n.sh-title[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #94a3b8;\n}\n.sh-count[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 600;\n  color: #475569;\n}\n.card-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.exp-card[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  text-align: left;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 16px;\n  color: inherit;\n  overflow: hidden;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.exp-card[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.055);\n  border-color: rgba(255, 255, 255, 0.12);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);\n  transform: translateY(-2px);\n}\n.exp-card[_ngcontent-%COMP%]:active {\n  transform: scale(0.99);\n}\n.exp-accent[_ngcontent-%COMP%] {\n  height: 3px;\n}\n.exp-card-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  padding: 14px 14px 16px;\n}\n.exp-logo[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 46px;\n  height: 46px;\n  border-radius: 13px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n  margin-top: 2px;\n}\n.exp-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.exp-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 8px;\n  margin-bottom: 8px;\n}\n.exp-title-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.exp-company[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 800;\n  color: #e2e8f0;\n  letter-spacing: -0.01em;\n}\n.exp-role[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.result-badge[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 0.58rem;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 6px;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.result-badge[data-r=offer][_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.15);\n  color: #34d399;\n}\n.result-badge[data-r=rejected][_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  color: #f87171;\n}\n.result-badge[data-r=pending][_ngcontent-%COMP%] {\n  background: rgba(234, 179, 8, 0.15);\n  color: #facc15;\n}\n.result-badge[data-r=withdrew][_ngcontent-%COMP%] {\n  background: rgba(148, 163, 184, 0.15);\n  color: #94a3b8;\n}\n.exp-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n  margin-bottom: 8px;\n}\n.meta-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.6rem;\n  font-weight: 600;\n  color: #64748b;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 6px;\n  padding: 2px 8px;\n}\n.meta-icon[_ngcontent-%COMP%] {\n  font-size: 0.5rem;\n  opacity: 0.7;\n}\n.diff-badge[_ngcontent-%COMP%] {\n  font-size: 0.55rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  padding: 2px 8px;\n  border-radius: 5px;\n}\n.diff-badge[data-d=easy][_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.15);\n  color: #34d399;\n}\n.diff-badge[data-d=medium][_ngcontent-%COMP%] {\n  background: rgba(234, 179, 8, 0.15);\n  color: #facc15;\n}\n.diff-badge[data-d=hard][_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  color: #f87171;\n}\n.exp-date[_ngcontent-%COMP%] {\n  font-size: 0.58rem;\n  font-weight: 500;\n  color: #475569;\n  margin-left: auto;\n}\n.tag-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n  flex-wrap: wrap;\n}\n.tag-chip[_ngcontent-%COMP%] {\n  font-size: 0.58rem;\n  font-weight: 600;\n  color: #475569;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 5px;\n  padding: 2px 7px;\n}\n.exp-arrow-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  margin-top: 20px;\n}\n.exp-arrow[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 10px;\n  color: #334155;\n  margin-top: 0;\n  transition: all 0.2s;\n}\n.exp-card[_ngcontent-%COMP%]:hover   .exp-arrow[_ngcontent-%COMP%] {\n  color: #10b981;\n  transform: translateX(2px);\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px 20px;\n  background: rgba(255, 255, 255, 0.02);\n  border: 1px solid rgba(255, 255, 255, 0.05);\n  border-radius: 16px;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #334155;\n  margin-bottom: 12px;\n  display: block;\n}\n.empty-text[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #64748b;\n  margin: 0 0 16px;\n}\n.clear-btn[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  background: rgba(16, 185, 129, 0.12);\n  border: 1px solid rgba(16, 185, 129, 0.3);\n  border-radius: 10px;\n  color: #10b981;\n  font-size: 0.75rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.clear-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(16, 185, 129, 0.2);\n}\n.cta-card[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(16, 185, 129, 0.08),\n      rgba(99, 102, 241, 0.06));\n  border: 1px solid rgba(16, 185, 129, 0.2);\n  border-radius: 18px;\n  padding: 24px 20px;\n  text-align: center;\n}\n.cta-icon-wrap[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 14px;\n  background: rgba(16, 185, 129, 0.12);\n  border: 1px solid rgba(16, 185, 129, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 14px;\n}\n.cta-icon[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  color: #10b981;\n}\n.cta-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 800;\n  color: #e2e8f0;\n  margin: 0 0 6px;\n  letter-spacing: -0.01em;\n}\n.cta-sub[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n  margin: 0 0 18px;\n  line-height: 1.5;\n}\n.cta-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #059669);\n  border: none;\n  border-radius: 12px;\n  color: #fff;\n  font-size: 0.8rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n  box-shadow: 0 4px 14px rgba(16, 185, 129, 0.3);\n}\n.cta-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .exp-toolbar[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .exp-toolbar[_ngcontent-%COMP%] {\n  --background: #1B4332;\n  --color: white;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .exp-content[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .exp-content[_ngcontent-%COMP%] {\n  --background: #F5F7F2;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .hero[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .hero[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1B4332 0%,\n      #2D6A4F 55%,\n      #40916C 100%);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .hero-glow.g1[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .hero-glow.g1[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.08) 0%,\n      transparent 70%);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .hero-glow.g2[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .hero-glow.g2[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.06) 0%,\n      transparent 70%);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .hero-badge[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .hero-badge[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9);\n  background: rgba(255, 255, 255, 0.15);\n  border-color: rgba(255, 255, 255, 0.3);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .hero-title[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n  color: #ffffff;\n  -webkit-text-fill-color: #ffffff;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .hero-accent[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .hero-accent[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #86efac 0%,\n      #bbf7d0 60%,\n      #d1fae5 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .hero-sub[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .hero-sub[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.75);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .hero-stats[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .hero-stats[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.12);\n  border-color: rgba(255, 255, 255, 0.2);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .stat-num[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .stat-num[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #d1fae5,\n      #86efac);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .stat-lbl[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .stat-lbl[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.65);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .stat-div[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .stat-div[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .exp-card[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .exp-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-color: #D6DDD2;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .exp-card[_ngcontent-%COMP%]:hover, html:not(.dark)   [_nghost-%COMP%]   .exp-card[_ngcontent-%COMP%]:hover {\n  border-color: #B7CCBB;\n  box-shadow: 0 6px 20px rgba(27, 67, 50, 0.1);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .cta-card[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .cta-card[_ngcontent-%COMP%] {\n  background: rgba(27, 67, 50, 0.04);\n  border-color: rgba(27, 67, 50, 0.15);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .cta-title[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .cta-title[_ngcontent-%COMP%] {\n  color: #1B1B1B;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .cta-sub[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .cta-sub[_ngcontent-%COMP%] {\n  color: #52665A;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .cpill[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .cpill[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border-color: #D6DDD2 !important;\n  color: #52665A !important;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .cpill-active[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .cpill-active[_ngcontent-%COMP%] {\n  background: #1B4332 !important;\n  color: white !important;\n  border-color: #1B4332 !important;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .schip[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .schip[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border-color: #D6DDD2 !important;\n  color: #52665A !important;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .schip-active[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .schip-active[_ngcontent-%COMP%] {\n  background: #1B4332 !important;\n  color: white !important;\n  border-color: #1B4332 !important;\n}\n/*# sourceMappingURL=exp-list.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExpListComponent, [{
    type: Component,
    args: [{ selector: "app-exp-list", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IonContent, IonHeader, IonToolbar, IonButtons, IonMenuButton], template: `
    <ion-header class="ion-no-border" translucent="true">
      <ion-toolbar class="exp-toolbar">
        <ion-buttons slot="start">
          <ion-menu-button color="light"></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="exp-content">

      <!-- Hero -->
      <div class="hero">
        <div class="hero-glow g1"></div>
        <div class="hero-glow g2"></div>
        <div class="hero-inner">
          <span class="hero-badge">
            <i class="fa-solid fa-microphone-lines hero-badge-icon"></i>
            Real Interview Stories
          </span>
          <h1 class="hero-title">Learn From<br><span class="hero-accent">Real Experiences</span></h1>
          <p class="hero-sub">Round-by-round breakdowns from Java developers at top companies</p>
          <!-- Stats -->
          <div class="hero-stats">
            <div class="hero-stat">
              <span class="stat-num">{{ experiences.length }}</span>
              <span class="stat-lbl">Stories</span>
            </div>
            <div class="stat-div"></div>
            <div class="hero-stat">
              <span class="stat-num">{{ offerCount }}</span>
              <span class="stat-lbl">Offers</span>
            </div>
            <div class="stat-div"></div>
            <div class="hero-stat">
              <span class="stat-num">8+</span>
              <span class="stat-lbl">Companies</span>
            </div>
          </div>
          <p class="hero-disclaimer">
            <i class="fa-solid fa-circle-info"></i>
            Experiences shared by community members. Results may vary.
          </p>
        </div>
      </div>

      <div class="body">

        <!-- Company Filter Pills -->
        <div class="filter-scroll">
          @for (c of companies; track c; let i = $index) {
            <button class="cpill"
              [class.cpill-active]="selectedCompany() === c"
              (click)="setCompany(c)">
              {{ c }}
            </button>
          }
        </div>

        <!-- Difficulty / Result row -->
        <div class="filter-row2">
          <div class="filter-group">
            <span class="filter-label">Difficulty</span>
            <div class="filter-chips">
              @for (d of difficulties; track d.val) {
                <button class="schip" [class.schip-active]="selectedDiff() === d.val"
                  (click)="setDiff(d.val)" [style.--chip-color]="d.color">
                  {{ d.label }}
                </button>
              }
            </div>
          </div>
          <div class="filter-group">
            <span class="filter-label">Result</span>
            <div class="filter-chips">
              @for (r of results; track r.val) {
                <button class="schip" [class.schip-active]="selectedResult() === r.val"
                  (click)="setResult(r.val)" [style.--chip-color]="r.color">
                  {{ r.label }}
                </button>
              }
            </div>
          </div>
        </div>

        <!-- Section Header -->
        <div class="section-head">
          <div class="sh-left">
            <i class="fa-solid fa-briefcase sh-icon"></i>
            <span class="sh-title">Interview Stories</span>
          </div>
          <span class="sh-count">{{ filtered().length }} stories</span>
        </div>

        <!-- Cards -->
        <div class="card-list">
          @for (exp of filtered(); track exp.id) {
            <button (click)="openExp(exp)" class="exp-card">
              <!-- Accent bar -->
              <div class="exp-accent" [style.background]="exp.companyColor"></div>

              <div class="exp-card-inner">
                <!-- Company Icon -->
                <div class="exp-logo" [style.background]="exp.companyBg">
                  <i [class]="exp.companyIcon" [style.color]="exp.companyColor"></i>
                </div>

                <!-- Main Info -->
                <div class="exp-info">
                  <div class="exp-top">
                    <div class="exp-title-group">
                      <span class="exp-company">{{ exp.company }}</span>
                      <span class="exp-role">{{ exp.role }}</span>
                    </div>
                    <span class="result-badge" [attr.data-r]="exp.result">
                      {{ resultLabel(exp.result) }}
                    </span>
                  </div>

                  <div class="exp-meta">
                    <span class="meta-pill">
                      <i class="fa-solid fa-rotate meta-icon"></i>
                      {{ exp.rounds }} rounds
                    </span>
                    <span class="meta-pill">
                      <i class="fa-solid fa-user-tie meta-icon"></i>
                      {{ exp.yoe }}y exp
                    </span>
                    <span class="diff-badge" [attr.data-d]="exp.difficulty">
                      {{ exp.difficulty }}
                    </span>
                    <span class="exp-date">{{ formatDate(exp.date) }}</span>
                  </div>

                  <!-- Tags -->
                  <div class="tag-row">
                    @for (tag of exp.tags.slice(0, 3); track tag) {
                      <span class="tag-chip">#{{ tag }}</span>
                    }
                  </div>
                </div>
                <div class="exp-arrow-container">
                  @if (isUnlocked(exp.id)) {
                    <i class="fa-solid fa-chevron-right exp-arrow"></i>
                  } @else {
                    <i class="fa-solid fa-lock" style="color: #f59e0b; font-size: 11px;"></i>
                  }
                </div>
              </div>
            </button>
          }

          @if (filtered().length === 0) {
            <div class="empty-state">
              <i class="fa-solid fa-magnifying-glass empty-icon"></i>
              <p class="empty-text">No stories match your filters</p>
              <button class="clear-btn" (click)="clearFilters()">Clear Filters</button>
            </div>
          }
        </div>

        <!-- CTA -->
        <div class="cta-card">
          <div class="cta-icon-wrap">
            <i class="fa-solid fa-pen-to-square cta-icon"></i>
          </div>
          <h3 class="cta-title">Share Your Story</h3>
          <p class="cta-sub">Help fellow Java developers by sharing your interview experience</p>
          <button class="cta-btn" (click)="submitExperience()">
            <i class="fa-solid fa-plus"></i>
            Submit Experience
          </button>
        </div>

      </div>
    </ion-content>
  `, styles: ["/* angular:styles/component:css;653aabf755abe11b7e9e420a6ea8503a01d028d49b5ec9b6e96af256cb798d72;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/features/experiences/exp-list.component.ts */\n.exp-toolbar {\n  --background: #0b1120;\n  --color: white;\n  --border-style: none;\n}\n.exp-content {\n  --background: #0b1120;\n}\n.hero {\n  position: relative;\n  padding: 0 20px 28px;\n  overflow: hidden;\n}\n.hero-glow {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n}\n.g1 {\n  top: -60px;\n  right: -40px;\n  width: 220px;\n  height: 220px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(16, 185, 129, 0.12) 0%,\n      transparent 70%);\n}\n.g2 {\n  bottom: -20px;\n  left: -20px;\n  width: 160px;\n  height: 160px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(99, 102, 241, 0.1) 0%,\n      transparent 70%);\n}\n.hero-inner {\n  position: relative;\n  z-index: 1;\n}\n.hero-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.65rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n  color: #10b981;\n  background: rgba(16, 185, 129, 0.1);\n  border: 1px solid rgba(16, 185, 129, 0.25);\n  border-radius: 20px;\n  padding: 5px 14px;\n  margin-bottom: 14px;\n}\n.hero-badge-icon {\n  font-size: 0.65rem;\n}\n.hero-title {\n  font-size: 1.8rem;\n  font-weight: 900;\n  color: #e2e8f0;\n  letter-spacing: -0.03em;\n  line-height: 1.15;\n  margin: 0 0 8px;\n}\n.hero-accent {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #34d399 60%,\n      #6ee7b7 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.hero-sub {\n  font-size: 0.8rem;\n  color: #64748b;\n  font-weight: 500;\n  margin: 0 0 22px;\n  line-height: 1.5;\n}\n.hero-stats {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  background: rgba(255, 255, 255, 0.035);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 14px;\n  padding: 14px 8px;\n}\n.hero-stat {\n  text-align: center;\n  flex: 1;\n}\n.stat-num {\n  display: block;\n  font-size: 1.4rem;\n  font-weight: 800;\n  letter-spacing: -0.03em;\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #34d399);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.stat-lbl {\n  display: block;\n  font-size: 0.58rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  margin-top: 2px;\n}\n.stat-div {\n  width: 1px;\n  height: 24px;\n  background: rgba(255, 255, 255, 0.07);\n}\n.hero-disclaimer {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.62rem;\n  color: #475569;\n  margin: 10px 0 0;\n  font-weight: 500;\n}\n.hero-disclaimer i {\n  font-size: 0.6rem;\n  opacity: 0.7;\n}\n.body {\n  padding: 20px 16px 100px;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.filter-scroll {\n  display: flex;\n  gap: 8px;\n  overflow-x: auto;\n  padding-bottom: 4px;\n  margin-bottom: 16px;\n  scrollbar-width: none;\n}\n.filter-scroll::-webkit-scrollbar {\n  display: none;\n}\n.cpill {\n  display: inline-flex;\n  padding: 7px 16px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 20px;\n  color: #94a3b8;\n  font-size: 0.72rem;\n  font-weight: 600;\n  white-space: nowrap;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.cpill:hover {\n  background: rgba(255, 255, 255, 0.07);\n  color: #e2e8f0;\n}\n.cpill-active {\n  background: rgba(16, 185, 129, 0.14) !important;\n  border-color: rgba(16, 185, 129, 0.3) !important;\n  color: #10b981 !important;\n}\n.filter-row2 {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n}\n.filter-group {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.filter-label {\n  font-size: 0.62rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #475569;\n}\n.filter-chips {\n  display: flex;\n  gap: 6px;\n}\n.schip {\n  padding: 5px 12px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 8px;\n  font-size: 0.65rem;\n  font-weight: 600;\n  color: #64748b;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.schip:hover {\n  color: #e2e8f0;\n  border-color: rgba(255, 255, 255, 0.15);\n}\n.schip-active {\n  background: rgba(from var(--chip-color, #10b981) r g b / 0.15) !important;\n  border-color: rgba(from var(--chip-color, #10b981) r g b / 0.35) !important;\n  color: var(--chip-color, #10b981) !important;\n}\n.section-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 14px;\n}\n.sh-left {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.sh-icon {\n  font-size: 0.68rem;\n  color: #10b981;\n}\n.sh-title {\n  font-size: 0.7rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #94a3b8;\n}\n.sh-count {\n  font-size: 0.65rem;\n  font-weight: 600;\n  color: #475569;\n}\n.card-list {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.exp-card {\n  display: block;\n  width: 100%;\n  text-align: left;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 16px;\n  color: inherit;\n  overflow: hidden;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.exp-card:hover {\n  background: rgba(255, 255, 255, 0.055);\n  border-color: rgba(255, 255, 255, 0.12);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);\n  transform: translateY(-2px);\n}\n.exp-card:active {\n  transform: scale(0.99);\n}\n.exp-accent {\n  height: 3px;\n}\n.exp-card-inner {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  padding: 14px 14px 16px;\n}\n.exp-logo {\n  flex-shrink: 0;\n  width: 46px;\n  height: 46px;\n  border-radius: 13px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n  margin-top: 2px;\n}\n.exp-info {\n  flex: 1;\n  min-width: 0;\n}\n.exp-top {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 8px;\n  margin-bottom: 8px;\n}\n.exp-title-group {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.exp-company {\n  font-size: 0.9rem;\n  font-weight: 800;\n  color: #e2e8f0;\n  letter-spacing: -0.01em;\n}\n.exp-role {\n  font-size: 0.7rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.result-badge {\n  flex-shrink: 0;\n  font-size: 0.58rem;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 6px;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.result-badge[data-r=offer] {\n  background: rgba(16, 185, 129, 0.15);\n  color: #34d399;\n}\n.result-badge[data-r=rejected] {\n  background: rgba(239, 68, 68, 0.15);\n  color: #f87171;\n}\n.result-badge[data-r=pending] {\n  background: rgba(234, 179, 8, 0.15);\n  color: #facc15;\n}\n.result-badge[data-r=withdrew] {\n  background: rgba(148, 163, 184, 0.15);\n  color: #94a3b8;\n}\n.exp-meta {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n  margin-bottom: 8px;\n}\n.meta-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.6rem;\n  font-weight: 600;\n  color: #64748b;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 6px;\n  padding: 2px 8px;\n}\n.meta-icon {\n  font-size: 0.5rem;\n  opacity: 0.7;\n}\n.diff-badge {\n  font-size: 0.55rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  padding: 2px 8px;\n  border-radius: 5px;\n}\n.diff-badge[data-d=easy] {\n  background: rgba(16, 185, 129, 0.15);\n  color: #34d399;\n}\n.diff-badge[data-d=medium] {\n  background: rgba(234, 179, 8, 0.15);\n  color: #facc15;\n}\n.diff-badge[data-d=hard] {\n  background: rgba(239, 68, 68, 0.15);\n  color: #f87171;\n}\n.exp-date {\n  font-size: 0.58rem;\n  font-weight: 500;\n  color: #475569;\n  margin-left: auto;\n}\n.tag-row {\n  display: flex;\n  gap: 5px;\n  flex-wrap: wrap;\n}\n.tag-chip {\n  font-size: 0.58rem;\n  font-weight: 600;\n  color: #475569;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 5px;\n  padding: 2px 7px;\n}\n.exp-arrow-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  margin-top: 20px;\n}\n.exp-arrow {\n  flex-shrink: 0;\n  font-size: 10px;\n  color: #334155;\n  margin-top: 0;\n  transition: all 0.2s;\n}\n.exp-card:hover .exp-arrow {\n  color: #10b981;\n  transform: translateX(2px);\n}\n.empty-state {\n  text-align: center;\n  padding: 48px 20px;\n  background: rgba(255, 255, 255, 0.02);\n  border: 1px solid rgba(255, 255, 255, 0.05);\n  border-radius: 16px;\n}\n.empty-icon {\n  font-size: 2rem;\n  color: #334155;\n  margin-bottom: 12px;\n  display: block;\n}\n.empty-text {\n  font-size: 0.82rem;\n  color: #64748b;\n  margin: 0 0 16px;\n}\n.clear-btn {\n  padding: 8px 20px;\n  background: rgba(16, 185, 129, 0.12);\n  border: 1px solid rgba(16, 185, 129, 0.3);\n  border-radius: 10px;\n  color: #10b981;\n  font-size: 0.75rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.clear-btn:hover {\n  background: rgba(16, 185, 129, 0.2);\n}\n.cta-card {\n  margin-top: 24px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(16, 185, 129, 0.08),\n      rgba(99, 102, 241, 0.06));\n  border: 1px solid rgba(16, 185, 129, 0.2);\n  border-radius: 18px;\n  padding: 24px 20px;\n  text-align: center;\n}\n.cta-icon-wrap {\n  width: 52px;\n  height: 52px;\n  border-radius: 14px;\n  background: rgba(16, 185, 129, 0.12);\n  border: 1px solid rgba(16, 185, 129, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 14px;\n}\n.cta-icon {\n  font-size: 1.3rem;\n  color: #10b981;\n}\n.cta-title {\n  font-size: 1rem;\n  font-weight: 800;\n  color: #e2e8f0;\n  margin: 0 0 6px;\n  letter-spacing: -0.01em;\n}\n.cta-sub {\n  font-size: 0.75rem;\n  color: #64748b;\n  margin: 0 0 18px;\n  line-height: 1.5;\n}\n.cta-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #059669);\n  border: none;\n  border-radius: 12px;\n  color: #fff;\n  font-size: 0.8rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n  box-shadow: 0 4px 14px rgba(16, 185, 129, 0.3);\n}\n.cta-btn:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);\n}\n:host-context(html:not(.dark)) .exp-toolbar {\n  --background: #1B4332;\n  --color: white;\n}\n:host-context(html:not(.dark)) .exp-content {\n  --background: #F5F7F2;\n}\n:host-context(html:not(.dark)) .hero {\n  background:\n    linear-gradient(\n      135deg,\n      #1B4332 0%,\n      #2D6A4F 55%,\n      #40916C 100%);\n}\n:host-context(html:not(.dark)) .hero-glow.g1 {\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.08) 0%,\n      transparent 70%);\n}\n:host-context(html:not(.dark)) .hero-glow.g2 {\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.06) 0%,\n      transparent 70%);\n}\n:host-context(html:not(.dark)) .hero-badge {\n  color: rgba(255, 255, 255, 0.9);\n  background: rgba(255, 255, 255, 0.15);\n  border-color: rgba(255, 255, 255, 0.3);\n}\n:host-context(html:not(.dark)) .hero-title {\n  color: #ffffff;\n  -webkit-text-fill-color: #ffffff;\n}\n:host-context(html:not(.dark)) .hero-accent {\n  background:\n    linear-gradient(\n      135deg,\n      #86efac 0%,\n      #bbf7d0 60%,\n      #d1fae5 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n:host-context(html:not(.dark)) .hero-sub {\n  color: rgba(255, 255, 255, 0.75);\n}\n:host-context(html:not(.dark)) .hero-stats {\n  background: rgba(255, 255, 255, 0.12);\n  border-color: rgba(255, 255, 255, 0.2);\n}\n:host-context(html:not(.dark)) .stat-num {\n  background:\n    linear-gradient(\n      135deg,\n      #d1fae5,\n      #86efac);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n:host-context(html:not(.dark)) .stat-lbl {\n  color: rgba(255, 255, 255, 0.65);\n}\n:host-context(html:not(.dark)) .stat-div {\n  background: rgba(255, 255, 255, 0.2);\n}\n:host-context(html:not(.dark)) .exp-card {\n  background: #ffffff;\n  border-color: #D6DDD2;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n}\n:host-context(html:not(.dark)) .exp-card:hover {\n  border-color: #B7CCBB;\n  box-shadow: 0 6px 20px rgba(27, 67, 50, 0.1);\n}\n:host-context(html:not(.dark)) .cta-card {\n  background: rgba(27, 67, 50, 0.04);\n  border-color: rgba(27, 67, 50, 0.15);\n}\n:host-context(html:not(.dark)) .cta-title {\n  color: #1B1B1B;\n}\n:host-context(html:not(.dark)) .cta-sub {\n  color: #52665A;\n}\n:host-context(html:not(.dark)) .cpill {\n  background: #ffffff !important;\n  border-color: #D6DDD2 !important;\n  color: #52665A !important;\n}\n:host-context(html:not(.dark)) .cpill-active {\n  background: #1B4332 !important;\n  color: white !important;\n  border-color: #1B4332 !important;\n}\n:host-context(html:not(.dark)) .schip {\n  background: #ffffff !important;\n  border-color: #D6DDD2 !important;\n  color: #52665A !important;\n}\n:host-context(html:not(.dark)) .schip-active {\n  background: #1B4332 !important;\n  color: white !important;\n  border-color: #1B4332 !important;\n}\n/*# sourceMappingURL=exp-list.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExpListComponent, { className: "ExpListComponent", filePath: "src/app/features/experiences/exp-list.component.ts", lineNumber: 690 });
})();
export {
  ExpListComponent
};
//# sourceMappingURL=chunk-DTFBZNV5.js.map
