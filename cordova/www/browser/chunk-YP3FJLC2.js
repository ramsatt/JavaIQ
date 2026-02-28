import{a as p,b as m}from"./chunk-AMVNOPTI.js";import{a as s}from"./chunk-SI5PESLS.js";import{$a as i,Ja as l,ab as t,bb as e,cb as r,ub as n,ya as o}from"./chunk-WGYJYFZL.js";import"./chunk-NWJ5J3BN.js";var u=class d{codeIntro=`@SpringBootApplication
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
}`;codeCron=`// Cron: sec min hour day month weekday
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
# app.report.cron=0 0 8 * * *`;codeAsync=`@Service
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
}`;codeExecutor=`@Configuration
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
public void heavyTask() { }`;codeDynamic=`// Programmatic scheduling
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
}`;static \u0275fac=function(a){return new(a||d)};static \u0275cmp=l({type:d,selectors:[["app-topic-sb-scheduling"]],decls:36,vars:7,consts:[["title","Scheduling & Async","subtitle","Background tasks and async processing. @Scheduled, @Async, cron expressions, and task executors.","badge","SPRING BOOT","gradient","linear-gradient(135deg, #b45309, #fbbf24)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-amber",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(a,c){a&1&&(t(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),r(3,"app-icon",3),n(4," Scheduling"),e(),t(5,"div",4)(6,"p"),n(7,"Spring Boot makes scheduling trivial with "),t(8,"code"),n(9,"@Scheduled"),e(),n(10," and "),t(11,"code"),n(12,"@Async"),e(),n(13,". Enable with one annotation, configure with cron expressions."),e(),r(14,"app-code-block",5),e()(),t(15,"section",1)(16,"h2",2),r(17,"app-icon",6),n(18," Patterns"),e(),t(19,"div",7)(20,"div",8)(21,"h3",9),n(22,"Cron Expressions"),e(),r(23,"app-code-block",5),e(),t(24,"div",8)(25,"h3",9),n(26,"@Async"),e(),r(27,"app-code-block",5),e(),t(28,"div",8)(29,"h3",9),n(30,"Custom Executor"),e(),r(31,"app-code-block",5),e(),t(32,"div",8)(33,"h3",9),n(34,"Dynamic Scheduling"),e(),r(35,"app-code-block",5),e()()()()),a&2&&(o(3),i("size",28),o(11),i("code",c.codeIntro),o(3),i("size",28),o(6),i("code",c.codeCron),o(4),i("code",c.codeAsync),o(4),i("code",c.codeExecutor),o(4),i("code",c.codeDynamic))},dependencies:[s,p,m],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-amber[_ngcontent-%COMP%]{color:#d97706}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f1f5f9;padding:2px 7px;border-radius:5px;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#d97706}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{u as SbSchedulingComponent};
