import {
  CodeBlockComponent,
  TutorialLayoutComponent
} from "./chunk-ACGKXV3L.js";
import {
  IconComponent
} from "./chunk-GCMLYE3M.js";
import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-6OY2Y3BE.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/hib-relations.component.ts
var HibRelationsComponent = class _HibRelationsComponent {
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

// With extra columns \u2192 use intermediate entity!
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
// PERSIST  \u2014 save child when parent saved
// MERGE    \u2014 update child when parent merged
// REMOVE   \u2014 delete child when parent deleted
// REFRESH  \u2014 refresh child when parent refreshed
// DETACH   \u2014 detach child when parent detached
// ALL      \u2014 all of the above

@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
private List<OrderItem> items;

// orphanRemoval = true:
// Removing item from collection \u2192 DELETE from DB
order.getItems().remove(item); // SQL: DELETE

// Without orphanRemoval:
// Removing from collection only sets FK to null`;
  static \u0275fac = function HibRelationsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HibRelationsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HibRelationsComponent, selectors: [["app-topic-hib-relations"]], decls: 33, vars: 7, consts: [["title", "Relationships", "subtitle", "Map associations between entities. OneToMany, ManyToOne, ManyToMany, fetch strategies, and cascade types.", "badge", "HIBERNATE & JPA", "gradient", "linear-gradient(135deg, #0369a1, #38bdf8)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-sky", 3, "size"], [1, "prose"], [3, "code"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"]], template: function HibRelationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Relationships");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7, "JPA supports four relationship types. The owning side controls the foreign key. Always prefer ");
      \u0275\u0275elementStart(8, "code");
      \u0275\u0275text(9, "FetchType.LAZY");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, ".");
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "section", 1)(13, "h2", 2);
      \u0275\u0275element(14, "app-icon", 6);
      \u0275\u0275text(15, " Relationship Types");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 7)(17, "div", 8)(18, "h3", 9);
      \u0275\u0275text(19, "@OneToMany / @ManyToOne");
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 8)(22, "h3", 9);
      \u0275\u0275text(23, "@ManyToMany");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 8)(26, "h3", 9);
      \u0275\u0275text(27, "@OneToOne");
      \u0275\u0275elementEnd();
      \u0275\u0275element(28, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 8)(30, "h3", 9);
      \u0275\u0275text(31, "Cascade & Orphan");
      \u0275\u0275elementEnd();
      \u0275\u0275element(32, "app-code-block", 5);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(8);
      \u0275\u0275property("code", ctx.codeIntro);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(6);
      \u0275\u0275property("code", ctx.codeOtm);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeMtm);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeOto);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeCascade);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ['\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-sky[_ngcontent-%COMP%] {\n  color: #0284c7;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #0284c7;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=hib-relations.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HibRelationsComponent, [{
    type: Component,
    args: [{ selector: "app-topic-hib-relations", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
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
  `, styles: ['/* angular:styles/component:css;60538b978c32548fc0247eebaa5650eb8c7ce3da944541cc43db254c9d5fc83c;D:/A21/JavaIQ/src/app/features/tutorials/topics/hib-relations.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-sky {\n  color: #0284c7;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.prose code {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #0284c7;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=hib-relations.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HibRelationsComponent, { className: "HibRelationsComponent", filePath: "src/app/features/tutorials/topics/hib-relations.component.ts", lineNumber: 36 });
})();
export {
  HibRelationsComponent
};
//# sourceMappingURL=chunk-6B6WZ4SK.js.map
