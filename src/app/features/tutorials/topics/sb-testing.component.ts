import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-sb-testing',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="Testing Spring Boot" subtitle="Comprehensive testing with SpringBootTest, MockMvc, Testcontainers, test slices, and test profiles." badge="SPRING BOOT" gradient="linear-gradient(135deg, #065f46, #34d399)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-emerald" /> Testing in Boot</h2>
        <div class="prose">
          <p><code>spring-boot-starter-test</code> includes JUnit 5, Mockito, AssertJ, Hamcrest, and MockMvc — everything needed.</p>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Test Types</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">&#64;WebMvcTest</h3><app-code-block [code]="codeMvc" /></div>
          <div class="op-card"><h3 class="op-title">&#64;DataJpaTest</h3><app-code-block [code]="codeJpa" /></div>
          <div class="op-card"><h3 class="op-title">Testcontainers</h3><app-code-block [code]="codeContainers" /></div>
          <div class="op-card"><h3 class="op-title">Test Config</h3><app-code-block [code]="codeTestConfig" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-emerald { color: #059669; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; } .prose code { background: #f1f5f9; padding: 2px 7px; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #059669; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class SbTestingComponent {
  codeIntro = `@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class UserApiIT {
    @Autowired TestRestTemplate restTemplate;

    @Test
    void shouldCreateUser() {
        CreateUserDTO dto = new CreateUserDTO("Alice", "alice@test.com", 25);
        ResponseEntity<UserDTO> response = restTemplate
            .postForEntity("/api/users", dto, UserDTO.class);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.CREATED);
        assertThat(response.getBody().name()).isEqualTo("Alice");
    }
}`;
  codeMvc = `@WebMvcTest(UserController.class) // only loads MVC layer
class UserControllerTest {
    @Autowired MockMvc mockMvc;
    @MockBean UserService userService;

    @Test
    void shouldReturnUser() throws Exception {
        when(userService.findById(1L)).thenReturn(Optional.of(testUser));
        mockMvc.perform(get("/api/users/1"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.name").value("Alice"))
            .andExpect(jsonPath("$.email").value("alice@test.com"));
    }

    @Test
    void shouldReturn404WhenNotFound() throws Exception {
        when(userService.findById(99L)).thenReturn(Optional.empty());
        mockMvc.perform(get("/api/users/99"))
            .andExpect(status().isNotFound());
    }
}`;
  codeJpa = `@DataJpaTest // loads only JPA components + embedded DB
class UserRepositoryTest {
    @Autowired UserRepository repository;
    @Autowired TestEntityManager entityManager;

    @Test
    void shouldFindByEmail() {
        entityManager.persist(new User("Alice", "alice@test.com", 25));
        entityManager.flush();

        Optional<User> found = repository.findByEmail("alice@test.com");

        assertThat(found).isPresent();
        assertThat(found.get().getName()).isEqualTo("Alice");
    }
}`;
  codeContainers = `@SpringBootTest
@Testcontainers
class UserServiceIT {
    @Container
    static PostgreSQLContainer<?> postgres =
        new PostgreSQLContainer<>("postgres:15")
            .withDatabaseName("testdb");

    @DynamicPropertySource
    static void setProperties(DynamicPropertyRegistry registry) {
        registry.add("spring.datasource.url", postgres::getJdbcUrl);
        registry.add("spring.datasource.username", postgres::getUsername);
        registry.add("spring.datasource.password", postgres::getPassword);
    }

    @Autowired UserService userService;

    @Test
    void shouldSaveToRealPostgres() {
        User user = userService.create(new CreateUserDTO("Bob", "bob@test.com", 30));
        assertThat(user.getId()).isNotNull();
    }
}`;
  codeTestConfig = `# application-test.yml
spring:
  datasource:
    url: jdbc:h2:mem:testdb
  jpa:
    hibernate:
      ddl-auto: create-drop
  sql:
    init:
      mode: never
logging:
  level:
    org.springframework: WARN

# Run with:
# @ActiveProfiles("test") on test class`;
}
