import {
  CodeBlockComponent,
  IconComponent,
  TutorialLayoutComponent
} from "./chunk-5ZPIB2CR.js";
import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-L6VISU4K.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/spring-testing.component.ts
var _forTrack0 = ($index, $item) => $item.name;
function SpringTestingComponent_For_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275listener("click", function SpringTestingComponent_For_32_Template_div_click_0_listener() {
      const level_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectLevel(level_r2.name));
    });
    \u0275\u0275elementStart(1, "span", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 30);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const level_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("width", level_r2.width);
    \u0275\u0275classProp("active", ctx_r2.activeLevel() === level_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(level_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(level_r2.speed);
  }
}
var SpringTestingComponent = class _SpringTestingComponent {
  activeLevel = signal("", ...ngDevMode ? [{ debugName: "activeLevel" }] : []);
  status = signal("Click a test level to see speed, scope, and when to use it.", ...ngDevMode ? [{ debugName: "status" }] : []);
  levels = signal([
    { name: "Unit Tests", speed: "\u26A1 ~1ms each", width: "50%" },
    { name: "Slice Tests", speed: "\u{1F504} ~500ms each", width: "70%" },
    { name: "Integration Tests", speed: "\u{1F422} ~2-5s each", width: "90%" }
  ], ...ngDevMode ? [{ debugName: "levels" }] : []);
  codeIntro = `// Unit test \u2014 no Spring, pure logic
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
  selectLevel(name) {
    this.activeLevel.set(name);
    const details = {
      "Unit Tests": "Unit: No Spring context. Mockito mocks. ~1ms each. Test 90% of logic here! \u26A1",
      "Slice Tests": "Slice: Partial context (@WebMvcTest, @DataJpaTest). ~500ms. Test boundaries! \u{1F504}",
      "Integration Tests": "Integration: Full @SpringBootTest. ~2-5s. Test end-to-end flows sparingly! \u{1F422}"
    };
    this.status.set(details[name] ?? "");
  }
  static \u0275fac = function SpringTestingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SpringTestingComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SpringTestingComponent, selectors: [["app-topic-spring-testing"]], decls: 106, vars: 14, consts: [["title", "Testing Spring Apps", "subtitle", "Write reliable tests. Master unit tests, integration tests, MockMvc, and the TestContext framework.", "badge", "SPRING FRAMEWORK", "gradient", "linear-gradient(135deg, #065f46, #34d399)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-emerald", 3, "size"], [1, "prose"], [3, "code"], [1, "viz-card"], [1, "viz-title"], ["name", "play", "css", "icon-emerald", 3, "size"], [1, "test-pyramid"], [1, "pyramid-level", 3, "active", "width"], [1, "viz-status"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"], ["name", "arrow-right", "css", "icon-indigo", 3, "size"], [1, "op-desc"], ["name", "briefcase", "css", "icon-emerald", 3, "size"], [1, "use-cases"], [1, "use-case", "emerald"], [1, "use-num", "emerald-bg"], [1, "use-title"], [1, "use-desc"], [1, "use-case", "blue"], [1, "use-num", "blue-bg"], [1, "use-case", "purple"], [1, "use-num", "purple-bg"], [1, "pyramid-level", 3, "click"], [1, "level-name"], [1, "level-speed"]], template: function SpringTestingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Testing Pyramid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7, "Spring provides excellent testing support with the ");
      \u0275\u0275elementStart(8, "strong");
      \u0275\u0275text(9, "TestContext framework");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " that caches ApplicationContext across tests.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "ul")(12, "li")(13, "strong");
      \u0275\u0275text(14, "Unit Tests:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(15, " Fast, no Spring context. Mock dependencies with Mockito.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "li")(17, "strong");
      \u0275\u0275text(18, "Slice Tests:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(19, " Load ONLY relevant beans (@WebMvcTest, @DataJpaTest).");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "li")(21, "strong");
      \u0275\u0275text(22, "Integration Tests:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(23, " Full context with @SpringBootTest. Test everything together.");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(24, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "section", 1)(26, "div", 6)(27, "h3", 7);
      \u0275\u0275element(28, "app-icon", 8);
      \u0275\u0275text(29, " Test Type Comparison");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 9);
      \u0275\u0275repeaterCreate(31, SpringTestingComponent_For_32_Template, 5, 6, "div", 10, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 11);
      \u0275\u0275text(34);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "section", 1)(36, "h2", 2);
      \u0275\u0275element(37, "app-icon", 12);
      \u0275\u0275text(38, " Test Patterns");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 13)(40, "div", 14)(41, "h3", 15);
      \u0275\u0275element(42, "app-icon", 16);
      \u0275\u0275text(43, " Unit Test + Mockito");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "p", 17);
      \u0275\u0275text(45, "Test service logic in isolation.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(46, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 14)(48, "h3", 15);
      \u0275\u0275element(49, "app-icon", 16);
      \u0275\u0275text(50, " @WebMvcTest");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "p", 17);
      \u0275\u0275text(52, "Test controllers without full context.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(53, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "div", 14)(55, "h3", 15);
      \u0275\u0275element(56, "app-icon", 16);
      \u0275\u0275text(57, " @DataJpaTest");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "p", 17);
      \u0275\u0275text(59, "Test repositories with embedded DB.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(60, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "div", 14)(62, "h3", 15);
      \u0275\u0275element(63, "app-icon", 16);
      \u0275\u0275text(64, " @SpringBootTest");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "p", 17);
      \u0275\u0275text(66, "Full integration test with real context.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(67, "app-code-block", 5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(68, "section", 1)(69, "h2", 2);
      \u0275\u0275element(70, "app-icon", 18);
      \u0275\u0275text(71, " Best Practices");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "div", 19)(73, "div", 20)(74, "div", 21);
      \u0275\u0275text(75, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "div")(77, "h4", 22);
      \u0275\u0275text(78, "Test Slices Over Full Context");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "p", 23);
      \u0275\u0275text(80, "Use ");
      \u0275\u0275elementStart(81, "code");
      \u0275\u0275text(82, "@WebMvcTest");
      \u0275\u0275elementEnd();
      \u0275\u0275text(83, " instead of ");
      \u0275\u0275elementStart(84, "code");
      \u0275\u0275text(85, "@SpringBootTest");
      \u0275\u0275elementEnd();
      \u0275\u0275text(86, " for controller tests. Loads only MVC beans \u2014 10x faster startup.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(87, "div", 24)(88, "div", 25);
      \u0275\u0275text(89, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "div")(91, "h4", 22);
      \u0275\u0275text(92, "Testcontainers for Real DBs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "p", 23);
      \u0275\u0275text(94, "Use Docker containers for integration tests: real MySQL/PostgreSQL instead of H2. Catches production-only issues early.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(95, "div", 26)(96, "div", 27);
      \u0275\u0275text(97, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "div")(99, "h4", 22);
      \u0275\u0275text(100, "Context Caching");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "p", 23);
      \u0275\u0275text(102, "Spring caches ApplicationContext between tests with same config. Don't pollute it \u2014 use ");
      \u0275\u0275elementStart(103, "code");
      \u0275\u0275text(104, "@DirtiesContext");
      \u0275\u0275elementEnd();
      \u0275\u0275text(105, " only when necessary.");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(21);
      \u0275\u0275property("code", ctx.codeIntro);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 22);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.levels());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.status());
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(5);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeUnit);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeMvc);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeJpa);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeIntegration);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ['\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-emerald[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 700;\n}\n.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #059669;\n}\n.viz-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);\n  padding: 28px 24px;\n}\n.viz-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.test-pyramid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 20px;\n}\n.pyramid-level[_ngcontent-%COMP%] {\n  padding: 12px;\n  border-radius: 10px;\n  border: 2px solid #e2e8f0;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.pyramid-level.active[_ngcontent-%COMP%] {\n  border-color: #059669;\n  background: #ecfdf5;\n  transform: scale(1.03);\n}\n.level-name[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.78rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.level-speed[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.55rem;\n  color: #059669;\n  font-weight: 600;\n}\n.viz-status[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.op-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n.use-cases[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.use-case[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 14px;\n  border: 1px solid;\n}\n.use-case.emerald[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  border-color: #a7f3d0;\n}\n.use-case.blue[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.use-case.purple[_ngcontent-%COMP%] {\n  background: #faf5ff;\n  border-color: #d8b4fe;\n}\n.use-num[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.emerald-bg[_ngcontent-%COMP%] {\n  background: #059669;\n}\n.blue-bg[_ngcontent-%COMP%] {\n  background: #3b82f6;\n}\n.purple-bg[_ngcontent-%COMP%] {\n  background: #8b5cf6;\n}\n.use-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.use-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  line-height: 1.55;\n  margin: 0;\n  color: #334155;\n}\n.use-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.06);\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.72rem;\n}\n/*# sourceMappingURL=spring-testing.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpringTestingComponent, [{
    type: Component,
    args: [{ selector: "app-topic-spring-testing", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
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
          <div class="use-case emerald"><div class="use-num emerald-bg">1</div><div><h4 class="use-title">Test Slices Over Full Context</h4><p class="use-desc">Use <code>&#64;WebMvcTest</code> instead of <code>&#64;SpringBootTest</code> for controller tests. Loads only MVC beans \u2014 10x faster startup.</p></div></div>
          <div class="use-case blue"><div class="use-num blue-bg">2</div><div><h4 class="use-title">Testcontainers for Real DBs</h4><p class="use-desc">Use Docker containers for integration tests: real MySQL/PostgreSQL instead of H2. Catches production-only issues early.</p></div></div>
          <div class="use-case purple"><div class="use-num purple-bg">3</div><div><h4 class="use-title">Context Caching</h4><p class="use-desc">Spring caches ApplicationContext between tests with same config. Don't pollute it \u2014 use <code>&#64;DirtiesContext</code> only when necessary.</p></div></div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ['/* angular:styles/component:css;cb5d1362b5907a2eaf38c7107a33670801e9844c9f32517e0a26cb3e867ad8e2;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/features/tutorials/topics/spring-testing.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-emerald {\n  color: #059669;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.prose ul {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose li {\n  margin-bottom: 8px;\n}\n.prose strong {\n  color: #0f172a;\n  font-weight: 700;\n}\n.prose code {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #059669;\n}\n.viz-card {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);\n  padding: 28px 24px;\n}\n.viz-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.test-pyramid {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 20px;\n}\n.pyramid-level {\n  padding: 12px;\n  border-radius: 10px;\n  border: 2px solid #e2e8f0;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.pyramid-level.active {\n  border-color: #059669;\n  background: #ecfdf5;\n  transform: scale(1.03);\n}\n.level-name {\n  display: block;\n  font-size: 0.78rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.level-speed {\n  display: block;\n  font-size: 0.55rem;\n  color: #059669;\n  font-weight: 600;\n}\n.viz-status {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.op-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc {\n  font-size: 0.78rem;\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n.use-cases {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.use-case {\n  display: flex;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 14px;\n  border: 1px solid;\n}\n.use-case.emerald {\n  background: #ecfdf5;\n  border-color: #a7f3d0;\n}\n.use-case.blue {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.use-case.purple {\n  background: #faf5ff;\n  border-color: #d8b4fe;\n}\n.use-num {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.emerald-bg {\n  background: #059669;\n}\n.blue-bg {\n  background: #3b82f6;\n}\n.purple-bg {\n  background: #8b5cf6;\n}\n.use-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.use-desc {\n  font-size: 0.78rem;\n  line-height: 1.55;\n  margin: 0;\n  color: #334155;\n}\n.use-desc code {\n  background: rgba(0, 0, 0, 0.06);\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.72rem;\n}\n/*# sourceMappingURL=spring-testing.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpringTestingComponent, { className: "SpringTestingComponent", filePath: "src/app/features/tutorials/topics/spring-testing.component.ts", lineNumber: 72 });
})();
export {
  SpringTestingComponent
};
//# sourceMappingURL=chunk-RGTIWXQZ.js.map
