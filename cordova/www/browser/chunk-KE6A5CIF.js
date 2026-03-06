import{a as d,b as l,c as m}from"./chunk-5NK5W44O.js";import{Pa as o,Tb as t,ab as c,sb as i,tb as n,ub as e,vb as a}from"./chunk-WSUICUG6.js";import"./chunk-NWJ5J3BN.js";var y=class s{codeIntro=`// Key principles:
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
}`;codeOtm=`@Entity
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
}`;codeMtm=`@Entity
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
}`;codeOto=`@Entity
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
}`;codeCascade=`// CascadeType options:
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
// Removing from collection only sets FK to null`;static \u0275fac=function(p){return new(p||s)};static \u0275cmp=c({type:s,selectors:[["app-topic-hib-relations"]],decls:33,vars:7,consts:[["title","Relationships","subtitle","Map associations between entities. OneToMany, ManyToOne, ManyToMany, fetch strategies, and cascade types.","badge","HIBERNATE & JPA","gradient","linear-gradient(135deg, #0369a1, #38bdf8)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-sky",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(p,r){p&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),a(3,"app-icon",3),t(4," Relationships"),e(),n(5,"div",4)(6,"p"),t(7,"JPA supports four relationship types. The owning side controls the foreign key. Always prefer "),n(8,"code"),t(9,"FetchType.LAZY"),e(),t(10,"."),e(),a(11,"app-code-block",5),e()(),n(12,"section",1)(13,"h2",2),a(14,"app-icon",6),t(15," Relationship Types"),e(),n(16,"div",7)(17,"div",8)(18,"h3",9),t(19,"@OneToMany / @ManyToOne"),e(),a(20,"app-code-block",5),e(),n(21,"div",8)(22,"h3",9),t(23,"@ManyToMany"),e(),a(24,"app-code-block",5),e(),n(25,"div",8)(26,"h3",9),t(27,"@OneToOne"),e(),a(28,"app-code-block",5),e(),n(29,"div",8)(30,"h3",9),t(31,"Cascade & Orphan"),e(),a(32,"app-code-block",5),e()()()()),p&2&&(o(3),i("size",28),o(8),i("code",r.codeIntro),o(3),i("size",28),o(6),i("code",r.codeOtm),o(4),i("code",r.codeMtm),o(4),i("code",r.codeOto),o(4),i("code",r.codeCascade))},dependencies:[d,l,m],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-sky[_ngcontent-%COMP%]{color:#0284c7}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f1f5f9;padding:2px 7px;border-radius:5px;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#0284c7}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{y as HibRelationsComponent};
