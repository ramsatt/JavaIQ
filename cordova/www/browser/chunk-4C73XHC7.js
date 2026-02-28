import{a as C,b as M}from"./chunk-FDH3XGHK.js";import{a as E}from"./chunk-IWR5KZXO.js";import{$ as f,Ba as i,Ma as u,_ as g,ab as x,bb as b,cb as r,db as n,eb as e,fb as s,ka as d,lb as h,mb as v,nb as p,vb as y,xb as t,yb as m}from"./chunk-AMBX34QR.js";import"./chunk-NWJ5J3BN.js";var S=(l,c)=>c.name;function T(l,c){if(l&1){let a=h();n(0,"div",16),v("click",function(){let _=g(a).$implicit,O=p();return f(O.select(_.name))}),n(1,"span",17),t(2),e(),n(3,"span",18),t(4),e()()}if(l&2){let a=c.$implicit,o=p();y("active",o.active()===a.name),i(2),m(a.icon),i(2),m(a.name)}}var P=class l{active=d("");status=d("Click a lifecycle state to learn about it.");states=d([{name:"Transient",icon:"\u{1F195}"},{name:"Managed",icon:"\u2705"},{name:"Detached",icon:"\u{1F513}"},{name:"Removed",icon:"\u{1F5D1}\uFE0F"}]);codeIntro=`@Entity
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
em.persist(user);    // INSERT \u2192 user is now "managed"
User found = em.find(User.class, 1L);  // SELECT by PK`;codeEm=`// EntityManager \u2014 the core JPA interface
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
// No explicit save needed \u2014 Hibernate detects changes

// DELETE
em.remove(found);  // DELETE`;codePc=`// Persistence Context = first-level cache
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
em.flush();  // force flush manually`;codeConfig=`# application.yml (Spring Boot)
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
        order_inserts: true`;codeVs=`// JPA (specification \u2014 portable)
@PersistenceContext
EntityManager em;
em.persist(entity);
em.find(User.class, id);
em.createQuery("SELECT u FROM User u", User.class);

// Hibernate (implementation \u2014 extra features)
Session session = em.unwrap(Session.class);
session.saveOrUpdate(entity);  // Hibernate-specific
session.createNaturalIdQuery(User.class)
    .using("email", "alice@test.com")
    .uniqueResult();

// Recommendation: Use JPA API when possible
// Use Hibernate API only for advanced features`;select(c){this.active.set(c);let a={Transient:"Transient: new object, NOT managed by persistence context. No DB row yet.",Managed:"Managed: tracked by EntityManager. Changes auto-detected and flushed to DB.",Detached:"Detached: was managed, now disconnected. Use merge() to re-attach.",Removed:"Removed: scheduled for deletion. DELETE executed at flush/commit."};this.status.set(a[c]??"")}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=u({type:l,selectors:[["app-topic-hib-orm"]],decls:59,vars:9,consts:[["title","ORM Fundamentals","subtitle","Bridge the object-relational gap. Understand Hibernate's architecture, SessionFactory, EntityManager, and persistence lifecycle.","badge","HIBERNATE & JPA","gradient","linear-gradient(135deg, #4338ca, #818cf8)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-indigo",3,"size"],[1,"prose"],[3,"code"],[1,"viz-card"],[1,"viz-title"],["name","play","css","icon-indigo",3,"size"],[1,"lifecycle"],[1,"state-card",3,"active"],[1,"viz-status"],["name","code","css","icon-purple",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"],[1,"state-card",3,"click"],[1,"state-icon"],[1,"state-name"]],template:function(a,o){a&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),s(3,"app-icon",3),t(4," What is ORM?"),e(),n(5,"div",4)(6,"p")(7,"strong"),t(8,"ORM"),e(),t(9," (Object-Relational Mapping) maps Java objects to database tables. Hibernate is the most popular JPA implementation."),e(),n(10,"ul")(11,"li")(12,"strong"),t(13,"JPA:"),e(),t(14," The specification (javax/jakarta.persistence). Defines the API."),e(),n(15,"li")(16,"strong"),t(17,"Hibernate:"),e(),t(18," The implementation. Provides the engine behind JPA."),e(),n(19,"li")(20,"strong"),t(21,"EntityManager:"),e(),t(22," The gateway \u2014 persist, find, merge, remove entities."),e(),n(23,"li")(24,"strong"),t(25,"Persistence Context:"),e(),t(26," First-level cache that tracks entity state."),e()(),s(27,"app-code-block",5),e()(),n(28,"section",1)(29,"div",6)(30,"h3",7),s(31,"app-icon",8),t(32," Entity Lifecycle"),e(),n(33,"div",9),x(34,T,5,4,"div",10,S),e(),n(36,"div",11),t(37),e()()(),n(38,"section",1)(39,"h2",2),s(40,"app-icon",12),t(41," Core Concepts"),e(),n(42,"div",13)(43,"div",14)(44,"h3",15),t(45,"EntityManager"),e(),s(46,"app-code-block",5),e(),n(47,"div",14)(48,"h3",15),t(49,"Persistence Context"),e(),s(50,"app-code-block",5),e(),n(51,"div",14)(52,"h3",15),t(53,"Configuration"),e(),s(54,"app-code-block",5),e(),n(55,"div",14)(56,"h3",15),t(57,"JPA vs Hibernate"),e(),s(58,"app-code-block",5),e()()()()),a&2&&(i(3),r("size",28),i(24),r("code",o.codeIntro),i(4),r("size",22),i(3),b(o.states()),i(3),m(o.status()),i(3),r("size",28),i(6),r("code",o.codeEm),i(4),r("code",o.codePc),i(4),r("code",o.codeConfig),i(4),r("code",o.codeVs))},dependencies:[E,C,M],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.icon-purple[_ngcontent-%COMP%]{color:#7c3aed}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:14px 0;padding-left:22px;list-style:disc}.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:8px}.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#0f172a}.viz-card[_ngcontent-%COMP%]{background:#fff;border-radius:18px;border:1px solid #e2e8f0;padding:28px 24px}.viz-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;font-size:1.15rem;font-weight:700;color:#0f172a;margin:0 0 24px}.lifecycle[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:20px}.state-card[_ngcontent-%COMP%]{padding:14px 8px;border-radius:12px;border:2px solid #e2e8f0;text-align:center;cursor:pointer;transition:all .3s}.state-card.active[_ngcontent-%COMP%]{border-color:#4f46e5;background:#eef2ff;transform:scale(1.05)}.state-icon[_ngcontent-%COMP%]{display:block;font-size:1.3rem;margin-bottom:4px}.state-name[_ngcontent-%COMP%]{font-size:.6rem;font-weight:800;color:#0f172a}.viz-status[_ngcontent-%COMP%]{background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:12px 16px;text-align:center;font-family:JetBrains Mono,monospace;font-size:.78rem;color:#334155}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{P as HibOrmComponent};
