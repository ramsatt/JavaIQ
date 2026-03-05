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

// src/app/features/tutorials/topics/hib-transactions.component.ts
var HibTransactionsComponent = class _HibTransactionsComponent {
  codeIntro = `// Spring @Transactional (recommended)
@Service
public class TransferService {
    @Transactional
    public void transfer(Long from, Long to, BigDecimal amount) {
        Account sender = accountRepo.findById(from).orElseThrow();
        Account receiver = accountRepo.findById(to).orElseThrow();
        sender.debit(amount);
        receiver.credit(amount);
        // Both save or BOTH rollback \u2014 atomic!
    }
}

// Rollback rules
@Transactional(rollbackFor = Exception.class)            // all exceptions
@Transactional(noRollbackFor = EmailException.class)     // skip specific
@Transactional(readOnly = true)                          // read-only optimization`;
  codeIsolation = `// Isolation levels (from least to most strict)
@Transactional(isolation = Isolation.READ_UNCOMMITTED)
// Dirty reads possible \u2014 fastest but risky

@Transactional(isolation = Isolation.READ_COMMITTED)
// Default for most DBs \u2014 no dirty reads

@Transactional(isolation = Isolation.REPEATABLE_READ)
// Same query returns same results within transaction

@Transactional(isolation = Isolation.SERIALIZABLE)
// Strictest \u2014 transactions execute sequentially

// Problems prevented by isolation level:
// READ_COMMITTED:   prevents dirty reads
// REPEATABLE_READ:  + prevents non-repeatable reads
// SERIALIZABLE:     + prevents phantom reads`;
  codeOptimistic = `// Optimistic locking: @Version field
@Entity
public class Product {
    @Id @GeneratedValue
    private Long id;
    private String name;
    private BigDecimal price;

    @Version  // Hibernate checks this on UPDATE
    private int version;
}

// SQL generated:
// UPDATE products SET name=?, price=?, version=2
// WHERE id=? AND version=1

// If version mismatch \u2192 OptimisticLockException!
// Handle it:
try { productRepo.save(product); }
catch (OptimisticLockException e) {
    // Reload and retry, or notify user
}`;
  codePessimistic = `// Pessimistic locking: DB-level locks
// Lock for reading (shared lock)
@Lock(LockModeType.PESSIMISTIC_READ)
@Query("SELECT a FROM Account a WHERE a.id = :id")
Account findByIdWithReadLock(Long id);

// Lock for writing (exclusive lock)
@Lock(LockModeType.PESSIMISTIC_WRITE)
@Query("SELECT a FROM Account a WHERE a.id = :id")
Account findByIdWithWriteLock(Long id);

// With timeout (avoid deadlocks!)
em.find(Account.class, id, LockModeType.PESSIMISTIC_WRITE,
    Map.of("javax.persistence.lock.timeout", 3000));`;
  codePropagation = `// Transaction propagation
@Transactional(propagation = Propagation.REQUIRED)
// Default: join existing or create new

@Transactional(propagation = Propagation.REQUIRES_NEW)
// Always new transaction (audit logs!)

@Transactional(propagation = Propagation.MANDATORY)
// Must have existing transaction or throw

@Transactional(propagation = Propagation.NESTED)
// Savepoint within existing transaction

@Transactional(propagation = Propagation.NOT_SUPPORTED)
// Suspend current transaction`;
  static \u0275fac = function HibTransactionsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HibTransactionsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HibTransactionsComponent, selectors: [["app-topic-hib-transactions"]], decls: 33, vars: 7, consts: [["title", "Transactions", "subtitle", "ACID guarantees, isolation levels, optimistic vs pessimistic locking, and deadlock prevention.", "badge", "HIBERNATE & JPA", "gradient", "linear-gradient(135deg, #991b1b, #f87171)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-red", 3, "size"], [1, "prose"], [3, "code"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"]], template: function HibTransactionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Transactions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7, "Transactions ensure data consistency. ");
      \u0275\u0275elementStart(8, "strong");
      \u0275\u0275text(9, "ACID");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, ": Atomicity, Consistency, Isolation, Durability.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "section", 1)(13, "h2", 2);
      \u0275\u0275element(14, "app-icon", 6);
      \u0275\u0275text(15, " Patterns");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 7)(17, "div", 8)(18, "h3", 9);
      \u0275\u0275text(19, "Isolation Levels");
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 8)(22, "h3", 9);
      \u0275\u0275text(23, "Optimistic Locking");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 8)(26, "h3", 9);
      \u0275\u0275text(27, "Pessimistic Locking");
      \u0275\u0275elementEnd();
      \u0275\u0275element(28, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 8)(30, "h3", 9);
      \u0275\u0275text(31, "Propagation");
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
      \u0275\u0275property("code", ctx.codeIsolation);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeOptimistic);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codePessimistic);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codePropagation);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ["\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-red[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=hib-transactions.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HibTransactionsComponent, [{
    type: Component,
    args: [{ selector: "app-topic-hib-transactions", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout title="Transactions" subtitle="ACID guarantees, isolation levels, optimistic vs pessimistic locking, and deadlock prevention." badge="HIBERNATE & JPA" gradient="linear-gradient(135deg, #991b1b, #f87171)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-red" /> Transactions</h2>
        <div class="prose">
          <p>Transactions ensure data consistency. <strong>ACID</strong>: Atomicity, Consistency, Isolation, Durability.</p>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Patterns</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Isolation Levels</h3><app-code-block [code]="codeIsolation" /></div>
          <div class="op-card"><h3 class="op-title">Optimistic Locking</h3><app-code-block [code]="codeOptimistic" /></div>
          <div class="op-card"><h3 class="op-title">Pessimistic Locking</h3><app-code-block [code]="codePessimistic" /></div>
          <div class="op-card"><h3 class="op-title">Propagation</h3><app-code-block [code]="codePropagation" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ["/* angular:styles/component:css;1ee42a2cc863167e2d72aae7bff69d10566960b45c9f918822b56c174d26e297;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/features/tutorials/topics/hib-transactions.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-red {\n  color: #dc2626;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=hib-transactions.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HibTransactionsComponent, { className: "HibTransactionsComponent", filePath: "src/app/features/tutorials/topics/hib-transactions.component.ts", lineNumber: 36 });
})();
export {
  HibTransactionsComponent
};
//# sourceMappingURL=chunk-GIOXD7MR.js.map
