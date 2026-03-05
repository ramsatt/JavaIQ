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

// src/app/features/tutorials/topics/dp-proxy.component.ts
var DpProxyComponent = class _DpProxyComponent {
  codeIntro = `// Types of proxies:
// Virtual:    lazy loading (load on first access)
// Protection: access control (check permissions)
// Logging:    log method calls
// Caching:    cache results
// Remote:     represent a remote object locally`;
  codeVirtual = `// Lazy loading proxy
interface Image { void display(); }

class RealImage implements Image {
    RealImage(String file) { loadFromDisk(file); } // expensive!
    public void display() { /* render */ }
}

class ImageProxy implements Image {
    private RealImage real;
    private final String file;
    ImageProxy(String file) { this.file = file; } // cheap!
    public void display() {
        if (real == null) real = new RealImage(file); // load on demand
        real.display();
    }
}

// Only loads when display() is actually called
Image img = new ImageProxy("huge_photo.jpg");`;
  codeProtection = `// Access control proxy
interface Document {
    void read();
    void write(String content);
}

class SecureDocumentProxy implements Document {
    private final Document real;
    private final User user;

    public void read() {
        if (!user.hasPermission("READ"))
            throw new AccessDeniedException("No read access");
        real.read();
    }
    public void write(String content) {
        if (!user.hasPermission("WRITE"))
            throw new AccessDeniedException("No write access");
        real.write(content);
    }
}`;
  codeDynamic = `// Java Dynamic Proxy (runtime!)
UserService proxy = (UserService) Proxy.newProxyInstance(
    UserService.class.getClassLoader(),
    new Class[]{UserService.class},
    (proxyObj, method, args) -> {
        log.info("Calling: {}", method.getName());
        long start = System.nanoTime();
        Object result = method.invoke(realService, args);
        long elapsed = System.nanoTime() - start;
        log.info("{} took {}ms", method.getName(), elapsed / 1_000_000);
        return result;
    }
);

proxy.getUser(1L);  // logged automatically!`;
  codeAop = `// Spring AOP = dynamic proxy magic!
// @Transactional creates a proxy that:
// 1. Opens transaction before method
// 2. Calls real method
// 3. Commits on success / rollbacks on error

@Service
public class OrderService {
    @Transactional  // proxy wraps this method
    public void placeOrder(Order order) {
        orderRepo.save(order);
        paymentService.charge(order);
    }
}

// @Cacheable, @Async, @Retry \u2014 all use proxies!
// Spring uses JDK Dynamic Proxy (interfaces)
// or CGLIB (classes) to generate proxies`;
  static \u0275fac = function DpProxyComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DpProxyComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DpProxyComponent, selectors: [["app-topic-dp-proxy"]], decls: 33, vars: 7, consts: [["title", "Proxy", "subtitle", "Control object access. Virtual proxy, protection proxy, dynamic proxy, and Spring AOP.", "badge", "DESIGN PATTERNS", "gradient", "linear-gradient(135deg, #374151, #9ca3af)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-gray", 3, "size"], [1, "prose"], [3, "code"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"]], template: function DpProxyComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Proxy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7, "The ");
      \u0275\u0275elementStart(8, "strong");
      \u0275\u0275text(9, "Proxy");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " pattern provides a surrogate to control access to an object. Used for caching, logging, security, and lazy loading.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "section", 1)(13, "h2", 2);
      \u0275\u0275element(14, "app-icon", 6);
      \u0275\u0275text(15, " Types");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 7)(17, "div", 8)(18, "h3", 9);
      \u0275\u0275text(19, "Virtual Proxy");
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 8)(22, "h3", 9);
      \u0275\u0275text(23, "Protection Proxy");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 8)(26, "h3", 9);
      \u0275\u0275text(27, "Dynamic Proxy");
      \u0275\u0275elementEnd();
      \u0275\u0275element(28, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 8)(30, "h3", 9);
      \u0275\u0275text(31, "Spring AOP");
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
      \u0275\u0275property("code", ctx.codeVirtual);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeProtection);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeDynamic);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeAop);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ["\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-gray[_ngcontent-%COMP%] {\n  color: #475569;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=dp-proxy.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DpProxyComponent, [{
    type: Component,
    args: [{ selector: "app-topic-dp-proxy", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout title="Proxy" subtitle="Control object access. Virtual proxy, protection proxy, dynamic proxy, and Spring AOP." badge="DESIGN PATTERNS" gradient="linear-gradient(135deg, #374151, #9ca3af)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-gray" /> Proxy</h2>
        <div class="prose"><p>The <strong>Proxy</strong> pattern provides a surrogate to control access to an object. Used for caching, logging, security, and lazy loading.</p><app-code-block [code]="codeIntro" /></div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Types</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Virtual Proxy</h3><app-code-block [code]="codeVirtual" /></div>
          <div class="op-card"><h3 class="op-title">Protection Proxy</h3><app-code-block [code]="codeProtection" /></div>
          <div class="op-card"><h3 class="op-title">Dynamic Proxy</h3><app-code-block [code]="codeDynamic" /></div>
          <div class="op-card"><h3 class="op-title">Spring AOP</h3><app-code-block [code]="codeAop" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ["/* angular:styles/component:css;7098f8916a2681ec9559acde1c6ab82c1e7aebab1dd5080bd6524a36803ea0f7;/Users/sathishkumarramalingam/projects/JavaIQ/.claude/worktrees/goofy-haibt/src/app/features/tutorials/topics/dp-proxy.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-gray {\n  color: #475569;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=dp-proxy.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DpProxyComponent, { className: "DpProxyComponent", filePath: "src/app/features/tutorials/topics/dp-proxy.component.ts", lineNumber: 33 });
})();
export {
  DpProxyComponent
};
//# sourceMappingURL=chunk-H3KZDCJO.js.map
