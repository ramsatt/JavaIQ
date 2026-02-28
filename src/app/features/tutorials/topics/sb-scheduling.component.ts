import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-sb-scheduling',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
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
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-amber { color: #d97706; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; } .prose code { background: #f1f5f9; padding: 2px 7px; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #d97706; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class SbSchedulingComponent {
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
        // ↑ returns immediately! Email sent in background
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
}
