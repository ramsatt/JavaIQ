import {
  CodeBlockComponent,
  TutorialLayoutComponent
} from "./chunk-ACGKXV3L.js";
import {
  IconComponent
} from "./chunk-GCMLYE3M.js";
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
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-6OY2Y3BE.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/spring-beans.component.ts
var _forTrack0 = ($index, $item) => $item.name;
function SpringBeansComponent_For_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275listener("click", function SpringBeansComponent_For_36_Template_div_click_0_listener() {
      const scope_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectScope(scope_r2.name));
    });
    \u0275\u0275elementStart(1, "span", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 30);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 31);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 32);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const scope_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.activeScope() === scope_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(scope_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(scope_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(scope_r2.instances);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(scope_r2.lifetime);
  }
}
var SpringBeansComponent = class _SpringBeansComponent {
  activeScope = signal("", ...ngDevMode ? [{ debugName: "activeScope" }] : []);
  status = signal("Click a scope to see how it controls bean instances.", ...ngDevMode ? [{ debugName: "status" }] : []);
  scopes = signal([
    { name: "singleton", icon: "1\uFE0F\u20E3", instances: "1 instance total", lifetime: "Lives for entire app" },
    { name: "prototype", icon: "\u267E\uFE0F", instances: "New instance each time", lifetime: "Not managed after creation" },
    { name: "request", icon: "\u{1F310}", instances: "1 per HTTP request", lifetime: "Dies when request ends" },
    { name: "session", icon: "\u{1F464}", instances: "1 per user session", lifetime: "Dies when session expires" }
  ], ...ngDevMode ? [{ debugName: "scopes" }] : []);
  codeScopes = `@Component
@Scope("singleton") // default \u2014 can be omitted
public class SingletonService { }

@Component
@Scope("prototype")
public class PrototypeService { }

// Web scopes (need web-aware context)
@Component
@Scope(value = "request",
       proxyMode = ScopedProxyMode.TARGET_CLASS)
public class RequestScopedBean { }`;
  codeLifecycle = `@Component
public class CacheManager {
    private Map<String, Object> cache;

    @PostConstruct  // called after DI
    public void init() {
        cache = new ConcurrentHashMap<>();
        loadInitialData();
    }

    @PreDestroy     // called before shutdown
    public void cleanup() {
        cache.clear();
        log.info("Cache cleaned up");
    }
}`;
  codePostProcessor = `@Component
public class LoggingBeanPostProcessor
    implements BeanPostProcessor {

    public Object postProcessBeforeInitialization(
            Object bean, String name) {
        log.debug("Creating: " + name);
        return bean;
    }

    public Object postProcessAfterInitialization(
            Object bean, String name) {
        // Wrap with proxy, add metrics, etc.
        return bean;
    }
}`;
  codeLazy = `@Component
@Lazy  // created on first use, not at startup
public class ExpensiveService {
    public ExpensiveService() {
        // Heavy initialization
        loadMlModel();
    }
}

// Lazy at injection point
@Service
public class App {
    public App(@Lazy ExpensiveService svc) {
        // svc is a proxy \u2014 not yet initialized
    }
}`;
  codePrototype = `// \u26A0\uFE0F PITFALL: Prototype in Singleton
@Service // singleton!
public class OrderService {
    // This is created ONCE and reused!
    @Autowired
    private Cart cart; // prototype scope

    // Fix: Use ObjectProvider
    @Autowired
    private ObjectProvider<Cart> cartProvider;

    public void process() {
        Cart freshCart = cartProvider.getObject();
        // New Cart instance every time \u2705
    }
}`;
  selectScope(name) {
    this.activeScope.set(name);
    const details = {
      "singleton": "Singleton: ONE instance shared everywhere. Default scope. Used for stateless services. \u2705",
      "prototype": "Prototype: NEW instance every getBean() call. Spring does NOT manage destroy! \u26A0\uFE0F",
      "request": "Request: ONE per HTTP request. Perfect for request-specific data (user context). \u{1F310}",
      "session": "Session: ONE per user session. Good for shopping carts, user preferences. \u{1F464}"
    };
    this.status.set(details[name] ?? "");
  }
  static \u0275fac = function SpringBeansComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SpringBeansComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SpringBeansComponent, selectors: [["app-topic-spring-beans"]], decls: 105, vars: 14, consts: [["title", "Bean Scopes & Lifecycle", "subtitle", "Control how Spring creates and manages your beans. Master singleton, prototype, request scopes, and lifecycle hooks.", "badge", "SPRING FRAMEWORK", "gradient", "linear-gradient(135deg, #0f766e, #5eead4)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-teal", 3, "size"], [1, "prose"], [3, "code"], [1, "viz-card"], [1, "viz-title"], ["name", "play", "css", "icon-teal", 3, "size"], [1, "scope-grid"], [1, "scope-card", 3, "active"], [1, "viz-status"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"], ["name", "arrow-right", "css", "icon-indigo", 3, "size"], [1, "op-desc"], ["name", "briefcase", "css", "icon-teal", 3, "size"], [1, "use-cases"], [1, "use-case", "teal"], [1, "use-num", "teal-bg"], [1, "use-title"], [1, "use-desc"], [1, "use-case", "blue"], [1, "use-num", "blue-bg"], [1, "use-case", "purple"], [1, "use-num", "purple-bg"], [1, "scope-card", 3, "click"], [1, "scope-name"], [1, "scope-icon"], [1, "scope-instances"], [1, "scope-lifetime"]], template: function SpringBeansComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Bean Scopes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7, "A ");
      \u0275\u0275elementStart(8, "strong");
      \u0275\u0275text(9, "bean scope");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " defines how many instances of a bean the container creates and how long they live.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "ul")(12, "li")(13, "strong");
      \u0275\u0275text(14, "singleton");
      \u0275\u0275elementEnd();
      \u0275\u0275text(15, " (default): One instance per ApplicationContext.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "li")(17, "strong");
      \u0275\u0275text(18, "prototype:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(19, " New instance every time it's requested.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "li")(21, "strong");
      \u0275\u0275text(22, "request:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(23, " One instance per HTTP request (web only).");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "li")(25, "strong");
      \u0275\u0275text(26, "session:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(27, " One instance per HTTP session (web only).");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(28, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "section", 1)(30, "div", 6)(31, "h3", 7);
      \u0275\u0275element(32, "app-icon", 8);
      \u0275\u0275text(33, " Scope Comparison");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 9);
      \u0275\u0275repeaterCreate(35, SpringBeansComponent_For_36_Template, 9, 6, "div", 10, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 11);
      \u0275\u0275text(38);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(39, "section", 1)(40, "h2", 2);
      \u0275\u0275element(41, "app-icon", 12);
      \u0275\u0275text(42, " Lifecycle & Hooks");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 13)(44, "div", 14)(45, "h3", 15);
      \u0275\u0275element(46, "app-icon", 16);
      \u0275\u0275text(47, " Lifecycle Callbacks");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "p", 17);
      \u0275\u0275text(49, "PostConstruct, PreDestroy, and InitializingBean.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(50, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div", 14)(52, "h3", 15);
      \u0275\u0275element(53, "app-icon", 16);
      \u0275\u0275text(54, " Bean Post Processors");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "p", 17);
      \u0275\u0275text(56, "Intercept bean creation for cross-cutting logic.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(57, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "div", 14)(59, "h3", 15);
      \u0275\u0275element(60, "app-icon", 16);
      \u0275\u0275text(61, " Lazy Initialization");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "p", 17);
      \u0275\u0275text(63, "Defer bean creation until first use.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(64, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "div", 14)(66, "h3", 15);
      \u0275\u0275element(67, "app-icon", 16);
      \u0275\u0275text(68, " Prototype Pitfall");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "p", 17);
      \u0275\u0275text(70, "Avoid injecting prototype into singleton.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(71, "app-code-block", 5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(72, "section", 1)(73, "h2", 2);
      \u0275\u0275element(74, "app-icon", 18);
      \u0275\u0275text(75, " Real-Time Use Cases");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "div", 19)(77, "div", 20)(78, "div", 21);
      \u0275\u0275text(79, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "div")(81, "h4", 22);
      \u0275\u0275text(82, "Connection Pools (Singleton)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "p", 23)(84, "code");
      \u0275\u0275text(85, "DataSource");
      \u0275\u0275elementEnd();
      \u0275\u0275text(86, " is always singleton \u2014 one pool shared across the entire application. Creating multiple would waste resources.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(87, "div", 24)(88, "div", 25);
      \u0275\u0275text(89, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "div")(91, "h4", 22);
      \u0275\u0275text(92, "Request Context (Request Scope)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "p", 23)(94, "code");
      \u0275\u0275text(95, "RequestContext");
      \u0275\u0275elementEnd();
      \u0275\u0275text(96, " bean holds user info, locale, and request metadata. Each HTTP request gets its own instance \u2014 thread-safe by design.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(97, "div", 26)(98, "div", 27);
      \u0275\u0275text(99, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "div")(101, "h4", 22);
      \u0275\u0275text(102, "Prototype for Stateful Objects");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "p", 23);
      \u0275\u0275text(104, "PDF generators, report builders \u2014 objects that accumulate state during processing. Prototype scope ensures each request gets a fresh instance.");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(25);
      \u0275\u0275property("code", ctx.codeScopes);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 22);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.scopes());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.status());
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(5);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeLifecycle);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codePostProcessor);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeLazy);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codePrototype);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ['\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-teal[_ngcontent-%COMP%] {\n  color: #0d9488;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 700;\n}\n.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #0d9488;\n}\n.viz-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);\n  padding: 28px 24px;\n}\n.viz-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.scope-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 10px;\n  margin-bottom: 20px;\n}\n.scope-card[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-radius: 12px;\n  border: 2px solid #e2e8f0;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.scope-card.active[_ngcontent-%COMP%] {\n  border-color: #0d9488;\n  background: #f0fdfa;\n  transform: scale(1.03);\n}\n.scope-name[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.78rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin-bottom: 2px;\n}\n.scope-icon[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.2rem;\n  margin: 4px 0;\n}\n.scope-instances[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.6rem;\n  font-weight: 600;\n  color: #0d9488;\n}\n.scope-lifetime[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.55rem;\n  color: #64748b;\n  margin-top: 2px;\n}\n.viz-status[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.op-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.op-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n.use-cases[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.use-case[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 14px;\n  border: 1px solid;\n}\n.use-case.teal[_ngcontent-%COMP%] {\n  background: #f0fdfa;\n  border-color: #99f6e4;\n}\n.use-case.blue[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.use-case.purple[_ngcontent-%COMP%] {\n  background: #faf5ff;\n  border-color: #d8b4fe;\n}\n.use-num[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.teal-bg[_ngcontent-%COMP%] {\n  background: #0d9488;\n}\n.blue-bg[_ngcontent-%COMP%] {\n  background: #3b82f6;\n}\n.purple-bg[_ngcontent-%COMP%] {\n  background: #8b5cf6;\n}\n.use-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.use-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  line-height: 1.55;\n  margin: 0;\n  color: #334155;\n}\n.use-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.06);\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.72rem;\n}\n/*# sourceMappingURL=spring-beans.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpringBeansComponent, [{
    type: Component,
    args: [{ selector: "app-topic-spring-beans", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout title="Bean Scopes & Lifecycle" subtitle="Control how Spring creates and manages your beans. Master singleton, prototype, request scopes, and lifecycle hooks." badge="SPRING FRAMEWORK" gradient="linear-gradient(135deg, #0f766e, #5eead4)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-teal" /> Bean Scopes</h2>
        <div class="prose">
          <p>A <strong>bean scope</strong> defines how many instances of a bean the container creates and how long they live.</p>
          <ul>
            <li><strong>singleton</strong> (default): One instance per ApplicationContext.</li>
            <li><strong>prototype:</strong> New instance every time it's requested.</li>
            <li><strong>request:</strong> One instance per HTTP request (web only).</li>
            <li><strong>session:</strong> One instance per HTTP session (web only).</li>
          </ul>
          <app-code-block [code]="codeScopes" />
        </div>
      </section>
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title"><app-icon name="play" [size]="22" css="icon-teal" /> Scope Comparison</h3>
          <div class="scope-grid">
            @for (scope of scopes(); track scope.name) {
              <div class="scope-card" [class.active]="activeScope() === scope.name" (click)="selectScope(scope.name)">
                <span class="scope-name">{{ scope.name }}</span>
                <span class="scope-icon">{{ scope.icon }}</span>
                <span class="scope-instances">{{ scope.instances }}</span>
                <span class="scope-lifetime">{{ scope.lifetime }}</span>
              </div>
            }
          </div>
          <div class="viz-status">{{ status() }}</div>
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Lifecycle & Hooks</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Lifecycle Callbacks</h3><p class="op-desc">PostConstruct, PreDestroy, and InitializingBean.</p><app-code-block [code]="codeLifecycle" /></div>
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Bean Post Processors</h3><p class="op-desc">Intercept bean creation for cross-cutting logic.</p><app-code-block [code]="codePostProcessor" /></div>
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Lazy Initialization</h3><p class="op-desc">Defer bean creation until first use.</p><app-code-block [code]="codeLazy" /></div>
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Prototype Pitfall</h3><p class="op-desc">Avoid injecting prototype into singleton.</p><app-code-block [code]="codePrototype" /></div>
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="briefcase" [size]="28" css="icon-teal" /> Real-Time Use Cases</h2>
        <div class="use-cases">
          <div class="use-case teal"><div class="use-num teal-bg">1</div><div><h4 class="use-title">Connection Pools (Singleton)</h4><p class="use-desc"><code>DataSource</code> is always singleton \u2014 one pool shared across the entire application. Creating multiple would waste resources.</p></div></div>
          <div class="use-case blue"><div class="use-num blue-bg">2</div><div><h4 class="use-title">Request Context (Request Scope)</h4><p class="use-desc"><code>RequestContext</code> bean holds user info, locale, and request metadata. Each HTTP request gets its own instance \u2014 thread-safe by design.</p></div></div>
          <div class="use-case purple"><div class="use-num purple-bg">3</div><div><h4 class="use-title">Prototype for Stateful Objects</h4><p class="use-desc">PDF generators, report builders \u2014 objects that accumulate state during processing. Prototype scope ensures each request gets a fresh instance.</p></div></div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ['/* angular:styles/component:css;11c1799a8b35dbb21b254360c37332fee6b747cb66295ba2f0a0ceffbb01a713;D:/A21/JavaIQ/src/app/features/tutorials/topics/spring-beans.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-teal {\n  color: #0d9488;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.prose ul {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose li {\n  margin-bottom: 8px;\n}\n.prose strong {\n  color: #0f172a;\n  font-weight: 700;\n}\n.prose code {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #0d9488;\n}\n.viz-card {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);\n  padding: 28px 24px;\n}\n.viz-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.scope-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 10px;\n  margin-bottom: 20px;\n}\n.scope-card {\n  padding: 16px;\n  border-radius: 12px;\n  border: 2px solid #e2e8f0;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.scope-card.active {\n  border-color: #0d9488;\n  background: #f0fdfa;\n  transform: scale(1.03);\n}\n.scope-name {\n  display: block;\n  font-size: 0.78rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin-bottom: 2px;\n}\n.scope-icon {\n  display: block;\n  font-size: 1.2rem;\n  margin: 4px 0;\n}\n.scope-instances {\n  display: block;\n  font-size: 0.6rem;\n  font-weight: 600;\n  color: #0d9488;\n}\n.scope-lifetime {\n  display: block;\n  font-size: 0.55rem;\n  color: #64748b;\n  margin-top: 2px;\n}\n.viz-status {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.op-card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.op-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc {\n  font-size: 0.78rem;\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n.use-cases {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.use-case {\n  display: flex;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 14px;\n  border: 1px solid;\n}\n.use-case.teal {\n  background: #f0fdfa;\n  border-color: #99f6e4;\n}\n.use-case.blue {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.use-case.purple {\n  background: #faf5ff;\n  border-color: #d8b4fe;\n}\n.use-num {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.teal-bg {\n  background: #0d9488;\n}\n.blue-bg {\n  background: #3b82f6;\n}\n.purple-bg {\n  background: #8b5cf6;\n}\n.use-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.use-desc {\n  font-size: 0.78rem;\n  line-height: 1.55;\n  margin: 0;\n  color: #334155;\n}\n.use-desc code {\n  background: rgba(0, 0, 0, 0.06);\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.72rem;\n}\n/*# sourceMappingURL=spring-beans.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpringBeansComponent, { className: "SpringBeansComponent", filePath: "src/app/features/tutorials/topics/spring-beans.component.ts", lineNumber: 76 });
})();
export {
  SpringBeansComponent
};
//# sourceMappingURL=chunk-272J5PTZ.js.map
