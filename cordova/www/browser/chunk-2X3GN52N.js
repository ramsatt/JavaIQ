import{a as p,b as l,c as m}from"./chunk-FZG5ZG77.js";import{Hb as t,Ma as o,Xa as d,mb as n,nb as i,ob as e,pb as s}from"./chunk-5DVJCJ5O.js";import"./chunk-NWJ5J3BN.js";var g=class c{codeIntro=`@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
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
}`;codeMvc=`@WebMvcTest(UserController.class) // only loads MVC layer
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
}`;codeJpa=`@DataJpaTest // loads only JPA components + embedded DB
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
}`;codeContainers=`@SpringBootTest
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
}`;codeTestConfig=`# application-test.yml
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
# @ActiveProfiles("test") on test class`;static \u0275fac=function(a){return new(a||c)};static \u0275cmp=d({type:c,selectors:[["app-topic-sb-testing"]],decls:32,vars:7,consts:[["title","Testing Spring Boot","subtitle","Comprehensive testing with SpringBootTest, MockMvc, Testcontainers, test slices, and test profiles.","badge","SPRING BOOT","gradient","linear-gradient(135deg, #065f46, #34d399)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-emerald",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(a,r){a&1&&(i(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),s(3,"app-icon",3),t(4," Testing in Boot"),e(),i(5,"div",4)(6,"p")(7,"code"),t(8,"spring-boot-starter-test"),e(),t(9," includes JUnit 5, Mockito, AssertJ, Hamcrest, and MockMvc \u2014 everything needed."),e(),s(10,"app-code-block",5),e()(),i(11,"section",1)(12,"h2",2),s(13,"app-icon",6),t(14," Test Types"),e(),i(15,"div",7)(16,"div",8)(17,"h3",9),t(18,"@WebMvcTest"),e(),s(19,"app-code-block",5),e(),i(20,"div",8)(21,"h3",9),t(22,"@DataJpaTest"),e(),s(23,"app-code-block",5),e(),i(24,"div",8)(25,"h3",9),t(26,"Testcontainers"),e(),s(27,"app-code-block",5),e(),i(28,"div",8)(29,"h3",9),t(30,"Test Config"),e(),s(31,"app-code-block",5),e()()()()),a&2&&(o(3),n("size",28),o(7),n("code",r.codeIntro),o(3),n("size",28),o(6),n("code",r.codeMvc),o(4),n("code",r.codeJpa),o(4),n("code",r.codeContainers),o(4),n("code",r.codeTestConfig))},dependencies:[p,l,m],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-emerald[_ngcontent-%COMP%]{color:#059669}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f1f5f9;padding:2px 7px;border-radius:5px;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#059669}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{g as SbTestingComponent};
