import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-sb-logging',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="Logging" subtitle="Structured application logging. SLF4J facade, Logback configuration, log levels, and JSON logging." badge="SPRING BOOT" gradient="linear-gradient(135deg, #374151, #9ca3af)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-gray" /> Logging in Spring Boot</h2>
        <div class="prose">
          <p>Spring Boot uses <strong>SLF4J</strong> as the logging facade with <strong>Logback</strong> as the default implementation. Zero config needed — just start logging!</p>
          <ul>
            <li><strong>Log Levels:</strong> TRACE → DEBUG → INFO → WARN → ERROR (filtered by level).</li>
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
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-gray { color: #475569; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; } .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; } .prose li { margin-bottom: 8px; } .prose strong { color: #0f172a; } .prose code { background: #f1f5f9; padding: 2px 7px; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #475569; }
    .viz-card { background: #fff; border-radius: 18px; border: 1px solid #e2e8f0; padding: 28px 24px; } .viz-title { display: flex; align-items: center; gap: 10px; font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0 0 24px; }
    .level-grid { display: flex; gap: 6px; margin-bottom: 20px; justify-content: center; }
    .level { padding: 10px 16px; border-radius: 8px; border: 2px solid #e2e8f0; cursor: pointer; transition: all 0.3s; text-align: center; }
    .level.active { transform: scale(1.1); } .level.trace.active { border-color: #94a3b8; background: #f8fafc; } .level.debug.active { border-color: #3b82f6; background: #eff6ff; } .level.info.active { border-color: #16a34a; background: #f0fdf4; } .level.warn.active { border-color: #d97706; background: #fffbeb; } .level.error.active { border-color: #dc2626; background: #fef2f2; }
    .level-name { font-size: 0.6rem; font-weight: 800; color: #0f172a; }
    .viz-status { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px 16px; text-align: center; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; color: #334155; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class SbLoggingComponent {
  activeLevel = signal(''); status = signal('Click a log level to see what gets logged.');
  levels = signal([
    { name: 'TRACE', color: 'trace' }, { name: 'DEBUG', color: 'debug' },
    { name: 'INFO', color: 'info' }, { name: 'WARN', color: 'warn' }, { name: 'ERROR', color: 'error' },
  ]);
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

  selectLevel(name: string) {
    this.activeLevel.set(name);
    const info: Record<string, string> = {
      'TRACE': 'TRACE: Most verbose. Method entry/exit, variable values. Development only.',
      'DEBUG': 'DEBUG: Detailed diagnostic info. SQL queries, request/response bodies.',
      'INFO': 'INFO: Normal operations. App started, request processed, order placed.',
      'WARN': 'WARN: Potential problems. Deprecated API used, retry attempt, slow query.',
      'ERROR': 'ERROR: Failures. Exception caught, service unavailable, data corruption.'
    };
    this.status.set(info[name] ?? '');
  }
}
