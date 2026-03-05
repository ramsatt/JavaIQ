import {
  CodeBlockComponent,
  IconComponent,
  TutorialLayoutComponent
} from "./chunk-MLPCG66Y.js";
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
  ɵɵtext
} from "./chunk-VBTVL2BZ.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/dp-decorator.component.ts
var DpDecoratorComponent = class _DpDecoratorComponent {
  codeIntro = `// Coffee example:
// Base: Espresso ($2)
// + Milk ($0.50) \u2192 MilkDecorator wraps Espresso
// + Whip ($0.30) \u2192 WhipDecorator wraps MilkDecorator
// Total: $2.80

// Each decorator adds behavior WITHOUT modifying the original`;
  codeClassic = `interface DataSource {
    void writeData(String data);
    String readData();
}

class FileDataSource implements DataSource {
    public void writeData(String data) { /* write to file */ }
    public String readData() { return "raw data"; }
}

class EncryptionDecorator implements DataSource {
    private final DataSource wrapped;
    EncryptionDecorator(DataSource ds) { wrapped = ds; }
    public void writeData(String data) { wrapped.writeData(encrypt(data)); }
    public String readData() { return decrypt(wrapped.readData()); }
}

class CompressionDecorator implements DataSource {
    private final DataSource wrapped;
    CompressionDecorator(DataSource ds) { wrapped = ds; }
    public void writeData(String data) { wrapped.writeData(compress(data)); }
    public String readData() { return decompress(wrapped.readData()); }
}

// Compose!
DataSource ds = new CompressionDecorator(
    new EncryptionDecorator(new FileDataSource("data.txt")));`;
  codeIO = `// Java I/O is built on Decorator pattern!
InputStream is = new BufferedInputStream(              // buffer
    new GZIPInputStream(                               // decompress
        new FileInputStream("data.gz")));              // base

// Each wrapper adds a layer of functionality
// FileInputStream \u2192 reads bytes
// GZIPInputStream \u2192 decompresses
// BufferedInputStream \u2192 adds buffering`;
  codeFunctional = `// Function composition as decoration
Function<String, String> processor = Function.identity();
processor = processor
    .andThen(String::trim)
    .andThen(String::toLowerCase)
    .andThen(s -> s.replaceAll("\\\\s+", " "));

String result = processor.apply("  HELLO   WORLD  ");
// \u2192 "hello world"

// UnaryOperator composition
UnaryOperator<BigDecimal> pricing = UnaryOperator.identity();
pricing = pricing.andThen(p -> p.multiply(new BigDecimal("0.9")))  // 10% off
                 .andThen(p -> p.add(new BigDecimal("5")));        // + shipping`;
  codeSpring = `// Spring HandlerInterceptor (decorator for HTTP)
@Component
public class LoggingInterceptor implements HandlerInterceptor {
    public boolean preHandle(HttpServletRequest req, HttpServletResponse resp, Object h) {
        log.info("Request: {} {}", req.getMethod(), req.getRequestURI());
        return true;  // continue chain
    }
    public void afterCompletion(HttpServletRequest req, HttpServletResponse resp, Object h, Exception ex) {
        log.info("Response: {} in {}ms", resp.getStatus(), elapsed);
    }
}

// @Transactional is a decorator (wraps method with TX logic)
// @Cacheable is a decorator (wraps method with cache logic)`;
  static \u0275fac = function DpDecoratorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DpDecoratorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DpDecoratorComponent, selectors: [["app-topic-dp-decorator"]], decls: 33, vars: 7, consts: [["title", "Decorator", "subtitle", "Extend behavior dynamically. Wrapping objects, I/O streams, and Spring interceptors.", "badge", "DESIGN PATTERNS", "gradient", "linear-gradient(135deg, #6d28d9, #c084fc)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-violet", 3, "size"], [1, "prose"], [3, "code"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"]], template: function DpDecoratorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Decorator");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7, "The ");
      \u0275\u0275elementStart(8, "strong");
      \u0275\u0275text(9, "Decorator");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " wraps an object to add new behavior without modifying the original class. Decorators are composable.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "section", 1)(13, "h2", 2);
      \u0275\u0275element(14, "app-icon", 6);
      \u0275\u0275text(15, " Examples");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 7)(17, "div", 8)(18, "h3", 9);
      \u0275\u0275text(19, "Classic");
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 8)(22, "h3", 9);
      \u0275\u0275text(23, "Java I/O");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 8)(26, "h3", 9);
      \u0275\u0275text(27, "Functional");
      \u0275\u0275elementEnd();
      \u0275\u0275element(28, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 8)(30, "h3", 9);
      \u0275\u0275text(31, "Spring");
      \u0275\u0275elementEnd();
      \u0275\u0275element(32, "app-code-block", 5);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(8);
      \u0275\u0275property("code", ctx.codeIntro);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(6);
      \u0275\u0275property("code", ctx.codeClassic);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeIO);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeFunctional);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeSpring);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ["\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-violet[_ngcontent-%COMP%] {\n  color: #7c3aed;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=dp-decorator.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DpDecoratorComponent, [{
    type: Component,
    args: [{ selector: "app-topic-dp-decorator", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout title="Decorator" subtitle="Extend behavior dynamically. Wrapping objects, I/O streams, and Spring interceptors." badge="DESIGN PATTERNS" gradient="linear-gradient(135deg, #6d28d9, #c084fc)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-violet" /> Decorator</h2>
        <div class="prose"><p>The <strong>Decorator</strong> wraps an object to add new behavior without modifying the original class. Decorators are composable.</p><app-code-block [code]="codeIntro" /></div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Examples</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Classic</h3><app-code-block [code]="codeClassic" /></div>
          <div class="op-card"><h3 class="op-title">Java I/O</h3><app-code-block [code]="codeIO" /></div>
          <div class="op-card"><h3 class="op-title">Functional</h3><app-code-block [code]="codeFunctional" /></div>
          <div class="op-card"><h3 class="op-title">Spring</h3><app-code-block [code]="codeSpring" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ["/* angular:styles/component:css;3fdea3d65f998ea6e02a91e28e2bbadf57463c689a1bfe3f13b44f31a77d8a11;/Users/sathishkumarramalingam/projects/JavaIQ/.claude/worktrees/goofy-haibt/src/app/features/tutorials/topics/dp-decorator.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-violet {\n  color: #7c3aed;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=dp-decorator.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DpDecoratorComponent, { className: "DpDecoratorComponent", filePath: "src/app/features/tutorials/topics/dp-decorator.component.ts", lineNumber: 33 });
})();
export {
  DpDecoratorComponent
};
//# sourceMappingURL=chunk-WJVD4R66.js.map
