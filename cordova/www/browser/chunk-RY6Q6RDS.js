import{a as L,b as y,c as M}from"./chunk-H4UXZOTD.js";import{$a as u,Bb as x,Fb as C,Hb as s,Pa as i,Pb as O,Qb as E,Rb as t,Sb as p,aa as m,ba as f,na as d,pb as v,qb as b,rb as a,sb as n,tb as e,ub as l}from"./chunk-QHT4LFPW.js";import"./chunk-NWJ5J3BN.js";var h=(g,c)=>c.name;function k(g,c){if(g&1){let o=x();n(0,"div",16),C("click",function(){let P=m(o).$implicit,_=s();return f(_.selectLevel(P.name))}),n(1,"span",17),t(2),e()()}if(g&2){let o=c.$implicit,r=s();E(o.color),O("active",r.activeLevel()===o.name),i(2),p(o.name)}}var S=class g{activeLevel=d("");status=d("Click a log level to see what gets logged.");levels=d([{name:"TRACE",color:"trace"},{name:"DEBUG",color:"debug"},{name:"INFO",color:"info"},{name:"WARN",color:"warn"},{name:"ERROR",color:"error"}]);codeIntro=`// Using SLF4J directly
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
}`;codeLevels=`# application.yml
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
      max-history: 30`;codeLogback=`<!-- logback-spring.xml -->
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
</configuration>`;codeJson=`<!-- JSON logging for ELK/Datadog -->
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
 "userId":"user123"} -->`;codeMdc=`// MDC = Mapped Diagnostic Context
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
// Every log line now has the request ID!`;selectLevel(c){this.activeLevel.set(c);let o={TRACE:"TRACE: Most verbose. Method entry/exit, variable values. Development only.",DEBUG:"DEBUG: Detailed diagnostic info. SQL queries, request/response bodies.",INFO:"INFO: Normal operations. App started, request processed, order placed.",WARN:"WARN: Potential problems. Deprecated API used, retry attempt, slow query.",ERROR:"ERROR: Failures. Exception caught, service unavailable, data corruption."};this.status.set(o[c]??"")}static \u0275fac=function(o){return new(o||g)};static \u0275cmp=u({type:g,selectors:[["app-topic-sb-logging"]],decls:65,vars:9,consts:[["title","Logging","subtitle","Structured application logging. SLF4J facade, Logback configuration, log levels, and JSON logging.","badge","SPRING BOOT","gradient","linear-gradient(135deg, #374151, #9ca3af)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-gray",3,"size"],[1,"prose"],[3,"code"],[1,"viz-card"],[1,"viz-title"],["name","play","css","icon-gray",3,"size"],[1,"level-grid"],[1,"level",3,"active","class"],[1,"viz-status"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"],[1,"level",3,"click"],[1,"level-name"]],template:function(o,r){o&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),l(3,"app-icon",3),t(4," Logging in Spring Boot"),e(),n(5,"div",4)(6,"p"),t(7,"Spring Boot uses "),n(8,"strong"),t(9,"SLF4J"),e(),t(10," as the logging facade with "),n(11,"strong"),t(12,"Logback"),e(),t(13," as the default implementation. Zero config needed \u2014 just start logging!"),e(),n(14,"ul")(15,"li")(16,"strong"),t(17,"Log Levels:"),e(),t(18," TRACE \u2192 DEBUG \u2192 INFO \u2192 WARN \u2192 ERROR (filtered by level)."),e(),n(19,"li")(20,"strong"),t(21,"SLF4J:"),e(),t(22," Use "),n(23,"code"),t(24,"LoggerFactory"),e(),t(25," or Lombok's "),n(26,"code"),t(27,"@Slf4j"),e(),t(28,"."),e(),n(29,"li")(30,"strong"),t(31,"Structured Logging:"),e(),t(32," JSON output for log aggregation (ELK, Datadog)."),e()(),l(33,"app-code-block",5),e()(),n(34,"section",1)(35,"div",6)(36,"h3",7),l(37,"app-icon",8),t(38," Log Level Filter"),e(),n(39,"div",9),v(40,k,3,5,"div",10,h),e(),n(42,"div",11),t(43),e()()(),n(44,"section",1)(45,"h2",2),l(46,"app-icon",12),t(47," Patterns"),e(),n(48,"div",13)(49,"div",14)(50,"h3",15),t(51,"Level Config"),e(),l(52,"app-code-block",5),e(),n(53,"div",14)(54,"h3",15),t(55,"Logback XML"),e(),l(56,"app-code-block",5),e(),n(57,"div",14)(58,"h3",15),t(59,"JSON Logging"),e(),l(60,"app-code-block",5),e(),n(61,"div",14)(62,"h3",15),t(63,"MDC Context"),e(),l(64,"app-code-block",5),e()()()()),o&2&&(i(3),a("size",28),i(30),a("code",r.codeIntro),i(4),a("size",22),i(3),b(r.levels()),i(3),p(r.status()),i(3),a("size",28),i(6),a("code",r.codeLevels),i(4),a("code",r.codeLogback),i(4),a("code",r.codeJson),i(4),a("code",r.codeMdc))},dependencies:[L,y,M],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-gray[_ngcontent-%COMP%]{color:#475569}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:14px 0;padding-left:22px;list-style:disc}.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:8px}.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#0f172a}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f1f5f9;padding:2px 7px;border-radius:5px;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#475569}.viz-card[_ngcontent-%COMP%]{background:#fff;border-radius:18px;border:1px solid #e2e8f0;padding:28px 24px}.viz-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;font-size:1.15rem;font-weight:700;color:#0f172a;margin:0 0 24px}.level-grid[_ngcontent-%COMP%]{display:flex;gap:6px;margin-bottom:20px;justify-content:center}.level[_ngcontent-%COMP%]{padding:10px 16px;border-radius:8px;border:2px solid #e2e8f0;cursor:pointer;transition:all .3s;text-align:center}.level.active[_ngcontent-%COMP%]{transform:scale(1.1)}.level.trace.active[_ngcontent-%COMP%]{border-color:#94a3b8;background:#f8fafc}.level.debug.active[_ngcontent-%COMP%]{border-color:#3b82f6;background:#eff6ff}.level.info.active[_ngcontent-%COMP%]{border-color:#16a34a;background:#f0fdf4}.level.warn.active[_ngcontent-%COMP%]{border-color:#d97706;background:#fffbeb}.level.error.active[_ngcontent-%COMP%]{border-color:#dc2626;background:#fef2f2}.level-name[_ngcontent-%COMP%]{font-size:.6rem;font-weight:800;color:#0f172a}.viz-status[_ngcontent-%COMP%]{background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:12px 16px;text-align:center;font-family:JetBrains Mono,monospace;font-size:.78rem;color:#334155}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{S as SbLoggingComponent};
