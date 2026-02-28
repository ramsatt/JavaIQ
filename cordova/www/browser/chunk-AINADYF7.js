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
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-6OY2Y3BE.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/ms-tracing.component.ts
var MsTracingComponent = class _MsTracingComponent {
  codeIntro = `// Request flow with tracing:
// Client \u2192 API Gateway \u2192 Order Service \u2192 Payment Service
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
  codeZipkin = `// Zipkin \u2014 distributed tracing UI
// Docker:
// docker run -d -p 9411:9411 openzipkin/zipkin

// Open http://localhost:9411
// See: request timeline across all services
// Find: slow spans, error spans, dependencies

// Zipkin shows:
// \u250C\u2500 API Gateway (2ms) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
// \u2502 \u250C\u2500 Order Service (15ms) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502
// \u2502 \u2502 \u250C\u2500 Payment Service (8ms) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502  \u2502
// \u2502 \u2502 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502  \u2502
// \u2502 \u2502 \u250C\u2500 Inventory Service (5ms) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502  \u2502
// \u2502 \u2502 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502  \u2502
// \u2502 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502
// \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518`;
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
// 1. Traces  \u2192 Zipkin/Jaeger  (request flow)
// 2. Metrics \u2192 Prometheus     (counters, gauges)
// 3. Logs    \u2192 ELK/Loki      (structured logs)

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
  static \u0275fac = function MsTracingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MsTracingComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MsTracingComponent, selectors: [["app-topic-ms-tracing"]], decls: 33, vars: 7, consts: [["title", "Distributed Tracing", "subtitle", "Track requests across services. Micrometer Tracing, Zipkin, correlation IDs, and full observability.", "badge", "MICROSERVICES", "gradient", "linear-gradient(135deg, #4338ca, #818cf8)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-indigo", 3, "size"], [1, "prose"], [3, "code"], ["name", "code", "css", "icon-purple", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"]], template: function MsTracingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Tracing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7, "A request crosses multiple services. ");
      \u0275\u0275elementStart(8, "strong");
      \u0275\u0275text(9, "Distributed tracing");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " creates a trace ID that follows the request everywhere, making debugging possible.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "section", 1)(13, "h2", 2);
      \u0275\u0275element(14, "app-icon", 6);
      \u0275\u0275text(15, " Setup");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 7)(17, "div", 8)(18, "h3", 9);
      \u0275\u0275text(19, "Micrometer Tracing");
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 8)(22, "h3", 9);
      \u0275\u0275text(23, "Zipkin");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 8)(26, "h3", 9);
      \u0275\u0275text(27, "Logging");
      \u0275\u0275elementEnd();
      \u0275\u0275element(28, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 8)(30, "h3", 9);
      \u0275\u0275text(31, "Metrics");
      \u0275\u0275elementEnd();
      \u0275\u0275element(32, "app-code-block", 5);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(8);
      \u0275\u0275property("code", ctx.codeIntro);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(6);
      \u0275\u0275property("code", ctx.codeMicrometer);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeZipkin);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeLogging);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeMetrics);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ["\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.icon-purple[_ngcontent-%COMP%] {\n  color: #7c3aed;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=ms-tracing.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MsTracingComponent, [{
    type: Component,
    args: [{ selector: "app-topic-ms-tracing", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
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
  `, styles: ["/* angular:styles/component:css;f6592c87288417d3ae543d382647fc43f886f07450a9af352fc337c25b3984ff;D:/A21/JavaIQ/src/app/features/tutorials/topics/ms-tracing.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.icon-purple {\n  color: #7c3aed;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=ms-tracing.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MsTracingComponent, { className: "MsTracingComponent", filePath: "src/app/features/tutorials/topics/ms-tracing.component.ts", lineNumber: 33 });
})();
export {
  MsTracingComponent
};
//# sourceMappingURL=chunk-AINADYF7.js.map
