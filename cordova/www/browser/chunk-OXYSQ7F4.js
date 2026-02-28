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

// src/app/features/tutorials/topics/hib-jpql.component.ts
var HibJpqlComponent = class _HibJpqlComponent {
  codeIntro = `// JPQL uses entity/field names, NOT table/column names
TypedQuery<User> query = em.createQuery(
    "SELECT u FROM User u WHERE u.age > :age", User.class);
query.setParameter("age", 18);
List<User> users = query.getResultList();

// Single result
User user = em.createQuery(
    "SELECT u FROM User u WHERE u.email = :email", User.class)
    .setParameter("email", "alice@test.com")
    .getSingleResult();`;
  codeJpql = `// JOIN queries
List<Order> orders = em.createQuery(
    "SELECT o FROM Order o JOIN o.user u WHERE u.name = :name", Order.class)
    .setParameter("name", "Alice")
    .getResultList();

// JOIN FETCH (eager load in one query \u2014 solves N+1!)
List<User> users = em.createQuery(
    "SELECT DISTINCT u FROM User u JOIN FETCH u.orders", User.class)
    .getResultList();

// Aggregate functions
Long count = em.createQuery("SELECT COUNT(u) FROM User u WHERE u.active = true", Long.class)
    .getSingleResult();

// GROUP BY + HAVING
List<Object[]> stats = em.createQuery(
    "SELECT u.department, COUNT(u), AVG(u.salary) FROM User u GROUP BY u.department HAVING COUNT(u) > 5")
    .getResultList();`;
  codeNamed = `// Define on entity (compile-time checked)
@Entity
@NamedQueries({
    @NamedQuery(name = "User.findActive",
        query = "SELECT u FROM User u WHERE u.active = true"),
    @NamedQuery(name = "User.findByDept",
        query = "SELECT u FROM User u WHERE u.department = :dept")
})
public class User { }

// Use by name
List<User> active = em.createNamedQuery("User.findActive", User.class)
    .getResultList();

List<User> deptUsers = em.createNamedQuery("User.findByDept", User.class)
    .setParameter("dept", "Engineering")
    .getResultList();`;
  codeNative = `// Native SQL (for DB-specific features)
List<User> users = em.createNativeQuery(
    "SELECT * FROM users WHERE MATCH(name) AGAINST(:term IN BOOLEAN MODE)",
    User.class)
    .setParameter("term", "Alice")
    .getResultList();

// Stored procedure
StoredProcedureQuery proc = em.createStoredProcedureQuery("calc_stats")
    .registerStoredProcedureParameter("dept", String.class, ParameterMode.IN)
    .setParameter("dept", "Engineering");
proc.execute();`;
  codeProjection = `// DTO projection (only select needed fields!)
List<UserSummary> summaries = em.createQuery(
    "SELECT new com.app.dto.UserSummary(u.name, u.email) FROM User u",
    UserSummary.class)
    .getResultList();

// Record DTO
public record UserSummary(String name, String email) {}

// Interface projection (Spring Data JPA)
public interface UserView {
    String getName();
    String getEmail();
}
List<UserView> views = userRepo.findAllProjectedBy();`;
  static \u0275fac = function HibJpqlComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HibJpqlComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HibJpqlComponent, selectors: [["app-topic-hib-jpql"]], decls: 32, vars: 7, consts: [["title", "JPQL & Queries", "subtitle", "Query entities with JPQL. Named queries, native SQL, projections, and dynamic queries.", "badge", "HIBERNATE & JPA", "gradient", "linear-gradient(135deg, #6d28d9, #c084fc)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-violet", 3, "size"], [1, "prose"], [3, "code"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"]], template: function HibJpqlComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " JPQL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p")(7, "strong");
      \u0275\u0275text(8, "JPQL");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, " queries entities and their fields (not tables/columns). It's SQL-like but object-oriented.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(10, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "section", 1)(12, "h2", 2);
      \u0275\u0275element(13, "app-icon", 6);
      \u0275\u0275text(14, " Query Types");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 7)(16, "div", 8)(17, "h3", 9);
      \u0275\u0275text(18, "JPQL Queries");
      \u0275\u0275elementEnd();
      \u0275\u0275element(19, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 8)(21, "h3", 9);
      \u0275\u0275text(22, "Named Queries");
      \u0275\u0275elementEnd();
      \u0275\u0275element(23, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 8)(25, "h3", 9);
      \u0275\u0275text(26, "Native SQL");
      \u0275\u0275elementEnd();
      \u0275\u0275element(27, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 8)(29, "h3", 9);
      \u0275\u0275text(30, "Projections");
      \u0275\u0275elementEnd();
      \u0275\u0275element(31, "app-code-block", 5);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(7);
      \u0275\u0275property("code", ctx.codeIntro);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(6);
      \u0275\u0275property("code", ctx.codeJpql);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeNamed);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeNative);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeProjection);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ["\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-violet[_ngcontent-%COMP%] {\n  color: #7c3aed;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=hib-jpql.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HibJpqlComponent, [{
    type: Component,
    args: [{ selector: "app-topic-hib-jpql", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout title="JPQL & Queries" subtitle="Query entities with JPQL. Named queries, native SQL, projections, and dynamic queries." badge="HIBERNATE & JPA" gradient="linear-gradient(135deg, #6d28d9, #c084fc)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-violet" /> JPQL</h2>
        <div class="prose">
          <p><strong>JPQL</strong> queries entities and their fields (not tables/columns). It's SQL-like but object-oriented.</p>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Query Types</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">JPQL Queries</h3><app-code-block [code]="codeJpql" /></div>
          <div class="op-card"><h3 class="op-title">Named Queries</h3><app-code-block [code]="codeNamed" /></div>
          <div class="op-card"><h3 class="op-title">Native SQL</h3><app-code-block [code]="codeNative" /></div>
          <div class="op-card"><h3 class="op-title">Projections</h3><app-code-block [code]="codeProjection" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ["/* angular:styles/component:css;3fdea3d65f998ea6e02a91e28e2bbadf57463c689a1bfe3f13b44f31a77d8a11;D:/A21/JavaIQ/src/app/features/tutorials/topics/hib-jpql.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-violet {\n  color: #7c3aed;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=hib-jpql.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HibJpqlComponent, { className: "HibJpqlComponent", filePath: "src/app/features/tutorials/topics/hib-jpql.component.ts", lineNumber: 36 });
})();
export {
  HibJpqlComponent
};
//# sourceMappingURL=chunk-OXYSQ7F4.js.map
