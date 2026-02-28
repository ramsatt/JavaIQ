import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-hib-performance',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
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
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-sky { color: #0284c7; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class HibPerformanceComponent {
  codeIntro = `// THE N+1 PROBLEM:
List<User> users = em.createQuery("SELECT u FROM User u", User.class)
    .getResultList();  // 1 SQL query

for (User u : users) {
    u.getOrders().size();  // N additional queries!
    // Each user triggers: SELECT * FROM orders WHERE user_id = ?
}

// With 100 users = 101 SQL queries!
// Fix: Use JOIN FETCH, batch fetching, or entity graphs`;
  codeFetch = `// JOIN FETCH — load in ONE query
List<User> users = em.createQuery(
    "SELECT DISTINCT u FROM User u JOIN FETCH u.orders", User.class)
    .getResultList();
// Just 1 SQL with JOIN!

// Spring Data JPA
@Query("SELECT u FROM User u JOIN FETCH u.orders")
List<User> findAllWithOrders();

// ⚠️ Limitation: can't JOIN FETCH two collections
// Use: @BatchSize or EntityGraph for multiple collections`;
  codeBatch = `// Batch fetching — load in batches of N
@Entity
public class User {
    @OneToMany(mappedBy = "user")
    @BatchSize(size = 25)  // load 25 at a time
    private List<Order> orders;
}

// Instead of 100 queries → 4 queries (100/25)
// SQL: SELECT * FROM orders WHERE user_id IN (?, ?, ?, ...)

// Global batch size
spring.jpa.properties.hibernate.default_batch_fetch_size=25

// Batch INSERT optimization
spring.jpa.properties.hibernate.jdbc.batch_size=50
spring.jpa.properties.hibernate.order_inserts=true
spring.jpa.properties.hibernate.order_updates=true`;
  codeGraph = `// Entity Graph — declarative fetch plan
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
}
