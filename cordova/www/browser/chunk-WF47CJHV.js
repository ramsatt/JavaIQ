import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar
} from "./chunk-ZXTNPRLP.js";
import "./chunk-Y2NGQL72.js";
import "./chunk-CSKJ3OEL.js";
import "./chunk-T5LCTCQ6.js";
import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
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

// src/app/features/assessments/assess-result.component.ts
var AssessResultComponent = class _AssessResultComponent {
  static \u0275fac = function AssessResultComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AssessResultComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssessResultComponent, selectors: [["app-assess-result"]], decls: 15, vars: 0, consts: [[1, "ion-no-border"], ["slot", "start"], ["defaultHref", "/assessments", "text", ""], [1, "px-4", "pt-6", "pb-24"], [1, "card", "p-8", "text-center"], [1, "w-16", "h-16", "rounded-2xl", "bg-[#ecfdf5]", "flex", "items-center", "justify-center", "mx-auto", "mb-4", "text-3xl"], [1, "text-xl", "font-extrabold", "text-[#0f172a]", "mb-2"], [1, "text-[#64748b]", "text-sm", "leading-relaxed", "max-w-xs", "mx-auto"]], template: function AssessResultComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1);
      \u0275\u0275element(3, "ion-back-button", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "ion-title");
      \u0275\u0275text(5, "Results");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "ion-content")(7, "div", 3)(8, "div", 4)(9, "div", 5);
      \u0275\u0275text(10, "\u{1F389}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "h2", 6);
      \u0275\u0275text(12, "Assessment Complete");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "p", 7);
      \u0275\u0275text(14, " Score breakdown, correct/incorrect answers, and explanations for each question. ");
      \u0275\u0275elementEnd()()()();
    }
  }, dependencies: [IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssessResultComponent, [{
    type: Component,
    args: [{
      selector: "app-assess-result",
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton],
      template: `
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/assessments" text="" />
        </ion-buttons>
        <ion-title>Results</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="px-4 pt-6 pb-24">
        <div class="card p-8 text-center">
          <div class="w-16 h-16 rounded-2xl bg-[#ecfdf5] flex items-center justify-center mx-auto mb-4 text-3xl">\u{1F389}</div>
          <h2 class="text-xl font-extrabold text-[#0f172a] mb-2">Assessment Complete</h2>
          <p class="text-[#64748b] text-sm leading-relaxed max-w-xs mx-auto">
            Score breakdown, correct/incorrect answers, and explanations for each question.
          </p>
        </div>
      </div>
    </ion-content>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssessResultComponent, { className: "AssessResultComponent", filePath: "src/app/features/assessments/assess-result.component.ts", lineNumber: 31 });
})();
export {
  AssessResultComponent
};
//# sourceMappingURL=chunk-WF47CJHV.js.map
