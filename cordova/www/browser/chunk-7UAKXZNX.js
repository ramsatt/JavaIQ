import{a as p,b as l,c as u}from"./chunk-FZG5ZG77.js";import{Hb as t,Ma as o,Xa as d,mb as n,nb as i,ob as e,pb as r}from"./chunk-5DVJCJ5O.js";import"./chunk-NWJ5J3BN.js";var g=class s{codeIntro=`@Configuration @EnableWebSecurity @EnableMethodSecurity
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
}`;codeJwt=`@Service
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
}`;codeOauth=`# application.yml
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
)`;codeCors=`@Bean
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
http.cors(cors -> cors.configurationSource(corsSource()))`;codeMethod=`@Service
public class AdminService {
    @PreAuthorize("hasRole('ADMIN')")
    public void deleteUser(Long id) { }

    @PreAuthorize("#userId == authentication.principal.id or hasRole('ADMIN')")
    public UserDTO getProfile(Long userId) { }

    @PostAuthorize("returnObject.owner == authentication.name")
    public Document getDoc(Long docId) { }

    @PreAuthorize("@permissionService.canEdit(authentication, #docId)")
    public void editDoc(Long docId) { }
}`;static \u0275fac=function(a){return new(a||s)};static \u0275cmp=d({type:s,selectors:[["app-topic-sb-security"]],decls:33,vars:7,consts:[["title","Spring Boot Security","subtitle","Secure REST APIs with JWT, OAuth2, method security, and CORS configuration.","badge","SPRING BOOT","gradient","linear-gradient(135deg, #991b1b, #f87171)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-red",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(a,c){a&1&&(i(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),r(3,"app-icon",3),t(4," Security in Boot"),e(),i(5,"div",4)(6,"p"),t(7,"Add "),i(8,"code"),t(9,"spring-boot-starter-security"),e(),t(10," and ALL endpoints are secured instantly. Then customize the filter chain."),e(),r(11,"app-code-block",5),e()(),i(12,"section",1)(13,"h2",2),r(14,"app-icon",6),t(15," Patterns"),e(),i(16,"div",7)(17,"div",8)(18,"h3",9),t(19,"JWT Config"),e(),r(20,"app-code-block",5),e(),i(21,"div",8)(22,"h3",9),t(23,"OAuth2 Login"),e(),r(24,"app-code-block",5),e(),i(25,"div",8)(26,"h3",9),t(27,"CORS Config"),e(),r(28,"app-code-block",5),e(),i(29,"div",8)(30,"h3",9),t(31,"Method Security"),e(),r(32,"app-code-block",5),e()()()()),a&2&&(o(3),n("size",28),o(8),n("code",c.codeIntro),o(3),n("size",28),o(6),n("code",c.codeJwt),o(4),n("code",c.codeOauth),o(4),n("code",c.codeCors),o(4),n("code",c.codeMethod))},dependencies:[p,l,u],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-red[_ngcontent-%COMP%]{color:#dc2626}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f1f5f9;padding:2px 7px;border-radius:5px;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#dc2626}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{g as SbSecurityComponent};
