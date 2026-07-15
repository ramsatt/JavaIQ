import{a as c,b as d,c as m}from"./chunk-IN5CYMS5.js";import"./chunk-IS4X7JQG.js";import"./chunk-7SFQX2NP.js";import"./chunk-JTAKQG6P.js";import{P as n,S as l,ba as i,ca as o,da as e,ea as a,wa as t}from"./chunk-UO6CZCBJ.js";import"./chunk-JKY3FJOK.js";import"./chunk-36LMHX4H.js";import"./chunk-QSPX3XV4.js";import"./chunk-CFQFX75D.js";import"./chunk-5AR3GM6G.js";import"./chunk-DGLFGWVP.js";import"./chunk-OQOWVL3R.js";import"./chunk-VSDHJBUA.js";import"./chunk-4WFVMWDK.js";import"./chunk-M2X7KQLB.js";import"./chunk-DVVH2KKN.js";import"./chunk-NV3QH4JK.js";import"./chunk-2DGDOVBR.js";import"./chunk-OZYWYLNK.js";import"./chunk-42C7ZIID.js";import"./chunk-NWJ5J3BN.js";var g=class s{codeIntro=`// The base class defines the FLOW (template)
// Subclasses implement SPECIFIC STEPS
// Framework provides the skeleton, you fill in the blanks`;codeClassic=`abstract class DataMiner {
    // Template method \u2014 defines the algorithm
    public final void mine(String path) {
        openFile(path);
        String raw = extractData();
        Data data = parseData(raw);
        analyzeData(data);
        generateReport(data);
        closeFile();
    }

    abstract void openFile(String path);
    abstract String extractData();
    abstract Data parseData(String raw);

    // Default implementation (can be overridden)
    void analyzeData(Data data) { /* default analysis */ }
    void generateReport(Data data) { /* default report */ }
    abstract void closeFile();
}

class CsvMiner extends DataMiner {
    void openFile(String path) { /* open CSV */ }
    String extractData() { return csvReader.readAll(); }
    Data parseData(String raw) { return CsvParser.parse(raw); }
    void closeFile() { csvReader.close(); }
}`;codeHook=`// Hooks \u2014 optional override points
abstract class OrderProcessor {
    public final void process(Order order) {
        validate(order);
        if (shouldApplyDiscount(order))  // hook!
            applyDiscount(order);
        calculateTotal(order);
        if (shouldNotify())              // hook!
            sendNotification(order);
        save(order);
    }

    abstract void validate(Order order);
    abstract void calculateTotal(Order order);
    abstract void save(Order order);

    // Hooks (optional override)
    boolean shouldApplyDiscount(Order o) { return false; }
    void applyDiscount(Order order) { }
    boolean shouldNotify() { return true; }
    void sendNotification(Order order) { /* default email */ }
}`;codeFunctional=`// Functional template with lambdas
class QueryTemplate {
    public <T> T execute(
            Supplier<Connection> connector,
            Function<Connection, PreparedStatement> preparer,
            Function<ResultSet, T> mapper) {
        Connection conn = connector.get();
        try {
            PreparedStatement ps = preparer.apply(conn);
            ResultSet rs = ps.executeQuery();
            return mapper.apply(rs);
        } finally {
            conn.close();
        }
    }
}

// Usage
User user = template.execute(
    dataSource::getConnection,
    conn -> conn.prepareStatement("SELECT * FROM users WHERE id=?"),
    rs -> new User(rs.getString("name")));`;codeSpring=`// Spring is FULL of template methods:
// JdbcTemplate \u2014 template for JDBC
jdbcTemplate.query(
    "SELECT * FROM users WHERE age > ?",
    (rs, rowNum) -> new User(rs.getString("name"), rs.getInt("age")),
    18);

// RestTemplate \u2014 template for HTTP
User user = restTemplate.getForObject("/api/users/{id}", User.class, 1);

// JpaRepository \u2014 template for CRUD
// HttpSecurity \u2014 template for security config
// AbstractController \u2014 template for MVC

// You just fill in the specifics!`;static \u0275fac=function(p){return new(p||s)};static \u0275cmp=l({type:s,selectors:[["app-topic-dp-template"]],decls:34,vars:7,consts:[["title","Template Method","subtitle","Define algorithm skeleton. Hook methods, abstract steps, and framework usage in Spring and JPA.","badge","DESIGN PATTERNS","gradient","linear-gradient(135deg, #b45309, #fbbf24)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-amber",3,"size"],["src","/assets/images/topics/dp-template.png","alt","Template Method Pattern Visualized",1,"topic-hero-image"],[1,"prose"],[3,"code"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(p,r){p&1&&(o(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),a(3,"app-icon",3),t(4," Template Method"),e(),a(5,"img",4),o(6,"div",5)(7,"p"),t(8,"The "),o(9,"strong"),t(10,"Template Method"),e(),t(11," defines the skeleton of an algorithm in a base class, letting subclasses override specific steps."),e(),a(12,"app-code-block",6),e()(),o(13,"section",1)(14,"h2",2),a(15,"app-icon",7),t(16," Examples"),e(),o(17,"div",8)(18,"div",9)(19,"h3",10),t(20,"Classic"),e(),a(21,"app-code-block",6),e(),o(22,"div",9)(23,"h3",10),t(24,"With Hooks"),e(),a(25,"app-code-block",6),e(),o(26,"div",9)(27,"h3",10),t(28,"Functional"),e(),a(29,"app-code-block",6),e(),o(30,"div",9)(31,"h3",10),t(32,"Spring Usage"),e(),a(33,"app-code-block",6),e()()()()),p&2&&(n(3),i("size",28),n(9),i("code",r.codeIntro),n(3),i("size",28),n(6),i("code",r.codeClassic),n(4),i("code",r.codeHook),n(4),i("code",r.codeFunctional),n(4),i("code",r.codeSpring))},dependencies:[c,d,m],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-amber[_ngcontent-%COMP%]{color:#d97706}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{g as DpTemplateComponent};
