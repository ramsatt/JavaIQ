import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-ms-gateway',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
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
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-indigo { color: #4f46e5; } .icon-purple { color: #7c3aed; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class MsGatewayComponent {
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
}
