import {
  CodeBlockComponent,
  IconComponent,
  TutorialLayoutComponent
} from "./chunk-MLPCG66Y.js";
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
} from "./chunk-VBTVL2BZ.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/sb-validation.component.ts
var SbValidationComponent = class _SbValidationComponent {
  codeIntro = `public record CreateUserDTO(
    @NotBlank(message = "Name is required")
    String name,

    @Email(message = "Invalid email format")
    @NotBlank String email,

    @Min(value = 18, message = "Must be 18+")
    @Max(150) int age,

    @Pattern(regexp = "^\\\\+?[1-9]\\\\d{9,14}$", message = "Invalid phone")
    String phone
) {}

@PostMapping
public UserDTO create(@RequestBody @Valid CreateUserDTO dto) {
    return userService.create(dto); // only reached if valid!
}`;
  codeAnnotations = `// String
@NotBlank    // not null, not empty, not whitespace
@Size(min = 2, max = 50)
@Pattern(regexp = "...")
@Email

// Numbers
@Min(0) @Max(100)
@Positive @PositiveOrZero
@DecimalMin("0.01")

// Date/Time
@Past @PastOrPresent
@Future @FutureOrPresent

// Collections
@NotEmpty  // not null + not empty
@Size(min = 1, max = 10)

// Nested
@Valid  // cascade validation to nested objects
List<@Valid AddressDTO> addresses;`;
  codeCustom = `// 1. Define annotation
@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = UniqueEmailValidator.class)
public @interface UniqueEmail {
    String message() default "Email already exists";
    Class<?>[] groups() default {};
    Class<?>[] payload() default {};
}

// 2. Implement validator
public class UniqueEmailValidator
    implements ConstraintValidator<UniqueEmail, String> {
    @Autowired UserRepository repo;
    public boolean isValid(String email, ConstraintValidatorContext ctx) {
        return !repo.existsByEmail(email);
    }
}

// 3. Use it
public record CreateUserDTO(@UniqueEmail String email) {}`;
  codeGroups = `// Define marker interfaces
public interface OnCreate {}
public interface OnUpdate {}

public record UserDTO(
    @Null(groups = OnCreate.class)      // null on create
    @NotNull(groups = OnUpdate.class)   // required on update
    Long id,

    @NotBlank(groups = {OnCreate.class, OnUpdate.class})
    String name
) {}

@PostMapping
public UserDTO create(@RequestBody @Validated(OnCreate.class) UserDTO dto) {}

@PutMapping("/{id}")
public UserDTO update(@RequestBody @Validated(OnUpdate.class) UserDTO dto) {}`;
  codeError = `// Global validation error handler
@RestControllerAdvice
public class ValidationHandler {
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> handleValidation(
            MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getFieldErrors().forEach(e ->
            errors.put(e.getField(), e.getDefaultMessage()));
        return ResponseEntity.badRequest().body(errors);
    }
}

// Response: { "name": "Name is required", "email": "Invalid email" }`;
  static \u0275fac = function SbValidationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SbValidationComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SbValidationComponent, selectors: [["app-topic-sb-validation"]], decls: 36, vars: 7, consts: [["title", "Validation", "subtitle", "Validate input declaratively. Bean Validation, custom validators, groups, and cross-field validation.", "badge", "SPRING BOOT", "gradient", "linear-gradient(135deg, #4338ca, #818cf8)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-indigo", 3, "size"], [1, "prose"], [3, "code"], ["name", "code", "css", "icon-purple", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"]], template: function SbValidationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Bean Validation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7, "Spring Boot integrates ");
      \u0275\u0275elementStart(8, "strong");
      \u0275\u0275text(9, "Jakarta Bean Validation");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " (Hibernate Validator). Annotate fields, use ");
      \u0275\u0275elementStart(11, "code");
      \u0275\u0275text(12, "@Valid");
      \u0275\u0275elementEnd();
      \u0275\u0275text(13, ", and Spring rejects invalid input automatically.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(14, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "section", 1)(16, "h2", 2);
      \u0275\u0275element(17, "app-icon", 6);
      \u0275\u0275text(18, " Patterns");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 7)(20, "div", 8)(21, "h3", 9);
      \u0275\u0275text(22, "Common Annotations");
      \u0275\u0275elementEnd();
      \u0275\u0275element(23, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 8)(25, "h3", 9);
      \u0275\u0275text(26, "Custom Validator");
      \u0275\u0275elementEnd();
      \u0275\u0275element(27, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 8)(29, "h3", 9);
      \u0275\u0275text(30, "Validation Groups");
      \u0275\u0275elementEnd();
      \u0275\u0275element(31, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 8)(33, "h3", 9);
      \u0275\u0275text(34, "Error Response");
      \u0275\u0275elementEnd();
      \u0275\u0275element(35, "app-code-block", 5);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(11);
      \u0275\u0275property("code", ctx.codeIntro);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(6);
      \u0275\u0275property("code", ctx.codeAnnotations);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeCustom);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeGroups);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeError);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ['\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.icon-purple[_ngcontent-%COMP%] {\n  color: #7c3aed;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #4f46e5;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=sb-validation.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SbValidationComponent, [{
    type: Component,
    args: [{ selector: "app-topic-sb-validation", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout title="Validation" subtitle="Validate input declaratively. Bean Validation, custom validators, groups, and cross-field validation." badge="SPRING BOOT" gradient="linear-gradient(135deg, #4338ca, #818cf8)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-indigo" /> Bean Validation</h2>
        <div class="prose">
          <p>Spring Boot integrates <strong>Jakarta Bean Validation</strong> (Hibernate Validator). Annotate fields, use <code>&#64;Valid</code>, and Spring rejects invalid input automatically.</p>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-purple" /> Patterns</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Common Annotations</h3><app-code-block [code]="codeAnnotations" /></div>
          <div class="op-card"><h3 class="op-title">Custom Validator</h3><app-code-block [code]="codeCustom" /></div>
          <div class="op-card"><h3 class="op-title">Validation Groups</h3><app-code-block [code]="codeGroups" /></div>
          <div class="op-card"><h3 class="op-title">Error Response</h3><app-code-block [code]="codeError" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ['/* angular:styles/component:css;a64b427f55f03c5a8da9507020678687928b97d2e2c8c8a4612633898e9eda18;/Users/sathishkumarramalingam/projects/JavaIQ/.claude/worktrees/goofy-haibt/src/app/features/tutorials/topics/sb-validation.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.icon-purple {\n  color: #7c3aed;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.prose code {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #4f46e5;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=sb-validation.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SbValidationComponent, { className: "SbValidationComponent", filePath: "src/app/features/tutorials/topics/sb-validation.component.ts", lineNumber: 36 });
})();
export {
  SbValidationComponent
};
//# sourceMappingURL=chunk-XM5HOYHE.js.map
