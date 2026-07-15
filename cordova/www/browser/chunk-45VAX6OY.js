import{a as s,b as l,c as m}from"./chunk-IN5CYMS5.js";import"./chunk-IS4X7JQG.js";import"./chunk-7SFQX2NP.js";import"./chunk-JTAKQG6P.js";import{P as r,S as d,ba as n,ca as o,da as e,ea as a,wa as t}from"./chunk-UO6CZCBJ.js";import"./chunk-JKY3FJOK.js";import"./chunk-36LMHX4H.js";import"./chunk-QSPX3XV4.js";import"./chunk-CFQFX75D.js";import"./chunk-5AR3GM6G.js";import"./chunk-DGLFGWVP.js";import"./chunk-OQOWVL3R.js";import"./chunk-VSDHJBUA.js";import"./chunk-4WFVMWDK.js";import"./chunk-M2X7KQLB.js";import"./chunk-DVVH2KKN.js";import"./chunk-NV3QH4JK.js";import"./chunk-2DGDOVBR.js";import"./chunk-OZYWYLNK.js";import"./chunk-42C7ZIID.js";import"./chunk-NWJ5J3BN.js";var g=class c{codeIntro=`// Coffee example:
// Base: Espresso ($2)
// + Milk ($0.50) \u2192 MilkDecorator wraps Espresso
// + Whip ($0.30) \u2192 WhipDecorator wraps MilkDecorator
// Total: $2.80

// Each decorator adds behavior WITHOUT modifying the original`;codeClassic=`interface DataSource {
    void writeData(String data);
    String readData();
}

class FileDataSource implements DataSource {
    public void writeData(String data) { /* write to file */ }
    public String readData() { return "raw data"; }
}

class EncryptionDecorator implements DataSource {
    private final DataSource wrapped;
    EncryptionDecorator(DataSource ds) { wrapped = ds; }
    public void writeData(String data) { wrapped.writeData(encrypt(data)); }
    public String readData() { return decrypt(wrapped.readData()); }
}

class CompressionDecorator implements DataSource {
    private final DataSource wrapped;
    CompressionDecorator(DataSource ds) { wrapped = ds; }
    public void writeData(String data) { wrapped.writeData(compress(data)); }
    public String readData() { return decompress(wrapped.readData()); }
}

// Compose!
DataSource ds = new CompressionDecorator(
    new EncryptionDecorator(new FileDataSource("data.txt")));`;codeIO=`// Java I/O is built on Decorator pattern!
InputStream is = new BufferedInputStream(              // buffer
    new GZIPInputStream(                               // decompress
        new FileInputStream("data.gz")));              // base

// Each wrapper adds a layer of functionality
// FileInputStream \u2192 reads bytes
// GZIPInputStream \u2192 decompresses
// BufferedInputStream \u2192 adds buffering`;codeFunctional=`// Function composition as decoration
Function<String, String> processor = Function.identity();
processor = processor
    .andThen(String::trim)
    .andThen(String::toLowerCase)
    .andThen(s -> s.replaceAll("\\\\s+", " "));

String result = processor.apply("  HELLO   WORLD  ");
// \u2192 "hello world"

// UnaryOperator composition
UnaryOperator<BigDecimal> pricing = UnaryOperator.identity();
pricing = pricing.andThen(p -> p.multiply(new BigDecimal("0.9")))  // 10% off
                 .andThen(p -> p.add(new BigDecimal("5")));        // + shipping`;codeSpring=`// Spring HandlerInterceptor (decorator for HTTP)
@Component
public class LoggingInterceptor implements HandlerInterceptor {
    public boolean preHandle(HttpServletRequest req, HttpServletResponse resp, Object h) {
        log.info("Request: {} {}", req.getMethod(), req.getRequestURI());
        return true;  // continue chain
    }
    public void afterCompletion(HttpServletRequest req, HttpServletResponse resp, Object h, Exception ex) {
        log.info("Response: {} in {}ms", resp.getStatus(), elapsed);
    }
}

// @Transactional is a decorator (wraps method with TX logic)
// @Cacheable is a decorator (wraps method with cache logic)`;static \u0275fac=function(p){return new(p||c)};static \u0275cmp=d({type:c,selectors:[["app-topic-dp-decorator"]],decls:34,vars:7,consts:[["title","Decorator","subtitle","Extend behavior dynamically. Wrapping objects, I/O streams, and Spring interceptors.","badge","DESIGN PATTERNS","gradient","linear-gradient(135deg, #6d28d9, #c084fc)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-violet",3,"size"],["src","/assets/images/topics/dp-decorator.png","alt","Decorator Pattern Visualized",1,"topic-hero-image"],[1,"prose"],[3,"code"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(p,i){p&1&&(o(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),a(3,"app-icon",3),t(4," Decorator"),e(),a(5,"img",4),o(6,"div",5)(7,"p"),t(8,"The "),o(9,"strong"),t(10,"Decorator"),e(),t(11," wraps an object to add new behavior without modifying the original class. Decorators are composable."),e(),a(12,"app-code-block",6),e()(),o(13,"section",1)(14,"h2",2),a(15,"app-icon",7),t(16," Examples"),e(),o(17,"div",8)(18,"div",9)(19,"h3",10),t(20,"Classic"),e(),a(21,"app-code-block",6),e(),o(22,"div",9)(23,"h3",10),t(24,"Java I/O"),e(),a(25,"app-code-block",6),e(),o(26,"div",9)(27,"h3",10),t(28,"Functional"),e(),a(29,"app-code-block",6),e(),o(30,"div",9)(31,"h3",10),t(32,"Spring"),e(),a(33,"app-code-block",6),e()()()()),p&2&&(r(3),n("size",28),r(9),n("code",i.codeIntro),r(3),n("size",28),r(6),n("code",i.codeClassic),r(4),n("code",i.codeIO),r(4),n("code",i.codeFunctional),r(4),n("code",i.codeSpring))},dependencies:[s,l,m],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-violet[_ngcontent-%COMP%]{color:#7c3aed}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{g as DpDecoratorComponent};
