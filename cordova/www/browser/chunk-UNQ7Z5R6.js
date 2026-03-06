import{a as P,b as S,c as h}from"./chunk-5NK5W44O.js";import{Cb as v,Gb as C,Ib as m,Pa as i,Qb as y,Tb as t,Ub as l,aa as g,ab as f,ba as u,na as d,qb as x,rb as b,sb as a,tb as n,ub as e,vb as r}from"./chunk-WSUICUG6.js";import"./chunk-NWJ5J3BN.js";var E=(p,c)=>c.name;function z(p,c){if(p&1){let o=v();n(0,"div",28),C("click",function(){let M=g(o).$implicit,_=m();return u(_.selectScope(M.name))}),n(1,"span",29),t(2),e(),n(3,"span",30),t(4),e(),n(5,"span",31),t(6),e(),n(7,"span",32),t(8),e()()}if(p&2){let o=c.$implicit,s=m();y("active",s.activeScope()===o.name),i(2),l(o.name),i(2),l(o.icon),i(2),l(o.instances),i(2),l(o.lifetime)}}var O=class p{activeScope=d("");status=d("Click a scope to see how it controls bean instances.");scopes=d([{name:"singleton",icon:"1\uFE0F\u20E3",instances:"1 instance total",lifetime:"Lives for entire app"},{name:"prototype",icon:"\u267E\uFE0F",instances:"New instance each time",lifetime:"Not managed after creation"},{name:"request",icon:"\u{1F310}",instances:"1 per HTTP request",lifetime:"Dies when request ends"},{name:"session",icon:"\u{1F464}",instances:"1 per user session",lifetime:"Dies when session expires"}]);codeScopes=`@Component
@Scope("singleton") // default \u2014 can be omitted
public class SingletonService { }

@Component
@Scope("prototype")
public class PrototypeService { }

// Web scopes (need web-aware context)
@Component
@Scope(value = "request",
       proxyMode = ScopedProxyMode.TARGET_CLASS)
public class RequestScopedBean { }`;codeLifecycle=`@Component
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
}`;codePostProcessor=`@Component
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
}`;codeLazy=`@Component
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
}`;codePrototype=`// \u26A0\uFE0F PITFALL: Prototype in Singleton
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
}`;selectScope(c){this.activeScope.set(c);let o={singleton:"Singleton: ONE instance shared everywhere. Default scope. Used for stateless services. \u2705",prototype:"Prototype: NEW instance every getBean() call. Spring does NOT manage destroy! \u26A0\uFE0F",request:"Request: ONE per HTTP request. Perfect for request-specific data (user context). \u{1F310}",session:"Session: ONE per user session. Good for shopping carts, user preferences. \u{1F464}"};this.status.set(o[c]??"")}static \u0275fac=function(o){return new(o||p)};static \u0275cmp=f({type:p,selectors:[["app-topic-spring-beans"]],decls:105,vars:14,consts:[["title","Bean Scopes & Lifecycle","subtitle","Control how Spring creates and manages your beans. Master singleton, prototype, request scopes, and lifecycle hooks.","badge","SPRING FRAMEWORK","gradient","linear-gradient(135deg, #0f766e, #5eead4)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-teal",3,"size"],[1,"prose"],[3,"code"],[1,"viz-card"],[1,"viz-title"],["name","play","css","icon-teal",3,"size"],[1,"scope-grid"],[1,"scope-card",3,"active"],[1,"viz-status"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"],["name","arrow-right","css","icon-indigo",3,"size"],[1,"op-desc"],["name","briefcase","css","icon-teal",3,"size"],[1,"use-cases"],[1,"use-case","teal"],[1,"use-num","teal-bg"],[1,"use-title"],[1,"use-desc"],[1,"use-case","blue"],[1,"use-num","blue-bg"],[1,"use-case","purple"],[1,"use-num","purple-bg"],[1,"scope-card",3,"click"],[1,"scope-name"],[1,"scope-icon"],[1,"scope-instances"],[1,"scope-lifetime"]],template:function(o,s){o&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),r(3,"app-icon",3),t(4," Bean Scopes"),e(),n(5,"div",4)(6,"p"),t(7,"A "),n(8,"strong"),t(9,"bean scope"),e(),t(10," defines how many instances of a bean the container creates and how long they live."),e(),n(11,"ul")(12,"li")(13,"strong"),t(14,"singleton"),e(),t(15," (default): One instance per ApplicationContext."),e(),n(16,"li")(17,"strong"),t(18,"prototype:"),e(),t(19," New instance every time it's requested."),e(),n(20,"li")(21,"strong"),t(22,"request:"),e(),t(23," One instance per HTTP request (web only)."),e(),n(24,"li")(25,"strong"),t(26,"session:"),e(),t(27," One instance per HTTP session (web only)."),e()(),r(28,"app-code-block",5),e()(),n(29,"section",1)(30,"div",6)(31,"h3",7),r(32,"app-icon",8),t(33," Scope Comparison"),e(),n(34,"div",9),x(35,z,9,6,"div",10,E),e(),n(37,"div",11),t(38),e()()(),n(39,"section",1)(40,"h2",2),r(41,"app-icon",12),t(42," Lifecycle & Hooks"),e(),n(43,"div",13)(44,"div",14)(45,"h3",15),r(46,"app-icon",16),t(47," Lifecycle Callbacks"),e(),n(48,"p",17),t(49,"PostConstruct, PreDestroy, and InitializingBean."),e(),r(50,"app-code-block",5),e(),n(51,"div",14)(52,"h3",15),r(53,"app-icon",16),t(54," Bean Post Processors"),e(),n(55,"p",17),t(56,"Intercept bean creation for cross-cutting logic."),e(),r(57,"app-code-block",5),e(),n(58,"div",14)(59,"h3",15),r(60,"app-icon",16),t(61," Lazy Initialization"),e(),n(62,"p",17),t(63,"Defer bean creation until first use."),e(),r(64,"app-code-block",5),e(),n(65,"div",14)(66,"h3",15),r(67,"app-icon",16),t(68," Prototype Pitfall"),e(),n(69,"p",17),t(70,"Avoid injecting prototype into singleton."),e(),r(71,"app-code-block",5),e()()(),n(72,"section",1)(73,"h2",2),r(74,"app-icon",18),t(75," Real-Time Use Cases"),e(),n(76,"div",19)(77,"div",20)(78,"div",21),t(79,"1"),e(),n(80,"div")(81,"h4",22),t(82,"Connection Pools (Singleton)"),e(),n(83,"p",23)(84,"code"),t(85,"DataSource"),e(),t(86," is always singleton \u2014 one pool shared across the entire application. Creating multiple would waste resources."),e()()(),n(87,"div",24)(88,"div",25),t(89,"2"),e(),n(90,"div")(91,"h4",22),t(92,"Request Context (Request Scope)"),e(),n(93,"p",23)(94,"code"),t(95,"RequestContext"),e(),t(96," bean holds user info, locale, and request metadata. Each HTTP request gets its own instance \u2014 thread-safe by design."),e()()(),n(97,"div",26)(98,"div",27),t(99,"3"),e(),n(100,"div")(101,"h4",22),t(102,"Prototype for Stateful Objects"),e(),n(103,"p",23),t(104,"PDF generators, report builders \u2014 objects that accumulate state during processing. Prototype scope ensures each request gets a fresh instance."),e()()()()()()),o&2&&(i(3),a("size",28),i(25),a("code",s.codeScopes),i(4),a("size",22),i(3),b(s.scopes()),i(3),l(s.status()),i(3),a("size",28),i(5),a("size",18),i(4),a("code",s.codeLifecycle),i(3),a("size",18),i(4),a("code",s.codePostProcessor),i(3),a("size",18),i(4),a("code",s.codeLazy),i(3),a("size",18),i(4),a("code",s.codePrototype),i(3),a("size",28))},dependencies:[P,S,h],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-teal[_ngcontent-%COMP%]{color:#0d9488}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:14px 0;padding-left:22px;list-style:disc}.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:8px}.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#0f172a;font-weight:700}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f1f5f9;padding:2px 7px;border-radius:5px;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#0d9488}.viz-card[_ngcontent-%COMP%]{background:#fff;border-radius:18px;border:1px solid #e2e8f0;box-shadow:0 4px 16px #0000000d;padding:28px 24px}.viz-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;font-size:1.15rem;font-weight:700;color:#0f172a;margin:0 0 24px}.scope-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-bottom:20px}.scope-card[_ngcontent-%COMP%]{padding:16px;border-radius:12px;border:2px solid #e2e8f0;text-align:center;cursor:pointer;transition:all .3s}.scope-card.active[_ngcontent-%COMP%]{border-color:#0d9488;background:#f0fdfa;transform:scale(1.03)}.scope-name[_ngcontent-%COMP%]{display:block;font-size:.78rem;font-weight:800;color:#0f172a;margin-bottom:2px}.scope-icon[_ngcontent-%COMP%]{display:block;font-size:1.2rem;margin:4px 0}.scope-instances[_ngcontent-%COMP%]{display:block;font-size:.6rem;font-weight:600;color:#0d9488}.scope-lifetime[_ngcontent-%COMP%]{display:block;font-size:.55rem;color:#64748b;margin-top:2px}.viz-status[_ngcontent-%COMP%]{background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:12px 16px;text-align:center;font-family:JetBrains Mono,monospace;font-size:.78rem;color:#334155}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0;box-shadow:0 1px 3px #0000000a}.op-card[_ngcontent-%COMP%]:hover{box-shadow:0 4px 12px #0000000f}.op-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}.op-desc[_ngcontent-%COMP%]{font-size:.78rem;color:#64748b;line-height:1.55;margin:0}.use-cases[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.use-case[_ngcontent-%COMP%]{display:flex;gap:16px;padding:20px;border-radius:14px;border:1px solid}.use-case.teal[_ngcontent-%COMP%]{background:#f0fdfa;border-color:#99f6e4}.use-case.blue[_ngcontent-%COMP%]{background:#eff6ff;border-color:#bfdbfe}.use-case.purple[_ngcontent-%COMP%]{background:#faf5ff;border-color:#d8b4fe}.use-num[_ngcontent-%COMP%]{width:34px;height:34px;min-width:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:.78rem;font-weight:800}.teal-bg[_ngcontent-%COMP%]{background:#0d9488}.blue-bg[_ngcontent-%COMP%]{background:#3b82f6}.purple-bg[_ngcontent-%COMP%]{background:#8b5cf6}.use-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 4px}.use-desc[_ngcontent-%COMP%]{font-size:.78rem;line-height:1.55;margin:0;color:#334155}.use-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#0000000f;padding:1px 5px;border-radius:4px;font-family:JetBrains Mono,monospace;font-size:.72rem}"],changeDetection:0})};export{O as SpringBeansComponent};
