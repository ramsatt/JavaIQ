import{a as d,b as m}from"./chunk-AMVNOPTI.js";import{a as c}from"./chunk-SI5PESLS.js";import{$a as n,Ja as l,ab as o,bb as e,cb as r,ub as t,ya as a}from"./chunk-WGYJYFZL.js";import"./chunk-NWJ5J3BN.js";var g=class s{codeIntro=`// The base class defines the FLOW (template)
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

// You just fill in the specifics!`;static \u0275fac=function(p){return new(p||s)};static \u0275cmp=l({type:s,selectors:[["app-topic-dp-template"]],decls:33,vars:7,consts:[["title","Template Method","subtitle","Define algorithm skeleton. Hook methods, abstract steps, and framework usage in Spring and JPA.","badge","DESIGN PATTERNS","gradient","linear-gradient(135deg, #b45309, #fbbf24)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-amber",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(p,i){p&1&&(o(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),r(3,"app-icon",3),t(4," Template Method"),e(),o(5,"div",4)(6,"p"),t(7,"The "),o(8,"strong"),t(9,"Template Method"),e(),t(10," defines the skeleton of an algorithm in a base class, letting subclasses override specific steps."),e(),r(11,"app-code-block",5),e()(),o(12,"section",1)(13,"h2",2),r(14,"app-icon",6),t(15," Examples"),e(),o(16,"div",7)(17,"div",8)(18,"h3",9),t(19,"Classic"),e(),r(20,"app-code-block",5),e(),o(21,"div",8)(22,"h3",9),t(23,"With Hooks"),e(),r(24,"app-code-block",5),e(),o(25,"div",8)(26,"h3",9),t(27,"Functional"),e(),r(28,"app-code-block",5),e(),o(29,"div",8)(30,"h3",9),t(31,"Spring Usage"),e(),r(32,"app-code-block",5),e()()()()),p&2&&(a(3),n("size",28),a(8),n("code",i.codeIntro),a(3),n("size",28),a(6),n("code",i.codeClassic),a(4),n("code",i.codeHook),a(4),n("code",i.codeFunctional),a(4),n("code",i.codeSpring))},dependencies:[c,d,m],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-amber[_ngcontent-%COMP%]{color:#d97706}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{g as DpTemplateComponent};
