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

// src/app/features/tutorials/topics/hib-auditing.component.ts
var HibAuditingComponent = class _HibAuditingComponent {
  codeIntro = `// Two approaches:
// 1. JPA Auditing \u2014 timestamps + who (Spring Data)
// 2. Hibernate Envers \u2014 full version history

// JPA Auditing: auto-fills createdAt, updatedAt, createdBy
@Entity @EntityListeners(AuditingEntityListener.class)
public class User {
    @CreatedDate private LocalDateTime createdAt;
    @LastModifiedDate private LocalDateTime updatedAt;
    @CreatedBy private String createdBy;
    @LastModifiedBy private String updatedBy;
}`;
  codeJpa = `// Setup JPA Auditing
@Configuration @EnableJpaAuditing
public class AuditConfig {
    @Bean
    public AuditorAware<String> auditorProvider() {
        return () -> Optional.ofNullable(
            SecurityContextHolder.getContext()
                .getAuthentication().getName());
    }
}

// Base entity with audit fields
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public abstract class Auditable {
    @CreatedDate
    @Column(updatable = false)
    private LocalDateTime createdAt;

    @LastModifiedDate
    private LocalDateTime updatedAt;

    @CreatedBy @Column(updatable = false)
    private String createdBy;

    @LastModifiedBy
    private String updatedBy;
}`;
  codeEnvers = `// Setup Envers
<dependency>
    <groupId>org.hibernate.orm</groupId>
    <artifactId>hibernate-envers</artifactId>
</dependency>

// Mark entity as audited
@Entity @Audited
public class Product {
    @Id @GeneratedValue private Long id;
    private String name;
    private BigDecimal price;

    @NotAudited  // skip this field
    private String internalNotes;
}

// Envers auto-creates: products_AUD table
// Stores every INSERT, UPDATE, DELETE with revision number`;
  codeHistory = `// Query audit history
AuditReader reader = AuditReaderFactory.get(em);

// Get entity at specific revision
Product v1 = reader.find(Product.class, productId, revisionNumber);

// Get all revisions of an entity
List<Number> revisions = reader.getRevisions(Product.class, productId);

// Query by property at a point in time
List<Product> cheapProducts = reader.createQuery()
    .forEntitiesAtRevision(Product.class, revisionNumber)
    .add(AuditEntity.property("price").lt(new BigDecimal("50")))
    .getResultList();

// Get revision date
Date revDate = reader.getRevisionDate(revisionNumber);`;
  codeListener = `// Custom entity lifecycle callbacks
@Entity
@EntityListeners(UserActivityListener.class)
public class User { }

public class UserActivityListener {
    @PrePersist
    public void onPrePersist(User user) {
        log.info("Creating user: {}", user.getName());
    }

    @PostUpdate
    public void onPostUpdate(User user) {
        activityLog.record("USER_UPDATED", user.getId());
    }

    @PreRemove
    public void onPreRemove(User user) {
        log.warn("Deleting user: {}", user.getId());
    }
}`;
  static \u0275fac = function HibAuditingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HibAuditingComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HibAuditingComponent, selectors: [["app-topic-hib-auditing"]], decls: 30, vars: 7, consts: [["title", "Auditing & Envers", "subtitle", "Track entity changes automatically. JPA auditing, Hibernate Envers, and audit trail queries.", "badge", "HIBERNATE & JPA", "gradient", "linear-gradient(135deg, #166534, #4ade80)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-green", 3, "size"], [1, "prose"], [3, "code"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"]], template: function HibAuditingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Auditing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7, "Track who changed what and when. JPA auditing for timestamps/user, Hibernate Envers for full version history.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "section", 1)(10, "h2", 2);
      \u0275\u0275element(11, "app-icon", 6);
      \u0275\u0275text(12, " Patterns");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 7)(14, "div", 8)(15, "h3", 9);
      \u0275\u0275text(16, "JPA Auditing");
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 8)(19, "h3", 9);
      \u0275\u0275text(20, "Hibernate Envers");
      \u0275\u0275elementEnd();
      \u0275\u0275element(21, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 8)(23, "h3", 9);
      \u0275\u0275text(24, "Querying History");
      \u0275\u0275elementEnd();
      \u0275\u0275element(25, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 8)(27, "h3", 9);
      \u0275\u0275text(28, "Custom Listener");
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
      \u0275\u0275property("code", ctx.codeJpa);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeEnvers);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeHistory);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeListener);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ["\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-green[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=hib-auditing.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HibAuditingComponent, [{
    type: Component,
    args: [{ selector: "app-topic-hib-auditing", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout title="Auditing & Envers" subtitle="Track entity changes automatically. JPA auditing, Hibernate Envers, and audit trail queries." badge="HIBERNATE & JPA" gradient="linear-gradient(135deg, #166534, #4ade80)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-green" /> Auditing</h2>
        <div class="prose">
          <p>Track who changed what and when. JPA auditing for timestamps/user, Hibernate Envers for full version history.</p>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Patterns</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">JPA Auditing</h3><app-code-block [code]="codeJpa" /></div>
          <div class="op-card"><h3 class="op-title">Hibernate Envers</h3><app-code-block [code]="codeEnvers" /></div>
          <div class="op-card"><h3 class="op-title">Querying History</h3><app-code-block [code]="codeHistory" /></div>
          <div class="op-card"><h3 class="op-title">Custom Listener</h3><app-code-block [code]="codeListener" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ["/* angular:styles/component:css;a030b821bab9f37561f03b8eb96b0a16bdbab24720355473efed47a43a37bfb9;/Users/sathishkumarramalingam/projects/JavaIQ/.claude/worktrees/goofy-haibt/src/app/features/tutorials/topics/hib-auditing.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-green {\n  color: #16a34a;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=hib-auditing.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HibAuditingComponent, { className: "HibAuditingComponent", filePath: "src/app/features/tutorials/topics/hib-auditing.component.ts", lineNumber: 36 });
})();
export {
  HibAuditingComponent
};
//# sourceMappingURL=chunk-IGM6GUYH.js.map
