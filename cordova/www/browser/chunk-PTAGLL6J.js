import {
  LEETCODE_PROBLEMS
} from "./chunk-XKIWGTQY.js";
import {
  CURATED_EXPERIENCES
} from "./chunk-3EDGEEL3.js";
import {
  CODING_QUESTIONS,
  CORE_JAVA_QUESTIONS,
  HIBERNATE_QUESTIONS,
  MICROSERVICES_QUESTIONS,
  MULTITHREADING_QUESTIONS,
  REACTIVE_PROGRAMMING_QUESTIONS,
  SPRING_BOOT_QUESTIONS,
  SPRING_REACTIVE_QUESTIONS
} from "./chunk-QFFHBMTJ.js";
import {
  IonModal
} from "./chunk-PWZS7QID.js";
import {
  Router
} from "./chunk-CSRIGHDB.js";
import {
  ChangeDetectionStrategy,
  Component,
  Injectable,
  ViewChild,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-L6VISU4K.js";

// src/app/data/tutorials/java-fundamentals.ts
var JAVA_FUNDAMENTALS_TUTORIAL = {
  id: "java-fundamentals",
  title: "Java Fundamentals",
  description: "Java fundamentals.",
  icon: "bi-cup-hot",
  color: "#FF5722",
  chapters: []
};

// src/app/data/tutorials/spring-framework.ts
var SPRING_FRAMEWORK_TUTORIAL = {
  id: "spring-framework",
  title: "Spring Framework",
  description: "Spring framework.",
  icon: "bi-leaf",
  color: "#4CAF50",
  chapters: []
};

// src/app/data/tutorials/spring-boot-tutorial.ts
var SPRING_BOOT_TUTORIAL = {
  id: "spring-boot",
  title: "Spring Boot",
  description: "Production-grade Spring Boot \u2014 auto-configuration, Actuator, testing, and deployment.",
  icon: "bi-rocket-takeoff",
  color: "#40C4FF",
  chapters: [
    {
      id: "spring-boot-ch1",
      title: "Auto-Configuration Deep Dive",
      description: "How @SpringBootApplication and auto-configuration magic really works.",
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Spring Boot Auto-Configuration" },
        { type: "paragraph", content: "Spring Boot eliminates XML configuration and reduces boilerplate by automatically configuring your application based on the JARs on the classpath. Understanding how this works is crucial for interviews and debugging." },
        { type: "subheading", content: "@SpringBootApplication Breakdown" },
        {
          type: "code",
          language: "java",
          content: `// @SpringBootApplication is a convenience annotation combining:
@SpringBootConfiguration    // = @Configuration (defines beans)
@EnableAutoConfiguration    // triggers auto-config via spring.factories
@ComponentScan              // scans current package and sub-packages

public class MyApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}`
        },
        { type: "subheading", content: "How Auto-Configuration Works" },
        {
          type: "numbered-list",
          content: "Auto-config mechanism:",
          items: [
            "Spring Boot scans META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports",
            "Each listed AutoConfiguration class is conditionally applied based on @ConditionalOn* annotations",
            "@ConditionalOnClass \u2014 applies only if class is on classpath",
            "@ConditionalOnMissingBean \u2014 applies only if no bean of that type is registered",
            "@ConditionalOnProperty \u2014 applies based on property value"
          ]
        },
        {
          type: "code",
          language: "java",
          content: `@Configuration
@ConditionalOnClass(DataSource.class)        // JDBC driver is on classpath
@ConditionalOnMissingBean(DataSource.class)  // no custom DataSource defined
@EnableConfigurationProperties(DataSourceProperties.class)
public class DataSourceAutoConfiguration {
    // Creates DataSource bean from spring.datasource.* properties
}`
        },
        { type: "tip", content: "Run your app with --debug flag to see the auto-configuration report: which configs were applied (positive matches) and which were skipped (negative matches). Essential for debugging." }
      ]
    },
    {
      id: "spring-boot-ch2",
      title: "Configuration & Profiles",
      description: "application.properties, @ConfigurationProperties, environment-specific configs.",
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Configuration Management" },
        { type: "paragraph", content: "Spring Boot supports externalized configuration through properties files, YAML, environment variables, and command-line arguments. Profile-specific configs enable environment-specific behavior." },
        {
          type: "code",
          language: "yaml",
          content: `# application.yml
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
    show-sql: true`
        },
        { type: "subheading", content: "@ConfigurationProperties" },
        {
          type: "code",
          language: "java",
          content: `@ConfigurationProperties(prefix = "app")
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
}`
        },
        { type: "note", content: "Use @ConfigurationProperties over @Value for groups of related properties. It supports validation, type safety, and IDE autocomplete via spring-boot-configuration-processor." }
      ]
    },
    {
      id: "spring-boot-ch3",
      title: "Spring Boot Actuator",
      description: "Production-ready endpoints for health checks, metrics, and monitoring.",
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Spring Boot Actuator" },
        { type: "paragraph", content: "Actuator provides production-ready features for monitoring and managing your application. It exposes endpoints for health, metrics, info, environment, and more." },
        {
          type: "code",
          language: "yaml",
          content: `management:
  endpoints:
    web:
      exposure:
        include: health,info,metrics,prometheus
  endpoint:
    health:
      show-details: when-authorized`
        },
        {
          type: "bullet-list",
          content: "Key Actuator endpoints:",
          items: [
            "/actuator/health \u2014 app health (UP/DOWN/DEGRADED), includes DB, disk, custom checks",
            "/actuator/metrics \u2014 Micrometer metrics (JVM, HTTP, DB connection pool)",
            "/actuator/info \u2014 custom app info (version, git commit)",
            "/actuator/env \u2014 environment properties (restrict in production)",
            "/actuator/loggers \u2014 change log levels at runtime without restart",
            "/actuator/threaddump \u2014 current thread states for debugging"
          ]
        },
        {
          type: "code",
          language: "java",
          content: `@Component
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
}`
        },
        { type: "tip", content: "In production, expose only /health and /info publicly. Secure other endpoints with Spring Security or restrict them to internal networks." }
      ]
    },
    {
      id: "spring-boot-ch4",
      title: "Testing Spring Boot Apps",
      description: "@SpringBootTest, @WebMvcTest, @DataJpaTest, Mockito, and Testcontainers.",
      estimatedMinutes: 14,
      blocks: [
        { type: "heading", content: "Testing in Spring Boot" },
        { type: "paragraph", content: "Spring Boot provides excellent testing support with test slices that load only the relevant application layer, making tests fast and focused." },
        { type: "subheading", content: "Unit Tests (No Spring Context)" },
        {
          type: "code",
          language: "java",
          content: `@ExtendWith(MockitoExtension.class)
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
}`
        },
        { type: "subheading", content: "Controller Tests (@WebMvcTest)" },
        {
          type: "code",
          language: "java",
          content: `@WebMvcTest(UserController.class)
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
}`
        },
        { type: "subheading", content: "Repository Tests (@DataJpaTest)" },
        {
          type: "code",
          language: "java",
          content: `@DataJpaTest
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
}`
        },
        { type: "tip", content: "Use Testcontainers for integration tests with real databases. @Testcontainers + @Container spin up real PostgreSQL/Redis in Docker during tests \u2014 much more reliable than H2." }
      ]
    },
    {
      id: "spring-boot-ch5",
      title: "Building & Deploying",
      description: "Fat JARs, Docker images, Kubernetes health probes, and production JVM flags.",
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Building & Deploying Spring Boot Apps" },
        { type: "paragraph", content: 'Spring Boot applications are packaged as executable "fat JARs" that embed the server. Modern deployments use Docker containers orchestrated by Kubernetes.' },
        { type: "subheading", content: "Multi-Stage Dockerfile" },
        {
          type: "code",
          language: "bash",
          content: `# Stage 1: Build
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
ENTRYPOINT ["java", "-jar", "app.jar"]`
        },
        { type: "subheading", content: "Kubernetes Health Probes" },
        {
          type: "code",
          language: "yaml",
          content: `livenessProbe:
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
  periodSeconds: 5`
        },
        {
          type: "bullet-list",
          content: "Production JVM flags:",
          items: [
            "-Xms256m -Xmx512m \u2014 explicit heap for containers",
            "-XX:+UseG1GC \u2014 G1 garbage collector",
            "-XX:MaxRAMPercentage=75 \u2014 use 75% of container memory",
            "-XX:+ExitOnOutOfMemoryError \u2014 fail fast, let Kubernetes restart",
            "-Dspring.profiles.active=prod \u2014 activate production profile"
          ]
        }
      ]
    }
  ]
};

