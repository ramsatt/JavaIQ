import {
  CodeBlockComponent,
  TutorialLayoutComponent
} from "./chunk-ACGKXV3L.js";
import {
  IconComponent
} from "./chunk-GCMLYE3M.js";
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
} from "./chunk-6OY2Y3BE.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/dp-singleton.component.ts
var DpSingletonComponent = class _DpSingletonComponent {
  codeIntro = `// Problem: Need exactly ONE instance
// Examples: Logger, ConfigManager, ConnectionPool
// Solution: Private constructor + static access

// \u274C Anti-pattern: global mutable state
// \u2705 Use DI (Spring @Component) instead when possible`;
  codeEnum = `// BEST approach: Enum singleton
public enum DatabasePool {
    INSTANCE;

    private final HikariDataSource ds;

    DatabasePool() {
        ds = new HikariDataSource();
        ds.setJdbcUrl("jdbc:postgresql://localhost/mydb");
    }

    public Connection getConnection() throws SQLException {
        return ds.getConnection();
    }
}

// Usage
Connection conn = DatabasePool.INSTANCE.getConnection();

// \u2705 Thread-safe, serialization-safe, reflection-safe`;
  codeLazy = `// Bill Pugh / Lazy Holder idiom
public class Logger {
    private Logger() {}

    private static class Holder {
        // loaded only when getInstance() is called
        static final Logger INSTANCE = new Logger();
    }

    public static Logger getInstance() {
        return Holder.INSTANCE;
    }
}

// \u2705 Thread-safe (class loading is thread-safe)
// \u2705 Lazy initialization
// \u2705 No synchronization overhead`;
  codeDouble = `// Double-checked locking (pre-Java 5 era)
public class Cache {
    private static volatile Cache instance;

    private Cache() {}

    public static Cache getInstance() {
        if (instance == null) {           // 1st check (no lock)
            synchronized (Cache.class) {
                if (instance == null) {    // 2nd check (with lock)
                    instance = new Cache();
                }
            }
        }
        return instance;
    }
}

// \u26A0\uFE0F volatile is REQUIRED (prevents instruction reordering)`;
  codeSpring = `// In Spring, just use @Component
@Service  // singleton by default!
public class UserService {
    // Spring manages the single instance
    // No manual singleton code needed
}

// Spring scopes:
// @Scope("singleton")  \u2014 default, one per container
// @Scope("prototype")  \u2014 new instance each injection
// @Scope("request")    \u2014 one per HTTP request
// @Scope("session")    \u2014 one per HTTP session`;
  static \u0275fac = function DpSingletonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DpSingletonComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DpSingletonComponent, selectors: [["app-topic-dp-singleton"]], decls: 33, vars: 7, consts: [["title", "Singleton", "subtitle", "Ensure a class has only one instance. Thread-safe approaches, enum singleton, and best practices.", "badge", "DESIGN PATTERNS", "gradient", "linear-gradient(135deg, #4338ca, #818cf8)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-indigo", 3, "size"], [1, "prose"], [3, "code"], ["name", "code", "css", "icon-purple", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"]], template: function DpSingletonComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Singleton");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7, "The ");
      \u0275\u0275elementStart(8, "strong");
      \u0275\u0275text(9, "Singleton");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " pattern ensures exactly one instance exists. Used for configuration, logging, connection pools, and caches.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "section", 1)(13, "h2", 2);
      \u0275\u0275element(14, "app-icon", 6);
      \u0275\u0275text(15, " Implementations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 7)(17, "div", 8)(18, "h3", 9);
      \u0275\u0275text(19, "Enum (Best!)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 8)(22, "h3", 9);
      \u0275\u0275text(23, "Lazy Holder");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 8)(26, "h3", 9);
      \u0275\u0275text(27, "Double-Checked");
      \u0275\u0275elementEnd();
      \u0275\u0275element(28, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 8)(30, "h3", 9);
      \u0275\u0275text(31, "Spring Singleton");
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
      \u0275\u0275property("code", ctx.codeEnum);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeLazy);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeDouble);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeSpring);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ["\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.icon-purple[_ngcontent-%COMP%] {\n  color: #7c3aed;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=dp-singleton.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DpSingletonComponent, [{
    type: Component,
    args: [{ selector: "app-topic-dp-singleton", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout title="Singleton" subtitle="Ensure a class has only one instance. Thread-safe approaches, enum singleton, and best practices." badge="DESIGN PATTERNS" gradient="linear-gradient(135deg, #4338ca, #818cf8)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-indigo" /> Singleton</h2>
        <div class="prose"><p>The <strong>Singleton</strong> pattern ensures exactly one instance exists. Used for configuration, logging, connection pools, and caches.</p><app-code-block [code]="codeIntro" /></div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-purple" /> Implementations</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Enum (Best!)</h3><app-code-block [code]="codeEnum" /></div>
          <div class="op-card"><h3 class="op-title">Lazy Holder</h3><app-code-block [code]="codeLazy" /></div>
          <div class="op-card"><h3 class="op-title">Double-Checked</h3><app-code-block [code]="codeDouble" /></div>
          <div class="op-card"><h3 class="op-title">Spring Singleton</h3><app-code-block [code]="codeSpring" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ["/* angular:styles/component:css;f6592c87288417d3ae543d382647fc43f886f07450a9af352fc337c25b3984ff;D:/A21/JavaIQ/src/app/features/tutorials/topics/dp-singleton.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.icon-purple {\n  color: #7c3aed;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=dp-singleton.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DpSingletonComponent, { className: "DpSingletonComponent", filePath: "src/app/features/tutorials/topics/dp-singleton.component.ts", lineNumber: 33 });
})();
export {
  DpSingletonComponent
};
//# sourceMappingURL=chunk-MXYFFZCT.js.map
