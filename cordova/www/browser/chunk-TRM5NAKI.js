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

// src/app/features/tutorials/tutorial-list.component.ts
var _c0 = (a0) => ["/tutorials", a0];
var _forTrack0 = ($index, $item) => $item.slug;
function TutorialListComponent_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 9)(1, "div", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 11)(4, "span", 12);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 13);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 14)(9, "span", 15);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 15);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 16);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "span", 17);
    \u0275\u0275text(16, "\u203A");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c0, c_r1.slug));
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", c_r1.bg);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r1.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r1.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u{1F4D6} ", c_r1.chapterCount, " chapters");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u23F1 ", c_r1.estimatedTime);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-level", c_r1.difficulty);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r1.difficulty);
  }
}
var TutorialListComponent = class _TutorialListComponent {
  courses = [
    { slug: "core-java", title: "Core Java", description: "OOP, Collections, Streams, Generics, and modern Java features like Records and Sealed Classes.", icon: "\u2615", bg: "#fff7ed", chapterCount: 15, difficulty: "beginner", estimatedTime: "8 hours" },
    { slug: "spring-framework", title: "Spring Framework", description: "IoC, DI, AOP, MVC, Security, Data Access, REST APIs, Events, Caching, and Testing.", icon: "\u{1F331}", bg: "#f0fdf4", chapterCount: 12, difficulty: "intermediate", estimatedTime: "10 hours" },
    { slug: "spring-boot", title: "Spring Boot", description: "Auto-configuration, starters, REST APIs, security, actuator, and production deployment.", icon: "\u{1F680}", bg: "#ecfeff", chapterCount: 18, difficulty: "intermediate", estimatedTime: "10 hours" },
    { slug: "hibernate", title: "Hibernate & JPA", description: "ORM fundamentals, entity mapping, relationships, caching, and performance tuning.", icon: "\u{1F5C4}\uFE0F", bg: "#faf5ff", chapterCount: 10, difficulty: "intermediate", estimatedTime: "5 hours" },
    { slug: "microservices", title: "Microservices", description: "Service discovery, API gateway, circuit breakers, event-driven design, and Docker.", icon: "\u{1F517}", bg: "#eff6ff", chapterCount: 14, difficulty: "advanced", estimatedTime: "8 hours" },
    { slug: "multithreading", title: "Multithreading", description: "Threads, concurrency, ExecutorService, CompletableFuture, and Virtual Threads.", icon: "\u26A1", bg: "#fefce8", chapterCount: 8, difficulty: "advanced", estimatedTime: "4 hours" },
    { slug: "design-patterns", title: "Design Patterns", description: "Creational, Structural, and Behavioral patterns with real-world Java implementations.", icon: "\u{1F3D7}\uFE0F", bg: "#fdf2f8", chapterCount: 12, difficulty: "intermediate", estimatedTime: "6 hours" }
  ];
  static \u0275fac = function TutorialListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TutorialListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TutorialListComponent, selectors: [["app-tutorial-list"]], decls: 20, vars: 0, consts: [[1, "ion-no-border"], ["placeholder", "Search tutorials...", "animated", "true"], [1, "page"], [1, "hero"], [1, "hero-label"], [1, "hero-title"], [1, "hero-desc"], [1, "section-label"], [1, "list"], [1, "card-link", 3, "routerLink"], [1, "icon"], [1, "body"], [1, "title"], [1, "desc"], [1, "meta"], [1, "meta-item"], [1, "tag"], [1, "arrow"]], template: function TutorialListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-title");
      \u0275\u0275text(3, "Tutorials");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "ion-toolbar");
      \u0275\u0275element(5, "ion-searchbar", 1);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "ion-content")(7, "div", 2)(8, "div", 3)(9, "span", 4);
      \u0275\u0275text(10, "LEARN & MASTER");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "h2", 5);
      \u0275\u0275text(12, "Java & Frameworks");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "p", 6);
      \u0275\u0275text(14, "Structured courses with hands-on examples. From fundamentals to advanced topics.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "span", 7);
      \u0275\u0275text(16, "ALL COURSES");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 8);
      \u0275\u0275repeaterCreate(18, TutorialListComponent_For_19_Template, 17, 12, "a", 9, _forTrack0);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(18);
      \u0275\u0275repeater(ctx.courses);
    }
  }, dependencies: [RouterLink, IonContent, IonHeader, IonToolbar, IonTitle, IonSearchbar], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  padding: 4px 16px 100px;\n}\n.hero[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5,\n      #7c3aed);\n  border-radius: 18px;\n  padding: 24px 22px;\n  margin-bottom: 24px;\n}\n.hero-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.6rem;\n  font-weight: 700;\n  letter-spacing: 0.15em;\n  color: rgba(255, 255, 255, 0.6);\n  margin-bottom: 4px;\n}\n.hero-title[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: -0.02em;\n}\n.hero-desc[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.78rem;\n  color: rgba(255, 255, 255, 0.7);\n  line-height: 1.5;\n}\n.section-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.62rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  color: #94a3b8;\n  margin-bottom: 14px;\n}\n.list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.card-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 14px 14px 14px 16px;\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  text-decoration: none;\n  color: inherit;\n  transition: box-shadow 0.2s, transform 0.2s;\n}\n.card-link[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);\n  transform: translateY(-1px);\n}\n.icon[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  min-width: 46px;\n  border-radius: 13px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.4rem;\n}\n.body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: #0f172a;\n  line-height: 1.3;\n}\n.desc[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #64748b;\n  line-height: 1.45;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 4px;\n}\n.meta-item[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  color: #94a3b8;\n  font-weight: 500;\n  white-space: nowrap;\n}\n.tag[_ngcontent-%COMP%] {\n  font-size: 0.55rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  padding: 2px 8px;\n  border-radius: 5px;\n  line-height: 1.4;\n}\n.tag[data-level=beginner][_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #059669;\n}\n.tag[data-level=intermediate][_ngcontent-%COMP%] {\n  background: #eef2ff;\n  color: #4f46e5;\n}\n.tag[data-level=advanced][_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.arrow[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  color: #cbd5e1;\n  font-weight: 300;\n  line-height: 1;\n}\n/*# sourceMappingURL=tutorial-list.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TutorialListComponent, [{
    type: Component,
    args: [{ selector: "app-tutorial-list", changeDetection: ChangeDetectionStrategy.OnPush, imports: [RouterLink, IonContent, IonHeader, IonToolbar, IonTitle, IonSearchbar], template: `
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-title>Tutorials</ion-title>
      </ion-toolbar>
      <ion-toolbar>
        <ion-searchbar placeholder="Search tutorials..." animated="true" />
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="page">
        <!-- Hero -->
        <div class="hero">
          <span class="hero-label">LEARN & MASTER</span>
          <h2 class="hero-title">Java & Frameworks</h2>
          <p class="hero-desc">Structured courses with hands-on examples. From fundamentals to advanced topics.</p>
        </div>

        <!-- Courses -->
        <span class="section-label">ALL COURSES</span>
        <div class="list">
          @for (c of courses; track c.slug) {
            <a [routerLink]="['/tutorials', c.slug]" class="card-link">
              <div class="icon" [style.background]="c.bg">{{ c.icon }}</div>
              <div class="body">
                <span class="title">{{ c.title }}</span>
                <span class="desc">{{ c.description }}</span>
                <div class="meta">
                  <span class="meta-item">\u{1F4D6} {{ c.chapterCount }} chapters</span>
                  <span class="meta-item">\u23F1 {{ c.estimatedTime }}</span>
                  <span class="tag" [attr.data-level]="c.difficulty">{{ c.difficulty }}</span>
                </div>
              </div>
              <span class="arrow">\u203A</span>
            </a>
          }
        </div>
      </div>
    </ion-content>
  `, styles: ["/* angular:styles/component:css;f3dabb140474facec78bad772064dbfe9aadfd4dfa70a0b151480248682324bb;D:/A21/JavaIQ/src/app/features/tutorials/tutorial-list.component.ts */\n.page {\n  padding: 4px 16px 100px;\n}\n.hero {\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5,\n      #7c3aed);\n  border-radius: 18px;\n  padding: 24px 22px;\n  margin-bottom: 24px;\n}\n.hero-label {\n  display: block;\n  font-size: 0.6rem;\n  font-weight: 700;\n  letter-spacing: 0.15em;\n  color: rgba(255, 255, 255, 0.6);\n  margin-bottom: 4px;\n}\n.hero-title {\n  margin: 0 0 4px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: -0.02em;\n}\n.hero-desc {\n  margin: 0;\n  font-size: 0.78rem;\n  color: rgba(255, 255, 255, 0.7);\n  line-height: 1.5;\n}\n.section-label {\n  display: block;\n  font-size: 0.62rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  color: #94a3b8;\n  margin-bottom: 14px;\n}\n.list {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.card-link {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 14px 14px 14px 16px;\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  text-decoration: none;\n  color: inherit;\n  transition: box-shadow 0.2s, transform 0.2s;\n}\n.card-link:hover {\n  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);\n  transform: translateY(-1px);\n}\n.icon {\n  width: 46px;\n  height: 46px;\n  min-width: 46px;\n  border-radius: 13px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.4rem;\n}\n.body {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.title {\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: #0f172a;\n  line-height: 1.3;\n}\n.desc {\n  font-size: 0.7rem;\n  color: #64748b;\n  line-height: 1.45;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.meta {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 4px;\n}\n.meta-item {\n  font-size: 0.6rem;\n  color: #94a3b8;\n  font-weight: 500;\n  white-space: nowrap;\n}\n.tag {\n  font-size: 0.55rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  padding: 2px 8px;\n  border-radius: 5px;\n  line-height: 1.4;\n}\n.tag[data-level=beginner] {\n  background: #ecfdf5;\n  color: #059669;\n}\n.tag[data-level=intermediate] {\n  background: #eef2ff;\n  color: #4f46e5;\n}\n.tag[data-level=advanced] {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.arrow {\n  font-size: 1.3rem;\n  color: #cbd5e1;\n  font-weight: 300;\n  line-height: 1;\n}\n/*# sourceMappingURL=tutorial-list.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TutorialListComponent, { className: "TutorialListComponent", filePath: "src/app/features/tutorials/tutorial-list.component.ts", lineNumber: 165 });
})();
export {
  TutorialListComponent
};
//# sourceMappingURL=chunk-TRM5NAKI.js.map
