import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-ms-tracing',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="Distributed Tracing" subtitle="Track requests across services. Micrometer Tracing, Zipkin, correlation IDs, and full observability." badge="MICROSERVICES" gradient="linear-gradient(135deg, #4338ca, #818cf8)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-indigo" /> Tracing</h2>
        <div class="prose"><p>A request crosses multiple services. <strong>Distributed tracing</strong> creates a trace ID that follows the request everywhere, making debugging possible.</p><app-code-block [code]="codeIntro" /></div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-purple" /> Setup</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Micrometer Tracing</h3><app-code-block [code]="codeMicrometer" /></div>
          <div class="op-card"><h3 class="op-title">Zipkin</h3><app-code-block [code]="codeZipkin" /></div>
          <div class="op-card"><h3 class="op-title">Logging</h3><app-code-block [code]="codeLogging" /></div>
          <div class="op-card"><h3 class="op-title">Metrics</h3><app-code-block [code]="codeMetrics" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-indigo { color: #4f46e5; } .icon-purple { color: #7c3aed; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class MsTracingComponent {
  codeIntro = `// Request flow with tracing:
// Client → API Gateway → Order Service → Payment Service
//   traceId: abc123     traceId: abc123    traceId: abc123
//   spanId:  span1      spanId:  span2     spanId:  span3

// Same traceId across ALL services!
// Each service creates its own spanId`;
  codeMicrometer = `// Spring Boot 3+ (Micrometer Tracing)
<dependency>
    <groupId>io.micrometer</groupId>
    <artifactId>micrometer-tracing-bridge-brave</artifactId>
</dependency>
<dependency>
    <groupId>io.zipkin.reporter2</groupId>
    <artifactId>zipkin-reporter-brave</artifactId>
</dependency>

# application.yml
management:
  tracing:
    sampling:
      probability: 1.0  # 100% in dev, lower in prod
  zipkin:
    tracing:
      endpoint: http://localhost:9411/api/v2/spans`;
  codeZipkin = `// Zipkin — distributed tracing UI
// Docker:
// docker run -d -p 9411:9411 openzipkin/zipkin

// Open http://localhost:9411
// See: request timeline across all services
// Find: slow spans, error spans, dependencies

// Zipkin shows:
// ┌─ API Gateway (2ms) ──────────────────────┐
// │ ┌─ Order Service (15ms) ───────────────┐  │
// │ │ ┌─ Payment Service (8ms) ──────────┐ │  │
// │ │ └──────────────────────────────────┘ │  │
// │ │ ┌─ Inventory Service (5ms) ────────┐ │  │
// │ │ └──────────────────────────────────┘ │  │
// │ └──────────────────────────────────────┘  │
// └───────────────────────────────────────────┘`;
  codeLogging = `// TraceId auto-added to logs!
// Log output:
// 2024-01-15 10:30:00 [traceId=abc123, spanId=span1]
//   INFO OrderService - Creating order for user 42

// MDC integration (automatic with Micrometer)
logging:
  pattern:
    level: "%5p [traceId=%X{traceId}, spanId=%X{spanId}]"

// Now grep logs across ALL services by traceId:
// grep "abc123" /var/log/*/app.log`;
  codeMetrics = `// Full observability stack:
// 1. Traces  → Zipkin/Jaeger  (request flow)
// 2. Metrics → Prometheus     (counters, gauges)
// 3. Logs    → ELK/Loki      (structured logs)

management:
  endpoints:
    web:
      exposure:
        include: health,metrics,prometheus
  metrics:
    distribution:
      percentiles-histogram:
        http.server.requests: true
    tags:
      application: \${spring.application.name}

// Grafana dashboard:
// HTTP request rate, latency p99, error rate
// Per-service breakdown, dependency graph`;
}
