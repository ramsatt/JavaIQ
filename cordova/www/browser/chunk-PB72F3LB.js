import{a as M,b as _,c as O}from"./chunk-4EMTR65D.js";import{Hb as v,Ib as t,Jb as f,Na as r,Ya as b,hb as x,ib as C,la as m,lb as S,mb as y,nb as a,ob as n,pb as e,qb as s,xb as g}from"./chunk-X3QUIMOS.js";import{a as d,b as p}from"./chunk-NWJ5J3BN.js";var E=(l,c)=>c.name;function z(l,c){l&1&&(n(0,"div",36),t(1,"\u2192"),e())}function A(l,c){if(l&1&&(n(0,"div",33)(1,"span",34),t(2),e(),n(3,"span",35),t(4),e()(),x(5,z,2,0,"div",36)),l&2){let i=c.$implicit;v(i.state),r(2),f(i.icon),r(2),f(i.name),r(),C(i.name!=="Controller"?5:-1)}}var P=class l{filters=m([{name:"CSRF",icon:"\u{1F6E1}\uFE0F",state:""},{name:"CORS",icon:"\u{1F310}",state:""},{name:"Auth",icon:"\u{1F511}",state:""},{name:"Authz",icon:"\u2705",state:""},{name:"Controller",icon:"\u2699\uFE0F",state:""}]);status=m("Every request passes through the security filter chain.");isAnimating=m(!1);codeIntro=`@Configuration
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
}`;codeConfig=`http
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
  )`;codeUserDetails=`@Service
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
}`;codeMethod=`@EnableMethodSecurity
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
}`;codeJwt=`// JWT Filter
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
}`;sleep(c){return new Promise(i=>setTimeout(i,c))}async runChain(){if(this.isAnimating())return;this.isAnimating.set(!0);let c=["CSRF token valid...","CORS headers checked...","JWT token verified \u2014 user authenticated! \u{1F511}","User has ROLE_ADMIN \u2014 authorized! \u2705","Request reaches controller. 200 OK \u2705"];for(let i=0;i<5;i++)this.filters.update(o=>o.map((u,h)=>h===i?p(d({},u),{state:"active"}):h<i?p(d({},u),{state:"active"}):u)),this.status.set(c[i]),await this.sleep(800);this.isAnimating.set(!1)}async runDenied(){this.isAnimating()||(this.isAnimating.set(!0),this.filters.update(c=>c.map((i,o)=>o===0?p(d({},i),{state:"active"}):i)),this.status.set("CSRF check passed..."),await this.sleep(800),this.filters.update(c=>c.map((i,o)=>o<=1?p(d({},i),{state:"active"}):i)),this.status.set("CORS check passed..."),await this.sleep(800),this.filters.update(c=>c.map((i,o)=>o<=1?p(d({},i),{state:"active"}):o===2?p(d({},i),{state:"denied"}):i)),this.status.set("No valid token! 401 Unauthorized \u274C \u2014 request blocked at Auth filter."),this.isAnimating.set(!1))}resetDemo(){this.filters.set([{name:"CSRF",icon:"\u{1F6E1}\uFE0F",state:""},{name:"CORS",icon:"\u{1F310}",state:""},{name:"Auth",icon:"\u{1F511}",state:""},{name:"Authz",icon:"\u2705",state:""},{name:"Controller",icon:"\u2699\uFE0F",state:""}]),this.status.set("Every request passes through the security filter chain."),this.isAnimating.set(!1)}static \u0275fac=function(i){return new(i||l)};static \u0275cmp=b({type:l,selectors:[["app-topic-spring-security"]],decls:108,vars:20,consts:[["title","Spring Security Basics","subtitle","Secure your applications. Master authentication, authorization, filter chains, CSRF protection, and method-level security.","badge","SPRING FRAMEWORK","gradient","linear-gradient(135deg, #991b1b, #f87171)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-red",3,"size"],[1,"prose"],[3,"code"],[1,"viz-card"],[1,"viz-title"],["name","play","css","icon-red",3,"size"],[1,"filter-chain"],[1,"viz-status"],[1,"viz-controls"],[1,"btn","btn-red",3,"click","disabled"],["name","play",3,"size"],[1,"btn","btn-amber",3,"click","disabled"],[1,"btn","btn-gray",3,"click","disabled"],["name","refresh-cw",3,"size"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"],["name","arrow-right","css","icon-indigo",3,"size"],[1,"op-desc"],["name","briefcase","css","icon-red",3,"size"],[1,"use-cases"],[1,"use-case","red"],[1,"use-num","red-bg"],[1,"use-title"],[1,"use-desc"],[1,"use-case","blue"],[1,"use-num","blue-bg"],[1,"use-case","purple"],[1,"use-num","purple-bg"],[1,"filter"],[1,"filter-icon"],[1,"filter-name"],[1,"chain-arrow"]],template:function(i,o){i&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),s(3,"app-icon",3),t(4," Spring Security Architecture"),e(),n(5,"div",4)(6,"p")(7,"strong"),t(8,"Spring Security"),e(),t(9," is a filter-based framework. Every HTTP request passes through a chain of security filters before reaching your controller."),e(),n(10,"ul")(11,"li")(12,"strong"),t(13,"Authentication:"),e(),t(14," WHO are you? (login, JWT, OAuth2)"),e(),n(15,"li")(16,"strong"),t(17,"Authorization:"),e(),t(18," What CAN you do? (roles, permissions)"),e(),n(19,"li")(20,"strong"),t(21,"Filter Chain:"),e(),t(22," CSRF \u2192 CORS \u2192 Auth \u2192 Authorization filters."),e()(),s(23,"app-code-block",5),e()(),n(24,"section",1)(25,"div",6)(26,"h3",7),s(27,"app-icon",8),t(28," Security Filter Chain"),e(),n(29,"div",9),S(30,A,6,5,null,null,E),e(),n(32,"div",10),t(33),e(),n(34,"div",11)(35,"button",12),g("click",function(){return o.runChain()}),s(36,"app-icon",13),t(37," Authenticated Request"),e(),n(38,"button",14),g("click",function(){return o.runDenied()}),s(39,"app-icon",13),t(40," Unauthorized Request"),e(),n(41,"button",15),g("click",function(){return o.resetDemo()}),s(42,"app-icon",16),t(43," Reset"),e()()()(),n(44,"section",1)(45,"h2",2),s(46,"app-icon",17),t(47," Security Patterns"),e(),n(48,"div",18)(49,"div",19)(50,"h3",20),s(51,"app-icon",21),t(52," SecurityFilterChain"),e(),n(53,"p",22),t(54,"Configure URL-based security rules."),e(),s(55,"app-code-block",5),e(),n(56,"div",19)(57,"h3",20),s(58,"app-icon",21),t(59," UserDetailsService"),e(),n(60,"p",22),t(61,"Load user from database for authentication."),e(),s(62,"app-code-block",5),e(),n(63,"div",19)(64,"h3",20),s(65,"app-icon",21),t(66," Method Security"),e(),n(67,"p",22),t(68,"Fine-grained access control on service methods."),e(),s(69,"app-code-block",5),e(),n(70,"div",19)(71,"h3",20),s(72,"app-icon",21),t(73," JWT Authentication"),e(),n(74,"p",22),t(75,"Stateless auth with JSON Web Tokens."),e(),s(76,"app-code-block",5),e()()(),n(77,"section",1)(78,"h2",2),s(79,"app-icon",23),t(80," Real-Time Use Cases"),e(),n(81,"div",24)(82,"div",25)(83,"div",26),t(84,"1"),e(),n(85,"div")(86,"h4",27),t(87,"API Authentication"),e(),n(88,"p",28),t(89,"JWT tokens in Authorization header. Stateless \u2014 no server-side sessions. Perfect for microservices and mobile apps."),e()()(),n(90,"div",29)(91,"div",30),t(92,"2"),e(),n(93,"div")(94,"h4",27),t(95,"Role-Based Access"),e(),n(96,"p",28)(97,"code"),t(98,`@PreAuthorize("hasRole('ADMIN')")`),e(),t(99," on admin endpoints. Regular users get 403 Forbidden automatically."),e()()(),n(100,"div",31)(101,"div",32),t(102,"3"),e(),n(103,"div")(104,"h4",27),t(105,"OAuth2 / Social Login"),e(),n(106,"p",28),t(107,"Spring Security OAuth2 client handles Google, GitHub, Facebook login. One config class, entire OAuth flow managed."),e()()()()()()),i&2&&(r(3),a("size",28),r(20),a("code",o.codeIntro),r(4),a("size",22),r(3),y(o.filters()),r(3),f(o.status()),r(2),a("disabled",o.isAnimating()),r(),a("size",16),r(2),a("disabled",o.isAnimating()),r(),a("size",16),r(2),a("disabled",o.isAnimating()),r(),a("size",16),r(4),a("size",28),r(5),a("size",18),r(4),a("code",o.codeConfig),r(3),a("size",18),r(4),a("code",o.codeUserDetails),r(3),a("size",18),r(4),a("code",o.codeMethod),r(3),a("size",18),r(4),a("code",o.codeJwt),r(3),a("size",28))},dependencies:[M,_,O],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-red[_ngcontent-%COMP%]{color:#dc2626}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:14px 0;padding-left:22px;list-style:disc}.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:8px}.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#0f172a;font-weight:700}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f1f5f9;padding:2px 7px;border-radius:5px;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#dc2626}.viz-card[_ngcontent-%COMP%]{background:#fff;border-radius:18px;border:1px solid #e2e8f0;box-shadow:0 4px 16px #0000000d;padding:28px 24px}.viz-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;font-size:1.15rem;font-weight:700;color:#0f172a;margin:0 0 24px}.filter-chain[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;overflow-x:auto;padding-bottom:8px;margin-bottom:20px}.filter[_ngcontent-%COMP%]{padding:10px 12px;border-radius:10px;border:2px solid #e2e8f0;text-align:center;min-width:65px;transition:all .3s}.filter.active[_ngcontent-%COMP%]{border-color:#16a34a;background:#f0fdf4}.filter.denied[_ngcontent-%COMP%]{border-color:#dc2626;background:#fef2f2}.filter-icon[_ngcontent-%COMP%]{display:block;font-size:.9rem;margin-bottom:2px}.filter-name[_ngcontent-%COMP%]{display:block;font-size:.5rem;font-weight:700;color:#0f172a}.chain-arrow[_ngcontent-%COMP%]{font-size:.8rem;color:#94a3b8}.viz-status[_ngcontent-%COMP%]{background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:12px 16px;text-align:center;font-family:JetBrains Mono,monospace;font-size:.78rem;color:#334155;margin-bottom:20px}.viz-controls[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;gap:10px}.btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:7px;padding:10px 18px;border-radius:10px;font-size:.78rem;font-weight:600;border:none;cursor:pointer;transition:all .2s}.btn[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:not-allowed}.btn-red[_ngcontent-%COMP%]{background:#dc2626;color:#fff}.btn-amber[_ngcontent-%COMP%]{background:#d97706;color:#fff}.btn-gray[_ngcontent-%COMP%]{background:#e2e8f0;color:#334155}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-card[_ngcontent-%COMP%]:hover{box-shadow:0 4px 12px #0000000f}.op-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}.op-desc[_ngcontent-%COMP%]{font-size:.78rem;color:#64748b;line-height:1.55;margin:0}.use-cases[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.use-case[_ngcontent-%COMP%]{display:flex;gap:16px;padding:20px;border-radius:14px;border:1px solid}.use-case.red[_ngcontent-%COMP%]{background:#fef2f2;border-color:#fecaca}.use-case.blue[_ngcontent-%COMP%]{background:#eff6ff;border-color:#bfdbfe}.use-case.purple[_ngcontent-%COMP%]{background:#faf5ff;border-color:#d8b4fe}.use-num[_ngcontent-%COMP%]{width:34px;height:34px;min-width:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:.78rem;font-weight:800}.red-bg[_ngcontent-%COMP%]{background:#dc2626}.blue-bg[_ngcontent-%COMP%]{background:#3b82f6}.purple-bg[_ngcontent-%COMP%]{background:#8b5cf6}.use-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 4px}.use-desc[_ngcontent-%COMP%]{font-size:.78rem;line-height:1.55;margin:0;color:#334155}.use-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#0000000f;padding:1px 5px;border-radius:4px;font-family:JetBrains Mono,monospace;font-size:.72rem}"],changeDetection:0})};export{P as SpringSecurityComponent};
