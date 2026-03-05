import {
  CodeBlockComponent,
  IconComponent,
  TutorialLayoutComponent
} from "./chunk-5ZPIB2CR.js";
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
} from "./chunk-L6VISU4K.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/ms-circuit.component.ts
var _forTrack0 = ($index, $item) => $item.name;
function MsCircuitComponent_For_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275listener("click", function MsCircuitComponent_For_19_Template_div_click_0_listener() {
      const s_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectCb(s_r2.name));
    });
    \u0275\u0275elementStart(1, "span", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.activeCb() === s_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r2.name);
  }
}
var MsCircuitComponent = class _MsCircuitComponent {
  activeCb = signal("", ...ngDevMode ? [{ debugName: "activeCb" }] : []);
  cbStatus = signal("Click a state to learn about circuit breaker transitions.", ...ngDevMode ? [{ debugName: "cbStatus" }] : []);
  cbStates = signal([
    { name: "CLOSED", icon: "\u2705" },
    { name: "OPEN", icon: "\u{1F534}" },
    { name: "HALF_OPEN", icon: "\u{1F7E1}" }
  ], ...ngDevMode ? [{ debugName: "cbStates" }] : []);
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
  codeBulkhead = `// Bulkhead \u2014 limit concurrent calls
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
// Order: Retry \u2192 CircuitBreaker \u2192 Bulkhead \u2192 TimeLimiter

@CircuitBreaker(name = "payment")
@Retry(name = "payment")
@Bulkhead(name = "payment")
@TimeLimiter(name = "payment")
public CompletableFuture<Payment> process(PaymentReq req) {
    return CompletableFuture.supplyAsync(
        () -> paymentClient.charge(req));
}`;
  selectCb(name) {
    this.activeCb.set(name);
    const info = {
      CLOSED: "CLOSED: Normal operation. Requests pass through. Failures are counted.",
      OPEN: "OPEN: Too many failures! Requests immediately return fallback. Waiting to retry...",
      HALF_OPEN: "HALF_OPEN: Testing recovery. A few requests pass \u2014 if OK \u2192 CLOSED, if fail \u2192 OPEN."
    };
    this.cbStatus.set(info[name] ?? "");
  }
  static \u0275fac = function MsCircuitComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MsCircuitComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MsCircuitComponent, selectors: [["app-topic-ms-circuit"]], decls: 43, vars: 9, consts: [["title", "Circuit Breaker", "subtitle", "Prevent cascade failures. Resilience4j circuit breaker, fallbacks, retry, bulkhead, and rate limiter.", "badge", "MICROSERVICES", "gradient", "linear-gradient(135deg, #991b1b, #f87171)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-red", 3, "size"], [1, "prose"], [3, "code"], [1, "viz-card"], [1, "viz-title"], ["name", "play", "css", "icon-red", 3, "size"], [1, "state-grid"], [1, "cb-state", 3, "active"], [1, "viz-status"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"], [1, "cb-state", 3, "click"], [1, "cb-icon"], [1, "cb-name"]], template: function MsCircuitComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Circuit Breaker");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7, "When a service is down, the circuit breaker ");
      \u0275\u0275elementStart(8, "strong");
      \u0275\u0275text(9, "stops calling it");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " and returns a fallback instead \u2014 preventing cascade failures.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "section", 1)(13, "div", 6)(14, "h3", 7);
      \u0275\u0275element(15, "app-icon", 8);
      \u0275\u0275text(16, " Circuit States");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 9);
      \u0275\u0275repeaterCreate(18, MsCircuitComponent_For_19_Template, 5, 4, "div", 10, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 11);
      \u0275\u0275text(21);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "section", 1)(23, "h2", 2);
      \u0275\u0275element(24, "app-icon", 12);
      \u0275\u0275text(25, " Patterns");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 13)(27, "div", 14)(28, "h3", 15);
      \u0275\u0275text(29, "Resilience4j Config");
      \u0275\u0275elementEnd();
      \u0275\u0275element(30, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 14)(32, "h3", 15);
      \u0275\u0275text(33, "Retry");
      \u0275\u0275elementEnd();
      \u0275\u0275element(34, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 14)(36, "h3", 15);
      \u0275\u0275text(37, "Bulkhead");
      \u0275\u0275elementEnd();
      \u0275\u0275element(38, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 14)(40, "h3", 15);
      \u0275\u0275text(41, "Combined");
      \u0275\u0275elementEnd();
      \u0275\u0275element(42, "app-code-block", 5);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(8);
      \u0275\u0275property("code", ctx.codeIntro);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 22);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.cbStates());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.cbStatus());
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(6);
      \u0275\u0275property("code", ctx.codeConfig);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeRetry);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeBulkhead);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeCombined);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ['\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-red[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.viz-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  padding: 28px 24px;\n}\n.viz-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.state-grid[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n.cb-state[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n  border-radius: 12px;\n  border: 2px solid #e2e8f0;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.cb-state.active[_ngcontent-%COMP%] {\n  border-color: #dc2626;\n  background: #fef2f2;\n  transform: scale(1.05);\n}\n.cb-icon[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.4rem;\n  margin-bottom: 4px;\n}\n.cb-name[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.viz-status[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=ms-circuit.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MsCircuitComponent, [{
    type: Component,
    args: [{ selector: "app-topic-ms-circuit", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout title="Circuit Breaker" subtitle="Prevent cascade failures. Resilience4j circuit breaker, fallbacks, retry, bulkhead, and rate limiter." badge="MICROSERVICES" gradient="linear-gradient(135deg, #991b1b, #f87171)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-red" /> Circuit Breaker</h2>
        <div class="prose"><p>When a service is down, the circuit breaker <strong>stops calling it</strong> and returns a fallback instead \u2014 preventing cascade failures.</p><app-code-block [code]="codeIntro" /></div>
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
  `, styles: ['/* angular:styles/component:css;975e23c930f569e3584581ee77f34d60009390aff472e7d0ef7855299fb25e04;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/features/tutorials/topics/ms-circuit.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-red {\n  color: #dc2626;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.viz-card {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  padding: 28px 24px;\n}\n.viz-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.state-grid {\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n.cb-state {\n  padding: 14px 20px;\n  border-radius: 12px;\n  border: 2px solid #e2e8f0;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.cb-state.active {\n  border-color: #dc2626;\n  background: #fef2f2;\n  transform: scale(1.05);\n}\n.cb-icon {\n  display: block;\n  font-size: 1.4rem;\n  margin-bottom: 4px;\n}\n.cb-name {\n  font-size: 0.6rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.viz-status {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=ms-circuit.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MsCircuitComponent, { className: "MsCircuitComponent", filePath: "src/app/features/tutorials/topics/ms-circuit.component.ts", lineNumber: 49 });
})();
export {
  MsCircuitComponent
};
//# sourceMappingURL=chunk-JIQJTYUT.js.map
