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

// src/app/features/interview-questions/iq-list.component.ts
var _c0 = (a0) => ["/interview-questions", a0];
var _forTrack0 = ($index, $item) => $item.key;
function IqListComponent_For_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 12)(1, "div", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 15);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cat_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c0, cat_r1.key));
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", cat_r1.bg);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", cat_r1.questionCount, " questions");
  }
}
var IqListComponent = class _IqListComponent {
  categories = [
    { key: "core-java", title: "Core Java", icon: "\u2615", bg: "#fff7ed", questionCount: 45 },
    { key: "spring-boot", title: "Spring Boot", icon: "\u{1F680}", bg: "#ecfeff", questionCount: 35 },
    { key: "hibernate", title: "Hibernate", icon: "\u{1F5C4}\uFE0F", bg: "#faf5ff", questionCount: 20 },
    { key: "microservices", title: "Microservices", icon: "\u{1F517}", bg: "#eff6ff", questionCount: 25 },
    { key: "multithreading", title: "Multithreading", icon: "\u26A1", bg: "#fefce8", questionCount: 15 },
    { key: "spring-reactive", title: "Reactive", icon: "\u{1F30A}", bg: "#f0fdfa", questionCount: 12 },
    { key: "reactive-prog", title: "RxJava", icon: "\u{1F4E1}", bg: "#fdf2f8", questionCount: 15 },
    { key: "coding-patterns", title: "Patterns", icon: "\u{1F9E9}", bg: "#eef2ff", questionCount: 18 }
  ];
  get totalQuestions() {
    return this.categories.reduce((s, c) => s + c.questionCount, 0);
  }
  static \u0275fac = function IqListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IqListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IqListComponent, selectors: [["app-iq-list"]], decls: 31, vars: 2, consts: [[1, "ion-no-border"], ["placeholder", "Search questions...", "animated", "true"], [1, "page"], [1, "stats"], [1, "stat"], [1, "stat-num", "indigo"], [1, "stat-lbl"], [1, "stat-div"], [1, "stat-num", "cyan"], [1, "stat-num", "green"], [1, "section-label"], [1, "grid"], [1, "topic", 3, "routerLink"], [1, "topic-icon"], [1, "topic-name"], [1, "topic-count"]], template: function IqListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-title");
      \u0275\u0275text(3, "Interview Questions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "ion-toolbar");
      \u0275\u0275element(5, "ion-searchbar", 1);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "ion-content")(7, "div", 2)(8, "div", 3)(9, "div", 4)(10, "span", 5);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "span", 6);
      \u0275\u0275text(13, "Questions");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(14, "div", 7);
      \u0275\u0275elementStart(15, "div", 4)(16, "span", 8);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "span", 6);
      \u0275\u0275text(19, "Topics");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(20, "div", 7);
      \u0275\u0275elementStart(21, "div", 4)(22, "span", 9);
      \u0275\u0275text(23, "50+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "span", 6);
      \u0275\u0275text(25, "Companies");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(26, "span", 10);
      \u0275\u0275text(27, "BROWSE BY TOPIC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 11);
      \u0275\u0275repeaterCreate(29, IqListComponent_For_30_Template, 7, 8, "a", 12, _forTrack0);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.totalQuestions);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.categories.length);
      \u0275\u0275advance(12);
      \u0275\u0275repeater(ctx.categories);
    }
  }, dependencies: [RouterLink, IonContent, IonHeader, IonToolbar, IonTitle, IonSearchbar], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  padding: 4px 16px 100px;\n}\n.stats[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  background: #fff;\n  border-radius: 16px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  padding: 18px 12px;\n  margin-bottom: 24px;\n}\n.stat[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.stat-num[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.6rem;\n  font-weight: 800;\n  letter-spacing: -0.03em;\n  line-height: 1;\n}\n.stat-num.indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.stat-num.cyan[_ngcontent-%COMP%] {\n  color: #0891b2;\n}\n.stat-num.green[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.stat-lbl[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.6rem;\n  color: #94a3b8;\n  font-weight: 600;\n  margin-top: 5px;\n}\n.stat-div[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 32px;\n  background: #e2e8f0;\n}\n.section-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.62rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  color: #94a3b8;\n  margin-bottom: 14px;\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 10px;\n}\n.topic[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 18px 10px 16px;\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  text-decoration: none;\n  color: inherit;\n  transition: box-shadow 0.2s, transform 0.2s;\n}\n.topic[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);\n  transform: translateY(-1px);\n}\n.topic-icon[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 13px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.3rem;\n  margin-bottom: 10px;\n}\n.topic-name[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #0f172a;\n  text-align: center;\n  line-height: 1.2;\n}\n.topic-count[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  color: #94a3b8;\n  font-weight: 500;\n  margin-top: 3px;\n}\n/*# sourceMappingURL=iq-list.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IqListComponent, [{
    type: Component,
    args: [{ selector: "app-iq-list", changeDetection: ChangeDetectionStrategy.OnPush, imports: [RouterLink, IonContent, IonHeader, IonToolbar, IonTitle, IonSearchbar], template: `
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-title>Interview Questions</ion-title>
      </ion-toolbar>
      <ion-toolbar>
        <ion-searchbar placeholder="Search questions..." animated="true" />
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="page">
        <!-- Stats -->
        <div class="stats">
          <div class="stat">
            <span class="stat-num indigo">{{ totalQuestions }}</span>
            <span class="stat-lbl">Questions</span>
          </div>
          <div class="stat-div"></div>
          <div class="stat">
            <span class="stat-num cyan">{{ categories.length }}</span>
            <span class="stat-lbl">Topics</span>
          </div>
          <div class="stat-div"></div>
          <div class="stat">
            <span class="stat-num green">50+</span>
            <span class="stat-lbl">Companies</span>
          </div>
        </div>

        <!-- Topics -->
        <span class="section-label">BROWSE BY TOPIC</span>
        <div class="grid">
          @for (cat of categories; track cat.key) {
            <a [routerLink]="['/interview-questions', cat.key]" class="topic">
              <div class="topic-icon" [style.background]="cat.bg">{{ cat.icon }}</div>
              <span class="topic-name">{{ cat.title }}</span>
              <span class="topic-count">{{ cat.questionCount }} questions</span>
            </a>
          }
        </div>
      </div>
    </ion-content>
  `, styles: ["/* angular:styles/component:css;fd7a5bbb8344708451ae36c42772eb2041131ea263601d730cce89fa27c37712;D:/A21/JavaIQ/src/app/features/interview-questions/iq-list.component.ts */\n.page {\n  padding: 4px 16px 100px;\n}\n.stats {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  background: #fff;\n  border-radius: 16px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  padding: 18px 12px;\n  margin-bottom: 24px;\n}\n.stat {\n  text-align: center;\n}\n.stat-num {\n  display: block;\n  font-size: 1.6rem;\n  font-weight: 800;\n  letter-spacing: -0.03em;\n  line-height: 1;\n}\n.stat-num.indigo {\n  color: #4f46e5;\n}\n.stat-num.cyan {\n  color: #0891b2;\n}\n.stat-num.green {\n  color: #059669;\n}\n.stat-lbl {\n  display: block;\n  font-size: 0.6rem;\n  color: #94a3b8;\n  font-weight: 600;\n  margin-top: 5px;\n}\n.stat-div {\n  width: 1px;\n  height: 32px;\n  background: #e2e8f0;\n}\n.section-label {\n  display: block;\n  font-size: 0.62rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  color: #94a3b8;\n  margin-bottom: 14px;\n}\n.grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 10px;\n}\n.topic {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 18px 10px 16px;\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  text-decoration: none;\n  color: inherit;\n  transition: box-shadow 0.2s, transform 0.2s;\n}\n.topic:hover {\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);\n  transform: translateY(-1px);\n}\n.topic-icon {\n  width: 46px;\n  height: 46px;\n  border-radius: 13px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.3rem;\n  margin-bottom: 10px;\n}\n.topic-name {\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #0f172a;\n  text-align: center;\n  line-height: 1.2;\n}\n.topic-count {\n  font-size: 0.6rem;\n  color: #94a3b8;\n  font-weight: 500;\n  margin-top: 3px;\n}\n/*# sourceMappingURL=iq-list.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IqListComponent, { className: "IqListComponent", filePath: "src/app/features/interview-questions/iq-list.component.ts", lineNumber: 112 });
})();
export {
  IqListComponent
};
//# sourceMappingURL=chunk-34PQEKY6.js.map
