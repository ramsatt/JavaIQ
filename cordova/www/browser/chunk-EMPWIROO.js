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

// src/app/features/tutorials/topics/ms-gateway.component.ts
var MsGatewayComponent = class _MsGatewayComponent {
  codeIntro = `@SpringBootApplication
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
            - Path=/api/orders/**`;
  codeRoutes = `spring:
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
            - Between=2024-01-01T00:00:00Z, 2025-01-01T00:00:00Z`;
  codeFilters = `// Global filter (applies to ALL routes)
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
}`;
  codeRate = `# Rate limiting with Redis
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
}`;
  codeAuth = `// JWT validation filter
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
}`;
  static \u0275fac = function MsGatewayComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MsGatewayComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MsGatewayComponent, selectors: [["app-topic-ms-gateway"]], decls: 33, vars: 7, consts: [["title", "API Gateway", "subtitle", "Single entry point for all clients. Spring Cloud Gateway, routing, filters, rate limiting, and authentication.", "badge", "MICROSERVICES", "gradient", "linear-gradient(135deg, #4338ca, #818cf8)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-indigo", 3, "size"], [1, "prose"], [3, "code"], ["name", "code", "css", "icon-purple", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"]], template: function MsGatewayComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " API Gateway");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7, "The ");
      \u0275\u0275elementStart(8, "strong");
      \u0275\u0275text(9, "API Gateway");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " is the single entry point. It routes requests, applies cross-cutting concerns (auth, rate limiting, logging), and aggregates responses.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "section", 1)(13, "h2", 2);
      \u0275\u0275element(14, "app-icon", 6);
      \u0275\u0275text(15, " Config");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 7)(17, "div", 8)(18, "h3", 9);
      \u0275\u0275text(19, "Route Config");
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 8)(22, "h3", 9);
      \u0275\u0275text(23, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 8)(26, "h3", 9);
      \u0275\u0275text(27, "Rate Limiting");
      \u0275\u0275elementEnd();
      \u0275\u0275element(28, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 8)(30, "h3", 9);
      \u0275\u0275text(31, "Auth Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275element(32, "app-code-block", 5);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(8);
      \u0275\u0275property("code", ctx.codeIntro);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(6);
      \u0275\u0275property("code", ctx.codeRoutes);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeFilters);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeRate);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeAuth);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ["\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.icon-purple[_ngcontent-%COMP%] {\n  color: #7c3aed;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=ms-gateway.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MsGatewayComponent, [{
    type: Component,
    args: [{ selector: "app-topic-ms-gateway", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout title="API Gateway" subtitle="Single entry point for all clients. Spring Cloud Gateway, routing, filters, rate limiting, and authentication." badge="MICROSERVICES" gradient="linear-gradient(135deg, #4338ca, #818cf8)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-indigo" /> API Gateway</h2>
        <div class="prose"><p>The <strong>API Gateway</strong> is the single entry point. It routes requests, applies cross-cutting concerns (auth, rate limiting, logging), and aggregates responses.</p><app-code-block [code]="codeIntro" /></div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-purple" /> Config</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Route Config</h3><app-code-block [code]="codeRoutes" /></div>
          <div class="op-card"><h3 class="op-title">Filters</h3><app-code-block [code]="codeFilters" /></div>
          <div class="op-card"><h3 class="op-title">Rate Limiting</h3><app-code-block [code]="codeRate" /></div>
          <div class="op-card"><h3 class="op-title">Auth Filter</h3><app-code-block [code]="codeAuth" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ["/* angular:styles/component:css;f6592c87288417d3ae543d382647fc43f886f07450a9af352fc337c25b3984ff;/Users/sathishkumarramalingam/projects/JavaIQ/.claude/worktrees/goofy-haibt/src/app/features/tutorials/topics/ms-gateway.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.icon-purple {\n  color: #7c3aed;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=ms-gateway.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MsGatewayComponent, { className: "MsGatewayComponent", filePath: "src/app/features/tutorials/topics/ms-gateway.component.ts", lineNumber: 33 });
})();
export {
  MsGatewayComponent
};
//# sourceMappingURL=chunk-EMPWIROO.js.map
