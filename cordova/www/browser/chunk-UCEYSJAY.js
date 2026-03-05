import{a as s,b as l,c as u}from"./chunk-LDZEFRU3.js";import{$a as p,Ob as t,Pa as n,qb as o,rb as i,sb as e,tb as a}from"./chunk-AMIPRJ7H.js";import"./chunk-NWJ5J3BN.js";var f=class d{codeIntro=`@SpringBootApplication @EnableCaching
public class App { }

@Service
public class ProductService {
    @Cacheable(value = "products", key = "#id")
    public Product findById(Long id) {
        log.info("Querying DB for product: {}", id);
        return productRepo.findById(id).orElseThrow();
    }

    @CacheEvict(value = "products", key = "#product.id")
    public Product update(Product product) {
        return productRepo.save(product);
    }
}`;codeCaffeine=`# pom.xml
<dependency>
    <groupId>com.github.ben-manes.caffeine</groupId>
    <artifactId>caffeine</artifactId>
</dependency>

# application.yml
spring:
  cache:
    type: caffeine
    caffeine:
      spec: maximumSize=500,expireAfterWrite=10m

# Java Config (per-cache settings)
@Bean
public CacheManager cacheManager() {
    CaffeineCacheManager m = new CaffeineCacheManager();
    m.registerCustomCache("products",
        Caffeine.newBuilder()
            .maximumSize(1000)
            .expireAfterWrite(Duration.ofMinutes(30))
            .build());
    m.registerCustomCache("users",
        Caffeine.newBuilder()
            .maximumSize(200)
            .expireAfterAccess(Duration.ofMinutes(10))
            .build());
    return m;
}`;codeRedis=`# pom.xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-redis</artifactId>
</dependency>

# application.yml
spring:
  data:
    redis:
      host: localhost
      port: 6379
  cache:
    type: redis
    redis:
      time-to-live: 600000  # 10 min
      cache-null-values: false
      key-prefix: "myapp:"`;codePatterns=`// Cache-aside pattern (default with @Cacheable)
@Cacheable("products")
public Product getById(Long id) { return repo.findById(id); }

// Write-through
@CachePut(value = "products", key = "#result.id")
public Product save(Product p) { return repo.save(p); }

// Cache invalidation
@CacheEvict(value = "products", allEntries = true)
@Scheduled(fixedRate = 3600000) // every hour
public void evictAllProducts() { }

// Composite caching
@Caching(
    put = @CachePut("products"),
    evict = @CacheEvict(value = "productList", allEntries = true))
public Product update(Product p) { return repo.save(p); }`;codeCustomConfig=`@Bean
public RedisCacheManager cacheManager(RedisConnectionFactory cf) {
    RedisCacheConfiguration defaultConfig = RedisCacheConfiguration
        .defaultCacheConfig()
        .entryTtl(Duration.ofMinutes(10))
        .serializeValuesWith(
            SerializationPair.fromSerializer(new GenericJackson2JsonRedisSerializer()));

    Map<String, RedisCacheConfiguration> configs = Map.of(
        "products", defaultConfig.entryTtl(Duration.ofHours(1)),
        "users", defaultConfig.entryTtl(Duration.ofMinutes(5)),
        "sessions", defaultConfig.entryTtl(Duration.ofMinutes(30))
    );

    return RedisCacheManager.builder(cf)
        .cacheDefaults(defaultConfig)
        .withInitialCacheConfigurations(configs)
        .build();
}`;static \u0275fac=function(c){return new(c||d)};static \u0275cmp=p({type:d,selectors:[["app-topic-sb-caching"]],decls:33,vars:7,consts:[["title","Caching Strategies","subtitle","Boost performance with Redis, Caffeine, and Spring's cache abstraction with TTL policies.","badge","SPRING BOOT","gradient","linear-gradient(135deg, #0369a1, #38bdf8)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-sky",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(c,r){c&1&&(i(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),a(3,"app-icon",3),t(4," Boot Caching"),e(),i(5,"div",4)(6,"p"),t(7,"Spring Boot auto-configures cache managers. Just add a starter and use "),i(8,"code"),t(9,"@Cacheable"),e(),t(10,"."),e(),a(11,"app-code-block",5),e()(),i(12,"section",1)(13,"h2",2),a(14,"app-icon",6),t(15," Providers"),e(),i(16,"div",7)(17,"div",8)(18,"h3",9),t(19,"Caffeine (Local)"),e(),a(20,"app-code-block",5),e(),i(21,"div",8)(22,"h3",9),t(23,"Redis (Distributed)"),e(),a(24,"app-code-block",5),e(),i(25,"div",8)(26,"h3",9),t(27,"Cache Patterns"),e(),a(28,"app-code-block",5),e(),i(29,"div",8)(30,"h3",9),t(31,"Custom Config"),e(),a(32,"app-code-block",5),e()()()()),c&2&&(n(3),o("size",28),n(8),o("code",r.codeIntro),n(3),o("size",28),n(6),o("code",r.codeCaffeine),n(4),o("code",r.codeRedis),n(4),o("code",r.codePatterns),n(4),o("code",r.codeCustomConfig))},dependencies:[s,l,u],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-sky[_ngcontent-%COMP%]{color:#0284c7}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f1f5f9;padding:2px 7px;border-radius:5px;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#0284c7}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{f as SbCachingComponent};
