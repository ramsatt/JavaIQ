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
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
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

// src/app/features/leetcode/lc-list.component.ts
var _c0 = (a0) => ["/leetcode", a0];
var _forTrack0 = ($index, $item) => $item.number;
function LcListComponent_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 15)(1, "div", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 17)(4, "span", 18);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 19);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 20);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c0, p_r1.number));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r1.number);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r1.category);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-d", p_r1.difficulty);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r1.difficulty);
  }
}
var LcListComponent = class _LcListComponent {
  problems = [
    { number: 1, title: "Two Sum", difficulty: "Easy", category: "Arrays" },
    { number: 2, title: "Add Two Numbers", difficulty: "Medium", category: "Linked Lists" },
    { number: 3, title: "Longest Substring Without Repeating", difficulty: "Medium", category: "Strings" },
    { number: 5, title: "Longest Palindromic Substring", difficulty: "Medium", category: "Strings" },
    { number: 15, title: "3Sum", difficulty: "Medium", category: "Arrays" },
    { number: 20, title: "Valid Parentheses", difficulty: "Easy", category: "Stacks" },
    { number: 21, title: "Merge Two Sorted Lists", difficulty: "Easy", category: "Linked Lists" },
    { number: 49, title: "Group Anagrams", difficulty: "Medium", category: "Hashing" },
    { number: 53, title: "Maximum Subarray", difficulty: "Medium", category: "Dynamic Programming" },
    { number: 121, title: "Best Time to Buy and Sell Stock", difficulty: "Easy", category: "Arrays" },
    { number: 200, title: "Number of Islands", difficulty: "Medium", category: "Graphs" },
    { number: 206, title: "Reverse Linked List", difficulty: "Easy", category: "Linked Lists" }
  ];
  static \u0275fac = function LcListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LcListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LcListComponent, selectors: [["app-lc-list"]], decls: 32, vars: 0, consts: [[1, "ion-no-border"], ["placeholder", "Search by number or title...", "animated", "true"], [1, "page"], [1, "progress"], [1, "progress-label"], [1, "progress-row"], [1, "pbox", "easy"], [1, "pnum"], [1, "ptxt", "easy-c"], [1, "pbox", "medium"], [1, "ptxt", "medium-c"], [1, "pbox", "hard"], [1, "ptxt", "hard-c"], [1, "section-label"], [1, "list"], [1, "card-link", 3, "routerLink"], [1, "num"], [1, "body"], [1, "title"], [1, "cat"], [1, "tag"]], template: function LcListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-title");
      \u0275\u0275text(3, "LeetCode Questions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "ion-toolbar");
      \u0275\u0275element(5, "ion-searchbar", 1);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "ion-content")(7, "div", 2)(8, "div", 3)(9, "span", 4);
      \u0275\u0275text(10, "YOUR PROGRESS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 5)(12, "div", 6)(13, "span", 7);
      \u0275\u0275text(14, "0");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "span", 8);
      \u0275\u0275text(16, "Easy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 9)(18, "span", 7);
      \u0275\u0275text(19, "0");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "span", 10);
      \u0275\u0275text(21, "Medium");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 11)(23, "span", 7);
      \u0275\u0275text(24, "0");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "span", 12);
      \u0275\u0275text(26, "Hard");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "span", 13);
      \u0275\u0275text(28, "POPULAR PROBLEMS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 14);
      \u0275\u0275repeaterCreate(30, LcListComponent_For_31_Template, 10, 8, "a", 15, _forTrack0);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(30);
      \u0275\u0275repeater(ctx.problems);
    }
  }, dependencies: [RouterLink, IonContent, IonHeader, IonToolbar, IonTitle, IonSearchbar], styles: ['\n\n.page[_ngcontent-%COMP%] {\n  padding: 4px 16px 100px;\n}\n.progress[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  padding: 18px 20px;\n  margin-bottom: 24px;\n}\n.progress-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.6rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  color: #94a3b8;\n  margin-bottom: 14px;\n}\n.progress-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 4px;\n  text-align: center;\n}\n.pbox[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n}\n.pbox.easy[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n}\n.pbox.medium[_ngcontent-%COMP%] {\n  background: #fffbeb;\n}\n.pbox.hard[_ngcontent-%COMP%] {\n  background: #fef2f2;\n}\n.pnum[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 800;\n}\n.pbox.easy[_ngcontent-%COMP%]   .pnum[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.pbox.medium[_ngcontent-%COMP%]   .pnum[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.pbox.hard[_ngcontent-%COMP%]   .pnum[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.ptxt[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.62rem;\n  font-weight: 600;\n  margin-top: 6px;\n}\n.easy-c[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.medium-c[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.hard-c[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.section-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.62rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  color: #94a3b8;\n  margin-bottom: 14px;\n}\n.list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.card-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px 12px 14px;\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);\n  text-decoration: none;\n  color: inherit;\n  transition: box-shadow 0.2s, transform 0.2s;\n}\n.card-link[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n  transform: translateY(-1px);\n}\n.num[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  border-radius: 9px;\n  background: #f1f5f9;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: #64748b;\n}\n.body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: #0f172a;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cat[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  color: #94a3b8;\n}\n.tag[_ngcontent-%COMP%] {\n  font-size: 0.55rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  padding: 2px 8px;\n  border-radius: 5px;\n  white-space: nowrap;\n}\n.tag[data-d=Easy][_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #059669;\n}\n.tag[data-d=Medium][_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #d97706;\n}\n.tag[data-d=Hard][_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n}\n/*# sourceMappingURL=lc-list.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LcListComponent, [{
    type: Component,
    args: [{ selector: "app-lc-list", changeDetection: ChangeDetectionStrategy.OnPush, imports: [RouterLink, IonContent, IonHeader, IonToolbar, IonTitle, IonSearchbar], template: `
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-title>LeetCode Questions</ion-title>
      </ion-toolbar>
      <ion-toolbar>
        <ion-searchbar placeholder="Search by number or title..." animated="true" />
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="page">
        <!-- Progress -->
        <div class="progress">
          <span class="progress-label">YOUR PROGRESS</span>
          <div class="progress-row">
            <div class="pbox easy"><span class="pnum">0</span></div>
            <span class="ptxt easy-c">Easy</span>
            <div class="pbox medium"><span class="pnum">0</span></div>
            <span class="ptxt medium-c">Medium</span>
            <div class="pbox hard"><span class="pnum">0</span></div>
            <span class="ptxt hard-c">Hard</span>
          </div>
        </div>

        <span class="section-label">POPULAR PROBLEMS</span>
        <div class="list">
          @for (p of problems; track p.number) {
            <a [routerLink]="['/leetcode', p.number]" class="card-link">
              <div class="num">{{ p.number }}</div>
              <div class="body">
                <span class="title">{{ p.title }}</span>
                <span class="cat">{{ p.category }}</span>
              </div>
              <span class="tag" [attr.data-d]="p.difficulty">{{ p.difficulty }}</span>
            </a>
          }
        </div>
      </div>
    </ion-content>
  `, styles: ['/* angular:styles/component:css;3aa725f0d6ee01d6e0c74ff94af05c06394362f2ed76e1f7a5784c2871fc42f1;D:/A21/JavaIQ/src/app/features/leetcode/lc-list.component.ts */\n.page {\n  padding: 4px 16px 100px;\n}\n.progress {\n  background: #fff;\n  border-radius: 16px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  padding: 18px 20px;\n  margin-bottom: 24px;\n}\n.progress-label {\n  display: block;\n  font-size: 0.6rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  color: #94a3b8;\n  margin-bottom: 14px;\n}\n.progress-row {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 4px;\n  text-align: center;\n}\n.pbox {\n  width: 50px;\n  height: 50px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n}\n.pbox.easy {\n  background: #ecfdf5;\n}\n.pbox.medium {\n  background: #fffbeb;\n}\n.pbox.hard {\n  background: #fef2f2;\n}\n.pnum {\n  font-size: 1.1rem;\n  font-weight: 800;\n}\n.pbox.easy .pnum {\n  color: #059669;\n}\n.pbox.medium .pnum {\n  color: #d97706;\n}\n.pbox.hard .pnum {\n  color: #dc2626;\n}\n.ptxt {\n  display: block;\n  font-size: 0.62rem;\n  font-weight: 600;\n  margin-top: 6px;\n}\n.easy-c {\n  color: #059669;\n}\n.medium-c {\n  color: #d97706;\n}\n.hard-c {\n  color: #dc2626;\n}\n.section-label {\n  display: block;\n  font-size: 0.62rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  color: #94a3b8;\n  margin-bottom: 14px;\n}\n.list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.card-link {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px 12px 14px;\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);\n  text-decoration: none;\n  color: inherit;\n  transition: box-shadow 0.2s, transform 0.2s;\n}\n.card-link:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n  transform: translateY(-1px);\n}\n.num {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  border-radius: 9px;\n  background: #f1f5f9;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: #64748b;\n}\n.body {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.title {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: #0f172a;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cat {\n  font-size: 0.6rem;\n  color: #94a3b8;\n}\n.tag {\n  font-size: 0.55rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  padding: 2px 8px;\n  border-radius: 5px;\n  white-space: nowrap;\n}\n.tag[data-d=Easy] {\n  background: #ecfdf5;\n  color: #059669;\n}\n.tag[data-d=Medium] {\n  background: #fffbeb;\n  color: #d97706;\n}\n.tag[data-d=Hard] {\n  background: #fef2f2;\n  color: #dc2626;\n}\n/*# sourceMappingURL=lc-list.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LcListComponent, { className: "LcListComponent", filePath: "src/app/features/leetcode/lc-list.component.ts", lineNumber: 151 });
})();
export {
  LcListComponent
};
//# sourceMappingURL=chunk-2TGUFBU4.js.map
