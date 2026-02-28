import{a as p,b as m}from"./chunk-FDH3XGHK.js";import{a as c}from"./chunk-IWR5KZXO.js";import{Ba as i,Ma as s,cb as o,db as n,eb as e,fb as r,xb as t}from"./chunk-AMBX34QR.js";import"./chunk-NWJ5J3BN.js";var u=class d{codeIntro=`// Request \u2192 Handler1 \u2192 Handler2 \u2192 Handler3
// Each handler: process OR pass to next
// Real-world: Spring Security filter chain, Servlet filters`;codeClassic=`abstract class Handler {
    private Handler next;
    Handler setNext(Handler h) { next = h; return h; }

    void handle(Request request) {
        if (canHandle(request)) {
            process(request);
        } else if (next != null) {
            next.handle(request);
        }
    }
    abstract boolean canHandle(Request r);
    abstract void process(Request r);
}

class AuthHandler extends Handler {
    boolean canHandle(Request r) { return !r.isAuthenticated(); }
    void process(Request r) { throw new UnauthorizedException(); }
}

class LogHandler extends Handler {
    boolean canHandle(Request r) { return true; }
    void process(Request r) { log.info(r.toString()); }
}

// Build chain
Handler chain = new AuthHandler();
chain.setNext(new LogHandler()).setNext(new BusinessHandler());
chain.handle(request);`;codeMiddleware=`// Middleware pipeline
interface Middleware {
    boolean check(Request req);
}

class Pipeline {
    private final List<Middleware> middlewares = new ArrayList<>();
    void add(Middleware m) { middlewares.add(m); }

    boolean execute(Request request) {
        for (Middleware m : middlewares) {
            if (!m.check(request)) return false;
        }
        return true;
    }
}

Pipeline pipeline = new Pipeline();
pipeline.add(req -> req.getToken() != null);     // auth
pipeline.add(req -> rateLimiter.allow(req.getIp())); // rate limit
pipeline.add(req -> validator.isValid(req));     // validation

if (pipeline.execute(request)) { processRequest(request); }`;codeServlet=`// Servlet Filter Chain (built-in CoR)
@Component
public class LogFilter implements Filter {
    public void doFilter(ServletRequest req, ServletResponse res,
                         FilterChain chain) throws IOException, ServletException {
        log.info("Before: {}", ((HttpServletRequest) req).getRequestURI());
        chain.doFilter(req, res);  // pass to next filter
        log.info("After: {}", ((HttpServletResponse) res).getStatus());
    }
}

// Spring Security = chain of filters
// CorsFilter \u2192 CsrfFilter \u2192 AuthFilter \u2192 AuthorizationFilter`;codeFunctional=`// Functional chain with Predicate
List<Predicate<Request>> validators = List.of(
    req -> req.getBody() != null,
    req -> req.getBody().length() < 10000,
    req -> req.getContentType().contains("json")
);

boolean allValid = validators.stream().allMatch(v -> v.test(request));

// Function composition as chain
Function<String, String> pipeline = Function.<String>identity()
    .andThen(String::trim)
    .andThen(String::toLowerCase)
    .andThen(s -> s.replaceAll("[^a-z0-9]", ""));

String result = pipeline.apply("  Hello, World!  ");
// \u2192 "helloworld"`;static \u0275fac=function(l){return new(l||d)};static \u0275cmp=s({type:d,selectors:[["app-topic-dp-chain"]],decls:33,vars:7,consts:[["title","Chain of Responsibility","subtitle","Request pipeline. Middleware chains, filter chains, and approval workflows.","badge","DESIGN PATTERNS","gradient","linear-gradient(135deg, #4338ca, #818cf8)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-indigo",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-purple",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(l,a){l&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),r(3,"app-icon",3),t(4," Chain"),e(),n(5,"div",4)(6,"p"),t(7,"The "),n(8,"strong"),t(9,"Chain of Responsibility"),e(),t(10," passes a request through a chain of handlers. Each handler decides to process it or pass it along."),e(),r(11,"app-code-block",5),e()(),n(12,"section",1)(13,"h2",2),r(14,"app-icon",6),t(15," Examples"),e(),n(16,"div",7)(17,"div",8)(18,"h3",9),t(19,"Classic Chain"),e(),r(20,"app-code-block",5),e(),n(21,"div",8)(22,"h3",9),t(23,"Middleware"),e(),r(24,"app-code-block",5),e(),n(25,"div",8)(26,"h3",9),t(27,"Servlet Filters"),e(),r(28,"app-code-block",5),e(),n(29,"div",8)(30,"h3",9),t(31,"Functional"),e(),r(32,"app-code-block",5),e()()()()),l&2&&(i(3),o("size",28),i(8),o("code",a.codeIntro),i(3),o("size",28),i(6),o("code",a.codeClassic),i(4),o("code",a.codeMiddleware),i(4),o("code",a.codeServlet),i(4),o("code",a.codeFunctional))},dependencies:[c,p,m],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.icon-purple[_ngcontent-%COMP%]{color:#7c3aed}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{u as DpChainComponent};
