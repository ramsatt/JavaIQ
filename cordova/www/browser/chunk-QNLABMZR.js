import {
  IonContent,
  IonHeader,
  IonSearchbar,
  IonTitle,
  IonToolbar
} from "./chunk-ZXTNPRLP.js";
import {
  RouterLink,
  TitleCasePipe
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
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
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

// src/app/features/experiences/exp-list.component.ts
var _c0 = (a0) => ["/experiences", a0];
var _forTrack0 = ($index, $item) => $item.id;
function ExpListComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    const \u0275$index_18_r2 = ctx.$index;
    \u0275\u0275classProp("active", \u0275$index_18_r2 === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r1);
  }
}
function ExpListComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7)(1, "div", 9)(2, "div", 10)(3, "span", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 12);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 13);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 14)(11, "span", 15);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 16);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 17);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const exp_r3 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c0, exp_r3.id));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(exp_r3.company);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(exp_r3.role);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-o", exp_r3.outcome);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 9, exp_r3.outcome));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u{1F504} ", exp_r3.rounds, " rounds");
    \u0275\u0275advance();
    \u0275\u0275attribute("data-d", exp_r3.difficulty);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(exp_r3.difficulty);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(exp_r3.date);
  }
}
var ExpListComponent = class _ExpListComponent {
  companies = ["All", "Amazon", "Google", "Microsoft", "Meta", "Netflix", "Apple", "Oracle"];
  experiences = [
    { id: "amazon-sde2", company: "Amazon", role: "SDE-2", outcome: "selected", difficulty: "hard", rounds: 5, date: "Jan 2026" },
    { id: "google-l4", company: "Google", role: "L4 Software Engineer", outcome: "rejected", difficulty: "hard", rounds: 4, date: "Dec 2025" },
    { id: "microsoft-sde", company: "Microsoft", role: "Software Engineer", outcome: "selected", difficulty: "medium", rounds: 4, date: "Nov 2025" },
    { id: "flipkart-sde1", company: "Flipkart", role: "SDE-1", outcome: "selected", difficulty: "medium", rounds: 3, date: "Oct 2025" },
    { id: "oracle-java", company: "Oracle", role: "Java Developer", outcome: "pending", difficulty: "medium", rounds: 3, date: "Sep 2025" },
    { id: "tcs-dev", company: "TCS", role: "Software Developer", outcome: "selected", difficulty: "easy", rounds: 2, date: "Aug 2025" }
  ];
  static \u0275fac = function ExpListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExpListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExpListComponent, selectors: [["app-exp-list"]], decls: 16, vars: 0, consts: [[1, "ion-no-border"], ["placeholder", "Search by company...", "animated", "true"], [1, "page"], [1, "filters"], [1, "pill", 3, "active"], [1, "section-label"], [1, "list"], [1, "card-link", 3, "routerLink"], [1, "pill"], [1, "top"], [1, "info"], [1, "company"], [1, "role"], [1, "outcome"], [1, "bottom"], [1, "meta-item"], [1, "tag"], [1, "date"]], template: function ExpListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-title");
      \u0275\u0275text(3, "Interview Experiences");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "ion-toolbar");
      \u0275\u0275element(5, "ion-searchbar", 1);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "ion-content")(7, "div", 2)(8, "div", 3);
      \u0275\u0275repeaterCreate(9, ExpListComponent_For_10_Template, 2, 3, "button", 4, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "span", 5);
      \u0275\u0275text(12, "RECENT STORIES");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 6);
      \u0275\u0275repeaterCreate(14, ExpListComponent_For_15_Template, 17, 13, "a", 7, _forTrack0);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275repeater(ctx.companies);
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.experiences);
    }
  }, dependencies: [RouterLink, IonContent, IonHeader, IonToolbar, IonTitle, IonSearchbar, TitleCasePipe], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  padding: 4px 16px 100px;\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  overflow-x: auto;\n  padding-bottom: 16px;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.filters[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.pill[_ngcontent-%COMP%] {\n  padding: 6px 16px;\n  border-radius: 10px;\n  font-size: 0.72rem;\n  font-weight: 600;\n  border: 1px solid #e2e8f0;\n  background: #fff;\n  color: #64748b;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: all 0.2s;\n}\n.pill[_ngcontent-%COMP%]:hover {\n  border-color: #4f46e5;\n  color: #4f46e5;\n}\n.pill.active[_ngcontent-%COMP%] {\n  background: #4f46e5;\n  color: #fff;\n  border-color: #4f46e5;\n}\n.section-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.62rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  color: #94a3b8;\n  margin-bottom: 14px;\n}\n.list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.card-link[_ngcontent-%COMP%] {\n  display: block;\n  padding: 16px 18px;\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  text-decoration: none;\n  color: inherit;\n  transition: box-shadow 0.2s, transform 0.2s;\n}\n.card-link[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);\n  transform: translateY(-1px);\n}\n.top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.company[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.role[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: #64748b;\n}\n.outcome[_ngcontent-%COMP%] {\n  font-size: 0.58rem;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 6px;\n  white-space: nowrap;\n}\n.outcome[data-o=selected][_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #059669;\n}\n.outcome[data-o=rejected][_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.outcome[data-o=pending][_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #d97706;\n}\n.bottom[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.meta-item[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  color: #94a3b8;\n  font-weight: 500;\n}\n.date[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  color: #94a3b8;\n  font-weight: 500;\n  margin-left: auto;\n}\n.tag[_ngcontent-%COMP%] {\n  font-size: 0.55rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  padding: 2px 8px;\n  border-radius: 5px;\n}\n.tag[data-d=easy][_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #059669;\n}\n.tag[data-d=medium][_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #d97706;\n}\n.tag[data-d=hard][_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n}\n/*# sourceMappingURL=exp-list.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExpListComponent, [{
    type: Component,
    args: [{ selector: "app-exp-list", changeDetection: ChangeDetectionStrategy.OnPush, imports: [RouterLink, TitleCasePipe, IonContent, IonHeader, IonToolbar, IonTitle, IonSearchbar], template: `
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-title>Interview Experiences</ion-title>
      </ion-toolbar>
      <ion-toolbar>
        <ion-searchbar placeholder="Search by company..." animated="true" />
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="page">
        <!-- Pills -->
        <div class="filters">
          @for (c of companies; track c; let i = $index) {
            <button class="pill" [class.active]="i === 0">{{ c }}</button>
          }
        </div>

        <span class="section-label">RECENT STORIES</span>
        <div class="list">
          @for (exp of experiences; track exp.id) {
            <a [routerLink]="['/experiences', exp.id]" class="card-link">
              <div class="top">
                <div class="info">
                  <span class="company">{{ exp.company }}</span>
                  <span class="role">{{ exp.role }}</span>
                </div>
                <span class="outcome" [attr.data-o]="exp.outcome">{{ exp.outcome | titlecase }}</span>
              </div>
              <div class="bottom">
                <span class="meta-item">\u{1F504} {{ exp.rounds }} rounds</span>
                <span class="tag" [attr.data-d]="exp.difficulty">{{ exp.difficulty }}</span>
                <span class="date">{{ exp.date }}</span>
              </div>
            </a>
          }
        </div>
      </div>
    </ion-content>
  `, styles: ["/* angular:styles/component:css;0970044964d639583902cf39f403bd29d587a944575e4a0da9fa6e80402c8604;D:/A21/JavaIQ/src/app/features/experiences/exp-list.component.ts */\n.page {\n  padding: 4px 16px 100px;\n}\n.filters {\n  display: flex;\n  gap: 8px;\n  overflow-x: auto;\n  padding-bottom: 16px;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.filters::-webkit-scrollbar {\n  display: none;\n}\n.pill {\n  padding: 6px 16px;\n  border-radius: 10px;\n  font-size: 0.72rem;\n  font-weight: 600;\n  border: 1px solid #e2e8f0;\n  background: #fff;\n  color: #64748b;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: all 0.2s;\n}\n.pill:hover {\n  border-color: #4f46e5;\n  color: #4f46e5;\n}\n.pill.active {\n  background: #4f46e5;\n  color: #fff;\n  border-color: #4f46e5;\n}\n.section-label {\n  display: block;\n  font-size: 0.62rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  color: #94a3b8;\n  margin-bottom: 14px;\n}\n.list {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.card-link {\n  display: block;\n  padding: 16px 18px;\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  text-decoration: none;\n  color: inherit;\n  transition: box-shadow 0.2s, transform 0.2s;\n}\n.card-link:hover {\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);\n  transform: translateY(-1px);\n}\n.top {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.info {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.company {\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.role {\n  font-size: 0.68rem;\n  color: #64748b;\n}\n.outcome {\n  font-size: 0.58rem;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 6px;\n  white-space: nowrap;\n}\n.outcome[data-o=selected] {\n  background: #ecfdf5;\n  color: #059669;\n}\n.outcome[data-o=rejected] {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.outcome[data-o=pending] {\n  background: #fffbeb;\n  color: #d97706;\n}\n.bottom {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.meta-item {\n  font-size: 0.6rem;\n  color: #94a3b8;\n  font-weight: 500;\n}\n.date {\n  font-size: 0.6rem;\n  color: #94a3b8;\n  font-weight: 500;\n  margin-left: auto;\n}\n.tag {\n  font-size: 0.55rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  padding: 2px 8px;\n  border-radius: 5px;\n}\n.tag[data-d=easy] {\n  background: #ecfdf5;\n  color: #059669;\n}\n.tag[data-d=medium] {\n  background: #fffbeb;\n  color: #d97706;\n}\n.tag[data-d=hard] {\n  background: #fef2f2;\n  color: #dc2626;\n}\n/*# sourceMappingURL=exp-list.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExpListComponent, { className: "ExpListComponent", filePath: "src/app/features/experiences/exp-list.component.ts", lineNumber: 129 });
})();
export {
  ExpListComponent
};
//# sourceMappingURL=chunk-QNLABMZR.js.map
