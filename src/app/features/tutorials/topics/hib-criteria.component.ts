import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-hib-criteria',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
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
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-emerald { color: #059669; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class HibCriteriaComponent {
  codeIntro = `CriteriaBuilder cb = em.getCriteriaBuilder();
CriteriaQuery<User> cq = cb.createQuery(User.class);
Root<User> root = cq.from(User.class);

cq.select(root)
  .where(cb.and(
      cb.greaterThan(root.get("age"), 18),
      cb.equal(root.get("active"), true)))
  .orderBy(cb.asc(root.get("name")));

List<User> users = em.createQuery(cq).getResultList();`;
  codeDynamic = `// Dynamic search — add predicates conditionally
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

// Usage — no more string field names!
cq.where(cb.greaterThan(root.get(User_.age), 18));
cq.orderBy(cb.asc(root.get(User_.name)));
// Refactoring User.name → User.fullName
// → compile error, not runtime error!`;
}
