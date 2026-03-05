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
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
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

// src/app/features/tutorials/topics/spring-mvc.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function SpringMvcComponent_For_38_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1, "\u2193");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("active", step_r1.state === "done");
  }
}
function SpringMvcComponent_For_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "span", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 34);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(5, SpringMvcComponent_For_38_Conditional_5_Template, 2, 2, "div", 35);
  }
  if (rf & 2) {
    const step_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(step_r1.state);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r1.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r1.text);
    \u0275\u0275advance();
    \u0275\u0275conditional(step_r1.id < ctx_r1.steps().length ? 5 : -1);
  }
}
var SpringMvcComponent = class _SpringMvcComponent {
  steps = signal([
    { id: 1, text: "Client sends HTTP request", state: "" },
    { id: 2, text: "DispatcherServlet receives it", state: "" },
    { id: 3, text: "HandlerMapping finds controller", state: "" },
    { id: 4, text: "Controller processes & returns ModelAndView", state: "" },
    { id: 5, text: "ViewResolver resolves view template", state: "" },
    { id: 6, text: "Response sent to client", state: "" }
  ], ...ngDevMode ? [{ debugName: "steps" }] : []);
  status = signal("Spring MVC uses DispatcherServlet as the front controller.", ...ngDevMode ? [{ debugName: "status" }] : []);
  isAnimating = signal(false, ...ngDevMode ? [{ debugName: "isAnimating" }] : []);
  codeIntro = `@Controller
@RequestMapping("/users")
public class UserController {

    @GetMapping
    public String listUsers(Model model) {
        model.addAttribute("users", userService.findAll());
        return "users/list"; // view name
    }

    @GetMapping("/{id}")
    public String getUser(@PathVariable Long id, Model m) {
        m.addAttribute("user", userService.findById(id));
        return "users/detail";
    }
}`;
  codeMapping = `// Class-level + method-level mapping
@Controller
@RequestMapping("/api/products")
public class ProductController {

    @GetMapping             // GET /api/products
    @PostMapping            // POST /api/products
    @PutMapping("/{id}")    // PUT /api/products/123
    @DeleteMapping("/{id}") // DELETE /api/products/123
    @PatchMapping("/{id}")  // PATCH /api/products/123

    // Consume/Produce specific media types
    @PostMapping(
        consumes = "application/json",
        produces = "application/json")
    public ResponseEntity<Product> create(...) { }
}`;
  codeParams = `// Path variable
@GetMapping("/users/{id}")
public User getUser(@PathVariable Long id) { }

// Query parameter
@GetMapping("/search")
public List<User> search(
    @RequestParam String name,
    @RequestParam(defaultValue = "0") int page) { }

// Request body (JSON)
@PostMapping("/users")
public User create(@RequestBody @Valid UserDTO dto) { }

// Headers
@GetMapping("/data")
public Data get(
    @RequestHeader("Authorization") String token) { }`;
  codeError = `@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(UserNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ErrorResponse handleNotFound(
            UserNotFoundException ex) {
        return new ErrorResponse(
            404, ex.getMessage());
    }

    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ErrorResponse handleAll(Exception ex) {
        log.error("Unhandled error", ex);
        return new ErrorResponse(
            500, "Internal server error");
    }
}`;
  codeInterceptor = `public class AuthInterceptor
    implements HandlerInterceptor {

    public boolean preHandle(HttpServletRequest req,
            HttpServletResponse res, Object handler) {
        String token = req.getHeader("Authorization");
        if (!isValid(token)) {
            res.setStatus(401);
            return false; // stop processing
        }
        return true; // continue
    }

    public void postHandle(...) {
        // After controller, before view rendering
    }

    public void afterCompletion(...) {
        // After response sent (cleanup)
    }
}`;
  sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }
  async runLifecycle() {
    if (this.isAnimating())
      return;
    this.isAnimating.set(true);
    const labels = ["Client sends GET /users/123...", "DispatcherServlet dispatches to handler...", "HandlerMapping found UserController.getUser()...", "Controller processes request, builds Model...", 'ViewResolver resolves "users/detail" \u2192 Thymeleaf...', "HTML response sent! 200 OK \u2705"];
    for (let i = 0; i < 6; i++) {
      this.steps.update((s) => s.map((st, j) => j === i ? __spreadProps(__spreadValues({}, st), { state: "active" }) : j < i ? __spreadProps(__spreadValues({}, st), { state: "done" }) : st));
      this.status.set(labels[i]);
      await this.sleep(900);
    }
    this.steps.update((s) => s.map((st) => __spreadProps(__spreadValues({}, st), { state: "done" })));
    this.isAnimating.set(false);
  }
  resetDemo() {
    this.steps.set([{ id: 1, text: "Client sends HTTP request", state: "" }, { id: 2, text: "DispatcherServlet receives it", state: "" }, { id: 3, text: "HandlerMapping finds controller", state: "" }, { id: 4, text: "Controller processes & returns ModelAndView", state: "" }, { id: 5, text: "ViewResolver resolves view template", state: "" }, { id: 6, text: "Response sent to client", state: "" }]);
    this.status.set("Spring MVC uses DispatcherServlet as the front controller.");
    this.isAnimating.set(false);
  }
  static \u0275fac = function SpringMvcComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SpringMvcComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SpringMvcComponent, selectors: [["app-topic-spring-mvc"]], decls: 118, vars: 18, consts: [["title", "Spring MVC", "subtitle", "The web framework powering millions of applications. Master DispatcherServlet, controllers, request mapping, and the MVC lifecycle.", "badge", "SPRING FRAMEWORK", "gradient", "linear-gradient(135deg, #1e40af, #93c5fd)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-blue", 3, "size"], [1, "prose"], [3, "code"], [1, "viz-card"], [1, "viz-title"], ["name", "play", "css", "icon-blue", 3, "size"], [1, "lifecycle"], [1, "viz-status"], [1, "viz-controls"], [1, "btn", "btn-blue", 3, "click", "disabled"], ["name", "play", 3, "size"], [1, "btn", "btn-gray", 3, "click", "disabled"], ["name", "refresh-cw", 3, "size"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"], ["name", "arrow-right", "css", "icon-indigo", 3, "size"], [1, "op-desc"], ["name", "briefcase", "css", "icon-blue", 3, "size"], [1, "use-cases"], [1, "use-case", "blue"], [1, "use-num", "blue-bg"], [1, "use-title"], [1, "use-desc"], [1, "use-case", "teal"], [1, "use-num", "teal-bg"], [1, "use-case", "purple"], [1, "use-num", "purple-bg"], [1, "lc-step"], [1, "lc-num"], [1, "lc-text"], [1, "lc-arrow", 3, "active"], [1, "lc-arrow"]], template: function SpringMvcComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " How Spring MVC Works");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p")(7, "strong");
      \u0275\u0275text(8, "Spring MVC");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, " follows the Model-View-Controller pattern. The ");
      \u0275\u0275elementStart(10, "strong");
      \u0275\u0275text(11, "DispatcherServlet");
      \u0275\u0275elementEnd();
      \u0275\u0275text(12, " acts as a front controller, routing requests to handler methods.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "ul")(14, "li")(15, "strong");
      \u0275\u0275text(16, "DispatcherServlet:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(17, " Central request dispatcher \u2014 receives ALL requests.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "li")(19, "strong");
      \u0275\u0275text(20, "HandlerMapping:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(21, " Maps URLs to controller methods.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "li")(23, "strong");
      \u0275\u0275text(24, "Controller:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(25, " Processes requests and returns a model + view name.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "li")(27, "strong");
      \u0275\u0275text(28, "ViewResolver:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(29, " Resolves view name to actual template (Thymeleaf, JSP).");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(30, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "section", 1)(32, "div", 6)(33, "h3", 7);
      \u0275\u0275element(34, "app-icon", 8);
      \u0275\u0275text(35, " Request Lifecycle");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 9);
      \u0275\u0275repeaterCreate(37, SpringMvcComponent_For_38_Template, 6, 5, null, null, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 10);
      \u0275\u0275text(40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 11)(42, "button", 12);
      \u0275\u0275listener("click", function SpringMvcComponent_Template_button_click_42_listener() {
        return ctx.runLifecycle();
      });
      \u0275\u0275element(43, "app-icon", 13);
      \u0275\u0275text(44, " Run Request Flow");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "button", 14);
      \u0275\u0275listener("click", function SpringMvcComponent_Template_button_click_45_listener() {
        return ctx.resetDemo();
      });
      \u0275\u0275element(46, "app-icon", 15);
      \u0275\u0275text(47, " Reset");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(48, "section", 1)(49, "h2", 2);
      \u0275\u0275element(50, "app-icon", 16);
      \u0275\u0275text(51, " Controller Patterns");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "div", 17)(53, "div", 18)(54, "h3", 19);
      \u0275\u0275element(55, "app-icon", 20);
      \u0275\u0275text(56, " Request Mapping");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "p", 21);
      \u0275\u0275text(58, "Map HTTP methods and URLs to handler methods.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(59, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "div", 18)(61, "h3", 19);
      \u0275\u0275element(62, "app-icon", 20);
      \u0275\u0275text(63, " Parameters & Path Variables");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "p", 21);
      \u0275\u0275text(65, "Extract data from URLs, query params, and request body.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(66, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "div", 18)(68, "h3", 19);
      \u0275\u0275element(69, "app-icon", 20);
      \u0275\u0275text(70, " Exception Handling");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "p", 21);
      \u0275\u0275text(72, "Centralized error handling with @ControllerAdvice.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(73, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "div", 18)(75, "h3", 19);
      \u0275\u0275element(76, "app-icon", 20);
      \u0275\u0275text(77, " Interceptors");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "p", 21);
      \u0275\u0275text(79, "Pre/post processing for all requests.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(80, "app-code-block", 5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(81, "section", 1)(82, "h2", 2);
      \u0275\u0275element(83, "app-icon", 22);
      \u0275\u0275text(84, " Real-Time Use Cases");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "div", 23)(86, "div", 24)(87, "div", 25);
      \u0275\u0275text(88, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "div")(90, "h4", 26);
      \u0275\u0275text(91, "API Gateway Routing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "p", 27);
      \u0275\u0275text(93, "DispatcherServlet + HandlerMapping routes thousands of endpoints in large monoliths \u2014 each controller handles its own domain.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(94, "div", 28)(95, "div", 29);
      \u0275\u0275text(96, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "div")(98, "h4", 26);
      \u0275\u0275text(99, "Form Validation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "p", 27)(101, "code");
      \u0275\u0275text(102, "@Valid");
      \u0275\u0275elementEnd();
      \u0275\u0275text(103, " + ");
      \u0275\u0275elementStart(104, "code");
      \u0275\u0275text(105, "BindingResult");
      \u0275\u0275elementEnd();
      \u0275\u0275text(106, " auto-validates form inputs. Spring MVC returns errors directly to the view template.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(107, "div", 30)(108, "div", 31);
      \u0275\u0275text(109, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "div")(111, "h4", 26);
      \u0275\u0275text(112, "Content Negotiation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "p", 27);
      \u0275\u0275text(114, "Same controller returns JSON, XML, or HTML based on ");
      \u0275\u0275elementStart(115, "code");
      \u0275\u0275text(116, "Accept");
      \u0275\u0275elementEnd();
      \u0275\u0275text(117, " header. One endpoint, multiple representations.");
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
      \u0275\u0275property("code", ctx.codeMapping);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeParams);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeError);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeInterceptor);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ['\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-blue[_ngcontent-%COMP%] {\n  color: #2563eb;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 700;\n}\n.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #2563eb;\n}\n.viz-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);\n  padding: 28px 24px;\n}\n.viz-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.lifecycle[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2px;\n  margin-bottom: 20px;\n}\n.lc-step[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 16px;\n  border-radius: 10px;\n  border: 2px solid #e2e8f0;\n  width: 100%;\n  max-width: 360px;\n  transition: all 0.3s;\n}\n.lc-step.active[_ngcontent-%COMP%] {\n  border-color: #2563eb;\n  background: #eff6ff;\n}\n.lc-step.done[_ngcontent-%COMP%] {\n  border-color: #16a34a;\n  background: #f0fdf4;\n}\n.lc-num[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  min-width: 22px;\n  border-radius: 50%;\n  background: #e2e8f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.55rem;\n  font-weight: 800;\n}\n.lc-text[_ngcontent-%COMP%] {\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.65rem;\n  color: #0f172a;\n}\n.lc-arrow[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #cbd5e1;\n  transition: color 0.3s;\n}\n.lc-arrow.active[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.viz-status[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n  margin-bottom: 20px;\n}\n.viz-controls[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-blue[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #fff;\n}\n.btn-blue[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n.btn-gray[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #334155;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.op-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n.use-cases[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.use-case[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 14px;\n  border: 1px solid;\n}\n.use-case.blue[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.use-case.teal[_ngcontent-%COMP%] {\n  background: #f0fdfa;\n  border-color: #99f6e4;\n}\n.use-case.purple[_ngcontent-%COMP%] {\n  background: #faf5ff;\n  border-color: #d8b4fe;\n}\n.use-num[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.blue-bg[_ngcontent-%COMP%] {\n  background: #2563eb;\n}\n.teal-bg[_ngcontent-%COMP%] {\n  background: #14b8a6;\n}\n.purple-bg[_ngcontent-%COMP%] {\n  background: #8b5cf6;\n}\n.use-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.use-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  line-height: 1.55;\n  margin: 0;\n  color: #334155;\n}\n.use-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.06);\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.72rem;\n}\n/*# sourceMappingURL=spring-mvc.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpringMvcComponent, [{
    type: Component,
    args: [{ selector: "app-topic-spring-mvc", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout title="Spring MVC" subtitle="The web framework powering millions of applications. Master DispatcherServlet, controllers, request mapping, and the MVC lifecycle." badge="SPRING FRAMEWORK" gradient="linear-gradient(135deg, #1e40af, #93c5fd)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-blue" /> How Spring MVC Works</h2>
        <div class="prose">
          <p><strong>Spring MVC</strong> follows the Model-View-Controller pattern. The <strong>DispatcherServlet</strong> acts as a front controller, routing requests to handler methods.</p>
          <ul>
            <li><strong>DispatcherServlet:</strong> Central request dispatcher \u2014 receives ALL requests.</li>
            <li><strong>HandlerMapping:</strong> Maps URLs to controller methods.</li>
            <li><strong>Controller:</strong> Processes requests and returns a model + view name.</li>
            <li><strong>ViewResolver:</strong> Resolves view name to actual template (Thymeleaf, JSP).</li>
          </ul>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title"><app-icon name="play" [size]="22" css="icon-blue" /> Request Lifecycle</h3>
          <div class="lifecycle">
            @for (step of steps(); track step.id) {
              <div class="lc-step" [class]="step.state"><span class="lc-num">{{ step.id }}</span><span class="lc-text">{{ step.text }}</span></div>
              @if (step.id < steps().length) { <div class="lc-arrow" [class.active]="step.state === 'done'">\u2193</div> }
            }
          </div>
          <div class="viz-status">{{ status() }}</div>
          <div class="viz-controls">
            <button (click)="runLifecycle()" [disabled]="isAnimating()" class="btn btn-blue"><app-icon name="play" [size]="16" /> Run Request Flow</button>
            <button (click)="resetDemo()" [disabled]="isAnimating()" class="btn btn-gray"><app-icon name="refresh-cw" [size]="16" /> Reset</button>
          </div>
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Controller Patterns</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Request Mapping</h3><p class="op-desc">Map HTTP methods and URLs to handler methods.</p><app-code-block [code]="codeMapping" /></div>
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Parameters & Path Variables</h3><p class="op-desc">Extract data from URLs, query params, and request body.</p><app-code-block [code]="codeParams" /></div>
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Exception Handling</h3><p class="op-desc">Centralized error handling with &#64;ControllerAdvice.</p><app-code-block [code]="codeError" /></div>
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Interceptors</h3><p class="op-desc">Pre/post processing for all requests.</p><app-code-block [code]="codeInterceptor" /></div>
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="briefcase" [size]="28" css="icon-blue" /> Real-Time Use Cases</h2>
        <div class="use-cases">
          <div class="use-case blue"><div class="use-num blue-bg">1</div><div><h4 class="use-title">API Gateway Routing</h4><p class="use-desc">DispatcherServlet + HandlerMapping routes thousands of endpoints in large monoliths \u2014 each controller handles its own domain.</p></div></div>
          <div class="use-case teal"><div class="use-num teal-bg">2</div><div><h4 class="use-title">Form Validation</h4><p class="use-desc"><code>&#64;Valid</code> + <code>BindingResult</code> auto-validates form inputs. Spring MVC returns errors directly to the view template.</p></div></div>
          <div class="use-case purple"><div class="use-num purple-bg">3</div><div><h4 class="use-title">Content Negotiation</h4><p class="use-desc">Same controller returns JSON, XML, or HTML based on <code>Accept</code> header. One endpoint, multiple representations.</p></div></div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ['/* angular:styles/component:css;b32741442dbbfb1ce042a1412a802b4fbfc94725164ec51932f41e907a237c2c;/Users/sathishkumarramalingam/projects/JavaIQ/.claude/worktrees/goofy-haibt/src/app/features/tutorials/topics/spring-mvc.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-blue {\n  color: #2563eb;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.prose ul {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose li {\n  margin-bottom: 8px;\n}\n.prose strong {\n  color: #0f172a;\n  font-weight: 700;\n}\n.prose code {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #2563eb;\n}\n.viz-card {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);\n  padding: 28px 24px;\n}\n.viz-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.lifecycle {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2px;\n  margin-bottom: 20px;\n}\n.lc-step {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 16px;\n  border-radius: 10px;\n  border: 2px solid #e2e8f0;\n  width: 100%;\n  max-width: 360px;\n  transition: all 0.3s;\n}\n.lc-step.active {\n  border-color: #2563eb;\n  background: #eff6ff;\n}\n.lc-step.done {\n  border-color: #16a34a;\n  background: #f0fdf4;\n}\n.lc-num {\n  width: 22px;\n  height: 22px;\n  min-width: 22px;\n  border-radius: 50%;\n  background: #e2e8f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.55rem;\n  font-weight: 800;\n}\n.lc-text {\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.65rem;\n  color: #0f172a;\n}\n.lc-arrow {\n  font-size: 0.7rem;\n  color: #cbd5e1;\n  transition: color 0.3s;\n}\n.lc-arrow.active {\n  color: #16a34a;\n}\n.viz-status {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n  margin-bottom: 20px;\n}\n.viz-controls {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-blue {\n  background: #2563eb;\n  color: #fff;\n}\n.btn-blue:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n.btn-gray {\n  background: #e2e8f0;\n  color: #334155;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.op-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc {\n  font-size: 0.78rem;\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n.use-cases {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.use-case {\n  display: flex;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 14px;\n  border: 1px solid;\n}\n.use-case.blue {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.use-case.teal {\n  background: #f0fdfa;\n  border-color: #99f6e4;\n}\n.use-case.purple {\n  background: #faf5ff;\n  border-color: #d8b4fe;\n}\n.use-num {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.blue-bg {\n  background: #2563eb;\n}\n.teal-bg {\n  background: #14b8a6;\n}\n.purple-bg {\n  background: #8b5cf6;\n}\n.use-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.use-desc {\n  font-size: 0.78rem;\n  line-height: 1.55;\n  margin: 0;\n  color: #334155;\n}\n.use-desc code {\n  background: rgba(0, 0, 0, 0.06);\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.72rem;\n}\n/*# sourceMappingURL=spring-mvc.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpringMvcComponent, { className: "SpringMvcComponent", filePath: "src/app/features/tutorials/topics/spring-mvc.component.ts", lineNumber: 79 });
})();
export {
  SpringMvcComponent
};
//# sourceMappingURL=chunk-HBCG5AOT.js.map
