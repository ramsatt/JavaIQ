import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-hib-relations',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="Relationships" subtitle="Map associations between entities. OneToMany, ManyToOne, ManyToMany, fetch strategies, and cascade types." badge="HIBERNATE & JPA" gradient="linear-gradient(135deg, #0369a1, #38bdf8)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-sky" /> Relationships</h2>
        <div class="prose">
          <p>JPA supports four relationship types. The owning side controls the foreign key. Always prefer <code>FetchType.LAZY</code>.</p>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Relationship Types</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">&#64;OneToMany / &#64;ManyToOne</h3><app-code-block [code]="codeOtm" /></div>
          <div class="op-card"><h3 class="op-title">&#64;ManyToMany</h3><app-code-block [code]="codeMtm" /></div>
          <div class="op-card"><h3 class="op-title">&#64;OneToOne</h3><app-code-block [code]="codeOto" /></div>
          <div class="op-card"><h3 class="op-title">Cascade & Orphan</h3><app-code-block [code]="codeCascade" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-sky { color: #0284c7; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; } .prose code { background: #f1f5f9; padding: 2px 7px; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #0284c7; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class HibRelationsComponent {
  codeIntro = `// Key principles:
// 1. Owning side has the FK (use @JoinColumn)
// 2. mappedBy defines the inverse side
// 3. Always use FetchType.LAZY (avoid N+1)
// 4. Use cascade carefully

@Entity public class User {
    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private List<Order> orders = new ArrayList<>();
}

@Entity public class Order {
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")  // FK column
    private User user;
}`;
  codeOtm = `@Entity
public class Department {
    @Id @GeneratedValue
    private Long id;
    private String name;

    @OneToMany(mappedBy = "department",
        cascade = CascadeType.ALL,
        orphanRemoval = true)
    private List<Employee> employees = new ArrayList<>();

    // Helper methods (keep both sides in sync!)
    public void addEmployee(Employee emp) {
        employees.add(emp);
        emp.setDepartment(this);
    }
    public void removeEmployee(Employee emp) {
        employees.remove(emp);
        emp.setDepartment(null);
    }
}

@Entity
public class Employee {
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "department_id")
    private Department department;
}`;
  codeMtm = `@Entity
public class Student {
    @ManyToMany
    @JoinTable(
        name = "student_course",  // join table
        joinColumns = @JoinColumn(name = "student_id"),
        inverseJoinColumns = @JoinColumn(name = "course_id"))
    private Set<Course> courses = new HashSet<>();
}

@Entity
public class Course {
    @ManyToMany(mappedBy = "courses")
    private Set<Student> students = new HashSet<>();
}

// With extra columns → use intermediate entity!
@Entity
public class Enrollment {
    @ManyToOne private Student student;
    @ManyToOne private Course course;
    private LocalDate enrolledAt;
    private Grade grade;
}`;
  codeOto = `@Entity
public class User {
    @OneToOne(mappedBy = "user",
        cascade = CascadeType.ALL,
        fetch = FetchType.LAZY)
    private UserProfile profile;
}

@Entity
public class UserProfile {
    @Id  // Shared PK (same ID as User)
    private Long id;

    @OneToOne(fetch = FetchType.LAZY)
    @MapsId  // shares PK with User
    @JoinColumn(name = "id")
    private User user;

    private String bio;
    private String avatarUrl;
}`;
  codeCascade = `// CascadeType options:
// PERSIST  — save child when parent saved
// MERGE    — update child when parent merged
// REMOVE   — delete child when parent deleted
// REFRESH  — refresh child when parent refreshed
// DETACH   — detach child when parent detached
// ALL      — all of the above

@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
private List<OrderItem> items;

// orphanRemoval = true:
// Removing item from collection → DELETE from DB
order.getItems().remove(item); // SQL: DELETE

// Without orphanRemoval:
// Removing from collection only sets FK to null`;
}
