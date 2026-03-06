import{a as c,b as u,c as s}from"./chunk-5NK5W44O.js";import{Pa as r,Tb as t,ab as p,sb as n,tb as i,ub as e,vb as o}from"./chunk-WSUICUG6.js";import"./chunk-NWJ5J3BN.js";var m=class l{codeIntro=`// \u274C Telescoping constructors
new User("John", "Doe", 30, "john@mail.com", "NYC", true, false);
// What does 'true' and 'false' mean?

// \u2705 Builder pattern
User user = User.builder()
    .firstName("John").lastName("Doe")
    .age(30).email("john@mail.com")
    .city("NYC").verified(true)
    .build();`;codeClassic=`public class HttpRequest {
    private final String url;
    private final String method;
    private final Map<String, String> headers;
    private final String body;

    private HttpRequest(Builder b) {
        this.url = b.url; this.method = b.method;
        this.headers = Map.copyOf(b.headers); this.body = b.body;
    }

    public static class Builder {
        private final String url;                     // required
        private String method = "GET";                // default
        private Map<String, String> headers = new HashMap<>();
        private String body;

        public Builder(String url) { this.url = url; }
        public Builder method(String m) { method = m; return this; }
        public Builder header(String k, String v) { headers.put(k, v); return this; }
        public Builder body(String b) { body = b; return this; }
        public HttpRequest build() { return new HttpRequest(this); }
    }
}`;codeRecord=`// Java 16+ records with builder
public record UserDTO(String name, String email, int age) {
    public static Builder builder() { return new Builder(); }

    public static class Builder {
        private String name, email;
        private int age;
        public Builder name(String n) { name = n; return this; }
        public Builder email(String e) { email = e; return this; }
        public Builder age(int a) { age = a; return this; }
        public UserDTO build() { return new UserDTO(name, email, age); }
    }
}

UserDTO dto = UserDTO.builder()
    .name("Alice").email("alice@mail.com").age(25)
    .build();`;codeLombok=`// Lombok @Builder \u2014 zero boilerplate!
@Builder
@Value  // immutable
public class Order {
    Long id;
    String product;
    int quantity;
    @Builder.Default BigDecimal price = BigDecimal.ZERO;
    @Singular List<String> tags;  // add one at a time
}

Order order = Order.builder()
    .product("Laptop").quantity(1)
    .price(new BigDecimal("999.99"))
    .tag("electronics").tag("sale")
    .build();`;codeStep=`// Step Builder \u2014 enforces required fields at compile time
interface BuildStep { Order build(); }
interface QuantityStep { BuildStep quantity(int q); }
interface ProductStep { QuantityStep product(String p); }

public class OrderBuilder implements ProductStep, QuantityStep, BuildStep {
    private String product; private int quantity;
    public static ProductStep create() { return new OrderBuilder(); }
    public QuantityStep product(String p) { product = p; return this; }
    public BuildStep quantity(int q) { quantity = q; return this; }
    public Order build() { return new Order(product, quantity); }
}

// Must call in order:
Order o = OrderBuilder.create().product("Phone").quantity(2).build();`;static \u0275fac=function(d){return new(d||l)};static \u0275cmp=p({type:l,selectors:[["app-topic-dp-builder"]],decls:33,vars:7,consts:[["title","Builder","subtitle","Step-by-step object construction. Fluent API, immutable objects, and Lombok @Builder.","badge","DESIGN PATTERNS","gradient","linear-gradient(135deg, #b45309, #fbbf24)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-amber",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(d,a){d&1&&(i(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),o(3,"app-icon",3),t(4," Builder"),e(),i(5,"div",4)(6,"p"),t(7,"The "),i(8,"strong"),t(9,"Builder"),e(),t(10," pattern constructs complex objects step by step with a fluent API. Avoids telescoping constructors."),e(),o(11,"app-code-block",5),e()(),i(12,"section",1)(13,"h2",2),o(14,"app-icon",6),t(15," Patterns"),e(),i(16,"div",7)(17,"div",8)(18,"h3",9),t(19,"Classic Builder"),e(),o(20,"app-code-block",5),e(),i(21,"div",8)(22,"h3",9),t(23,"Record Builder"),e(),o(24,"app-code-block",5),e(),i(25,"div",8)(26,"h3",9),t(27,"Lombok"),e(),o(28,"app-code-block",5),e(),i(29,"div",8)(30,"h3",9),t(31,"Step Builder"),e(),o(32,"app-code-block",5),e()()()()),d&2&&(r(3),n("size",28),r(8),n("code",a.codeIntro),r(3),n("size",28),r(6),n("code",a.codeClassic),r(4),n("code",a.codeRecord),r(4),n("code",a.codeLombok),r(4),n("code",a.codeStep))},dependencies:[c,u,s],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-amber[_ngcontent-%COMP%]{color:#d97706}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{m as DpBuilderComponent};
