import{a as p,b as d,c as m}from"./chunk-5NK5W44O.js";import{Pa as i,Tb as t,ab as l,sb as n,tb as o,ub as e,vb as a}from"./chunk-WSUICUG6.js";import"./chunk-NWJ5J3BN.js";var g=class s{codeIntro=`// Spring @Transactional (recommended)
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
@Transactional(readOnly = true)                          // read-only optimization`;codeIsolation=`// Isolation levels (from least to most strict)
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
// SERIALIZABLE:     + prevents phantom reads`;codeOptimistic=`// Optimistic locking: @Version field
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
}`;codePessimistic=`// Pessimistic locking: DB-level locks
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
    Map.of("javax.persistence.lock.timeout", 3000));`;codePropagation=`// Transaction propagation
@Transactional(propagation = Propagation.REQUIRED)
// Default: join existing or create new

@Transactional(propagation = Propagation.REQUIRES_NEW)
// Always new transaction (audit logs!)

@Transactional(propagation = Propagation.MANDATORY)
// Must have existing transaction or throw

@Transactional(propagation = Propagation.NESTED)
// Savepoint within existing transaction

@Transactional(propagation = Propagation.NOT_SUPPORTED)
// Suspend current transaction`;static \u0275fac=function(c){return new(c||s)};static \u0275cmp=l({type:s,selectors:[["app-topic-hib-transactions"]],decls:33,vars:7,consts:[["title","Transactions","subtitle","ACID guarantees, isolation levels, optimistic vs pessimistic locking, and deadlock prevention.","badge","HIBERNATE & JPA","gradient","linear-gradient(135deg, #991b1b, #f87171)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-red",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(c,r){c&1&&(o(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),a(3,"app-icon",3),t(4," Transactions"),e(),o(5,"div",4)(6,"p"),t(7,"Transactions ensure data consistency. "),o(8,"strong"),t(9,"ACID"),e(),t(10,": Atomicity, Consistency, Isolation, Durability."),e(),a(11,"app-code-block",5),e()(),o(12,"section",1)(13,"h2",2),a(14,"app-icon",6),t(15," Patterns"),e(),o(16,"div",7)(17,"div",8)(18,"h3",9),t(19,"Isolation Levels"),e(),a(20,"app-code-block",5),e(),o(21,"div",8)(22,"h3",9),t(23,"Optimistic Locking"),e(),a(24,"app-code-block",5),e(),o(25,"div",8)(26,"h3",9),t(27,"Pessimistic Locking"),e(),a(28,"app-code-block",5),e(),o(29,"div",8)(30,"h3",9),t(31,"Propagation"),e(),a(32,"app-code-block",5),e()()()()),c&2&&(i(3),n("size",28),i(8),n("code",r.codeIntro),i(3),n("size",28),i(6),n("code",r.codeIsolation),i(4),n("code",r.codeOptimistic),i(4),n("code",r.codePessimistic),i(4),n("code",r.codePropagation))},dependencies:[p,d,m],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-red[_ngcontent-%COMP%]{color:#dc2626}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{g as HibTransactionsComponent};
