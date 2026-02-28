import {
  IonContent,
  IonHeader,
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
  ɵɵattribute,
  ɵɵdefineComponent,
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

// src/app/features/assessments/assess-list.component.ts
var _c0 = (a0) => ["/assessments", a0];
var _forTrack0 = ($index, $item) => $item.id;
function AssessListComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7)(1, "div", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9)(4, "span", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 11);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 12)(9, "span", 13);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 13);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 14);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const a_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c0, a_r1.id));
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", a_r1.bg);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r1.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r1.category);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u{1F4DD} ", a_r1.questions, " Qs");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u23F1 ", a_r1.time, " min");
    \u0275\u0275advance();
    \u0275\u0275attribute("data-level", a_r1.difficulty);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r1.difficulty);
  }
}
var AssessListComponent = class _AssessListComponent {
  assessments = [
    { id: "java-basics", title: "Java Fundamentals", category: "Core Java", icon: "\u2615", bg: "#fff7ed", questions: 20, time: 15, difficulty: "beginner" },
    { id: "oop-concepts", title: "OOP Concepts", category: "Core Java", icon: "\u{1F3AF}", bg: "#ecfdf5", questions: 15, time: 12, difficulty: "beginner" },
    { id: "collections", title: "Collections Framework", category: "Core Java", icon: "\u{1F4E6}", bg: "#ecfeff", questions: 20, time: 15, difficulty: "intermediate" },
    { id: "spring-boot-quiz", title: "Spring Boot Essentials", category: "Spring Boot", icon: "\u{1F680}", bg: "#eff6ff", questions: 20, time: 20, difficulty: "intermediate" },
    { id: "hibernate-quiz", title: "Hibernate & JPA", category: "Hibernate", icon: "\u{1F5C4}\uFE0F", bg: "#faf5ff", questions: 15, time: 15, difficulty: "intermediate" },
    { id: "concurrency", title: "Concurrency & Threads", category: "Multithreading", icon: "\u26A1", bg: "#fefce8", questions: 15, time: 20, difficulty: "advanced" }
  ];
  static \u0275fac = function AssessListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AssessListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssessListComponent, selectors: [["app-assess-list"]], decls: 16, vars: 0, consts: [[1, "ion-no-border"], [1, "page"], [1, "info"], [1, "info-title"], [1, "info-desc"], [1, "section-label"], [1, "list"], [1, "card-link", 3, "routerLink"], [1, "icon"], [1, "body"], [1, "name"], [1, "cat"], [1, "meta"], [1, "meta-item"], [1, "tag"]], template: function AssessListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-title");
      \u0275\u0275text(3, "Java Assessments");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(4, "ion-content")(5, "div", 1)(6, "div", 2)(7, "span", 3);
      \u0275\u0275text(8, "Test Your Knowledge \u{1F3AF}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span", 4);
      \u0275\u0275text(10, "Take timed quizzes to evaluate your understanding. Track your progress and improve.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "span", 5);
      \u0275\u0275text(12, "AVAILABLE QUIZZES");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 6);
      \u0275\u0275repeaterCreate(14, AssessListComponent_For_15_Template, 15, 12, "a", 7, _forTrack0);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275repeater(ctx.assessments);
    }
  }, dependencies: [RouterLink, IonContent, IonHeader, IonToolbar, IonTitle], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  padding: 4px 16px 100px;\n}\n.info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  background: #fff;\n  border-radius: 16px;\n  border: 1px solid #e2e8f0;\n  border-left: 4px solid #4f46e5;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  padding: 18px 20px;\n  margin-bottom: 24px;\n}\n.info-title[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.info-desc[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #64748b;\n  line-height: 1.5;\n}\n.section-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.62rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  color: #94a3b8;\n  margin-bottom: 14px;\n}\n.list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.card-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 16px;\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  text-decoration: none;\n  color: inherit;\n  transition: box-shadow 0.2s, transform 0.2s;\n}\n.card-link[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);\n  transform: translateY(-1px);\n}\n.icon[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  min-width: 46px;\n  border-radius: 13px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.3rem;\n}\n.body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.name[_ngcontent-%COMP%] {\n  font-size: 0.86rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.cat[_ngcontent-%COMP%] {\n  font-size: 0.62rem;\n  color: #94a3b8;\n  font-weight: 500;\n}\n.meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 4px;\n}\n.meta-item[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.tag[_ngcontent-%COMP%] {\n  font-size: 0.55rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  padding: 2px 8px;\n  border-radius: 5px;\n}\n.tag[data-level=beginner][_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #059669;\n}\n.tag[data-level=intermediate][_ngcontent-%COMP%] {\n  background: #eef2ff;\n  color: #4f46e5;\n}\n.tag[data-level=advanced][_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n}\n/*# sourceMappingURL=assess-list.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssessListComponent, [{
    type: Component,
    args: [{ selector: "app-assess-list", changeDetection: ChangeDetectionStrategy.OnPush, imports: [RouterLink, IonContent, IonHeader, IonToolbar, IonTitle], template: `
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-title>Java Assessments</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="page">
        <!-- Info -->
        <div class="info">
          <span class="info-title">Test Your Knowledge \u{1F3AF}</span>
          <span class="info-desc">Take timed quizzes to evaluate your understanding. Track your progress and improve.</span>
        </div>

        <span class="section-label">AVAILABLE QUIZZES</span>
        <div class="list">
          @for (a of assessments; track a.id) {
            <a [routerLink]="['/assessments', a.id]" class="card-link">
              <div class="icon" [style.background]="a.bg">{{ a.icon }}</div>
              <div class="body">
                <span class="name">{{ a.title }}</span>
                <span class="cat">{{ a.category }}</span>
                <div class="meta">
                  <span class="meta-item">\u{1F4DD} {{ a.questions }} Qs</span>
                  <span class="meta-item">\u23F1 {{ a.time }} min</span>
                  <span class="tag" [attr.data-level]="a.difficulty">{{ a.difficulty }}</span>
                </div>
              </div>
            </a>
          }
        </div>
      </div>
    </ion-content>
  `, styles: ["/* angular:styles/component:css;b9b3c3f1a07f032d05adf64703282cb70b74d1eefb2c169e6c9ecaffa0731784;D:/A21/JavaIQ/src/app/features/assessments/assess-list.component.ts */\n.page {\n  padding: 4px 16px 100px;\n}\n.info {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  background: #fff;\n  border-radius: 16px;\n  border: 1px solid #e2e8f0;\n  border-left: 4px solid #4f46e5;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  padding: 18px 20px;\n  margin-bottom: 24px;\n}\n.info-title {\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.info-desc {\n  font-size: 0.72rem;\n  color: #64748b;\n  line-height: 1.5;\n}\n.section-label {\n  display: block;\n  font-size: 0.62rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  color: #94a3b8;\n  margin-bottom: 14px;\n}\n.list {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.card-link {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 16px;\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  text-decoration: none;\n  color: inherit;\n  transition: box-shadow 0.2s, transform 0.2s;\n}\n.card-link:hover {\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);\n  transform: translateY(-1px);\n}\n.icon {\n  width: 46px;\n  height: 46px;\n  min-width: 46px;\n  border-radius: 13px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.3rem;\n}\n.body {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.name {\n  font-size: 0.86rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.cat {\n  font-size: 0.62rem;\n  color: #94a3b8;\n  font-weight: 500;\n}\n.meta {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 4px;\n}\n.meta-item {\n  font-size: 0.6rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.tag {\n  font-size: 0.55rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  padding: 2px 8px;\n  border-radius: 5px;\n}\n.tag[data-level=beginner] {\n  background: #ecfdf5;\n  color: #059669;\n}\n.tag[data-level=intermediate] {\n  background: #eef2ff;\n  color: #4f46e5;\n}\n.tag[data-level=advanced] {\n  background: #fef2f2;\n  color: #dc2626;\n}\n/*# sourceMappingURL=assess-list.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssessListComponent, { className: "AssessListComponent", filePath: "src/app/features/assessments/assess-list.component.ts", lineNumber: 112 });
})();
export {
  AssessListComponent
};
//# sourceMappingURL=chunk-OASJC6VV.js.map
