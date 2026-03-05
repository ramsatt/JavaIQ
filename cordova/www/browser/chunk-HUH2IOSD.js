import {
  CodeBlockComponent,
  IconComponent,
  TutorialLayoutComponent
} from "./chunk-5ZPIB2CR.js";
import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-L6VISU4K.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/sb-exception.component.ts
var SbExceptionComponent = class _SbExceptionComponent {
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
\u251C\u2500\u2500 ResourceNotFoundException (404)
\u251C\u2500\u2500 DuplicateResourceException (409)
\u251C\u2500\u2500 BusinessException (422)
\u2502   \u251C\u2500\u2500 InsufficientFundsException
\u2502   \u2514\u2500\u2500 OrderExpiredException
\u251C\u2500\u2500 AuthenticationException (401)
\u2514\u2500\u2500 AuthorizationException (403)

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
  static \u0275fac = function SbExceptionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SbExceptionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SbExceptionComponent, selectors: [["app-topic-sb-exception"]], decls: 32, vars: 7, consts: [["title", "Exception Handling", "subtitle", "Consistent error responses. ControllerAdvice, ProblemDetail (RFC 7807), and error hierarchy.", "badge", "SPRING BOOT", "gradient", "linear-gradient(135deg, #991b1b, #f87171)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-red", 3, "size"], [1, "prose"], [3, "code"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"]], template: function SbExceptionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Global Exception Handling");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p")(7, "strong");
      \u0275\u0275text(8, "@RestControllerAdvice");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, " centralizes error handling. All exceptions get caught, transformed into consistent JSON responses.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(10, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "section", 1)(12, "h2", 2);
      \u0275\u0275element(13, "app-icon", 6);
      \u0275\u0275text(14, " Patterns");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 7)(16, "div", 8)(17, "h3", 9);
      \u0275\u0275text(18, "Custom Exceptions");
      \u0275\u0275elementEnd();
      \u0275\u0275element(19, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 8)(21, "h3", 9);
      \u0275\u0275text(22, "ProblemDetail (RFC 7807)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(23, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 8)(25, "h3", 9);
      \u0275\u0275text(26, "Error Hierarchy");
      \u0275\u0275elementEnd();
      \u0275\u0275element(27, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 8)(29, "h3", 9);
      \u0275\u0275text(30, "Error Response DTO");
      \u0275\u0275elementEnd();
      \u0275\u0275element(31, "app-code-block", 5);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(7);
      \u0275\u0275property("code", ctx.codeIntro);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(6);
      \u0275\u0275property("code", ctx.codeCustom);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeProblem);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeHierarchy);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeDto);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ["\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-red[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=sb-exception.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SbExceptionComponent, [{
    type: Component,
    args: [{ selector: "app-topic-sb-exception", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
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
  `, styles: ["/* angular:styles/component:css;1ee42a2cc863167e2d72aae7bff69d10566960b45c9f918822b56c174d26e297;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/features/tutorials/topics/sb-exception.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-red {\n  color: #dc2626;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=sb-exception.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SbExceptionComponent, { className: "SbExceptionComponent", filePath: "src/app/features/tutorials/topics/sb-exception.component.ts", lineNumber: 36 });
})();
export {
  SbExceptionComponent
};
//# sourceMappingURL=chunk-HUH2IOSD.js.map
