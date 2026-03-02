import{a as p,b as d,c as g}from"./chunk-6QA53VVD.js";import{Fb as t,Ka as n,Va as l,kb as o,lb as i,mb as e,nb as r}from"./chunk-RGVQRHF6.js";import"./chunk-NWJ5J3BN.js";var m=class c{codeIntro=`@SpringBootApplication
public class GatewayApp { }

# application.yml
spring:
  cloud:
    gateway:
      routes:
        - id: user-service
          uri: lb://user-service
          predicates:
            - Path=/api/users/**
        - id: order-service
          uri: lb://order-service
          predicates:
            - Path=/api/orders/**`;codeRoutes=`spring:
  cloud:
    gateway:
      routes:
        - id: user-route
          uri: lb://user-service    # lb:// = load balanced
          predicates:
            - Path=/api/users/**
            - Method=GET,POST
            - Header=X-Request-Id, \\d+
          filters:
            - StripPrefix=1
            - AddRequestHeader=X-Gateway, true

        - id: product-route
          uri: lb://product-service
          predicates:
            - Path=/api/products/**
            - Between=2024-01-01T00:00:00Z, 2025-01-01T00:00:00Z`;codeFilters=`// Global filter (applies to ALL routes)
@Component
public class LoggingFilter implements GlobalFilter, Ordered {
    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        log.info("Request: {} {}", exchange.getRequest().getMethod(),
            exchange.getRequest().getURI());
        long start = System.currentTimeMillis();
        return chain.filter(exchange).then(Mono.fromRunnable(() ->
            log.info("Response: {} in {}ms",
                exchange.getResponse().getStatusCode(),
                System.currentTimeMillis() - start)));
    }
    @Override public int getOrder() { return -1; }
}`;codeRate=`# Rate limiting with Redis
spring:
  cloud:
    gateway:
      routes:
        - id: rate-limited
          uri: lb://user-service
          predicates:
            - Path=/api/users/**
          filters:
            - name: RequestRateLimiter
              args:
                redis-rate-limiter:
                  replenishRate: 10     # 10 req/sec
                  burstCapacity: 20
                  requestedTokens: 1
                key-resolver: "#{@userKeyResolver}"

# Key resolver bean
@Bean
KeyResolver userKeyResolver() {
    return exchange -> Mono.just(
        exchange.getRequest().getRemoteAddress().getHostName());
}`;codeAuth=`// JWT validation filter
@Component
public class AuthFilter implements GatewayFilter {
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        String token = exchange.getRequest().getHeaders()
            .getFirst(HttpHeaders.AUTHORIZATION);
        if (token == null || !token.startsWith("Bearer ")) {
            exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
            return exchange.getResponse().setComplete();
        }
        try {
            Claims claims = jwtService.validate(token.substring(7));
            exchange.getRequest().mutate()
                .header("X-User-Id", claims.getSubject()).build();
            return chain.filter(exchange);
        } catch (JwtException e) {
            exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
            return exchange.getResponse().setComplete();
        }
    }
}`;static \u0275fac=function(s){return new(s||c)};static \u0275cmp=l({type:c,selectors:[["app-topic-ms-gateway"]],decls:33,vars:7,consts:[["title","API Gateway","subtitle","Single entry point for all clients. Spring Cloud Gateway, routing, filters, rate limiting, and authentication.","badge","MICROSERVICES","gradient","linear-gradient(135deg, #4338ca, #818cf8)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-indigo",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-purple",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(s,a){s&1&&(i(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),r(3,"app-icon",3),t(4," API Gateway"),e(),i(5,"div",4)(6,"p"),t(7,"The "),i(8,"strong"),t(9,"API Gateway"),e(),t(10," is the single entry point. It routes requests, applies cross-cutting concerns (auth, rate limiting, logging), and aggregates responses."),e(),r(11,"app-code-block",5),e()(),i(12,"section",1)(13,"h2",2),r(14,"app-icon",6),t(15," Config"),e(),i(16,"div",7)(17,"div",8)(18,"h3",9),t(19,"Route Config"),e(),r(20,"app-code-block",5),e(),i(21,"div",8)(22,"h3",9),t(23,"Filters"),e(),r(24,"app-code-block",5),e(),i(25,"div",8)(26,"h3",9),t(27,"Rate Limiting"),e(),r(28,"app-code-block",5),e(),i(29,"div",8)(30,"h3",9),t(31,"Auth Filter"),e(),r(32,"app-code-block",5),e()()()()),s&2&&(n(3),o("size",28),n(8),o("code",a.codeIntro),n(3),o("size",28),n(6),o("code",a.codeRoutes),n(4),o("code",a.codeFilters),n(4),o("code",a.codeRate),n(4),o("code",a.codeAuth))},dependencies:[p,d,g],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.icon-purple[_ngcontent-%COMP%]{color:#7c3aed}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{m as MsGatewayComponent};
