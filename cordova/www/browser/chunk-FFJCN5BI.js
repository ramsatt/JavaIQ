import{a as m,b as l,c as p}from"./chunk-H4UXZOTD.js";import{$a as d,Pa as r,Rb as t,rb as i,sb as n,tb as e,ub as o}from"./chunk-QHT4LFPW.js";import"./chunk-NWJ5J3BN.js";var u=class c{codeIntro=`// JPQL uses entity/field names, NOT table/column names
TypedQuery<User> query = em.createQuery(
    "SELECT u FROM User u WHERE u.age > :age", User.class);
query.setParameter("age", 18);
List<User> users = query.getResultList();

// Single result
User user = em.createQuery(
    "SELECT u FROM User u WHERE u.email = :email", User.class)
    .setParameter("email", "alice@test.com")
    .getSingleResult();`;codeJpql=`// JOIN queries
List<Order> orders = em.createQuery(
    "SELECT o FROM Order o JOIN o.user u WHERE u.name = :name", Order.class)
    .setParameter("name", "Alice")
    .getResultList();

// JOIN FETCH (eager load in one query \u2014 solves N+1!)
List<User> users = em.createQuery(
    "SELECT DISTINCT u FROM User u JOIN FETCH u.orders", User.class)
    .getResultList();

// Aggregate functions
Long count = em.createQuery("SELECT COUNT(u) FROM User u WHERE u.active = true", Long.class)
    .getSingleResult();

// GROUP BY + HAVING
List<Object[]> stats = em.createQuery(
    "SELECT u.department, COUNT(u), AVG(u.salary) FROM User u GROUP BY u.department HAVING COUNT(u) > 5")
    .getResultList();`;codeNamed=`// Define on entity (compile-time checked)
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
    .getResultList();`;codeNative=`// Native SQL (for DB-specific features)
List<User> users = em.createNativeQuery(
    "SELECT * FROM users WHERE MATCH(name) AGAINST(:term IN BOOLEAN MODE)",
    User.class)
    .setParameter("term", "Alice")
    .getResultList();

// Stored procedure
StoredProcedureQuery proc = em.createStoredProcedureQuery("calc_stats")
    .registerStoredProcedureParameter("dept", String.class, ParameterMode.IN)
    .setParameter("dept", "Engineering");
proc.execute();`;codeProjection=`// DTO projection (only select needed fields!)
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
List<UserView> views = userRepo.findAllProjectedBy();`;static \u0275fac=function(a){return new(a||c)};static \u0275cmp=d({type:c,selectors:[["app-topic-hib-jpql"]],decls:32,vars:7,consts:[["title","JPQL & Queries","subtitle","Query entities with JPQL. Named queries, native SQL, projections, and dynamic queries.","badge","HIBERNATE & JPA","gradient","linear-gradient(135deg, #6d28d9, #c084fc)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-violet",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(a,s){a&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),o(3,"app-icon",3),t(4," JPQL"),e(),n(5,"div",4)(6,"p")(7,"strong"),t(8,"JPQL"),e(),t(9," queries entities and their fields (not tables/columns). It's SQL-like but object-oriented."),e(),o(10,"app-code-block",5),e()(),n(11,"section",1)(12,"h2",2),o(13,"app-icon",6),t(14," Query Types"),e(),n(15,"div",7)(16,"div",8)(17,"h3",9),t(18,"JPQL Queries"),e(),o(19,"app-code-block",5),e(),n(20,"div",8)(21,"h3",9),t(22,"Named Queries"),e(),o(23,"app-code-block",5),e(),n(24,"div",8)(25,"h3",9),t(26,"Native SQL"),e(),o(27,"app-code-block",5),e(),n(28,"div",8)(29,"h3",9),t(30,"Projections"),e(),o(31,"app-code-block",5),e()()()()),a&2&&(r(3),i("size",28),r(7),i("code",s.codeIntro),r(3),i("size",28),r(6),i("code",s.codeJpql),r(4),i("code",s.codeNamed),r(4),i("code",s.codeNative),r(4),i("code",s.codeProjection))},dependencies:[m,l,p],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-violet[_ngcontent-%COMP%]{color:#7c3aed}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{u as HibJpqlComponent};
