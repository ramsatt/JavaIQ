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

// src/app/features/tutorials/topics/hib-performance.component.ts
var HibPerformanceComponent = class _HibPerformanceComponent {
  codeIntro = `// THE N+1 PROBLEM:
List<User> users = em.createQuery("SELECT u FROM User u", User.class)
    .getResultList();  // 1 SQL query

for (User u : users) {
    u.getOrders().size();  // N additional queries!
    // Each user triggers: SELECT * FROM orders WHERE user_id = ?
}

// With 100 users = 101 SQL queries!
// Fix: Use JOIN FETCH, batch fetching, or entity graphs`;
  codeFetch = `// JOIN FETCH \u2014 load in ONE query
List<User> users = em.createQuery(
    "SELECT DISTINCT u FROM User u JOIN FETCH u.orders", User.class)
    .getResultList();
// Just 1 SQL with JOIN!

// Spring Data JPA
@Query("SELECT u FROM User u JOIN FETCH u.orders")
List<User> findAllWithOrders();

// \u26A0\uFE0F Limitation: can't JOIN FETCH two collections
// Use: @BatchSize or EntityGraph for multiple collections`;
  codeBatch = `// Batch fetching \u2014 load in batches of N
@Entity
public class User {
    @OneToMany(mappedBy = "user")
    @BatchSize(size = 25)  // load 25 at a time
    private List<Order> orders;
}

// Instead of 100 queries \u2192 4 queries (100/25)
// SQL: SELECT * FROM orders WHERE user_id IN (?, ?, ?, ...)

// Global batch size
spring.jpa.properties.hibernate.default_batch_fetch_size=25

// Batch INSERT optimization
spring.jpa.properties.hibernate.jdbc.batch_size=50
spring.jpa.properties.hibernate.order_inserts=true
spring.jpa.properties.hibernate.order_updates=true`;
  codeGraph = `// Entity Graph \u2014 declarative fetch plan
@Entity
@NamedEntityGraph(name = "User.withOrders",
    attributeNodes = @NamedAttributeNode("orders"))
public class User { }

// Use in query
Map<String, Object> hints = Map.of(
    "javax.persistence.fetchgraph",
    em.getEntityGraph("User.withOrders"));
User user = em.find(User.class, 1L, hints);

// Spring Data JPA
@EntityGraph(attributePaths = {"orders", "profile"})
List<User> findAll();`;
  codeMonitor = `# Log all SQL
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true

# With bind parameter values (p6spy)
<dependency>
    <groupId>com.github.gavlyukovskiy</groupId>
    <artifactId>datasource-proxy-spring-boot-starter</artifactId>
</dependency>

# Detect N+1 in tests
@SpringBootTest
public class PerformanceTest {
    @Autowired SQLStatementCountValidator validator;
    @Test void shouldUseOptimalQueries() {
        validator.reset();
        userService.findAll();
        validator.assertSelectCount(1); // fail if > 1 SELECT
    }
}`;
  static \u0275fac = function HibPerformanceComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HibPerformanceComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HibPerformanceComponent, selectors: [["app-topic-hib-performance"]], decls: 33, vars: 7, consts: [["title", "Performance Tuning", "subtitle", "Avoid the N+1 problem, optimize batch fetching, fix lazy loading pitfalls, and monitor SQL.", "badge", "HIBERNATE & JPA", "gradient", "linear-gradient(135deg, #0369a1, #38bdf8)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-sky", 3, "size"], [1, "prose"], [3, "code"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"]], template: function HibPerformanceComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Common Problems");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7, "The ");
      \u0275\u0275elementStart(8, "strong");
      \u0275\u0275text(9, "N+1 problem");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " is the #1 Hibernate performance killer. 1 query for parents + N queries for children = disaster.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "section", 1)(13, "h2", 2);
      \u0275\u0275element(14, "app-icon", 6);
      \u0275\u0275text(15, " Solutions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 7)(17, "div", 8)(18, "h3", 9);
      \u0275\u0275text(19, "JOIN FETCH");
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 8)(22, "h3", 9);
      \u0275\u0275text(23, "Batch Fetching");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 8)(26, "h3", 9);
      \u0275\u0275text(27, "Entity Graphs");
      \u0275\u0275elementEnd();
      \u0275\u0275element(28, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 8)(30, "h3", 9);
      \u0275\u0275text(31, "SQL Monitoring");
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
      \u0275\u0275property("code", ctx.codeFetch);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeBatch);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeGraph);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeMonitor);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ["\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-sky[_ngcontent-%COMP%] {\n  color: #0284c7;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=hib-performance.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HibPerformanceComponent, [{
    type: Component,
    args: [{ selector: "app-topic-hib-performance", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout title="Performance Tuning" subtitle="Avoid the N+1 problem, optimize batch fetching, fix lazy loading pitfalls, and monitor SQL." badge="HIBERNATE & JPA" gradient="linear-gradient(135deg, #0369a1, #38bdf8)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-sky" /> Common Problems</h2>
        <div class="prose">
          <p>The <strong>N+1 problem</strong> is the #1 Hibernate performance killer. 1 query for parents + N queries for children = disaster.</p>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Solutions</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">JOIN FETCH</h3><app-code-block [code]="codeFetch" /></div>
          <div class="op-card"><h3 class="op-title">Batch Fetching</h3><app-code-block [code]="codeBatch" /></div>
          <div class="op-card"><h3 class="op-title">Entity Graphs</h3><app-code-block [code]="codeGraph" /></div>
          <div class="op-card"><h3 class="op-title">SQL Monitoring</h3><app-code-block [code]="codeMonitor" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ["/* angular:styles/component:css;6ca1b4b71322260936bbef9306106bf4c7066aeed781e2e1a31044135b225cc2;/Users/sathishkumarramalingam/projects/JavaIQ/.claude/worktrees/goofy-haibt/src/app/features/tutorials/topics/hib-performance.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-sky {\n  color: #0284c7;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=hib-performance.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HibPerformanceComponent, { className: "HibPerformanceComponent", filePath: "src/app/features/tutorials/topics/hib-performance.component.ts", lineNumber: 36 });
})();
export {
  HibPerformanceComponent
};
//# sourceMappingURL=chunk-FVSHDEXO.js.map
