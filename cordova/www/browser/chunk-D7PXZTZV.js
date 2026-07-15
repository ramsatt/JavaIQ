import{a as c,b as u,c as s}from"./chunk-IN5CYMS5.js";import"./chunk-IS4X7JQG.js";import"./chunk-7SFQX2NP.js";import"./chunk-JTAKQG6P.js";import{P as n,S as p,ba as o,ca as t,da as e,ea as r,wa as i}from"./chunk-UO6CZCBJ.js";import"./chunk-JKY3FJOK.js";import"./chunk-36LMHX4H.js";import"./chunk-QSPX3XV4.js";import"./chunk-CFQFX75D.js";import"./chunk-5AR3GM6G.js";import"./chunk-DGLFGWVP.js";import"./chunk-OQOWVL3R.js";import"./chunk-VSDHJBUA.js";import"./chunk-4WFVMWDK.js";import"./chunk-M2X7KQLB.js";import"./chunk-DVVH2KKN.js";import"./chunk-NV3QH4JK.js";import"./chunk-2DGDOVBR.js";import"./chunk-OZYWYLNK.js";import"./chunk-42C7ZIID.js";import"./chunk-NWJ5J3BN.js";var m=class l{codeIntro=`// \u274C Telescoping constructors
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
Order o = OrderBuilder.create().product("Phone").quantity(2).build();`;static \u0275fac=function(d){return new(d||l)};static \u0275cmp=p({type:l,selectors:[["app-topic-dp-builder"]],decls:35,vars:7,consts:[["title","Builder","subtitle","Step-by-step object construction. Fluent API, immutable objects, and Lombok @Builder.","badge","DESIGN PATTERNS","gradient","linear-gradient(135deg, #b45309, #fbbf24)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-amber",3,"size"],[1,"topic-hero-container"],["src","/assets/images/topics/dp-builder.png","alt","Builder Pattern Visualized",1,"topic-hero-image"],[1,"prose"],[3,"code"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(d,a){d&1&&(t(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),r(3,"app-icon",3),i(4," Builder"),e(),t(5,"div",4),r(6,"img",5),e(),t(7,"div",6)(8,"p"),i(9,"The "),t(10,"strong"),i(11,"Builder"),e(),i(12," pattern constructs complex objects step by step with a fluent API. Avoids telescoping constructors."),e(),r(13,"app-code-block",7),e()(),t(14,"section",1)(15,"h2",2),r(16,"app-icon",8),i(17," Patterns"),e(),t(18,"div",9)(19,"div",10)(20,"h3",11),i(21,"Classic Builder"),e(),r(22,"app-code-block",7),e(),t(23,"div",10)(24,"h3",11),i(25,"Record Builder"),e(),r(26,"app-code-block",7),e(),t(27,"div",10)(28,"h3",11),i(29,"Lombok"),e(),r(30,"app-code-block",7),e(),t(31,"div",10)(32,"h3",11),i(33,"Step Builder"),e(),r(34,"app-code-block",7),e()()()()),d&2&&(n(3),o("size",28),n(10),o("code",a.codeIntro),n(3),o("size",28),n(6),o("code",a.codeClassic),n(4),o("code",a.codeRecord),n(4),o("code",a.codeLombok),n(4),o("code",a.codeStep))},dependencies:[c,u,s],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.topic-hero-container[_ngcontent-%COMP%]{text-align:center;margin:24px 0}.topic-hero-image[_ngcontent-%COMP%]{width:100%;max-width:650px;height:auto;border-radius:12px;box-shadow:0 8px 24px #0000001f;border:1px solid #e2e8f0}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-amber[_ngcontent-%COMP%]{color:#d97706}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{m as DpBuilderComponent};
