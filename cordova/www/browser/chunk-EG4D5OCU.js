import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar
} from "./chunk-ZXTNPRLP.js";
import {
  ActivatedRoute
} from "./chunk-Y2NGQL72.js";
import "./chunk-CSKJ3OEL.js";
import "./chunk-T5LCTCQ6.js";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-6OY2Y3BE.js";
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

// src/app/features/assessments/assess-quiz.component.ts
var AssessQuizComponent = class _AssessQuizComponent {
  route = inject(ActivatedRoute);
  quizId = signal("", ...ngDevMode ? [{ debugName: "quizId" }] : []);
  constructor() {
    this.route.paramMap.subscribe((params) => {
      this.quizId.set(params.get("id") ?? "");
    });
  }
  static \u0275fac = function AssessQuizComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AssessQuizComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssessQuizComponent, selectors: [["app-assess-quiz"]], decls: 17, vars: 0, consts: [[1, "ion-no-border"], ["slot", "start"], ["defaultHref", "/assessments", "text", ""], [1, "px-4", "pt-6", "pb-24"], [1, "card", "p-8", "text-center"], [1, "w-16", "h-16", "rounded-2xl", "bg-[#eef2ff]", "flex", "items-center", "justify-center", "mx-auto", "mb-4", "text-3xl"], [1, "text-xl", "font-extrabold", "text-[#0f172a]", "mb-2"], [1, "text-[#64748b]", "text-sm", "leading-relaxed", "max-w-xs", "mx-auto", "mb-6"], [1, "px-8", "py-3", "rounded-xl", "bg-[#4f46e5]", "text-white", "font-bold", "text-sm", "hover:bg-[#4338ca]", "transition-colors", "shadow-lg", "shadow-indigo-500/20"]], template: function AssessQuizComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1);
      \u0275\u0275element(3, "ion-back-button", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "ion-title");
      \u0275\u0275text(5, "Assessment");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "ion-content")(7, "div", 3)(8, "div", 4)(9, "div", 5);
      \u0275\u0275text(10, "\u{1F4DD}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "h2", 6);
      \u0275\u0275text(12, "Ready to Begin?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "p", 7);
      \u0275\u0275text(14, " This timed quiz will test your knowledge with multiple-choice questions and instant feedback. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "button", 8);
      \u0275\u0275text(16, " Start Quiz ");
      \u0275\u0275elementEnd()()()();
    }
  }, dependencies: [IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssessQuizComponent, [{
    type: Component,
    args: [{
      selector: "app-assess-quiz",
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton],
      template: `
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/assessments" text="" />
        </ion-buttons>
        <ion-title>Assessment</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="px-4 pt-6 pb-24">
        <div class="card p-8 text-center">
          <div class="w-16 h-16 rounded-2xl bg-[#eef2ff] flex items-center justify-center mx-auto mb-4 text-3xl">\u{1F4DD}</div>
          <h2 class="text-xl font-extrabold text-[#0f172a] mb-2">Ready to Begin?</h2>
          <p class="text-[#64748b] text-sm leading-relaxed max-w-xs mx-auto mb-6">
            This timed quiz will test your knowledge with multiple-choice questions and instant feedback.
          </p>
          <button class="px-8 py-3 rounded-xl bg-[#4f46e5] text-white font-bold text-sm hover:bg-[#4338ca] transition-colors shadow-lg shadow-indigo-500/20">
            Start Quiz
          </button>
        </div>
      </div>
    </ion-content>
  `
    }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssessQuizComponent, { className: "AssessQuizComponent", filePath: "src/app/features/assessments/assess-quiz.component.ts", lineNumber: 35 });
})();
export {
  AssessQuizComponent
};
//# sourceMappingURL=chunk-EG4D5OCU.js.map
