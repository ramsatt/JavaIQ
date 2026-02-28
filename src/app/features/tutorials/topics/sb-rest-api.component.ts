import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-sb-rest-api',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
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
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-green { color: #16a34a; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; } .prose code { background: #f1f5f9; padding: 2px 7px; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #16a34a; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class SbRestApiComponent {
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
}
