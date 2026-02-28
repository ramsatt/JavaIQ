import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-dp-template',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
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
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-amber { color: #d97706; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class DpTemplateComponent {
  codeIntro = `// The base class defines the FLOW (template)
// Subclasses implement SPECIFIC STEPS
// Framework provides the skeleton, you fill in the blanks`;
  codeClassic = `abstract class DataMiner {
    // Template method — defines the algorithm
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
  codeHook = `// Hooks — optional override points
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
// JdbcTemplate — template for JDBC
jdbcTemplate.query(
    "SELECT * FROM users WHERE age > ?",
    (rs, rowNum) -> new User(rs.getString("name"), rs.getInt("age")),
    18);

// RestTemplate — template for HTTP
User user = restTemplate.getForObject("/api/users/{id}", User.class, 1);

// JpaRepository — template for CRUD
// HttpSecurity — template for security config
// AbstractController — template for MVC

// You just fill in the specifics!`;
}
