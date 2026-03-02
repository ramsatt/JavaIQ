import{a as l,b as c,c as u}from"./chunk-FZG5ZG77.js";import{Hb as t,Ma as n,Xa as d,mb as o,nb as i,ob as e,pb as r}from"./chunk-5DVJCJ5O.js";import"./chunk-NWJ5J3BN.js";var g=class s{codeIntro=`@RestController
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
}`;codeCrud=`@PutMapping("/{id}")
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
}`;codeDto=`// Request DTO (what client sends)
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
}`;codePage=`@GetMapping
public Page<UserDTO> list(
    @RequestParam(defaultValue = "0") int page,
    @RequestParam(defaultValue = "20") int size,
    @RequestParam(defaultValue = "name,asc") String[] sort) {
    return userService.findAll(PageRequest.of(page, size, Sort.by(sort)));
}

// Response: { content: [...], totalPages: 5, totalElements: 100, number: 0, size: 20 }`;codeUpload=`@PostMapping(value = "/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
public ResponseEntity<String> upload(@RequestParam("file") MultipartFile file) {
    if (file.isEmpty()) return ResponseEntity.badRequest().body("Empty file");
    String path = storageService.store(file);
    return ResponseEntity.ok(path);
}

# Max file size config
spring.servlet.multipart.max-file-size=10MB
spring.servlet.multipart.max-request-size=50MB`;static \u0275fac=function(p){return new(p||s)};static \u0275cmp=d({type:s,selectors:[["app-topic-sb-rest-api"]],decls:33,vars:7,consts:[["title","REST API Development","subtitle","Build production-grade REST APIs with Spring Boot. RequestMapping, ResponseEntity, DTOs, and HATEOAS.","badge","SPRING BOOT","gradient","linear-gradient(135deg, #166534, #4ade80)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-green",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(p,a){p&1&&(i(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),r(3,"app-icon",3),t(4," REST in Spring Boot"),e(),i(5,"div",4)(6,"p"),t(7,"Spring Boot auto-configures everything for REST: Jackson for JSON, embedded Tomcat, content negotiation. Just add "),i(8,"code"),t(9,"@RestController"),e(),t(10,"."),e(),r(11,"app-code-block",5),e()(),i(12,"section",1)(13,"h2",2),r(14,"app-icon",6),t(15," API Patterns"),e(),i(16,"div",7)(17,"div",8)(18,"h3",9),t(19,"CRUD Controller"),e(),r(20,"app-code-block",5),e(),i(21,"div",8)(22,"h3",9),t(23,"DTOs & Mapping"),e(),r(24,"app-code-block",5),e(),i(25,"div",8)(26,"h3",9),t(27,"Pagination & Sorting"),e(),r(28,"app-code-block",5),e(),i(29,"div",8)(30,"h3",9),t(31,"File Upload"),e(),r(32,"app-code-block",5),e()()()()),p&2&&(n(3),o("size",28),n(8),o("code",a.codeIntro),n(3),o("size",28),n(6),o("code",a.codeCrud),n(4),o("code",a.codeDto),n(4),o("code",a.codePage),n(4),o("code",a.codeUpload))},dependencies:[l,c,u],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-green[_ngcontent-%COMP%]{color:#16a34a}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f1f5f9;padding:2px 7px;border-radius:5px;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#16a34a}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{g as SbRestApiComponent};
