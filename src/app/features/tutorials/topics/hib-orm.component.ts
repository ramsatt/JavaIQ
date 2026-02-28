import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-hib-orm',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="ORM Fundamentals" subtitle="Bridge the object-relational gap. Understand Hibernate's architecture, SessionFactory, EntityManager, and persistence lifecycle." badge="HIBERNATE & JPA" gradient="linear-gradient(135deg, #4338ca, #818cf8)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-indigo" /> What is ORM?</h2>
        <div class="prose">
          <p><strong>ORM</strong> (Object-Relational Mapping) maps Java objects to database tables. Hibernate is the most popular JPA implementation.</p>
          <ul>
            <li><strong>JPA:</strong> The specification (javax/jakarta.persistence). Defines the API.</li>
            <li><strong>Hibernate:</strong> The implementation. Provides the engine behind JPA.</li>
            <li><strong>EntityManager:</strong> The gateway — persist, find, merge, remove entities.</li>
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
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-indigo { color: #4f46e5; } .icon-purple { color: #7c3aed; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; } .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; } .prose li { margin-bottom: 8px; } .prose strong { color: #0f172a; }
    .viz-card { background: #fff; border-radius: 18px; border: 1px solid #e2e8f0; padding: 28px 24px; } .viz-title { display: flex; align-items: center; gap: 10px; font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0 0 24px; }
    .lifecycle { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin-bottom: 20px; }
    .state-card { padding: 14px 8px; border-radius: 12px; border: 2px solid #e2e8f0; text-align: center; cursor: pointer; transition: all 0.3s; } .state-card.active { border-color: #4f46e5; background: #eef2ff; transform: scale(1.05); }
    .state-icon { display: block; font-size: 1.3rem; margin-bottom: 4px; } .state-name { font-size: 0.6rem; font-weight: 800; color: #0f172a; }
    .viz-status { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px 16px; text-align: center; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; color: #334155; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class HibOrmComponent {
  active = signal(''); status = signal('Click a lifecycle state to learn about it.');
  states = signal([
    { name: 'Transient', icon: '🆕' }, { name: 'Managed', icon: '✅' },
    { name: 'Detached', icon: '🔓' }, { name: 'Removed', icon: '🗑️' },
  ]);
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
em.persist(user);    // INSERT → user is now "managed"
User found = em.find(User.class, 1L);  // SELECT by PK`;
  codeEm = `// EntityManager — the core JPA interface
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
// No explicit save needed — Hibernate detects changes

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
  codeVs = `// JPA (specification — portable)
@PersistenceContext
EntityManager em;
em.persist(entity);
em.find(User.class, id);
em.createQuery("SELECT u FROM User u", User.class);

// Hibernate (implementation — extra features)
Session session = em.unwrap(Session.class);
session.saveOrUpdate(entity);  // Hibernate-specific
session.createNaturalIdQuery(User.class)
    .using("email", "alice@test.com")
    .uniqueResult();

// Recommendation: Use JPA API when possible
// Use Hibernate API only for advanced features`;

  select(name: string) {
    this.active.set(name);
    const info: Record<string, string> = {
      'Transient': 'Transient: new object, NOT managed by persistence context. No DB row yet.',
      'Managed': 'Managed: tracked by EntityManager. Changes auto-detected and flushed to DB.',
      'Detached': 'Detached: was managed, now disconnected. Use merge() to re-attach.',
      'Removed': 'Removed: scheduled for deletion. DELETE executed at flush/commit.'
    };
    this.status.set(info[name] ?? '');
  }
}
