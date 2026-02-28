import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-sb-exception',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="Exception Handling" subtitle="Consistent error responses. ControllerAdvice, ProblemDetail (RFC 7807), and error hierarchy." badge="SPRING BOOT" gradient="linear-gradient(135deg, #991b1b, #f87171)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-red" /> Global Exception Handling</h2>
        <div class="prose">
          <p><strong>&#64;RestControllerAdvice</strong> centralizes error handling. All exceptions get caught, transformed into consistent JSON responses.</p>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Patterns</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Custom Exceptions</h3><app-code-block [code]="codeCustom" /></div>
          <div class="op-card"><h3 class="op-title">ProblemDetail (RFC 7807)</h3><app-code-block [code]="codeProblem" /></div>
          <div class="op-card"><h3 class="op-title">Error Hierarchy</h3><app-code-block [code]="codeHierarchy" /></div>
          <div class="op-card"><h3 class="op-title">Error Response DTO</h3><app-code-block [code]="codeDto" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-red { color: #dc2626; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class SbExceptionComponent {
  codeIntro = `@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ErrorResponse handleNotFound(ResourceNotFoundException ex) {
        return new ErrorResponse("NOT_FOUND", ex.getMessage());
    }

    @ExceptionHandler(BusinessException.class)
    @ResponseStatus(HttpStatus.UNPROCESSABLE_ENTITY)
    public ErrorResponse handleBusiness(BusinessException ex) {
        return new ErrorResponse("BUSINESS_ERROR", ex.getMessage());
    }

    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ErrorResponse handleAll(Exception ex) {
        log.error("Unexpected error", ex);
        return new ErrorResponse("INTERNAL_ERROR", "Something went wrong");
    }
}`;
  codeCustom = `// Base exception
public abstract class AppException extends RuntimeException {
    private final String code;
    private final HttpStatus status;
    protected AppException(String code, String msg, HttpStatus status) {
        super(msg); this.code = code; this.status = status;
    }
}

// Specific exceptions
public class ResourceNotFoundException extends AppException {
    public ResourceNotFoundException(String resource, Long id) {
        super("NOT_FOUND", resource + " not found: " + id, HttpStatus.NOT_FOUND);
    }
}

public class DuplicateResourceException extends AppException {
    public DuplicateResourceException(String field, String value) {
        super("DUPLICATE", field + " already exists: " + value, HttpStatus.CONFLICT);
    }
}`;
  codeProblem = `// Spring Boot 3+ ProblemDetail (RFC 7807)
@ExceptionHandler(ResourceNotFoundException.class)
public ProblemDetail handleNotFound(ResourceNotFoundException ex) {
    ProblemDetail pd = ProblemDetail.forStatus(HttpStatus.NOT_FOUND);
    pd.setTitle("Resource Not Found");
    pd.setDetail(ex.getMessage());
    pd.setProperty("timestamp", Instant.now());
    pd.setProperty("errorCode", "RESOURCE_NOT_FOUND");
    return pd;
}

// Response:
// { "type": "about:blank", "title": "Resource Not Found",
//   "status": 404, "detail": "User not found: 42",
//   "instance": "/api/users/42", "timestamp": "...",
//   "errorCode": "RESOURCE_NOT_FOUND" }`;
  codeHierarchy = `// Clean exception hierarchy
AppException (abstract, base)
├── ResourceNotFoundException (404)
├── DuplicateResourceException (409)
├── BusinessException (422)
│   ├── InsufficientFundsException
│   └── OrderExpiredException
├── AuthenticationException (401)
└── AuthorizationException (403)

// One handler per base type:
@ExceptionHandler(AppException.class)
public ResponseEntity<ErrorResponse> handleApp(AppException ex) {
    return ResponseEntity.status(ex.getStatus())
        .body(new ErrorResponse(ex.getCode(), ex.getMessage()));
}`;
  codeDto = `// Consistent error response
public record ErrorResponse(
    String code,
    String message,
    @JsonInclude(JsonInclude.Include.NON_NULL)
    Map<String, String> fieldErrors,
    Instant timestamp
) {
    public ErrorResponse(String code, String message) {
        this(code, message, null, Instant.now());
    }
    public ErrorResponse(String code, String message, Map<String, String> fieldErrors) {
        this(code, message, fieldErrors, Instant.now());
    }
}`;
}
