import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-spring-rest',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="RESTful APIs" subtitle="Build production-grade REST APIs. Master RestController, ResponseEntity, validation, pagination, and HATEOAS." badge="SPRING FRAMEWORK" gradient="linear-gradient(135deg, #0e7490, #67e8f9)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-cyan" /> REST with Spring</h2>
        <div class="prose">
          <p><strong>&#64;RestController</strong> combines &#64;Controller and &#64;ResponseBody — every method returns data (JSON by default) instead of a view name.</p>
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
          <div class="use-case cyan"><div class="use-num cyan-bg">1</div><div><h4 class="use-title">Microservice APIs</h4><p class="use-desc">Each microservice exposes a RESTful API — <code>UserService</code>, <code>OrderService</code>, <code>PaymentService</code> communicate via HTTP/JSON.</p></div></div>
          <div class="use-case blue"><div class="use-num blue-bg">2</div><div><h4 class="use-title">Mobile App Backend</h4><p class="use-desc">Android/iOS apps consume REST APIs. <code>ResponseEntity</code> gives precise control over what mobile clients receive.</p></div></div>
          <div class="use-case purple"><div class="use-num purple-bg">3</div><div><h4 class="use-title">Third-Party Integrations</h4><p class="use-desc">Stripe, Twilio, SendGrid — all expose REST APIs. Spring's <code>RestTemplate</code> / <code>WebClient</code> consume them elegantly.</p></div></div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-cyan { color: #0891b2; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; } .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; } .prose li { margin-bottom: 8px; } .prose strong { color: #0f172a; font-weight: 700; } .prose code { background: #f1f5f9; padding: 2px 7px; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #0891b2; }
    .viz-card { background: #fff; border-radius: 18px; border: 1px solid #e2e8f0; box-shadow: 0 4px 16px rgba(0,0,0,0.05); padding: 28px 24px; } .viz-title { display: flex; align-items: center; gap: 10px; font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0 0 24px; }
    .endpoint-grid { display: flex; flex-direction: column; gap: 6px; margin-bottom: 20px; }
    .endpoint { display: flex; align-items: center; gap: 10px; padding: 10px 14px; border-radius: 10px; border: 2px solid #e2e8f0; cursor: pointer; transition: all 0.3s; }
    .endpoint.active { border-color: #0891b2; background: #ecfeff; }
    .ep-method { font-size: 0.55rem; font-weight: 800; padding: 2px 8px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; } .ep-method.get { background: #dcfce7; color: #166534; } .ep-method.post { background: #dbeafe; color: #1e40af; } .ep-method.put { background: #fef3c7; color: #92400e; } .ep-method.delete { background: #fecaca; color: #991b1b; }
    .ep-path { font-family: 'JetBrains Mono', monospace; font-size: 0.68rem; color: #0f172a; flex: 1; } .ep-desc { font-size: 0.6rem; color: #64748b; }
    .viz-status { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px 16px; text-align: center; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; color: #334155; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.06); } .op-title { display: flex; align-items: center; gap: 8px; font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; } .op-desc { font-size: 0.78rem; color: #64748b; line-height: 1.55; margin: 0; }
    .use-cases { display: flex; flex-direction: column; gap: 12px; } .use-case { display: flex; gap: 16px; padding: 20px; border-radius: 14px; border: 1px solid; } .use-case.cyan { background: #ecfeff; border-color: #a5f3fc; } .use-case.blue { background: #eff6ff; border-color: #bfdbfe; } .use-case.purple { background: #faf5ff; border-color: #d8b4fe; }
    .use-num { width: 34px; height: 34px; min-width: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 0.78rem; font-weight: 800; } .cyan-bg { background: #0891b2; } .blue-bg { background: #3b82f6; } .purple-bg { background: #8b5cf6; }
    .use-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 4px; } .use-desc { font-size: 0.78rem; line-height: 1.55; margin: 0; color: #334155; } .use-desc code { background: rgba(0,0,0,0.06); padding: 1px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; }
  `
})
export class SpringRestComponent {
  activeEndpoint = signal('');
  status = signal('Click an endpoint to see the HTTP method, status code, and response.');
  endpoints = signal([
    { method: 'GET', path: '/api/users', desc: 'List all users → 200', color: 'get' },
    { method: 'POST', path: '/api/users', desc: 'Create user → 201', color: 'post' },
    { method: 'PUT', path: '/api/users/123', desc: 'Update user → 200', color: 'put' },
    { method: 'DELETE', path: '/api/users/123', desc: 'Delete user → 204', color: 'delete' },
  ]);
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

  selectEndpoint(method: string) {
    this.activeEndpoint.set(method);
    const details: Record<string, string> = {
      'GET': 'GET /api/users → Returns List<UserDTO> with 200 OK. Idempotent, cacheable.',
      'POST': 'POST /api/users → Creates resource. Returns 201 Created + Location header.',
      'PUT': 'PUT /api/users/123 → Full update. Returns 200 OK. Idempotent.',
      'DELETE': 'DELETE /api/users/123 → Removes resource. Returns 204 No Content.',
    };
    this.status.set(details[method] ?? '');
  }
}
