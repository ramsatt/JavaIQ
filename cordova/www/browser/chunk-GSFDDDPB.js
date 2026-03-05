import {
  AdGateService
} from "./chunk-5ZV5RXHW.js";
import {
  DataService
} from "./chunk-2WD52FID.js";
import "./chunk-LTABZLCA.js";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar
} from "./chunk-GJAE6IIS.js";
import {
  ActivatedRoute,
  DomSanitizer,
  Router
} from "./chunk-YUIOCFNR.js";
import "./chunk-CSKJ3OEL.js";
import "./chunk-T5LCTCQ6.js";
import "./chunk-3W5KDKG7.js";
import "./chunk-QYTOD3XC.js";
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-VBTVL2BZ.js";
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

// src/app/features/interview-questions/iq-detail.component.ts
var _forTrack0 = ($index, $item) => $item.title;
function IqDetailComponent_Conditional_8_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 13)(1, "div", 22);
    \u0275\u0275text(2, "DEFINITION");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 23)(4, "div", 24);
    \u0275\u0275element(5, "i", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 26);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const q_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(q_r2.coreConceptDescription || q_r2.answer);
  }
}
function IqDetailComponent_Conditional_8_Conditional_8_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 31);
  }
}
function IqDetailComponent_Conditional_8_Conditional_8_For_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 32);
  }
}
function IqDetailComponent_Conditional_8_Conditional_8_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30);
    \u0275\u0275conditionalCreate(2, IqDetailComponent_Conditional_8_Conditional_8_For_5_Conditional_2_Template, 1, 0, "i", 31)(3, IqDetailComponent_Conditional_8_Conditional_8_For_5_Conditional_3_Template, 1, 0, "i", 32);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "p", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const concept_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("pill-static", concept_r3.title.includes("Static") || concept_r3.title.includes("Compile"))("pill-dynamic", concept_r3.title.includes("Dynamic") || concept_r3.title.includes("Runtime"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(concept_r3.title.includes("Static") || concept_r3.title.includes("Compile") ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(concept_r3.title);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r3.sanitizeHtml(concept_r3.description), \u0275\u0275sanitizeHtml);
  }
}
function IqDetailComponent_Conditional_8_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 13)(1, "div", 22);
    \u0275\u0275text(2, "TYPES");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 27);
    \u0275\u0275repeaterCreate(4, IqDetailComponent_Conditional_8_Conditional_8_For_5_Template, 7, 7, "div", 28, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const q_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(q_r2.subConcepts);
  }
}
function IqDetailComponent_Conditional_8_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 13)(1, "div", 22);
    \u0275\u0275text(2, "CLASS HIERARCHY");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 34)(4, "div", 35)(5, "div", 36)(6, "div", 37);
    \u0275\u0275text(7, "Animal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 38);
    \u0275\u0275text(9, "+ makeSound(): void");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 39);
    \u0275\u0275element(11, "div", 40)(12, "div", 41);
    \u0275\u0275elementStart(13, "span", 42);
    \u0275\u0275text(14, "extends");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 43)(16, "span", 44);
    \u0275\u0275text(17, "@Override");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 45);
    \u0275\u0275text(19, "Dog");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 38);
    \u0275\u0275text(21, "+ makeSound(): void");
    \u0275\u0275elementEnd()()()()();
  }
}
function IqDetailComponent_Conditional_8_Conditional_10_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 54);
  }
}
function IqDetailComponent_Conditional_8_Conditional_10_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 55);
  }
}
function IqDetailComponent_Conditional_8_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 13)(1, "div", 22);
    \u0275\u0275text(2, "IMPLEMENTATION");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 46)(4, "div", 47)(5, "div", 48);
    \u0275\u0275element(6, "span", 49)(7, "span", 50)(8, "span", 51);
    \u0275\u0275elementStart(9, "span", 52);
    \u0275\u0275text(10, "Example.java");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 53);
    \u0275\u0275listener("click", function IqDetailComponent_Conditional_8_Conditional_10_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r5);
      const q_r2 = \u0275\u0275nextContext();
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.copyCode(q_r2.code));
    });
    \u0275\u0275conditionalCreate(12, IqDetailComponent_Conditional_8_Conditional_10_Conditional_12_Template, 1, 0, "i", 54)(13, IqDetailComponent_Conditional_8_Conditional_10_Conditional_13_Template, 1, 0, "i", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 56);
    \u0275\u0275element(15, "pre", 57);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const q_r2 = \u0275\u0275nextContext();
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275conditional(ctx_r3.copied() ? 12 : 13);
    \u0275\u0275advance(3);
    \u0275\u0275property("innerHTML", ctx_r3.formatCode(q_r2.code), \u0275\u0275sanitizeHtml);
  }
}
function IqDetailComponent_Conditional_8_Conditional_11_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 60);
    \u0275\u0275element(2, "i", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 62)(4, "h4", 63);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 64);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const useCase_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(useCase_r6.bg);
    \u0275\u0275advance();
    \u0275\u0275classMap(useCase_r6.icon + " " + useCase_r6.color);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(useCase_r6.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(useCase_r6.description);
  }
}
function IqDetailComponent_Conditional_8_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 13)(1, "div", 22);
    \u0275\u0275text(2, "USE CASES");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 58);
    \u0275\u0275repeaterCreate(4, IqDetailComponent_Conditional_8_Conditional_11_For_5_Template, 8, 6, "div", 59, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const q_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(q_r2.useCases);
  }
}
function IqDetailComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 7)(1, "header", 9)(2, "span", 10);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "h1", 11);
    \u0275\u0275elementStart(5, "p", 12);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, IqDetailComponent_Conditional_8_Conditional_7_Template, 8, 1, "section", 13);
    \u0275\u0275conditionalCreate(8, IqDetailComponent_Conditional_8_Conditional_8_Template, 6, 0, "section", 13);
    \u0275\u0275conditionalCreate(9, IqDetailComponent_Conditional_8_Conditional_9_Template, 22, 0, "section", 13);
    \u0275\u0275conditionalCreate(10, IqDetailComponent_Conditional_8_Conditional_10_Template, 16, 2, "section", 13);
    \u0275\u0275conditionalCreate(11, IqDetailComponent_Conditional_8_Conditional_11_Template, 6, 0, "section", 13);
    \u0275\u0275elementStart(12, "div", 14)(13, "button", 15);
    \u0275\u0275listener("click", function IqDetailComponent_Conditional_8_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.goToPrev());
    });
    \u0275\u0275element(14, "i", 16);
    \u0275\u0275elementStart(15, "span", 17);
    \u0275\u0275text(16, "Previous");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 18)(18, "span", 19);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "button", 20);
    \u0275\u0275listener("click", function IqDetailComponent_Conditional_8_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.goToNext());
    });
    \u0275\u0275elementStart(21, "span", 17);
    \u0275\u0275text(22, "Next");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "i", 21);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const q_r2 = ctx;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(q_r2.asked_metadata || q_r2.category);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r3.highlightTitle(q_r2.question), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r2.answer);
    \u0275\u0275advance();
    \u0275\u0275conditional(q_r2.coreConceptDescription || q_r2.subConcepts ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(q_r2.subConcepts && q_r2.subConcepts.length > 0 ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(q_r2.question.includes("Polymorphism") ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(q_r2.code ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(q_r2.useCases && q_r2.useCases.length > 0 ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("nav-disabled", !ctx_r3.hasPrev());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", ctx_r3.currentIndex() + 1, " of ", ctx_r3.totalInCategory());
    \u0275\u0275advance();
    \u0275\u0275classProp("nav-disabled", !ctx_r3.hasNext());
  }
}
function IqDetailComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "i", 65);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()();
  }
}
var IqDetailComponent = class _IqDetailComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  dataService = inject(DataService);
  sanitizer = inject(DomSanitizer);
  adGate = inject(AdGateService);
  question = signal(null, ...ngDevMode ? [{ debugName: "question" }] : []);
  copied = signal(false, ...ngDevMode ? [{ debugName: "copied" }] : []);
  categorySlug = signal("", ...ngDevMode ? [{ debugName: "categorySlug" }] : []);
  categoryQuestions = signal([], ...ngDevMode ? [{ debugName: "categoryQuestions" }] : []);
  currentIndex = computed(() => {
    const q = this.question();
    const list = this.categoryQuestions();
    if (!q || list.length === 0)
      return 0;
    const idx = list.findIndex((item) => item.id === q.id);
    return idx >= 0 ? idx : 0;
  }, ...ngDevMode ? [{ debugName: "currentIndex" }] : []);
  totalInCategory = computed(() => this.categoryQuestions().length, ...ngDevMode ? [{ debugName: "totalInCategory" }] : []);
  constructor() {
    this.route.paramMap.subscribe(async (params) => {
      const idStr = params.get("id");
      const slug = params.get("category") ?? "";
      this.categorySlug.set(slug);
      if (idStr) {
        const id = parseInt(idStr, 10);
        const itemId = `iq::${id}`;
        if (!this.dataService.revealedQuestionIds().has(id) && !this.adGate.isItemUnlocked(itemId)) {
          const allowed = await this.adGate.unlockItemWithAd(itemId, "this interview question");
          if (!allowed) {
            this.router.navigate(["/interview-questions", slug]);
            return;
          }
        }
      }
      if (slug) {
        const questions = this.dataService.getCategoryQuestionsBySlug(slug);
        this.categoryQuestions.set(questions);
      }
      if (idStr) {
        const id = parseInt(idStr, 10);
        const allQuestions = this.categoryQuestions().length > 0 ? this.categoryQuestions() : this.dataService.getQuestions("All");
        const found = allQuestions.find((q) => q.id === id);
        this.question.set(found || null);
      }
    });
    effect(() => {
      const q = this.question();
      if (q) {
        this.dataService.markAsRevealed(q.id);
      }
    });
  }
  hasPrev() {
    return this.currentIndex() > 0;
  }
  hasNext() {
    return this.currentIndex() < this.totalInCategory() - 1;
  }
  async goToPrev() {
    if (!this.hasPrev())
      return;
    const prevQ = this.categoryQuestions()[this.currentIndex() - 1];
    const itemId = `iq::${prevQ.id}`;
    if (!this.dataService.revealedQuestionIds().has(prevQ.id) && !this.adGate.isItemUnlocked(itemId)) {
      const allowed = await this.adGate.unlockItemWithAd(itemId, "this interview question");
      if (!allowed)
        return;
    }
    this.navigateToQuestion(prevQ.id);
  }
  async goToNext() {
    if (!this.hasNext())
      return;
    const nextQ = this.categoryQuestions()[this.currentIndex() + 1];
    const itemId = `iq::${nextQ.id}`;
    if (!this.dataService.revealedQuestionIds().has(nextQ.id) && !this.adGate.isItemUnlocked(itemId)) {
      const allowed = await this.adGate.unlockItemWithAd(itemId, "this interview question");
      if (!allowed)
        return;
    }
    this.adGate.onContentCompleted();
    this.navigateToQuestion(nextQ.id);
  }
  navigateToQuestion(id) {
    this.router.navigate(["/interview-questions", this.categorySlug(), id]);
  }
  sanitizeHtml(html) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
  highlightTitle(title) {
    const keywords = ["Polymorphism", "equals()", "==", "hashCode()", "final", "finally", "finalize", "HashMap", "Garbage Collection", "String"];
    let result = title;
    for (const kw of keywords) {
      if (result.includes(kw)) {
        result = result.replace(kw, '<span style="color: #60a5fa">' + kw + "</span>");
      }
    }
    return this.sanitizer.bypassSecurityTrustHtml(result);
  }
  formatCode(code) {
    if (!code)
      return "";
    let s = code.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const tokens = [];
    const placeholder = (idx) => "\0" + idx + "\0";
    s = s.replace(/(\/\/.*)/g, (_match) => {
      const idx = tokens.length;
      tokens.push('<span style="color:#8b949e;font-style:italic">' + _match + "</span>");
      return placeholder(idx);
    });
    s = s.replace(/(\"(?:[^\"\\]|\\.)*\")/g, (_match) => {
      const idx = tokens.length;
      tokens.push('<span style="color:#a5d6ff">' + _match + "</span>");
      return placeholder(idx);
    });
    s = s.replace(/(@\w+)/g, (_match) => {
      const idx = tokens.length;
      tokens.push('<span style="color:#d2a8ff">' + _match + "</span>");
      return placeholder(idx);
    });
    const kwList = ["abstract", "assert", "boolean", "break", "byte", "case", "catch", "char", "class", "const", "continue", "default", "do", "double", "else", "enum", "extends", "final", "finally", "float", "for", "if", "implements", "import", "instanceof", "int", "interface", "long", "native", "new", "package", "private", "protected", "public", "record", "return", "sealed", "short", "static", "strictfp", "super", "switch", "synchronized", "this", "throw", "throws", "transient", "try", "var", "void", "volatile", "while", "permits"];
    const kwRegex = new RegExp("\\b(" + kwList.join("|") + ")\\b", "g");
    s = s.replace(kwRegex, '<span style="color:#ff7b72">$1</span>');
    s = s.replace(/\b([A-Z]\w*)\b/g, '<span style="color:#ffa657">$1</span>');
    s = s.replace(/\b([a-z]\w*)\s*\(/g, '<span style="color:#d2a8ff">$1</span>(');
    s = s.replace(/\u0000(\d+)\u0000/g, (_m, idx) => tokens[parseInt(idx, 10)]);
    return this.sanitizer.bypassSecurityTrustHtml(s);
  }
  copyCode(code) {
    if (!code)
      return;
    navigator.clipboard.writeText(code).then(() => {
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2e3);
    });
  }
  static \u0275fac = function IqDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IqDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IqDetailComponent, selectors: [["app-iq-detail"]], decls: 10, vars: 4, consts: [["translucent", "false", 1, "ion-no-border"], [1, "detail-toolbar"], ["slot", "start"], ["text", "", 2, "color", "white", 3, "defaultHref"], [1, "brand-title"], [1, "nav-position"], [1, "detail-content"], [1, "detail-main"], [1, "loading-state"], [1, "detail-header"], [1, "meta-badge"], [1, "detail-title", 3, "innerHTML"], [1, "detail-answer"], [1, "section-block"], [1, "nav-footer"], [1, "nav-btn", "nav-prev", 3, "click"], [1, "fa-solid", "fa-chevron-left", "nav-btn-icon"], [1, "nav-btn-label"], [1, "nav-progress-info"], [1, "nav-progress-text"], [1, "nav-btn", "nav-next", 3, "click"], [1, "fa-solid", "fa-chevron-right", "nav-btn-icon"], [1, "section-label"], [1, "definition-card"], [1, "def-icon"], [1, "fa-solid", "fa-lightbulb"], [1, "def-text"], [1, "pills-grid"], [1, "concept-pill", 3, "pill-static", "pill-dynamic"], [1, "concept-pill"], [1, "pill-header"], [1, "fa-solid", "fa-bolt", "pill-icon", "pill-icon-static"], [1, "fa-solid", "fa-arrows-spin", "pill-icon", "pill-icon-dynamic"], [1, "pill-desc", 3, "innerHTML"], [1, "uml-card"], [1, "uml-wrapper"], [1, "uml-box", "uml-parent"], [1, "uml-box-header"], [1, "uml-box-body"], [1, "uml-arrow"], [1, "uml-line"], [1, "uml-triangle"], [1, "uml-label"], [1, "uml-box", "uml-child"], [1, "uml-override-badge"], [1, "uml-box-header", "uml-child-header"], [1, "code-editor"], [1, "code-topbar"], [1, "code-dots"], [1, "dot", "dot-red"], [1, "dot", "dot-yellow"], [1, "dot", "dot-green"], [1, "code-filename"], [1, "copy-btn", 3, "click"], [1, "fa-solid", "fa-check", "copy-check"], [1, "fa-regular", "fa-copy"], [1, "code-body"], [1, "code-pre", 3, "innerHTML"], [1, "usecases-list"], [1, "usecase-card"], [1, "usecase-icon-wrap"], [1, "fa-solid"], [1, "usecase-body"], [1, "usecase-title"], [1, "usecase-desc"], [1, "fa-solid", "fa-circle-notch", "fa-spin"]], template: function IqDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2);
      \u0275\u0275element(3, "ion-back-button", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "ion-title", 4)(5, "span", 5);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(7, "ion-content", 6);
      \u0275\u0275conditionalCreate(8, IqDetailComponent_Conditional_8_Template, 24, 14, "main", 7)(9, IqDetailComponent_Conditional_9_Template, 4, 0, "div", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_2_0;
      \u0275\u0275advance(3);
      \u0275\u0275property("defaultHref", "/interview-questions/" + ctx.categorySlug());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", ctx.currentIndex() + 1, " / ", ctx.totalInCategory());
      \u0275\u0275advance(2);
      \u0275\u0275conditional((tmp_2_0 = ctx.question()) ? 8 : 9, tmp_2_0);
    }
  }, dependencies: [IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton], styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap";\n\n\n\n.detail-toolbar[_ngcontent-%COMP%] {\n  --background: #0b1120;\n  --color: white;\n}\n.brand-title[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n  color: white;\n}\n.nav-position[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: #94a3b8;\n}\n.detail-content[_ngcontent-%COMP%] {\n  --background: #0f172a;\n}\n.detail-main[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  max-width: 56rem;\n  margin: 0 auto;\n  padding: 2rem 1.25rem 4rem;\n  line-height: 1.6;\n}\n.detail-header[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.meta-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n  color: #94a3b8;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 4px;\n  padding: 3px 10px;\n  margin-bottom: 12px;\n}\n.detail-title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 800;\n  color: #e2e8f0;\n  line-height: 1.2;\n  letter-spacing: -0.02em;\n  margin-bottom: 12px;\n}\n.detail-answer[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #94a3b8;\n  border-left: 3px solid #334155;\n  padding-left: 14px;\n  line-height: 1.7;\n}\n.section-block[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.section-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.18em;\n  color: #64748b;\n  margin-bottom: 10px;\n}\n.definition-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 12px;\n  padding: 20px;\n  display: flex;\n  gap: 14px;\n  align-items: flex-start;\n}\n.def-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 36px;\n  height: 36px;\n  background: rgba(59, 130, 246, 0.15);\n  border: 1px solid rgba(59, 130, 246, 0.2);\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #60a5fa;\n  font-size: 14px;\n}\n.def-text[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n  font-size: 0.95rem;\n  line-height: 1.7;\n  margin: 0;\n}\n.pills-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 12px;\n}\n@media (min-width: 640px) {\n  .pills-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.concept-pill[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-top: 3px solid #475569;\n  border-radius: 12px;\n  padding: 20px;\n  transition: border-color 0.2s ease;\n}\n.concept-pill[_ngcontent-%COMP%]:hover {\n  border-color: rgba(255, 255, 255, 0.12);\n}\n.pill-static[_ngcontent-%COMP%] {\n  border-top-color: #818cf8;\n}\n.pill-dynamic[_ngcontent-%COMP%] {\n  border-top-color: #34d399;\n}\n.pill-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 700;\n  font-size: 0.95rem;\n  color: #e2e8f0;\n  margin-bottom: 8px;\n}\n.pill-icon[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.pill-icon-static[_ngcontent-%COMP%] {\n  color: #818cf8;\n}\n.pill-icon-dynamic[_ngcontent-%COMP%] {\n  color: #34d399;\n}\n.pill-desc[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #94a3b8;\n  line-height: 1.65;\n  margin: 0;\n}\n.uml-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 12px;\n  padding: 32px 24px;\n  display: flex;\n  justify-content: center;\n}\n.uml-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  max-width: 280px;\n}\n.uml-box[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #334155;\n  border-radius: 8px;\n  overflow: hidden;\n  text-align: center;\n  position: relative;\n}\n.uml-box-header[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  border-bottom: 1px solid #334155;\n  padding: 8px 12px;\n  font-weight: 700;\n  font-size: 0.9rem;\n  color: #e2e8f0;\n}\n.uml-box-body[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 12px;\n  color: #94a3b8;\n  text-align: left;\n}\n.uml-child[_ngcontent-%COMP%] {\n  border-color: #3b82f6;\n}\n.uml-child-header[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.15);\n  border-bottom-color: rgba(59, 130, 246, 0.3);\n  color: #60a5fa;\n}\n.uml-override-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background: rgba(59, 130, 246, 0.2);\n  color: #60a5fa;\n  font-size: 9px;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 0 0 0 6px;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.uml-arrow[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 4px 0;\n  height: 48px;\n  justify-content: center;\n}\n.uml-line[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 20px;\n  background: #475569;\n}\n.uml-triangle[_ngcontent-%COMP%] {\n  width: 0;\n  height: 0;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-top: 6px solid #64748b;\n}\n.uml-label[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 700;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  margin-top: 2px;\n}\n.code-editor[_ngcontent-%COMP%] {\n  background: #0d1117;\n  border-radius: 12px;\n  overflow: hidden;\n  border: 1px solid #30363d;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);\n}\n.code-topbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 16px;\n  background: #161b22;\n  border-bottom: 1px solid #30363d;\n}\n.code-dots[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n}\n.dot-red[_ngcontent-%COMP%] {\n  background: #ff5f57;\n}\n.dot-yellow[_ngcontent-%COMP%] {\n  background: #febc2e;\n}\n.dot-green[_ngcontent-%COMP%] {\n  background: #28c840;\n}\n.code-filename[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 11px;\n  color: #8b949e;\n}\n.copy-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #8b949e;\n  font-size: 14px;\n  width: 28px;\n  height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  transition: all 0.15s ease;\n}\n.copy-btn[_ngcontent-%COMP%]:hover {\n  background: #30363d;\n  color: #c9d1d9;\n}\n.copy-check[_ngcontent-%COMP%] {\n  color: #3fb950;\n}\n.code-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  overflow-x: auto;\n}\n.code-pre[_ngcontent-%COMP%] {\n  font-family: "JetBrains Mono", monospace;\n  font-size: 13px;\n  line-height: 1.7;\n  color: #c9d1d9;\n  margin: 0;\n  white-space: pre;\n  -webkit-font-smoothing: antialiased;\n}\n.usecases-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.usecase-card[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  padding: 18px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 12px;\n  transition: border-color 0.2s ease;\n}\n.usecase-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(255, 255, 255, 0.12);\n}\n.usecase-icon-wrap[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 38px;\n  height: 38px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n}\n.usecase-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 0.9rem;\n  color: #e2e8f0;\n  margin: 0 0 4px;\n}\n.usecase-desc[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #94a3b8;\n  line-height: 1.6;\n  margin: 0;\n}\n.nav-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 2.5rem;\n  padding: 20px 0;\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n  gap: 12px;\n}\n.nav-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 10px;\n  padding: 12px 18px;\n  color: #e2e8f0;\n  font-family: "Inter", sans-serif;\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  min-width: 100px;\n  justify-content: center;\n}\n.nav-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(16, 185, 129, 0.15);\n  border-color: rgba(16, 185, 129, 0.3);\n  color: #34d399;\n}\n.nav-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n}\n.nav-btn-icon[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.nav-disabled[_ngcontent-%COMP%] {\n  opacity: 0.3;\n  pointer-events: none;\n}\n.nav-progress-info[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.nav-progress-text[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: #64748b;\n  letter-spacing: 0.05em;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 60vh;\n  color: #64748b;\n  gap: 12px;\n}\n.loading-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #3b82f6;\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.code-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 6px;\n}\n.code-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.code-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #30363d;\n  border-radius: 3px;\n}\n.code-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #484f58;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .detail-toolbar[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .detail-toolbar[_ngcontent-%COMP%] {\n  --background: #1B4332;\n  --color: white;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .detail-content[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .detail-content[_ngcontent-%COMP%] {\n  --background: #F5F7F2;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .definition-card[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .definition-card[_ngcontent-%COMP%], \nhtml:not(.dark)[_nghost-%COMP%]   .usecase-card[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .usecase-card[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border: 1px solid #D6DDD2 !important;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .detail-title[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .detail-title[_ngcontent-%COMP%] {\n  color: #1B1B1B;\n  -webkit-text-fill-color: #1B1B1B;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .detail-answer[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .detail-answer[_ngcontent-%COMP%] {\n  color: #52665A;\n}\n/*# sourceMappingURL=iq-detail.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IqDetailComponent, [{
    type: Component,
    args: [{ selector: "app-iq-detail", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton], template: `
    <ion-header class="ion-no-border" translucent="false">
      <ion-toolbar class="detail-toolbar">
        <ion-buttons slot="start">
          <ion-back-button [defaultHref]="'/interview-questions/' + categorySlug()" text="" style="color: white"></ion-back-button>
        </ion-buttons>
        <ion-title class="brand-title">
          <span class="nav-position">{{ currentIndex() + 1 }} / {{ totalInCategory() }}</span>
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="detail-content">
      @if (question(); as q) {
        <main class="detail-main">

          <!-- Metadata Badge -->
          <header class="detail-header">
            <span class="meta-badge">{{ q.asked_metadata || q.category }}</span>
            <h1 class="detail-title" [innerHTML]="highlightTitle(q.question)"></h1>
            <p class="detail-answer">{{ q.answer }}</p>
          </header>

          <!-- Definition Card -->
          @if (q.coreConceptDescription || q.subConcepts) {
            <section class="section-block">
              <div class="section-label">DEFINITION</div>
              <div class="definition-card">
                <div class="def-icon">
                  <i class="fa-solid fa-lightbulb"></i>
                </div>
                <p class="def-text">{{ q.coreConceptDescription || q.answer }}</p>
              </div>
            </section>
          }

          <!-- SubConcept Comparison Pills -->
          @if (q.subConcepts && q.subConcepts.length > 0) {
            <section class="section-block">
              <div class="section-label">TYPES</div>
              <div class="pills-grid">
                @for (concept of q.subConcepts; track concept.title) {
                  <div class="concept-pill" [class.pill-static]="concept.title.includes('Static') || concept.title.includes('Compile')" [class.pill-dynamic]="concept.title.includes('Dynamic') || concept.title.includes('Runtime')">
                    <div class="pill-header">
                      @if (concept.title.includes('Static') || concept.title.includes('Compile')) {
                        <i class="fa-solid fa-bolt pill-icon pill-icon-static"></i>
                      } @else {
                        <i class="fa-solid fa-arrows-spin pill-icon pill-icon-dynamic"></i>
                      }
                      <span>{{ concept.title }}</span>
                    </div>
                    <p class="pill-desc" [innerHTML]="sanitizeHtml(concept.description)"></p>
                  </div>
                }
              </div>
            </section>
          }

          <!-- UML Diagram for Polymorphism -->
          @if (q.question.includes('Polymorphism')) {
            <section class="section-block">
              <div class="section-label">CLASS HIERARCHY</div>
              <div class="uml-card">
                <div class="uml-wrapper">
                  <div class="uml-box uml-parent">
                    <div class="uml-box-header">Animal</div>
                    <div class="uml-box-body">+ makeSound(): void</div>
                  </div>
                  <div class="uml-arrow">
                    <div class="uml-line"></div>
                    <div class="uml-triangle"></div>
                    <span class="uml-label">extends</span>
                  </div>
                  <div class="uml-box uml-child">
                    <span class="uml-override-badge">&#64;Override</span>
                    <div class="uml-box-header uml-child-header">Dog</div>
                    <div class="uml-box-body">+ makeSound(): void</div>
                  </div>
                </div>
              </div>
            </section>
          }

          <!-- Code Implementation -->
          @if (q.code) {
            <section class="section-block">
              <div class="section-label">IMPLEMENTATION</div>
              <div class="code-editor">
                <div class="code-topbar">
                  <div class="code-dots">
                    <span class="dot dot-red"></span>
                    <span class="dot dot-yellow"></span>
                    <span class="dot dot-green"></span>
                    <span class="code-filename">Example.java</span>
                  </div>
                  <button class="copy-btn" (click)="copyCode(q.code)">
                    @if (copied()) {
                      <i class="fa-solid fa-check copy-check"></i>
                    } @else {
                      <i class="fa-regular fa-copy"></i>
                    }
                  </button>
                </div>
                <div class="code-body">
                  <pre class="code-pre" [innerHTML]="formatCode(q.code)"></pre>
                </div>
              </div>
            </section>
          }

          <!-- Use Cases -->
          @if (q.useCases && q.useCases.length > 0) {
            <section class="section-block">
              <div class="section-label">USE CASES</div>
              <div class="usecases-list">
                @for (useCase of q.useCases; track useCase.title) {
                  <div class="usecase-card">
                    <div class="usecase-icon-wrap" [class]="useCase.bg">
                      <i class="fa-solid" [class]="useCase.icon + ' ' + useCase.color"></i>
                    </div>
                    <div class="usecase-body">
                      <h4 class="usecase-title">{{ useCase.title }}</h4>
                      <p class="usecase-desc">{{ useCase.description }}</p>
                    </div>
                  </div>
                }
              </div>
            </section>
          }

          <!-- Navigation Footer -->
          <div class="nav-footer">
            <button class="nav-btn nav-prev" [class.nav-disabled]="!hasPrev()" (click)="goToPrev()">
              <i class="fa-solid fa-chevron-left nav-btn-icon"></i>
              <span class="nav-btn-label">Previous</span>
            </button>
            <div class="nav-progress-info">
              <span class="nav-progress-text">{{ currentIndex() + 1 }} of {{ totalInCategory() }}</span>
            </div>
            <button class="nav-btn nav-next" [class.nav-disabled]="!hasNext()" (click)="goToNext()">
              <span class="nav-btn-label">Next</span>
              <i class="fa-solid fa-chevron-right nav-btn-icon"></i>
            </button>
          </div>

        </main>
      } @else {
        <div class="loading-state">
          <i class="fa-solid fa-circle-notch fa-spin"></i>
          <p>Loading...</p>
        </div>
      }
    </ion-content>
  `, styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap";\n\n/* angular:styles/component:css;5ece993c8ba58c96de6564789f4e5a7cd1b1a75aeb557bfb726c188cc74795fe;/Users/sathishkumarramalingam/projects/JavaIQ/.claude/worktrees/goofy-haibt/src/app/features/interview-questions/iq-detail.component.ts */\n.detail-toolbar {\n  --background: #0b1120;\n  --color: white;\n}\n.brand-title {\n  font-family: "Inter", sans-serif;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n  color: white;\n}\n.nav-position {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: #94a3b8;\n}\n.detail-content {\n  --background: #0f172a;\n}\n.detail-main {\n  font-family: "Inter", sans-serif;\n  max-width: 56rem;\n  margin: 0 auto;\n  padding: 2rem 1.25rem 4rem;\n  line-height: 1.6;\n}\n.detail-header {\n  margin-bottom: 2.5rem;\n}\n.meta-badge {\n  display: inline-block;\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n  color: #94a3b8;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 4px;\n  padding: 3px 10px;\n  margin-bottom: 12px;\n}\n.detail-title {\n  font-size: 1.75rem;\n  font-weight: 800;\n  color: #e2e8f0;\n  line-height: 1.2;\n  letter-spacing: -0.02em;\n  margin-bottom: 12px;\n}\n.detail-answer {\n  font-size: 1rem;\n  color: #94a3b8;\n  border-left: 3px solid #334155;\n  padding-left: 14px;\n  line-height: 1.7;\n}\n.section-block {\n  margin-bottom: 2rem;\n}\n.section-label {\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.18em;\n  color: #64748b;\n  margin-bottom: 10px;\n}\n.definition-card {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 12px;\n  padding: 20px;\n  display: flex;\n  gap: 14px;\n  align-items: flex-start;\n}\n.def-icon {\n  flex-shrink: 0;\n  width: 36px;\n  height: 36px;\n  background: rgba(59, 130, 246, 0.15);\n  border: 1px solid rgba(59, 130, 246, 0.2);\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #60a5fa;\n  font-size: 14px;\n}\n.def-text {\n  color: #cbd5e1;\n  font-size: 0.95rem;\n  line-height: 1.7;\n  margin: 0;\n}\n.pills-grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 12px;\n}\n@media (min-width: 640px) {\n  .pills-grid {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.concept-pill {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-top: 3px solid #475569;\n  border-radius: 12px;\n  padding: 20px;\n  transition: border-color 0.2s ease;\n}\n.concept-pill:hover {\n  border-color: rgba(255, 255, 255, 0.12);\n}\n.pill-static {\n  border-top-color: #818cf8;\n}\n.pill-dynamic {\n  border-top-color: #34d399;\n}\n.pill-header {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 700;\n  font-size: 0.95rem;\n  color: #e2e8f0;\n  margin-bottom: 8px;\n}\n.pill-icon {\n  font-size: 13px;\n}\n.pill-icon-static {\n  color: #818cf8;\n}\n.pill-icon-dynamic {\n  color: #34d399;\n}\n.pill-desc {\n  font-size: 0.85rem;\n  color: #94a3b8;\n  line-height: 1.65;\n  margin: 0;\n}\n.uml-card {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 12px;\n  padding: 32px 24px;\n  display: flex;\n  justify-content: center;\n}\n.uml-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  max-width: 280px;\n}\n.uml-box {\n  width: 100%;\n  border: 1px solid #334155;\n  border-radius: 8px;\n  overflow: hidden;\n  text-align: center;\n  position: relative;\n}\n.uml-box-header {\n  background: rgba(255, 255, 255, 0.06);\n  border-bottom: 1px solid #334155;\n  padding: 8px 12px;\n  font-weight: 700;\n  font-size: 0.9rem;\n  color: #e2e8f0;\n}\n.uml-box-body {\n  padding: 10px 14px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 12px;\n  color: #94a3b8;\n  text-align: left;\n}\n.uml-child {\n  border-color: #3b82f6;\n}\n.uml-child-header {\n  background: rgba(59, 130, 246, 0.15);\n  border-bottom-color: rgba(59, 130, 246, 0.3);\n  color: #60a5fa;\n}\n.uml-override-badge {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background: rgba(59, 130, 246, 0.2);\n  color: #60a5fa;\n  font-size: 9px;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 0 0 0 6px;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.uml-arrow {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 4px 0;\n  height: 48px;\n  justify-content: center;\n}\n.uml-line {\n  width: 1px;\n  height: 20px;\n  background: #475569;\n}\n.uml-triangle {\n  width: 0;\n  height: 0;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-top: 6px solid #64748b;\n}\n.uml-label {\n  font-size: 9px;\n  font-weight: 700;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  margin-top: 2px;\n}\n.code-editor {\n  background: #0d1117;\n  border-radius: 12px;\n  overflow: hidden;\n  border: 1px solid #30363d;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);\n}\n.code-topbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 16px;\n  background: #161b22;\n  border-bottom: 1px solid #30363d;\n}\n.code-dots {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n}\n.dot-red {\n  background: #ff5f57;\n}\n.dot-yellow {\n  background: #febc2e;\n}\n.dot-green {\n  background: #28c840;\n}\n.code-filename {\n  margin-left: 10px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 11px;\n  color: #8b949e;\n}\n.copy-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #8b949e;\n  font-size: 14px;\n  width: 28px;\n  height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  transition: all 0.15s ease;\n}\n.copy-btn:hover {\n  background: #30363d;\n  color: #c9d1d9;\n}\n.copy-check {\n  color: #3fb950;\n}\n.code-body {\n  padding: 20px;\n  overflow-x: auto;\n}\n.code-pre {\n  font-family: "JetBrains Mono", monospace;\n  font-size: 13px;\n  line-height: 1.7;\n  color: #c9d1d9;\n  margin: 0;\n  white-space: pre;\n  -webkit-font-smoothing: antialiased;\n}\n.usecases-list {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.usecase-card {\n  display: flex;\n  gap: 14px;\n  padding: 18px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 12px;\n  transition: border-color 0.2s ease;\n}\n.usecase-card:hover {\n  border-color: rgba(255, 255, 255, 0.12);\n}\n.usecase-icon-wrap {\n  flex-shrink: 0;\n  width: 38px;\n  height: 38px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n}\n.usecase-title {\n  font-weight: 700;\n  font-size: 0.9rem;\n  color: #e2e8f0;\n  margin: 0 0 4px;\n}\n.usecase-desc {\n  font-size: 0.82rem;\n  color: #94a3b8;\n  line-height: 1.6;\n  margin: 0;\n}\n.nav-footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 2.5rem;\n  padding: 20px 0;\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n  gap: 12px;\n}\n.nav-btn {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 10px;\n  padding: 12px 18px;\n  color: #e2e8f0;\n  font-family: "Inter", sans-serif;\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  min-width: 100px;\n  justify-content: center;\n}\n.nav-btn:hover {\n  background: rgba(16, 185, 129, 0.15);\n  border-color: rgba(16, 185, 129, 0.3);\n  color: #34d399;\n}\n.nav-btn:active {\n  transform: scale(0.97);\n}\n.nav-btn-icon {\n  font-size: 11px;\n}\n.nav-disabled {\n  opacity: 0.3;\n  pointer-events: none;\n}\n.nav-progress-info {\n  text-align: center;\n}\n.nav-progress-text {\n  font-family: "Inter", sans-serif;\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: #64748b;\n  letter-spacing: 0.05em;\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 60vh;\n  color: #64748b;\n  gap: 12px;\n}\n.loading-state i {\n  font-size: 24px;\n  color: #3b82f6;\n}\n.loading-state p {\n  font-size: 14px;\n}\n.code-body::-webkit-scrollbar {\n  height: 6px;\n}\n.code-body::-webkit-scrollbar-track {\n  background: transparent;\n}\n.code-body::-webkit-scrollbar-thumb {\n  background: #30363d;\n  border-radius: 3px;\n}\n.code-body::-webkit-scrollbar-thumb:hover {\n  background: #484f58;\n}\n:host-context(html:not(.dark)) .detail-toolbar {\n  --background: #1B4332;\n  --color: white;\n}\n:host-context(html:not(.dark)) .detail-content {\n  --background: #F5F7F2;\n}\n:host-context(html:not(.dark)) .definition-card,\n:host-context(html:not(.dark)) .usecase-card {\n  background: #ffffff !important;\n  border: 1px solid #D6DDD2 !important;\n}\n:host-context(html:not(.dark)) .detail-title {\n  color: #1B1B1B;\n  -webkit-text-fill-color: #1B1B1B;\n}\n:host-context(html:not(.dark)) .detail-answer {\n  color: #52665A;\n}\n/*# sourceMappingURL=iq-detail.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IqDetailComponent, { className: "IqDetailComponent", filePath: "src/app/features/interview-questions/iq-detail.component.ts", lineNumber: 504 });
})();
export {
  IqDetailComponent
};
//# sourceMappingURL=chunk-GSFDDDPB.js.map
