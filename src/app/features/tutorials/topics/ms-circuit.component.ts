import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-ms-circuit',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="Circuit Breaker" subtitle="Prevent cascade failures. Resilience4j circuit breaker, fallbacks, retry, bulkhead, and rate limiter." badge="MICROSERVICES" gradient="linear-gradient(135deg, #991b1b, #f87171)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-red" /> Circuit Breaker</h2>
        <div class="prose"><p>When a service is down, the circuit breaker <strong>stops calling it</strong> and returns a fallback instead — preventing cascade failures.</p><app-code-block [code]="codeIntro" /></div>
      </section>
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title"><app-icon name="play" [size]="22" css="icon-red" /> Circuit States</h3>
          <div class="state-grid">
            @for (s of cbStates(); track s.name) {
              <div class="cb-state" [class.active]="activeCb() === s.name" (click)="selectCb(s.name)"><span class="cb-icon">{{ s.icon }}</span><span class="cb-name">{{ s.name }}</span></div>
            }
          </div>
          <div class="viz-status">{{ cbStatus() }}</div>
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Patterns</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Resilience4j Config</h3><app-code-block [code]="codeConfig" /></div>
          <div class="op-card"><h3 class="op-title">Retry</h3><app-code-block [code]="codeRetry" /></div>
          <div class="op-card"><h3 class="op-title">Bulkhead</h3><app-code-block [code]="codeBulkhead" /></div>
          <div class="op-card"><h3 class="op-title">Combined</h3><app-code-block [code]="codeCombined" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-red { color: #dc2626; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; }
    .viz-card { background: #fff; border-radius: 18px; border: 1px solid #e2e8f0; padding: 28px 24px; } .viz-title { display: flex; align-items: center; gap: 10px; font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0 0 24px; }
    .state-grid { display: flex; gap: 10px; justify-content: center; margin-bottom: 20px; }
    .cb-state { padding: 14px 20px; border-radius: 12px; border: 2px solid #e2e8f0; text-align: center; cursor: pointer; transition: all 0.3s; } .cb-state.active { border-color: #dc2626; background: #fef2f2; transform: scale(1.05); }
    .cb-icon { display: block; font-size: 1.4rem; margin-bottom: 4px; } .cb-name { font-size: 0.6rem; font-weight: 800; color: #0f172a; }
    .viz-status { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px 16px; text-align: center; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; color: #334155; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class MsCircuitComponent {
  activeCb = signal(''); cbStatus = signal('Click a state to learn about circuit breaker transitions.');
  cbStates = signal([
    { name: 'CLOSED', icon: '✅' }, { name: 'OPEN', icon: '🔴' }, { name: 'HALF_OPEN', icon: '🟡' },
  ]);
  codeIntro = `@Service
public class OrderService {
    @CircuitBreaker(name = "userService", fallbackMethod = "fallback")
    public User getUser(Long id) {
        return userClient.getUser(id); // may fail
    }

    private User fallback(Long id, Throwable t) {
        log.warn("User service down, using fallback: {}", t.getMessage());
        return new User(id, "Unknown", "N/A");
    }
}`;
  codeConfig = `# application.yml
resilience4j:
  circuitbreaker:
    instances:
      userService:
        slidingWindowSize: 10
        failureRateThreshold: 50      # open when 50% fail
        waitDurationInOpenState: 10s   # stay open 10s
        permittedNumberOfCallsInHalfOpenState: 3
        minimumNumberOfCalls: 5

  # Timeout
  timelimiter:
    instances:
      userService:
        timeoutDuration: 3s`;
  codeRetry = `// Retry failed calls
@Retry(name = "userService", fallbackMethod = "fallback")
public User getUser(Long id) {
    return userClient.getUser(id);
}

# Config
resilience4j:
  retry:
    instances:
      userService:
        maxAttempts: 3
        waitDuration: 1s
        retryExceptions:
          - java.io.IOException
          - java.net.SocketTimeoutException
        ignoreExceptions:
          - com.app.BusinessException`;
  codeBulkhead = `// Bulkhead — limit concurrent calls
@Bulkhead(name = "userService", type = Bulkhead.Type.SEMAPHORE)
public User getUser(Long id) {
    return userClient.getUser(id);
}

# Config
resilience4j:
  bulkhead:
    instances:
      userService:
        maxConcurrentCalls: 10      # max 10 parallel
        maxWaitDuration: 500ms

  # Thread pool bulkhead
  thread-pool-bulkhead:
    instances:
      userService:
        maxThreadPoolSize: 5
        coreThreadPoolSize: 3
        queueCapacity: 10`;
  codeCombined = `// Combine multiple resilience patterns
// Order: Retry → CircuitBreaker → Bulkhead → TimeLimiter

@CircuitBreaker(name = "payment")
@Retry(name = "payment")
@Bulkhead(name = "payment")
@TimeLimiter(name = "payment")
public CompletableFuture<Payment> process(PaymentReq req) {
    return CompletableFuture.supplyAsync(
        () -> paymentClient.charge(req));
}`;

  selectCb(name: string) {
    this.activeCb.set(name);
    const info: Record<string, string> = {
      CLOSED: 'CLOSED: Normal operation. Requests pass through. Failures are counted.',
      OPEN: 'OPEN: Too many failures! Requests immediately return fallback. Waiting to retry...',
      HALF_OPEN: 'HALF_OPEN: Testing recovery. A few requests pass — if OK → CLOSED, if fail → OPEN.',
    };
    this.cbStatus.set(info[name] ?? '');
  }
}
