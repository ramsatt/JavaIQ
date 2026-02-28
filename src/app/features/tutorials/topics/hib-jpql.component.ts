import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-hib-jpql',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
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
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-violet { color: #7c3aed; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class HibJpqlComponent {
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

// JOIN FETCH (eager load in one query — solves N+1!)
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
}
