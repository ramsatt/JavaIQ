import{a as T,b as C,c as y}from"./chunk-FZG5ZG77.js";import{$ as u,Eb as M,Fb as S,Hb as t,Ib as p,Ma as i,Xa as f,_ as g,ka as d,kb as x,lb as v,mb as o,nb as n,ob as e,pb as r,vb as h,wb as b,xb as m}from"./chunk-5DVJCJ5O.js";import"./chunk-NWJ5J3BN.js";var P=(l,c)=>c.name;function w(l,c){if(l&1){let s=h();n(0,"div",28),b("click",function(){let O=g(s).$implicit,_=m();return u(_.selectLevel(O.name))}),n(1,"span",29),t(2),e(),n(3,"span",30),t(4),e()()}if(l&2){let s=c.$implicit,a=m();M("width",s.width),S("active",a.activeLevel()===s.name),i(2),p(s.name),i(2),p(s.speed)}}var E=class l{activeLevel=d("");status=d("Click a test level to see speed, scope, and when to use it.");levels=d([{name:"Unit Tests",speed:"\u26A1 ~1ms each",width:"50%"},{name:"Slice Tests",speed:"\u{1F504} ~500ms each",width:"70%"},{name:"Integration Tests",speed:"\u{1F422} ~2-5s each",width:"90%"}]);codeIntro=`// Unit test \u2014 no Spring, pure logic
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
}`;codeUnit=`@ExtendWith(MockitoExtension.class)
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
}`;codeMvc=`@WebMvcTest(UserController.class) // loads ONLY MVC
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
}`;codeJpa=`@DataJpaTest // loads JPA + embedded DB only
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
}`;codeIntegration=`@SpringBootTest(webEnvironment = RANDOM_PORT)
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
}`;selectLevel(c){this.activeLevel.set(c);let s={"Unit Tests":"Unit: No Spring context. Mockito mocks. ~1ms each. Test 90% of logic here! \u26A1","Slice Tests":"Slice: Partial context (@WebMvcTest, @DataJpaTest). ~500ms. Test boundaries! \u{1F504}","Integration Tests":"Integration: Full @SpringBootTest. ~2-5s. Test end-to-end flows sparingly! \u{1F422}"};this.status.set(s[c]??"")}static \u0275fac=function(s){return new(s||l)};static \u0275cmp=f({type:l,selectors:[["app-topic-spring-testing"]],decls:106,vars:14,consts:[["title","Testing Spring Apps","subtitle","Write reliable tests. Master unit tests, integration tests, MockMvc, and the TestContext framework.","badge","SPRING FRAMEWORK","gradient","linear-gradient(135deg, #065f46, #34d399)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-emerald",3,"size"],[1,"prose"],[3,"code"],[1,"viz-card"],[1,"viz-title"],["name","play","css","icon-emerald",3,"size"],[1,"test-pyramid"],[1,"pyramid-level",3,"active","width"],[1,"viz-status"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"],["name","arrow-right","css","icon-indigo",3,"size"],[1,"op-desc"],["name","briefcase","css","icon-emerald",3,"size"],[1,"use-cases"],[1,"use-case","emerald"],[1,"use-num","emerald-bg"],[1,"use-title"],[1,"use-desc"],[1,"use-case","blue"],[1,"use-num","blue-bg"],[1,"use-case","purple"],[1,"use-num","purple-bg"],[1,"pyramid-level",3,"click"],[1,"level-name"],[1,"level-speed"]],template:function(s,a){s&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),r(3,"app-icon",3),t(4," Testing Pyramid"),e(),n(5,"div",4)(6,"p"),t(7,"Spring provides excellent testing support with the "),n(8,"strong"),t(9,"TestContext framework"),e(),t(10," that caches ApplicationContext across tests."),e(),n(11,"ul")(12,"li")(13,"strong"),t(14,"Unit Tests:"),e(),t(15," Fast, no Spring context. Mock dependencies with Mockito."),e(),n(16,"li")(17,"strong"),t(18,"Slice Tests:"),e(),t(19," Load ONLY relevant beans (@WebMvcTest, @DataJpaTest)."),e(),n(20,"li")(21,"strong"),t(22,"Integration Tests:"),e(),t(23," Full context with @SpringBootTest. Test everything together."),e()(),r(24,"app-code-block",5),e()(),n(25,"section",1)(26,"div",6)(27,"h3",7),r(28,"app-icon",8),t(29," Test Type Comparison"),e(),n(30,"div",9),x(31,w,5,6,"div",10,P),e(),n(33,"div",11),t(34),e()()(),n(35,"section",1)(36,"h2",2),r(37,"app-icon",12),t(38," Test Patterns"),e(),n(39,"div",13)(40,"div",14)(41,"h3",15),r(42,"app-icon",16),t(43," Unit Test + Mockito"),e(),n(44,"p",17),t(45,"Test service logic in isolation."),e(),r(46,"app-code-block",5),e(),n(47,"div",14)(48,"h3",15),r(49,"app-icon",16),t(50," @WebMvcTest"),e(),n(51,"p",17),t(52,"Test controllers without full context."),e(),r(53,"app-code-block",5),e(),n(54,"div",14)(55,"h3",15),r(56,"app-icon",16),t(57," @DataJpaTest"),e(),n(58,"p",17),t(59,"Test repositories with embedded DB."),e(),r(60,"app-code-block",5),e(),n(61,"div",14)(62,"h3",15),r(63,"app-icon",16),t(64," @SpringBootTest"),e(),n(65,"p",17),t(66,"Full integration test with real context."),e(),r(67,"app-code-block",5),e()()(),n(68,"section",1)(69,"h2",2),r(70,"app-icon",18),t(71," Best Practices"),e(),n(72,"div",19)(73,"div",20)(74,"div",21),t(75,"1"),e(),n(76,"div")(77,"h4",22),t(78,"Test Slices Over Full Context"),e(),n(79,"p",23),t(80,"Use "),n(81,"code"),t(82,"@WebMvcTest"),e(),t(83," instead of "),n(84,"code"),t(85,"@SpringBootTest"),e(),t(86," for controller tests. Loads only MVC beans \u2014 10x faster startup."),e()()(),n(87,"div",24)(88,"div",25),t(89,"2"),e(),n(90,"div")(91,"h4",22),t(92,"Testcontainers for Real DBs"),e(),n(93,"p",23),t(94,"Use Docker containers for integration tests: real MySQL/PostgreSQL instead of H2. Catches production-only issues early."),e()()(),n(95,"div",26)(96,"div",27),t(97,"3"),e(),n(98,"div")(99,"h4",22),t(100,"Context Caching"),e(),n(101,"p",23),t(102,"Spring caches ApplicationContext between tests with same config. Don't pollute it \u2014 use "),n(103,"code"),t(104,"@DirtiesContext"),e(),t(105," only when necessary."),e()()()()()()),s&2&&(i(3),o("size",28),i(21),o("code",a.codeIntro),i(4),o("size",22),i(3),v(a.levels()),i(3),p(a.status()),i(3),o("size",28),i(5),o("size",18),i(4),o("code",a.codeUnit),i(3),o("size",18),i(4),o("code",a.codeMvc),i(3),o("size",18),i(4),o("code",a.codeJpa),i(3),o("size",18),i(4),o("code",a.codeIntegration),i(3),o("size",28))},dependencies:[T,C,y],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-emerald[_ngcontent-%COMP%]{color:#059669}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:14px 0;padding-left:22px;list-style:disc}.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:8px}.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#0f172a;font-weight:700}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f1f5f9;padding:2px 7px;border-radius:5px;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#059669}.viz-card[_ngcontent-%COMP%]{background:#fff;border-radius:18px;border:1px solid #e2e8f0;box-shadow:0 4px 16px #0000000d;padding:28px 24px}.viz-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;font-size:1.15rem;font-weight:700;color:#0f172a;margin:0 0 24px}.test-pyramid[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:6px;margin-bottom:20px}.pyramid-level[_ngcontent-%COMP%]{padding:12px;border-radius:10px;border:2px solid #e2e8f0;text-align:center;cursor:pointer;transition:all .3s}.pyramid-level.active[_ngcontent-%COMP%]{border-color:#059669;background:#ecfdf5;transform:scale(1.03)}.level-name[_ngcontent-%COMP%]{display:block;font-size:.78rem;font-weight:800;color:#0f172a}.level-speed[_ngcontent-%COMP%]{display:block;font-size:.55rem;color:#059669;font-weight:600}.viz-status[_ngcontent-%COMP%]{background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:12px 16px;text-align:center;font-family:JetBrains Mono,monospace;font-size:.78rem;color:#334155}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-card[_ngcontent-%COMP%]:hover{box-shadow:0 4px 12px #0000000f}.op-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}.op-desc[_ngcontent-%COMP%]{font-size:.78rem;color:#64748b;line-height:1.55;margin:0}.use-cases[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.use-case[_ngcontent-%COMP%]{display:flex;gap:16px;padding:20px;border-radius:14px;border:1px solid}.use-case.emerald[_ngcontent-%COMP%]{background:#ecfdf5;border-color:#a7f3d0}.use-case.blue[_ngcontent-%COMP%]{background:#eff6ff;border-color:#bfdbfe}.use-case.purple[_ngcontent-%COMP%]{background:#faf5ff;border-color:#d8b4fe}.use-num[_ngcontent-%COMP%]{width:34px;height:34px;min-width:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:.78rem;font-weight:800}.emerald-bg[_ngcontent-%COMP%]{background:#059669}.blue-bg[_ngcontent-%COMP%]{background:#3b82f6}.purple-bg[_ngcontent-%COMP%]{background:#8b5cf6}.use-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 4px}.use-desc[_ngcontent-%COMP%]{font-size:.78rem;line-height:1.55;margin:0;color:#334155}.use-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#0000000f;padding:1px 5px;border-radius:4px;font-family:JetBrains Mono,monospace;font-size:.72rem}"],changeDetection:0})};export{E as SpringTestingComponent};
