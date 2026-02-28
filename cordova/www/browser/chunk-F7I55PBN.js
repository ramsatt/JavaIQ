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
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-6OY2Y3BE.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/spring-caching.component.ts
var SpringCachingComponent = class _SpringCachingComponent {
  firstCall = signal("", ...ngDevMode ? [{ debugName: "firstCall" }] : []);
  secondCall = signal("", ...ngDevMode ? [{ debugName: "secondCall" }] : []);
  status = signal("Click Simulate Cache to see hit vs miss.", ...ngDevMode ? [{ debugName: "status" }] : []);
  firstText = signal("getUser(42)", ...ngDevMode ? [{ debugName: "firstText" }] : []);
  secondText = signal("getUser(42)", ...ngDevMode ? [{ debugName: "secondText" }] : []);
  anim = signal(false, ...ngDevMode ? [{ debugName: "anim" }] : []);
  codeIntro = `@Configuration @EnableCaching
public class CacheConfig {}

@Service
public class UserService {
    @Cacheable("users")
    public User findById(Long id) {
        // Only called on CACHE MISS
        return userRepository.findById(id).orElseThrow();
    }
}`;
  codeCacheable = `@Cacheable(value = "users", key = "#id")
public User findById(Long id) { return repo.findById(id).orElseThrow(); }

@Cacheable(value = "users", key = "#email", unless = "#result == null")
public User findByEmail(String email) { return repo.findByEmail(email); }

@Cacheable(value = "products", key = "#category + '-' + #page")
public Page<Product> list(String category, int page) { return repo.findByCategory(category, PageRequest.of(page, 20)); }`;
  codeEvict = `@CacheEvict(value = "users", key = "#id")
public void deleteUser(Long id) { repo.deleteById(id); }

@CacheEvict(value = "users", allEntries = true)
public void clearUserCache() { /* clears entire cache */ }

@Caching(evict = {
    @CacheEvict(value = "users", key = "#user.id"),
    @CacheEvict(value = "userList", allEntries = true)
})
public void updateUser(User user) { repo.save(user); }`;
  codePut = `// Always executes method AND updates cache
@CachePut(value = "users", key = "#user.id")
public User updateUser(User user) {
    return repo.save(user); // result is cached
}

// Combine: cache + evict list
@Caching(
    put = @CachePut(value = "users", key = "#result.id"),
    evict = @CacheEvict(value = "userList", allEntries = true))
public User save(User user) { return repo.save(user); }`;
  codeConfig = `# Caffeine (in-memory, high-performance)
spring.cache.type=caffeine
spring.cache.caffeine.spec=maximumSize=1000,expireAfterWrite=10m

# Redis (distributed)
spring.cache.type=redis
spring.cache.redis.time-to-live=600000

# Java Config
@Bean
public CacheManager cacheManager() {
    CaffeineCacheManager m = new CaffeineCacheManager("users");
    m.setCaffeine(Caffeine.newBuilder()
        .maximumSize(500)
        .expireAfterWrite(Duration.ofMinutes(10)));
    return m;
}`;
  sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }
  async runCache() {
    if (this.anim())
      return;
    this.anim.set(true);
    this.firstCall.set("miss");
    this.firstText.set("MISS \u2192 DB query (120ms)");
    this.status.set("Cache miss! Executing method, querying database...");
    await this.sleep(1200);
    this.secondCall.set("hit");
    this.secondText.set("HIT \u2192 Cache (0.2ms) \u26A1");
    this.status.set("Cache hit! Return cached value instantly \u2014 600x faster! \u2705");
    this.anim.set(false);
  }
  reset() {
    this.firstCall.set("");
    this.secondCall.set("");
    this.firstText.set("getUser(42)");
    this.secondText.set("getUser(42)");
    this.status.set("Click Simulate Cache to see hit vs miss.");
    this.anim.set(false);
  }
  static \u0275fac = function SpringCachingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SpringCachingComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SpringCachingComponent, selectors: [["app-topic-spring-caching"]], decls: 123, vars: 20, consts: [["title", "Caching", "subtitle", "Boost performance with declarative caching. Master Cacheable, CacheEvict, CachePut, and cache managers.", "badge", "SPRING FRAMEWORK", "gradient", "linear-gradient(135deg, #0369a1, #38bdf8)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-sky", 3, "size"], [1, "prose"], [3, "code"], [1, "viz-card"], [1, "viz-title"], ["name", "play", "css", "icon-sky", 3, "size"], [1, "cache-demo"], [1, "cache-row"], [1, "cache-label"], [1, "cache-step"], [1, "cache-text"], [1, "viz-status"], [1, "viz-controls"], [1, "btn", "btn-sky", 3, "click", "disabled"], ["name", "play", 3, "size"], [1, "btn", "btn-gray", 3, "click", "disabled"], ["name", "refresh-cw", 3, "size"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"], [1, "op-desc"], ["name", "briefcase", "css", "icon-sky", 3, "size"], [1, "use-cases"], [1, "use-case", "sky"], [1, "use-num", "sky-bg"], [1, "use-title"], [1, "use-desc"], [1, "use-case", "blue"], [1, "use-num", "blue-bg"], [1, "use-case", "purple"], [1, "use-num", "purple-bg"]], template: function SpringCachingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Spring Caching");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7, "Spring's caching abstraction uses ");
      \u0275\u0275elementStart(8, "strong");
      \u0275\u0275text(9, "AOP");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " to intercept method calls and return cached results, completely transparent to your code.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "ul")(12, "li")(13, "strong");
      \u0275\u0275text(14, "@Cacheable:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(15, " Cache the return value. Skip method if cached.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "li")(17, "strong");
      \u0275\u0275text(18, "@CacheEvict:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(19, " Remove entries from cache.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "li")(21, "strong");
      \u0275\u0275text(22, "@CachePut:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(23, " Always execute method and update cache.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "li")(25, "strong");
      \u0275\u0275text(26, "Cache Managers:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(27, " ConcurrentMap, Caffeine, Redis, EhCache.");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(28, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "section", 1)(30, "div", 6)(31, "h3", 7);
      \u0275\u0275element(32, "app-icon", 8);
      \u0275\u0275text(33, " Cache Hit vs Miss");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 9)(35, "div", 10)(36, "div", 11);
      \u0275\u0275text(37, "1st Call");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 12)(39, "span", 13);
      \u0275\u0275text(40);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(41, "div", 10)(42, "div", 11);
      \u0275\u0275text(43, "2nd Call");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 12)(45, "span", 13);
      \u0275\u0275text(46);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(47, "div", 14);
      \u0275\u0275text(48);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "div", 15)(50, "button", 16);
      \u0275\u0275listener("click", function SpringCachingComponent_Template_button_click_50_listener() {
        return ctx.runCache();
      });
      \u0275\u0275element(51, "app-icon", 17);
      \u0275\u0275text(52, " Simulate Cache");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "button", 18);
      \u0275\u0275listener("click", function SpringCachingComponent_Template_button_click_53_listener() {
        return ctx.reset();
      });
      \u0275\u0275element(54, "app-icon", 19);
      \u0275\u0275text(55, " Reset");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(56, "section", 1)(57, "h2", 2);
      \u0275\u0275element(58, "app-icon", 20);
      \u0275\u0275text(59, " Cache Patterns");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "div", 21)(61, "div", 22)(62, "h3", 23);
      \u0275\u0275text(63, "@Cacheable");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "p", 24);
      \u0275\u0275text(65, "Cache method results by key.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(66, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "div", 22)(68, "h3", 23);
      \u0275\u0275text(69, "@CacheEvict");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "p", 24);
      \u0275\u0275text(71, "Invalidate cache on mutations.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(72, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "div", 22)(74, "h3", 23);
      \u0275\u0275text(75, "@CachePut");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "p", 24);
      \u0275\u0275text(77, "Force update cache with new value.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(78, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "div", 22)(80, "h3", 23);
      \u0275\u0275text(81, "Cache Config");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "p", 24);
      \u0275\u0275text(83, "Configure cache managers and TTL.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(84, "app-code-block", 5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(85, "section", 1)(86, "h2", 2);
      \u0275\u0275element(87, "app-icon", 25);
      \u0275\u0275text(88, " Use Cases");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "div", 26)(90, "div", 27)(91, "div", 28);
      \u0275\u0275text(92, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "div")(94, "h4", 29);
      \u0275\u0275text(95, "API Rate Limiting");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "p", 30);
      \u0275\u0275text(97, "Cache expensive API responses. ");
      \u0275\u0275elementStart(98, "code");
      \u0275\u0275text(99, "@Cacheable");
      \u0275\u0275elementEnd();
      \u0275\u0275text(100, " + TTL = automatic expiry, zero boilerplate.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(101, "div", 31)(102, "div", 32);
      \u0275\u0275text(103, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "div")(105, "h4", 29);
      \u0275\u0275text(106, "Session Data");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "p", 30);
      \u0275\u0275text(108, "Redis-backed cache for user sessions across multiple instances. ");
      \u0275\u0275elementStart(109, "code");
      \u0275\u0275text(110, "RedisCacheManager");
      \u0275\u0275elementEnd();
      \u0275\u0275text(111, " = distributed cache.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(112, "div", 33)(113, "div", 34);
      \u0275\u0275text(114, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "div")(116, "h4", 29);
      \u0275\u0275text(117, "Database Query Caching");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "p", 30);
      \u0275\u0275text(119, "Cache frequently accessed entity lookups. ");
      \u0275\u0275elementStart(120, "code");
      \u0275\u0275text(121, "@CacheEvict");
      \u0275\u0275elementEnd();
      \u0275\u0275text(122, " on save/delete keeps data consistent.");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(25);
      \u0275\u0275property("code", ctx.codeIntro);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 22);
      \u0275\u0275advance(6);
      \u0275\u0275classMap(ctx.firstCall());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.firstText());
      \u0275\u0275advance(4);
      \u0275\u0275classMap(ctx.secondCall());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.secondText());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.status());
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.anim());
      \u0275\u0275advance();
      \u0275\u0275property("size", 16);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.anim());
      \u0275\u0275advance();
      \u0275\u0275property("size", 16);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(8);
      \u0275\u0275property("code", ctx.codeCacheable);
      \u0275\u0275advance(6);
      \u0275\u0275property("code", ctx.codeEvict);
      \u0275\u0275advance(6);
      \u0275\u0275property("code", ctx.codePut);
      \u0275\u0275advance(6);
      \u0275\u0275property("code", ctx.codeConfig);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ['\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-sky[_ngcontent-%COMP%] {\n  color: #0284c7;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 700;\n}\n.viz-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  padding: 28px 24px;\n}\n.viz-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.cache-demo[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.cache-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 8px;\n}\n.cache-label[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  font-weight: 700;\n  color: #94a3b8;\n  min-width: 60px;\n}\n.cache-step[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-radius: 10px;\n  border: 2px solid #e2e8f0;\n  flex: 1;\n  text-align: center;\n  transition: all 0.4s;\n}\n.cache-step.miss[_ngcontent-%COMP%] {\n  border-color: #f59e0b;\n  background: #fffbeb;\n}\n.cache-step.hit[_ngcontent-%COMP%] {\n  border-color: #16a34a;\n  background: #f0fdf4;\n}\n.cache-text[_ngcontent-%COMP%] {\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.72rem;\n  color: #0f172a;\n}\n.viz-status[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n  margin-bottom: 20px;\n}\n.viz-controls[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n}\n.btn-sky[_ngcontent-%COMP%] {\n  background: #0284c7;\n  color: #fff;\n}\n.btn-gray[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #334155;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #64748b;\n  margin: 0;\n}\n.use-cases[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.use-case[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 14px;\n  border: 1px solid;\n}\n.use-case.sky[_ngcontent-%COMP%] {\n  background: #f0f9ff;\n  border-color: #bae6fd;\n}\n.use-case.blue[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.use-case.purple[_ngcontent-%COMP%] {\n  background: #faf5ff;\n  border-color: #d8b4fe;\n}\n.use-num[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.sky-bg[_ngcontent-%COMP%] {\n  background: #0284c7;\n}\n.blue-bg[_ngcontent-%COMP%] {\n  background: #3b82f6;\n}\n.purple-bg[_ngcontent-%COMP%] {\n  background: #8b5cf6;\n}\n.use-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.use-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  line-height: 1.55;\n  margin: 0;\n  color: #334155;\n}\n.use-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.06);\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.72rem;\n}\n/*# sourceMappingURL=spring-caching.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpringCachingComponent, [{
    type: Component,
    args: [{ selector: "app-topic-spring-caching", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout title="Caching" subtitle="Boost performance with declarative caching. Master Cacheable, CacheEvict, CachePut, and cache managers." badge="SPRING FRAMEWORK" gradient="linear-gradient(135deg, #0369a1, #38bdf8)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-sky" /> Spring Caching</h2>
        <div class="prose">
          <p>Spring's caching abstraction uses <strong>AOP</strong> to intercept method calls and return cached results, completely transparent to your code.</p>
          <ul>
            <li><strong>&#64;Cacheable:</strong> Cache the return value. Skip method if cached.</li>
            <li><strong>&#64;CacheEvict:</strong> Remove entries from cache.</li>
            <li><strong>&#64;CachePut:</strong> Always execute method and update cache.</li>
            <li><strong>Cache Managers:</strong> ConcurrentMap, Caffeine, Redis, EhCache.</li>
          </ul>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title"><app-icon name="play" [size]="22" css="icon-sky" /> Cache Hit vs Miss</h3>
          <div class="cache-demo">
            <div class="cache-row">
              <div class="cache-label">1st Call</div>
              <div class="cache-step" [class]="firstCall()"><span class="cache-text">{{ firstText() }}</span></div>
            </div>
            <div class="cache-row">
              <div class="cache-label">2nd Call</div>
              <div class="cache-step" [class]="secondCall()"><span class="cache-text">{{ secondText() }}</span></div>
            </div>
          </div>
          <div class="viz-status">{{ status() }}</div>
          <div class="viz-controls">
            <button (click)="runCache()" [disabled]="anim()" class="btn btn-sky"><app-icon name="play" [size]="16" /> Simulate Cache</button>
            <button (click)="reset()" [disabled]="anim()" class="btn btn-gray"><app-icon name="refresh-cw" [size]="16" /> Reset</button>
          </div>
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Cache Patterns</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">&#64;Cacheable</h3><p class="op-desc">Cache method results by key.</p><app-code-block [code]="codeCacheable" /></div>
          <div class="op-card"><h3 class="op-title">&#64;CacheEvict</h3><p class="op-desc">Invalidate cache on mutations.</p><app-code-block [code]="codeEvict" /></div>
          <div class="op-card"><h3 class="op-title">&#64;CachePut</h3><p class="op-desc">Force update cache with new value.</p><app-code-block [code]="codePut" /></div>
          <div class="op-card"><h3 class="op-title">Cache Config</h3><p class="op-desc">Configure cache managers and TTL.</p><app-code-block [code]="codeConfig" /></div>
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="briefcase" [size]="28" css="icon-sky" /> Use Cases</h2>
        <div class="use-cases">
          <div class="use-case sky"><div class="use-num sky-bg">1</div><div><h4 class="use-title">API Rate Limiting</h4><p class="use-desc">Cache expensive API responses. <code>&#64;Cacheable</code> + TTL = automatic expiry, zero boilerplate.</p></div></div>
          <div class="use-case blue"><div class="use-num blue-bg">2</div><div><h4 class="use-title">Session Data</h4><p class="use-desc">Redis-backed cache for user sessions across multiple instances. <code>RedisCacheManager</code> = distributed cache.</p></div></div>
          <div class="use-case purple"><div class="use-num purple-bg">3</div><div><h4 class="use-title">Database Query Caching</h4><p class="use-desc">Cache frequently accessed entity lookups. <code>&#64;CacheEvict</code> on save/delete keeps data consistent.</p></div></div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ['/* angular:styles/component:css;edea562e46f8c4139b1681614c3bb126bff3c58691daf700eeddc334c62958d6;D:/A21/JavaIQ/src/app/features/tutorials/topics/spring-caching.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-sky {\n  color: #0284c7;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.prose ul {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose li {\n  margin-bottom: 8px;\n}\n.prose strong {\n  color: #0f172a;\n  font-weight: 700;\n}\n.viz-card {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  padding: 28px 24px;\n}\n.viz-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.cache-demo {\n  margin-bottom: 20px;\n}\n.cache-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 8px;\n}\n.cache-label {\n  font-size: 0.6rem;\n  font-weight: 700;\n  color: #94a3b8;\n  min-width: 60px;\n}\n.cache-step {\n  padding: 12px 16px;\n  border-radius: 10px;\n  border: 2px solid #e2e8f0;\n  flex: 1;\n  text-align: center;\n  transition: all 0.4s;\n}\n.cache-step.miss {\n  border-color: #f59e0b;\n  background: #fffbeb;\n}\n.cache-step.hit {\n  border-color: #16a34a;\n  background: #f0fdf4;\n}\n.cache-text {\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.72rem;\n  color: #0f172a;\n}\n.viz-status {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n  margin-bottom: 20px;\n}\n.viz-controls {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n}\n.btn:disabled {\n  opacity: 0.5;\n}\n.btn-sky {\n  background: #0284c7;\n  color: #fff;\n}\n.btn-gray {\n  background: #e2e8f0;\n  color: #334155;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc {\n  font-size: 0.78rem;\n  color: #64748b;\n  margin: 0;\n}\n.use-cases {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.use-case {\n  display: flex;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 14px;\n  border: 1px solid;\n}\n.use-case.sky {\n  background: #f0f9ff;\n  border-color: #bae6fd;\n}\n.use-case.blue {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.use-case.purple {\n  background: #faf5ff;\n  border-color: #d8b4fe;\n}\n.use-num {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.sky-bg {\n  background: #0284c7;\n}\n.blue-bg {\n  background: #3b82f6;\n}\n.purple-bg {\n  background: #8b5cf6;\n}\n.use-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.use-desc {\n  font-size: 0.78rem;\n  line-height: 1.55;\n  margin: 0;\n  color: #334155;\n}\n.use-desc code {\n  background: rgba(0, 0, 0, 0.06);\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.72rem;\n}\n/*# sourceMappingURL=spring-caching.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpringCachingComponent, { className: "SpringCachingComponent", filePath: "src/app/features/tutorials/topics/spring-caching.component.ts", lineNumber: 82 });
})();
export {
  SpringCachingComponent
};
//# sourceMappingURL=chunk-F7I55PBN.js.map
