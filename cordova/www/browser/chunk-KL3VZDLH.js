import{a as d,b as p,c as m}from"./chunk-LDZEFRU3.js";import{$a as l,Ob as n,Pa as t,qb as r,rb as i,sb as e,tb as o}from"./chunk-AMIPRJ7H.js";import"./chunk-NWJ5J3BN.js";var g=class s{codeIntro=`CriteriaBuilder cb = em.getCriteriaBuilder();
CriteriaQuery<User> cq = cb.createQuery(User.class);
Root<User> root = cq.from(User.class);

cq.select(root)
  .where(cb.and(
      cb.greaterThan(root.get("age"), 18),
      cb.equal(root.get("active"), true)))
  .orderBy(cb.asc(root.get("name")));

List<User> users = em.createQuery(cq).getResultList();`;codeDynamic=`// Dynamic search \u2014 add predicates conditionally
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
}`;codeJoins=`// Join
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
cq.where(root.get("id").in(sub));`;codeSpec=`// Spring Data JPA Specifications (reusable!)
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
        .and(UserSpecs.inDept("Engineering")));`;codeMeta=`// JPA Metamodel (compile-time type safety)
// Generated: User_.java
@StaticMetamodel(User.class)
public class User_ {
    public static volatile SingularAttribute<User, Long> id;
    public static volatile SingularAttribute<User, String> name;
    public static volatile SingularAttribute<User, Integer> age;
}

// Usage \u2014 no more string field names!
cq.where(cb.greaterThan(root.get(User_.age), 18));
cq.orderBy(cb.asc(root.get(User_.name)));
// Refactoring User.name \u2192 User.fullName
// \u2192 compile error, not runtime error!`;static \u0275fac=function(c){return new(c||s)};static \u0275cmp=l({type:s,selectors:[["app-topic-hib-criteria"]],decls:30,vars:7,consts:[["title","Criteria API","subtitle","Build type-safe, dynamic queries. CriteriaBuilder, CriteriaQuery, metamodel, and specifications.","badge","HIBERNATE & JPA","gradient","linear-gradient(135deg, #065f46, #34d399)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-emerald",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(c,a){c&1&&(i(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),o(3,"app-icon",3),n(4," Criteria API"),e(),i(5,"div",4)(6,"p"),n(7,"The Criteria API builds queries programmatically. Type-safe, refactor-friendly, and perfect for dynamic search filters."),e(),o(8,"app-code-block",5),e()(),i(9,"section",1)(10,"h2",2),o(11,"app-icon",6),n(12," Patterns"),e(),i(13,"div",7)(14,"div",8)(15,"h3",9),n(16,"Dynamic Queries"),e(),o(17,"app-code-block",5),e(),i(18,"div",8)(19,"h3",9),n(20,"Joins & Subqueries"),e(),o(21,"app-code-block",5),e(),i(22,"div",8)(23,"h3",9),n(24,"Specifications"),e(),o(25,"app-code-block",5),e(),i(26,"div",8)(27,"h3",9),n(28,"Metamodel"),e(),o(29,"app-code-block",5),e()()()()),c&2&&(t(3),r("size",28),t(5),r("code",a.codeIntro),t(3),r("size",28),t(6),r("code",a.codeDynamic),t(4),r("code",a.codeJoins),t(4),r("code",a.codeSpec),t(4),r("code",a.codeMeta))},dependencies:[d,p,m],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-emerald[_ngcontent-%COMP%]{color:#059669}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{g as HibCriteriaComponent};
