import{a as k,b as h,c as S}from"./chunk-LDZEFRU3.js";import{$a as f,Ab as x,Bb as v,Db as m,Mb as y,Ob as i,Pa as n,Pb as p,aa as u,ba as g,na as d,ob as b,pb as C,qb as o,rb as t,sb as e,tb as c}from"./chunk-AMIPRJ7H.js";import"./chunk-NWJ5J3BN.js";var M=(l,s)=>s.name;function P(l,s){if(l&1){let r=x();t(0,"div",16),v("click",function(){let E=u(r).$implicit,_=m();return g(_.selectCb(E.name))}),t(1,"span",17),i(2),e(),t(3,"span",18),i(4),e()()}if(l&2){let r=s.$implicit,a=m();y("active",a.activeCb()===r.name),n(2),p(r.icon),n(2),p(r.name)}}var O=class l{activeCb=d("");cbStatus=d("Click a state to learn about circuit breaker transitions.");cbStates=d([{name:"CLOSED",icon:"\u2705"},{name:"OPEN",icon:"\u{1F534}"},{name:"HALF_OPEN",icon:"\u{1F7E1}"}]);codeIntro=`@Service
public class OrderService {
    @CircuitBreaker(name = "userService", fallbackMethod = "fallback")
    public User getUser(Long id) {
        return userClient.getUser(id); // may fail
    }

    private User fallback(Long id, Throwable t) {
        log.warn("User service down, using fallback: {}", t.getMessage());
        return new User(id, "Unknown", "N/A");
    }
}`;codeConfig=`# application.yml
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
        timeoutDuration: 3s`;codeRetry=`// Retry failed calls
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
          - com.app.BusinessException`;codeBulkhead=`// Bulkhead \u2014 limit concurrent calls
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
        queueCapacity: 10`;codeCombined=`// Combine multiple resilience patterns
// Order: Retry \u2192 CircuitBreaker \u2192 Bulkhead \u2192 TimeLimiter

@CircuitBreaker(name = "payment")
@Retry(name = "payment")
@Bulkhead(name = "payment")
@TimeLimiter(name = "payment")
public CompletableFuture<Payment> process(PaymentReq req) {
    return CompletableFuture.supplyAsync(
        () -> paymentClient.charge(req));
}`;selectCb(s){this.activeCb.set(s);let r={CLOSED:"CLOSED: Normal operation. Requests pass through. Failures are counted.",OPEN:"OPEN: Too many failures! Requests immediately return fallback. Waiting to retry...",HALF_OPEN:"HALF_OPEN: Testing recovery. A few requests pass \u2014 if OK \u2192 CLOSED, if fail \u2192 OPEN."};this.cbStatus.set(r[s]??"")}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=f({type:l,selectors:[["app-topic-ms-circuit"]],decls:43,vars:9,consts:[["title","Circuit Breaker","subtitle","Prevent cascade failures. Resilience4j circuit breaker, fallbacks, retry, bulkhead, and rate limiter.","badge","MICROSERVICES","gradient","linear-gradient(135deg, #991b1b, #f87171)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-red",3,"size"],[1,"prose"],[3,"code"],[1,"viz-card"],[1,"viz-title"],["name","play","css","icon-red",3,"size"],[1,"state-grid"],[1,"cb-state",3,"active"],[1,"viz-status"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"],[1,"cb-state",3,"click"],[1,"cb-icon"],[1,"cb-name"]],template:function(r,a){r&1&&(t(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),c(3,"app-icon",3),i(4," Circuit Breaker"),e(),t(5,"div",4)(6,"p"),i(7,"When a service is down, the circuit breaker "),t(8,"strong"),i(9,"stops calling it"),e(),i(10," and returns a fallback instead \u2014 preventing cascade failures."),e(),c(11,"app-code-block",5),e()(),t(12,"section",1)(13,"div",6)(14,"h3",7),c(15,"app-icon",8),i(16," Circuit States"),e(),t(17,"div",9),b(18,P,5,4,"div",10,M),e(),t(20,"div",11),i(21),e()()(),t(22,"section",1)(23,"h2",2),c(24,"app-icon",12),i(25," Patterns"),e(),t(26,"div",13)(27,"div",14)(28,"h3",15),i(29,"Resilience4j Config"),e(),c(30,"app-code-block",5),e(),t(31,"div",14)(32,"h3",15),i(33,"Retry"),e(),c(34,"app-code-block",5),e(),t(35,"div",14)(36,"h3",15),i(37,"Bulkhead"),e(),c(38,"app-code-block",5),e(),t(39,"div",14)(40,"h3",15),i(41,"Combined"),e(),c(42,"app-code-block",5),e()()()()),r&2&&(n(3),o("size",28),n(8),o("code",a.codeIntro),n(4),o("size",22),n(3),C(a.cbStates()),n(3),p(a.cbStatus()),n(3),o("size",28),n(6),o("code",a.codeConfig),n(4),o("code",a.codeRetry),n(4),o("code",a.codeBulkhead),n(4),o("code",a.codeCombined))},dependencies:[k,h,S],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-red[_ngcontent-%COMP%]{color:#dc2626}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.viz-card[_ngcontent-%COMP%]{background:#fff;border-radius:18px;border:1px solid #e2e8f0;padding:28px 24px}.viz-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;font-size:1.15rem;font-weight:700;color:#0f172a;margin:0 0 24px}.state-grid[_ngcontent-%COMP%]{display:flex;gap:10px;justify-content:center;margin-bottom:20px}.cb-state[_ngcontent-%COMP%]{padding:14px 20px;border-radius:12px;border:2px solid #e2e8f0;text-align:center;cursor:pointer;transition:all .3s}.cb-state.active[_ngcontent-%COMP%]{border-color:#dc2626;background:#fef2f2;transform:scale(1.05)}.cb-icon[_ngcontent-%COMP%]{display:block;font-size:1.4rem;margin-bottom:4px}.cb-name[_ngcontent-%COMP%]{font-size:.6rem;font-weight:800;color:#0f172a}.viz-status[_ngcontent-%COMP%]{background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:12px 16px;text-align:center;font-family:JetBrains Mono,monospace;font-size:.78rem;color:#334155}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{O as MsCircuitComponent};
