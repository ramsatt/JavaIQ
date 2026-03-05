import {
  CodeBlockComponent,
  IconComponent,
  TutorialLayoutComponent
} from "./chunk-MLPCG66Y.js";
import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-VBTVL2BZ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/spring-ioc.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function SpringIocComponent_For_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "span", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 35);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r1 = ctx.$implicit;
    \u0275\u0275classMap(step_r1.state);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r1.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r1.text);
  }
}
var SpringIocComponent = class _SpringIocComponent {
  steps = signal([
    { id: 1, text: "Read @Configuration / @ComponentScan", state: "" },
    { id: 2, text: "Scan packages for @Component beans", state: "" },
    { id: 3, text: "Create bean definitions (metadata)", state: "" },
    { id: 4, text: "Resolve dependencies (DI wiring)", state: "" },
    { id: 5, text: "Instantiate beans in dependency order", state: "" },
    { id: 6, text: "Call @PostConstruct / init methods", state: "" },
    { id: 7, text: "Application ready! Beans available.", state: "" }
  ], ...ngDevMode ? [{ debugName: "steps" }] : []);
  status = signal("The IoC container manages the entire bean lifecycle.", ...ngDevMode ? [{ debugName: "status" }] : []);
  isAnimating = signal(false, ...ngDevMode ? [{ debugName: "isAnimating" }] : []);
  codeIntro = `// Traditional approach (YOU manage objects)
UserService svc = new UserServiceImpl(
    new UserRepository(new DataSource()));

// Spring IoC (CONTAINER manages objects)
@Service
public class UserService {
    private final UserRepository repo;

    public UserService(UserRepository repo) {
        this.repo = repo; // injected by Spring!
    }
}`;
  codeAnnotation = `@Component     // generic bean
@Service       // business logic
@Repository    // data access (+ exception translation)
@Controller    // web controller

@Service
public class OrderService {
    // Spring creates and manages this bean
}`;
  codeJavaConfig = `@Configuration
public class AppConfig {

    @Bean
    public DataSource dataSource() {
        return new HikariDataSource(config);
    }

    @Bean
    public UserRepository userRepo(DataSource ds) {
        return new JdbcUserRepository(ds);
    }
}`;
  codeScan = `@Configuration
@ComponentScan(basePackages = "com.app")
public class AppConfig { }

// OR with Spring Boot:
@SpringBootApplication // includes @ComponentScan
public class App {
    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }
}`;
  codeContext = `// Get the container
ApplicationContext ctx =
    new AnnotationConfigApplicationContext(
        AppConfig.class);

// Retrieve beans
UserService svc = ctx.getBean(UserService.class);

// Or by name
Object bean = ctx.getBean("userService");`;
  sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }
  async runFlow() {
    if (this.isAnimating())
      return;
    this.isAnimating.set(true);
    const labels = [
      "Reading configuration metadata...",
      "Scanning for annotated classes...",
      "Building bean definitions...",
      "Resolving dependency graph...",
      "Creating bean instances...",
      "Running initialization callbacks...",
      "All beans ready! Container started \u2705"
    ];
    for (let i = 0; i < 7; i++) {
      this.steps.update((s) => s.map((st, j) => j === i ? __spreadProps(__spreadValues({}, st), { state: "active" }) : j < i ? __spreadProps(__spreadValues({}, st), { state: "done" }) : st));
      this.status.set(labels[i]);
      await this.sleep(800);
    }
    this.steps.update((s) => s.map((st) => __spreadProps(__spreadValues({}, st), { state: "done" })));
    this.isAnimating.set(false);
  }
  resetDemo() {
    this.steps.set([{ id: 1, text: "Read @Configuration / @ComponentScan", state: "" }, { id: 2, text: "Scan packages for @Component beans", state: "" }, { id: 3, text: "Create bean definitions (metadata)", state: "" }, { id: 4, text: "Resolve dependencies (DI wiring)", state: "" }, { id: 5, text: "Instantiate beans in dependency order", state: "" }, { id: 6, text: "Call @PostConstruct / init methods", state: "" }, { id: 7, text: "Application ready! Beans available.", state: "" }]);
    this.status.set("The IoC container manages the entire bean lifecycle.");
    this.isAnimating.set(false);
  }
  static \u0275fac = function SpringIocComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SpringIocComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SpringIocComponent, selectors: [["app-topic-spring-ioc"]], decls: 118, vars: 18, consts: [["title", "IoC Container", "subtitle", "Inversion of Control \u2014 the heart of Spring. Learn how the container manages object creation, configuration, and lifecycle.", "badge", "SPRING FRAMEWORK", "gradient", "linear-gradient(135deg, #166534, #4ade80)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-green", 3, "size"], [1, "prose"], [3, "code"], [1, "viz-card"], [1, "viz-title"], ["name", "play", "css", "icon-green", 3, "size"], [1, "flow-demo"], [1, "flow-step", 3, "class"], [1, "viz-status"], [1, "viz-controls"], [1, "btn", "btn-green", 3, "click", "disabled"], ["name", "play", 3, "size"], [1, "btn", "btn-gray", 3, "click", "disabled"], ["name", "refresh-cw", 3, "size"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"], ["name", "arrow-right", "css", "icon-indigo", 3, "size"], [1, "op-desc"], ["name", "briefcase", "css", "icon-green", 3, "size"], [1, "use-cases"], [1, "use-case", "green"], [1, "use-num", "green-bg"], [1, "use-title"], [1, "use-desc"], [1, "use-case", "blue"], [1, "use-num", "blue-bg"], [1, "use-case", "purple"], [1, "use-num", "purple-bg"], [1, "flow-step"], [1, "step-num"], [1, "step-text"]], template: function SpringIocComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " What is IoC?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p")(7, "strong");
      \u0275\u0275text(8, "Inversion of Control (IoC)");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, " means the framework controls object creation and wiring instead of your code doing it manually. The Spring ");
      \u0275\u0275elementStart(10, "strong");
      \u0275\u0275text(11, "IoC Container");
      \u0275\u0275elementEnd();
      \u0275\u0275text(12, " (ApplicationContext) is responsible for instantiating, configuring, and assembling beans.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "ul")(14, "li")(15, "strong");
      \u0275\u0275text(16, "BeanFactory:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(17, " Basic container with lazy initialization.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "li")(19, "strong");
      \u0275\u0275text(20, "ApplicationContext:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(21, " Advanced container with event publishing, i18n, and eager initialization.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "li")(23, "strong");
      \u0275\u0275text(24, "Beans:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(25, " Objects managed by the Spring container.");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(26, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "section", 1)(28, "div", 6)(29, "h3", 7);
      \u0275\u0275element(30, "app-icon", 8);
      \u0275\u0275text(31, " IoC Container Flow");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 9);
      \u0275\u0275repeaterCreate(33, SpringIocComponent_For_34_Template, 5, 4, "div", 10, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 11);
      \u0275\u0275text(36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 12)(38, "button", 13);
      \u0275\u0275listener("click", function SpringIocComponent_Template_button_click_38_listener() {
        return ctx.runFlow();
      });
      \u0275\u0275element(39, "app-icon", 14);
      \u0275\u0275text(40, " Show Container Lifecycle");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "button", 15);
      \u0275\u0275listener("click", function SpringIocComponent_Template_button_click_41_listener() {
        return ctx.resetDemo();
      });
      \u0275\u0275element(42, "app-icon", 16);
      \u0275\u0275text(43, " Reset");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(44, "section", 1)(45, "h2", 2);
      \u0275\u0275element(46, "app-icon", 17);
      \u0275\u0275text(47, " Configuration Styles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 18)(49, "div", 19)(50, "h3", 20);
      \u0275\u0275element(51, "app-icon", 21);
      \u0275\u0275text(52, " Annotation-Based");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "p", 22);
      \u0275\u0275text(54, "Use @Component, @Service, @Repository to auto-detect beans.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(55, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "div", 19)(57, "h3", 20);
      \u0275\u0275element(58, "app-icon", 21);
      \u0275\u0275text(59, " Java Config");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "p", 22);
      \u0275\u0275text(61, "Use @Configuration + @Bean for explicit bean definitions.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(62, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "div", 19)(64, "h3", 20);
      \u0275\u0275element(65, "app-icon", 21);
      \u0275\u0275text(66, " Component Scanning");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "p", 22);
      \u0275\u0275text(68, "Auto-discover beans in specified packages.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(69, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "div", 19)(71, "h3", 20);
      \u0275\u0275element(72, "app-icon", 21);
      \u0275\u0275text(73, " ApplicationContext");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "p", 22);
      \u0275\u0275text(75, "Access beans from the container programmatically.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(76, "app-code-block", 5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(77, "section", 1)(78, "h2", 2);
      \u0275\u0275element(79, "app-icon", 23);
      \u0275\u0275text(80, " Real-Time Use Cases");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "div", 24)(82, "div", 25)(83, "div", 26);
      \u0275\u0275text(84, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "div")(86, "h4", 27);
      \u0275\u0275text(87, "Microservice Startup");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "p", 28);
      \u0275\u0275text(89, "Spring Boot's ");
      \u0275\u0275elementStart(90, "code");
      \u0275\u0275text(91, "SpringApplication.run()");
      \u0275\u0275elementEnd();
      \u0275\u0275text(92, " creates the ApplicationContext, scans for components, and wires all beans \u2014 your entire service is IoC-managed.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(93, "div", 29)(94, "div", 30);
      \u0275\u0275text(95, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "div")(97, "h4", 27);
      \u0275\u0275text(98, "Plugin Architecture");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "p", 28);
      \u0275\u0275text(100, "Register multiple ");
      \u0275\u0275elementStart(101, "code");
      \u0275\u0275text(102, "Strategy");
      \u0275\u0275elementEnd();
      \u0275\u0275text(103, " implementations as beans. The container collects them all \u2014 ");
      \u0275\u0275elementStart(104, "code");
      \u0275\u0275text(105, "List<Strategy>");
      \u0275\u0275elementEnd();
      \u0275\u0275text(106, " injection gives you all plugins automatically.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(107, "div", 31)(108, "div", 32);
      \u0275\u0275text(109, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "div")(111, "h4", 27);
      \u0275\u0275text(112, "Environment-Specific Config");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "p", 28);
      \u0275\u0275text(114, "Use ");
      \u0275\u0275elementStart(115, "code");
      \u0275\u0275text(116, '@Profile("dev")');
      \u0275\u0275elementEnd();
      \u0275\u0275text(117, " to register dev-only beans. The container activates the right profile \u2014 no code changes between environments.");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(23);
      \u0275\u0275property("code", ctx.codeIntro);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 22);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.steps());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.status());
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isAnimating());
      \u0275\u0275advance();
      \u0275\u0275property("size", 16);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isAnimating());
      \u0275\u0275advance();
      \u0275\u0275property("size", 16);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(5);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeAnnotation);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeJavaConfig);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeScan);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeContext);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ['\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-green[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 700;\n}\n.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #16a34a;\n}\n.viz-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);\n  padding: 28px 24px;\n}\n.viz-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.flow-demo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 20px;\n}\n.flow-step[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  border-radius: 10px;\n  border: 2px solid #e2e8f0;\n  background: #fff;\n  transition: all 0.4s;\n}\n.flow-step.active[_ngcontent-%COMP%] {\n  border-color: #16a34a;\n  background: #f0fdf4;\n  transform: scale(1.02);\n}\n.flow-step.done[_ngcontent-%COMP%] {\n  border-color: #16a34a;\n  background: #dcfce7;\n}\n.step-num[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  min-width: 24px;\n  border-radius: 50%;\n  background: #e2e8f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.6rem;\n  font-weight: 800;\n  color: #475569;\n}\n.step-text[_ngcontent-%COMP%] {\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.7rem;\n  color: #0f172a;\n}\n.viz-status[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n  margin-bottom: 20px;\n}\n.viz-controls[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-green[_ngcontent-%COMP%] {\n  background: #16a34a;\n  color: #fff;\n}\n.btn-green[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #15803d;\n}\n.btn-gray[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #334155;\n}\n.btn-gray[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #cbd5e1;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.op-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.op-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n.use-cases[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.use-case[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 14px;\n  border: 1px solid;\n}\n.use-case.green[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border-color: #86efac;\n}\n.use-case.blue[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.use-case.purple[_ngcontent-%COMP%] {\n  background: #faf5ff;\n  border-color: #d8b4fe;\n}\n.use-num[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.green-bg[_ngcontent-%COMP%] {\n  background: #16a34a;\n}\n.blue-bg[_ngcontent-%COMP%] {\n  background: #3b82f6;\n}\n.purple-bg[_ngcontent-%COMP%] {\n  background: #8b5cf6;\n}\n.use-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.use-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  line-height: 1.55;\n  margin: 0;\n  color: #334155;\n}\n.use-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.06);\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.72rem;\n}\n/*# sourceMappingURL=spring-ioc.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpringIocComponent, [{
    type: Component,
    args: [{ selector: "app-topic-spring-ioc", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout title="IoC Container" subtitle="Inversion of Control \u2014 the heart of Spring. Learn how the container manages object creation, configuration, and lifecycle." badge="SPRING FRAMEWORK" gradient="linear-gradient(135deg, #166534, #4ade80)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-green" /> What is IoC?</h2>
        <div class="prose">
          <p><strong>Inversion of Control (IoC)</strong> means the framework controls object creation and wiring instead of your code doing it manually. The Spring <strong>IoC Container</strong> (ApplicationContext) is responsible for instantiating, configuring, and assembling beans.</p>
          <ul>
            <li><strong>BeanFactory:</strong> Basic container with lazy initialization.</li>
            <li><strong>ApplicationContext:</strong> Advanced container with event publishing, i18n, and eager initialization.</li>
            <li><strong>Beans:</strong> Objects managed by the Spring container.</li>
          </ul>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title"><app-icon name="play" [size]="22" css="icon-green" /> IoC Container Flow</h3>
          <div class="flow-demo">
            @for (step of steps(); track step.id) {
              <div class="flow-step" [class]="step.state">
                <span class="step-num">{{ step.id }}</span>
                <span class="step-text">{{ step.text }}</span>
              </div>
            }
          </div>
          <div class="viz-status">{{ status() }}</div>
          <div class="viz-controls">
            <button (click)="runFlow()" [disabled]="isAnimating()" class="btn btn-green"><app-icon name="play" [size]="16" /> Show Container Lifecycle</button>
            <button (click)="resetDemo()" [disabled]="isAnimating()" class="btn btn-gray"><app-icon name="refresh-cw" [size]="16" /> Reset</button>
          </div>
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Configuration Styles</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Annotation-Based</h3><p class="op-desc">Use &#64;Component, &#64;Service, &#64;Repository to auto-detect beans.</p><app-code-block [code]="codeAnnotation" /></div>
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Java Config</h3><p class="op-desc">Use &#64;Configuration + &#64;Bean for explicit bean definitions.</p><app-code-block [code]="codeJavaConfig" /></div>
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Component Scanning</h3><p class="op-desc">Auto-discover beans in specified packages.</p><app-code-block [code]="codeScan" /></div>
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> ApplicationContext</h3><p class="op-desc">Access beans from the container programmatically.</p><app-code-block [code]="codeContext" /></div>
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="briefcase" [size]="28" css="icon-green" /> Real-Time Use Cases</h2>
        <div class="use-cases">
          <div class="use-case green"><div class="use-num green-bg">1</div><div><h4 class="use-title">Microservice Startup</h4><p class="use-desc">Spring Boot's <code>SpringApplication.run()</code> creates the ApplicationContext, scans for components, and wires all beans \u2014 your entire service is IoC-managed.</p></div></div>
          <div class="use-case blue"><div class="use-num blue-bg">2</div><div><h4 class="use-title">Plugin Architecture</h4><p class="use-desc">Register multiple <code>Strategy</code> implementations as beans. The container collects them all \u2014 <code>List&lt;Strategy&gt;</code> injection gives you all plugins automatically.</p></div></div>
          <div class="use-case purple"><div class="use-num purple-bg">3</div><div><h4 class="use-title">Environment-Specific Config</h4><p class="use-desc">Use <code>&#64;Profile("dev")</code> to register dev-only beans. The container activates the right profile \u2014 no code changes between environments.</p></div></div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ['/* angular:styles/component:css;348ac596d0ad22320ef46823f257cb6a915fa9c15dc89429c60fe5c4c74ed4b0;/Users/sathishkumarramalingam/projects/JavaIQ/.claude/worktrees/goofy-haibt/src/app/features/tutorials/topics/spring-ioc.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-green {\n  color: #16a34a;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.prose ul {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose li {\n  margin-bottom: 8px;\n}\n.prose strong {\n  color: #0f172a;\n  font-weight: 700;\n}\n.prose code {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #16a34a;\n}\n.viz-card {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);\n  padding: 28px 24px;\n}\n.viz-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.flow-demo {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 20px;\n}\n.flow-step {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  border-radius: 10px;\n  border: 2px solid #e2e8f0;\n  background: #fff;\n  transition: all 0.4s;\n}\n.flow-step.active {\n  border-color: #16a34a;\n  background: #f0fdf4;\n  transform: scale(1.02);\n}\n.flow-step.done {\n  border-color: #16a34a;\n  background: #dcfce7;\n}\n.step-num {\n  width: 24px;\n  height: 24px;\n  min-width: 24px;\n  border-radius: 50%;\n  background: #e2e8f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.6rem;\n  font-weight: 800;\n  color: #475569;\n}\n.step-text {\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.7rem;\n  color: #0f172a;\n}\n.viz-status {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n  margin-bottom: 20px;\n}\n.viz-controls {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-green {\n  background: #16a34a;\n  color: #fff;\n}\n.btn-green:hover:not(:disabled) {\n  background: #15803d;\n}\n.btn-gray {\n  background: #e2e8f0;\n  color: #334155;\n}\n.btn-gray:hover:not(:disabled) {\n  background: #cbd5e1;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.op-card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.op-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc {\n  font-size: 0.78rem;\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n.use-cases {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.use-case {\n  display: flex;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 14px;\n  border: 1px solid;\n}\n.use-case.green {\n  background: #f0fdf4;\n  border-color: #86efac;\n}\n.use-case.blue {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.use-case.purple {\n  background: #faf5ff;\n  border-color: #d8b4fe;\n}\n.use-num {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.green-bg {\n  background: #16a34a;\n}\n.blue-bg {\n  background: #3b82f6;\n}\n.purple-bg {\n  background: #8b5cf6;\n}\n.use-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.use-desc {\n  font-size: 0.78rem;\n  line-height: 1.55;\n  margin: 0;\n  color: #334155;\n}\n.use-desc code {\n  background: rgba(0, 0, 0, 0.06);\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.72rem;\n}\n/*# sourceMappingURL=spring-ioc.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpringIocComponent, { className: "SpringIocComponent", filePath: "src/app/features/tutorials/topics/spring-ioc.component.ts", lineNumber: 82 });
})();
export {
  SpringIocComponent
};
//# sourceMappingURL=chunk-3LGJR3UY.js.map
