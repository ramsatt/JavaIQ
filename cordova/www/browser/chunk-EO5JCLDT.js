import {
  CodeBlockComponent,
  IconComponent,
  TutorialLayoutComponent
} from "./chunk-5ZPIB2CR.js";
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
} from "./chunk-L6VISU4K.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/ms-security.component.ts
var MsSecurityComponent = class _MsSecurityComponent {
  codeIntro = `// Security flow:
// 1. Client \u2192 Auth Server (login)
// 2. Auth Server \u2192 JWT token
// 3. Client \u2192 API Gateway (JWT in header)
// 4. Gateway \u2192 validates JWT \u2192 forwards to service
// 5. Service \u2192 extracts user from JWT \u2192 authorizes

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

// 2. mTLS (mutual TLS) \u2014 services authenticate each other
// Configured at infrastructure level (Istio service mesh)`;
  codeBest = `// Microservices Security Checklist \u2705

// 1. Authentication
//    \u2705 OAuth2 + JWT at API Gateway
//    \u2705 Short-lived tokens (15 min)
//    \u2705 Refresh tokens (secure, httpOnly cookie)

// 2. Authorization
//    \u2705 Role-based access (RBAC) in JWT claims
//    \u2705 @PreAuthorize in each service
//    \u2705 Principle of least privilege

// 3. Communication
//    \u2705 HTTPS everywhere
//    \u2705 mTLS for service-to-service
//    \u2705 JWT propagation between services

// 4. Infrastructure
//    \u2705 Secrets in Vault, not env vars
//    \u2705 Network policies in K8s
//    \u2705 Rate limiting at gateway`;
  static \u0275fac = function MsSecurityComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MsSecurityComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MsSecurityComponent, selectors: [["app-topic-ms-security"]], decls: 33, vars: 7, consts: [["title", "Microservices Security", "subtitle", "Secure distributed systems. OAuth2, JWT propagation, API key management, and mutual TLS.", "badge", "MICROSERVICES", "gradient", "linear-gradient(135deg, #991b1b, #f87171)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-red", 3, "size"], [1, "prose"], [3, "code"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"]], template: function MsSecurityComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Security");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7, "In microservices, security is distributed. ");
      \u0275\u0275elementStart(8, "strong");
      \u0275\u0275text(9, "OAuth2 + JWT");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " enables stateless authentication across all services.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "section", 1)(13, "h2", 2);
      \u0275\u0275element(14, "app-icon", 6);
      \u0275\u0275text(15, " Patterns");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 7)(17, "div", 8)(18, "h3", 9);
      \u0275\u0275text(19, "Gateway Auth");
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 8)(22, "h3", 9);
      \u0275\u0275text(23, "JWT Propagation");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 8)(26, "h3", 9);
      \u0275\u0275text(27, "Service-to-Service");
      \u0275\u0275elementEnd();
      \u0275\u0275element(28, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 8)(30, "h3", 9);
      \u0275\u0275text(31, "Best Practices");
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
      \u0275\u0275property("code", ctx.codeGateway);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeJwt);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeS2s);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeBest);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ["\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-red[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=ms-security.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MsSecurityComponent, [{
    type: Component,
    args: [{ selector: "app-topic-ms-security", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
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
  `, styles: ["/* angular:styles/component:css;1ee42a2cc863167e2d72aae7bff69d10566960b45c9f918822b56c174d26e297;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/features/tutorials/topics/ms-security.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-red {\n  color: #dc2626;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=ms-security.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MsSecurityComponent, { className: "MsSecurityComponent", filePath: "src/app/features/tutorials/topics/ms-security.component.ts", lineNumber: 33 });
})();
export {
  MsSecurityComponent
};
//# sourceMappingURL=chunk-EO5JCLDT.js.map
