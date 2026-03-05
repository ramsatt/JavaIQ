import {
  CodeBlockComponent,
  IconComponent,
  TutorialLayoutComponent
} from "./chunk-5ZPIB2CR.js";
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
} from "./chunk-L6VISU4K.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/dp-chain.component.ts
var DpChainComponent = class _DpChainComponent {
  codeIntro = `// Request \u2192 Handler1 \u2192 Handler2 \u2192 Handler3
// Each handler: process OR pass to next
// Real-world: Spring Security filter chain, Servlet filters`;
  codeClassic = `abstract class Handler {
    private Handler next;
    Handler setNext(Handler h) { next = h; return h; }

    void handle(Request request) {
        if (canHandle(request)) {
            process(request);
        } else if (next != null) {
            next.handle(request);
        }
    }
    abstract boolean canHandle(Request r);
    abstract void process(Request r);
}

class AuthHandler extends Handler {
    boolean canHandle(Request r) { return !r.isAuthenticated(); }
    void process(Request r) { throw new UnauthorizedException(); }
}

class LogHandler extends Handler {
    boolean canHandle(Request r) { return true; }
    void process(Request r) { log.info(r.toString()); }
}

// Build chain
Handler chain = new AuthHandler();
chain.setNext(new LogHandler()).setNext(new BusinessHandler());
chain.handle(request);`;
  codeMiddleware = `// Middleware pipeline
interface Middleware {
    boolean check(Request req);
}

class Pipeline {
    private final List<Middleware> middlewares = new ArrayList<>();
    void add(Middleware m) { middlewares.add(m); }

    boolean execute(Request request) {
        for (Middleware m : middlewares) {
            if (!m.check(request)) return false;
        }
        return true;
    }
}

Pipeline pipeline = new Pipeline();
pipeline.add(req -> req.getToken() != null);     // auth
pipeline.add(req -> rateLimiter.allow(req.getIp())); // rate limit
pipeline.add(req -> validator.isValid(req));     // validation

if (pipeline.execute(request)) { processRequest(request); }`;
  codeServlet = `// Servlet Filter Chain (built-in CoR)
@Component
public class LogFilter implements Filter {
    public void doFilter(ServletRequest req, ServletResponse res,
                         FilterChain chain) throws IOException, ServletException {
        log.info("Before: {}", ((HttpServletRequest) req).getRequestURI());
        chain.doFilter(req, res);  // pass to next filter
        log.info("After: {}", ((HttpServletResponse) res).getStatus());
    }
}

// Spring Security = chain of filters
// CorsFilter \u2192 CsrfFilter \u2192 AuthFilter \u2192 AuthorizationFilter`;
  codeFunctional = `// Functional chain with Predicate
List<Predicate<Request>> validators = List.of(
    req -> req.getBody() != null,
    req -> req.getBody().length() < 10000,
    req -> req.getContentType().contains("json")
);

boolean allValid = validators.stream().allMatch(v -> v.test(request));

// Function composition as chain
Function<String, String> pipeline = Function.<String>identity()
    .andThen(String::trim)
    .andThen(String::toLowerCase)
    .andThen(s -> s.replaceAll("[^a-z0-9]", ""));

String result = pipeline.apply("  Hello, World!  ");
// \u2192 "helloworld"`;
  static \u0275fac = function DpChainComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DpChainComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DpChainComponent, selectors: [["app-topic-dp-chain"]], decls: 33, vars: 7, consts: [["title", "Chain of Responsibility", "subtitle", "Request pipeline. Middleware chains, filter chains, and approval workflows.", "badge", "DESIGN PATTERNS", "gradient", "linear-gradient(135deg, #4338ca, #818cf8)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-indigo", 3, "size"], [1, "prose"], [3, "code"], ["name", "code", "css", "icon-purple", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"]], template: function DpChainComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Chain");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7, "The ");
      \u0275\u0275elementStart(8, "strong");
      \u0275\u0275text(9, "Chain of Responsibility");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " passes a request through a chain of handlers. Each handler decides to process it or pass it along.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "section", 1)(13, "h2", 2);
      \u0275\u0275element(14, "app-icon", 6);
      \u0275\u0275text(15, " Examples");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 7)(17, "div", 8)(18, "h3", 9);
      \u0275\u0275text(19, "Classic Chain");
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 8)(22, "h3", 9);
      \u0275\u0275text(23, "Middleware");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 8)(26, "h3", 9);
      \u0275\u0275text(27, "Servlet Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275element(28, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 8)(30, "h3", 9);
      \u0275\u0275text(31, "Functional");
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
      \u0275\u0275property("code", ctx.codeMiddleware);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeServlet);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeFunctional);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ["\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.icon-purple[_ngcontent-%COMP%] {\n  color: #7c3aed;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=dp-chain.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DpChainComponent, [{
    type: Component,
    args: [{ selector: "app-topic-dp-chain", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout title="Chain of Responsibility" subtitle="Request pipeline. Middleware chains, filter chains, and approval workflows." badge="DESIGN PATTERNS" gradient="linear-gradient(135deg, #4338ca, #818cf8)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-indigo" /> Chain</h2>
        <div class="prose"><p>The <strong>Chain of Responsibility</strong> passes a request through a chain of handlers. Each handler decides to process it or pass it along.</p><app-code-block [code]="codeIntro" /></div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-purple" /> Examples</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Classic Chain</h3><app-code-block [code]="codeClassic" /></div>
          <div class="op-card"><h3 class="op-title">Middleware</h3><app-code-block [code]="codeMiddleware" /></div>
          <div class="op-card"><h3 class="op-title">Servlet Filters</h3><app-code-block [code]="codeServlet" /></div>
          <div class="op-card"><h3 class="op-title">Functional</h3><app-code-block [code]="codeFunctional" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ["/* angular:styles/component:css;f6592c87288417d3ae543d382647fc43f886f07450a9af352fc337c25b3984ff;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/features/tutorials/topics/dp-chain.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.icon-purple {\n  color: #7c3aed;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=dp-chain.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DpChainComponent, { className: "DpChainComponent", filePath: "src/app/features/tutorials/topics/dp-chain.component.ts", lineNumber: 33 });
})();
export {
  DpChainComponent
};
//# sourceMappingURL=chunk-G3I6BISK.js.map
