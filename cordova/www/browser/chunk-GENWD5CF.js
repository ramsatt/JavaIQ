import{a as P,b as O,c as h}from"./chunk-H4UXZOTD.js";import{$a as f,Bb as b,Fb as S,Hb as m,Pa as i,Pb as y,Qb as C,Rb as t,Sb as l,aa as g,ba as u,na as p,pb as v,qb as x,rb as r,sb as n,tb as e,ub as a}from"./chunk-QHT4LFPW.js";import"./chunk-NWJ5J3BN.js";var j=(d,s)=>s.name;function I(d,s){if(d&1){let o=b();n(0,"div",28),S("click",function(){let M=g(o).$implicit,E=m();return u(E.selectType(M.name))}),n(1,"span",29),t(2),e(),n(3,"span",30),t(4),e(),n(5,"span",31),t(6),e()()}if(d&2){let o=s.$implicit,c=m();C(o.rating),y("active",c.activeType()===o.name),i(2),l(o.badge),i(2),l(o.name),i(2),l(o.desc)}}var _=class d{activeType=p("");status=p("Click an injection type to learn more about it.");injectionTypes=p([{name:"Constructor",badge:"\u2705 RECOMMENDED",desc:"Immutable, testable, required deps",rating:"best"},{name:"Setter",badge:"\u26A0\uFE0F OPTIONAL USE",desc:"Mutable, optional dependencies",rating:"ok"},{name:"Field",badge:"\u274C DISCOURAGED",desc:"Hidden deps, hard to test",rating:"avoid"}]);codeIntro=`// WITHOUT DI (tightly coupled)
public class OrderService {
    private PaymentService pay = new PaymentService();
    // Can't swap implementations, can't unit test!
}

// WITH DI (loosely coupled)
@Service
public class OrderService {
    private final PaymentService pay;

    public OrderService(PaymentService pay) {
        this.pay = pay; // Spring injects!
    }
}`;codeConstructor=`@Service
public class OrderService {
    private final PaymentService paymentService;
    private final InventoryService inventoryService;

    // Single constructor \u2014 @Autowired is optional!
    public OrderService(
            PaymentService paymentService,
            InventoryService inventoryService) {
        this.paymentService = paymentService;
        this.inventoryService = inventoryService;
    }
}`;codeQualifier=`// Two implementations of same interface
@Service("stripe")
public class StripePayment implements Payment { }

@Service("paypal")
public class PayPalPayment implements Payment { }

// Resolve ambiguity
@Service
public class OrderService {
    public OrderService(
        @Qualifier("stripe") Payment payment) {
        // Uses StripePayment
    }
}`;codeOptional=`@Service
public class NotificationService {
    private final EmailSender emailSender;
    private final SmsSender smsSender;  // optional

    public NotificationService(
        EmailSender emailSender,
        @Autowired(required = false)
        SmsSender smsSender) {
        this.emailSender = emailSender;
        this.smsSender = smsSender; // may be null
    }
}`;codeCollection=`@Service
public class PaymentProcessor {
    // Spring injects ALL Payment implementations!
    private final List<Payment> strategies;

    public PaymentProcessor(List<Payment> strategies) {
        this.strategies = strategies;
    }

    public Payment find(String type) {
        return strategies.stream()
            .filter(s -> s.supports(type))
            .findFirst()
            .orElseThrow();
    }
}`;selectType(s){this.activeType.set(s);let o={Constructor:"Constructor injection: immutable fields, required deps, easy to test. USE THIS! \u2705",Setter:"Setter injection: mutable, good for optional deps. Use sparingly. \u26A0\uFE0F",Field:"Field injection: hidden dependencies, impossible to unit test without reflection. AVOID! \u274C"};this.status.set(o[s]??"")}static \u0275fac=function(o){return new(o||d)};static \u0275cmp=f({type:d,selectors:[["app-topic-spring-di"]],decls:113,vars:14,consts:[["title","Dependency Injection","subtitle","Let Spring wire your objects. Master constructor, setter, and field injection \u2014 and know when to use each.","badge","SPRING FRAMEWORK","gradient","linear-gradient(135deg, #15803d, #86efac)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-green",3,"size"],[1,"prose"],[3,"code"],[1,"viz-card"],[1,"viz-title"],["name","play","css","icon-green",3,"size"],[1,"inject-grid"],[1,"inject-card",3,"active","class"],[1,"viz-status"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"],["name","arrow-right","css","icon-indigo",3,"size"],[1,"op-desc"],["name","briefcase","css","icon-green",3,"size"],[1,"use-cases"],[1,"use-case","green"],[1,"use-num","green-bg"],[1,"use-title"],[1,"use-desc"],[1,"use-case","blue"],[1,"use-num","blue-bg"],[1,"use-case","purple"],[1,"use-num","purple-bg"],[1,"inject-card",3,"click"],[1,"inject-badge"],[1,"inject-name"],[1,"inject-desc"]],template:function(o,c){o&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),a(3,"app-icon",3),t(4," What is Dependency Injection?"),e(),n(5,"div",4)(6,"p")(7,"strong"),t(8,"Dependency Injection (DI)"),e(),t(9," is a design pattern where objects receive their dependencies from an external source rather than creating them. Spring's IoC container provides three DI mechanisms:"),e(),n(10,"ul")(11,"li")(12,"strong"),t(13,"Constructor Injection"),e(),t(14," (recommended): Dependencies via constructor parameters. Immutable, testable."),e(),n(15,"li")(16,"strong"),t(17,"Setter Injection:"),e(),t(18," Dependencies via setter methods. Optional dependencies."),e(),n(19,"li")(20,"strong"),t(21,"Field Injection"),e(),t(22," (discouraged): Direct @Autowired on fields. Hard to test."),e()(),a(23,"app-code-block",5),e()(),n(24,"section",1)(25,"div",6)(26,"h3",7),a(27,"app-icon",8),t(28," Injection Type Comparison"),e(),n(29,"div",9),v(30,I,7,7,"div",10,j),e(),n(32,"div",11),t(33),e()()(),n(34,"section",1)(35,"h2",2),a(36,"app-icon",12),t(37," DI Patterns"),e(),n(38,"div",13)(39,"div",14)(40,"h3",15),a(41,"app-icon",16),t(42," Constructor Injection"),e(),n(43,"p",17),t(44,"Best practice \u2014 immutable, required dependencies."),e(),a(45,"app-code-block",5),e(),n(46,"div",14)(47,"h3",15),a(48,"app-icon",16),t(49," Qualifiers"),e(),n(50,"p",17),t(51,"Resolve ambiguity when multiple beans of same type exist."),e(),a(52,"app-code-block",5),e(),n(53,"div",14)(54,"h3",15),a(55,"app-icon",16),t(56," Optional Dependencies"),e(),n(57,"p",17),t(58,"Handle optional beans gracefully."),e(),a(59,"app-code-block",5),e(),n(60,"div",14)(61,"h3",15),a(62,"app-icon",16),t(63," Collection Injection"),e(),n(64,"p",17),t(65,"Inject all implementations of an interface."),e(),a(66,"app-code-block",5),e()()(),n(67,"section",1)(68,"h2",2),a(69,"app-icon",18),t(70," Real-Time Use Cases"),e(),n(71,"div",19)(72,"div",20)(73,"div",21),t(74,"1"),e(),n(75,"div")(76,"h4",22),t(77,"Service Layer Wiring"),e(),n(78,"p",23)(79,"code"),t(80,"OrderService"),e(),t(81," depends on "),n(82,"code"),t(83,"PaymentService"),e(),t(84,", "),n(85,"code"),t(86,"InventoryService"),e(),t(87,", "),n(88,"code"),t(89,"NotificationService"),e(),t(90," \u2014 all injected via constructor. Zero manual wiring."),e()()(),n(91,"div",24)(92,"div",25),t(93,"2"),e(),n(94,"div")(95,"h4",22),t(96,"Strategy Pattern with DI"),e(),n(97,"p",23),t(98,"Inject "),n(99,"code"),t(100,"List<PaymentStrategy>"),e(),t(101," to get all payment methods automatically. Adding a new strategy requires zero changes to existing code."),e()()(),n(102,"div",26)(103,"div",27),t(104,"3"),e(),n(105,"div")(106,"h4",22),t(107,"Unit Testing with Mocks"),e(),n(108,"p",23),t(109,"Constructor injection makes testing trivial: "),n(110,"code"),t(111,"new UserService(mockRepo)"),e(),t(112," \u2014 no Spring context needed, pure unit test."),e()()()()()()),o&2&&(i(3),r("size",28),i(20),r("code",c.codeIntro),i(4),r("size",22),i(3),x(c.injectionTypes()),i(3),l(c.status()),i(3),r("size",28),i(5),r("size",18),i(4),r("code",c.codeConstructor),i(3),r("size",18),i(4),r("code",c.codeQualifier),i(3),r("size",18),i(4),r("code",c.codeOptional),i(3),r("size",18),i(4),r("code",c.codeCollection),i(3),r("size",28))},dependencies:[P,O,h],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-green[_ngcontent-%COMP%]{color:#16a34a}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:14px 0;padding-left:22px;list-style:disc}.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:8px}.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#0f172a;font-weight:700}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f1f5f9;padding:2px 7px;border-radius:5px;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#16a34a}.viz-card[_ngcontent-%COMP%]{background:#fff;border-radius:18px;border:1px solid #e2e8f0;box-shadow:0 4px 16px #0000000d;padding:28px 24px}.viz-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;font-size:1.15rem;font-weight:700;color:#0f172a;margin:0 0 24px}.inject-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:20px}.inject-card[_ngcontent-%COMP%]{padding:16px;border-radius:12px;border:2px solid #e2e8f0;text-align:center;cursor:pointer;transition:all .3s}.inject-card.active[_ngcontent-%COMP%]{transform:scale(1.03);box-shadow:0 4px 12px #0000001a}.inject-card.best.active[_ngcontent-%COMP%]{border-color:#16a34a;background:#f0fdf4}.inject-card.ok.active[_ngcontent-%COMP%]{border-color:#d97706;background:#fffbeb}.inject-card.avoid.active[_ngcontent-%COMP%]{border-color:#dc2626;background:#fef2f2}.inject-badge[_ngcontent-%COMP%]{display:block;font-size:.5rem;font-weight:700;letter-spacing:.1em;margin-bottom:4px}.inject-card.best[_ngcontent-%COMP%]   .inject-badge[_ngcontent-%COMP%]{color:#16a34a}.inject-card.ok[_ngcontent-%COMP%]   .inject-badge[_ngcontent-%COMP%]{color:#d97706}.inject-card.avoid[_ngcontent-%COMP%]   .inject-badge[_ngcontent-%COMP%]{color:#dc2626}.inject-name[_ngcontent-%COMP%]{display:block;font-size:.78rem;font-weight:800;color:#0f172a;margin-bottom:4px}.inject-desc[_ngcontent-%COMP%]{display:block;font-size:.6rem;color:#64748b}.viz-status[_ngcontent-%COMP%]{background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:12px 16px;text-align:center;font-family:JetBrains Mono,monospace;font-size:.78rem;color:#334155}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0;box-shadow:0 1px 3px #0000000a}.op-card[_ngcontent-%COMP%]:hover{box-shadow:0 4px 12px #0000000f}.op-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}.op-desc[_ngcontent-%COMP%]{font-size:.78rem;color:#64748b;line-height:1.55;margin:0}.use-cases[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.use-case[_ngcontent-%COMP%]{display:flex;gap:16px;padding:20px;border-radius:14px;border:1px solid}.use-case.green[_ngcontent-%COMP%]{background:#f0fdf4;border-color:#86efac}.use-case.blue[_ngcontent-%COMP%]{background:#eff6ff;border-color:#bfdbfe}.use-case.purple[_ngcontent-%COMP%]{background:#faf5ff;border-color:#d8b4fe}.use-num[_ngcontent-%COMP%]{width:34px;height:34px;min-width:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:.78rem;font-weight:800}.green-bg[_ngcontent-%COMP%]{background:#16a34a}.blue-bg[_ngcontent-%COMP%]{background:#3b82f6}.purple-bg[_ngcontent-%COMP%]{background:#8b5cf6}.use-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 4px}.use-desc[_ngcontent-%COMP%]{font-size:.78rem;line-height:1.55;margin:0;color:#334155}.use-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#0000000f;padding:1px 5px;border-radius:4px;font-family:JetBrains Mono,monospace;font-size:.72rem}"],changeDetection:0})};export{_ as SpringDiComponent};