// src/app/data/tutorials/index.ts
var ALL_TUTORIALS = [
  JAVA_FUNDAMENTALS_TUTORIAL,
  SPRING_FRAMEWORK_TUTORIAL,
  SPRING_BOOT_TUTORIAL
];

// src/app/search.service.ts
var RECENT_KEY = "search_recent";
var MAX_RECENT = 5;
var SearchService = class _SearchService {
  index = [];
  constructor() {
    this.buildIndex();
  }
  buildIndex() {
    const allIq = [
      ...CORE_JAVA_QUESTIONS,
      ...SPRING_BOOT_QUESTIONS,
      ...HIBERNATE_QUESTIONS,
      ...SPRING_REACTIVE_QUESTIONS,
      ...MICROSERVICES_QUESTIONS,
      ...MULTITHREADING_QUESTIONS,
      ...REACTIVE_PROGRAMMING_QUESTIONS,
      ...CODING_QUESTIONS
    ];
    for (const q of allIq) {
      const slug = this.categoryToSlug(q.category);
      this.index.push({
        id: `iq-${q.id}`,
        type: "interview",
        title: q.question,
        subtitle: q.category,
        icon: "fa-solid fa-circle-question",
        color: "#6366f1",
        route: ["/interview-questions", slug, String(q.id)]
      });
    }
    for (const p of LEETCODE_PROBLEMS) {
      this.index.push({
        id: `lc-${p.number}`,
        type: "leetcode",
        title: `${p.number}. ${p.title}`,
        subtitle: `${p.difficulty} \xB7 ${p.category}`,
        icon: "fa-solid fa-trophy",
        color: "#f59e0b",
        route: ["/leetcode", String(p.number)]
      });
    }
    for (const tut of ALL_TUTORIALS) {
      for (const ch of tut.chapters) {
        this.index.push({
          id: `tut-${tut.id}-${ch.id}`,
          type: "tutorial",
          title: ch.title,
          subtitle: tut.title,
          icon: "fa-solid fa-book-open",
          color: "#10b981",
          route: ["/tutorials", tut.id, ch.id]
        });
      }
    }
    for (const exp of CURATED_EXPERIENCES) {
      this.index.push({
        id: `exp-${exp.id}`,
        type: "experience",
        title: `${exp.company} \u2014 ${exp.role}`,
        subtitle: exp.result.charAt(0).toUpperCase() + exp.result.slice(1),
        icon: "fa-solid fa-microphone-lines",
        color: "#10b981",
        route: ["/experiences", exp.id]
      });
    }
  }
  search(query) {
    if (!query.trim())
      return [];
    const q = query.toLowerCase();
    return this.index.filter((r) => r.title.toLowerCase().includes(q) || r.subtitle.toLowerCase().includes(q)).slice(0, 30);
  }
  getRecentSearches() {
    try {
      return JSON.parse(localStorage.getItem(RECENT_KEY) ?? "[]");
    } catch {
      return [];
    }
  }
  addRecentSearch(term) {
    if (!term.trim())
      return;
    const list = this.getRecentSearches().filter((s) => s !== term);
    list.unshift(term);
    localStorage.setItem(RECENT_KEY, JSON.stringify(list.slice(0, MAX_RECENT)));
  }
  clearRecentSearches() {
    localStorage.removeItem(RECENT_KEY);
  }
  categoryToSlug(category) {
    const map = {
      "Core Java": "core-java",
      "Spring Boot": "spring-boot",
      "Hibernate": "hibernate",
      "Spring Reactive": "spring-reactive",
      "Microservices": "microservices",
      "Multithreading": "multithreading",
      "Reactive Programming": "reactive-prog",
      "Coding Questions": "coding-patterns"
    };
    return map[category] ?? category.toLowerCase().replace(/\s+/g, "-");
  }
  static \u0275fac = function SearchService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SearchService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SearchService, factory: _SearchService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

// src/app/search-modal/search-modal.component.ts
var _c0 = ["searchInput"];
var _c1 = () => [0, 1];
var _forTrack0 = ($index, $item) => $item.type;
var _forTrack1 = ($index, $item) => $item.id;
function SearchModalComponent_ng_template_2_Conditional_8_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function SearchModalComponent_ng_template_2_Conditional_8_For_7_Template_button_click_0_listener() {
      const term_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.setQuery(term_r6));
    });
    \u0275\u0275element(1, "i", 16);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const term_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(term_r6);
  }
}
function SearchModalComponent_ng_template_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 11)(2, "span", 12);
    \u0275\u0275text(3, "Recent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 13);
    \u0275\u0275listener("click", function SearchModalComponent_ng_template_2_Conditional_8_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.clearRecent());
    });
    \u0275\u0275text(5, "Clear");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(6, SearchModalComponent_ng_template_2_Conditional_8_For_7_Template, 4, 1, "button", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r2.recentSearches());
  }
}
function SearchModalComponent_ng_template_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "i", 17);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Search across tutorials, interview questions, LeetCode problems and more");
    \u0275\u0275elementEnd()();
  }
}
function SearchModalComponent_ng_template_2_Conditional_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "i", 18);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1('No results for "', ctx_r2.query(), '"');
  }
}
function SearchModalComponent_ng_template_2_Conditional_10_Conditional_1_For_1_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function SearchModalComponent_ng_template_2_Conditional_10_Conditional_1_For_1_For_7_Template_button_click_0_listener() {
      const item_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.navigate(item_r8));
    });
    \u0275\u0275elementStart(1, "div", 22);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 23)(4, "span", 24);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 25);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "i", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r2.iconBg(item_r8.color));
    \u0275\u0275advance();
    \u0275\u0275classMap(item_r8.icon);
    \u0275\u0275styleProp("color", item_r8.color);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r8.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r8.subtitle);
  }
}
function SearchModalComponent_ng_template_2_Conditional_10_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 11)(2, "span", 12);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 19);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(6, SearchModalComponent_ng_template_2_Conditional_10_Conditional_1_For_1_For_7_Template, 9, 8, "button", 20, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.typeLabel(group_r9.type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(group_r9.items.length);
    \u0275\u0275advance();
    \u0275\u0275repeater(group_r9.items);
  }
}
function SearchModalComponent_ng_template_2_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SearchModalComponent_ng_template_2_Conditional_10_Conditional_1_For_1_Template, 8, 2, "div", 9, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275repeater(ctx_r2.grouped());
  }
}
function SearchModalComponent_ng_template_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SearchModalComponent_ng_template_2_Conditional_10_Conditional_0_Template, 4, 1, "div", 10)(1, SearchModalComponent_ng_template_2_Conditional_10_Conditional_1_Template, 2, 0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r2.grouped().length === 0 ? 0 : 1);
  }
}
function SearchModalComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
    \u0275\u0275element(2, "i", 5);
    \u0275\u0275elementStart(3, "input", 6, 1);
    \u0275\u0275listener("input", function SearchModalComponent_ng_template_2_Template_input_input_3_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 7);
    \u0275\u0275listener("click", function SearchModalComponent_ng_template_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.close());
    });
    \u0275\u0275text(6, "Cancel");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 8);
    \u0275\u0275conditionalCreate(8, SearchModalComponent_ng_template_2_Conditional_8_Template, 8, 0, "div", 9);
    \u0275\u0275conditionalCreate(9, SearchModalComponent_ng_template_2_Conditional_9_Template, 4, 0, "div", 10);
    \u0275\u0275conditionalCreate(10, SearchModalComponent_ng_template_2_Conditional_10_Template, 2, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r2.query());
    \u0275\u0275advance(5);
    \u0275\u0275conditional(!ctx_r2.query() && ctx_r2.recentSearches().length > 0 ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.query() && ctx_r2.recentSearches().length === 0 ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.query() ? 10 : -1);
  }
}
var TYPE_LABELS = {
  interview: "Interview Questions",
  coding: "Coding Questions",
  leetcode: "LeetCode",
  tutorial: "Tutorials",
  experience: "Experiences"
};
var TYPE_ORDER = ["tutorial", "interview", "coding", "leetcode", "experience"];
var SearchModalComponent = class _SearchModalComponent {
  searchService = inject(SearchService);
  router = inject(Router);
  inputRef;
  isOpen = signal(false, ...ngDevMode ? [{ debugName: "isOpen" }] : []);
  query = signal("", ...ngDevMode ? [{ debugName: "query" }] : []);
  recentSearches = signal([], ...ngDevMode ? [{ debugName: "recentSearches" }] : []);
  results = computed(() => this.searchService.search(this.query()), ...ngDevMode ? [{ debugName: "results" }] : []);
  grouped = computed(() => {
    const map = /* @__PURE__ */ new Map();
    for (const r of this.results()) {
      if (!map.has(r.type))
        map.set(r.type, []);
      map.get(r.type).push(r);
    }
    return TYPE_ORDER.filter((t) => map.has(t)).map((t) => ({ type: t, items: map.get(t) }));
  }, ...ngDevMode ? [{ debugName: "grouped" }] : []);
  ngAfterViewInit() {
  }
  open() {
    this.recentSearches.set(this.searchService.getRecentSearches());
    this.isOpen.set(true);
  }
  close() {
    this.isOpen.set(false);
    this.query.set("");
  }
  onDidPresent() {
    setTimeout(() => this.inputRef?.nativeElement?.focus(), 100);
  }
  onInput(e) {
    this.query.set(e.target.value);
  }
  setQuery(term) {
    this.query.set(term);
    if (this.inputRef?.nativeElement) {
      this.inputRef.nativeElement.value = term;
    }
  }
  clearRecent() {
    this.searchService.clearRecentSearches();
    this.recentSearches.set([]);
  }
  navigate(item) {
    this.searchService.addRecentSearch(this.query() || item.title);
    this.close();
    this.router.navigate(item.route);
  }
  typeLabel(type) {
    return TYPE_LABELS[type];
  }
  iconBg(color) {
    return color + "1a";
  }
  static \u0275fac = function SearchModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SearchModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SearchModalComponent, selectors: [["app-search-modal"]], viewQuery: function SearchModalComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.inputRef = _t.first);
    }
  }, decls: 3, vars: 3, consts: [["modal", ""], ["searchInput", ""], ["initialBreakpoint", "1", "cssClass", "search-modal", 3, "didPresent", "willDismiss", "isOpen", "breakpoints"], [1, "sm-wrap"], [1, "sm-input-row"], [1, "fa-solid", "fa-magnifying-glass", "sm-search-icon"], ["type", "search", "placeholder", "Search tutorials, questions, problems...", "autocomplete", "off", 1, "sm-input", 3, "input", "value"], [1, "sm-cancel", 3, "click"], [1, "sm-body"], [1, "sm-section"], [1, "sm-hint"], [1, "sm-section-head"], [1, "sm-section-title"], [1, "sm-clear-btn", 3, "click"], [1, "sm-recent-item"], [1, "sm-recent-item", 3, "click"], [1, "fa-solid", "fa-clock-rotate-left", "sm-recent-icon"], [1, "fa-solid", "fa-magnifying-glass", "sm-hint-icon"], [1, "fa-solid", "fa-face-frown", "sm-hint-icon"], [1, "sm-section-count"], [1, "sm-result-item"], [1, "sm-result-item", 3, "click"], [1, "sm-result-icon"], [1, "sm-result-info"], [1, "sm-result-title"], [1, "sm-result-sub"], [1, "fa-solid", "fa-chevron-right", "sm-result-arrow"]], template: function SearchModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "ion-modal", 2, 0);
      \u0275\u0275listener("didPresent", function SearchModalComponent_Template_ion_modal_didPresent_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onDidPresent());
      })("willDismiss", function SearchModalComponent_Template_ion_modal_willDismiss_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.close());
      });
      \u0275\u0275template(2, SearchModalComponent_ng_template_2_Template, 11, 4, "ng-template");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("isOpen", ctx.isOpen())("breakpoints", \u0275\u0275pureFunction0(2, _c1));
    }
  }, dependencies: [IonModal], styles: ["\n\n[_nghost-%COMP%] {\n  display: contents;\n}\n.sm-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  background: #0b1120;\n}\n.sm-input-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 16px 10px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n  background: #0b1120;\n}\n.sm-search-icon[_ngcontent-%COMP%] {\n  color: #475569;\n  font-size: 0.9rem;\n  flex-shrink: 0;\n}\n.sm-input[_ngcontent-%COMP%] {\n  flex: 1;\n  background: transparent;\n  border: none;\n  outline: none;\n  color: #e2e8f0;\n  font-size: 1rem;\n  font-weight: 500;\n  caret-color: #10b981;\n}\n.sm-input[_ngcontent-%COMP%]::placeholder {\n  color: #475569;\n}\n.sm-input[_ngcontent-%COMP%]::-webkit-search-cancel-button {\n  display: none;\n}\n.sm-cancel[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #10b981;\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n  padding: 4px 0;\n  flex-shrink: 0;\n}\n.sm-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 8px 0 40px;\n}\n.sm-section[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.sm-section-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 16px 6px;\n}\n.sm-section-title[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #475569;\n}\n.sm-section-count[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  font-weight: 600;\n  color: #334155;\n}\n.sm-clear-btn[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 600;\n  color: #f87171;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n}\n.sm-recent-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n  text-align: left;\n  padding: 11px 16px;\n  background: none;\n  border: none;\n  color: #94a3b8;\n  font-size: 0.85rem;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.sm-recent-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.03);\n}\n.sm-recent-icon[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #475569;\n  flex-shrink: 0;\n}\n.sm-result-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n  text-align: left;\n  padding: 10px 16px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.sm-result-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.03);\n}\n.sm-result-item[_ngcontent-%COMP%]:active {\n  background: rgba(255, 255, 255, 0.05);\n}\n.sm-result-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.8rem;\n}\n.sm-result-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.sm-result-title[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #e2e8f0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sm-result-sub[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.sm-result-arrow[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  color: #334155;\n  flex-shrink: 0;\n}\n.sm-hint[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px 24px 40px;\n  text-align: center;\n  gap: 12px;\n}\n.sm-hint-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #334155;\n}\n.sm-hint[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #475569;\n  line-height: 1.6;\n  margin: 0;\n}\n/*# sourceMappingURL=search-modal.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchModalComponent, [{
    type: Component,
    args: [{ selector: "app-search-modal", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IonModal], template: `
    <ion-modal
      #modal
      [isOpen]="isOpen()"
      (didPresent)="onDidPresent()"
      (willDismiss)="close()"
      [breakpoints]="[0, 1]"
      initialBreakpoint="1"
      cssClass="search-modal">

      <ng-template>
        <div class="sm-wrap">

          <!-- Search Input Row -->
          <div class="sm-input-row">
            <i class="fa-solid fa-magnifying-glass sm-search-icon"></i>
            <input
              #searchInput
              class="sm-input"
              type="search"
              placeholder="Search tutorials, questions, problems..."
              autocomplete="off"
              [value]="query()"
              (input)="onInput($event)" />
            <button class="sm-cancel" (click)="close()">Cancel</button>
          </div>

          <div class="sm-body">

            <!-- Recent Searches -->
            @if (!query() && recentSearches().length > 0) {
              <div class="sm-section">
                <div class="sm-section-head">
                  <span class="sm-section-title">Recent</span>
                  <button class="sm-clear-btn" (click)="clearRecent()">Clear</button>
                </div>
                @for (term of recentSearches(); track term) {
                  <button class="sm-recent-item" (click)="setQuery(term)">
                    <i class="fa-solid fa-clock-rotate-left sm-recent-icon"></i>
                    <span>{{ term }}</span>
                  </button>
                }
              </div>
            }

            <!-- Empty query hint -->
            @if (!query() && recentSearches().length === 0) {
              <div class="sm-hint">
                <i class="fa-solid fa-magnifying-glass sm-hint-icon"></i>
                <p>Search across tutorials, interview questions, LeetCode problems and more</p>
              </div>
            }

            <!-- Results -->
            @if (query()) {
              @if (grouped().length === 0) {
                <div class="sm-hint">
                  <i class="fa-solid fa-face-frown sm-hint-icon"></i>
                  <p>No results for "{{ query() }}"</p>
                </div>
              } @else {
                @for (group of grouped(); track group.type) {
                  <div class="sm-section">
                    <div class="sm-section-head">
                      <span class="sm-section-title">{{ typeLabel(group.type) }}</span>
                      <span class="sm-section-count">{{ group.items.length }}</span>
                    </div>
                    @for (item of group.items; track item.id) {
                      <button class="sm-result-item" (click)="navigate(item)">
                        <div class="sm-result-icon" [style.background]="iconBg(item.color)">
                          <i [class]="item.icon" [style.color]="item.color"></i>
                        </div>
                        <div class="sm-result-info">
                          <span class="sm-result-title">{{ item.title }}</span>
                          <span class="sm-result-sub">{{ item.subtitle }}</span>
                        </div>
                        <i class="fa-solid fa-chevron-right sm-result-arrow"></i>
                      </button>
                    }
                  </div>
                }
              }
            }

          </div>
        </div>
      </ng-template>
    </ion-modal>
  `, styles: ["/* angular:styles/component:css;ffbffa034409c3d0886b35187fde3622f2e5a3607c62f2251995f6bbc0ac14f2;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/search-modal/search-modal.component.ts */\n:host {\n  display: contents;\n}\n.sm-wrap {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  background: #0b1120;\n}\n.sm-input-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 16px 10px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n  background: #0b1120;\n}\n.sm-search-icon {\n  color: #475569;\n  font-size: 0.9rem;\n  flex-shrink: 0;\n}\n.sm-input {\n  flex: 1;\n  background: transparent;\n  border: none;\n  outline: none;\n  color: #e2e8f0;\n  font-size: 1rem;\n  font-weight: 500;\n  caret-color: #10b981;\n}\n.sm-input::placeholder {\n  color: #475569;\n}\n.sm-input::-webkit-search-cancel-button {\n  display: none;\n}\n.sm-cancel {\n  background: none;\n  border: none;\n  color: #10b981;\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n  padding: 4px 0;\n  flex-shrink: 0;\n}\n.sm-body {\n  flex: 1;\n  overflow-y: auto;\n  padding: 8px 0 40px;\n}\n.sm-section {\n  margin-bottom: 4px;\n}\n.sm-section-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 16px 6px;\n}\n.sm-section-title {\n  font-size: 0.6rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #475569;\n}\n.sm-section-count {\n  font-size: 0.6rem;\n  font-weight: 600;\n  color: #334155;\n}\n.sm-clear-btn {\n  font-size: 0.65rem;\n  font-weight: 600;\n  color: #f87171;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n}\n.sm-recent-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n  text-align: left;\n  padding: 11px 16px;\n  background: none;\n  border: none;\n  color: #94a3b8;\n  font-size: 0.85rem;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.sm-recent-item:hover {\n  background: rgba(255, 255, 255, 0.03);\n}\n.sm-recent-icon {\n  font-size: 0.7rem;\n  color: #475569;\n  flex-shrink: 0;\n}\n.sm-result-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n  text-align: left;\n  padding: 10px 16px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.sm-result-item:hover {\n  background: rgba(255, 255, 255, 0.03);\n}\n.sm-result-item:active {\n  background: rgba(255, 255, 255, 0.05);\n}\n.sm-result-icon {\n  flex-shrink: 0;\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.8rem;\n}\n.sm-result-info {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.sm-result-title {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #e2e8f0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sm-result-sub {\n  font-size: 0.65rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.sm-result-arrow {\n  font-size: 0.6rem;\n  color: #334155;\n  flex-shrink: 0;\n}\n.sm-hint {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px 24px 40px;\n  text-align: center;\n  gap: 12px;\n}\n.sm-hint-icon {\n  font-size: 2rem;\n  color: #334155;\n}\n.sm-hint p {\n  font-size: 0.8rem;\n  color: #475569;\n  line-height: 1.6;\n  margin: 0;\n}\n/*# sourceMappingURL=search-modal.component.css.map */\n"] }]
  }], null, { inputRef: [{
    type: ViewChild,
    args: ["searchInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchModalComponent, { className: "SearchModalComponent", filePath: "src/app/search-modal/search-modal.component.ts", lineNumber: 278 });
})();

export {
  SearchModalComponent
};
//# sourceMappingURL=chunk-PTAGLL6J.js.map
