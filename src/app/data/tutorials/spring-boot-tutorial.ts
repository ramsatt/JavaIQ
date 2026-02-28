import { Tutorial } from '../tutorial.model';

export const SPRING_BOOT_TUTORIAL: Tutorial = {
  id: 'spring-boot',
  title: 'Spring Boot',
  description: 'Production-grade Spring Boot — auto-configuration, Actuator, testing, and deployment.',
  icon: 'bi-rocket-takeoff',
  color: '#40C4FF',
  chapters: [
    {
      id: 'spring-boot-ch1',
      title: 'Auto-Configuration Deep Dive',
      description: 'How @SpringBootApplication and auto-configuration magic really works.',
      estimatedMinutes: 10,
      blocks: [
        { type: 'heading', content: 'Spring Boot Auto-Configuration' },
        { type: 'paragraph', content: 'Spring Boot eliminates XML configuration and reduces boilerplate by automatically configuring your application based on the JARs on the classpath. Understanding how this works is crucial for interviews and debugging.' },
        { type: 'subheading', content: '@SpringBootApplication Breakdown' },
        {
          type: 'code', language: 'java',
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
        { type: 'subheading', content: 'How Auto-Configuration Works' },
        {
          type: 'numbered-list', content: 'Auto-config mechanism:',
          items: [
            'Spring Boot scans META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports',
            'Each listed AutoConfiguration class is conditionally applied based on @ConditionalOn* annotations',
            '@ConditionalOnClass — applies only if class is on classpath',
            '@ConditionalOnMissingBean — applies only if no bean of that type is registered',
            '@ConditionalOnProperty — applies based on property value'
          ]
        },
        {
          type: 'code', language: 'java',
          content: `@Configuration
@ConditionalOnClass(DataSource.class)        // JDBC driver is on classpath
@ConditionalOnMissingBean(DataSource.class)  // no custom DataSource defined
@EnableConfigurationProperties(DataSourceProperties.class)
public class DataSourceAutoConfiguration {
    // Creates DataSource bean from spring.datasource.* properties
}`
        },
        { type: 'tip', content: 'Run your app with --debug flag to see the auto-configuration report: which configs were applied (positive matches) and which were skipped (negative matches). Essential for debugging.' }
      ]
    },
    {
      id: 'spring-boot-ch2',
      title: 'Configuration & Profiles',
      description: 'application.properties, @ConfigurationProperties, environment-specific configs.',
      estimatedMinutes: 10,
      blocks: [
        { type: 'heading', content: 'Configuration Management' },
        { type: 'paragraph', content: 'Spring Boot supports externalized configuration through properties files, YAML, environment variables, and command-line arguments. Profile-specific configs enable environment-specific behavior.' },
        {
          type: 'code', language: 'yaml',
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
        { type: 'subheading', content: '@ConfigurationProperties' },
        {
          type: 'code', language: 'java',
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
        { type: 'note', content: 'Use @ConfigurationProperties over @Value for groups of related properties. It supports validation, type safety, and IDE autocomplete via spring-boot-configuration-processor.' }
      ]
    },
    {
      id: 'spring-boot-ch3',
      title: 'Spring Boot Actuator',
      description: 'Production-ready endpoints for health checks, metrics, and monitoring.',
      estimatedMinutes: 8,
      blocks: [
        { type: 'heading', content: 'Spring Boot Actuator' },
        { type: 'paragraph', content: 'Actuator provides production-ready features for monitoring and managing your application. It exposes endpoints for health, metrics, info, environment, and more.' },
        {
          type: 'code', language: 'yaml',
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
          type: 'bullet-list', content: 'Key Actuator endpoints:',
          items: [
            '/actuator/health — app health (UP/DOWN/DEGRADED), includes DB, disk, custom checks',
            '/actuator/metrics — Micrometer metrics (JVM, HTTP, DB connection pool)',
            '/actuator/info — custom app info (version, git commit)',
            '/actuator/env — environment properties (restrict in production)',
            '/actuator/loggers — change log levels at runtime without restart',
            '/actuator/threaddump — current thread states for debugging'
          ]
        },
        {
          type: 'code', language: 'java',
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
        { type: 'tip', content: 'In production, expose only /health and /info publicly. Secure other endpoints with Spring Security or restrict them to internal networks.' }
      ]
    },
    {
      id: 'spring-boot-ch4',
      title: 'Testing Spring Boot Apps',
      description: '@SpringBootTest, @WebMvcTest, @DataJpaTest, Mockito, and Testcontainers.',
      estimatedMinutes: 14,
      blocks: [
        { type: 'heading', content: 'Testing in Spring Boot' },
        { type: 'paragraph', content: 'Spring Boot provides excellent testing support with test slices that load only the relevant application layer, making tests fast and focused.' },
        { type: 'subheading', content: 'Unit Tests (No Spring Context)' },
        {
          type: 'code', language: 'java',
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
        { type: 'subheading', content: 'Controller Tests (@WebMvcTest)' },
        {
          type: 'code', language: 'java',
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
        { type: 'subheading', content: 'Repository Tests (@DataJpaTest)' },
        {
          type: 'code', language: 'java',
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
        { type: 'tip', content: 'Use Testcontainers for integration tests with real databases. @Testcontainers + @Container spin up real PostgreSQL/Redis in Docker during tests — much more reliable than H2.' }
      ]
    },
    {
      id: 'spring-boot-ch5',
      title: 'Building & Deploying',
      description: 'Fat JARs, Docker images, Kubernetes health probes, and production JVM flags.',
      estimatedMinutes: 10,
      blocks: [
        { type: 'heading', content: 'Building & Deploying Spring Boot Apps' },
        { type: 'paragraph', content: 'Spring Boot applications are packaged as executable "fat JARs" that embed the server. Modern deployments use Docker containers orchestrated by Kubernetes.' },
        { type: 'subheading', content: 'Multi-Stage Dockerfile' },
        {
          type: 'code', language: 'bash',
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
        { type: 'subheading', content: 'Kubernetes Health Probes' },
        {
          type: 'code', language: 'yaml',
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
          type: 'bullet-list', content: 'Production JVM flags:',
          items: [
            '-Xms256m -Xmx512m — explicit heap for containers',
            '-XX:+UseG1GC — G1 garbage collector',
            '-XX:MaxRAMPercentage=75 — use 75% of container memory',
            '-XX:+ExitOnOutOfMemoryError — fail fast, let Kubernetes restart',
            '-Dspring.profiles.active=prod — activate production profile'
          ]
        }
      ]
    }
  ]
};
