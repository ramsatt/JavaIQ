import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-sb-validation',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
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
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-indigo { color: #4f46e5; } .icon-purple { color: #7c3aed; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; } .prose code { background: #f1f5f9; padding: 2px 7px; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #4f46e5; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class SbValidationComponent {
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
}
