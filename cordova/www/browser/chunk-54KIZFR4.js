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

// src/app/features/tutorials/topics/dp-template.component.ts
var DpTemplateComponent = class _DpTemplateComponent {
  codeIntro = `// The base class defines the FLOW (template)
// Subclasses implement SPECIFIC STEPS
// Framework provides the skeleton, you fill in the blanks`;
  codeClassic = `abstract class DataMiner {
    // Template method \u2014 defines the algorithm
    public final void mine(String path) {
        openFile(path);
        String raw = extractData();
        Data data = parseData(raw);
        analyzeData(data);
        generateReport(data);
        closeFile();
    }

    abstract void openFile(String path);
    abstract String extractData();
    abstract Data parseData(String raw);

    // Default implementation (can be overridden)
    void analyzeData(Data data) { /* default analysis */ }
    void generateReport(Data data) { /* default report */ }
    abstract void closeFile();
}

class CsvMiner extends DataMiner {
    void openFile(String path) { /* open CSV */ }
    String extractData() { return csvReader.readAll(); }
    Data parseData(String raw) { return CsvParser.parse(raw); }
    void closeFile() { csvReader.close(); }
}`;
  codeHook = `// Hooks \u2014 optional override points
abstract class OrderProcessor {
    public final void process(Order order) {
        validate(order);
        if (shouldApplyDiscount(order))  // hook!
            applyDiscount(order);
        calculateTotal(order);
        if (shouldNotify())              // hook!
            sendNotification(order);
        save(order);
    }

    abstract void validate(Order order);
    abstract void calculateTotal(Order order);
    abstract void save(Order order);

    // Hooks (optional override)
    boolean shouldApplyDiscount(Order o) { return false; }
    void applyDiscount(Order order) { }
    boolean shouldNotify() { return true; }
    void sendNotification(Order order) { /* default email */ }
}`;
  codeFunctional = `// Functional template with lambdas
class QueryTemplate {
    public <T> T execute(
            Supplier<Connection> connector,
            Function<Connection, PreparedStatement> preparer,
            Function<ResultSet, T> mapper) {
        Connection conn = connector.get();
        try {
            PreparedStatement ps = preparer.apply(conn);
            ResultSet rs = ps.executeQuery();
            return mapper.apply(rs);
        } finally {
            conn.close();
        }
    }
}

// Usage
User user = template.execute(
    dataSource::getConnection,
    conn -> conn.prepareStatement("SELECT * FROM users WHERE id=?"),
    rs -> new User(rs.getString("name")));`;
  codeSpring = `// Spring is FULL of template methods:
// JdbcTemplate \u2014 template for JDBC
jdbcTemplate.query(
    "SELECT * FROM users WHERE age > ?",
    (rs, rowNum) -> new User(rs.getString("name"), rs.getInt("age")),
    18);

// RestTemplate \u2014 template for HTTP
User user = restTemplate.getForObject("/api/users/{id}", User.class, 1);

// JpaRepository \u2014 template for CRUD
// HttpSecurity \u2014 template for security config
// AbstractController \u2014 template for MVC

// You just fill in the specifics!`;
  static \u0275fac = function DpTemplateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DpTemplateComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DpTemplateComponent, selectors: [["app-topic-dp-template"]], decls: 33, vars: 7, consts: [["title", "Template Method", "subtitle", "Define algorithm skeleton. Hook methods, abstract steps, and framework usage in Spring and JPA.", "badge", "DESIGN PATTERNS", "gradient", "linear-gradient(135deg, #b45309, #fbbf24)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-amber", 3, "size"], [1, "prose"], [3, "code"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"]], template: function DpTemplateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Template Method");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7, "The ");
      \u0275\u0275elementStart(8, "strong");
      \u0275\u0275text(9, "Template Method");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " defines the skeleton of an algorithm in a base class, letting subclasses override specific steps.");
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
      \u0275\u0275text(23, "With Hooks");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 8)(26, "h3", 9);
      \u0275\u0275text(27, "Functional");
      \u0275\u0275elementEnd();
      \u0275\u0275element(28, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 8)(30, "h3", 9);
      \u0275\u0275text(31, "Spring Usage");
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
      \u0275\u0275property("code", ctx.codeHook);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeFunctional);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeSpring);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ["\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-amber[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=dp-template.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DpTemplateComponent, [{
    type: Component,
    args: [{ selector: "app-topic-dp-template", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout title="Template Method" subtitle="Define algorithm skeleton. Hook methods, abstract steps, and framework usage in Spring and JPA." badge="DESIGN PATTERNS" gradient="linear-gradient(135deg, #b45309, #fbbf24)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-amber" /> Template Method</h2>
        <div class="prose"><p>The <strong>Template Method</strong> defines the skeleton of an algorithm in a base class, letting subclasses override specific steps.</p><app-code-block [code]="codeIntro" /></div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Examples</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Classic</h3><app-code-block [code]="codeClassic" /></div>
          <div class="op-card"><h3 class="op-title">With Hooks</h3><app-code-block [code]="codeHook" /></div>
          <div class="op-card"><h3 class="op-title">Functional</h3><app-code-block [code]="codeFunctional" /></div>
          <div class="op-card"><h3 class="op-title">Spring Usage</h3><app-code-block [code]="codeSpring" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ["/* angular:styles/component:css;be89a878d7fde9fd1e193ab701e806fec8898d17827fb12905606abf051d9913;/Users/sathishkumarramalingam/projects/JavaIQ/.claude/worktrees/goofy-haibt/src/app/features/tutorials/topics/dp-template.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-amber {\n  color: #d97706;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=dp-template.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DpTemplateComponent, { className: "DpTemplateComponent", filePath: "src/app/features/tutorials/topics/dp-template.component.ts", lineNumber: 33 });
})();
export {
  DpTemplateComponent
};
//# sourceMappingURL=chunk-54KIZFR4.js.map
