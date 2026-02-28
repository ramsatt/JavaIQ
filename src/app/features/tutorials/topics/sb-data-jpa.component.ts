import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-sb-data-jpa',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="Spring Data JPA" subtitle="Database access simplified. Repositories, query methods, projections, auditing, and specifications." badge="SPRING BOOT" gradient="linear-gradient(135deg, #4338ca, #818cf8)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-indigo" /> Spring Data JPA</h2>
        <div class="prose">
          <p>Define an interface, Spring generates the implementation. <strong>No boilerplate</strong> — just method names that become queries.</p>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-purple" /> Patterns</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Query Methods</h3><app-code-block [code]="codeQuery" /></div>
          <div class="op-card"><h3 class="op-title">Custom Queries</h3><app-code-block [code]="codeCustom" /></div>
          <div class="op-card"><h3 class="op-title">Relationships</h3><app-code-block [code]="codeRelation" /></div>
          <div class="op-card"><h3 class="op-title">Auditing</h3><app-code-block [code]="codeAudit" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-indigo { color: #4f46e5; } .icon-purple { color: #7c3aed; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class SbDataJpaComponent {
  codeIntro = `@Entity
@Table(name = "users")
public class User {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @Column(unique = true)
    private String email;
    private int age;
    // getters, setters
}

// Just define the interface — Spring does the rest!
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    List<User> findByAgeGreaterThan(int age);
    boolean existsByEmail(String email);
}`;
  codeQuery = `public interface UserRepository extends JpaRepository<User, Long> {
    // Derived query methods (Spring parses the name!)
    List<User> findByNameContainingIgnoreCase(String name);
    List<User> findByAgeBetween(int min, int max);
    List<User> findByNameAndEmail(String name, String email);
    Optional<User> findFirstByOrderByCreatedAtDesc();
    long countByAgeGreaterThan(int age);
    void deleteByEmail(String email);

    // Pagination + sorting built in
    Page<User> findByAge(int age, Pageable pageable);
    List<User> findTop5ByOrderByCreatedAtDesc();
}`;
  codeCustom = `// JPQL
@Query("SELECT u FROM User u WHERE u.age > :age AND u.name LIKE %:name%")
List<User> searchUsers(@Param("age") int age, @Param("name") String name);

// Native SQL
@Query(value = "SELECT * FROM users WHERE email LIKE %?1%", nativeQuery = true)
List<User> findByEmailPattern(String pattern);

// Modifying queries
@Modifying @Transactional
@Query("UPDATE User u SET u.active = false WHERE u.lastLogin < :date")
int deactivateInactiveUsers(@Param("date") LocalDate date);`;
  codeRelation = `@Entity
public class Order {
    @Id @GeneratedValue
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    private List<OrderItem> items = new ArrayList<>();
}

@Entity
public class OrderItem {
    @Id @GeneratedValue
    private Long id;
    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order;
    private String productName;
    private int quantity;
}`;
  codeAudit = `// Enable auditing
@Configuration @EnableJpaAuditing
public class JpaConfig {}

@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public abstract class Auditable {
    @CreatedDate
    private LocalDateTime createdAt;
    @LastModifiedDate
    private LocalDateTime updatedAt;
    @CreatedBy
    private String createdBy;
    @LastModifiedBy
    private String updatedBy;
}

// Your entity extends it
@Entity
public class User extends Auditable {
    // createdAt, updatedAt auto-populated!
}`;
}
