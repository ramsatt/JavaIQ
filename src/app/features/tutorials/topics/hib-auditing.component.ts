import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-hib-auditing',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
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
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-green { color: #16a34a; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class HibAuditingComponent {
  codeIntro = `// Two approaches:
// 1. JPA Auditing — timestamps + who (Spring Data)
// 2. Hibernate Envers — full version history

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
}
