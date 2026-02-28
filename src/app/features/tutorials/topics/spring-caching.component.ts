import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-spring-caching',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
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
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-sky { color: #0284c7; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; } .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; } .prose li { margin-bottom: 8px; } .prose strong { color: #0f172a; font-weight: 700; }
    .viz-card { background: #fff; border-radius: 18px; border: 1px solid #e2e8f0; padding: 28px 24px; } .viz-title { display: flex; align-items: center; gap: 10px; font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0 0 24px; }
    .cache-demo { margin-bottom: 20px; } .cache-row { display: flex; align-items: center; gap: 12px; margin-bottom: 8px; }
    .cache-label { font-size: 0.6rem; font-weight: 700; color: #94a3b8; min-width: 60px; }
    .cache-step { padding: 12px 16px; border-radius: 10px; border: 2px solid #e2e8f0; flex: 1; text-align: center; transition: all 0.4s; }
    .cache-step.miss { border-color: #f59e0b; background: #fffbeb; } .cache-step.hit { border-color: #16a34a; background: #f0fdf4; }
    .cache-text { font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; color: #0f172a; }
    .viz-status { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px 16px; text-align: center; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; color: #334155; margin-bottom: 20px; }
    .viz-controls { display: flex; justify-content: center; gap: 10px; }
    .btn { display: inline-flex; align-items: center; gap: 7px; padding: 10px 18px; border-radius: 10px; font-size: 0.78rem; font-weight: 600; border: none; cursor: pointer; } .btn:disabled { opacity: 0.5; } .btn-sky { background: #0284c7; color: #fff; } .btn-gray { background: #e2e8f0; color: #334155; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; } .op-desc { font-size: 0.78rem; color: #64748b; margin: 0; }
    .use-cases { display: flex; flex-direction: column; gap: 12px; } .use-case { display: flex; gap: 16px; padding: 20px; border-radius: 14px; border: 1px solid; } .use-case.sky { background: #f0f9ff; border-color: #bae6fd; } .use-case.blue { background: #eff6ff; border-color: #bfdbfe; } .use-case.purple { background: #faf5ff; border-color: #d8b4fe; }
    .use-num { width: 34px; height: 34px; min-width: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 0.78rem; font-weight: 800; } .sky-bg { background: #0284c7; } .blue-bg { background: #3b82f6; } .purple-bg { background: #8b5cf6; }
    .use-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 4px; } .use-desc { font-size: 0.78rem; line-height: 1.55; margin: 0; color: #334155; } .use-desc code { background: rgba(0,0,0,0.06); padding: 1px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; }
  `
})
export class SpringCachingComponent {
  firstCall = signal(''); secondCall = signal(''); status = signal('Click Simulate Cache to see hit vs miss.');
  firstText = signal('getUser(42)'); secondText = signal('getUser(42)'); anim = signal(false);
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
  private sleep(ms: number): Promise<void> { return new Promise(r => setTimeout(r, ms)); }
  async runCache() {
    if (this.anim()) return; this.anim.set(true);
    this.firstCall.set('miss'); this.firstText.set('MISS → DB query (120ms)');
    this.status.set('Cache miss! Executing method, querying database...'); await this.sleep(1200);
    this.secondCall.set('hit'); this.secondText.set('HIT → Cache (0.2ms) ⚡');
    this.status.set('Cache hit! Return cached value instantly — 600x faster! ✅'); this.anim.set(false);
  }
  reset() { this.firstCall.set(''); this.secondCall.set(''); this.firstText.set('getUser(42)'); this.secondText.set('getUser(42)'); this.status.set('Click Simulate Cache to see hit vs miss.'); this.anim.set(false); }
}
