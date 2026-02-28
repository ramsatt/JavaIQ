import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-sb-security',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="Spring Boot Security" subtitle="Secure REST APIs with JWT, OAuth2, method security, and CORS configuration." badge="SPRING BOOT" gradient="linear-gradient(135deg, #991b1b, #f87171)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-red" /> Security in Boot</h2>
        <div class="prose">
          <p>Add <code>spring-boot-starter-security</code> and ALL endpoints are secured instantly. Then customize the filter chain.</p>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Patterns</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">JWT Config</h3><app-code-block [code]="codeJwt" /></div>
          <div class="op-card"><h3 class="op-title">OAuth2 Login</h3><app-code-block [code]="codeOauth" /></div>
          <div class="op-card"><h3 class="op-title">CORS Config</h3><app-code-block [code]="codeCors" /></div>
          <div class="op-card"><h3 class="op-title">Method Security</h3><app-code-block [code]="codeMethod" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-red { color: #dc2626; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; } .prose code { background: #f1f5f9; padding: 2px 7px; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #dc2626; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class SbSecurityComponent {
  codeIntro = `@Configuration @EnableWebSecurity @EnableMethodSecurity
public class SecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http
            .csrf(csrf -> csrf.disable())
            .sessionManagement(s -> s.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/auth/**").permitAll()
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated())
            .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class)
            .build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() { return new BCryptPasswordEncoder(); }
}`;
  codeJwt = `@Service
public class JwtService {
    @Value("\${app.jwt.secret}") private String secret;
    @Value("\${app.jwt.expiration}") private long expiration;

    public String generateToken(UserDetails user) {
        return Jwts.builder()
            .subject(user.getUsername())
            .claim("roles", user.getAuthorities())
            .issuedAt(new Date())
            .expiration(new Date(System.currentTimeMillis() + expiration))
            .signWith(getSigningKey())
            .compact();
    }

    public String extractUsername(String token) {
        return Jwts.parser().verifyWith(getSigningKey())
            .build().parseSignedClaims(token)
            .getPayload().getSubject();
    }
}`;
  codeOauth = `# application.yml
spring:
  security:
    oauth2:
      client:
        registration:
          google:
            client-id: \${GOOGLE_CLIENT_ID}
            client-secret: \${GOOGLE_CLIENT_SECRET}
            scope: openid,profile,email
          github:
            client-id: \${GITHUB_CLIENT_ID}
            client-secret: \${GITHUB_CLIENT_SECRET}

// Security config
http.oauth2Login(oauth -> oauth
    .successHandler(oAuth2SuccessHandler)
    .userInfoEndpoint(u -> u.userService(customOAuth2UserService))
)`;
  codeCors = `@Bean
public CorsConfigurationSource corsSource() {
    CorsConfiguration config = new CorsConfiguration();
    config.setAllowedOrigins(List.of("http://localhost:4200"));
    config.setAllowedMethods(List.of("GET","POST","PUT","DELETE"));
    config.setAllowedHeaders(List.of("*"));
    config.setAllowCredentials(true);
    config.setMaxAge(3600L);

    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    source.registerCorsConfiguration("/api/**", config);
    return source;
}

// In SecurityFilterChain:
http.cors(cors -> cors.configurationSource(corsSource()))`;
  codeMethod = `@Service
public class AdminService {
    @PreAuthorize("hasRole('ADMIN')")
    public void deleteUser(Long id) { }

    @PreAuthorize("#userId == authentication.principal.id or hasRole('ADMIN')")
    public UserDTO getProfile(Long userId) { }

    @PostAuthorize("returnObject.owner == authentication.name")
    public Document getDoc(Long docId) { }

    @PreAuthorize("@permissionService.canEdit(authentication, #docId)")
    public void editDoc(Long docId) { }
}`;
}
