import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-spring-data',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="Spring Data Access" subtitle="Simplify database operations. Master JdbcTemplate, transactions, DataSource config, and Spring's data access exception hierarchy." badge="SPRING FRAMEWORK" gradient="linear-gradient(135deg, #4338ca, #818cf8)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-indigo" /> Data Access in Spring</h2>
        <div class="prose">
          <p>Spring provides a unified data access abstraction that simplifies working with JDBC, JPA, and other persistence technologies.</p>
          <ul>
            <li><strong>JdbcTemplate:</strong> Eliminates boilerplate JDBC code (connections, statements, result sets).</li>
            <li><strong>&#64;Transactional:</strong> Declarative transaction management — commit or rollback automatically.</li>
            <li><strong>DataAccessException:</strong> Unified exception hierarchy — no more catching vendor-specific SQLExceptions.</li>
          </ul>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title"><app-icon name="play" [size]="22" css="icon-indigo" /> Transaction Flow</h3>
          <div class="tx-demo">
            @for (step of txSteps(); track step.id) {
              <div class="tx-step" [class]="step.state"><span class="tx-icon">{{ step.icon }}</span><span class="tx-text">{{ step.text }}</span></div>
            }
          </div>
          <div class="viz-status">{{ status() }}</div>
          <div class="viz-controls">
            <button (click)="runSuccess()" [disabled]="isAnimating()" class="btn btn-indigo"><app-icon name="play" [size]="16" /> Commit Flow</button>
            <button (click)="runRollback()" [disabled]="isAnimating()" class="btn btn-red"><app-icon name="play" [size]="16" /> Rollback Flow</button>
            <button (click)="resetDemo()" [disabled]="isAnimating()" class="btn btn-gray"><app-icon name="refresh-cw" [size]="16" /> Reset</button>
          </div>
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-purple" /> Patterns</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-purple" /> JdbcTemplate</h3><p class="op-desc">Query, update, and batch operations without boilerplate.</p><app-code-block [code]="codeJdbc" /></div>
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-purple" /> Transactions</h3><p class="op-desc">Declarative transactions with &#64;Transactional.</p><app-code-block [code]="codeTx" /></div>
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-purple" /> DataSource Config</h3><p class="op-desc">Configure connection pools with HikariCP.</p><app-code-block [code]="codeDs" /></div>
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-purple" /> RowMapper</h3><p class="op-desc">Map ResultSet rows to domain objects.</p><app-code-block [code]="codeMapper" /></div>
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="briefcase" [size]="28" css="icon-indigo" /> Real-Time Use Cases</h2>
        <div class="use-cases">
          <div class="use-case indigo"><div class="use-num indigo-bg">1</div><div><h4 class="use-title">Banking Transactions</h4><p class="use-desc"><code>&#64;Transactional</code> ensures debit + credit either BOTH succeed or BOTH roll back — no partial state ever.</p></div></div>
          <div class="use-case blue"><div class="use-num blue-bg">2</div><div><h4 class="use-title">Batch Data Import</h4><p class="use-desc"><code>JdbcTemplate.batchUpdate()</code> processes thousands of CSV rows in a single transaction with prepared statements.</p></div></div>
          <div class="use-case purple"><div class="use-num purple-bg">3</div><div><h4 class="use-title">Multi-DB Routing</h4><p class="use-desc"><code>AbstractRoutingDataSource</code> routes queries to read replicas for SELECTs and primary for writes — transparent to services.</p></div></div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-indigo { color: #4f46e5; } .icon-purple { color: #7c3aed; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; } .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; } .prose li { margin-bottom: 8px; } .prose strong { color: #0f172a; font-weight: 700; } .prose code { background: #f1f5f9; padding: 2px 7px; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #4f46e5; }
    .viz-card { background: #fff; border-radius: 18px; border: 1px solid #e2e8f0; box-shadow: 0 4px 16px rgba(0,0,0,0.05); padding: 28px 24px; } .viz-title { display: flex; align-items: center; gap: 10px; font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0 0 24px; }
    .tx-demo { display: flex; flex-direction: column; gap: 6px; margin-bottom: 20px; }
    .tx-step { display: flex; align-items: center; gap: 10px; padding: 10px 14px; border-radius: 10px; border: 2px solid #e2e8f0; transition: all 0.3s; }
    .tx-step.active { border-color: #4f46e5; background: #eef2ff; } .tx-step.done { border-color: #16a34a; background: #f0fdf4; } .tx-step.error { border-color: #dc2626; background: #fef2f2; }
    .tx-icon { font-size: 1rem; } .tx-text { font-family: 'JetBrains Mono', monospace; font-size: 0.68rem; color: #0f172a; }
    .viz-status { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px 16px; text-align: center; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; color: #334155; margin-bottom: 20px; }
    .viz-controls { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; }
    .btn { display: inline-flex; align-items: center; gap: 7px; padding: 10px 18px; border-radius: 10px; font-size: 0.78rem; font-weight: 600; border: none; cursor: pointer; transition: all 0.2s; } .btn:disabled { opacity: 0.5; cursor: not-allowed; } .btn-indigo { background: #4f46e5; color: #fff; } .btn-red { background: #dc2626; color: #fff; } .btn-gray { background: #e2e8f0; color: #334155; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.06); } .op-title { display: flex; align-items: center; gap: 8px; font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; } .op-desc { font-size: 0.78rem; color: #64748b; line-height: 1.55; margin: 0; }
    .use-cases { display: flex; flex-direction: column; gap: 12px; } .use-case { display: flex; gap: 16px; padding: 20px; border-radius: 14px; border: 1px solid; } .use-case.indigo { background: #eef2ff; border-color: #c7d2fe; } .use-case.blue { background: #eff6ff; border-color: #bfdbfe; } .use-case.purple { background: #faf5ff; border-color: #d8b4fe; }
    .use-num { width: 34px; height: 34px; min-width: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 0.78rem; font-weight: 800; } .indigo-bg { background: #4f46e5; } .blue-bg { background: #3b82f6; } .purple-bg { background: #8b5cf6; }
    .use-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 4px; } .use-desc { font-size: 0.78rem; line-height: 1.55; margin: 0; color: #334155; } .use-desc code { background: rgba(0,0,0,0.06); padding: 1px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; }
  `
})
export class SpringDataComponent {
  txSteps = signal([
    { id: 1, icon: '🔄', text: 'Begin Transaction', state: '' },
    { id: 2, icon: '💰', text: 'Debit account A: -$500', state: '' },
    { id: 3, icon: '💰', text: 'Credit account B: +$500', state: '' },
    { id: 4, icon: '✅', text: 'Commit / Rollback', state: '' },
  ]);
  status = signal('@Transactional manages commit/rollback automatically.');
  isAnimating = signal(false);
  codeIntro = `// Without Spring (boilerplate nightmare)
Connection conn = null;
try {
    conn = dataSource.getConnection();
    PreparedStatement ps = conn.prepareStatement(sql);
    ResultSet rs = ps.executeQuery();
    // ... process results
} catch (SQLException e) { ... }
finally { if (conn != null) conn.close(); }

// With Spring JdbcTemplate (clean!)
List<User> users = jdbcTemplate.query(
    "SELECT * FROM users WHERE age > ?",
    userRowMapper, 18);`;
  codeJdbc = `@Repository
public class UserRepository {
    private final JdbcTemplate jdbc;

    // Query for single object
    public User findById(Long id) {
        return jdbc.queryForObject(
            "SELECT * FROM users WHERE id = ?",
            userMapper, id);
    }

    // Insert
    public void save(User user) {
        jdbc.update(
            "INSERT INTO users(name, email) VALUES(?,?)",
            user.getName(), user.getEmail());
    }

    // Batch
    public void saveAll(List<User> users) {
        jdbc.batchUpdate("INSERT INTO users...",
            new BatchPreparedStatementSetter() { ... });
    }
}`;
  codeTx = `@Service
public class TransferService {

    @Transactional // AOP manages transaction
    public void transfer(Long from, Long to, BigDecimal amount) {
        accountRepo.debit(from, amount);
        accountRepo.credit(to, amount);
        // If credit() throws → auto rollback!
    }

    @Transactional(readOnly = true)
    public Account getBalance(Long id) {
        return accountRepo.findById(id);
    }

    @Transactional(
        propagation = Propagation.REQUIRES_NEW,
        isolation = Isolation.SERIALIZABLE,
        timeout = 30)
    public void criticalOp() { }
}`;
  codeDs = `# application.properties
spring.datasource.url=jdbc:mysql://localhost/mydb
spring.datasource.username=root
spring.datasource.password=secret
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# HikariCP pool settings
spring.datasource.hikari.maximum-pool-size=10
spring.datasource.hikari.minimum-idle=5
spring.datasource.hikari.connection-timeout=30000`;
  codeMapper = `// RowMapper — map each row to an object
private final RowMapper<User> userMapper =
    (rs, rowNum) -> new User(
        rs.getLong("id"),
        rs.getString("name"),
        rs.getString("email"),
        rs.getInt("age")
    );

// Usage
List<User> users = jdbcTemplate.query(
    "SELECT * FROM users", userMapper);

// BeanPropertyRowMapper (convention-based)
RowMapper<User> autoMapper =
    BeanPropertyRowMapper.newInstance(User.class);`;
  private sleep(ms: number): Promise<void> { return new Promise(r => setTimeout(r, ms)); }
  async runSuccess() {
    if (this.isAnimating()) return;
    this.isAnimating.set(true);
    const labels = ['Opening transaction...', 'Debit $500 from Account A...', 'Credit $500 to Account B...', 'All operations succeeded — COMMIT! ✅'];
    for (let i = 0; i < 4; i++) {
      this.txSteps.update(s => s.map((st, j) => j === i ? { ...st, state: 'active' } : j < i ? { ...st, state: 'done' } : st));
      this.status.set(labels[i]); await this.sleep(900);
    }
    this.txSteps.update(s => s.map(st => ({ ...st, state: 'done' }))); this.isAnimating.set(false);
  }
  async runRollback() {
    if (this.isAnimating()) return;
    this.isAnimating.set(true);
    this.txSteps.update(s => s.map((st, j) => j === 0 ? { ...st, state: 'active' } : st));
    this.status.set('Opening transaction...'); await this.sleep(800);
    this.txSteps.update(s => s.map((st, j) => j === 0 ? { ...st, state: 'done' } : j === 1 ? { ...st, state: 'active' } : st));
    this.status.set('Debit $500 from Account A...'); await this.sleep(800);
    this.txSteps.update(s => s.map((st, j) => j < 2 ? { ...st, state: 'done' } : j === 2 ? { ...st, state: 'error', text: '❌ Credit failed! Insufficient funds' } : st));
    this.status.set('Exception thrown! Starting rollback...'); await this.sleep(1000);
    this.txSteps.update(s => s.map((st, j) => j === 3 ? { ...st, state: 'error', text: '↩️ ROLLBACK — all changes reversed' } : st));
    this.status.set('Transaction rolled back. Account A debit reversed. Data consistent! ✅'); this.isAnimating.set(false);
  }
  resetDemo() {
    this.txSteps.set([ { id: 1, icon: '🔄', text: 'Begin Transaction', state: '' }, { id: 2, icon: '💰', text: 'Debit account A: -$500', state: '' }, { id: 3, icon: '💰', text: 'Credit account B: +$500', state: '' }, { id: 4, icon: '✅', text: 'Commit / Rollback', state: '' } ]);
    this.status.set('@Transactional manages commit/rollback automatically.'); this.isAnimating.set(false);
  }
}
