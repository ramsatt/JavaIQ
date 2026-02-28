import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-hib-transactions',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
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
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-red { color: #dc2626; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class HibTransactionsComponent {
  codeIntro = `// Spring @Transactional (recommended)
@Service
public class TransferService {
    @Transactional
    public void transfer(Long from, Long to, BigDecimal amount) {
        Account sender = accountRepo.findById(from).orElseThrow();
        Account receiver = accountRepo.findById(to).orElseThrow();
        sender.debit(amount);
        receiver.credit(amount);
        // Both save or BOTH rollback — atomic!
    }
}

// Rollback rules
@Transactional(rollbackFor = Exception.class)            // all exceptions
@Transactional(noRollbackFor = EmailException.class)     // skip specific
@Transactional(readOnly = true)                          // read-only optimization`;
  codeIsolation = `// Isolation levels (from least to most strict)
@Transactional(isolation = Isolation.READ_UNCOMMITTED)
// Dirty reads possible — fastest but risky

@Transactional(isolation = Isolation.READ_COMMITTED)
// Default for most DBs — no dirty reads

@Transactional(isolation = Isolation.REPEATABLE_READ)
// Same query returns same results within transaction

@Transactional(isolation = Isolation.SERIALIZABLE)
// Strictest — transactions execute sequentially

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

// If version mismatch → OptimisticLockException!
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
}
