import {
  ChangeDetectionStrategy,
  Component,
  Input,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-6OY2Y3BE.js";

// src/app/shared/code-block.component.ts
var CodeBlockComponent = class _CodeBlockComponent {
  code = input.required(...ngDevMode ? [{ debugName: "code" }] : []);
  static \u0275fac = function CodeBlockComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CodeBlockComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CodeBlockComponent, selectors: [["app-code-block"]], inputs: { code: [1, "code"] }, decls: 4, vars: 1, consts: [[1, "code-wrapper"]], template: function CodeBlockComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "pre")(2, "code");
      \u0275\u0275text(3);
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.code());
    }
  }, styles: ['\n\n.code-wrapper[_ngcontent-%COMP%] {\n  background: #1e293b;\n  color: #e2e8f0;\n  padding: 18px 20px;\n  border-radius: 14px;\n  overflow-x: auto;\n  margin: 16px 0;\n  font-family:\n    "JetBrains Mono",\n    "Fira Code",\n    monospace;\n  font-size: 0.78rem;\n  line-height: 1.7;\n  border: 1px solid #334155;\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15);\n}\npre[_ngcontent-%COMP%] {\n  margin: 0;\n}\ncode[_ngcontent-%COMP%] {\n  white-space: pre;\n}\n/*# sourceMappingURL=code-block.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CodeBlockComponent, [{
    type: Component,
    args: [{ selector: "app-code-block", changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <div class="code-wrapper">
      <pre><code>{{ code() }}</code></pre>
    </div>
  `, styles: ['/* angular:styles/component:css;6830c70c378b84086505ec109bd559823a7a63f7de55c0b544ee112f987175b0;D:/A21/JavaIQ/src/app/shared/code-block.component.ts */\n.code-wrapper {\n  background: #1e293b;\n  color: #e2e8f0;\n  padding: 18px 20px;\n  border-radius: 14px;\n  overflow-x: auto;\n  margin: 16px 0;\n  font-family:\n    "JetBrains Mono",\n    "Fira Code",\n    monospace;\n  font-size: 0.78rem;\n  line-height: 1.7;\n  border: 1px solid #334155;\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15);\n}\npre {\n  margin: 0;\n}\ncode {\n  white-space: pre;\n}\n/*# sourceMappingURL=code-block.component.css.map */\n'] }]
  }], null, { code: [{ type: Input, args: [{ isSignal: true, alias: "code", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CodeBlockComponent, { className: "CodeBlockComponent", filePath: "src/app/shared/code-block.component.ts", lineNumber: 29 });
})();

// src/app/shared/tutorial-layout.component.ts
var _c0 = ["*"];
var TutorialLayoutComponent = class _TutorialLayoutComponent {
  badge = input("JAVA MASTERCLASS", ...ngDevMode ? [{ debugName: "badge" }] : []);
  title = input.required(...ngDevMode ? [{ debugName: "title" }] : []);
  subtitle = input("", ...ngDevMode ? [{ debugName: "subtitle" }] : []);
  gradient = input("linear-gradient(135deg, #1e40af, #6366f1)", ...ngDevMode ? [{ debugName: "gradient" }] : []);
  static \u0275fac = function TutorialLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TutorialLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TutorialLayoutComponent, selectors: [["app-tutorial-layout"]], inputs: { badge: [1, "badge"], title: [1, "title"], subtitle: [1, "subtitle"], gradient: [1, "gradient"] }, ngContentSelectors: _c0, decls: 14, vars: 5, consts: [[1, "tutorial-page"], [1, "hero"], [1, "hero-inner"], [1, "hero-badge"], [1, "hero-title"], [1, "hero-subtitle"], [1, "content"], [1, "footer"]], template: function TutorialLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275domElementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "h1", 4);
      \u0275\u0275text(6);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(7, "p", 5);
      \u0275\u0275text(8);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(9, "main", 6);
      \u0275\u0275projection(10);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(11, "footer", 7)(12, "p");
      \u0275\u0275text(13, "\xA9 2026 JavaIQ \u2014 Java Masterclass Tutorials");
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275styleProp("background", ctx.gradient());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.badge());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.title());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.subtitle());
    }
  }, styles: ["\n\n.tutorial-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: #f8fafc;\n}\n.hero[_ngcontent-%COMP%] {\n  padding: 52px 20px 36px;\n  color: #fff;\n}\n.hero-inner[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin: 0 auto;\n}\n.hero-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: rgba(255, 255, 255, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  padding: 4px 14px;\n  border-radius: 20px;\n  font-size: 0.62rem;\n  font-weight: 700;\n  letter-spacing: 0.15em;\n  margin-bottom: 14px;\n}\n.hero-title[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-size: 1.85rem;\n  font-weight: 800;\n  letter-spacing: -0.03em;\n  line-height: 1.15;\n}\n.hero-subtitle[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.88rem;\n  color: rgba(255, 255, 255, 0.75);\n  line-height: 1.55;\n  max-width: 560px;\n}\n.content[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin: 0 auto;\n  padding: 36px 20px 80px;\n}\n.footer[_ngcontent-%COMP%] {\n  background: #1e293b;\n  color: #94a3b8;\n  text-align: center;\n  padding: 24px 20px;\n  font-size: 0.72rem;\n}\n.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=tutorial-layout.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TutorialLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-tutorial-layout", changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <div class="tutorial-page">
      <!-- Hero Header -->
      <header class="hero" [style.background]="gradient()">
        <div class="hero-inner">
          <span class="hero-badge">{{ badge() }}</span>
          <h1 class="hero-title">{{ title() }}</h1>
          <p class="hero-subtitle">{{ subtitle() }}</p>
        </div>
      </header>

      <!-- Content Slot -->
      <main class="content">
        <ng-content />
      </main>

      <!-- Footer -->
      <footer class="footer">
        <p>\xA9 2026 JavaIQ \u2014 Java Masterclass Tutorials</p>
      </footer>
    </div>
  `, styles: ["/* angular:styles/component:css;5df9c275dc69332c13ff1f95fa8e1a16198da0d2e214e86e6faa59e9b02eabf3;D:/A21/JavaIQ/src/app/shared/tutorial-layout.component.ts */\n.tutorial-page {\n  min-height: 100vh;\n  background: #f8fafc;\n}\n.hero {\n  padding: 52px 20px 36px;\n  color: #fff;\n}\n.hero-inner {\n  max-width: 720px;\n  margin: 0 auto;\n}\n.hero-badge {\n  display: inline-block;\n  background: rgba(255, 255, 255, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  padding: 4px 14px;\n  border-radius: 20px;\n  font-size: 0.62rem;\n  font-weight: 700;\n  letter-spacing: 0.15em;\n  margin-bottom: 14px;\n}\n.hero-title {\n  margin: 0 0 10px;\n  font-size: 1.85rem;\n  font-weight: 800;\n  letter-spacing: -0.03em;\n  line-height: 1.15;\n}\n.hero-subtitle {\n  margin: 0;\n  font-size: 0.88rem;\n  color: rgba(255, 255, 255, 0.75);\n  line-height: 1.55;\n  max-width: 560px;\n}\n.content {\n  max-width: 720px;\n  margin: 0 auto;\n  padding: 36px 20px 80px;\n}\n.footer {\n  background: #1e293b;\n  color: #94a3b8;\n  text-align: center;\n  padding: 24px 20px;\n  font-size: 0.72rem;\n}\n.footer p {\n  margin: 0;\n}\n/*# sourceMappingURL=tutorial-layout.component.css.map */\n"] }]
  }], null, { badge: [{ type: Input, args: [{ isSignal: true, alias: "badge", required: false }] }], title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: true }] }], subtitle: [{ type: Input, args: [{ isSignal: true, alias: "subtitle", required: false }] }], gradient: [{ type: Input, args: [{ isSignal: true, alias: "gradient", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TutorialLayoutComponent, { className: "TutorialLayoutComponent", filePath: "src/app/shared/tutorial-layout.component.ts", lineNumber: 78 });
})();

export {
  CodeBlockComponent,
  TutorialLayoutComponent
};
//# sourceMappingURL=chunk-ACGKXV3L.js.map
