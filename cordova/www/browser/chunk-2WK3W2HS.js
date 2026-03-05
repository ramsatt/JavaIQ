import {
  CodeBlockComponent,
  IconComponent,
  TutorialLayoutComponent
} from "./chunk-MLPCG66Y.js";
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
} from "./chunk-VBTVL2BZ.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/sb-scheduling.component.ts
var SbSchedulingComponent = class _SbSchedulingComponent {
  codeIntro = `@SpringBootApplication
@EnableScheduling  // Enable scheduling
@EnableAsync       // Enable async
public class App { }

@Service
public class ReportService {
    @Scheduled(fixedRate = 60000) // every 60 seconds
    public void generateReport() {
        log.info("Generating report at {}", LocalDateTime.now());
    }

    @Scheduled(fixedDelay = 30000) // 30s after last completion
    public void processQueue() {
        log.info("Processing pending items...");
    }
}`;
  codeCron = `// Cron: sec min hour day month weekday
@Scheduled(cron = "0 0 9 * * MON-FRI") // 9 AM weekdays
public void morningReport() { }

@Scheduled(cron = "0 */15 * * * *") // every 15 minutes
public void checkHealth() { }

@Scheduled(cron = "0 0 2 * * *") // 2 AM daily
public void nightlyCleanup() { }

@Scheduled(cron = "0 0 0 1 * *") // 1st of each month
public void monthlyBilling() { }

// Externalize cron expression
@Scheduled(cron = "\${app.report.cron}")
public void configurable() { }
# app.report.cron=0 0 8 * * *`;
  codeAsync = `@Service
public class EmailService {

    @Async // runs in separate thread!
    public CompletableFuture<String> sendEmail(String to, String body) {
        // slow operation (2-5 seconds)
        String result = emailClient.send(to, body);
        return CompletableFuture.completedFuture(result);
    }
}

// Caller doesn't wait
@Service
public class OrderService {
    public void place(Order order) {
        orderRepo.save(order);
        emailService.sendEmail(order.getEmail(), "Order confirmed!");
        // \u2191 returns immediately! Email sent in background
    }
}`;
  codeExecutor = `@Configuration
public class AsyncConfig {
    @Bean("taskExecutor")
    public Executor taskExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(5);
        executor.setMaxPoolSize(10);
        executor.setQueueCapacity(25);
        executor.setThreadNamePrefix("async-");
        executor.setRejectedExecutionHandler(new CallerRunsPolicy());
        executor.initialize();
        return executor;
    }
}

// Use specific executor
@Async("taskExecutor")
public void heavyTask() { }`;
  codeDynamic = `// Programmatic scheduling
@Component
public class DynamicScheduler implements SchedulingConfigurer {
    @Override
    public void configureTasks(ScheduledTaskRegistrar registrar) {
        registrar.addTriggerTask(
            () -> log.info("Dynamic task executed"),
            triggerContext -> {
                String cron = configService.getCron("dynamic.task");
                return new CronTrigger(cron).nextExecution(triggerContext);
            }
        );
    }
}`;
  static \u0275fac = function SbSchedulingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SbSchedulingComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SbSchedulingComponent, selectors: [["app-topic-sb-scheduling"]], decls: 36, vars: 7, consts: [["title", "Scheduling & Async", "subtitle", "Background tasks and async processing. @Scheduled, @Async, cron expressions, and task executors.", "badge", "SPRING BOOT", "gradient", "linear-gradient(135deg, #b45309, #fbbf24)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-amber", 3, "size"], [1, "prose"], [3, "code"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"]], template: function SbSchedulingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Scheduling");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7, "Spring Boot makes scheduling trivial with ");
      \u0275\u0275elementStart(8, "code");
      \u0275\u0275text(9, "@Scheduled");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " and ");
      \u0275\u0275elementStart(11, "code");
      \u0275\u0275text(12, "@Async");
      \u0275\u0275elementEnd();
      \u0275\u0275text(13, ". Enable with one annotation, configure with cron expressions.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(14, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "section", 1)(16, "h2", 2);
      \u0275\u0275element(17, "app-icon", 6);
      \u0275\u0275text(18, " Patterns");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 7)(20, "div", 8)(21, "h3", 9);
      \u0275\u0275text(22, "Cron Expressions");
      \u0275\u0275elementEnd();
      \u0275\u0275element(23, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 8)(25, "h3", 9);
      \u0275\u0275text(26, "@Async");
      \u0275\u0275elementEnd();
      \u0275\u0275element(27, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 8)(29, "h3", 9);
      \u0275\u0275text(30, "Custom Executor");
      \u0275\u0275elementEnd();
      \u0275\u0275element(31, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 8)(33, "h3", 9);
      \u0275\u0275text(34, "Dynamic Scheduling");
      \u0275\u0275elementEnd();
      \u0275\u0275element(35, "app-code-block", 5);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(11);
      \u0275\u0275property("code", ctx.codeIntro);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(6);
      \u0275\u0275property("code", ctx.codeCron);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeAsync);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeExecutor);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeDynamic);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ['\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-amber[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #d97706;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=sb-scheduling.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SbSchedulingComponent, [{
    type: Component,
    args: [{ selector: "app-topic-sb-scheduling", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout title="Scheduling & Async" subtitle="Background tasks and async processing. @Scheduled, @Async, cron expressions, and task executors." badge="SPRING BOOT" gradient="linear-gradient(135deg, #b45309, #fbbf24)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-amber" /> Scheduling</h2>
        <div class="prose">
          <p>Spring Boot makes scheduling trivial with <code>&#64;Scheduled</code> and <code>&#64;Async</code>. Enable with one annotation, configure with cron expressions.</p>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Patterns</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Cron Expressions</h3><app-code-block [code]="codeCron" /></div>
          <div class="op-card"><h3 class="op-title">&#64;Async</h3><app-code-block [code]="codeAsync" /></div>
          <div class="op-card"><h3 class="op-title">Custom Executor</h3><app-code-block [code]="codeExecutor" /></div>
          <div class="op-card"><h3 class="op-title">Dynamic Scheduling</h3><app-code-block [code]="codeDynamic" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ['/* angular:styles/component:css;e23e4e56c0ae13efbd4f7c0b04f262761b3d1623565da589dd993727de503210;/Users/sathishkumarramalingam/projects/JavaIQ/.claude/worktrees/goofy-haibt/src/app/features/tutorials/topics/sb-scheduling.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-amber {\n  color: #d97706;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.prose code {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #d97706;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=sb-scheduling.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SbSchedulingComponent, { className: "SbSchedulingComponent", filePath: "src/app/features/tutorials/topics/sb-scheduling.component.ts", lineNumber: 36 });
})();
export {
  SbSchedulingComponent
};
//# sourceMappingURL=chunk-2WK3W2HS.js.map
