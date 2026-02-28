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

// src/app/features/tutorials/topics/sb-actuator.component.ts
var _forTrack0 = ($index, $item) => $item.path;
function SbActuatorComponent_For_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275listener("click", function SbActuatorComponent_For_35_Template_div_click_0_listener() {
      const ep_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectEp(ep_r2.path));
    });
    \u0275\u0275elementStart(1, "span", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ep_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.activeEp() === ep_r2.path);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ep_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ep_r2.path);
  }
}
var SbActuatorComponent = class _SbActuatorComponent {
  activeEp = signal("", ...ngDevMode ? [{ debugName: "activeEp" }] : []);
  status = signal("Click an endpoint to see its response.", ...ngDevMode ? [{ debugName: "status" }] : []);
  endpoints = signal([
    { path: "/health", icon: "\u{1F49A}" },
    { path: "/metrics", icon: "\u{1F4CA}" },
    { path: "/info", icon: "\u2139\uFE0F" },
    { path: "/env", icon: "\u2699\uFE0F" },
    { path: "/beans", icon: "\u{1FAD8}" },
    { path: "/loggers", icon: "\u{1F4DD}" }
  ], ...ngDevMode ? [{ debugName: "endpoints" }] : []);
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
  selectEp(path) {
    this.activeEp.set(path);
    const info = {
      "/health": "Health: UP/DOWN status + component details. Kubernetes liveness/readiness probes!",
      "/metrics": "Metrics: JVM memory, HTTP requests, GC, custom counters. Feed to Prometheus!",
      "/info": "Info: Build version, git commit, description. Great for debugging!",
      "/env": "Env: All property sources (sanitized passwords). Debug config issues!",
      "/beans": "Beans: Every bean in the ApplicationContext. Debug wiring issues!",
      "/loggers": "Loggers: View & change log levels at runtime. No restart needed!"
    };
    this.status.set(info[path] ?? "");
  }
  static \u0275fac = function SbActuatorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SbActuatorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SbActuatorComponent, selectors: [["app-topic-sb-actuator"]], decls: 59, vars: 9, consts: [["title", "Actuator & Monitoring", "subtitle", "Production-ready features. Health checks, metrics, info endpoints, and custom actuator endpoints.", "badge", "SPRING BOOT", "gradient", "linear-gradient(135deg, #0e7490, #67e8f9)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-cyan", 3, "size"], [1, "prose"], [3, "code"], [1, "viz-card"], [1, "viz-title"], ["name", "play", "css", "icon-cyan", 3, "size"], [1, "ep-grid"], [1, "ep-item", 3, "active"], [1, "viz-status"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"], [1, "ep-item", 3, "click"], [1, "ep-icon"], [1, "ep-path"]], template: function SbActuatorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Actuator Endpoints");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p")(7, "strong");
      \u0275\u0275text(8, "Actuator");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, " exposes operational endpoints for monitoring. Health checks for Kubernetes probes, metrics for dashboards, and info for build metadata.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "ul")(11, "li")(12, "strong");
      \u0275\u0275text(13, "/actuator/health:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(14, " Application health status (UP/DOWN).");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "li")(16, "strong");
      \u0275\u0275text(17, "/actuator/metrics:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(18, " JVM, HTTP, custom metrics.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "li")(20, "strong");
      \u0275\u0275text(21, "/actuator/info:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(22, " Build info, git commit, custom data.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "li")(24, "strong");
      \u0275\u0275text(25, "/actuator/env:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(26, " Environment properties (sanitized).");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(27, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "section", 1)(29, "div", 6)(30, "h3", 7);
      \u0275\u0275element(31, "app-icon", 8);
      \u0275\u0275text(32, " Endpoint Explorer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 9);
      \u0275\u0275repeaterCreate(34, SbActuatorComponent_For_35_Template, 5, 4, "div", 10, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 11);
      \u0275\u0275text(37);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(38, "section", 1)(39, "h2", 2);
      \u0275\u0275element(40, "app-icon", 12);
      \u0275\u0275text(41, " Patterns");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 13)(43, "div", 14)(44, "h3", 15);
      \u0275\u0275text(45, "Custom Health");
      \u0275\u0275elementEnd();
      \u0275\u0275element(46, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 14)(48, "h3", 15);
      \u0275\u0275text(49, "Custom Metrics");
      \u0275\u0275elementEnd();
      \u0275\u0275element(50, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div", 14)(52, "h3", 15);
      \u0275\u0275text(53, "Security Config");
      \u0275\u0275elementEnd();
      \u0275\u0275element(54, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 14)(56, "h3", 15);
      \u0275\u0275text(57, "Custom Endpoint");
      \u0275\u0275elementEnd();
      \u0275\u0275element(58, "app-code-block", 5);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(24);
      \u0275\u0275property("code", ctx.codeIntro);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 22);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.endpoints());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.status());
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(6);
      \u0275\u0275property("code", ctx.codeHealth);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeMetrics);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeSecurity);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeCustom);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ['\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-cyan[_ngcontent-%COMP%] {\n  color: #0891b2;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n}\n.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #0891b2;\n}\n.viz-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  padding: 28px 24px;\n}\n.viz-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.ep-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 6px;\n  margin-bottom: 20px;\n}\n.ep-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-radius: 10px;\n  border: 2px solid #e2e8f0;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.ep-item.active[_ngcontent-%COMP%] {\n  border-color: #0891b2;\n  background: #ecfeff;\n}\n.ep-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.ep-path[_ngcontent-%COMP%] {\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.6rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.viz-status[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=sb-actuator.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SbActuatorComponent, [{
    type: Component,
    args: [{ selector: "app-topic-sb-actuator", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
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
  `, styles: ['/* angular:styles/component:css;8d4256dbe51b9e943551d48c40a41a2fc0086a3eea0a8e9a245e3534a993fc7e;D:/A21/JavaIQ/src/app/features/tutorials/topics/sb-actuator.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-cyan {\n  color: #0891b2;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.prose ul {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose li {\n  margin-bottom: 8px;\n}\n.prose strong {\n  color: #0f172a;\n}\n.prose code {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #0891b2;\n}\n.viz-card {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  padding: 28px 24px;\n}\n.viz-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.ep-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 6px;\n  margin-bottom: 20px;\n}\n.ep-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-radius: 10px;\n  border: 2px solid #e2e8f0;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.ep-item.active {\n  border-color: #0891b2;\n  background: #ecfeff;\n}\n.ep-icon {\n  font-size: 1rem;\n}\n.ep-path {\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.6rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.viz-status {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=sb-actuator.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SbActuatorComponent, { className: "SbActuatorComponent", filePath: "src/app/features/tutorials/topics/sb-actuator.component.ts", lineNumber: 61 });
})();
export {
  SbActuatorComponent
};
//# sourceMappingURL=chunk-U46X3WFR.js.map
