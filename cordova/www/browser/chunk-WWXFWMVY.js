import {
  CodeBlockComponent,
  TutorialLayoutComponent
} from "./chunk-ACGKXV3L.js";
import {
  IconComponent
} from "./chunk-GCMLYE3M.js";
import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-6OY2Y3BE.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/hib-caching.component.ts
var _forTrack0 = ($index, $item) => $item.name;
function HibCachingComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275listener("click", function HibCachingComponent_For_16_Template_div_click_0_listener() {
      const c_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectCache(c_r2.name));
    });
    \u0275\u0275elementStart(1, "span", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.activeCache() === c_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.level);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.name);
  }
}
var HibCachingComponent = class _HibCachingComponent {
  activeCache = signal("", ...ngDevMode ? [{ debugName: "activeCache" }] : []);
  status = signal("Click a cache layer to learn about it.", ...ngDevMode ? [{ debugName: "status" }] : []);
  caches = signal([
    { name: "First-Level (L1)", level: "L1" },
    { name: "Second-Level (L2)", level: "L2" },
    { name: "Query Cache", level: "QC" }
  ], ...ngDevMode ? [{ debugName: "caches" }] : []);
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
  selectCache(name) {
    this.activeCache.set(name);
    const info = {
      "First-Level (L1)": "L1: Always ON. Scoped to session/EntityManager. Same entity = same object. Clears on close.",
      "Second-Level (L2)": "L2: Shared across sessions. Opt-in per entity. Uses EhCache, Caffeine, or Redis.",
      "Query Cache": "QC: Caches query results (IDs). Invalidated when cached entities change. Use carefully!"
    };
    this.status.set(info[name] ?? "");
  }
  static \u0275fac = function HibCachingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HibCachingComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HibCachingComponent, selectors: [["app-topic-hib-caching"]], decls: 40, vars: 9, consts: [["title", "Caching", "subtitle", "Boost performance with Hibernate's multi-level cache. First-level, second-level, and query cache.", "badge", "HIBERNATE & JPA", "gradient", "linear-gradient(135deg, #b45309, #fbbf24)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-amber", 3, "size"], [1, "prose"], [3, "code"], [1, "viz-card"], [1, "viz-title"], ["name", "play", "css", "icon-amber", 3, "size"], [1, "cache-grid"], [1, "cache-item", 3, "active"], [1, "viz-status"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"], [1, "cache-item", 3, "click"], [1, "cache-level"], [1, "cache-name"]], template: function HibCachingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Cache Levels");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7, "Hibernate has three cache levels. L1 is always on; L2 and query cache need explicit configuration.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "section", 1)(10, "div", 6)(11, "h3", 7);
      \u0275\u0275element(12, "app-icon", 8);
      \u0275\u0275text(13, " Cache Layers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 9);
      \u0275\u0275repeaterCreate(15, HibCachingComponent_For_16_Template, 5, 4, "div", 10, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 11);
      \u0275\u0275text(18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(19, "section", 1)(20, "h2", 2);
      \u0275\u0275element(21, "app-icon", 12);
      \u0275\u0275text(22, " Config");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 13)(24, "div", 14)(25, "h3", 15);
      \u0275\u0275text(26, "Second-Level Cache");
      \u0275\u0275elementEnd();
      \u0275\u0275element(27, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 14)(29, "h3", 15);
      \u0275\u0275text(30, "Query Cache");
      \u0275\u0275elementEnd();
      \u0275\u0275element(31, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 14)(33, "h3", 15);
      \u0275\u0275text(34, "Cache Regions");
      \u0275\u0275elementEnd();
      \u0275\u0275element(35, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 14)(37, "h3", 15);
      \u0275\u0275text(38, "Concurrency");
      \u0275\u0275elementEnd();
      \u0275\u0275element(39, "app-code-block", 5);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(5);
      \u0275\u0275property("code", ctx.codeIntro);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 22);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.caches());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.status());
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(6);
      \u0275\u0275property("code", ctx.codeL2);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeQuery);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeRegions);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeConcurrency);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ['\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-amber[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.viz-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  padding: 28px 24px;\n}\n.viz-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.cache-grid[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 20px;\n  justify-content: center;\n}\n.cache-item[_ngcontent-%COMP%] {\n  padding: 14px 18px;\n  border-radius: 12px;\n  border: 2px solid #e2e8f0;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.cache-item.active[_ngcontent-%COMP%] {\n  border-color: #d97706;\n  background: #fffbeb;\n  transform: scale(1.05);\n}\n.cache-level[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.1rem;\n  font-weight: 900;\n  color: #d97706;\n}\n.cache-name[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.viz-status[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=hib-caching.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HibCachingComponent, [{
    type: Component,
    args: [{ selector: "app-topic-hib-caching", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
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
  `, styles: ['/* angular:styles/component:css;4e0e181e25a050235c42329794993e8d10c34d0a03551d2974afb0cbfd36733d;D:/A21/JavaIQ/src/app/features/tutorials/topics/hib-caching.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-amber {\n  color: #d97706;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.viz-card {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  padding: 28px 24px;\n}\n.viz-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.cache-grid {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 20px;\n  justify-content: center;\n}\n.cache-item {\n  padding: 14px 18px;\n  border-radius: 12px;\n  border: 2px solid #e2e8f0;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.cache-item.active {\n  border-color: #d97706;\n  background: #fffbeb;\n  transform: scale(1.05);\n}\n.cache-level {\n  display: block;\n  font-size: 1.1rem;\n  font-weight: 900;\n  color: #d97706;\n}\n.cache-name {\n  font-size: 0.6rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.viz-status {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=hib-caching.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HibCachingComponent, { className: "HibCachingComponent", filePath: "src/app/features/tutorials/topics/hib-caching.component.ts", lineNumber: 55 });
})();
export {
  HibCachingComponent
};
//# sourceMappingURL=chunk-WWXFWMVY.js.map
