import{a as d,b as l,c as m}from"./chunk-FZG5ZG77.js";import{Hb as t,Ma as n,Xa as s,mb as r,nb as i,ob as e,pb as o}from"./chunk-5DVJCJ5O.js";import"./chunk-NWJ5J3BN.js";var g=class p{codeIntro=`// Request flow with tracing:
// Client \u2192 API Gateway \u2192 Order Service \u2192 Payment Service
//   traceId: abc123     traceId: abc123    traceId: abc123
//   spanId:  span1      spanId:  span2     spanId:  span3

// Same traceId across ALL services!
// Each service creates its own spanId`;codeMicrometer=`// Spring Boot 3+ (Micrometer Tracing)
<dependency>
    <groupId>io.micrometer</groupId>
    <artifactId>micrometer-tracing-bridge-brave</artifactId>
</dependency>
<dependency>
    <groupId>io.zipkin.reporter2</groupId>
    <artifactId>zipkin-reporter-brave</artifactId>
</dependency>

# application.yml
management:
  tracing:
    sampling:
      probability: 1.0  # 100% in dev, lower in prod
  zipkin:
    tracing:
      endpoint: http://localhost:9411/api/v2/spans`;codeZipkin=`// Zipkin \u2014 distributed tracing UI
// Docker:
// docker run -d -p 9411:9411 openzipkin/zipkin

// Open http://localhost:9411
// See: request timeline across all services
// Find: slow spans, error spans, dependencies

// Zipkin shows:
// \u250C\u2500 API Gateway (2ms) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
// \u2502 \u250C\u2500 Order Service (15ms) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502
// \u2502 \u2502 \u250C\u2500 Payment Service (8ms) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502  \u2502
// \u2502 \u2502 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502  \u2502
// \u2502 \u2502 \u250C\u2500 Inventory Service (5ms) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502  \u2502
// \u2502 \u2502 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502  \u2502
// \u2502 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502
// \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518`;codeLogging=`// TraceId auto-added to logs!
// Log output:
// 2024-01-15 10:30:00 [traceId=abc123, spanId=span1]
//   INFO OrderService - Creating order for user 42

// MDC integration (automatic with Micrometer)
logging:
  pattern:
    level: "%5p [traceId=%X{traceId}, spanId=%X{spanId}]"

// Now grep logs across ALL services by traceId:
// grep "abc123" /var/log/*/app.log`;codeMetrics=`// Full observability stack:
// 1. Traces  \u2192 Zipkin/Jaeger  (request flow)
// 2. Metrics \u2192 Prometheus     (counters, gauges)
// 3. Logs    \u2192 ELK/Loki      (structured logs)

management:
  endpoints:
    web:
      exposure:
        include: health,metrics,prometheus
  metrics:
    distribution:
      percentiles-histogram:
        http.server.requests: true
    tags:
      application: \${spring.application.name}

// Grafana dashboard:
// HTTP request rate, latency p99, error rate
// Per-service breakdown, dependency graph`;static \u0275fac=function(c){return new(c||p)};static \u0275cmp=s({type:p,selectors:[["app-topic-ms-tracing"]],decls:33,vars:7,consts:[["title","Distributed Tracing","subtitle","Track requests across services. Micrometer Tracing, Zipkin, correlation IDs, and full observability.","badge","MICROSERVICES","gradient","linear-gradient(135deg, #4338ca, #818cf8)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-indigo",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-purple",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(c,a){c&1&&(i(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),o(3,"app-icon",3),t(4," Tracing"),e(),i(5,"div",4)(6,"p"),t(7,"A request crosses multiple services. "),i(8,"strong"),t(9,"Distributed tracing"),e(),t(10," creates a trace ID that follows the request everywhere, making debugging possible."),e(),o(11,"app-code-block",5),e()(),i(12,"section",1)(13,"h2",2),o(14,"app-icon",6),t(15," Setup"),e(),i(16,"div",7)(17,"div",8)(18,"h3",9),t(19,"Micrometer Tracing"),e(),o(20,"app-code-block",5),e(),i(21,"div",8)(22,"h3",9),t(23,"Zipkin"),e(),o(24,"app-code-block",5),e(),i(25,"div",8)(26,"h3",9),t(27,"Logging"),e(),o(28,"app-code-block",5),e(),i(29,"div",8)(30,"h3",9),t(31,"Metrics"),e(),o(32,"app-code-block",5),e()()()()),c&2&&(n(3),r("size",28),n(8),r("code",a.codeIntro),n(3),r("size",28),n(6),r("code",a.codeMicrometer),n(4),r("code",a.codeZipkin),n(4),r("code",a.codeLogging),n(4),r("code",a.codeMetrics))},dependencies:[d,l,m],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.icon-purple[_ngcontent-%COMP%]{color:#7c3aed}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{g as MsTracingComponent};
