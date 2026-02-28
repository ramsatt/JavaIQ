import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-sb-actuator',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="Actuator & Monitoring" subtitle="Production-ready features. Health checks, metrics, info endpoints, and custom actuator endpoints." badge="SPRING BOOT" gradient="linear-gradient(135deg, #0e7490, #67e8f9)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-cyan" /> Actuator Endpoints</h2>
        <div class="prose">
          <p><strong>Actuator</strong> exposes operational endpoints for monitoring. Health checks for Kubernetes probes, metrics for dashboards, and info for build metadata.</p>
          <ul>
            <li><strong>/actuator/health:</strong> Application health status (UP/DOWN).</li>
            <li><strong>/actuator/metrics:</strong> JVM, HTTP, custom metrics.</li>
            <li><strong>/actuator/info:</strong> Build info, git commit, custom data.</li>
            <li><strong>/actuator/env:</strong> Environment properties (sanitized).</li>
          </ul>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title"><app-icon name="play" [size]="22" css="icon-cyan" /> Endpoint Explorer</h3>
          <div class="ep-grid">
            @for (ep of endpoints(); track ep.path) {
              <div class="ep-item" [class.active]="activeEp() === ep.path" (click)="selectEp(ep.path)">
                <span class="ep-icon">{{ ep.icon }}</span>
                <span class="ep-path">{{ ep.path }}</span>
              </div>
            }
          </div>
          <div class="viz-status">{{ status() }}</div>
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Patterns</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Custom Health</h3><app-code-block [code]="codeHealth" /></div>
          <div class="op-card"><h3 class="op-title">Custom Metrics</h3><app-code-block [code]="codeMetrics" /></div>
          <div class="op-card"><h3 class="op-title">Security Config</h3><app-code-block [code]="codeSecurity" /></div>
          <div class="op-card"><h3 class="op-title">Custom Endpoint</h3><app-code-block [code]="codeCustom" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-cyan { color: #0891b2; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; } .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; } .prose li { margin-bottom: 8px; } .prose strong { color: #0f172a; } .prose code { background: #f1f5f9; padding: 2px 7px; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #0891b2; }
    .viz-card { background: #fff; border-radius: 18px; border: 1px solid #e2e8f0; padding: 28px 24px; } .viz-title { display: flex; align-items: center; gap: 10px; font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0 0 24px; }
    .ep-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 6px; margin-bottom: 20px; }
    .ep-item { display: flex; align-items: center; gap: 8px; padding: 10px 14px; border-radius: 10px; border: 2px solid #e2e8f0; cursor: pointer; transition: all 0.3s; } .ep-item.active { border-color: #0891b2; background: #ecfeff; }
    .ep-icon { font-size: 1rem; } .ep-path { font-family: 'JetBrains Mono', monospace; font-size: 0.6rem; font-weight: 700; color: #0f172a; }
    .viz-status { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px 16px; text-align: center; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; color: #334155; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class SbActuatorComponent {
  activeEp = signal(''); status = signal('Click an endpoint to see its response.');
  endpoints = signal([
    { path: '/health', icon: '💚' }, { path: '/metrics', icon: '📊' },
    { path: '/info', icon: 'ℹ️' }, { path: '/env', icon: '⚙️' },
    { path: '/beans', icon: '🫘' }, { path: '/loggers', icon: '📝' },
  ]);
  codeIntro = `# application.yml
management:
  endpoints:
    web:
      exposure:
        include: health,metrics,info,env
  endpoint:
    health:
      show-details: always

# GET /actuator/health
# { "status": "UP",
#   "components": {
#     "db": { "status": "UP" },
#     "diskSpace": { "status": "UP" } } }`;
  codeHealth = `@Component
public class DatabaseHealthIndicator
    implements HealthIndicator {

    @Override
    public Health health() {
        if (isDatabaseReachable()) {
            return Health.up()
                .withDetail("latency", "5ms")
                .build();
        }
        return Health.down()
            .withDetail("error", "Connection refused")
            .build();
    }
}`;
  codeMetrics = `@Service
public class OrderService {
    private final Counter orderCounter;
    private final Timer orderTimer;

    public OrderService(MeterRegistry registry) {
        this.orderCounter = registry.counter(
            "orders.placed", "type", "online");
        this.orderTimer = registry.timer(
            "orders.processing.time");
    }

    public Order place(OrderRequest req) {
        return orderTimer.record(() -> {
            Order order = processOrder(req);
            orderCounter.increment();
            return order;
        });
    }
}`;
  codeSecurity = `// Secure actuator endpoints
http.authorizeHttpRequests(auth -> auth
    .requestMatchers("/actuator/health").permitAll()
    .requestMatchers("/actuator/**").hasRole("ADMIN")
)

# Or separate port for actuator
management.server.port=9090
# Actuator on private network port`;
  codeCustom = `@Component
@Endpoint(id = "features")
public class FeaturesEndpoint {

    @ReadOperation
    public Map<String, Boolean> features() {
        return Map.of(
            "darkMode", true,
            "newDashboard", false,
            "betaAPI", true
        );
    }

    @WriteOperation
    public void toggle(String feature, boolean enabled) {
        featureService.set(feature, enabled);
    }
}
// GET /actuator/features`;

  selectEp(path: string) {
    this.activeEp.set(path);
    const info: Record<string, string> = {
      '/health': 'Health: UP/DOWN status + component details. Kubernetes liveness/readiness probes!',
      '/metrics': 'Metrics: JVM memory, HTTP requests, GC, custom counters. Feed to Prometheus!',
      '/info': 'Info: Build version, git commit, description. Great for debugging!',
      '/env': 'Env: All property sources (sanitized passwords). Debug config issues!',
      '/beans': 'Beans: Every bean in the ApplicationContext. Debug wiring issues!',
      '/loggers': 'Loggers: View & change log levels at runtime. No restart needed!'
    };
    this.status.set(info[path] ?? '');
  }
}
