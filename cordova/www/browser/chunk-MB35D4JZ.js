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
} from "./chunk-VBTVL2BZ.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/spring-rest.component.ts
var _forTrack0 = ($index, $item) => $item.method;
function SpringRestComponent_For_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275listener("click", function SpringRestComponent_For_31_Template_div_click_0_listener() {
      const ep_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectEndpoint(ep_r2.method));
    });
    \u0275\u0275elementStart(1, "span", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 30);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 31);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ep_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.activeEndpoint() === ep_r2.method);
    \u0275\u0275advance();
    \u0275\u0275classMap(ep_r2.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ep_r2.method);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ep_r2.path);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ep_r2.desc);
  }
}
var SpringRestComponent = class _SpringRestComponent {
  activeEndpoint = signal("", ...ngDevMode ? [{ debugName: "activeEndpoint" }] : []);
  status = signal("Click an endpoint to see the HTTP method, status code, and response.", ...ngDevMode ? [{ debugName: "status" }] : []);
  endpoints = signal([
    { method: "GET", path: "/api/users", desc: "List all users \u2192 200", color: "get" },
    { method: "POST", path: "/api/users", desc: "Create user \u2192 201", color: "post" },
    { method: "PUT", path: "/api/users/123", desc: "Update user \u2192 200", color: "put" },
    { method: "DELETE", path: "/api/users/123", desc: "Delete user \u2192 204", color: "delete" }
  ], ...ngDevMode ? [{ debugName: "endpoints" }] : []);
  codeIntro = `@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<UserDTO> list() {
        return userService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> get(@PathVariable Long id) {
        return userService.findById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }
}`;
  codeCrud = `@PostMapping
public ResponseEntity<User> create(
        @RequestBody @Valid UserDTO dto) {
    User user = userService.create(dto);
    URI location = URI.create("/api/users/" + user.getId());
    return ResponseEntity.created(location).body(user);
    // 201 Created + Location header
}

@PutMapping("/{id}")
public ResponseEntity<User> update(
        @PathVariable Long id,
        @RequestBody @Valid UserDTO dto) {
    return ResponseEntity.ok(userService.update(id, dto));
}

@DeleteMapping("/{id}")
public ResponseEntity<Void> delete(@PathVariable Long id) {
    userService.delete(id);
    return ResponseEntity.noContent().build(); // 204
}`;
  codeValidation = `public record CreateUserDTO(
    @NotBlank(message = "Name required")
    String name,

    @Email(message = "Invalid email")
    @NotBlank
    String email,

    @Min(18) @Max(150)
    int age
) {}

// Spring auto-validates with @Valid
@PostMapping
public ResponseEntity<?> create(
        @RequestBody @Valid CreateUserDTO dto) {
    // Only reached if validation passes!
    return ResponseEntity.ok(userService.create(dto));
}`;
  codePagination = `@GetMapping
public Page<UserDTO> list(
        @RequestParam(defaultValue = "0") int page,
        @RequestParam(defaultValue = "20") int size,
        @RequestParam(defaultValue = "name") String sort) {

    Pageable pageable = PageRequest.of(
        page, size, Sort.by(sort));
    return userService.findAll(pageable);
}

// Response includes:
// content, totalPages, totalElements,
// number, size, first, last`;
  codeErrors = `@RestControllerAdvice
public class ApiExceptionHandler {

    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleNotFound(
            UserNotFoundException ex) {
        return ResponseEntity.status(404)
            .body(new ErrorResponse(
                "NOT_FOUND", ex.getMessage()));
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> handleValidation(
            MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getFieldErrors().forEach(e ->
            errors.put(e.getField(), e.getDefaultMessage()));
        return ResponseEntity.badRequest().body(errors);
    }
}`;
  selectEndpoint(method) {
    this.activeEndpoint.set(method);
    const details = {
      "GET": "GET /api/users \u2192 Returns List<UserDTO> with 200 OK. Idempotent, cacheable.",
      "POST": "POST /api/users \u2192 Creates resource. Returns 201 Created + Location header.",
      "PUT": "PUT /api/users/123 \u2192 Full update. Returns 200 OK. Idempotent.",
      "DELETE": "DELETE /api/users/123 \u2192 Removes resource. Returns 204 No Content."
    };
    this.status.set(details[method] ?? "");
  }
  static \u0275fac = function SpringRestComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SpringRestComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SpringRestComponent, selectors: [["app-topic-spring-rest"]], decls: 114, vars: 14, consts: [["title", "RESTful APIs", "subtitle", "Build production-grade REST APIs. Master RestController, ResponseEntity, validation, pagination, and HATEOAS.", "badge", "SPRING FRAMEWORK", "gradient", "linear-gradient(135deg, #0e7490, #67e8f9)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-cyan", 3, "size"], [1, "prose"], [3, "code"], [1, "viz-card"], [1, "viz-title"], ["name", "play", "css", "icon-cyan", 3, "size"], [1, "endpoint-grid"], [1, "endpoint", 3, "active"], [1, "viz-status"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"], ["name", "arrow-right", "css", "icon-indigo", 3, "size"], [1, "op-desc"], ["name", "briefcase", "css", "icon-cyan", 3, "size"], [1, "use-cases"], [1, "use-case", "cyan"], [1, "use-num", "cyan-bg"], [1, "use-title"], [1, "use-desc"], [1, "use-case", "blue"], [1, "use-num", "blue-bg"], [1, "use-case", "purple"], [1, "use-num", "purple-bg"], [1, "endpoint", 3, "click"], [1, "ep-method"], [1, "ep-path"], [1, "ep-desc"]], template: function SpringRestComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " REST with Spring");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p")(7, "strong");
      \u0275\u0275text(8, "@RestController");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, " combines @Controller and @ResponseBody \u2014 every method returns data (JSON by default) instead of a view name.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "ul")(11, "li")(12, "strong");
      \u0275\u0275text(13, "ResponseEntity:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(14, " Full control over status codes, headers, and body.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "li")(16, "strong");
      \u0275\u0275text(17, "@Valid:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(18, " Automatic request validation with Bean Validation.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "li")(20, "strong");
      \u0275\u0275text(21, "Content Negotiation:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(22, " Return JSON, XML, or custom media types.");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(23, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "section", 1)(25, "div", 6)(26, "h3", 7);
      \u0275\u0275element(27, "app-icon", 8);
      \u0275\u0275text(28, " REST Endpoint Simulator");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 9);
      \u0275\u0275repeaterCreate(30, SpringRestComponent_For_31_Template, 7, 7, "div", 10, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 11);
      \u0275\u0275text(33);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "section", 1)(35, "h2", 2);
      \u0275\u0275element(36, "app-icon", 12);
      \u0275\u0275text(37, " REST Patterns");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 13)(39, "div", 14)(40, "h3", 15);
      \u0275\u0275element(41, "app-icon", 16);
      \u0275\u0275text(42, " CRUD Controller");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "p", 17);
      \u0275\u0275text(44, "Complete REST CRUD with proper HTTP methods and status codes.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(45, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 14)(47, "h3", 15);
      \u0275\u0275element(48, "app-icon", 16);
      \u0275\u0275text(49, " Validation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "p", 17);
      \u0275\u0275text(51, "Request validation with Bean Validation and error responses.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(52, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "div", 14)(54, "h3", 15);
      \u0275\u0275element(55, "app-icon", 16);
      \u0275\u0275text(56, " Pagination");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "p", 17);
      \u0275\u0275text(58, "Pageable results for large datasets.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(59, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "div", 14)(61, "h3", 15);
      \u0275\u0275element(62, "app-icon", 16);
      \u0275\u0275text(63, " Error Handling");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "p", 17);
      \u0275\u0275text(65, "Consistent error responses across all endpoints.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(66, "app-code-block", 5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(67, "section", 1)(68, "h2", 2);
      \u0275\u0275element(69, "app-icon", 18);
      \u0275\u0275text(70, " Real-Time Use Cases");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "div", 19)(72, "div", 20)(73, "div", 21);
      \u0275\u0275text(74, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "div")(76, "h4", 22);
      \u0275\u0275text(77, "Microservice APIs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "p", 23);
      \u0275\u0275text(79, "Each microservice exposes a RESTful API \u2014 ");
      \u0275\u0275elementStart(80, "code");
      \u0275\u0275text(81, "UserService");
      \u0275\u0275elementEnd();
      \u0275\u0275text(82, ", ");
      \u0275\u0275elementStart(83, "code");
      \u0275\u0275text(84, "OrderService");
      \u0275\u0275elementEnd();
      \u0275\u0275text(85, ", ");
      \u0275\u0275elementStart(86, "code");
      \u0275\u0275text(87, "PaymentService");
      \u0275\u0275elementEnd();
      \u0275\u0275text(88, " communicate via HTTP/JSON.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(89, "div", 24)(90, "div", 25);
      \u0275\u0275text(91, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "div")(93, "h4", 22);
      \u0275\u0275text(94, "Mobile App Backend");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "p", 23);
      \u0275\u0275text(96, "Android/iOS apps consume REST APIs. ");
      \u0275\u0275elementStart(97, "code");
      \u0275\u0275text(98, "ResponseEntity");
      \u0275\u0275elementEnd();
      \u0275\u0275text(99, " gives precise control over what mobile clients receive.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(100, "div", 26)(101, "div", 27);
      \u0275\u0275text(102, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "div")(104, "h4", 22);
      \u0275\u0275text(105, "Third-Party Integrations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "p", 23);
      \u0275\u0275text(107, "Stripe, Twilio, SendGrid \u2014 all expose REST APIs. Spring's ");
      \u0275\u0275elementStart(108, "code");
      \u0275\u0275text(109, "RestTemplate");
      \u0275\u0275elementEnd();
      \u0275\u0275text(110, " / ");
      \u0275\u0275elementStart(111, "code");
      \u0275\u0275text(112, "WebClient");
      \u0275\u0275elementEnd();
      \u0275\u0275text(113, " consume them elegantly.");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(20);
      \u0275\u0275property("code", ctx.codeIntro);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 22);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.endpoints());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.status());
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(5);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeCrud);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeValidation);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codePagination);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeErrors);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ['\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-cyan[_ngcontent-%COMP%] {\n  color: #0891b2;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 700;\n}\n.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #0891b2;\n}\n.viz-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);\n  padding: 28px 24px;\n}\n.viz-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.endpoint-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 20px;\n}\n.endpoint[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  border-radius: 10px;\n  border: 2px solid #e2e8f0;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.endpoint.active[_ngcontent-%COMP%] {\n  border-color: #0891b2;\n  background: #ecfeff;\n}\n.ep-method[_ngcontent-%COMP%] {\n  font-size: 0.55rem;\n  font-weight: 800;\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-family: "JetBrains Mono", monospace;\n}\n.ep-method.get[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.ep-method.post[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.ep-method.put[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.ep-method.delete[_ngcontent-%COMP%] {\n  background: #fecaca;\n  color: #991b1b;\n}\n.ep-path[_ngcontent-%COMP%] {\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.68rem;\n  color: #0f172a;\n  flex: 1;\n}\n.ep-desc[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  color: #64748b;\n}\n.viz-status[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.op-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n.use-cases[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.use-case[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 14px;\n  border: 1px solid;\n}\n.use-case.cyan[_ngcontent-%COMP%] {\n  background: #ecfeff;\n  border-color: #a5f3fc;\n}\n.use-case.blue[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.use-case.purple[_ngcontent-%COMP%] {\n  background: #faf5ff;\n  border-color: #d8b4fe;\n}\n.use-num[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.cyan-bg[_ngcontent-%COMP%] {\n  background: #0891b2;\n}\n.blue-bg[_ngcontent-%COMP%] {\n  background: #3b82f6;\n}\n.purple-bg[_ngcontent-%COMP%] {\n  background: #8b5cf6;\n}\n.use-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.use-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  line-height: 1.55;\n  margin: 0;\n  color: #334155;\n}\n.use-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.06);\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.72rem;\n}\n/*# sourceMappingURL=spring-rest.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpringRestComponent, [{
    type: Component,
    args: [{ selector: "app-topic-spring-rest", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout title="RESTful APIs" subtitle="Build production-grade REST APIs. Master RestController, ResponseEntity, validation, pagination, and HATEOAS." badge="SPRING FRAMEWORK" gradient="linear-gradient(135deg, #0e7490, #67e8f9)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-cyan" /> REST with Spring</h2>
        <div class="prose">
          <p><strong>&#64;RestController</strong> combines &#64;Controller and &#64;ResponseBody \u2014 every method returns data (JSON by default) instead of a view name.</p>
          <ul>
            <li><strong>ResponseEntity:</strong> Full control over status codes, headers, and body.</li>
            <li><strong>&#64;Valid:</strong> Automatic request validation with Bean Validation.</li>
            <li><strong>Content Negotiation:</strong> Return JSON, XML, or custom media types.</li>
          </ul>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title"><app-icon name="play" [size]="22" css="icon-cyan" /> REST Endpoint Simulator</h3>
          <div class="endpoint-grid">
            @for (ep of endpoints(); track ep.method) {
              <div class="endpoint" [class.active]="activeEndpoint() === ep.method" (click)="selectEndpoint(ep.method)">
                <span class="ep-method" [class]="ep.color">{{ ep.method }}</span>
                <span class="ep-path">{{ ep.path }}</span>
                <span class="ep-desc">{{ ep.desc }}</span>
              </div>
            }
          </div>
          <div class="viz-status">{{ status() }}</div>
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> REST Patterns</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> CRUD Controller</h3><p class="op-desc">Complete REST CRUD with proper HTTP methods and status codes.</p><app-code-block [code]="codeCrud" /></div>
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Validation</h3><p class="op-desc">Request validation with Bean Validation and error responses.</p><app-code-block [code]="codeValidation" /></div>
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Pagination</h3><p class="op-desc">Pageable results for large datasets.</p><app-code-block [code]="codePagination" /></div>
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Error Handling</h3><p class="op-desc">Consistent error responses across all endpoints.</p><app-code-block [code]="codeErrors" /></div>
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="briefcase" [size]="28" css="icon-cyan" /> Real-Time Use Cases</h2>
        <div class="use-cases">
          <div class="use-case cyan"><div class="use-num cyan-bg">1</div><div><h4 class="use-title">Microservice APIs</h4><p class="use-desc">Each microservice exposes a RESTful API \u2014 <code>UserService</code>, <code>OrderService</code>, <code>PaymentService</code> communicate via HTTP/JSON.</p></div></div>
          <div class="use-case blue"><div class="use-num blue-bg">2</div><div><h4 class="use-title">Mobile App Backend</h4><p class="use-desc">Android/iOS apps consume REST APIs. <code>ResponseEntity</code> gives precise control over what mobile clients receive.</p></div></div>
          <div class="use-case purple"><div class="use-num purple-bg">3</div><div><h4 class="use-title">Third-Party Integrations</h4><p class="use-desc">Stripe, Twilio, SendGrid \u2014 all expose REST APIs. Spring's <code>RestTemplate</code> / <code>WebClient</code> consume them elegantly.</p></div></div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ['/* angular:styles/component:css;e1df18b082cda49758a2822587a737d83927c8242a7dc1bbaa71ac46fccd4796;/Users/sathishkumarramalingam/projects/JavaIQ/.claude/worktrees/goofy-haibt/src/app/features/tutorials/topics/spring-rest.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-cyan {\n  color: #0891b2;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.prose ul {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose li {\n  margin-bottom: 8px;\n}\n.prose strong {\n  color: #0f172a;\n  font-weight: 700;\n}\n.prose code {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #0891b2;\n}\n.viz-card {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);\n  padding: 28px 24px;\n}\n.viz-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.endpoint-grid {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 20px;\n}\n.endpoint {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  border-radius: 10px;\n  border: 2px solid #e2e8f0;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.endpoint.active {\n  border-color: #0891b2;\n  background: #ecfeff;\n}\n.ep-method {\n  font-size: 0.55rem;\n  font-weight: 800;\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-family: "JetBrains Mono", monospace;\n}\n.ep-method.get {\n  background: #dcfce7;\n  color: #166534;\n}\n.ep-method.post {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.ep-method.put {\n  background: #fef3c7;\n  color: #92400e;\n}\n.ep-method.delete {\n  background: #fecaca;\n  color: #991b1b;\n}\n.ep-path {\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.68rem;\n  color: #0f172a;\n  flex: 1;\n}\n.ep-desc {\n  font-size: 0.6rem;\n  color: #64748b;\n}\n.viz-status {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.op-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc {\n  font-size: 0.78rem;\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n.use-cases {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.use-case {\n  display: flex;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 14px;\n  border: 1px solid;\n}\n.use-case.cyan {\n  background: #ecfeff;\n  border-color: #a5f3fc;\n}\n.use-case.blue {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.use-case.purple {\n  background: #faf5ff;\n  border-color: #d8b4fe;\n}\n.use-num {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.cyan-bg {\n  background: #0891b2;\n}\n.blue-bg {\n  background: #3b82f6;\n}\n.purple-bg {\n  background: #8b5cf6;\n}\n.use-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.use-desc {\n  font-size: 0.78rem;\n  line-height: 1.55;\n  margin: 0;\n  color: #334155;\n}\n.use-desc code {\n  background: rgba(0, 0, 0, 0.06);\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.72rem;\n}\n/*# sourceMappingURL=spring-rest.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpringRestComponent, { className: "SpringRestComponent", filePath: "src/app/features/tutorials/topics/spring-rest.component.ts", lineNumber: 74 });
})();
export {
  SpringRestComponent
};
//# sourceMappingURL=chunk-MB35D4JZ.js.map
