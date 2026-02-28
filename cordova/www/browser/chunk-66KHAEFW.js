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
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext,
  ɵɵtextInterpolate
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

// src/app/features/interview-questions/iq-category.component.ts
var IqCategoryComponent = class _IqCategoryComponent {
  route = inject(ActivatedRoute);
  category = signal("", ...ngDevMode ? [{ debugName: "category" }] : []);
  constructor() {
    this.route.paramMap.subscribe((params) => {
      this.category.set(params.get("category")?.replace(/-/g, " ") ?? "");
    });
  }
  static \u0275fac = function IqCategoryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IqCategoryComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IqCategoryComponent, selectors: [["app-iq-category"]], decls: 18, vars: 2, consts: [[1, "ion-no-border"], ["slot", "start"], ["defaultHref", "/interview-questions", "text", ""], [1, "capitalize"], [1, "px-4", "pt-6", "pb-24"], [1, "card", "p-8", "text-center"], [1, "w-16", "h-16", "rounded-2xl", "bg-[#eef2ff]", "flex", "items-center", "justify-center", "mx-auto", "mb-4", "text-3xl"], [1, "text-xl", "font-extrabold", "text-[#0f172a]", "mb-2"], [1, "text-[#64748b]", "text-sm", "leading-relaxed", "max-w-xs", "mx-auto"], [1, "text-[#4f46e5]", "capitalize"]], template: function IqCategoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1);
      \u0275\u0275element(3, "ion-back-button", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "ion-title", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "ion-content")(7, "div", 4)(8, "div", 5)(9, "div", 6);
      \u0275\u0275text(10, "\u{1F4AC}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "h2", 7);
      \u0275\u0275text(12, "Loading Questions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "p", 8);
      \u0275\u0275text(14, " Interview questions for ");
      \u0275\u0275elementStart(15, "strong", 9);
      \u0275\u0275text(16);
      \u0275\u0275elementEnd();
      \u0275\u0275text(17, " with expandable answers and code snippets. ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.category());
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.category());
    }
  }, dependencies: [IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IqCategoryComponent, [{
    type: Component,
    args: [{
      selector: "app-iq-category",
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton],
      template: `
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/interview-questions" text="" />
        </ion-buttons>
        <ion-title class="capitalize">{{ category() }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="px-4 pt-6 pb-24">
        <div class="card p-8 text-center">
          <div class="w-16 h-16 rounded-2xl bg-[#eef2ff] flex items-center justify-center mx-auto mb-4 text-3xl">\u{1F4AC}</div>
          <h2 class="text-xl font-extrabold text-[#0f172a] mb-2">Loading Questions</h2>
          <p class="text-[#64748b] text-sm leading-relaxed max-w-xs mx-auto">
            Interview questions for <strong class="text-[#4f46e5] capitalize">{{ category() }}</strong>
            with expandable answers and code snippets.
          </p>
        </div>
      </div>
    </ion-content>
  `
    }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IqCategoryComponent, { className: "IqCategoryComponent", filePath: "src/app/features/interview-questions/iq-category.component.ts", lineNumber: 33 });
})();
export {
  IqCategoryComponent
};
//# sourceMappingURL=chunk-66KHAEFW.js.map
