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
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-6OY2Y3BE.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/hib-orm.component.ts
var _forTrack0 = ($index, $item) => $item.name;
function HibOrmComponent_For_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275listener("click", function HibOrmComponent_For_35_Template_div_click_0_listener() {
      const state_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.select(state_r2.name));
    });
    \u0275\u0275elementStart(1, "span", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const state_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.active() === state_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(state_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(state_r2.name);
  }
}
var HibOrmComponent = class _HibOrmComponent {
  active = signal("", ...ngDevMode ? [{ debugName: "active" }] : []);
  status = signal("Click a lifecycle state to learn about it.", ...ngDevMode ? [{ debugName: "status" }] : []);
  states = signal([
    { name: "Transient", icon: "\u{1F195}" },
    { name: "Managed", icon: "\u2705" },
    { name: "Detached", icon: "\u{1F513}" },
    { name: "Removed", icon: "\u{1F5D1}\uFE0F" }
  ], ...ngDevMode ? [{ debugName: "states" }] : []);
  codeIntro = `@Entity
@Table(name = "users")
public class User {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    private String name;

    @Column(unique = true) private String email;
    private int age;
    // getters, setters, constructors
}

// Usage with EntityManager
User user = new User("Alice", "alice@example.com", 25);
em.persist(user);    // INSERT \u2192 user is now "managed"
User found = em.find(User.class, 1L);  // SELECT by PK`;
  codeEm = `// EntityManager \u2014 the core JPA interface
@PersistenceContext
private EntityManager em;

// CREATE
User user = new User("Alice");
em.persist(user);  // INSERT

// READ
User found = em.find(User.class, 1L);  // by PK
User ref = em.getReference(User.class, 1L); // lazy proxy

// UPDATE (automatic dirty checking!)
found.setName("Alice Updated");
// No explicit save needed \u2014 Hibernate detects changes

// DELETE
em.remove(found);  // DELETE`;
  codePc = `// Persistence Context = first-level cache
User u1 = em.find(User.class, 1L);  // SQL: SELECT
User u2 = em.find(User.class, 1L);  // NO SQL! From cache
assert u1 == u2;  // same reference!

// Dirty checking
u1.setName("Updated");
// At flush time, Hibernate compares original snapshot
// with current state and generates UPDATE if different

// Flush modes
em.setFlushMode(FlushModeType.AUTO);   // before queries
em.setFlushMode(FlushModeType.COMMIT); // at commit only
em.flush();  // force flush manually`;
  codeConfig = `# application.yml (Spring Boot)
spring:
  jpa:
    hibernate:
      ddl-auto: update  # create, create-drop, validate, none
    show-sql: true
    properties:
      hibernate:
        format_sql: true
        use_sql_comments: true
        dialect: org.hibernate.dialect.MySQLDialect
        jdbc:
          batch_size: 25
        order_inserts: true`;
  codeVs = `// JPA (specification \u2014 portable)
@PersistenceContext
EntityManager em;
em.persist(entity);
em.find(User.class, id);
em.createQuery("SELECT u FROM User u", User.class);

// Hibernate (implementation \u2014 extra features)
Session session = em.unwrap(Session.class);
session.saveOrUpdate(entity);  // Hibernate-specific
session.createNaturalIdQuery(User.class)
    .using("email", "alice@test.com")
    .uniqueResult();

// Recommendation: Use JPA API when possible
// Use Hibernate API only for advanced features`;
  select(name) {
    this.active.set(name);
    const info = {
      "Transient": "Transient: new object, NOT managed by persistence context. No DB row yet.",
      "Managed": "Managed: tracked by EntityManager. Changes auto-detected and flushed to DB.",
      "Detached": "Detached: was managed, now disconnected. Use merge() to re-attach.",
      "Removed": "Removed: scheduled for deletion. DELETE executed at flush/commit."
    };
    this.status.set(info[name] ?? "");
  }
  static \u0275fac = function HibOrmComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HibOrmComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HibOrmComponent, selectors: [["app-topic-hib-orm"]], decls: 59, vars: 9, consts: [["title", "ORM Fundamentals", "subtitle", "Bridge the object-relational gap. Understand Hibernate's architecture, SessionFactory, EntityManager, and persistence lifecycle.", "badge", "HIBERNATE & JPA", "gradient", "linear-gradient(135deg, #4338ca, #818cf8)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-indigo", 3, "size"], [1, "prose"], [3, "code"], [1, "viz-card"], [1, "viz-title"], ["name", "play", "css", "icon-indigo", 3, "size"], [1, "lifecycle"], [1, "state-card", 3, "active"], [1, "viz-status"], ["name", "code", "css", "icon-purple", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"], [1, "state-card", 3, "click"], [1, "state-icon"], [1, "state-name"]], template: function HibOrmComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " What is ORM?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p")(7, "strong");
      \u0275\u0275text(8, "ORM");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, " (Object-Relational Mapping) maps Java objects to database tables. Hibernate is the most popular JPA implementation.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "ul")(11, "li")(12, "strong");
      \u0275\u0275text(13, "JPA:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(14, " The specification (javax/jakarta.persistence). Defines the API.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "li")(16, "strong");
      \u0275\u0275text(17, "Hibernate:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(18, " The implementation. Provides the engine behind JPA.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "li")(20, "strong");
      \u0275\u0275text(21, "EntityManager:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(22, " The gateway \u2014 persist, find, merge, remove entities.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "li")(24, "strong");
      \u0275\u0275text(25, "Persistence Context:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(26, " First-level cache that tracks entity state.");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(27, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "section", 1)(29, "div", 6)(30, "h3", 7);
      \u0275\u0275element(31, "app-icon", 8);
      \u0275\u0275text(32, " Entity Lifecycle");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 9);
      \u0275\u0275repeaterCreate(34, HibOrmComponent_For_35_Template, 5, 4, "div", 10, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 11);
      \u0275\u0275text(37);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(38, "section", 1)(39, "h2", 2);
      \u0275\u0275element(40, "app-icon", 12);
      \u0275\u0275text(41, " Core Concepts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 13)(43, "div", 14)(44, "h3", 15);
      \u0275\u0275text(45, "EntityManager");
      \u0275\u0275elementEnd();
      \u0275\u0275element(46, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 14)(48, "h3", 15);
      \u0275\u0275text(49, "Persistence Context");
      \u0275\u0275elementEnd();
      \u0275\u0275element(50, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div", 14)(52, "h3", 15);
      \u0275\u0275text(53, "Configuration");
      \u0275\u0275elementEnd();
      \u0275\u0275element(54, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 14)(56, "h3", 15);
      \u0275\u0275text(57, "JPA vs Hibernate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(58, "app-code-block", 5);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(24);
      \u0275\u0275property("code", ctx.codeIntro);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 22);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.states());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.status());
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(6);
      \u0275\u0275property("code", ctx.codeEm);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codePc);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeConfig);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeVs);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ['\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.icon-purple[_ngcontent-%COMP%] {\n  color: #7c3aed;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n}\n.viz-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  padding: 28px 24px;\n}\n.viz-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.lifecycle[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 8px;\n  margin-bottom: 20px;\n}\n.state-card[_ngcontent-%COMP%] {\n  padding: 14px 8px;\n  border-radius: 12px;\n  border: 2px solid #e2e8f0;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.state-card.active[_ngcontent-%COMP%] {\n  border-color: #4f46e5;\n  background: #eef2ff;\n  transform: scale(1.05);\n}\n.state-icon[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.3rem;\n  margin-bottom: 4px;\n}\n.state-name[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.viz-status[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=hib-orm.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HibOrmComponent, [{
    type: Component,
    args: [{ selector: "app-topic-hib-orm", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout title="ORM Fundamentals" subtitle="Bridge the object-relational gap. Understand Hibernate's architecture, SessionFactory, EntityManager, and persistence lifecycle." badge="HIBERNATE & JPA" gradient="linear-gradient(135deg, #4338ca, #818cf8)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-indigo" /> What is ORM?</h2>
        <div class="prose">
          <p><strong>ORM</strong> (Object-Relational Mapping) maps Java objects to database tables. Hibernate is the most popular JPA implementation.</p>
          <ul>
            <li><strong>JPA:</strong> The specification (javax/jakarta.persistence). Defines the API.</li>
            <li><strong>Hibernate:</strong> The implementation. Provides the engine behind JPA.</li>
            <li><strong>EntityManager:</strong> The gateway \u2014 persist, find, merge, remove entities.</li>
            <li><strong>Persistence Context:</strong> First-level cache that tracks entity state.</li>
          </ul>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title"><app-icon name="play" [size]="22" css="icon-indigo" /> Entity Lifecycle</h3>
          <div class="lifecycle">
            @for (state of states(); track state.name) {
              <div class="state-card" [class.active]="active() === state.name" (click)="select(state.name)">
                <span class="state-icon">{{ state.icon }}</span>
                <span class="state-name">{{ state.name }}</span>
              </div>
            }
          </div>
          <div class="viz-status">{{ status() }}</div>
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-purple" /> Core Concepts</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">EntityManager</h3><app-code-block [code]="codeEm" /></div>
          <div class="op-card"><h3 class="op-title">Persistence Context</h3><app-code-block [code]="codePc" /></div>
          <div class="op-card"><h3 class="op-title">Configuration</h3><app-code-block [code]="codeConfig" /></div>
          <div class="op-card"><h3 class="op-title">JPA vs Hibernate</h3><app-code-block [code]="codeVs" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ['/* angular:styles/component:css;71dbf0e2f24b49dfaa7d1a6a9d8084ea75d796296440f5b9871b44fb387490d6;D:/A21/JavaIQ/src/app/features/tutorials/topics/hib-orm.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.icon-purple {\n  color: #7c3aed;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.prose ul {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose li {\n  margin-bottom: 8px;\n}\n.prose strong {\n  color: #0f172a;\n}\n.viz-card {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  padding: 28px 24px;\n}\n.viz-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.lifecycle {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 8px;\n  margin-bottom: 20px;\n}\n.state-card {\n  padding: 14px 8px;\n  border-radius: 12px;\n  border: 2px solid #e2e8f0;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.state-card.active {\n  border-color: #4f46e5;\n  background: #eef2ff;\n  transform: scale(1.05);\n}\n.state-icon {\n  display: block;\n  font-size: 1.3rem;\n  margin-bottom: 4px;\n}\n.state-name {\n  font-size: 0.6rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.viz-status {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=hib-orm.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HibOrmComponent, { className: "HibOrmComponent", filePath: "src/app/features/tutorials/topics/hib-orm.component.ts", lineNumber: 61 });
})();
export {
  HibOrmComponent
};
//# sourceMappingURL=chunk-ZKZJUFSX.js.map
