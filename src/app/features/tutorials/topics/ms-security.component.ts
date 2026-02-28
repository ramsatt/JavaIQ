import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-ms-security',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="Microservices Security" subtitle="Secure distributed systems. OAuth2, JWT propagation, API key management, and mutual TLS." badge="MICROSERVICES" gradient="linear-gradient(135deg, #991b1b, #f87171)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-red" /> Security</h2>
        <div class="prose"><p>In microservices, security is distributed. <strong>OAuth2 + JWT</strong> enables stateless authentication across all services.</p><app-code-block [code]="codeIntro" /></div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Patterns</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Gateway Auth</h3><app-code-block [code]="codeGateway" /></div>
          <div class="op-card"><h3 class="op-title">JWT Propagation</h3><app-code-block [code]="codeJwt" /></div>
          <div class="op-card"><h3 class="op-title">Service-to-Service</h3><app-code-block [code]="codeS2s" /></div>
          <div class="op-card"><h3 class="op-title">Best Practices</h3><app-code-block [code]="codeBest" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-red { color: #dc2626; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class MsSecurityComponent {
  codeIntro = `// Security flow:
// 1. Client → Auth Server (login)
// 2. Auth Server → JWT token
// 3. Client → API Gateway (JWT in header)
// 4. Gateway → validates JWT → forwards to service
// 5. Service → extracts user from JWT → authorizes

// Each service trusts the JWT without calling Auth Server
// Stateless: no session storage needed!`;
  codeGateway = `// API Gateway validates JWT for all routes
@Bean
public SecurityWebFilterChain securityFilterChain(ServerHttpSecurity http) {
    return http
        .csrf(ServerHttpSecurity.CsrfSpec::disable)
        .authorizeExchange(auth -> auth
            .pathMatchers("/api/auth/**").permitAll()
            .pathMatchers("/api/admin/**").hasRole("ADMIN")
            .anyExchange().authenticated())
        .oauth2ResourceServer(oauth2 -> oauth2
            .jwt(jwt -> jwt.jwtDecoder(jwtDecoder())))
        .build();
}

// Forward user info to downstream services
@Component
public class AuthHeaderFilter implements GlobalFilter {
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        String token = exchange.getRequest().getHeaders().getFirst("Authorization");
        // Forward token to downstream services
        return chain.filter(exchange);
    }
}`;
  codeJwt = `// Downstream service validates JWT
@Bean
public SecurityFilterChain filterChain(HttpSecurity http) {
    return http
        .oauth2ResourceServer(oauth2 -> oauth2.jwt(Customizer.withDefaults()))
        .build();
}

# application.yml
spring:
  security:
    oauth2:
      resourceserver:
        jwt:
          issuer-uri: http://auth-server:8080/realms/myapp
          # Or use JWK set URI for public key verification
          jwk-set-uri: http://auth-server:8080/realms/myapp/protocol/openid-connect/certs

// Access user info from JWT
@GetMapping("/profile")
public UserProfile getProfile(@AuthenticationPrincipal Jwt jwt) {
    String userId = jwt.getSubject();
    String email = jwt.getClaim("email");
}`;
  codeS2s = `// Service-to-service communication security

// 1. Propagate JWT (FeignClient)
@FeignClient(name = "order-service", configuration = AuthFeignConfig.class)
public interface OrderClient { }

public class AuthFeignConfig {
    @Bean
    public RequestInterceptor authInterceptor() {
        return template -> {
            String token = SecurityContextHolder.getContext()
                .getAuthentication().getCredentials().toString();
            template.header("Authorization", "Bearer " + token);
        };
    }
}

// 2. mTLS (mutual TLS) — services authenticate each other
// Configured at infrastructure level (Istio service mesh)`;
  codeBest = `// Microservices Security Checklist ✅

// 1. Authentication
//    ✅ OAuth2 + JWT at API Gateway
//    ✅ Short-lived tokens (15 min)
//    ✅ Refresh tokens (secure, httpOnly cookie)

// 2. Authorization
//    ✅ Role-based access (RBAC) in JWT claims
//    ✅ @PreAuthorize in each service
//    ✅ Principle of least privilege

// 3. Communication
//    ✅ HTTPS everywhere
//    ✅ mTLS for service-to-service
//    ✅ JWT propagation between services

// 4. Infrastructure
//    ✅ Secrets in Vault, not env vars
//    ✅ Network policies in K8s
//    ✅ Rate limiting at gateway`;
}
