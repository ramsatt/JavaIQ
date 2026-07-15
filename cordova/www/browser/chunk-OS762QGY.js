import{a as p,b as c,c as m}from"./chunk-IN5CYMS5.js";import"./chunk-IS4X7JQG.js";import"./chunk-7SFQX2NP.js";import"./chunk-JTAKQG6P.js";import{P as o,S as s,ba as r,ca as t,da as e,ea as i,wa as n}from"./chunk-UO6CZCBJ.js";import"./chunk-JKY3FJOK.js";import"./chunk-36LMHX4H.js";import"./chunk-QSPX3XV4.js";import"./chunk-CFQFX75D.js";import"./chunk-5AR3GM6G.js";import"./chunk-DGLFGWVP.js";import"./chunk-OQOWVL3R.js";import"./chunk-VSDHJBUA.js";import"./chunk-4WFVMWDK.js";import"./chunk-M2X7KQLB.js";import"./chunk-DVVH2KKN.js";import"./chunk-NV3QH4JK.js";import"./chunk-2DGDOVBR.js";import"./chunk-OZYWYLNK.js";import"./chunk-42C7ZIID.js";import"./chunk-NWJ5J3BN.js";var u=class d{codeIntro=`// Request \u2192 Handler1 \u2192 Handler2 \u2192 Handler3
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
// \u2192 "helloworld"`;static \u0275fac=function(l){return new(l||d)};static \u0275cmp=s({type:d,selectors:[["app-topic-dp-chain"]],decls:35,vars:7,consts:[["title","Chain of Responsibility","subtitle","Request pipeline. Middleware chains, filter chains, and approval workflows.","badge","DESIGN PATTERNS","gradient","linear-gradient(135deg, #4338ca, #818cf8)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-indigo",3,"size"],[1,"topic-hero-container"],["src","/assets/images/topics/dp-chain.png","alt","Chain of Responsibility Pattern Visualized",1,"topic-hero-image"],[1,"prose"],[3,"code"],["name","code","css","icon-purple",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(l,a){l&1&&(t(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),i(3,"app-icon",3),n(4," Chain"),e(),t(5,"div",4),i(6,"img",5),e(),t(7,"div",6)(8,"p"),n(9,"The "),t(10,"strong"),n(11,"Chain of Responsibility"),e(),n(12," passes a request through a chain of handlers. Each handler decides to process it or pass it along."),e(),i(13,"app-code-block",7),e()(),t(14,"section",1)(15,"h2",2),i(16,"app-icon",8),n(17," Examples"),e(),t(18,"div",9)(19,"div",10)(20,"h3",11),n(21,"Classic Chain"),e(),i(22,"app-code-block",7),e(),t(23,"div",10)(24,"h3",11),n(25,"Middleware"),e(),i(26,"app-code-block",7),e(),t(27,"div",10)(28,"h3",11),n(29,"Servlet Filters"),e(),i(30,"app-code-block",7),e(),t(31,"div",10)(32,"h3",11),n(33,"Functional"),e(),i(34,"app-code-block",7),e()()()()),l&2&&(o(3),r("size",28),o(10),r("code",a.codeIntro),o(3),r("size",28),o(6),r("code",a.codeClassic),o(4),r("code",a.codeMiddleware),o(4),r("code",a.codeServlet),o(4),r("code",a.codeFunctional))},dependencies:[p,c,m],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.topic-hero-container[_ngcontent-%COMP%]{text-align:center;margin:24px 0}.topic-hero-image[_ngcontent-%COMP%]{width:100%;max-width:650px;height:auto;border-radius:12px;box-shadow:0 8px 24px #0000001f;border:1px solid #e2e8f0}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.icon-purple[_ngcontent-%COMP%]{color:#7c3aed}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{u as DpChainComponent};
