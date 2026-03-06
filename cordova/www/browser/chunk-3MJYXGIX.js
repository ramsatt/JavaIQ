import{a as d,b as l,c as u}from"./chunk-5NK5W44O.js";import{Pa as n,Tb as t,ab as a,sb as o,tb as i,ub as e,vb as r}from"./chunk-WSUICUG6.js";import"./chunk-NWJ5J3BN.js";var m=class c{codeIntro=`@RestControllerAdvice
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
}`;codeCustom=`// Base exception
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
}`;codeProblem=`// Spring Boot 3+ ProblemDetail (RFC 7807)
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
//   "errorCode": "RESOURCE_NOT_FOUND" }`;codeHierarchy=`// Clean exception hierarchy
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
}`;codeDto=`// Consistent error response
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
}`;static \u0275fac=function(p){return new(p||c)};static \u0275cmp=a({type:c,selectors:[["app-topic-sb-exception"]],decls:32,vars:7,consts:[["title","Exception Handling","subtitle","Consistent error responses. ControllerAdvice, ProblemDetail (RFC 7807), and error hierarchy.","badge","SPRING BOOT","gradient","linear-gradient(135deg, #991b1b, #f87171)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-red",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(p,s){p&1&&(i(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),r(3,"app-icon",3),t(4," Global Exception Handling"),e(),i(5,"div",4)(6,"p")(7,"strong"),t(8,"@RestControllerAdvice"),e(),t(9," centralizes error handling. All exceptions get caught, transformed into consistent JSON responses."),e(),r(10,"app-code-block",5),e()(),i(11,"section",1)(12,"h2",2),r(13,"app-icon",6),t(14," Patterns"),e(),i(15,"div",7)(16,"div",8)(17,"h3",9),t(18,"Custom Exceptions"),e(),r(19,"app-code-block",5),e(),i(20,"div",8)(21,"h3",9),t(22,"ProblemDetail (RFC 7807)"),e(),r(23,"app-code-block",5),e(),i(24,"div",8)(25,"h3",9),t(26,"Error Hierarchy"),e(),r(27,"app-code-block",5),e(),i(28,"div",8)(29,"h3",9),t(30,"Error Response DTO"),e(),r(31,"app-code-block",5),e()()()()),p&2&&(n(3),o("size",28),n(7),o("code",s.codeIntro),n(3),o("size",28),n(6),o("code",s.codeCustom),n(4),o("code",s.codeProblem),n(4),o("code",s.codeHierarchy),n(4),o("code",s.codeDto))},dependencies:[d,l,u],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-red[_ngcontent-%COMP%]{color:#dc2626}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{m as SbExceptionComponent};
