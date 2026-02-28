import{a as l,b as m}from"./chunk-AMVNOPTI.js";import{a as d}from"./chunk-SI5PESLS.js";import{$a as n,Ja as c,ab as i,bb as e,cb as o,ub as t,ya as r}from"./chunk-WGYJYFZL.js";import"./chunk-NWJ5J3BN.js";var u=class p{codeIntro=`// THE N+1 PROBLEM:
List<User> users = em.createQuery("SELECT u FROM User u", User.class)
    .getResultList();  // 1 SQL query

for (User u : users) {
    u.getOrders().size();  // N additional queries!
    // Each user triggers: SELECT * FROM orders WHERE user_id = ?
}

// With 100 users = 101 SQL queries!
// Fix: Use JOIN FETCH, batch fetching, or entity graphs`;codeFetch=`// JOIN FETCH \u2014 load in ONE query
List<User> users = em.createQuery(
    "SELECT DISTINCT u FROM User u JOIN FETCH u.orders", User.class)
    .getResultList();
// Just 1 SQL with JOIN!

// Spring Data JPA
@Query("SELECT u FROM User u JOIN FETCH u.orders")
List<User> findAllWithOrders();

// \u26A0\uFE0F Limitation: can't JOIN FETCH two collections
// Use: @BatchSize or EntityGraph for multiple collections`;codeBatch=`// Batch fetching \u2014 load in batches of N
@Entity
public class User {
    @OneToMany(mappedBy = "user")
    @BatchSize(size = 25)  // load 25 at a time
    private List<Order> orders;
}

// Instead of 100 queries \u2192 4 queries (100/25)
// SQL: SELECT * FROM orders WHERE user_id IN (?, ?, ?, ...)

// Global batch size
spring.jpa.properties.hibernate.default_batch_fetch_size=25

// Batch INSERT optimization
spring.jpa.properties.hibernate.jdbc.batch_size=50
spring.jpa.properties.hibernate.order_inserts=true
spring.jpa.properties.hibernate.order_updates=true`;codeGraph=`// Entity Graph \u2014 declarative fetch plan
@Entity
@NamedEntityGraph(name = "User.withOrders",
    attributeNodes = @NamedAttributeNode("orders"))
public class User { }

// Use in query
Map<String, Object> hints = Map.of(
    "javax.persistence.fetchgraph",
    em.getEntityGraph("User.withOrders"));
User user = em.find(User.class, 1L, hints);

// Spring Data JPA
@EntityGraph(attributePaths = {"orders", "profile"})
List<User> findAll();`;codeMonitor=`# Log all SQL
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true

# With bind parameter values (p6spy)
<dependency>
    <groupId>com.github.gavlyukovskiy</groupId>
    <artifactId>datasource-proxy-spring-boot-starter</artifactId>
</dependency>

# Detect N+1 in tests
@SpringBootTest
public class PerformanceTest {
    @Autowired SQLStatementCountValidator validator;
    @Test void shouldUseOptimalQueries() {
        validator.reset();
        userService.findAll();
        validator.assertSelectCount(1); // fail if > 1 SELECT
    }
}`;static \u0275fac=function(s){return new(s||p)};static \u0275cmp=c({type:p,selectors:[["app-topic-hib-performance"]],decls:33,vars:7,consts:[["title","Performance Tuning","subtitle","Avoid the N+1 problem, optimize batch fetching, fix lazy loading pitfalls, and monitor SQL.","badge","HIBERNATE & JPA","gradient","linear-gradient(135deg, #0369a1, #38bdf8)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-sky",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(s,a){s&1&&(i(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),o(3,"app-icon",3),t(4," Common Problems"),e(),i(5,"div",4)(6,"p"),t(7,"The "),i(8,"strong"),t(9,"N+1 problem"),e(),t(10," is the #1 Hibernate performance killer. 1 query for parents + N queries for children = disaster."),e(),o(11,"app-code-block",5),e()(),i(12,"section",1)(13,"h2",2),o(14,"app-icon",6),t(15," Solutions"),e(),i(16,"div",7)(17,"div",8)(18,"h3",9),t(19,"JOIN FETCH"),e(),o(20,"app-code-block",5),e(),i(21,"div",8)(22,"h3",9),t(23,"Batch Fetching"),e(),o(24,"app-code-block",5),e(),i(25,"div",8)(26,"h3",9),t(27,"Entity Graphs"),e(),o(28,"app-code-block",5),e(),i(29,"div",8)(30,"h3",9),t(31,"SQL Monitoring"),e(),o(32,"app-code-block",5),e()()()()),s&2&&(r(3),n("size",28),r(8),n("code",a.codeIntro),r(3),n("size",28),r(6),n("code",a.codeFetch),r(4),n("code",a.codeBatch),r(4),n("code",a.codeGraph),r(4),n("code",a.codeMonitor))},dependencies:[d,l,m],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-sky[_ngcontent-%COMP%]{color:#0284c7}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{u as HibPerformanceComponent};
