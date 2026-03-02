import{a as f,b as x,c as b}from"./chunk-6QA53VVD.js";import{Db as d,Fb as t,Gb as u,Ka as i,Va as g,ia as s,kb as o,lb as n,mb as e,nb as a,ub as l}from"./chunk-RGVQRHF6.js";import"./chunk-NWJ5J3BN.js";var v=class m{activeLayer=s("");status=s("AOP weaves advice around your methods at runtime via proxies.");isAnimating=s(!1);codeIntro=`@Aspect
@Component
public class LoggingAspect {

    @Before("execution(* com.app.service.*.*(..))")
    public void logBefore(JoinPoint jp) {
        log.info("\u2192 " + jp.getSignature().getName());
    }

    @AfterReturning("execution(* com.app.service.*.*(..))")
    public void logAfter(JoinPoint jp) {
        log.info("\u2190 " + jp.getSignature().getName());
    }
}`;codeBefore=`@Aspect @Component
public class SecurityAspect {

    @Before("@annotation(secured)")
    public void checkAuth(Secured secured) {
        if (!currentUser().hasRole(secured.value()))
            throw new AccessDeniedException("Forbidden");
    }

    @AfterThrowing(
        pointcut = "execution(* com.app..*(..))",
        throwing = "ex")
    public void logError(Exception ex) {
        log.error("Exception: " + ex.getMessage());
    }
}`;codeAround=`@Around("execution(* com.app.service.*.*(..))")
public Object measureTime(ProceedingJoinPoint pjp)
        throws Throwable {
    long start = System.currentTimeMillis();
    try {
        Object result = pjp.proceed(); // call target
        return result;
    } finally {
        long elapsed = System.currentTimeMillis()-start;
        log.info(pjp.getSignature() + ": " +
                 elapsed + "ms");
    }
}`;codePointcut=`// All methods in service package
@Pointcut("execution(* com.app.service.*.*(..))")
public void serviceMethods() {}

// Methods annotated with @Cacheable
@Pointcut("@annotation(Cacheable)")
public void cacheableMethods() {}

// Public methods only
@Pointcut("execution(public * *(..))")
public void publicMethods() {}

// Combine pointcuts
@Before("serviceMethods() && publicMethods()")
public void audit(JoinPoint jp) { }`;codeCustom=`// 1. Define custom annotation
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface RateLimit {
    int maxRequests() default 100;
}

// 2. Create aspect targeting it
@Aspect @Component
public class RateLimitAspect {
    @Around("@annotation(limit)")
    public Object enforce(ProceedingJoinPoint pjp,
                          RateLimit limit) throws Throwable {
        if (exceeds(limit.maxRequests()))
            throw new TooManyRequestsException();
        return pjp.proceed();
    }
}

// 3. Use it!
@RateLimit(maxRequests = 50)
public Response getUsers() { }`;sleep(p){return new Promise(c=>setTimeout(c,p))}async runWeave(){this.isAnimating()||(this.isAnimating.set(!0),this.activeLayer.set("before"),this.status.set("@Before advice runs FIRST \u2014 logging, auth checks, validation..."),await this.sleep(1200),this.activeLayer.set("target"),this.status.set("Target method executes \u2014 orderService.placeOrder()..."),await this.sleep(1200),this.activeLayer.set("after"),this.status.set("@AfterReturning \u2014 method succeeded! Log elapsed time. \u2705"),await this.sleep(1e3),this.status.set("The proxy intercepts calls and weaves advice \u2014 your code is untouched! \u2705"),this.isAnimating.set(!1))}resetDemo(){this.activeLayer.set(""),this.status.set("AOP weaves advice around your methods at runtime via proxies."),this.isAnimating.set(!1)}static \u0275fac=function(c){return new(c||m)};static \u0275cmp=g({type:m,selectors:[["app-topic-spring-aop"]],decls:130,vars:24,consts:[["title","AOP (Aspect-Oriented Programming)","subtitle","Separate cross-cutting concerns. Master aspects, pointcuts, advice, and weaving for logging, security, and transactions.","badge","SPRING FRAMEWORK","gradient","linear-gradient(135deg, #7c2d12, #f97316)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-orange",3,"size"],[1,"prose"],[3,"code"],[1,"viz-card"],[1,"viz-title"],["name","play","css","icon-orange",3,"size"],[1,"weave-demo"],[1,"weave-layer"],[1,"layer-label"],[1,"layer-code"],[1,"weave-target"],[1,"viz-status"],[1,"viz-controls"],[1,"btn","btn-orange",3,"click","disabled"],["name","play",3,"size"],[1,"btn","btn-gray",3,"click","disabled"],["name","refresh-cw",3,"size"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"],["name","arrow-right","css","icon-indigo",3,"size"],[1,"op-desc"],["name","briefcase","css","icon-orange",3,"size"],[1,"use-cases"],[1,"use-case","orange"],[1,"use-num","orange-bg"],[1,"use-title"],[1,"use-desc"],[1,"use-case","blue"],[1,"use-num","blue-bg"],[1,"use-case","purple"],[1,"use-num","purple-bg"]],template:function(c,r){c&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),a(3,"app-icon",3),t(4," What is AOP?"),e(),n(5,"div",4)(6,"p")(7,"strong"),t(8,"AOP"),e(),t(9," lets you add behavior to existing code without modifying it. Cross-cutting concerns like logging, security, and transactions are separated into "),n(10,"strong"),t(11,"Aspects"),e(),t(12,"."),e(),n(13,"ul")(14,"li")(15,"strong"),t(16,"Aspect:"),e(),t(17," A module of cross-cutting logic (e.g., logging aspect)."),e(),n(18,"li")(19,"strong"),t(20,"Advice:"),e(),t(21," The action taken (before, after, around)."),e(),n(22,"li")(23,"strong"),t(24,"Pointcut:"),e(),t(25," Expression defining WHERE advice applies."),e(),n(26,"li")(27,"strong"),t(28,"Join Point:"),e(),t(29," A method execution where advice CAN be applied."),e()(),a(30,"app-code-block",5),e()(),n(31,"section",1)(32,"div",6)(33,"h3",7),a(34,"app-icon",8),t(35," AOP Weaving Visualizer"),e(),n(36,"div",9)(37,"div",10)(38,"span",11),t(39,"@Before"),e(),n(40,"span",12),t(41,'log.info("Entering method...")'),e()(),n(42,"div",13)(43,"span",11),t(44,"TARGET METHOD"),e(),n(45,"span",12),t(46,"orderService.placeOrder()"),e()(),n(47,"div",10)(48,"span",11),t(49,"@AfterReturning"),e(),n(50,"span",12),t(51,'log.info("Completed in 42ms")'),e()()(),n(52,"div",14),t(53),e(),n(54,"div",15)(55,"button",16),l("click",function(){return r.runWeave()}),a(56,"app-icon",17),t(57," Show Weaving"),e(),n(58,"button",18),l("click",function(){return r.resetDemo()}),a(59,"app-icon",19),t(60," Reset"),e()()()(),n(61,"section",1)(62,"h2",2),a(63,"app-icon",20),t(64," Advice Types"),e(),n(65,"div",21)(66,"div",22)(67,"h3",23),a(68,"app-icon",24),t(69," @Before & @After"),e(),n(70,"p",25),t(71,"Run logic before/after method execution."),e(),a(72,"app-code-block",5),e(),n(73,"div",22)(74,"h3",23),a(75,"app-icon",24),t(76," @Around"),e(),n(77,"p",25),t(78,"Full control \u2014 wrap the entire method execution."),e(),a(79,"app-code-block",5),e(),n(80,"div",22)(81,"h3",23),a(82,"app-icon",24),t(83," Pointcut Expressions"),e(),n(84,"p",25),t(85,"Target specific methods, packages, or annotations."),e(),a(86,"app-code-block",5),e(),n(87,"div",22)(88,"h3",23),a(89,"app-icon",24),t(90," Custom Annotations"),e(),n(91,"p",25),t(92,"Create your own annotations for AOP targeting."),e(),a(93,"app-code-block",5),e()()(),n(94,"section",1)(95,"h2",2),a(96,"app-icon",26),t(97," Real-Time Use Cases"),e(),n(98,"div",27)(99,"div",28)(100,"div",29),t(101,"1"),e(),n(102,"div")(103,"h4",30),t(104,"@Transactional"),e(),n(105,"p",31),t(106,"Spring's "),n(107,"code"),t(108,"@Transactional"),e(),t(109," is pure AOP \u2014 an aspect wraps your method in a database transaction. Commit on success, rollback on exception."),e()()(),n(110,"div",32)(111,"div",33),t(112,"2"),e(),n(113,"div")(114,"h4",30),t(115,"Method-Level Security"),e(),n(116,"p",31)(117,"code"),t(118,`@PreAuthorize("hasRole('ADMIN')")`),e(),t(119," \u2014 Spring Security uses AOP to check permissions BEFORE your method runs."),e()()(),n(120,"div",34)(121,"div",35),t(122,"3"),e(),n(123,"div")(124,"h4",30),t(125,"Performance Monitoring"),e(),n(126,"p",31)(127,"code"),t(128,"@Around"),e(),t(129," advice records execution time for every service method. Feed metrics into Micrometer/Prometheus without touching business code."),e()()()()()()),c&2&&(i(3),o("size",28),i(27),o("code",r.codeIntro),i(4),o("size",22),i(3),d("active",r.activeLayer()==="before"),i(5),d("active",r.activeLayer()==="target"),i(5),d("active",r.activeLayer()==="after"),i(6),u(r.status()),i(2),o("disabled",r.isAnimating()),i(),o("size",16),i(2),o("disabled",r.isAnimating()),i(),o("size",16),i(4),o("size",28),i(5),o("size",18),i(4),o("code",r.codeBefore),i(3),o("size",18),i(4),o("code",r.codeAround),i(3),o("size",18),i(4),o("code",r.codePointcut),i(3),o("size",18),i(4),o("code",r.codeCustom),i(3),o("size",28))},dependencies:[f,x,b],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-orange[_ngcontent-%COMP%]{color:#ea580c}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:14px 0;padding-left:22px;list-style:disc}.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:8px}.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#0f172a;font-weight:700}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f1f5f9;padding:2px 7px;border-radius:5px;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#ea580c}.viz-card[_ngcontent-%COMP%]{background:#fff;border-radius:18px;border:1px solid #e2e8f0;box-shadow:0 4px 16px #0000000d;padding:28px 24px}.viz-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;font-size:1.15rem;font-weight:700;color:#0f172a;margin:0 0 24px}.weave-demo[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:6px;margin-bottom:20px}.weave-layer[_ngcontent-%COMP%], .weave-target[_ngcontent-%COMP%]{padding:12px 16px;border-radius:10px;border:2px solid #e2e8f0;display:flex;align-items:center;gap:12px;transition:all .4s}.weave-layer.active[_ngcontent-%COMP%]{border-color:#f97316;background:#fff7ed}.weave-target.active[_ngcontent-%COMP%]{border-color:#4f46e5;background:#eef2ff}.layer-label[_ngcontent-%COMP%]{font-size:.55rem;font-weight:700;letter-spacing:.1em;color:#94a3b8;min-width:100px}.layer-code[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:.68rem;color:#0f172a}.viz-status[_ngcontent-%COMP%]{background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:12px 16px;text-align:center;font-family:JetBrains Mono,monospace;font-size:.78rem;color:#334155;margin-bottom:20px}.viz-controls[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;gap:10px}.btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:7px;padding:10px 18px;border-radius:10px;font-size:.78rem;font-weight:600;border:none;cursor:pointer;transition:all .2s}.btn[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:not-allowed}.btn-orange[_ngcontent-%COMP%]{background:#ea580c;color:#fff}.btn-orange[_ngcontent-%COMP%]:hover:not(:disabled){background:#c2410c}.btn-gray[_ngcontent-%COMP%]{background:#e2e8f0;color:#334155}.btn-gray[_ngcontent-%COMP%]:hover:not(:disabled){background:#cbd5e1}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0;box-shadow:0 1px 3px #0000000a}.op-card[_ngcontent-%COMP%]:hover{box-shadow:0 4px 12px #0000000f}.op-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}.op-desc[_ngcontent-%COMP%]{font-size:.78rem;color:#64748b;line-height:1.55;margin:0}.use-cases[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.use-case[_ngcontent-%COMP%]{display:flex;gap:16px;padding:20px;border-radius:14px;border:1px solid}.use-case.orange[_ngcontent-%COMP%]{background:#fff7ed;border-color:#fed7aa}.use-case.blue[_ngcontent-%COMP%]{background:#eff6ff;border-color:#bfdbfe}.use-case.purple[_ngcontent-%COMP%]{background:#faf5ff;border-color:#d8b4fe}.use-num[_ngcontent-%COMP%]{width:34px;height:34px;min-width:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:.78rem;font-weight:800}.orange-bg[_ngcontent-%COMP%]{background:#ea580c}.blue-bg[_ngcontent-%COMP%]{background:#3b82f6}.purple-bg[_ngcontent-%COMP%]{background:#8b5cf6}.use-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 4px}.use-desc[_ngcontent-%COMP%]{font-size:.78rem;line-height:1.55;margin:0;color:#334155}.use-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#0000000f;padding:1px 5px;border-radius:4px;font-family:JetBrains Mono,monospace;font-size:.72rem}"],changeDetection:0})};export{v as SpringAopComponent};
