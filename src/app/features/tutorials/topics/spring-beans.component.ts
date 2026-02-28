import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-spring-beans',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="Bean Scopes & Lifecycle" subtitle="Control how Spring creates and manages your beans. Master singleton, prototype, request scopes, and lifecycle hooks." badge="SPRING FRAMEWORK" gradient="linear-gradient(135deg, #0f766e, #5eead4)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-teal" /> Bean Scopes</h2>
        <div class="prose">
          <p>A <strong>bean scope</strong> defines how many instances of a bean the container creates and how long they live.</p>
          <ul>
            <li><strong>singleton</strong> (default): One instance per ApplicationContext.</li>
            <li><strong>prototype:</strong> New instance every time it's requested.</li>
            <li><strong>request:</strong> One instance per HTTP request (web only).</li>
            <li><strong>session:</strong> One instance per HTTP session (web only).</li>
          </ul>
          <app-code-block [code]="codeScopes" />
        </div>
      </section>
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title"><app-icon name="play" [size]="22" css="icon-teal" /> Scope Comparison</h3>
          <div class="scope-grid">
            @for (scope of scopes(); track scope.name) {
              <div class="scope-card" [class.active]="activeScope() === scope.name" (click)="selectScope(scope.name)">
                <span class="scope-name">{{ scope.name }}</span>
                <span class="scope-icon">{{ scope.icon }}</span>
                <span class="scope-instances">{{ scope.instances }}</span>
                <span class="scope-lifetime">{{ scope.lifetime }}</span>
              </div>
            }
          </div>
          <div class="viz-status">{{ status() }}</div>
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Lifecycle & Hooks</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Lifecycle Callbacks</h3><p class="op-desc">PostConstruct, PreDestroy, and InitializingBean.</p><app-code-block [code]="codeLifecycle" /></div>
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Bean Post Processors</h3><p class="op-desc">Intercept bean creation for cross-cutting logic.</p><app-code-block [code]="codePostProcessor" /></div>
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Lazy Initialization</h3><p class="op-desc">Defer bean creation until first use.</p><app-code-block [code]="codeLazy" /></div>
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Prototype Pitfall</h3><p class="op-desc">Avoid injecting prototype into singleton.</p><app-code-block [code]="codePrototype" /></div>
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="briefcase" [size]="28" css="icon-teal" /> Real-Time Use Cases</h2>
        <div class="use-cases">
          <div class="use-case teal"><div class="use-num teal-bg">1</div><div><h4 class="use-title">Connection Pools (Singleton)</h4><p class="use-desc"><code>DataSource</code> is always singleton — one pool shared across the entire application. Creating multiple would waste resources.</p></div></div>
          <div class="use-case blue"><div class="use-num blue-bg">2</div><div><h4 class="use-title">Request Context (Request Scope)</h4><p class="use-desc"><code>RequestContext</code> bean holds user info, locale, and request metadata. Each HTTP request gets its own instance — thread-safe by design.</p></div></div>
          <div class="use-case purple"><div class="use-num purple-bg">3</div><div><h4 class="use-title">Prototype for Stateful Objects</h4><p class="use-desc">PDF generators, report builders — objects that accumulate state during processing. Prototype scope ensures each request gets a fresh instance.</p></div></div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-teal { color: #0d9488; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; } .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; } .prose li { margin-bottom: 8px; } .prose strong { color: #0f172a; font-weight: 700; } .prose code { background: #f1f5f9; padding: 2px 7px; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #0d9488; }
    .viz-card { background: #fff; border-radius: 18px; border: 1px solid #e2e8f0; box-shadow: 0 4px 16px rgba(0,0,0,0.05); padding: 28px 24px; } .viz-title { display: flex; align-items: center; gap: 10px; font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0 0 24px; }
    .scope-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-bottom: 20px; }
    .scope-card { padding: 16px; border-radius: 12px; border: 2px solid #e2e8f0; text-align: center; cursor: pointer; transition: all 0.3s; }
    .scope-card.active { border-color: #0d9488; background: #f0fdfa; transform: scale(1.03); }
    .scope-name { display: block; font-size: 0.78rem; font-weight: 800; color: #0f172a; margin-bottom: 2px; } .scope-icon { display: block; font-size: 1.2rem; margin: 4px 0; }
    .scope-instances { display: block; font-size: 0.6rem; font-weight: 600; color: #0d9488; } .scope-lifetime { display: block; font-size: 0.55rem; color: #64748b; margin-top: 2px; }
    .viz-status { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px 16px; text-align: center; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; color: #334155; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,0.04); } .op-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.06); } .op-title { display: flex; align-items: center; gap: 8px; font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; } .op-desc { font-size: 0.78rem; color: #64748b; line-height: 1.55; margin: 0; }
    .use-cases { display: flex; flex-direction: column; gap: 12px; } .use-case { display: flex; gap: 16px; padding: 20px; border-radius: 14px; border: 1px solid; } .use-case.teal { background: #f0fdfa; border-color: #99f6e4; } .use-case.blue { background: #eff6ff; border-color: #bfdbfe; } .use-case.purple { background: #faf5ff; border-color: #d8b4fe; }
    .use-num { width: 34px; height: 34px; min-width: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 0.78rem; font-weight: 800; } .teal-bg { background: #0d9488; } .blue-bg { background: #3b82f6; } .purple-bg { background: #8b5cf6; }
    .use-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 4px; } .use-desc { font-size: 0.78rem; line-height: 1.55; margin: 0; color: #334155; } .use-desc code { background: rgba(0,0,0,0.06); padding: 1px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; }
  `
})
export class SpringBeansComponent {
  activeScope = signal('');
  status = signal('Click a scope to see how it controls bean instances.');
  scopes = signal([
    { name: 'singleton', icon: '1️⃣', instances: '1 instance total', lifetime: 'Lives for entire app' },
    { name: 'prototype', icon: '♾️', instances: 'New instance each time', lifetime: 'Not managed after creation' },
    { name: 'request', icon: '🌐', instances: '1 per HTTP request', lifetime: 'Dies when request ends' },
    { name: 'session', icon: '👤', instances: '1 per user session', lifetime: 'Dies when session expires' },
  ]);

  codeScopes = `@Component
@Scope("singleton") // default — can be omitted
public class SingletonService { }

@Component
@Scope("prototype")
public class PrototypeService { }

// Web scopes (need web-aware context)
@Component
@Scope(value = "request",
       proxyMode = ScopedProxyMode.TARGET_CLASS)
public class RequestScopedBean { }`;
  codeLifecycle = `@Component
public class CacheManager {
    private Map<String, Object> cache;

    @PostConstruct  // called after DI
    public void init() {
        cache = new ConcurrentHashMap<>();
        loadInitialData();
    }

    @PreDestroy     // called before shutdown
    public void cleanup() {
        cache.clear();
        log.info("Cache cleaned up");
    }
}`;
  codePostProcessor = `@Component
public class LoggingBeanPostProcessor
    implements BeanPostProcessor {

    public Object postProcessBeforeInitialization(
            Object bean, String name) {
        log.debug("Creating: " + name);
        return bean;
    }

    public Object postProcessAfterInitialization(
            Object bean, String name) {
        // Wrap with proxy, add metrics, etc.
        return bean;
    }
}`;
  codeLazy = `@Component
@Lazy  // created on first use, not at startup
public class ExpensiveService {
    public ExpensiveService() {
        // Heavy initialization
        loadMlModel();
    }
}

// Lazy at injection point
@Service
public class App {
    public App(@Lazy ExpensiveService svc) {
        // svc is a proxy — not yet initialized
    }
}`;
  codePrototype = `// ⚠️ PITFALL: Prototype in Singleton
@Service // singleton!
public class OrderService {
    // This is created ONCE and reused!
    @Autowired
    private Cart cart; // prototype scope

    // Fix: Use ObjectProvider
    @Autowired
    private ObjectProvider<Cart> cartProvider;

    public void process() {
        Cart freshCart = cartProvider.getObject();
        // New Cart instance every time ✅
    }
}`;

  selectScope(name: string) {
    this.activeScope.set(name);
    const details: Record<string, string> = {
      'singleton': 'Singleton: ONE instance shared everywhere. Default scope. Used for stateless services. ✅',
      'prototype': 'Prototype: NEW instance every getBean() call. Spring does NOT manage destroy! ⚠️',
      'request': 'Request: ONE per HTTP request. Perfect for request-specific data (user context). 🌐',
      'session': 'Session: ONE per user session. Good for shopping carts, user preferences. 👤'
    };
    this.status.set(details[name] ?? '');
  }
}
