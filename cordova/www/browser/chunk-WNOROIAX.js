import{a as se}from"./chunk-PXHEQ5KC.js";import{a as ae}from"./chunk-A34XGDHH.js";import{a as re}from"./chunk-NNNM6LBY.js";import{a as Y,b as K,c as Z,d as ee,e as te,f as ne,g as ie,h as oe}from"./chunk-Y2CGLXE7.js";import{a as $,da as W,ea as X}from"./chunk-UQPN7EJY.js";import{o as J,y as G}from"./chunk-VVU6HLMW.js";import{i as Q}from"./chunk-VORLG5FL.js";import{$a as M,Ab as D,Ba as s,Ib as q,Ka as T,Oa as j,Pb as N,T as F,Va as _,Wa as b,Y as h,Ya as A,Za as y,_a as S,ab as o,ba as d,bb as a,ca as m,cb as g,fc as H,jb as f,lb as u,nb as l,oa as v,rb as k,sb as O,tb as P,ub as I,vb as R,xb as z,yb as c,za as L,zb as x}from"./chunk-YTAFWVC7.js";var ce={id:"java-fundamentals",title:"Java Fundamentals",description:"Java fundamentals.",icon:"bi-cup-hot",color:"#FF5722",chapters:[]};var le={id:"spring-framework",title:"Spring Framework",description:"Spring framework.",icon:"bi-leaf",color:"#4CAF50",chapters:[]};var pe={id:"spring-boot",title:"Spring Boot",description:"Production-grade Spring Boot \u2014 auto-configuration, Actuator, testing, and deployment.",icon:"bi-rocket-takeoff",color:"#40C4FF",chapters:[{id:"spring-boot-ch1",title:"Auto-Configuration Deep Dive",description:"How @SpringBootApplication and auto-configuration magic really works.",estimatedMinutes:10,blocks:[{type:"heading",content:"Spring Boot Auto-Configuration"},{type:"paragraph",content:"Spring Boot eliminates XML configuration and reduces boilerplate by automatically configuring your application based on the JARs on the classpath. Understanding how this works is crucial for interviews and debugging."},{type:"subheading",content:"@SpringBootApplication Breakdown"},{type:"code",language:"java",content:`// @SpringBootApplication is a convenience annotation combining:
@SpringBootConfiguration    // = @Configuration (defines beans)
@EnableAutoConfiguration    // triggers auto-config via spring.factories
@ComponentScan              // scans current package and sub-packages

public class MyApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}`},{type:"subheading",content:"How Auto-Configuration Works"},{type:"numbered-list",content:"Auto-config mechanism:",items:["Spring Boot scans META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports","Each listed AutoConfiguration class is conditionally applied based on @ConditionalOn* annotations","@ConditionalOnClass \u2014 applies only if class is on classpath","@ConditionalOnMissingBean \u2014 applies only if no bean of that type is registered","@ConditionalOnProperty \u2014 applies based on property value"]},{type:"code",language:"java",content:`@Configuration
@ConditionalOnClass(DataSource.class)        // JDBC driver is on classpath
@ConditionalOnMissingBean(DataSource.class)  // no custom DataSource defined
@EnableConfigurationProperties(DataSourceProperties.class)
public class DataSourceAutoConfiguration {
    // Creates DataSource bean from spring.datasource.* properties
}`},{type:"tip",content:"Run your app with --debug flag to see the auto-configuration report: which configs were applied (positive matches) and which were skipped (negative matches). Essential for debugging."}]},{id:"spring-boot-ch2",title:"Configuration & Profiles",description:"application.properties, @ConfigurationProperties, environment-specific configs.",estimatedMinutes:10,blocks:[{type:"heading",content:"Configuration Management"},{type:"paragraph",content:"Spring Boot supports externalized configuration through properties files, YAML, environment variables, and command-line arguments. Profile-specific configs enable environment-specific behavior."},{type:"code",language:"yaml",content:`# application.yml
server:
  port: 8080

spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/mydb
    username: \${DB_USER}
    password: \${DB_PASS}
  jpa:
    hibernate:
      ddl-auto: validate
    show-sql: false

app:
  jwt-secret: \${JWT_SECRET}
  token-expiry-ms: 86400000

---
spring:
  config:
    activate:
      on-profile: dev
  datasource:
    url: jdbc:h2:mem:testdb
  jpa:
    show-sql: true`},{type:"subheading",content:"@ConfigurationProperties"},{type:"code",language:"java",content:`@ConfigurationProperties(prefix = "app")
@Component
@Validated
public class AppProperties {
    @NotBlank
    private String jwtSecret;

    @Positive
    private long tokenExpiryMs;

    // getters and setters
}

@Service
public class TokenService {
    private final AppProperties props;
    public TokenService(AppProperties props) { this.props = props; }
}`},{type:"note",content:"Use @ConfigurationProperties over @Value for groups of related properties. It supports validation, type safety, and IDE autocomplete via spring-boot-configuration-processor."}]},{id:"spring-boot-ch3",title:"Spring Boot Actuator",description:"Production-ready endpoints for health checks, metrics, and monitoring.",estimatedMinutes:8,blocks:[{type:"heading",content:"Spring Boot Actuator"},{type:"paragraph",content:"Actuator provides production-ready features for monitoring and managing your application. It exposes endpoints for health, metrics, info, environment, and more."},{type:"code",language:"yaml",content:`management:
  endpoints:
    web:
      exposure:
        include: health,info,metrics,prometheus
  endpoint:
    health:
      show-details: when-authorized`},{type:"bullet-list",content:"Key Actuator endpoints:",items:["/actuator/health \u2014 app health (UP/DOWN/DEGRADED), includes DB, disk, custom checks","/actuator/metrics \u2014 Micrometer metrics (JVM, HTTP, DB connection pool)","/actuator/info \u2014 custom app info (version, git commit)","/actuator/env \u2014 environment properties (restrict in production)","/actuator/loggers \u2014 change log levels at runtime without restart","/actuator/threaddump \u2014 current thread states for debugging"]},{type:"code",language:"java",content:`@Component
public class ExternalApiHealthIndicator implements HealthIndicator {

    private final RestTemplate restTemplate;

    @Override
    public Health health() {
        try {
            restTemplate.getForObject("https://api.example.com/ping", String.class);
            return Health.up().withDetail("externalApi", "reachable").build();
        } catch (Exception e) {
            return Health.down().withDetail("error", e.getMessage()).build();
        }
    }
}`},{type:"tip",content:"In production, expose only /health and /info publicly. Secure other endpoints with Spring Security or restrict them to internal networks."}]},{id:"spring-boot-ch4",title:"Testing Spring Boot Apps",description:"@SpringBootTest, @WebMvcTest, @DataJpaTest, Mockito, and Testcontainers.",estimatedMinutes:14,blocks:[{type:"heading",content:"Testing in Spring Boot"},{type:"paragraph",content:"Spring Boot provides excellent testing support with test slices that load only the relevant application layer, making tests fast and focused."},{type:"subheading",content:"Unit Tests (No Spring Context)"},{type:"code",language:"java",content:`@ExtendWith(MockitoExtension.class)
class OrderServiceTest {

    @Mock
    private OrderRepository orderRepository;

    @InjectMocks
    private OrderService orderService;

    @Test
    void createOrder_ShouldSaveAndReturn() {
        Order order = new Order();
        when(orderRepository.save(any())).thenReturn(order);

        Order result = orderService.createOrder(order);

        assertThat(result).isNotNull();
        verify(orderRepository).save(order);
    }
}`},{type:"subheading",content:"Controller Tests (@WebMvcTest)"},{type:"code",language:"java",content:`@WebMvcTest(UserController.class)
class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserService userService;

    @Test
    void getUser_WhenExists_Returns200() throws Exception {
        when(userService.findById(1L)).thenReturn(Optional.of(new UserDto(1L, "Alice")));

        mockMvc.perform(get("/api/users/1"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.name").value("Alice"));
    }
}`},{type:"subheading",content:"Repository Tests (@DataJpaTest)"},{type:"code",language:"java",content:`@DataJpaTest
class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;

    @Test
    void findByEmail_WhenExists_ReturnsUser() {
        userRepository.save(new User("alice@example.com", "Alice"));

        Optional<User> result = userRepository.findByEmail("alice@example.com");

        assertThat(result).isPresent();
        assertThat(result.get().getName()).isEqualTo("Alice");
    }
}`},{type:"tip",content:"Use Testcontainers for integration tests with real databases. @Testcontainers + @Container spin up real PostgreSQL/Redis in Docker during tests \u2014 much more reliable than H2."}]},{id:"spring-boot-ch5",title:"Building & Deploying",description:"Fat JARs, Docker images, Kubernetes health probes, and production JVM flags.",estimatedMinutes:10,blocks:[{type:"heading",content:"Building & Deploying Spring Boot Apps"},{type:"paragraph",content:'Spring Boot applications are packaged as executable "fat JARs" that embed the server. Modern deployments use Docker containers orchestrated by Kubernetes.'},{type:"subheading",content:"Multi-Stage Dockerfile"},{type:"code",language:"bash",content:`# Stage 1: Build
FROM eclipse-temurin:21-jdk AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn package -DskipTests

# Stage 2: Slim runtime image
FROM eclipse-temurin:21-jre
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar

RUN addgroup --system spring && adduser --system spring --ingroup spring
USER spring:spring

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]`},{type:"subheading",content:"Kubernetes Health Probes"},{type:"code",language:"yaml",content:`livenessProbe:
  httpGet:
    path: /actuator/health/liveness
    port: 8080
  initialDelaySeconds: 30
  periodSeconds: 10
readinessProbe:
  httpGet:
    path: /actuator/health/readiness
    port: 8080
  initialDelaySeconds: 20
  periodSeconds: 5`},{type:"bullet-list",content:"Production JVM flags:",items:["-Xms256m -Xmx512m \u2014 explicit heap for containers","-XX:+UseG1GC \u2014 G1 garbage collector","-XX:MaxRAMPercentage=75 \u2014 use 75% of container memory","-XX:+ExitOnOutOfMemoryError \u2014 fail fast, let Kubernetes restart","-Dspring.profiles.active=prod \u2014 activate production profile"]}]}]};var de=[ce,le,pe];var B="search_recent",ge=5,E=class n{index=[];indexReady=!1;constructor(){}buildIndex(){if(this.indexReady)return;this.indexReady=!0;let t=[...Y,...K,...Z,...ee,...te,...ne,...ie,...oe];for(let e of t){let i=this.categoryToSlug(e.category);this.index.push({id:`iq-${e.id}`,type:"interview",title:e.question,subtitle:e.category,icon:"fa-solid fa-circle-question",color:"#6366f1",route:["/interview-questions",i,String(e.id)],companies:this.parseCompanies(e.asked_metadata)})}for(let e of ae)this.index.push({id:`lc-${e.number}`,type:"leetcode",title:`${e.number}. ${e.title}`,subtitle:`${e.difficulty} \xB7 ${e.category}`,icon:"fa-solid fa-trophy",color:"#f59e0b",route:["/leetcode",String(e.number)]});for(let e of de)for(let i of e.chapters)this.index.push({id:`tut-${e.id}-${i.id}`,type:"tutorial",title:i.title,subtitle:e.title,icon:"fa-solid fa-book-open",color:"#10b981",route:["/tutorials",e.id,i.id]});for(let e of se)this.index.push({id:`exp-${e.id}`,type:"experience",title:`${e.company} \u2014 ${e.role}`,subtitle:e.result.charAt(0).toUpperCase()+e.result.slice(1),icon:"fa-solid fa-microphone-lines",color:"#10b981",route:["/experiences",e.id]})}search(t){if(this.buildIndex(),!t.trim())return[];let e=t.toLowerCase(),i=this.index.filter(C=>C.title.toLowerCase().includes(e)||C.subtitle.toLowerCase().includes(e)),r=6,p=new Map,U=[];for(let C of i){let V=p.get(C.type)??0;V<r&&(U.push(C),p.set(C.type,V+1))}return U}getCompanyTags(){this.buildIndex();let t=new Set;for(let e of this.index)e.companies&&e.companies.forEach(i=>t.add(i));return Array.from(t).sort()}searchByCompany(t){return this.buildIndex(),this.index.filter(e=>e.type==="interview"&&e.companies?.includes(t))}getRecentSearches(){try{return JSON.parse(localStorage.getItem(B)??"[]")}catch{return[]}}addRecentSearch(t){if(!t.trim())return;let e=this.getRecentSearches().filter(i=>i!==t);e.unshift(t),localStorage.setItem(B,JSON.stringify(e.slice(0,ge)))}clearRecentSearches(){localStorage.removeItem(B)}parseCompanies(t){let e=t.matchAll(/\d+x\s+([A-Za-z][A-Za-z0-9& .]+?)(?:,|$)/g),i=[];for(let r of e)i.push(r[1].trim());return i}categoryToSlug(t){return{"Core Java":"core-java","Spring Boot":"spring-boot",Hibernate:"hibernate","Spring Reactive":"spring-reactive",Microservices:"microservices",Multithreading:"multithreading","Reactive Programming":"reactive-prog","Coding Questions":"coding-patterns"}[t]??t.toLowerCase().replace(/\s+/g,"-")}static \u0275fac=function(e){return new(e||n)};static \u0275prov=F({token:n,factory:n.\u0275fac,providedIn:"root"})};var he=["searchInput"],_e=()=>[0,1],be=(n,t)=>t.type,xe=(n,t)=>t.id;function Ce(n,t){if(n&1){let e=f();o(0,"button",17),u("click",function(){let r=d(e).$implicit,p=l(3);return m(p.setQuery(r))}),g(1,"i",18),o(2,"span"),c(3),a()()}if(n&2){let e=t.$implicit;s(3),x(e)}}function ve(n,t){if(n&1){let e=f();o(0,"div",9)(1,"div",13)(2,"span",14),c(3,"Recent"),a(),o(4,"button",15),u("click",function(){d(e);let r=l(2);return m(r.clearRecent())}),c(5,"Clear"),a()(),y(6,Ce,4,1,"button",16,A),a()}if(n&2){let e=l(2);s(6),S(e.recentSearches())}}function ye(n,t){n&1&&(o(0,"div",10),g(1,"i",19),o(2,"p"),c(3,"Search across tutorials, interview questions, LeetCode problems and more"),a()())}function Se(n,t){if(n&1){let e=f();o(0,"button",20),u("click",function(){let r=d(e).$implicit,p=l(2);return m(p.toggleCompanyFilter(r))}),c(1),a()}if(n&2){let e=t.$implicit,i=l(2);R("sm-chip-active",i.activeCompanyFilter()===e),s(),D(" ",e," ")}}function Me(n,t){if(n&1&&(o(0,"div",10),g(1,"i",21),o(2,"p"),c(3),a()()),n&2){let e=l(3);s(3),D('No results for "',e.activeCompanyFilter()?e.activeCompanyFilter()+" questions":e.query(),'"')}}function we(n,t){if(n&1){let e=f();o(0,"button",24),u("click",function(){let r=d(e).$implicit,p=l(5);return m(p.navigate(r))}),o(1,"div",25),g(2,"i"),a(),o(3,"div",26)(4,"span",27),c(5),a(),o(6,"span",28),c(7),a()(),g(8,"i",29),a()}if(n&2){let e=t.$implicit,i=l(5);s(),I("background",i.iconBg(e.color)),s(),z(e.icon),I("color",e.color),s(3),x(e.title),s(2),x(e.subtitle)}}function Te(n,t){if(n&1&&(o(0,"div",9)(1,"div",13)(2,"span",14),c(3),a(),o(4,"span",22),c(5),a()(),y(6,we,9,8,"button",23,xe),a()),n&2){let e=t.$implicit,i=l(4);s(3),x(i.typeLabel(e.type)),s(2),x(e.items.length),s(),S(e.items)}}function ke(n,t){if(n&1&&y(0,Te,8,2,"div",9,be),n&2){let e=l(3);S(e.grouped())}}function Oe(n,t){if(n&1&&_(0,Me,4,1,"div",10)(1,ke,2,0),n&2){let e=l(2);b(e.grouped().length===0?0:1)}}function Pe(n,t){if(n&1){let e=f();o(0,"div",3)(1,"div",4),g(2,"i",5),o(3,"input",6,1),u("input",function(r){d(e);let p=l();return m(p.onInput(r))}),a(),o(5,"button",7),u("click",function(){d(e);let r=l();return m(r.close())}),c(6,"Cancel"),a()(),o(7,"div",8),_(8,ve,8,0,"div",9),_(9,ye,4,0,"div",10),o(10,"div",11),y(11,Se,2,3,"button",12,A),a(),_(13,Oe,2,1),a()()}if(n&2){let e=l();s(3),M("value",e.query()),s(5),b(!e.query()&&e.recentSearches().length>0?8:-1),s(),b(!e.query()&&e.recentSearches().length===0?9:-1),s(2),S(e.companyChips),s(2),b(e.query()||e.activeCompanyFilter()?13:-1)}}var Re={interview:"Interview Questions",coding:"Coding Questions",leetcode:"LeetCode",tutorial:"Tutorials",experience:"Experiences"},Ee=["tutorial","interview","coding","leetcode","experience"],Ae=["Amazon","Google","Microsoft","Infosys","TCS","Wipro","Flipkart"],w=class n{searchService=h(E);router=h(Q);inputRef;isOpen=v(!1);query=v("");recentSearches=v([]);activeCompanyFilter=v(null);companyChips=Ae;results=N(()=>{let t=this.activeCompanyFilter();return t?this.searchService.searchByCompany(t):this.searchService.search(this.query())});grouped=N(()=>{let t=new Map;for(let e of this.results())t.has(e.type)||t.set(e.type,[]),t.get(e.type).push(e);return Ee.filter(e=>t.has(e)).map(e=>({type:e,items:t.get(e)}))});ngAfterViewInit(){}open(){this.recentSearches.set(this.searchService.getRecentSearches()),this.isOpen.set(!0)}close(){this.isOpen.set(!1),this.query.set(""),this.activeCompanyFilter.set(null)}toggleCompanyFilter(t){this.activeCompanyFilter.set(this.activeCompanyFilter()===t?null:t)}onDidPresent(){setTimeout(()=>this.inputRef?.nativeElement?.focus(),100)}onInput(t){this.query.set(t.target.value)}setQuery(t){this.query.set(t),this.inputRef?.nativeElement&&(this.inputRef.nativeElement.value=t)}clearRecent(){this.searchService.clearRecentSearches(),this.recentSearches.set([])}navigate(t){this.searchService.addRecentSearch(this.query()||t.title),this.close(),this.router.navigate(t.route)}typeLabel(t){return Re[t]}iconBg(t){return t+"1a"}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=T({type:n,selectors:[["app-search-modal"]],viewQuery:function(e,i){if(e&1&&k(he,5),e&2){let r;O(r=P())&&(i.inputRef=r.first)}},decls:3,vars:3,consts:[["modal",""],["searchInput",""],["initialBreakpoint","1","cssClass","search-modal",3,"didPresent","willDismiss","isOpen","breakpoints"],[1,"sm-wrap"],[1,"sm-input-row"],[1,"fa-solid","fa-magnifying-glass","sm-search-icon"],["type","search","placeholder","Search tutorials, questions, problems...","autocomplete","off",1,"sm-input",3,"input","value"],[1,"sm-cancel",3,"click"],[1,"sm-body"],[1,"sm-section"],[1,"sm-hint"],[1,"sm-chips"],[1,"sm-chip",3,"sm-chip-active"],[1,"sm-section-head"],[1,"sm-section-title"],[1,"sm-clear-btn",3,"click"],[1,"sm-recent-item"],[1,"sm-recent-item",3,"click"],[1,"fa-solid","fa-clock-rotate-left","sm-recent-icon"],[1,"fa-solid","fa-magnifying-glass","sm-hint-icon"],[1,"sm-chip",3,"click"],[1,"fa-solid","fa-face-frown","sm-hint-icon"],[1,"sm-section-count"],[1,"sm-result-item"],[1,"sm-result-item",3,"click"],[1,"sm-result-icon"],[1,"sm-result-info"],[1,"sm-result-title"],[1,"sm-result-sub"],[1,"fa-solid","fa-chevron-right","sm-result-arrow"]],template:function(e,i){if(e&1){let r=f();o(0,"ion-modal",2,0),u("didPresent",function(){return d(r),m(i.onDidPresent())})("willDismiss",function(){return d(r),m(i.close())}),j(2,Pe,14,4,"ng-template"),a()}e&2&&M("isOpen",i.isOpen())("breakpoints",q(2,_e))},dependencies:[J],styles:["[_nghost-%COMP%]{display:contents}.sm-wrap[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;background:#0b1120}.sm-input-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:14px 16px 10px;border-bottom:1px solid rgba(255,255,255,.06);background:#0b1120}.sm-search-icon[_ngcontent-%COMP%]{color:#475569;font-size:.9rem;flex-shrink:0}.sm-input[_ngcontent-%COMP%]{flex:1;background:transparent;border:none;outline:none;color:#e2e8f0;font-size:1rem;font-weight:500;caret-color:#10b981}.sm-input[_ngcontent-%COMP%]::placeholder{color:#475569}.sm-input[_ngcontent-%COMP%]::-webkit-search-cancel-button{display:none}.sm-cancel[_ngcontent-%COMP%]{background:none;border:none;color:#10b981;font-size:.82rem;font-weight:600;cursor:pointer;padding:4px 0;flex-shrink:0}.sm-body[_ngcontent-%COMP%]{flex:1;overflow-y:auto;padding:8px 0 40px}.sm-section[_ngcontent-%COMP%]{margin-bottom:4px}.sm-section-head[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:10px 16px 6px}.sm-section-title[_ngcontent-%COMP%]{font-size:.6rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#475569}.sm-section-count[_ngcontent-%COMP%]{font-size:.6rem;font-weight:600;color:#334155}.sm-clear-btn[_ngcontent-%COMP%]{font-size:.65rem;font-weight:600;color:#f87171;background:none;border:none;cursor:pointer;padding:0}.sm-recent-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;width:100%;text-align:left;padding:11px 16px;background:none;border:none;color:#94a3b8;font-size:.85rem;cursor:pointer;transition:background .15s}.sm-recent-item[_ngcontent-%COMP%]:hover{background:#ffffff08}.sm-recent-icon[_ngcontent-%COMP%]{font-size:.7rem;color:#475569;flex-shrink:0}.sm-result-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;width:100%;text-align:left;padding:10px 16px;background:none;border:none;cursor:pointer;transition:background .15s}.sm-result-item[_ngcontent-%COMP%]:hover{background:#ffffff08}.sm-result-item[_ngcontent-%COMP%]:active{background:#ffffff0d}.sm-result-icon[_ngcontent-%COMP%]{flex-shrink:0;width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:.8rem}.sm-result-info[_ngcontent-%COMP%]{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}.sm-result-title[_ngcontent-%COMP%]{font-size:.85rem;font-weight:600;color:#e2e8f0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.sm-result-sub[_ngcontent-%COMP%]{font-size:.65rem;color:#64748b;font-weight:500}.sm-result-arrow[_ngcontent-%COMP%]{font-size:.6rem;color:#334155;flex-shrink:0}.sm-chips[_ngcontent-%COMP%]{display:flex;gap:8px;padding:10px 16px 6px;overflow-x:auto;scrollbar-width:none}.sm-chips[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.sm-chip[_ngcontent-%COMP%]{flex-shrink:0;padding:5px 14px;border-radius:20px;font-size:.72rem;font-weight:600;border:1.5px solid rgba(255,255,255,.1);background:#ffffff0a;color:#94a3b8;cursor:pointer;transition:background .15s,border-color .15s,color .15s}.sm-chip[_ngcontent-%COMP%]:hover{background:#10b9811a;border-color:#10b9814d;color:#10b981}.sm-chip-active[_ngcontent-%COMP%]{background:#10b98126;border-color:#10b981;color:#10b981}.sm-hint[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;padding:60px 24px 40px;text-align:center;gap:12px}.sm-hint-icon[_ngcontent-%COMP%]{font-size:2rem;color:#334155}.sm-hint[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.8rem;color:#475569;line-height:1.6;margin:0}"],changeDetection:0})};function Ie(n,t){n&1&&(o(0,"span",5),c(1,"PRO"),a())}function De(n,t){if(n&1){let e=f();o(0,"img",11),u("click",function(){d(e);let r=l();return m(r.logout())}),a()}if(n&2){let e,i=l();M("src",(e=i.authService.user())==null?null:e.photoURL,L)}}function Ne(n,t){if(n&1){let e=f();o(0,"button",12),u("click",function(){d(e);let r=l();return m(r.login())}),c(1,"Sign In"),a()}}var ue=class n{authService=h(X);gameService=h(re);alertSvc=h($);purchaseService=h(W);searchModal;openSearch(){this.searchModal?.open()}login(){this.authService.loginWithGoogle()}async logout(){await this.alertSvc.confirm("Are you sure you want to sign out?","Sign Out")&&this.authService.logout()}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=T({type:n,selectors:[["app-header"]],viewQuery:function(e,i){if(e&1&&k(w,5),e&2){let r;O(r=P())&&(i.searchModal=r.first)}},decls:18,vars:5,consts:[[1,"dash-header"],[1,"header-left"],["color","light",1,"menu-btn"],[1,"wordmark"],[1,"wm-accent"],[1,"wm-pro"],[1,"header-right"],["title","Search","aria-label","Search",1,"icon-btn","search-btn",3,"click"],[1,"streak-badge"],["title","Sign out",1,"avatar",3,"src"],[1,"btn-signin"],["title","Sign out",1,"avatar",3,"click","src"],[1,"btn-signin",3,"click"]],template:function(e,i){e&1&&(o(0,"header",0)(1,"div",1),g(2,"ion-menu-button",2),o(3,"div",3),c(4," Java"),o(5,"span",4),c(6,"IQ"),a(),_(7,Ie,2,0,"span",5),a()(),o(8,"div",6)(9,"button",7),u("click",function(){return i.openSearch()}),c(10,"\u{1F50D}"),a(),o(11,"div",8),c(12," \u{1F525} "),o(13,"span"),c(14),a()(),_(15,De,1,1,"img",9)(16,Ne,2,0,"button",10),a()(),g(17,"app-search-modal")),e&2&&(s(7),b(i.purchaseService.isPro()?7:-1),s(4),R("streak-on",i.gameService.streak()>0),s(3),x(i.gameService.streak()),s(),b(i.authService.user()?15:16))},dependencies:[H,G,w],styles:[".dash-header[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1000;display:flex;justify-content:space-between;align-items:center;padding:12px 16px;padding-top:max(12px,env(safe-area-inset-top));background:#1b4332;border-bottom:1px solid rgba(255,255,255,.06);box-shadow:0 4px 20px #00000026}html:not(.dark)[_nghost-%COMP%]   .dash-header[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .dash-header[_ngcontent-%COMP%]{background:#1b4332}.header-left[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px}.menu-btn[_ngcontent-%COMP%]{--padding-start: 0;--padding-end: 4px;font-size:1.4rem}.wordmark[_ngcontent-%COMP%]{font-size:1.18rem;font-weight:900;color:#fff;letter-spacing:-.04em;display:flex;align-items:baseline;gap:1px}.wm-accent[_ngcontent-%COMP%]{color:#74c69d}.wm-pro[_ngcontent-%COMP%]{font-size:.6rem;font-weight:800;letter-spacing:.16em;background:linear-gradient(135deg,#c89432 20%,#f5c84a 55%,#c89432);-webkit-background-clip:text;background-clip:text;color:transparent;margin-left:2px;transform:translateY(-2px)}.header-right[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px}.icon-btn[_ngcontent-%COMP%]{background:#ffffff12;border:1px solid rgba(255,255,255,.1);font-size:1.05rem;cursor:pointer;padding:5px 7px;border-radius:10px;opacity:.9;transition:all .2s ease;color:#fff}.icon-btn[_ngcontent-%COMP%]:hover{opacity:1;background:#ffffff24;border-color:#ffffff2e}.streak-badge[_ngcontent-%COMP%]{display:flex;align-items:center;gap:3px;background:#ffffff12;border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:4px 10px;font-size:.78rem;font-weight:700;color:#ffffff80;transition:all .25s ease}.streak-badge.streak-on[_ngcontent-%COMP%]{background:#f973162e;border-color:#f9731661;color:#fb923c;box-shadow:0 0 16px #f9731638,inset 0 1px #ffb4641f}.avatar[_ngcontent-%COMP%]{width:30px;height:30px;border-radius:50%;border:2px solid rgba(255,255,255,.22);cursor:pointer;object-fit:cover;transition:border-color .2s,box-shadow .2s}.avatar[_ngcontent-%COMP%]:hover{border-color:#ffffff80;box-shadow:0 0 10px #ffffff1f}.btn-signin[_ngcontent-%COMP%]{background:linear-gradient(135deg,#ffffff21,#ffffff0d);border:1px solid rgba(255,255,255,.22);color:#fff;padding:5px 14px;border-radius:20px;font-size:.78rem;font-weight:700;cursor:pointer;transition:all .2s ease}.btn-signin[_ngcontent-%COMP%]:hover{background:#ffffff38;border-color:#ffffff61}@media(min-width:1024px){.menu-btn[_ngcontent-%COMP%], .wordmark[_ngcontent-%COMP%]{display:none}}"],changeDetection:0})};export{w as a,ue as b};
