import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-hib-caching',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="Caching" subtitle="Boost performance with Hibernate's multi-level cache. First-level, second-level, and query cache." badge="HIBERNATE & JPA" gradient="linear-gradient(135deg, #b45309, #fbbf24)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-amber" /> Cache Levels</h2>
        <div class="prose">
          <p>Hibernate has three cache levels. L1 is always on; L2 and query cache need explicit configuration.</p>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title"><app-icon name="play" [size]="22" css="icon-amber" /> Cache Layers</h3>
          <div class="cache-grid">
            @for (c of caches(); track c.name) {
              <div class="cache-item" [class.active]="activeCache() === c.name" (click)="selectCache(c.name)">
                <span class="cache-level">{{ c.level }}</span>
                <span class="cache-name">{{ c.name }}</span>
              </div>
            }
          </div>
          <div class="viz-status">{{ status() }}</div>
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Config</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Second-Level Cache</h3><app-code-block [code]="codeL2" /></div>
          <div class="op-card"><h3 class="op-title">Query Cache</h3><app-code-block [code]="codeQuery" /></div>
          <div class="op-card"><h3 class="op-title">Cache Regions</h3><app-code-block [code]="codeRegions" /></div>
          <div class="op-card"><h3 class="op-title">Concurrency</h3><app-code-block [code]="codeConcurrency" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-amber { color: #d97706; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; }
    .viz-card { background: #fff; border-radius: 18px; border: 1px solid #e2e8f0; padding: 28px 24px; } .viz-title { display: flex; align-items: center; gap: 10px; font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0 0 24px; }
    .cache-grid { display: flex; gap: 8px; margin-bottom: 20px; justify-content: center; }
    .cache-item { padding: 14px 18px; border-radius: 12px; border: 2px solid #e2e8f0; text-align: center; cursor: pointer; transition: all 0.3s; } .cache-item.active { border-color: #d97706; background: #fffbeb; transform: scale(1.05); }
    .cache-level { display: block; font-size: 1.1rem; font-weight: 900; color: #d97706; } .cache-name { font-size: 0.6rem; font-weight: 700; color: #0f172a; }
    .viz-status { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px 16px; text-align: center; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; color: #334155; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class HibCachingComponent {
  activeCache = signal(''); status = signal('Click a cache layer to learn about it.');
  caches = signal([
    { name: 'First-Level (L1)', level: 'L1' },
    { name: 'Second-Level (L2)', level: 'L2' },
    { name: 'Query Cache', level: 'QC' },
  ]);
  codeIntro = `// L1: Persistence Context (always enabled)
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
    .getResultList();`;
  codeL2 = `# application.yml
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
public class Product { }`;
  codeQuery = `# Enable query cache
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
List<Product> findByCategory(String category);`;
  codeRegions = `// Configure cache regions with different TTLs
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
</cache>`;
  codeConcurrency = `// Cache concurrency strategies
@Cache(usage = CacheConcurrencyStrategy.READ_ONLY)
// Immutable entities (countries, currencies)

@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
// Read-mostly data with versioning

@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
// Eventual consistency OK

@Cache(usage = CacheConcurrencyStrategy.TRANSACTIONAL)
// Full transactional guarantee (JTA required)`;

  selectCache(name: string) {
    this.activeCache.set(name);
    const info: Record<string, string> = {
      'First-Level (L1)': 'L1: Always ON. Scoped to session/EntityManager. Same entity = same object. Clears on close.',
      'Second-Level (L2)': 'L2: Shared across sessions. Opt-in per entity. Uses EhCache, Caffeine, or Redis.',
      'Query Cache': 'QC: Caches query results (IDs). Invalidated when cached entities change. Use carefully!',
    };
    this.status.set(info[name] ?? '');
  }
}
