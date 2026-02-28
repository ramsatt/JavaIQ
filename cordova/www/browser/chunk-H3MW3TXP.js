import {
  CodeBlockComponent,
  TutorialLayoutComponent
} from "./chunk-ACGKXV3L.js";
import {
  IconComponent
} from "./chunk-GCMLYE3M.js";
import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-6OY2Y3BE.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/spring-security.component.ts
var _forTrack0 = ($index, $item) => $item.name;
function SpringSecurityComponent_For_31_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1, "\u2192");
    \u0275\u0275elementEnd();
  }
}
function SpringSecurityComponent_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "span", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 35);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(5, SpringSecurityComponent_For_31_Conditional_5_Template, 2, 0, "div", 36);
  }
  if (rf & 2) {
    const filter_r1 = ctx.$implicit;
    \u0275\u0275classMap(filter_r1.state);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(filter_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(filter_r1.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(filter_r1.name !== "Controller" ? 5 : -1);
  }
}
var SpringSecurityComponent = class _SpringSecurityComponent {
  filters = signal([
    { name: "CSRF", icon: "\u{1F6E1}\uFE0F", state: "" },
    { name: "CORS", icon: "\u{1F310}", state: "" },
    { name: "Auth", icon: "\u{1F511}", state: "" },
    { name: "Authz", icon: "\u2705", state: "" },
    { name: "Controller", icon: "\u2699\uFE0F", state: "" }
  ], ...ngDevMode ? [{ debugName: "filters" }] : []);
  status = signal("Every request passes through the security filter chain.", ...ngDevMode ? [{ debugName: "status" }] : []);
  isAnimating = signal(false, ...ngDevMode ? [{ debugName: "isAnimating" }] : []);
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
  sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }
  async runChain() {
    if (this.isAnimating())
      return;
    this.isAnimating.set(true);
    const labels = ["CSRF token valid...", "CORS headers checked...", "JWT token verified \u2014 user authenticated! \u{1F511}", "User has ROLE_ADMIN \u2014 authorized! \u2705", "Request reaches controller. 200 OK \u2705"];
    for (let i = 0; i < 5; i++) {
      this.filters.update((f) => f.map((fi, j) => j === i ? __spreadProps(__spreadValues({}, fi), { state: "active" }) : j < i ? __spreadProps(__spreadValues({}, fi), { state: "active" }) : fi));
      this.status.set(labels[i]);
      await this.sleep(800);
    }
    this.isAnimating.set(false);
  }
  async runDenied() {
    if (this.isAnimating())
      return;
    this.isAnimating.set(true);
    this.filters.update((f) => f.map((fi, j) => j === 0 ? __spreadProps(__spreadValues({}, fi), { state: "active" }) : fi));
    this.status.set("CSRF check passed...");
    await this.sleep(800);
    this.filters.update((f) => f.map((fi, j) => j <= 1 ? __spreadProps(__spreadValues({}, fi), { state: "active" }) : fi));
    this.status.set("CORS check passed...");
    await this.sleep(800);
    this.filters.update((f) => f.map((fi, j) => j <= 1 ? __spreadProps(__spreadValues({}, fi), { state: "active" }) : j === 2 ? __spreadProps(__spreadValues({}, fi), { state: "denied" }) : fi));
    this.status.set("No valid token! 401 Unauthorized \u274C \u2014 request blocked at Auth filter.");
    this.isAnimating.set(false);
  }
  resetDemo() {
    this.filters.set([{ name: "CSRF", icon: "\u{1F6E1}\uFE0F", state: "" }, { name: "CORS", icon: "\u{1F310}", state: "" }, { name: "Auth", icon: "\u{1F511}", state: "" }, { name: "Authz", icon: "\u2705", state: "" }, { name: "Controller", icon: "\u2699\uFE0F", state: "" }]);
    this.status.set("Every request passes through the security filter chain.");
    this.isAnimating.set(false);
  }
  static \u0275fac = function SpringSecurityComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SpringSecurityComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SpringSecurityComponent, selectors: [["app-topic-spring-security"]], decls: 108, vars: 20, consts: [["title", "Spring Security Basics", "subtitle", "Secure your applications. Master authentication, authorization, filter chains, CSRF protection, and method-level security.", "badge", "SPRING FRAMEWORK", "gradient", "linear-gradient(135deg, #991b1b, #f87171)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-red", 3, "size"], [1, "prose"], [3, "code"], [1, "viz-card"], [1, "viz-title"], ["name", "play", "css", "icon-red", 3, "size"], [1, "filter-chain"], [1, "viz-status"], [1, "viz-controls"], [1, "btn", "btn-red", 3, "click", "disabled"], ["name", "play", 3, "size"], [1, "btn", "btn-amber", 3, "click", "disabled"], [1, "btn", "btn-gray", 3, "click", "disabled"], ["name", "refresh-cw", 3, "size"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"], ["name", "arrow-right", "css", "icon-indigo", 3, "size"], [1, "op-desc"], ["name", "briefcase", "css", "icon-red", 3, "size"], [1, "use-cases"], [1, "use-case", "red"], [1, "use-num", "red-bg"], [1, "use-title"], [1, "use-desc"], [1, "use-case", "blue"], [1, "use-num", "blue-bg"], [1, "use-case", "purple"], [1, "use-num", "purple-bg"], [1, "filter"], [1, "filter-icon"], [1, "filter-name"], [1, "chain-arrow"]], template: function SpringSecurityComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Spring Security Architecture");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p")(7, "strong");
      \u0275\u0275text(8, "Spring Security");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, " is a filter-based framework. Every HTTP request passes through a chain of security filters before reaching your controller.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "ul")(11, "li")(12, "strong");
      \u0275\u0275text(13, "Authentication:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(14, " WHO are you? (login, JWT, OAuth2)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "li")(16, "strong");
      \u0275\u0275text(17, "Authorization:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(18, " What CAN you do? (roles, permissions)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "li")(20, "strong");
      \u0275\u0275text(21, "Filter Chain:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(22, " CSRF \u2192 CORS \u2192 Auth \u2192 Authorization filters.");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(23, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "section", 1)(25, "div", 6)(26, "h3", 7);
      \u0275\u0275element(27, "app-icon", 8);
      \u0275\u0275text(28, " Security Filter Chain");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 9);
      \u0275\u0275repeaterCreate(30, SpringSecurityComponent_For_31_Template, 6, 5, null, null, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 10);
      \u0275\u0275text(33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 11)(35, "button", 12);
      \u0275\u0275listener("click", function SpringSecurityComponent_Template_button_click_35_listener() {
        return ctx.runChain();
      });
      \u0275\u0275element(36, "app-icon", 13);
      \u0275\u0275text(37, " Authenticated Request");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "button", 14);
      \u0275\u0275listener("click", function SpringSecurityComponent_Template_button_click_38_listener() {
        return ctx.runDenied();
      });
      \u0275\u0275element(39, "app-icon", 13);
      \u0275\u0275text(40, " Unauthorized Request");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "button", 15);
      \u0275\u0275listener("click", function SpringSecurityComponent_Template_button_click_41_listener() {
        return ctx.resetDemo();
      });
      \u0275\u0275element(42, "app-icon", 16);
      \u0275\u0275text(43, " Reset");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(44, "section", 1)(45, "h2", 2);
      \u0275\u0275element(46, "app-icon", 17);
      \u0275\u0275text(47, " Security Patterns");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 18)(49, "div", 19)(50, "h3", 20);
      \u0275\u0275element(51, "app-icon", 21);
      \u0275\u0275text(52, " SecurityFilterChain");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "p", 22);
      \u0275\u0275text(54, "Configure URL-based security rules.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(55, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "div", 19)(57, "h3", 20);
      \u0275\u0275element(58, "app-icon", 21);
      \u0275\u0275text(59, " UserDetailsService");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "p", 22);
      \u0275\u0275text(61, "Load user from database for authentication.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(62, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "div", 19)(64, "h3", 20);
      \u0275\u0275element(65, "app-icon", 21);
      \u0275\u0275text(66, " Method Security");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "p", 22);
      \u0275\u0275text(68, "Fine-grained access control on service methods.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(69, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "div", 19)(71, "h3", 20);
      \u0275\u0275element(72, "app-icon", 21);
      \u0275\u0275text(73, " JWT Authentication");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "p", 22);
      \u0275\u0275text(75, "Stateless auth with JSON Web Tokens.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(76, "app-code-block", 5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(77, "section", 1)(78, "h2", 2);
      \u0275\u0275element(79, "app-icon", 23);
      \u0275\u0275text(80, " Real-Time Use Cases");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "div", 24)(82, "div", 25)(83, "div", 26);
      \u0275\u0275text(84, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "div")(86, "h4", 27);
      \u0275\u0275text(87, "API Authentication");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "p", 28);
      \u0275\u0275text(89, "JWT tokens in Authorization header. Stateless \u2014 no server-side sessions. Perfect for microservices and mobile apps.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(90, "div", 29)(91, "div", 30);
      \u0275\u0275text(92, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "div")(94, "h4", 27);
      \u0275\u0275text(95, "Role-Based Access");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "p", 28)(97, "code");
      \u0275\u0275text(98, `@PreAuthorize("hasRole('ADMIN')")`);
      \u0275\u0275elementEnd();
      \u0275\u0275text(99, " on admin endpoints. Regular users get 403 Forbidden automatically.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(100, "div", 31)(101, "div", 32);
      \u0275\u0275text(102, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "div")(104, "h4", 27);
      \u0275\u0275text(105, "OAuth2 / Social Login");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "p", 28);
      \u0275\u0275text(107, "Spring Security OAuth2 client handles Google, GitHub, Facebook login. One config class, entire OAuth flow managed.");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(20);
      \u0275\u0275property("code", ctx.codeIntro);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 22);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.filters());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.status());
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isAnimating());
      \u0275\u0275advance();
      \u0275\u0275property("size", 16);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isAnimating());
      \u0275\u0275advance();
      \u0275\u0275property("size", 16);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isAnimating());
      \u0275\u0275advance();
      \u0275\u0275property("size", 16);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(5);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeConfig);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeUserDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeMethod);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeJwt);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ['\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-red[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 700;\n}\n.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #dc2626;\n}\n.viz-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);\n  padding: 28px 24px;\n}\n.viz-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.filter-chain[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  overflow-x: auto;\n  padding-bottom: 8px;\n  margin-bottom: 20px;\n}\n.filter[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border-radius: 10px;\n  border: 2px solid #e2e8f0;\n  text-align: center;\n  min-width: 65px;\n  transition: all 0.3s;\n}\n.filter.active[_ngcontent-%COMP%] {\n  border-color: #16a34a;\n  background: #f0fdf4;\n}\n.filter.denied[_ngcontent-%COMP%] {\n  border-color: #dc2626;\n  background: #fef2f2;\n}\n.filter-icon[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.9rem;\n  margin-bottom: 2px;\n}\n.filter-name[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.5rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.chain-arrow[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #94a3b8;\n}\n.viz-status[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n  margin-bottom: 20px;\n}\n.viz-controls[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-red[_ngcontent-%COMP%] {\n  background: #dc2626;\n  color: #fff;\n}\n.btn-amber[_ngcontent-%COMP%] {\n  background: #d97706;\n  color: #fff;\n}\n.btn-gray[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #334155;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.op-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n.use-cases[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.use-case[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 14px;\n  border: 1px solid;\n}\n.use-case.red[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border-color: #fecaca;\n}\n.use-case.blue[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.use-case.purple[_ngcontent-%COMP%] {\n  background: #faf5ff;\n  border-color: #d8b4fe;\n}\n.use-num[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.red-bg[_ngcontent-%COMP%] {\n  background: #dc2626;\n}\n.blue-bg[_ngcontent-%COMP%] {\n  background: #3b82f6;\n}\n.purple-bg[_ngcontent-%COMP%] {\n  background: #8b5cf6;\n}\n.use-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.use-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  line-height: 1.55;\n  margin: 0;\n  color: #334155;\n}\n.use-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.06);\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.72rem;\n}\n/*# sourceMappingURL=spring-security.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpringSecurityComponent, [{
    type: Component,
    args: [{ selector: "app-topic-spring-security", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout title="Spring Security Basics" subtitle="Secure your applications. Master authentication, authorization, filter chains, CSRF protection, and method-level security." badge="SPRING FRAMEWORK" gradient="linear-gradient(135deg, #991b1b, #f87171)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-red" /> Spring Security Architecture</h2>
        <div class="prose">
          <p><strong>Spring Security</strong> is a filter-based framework. Every HTTP request passes through a chain of security filters before reaching your controller.</p>
          <ul>
            <li><strong>Authentication:</strong> WHO are you? (login, JWT, OAuth2)</li>
            <li><strong>Authorization:</strong> What CAN you do? (roles, permissions)</li>
            <li><strong>Filter Chain:</strong> CSRF \u2192 CORS \u2192 Auth \u2192 Authorization filters.</li>
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
              @if (filter.name !== 'Controller') { <div class="chain-arrow">\u2192</div> }
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
          <div class="use-case red"><div class="use-num red-bg">1</div><div><h4 class="use-title">API Authentication</h4><p class="use-desc">JWT tokens in Authorization header. Stateless \u2014 no server-side sessions. Perfect for microservices and mobile apps.</p></div></div>
          <div class="use-case blue"><div class="use-num blue-bg">2</div><div><h4 class="use-title">Role-Based Access</h4><p class="use-desc"><code>&#64;PreAuthorize("hasRole('ADMIN')")</code> on admin endpoints. Regular users get 403 Forbidden automatically.</p></div></div>
          <div class="use-case purple"><div class="use-num purple-bg">3</div><div><h4 class="use-title">OAuth2 / Social Login</h4><p class="use-desc">Spring Security OAuth2 client handles Google, GitHub, Facebook login. One config class, entire OAuth flow managed.</p></div></div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ['/* angular:styles/component:css;aa027184eebbc757c6df335064e7239002075aa4b8a2ab391749793299f7d877;D:/A21/JavaIQ/src/app/features/tutorials/topics/spring-security.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-red {\n  color: #dc2626;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.prose ul {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose li {\n  margin-bottom: 8px;\n}\n.prose strong {\n  color: #0f172a;\n  font-weight: 700;\n}\n.prose code {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #dc2626;\n}\n.viz-card {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);\n  padding: 28px 24px;\n}\n.viz-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.filter-chain {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  overflow-x: auto;\n  padding-bottom: 8px;\n  margin-bottom: 20px;\n}\n.filter {\n  padding: 10px 12px;\n  border-radius: 10px;\n  border: 2px solid #e2e8f0;\n  text-align: center;\n  min-width: 65px;\n  transition: all 0.3s;\n}\n.filter.active {\n  border-color: #16a34a;\n  background: #f0fdf4;\n}\n.filter.denied {\n  border-color: #dc2626;\n  background: #fef2f2;\n}\n.filter-icon {\n  display: block;\n  font-size: 0.9rem;\n  margin-bottom: 2px;\n}\n.filter-name {\n  display: block;\n  font-size: 0.5rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.chain-arrow {\n  font-size: 0.8rem;\n  color: #94a3b8;\n}\n.viz-status {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n  margin-bottom: 20px;\n}\n.viz-controls {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-red {\n  background: #dc2626;\n  color: #fff;\n}\n.btn-amber {\n  background: #d97706;\n  color: #fff;\n}\n.btn-gray {\n  background: #e2e8f0;\n  color: #334155;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.op-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc {\n  font-size: 0.78rem;\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n.use-cases {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.use-case {\n  display: flex;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 14px;\n  border: 1px solid;\n}\n.use-case.red {\n  background: #fef2f2;\n  border-color: #fecaca;\n}\n.use-case.blue {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.use-case.purple {\n  background: #faf5ff;\n  border-color: #d8b4fe;\n}\n.use-num {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.red-bg {\n  background: #dc2626;\n}\n.blue-bg {\n  background: #3b82f6;\n}\n.purple-bg {\n  background: #8b5cf6;\n}\n.use-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.use-desc {\n  font-size: 0.78rem;\n  line-height: 1.55;\n  margin: 0;\n  color: #334155;\n}\n.use-desc code {\n  background: rgba(0, 0, 0, 0.06);\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.72rem;\n}\n/*# sourceMappingURL=spring-security.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpringSecurityComponent, { className: "SpringSecurityComponent", filePath: "src/app/features/tutorials/topics/spring-security.component.ts", lineNumber: 78 });
})();
export {
  SpringSecurityComponent
};
//# sourceMappingURL=chunk-H3MW3TXP.js.map
