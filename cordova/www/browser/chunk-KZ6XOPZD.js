import{a as P,b as y}from"./chunk-AMVNOPTI.js";import{a as h}from"./chunk-SI5PESLS.js";import{$a as r,Ja as f,Z as g,Za as x,_ as u,_a as b,ab as n,bb as e,cb as a,ib as E,ja as l,jb as v,kb as m,sb as S,tb as C,ub as t,vb as c,ya as i}from"./chunk-WGYJYFZL.js";import"./chunk-NWJ5J3BN.js";var _=(p,d)=>d.method;function T(p,d){if(p&1){let o=E();n(0,"div",28),v("click",function(){let O=g(o).$implicit,R=m();return u(R.selectEndpoint(O.method))}),n(1,"span",29),t(2),e(),n(3,"span",30),t(4),e(),n(5,"span",31),t(6),e()()}if(p&2){let o=d.$implicit,s=m();S("active",s.activeEndpoint()===o.method),i(),C(o.color),i(),c(o.method),i(2),c(o.path),i(2),c(o.desc)}}var M=class p{activeEndpoint=l("");status=l("Click an endpoint to see the HTTP method, status code, and response.");endpoints=l([{method:"GET",path:"/api/users",desc:"List all users \u2192 200",color:"get"},{method:"POST",path:"/api/users",desc:"Create user \u2192 201",color:"post"},{method:"PUT",path:"/api/users/123",desc:"Update user \u2192 200",color:"put"},{method:"DELETE",path:"/api/users/123",desc:"Delete user \u2192 204",color:"delete"}]);codeIntro=`@RestController
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
}`;codeCrud=`@PostMapping
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
}`;codeValidation=`public record CreateUserDTO(
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
}`;codePagination=`@GetMapping
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
// number, size, first, last`;codeErrors=`@RestControllerAdvice
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
}`;selectEndpoint(d){this.activeEndpoint.set(d);let o={GET:"GET /api/users \u2192 Returns List<UserDTO> with 200 OK. Idempotent, cacheable.",POST:"POST /api/users \u2192 Creates resource. Returns 201 Created + Location header.",PUT:"PUT /api/users/123 \u2192 Full update. Returns 200 OK. Idempotent.",DELETE:"DELETE /api/users/123 \u2192 Removes resource. Returns 204 No Content."};this.status.set(o[d]??"")}static \u0275fac=function(o){return new(o||p)};static \u0275cmp=f({type:p,selectors:[["app-topic-spring-rest"]],decls:114,vars:14,consts:[["title","RESTful APIs","subtitle","Build production-grade REST APIs. Master RestController, ResponseEntity, validation, pagination, and HATEOAS.","badge","SPRING FRAMEWORK","gradient","linear-gradient(135deg, #0e7490, #67e8f9)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-cyan",3,"size"],[1,"prose"],[3,"code"],[1,"viz-card"],[1,"viz-title"],["name","play","css","icon-cyan",3,"size"],[1,"endpoint-grid"],[1,"endpoint",3,"active"],[1,"viz-status"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"],["name","arrow-right","css","icon-indigo",3,"size"],[1,"op-desc"],["name","briefcase","css","icon-cyan",3,"size"],[1,"use-cases"],[1,"use-case","cyan"],[1,"use-num","cyan-bg"],[1,"use-title"],[1,"use-desc"],[1,"use-case","blue"],[1,"use-num","blue-bg"],[1,"use-case","purple"],[1,"use-num","purple-bg"],[1,"endpoint",3,"click"],[1,"ep-method"],[1,"ep-path"],[1,"ep-desc"]],template:function(o,s){o&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),a(3,"app-icon",3),t(4," REST with Spring"),e(),n(5,"div",4)(6,"p")(7,"strong"),t(8,"@RestController"),e(),t(9," combines @Controller and @ResponseBody \u2014 every method returns data (JSON by default) instead of a view name."),e(),n(10,"ul")(11,"li")(12,"strong"),t(13,"ResponseEntity:"),e(),t(14," Full control over status codes, headers, and body."),e(),n(15,"li")(16,"strong"),t(17,"@Valid:"),e(),t(18," Automatic request validation with Bean Validation."),e(),n(19,"li")(20,"strong"),t(21,"Content Negotiation:"),e(),t(22," Return JSON, XML, or custom media types."),e()(),a(23,"app-code-block",5),e()(),n(24,"section",1)(25,"div",6)(26,"h3",7),a(27,"app-icon",8),t(28," REST Endpoint Simulator"),e(),n(29,"div",9),x(30,T,7,7,"div",10,_),e(),n(32,"div",11),t(33),e()()(),n(34,"section",1)(35,"h2",2),a(36,"app-icon",12),t(37," REST Patterns"),e(),n(38,"div",13)(39,"div",14)(40,"h3",15),a(41,"app-icon",16),t(42," CRUD Controller"),e(),n(43,"p",17),t(44,"Complete REST CRUD with proper HTTP methods and status codes."),e(),a(45,"app-code-block",5),e(),n(46,"div",14)(47,"h3",15),a(48,"app-icon",16),t(49," Validation"),e(),n(50,"p",17),t(51,"Request validation with Bean Validation and error responses."),e(),a(52,"app-code-block",5),e(),n(53,"div",14)(54,"h3",15),a(55,"app-icon",16),t(56," Pagination"),e(),n(57,"p",17),t(58,"Pageable results for large datasets."),e(),a(59,"app-code-block",5),e(),n(60,"div",14)(61,"h3",15),a(62,"app-icon",16),t(63," Error Handling"),e(),n(64,"p",17),t(65,"Consistent error responses across all endpoints."),e(),a(66,"app-code-block",5),e()()(),n(67,"section",1)(68,"h2",2),a(69,"app-icon",18),t(70," Real-Time Use Cases"),e(),n(71,"div",19)(72,"div",20)(73,"div",21),t(74,"1"),e(),n(75,"div")(76,"h4",22),t(77,"Microservice APIs"),e(),n(78,"p",23),t(79,"Each microservice exposes a RESTful API \u2014 "),n(80,"code"),t(81,"UserService"),e(),t(82,", "),n(83,"code"),t(84,"OrderService"),e(),t(85,", "),n(86,"code"),t(87,"PaymentService"),e(),t(88," communicate via HTTP/JSON."),e()()(),n(89,"div",24)(90,"div",25),t(91,"2"),e(),n(92,"div")(93,"h4",22),t(94,"Mobile App Backend"),e(),n(95,"p",23),t(96,"Android/iOS apps consume REST APIs. "),n(97,"code"),t(98,"ResponseEntity"),e(),t(99," gives precise control over what mobile clients receive."),e()()(),n(100,"div",26)(101,"div",27),t(102,"3"),e(),n(103,"div")(104,"h4",22),t(105,"Third-Party Integrations"),e(),n(106,"p",23),t(107,"Stripe, Twilio, SendGrid \u2014 all expose REST APIs. Spring's "),n(108,"code"),t(109,"RestTemplate"),e(),t(110," / "),n(111,"code"),t(112,"WebClient"),e(),t(113," consume them elegantly."),e()()()()()()),o&2&&(i(3),r("size",28),i(20),r("code",s.codeIntro),i(4),r("size",22),i(3),b(s.endpoints()),i(3),c(s.status()),i(3),r("size",28),i(5),r("size",18),i(4),r("code",s.codeCrud),i(3),r("size",18),i(4),r("code",s.codeValidation),i(3),r("size",18),i(4),r("code",s.codePagination),i(3),r("size",18),i(4),r("code",s.codeErrors),i(3),r("size",28))},dependencies:[h,P,y],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-cyan[_ngcontent-%COMP%]{color:#0891b2}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:14px 0;padding-left:22px;list-style:disc}.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:8px}.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#0f172a;font-weight:700}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f1f5f9;padding:2px 7px;border-radius:5px;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#0891b2}.viz-card[_ngcontent-%COMP%]{background:#fff;border-radius:18px;border:1px solid #e2e8f0;box-shadow:0 4px 16px #0000000d;padding:28px 24px}.viz-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;font-size:1.15rem;font-weight:700;color:#0f172a;margin:0 0 24px}.endpoint-grid[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:6px;margin-bottom:20px}.endpoint[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:10px 14px;border-radius:10px;border:2px solid #e2e8f0;cursor:pointer;transition:all .3s}.endpoint.active[_ngcontent-%COMP%]{border-color:#0891b2;background:#ecfeff}.ep-method[_ngcontent-%COMP%]{font-size:.55rem;font-weight:800;padding:2px 8px;border-radius:4px;font-family:JetBrains Mono,monospace}.ep-method.get[_ngcontent-%COMP%]{background:#dcfce7;color:#166534}.ep-method.post[_ngcontent-%COMP%]{background:#dbeafe;color:#1e40af}.ep-method.put[_ngcontent-%COMP%]{background:#fef3c7;color:#92400e}.ep-method.delete[_ngcontent-%COMP%]{background:#fecaca;color:#991b1b}.ep-path[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:.68rem;color:#0f172a;flex:1}.ep-desc[_ngcontent-%COMP%]{font-size:.6rem;color:#64748b}.viz-status[_ngcontent-%COMP%]{background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:12px 16px;text-align:center;font-family:JetBrains Mono,monospace;font-size:.78rem;color:#334155}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-card[_ngcontent-%COMP%]:hover{box-shadow:0 4px 12px #0000000f}.op-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}.op-desc[_ngcontent-%COMP%]{font-size:.78rem;color:#64748b;line-height:1.55;margin:0}.use-cases[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.use-case[_ngcontent-%COMP%]{display:flex;gap:16px;padding:20px;border-radius:14px;border:1px solid}.use-case.cyan[_ngcontent-%COMP%]{background:#ecfeff;border-color:#a5f3fc}.use-case.blue[_ngcontent-%COMP%]{background:#eff6ff;border-color:#bfdbfe}.use-case.purple[_ngcontent-%COMP%]{background:#faf5ff;border-color:#d8b4fe}.use-num[_ngcontent-%COMP%]{width:34px;height:34px;min-width:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:.78rem;font-weight:800}.cyan-bg[_ngcontent-%COMP%]{background:#0891b2}.blue-bg[_ngcontent-%COMP%]{background:#3b82f6}.purple-bg[_ngcontent-%COMP%]{background:#8b5cf6}.use-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 4px}.use-desc[_ngcontent-%COMP%]{font-size:.78rem;line-height:1.55;margin:0;color:#334155}.use-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#0000000f;padding:1px 5px;border-radius:4px;font-family:JetBrains Mono,monospace;font-size:.72rem}"],changeDetection:0})};export{M as SpringRestComponent};
