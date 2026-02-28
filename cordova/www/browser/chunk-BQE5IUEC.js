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
  ɵɵclassMap,
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

// src/app/features/tutorials/topics/sb-logging.component.ts
var _forTrack0 = ($index, $item) => $item.name;
function SbLoggingComponent_For_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275listener("click", function SbLoggingComponent_For_41_Template_div_click_0_listener() {
      const lvl_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectLevel(lvl_r2.name));
    });
    \u0275\u0275elementStart(1, "span", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const lvl_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(lvl_r2.color);
    \u0275\u0275classProp("active", ctx_r2.activeLevel() === lvl_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lvl_r2.name);
  }
}
var SbLoggingComponent = class _SbLoggingComponent {
  activeLevel = signal("", ...ngDevMode ? [{ debugName: "activeLevel" }] : []);
  status = signal("Click a log level to see what gets logged.", ...ngDevMode ? [{ debugName: "status" }] : []);
  levels = signal([
    { name: "TRACE", color: "trace" },
    { name: "DEBUG", color: "debug" },
    { name: "INFO", color: "info" },
    { name: "WARN", color: "warn" },
    { name: "ERROR", color: "error" }
  ], ...ngDevMode ? [{ debugName: "levels" }] : []);
  codeIntro = `// Using SLF4J directly
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class OrderService {
    private static final Logger log =
        LoggerFactory.getLogger(OrderService.class);

    public Order place(OrderRequest req) {
        log.info("Placing order for user: {}", req.userId());
        log.debug("Order details: {}", req);
        try { return processOrder(req); }
        catch (Exception e) {
            log.error("Order failed: {}", e.getMessage(), e);
            throw e;
        }
    }
}`;
  codeLevels = `# application.yml
logging:
  level:
    root: INFO
    com.myapp: DEBUG
    com.myapp.repository: TRACE
    org.springframework.web: WARN
    org.hibernate.SQL: DEBUG

# Log to file
logging:
  file:
    name: logs/app.log
  logback:
    rollingpolicy:
      max-file-size: 10MB
      max-history: 30`;
  codeLogback = `<!-- logback-spring.xml -->
<configuration>
  <springProfile name="dev">
    <appender name="CONSOLE" class="..ConsoleAppender">
      <encoder>
        <pattern>%d{HH:mm:ss} [%thread] %-5level %logger{36} - %msg%n</pattern>
      </encoder>
    </appender>
    <root level="DEBUG">
      <appender-ref ref="CONSOLE"/>
    </root>
  </springProfile>

  <springProfile name="prod">
    <appender name="FILE" class="..RollingFileAppender">
      <file>logs/app.log</file>
      <rollingPolicy class="..TimeBasedRollingPolicy">
        <fileNamePattern>logs/app-%d.log</fileNamePattern>
      </rollingPolicy>
    </appender>
    <root level="WARN">
      <appender-ref ref="FILE"/>
    </root>
  </springProfile>
</configuration>`;
  codeJson = `<!-- JSON logging for ELK/Datadog -->
<dependency>
    <groupId>net.logstash.logback</groupId>
    <artifactId>logstash-logback-encoder</artifactId>
</dependency>

<!-- logback-spring.xml -->
<appender name="JSON" class="..ConsoleAppender">
  <encoder class="net.logstash.logback.encoder.LogstashEncoder"/>
</appender>

<!-- Output:
{"timestamp":"2024-01-15T10:30:00",
 "level":"INFO",
 "logger":"OrderService",
 "message":"Order placed",
 "orderId":42,
 "userId":"user123"} -->`;
  codeMdc = `// MDC = Mapped Diagnostic Context
// Add request-scoped context to ALL log lines

@Component
public class RequestIdFilter extends OncePerRequestFilter {
    protected void doFilterInternal(...) {
        String requestId = UUID.randomUUID().toString();
        MDC.put("requestId", requestId);
        try { chain.doFilter(req, res); }
        finally { MDC.clear(); }
    }
}

// Pattern: %X{requestId} in logback
// Every log line now has the request ID!`;
  selectLevel(name) {
    this.activeLevel.set(name);
    const info = {
      "TRACE": "TRACE: Most verbose. Method entry/exit, variable values. Development only.",
      "DEBUG": "DEBUG: Detailed diagnostic info. SQL queries, request/response bodies.",
      "INFO": "INFO: Normal operations. App started, request processed, order placed.",
      "WARN": "WARN: Potential problems. Deprecated API used, retry attempt, slow query.",
      "ERROR": "ERROR: Failures. Exception caught, service unavailable, data corruption."
    };
    this.status.set(info[name] ?? "");
  }
  static \u0275fac = function SbLoggingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SbLoggingComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SbLoggingComponent, selectors: [["app-topic-sb-logging"]], decls: 65, vars: 9, consts: [["title", "Logging", "subtitle", "Structured application logging. SLF4J facade, Logback configuration, log levels, and JSON logging.", "badge", "SPRING BOOT", "gradient", "linear-gradient(135deg, #374151, #9ca3af)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-gray", 3, "size"], [1, "prose"], [3, "code"], [1, "viz-card"], [1, "viz-title"], ["name", "play", "css", "icon-gray", 3, "size"], [1, "level-grid"], [1, "level", 3, "active", "class"], [1, "viz-status"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"], [1, "level", 3, "click"], [1, "level-name"]], template: function SbLoggingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Logging in Spring Boot");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7, "Spring Boot uses ");
      \u0275\u0275elementStart(8, "strong");
      \u0275\u0275text(9, "SLF4J");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " as the logging facade with ");
      \u0275\u0275elementStart(11, "strong");
      \u0275\u0275text(12, "Logback");
      \u0275\u0275elementEnd();
      \u0275\u0275text(13, " as the default implementation. Zero config needed \u2014 just start logging!");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "ul")(15, "li")(16, "strong");
      \u0275\u0275text(17, "Log Levels:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(18, " TRACE \u2192 DEBUG \u2192 INFO \u2192 WARN \u2192 ERROR (filtered by level).");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "li")(20, "strong");
      \u0275\u0275text(21, "SLF4J:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(22, " Use ");
      \u0275\u0275elementStart(23, "code");
      \u0275\u0275text(24, "LoggerFactory");
      \u0275\u0275elementEnd();
      \u0275\u0275text(25, " or Lombok's ");
      \u0275\u0275elementStart(26, "code");
      \u0275\u0275text(27, "@Slf4j");
      \u0275\u0275elementEnd();
      \u0275\u0275text(28, ".");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "li")(30, "strong");
      \u0275\u0275text(31, "Structured Logging:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(32, " JSON output for log aggregation (ELK, Datadog).");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(33, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "section", 1)(35, "div", 6)(36, "h3", 7);
      \u0275\u0275element(37, "app-icon", 8);
      \u0275\u0275text(38, " Log Level Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 9);
      \u0275\u0275repeaterCreate(40, SbLoggingComponent_For_41_Template, 3, 5, "div", 10, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 11);
      \u0275\u0275text(43);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(44, "section", 1)(45, "h2", 2);
      \u0275\u0275element(46, "app-icon", 12);
      \u0275\u0275text(47, " Patterns");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 13)(49, "div", 14)(50, "h3", 15);
      \u0275\u0275text(51, "Level Config");
      \u0275\u0275elementEnd();
      \u0275\u0275element(52, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "div", 14)(54, "h3", 15);
      \u0275\u0275text(55, "Logback XML");
      \u0275\u0275elementEnd();
      \u0275\u0275element(56, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "div", 14)(58, "h3", 15);
      \u0275\u0275text(59, "JSON Logging");
      \u0275\u0275elementEnd();
      \u0275\u0275element(60, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "div", 14)(62, "h3", 15);
      \u0275\u0275text(63, "MDC Context");
      \u0275\u0275elementEnd();
      \u0275\u0275element(64, "app-code-block", 5);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(30);
      \u0275\u0275property("code", ctx.codeIntro);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 22);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.levels());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.status());
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(6);
      \u0275\u0275property("code", ctx.codeLevels);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeLogback);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeJson);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeMdc);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ['\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-gray[_ngcontent-%COMP%] {\n  color: #475569;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n}\n.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #475569;\n}\n.viz-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  padding: 28px 24px;\n}\n.viz-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.level-grid[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  margin-bottom: 20px;\n  justify-content: center;\n}\n.level[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border-radius: 8px;\n  border: 2px solid #e2e8f0;\n  cursor: pointer;\n  transition: all 0.3s;\n  text-align: center;\n}\n.level.active[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n.level.trace.active[_ngcontent-%COMP%] {\n  border-color: #94a3b8;\n  background: #f8fafc;\n}\n.level.debug.active[_ngcontent-%COMP%] {\n  border-color: #3b82f6;\n  background: #eff6ff;\n}\n.level.info.active[_ngcontent-%COMP%] {\n  border-color: #16a34a;\n  background: #f0fdf4;\n}\n.level.warn.active[_ngcontent-%COMP%] {\n  border-color: #d97706;\n  background: #fffbeb;\n}\n.level.error.active[_ngcontent-%COMP%] {\n  border-color: #dc2626;\n  background: #fef2f2;\n}\n.level-name[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.viz-status[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=sb-logging.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SbLoggingComponent, [{
    type: Component,
    args: [{ selector: "app-topic-sb-logging", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout title="Logging" subtitle="Structured application logging. SLF4J facade, Logback configuration, log levels, and JSON logging." badge="SPRING BOOT" gradient="linear-gradient(135deg, #374151, #9ca3af)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-gray" /> Logging in Spring Boot</h2>
        <div class="prose">
          <p>Spring Boot uses <strong>SLF4J</strong> as the logging facade with <strong>Logback</strong> as the default implementation. Zero config needed \u2014 just start logging!</p>
          <ul>
            <li><strong>Log Levels:</strong> TRACE \u2192 DEBUG \u2192 INFO \u2192 WARN \u2192 ERROR (filtered by level).</li>
            <li><strong>SLF4J:</strong> Use <code>LoggerFactory</code> or Lombok's <code>&#64;Slf4j</code>.</li>
            <li><strong>Structured Logging:</strong> JSON output for log aggregation (ELK, Datadog).</li>
          </ul>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title"><app-icon name="play" [size]="22" css="icon-gray" /> Log Level Filter</h3>
          <div class="level-grid">
            @for (lvl of levels(); track lvl.name) {
              <div class="level" [class.active]="activeLevel() === lvl.name" [class]="lvl.color" (click)="selectLevel(lvl.name)">
                <span class="level-name">{{ lvl.name }}</span>
              </div>
            }
          </div>
          <div class="viz-status">{{ status() }}</div>
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Patterns</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Level Config</h3><app-code-block [code]="codeLevels" /></div>
          <div class="op-card"><h3 class="op-title">Logback XML</h3><app-code-block [code]="codeLogback" /></div>
          <div class="op-card"><h3 class="op-title">JSON Logging</h3><app-code-block [code]="codeJson" /></div>
          <div class="op-card"><h3 class="op-title">MDC Context</h3><app-code-block [code]="codeMdc" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ['/* angular:styles/component:css;a382e5e965d8fe6bbdfc0206ee5c408d1c87f54265761afaf49ac4e83fdfd55c;D:/A21/JavaIQ/src/app/features/tutorials/topics/sb-logging.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-gray {\n  color: #475569;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.prose ul {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose li {\n  margin-bottom: 8px;\n}\n.prose strong {\n  color: #0f172a;\n}\n.prose code {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #475569;\n}\n.viz-card {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  padding: 28px 24px;\n}\n.viz-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.level-grid {\n  display: flex;\n  gap: 6px;\n  margin-bottom: 20px;\n  justify-content: center;\n}\n.level {\n  padding: 10px 16px;\n  border-radius: 8px;\n  border: 2px solid #e2e8f0;\n  cursor: pointer;\n  transition: all 0.3s;\n  text-align: center;\n}\n.level.active {\n  transform: scale(1.1);\n}\n.level.trace.active {\n  border-color: #94a3b8;\n  background: #f8fafc;\n}\n.level.debug.active {\n  border-color: #3b82f6;\n  background: #eff6ff;\n}\n.level.info.active {\n  border-color: #16a34a;\n  background: #f0fdf4;\n}\n.level.warn.active {\n  border-color: #d97706;\n  background: #fffbeb;\n}\n.level.error.active {\n  border-color: #dc2626;\n  background: #fef2f2;\n}\n.level-name {\n  font-size: 0.6rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.viz-status {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=sb-logging.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SbLoggingComponent, { className: "SbLoggingComponent", filePath: "src/app/features/tutorials/topics/sb-logging.component.ts", lineNumber: 60 });
})();
export {
  SbLoggingComponent
};
//# sourceMappingURL=chunk-BQE5IUEC.js.map
