import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-spring-ioc',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="IoC Container" subtitle="Inversion of Control — the heart of Spring. Learn how the container manages object creation, configuration, and lifecycle." badge="SPRING FRAMEWORK" gradient="linear-gradient(135deg, #166534, #4ade80)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-green" /> What is IoC?</h2>
        <div class="prose">
          <p><strong>Inversion of Control (IoC)</strong> means the framework controls object creation and wiring instead of your code doing it manually. The Spring <strong>IoC Container</strong> (ApplicationContext) is responsible for instantiating, configuring, and assembling beans.</p>
          <ul>
            <li><strong>BeanFactory:</strong> Basic container with lazy initialization.</li>
            <li><strong>ApplicationContext:</strong> Advanced container with event publishing, i18n, and eager initialization.</li>
            <li><strong>Beans:</strong> Objects managed by the Spring container.</li>
          </ul>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title"><app-icon name="play" [size]="22" css="icon-green" /> IoC Container Flow</h3>
          <div class="flow-demo">
            @for (step of steps(); track step.id) {
              <div class="flow-step" [class]="step.state">
                <span class="step-num">{{ step.id }}</span>
                <span class="step-text">{{ step.text }}</span>
              </div>
            }
          </div>
          <div class="viz-status">{{ status() }}</div>
          <div class="viz-controls">
            <button (click)="runFlow()" [disabled]="isAnimating()" class="btn btn-green"><app-icon name="play" [size]="16" /> Show Container Lifecycle</button>
            <button (click)="resetDemo()" [disabled]="isAnimating()" class="btn btn-gray"><app-icon name="refresh-cw" [size]="16" /> Reset</button>
          </div>
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Configuration Styles</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Annotation-Based</h3><p class="op-desc">Use &#64;Component, &#64;Service, &#64;Repository to auto-detect beans.</p><app-code-block [code]="codeAnnotation" /></div>
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Java Config</h3><p class="op-desc">Use &#64;Configuration + &#64;Bean for explicit bean definitions.</p><app-code-block [code]="codeJavaConfig" /></div>
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Component Scanning</h3><p class="op-desc">Auto-discover beans in specified packages.</p><app-code-block [code]="codeScan" /></div>
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> ApplicationContext</h3><p class="op-desc">Access beans from the container programmatically.</p><app-code-block [code]="codeContext" /></div>
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="briefcase" [size]="28" css="icon-green" /> Real-Time Use Cases</h2>
        <div class="use-cases">
          <div class="use-case green"><div class="use-num green-bg">1</div><div><h4 class="use-title">Microservice Startup</h4><p class="use-desc">Spring Boot's <code>SpringApplication.run()</code> creates the ApplicationContext, scans for components, and wires all beans — your entire service is IoC-managed.</p></div></div>
          <div class="use-case blue"><div class="use-num blue-bg">2</div><div><h4 class="use-title">Plugin Architecture</h4><p class="use-desc">Register multiple <code>Strategy</code> implementations as beans. The container collects them all — <code>List&lt;Strategy&gt;</code> injection gives you all plugins automatically.</p></div></div>
          <div class="use-case purple"><div class="use-num purple-bg">3</div><div><h4 class="use-title">Environment-Specific Config</h4><p class="use-desc">Use <code>&#64;Profile("dev")</code> to register dev-only beans. The container activates the right profile — no code changes between environments.</p></div></div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; }
    .icon-green { color: #16a34a; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; } .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; } .prose li { margin-bottom: 8px; } .prose strong { color: #0f172a; font-weight: 700; } .prose code { background: #f1f5f9; padding: 2px 7px; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #16a34a; }
    .viz-card { background: #fff; border-radius: 18px; border: 1px solid #e2e8f0; box-shadow: 0 4px 16px rgba(0,0,0,0.05); padding: 28px 24px; } .viz-title { display: flex; align-items: center; gap: 10px; font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0 0 24px; }
    .flow-demo { display: flex; flex-direction: column; gap: 6px; margin-bottom: 20px; }
    .flow-step { display: flex; align-items: center; gap: 10px; padding: 10px 14px; border-radius: 10px; border: 2px solid #e2e8f0; background: #fff; transition: all 0.4s; }
    .flow-step.active { border-color: #16a34a; background: #f0fdf4; transform: scale(1.02); } .flow-step.done { border-color: #16a34a; background: #dcfce7; }
    .step-num { width: 24px; height: 24px; min-width: 24px; border-radius: 50%; background: #e2e8f0; display: flex; align-items: center; justify-content: center; font-size: 0.6rem; font-weight: 800; color: #475569; }
    .step-text { font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; color: #0f172a; }
    .viz-status { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px 16px; text-align: center; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; color: #334155; margin-bottom: 20px; }
    .viz-controls { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; }
    .btn { display: inline-flex; align-items: center; gap: 7px; padding: 10px 18px; border-radius: 10px; font-size: 0.78rem; font-weight: 600; border: none; cursor: pointer; transition: all 0.2s; } .btn:disabled { opacity: 0.5; cursor: not-allowed; }
    .btn-green { background: #16a34a; color: #fff; } .btn-green:hover:not(:disabled) { background: #15803d; }
    .btn-gray { background: #e2e8f0; color: #334155; } .btn-gray:hover:not(:disabled) { background: #cbd5e1; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,0.04); } .op-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.06); } .op-title { display: flex; align-items: center; gap: 8px; font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; } .op-desc { font-size: 0.78rem; color: #64748b; line-height: 1.55; margin: 0; }
    .use-cases { display: flex; flex-direction: column; gap: 12px; } .use-case { display: flex; gap: 16px; padding: 20px; border-radius: 14px; border: 1px solid; } .use-case.green { background: #f0fdf4; border-color: #86efac; } .use-case.blue { background: #eff6ff; border-color: #bfdbfe; } .use-case.purple { background: #faf5ff; border-color: #d8b4fe; }
    .use-num { width: 34px; height: 34px; min-width: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 0.78rem; font-weight: 800; } .green-bg { background: #16a34a; } .blue-bg { background: #3b82f6; } .purple-bg { background: #8b5cf6; }
    .use-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 4px; } .use-desc { font-size: 0.78rem; line-height: 1.55; margin: 0; color: #334155; } .use-desc code { background: rgba(0,0,0,0.06); padding: 1px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; }
  `
})
export class SpringIocComponent {
  steps = signal([
    { id: 1, text: 'Read @Configuration / @ComponentScan', state: '' },
    { id: 2, text: 'Scan packages for @Component beans', state: '' },
    { id: 3, text: 'Create bean definitions (metadata)', state: '' },
    { id: 4, text: 'Resolve dependencies (DI wiring)', state: '' },
    { id: 5, text: 'Instantiate beans in dependency order', state: '' },
    { id: 6, text: 'Call @PostConstruct / init methods', state: '' },
    { id: 7, text: 'Application ready! Beans available.', state: '' },
  ]);
  status = signal('The IoC container manages the entire bean lifecycle.');
  isAnimating = signal(false);

  codeIntro = `// Traditional approach (YOU manage objects)
UserService svc = new UserServiceImpl(
    new UserRepository(new DataSource()));

// Spring IoC (CONTAINER manages objects)
@Service
public class UserService {
    private final UserRepository repo;

    public UserService(UserRepository repo) {
        this.repo = repo; // injected by Spring!
    }
}`;
  codeAnnotation = `@Component     // generic bean
@Service       // business logic
@Repository    // data access (+ exception translation)
@Controller    // web controller

@Service
public class OrderService {
    // Spring creates and manages this bean
}`;
  codeJavaConfig = `@Configuration
public class AppConfig {

    @Bean
    public DataSource dataSource() {
        return new HikariDataSource(config);
    }

    @Bean
    public UserRepository userRepo(DataSource ds) {
        return new JdbcUserRepository(ds);
    }
}`;
  codeScan = `@Configuration
@ComponentScan(basePackages = "com.app")
public class AppConfig { }

// OR with Spring Boot:
@SpringBootApplication // includes @ComponentScan
public class App {
    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }
}`;
  codeContext = `// Get the container
ApplicationContext ctx =
    new AnnotationConfigApplicationContext(
        AppConfig.class);

// Retrieve beans
UserService svc = ctx.getBean(UserService.class);

// Or by name
Object bean = ctx.getBean("userService");`;

  private sleep(ms: number): Promise<void> { return new Promise(r => setTimeout(r, ms)); }

  async runFlow() {
    if (this.isAnimating()) return;
    this.isAnimating.set(true);
    const labels = [
      'Reading configuration metadata...',
      'Scanning for annotated classes...',
      'Building bean definitions...',
      'Resolving dependency graph...',
      'Creating bean instances...',
      'Running initialization callbacks...',
      'All beans ready! Container started ✅'
    ];
    for (let i = 0; i < 7; i++) {
      this.steps.update(s => s.map((st, j) => j === i ? { ...st, state: 'active' } : j < i ? { ...st, state: 'done' } : st));
      this.status.set(labels[i]);
      await this.sleep(800);
    }
    this.steps.update(s => s.map(st => ({ ...st, state: 'done' })));
    this.isAnimating.set(false);
  }

  resetDemo() {
    this.steps.set([ { id: 1, text: 'Read @Configuration / @ComponentScan', state: '' }, { id: 2, text: 'Scan packages for @Component beans', state: '' }, { id: 3, text: 'Create bean definitions (metadata)', state: '' }, { id: 4, text: 'Resolve dependencies (DI wiring)', state: '' }, { id: 5, text: 'Instantiate beans in dependency order', state: '' }, { id: 6, text: 'Call @PostConstruct / init methods', state: '' }, { id: 7, text: 'Application ready! Beans available.', state: '' } ]);
    this.status.set('The IoC container manages the entire bean lifecycle.');
    this.isAnimating.set(false);
  }
}
