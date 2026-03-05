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

// src/app/features/tutorials/topics/hib-criteria.component.ts
var HibCriteriaComponent = class _HibCriteriaComponent {
  codeIntro = `CriteriaBuilder cb = em.getCriteriaBuilder();
CriteriaQuery<User> cq = cb.createQuery(User.class);
Root<User> root = cq.from(User.class);

cq.select(root)
  .where(cb.and(
      cb.greaterThan(root.get("age"), 18),
      cb.equal(root.get("active"), true)))
  .orderBy(cb.asc(root.get("name")));

List<User> users = em.createQuery(cq).getResultList();`;
  codeDynamic = `// Dynamic search \u2014 add predicates conditionally
public List<User> search(UserFilter filter) {
    CriteriaBuilder cb = em.getCriteriaBuilder();
    CriteriaQuery<User> cq = cb.createQuery(User.class);
    Root<User> root = cq.from(User.class);
    List<Predicate> predicates = new ArrayList<>();

    if (filter.getName() != null)
        predicates.add(cb.like(root.get("name"), "%" + filter.getName() + "%"));
    if (filter.getMinAge() != null)
        predicates.add(cb.ge(root.get("age"), filter.getMinAge()));
    if (filter.getDepartment() != null)
        predicates.add(cb.equal(root.get("department"), filter.getDepartment()));

    cq.where(predicates.toArray(new Predicate[0]));
    return em.createQuery(cq).getResultList();
}`;
  codeJoins = `// Join
CriteriaQuery<Order> cq = cb.createQuery(Order.class);
Root<Order> order = cq.from(Order.class);
Join<Order, User> user = order.join("user");
cq.where(cb.equal(user.get("name"), "Alice"));

// Fetch join (solve N+1)
Root<User> root = cq.from(User.class);
root.fetch("orders", JoinType.LEFT);

// Subquery
Subquery<Long> sub = cq.subquery(Long.class);
Root<Order> subRoot = sub.from(Order.class);
sub.select(subRoot.get("user").get("id"))
   .where(cb.gt(subRoot.get("total"), 1000));
cq.where(root.get("id").in(sub));`;
  codeSpec = `// Spring Data JPA Specifications (reusable!)
public class UserSpecs {
    public static Specification<User> hasName(String name) {
        return (root, query, cb) -> cb.like(root.get("name"), "%" + name + "%");
    }
    public static Specification<User> olderThan(int age) {
        return (root, query, cb) -> cb.gt(root.get("age"), age);
    }
    public static Specification<User> inDept(String dept) {
        return (root, query, cb) -> cb.equal(root.get("department"), dept);
    }
}

// Compose with and/or
List<User> results = userRepo.findAll(
    UserSpecs.hasName("Al")
        .and(UserSpecs.olderThan(25))
        .and(UserSpecs.inDept("Engineering")));`;
  codeMeta = `// JPA Metamodel (compile-time type safety)
// Generated: User_.java
@StaticMetamodel(User.class)
public class User_ {
    public static volatile SingularAttribute<User, Long> id;
    public static volatile SingularAttribute<User, String> name;
    public static volatile SingularAttribute<User, Integer> age;
}

// Usage \u2014 no more string field names!
cq.where(cb.greaterThan(root.get(User_.age), 18));
cq.orderBy(cb.asc(root.get(User_.name)));
// Refactoring User.name \u2192 User.fullName
// \u2192 compile error, not runtime error!`;
  static \u0275fac = function HibCriteriaComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HibCriteriaComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HibCriteriaComponent, selectors: [["app-topic-hib-criteria"]], decls: 30, vars: 7, consts: [["title", "Criteria API", "subtitle", "Build type-safe, dynamic queries. CriteriaBuilder, CriteriaQuery, metamodel, and specifications.", "badge", "HIBERNATE & JPA", "gradient", "linear-gradient(135deg, #065f46, #34d399)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-emerald", 3, "size"], [1, "prose"], [3, "code"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"]], template: function HibCriteriaComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Criteria API");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7, "The Criteria API builds queries programmatically. Type-safe, refactor-friendly, and perfect for dynamic search filters.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "section", 1)(10, "h2", 2);
      \u0275\u0275element(11, "app-icon", 6);
      \u0275\u0275text(12, " Patterns");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 7)(14, "div", 8)(15, "h3", 9);
      \u0275\u0275text(16, "Dynamic Queries");
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 8)(19, "h3", 9);
      \u0275\u0275text(20, "Joins & Subqueries");
      \u0275\u0275elementEnd();
      \u0275\u0275element(21, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 8)(23, "h3", 9);
      \u0275\u0275text(24, "Specifications");
      \u0275\u0275elementEnd();
      \u0275\u0275element(25, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 8)(27, "h3", 9);
      \u0275\u0275text(28, "Metamodel");
      \u0275\u0275elementEnd();
      \u0275\u0275element(29, "app-code-block", 5);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(5);
      \u0275\u0275property("code", ctx.codeIntro);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(6);
      \u0275\u0275property("code", ctx.codeDynamic);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeJoins);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeSpec);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeMeta);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ["\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-emerald[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=hib-criteria.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HibCriteriaComponent, [{
    type: Component,
    args: [{ selector: "app-topic-hib-criteria", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout title="Criteria API" subtitle="Build type-safe, dynamic queries. CriteriaBuilder, CriteriaQuery, metamodel, and specifications." badge="HIBERNATE & JPA" gradient="linear-gradient(135deg, #065f46, #34d399)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-emerald" /> Criteria API</h2>
        <div class="prose">
          <p>The Criteria API builds queries programmatically. Type-safe, refactor-friendly, and perfect for dynamic search filters.</p>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Patterns</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Dynamic Queries</h3><app-code-block [code]="codeDynamic" /></div>
          <div class="op-card"><h3 class="op-title">Joins & Subqueries</h3><app-code-block [code]="codeJoins" /></div>
          <div class="op-card"><h3 class="op-title">Specifications</h3><app-code-block [code]="codeSpec" /></div>
          <div class="op-card"><h3 class="op-title">Metamodel</h3><app-code-block [code]="codeMeta" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ["/* angular:styles/component:css;2af45e24d5723a362d7e482ed60c327f114812634e16647db885d2da64291dab;/Users/sathishkumarramalingam/projects/JavaIQ/.claude/worktrees/goofy-haibt/src/app/features/tutorials/topics/hib-criteria.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-emerald {\n  color: #059669;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=hib-criteria.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HibCriteriaComponent, { className: "HibCriteriaComponent", filePath: "src/app/features/tutorials/topics/hib-criteria.component.ts", lineNumber: 36 });
})();
export {
  HibCriteriaComponent
};
//# sourceMappingURL=chunk-PT6MWR2I.js.map
