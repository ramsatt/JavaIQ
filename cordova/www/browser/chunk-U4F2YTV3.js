import {
  CodeBlockComponent,
  IconComponent,
  TutorialLayoutComponent
} from "./chunk-MLPCG66Y.js";
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
} from "./chunk-VBTVL2BZ.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/sb-caching.component.ts
var SbCachingComponent = class _SbCachingComponent {
  codeIntro = `@SpringBootApplication @EnableCaching
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
}`;
  codeCaffeine = `# pom.xml
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
}`;
  codeRedis = `# pom.xml
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
      key-prefix: "myapp:"`;
  codePatterns = `// Cache-aside pattern (default with @Cacheable)
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
public Product update(Product p) { return repo.save(p); }`;
  codeCustomConfig = `@Bean
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
}`;
  static \u0275fac = function SbCachingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SbCachingComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SbCachingComponent, selectors: [["app-topic-sb-caching"]], decls: 33, vars: 7, consts: [["title", "Caching Strategies", "subtitle", "Boost performance with Redis, Caffeine, and Spring's cache abstraction with TTL policies.", "badge", "SPRING BOOT", "gradient", "linear-gradient(135deg, #0369a1, #38bdf8)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-sky", 3, "size"], [1, "prose"], [3, "code"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"]], template: function SbCachingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Boot Caching");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7, "Spring Boot auto-configures cache managers. Just add a starter and use ");
      \u0275\u0275elementStart(8, "code");
      \u0275\u0275text(9, "@Cacheable");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, ".");
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "section", 1)(13, "h2", 2);
      \u0275\u0275element(14, "app-icon", 6);
      \u0275\u0275text(15, " Providers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 7)(17, "div", 8)(18, "h3", 9);
      \u0275\u0275text(19, "Caffeine (Local)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 8)(22, "h3", 9);
      \u0275\u0275text(23, "Redis (Distributed)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 8)(26, "h3", 9);
      \u0275\u0275text(27, "Cache Patterns");
      \u0275\u0275elementEnd();
      \u0275\u0275element(28, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 8)(30, "h3", 9);
      \u0275\u0275text(31, "Custom Config");
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
      \u0275\u0275property("code", ctx.codeCaffeine);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeRedis);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codePatterns);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeCustomConfig);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ['\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-sky[_ngcontent-%COMP%] {\n  color: #0284c7;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #0284c7;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=sb-caching.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SbCachingComponent, [{
    type: Component,
    args: [{ selector: "app-topic-sb-caching", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout title="Caching Strategies" subtitle="Boost performance with Redis, Caffeine, and Spring's cache abstraction with TTL policies." badge="SPRING BOOT" gradient="linear-gradient(135deg, #0369a1, #38bdf8)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-sky" /> Boot Caching</h2>
        <div class="prose">
          <p>Spring Boot auto-configures cache managers. Just add a starter and use <code>&#64;Cacheable</code>.</p>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Providers</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Caffeine (Local)</h3><app-code-block [code]="codeCaffeine" /></div>
          <div class="op-card"><h3 class="op-title">Redis (Distributed)</h3><app-code-block [code]="codeRedis" /></div>
          <div class="op-card"><h3 class="op-title">Cache Patterns</h3><app-code-block [code]="codePatterns" /></div>
          <div class="op-card"><h3 class="op-title">Custom Config</h3><app-code-block [code]="codeCustomConfig" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ['/* angular:styles/component:css;60538b978c32548fc0247eebaa5650eb8c7ce3da944541cc43db254c9d5fc83c;/Users/sathishkumarramalingam/projects/JavaIQ/.claude/worktrees/goofy-haibt/src/app/features/tutorials/topics/sb-caching.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-sky {\n  color: #0284c7;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.prose code {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #0284c7;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=sb-caching.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SbCachingComponent, { className: "SbCachingComponent", filePath: "src/app/features/tutorials/topics/sb-caching.component.ts", lineNumber: 36 });
})();
export {
  SbCachingComponent
};
//# sourceMappingURL=chunk-U4F2YTV3.js.map
