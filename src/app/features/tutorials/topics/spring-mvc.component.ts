import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-spring-mvc',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="Spring MVC" subtitle="The web framework powering millions of applications. Master DispatcherServlet, controllers, request mapping, and the MVC lifecycle." badge="SPRING FRAMEWORK" gradient="linear-gradient(135deg, #1e40af, #93c5fd)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-blue" /> How Spring MVC Works</h2>
        <div class="prose">
          <p><strong>Spring MVC</strong> follows the Model-View-Controller pattern. The <strong>DispatcherServlet</strong> acts as a front controller, routing requests to handler methods.</p>
          <ul>
            <li><strong>DispatcherServlet:</strong> Central request dispatcher — receives ALL requests.</li>
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
              @if (step.id < steps().length) { <div class="lc-arrow" [class.active]="step.state === 'done'">↓</div> }
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
          <div class="use-case blue"><div class="use-num blue-bg">1</div><div><h4 class="use-title">API Gateway Routing</h4><p class="use-desc">DispatcherServlet + HandlerMapping routes thousands of endpoints in large monoliths — each controller handles its own domain.</p></div></div>
          <div class="use-case teal"><div class="use-num teal-bg">2</div><div><h4 class="use-title">Form Validation</h4><p class="use-desc"><code>&#64;Valid</code> + <code>BindingResult</code> auto-validates form inputs. Spring MVC returns errors directly to the view template.</p></div></div>
          <div class="use-case purple"><div class="use-num purple-bg">3</div><div><h4 class="use-title">Content Negotiation</h4><p class="use-desc">Same controller returns JSON, XML, or HTML based on <code>Accept</code> header. One endpoint, multiple representations.</p></div></div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-blue { color: #2563eb; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; } .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; } .prose li { margin-bottom: 8px; } .prose strong { color: #0f172a; font-weight: 700; } .prose code { background: #f1f5f9; padding: 2px 7px; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #2563eb; }
    .viz-card { background: #fff; border-radius: 18px; border: 1px solid #e2e8f0; box-shadow: 0 4px 16px rgba(0,0,0,0.05); padding: 28px 24px; } .viz-title { display: flex; align-items: center; gap: 10px; font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0 0 24px; }
    .lifecycle { display: flex; flex-direction: column; align-items: center; gap: 2px; margin-bottom: 20px; }
    .lc-step { display: flex; align-items: center; gap: 10px; padding: 10px 16px; border-radius: 10px; border: 2px solid #e2e8f0; width: 100%; max-width: 360px; transition: all 0.3s; }
    .lc-step.active { border-color: #2563eb; background: #eff6ff; } .lc-step.done { border-color: #16a34a; background: #f0fdf4; }
    .lc-num { width: 22px; height: 22px; min-width: 22px; border-radius: 50%; background: #e2e8f0; display: flex; align-items: center; justify-content: center; font-size: 0.55rem; font-weight: 800; }
    .lc-text { font-family: 'JetBrains Mono', monospace; font-size: 0.65rem; color: #0f172a; }
    .lc-arrow { font-size: 0.7rem; color: #cbd5e1; transition: color 0.3s; } .lc-arrow.active { color: #16a34a; }
    .viz-status { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px 16px; text-align: center; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; color: #334155; margin-bottom: 20px; }
    .viz-controls { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; }
    .btn { display: inline-flex; align-items: center; gap: 7px; padding: 10px 18px; border-radius: 10px; font-size: 0.78rem; font-weight: 600; border: none; cursor: pointer; transition: all 0.2s; } .btn:disabled { opacity: 0.5; cursor: not-allowed; } .btn-blue { background: #2563eb; color: #fff; } .btn-blue:hover:not(:disabled) { background: #1d4ed8; } .btn-gray { background: #e2e8f0; color: #334155; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.06); } .op-title { display: flex; align-items: center; gap: 8px; font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; } .op-desc { font-size: 0.78rem; color: #64748b; line-height: 1.55; margin: 0; }
    .use-cases { display: flex; flex-direction: column; gap: 12px; } .use-case { display: flex; gap: 16px; padding: 20px; border-radius: 14px; border: 1px solid; } .use-case.blue { background: #eff6ff; border-color: #bfdbfe; } .use-case.teal { background: #f0fdfa; border-color: #99f6e4; } .use-case.purple { background: #faf5ff; border-color: #d8b4fe; }
    .use-num { width: 34px; height: 34px; min-width: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 0.78rem; font-weight: 800; } .blue-bg { background: #2563eb; } .teal-bg { background: #14b8a6; } .purple-bg { background: #8b5cf6; }
    .use-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 4px; } .use-desc { font-size: 0.78rem; line-height: 1.55; margin: 0; color: #334155; } .use-desc code { background: rgba(0,0,0,0.06); padding: 1px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; }
  `
})
export class SpringMvcComponent {
  steps = signal([
    { id: 1, text: 'Client sends HTTP request', state: '' },
    { id: 2, text: 'DispatcherServlet receives it', state: '' },
    { id: 3, text: 'HandlerMapping finds controller', state: '' },
    { id: 4, text: 'Controller processes & returns ModelAndView', state: '' },
    { id: 5, text: 'ViewResolver resolves view template', state: '' },
    { id: 6, text: 'Response sent to client', state: '' },
  ]);
  status = signal('Spring MVC uses DispatcherServlet as the front controller.');
  isAnimating = signal(false);
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

  private sleep(ms: number): Promise<void> { return new Promise(r => setTimeout(r, ms)); }
  async runLifecycle() {
    if (this.isAnimating()) return;
    this.isAnimating.set(true);
    const labels = ['Client sends GET /users/123...', 'DispatcherServlet dispatches to handler...', 'HandlerMapping found UserController.getUser()...', 'Controller processes request, builds Model...', 'ViewResolver resolves "users/detail" → Thymeleaf...', 'HTML response sent! 200 OK ✅'];
    for (let i = 0; i < 6; i++) {
      this.steps.update(s => s.map((st, j) => j === i ? { ...st, state: 'active' } : j < i ? { ...st, state: 'done' } : st));
      this.status.set(labels[i]);
      await this.sleep(900);
    }
    this.steps.update(s => s.map(st => ({ ...st, state: 'done' })));
    this.isAnimating.set(false);
  }
  resetDemo() {
    this.steps.set([ { id: 1, text: 'Client sends HTTP request', state: '' }, { id: 2, text: 'DispatcherServlet receives it', state: '' }, { id: 3, text: 'HandlerMapping finds controller', state: '' }, { id: 4, text: 'Controller processes & returns ModelAndView', state: '' }, { id: 5, text: 'ViewResolver resolves view template', state: '' }, { id: 6, text: 'Response sent to client', state: '' } ]);
    this.status.set('Spring MVC uses DispatcherServlet as the front controller.');
    this.isAnimating.set(false);
  }
}
