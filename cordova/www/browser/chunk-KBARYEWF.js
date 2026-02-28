import{a as E,b as _}from"./chunk-FDH3XGHK.js";import{a as x}from"./chunk-IWR5KZXO.js";import{$ as m,Ba as n,Ma as u,_ as g,ab as C,bb as y,cb as o,db as t,eb as e,fb as r,ka as d,lb as f,mb as v,nb as h,vb as b,xb as a,yb as p}from"./chunk-AMBX34QR.js";import"./chunk-NWJ5J3BN.js";var M=(l,s)=>s.name;function O(l,s){if(l&1){let i=f();t(0,"div",16),v("click",function(){let S=g(i).$implicit,P=h();return m(P.selectCache(S.name))}),t(1,"span",17),a(2),e(),t(3,"span",18),a(4),e()()}if(l&2){let i=s.$implicit,c=h();b("active",c.activeCache()===i.name),n(2),p(i.level),n(2),p(i.name)}}var L=class l{activeCache=d("");status=d("Click a cache layer to learn about it.");caches=d([{name:"First-Level (L1)",level:"L1"},{name:"Second-Level (L2)",level:"L2"},{name:"Query Cache",level:"QC"}]);codeIntro=`// L1: Persistence Context (always enabled)
User u1 = em.find(User.class, 1L);  // SQL: SELECT
User u2 = em.find(User.class, 1L);  // No SQL! Same session

// L2: Shared across sessions (opt-in)
@Entity
@Cacheable  // Enable L2 cache for this entity
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Product { }

// Query Cache: Caches query results (opt-in)
em.createQuery("SELECT p FROM Product p WHERE p.active = true")
    .setHint("org.hibernate.cacheable", true)
    .getResultList();`;codeL2=`# application.yml
spring:
  jpa:
    properties:
      hibernate:
        cache:
          use_second_level_cache: true
          region:
            factory_class: org.hibernate.cache.jcache.JCacheRegionFactory
        javax:
          cache:
            provider: org.ehcache.jsr107.EhcacheCachingProvider

# Entity annotation
@Entity
@Cacheable
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE,
    region = "products")
public class Product { }`;codeQuery=`# Enable query cache
spring.jpa.properties.hibernate.cache.use_query_cache=true

// Mark individual queries as cacheable
List<Product> products = em.createQuery(
    "SELECT p FROM Product p WHERE p.category = :cat", Product.class)
    .setParameter("cat", "Electronics")
    .setHint("org.hibernate.cacheable", true)
    .setHint("org.hibernate.cacheRegion", "product-queries")
    .getResultList();

// Spring Data JPA
@QueryHints(@QueryHint(name = "org.hibernate.cacheable", value = "true"))
List<Product> findByCategory(String category);`;codeRegions=`// Configure cache regions with different TTLs
@Entity @Cache(region = "short-lived")
public class Session { }  // 5 min TTL

@Entity @Cache(region = "long-lived")
public class Country { }  // 24 hour TTL

// ehcache.xml
<cache alias="short-lived">
    <expiry><ttl unit="minutes">5</ttl></expiry>
    <heap>100</heap>
</cache>
<cache alias="long-lived">
    <expiry><ttl unit="hours">24</ttl></expiry>
    <heap>1000</heap>
</cache>`;codeConcurrency=`// Cache concurrency strategies
@Cache(usage = CacheConcurrencyStrategy.READ_ONLY)
// Immutable entities (countries, currencies)

@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
// Read-mostly data with versioning

@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
// Eventual consistency OK

@Cache(usage = CacheConcurrencyStrategy.TRANSACTIONAL)
// Full transactional guarantee (JTA required)`;selectCache(s){this.activeCache.set(s);let i={"First-Level (L1)":"L1: Always ON. Scoped to session/EntityManager. Same entity = same object. Clears on close.","Second-Level (L2)":"L2: Shared across sessions. Opt-in per entity. Uses EhCache, Caffeine, or Redis.","Query Cache":"QC: Caches query results (IDs). Invalidated when cached entities change. Use carefully!"};this.status.set(i[s]??"")}static \u0275fac=function(i){return new(i||l)};static \u0275cmp=u({type:l,selectors:[["app-topic-hib-caching"]],decls:40,vars:9,consts:[["title","Caching","subtitle","Boost performance with Hibernate's multi-level cache. First-level, second-level, and query cache.","badge","HIBERNATE & JPA","gradient","linear-gradient(135deg, #b45309, #fbbf24)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-amber",3,"size"],[1,"prose"],[3,"code"],[1,"viz-card"],[1,"viz-title"],["name","play","css","icon-amber",3,"size"],[1,"cache-grid"],[1,"cache-item",3,"active"],[1,"viz-status"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"],[1,"cache-item",3,"click"],[1,"cache-level"],[1,"cache-name"]],template:function(i,c){i&1&&(t(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),r(3,"app-icon",3),a(4," Cache Levels"),e(),t(5,"div",4)(6,"p"),a(7,"Hibernate has three cache levels. L1 is always on; L2 and query cache need explicit configuration."),e(),r(8,"app-code-block",5),e()(),t(9,"section",1)(10,"div",6)(11,"h3",7),r(12,"app-icon",8),a(13," Cache Layers"),e(),t(14,"div",9),C(15,O,5,4,"div",10,M),e(),t(17,"div",11),a(18),e()()(),t(19,"section",1)(20,"h2",2),r(21,"app-icon",12),a(22," Config"),e(),t(23,"div",13)(24,"div",14)(25,"h3",15),a(26,"Second-Level Cache"),e(),r(27,"app-code-block",5),e(),t(28,"div",14)(29,"h3",15),a(30,"Query Cache"),e(),r(31,"app-code-block",5),e(),t(32,"div",14)(33,"h3",15),a(34,"Cache Regions"),e(),r(35,"app-code-block",5),e(),t(36,"div",14)(37,"h3",15),a(38,"Concurrency"),e(),r(39,"app-code-block",5),e()()()()),i&2&&(n(3),o("size",28),n(5),o("code",c.codeIntro),n(4),o("size",22),n(3),y(c.caches()),n(3),p(c.status()),n(3),o("size",28),n(6),o("code",c.codeL2),n(4),o("code",c.codeQuery),n(4),o("code",c.codeRegions),n(4),o("code",c.codeConcurrency))},dependencies:[x,E,_],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-amber[_ngcontent-%COMP%]{color:#d97706}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.viz-card[_ngcontent-%COMP%]{background:#fff;border-radius:18px;border:1px solid #e2e8f0;padding:28px 24px}.viz-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;font-size:1.15rem;font-weight:700;color:#0f172a;margin:0 0 24px}.cache-grid[_ngcontent-%COMP%]{display:flex;gap:8px;margin-bottom:20px;justify-content:center}.cache-item[_ngcontent-%COMP%]{padding:14px 18px;border-radius:12px;border:2px solid #e2e8f0;text-align:center;cursor:pointer;transition:all .3s}.cache-item.active[_ngcontent-%COMP%]{border-color:#d97706;background:#fffbeb;transform:scale(1.05)}.cache-level[_ngcontent-%COMP%]{display:block;font-size:1.1rem;font-weight:900;color:#d97706}.cache-name[_ngcontent-%COMP%]{font-size:.6rem;font-weight:700;color:#0f172a}.viz-status[_ngcontent-%COMP%]{background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:12px 16px;text-align:center;font-family:JetBrains Mono,monospace;font-size:.78rem;color:#334155}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{L as HibCachingComponent};
