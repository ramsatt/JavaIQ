import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-spring-aop',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="AOP (Aspect-Oriented Programming)" subtitle="Separate cross-cutting concerns. Master aspects, pointcuts, advice, and weaving for logging, security, and transactions." badge="SPRING FRAMEWORK" gradient="linear-gradient(135deg, #7c2d12, #f97316)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-orange" /> What is AOP?</h2>
        <div class="prose">
          <p><strong>AOP</strong> lets you add behavior to existing code without modifying it. Cross-cutting concerns like logging, security, and transactions are separated into <strong>Aspects</strong>.</p>
          <ul>
            <li><strong>Aspect:</strong> A module of cross-cutting logic (e.g., logging aspect).</li>
            <li><strong>Advice:</strong> The action taken (before, after, around).</li>
            <li><strong>Pointcut:</strong> Expression defining WHERE advice applies.</li>
            <li><strong>Join Point:</strong> A method execution where advice CAN be applied.</li>
          </ul>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title"><app-icon name="play" [size]="22" css="icon-orange" /> AOP Weaving Visualizer</h3>
          <div class="weave-demo">
            <div class="weave-layer" [class.active]="activeLayer() === 'before'"><span class="layer-label">&#64;Before</span><span class="layer-code">log.info("Entering method...")</span></div>
            <div class="weave-target" [class.active]="activeLayer() === 'target'"><span class="layer-label">TARGET METHOD</span><span class="layer-code">orderService.placeOrder()</span></div>
            <div class="weave-layer" [class.active]="activeLayer() === 'after'"><span class="layer-label">&#64;AfterReturning</span><span class="layer-code">log.info("Completed in 42ms")</span></div>
          </div>
          <div class="viz-status">{{ status() }}</div>
          <div class="viz-controls">
            <button (click)="runWeave()" [disabled]="isAnimating()" class="btn btn-orange"><app-icon name="play" [size]="16" /> Show Weaving</button>
            <button (click)="resetDemo()" [disabled]="isAnimating()" class="btn btn-gray"><app-icon name="refresh-cw" [size]="16" /> Reset</button>
          </div>
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Advice Types</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> &#64;Before & &#64;After</h3><p class="op-desc">Run logic before/after method execution.</p><app-code-block [code]="codeBefore" /></div>
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> &#64;Around</h3><p class="op-desc">Full control — wrap the entire method execution.</p><app-code-block [code]="codeAround" /></div>
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Pointcut Expressions</h3><p class="op-desc">Target specific methods, packages, or annotations.</p><app-code-block [code]="codePointcut" /></div>
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Custom Annotations</h3><p class="op-desc">Create your own annotations for AOP targeting.</p><app-code-block [code]="codeCustom" /></div>
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="briefcase" [size]="28" css="icon-orange" /> Real-Time Use Cases</h2>
        <div class="use-cases">
          <div class="use-case orange"><div class="use-num orange-bg">1</div><div><h4 class="use-title">&#64;Transactional</h4><p class="use-desc">Spring's <code>&#64;Transactional</code> is pure AOP — an aspect wraps your method in a database transaction. Commit on success, rollback on exception.</p></div></div>
          <div class="use-case blue"><div class="use-num blue-bg">2</div><div><h4 class="use-title">Method-Level Security</h4><p class="use-desc"><code>&#64;PreAuthorize("hasRole('ADMIN')")</code> — Spring Security uses AOP to check permissions BEFORE your method runs.</p></div></div>
          <div class="use-case purple"><div class="use-num purple-bg">3</div><div><h4 class="use-title">Performance Monitoring</h4><p class="use-desc"><code>&#64;Around</code> advice records execution time for every service method. Feed metrics into Micrometer/Prometheus without touching business code.</p></div></div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-orange { color: #ea580c; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; } .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; } .prose li { margin-bottom: 8px; } .prose strong { color: #0f172a; font-weight: 700; } .prose code { background: #f1f5f9; padding: 2px 7px; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #ea580c; }
    .viz-card { background: #fff; border-radius: 18px; border: 1px solid #e2e8f0; box-shadow: 0 4px 16px rgba(0,0,0,0.05); padding: 28px 24px; } .viz-title { display: flex; align-items: center; gap: 10px; font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0 0 24px; }
    .weave-demo { display: flex; flex-direction: column; gap: 6px; margin-bottom: 20px; }
    .weave-layer, .weave-target { padding: 12px 16px; border-radius: 10px; border: 2px solid #e2e8f0; display: flex; align-items: center; gap: 12px; transition: all 0.4s; }
    .weave-layer.active { border-color: #f97316; background: #fff7ed; } .weave-target.active { border-color: #4f46e5; background: #eef2ff; }
    .layer-label { font-size: 0.55rem; font-weight: 700; letter-spacing: 0.1em; color: #94a3b8; min-width: 100px; } .layer-code { font-family: 'JetBrains Mono', monospace; font-size: 0.68rem; color: #0f172a; }
    .viz-status { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px 16px; text-align: center; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; color: #334155; margin-bottom: 20px; }
    .viz-controls { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; }
    .btn { display: inline-flex; align-items: center; gap: 7px; padding: 10px 18px; border-radius: 10px; font-size: 0.78rem; font-weight: 600; border: none; cursor: pointer; transition: all 0.2s; } .btn:disabled { opacity: 0.5; cursor: not-allowed; }
    .btn-orange { background: #ea580c; color: #fff; } .btn-orange:hover:not(:disabled) { background: #c2410c; }
    .btn-gray { background: #e2e8f0; color: #334155; } .btn-gray:hover:not(:disabled) { background: #cbd5e1; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,0.04); } .op-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.06); } .op-title { display: flex; align-items: center; gap: 8px; font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; } .op-desc { font-size: 0.78rem; color: #64748b; line-height: 1.55; margin: 0; }
    .use-cases { display: flex; flex-direction: column; gap: 12px; } .use-case { display: flex; gap: 16px; padding: 20px; border-radius: 14px; border: 1px solid; } .use-case.orange { background: #fff7ed; border-color: #fed7aa; } .use-case.blue { background: #eff6ff; border-color: #bfdbfe; } .use-case.purple { background: #faf5ff; border-color: #d8b4fe; }
    .use-num { width: 34px; height: 34px; min-width: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 0.78rem; font-weight: 800; } .orange-bg { background: #ea580c; } .blue-bg { background: #3b82f6; } .purple-bg { background: #8b5cf6; }
    .use-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 4px; } .use-desc { font-size: 0.78rem; line-height: 1.55; margin: 0; color: #334155; } .use-desc code { background: rgba(0,0,0,0.06); padding: 1px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; }
  `
})
export class SpringAopComponent {
  activeLayer = signal('');
  status = signal('AOP weaves advice around your methods at runtime via proxies.');
  isAnimating = signal(false);

  codeIntro = `@Aspect
@Component
public class LoggingAspect {

    @Before("execution(* com.app.service.*.*(..))")
    public void logBefore(JoinPoint jp) {
        log.info("→ " + jp.getSignature().getName());
    }

    @AfterReturning("execution(* com.app.service.*.*(..))")
    public void logAfter(JoinPoint jp) {
        log.info("← " + jp.getSignature().getName());
    }
}`;
  codeBefore = `@Aspect @Component
public class SecurityAspect {

    @Before("@annotation(secured)")
    public void checkAuth(Secured secured) {
        if (!currentUser().hasRole(secured.value()))
            throw new AccessDeniedException("Forbidden");
    }

    @AfterThrowing(
        pointcut = "execution(* com.app..*(..))",
        throwing = "ex")
    public void logError(Exception ex) {
        log.error("Exception: " + ex.getMessage());
    }
}`;
  codeAround = `@Around("execution(* com.app.service.*.*(..))")
public Object measureTime(ProceedingJoinPoint pjp)
        throws Throwable {
    long start = System.currentTimeMillis();
    try {
        Object result = pjp.proceed(); // call target
        return result;
    } finally {
        long elapsed = System.currentTimeMillis()-start;
        log.info(pjp.getSignature() + ": " +
                 elapsed + "ms");
    }
}`;
  codePointcut = `// All methods in service package
@Pointcut("execution(* com.app.service.*.*(..))")
public void serviceMethods() {}

// Methods annotated with @Cacheable
@Pointcut("@annotation(Cacheable)")
public void cacheableMethods() {}

// Public methods only
@Pointcut("execution(public * *(..))")
public void publicMethods() {}

// Combine pointcuts
@Before("serviceMethods() && publicMethods()")
public void audit(JoinPoint jp) { }`;
  codeCustom = `// 1. Define custom annotation
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface RateLimit {
    int maxRequests() default 100;
}

// 2. Create aspect targeting it
@Aspect @Component
public class RateLimitAspect {
    @Around("@annotation(limit)")
    public Object enforce(ProceedingJoinPoint pjp,
                          RateLimit limit) throws Throwable {
        if (exceeds(limit.maxRequests()))
            throw new TooManyRequestsException();
        return pjp.proceed();
    }
}

// 3. Use it!
@RateLimit(maxRequests = 50)
public Response getUsers() { }`;

  private sleep(ms: number): Promise<void> { return new Promise(r => setTimeout(r, ms)); }

  async runWeave() {
    if (this.isAnimating()) return;
    this.isAnimating.set(true);
    this.activeLayer.set('before');
    this.status.set('@Before advice runs FIRST — logging, auth checks, validation...');
    await this.sleep(1200);
    this.activeLayer.set('target');
    this.status.set('Target method executes — orderService.placeOrder()...');
    await this.sleep(1200);
    this.activeLayer.set('after');
    this.status.set('@AfterReturning — method succeeded! Log elapsed time. ✅');
    await this.sleep(1000);
    this.status.set('The proxy intercepts calls and weaves advice — your code is untouched! ✅');
    this.isAnimating.set(false);
  }

  resetDemo() {
    this.activeLayer.set('');
    this.status.set('AOP weaves advice around your methods at runtime via proxies.');
    this.isAnimating.set(false);
  }
}
