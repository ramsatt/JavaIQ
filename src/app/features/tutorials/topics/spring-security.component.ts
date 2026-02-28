import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-spring-security',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="Spring Security Basics" subtitle="Secure your applications. Master authentication, authorization, filter chains, CSRF protection, and method-level security." badge="SPRING FRAMEWORK" gradient="linear-gradient(135deg, #991b1b, #f87171)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-red" /> Spring Security Architecture</h2>
        <div class="prose">
          <p><strong>Spring Security</strong> is a filter-based framework. Every HTTP request passes through a chain of security filters before reaching your controller.</p>
          <ul>
            <li><strong>Authentication:</strong> WHO are you? (login, JWT, OAuth2)</li>
            <li><strong>Authorization:</strong> What CAN you do? (roles, permissions)</li>
            <li><strong>Filter Chain:</strong> CSRF → CORS → Auth → Authorization filters.</li>
          </ul>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title"><app-icon name="play" [size]="22" css="icon-red" /> Security Filter Chain</h3>
          <div class="filter-chain">
            @for (filter of filters(); track filter.name) {
              <div class="filter" [class]="filter.state"><span class="filter-icon">{{ filter.icon }}</span><span class="filter-name">{{ filter.name }}</span></div>
              @if (filter.name !== 'Controller') { <div class="chain-arrow">→</div> }
            }
          </div>
          <div class="viz-status">{{ status() }}</div>
          <div class="viz-controls">
            <button (click)="runChain()" [disabled]="isAnimating()" class="btn btn-red"><app-icon name="play" [size]="16" /> Authenticated Request</button>
            <button (click)="runDenied()" [disabled]="isAnimating()" class="btn btn-amber"><app-icon name="play" [size]="16" /> Unauthorized Request</button>
            <button (click)="resetDemo()" [disabled]="isAnimating()" class="btn btn-gray"><app-icon name="refresh-cw" [size]="16" /> Reset</button>
          </div>
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Security Patterns</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> SecurityFilterChain</h3><p class="op-desc">Configure URL-based security rules.</p><app-code-block [code]="codeConfig" /></div>
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> UserDetailsService</h3><p class="op-desc">Load user from database for authentication.</p><app-code-block [code]="codeUserDetails" /></div>
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Method Security</h3><p class="op-desc">Fine-grained access control on service methods.</p><app-code-block [code]="codeMethod" /></div>
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> JWT Authentication</h3><p class="op-desc">Stateless auth with JSON Web Tokens.</p><app-code-block [code]="codeJwt" /></div>
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="briefcase" [size]="28" css="icon-red" /> Real-Time Use Cases</h2>
        <div class="use-cases">
          <div class="use-case red"><div class="use-num red-bg">1</div><div><h4 class="use-title">API Authentication</h4><p class="use-desc">JWT tokens in Authorization header. Stateless — no server-side sessions. Perfect for microservices and mobile apps.</p></div></div>
          <div class="use-case blue"><div class="use-num blue-bg">2</div><div><h4 class="use-title">Role-Based Access</h4><p class="use-desc"><code>&#64;PreAuthorize("hasRole('ADMIN')")</code> on admin endpoints. Regular users get 403 Forbidden automatically.</p></div></div>
          <div class="use-case purple"><div class="use-num purple-bg">3</div><div><h4 class="use-title">OAuth2 / Social Login</h4><p class="use-desc">Spring Security OAuth2 client handles Google, GitHub, Facebook login. One config class, entire OAuth flow managed.</p></div></div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-red { color: #dc2626; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; } .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; } .prose li { margin-bottom: 8px; } .prose strong { color: #0f172a; font-weight: 700; } .prose code { background: #f1f5f9; padding: 2px 7px; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #dc2626; }
    .viz-card { background: #fff; border-radius: 18px; border: 1px solid #e2e8f0; box-shadow: 0 4px 16px rgba(0,0,0,0.05); padding: 28px 24px; } .viz-title { display: flex; align-items: center; gap: 10px; font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0 0 24px; }
    .filter-chain { display: flex; align-items: center; gap: 6px; overflow-x: auto; padding-bottom: 8px; margin-bottom: 20px; }
    .filter { padding: 10px 12px; border-radius: 10px; border: 2px solid #e2e8f0; text-align: center; min-width: 65px; transition: all 0.3s; }
    .filter.active { border-color: #16a34a; background: #f0fdf4; } .filter.denied { border-color: #dc2626; background: #fef2f2; }
    .filter-icon { display: block; font-size: 0.9rem; margin-bottom: 2px; } .filter-name { display: block; font-size: 0.5rem; font-weight: 700; color: #0f172a; }
    .chain-arrow { font-size: 0.8rem; color: #94a3b8; }
    .viz-status { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px 16px; text-align: center; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; color: #334155; margin-bottom: 20px; }
    .viz-controls { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; }
    .btn { display: inline-flex; align-items: center; gap: 7px; padding: 10px 18px; border-radius: 10px; font-size: 0.78rem; font-weight: 600; border: none; cursor: pointer; transition: all 0.2s; } .btn:disabled { opacity: 0.5; cursor: not-allowed; } .btn-red { background: #dc2626; color: #fff; } .btn-amber { background: #d97706; color: #fff; } .btn-gray { background: #e2e8f0; color: #334155; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.06); } .op-title { display: flex; align-items: center; gap: 8px; font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; } .op-desc { font-size: 0.78rem; color: #64748b; line-height: 1.55; margin: 0; }
    .use-cases { display: flex; flex-direction: column; gap: 12px; } .use-case { display: flex; gap: 16px; padding: 20px; border-radius: 14px; border: 1px solid; } .use-case.red { background: #fef2f2; border-color: #fecaca; } .use-case.blue { background: #eff6ff; border-color: #bfdbfe; } .use-case.purple { background: #faf5ff; border-color: #d8b4fe; }
    .use-num { width: 34px; height: 34px; min-width: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 0.78rem; font-weight: 800; } .red-bg { background: #dc2626; } .blue-bg { background: #3b82f6; } .purple-bg { background: #8b5cf6; }
    .use-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 4px; } .use-desc { font-size: 0.78rem; line-height: 1.55; margin: 0; color: #334155; } .use-desc code { background: rgba(0,0,0,0.06); padding: 1px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; }
  `
})
export class SpringSecurityComponent {
  filters = signal([
    { name: 'CSRF', icon: '🛡️', state: '' }, { name: 'CORS', icon: '🌐', state: '' }, { name: 'Auth', icon: '🔑', state: '' }, { name: 'Authz', icon: '✅', state: '' }, { name: 'Controller', icon: '⚙️', state: '' }
  ]);
  status = signal('Every request passes through the security filter chain.');
  isAnimating = signal(false);
  codeIntro = `@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(
            HttpSecurity http) throws Exception {
        return http
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/public/**").permitAll()
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated())
            .httpBasic(Customizer.withDefaults())
            .build();
    }
}`;
  codeConfig = `http
  .authorizeHttpRequests(auth -> auth
    // Public endpoints
    .requestMatchers("/", "/login", "/register")
        .permitAll()
    // Role-based
    .requestMatchers("/admin/**")
        .hasRole("ADMIN")
    .requestMatchers("/api/**")
        .hasAnyRole("USER", "ADMIN")
    // Method-based
    .requestMatchers(HttpMethod.DELETE, "/api/**")
        .hasRole("ADMIN")
    // Everything else
    .anyRequest().authenticated()
  )`;
  codeUserDetails = `@Service
public class CustomUserDetailsService
    implements UserDetailsService {

    private final UserRepository userRepo;

    public UserDetails loadUserByUsername(String username)
            throws UsernameNotFoundException {
        User user = userRepo.findByUsername(username)
            .orElseThrow(() ->
                new UsernameNotFoundException(username));

        return org.springframework.security.core.userdetails
            .User.builder()
            .username(user.getUsername())
            .password(user.getPassword())
            .roles(user.getRoles().toArray(new String[0]))
            .build();
    }
}`;
  codeMethod = `@EnableMethodSecurity
@Configuration
public class MethodSecurityConfig { }

@Service
public class UserService {

    @PreAuthorize("hasRole('ADMIN')")
    public void deleteUser(Long id) { }

    @PreAuthorize("#userId == authentication.principal.id")
    public User getProfile(Long userId) { }

    @PostAuthorize("returnObject.owner == authentication.name")
    public Document getDocument(Long docId) { }
}`;
  codeJwt = `// JWT Filter
public class JwtAuthFilter extends OncePerRequestFilter {
    protected void doFilterInternal(
            HttpServletRequest req,
            HttpServletResponse res,
            FilterChain chain) throws ... {

        String token = req.getHeader("Authorization");
        if (token != null && token.startsWith("Bearer ")) {
            String jwt = token.substring(7);
            String username = jwtService.extractUsername(jwt);

            if (jwtService.isValid(jwt)) {
                var auth = new UsernamePasswordAuthenticationToken(
                    username, null, authorities);
                SecurityContextHolder.getContext()
                    .setAuthentication(auth);
            }
        }
        chain.doFilter(req, res);
    }
}`;
  private sleep(ms: number): Promise<void> { return new Promise(r => setTimeout(r, ms)); }
  async runChain() {
    if (this.isAnimating()) return; this.isAnimating.set(true);
    const labels = ['CSRF token valid...', 'CORS headers checked...', 'JWT token verified — user authenticated! 🔑', 'User has ROLE_ADMIN — authorized! ✅', 'Request reaches controller. 200 OK ✅'];
    for (let i = 0; i < 5; i++) {
      this.filters.update(f => f.map((fi, j) => j === i ? { ...fi, state: 'active' } : j < i ? { ...fi, state: 'active' } : fi));
      this.status.set(labels[i]); await this.sleep(800);
    }
    this.isAnimating.set(false);
  }
  async runDenied() {
    if (this.isAnimating()) return; this.isAnimating.set(true);
    this.filters.update(f => f.map((fi, j) => j === 0 ? { ...fi, state: 'active' } : fi));
    this.status.set('CSRF check passed...'); await this.sleep(800);
    this.filters.update(f => f.map((fi, j) => j <= 1 ? { ...fi, state: 'active' } : fi));
    this.status.set('CORS check passed...'); await this.sleep(800);
    this.filters.update(f => f.map((fi, j) => j <= 1 ? { ...fi, state: 'active' } : j === 2 ? { ...fi, state: 'denied' } : fi));
    this.status.set('No valid token! 401 Unauthorized ❌ — request blocked at Auth filter.');
    this.isAnimating.set(false);
  }
  resetDemo() {
    this.filters.set([ { name: 'CSRF', icon: '🛡️', state: '' }, { name: 'CORS', icon: '🌐', state: '' }, { name: 'Auth', icon: '🔑', state: '' }, { name: 'Authz', icon: '✅', state: '' }, { name: 'Controller', icon: '⚙️', state: '' } ]);
    this.status.set('Every request passes through the security filter chain.'); this.isAnimating.set(false);
  }
}
