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

// src/app/features/tutorials/topics/sb-rest-api.component.ts
var SbRestApiComponent = class _SbRestApiComponent {
  codeIntro = `@RestController
@RequestMapping("/api/v1/users")
public class UserController {
    private final UserService userService;
    public UserController(UserService userService) { this.userService = userService; }

    @GetMapping
    public List<UserDTO> list() { return userService.findAll(); }

    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> get(@PathVariable Long id) {
        return userService.findById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public UserDTO create(@RequestBody @Valid CreateUserDTO dto) {
        return userService.create(dto);
    }
}`;
  codeCrud = `@PutMapping("/{id}")
public UserDTO update(@PathVariable Long id, @RequestBody @Valid UpdateUserDTO dto) {
    return userService.update(id, dto);
}

@DeleteMapping("/{id}")
@ResponseStatus(HttpStatus.NO_CONTENT)
public void delete(@PathVariable Long id) {
    userService.delete(id);
}

@PatchMapping("/{id}")
public UserDTO patch(@PathVariable Long id, @RequestBody Map<String, Object> updates) {
    return userService.partialUpdate(id, updates);
}`;
  codeDto = `// Request DTO (what client sends)
public record CreateUserDTO(
    @NotBlank String name,
    @Email String email,
    @Min(18) int age
) {}

// Response DTO (what client receives)
public record UserDTO(Long id, String name, String email, LocalDateTime createdAt) {}

// Mapping (in service)
public UserDTO toDTO(User user) {
    return new UserDTO(user.getId(), user.getName(), user.getEmail(), user.getCreatedAt());
}`;
  codePage = `@GetMapping
public Page<UserDTO> list(
    @RequestParam(defaultValue = "0") int page,
    @RequestParam(defaultValue = "20") int size,
    @RequestParam(defaultValue = "name,asc") String[] sort) {
    return userService.findAll(PageRequest.of(page, size, Sort.by(sort)));
}

// Response: { content: [...], totalPages: 5, totalElements: 100, number: 0, size: 20 }`;
  codeUpload = `@PostMapping(value = "/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
public ResponseEntity<String> upload(@RequestParam("file") MultipartFile file) {
    if (file.isEmpty()) return ResponseEntity.badRequest().body("Empty file");
    String path = storageService.store(file);
    return ResponseEntity.ok(path);
}

# Max file size config
spring.servlet.multipart.max-file-size=10MB
spring.servlet.multipart.max-request-size=50MB`;
  static \u0275fac = function SbRestApiComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SbRestApiComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SbRestApiComponent, selectors: [["app-topic-sb-rest-api"]], decls: 33, vars: 7, consts: [["title", "REST API Development", "subtitle", "Build production-grade REST APIs with Spring Boot. RequestMapping, ResponseEntity, DTOs, and HATEOAS.", "badge", "SPRING BOOT", "gradient", "linear-gradient(135deg, #166534, #4ade80)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-green", 3, "size"], [1, "prose"], [3, "code"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"]], template: function SbRestApiComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " REST in Spring Boot");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7, "Spring Boot auto-configures everything for REST: Jackson for JSON, embedded Tomcat, content negotiation. Just add ");
      \u0275\u0275elementStart(8, "code");
      \u0275\u0275text(9, "@RestController");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, ".");
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "section", 1)(13, "h2", 2);
      \u0275\u0275element(14, "app-icon", 6);
      \u0275\u0275text(15, " API Patterns");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 7)(17, "div", 8)(18, "h3", 9);
      \u0275\u0275text(19, "CRUD Controller");
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 8)(22, "h3", 9);
      \u0275\u0275text(23, "DTOs & Mapping");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 8)(26, "h3", 9);
      \u0275\u0275text(27, "Pagination & Sorting");
      \u0275\u0275elementEnd();
      \u0275\u0275element(28, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 8)(30, "h3", 9);
      \u0275\u0275text(31, "File Upload");
      \u0275\u0275elementEnd();
      \u0275\u0275element(32, "app-code-block", 5);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(8);
      \u0275\u0275property("code", ctx.codeIntro);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(6);
      \u0275\u0275property("code", ctx.codeCrud);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeDto);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codePage);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeUpload);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ['\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-green[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #16a34a;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=sb-rest-api.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SbRestApiComponent, [{
    type: Component,
    args: [{ selector: "app-topic-sb-rest-api", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout title="REST API Development" subtitle="Build production-grade REST APIs with Spring Boot. RequestMapping, ResponseEntity, DTOs, and HATEOAS." badge="SPRING BOOT" gradient="linear-gradient(135deg, #166534, #4ade80)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-green" /> REST in Spring Boot</h2>
        <div class="prose">
          <p>Spring Boot auto-configures everything for REST: Jackson for JSON, embedded Tomcat, content negotiation. Just add <code>&#64;RestController</code>.</p>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> API Patterns</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">CRUD Controller</h3><app-code-block [code]="codeCrud" /></div>
          <div class="op-card"><h3 class="op-title">DTOs & Mapping</h3><app-code-block [code]="codeDto" /></div>
          <div class="op-card"><h3 class="op-title">Pagination & Sorting</h3><app-code-block [code]="codePage" /></div>
          <div class="op-card"><h3 class="op-title">File Upload</h3><app-code-block [code]="codeUpload" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ['/* angular:styles/component:css;484edc79ac1c6d2205c2811e386104e5a110b9556f74954fe277db6674395fec;/Users/sathishkumarramalingam/projects/JavaIQ/.claude/worktrees/goofy-haibt/src/app/features/tutorials/topics/sb-rest-api.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-green {\n  color: #16a34a;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.prose code {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #16a34a;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=sb-rest-api.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SbRestApiComponent, { className: "SbRestApiComponent", filePath: "src/app/features/tutorials/topics/sb-rest-api.component.ts", lineNumber: 36 });
})();
export {
  SbRestApiComponent
};
//# sourceMappingURL=chunk-N4LUDVMW.js.map
