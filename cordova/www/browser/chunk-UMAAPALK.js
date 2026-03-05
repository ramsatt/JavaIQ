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
} from "./chunk-L6VISU4K.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/exceptions.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ExceptionsComponent_For_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "span", 38);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 39);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 40);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r1 = ctx.$implicit;
    \u0275\u0275classMap(step_r1.state);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r1.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r1.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r1.label);
  }
}
var ExceptionsComponent = class _ExceptionsComponent {
  defaultSteps = () => [
    { id: 1, code: "try {", label: "enter try block", state: "" },
    { id: 2, code: "  int result = 10 / divisor;", label: "risky operation", state: "" },
    { id: 3, code: "  System.out.println(result);", label: "print result", state: "" },
    { id: 4, code: "} catch (ArithmeticException e) {", label: "catch block", state: "" },
    { id: 5, code: '  System.out.println("Error!");', label: "handle error", state: "" },
    { id: 6, code: "} finally {", label: "finally block", state: "" },
    { id: 7, code: "  cleanup();", label: "always runs", state: "" }
  ];
  flowSteps = signal(this.defaultSteps(), ...ngDevMode ? [{ debugName: "flowSteps" }] : []);
  status = signal("Choose a scenario to see how try-catch-finally flows.", ...ngDevMode ? [{ debugName: "status" }] : []);
  isAnimating = signal(false, ...ngDevMode ? [{ debugName: "isAnimating" }] : []);
  codeHierarchy = `java.lang.Object
 \u2514\u2500 Throwable
     \u251C\u2500 Error (don't catch these!)
     \u2502   \u251C\u2500 OutOfMemoryError
     \u2502   \u2514\u2500 StackOverflowError
     \u2514\u2500 Exception
         \u251C\u2500 IOException (checked)
         \u251C\u2500 SQLException (checked)
         \u2514\u2500 RuntimeException (unchecked)
             \u251C\u2500 NullPointerException
             \u251C\u2500 ArithmeticException
             \u2514\u2500 IndexOutOfBoundsException`;
  codeTryCatch = `try {
    int result = 10 / 0; // throws!
    System.out.println(result);
} catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero");
    System.out.println(e.getMessage());
} finally {
    System.out.println("Cleanup done");
    // ALWAYS executes
}`;
  codeMultiCatch = `try {
    riskyOperation();
} catch (IOException | SQLException e) {
    // Handle multiple types
    log.error("I/O or DB error", e);
} catch (Exception e) {
    // Wrap and rethrow
    throw new ServiceException("Failed", e);
}`;
  codeCustom = `public class InsufficientFundsException
    extends RuntimeException {

    private final double balance;
    private final double amount;

    public InsufficientFundsException(
        double balance, double amount) {
        super("Balance: " + balance +
              ", Requested: " + amount);
        this.balance = balance;
        this.amount = amount;
    }
}`;
  codeTryWith = `// Auto-closes resources!
try (var br = new BufferedReader(
        new FileReader("data.txt"));
     var bw = new BufferedWriter(
        new FileWriter("out.txt"))) {

    String line;
    while ((line = br.readLine()) != null) {
        bw.write(line);
    }
} // br and bw are auto-closed here`;
  sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }
  updateStep(id, state) {
    this.flowSteps.update((steps) => steps.map((s) => s.id === id ? __spreadProps(__spreadValues({}, s), { state }) : s));
  }
  async runHappyPath() {
    if (this.isAnimating())
      return;
    this.isAnimating.set(true);
    this.flowSteps.set(this.defaultSteps());
    this.updateStep(1, "active");
    this.status.set("Entering try block (divisor = 2)...");
    await this.sleep(800);
    this.updateStep(1, "success");
    this.updateStep(2, "active");
    this.status.set("10 / 2 = 5 \u2014 no exception!");
    await this.sleep(800);
    this.updateStep(2, "success");
    this.updateStep(3, "active");
    this.status.set("Printing result: 5");
    await this.sleep(800);
    this.updateStep(3, "success");
    this.updateStep(4, "skipped");
    this.updateStep(5, "skipped");
    this.status.set("No exception \u2192 catch block is SKIPPED.");
    await this.sleep(800);
    this.updateStep(6, "always");
    this.updateStep(7, "always");
    this.status.set("Finally block ALWAYS runs \u2014 cleanup complete! \u2705");
    this.isAnimating.set(false);
  }
  async runExceptionPath() {
    if (this.isAnimating())
      return;
    this.isAnimating.set(true);
    this.flowSteps.set(this.defaultSteps());
    this.updateStep(1, "active");
    this.status.set("Entering try block (divisor = 0)...");
    await this.sleep(800);
    this.updateStep(1, "success");
    this.updateStep(2, "error");
    this.status.set("\u{1F4A5} ArithmeticException: / by zero! Jumping to catch...");
    await this.sleep(1e3);
    this.updateStep(3, "skipped");
    this.status.set("Line 3 is SKIPPED \u2014 execution jumps to catch block.");
    await this.sleep(800);
    this.updateStep(4, "active");
    this.updateStep(5, "active");
    this.status.set('Catch block handles the error \u2014 prints "Error!"');
    await this.sleep(800);
    this.updateStep(4, "success");
    this.updateStep(5, "success");
    this.updateStep(6, "always");
    this.updateStep(7, "always");
    this.status.set("Finally block ALWAYS runs \u2014 even after an exception! \u2705");
    this.isAnimating.set(false);
  }
  resetDemo() {
    this.flowSteps.set(this.defaultSteps());
    this.status.set("Choose a scenario to see how try-catch-finally flows.");
    this.isAnimating.set(false);
  }
  static \u0275fac = function ExceptionsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExceptionsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExceptionsComponent, selectors: [["app-topic-exceptions"]], decls: 152, vars: 20, consts: [["title", "Exception Handling", "subtitle", "Gracefully handle errors. Master try-catch-finally, custom exceptions, and the checked vs unchecked hierarchy.", "badge", "CORE JAVA", "gradient", "linear-gradient(135deg, #be123c, #fb7185)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-rose", 3, "size"], [1, "prose"], [1, "sub-heading"], [3, "code"], [1, "viz-card"], [1, "viz-title"], ["name", "play", "css", "icon-rose", 3, "size"], [1, "flow-demo"], [1, "flow-steps"], [1, "flow-step", 3, "class"], [1, "viz-status"], [1, "viz-controls"], [1, "btn", "btn-emerald", 3, "click", "disabled"], ["name", "check-circle", 3, "size"], [1, "btn", "btn-rose", 3, "click", "disabled"], ["name", "alert-triangle", 3, "size"], [1, "btn", "btn-gray", 3, "click", "disabled"], ["name", "refresh-cw", 3, "size"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"], ["name", "arrow-right", "css", "icon-indigo", 3, "size"], [1, "op-desc"], ["name", "briefcase", "css", "icon-rose", 3, "size"], [1, "use-cases"], [1, "use-case", "rose"], [1, "use-num", "rose-bg"], [1, "use-title"], [1, "use-desc"], [1, "use-case", "blue"], [1, "use-num", "blue-bg"], [1, "use-case", "purple"], [1, "use-num", "purple-bg"], [1, "flow-step"], [1, "step-num"], [1, "step-code"], [1, "step-label"]], template: function ExceptionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " What is Exception Handling? ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7, " An ");
      \u0275\u0275elementStart(8, "strong");
      \u0275\u0275text(9, "exception");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " is an event that disrupts the normal flow of a program. Java's exception handling mechanism uses ");
      \u0275\u0275elementStart(11, "code");
      \u0275\u0275text(12, "try");
      \u0275\u0275elementEnd();
      \u0275\u0275text(13, ", ");
      \u0275\u0275elementStart(14, "code");
      \u0275\u0275text(15, "catch");
      \u0275\u0275elementEnd();
      \u0275\u0275text(16, ", ");
      \u0275\u0275elementStart(17, "code");
      \u0275\u0275text(18, "finally");
      \u0275\u0275elementEnd();
      \u0275\u0275text(19, ", ");
      \u0275\u0275elementStart(20, "code");
      \u0275\u0275text(21, "throw");
      \u0275\u0275elementEnd();
      \u0275\u0275text(22, ", and ");
      \u0275\u0275elementStart(23, "code");
      \u0275\u0275text(24, "throws");
      \u0275\u0275elementEnd();
      \u0275\u0275text(25, " to handle errors gracefully. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "ul")(27, "li")(28, "strong");
      \u0275\u0275text(29, "Checked Exceptions:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(30, " Must be handled at compile time (e.g., ");
      \u0275\u0275elementStart(31, "code");
      \u0275\u0275text(32, "IOException");
      \u0275\u0275elementEnd();
      \u0275\u0275text(33, ", ");
      \u0275\u0275elementStart(34, "code");
      \u0275\u0275text(35, "SQLException");
      \u0275\u0275elementEnd();
      \u0275\u0275text(36, ").");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "li")(38, "strong");
      \u0275\u0275text(39, "Unchecked Exceptions:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(40, " Runtime errors (e.g., ");
      \u0275\u0275elementStart(41, "code");
      \u0275\u0275text(42, "NullPointerException");
      \u0275\u0275elementEnd();
      \u0275\u0275text(43, ", ");
      \u0275\u0275elementStart(44, "code");
      \u0275\u0275text(45, "ArrayIndexOutOfBoundsException");
      \u0275\u0275elementEnd();
      \u0275\u0275text(46, ").");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "li")(48, "strong");
      \u0275\u0275text(49, "Errors:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(50, " Serious problems not meant to be caught (e.g., ");
      \u0275\u0275elementStart(51, "code");
      \u0275\u0275text(52, "OutOfMemoryError");
      \u0275\u0275elementEnd();
      \u0275\u0275text(53, ").");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "h4", 5);
      \u0275\u0275text(55, "Exception Hierarchy");
      \u0275\u0275elementEnd();
      \u0275\u0275element(56, "app-code-block", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "section", 1)(58, "div", 7)(59, "h3", 8);
      \u0275\u0275element(60, "app-icon", 9);
      \u0275\u0275text(61, " Try-Catch Flow Visualizer ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "div", 10)(63, "div", 11);
      \u0275\u0275repeaterCreate(64, ExceptionsComponent_For_65_Template, 7, 5, "div", 12, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "div", 13);
      \u0275\u0275text(67);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "div", 14)(69, "button", 15);
      \u0275\u0275listener("click", function ExceptionsComponent_Template_button_click_69_listener() {
        return ctx.runHappyPath();
      });
      \u0275\u0275element(70, "app-icon", 16);
      \u0275\u0275text(71, " Run: No Exception ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "button", 17);
      \u0275\u0275listener("click", function ExceptionsComponent_Template_button_click_72_listener() {
        return ctx.runExceptionPath();
      });
      \u0275\u0275element(73, "app-icon", 18);
      \u0275\u0275text(74, " Run: Throw Exception ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "button", 19);
      \u0275\u0275listener("click", function ExceptionsComponent_Template_button_click_75_listener() {
        return ctx.resetDemo();
      });
      \u0275\u0275element(76, "app-icon", 20);
      \u0275\u0275text(77, " Reset ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(78, "section", 1)(79, "h2", 2);
      \u0275\u0275element(80, "app-icon", 21);
      \u0275\u0275text(81, " Exception Patterns ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "div", 22)(83, "div", 23)(84, "h3", 24);
      \u0275\u0275element(85, "app-icon", 25);
      \u0275\u0275text(86, " Try-Catch-Finally");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "p", 26);
      \u0275\u0275text(88, "The fundamental error handling block. Finally always executes.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(89, "app-code-block", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "div", 23)(91, "h3", 24);
      \u0275\u0275element(92, "app-icon", 25);
      \u0275\u0275text(93, " Multi-Catch & Rethrow");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "p", 26);
      \u0275\u0275text(95, "Catch multiple exceptions or wrap and rethrow.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(96, "app-code-block", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "div", 23)(98, "h3", 24);
      \u0275\u0275element(99, "app-icon", 25);
      \u0275\u0275text(100, " Custom Exceptions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "p", 26);
      \u0275\u0275text(102, "Create domain-specific exceptions for clear error communication.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(103, "app-code-block", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "div", 23)(105, "h3", 24);
      \u0275\u0275element(106, "app-icon", 25);
      \u0275\u0275text(107, " Try-with-Resources");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "p", 26);
      \u0275\u0275text(109, "Automatic resource cleanup for streams, connections, etc.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(110, "app-code-block", 6);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(111, "section", 1)(112, "h2", 2);
      \u0275\u0275element(113, "app-icon", 27);
      \u0275\u0275text(114, " Real-Time Use Cases ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "div", 28)(116, "div", 29)(117, "div", 30);
      \u0275\u0275text(118, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "div")(120, "h4", 31);
      \u0275\u0275text(121, "REST API Error Responses");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "p", 32);
      \u0275\u0275text(123, "Spring's ");
      \u0275\u0275elementStart(124, "code");
      \u0275\u0275text(125, "@ExceptionHandler");
      \u0275\u0275elementEnd();
      \u0275\u0275text(126, " catches exceptions globally in ");
      \u0275\u0275elementStart(127, "code");
      \u0275\u0275text(128, "@ControllerAdvice");
      \u0275\u0275elementEnd();
      \u0275\u0275text(129, " and maps them to proper HTTP status codes (404, 500, etc.).");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(130, "div", 33)(131, "div", 34);
      \u0275\u0275text(132, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "div")(134, "h4", 31);
      \u0275\u0275text(135, "Database Transaction Rollback");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "p", 32);
      \u0275\u0275text(137, "When an exception occurs mid-transaction, the catch block calls ");
      \u0275\u0275elementStart(138, "code");
      \u0275\u0275text(139, "connection.rollback()");
      \u0275\u0275elementEnd();
      \u0275\u0275text(140, " to prevent partial data corruption.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(141, "div", 35)(142, "div", 36);
      \u0275\u0275text(143, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "div")(145, "h4", 31);
      \u0275\u0275text(146, "Circuit Breaker Pattern");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "p", 32);
      \u0275\u0275text(148, "Microservices catch repeated ");
      \u0275\u0275elementStart(149, "code");
      \u0275\u0275text(150, "TimeoutException");
      \u0275\u0275elementEnd();
      \u0275\u0275text(151, "s and trip a circuit breaker to prevent cascading failures across services.");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(53);
      \u0275\u0275property("code", ctx.codeHierarchy);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 22);
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.flowSteps());
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
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isAnimating());
      \u0275\u0275advance();
      \u0275\u0275property("size", 16);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(5);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeTryCatch);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeMultiCatch);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeCustom);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeTryWith);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ['\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-rose[_ngcontent-%COMP%] {\n  color: #e11d48;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 700;\n}\n.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #e11d48;\n}\n.sub-heading[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 24px 0 8px;\n}\n.viz-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);\n  padding: 28px 24px;\n}\n.viz-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.flow-demo[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.flow-steps[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.flow-step[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  border-radius: 10px;\n  border: 2px solid #e2e8f0;\n  background: #fff;\n  transition: all 0.4s;\n}\n.flow-step.active[_ngcontent-%COMP%] {\n  border-color: #fbbf24;\n  background: #fffbeb;\n  transform: scale(1.02);\n}\n.flow-step.success[_ngcontent-%COMP%] {\n  border-color: #22c55e;\n  background: #f0fdf4;\n}\n.flow-step.error[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n  background: #fef2f2;\n}\n.flow-step.skipped[_ngcontent-%COMP%] {\n  opacity: 0.35;\n}\n.flow-step.always[_ngcontent-%COMP%] {\n  border-color: #3b82f6;\n  background: #eff6ff;\n}\n.step-num[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  min-width: 24px;\n  border-radius: 50%;\n  background: #e2e8f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.6rem;\n  font-weight: 800;\n  color: #475569;\n}\n.step-code[_ngcontent-%COMP%] {\n  flex: 1;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.7rem;\n  color: #0f172a;\n  font-weight: 600;\n}\n.step-label[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  color: #94a3b8;\n  font-weight: 500;\n}\n.viz-status[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n  margin-bottom: 20px;\n}\n.viz-controls[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-emerald[_ngcontent-%COMP%] {\n  background: #059669;\n  color: #fff;\n}\n.btn-emerald[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #047857;\n}\n.btn-rose[_ngcontent-%COMP%] {\n  background: #e11d48;\n  color: #fff;\n}\n.btn-rose[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #be123c;\n}\n.btn-gray[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #334155;\n}\n.btn-gray[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #cbd5e1;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.op-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.op-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n.use-cases[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.use-case[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 14px;\n  border: 1px solid;\n}\n.use-case.rose[_ngcontent-%COMP%] {\n  background: #fff1f2;\n  border-color: #fecdd3;\n}\n.use-case.blue[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.use-case.purple[_ngcontent-%COMP%] {\n  background: #faf5ff;\n  border-color: #d8b4fe;\n}\n.use-num[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.rose-bg[_ngcontent-%COMP%] {\n  background: #e11d48;\n}\n.blue-bg[_ngcontent-%COMP%] {\n  background: #3b82f6;\n}\n.purple-bg[_ngcontent-%COMP%] {\n  background: #8b5cf6;\n}\n.use-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.use-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  line-height: 1.55;\n  margin: 0;\n  color: #334155;\n}\n.use-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.06);\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.72rem;\n}\n/*# sourceMappingURL=exceptions.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExceptionsComponent, [{
    type: Component,
    args: [{ selector: "app-topic-exceptions", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout
      title="Exception Handling"
      subtitle="Gracefully handle errors. Master try-catch-finally, custom exceptions, and the checked vs unchecked hierarchy."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #be123c, #fb7185)">

      <section class="section">
        <h2 class="section-heading">
          <app-icon name="book-open" [size]="28" css="icon-rose" /> What is Exception Handling?
        </h2>
        <div class="prose">
          <p>
            An <strong>exception</strong> is an event that disrupts the normal flow of a program. Java's exception handling mechanism uses <code>try</code>, <code>catch</code>, <code>finally</code>, <code>throw</code>, and <code>throws</code> to handle errors gracefully.
          </p>
          <ul>
            <li><strong>Checked Exceptions:</strong> Must be handled at compile time (e.g., <code>IOException</code>, <code>SQLException</code>).</li>
            <li><strong>Unchecked Exceptions:</strong> Runtime errors (e.g., <code>NullPointerException</code>, <code>ArrayIndexOutOfBoundsException</code>).</li>
            <li><strong>Errors:</strong> Serious problems not meant to be caught (e.g., <code>OutOfMemoryError</code>).</li>
          </ul>
          <h4 class="sub-heading">Exception Hierarchy</h4>
          <app-code-block [code]="codeHierarchy" />
        </div>
      </section>

      <!-- Interactive Visualizer -->
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title">
            <app-icon name="play" [size]="22" css="icon-rose" /> Try-Catch Flow Visualizer
          </h3>

          <div class="flow-demo">
            <div class="flow-steps">
              @for (step of flowSteps(); track step.id) {
                <div class="flow-step" [class]="step.state">
                  <span class="step-num">{{ step.id }}</span>
                  <span class="step-code">{{ step.code }}</span>
                  <span class="step-label">{{ step.label }}</span>
                </div>
              }
            </div>
          </div>

          <div class="viz-status">{{ status() }}</div>

          <div class="viz-controls">
            <button (click)="runHappyPath()" [disabled]="isAnimating()" class="btn btn-emerald">
              <app-icon name="check-circle" [size]="16" /> Run: No Exception
            </button>
            <button (click)="runExceptionPath()" [disabled]="isAnimating()" class="btn btn-rose">
              <app-icon name="alert-triangle" [size]="16" /> Run: Throw Exception
            </button>
            <button (click)="resetDemo()" [disabled]="isAnimating()" class="btn btn-gray">
              <app-icon name="refresh-cw" [size]="16" /> Reset
            </button>
          </div>
        </div>
      </section>

      <!-- Key Concepts -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="code" [size]="28" css="icon-indigo" /> Exception Patterns
        </h2>
        <div class="op-grid">
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Try-Catch-Finally</h3>
            <p class="op-desc">The fundamental error handling block. Finally always executes.</p>
            <app-code-block [code]="codeTryCatch" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Multi-Catch & Rethrow</h3>
            <p class="op-desc">Catch multiple exceptions or wrap and rethrow.</p>
            <app-code-block [code]="codeMultiCatch" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Custom Exceptions</h3>
            <p class="op-desc">Create domain-specific exceptions for clear error communication.</p>
            <app-code-block [code]="codeCustom" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Try-with-Resources</h3>
            <p class="op-desc">Automatic resource cleanup for streams, connections, etc.</p>
            <app-code-block [code]="codeTryWith" />
          </div>
        </div>
      </section>

      <!-- Use Cases -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="briefcase" [size]="28" css="icon-rose" /> Real-Time Use Cases
        </h2>
        <div class="use-cases">
          <div class="use-case rose">
            <div class="use-num rose-bg">1</div>
            <div>
              <h4 class="use-title">REST API Error Responses</h4>
              <p class="use-desc">Spring's <code>&#64;ExceptionHandler</code> catches exceptions globally in <code>&#64;ControllerAdvice</code> and maps them to proper HTTP status codes (404, 500, etc.).</p>
            </div>
          </div>
          <div class="use-case blue">
            <div class="use-num blue-bg">2</div>
            <div>
              <h4 class="use-title">Database Transaction Rollback</h4>
              <p class="use-desc">When an exception occurs mid-transaction, the catch block calls <code>connection.rollback()</code> to prevent partial data corruption.</p>
            </div>
          </div>
          <div class="use-case purple">
            <div class="use-num purple-bg">3</div>
            <div>
              <h4 class="use-title">Circuit Breaker Pattern</h4>
              <p class="use-desc">Microservices catch repeated <code>TimeoutException</code>s and trip a circuit breaker to prevent cascading failures across services.</p>
            </div>
          </div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ['/* angular:styles/component:css;2e25c966447d86f7d598b1e66d1de08d01a0332956487b5a82881a6ec648b078;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/features/tutorials/topics/exceptions.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-rose {\n  color: #e11d48;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.prose ul {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose li {\n  margin-bottom: 8px;\n}\n.prose strong {\n  color: #0f172a;\n  font-weight: 700;\n}\n.prose code {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #e11d48;\n}\n.sub-heading {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 24px 0 8px;\n}\n.viz-card {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);\n  padding: 28px 24px;\n}\n.viz-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.flow-demo {\n  margin-bottom: 20px;\n}\n.flow-steps {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.flow-step {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  border-radius: 10px;\n  border: 2px solid #e2e8f0;\n  background: #fff;\n  transition: all 0.4s;\n}\n.flow-step.active {\n  border-color: #fbbf24;\n  background: #fffbeb;\n  transform: scale(1.02);\n}\n.flow-step.success {\n  border-color: #22c55e;\n  background: #f0fdf4;\n}\n.flow-step.error {\n  border-color: #ef4444;\n  background: #fef2f2;\n}\n.flow-step.skipped {\n  opacity: 0.35;\n}\n.flow-step.always {\n  border-color: #3b82f6;\n  background: #eff6ff;\n}\n.step-num {\n  width: 24px;\n  height: 24px;\n  min-width: 24px;\n  border-radius: 50%;\n  background: #e2e8f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.6rem;\n  font-weight: 800;\n  color: #475569;\n}\n.step-code {\n  flex: 1;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.7rem;\n  color: #0f172a;\n  font-weight: 600;\n}\n.step-label {\n  font-size: 0.6rem;\n  color: #94a3b8;\n  font-weight: 500;\n}\n.viz-status {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n  margin-bottom: 20px;\n}\n.viz-controls {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-emerald {\n  background: #059669;\n  color: #fff;\n}\n.btn-emerald:hover:not(:disabled) {\n  background: #047857;\n}\n.btn-rose {\n  background: #e11d48;\n  color: #fff;\n}\n.btn-rose:hover:not(:disabled) {\n  background: #be123c;\n}\n.btn-gray {\n  background: #e2e8f0;\n  color: #334155;\n}\n.btn-gray:hover:not(:disabled) {\n  background: #cbd5e1;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.op-card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.op-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc {\n  font-size: 0.78rem;\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n.use-cases {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.use-case {\n  display: flex;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 14px;\n  border: 1px solid;\n}\n.use-case.rose {\n  background: #fff1f2;\n  border-color: #fecdd3;\n}\n.use-case.blue {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.use-case.purple {\n  background: #faf5ff;\n  border-color: #d8b4fe;\n}\n.use-num {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.rose-bg {\n  background: #e11d48;\n}\n.blue-bg {\n  background: #3b82f6;\n}\n.purple-bg {\n  background: #8b5cf6;\n}\n.use-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.use-desc {\n  font-size: 0.78rem;\n  line-height: 1.55;\n  margin: 0;\n  color: #334155;\n}\n.use-desc code {\n  background: rgba(0, 0, 0, 0.06);\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.72rem;\n}\n/*# sourceMappingURL=exceptions.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExceptionsComponent, { className: "ExceptionsComponent", filePath: "src/app/features/tutorials/topics/exceptions.component.ts", lineNumber: 189 });
})();
export {
  ExceptionsComponent
};
//# sourceMappingURL=chunk-UMAAPALK.js.map
