import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-dp-chain',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="Chain of Responsibility" subtitle="Request pipeline. Middleware chains, filter chains, and approval workflows." badge="DESIGN PATTERNS" gradient="linear-gradient(135deg, #4338ca, #818cf8)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-indigo" /> Chain</h2>
        <div class="prose"><p>The <strong>Chain of Responsibility</strong> passes a request through a chain of handlers. Each handler decides to process it or pass it along.</p><app-code-block [code]="codeIntro" /></div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-purple" /> Examples</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Classic Chain</h3><app-code-block [code]="codeClassic" /></div>
          <div class="op-card"><h3 class="op-title">Middleware</h3><app-code-block [code]="codeMiddleware" /></div>
          <div class="op-card"><h3 class="op-title">Servlet Filters</h3><app-code-block [code]="codeServlet" /></div>
          <div class="op-card"><h3 class="op-title">Functional</h3><app-code-block [code]="codeFunctional" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-indigo { color: #4f46e5; } .icon-purple { color: #7c3aed; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class DpChainComponent {
  codeIntro = `// Request → Handler1 → Handler2 → Handler3
// Each handler: process OR pass to next
// Real-world: Spring Security filter chain, Servlet filters`;
  codeClassic = `abstract class Handler {
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
chain.handle(request);`;
  codeMiddleware = `// Middleware pipeline
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

if (pipeline.execute(request)) { processRequest(request); }`;
  codeServlet = `// Servlet Filter Chain (built-in CoR)
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
// CorsFilter → CsrfFilter → AuthFilter → AuthorizationFilter`;
  codeFunctional = `// Functional chain with Predicate
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
// → "helloworld"`;
}
