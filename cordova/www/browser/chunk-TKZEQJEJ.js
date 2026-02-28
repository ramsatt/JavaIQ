import{a as y,b as O}from"./chunk-AMVNOPTI.js";import{a as E}from"./chunk-SI5PESLS.js";import{$a as r,Ja as v,Va as M,Wa as h,Za as C,_a as P,ab as n,bb as e,cb as s,ja as g,jb as f,kb as x,sb as S,tb as _,ub as t,vb as u,ya as i}from"./chunk-WGYJYFZL.js";import{a as c,b as m}from"./chunk-NWJ5J3BN.js";var z=(p,l)=>l.id;function R(p,l){if(p&1&&(n(0,"div",36),t(1,"\u2193"),e()),p&2){let o=x().$implicit;S("active",o.state==="done")}}function k(p,l){if(p&1&&(n(0,"div",32)(1,"span",33),t(2),e(),n(3,"span",34),t(4),e()(),M(5,R,2,2,"div",35)),p&2){let o=l.$implicit,a=x();_(o.state),i(2),u(o.id),i(2),u(o.text),i(),h(o.id<a.steps().length?5:-1)}}var w=class p{steps=g([{id:1,text:"Client sends HTTP request",state:""},{id:2,text:"DispatcherServlet receives it",state:""},{id:3,text:"HandlerMapping finds controller",state:""},{id:4,text:"Controller processes & returns ModelAndView",state:""},{id:5,text:"ViewResolver resolves view template",state:""},{id:6,text:"Response sent to client",state:""}]);status=g("Spring MVC uses DispatcherServlet as the front controller.");isAnimating=g(!1);codeIntro=`@Controller
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
}`;codeMapping=`// Class-level + method-level mapping
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
}`;codeParams=`// Path variable
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
    @RequestHeader("Authorization") String token) { }`;codeError=`@ControllerAdvice
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
}`;codeInterceptor=`public class AuthInterceptor
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
}`;sleep(l){return new Promise(o=>setTimeout(o,l))}async runLifecycle(){if(this.isAnimating())return;this.isAnimating.set(!0);let l=["Client sends GET /users/123...","DispatcherServlet dispatches to handler...","HandlerMapping found UserController.getUser()...","Controller processes request, builds Model...",'ViewResolver resolves "users/detail" \u2192 Thymeleaf...',"HTML response sent! 200 OK \u2705"];for(let o=0;o<6;o++)this.steps.update(a=>a.map((d,b)=>b===o?m(c({},d),{state:"active"}):b<o?m(c({},d),{state:"done"}):d)),this.status.set(l[o]),await this.sleep(900);this.steps.update(o=>o.map(a=>m(c({},a),{state:"done"}))),this.isAnimating.set(!1)}resetDemo(){this.steps.set([{id:1,text:"Client sends HTTP request",state:""},{id:2,text:"DispatcherServlet receives it",state:""},{id:3,text:"HandlerMapping finds controller",state:""},{id:4,text:"Controller processes & returns ModelAndView",state:""},{id:5,text:"ViewResolver resolves view template",state:""},{id:6,text:"Response sent to client",state:""}]),this.status.set("Spring MVC uses DispatcherServlet as the front controller."),this.isAnimating.set(!1)}static \u0275fac=function(o){return new(o||p)};static \u0275cmp=v({type:p,selectors:[["app-topic-spring-mvc"]],decls:118,vars:18,consts:[["title","Spring MVC","subtitle","The web framework powering millions of applications. Master DispatcherServlet, controllers, request mapping, and the MVC lifecycle.","badge","SPRING FRAMEWORK","gradient","linear-gradient(135deg, #1e40af, #93c5fd)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-blue",3,"size"],[1,"prose"],[3,"code"],[1,"viz-card"],[1,"viz-title"],["name","play","css","icon-blue",3,"size"],[1,"lifecycle"],[1,"viz-status"],[1,"viz-controls"],[1,"btn","btn-blue",3,"click","disabled"],["name","play",3,"size"],[1,"btn","btn-gray",3,"click","disabled"],["name","refresh-cw",3,"size"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"],["name","arrow-right","css","icon-indigo",3,"size"],[1,"op-desc"],["name","briefcase","css","icon-blue",3,"size"],[1,"use-cases"],[1,"use-case","blue"],[1,"use-num","blue-bg"],[1,"use-title"],[1,"use-desc"],[1,"use-case","teal"],[1,"use-num","teal-bg"],[1,"use-case","purple"],[1,"use-num","purple-bg"],[1,"lc-step"],[1,"lc-num"],[1,"lc-text"],[1,"lc-arrow",3,"active"],[1,"lc-arrow"]],template:function(o,a){o&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),s(3,"app-icon",3),t(4," How Spring MVC Works"),e(),n(5,"div",4)(6,"p")(7,"strong"),t(8,"Spring MVC"),e(),t(9," follows the Model-View-Controller pattern. The "),n(10,"strong"),t(11,"DispatcherServlet"),e(),t(12," acts as a front controller, routing requests to handler methods."),e(),n(13,"ul")(14,"li")(15,"strong"),t(16,"DispatcherServlet:"),e(),t(17," Central request dispatcher \u2014 receives ALL requests."),e(),n(18,"li")(19,"strong"),t(20,"HandlerMapping:"),e(),t(21," Maps URLs to controller methods."),e(),n(22,"li")(23,"strong"),t(24,"Controller:"),e(),t(25," Processes requests and returns a model + view name."),e(),n(26,"li")(27,"strong"),t(28,"ViewResolver:"),e(),t(29," Resolves view name to actual template (Thymeleaf, JSP)."),e()(),s(30,"app-code-block",5),e()(),n(31,"section",1)(32,"div",6)(33,"h3",7),s(34,"app-icon",8),t(35," Request Lifecycle"),e(),n(36,"div",9),C(37,k,6,5,null,null,z),e(),n(39,"div",10),t(40),e(),n(41,"div",11)(42,"button",12),f("click",function(){return a.runLifecycle()}),s(43,"app-icon",13),t(44," Run Request Flow"),e(),n(45,"button",14),f("click",function(){return a.resetDemo()}),s(46,"app-icon",15),t(47," Reset"),e()()()(),n(48,"section",1)(49,"h2",2),s(50,"app-icon",16),t(51," Controller Patterns"),e(),n(52,"div",17)(53,"div",18)(54,"h3",19),s(55,"app-icon",20),t(56," Request Mapping"),e(),n(57,"p",21),t(58,"Map HTTP methods and URLs to handler methods."),e(),s(59,"app-code-block",5),e(),n(60,"div",18)(61,"h3",19),s(62,"app-icon",20),t(63," Parameters & Path Variables"),e(),n(64,"p",21),t(65,"Extract data from URLs, query params, and request body."),e(),s(66,"app-code-block",5),e(),n(67,"div",18)(68,"h3",19),s(69,"app-icon",20),t(70," Exception Handling"),e(),n(71,"p",21),t(72,"Centralized error handling with @ControllerAdvice."),e(),s(73,"app-code-block",5),e(),n(74,"div",18)(75,"h3",19),s(76,"app-icon",20),t(77," Interceptors"),e(),n(78,"p",21),t(79,"Pre/post processing for all requests."),e(),s(80,"app-code-block",5),e()()(),n(81,"section",1)(82,"h2",2),s(83,"app-icon",22),t(84," Real-Time Use Cases"),e(),n(85,"div",23)(86,"div",24)(87,"div",25),t(88,"1"),e(),n(89,"div")(90,"h4",26),t(91,"API Gateway Routing"),e(),n(92,"p",27),t(93,"DispatcherServlet + HandlerMapping routes thousands of endpoints in large monoliths \u2014 each controller handles its own domain."),e()()(),n(94,"div",28)(95,"div",29),t(96,"2"),e(),n(97,"div")(98,"h4",26),t(99,"Form Validation"),e(),n(100,"p",27)(101,"code"),t(102,"@Valid"),e(),t(103," + "),n(104,"code"),t(105,"BindingResult"),e(),t(106," auto-validates form inputs. Spring MVC returns errors directly to the view template."),e()()(),n(107,"div",30)(108,"div",31),t(109,"3"),e(),n(110,"div")(111,"h4",26),t(112,"Content Negotiation"),e(),n(113,"p",27),t(114,"Same controller returns JSON, XML, or HTML based on "),n(115,"code"),t(116,"Accept"),e(),t(117," header. One endpoint, multiple representations."),e()()()()()()),o&2&&(i(3),r("size",28),i(27),r("code",a.codeIntro),i(4),r("size",22),i(3),P(a.steps()),i(3),u(a.status()),i(2),r("disabled",a.isAnimating()),i(),r("size",16),i(2),r("disabled",a.isAnimating()),i(),r("size",16),i(4),r("size",28),i(5),r("size",18),i(4),r("code",a.codeMapping),i(3),r("size",18),i(4),r("code",a.codeParams),i(3),r("size",18),i(4),r("code",a.codeError),i(3),r("size",18),i(4),r("code",a.codeInterceptor),i(3),r("size",28))},dependencies:[E,y,O],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-blue[_ngcontent-%COMP%]{color:#2563eb}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:14px 0;padding-left:22px;list-style:disc}.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:8px}.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#0f172a;font-weight:700}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f1f5f9;padding:2px 7px;border-radius:5px;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#2563eb}.viz-card[_ngcontent-%COMP%]{background:#fff;border-radius:18px;border:1px solid #e2e8f0;box-shadow:0 4px 16px #0000000d;padding:28px 24px}.viz-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;font-size:1.15rem;font-weight:700;color:#0f172a;margin:0 0 24px}.lifecycle[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:2px;margin-bottom:20px}.lc-step[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:10px 16px;border-radius:10px;border:2px solid #e2e8f0;width:100%;max-width:360px;transition:all .3s}.lc-step.active[_ngcontent-%COMP%]{border-color:#2563eb;background:#eff6ff}.lc-step.done[_ngcontent-%COMP%]{border-color:#16a34a;background:#f0fdf4}.lc-num[_ngcontent-%COMP%]{width:22px;height:22px;min-width:22px;border-radius:50%;background:#e2e8f0;display:flex;align-items:center;justify-content:center;font-size:.55rem;font-weight:800}.lc-text[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:.65rem;color:#0f172a}.lc-arrow[_ngcontent-%COMP%]{font-size:.7rem;color:#cbd5e1;transition:color .3s}.lc-arrow.active[_ngcontent-%COMP%]{color:#16a34a}.viz-status[_ngcontent-%COMP%]{background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:12px 16px;text-align:center;font-family:JetBrains Mono,monospace;font-size:.78rem;color:#334155;margin-bottom:20px}.viz-controls[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;gap:10px}.btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:7px;padding:10px 18px;border-radius:10px;font-size:.78rem;font-weight:600;border:none;cursor:pointer;transition:all .2s}.btn[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:not-allowed}.btn-blue[_ngcontent-%COMP%]{background:#2563eb;color:#fff}.btn-blue[_ngcontent-%COMP%]:hover:not(:disabled){background:#1d4ed8}.btn-gray[_ngcontent-%COMP%]{background:#e2e8f0;color:#334155}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-card[_ngcontent-%COMP%]:hover{box-shadow:0 4px 12px #0000000f}.op-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}.op-desc[_ngcontent-%COMP%]{font-size:.78rem;color:#64748b;line-height:1.55;margin:0}.use-cases[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.use-case[_ngcontent-%COMP%]{display:flex;gap:16px;padding:20px;border-radius:14px;border:1px solid}.use-case.blue[_ngcontent-%COMP%]{background:#eff6ff;border-color:#bfdbfe}.use-case.teal[_ngcontent-%COMP%]{background:#f0fdfa;border-color:#99f6e4}.use-case.purple[_ngcontent-%COMP%]{background:#faf5ff;border-color:#d8b4fe}.use-num[_ngcontent-%COMP%]{width:34px;height:34px;min-width:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:.78rem;font-weight:800}.blue-bg[_ngcontent-%COMP%]{background:#2563eb}.teal-bg[_ngcontent-%COMP%]{background:#14b8a6}.purple-bg[_ngcontent-%COMP%]{background:#8b5cf6}.use-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 4px}.use-desc[_ngcontent-%COMP%]{font-size:.78rem;line-height:1.55;margin:0;color:#334155}.use-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#0000000f;padding:1px 5px;border-radius:4px;font-family:JetBrains Mono,monospace;font-size:.72rem}"],changeDetection:0})};export{w as SpringMvcComponent};
