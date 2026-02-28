import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-spring-testing',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="Testing Spring Apps" subtitle="Write reliable tests. Master unit tests, integration tests, MockMvc, and the TestContext framework." badge="SPRING FRAMEWORK" gradient="linear-gradient(135deg, #065f46, #34d399)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-emerald" /> Testing Pyramid</h2>
        <div class="prose">
          <p>Spring provides excellent testing support with the <strong>TestContext framework</strong> that caches ApplicationContext across tests.</p>
          <ul>
            <li><strong>Unit Tests:</strong> Fast, no Spring context. Mock dependencies with Mockito.</li>
            <li><strong>Slice Tests:</strong> Load ONLY relevant beans (&#64;WebMvcTest, &#64;DataJpaTest).</li>
            <li><strong>Integration Tests:</strong> Full context with &#64;SpringBootTest. Test everything together.</li>
          </ul>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title"><app-icon name="play" [size]="22" css="icon-emerald" /> Test Type Comparison</h3>
          <div class="test-pyramid">
            @for (level of levels(); track level.name) {
              <div class="pyramid-level" [class.active]="activeLevel() === level.name" [style.width]="level.width" (click)="selectLevel(level.name)">
                <span class="level-name">{{ level.name }}</span>
                <span class="level-speed">{{ level.speed }}</span>
              </div>
            }
          </div>
          <div class="viz-status">{{ status() }}</div>
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Test Patterns</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Unit Test + Mockito</h3><p class="op-desc">Test service logic in isolation.</p><app-code-block [code]="codeUnit" /></div>
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> &#64;WebMvcTest</h3><p class="op-desc">Test controllers without full context.</p><app-code-block [code]="codeMvc" /></div>
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> &#64;DataJpaTest</h3><p class="op-desc">Test repositories with embedded DB.</p><app-code-block [code]="codeJpa" /></div>
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> &#64;SpringBootTest</h3><p class="op-desc">Full integration test with real context.</p><app-code-block [code]="codeIntegration" /></div>
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="briefcase" [size]="28" css="icon-emerald" /> Best Practices</h2>
        <div class="use-cases">
          <div class="use-case emerald"><div class="use-num emerald-bg">1</div><div><h4 class="use-title">Test Slices Over Full Context</h4><p class="use-desc">Use <code>&#64;WebMvcTest</code> instead of <code>&#64;SpringBootTest</code> for controller tests. Loads only MVC beans — 10x faster startup.</p></div></div>
          <div class="use-case blue"><div class="use-num blue-bg">2</div><div><h4 class="use-title">Testcontainers for Real DBs</h4><p class="use-desc">Use Docker containers for integration tests: real MySQL/PostgreSQL instead of H2. Catches production-only issues early.</p></div></div>
          <div class="use-case purple"><div class="use-num purple-bg">3</div><div><h4 class="use-title">Context Caching</h4><p class="use-desc">Spring caches ApplicationContext between tests with same config. Don't pollute it — use <code>&#64;DirtiesContext</code> only when necessary.</p></div></div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-emerald { color: #059669; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; } .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; } .prose li { margin-bottom: 8px; } .prose strong { color: #0f172a; font-weight: 700; } .prose code { background: #f1f5f9; padding: 2px 7px; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #059669; }
    .viz-card { background: #fff; border-radius: 18px; border: 1px solid #e2e8f0; box-shadow: 0 4px 16px rgba(0,0,0,0.05); padding: 28px 24px; } .viz-title { display: flex; align-items: center; gap: 10px; font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0 0 24px; }
    .test-pyramid { display: flex; flex-direction: column; align-items: center; gap: 6px; margin-bottom: 20px; }
    .pyramid-level { padding: 12px; border-radius: 10px; border: 2px solid #e2e8f0; text-align: center; cursor: pointer; transition: all 0.3s; }
    .pyramid-level.active { border-color: #059669; background: #ecfdf5; transform: scale(1.03); }
    .level-name { display: block; font-size: 0.78rem; font-weight: 800; color: #0f172a; } .level-speed { display: block; font-size: 0.55rem; color: #059669; font-weight: 600; }
    .viz-status { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px 16px; text-align: center; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; color: #334155; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.06); } .op-title { display: flex; align-items: center; gap: 8px; font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; } .op-desc { font-size: 0.78rem; color: #64748b; line-height: 1.55; margin: 0; }
    .use-cases { display: flex; flex-direction: column; gap: 12px; } .use-case { display: flex; gap: 16px; padding: 20px; border-radius: 14px; border: 1px solid; } .use-case.emerald { background: #ecfdf5; border-color: #a7f3d0; } .use-case.blue { background: #eff6ff; border-color: #bfdbfe; } .use-case.purple { background: #faf5ff; border-color: #d8b4fe; }
    .use-num { width: 34px; height: 34px; min-width: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 0.78rem; font-weight: 800; } .emerald-bg { background: #059669; } .blue-bg { background: #3b82f6; } .purple-bg { background: #8b5cf6; }
    .use-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 4px; } .use-desc { font-size: 0.78rem; line-height: 1.55; margin: 0; color: #334155; } .use-desc code { background: rgba(0,0,0,0.06); padding: 1px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; }
  `
})
export class SpringTestingComponent {
  activeLevel = signal('');
  status = signal('Click a test level to see speed, scope, and when to use it.');
  levels = signal([
    { name: 'Unit Tests', speed: '⚡ ~1ms each', width: '50%' },
    { name: 'Slice Tests', speed: '🔄 ~500ms each', width: '70%' },
    { name: 'Integration Tests', speed: '🐢 ~2-5s each', width: '90%' },
  ]);
  codeIntro = `// Unit test — no Spring, pure logic
@ExtendWith(MockitoExtension.class)
class UserServiceTest {
    @Mock UserRepository repo;
    @InjectMocks UserService service;

    @Test void shouldFindUser() {
        when(repo.findById(1L))
            .thenReturn(Optional.of(testUser));
        User result = service.findById(1L);
        assertThat(result.getName()).isEqualTo("Alice");
    }
}`;
  codeUnit = `@ExtendWith(MockitoExtension.class)
class OrderServiceTest {
    @Mock PaymentService paymentService;
    @Mock InventoryService inventoryService;
    @InjectMocks OrderService orderService;

    @Test
    void shouldPlaceOrder() {
        when(inventoryService.isAvailable("SKU-1"))
            .thenReturn(true);
        when(paymentService.charge(any()))
            .thenReturn(PaymentResult.SUCCESS);

        Order order = orderService.place(orderRequest);

        assertThat(order.getStatus()).isEqualTo(CONFIRMED);
        verify(inventoryService).reserve("SKU-1");
    }
}`;
  codeMvc = `@WebMvcTest(UserController.class) // loads ONLY MVC
class UserControllerTest {
    @Autowired MockMvc mockMvc;
    @MockBean UserService userService;

    @Test
    void shouldReturnUsers() throws Exception {
        when(userService.findAll())
            .thenReturn(List.of(testUser));

        mockMvc.perform(get("/api/users"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$[0].name")
                .value("Alice"));
    }

    @Test
    void shouldReturn404() throws Exception {
        when(userService.findById(99L))
            .thenThrow(new UserNotFoundException(99L));

        mockMvc.perform(get("/api/users/99"))
            .andExpect(status().isNotFound());
    }
}`;
  codeJpa = `@DataJpaTest // loads JPA + embedded DB only
class UserRepositoryTest {
    @Autowired UserRepository repo;
    @Autowired TestEntityManager em;

    @Test
    void shouldFindByEmail() {
        em.persist(new User("Alice", "alice@test.com"));
        em.flush();

        Optional<User> found =
            repo.findByEmail("alice@test.com");

        assertThat(found).isPresent();
        assertThat(found.get().getName()).isEqualTo("Alice");
    }
}`;
  codeIntegration = `@SpringBootTest(webEnvironment = RANDOM_PORT)
class UserApiIntegrationTest {
    @Autowired TestRestTemplate restTemplate;

    @Test
    void shouldCreateAndGetUser() {
        // Create
        UserDTO dto = new UserDTO("Bob", "bob@test.com");
        ResponseEntity<User> created = restTemplate
            .postForEntity("/api/users", dto, User.class);
        assertThat(created.getStatusCode()).isEqualTo(CREATED);

        // Get
        Long id = created.getBody().getId();
        User fetched = restTemplate
            .getForObject("/api/users/" + id, User.class);
        assertThat(fetched.getName()).isEqualTo("Bob");
    }
}`;

  selectLevel(name: string) {
    this.activeLevel.set(name);
    const details: Record<string, string> = {
      'Unit Tests': 'Unit: No Spring context. Mockito mocks. ~1ms each. Test 90% of logic here! ⚡',
      'Slice Tests': 'Slice: Partial context (@WebMvcTest, @DataJpaTest). ~500ms. Test boundaries! 🔄',
      'Integration Tests': 'Integration: Full @SpringBootTest. ~2-5s. Test end-to-end flows sparingly! 🐢'
    };
    this.status.set(details[name] ?? '');
  }
}
