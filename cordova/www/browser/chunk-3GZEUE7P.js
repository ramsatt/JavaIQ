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
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-VBTVL2BZ.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/spring-aop.component.ts
var SpringAopComponent = class _SpringAopComponent {
  activeLayer = signal("", ...ngDevMode ? [{ debugName: "activeLayer" }] : []);
  status = signal("AOP weaves advice around your methods at runtime via proxies.", ...ngDevMode ? [{ debugName: "status" }] : []);
  isAnimating = signal(false, ...ngDevMode ? [{ debugName: "isAnimating" }] : []);
  codeIntro = `@Aspect
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
}`;
  codeBefore = `@Aspect @Component
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
}`;
  codeAround = `@Around("execution(* com.app.service.*.*(..))")
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
}`;
  codePointcut = `// All methods in service package
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
public void audit(JoinPoint jp) { }`;
  codeCustom = `// 1. Define custom annotation
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
public Response getUsers() { }`;
  sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }
  async runWeave() {
    if (this.isAnimating())
      return;
    this.isAnimating.set(true);
    this.activeLayer.set("before");
    this.status.set("@Before advice runs FIRST \u2014 logging, auth checks, validation...");
    await this.sleep(1200);
    this.activeLayer.set("target");
    this.status.set("Target method executes \u2014 orderService.placeOrder()...");
    await this.sleep(1200);
    this.activeLayer.set("after");
    this.status.set("@AfterReturning \u2014 method succeeded! Log elapsed time. \u2705");
    await this.sleep(1e3);
    this.status.set("The proxy intercepts calls and weaves advice \u2014 your code is untouched! \u2705");
    this.isAnimating.set(false);
  }
  resetDemo() {
    this.activeLayer.set("");
    this.status.set("AOP weaves advice around your methods at runtime via proxies.");
    this.isAnimating.set(false);
  }
  static \u0275fac = function SpringAopComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SpringAopComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SpringAopComponent, selectors: [["app-topic-spring-aop"]], decls: 130, vars: 24, consts: [["title", "AOP (Aspect-Oriented Programming)", "subtitle", "Separate cross-cutting concerns. Master aspects, pointcuts, advice, and weaving for logging, security, and transactions.", "badge", "SPRING FRAMEWORK", "gradient", "linear-gradient(135deg, #7c2d12, #f97316)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-orange", 3, "size"], [1, "prose"], [3, "code"], [1, "viz-card"], [1, "viz-title"], ["name", "play", "css", "icon-orange", 3, "size"], [1, "weave-demo"], [1, "weave-layer"], [1, "layer-label"], [1, "layer-code"], [1, "weave-target"], [1, "viz-status"], [1, "viz-controls"], [1, "btn", "btn-orange", 3, "click", "disabled"], ["name", "play", 3, "size"], [1, "btn", "btn-gray", 3, "click", "disabled"], ["name", "refresh-cw", 3, "size"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"], ["name", "arrow-right", "css", "icon-indigo", 3, "size"], [1, "op-desc"], ["name", "briefcase", "css", "icon-orange", 3, "size"], [1, "use-cases"], [1, "use-case", "orange"], [1, "use-num", "orange-bg"], [1, "use-title"], [1, "use-desc"], [1, "use-case", "blue"], [1, "use-num", "blue-bg"], [1, "use-case", "purple"], [1, "use-num", "purple-bg"]], template: function SpringAopComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " What is AOP?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p")(7, "strong");
      \u0275\u0275text(8, "AOP");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, " lets you add behavior to existing code without modifying it. Cross-cutting concerns like logging, security, and transactions are separated into ");
      \u0275\u0275elementStart(10, "strong");
      \u0275\u0275text(11, "Aspects");
      \u0275\u0275elementEnd();
      \u0275\u0275text(12, ".");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "ul")(14, "li")(15, "strong");
      \u0275\u0275text(16, "Aspect:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(17, " A module of cross-cutting logic (e.g., logging aspect).");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "li")(19, "strong");
      \u0275\u0275text(20, "Advice:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(21, " The action taken (before, after, around).");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "li")(23, "strong");
      \u0275\u0275text(24, "Pointcut:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(25, " Expression defining WHERE advice applies.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "li")(27, "strong");
      \u0275\u0275text(28, "Join Point:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(29, " A method execution where advice CAN be applied.");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(30, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "section", 1)(32, "div", 6)(33, "h3", 7);
      \u0275\u0275element(34, "app-icon", 8);
      \u0275\u0275text(35, " AOP Weaving Visualizer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 9)(37, "div", 10)(38, "span", 11);
      \u0275\u0275text(39, "@Before");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "span", 12);
      \u0275\u0275text(41, 'log.info("Entering method...")');
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div", 13)(43, "span", 11);
      \u0275\u0275text(44, "TARGET METHOD");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "span", 12);
      \u0275\u0275text(46, "orderService.placeOrder()");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "div", 10)(48, "span", 11);
      \u0275\u0275text(49, "@AfterReturning");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "span", 12);
      \u0275\u0275text(51, 'log.info("Completed in 42ms")');
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(52, "div", 14);
      \u0275\u0275text(53);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "div", 15)(55, "button", 16);
      \u0275\u0275listener("click", function SpringAopComponent_Template_button_click_55_listener() {
        return ctx.runWeave();
      });
      \u0275\u0275element(56, "app-icon", 17);
      \u0275\u0275text(57, " Show Weaving");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "button", 18);
      \u0275\u0275listener("click", function SpringAopComponent_Template_button_click_58_listener() {
        return ctx.resetDemo();
      });
      \u0275\u0275element(59, "app-icon", 19);
      \u0275\u0275text(60, " Reset");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(61, "section", 1)(62, "h2", 2);
      \u0275\u0275element(63, "app-icon", 20);
      \u0275\u0275text(64, " Advice Types");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "div", 21)(66, "div", 22)(67, "h3", 23);
      \u0275\u0275element(68, "app-icon", 24);
      \u0275\u0275text(69, " @Before & @After");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "p", 25);
      \u0275\u0275text(71, "Run logic before/after method execution.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(72, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "div", 22)(74, "h3", 23);
      \u0275\u0275element(75, "app-icon", 24);
      \u0275\u0275text(76, " @Around");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "p", 25);
      \u0275\u0275text(78, "Full control \u2014 wrap the entire method execution.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(79, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "div", 22)(81, "h3", 23);
      \u0275\u0275element(82, "app-icon", 24);
      \u0275\u0275text(83, " Pointcut Expressions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "p", 25);
      \u0275\u0275text(85, "Target specific methods, packages, or annotations.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(86, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "div", 22)(88, "h3", 23);
      \u0275\u0275element(89, "app-icon", 24);
      \u0275\u0275text(90, " Custom Annotations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "p", 25);
      \u0275\u0275text(92, "Create your own annotations for AOP targeting.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(93, "app-code-block", 5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(94, "section", 1)(95, "h2", 2);
      \u0275\u0275element(96, "app-icon", 26);
      \u0275\u0275text(97, " Real-Time Use Cases");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "div", 27)(99, "div", 28)(100, "div", 29);
      \u0275\u0275text(101, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "div")(103, "h4", 30);
      \u0275\u0275text(104, "@Transactional");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "p", 31);
      \u0275\u0275text(106, "Spring's ");
      \u0275\u0275elementStart(107, "code");
      \u0275\u0275text(108, "@Transactional");
      \u0275\u0275elementEnd();
      \u0275\u0275text(109, " is pure AOP \u2014 an aspect wraps your method in a database transaction. Commit on success, rollback on exception.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(110, "div", 32)(111, "div", 33);
      \u0275\u0275text(112, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "div")(114, "h4", 30);
      \u0275\u0275text(115, "Method-Level Security");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "p", 31)(117, "code");
      \u0275\u0275text(118, `@PreAuthorize("hasRole('ADMIN')")`);
      \u0275\u0275elementEnd();
      \u0275\u0275text(119, " \u2014 Spring Security uses AOP to check permissions BEFORE your method runs.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(120, "div", 34)(121, "div", 35);
      \u0275\u0275text(122, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "div")(124, "h4", 30);
      \u0275\u0275text(125, "Performance Monitoring");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "p", 31)(127, "code");
      \u0275\u0275text(128, "@Around");
      \u0275\u0275elementEnd();
      \u0275\u0275text(129, " advice records execution time for every service method. Feed metrics into Micrometer/Prometheus without touching business code.");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(27);
      \u0275\u0275property("code", ctx.codeIntro);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 22);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.activeLayer() === "before");
      \u0275\u0275advance(5);
      \u0275\u0275classProp("active", ctx.activeLayer() === "target");
      \u0275\u0275advance(5);
      \u0275\u0275classProp("active", ctx.activeLayer() === "after");
      \u0275\u0275advance(6);
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
      \u0275\u0275property("code", ctx.codeBefore);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeAround);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codePointcut);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeCustom);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ['\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-orange[_ngcontent-%COMP%] {\n  color: #ea580c;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 700;\n}\n.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #ea580c;\n}\n.viz-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);\n  padding: 28px 24px;\n}\n.viz-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.weave-demo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 20px;\n}\n.weave-layer[_ngcontent-%COMP%], \n.weave-target[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-radius: 10px;\n  border: 2px solid #e2e8f0;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  transition: all 0.4s;\n}\n.weave-layer.active[_ngcontent-%COMP%] {\n  border-color: #f97316;\n  background: #fff7ed;\n}\n.weave-target.active[_ngcontent-%COMP%] {\n  border-color: #4f46e5;\n  background: #eef2ff;\n}\n.layer-label[_ngcontent-%COMP%] {\n  font-size: 0.55rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  color: #94a3b8;\n  min-width: 100px;\n}\n.layer-code[_ngcontent-%COMP%] {\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.68rem;\n  color: #0f172a;\n}\n.viz-status[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n  margin-bottom: 20px;\n}\n.viz-controls[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-orange[_ngcontent-%COMP%] {\n  background: #ea580c;\n  color: #fff;\n}\n.btn-orange[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #c2410c;\n}\n.btn-gray[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #334155;\n}\n.btn-gray[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #cbd5e1;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.op-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.op-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n.use-cases[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.use-case[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 14px;\n  border: 1px solid;\n}\n.use-case.orange[_ngcontent-%COMP%] {\n  background: #fff7ed;\n  border-color: #fed7aa;\n}\n.use-case.blue[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.use-case.purple[_ngcontent-%COMP%] {\n  background: #faf5ff;\n  border-color: #d8b4fe;\n}\n.use-num[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.orange-bg[_ngcontent-%COMP%] {\n  background: #ea580c;\n}\n.blue-bg[_ngcontent-%COMP%] {\n  background: #3b82f6;\n}\n.purple-bg[_ngcontent-%COMP%] {\n  background: #8b5cf6;\n}\n.use-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.use-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  line-height: 1.55;\n  margin: 0;\n  color: #334155;\n}\n.use-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.06);\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.72rem;\n}\n/*# sourceMappingURL=spring-aop.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpringAopComponent, [{
    type: Component,
    args: [{ selector: "app-topic-spring-aop", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout title="AOP (Aspect-Oriented Programming)" subtitle="Separate cross-cutting concerns. Master aspects, pointcuts, advice, and weaving for logging, security, and transactions." badge="SPRING FRAMEWORK" gradient="linear-gradient(135deg, #7c2d12, #f97316)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-orange" /> What is AOP?</h2>
        <div class="prose">
          <p><strong>AOP</strong> lets you add behavior to existing code without modifying it. Cross-cutting concerns like logging, security, and transactions are separated into <strong>Aspects</strong>.</p>
          <ul>
            <li><strong>Aspect:</strong> A module of cross-cutting logic (e.g., logging aspect).</li>
            <li><strong>Advice:</strong> The action taken (before, after, around).</li>
            <li><strong>Pointcut:</strong> Expression defining WHERE advice applies.</li>
            <li><strong>Join Point:</strong> A method execution where advice CAN be applied.</li>
          </ul>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title"><app-icon name="play" [size]="22" css="icon-orange" /> AOP Weaving Visualizer</h3>
          <div class="weave-demo">
            <div class="weave-layer" [class.active]="activeLayer() === 'before'"><span class="layer-label">&#64;Before</span><span class="layer-code">log.info("Entering method...")</span></div>
            <div class="weave-target" [class.active]="activeLayer() === 'target'"><span class="layer-label">TARGET METHOD</span><span class="layer-code">orderService.placeOrder()</span></div>
            <div class="weave-layer" [class.active]="activeLayer() === 'after'"><span class="layer-label">&#64;AfterReturning</span><span class="layer-code">log.info("Completed in 42ms")</span></div>
          </div>
          <div class="viz-status">{{ status() }}</div>
          <div class="viz-controls">
            <button (click)="runWeave()" [disabled]="isAnimating()" class="btn btn-orange"><app-icon name="play" [size]="16" /> Show Weaving</button>
            <button (click)="resetDemo()" [disabled]="isAnimating()" class="btn btn-gray"><app-icon name="refresh-cw" [size]="16" /> Reset</button>
          </div>
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Advice Types</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> &#64;Before & &#64;After</h3><p class="op-desc">Run logic before/after method execution.</p><app-code-block [code]="codeBefore" /></div>
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> &#64;Around</h3><p class="op-desc">Full control \u2014 wrap the entire method execution.</p><app-code-block [code]="codeAround" /></div>
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Pointcut Expressions</h3><p class="op-desc">Target specific methods, packages, or annotations.</p><app-code-block [code]="codePointcut" /></div>
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Custom Annotations</h3><p class="op-desc">Create your own annotations for AOP targeting.</p><app-code-block [code]="codeCustom" /></div>
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="briefcase" [size]="28" css="icon-orange" /> Real-Time Use Cases</h2>
        <div class="use-cases">
          <div class="use-case orange"><div class="use-num orange-bg">1</div><div><h4 class="use-title">&#64;Transactional</h4><p class="use-desc">Spring's <code>&#64;Transactional</code> is pure AOP \u2014 an aspect wraps your method in a database transaction. Commit on success, rollback on exception.</p></div></div>
          <div class="use-case blue"><div class="use-num blue-bg">2</div><div><h4 class="use-title">Method-Level Security</h4><p class="use-desc"><code>&#64;PreAuthorize("hasRole('ADMIN')")</code> \u2014 Spring Security uses AOP to check permissions BEFORE your method runs.</p></div></div>
          <div class="use-case purple"><div class="use-num purple-bg">3</div><div><h4 class="use-title">Performance Monitoring</h4><p class="use-desc"><code>&#64;Around</code> advice records execution time for every service method. Feed metrics into Micrometer/Prometheus without touching business code.</p></div></div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ['/* angular:styles/component:css;0ba438d288800f1dc866c0bbc93a8f58b02c3bfe6ba26565d874aab49253af88;/Users/sathishkumarramalingam/projects/JavaIQ/.claude/worktrees/goofy-haibt/src/app/features/tutorials/topics/spring-aop.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-orange {\n  color: #ea580c;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.prose ul {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose li {\n  margin-bottom: 8px;\n}\n.prose strong {\n  color: #0f172a;\n  font-weight: 700;\n}\n.prose code {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #ea580c;\n}\n.viz-card {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);\n  padding: 28px 24px;\n}\n.viz-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.weave-demo {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 20px;\n}\n.weave-layer,\n.weave-target {\n  padding: 12px 16px;\n  border-radius: 10px;\n  border: 2px solid #e2e8f0;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  transition: all 0.4s;\n}\n.weave-layer.active {\n  border-color: #f97316;\n  background: #fff7ed;\n}\n.weave-target.active {\n  border-color: #4f46e5;\n  background: #eef2ff;\n}\n.layer-label {\n  font-size: 0.55rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  color: #94a3b8;\n  min-width: 100px;\n}\n.layer-code {\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.68rem;\n  color: #0f172a;\n}\n.viz-status {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n  margin-bottom: 20px;\n}\n.viz-controls {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-orange {\n  background: #ea580c;\n  color: #fff;\n}\n.btn-orange:hover:not(:disabled) {\n  background: #c2410c;\n}\n.btn-gray {\n  background: #e2e8f0;\n  color: #334155;\n}\n.btn-gray:hover:not(:disabled) {\n  background: #cbd5e1;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.op-card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.op-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc {\n  font-size: 0.78rem;\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n.use-cases {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.use-case {\n  display: flex;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 14px;\n  border: 1px solid;\n}\n.use-case.orange {\n  background: #fff7ed;\n  border-color: #fed7aa;\n}\n.use-case.blue {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.use-case.purple {\n  background: #faf5ff;\n  border-color: #d8b4fe;\n}\n.use-num {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.orange-bg {\n  background: #ea580c;\n}\n.blue-bg {\n  background: #3b82f6;\n}\n.purple-bg {\n  background: #8b5cf6;\n}\n.use-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.use-desc {\n  font-size: 0.78rem;\n  line-height: 1.55;\n  margin: 0;\n  color: #334155;\n}\n.use-desc code {\n  background: rgba(0, 0, 0, 0.06);\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.72rem;\n}\n/*# sourceMappingURL=spring-aop.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpringAopComponent, { className: "SpringAopComponent", filePath: "src/app/features/tutorials/topics/spring-aop.component.ts", lineNumber: 78 });
})();
export {
  SpringAopComponent
};
//# sourceMappingURL=chunk-3GZEUE7P.js.map
