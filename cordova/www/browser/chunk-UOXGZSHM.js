import{a as p,b as d,c as u}from"./chunk-H4UXZOTD.js";import{$a as l,Pa as n,Rb as t,rb as r,sb as i,tb as e,ub as o}from"./chunk-QHT4LFPW.js";import"./chunk-NWJ5J3BN.js";var m=class s{codeIntro=`// Security flow:
// 1. Client \u2192 Auth Server (login)
// 2. Auth Server \u2192 JWT token
// 3. Client \u2192 API Gateway (JWT in header)
// 4. Gateway \u2192 validates JWT \u2192 forwards to service
// 5. Service \u2192 extracts user from JWT \u2192 authorizes

// Each service trusts the JWT without calling Auth Server
// Stateless: no session storage needed!`;codeGateway=`// API Gateway validates JWT for all routes
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
}`;codeJwt=`// Downstream service validates JWT
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
}`;codeS2s=`// Service-to-service communication security

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
// Configured at infrastructure level (Istio service mesh)`;codeBest=`// Microservices Security Checklist \u2705

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
//    \u2705 Rate limiting at gateway`;static \u0275fac=function(c){return new(c||s)};static \u0275cmp=l({type:s,selectors:[["app-topic-ms-security"]],decls:33,vars:7,consts:[["title","Microservices Security","subtitle","Secure distributed systems. OAuth2, JWT propagation, API key management, and mutual TLS.","badge","MICROSERVICES","gradient","linear-gradient(135deg, #991b1b, #f87171)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-red",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(c,a){c&1&&(i(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),o(3,"app-icon",3),t(4," Security"),e(),i(5,"div",4)(6,"p"),t(7,"In microservices, security is distributed. "),i(8,"strong"),t(9,"OAuth2 + JWT"),e(),t(10," enables stateless authentication across all services."),e(),o(11,"app-code-block",5),e()(),i(12,"section",1)(13,"h2",2),o(14,"app-icon",6),t(15," Patterns"),e(),i(16,"div",7)(17,"div",8)(18,"h3",9),t(19,"Gateway Auth"),e(),o(20,"app-code-block",5),e(),i(21,"div",8)(22,"h3",9),t(23,"JWT Propagation"),e(),o(24,"app-code-block",5),e(),i(25,"div",8)(26,"h3",9),t(27,"Service-to-Service"),e(),o(28,"app-code-block",5),e(),i(29,"div",8)(30,"h3",9),t(31,"Best Practices"),e(),o(32,"app-code-block",5),e()()()()),c&2&&(n(3),r("size",28),n(8),r("code",a.codeIntro),n(3),r("size",28),n(6),r("code",a.codeGateway),n(4),r("code",a.codeJwt),n(4),r("code",a.codeS2s),n(4),r("code",a.codeBest))},dependencies:[p,d,u],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-red[_ngcontent-%COMP%]{color:#dc2626}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{m as MsSecurityComponent};
