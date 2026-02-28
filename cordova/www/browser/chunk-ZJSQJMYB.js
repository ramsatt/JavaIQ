import {
  IonContent,
  IonHeader,
  IonSearchbar,
  IonTitle,
  IonToolbar
} from "./chunk-ZXTNPRLP.js";
import {
  RouterLink
} from "./chunk-Y2NGQL72.js";
import "./chunk-CSKJ3OEL.js";
import "./chunk-T5LCTCQ6.js";
import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
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

// src/app/features/coding-questions/cq-list.component.ts
var _c0 = (a0) => ["/coding-questions", a0];
var _forTrack0 = ($index, $item) => $item.key;
function CqListComponent_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 8)(1, "div", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 10)(4, "span", 11);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 12);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 13);
    \u0275\u0275text(9, "\u203A");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cat_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c0, cat_r1.key));
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", cat_r1.bg);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r1.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(cat_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", cat_r1.count, " problems");
  }
}
var CqListComponent = class _CqListComponent {
  categories = [
    { key: "arrays", title: "Arrays & Strings", icon: "\u{1F4CA}", bg: "#eff6ff", count: 15 },
    { key: "linked-lists", title: "Linked Lists", icon: "\u{1F517}", bg: "#ecfeff", count: 10 },
    { key: "trees", title: "Trees & Graphs", icon: "\u{1F333}", bg: "#ecfdf5", count: 12 },
    { key: "dp", title: "Dynamic Programming", icon: "\u{1F4D0}", bg: "#faf5ff", count: 15 },
    { key: "sorting", title: "Sorting & Searching", icon: "\u{1F50D}", bg: "#fefce8", count: 8 },
    { key: "stacks", title: "Stacks & Queues", icon: "\u{1F4DA}", bg: "#fff7ed", count: 8 },
    { key: "recursion", title: "Recursion & Backtracking", icon: "\u{1F504}", bg: "#fdf2f8", count: 10 },
    { key: "hashing", title: "Hashing", icon: "#\uFE0F\u20E3", bg: "#eef2ff", count: 7 }
  ];
  static \u0275fac = function CqListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CqListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CqListComponent, selectors: [["app-cq-list"]], decls: 22, vars: 0, consts: [[1, "ion-no-border"], ["placeholder", "Search problems...", "animated", "true"], [1, "page"], [1, "filters"], [1, "pill", "active"], [1, "pill"], [1, "section-label"], [1, "list"], [1, "card-link", 3, "routerLink"], [1, "icon"], [1, "body"], [1, "name"], [1, "count"], [1, "arrow"]], template: function CqListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-title");
      \u0275\u0275text(3, "Coding Questions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "ion-toolbar");
      \u0275\u0275element(5, "ion-searchbar", 1);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "ion-content")(7, "div", 2)(8, "div", 3)(9, "button", 4);
      \u0275\u0275text(10, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 5);
      \u0275\u0275text(12, "Easy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 5);
      \u0275\u0275text(14, "Medium");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "button", 5);
      \u0275\u0275text(16, "Hard");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "span", 6);
      \u0275\u0275text(18, "CATEGORIES");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 7);
      \u0275\u0275repeaterCreate(20, CqListComponent_For_21_Template, 10, 8, "a", 8, _forTrack0);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(20);
      \u0275\u0275repeater(ctx.categories);
    }
  }, dependencies: [RouterLink, IonContent, IonHeader, IonToolbar, IonTitle, IonSearchbar], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  padding: 4px 16px 100px;\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 20px;\n}\n.pill[_ngcontent-%COMP%] {\n  padding: 6px 16px;\n  border-radius: 10px;\n  font-size: 0.72rem;\n  font-weight: 600;\n  border: 1px solid #e2e8f0;\n  background: #fff;\n  color: #64748b;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.pill[_ngcontent-%COMP%]:hover {\n  border-color: #4f46e5;\n  color: #4f46e5;\n}\n.pill.active[_ngcontent-%COMP%] {\n  background: #4f46e5;\n  color: #fff;\n  border-color: #4f46e5;\n}\n.section-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.62rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  color: #94a3b8;\n  margin-bottom: 14px;\n}\n.list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.card-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 14px 14px 14px 16px;\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  text-decoration: none;\n  color: inherit;\n  transition: box-shadow 0.2s, transform 0.2s;\n}\n.card-link[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);\n  transform: translateY(-1px);\n}\n.icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  min-width: 42px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n}\n.body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.name[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.count[_ngcontent-%COMP%] {\n  font-size: 0.62rem;\n  color: #94a3b8;\n  font-weight: 500;\n}\n.arrow[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  color: #cbd5e1;\n  font-weight: 300;\n  line-height: 1;\n}\n/*# sourceMappingURL=cq-list.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CqListComponent, [{
    type: Component,
    args: [{ selector: "app-cq-list", changeDetection: ChangeDetectionStrategy.OnPush, imports: [RouterLink, IonContent, IonHeader, IonToolbar, IonTitle, IonSearchbar], template: `
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-title>Coding Questions</ion-title>
      </ion-toolbar>
      <ion-toolbar>
        <ion-searchbar placeholder="Search problems..." animated="true" />
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="page">
        <!-- Filter -->
        <div class="filters">
          <button class="pill active">All</button>
          <button class="pill">Easy</button>
          <button class="pill">Medium</button>
          <button class="pill">Hard</button>
        </div>

        <span class="section-label">CATEGORIES</span>
        <div class="list">
          @for (cat of categories; track cat.key) {
            <a [routerLink]="['/coding-questions', cat.key]" class="card-link">
              <div class="icon" [style.background]="cat.bg">{{ cat.icon }}</div>
              <div class="body">
                <span class="name">{{ cat.title }}</span>
                <span class="count">{{ cat.count }} problems</span>
              </div>
              <span class="arrow">\u203A</span>
            </a>
          }
        </div>
      </div>
    </ion-content>
  `, styles: ["/* angular:styles/component:css;5160fde6c835645f100bdf6911c7607fa6d96356dad88dfce2d5f6d39c193f21;D:/A21/JavaIQ/src/app/features/coding-questions/cq-list.component.ts */\n.page {\n  padding: 4px 16px 100px;\n}\n.filters {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 20px;\n}\n.pill {\n  padding: 6px 16px;\n  border-radius: 10px;\n  font-size: 0.72rem;\n  font-weight: 600;\n  border: 1px solid #e2e8f0;\n  background: #fff;\n  color: #64748b;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.pill:hover {\n  border-color: #4f46e5;\n  color: #4f46e5;\n}\n.pill.active {\n  background: #4f46e5;\n  color: #fff;\n  border-color: #4f46e5;\n}\n.section-label {\n  display: block;\n  font-size: 0.62rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  color: #94a3b8;\n  margin-bottom: 14px;\n}\n.list {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.card-link {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 14px 14px 14px 16px;\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  text-decoration: none;\n  color: inherit;\n  transition: box-shadow 0.2s, transform 0.2s;\n}\n.card-link:hover {\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);\n  transform: translateY(-1px);\n}\n.icon {\n  width: 42px;\n  height: 42px;\n  min-width: 42px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n}\n.body {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.name {\n  font-size: 0.84rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.count {\n  font-size: 0.62rem;\n  color: #94a3b8;\n  font-weight: 500;\n}\n.arrow {\n  font-size: 1.3rem;\n  color: #cbd5e1;\n  font-weight: 300;\n  line-height: 1;\n}\n/*# sourceMappingURL=cq-list.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CqListComponent, { className: "CqListComponent", filePath: "src/app/features/coding-questions/cq-list.component.ts", lineNumber: 101 });
})();
export {
  CqListComponent
};
//# sourceMappingURL=chunk-ZJSQJMYB.js.map
