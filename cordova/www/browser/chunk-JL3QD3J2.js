import{a as p,b as c,c as m}from"./chunk-5NK5W44O.js";import{Pa as i,Tb as t,ab as s,sb as o,tb as n,ub as e,vb as a}from"./chunk-WSUICUG6.js";import"./chunk-NWJ5J3BN.js";var u=class d{codeIntro=`public record CreateUserDTO(
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
}`;codeAnnotations=`// String
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
List<@Valid AddressDTO> addresses;`;codeCustom=`// 1. Define annotation
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
public record CreateUserDTO(@UniqueEmail String email) {}`;codeGroups=`// Define marker interfaces
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
public UserDTO update(@RequestBody @Validated(OnUpdate.class) UserDTO dto) {}`;codeError=`// Global validation error handler
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

// Response: { "name": "Name is required", "email": "Invalid email" }`;static \u0275fac=function(l){return new(l||d)};static \u0275cmp=s({type:d,selectors:[["app-topic-sb-validation"]],decls:36,vars:7,consts:[["title","Validation","subtitle","Validate input declaratively. Bean Validation, custom validators, groups, and cross-field validation.","badge","SPRING BOOT","gradient","linear-gradient(135deg, #4338ca, #818cf8)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-indigo",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-purple",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(l,r){l&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),a(3,"app-icon",3),t(4," Bean Validation"),e(),n(5,"div",4)(6,"p"),t(7,"Spring Boot integrates "),n(8,"strong"),t(9,"Jakarta Bean Validation"),e(),t(10," (Hibernate Validator). Annotate fields, use "),n(11,"code"),t(12,"@Valid"),e(),t(13,", and Spring rejects invalid input automatically."),e(),a(14,"app-code-block",5),e()(),n(15,"section",1)(16,"h2",2),a(17,"app-icon",6),t(18," Patterns"),e(),n(19,"div",7)(20,"div",8)(21,"h3",9),t(22,"Common Annotations"),e(),a(23,"app-code-block",5),e(),n(24,"div",8)(25,"h3",9),t(26,"Custom Validator"),e(),a(27,"app-code-block",5),e(),n(28,"div",8)(29,"h3",9),t(30,"Validation Groups"),e(),a(31,"app-code-block",5),e(),n(32,"div",8)(33,"h3",9),t(34,"Error Response"),e(),a(35,"app-code-block",5),e()()()()),l&2&&(i(3),o("size",28),i(11),o("code",r.codeIntro),i(3),o("size",28),i(6),o("code",r.codeAnnotations),i(4),o("code",r.codeCustom),i(4),o("code",r.codeGroups),i(4),o("code",r.codeError))},dependencies:[p,c,m],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.icon-purple[_ngcontent-%COMP%]{color:#7c3aed}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f1f5f9;padding:2px 7px;border-radius:5px;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#4f46e5}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{u as SbValidationComponent};
