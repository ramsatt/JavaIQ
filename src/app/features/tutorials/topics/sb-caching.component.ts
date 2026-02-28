import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-sb-caching',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
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
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-sky { color: #0284c7; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; } .prose code { background: #f1f5f9; padding: 2px 7px; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #0284c7; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class SbCachingComponent {
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
}
