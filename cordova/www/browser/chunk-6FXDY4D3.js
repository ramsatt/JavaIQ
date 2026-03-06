import{a as M,b as y,c as E}from"./chunk-5NK5W44O.js";import{Cb as x,Gb as v,Ib as m,Pa as i,Qb as C,Tb as t,Ub as l,aa as u,ab as f,ba as g,na as d,qb as h,rb as b,sb as a,tb as n,ub as e,vb as s}from"./chunk-WSUICUG6.js";import"./chunk-NWJ5J3BN.js";var S=(p,c)=>c.path;function z(p,c){if(p&1){let o=x();n(0,"div",16),v("click",function(){let O=u(o).$implicit,P=m();return g(P.selectEp(O.path))}),n(1,"span",17),t(2),e(),n(3,"span",18),t(4),e()()}if(p&2){let o=c.$implicit,r=m();C("active",r.activeEp()===o.path),i(2),l(o.icon),i(2),l(o.path)}}var _=class p{activeEp=d("");status=d("Click an endpoint to see its response.");endpoints=d([{path:"/health",icon:"\u{1F49A}"},{path:"/metrics",icon:"\u{1F4CA}"},{path:"/info",icon:"\u2139\uFE0F"},{path:"/env",icon:"\u2699\uFE0F"},{path:"/beans",icon:"\u{1FAD8}"},{path:"/loggers",icon:"\u{1F4DD}"}]);codeIntro=`# application.yml
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
#     "diskSpace": { "status": "UP" } } }`;codeHealth=`@Component
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
}`;codeMetrics=`@Service
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
}`;codeSecurity=`// Secure actuator endpoints
http.authorizeHttpRequests(auth -> auth
    .requestMatchers("/actuator/health").permitAll()
    .requestMatchers("/actuator/**").hasRole("ADMIN")
)

# Or separate port for actuator
management.server.port=9090
# Actuator on private network port`;codeCustom=`@Component
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
// GET /actuator/features`;selectEp(c){this.activeEp.set(c);let o={"/health":"Health: UP/DOWN status + component details. Kubernetes liveness/readiness probes!","/metrics":"Metrics: JVM memory, HTTP requests, GC, custom counters. Feed to Prometheus!","/info":"Info: Build version, git commit, description. Great for debugging!","/env":"Env: All property sources (sanitized passwords). Debug config issues!","/beans":"Beans: Every bean in the ApplicationContext. Debug wiring issues!","/loggers":"Loggers: View & change log levels at runtime. No restart needed!"};this.status.set(o[c]??"")}static \u0275fac=function(o){return new(o||p)};static \u0275cmp=f({type:p,selectors:[["app-topic-sb-actuator"]],decls:59,vars:9,consts:[["title","Actuator & Monitoring","subtitle","Production-ready features. Health checks, metrics, info endpoints, and custom actuator endpoints.","badge","SPRING BOOT","gradient","linear-gradient(135deg, #0e7490, #67e8f9)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-cyan",3,"size"],[1,"prose"],[3,"code"],[1,"viz-card"],[1,"viz-title"],["name","play","css","icon-cyan",3,"size"],[1,"ep-grid"],[1,"ep-item",3,"active"],[1,"viz-status"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"],[1,"ep-item",3,"click"],[1,"ep-icon"],[1,"ep-path"]],template:function(o,r){o&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),s(3,"app-icon",3),t(4," Actuator Endpoints"),e(),n(5,"div",4)(6,"p")(7,"strong"),t(8,"Actuator"),e(),t(9," exposes operational endpoints for monitoring. Health checks for Kubernetes probes, metrics for dashboards, and info for build metadata."),e(),n(10,"ul")(11,"li")(12,"strong"),t(13,"/actuator/health:"),e(),t(14," Application health status (UP/DOWN)."),e(),n(15,"li")(16,"strong"),t(17,"/actuator/metrics:"),e(),t(18," JVM, HTTP, custom metrics."),e(),n(19,"li")(20,"strong"),t(21,"/actuator/info:"),e(),t(22," Build info, git commit, custom data."),e(),n(23,"li")(24,"strong"),t(25,"/actuator/env:"),e(),t(26," Environment properties (sanitized)."),e()(),s(27,"app-code-block",5),e()(),n(28,"section",1)(29,"div",6)(30,"h3",7),s(31,"app-icon",8),t(32," Endpoint Explorer"),e(),n(33,"div",9),h(34,z,5,4,"div",10,S),e(),n(36,"div",11),t(37),e()()(),n(38,"section",1)(39,"h2",2),s(40,"app-icon",12),t(41," Patterns"),e(),n(42,"div",13)(43,"div",14)(44,"h3",15),t(45,"Custom Health"),e(),s(46,"app-code-block",5),e(),n(47,"div",14)(48,"h3",15),t(49,"Custom Metrics"),e(),s(50,"app-code-block",5),e(),n(51,"div",14)(52,"h3",15),t(53,"Security Config"),e(),s(54,"app-code-block",5),e(),n(55,"div",14)(56,"h3",15),t(57,"Custom Endpoint"),e(),s(58,"app-code-block",5),e()()()()),o&2&&(i(3),a("size",28),i(24),a("code",r.codeIntro),i(4),a("size",22),i(3),b(r.endpoints()),i(3),l(r.status()),i(3),a("size",28),i(6),a("code",r.codeHealth),i(4),a("code",r.codeMetrics),i(4),a("code",r.codeSecurity),i(4),a("code",r.codeCustom))},dependencies:[M,y,E],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-cyan[_ngcontent-%COMP%]{color:#0891b2}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:14px 0;padding-left:22px;list-style:disc}.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:8px}.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#0f172a}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f1f5f9;padding:2px 7px;border-radius:5px;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#0891b2}.viz-card[_ngcontent-%COMP%]{background:#fff;border-radius:18px;border:1px solid #e2e8f0;padding:28px 24px}.viz-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;font-size:1.15rem;font-weight:700;color:#0f172a;margin:0 0 24px}.ep-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:6px;margin-bottom:20px}.ep-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;padding:10px 14px;border-radius:10px;border:2px solid #e2e8f0;cursor:pointer;transition:all .3s}.ep-item.active[_ngcontent-%COMP%]{border-color:#0891b2;background:#ecfeff}.ep-icon[_ngcontent-%COMP%]{font-size:1rem}.ep-path[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:.6rem;font-weight:700;color:#0f172a}.viz-status[_ngcontent-%COMP%]{background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:12px 16px;text-align:center;font-family:JetBrains Mono,monospace;font-size:.78rem;color:#334155}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{_ as SbActuatorComponent};
