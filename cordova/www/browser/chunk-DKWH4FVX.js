import{a as S,b as M,c as y}from"./chunk-FZG5ZG77.js";import{Gb as v,Hb as t,Ib as f,Ma as o,Xa as x,ka as g,kb as h,lb as C,mb as r,nb as n,ob as e,pb as c,wb as u}from"./chunk-5DVJCJ5O.js";import{a as p,b as d}from"./chunk-NWJ5J3BN.js";var _=(l,s)=>s.id;function O(l,s){if(l&1&&(n(0,"div",34)(1,"span",35),t(2),e(),n(3,"span",36),t(4),e()()),l&2){let i=s.$implicit;v(i.state),o(2),f(i.icon),o(2),f(i.text)}}var E=class l{txSteps=g([{id:1,icon:"\u{1F504}",text:"Begin Transaction",state:""},{id:2,icon:"\u{1F4B0}",text:"Debit account A: -$500",state:""},{id:3,icon:"\u{1F4B0}",text:"Credit account B: +$500",state:""},{id:4,icon:"\u2705",text:"Commit / Rollback",state:""}]);status=g("@Transactional manages commit/rollback automatically.");isAnimating=g(!1);codeIntro=`// Without Spring (boilerplate nightmare)
Connection conn = null;
try {
    conn = dataSource.getConnection();
    PreparedStatement ps = conn.prepareStatement(sql);
    ResultSet rs = ps.executeQuery();
    // ... process results
} catch (SQLException e) { ... }
finally { if (conn != null) conn.close(); }

// With Spring JdbcTemplate (clean!)
List<User> users = jdbcTemplate.query(
    "SELECT * FROM users WHERE age > ?",
    userRowMapper, 18);`;codeJdbc=`@Repository
public class UserRepository {
    private final JdbcTemplate jdbc;

    // Query for single object
    public User findById(Long id) {
        return jdbc.queryForObject(
            "SELECT * FROM users WHERE id = ?",
            userMapper, id);
    }

    // Insert
    public void save(User user) {
        jdbc.update(
            "INSERT INTO users(name, email) VALUES(?,?)",
            user.getName(), user.getEmail());
    }

    // Batch
    public void saveAll(List<User> users) {
        jdbc.batchUpdate("INSERT INTO users...",
            new BatchPreparedStatementSetter() { ... });
    }
}`;codeTx=`@Service
public class TransferService {

    @Transactional // AOP manages transaction
    public void transfer(Long from, Long to, BigDecimal amount) {
        accountRepo.debit(from, amount);
        accountRepo.credit(to, amount);
        // If credit() throws \u2192 auto rollback!
    }

    @Transactional(readOnly = true)
    public Account getBalance(Long id) {
        return accountRepo.findById(id);
    }

    @Transactional(
        propagation = Propagation.REQUIRES_NEW,
        isolation = Isolation.SERIALIZABLE,
        timeout = 30)
    public void criticalOp() { }
}`;codeDs=`# application.properties
spring.datasource.url=jdbc:mysql://localhost/mydb
spring.datasource.username=root
spring.datasource.password=secret
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# HikariCP pool settings
spring.datasource.hikari.maximum-pool-size=10
spring.datasource.hikari.minimum-idle=5
spring.datasource.hikari.connection-timeout=30000`;codeMapper=`// RowMapper \u2014 map each row to an object
private final RowMapper<User> userMapper =
    (rs, rowNum) -> new User(
        rs.getLong("id"),
        rs.getString("name"),
        rs.getString("email"),
        rs.getInt("age")
    );

// Usage
List<User> users = jdbcTemplate.query(
    "SELECT * FROM users", userMapper);

// BeanPropertyRowMapper (convention-based)
RowMapper<User> autoMapper =
    BeanPropertyRowMapper.newInstance(User.class);`;sleep(s){return new Promise(i=>setTimeout(i,s))}async runSuccess(){if(this.isAnimating())return;this.isAnimating.set(!0);let s=["Opening transaction...","Debit $500 from Account A...","Credit $500 to Account B...","All operations succeeded \u2014 COMMIT! \u2705"];for(let i=0;i<4;i++)this.txSteps.update(a=>a.map((m,b)=>b===i?d(p({},m),{state:"active"}):b<i?d(p({},m),{state:"done"}):m)),this.status.set(s[i]),await this.sleep(900);this.txSteps.update(i=>i.map(a=>d(p({},a),{state:"done"}))),this.isAnimating.set(!1)}async runRollback(){this.isAnimating()||(this.isAnimating.set(!0),this.txSteps.update(s=>s.map((i,a)=>a===0?d(p({},i),{state:"active"}):i)),this.status.set("Opening transaction..."),await this.sleep(800),this.txSteps.update(s=>s.map((i,a)=>a===0?d(p({},i),{state:"done"}):a===1?d(p({},i),{state:"active"}):i)),this.status.set("Debit $500 from Account A..."),await this.sleep(800),this.txSteps.update(s=>s.map((i,a)=>a<2?d(p({},i),{state:"done"}):a===2?d(p({},i),{state:"error",text:"\u274C Credit failed! Insufficient funds"}):i)),this.status.set("Exception thrown! Starting rollback..."),await this.sleep(1e3),this.txSteps.update(s=>s.map((i,a)=>a===3?d(p({},i),{state:"error",text:"\u21A9\uFE0F ROLLBACK \u2014 all changes reversed"}):i)),this.status.set("Transaction rolled back. Account A debit reversed. Data consistent! \u2705"),this.isAnimating.set(!1))}resetDemo(){this.txSteps.set([{id:1,icon:"\u{1F504}",text:"Begin Transaction",state:""},{id:2,icon:"\u{1F4B0}",text:"Debit account A: -$500",state:""},{id:3,icon:"\u{1F4B0}",text:"Credit account B: +$500",state:""},{id:4,icon:"\u2705",text:"Commit / Rollback",state:""}]),this.status.set("@Transactional manages commit/rollback automatically."),this.isAnimating.set(!1)}static \u0275fac=function(i){return new(i||l)};static \u0275cmp=x({type:l,selectors:[["app-topic-spring-data"]],decls:110,vars:20,consts:[["title","Spring Data Access","subtitle","Simplify database operations. Master JdbcTemplate, transactions, DataSource config, and Spring's data access exception hierarchy.","badge","SPRING FRAMEWORK","gradient","linear-gradient(135deg, #4338ca, #818cf8)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-indigo",3,"size"],[1,"prose"],[3,"code"],[1,"viz-card"],[1,"viz-title"],["name","play","css","icon-indigo",3,"size"],[1,"tx-demo"],[1,"tx-step",3,"class"],[1,"viz-status"],[1,"viz-controls"],[1,"btn","btn-indigo",3,"click","disabled"],["name","play",3,"size"],[1,"btn","btn-red",3,"click","disabled"],[1,"btn","btn-gray",3,"click","disabled"],["name","refresh-cw",3,"size"],["name","code","css","icon-purple",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"],["name","arrow-right","css","icon-purple",3,"size"],[1,"op-desc"],["name","briefcase","css","icon-indigo",3,"size"],[1,"use-cases"],[1,"use-case","indigo"],[1,"use-num","indigo-bg"],[1,"use-title"],[1,"use-desc"],[1,"use-case","blue"],[1,"use-num","blue-bg"],[1,"use-case","purple"],[1,"use-num","purple-bg"],[1,"tx-step"],[1,"tx-icon"],[1,"tx-text"]],template:function(i,a){i&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),c(3,"app-icon",3),t(4," Data Access in Spring"),e(),n(5,"div",4)(6,"p"),t(7,"Spring provides a unified data access abstraction that simplifies working with JDBC, JPA, and other persistence technologies."),e(),n(8,"ul")(9,"li")(10,"strong"),t(11,"JdbcTemplate:"),e(),t(12," Eliminates boilerplate JDBC code (connections, statements, result sets)."),e(),n(13,"li")(14,"strong"),t(15,"@Transactional:"),e(),t(16," Declarative transaction management \u2014 commit or rollback automatically."),e(),n(17,"li")(18,"strong"),t(19,"DataAccessException:"),e(),t(20," Unified exception hierarchy \u2014 no more catching vendor-specific SQLExceptions."),e()(),c(21,"app-code-block",5),e()(),n(22,"section",1)(23,"div",6)(24,"h3",7),c(25,"app-icon",8),t(26," Transaction Flow"),e(),n(27,"div",9),h(28,O,5,4,"div",10,_),e(),n(30,"div",11),t(31),e(),n(32,"div",12)(33,"button",13),u("click",function(){return a.runSuccess()}),c(34,"app-icon",14),t(35," Commit Flow"),e(),n(36,"button",15),u("click",function(){return a.runRollback()}),c(37,"app-icon",14),t(38," Rollback Flow"),e(),n(39,"button",16),u("click",function(){return a.resetDemo()}),c(40,"app-icon",17),t(41," Reset"),e()()()(),n(42,"section",1)(43,"h2",2),c(44,"app-icon",18),t(45," Patterns"),e(),n(46,"div",19)(47,"div",20)(48,"h3",21),c(49,"app-icon",22),t(50," JdbcTemplate"),e(),n(51,"p",23),t(52,"Query, update, and batch operations without boilerplate."),e(),c(53,"app-code-block",5),e(),n(54,"div",20)(55,"h3",21),c(56,"app-icon",22),t(57," Transactions"),e(),n(58,"p",23),t(59,"Declarative transactions with @Transactional."),e(),c(60,"app-code-block",5),e(),n(61,"div",20)(62,"h3",21),c(63,"app-icon",22),t(64," DataSource Config"),e(),n(65,"p",23),t(66,"Configure connection pools with HikariCP."),e(),c(67,"app-code-block",5),e(),n(68,"div",20)(69,"h3",21),c(70,"app-icon",22),t(71," RowMapper"),e(),n(72,"p",23),t(73,"Map ResultSet rows to domain objects."),e(),c(74,"app-code-block",5),e()()(),n(75,"section",1)(76,"h2",2),c(77,"app-icon",24),t(78," Real-Time Use Cases"),e(),n(79,"div",25)(80,"div",26)(81,"div",27),t(82,"1"),e(),n(83,"div")(84,"h4",28),t(85,"Banking Transactions"),e(),n(86,"p",29)(87,"code"),t(88,"@Transactional"),e(),t(89," ensures debit + credit either BOTH succeed or BOTH roll back \u2014 no partial state ever."),e()()(),n(90,"div",30)(91,"div",31),t(92,"2"),e(),n(93,"div")(94,"h4",28),t(95,"Batch Data Import"),e(),n(96,"p",29)(97,"code"),t(98,"JdbcTemplate.batchUpdate()"),e(),t(99," processes thousands of CSV rows in a single transaction with prepared statements."),e()()(),n(100,"div",32)(101,"div",33),t(102,"3"),e(),n(103,"div")(104,"h4",28),t(105,"Multi-DB Routing"),e(),n(106,"p",29)(107,"code"),t(108,"AbstractRoutingDataSource"),e(),t(109," routes queries to read replicas for SELECTs and primary for writes \u2014 transparent to services."),e()()()()()()),i&2&&(o(3),r("size",28),o(18),r("code",a.codeIntro),o(4),r("size",22),o(3),C(a.txSteps()),o(3),f(a.status()),o(2),r("disabled",a.isAnimating()),o(),r("size",16),o(2),r("disabled",a.isAnimating()),o(),r("size",16),o(2),r("disabled",a.isAnimating()),o(),r("size",16),o(4),r("size",28),o(5),r("size",18),o(4),r("code",a.codeJdbc),o(3),r("size",18),o(4),r("code",a.codeTx),o(3),r("size",18),o(4),r("code",a.codeDs),o(3),r("size",18),o(4),r("code",a.codeMapper),o(3),r("size",28))},dependencies:[S,M,y],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.icon-purple[_ngcontent-%COMP%]{color:#7c3aed}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:14px 0;padding-left:22px;list-style:disc}.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:8px}.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#0f172a;font-weight:700}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f1f5f9;padding:2px 7px;border-radius:5px;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#4f46e5}.viz-card[_ngcontent-%COMP%]{background:#fff;border-radius:18px;border:1px solid #e2e8f0;box-shadow:0 4px 16px #0000000d;padding:28px 24px}.viz-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;font-size:1.15rem;font-weight:700;color:#0f172a;margin:0 0 24px}.tx-demo[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:6px;margin-bottom:20px}.tx-step[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:10px 14px;border-radius:10px;border:2px solid #e2e8f0;transition:all .3s}.tx-step.active[_ngcontent-%COMP%]{border-color:#4f46e5;background:#eef2ff}.tx-step.done[_ngcontent-%COMP%]{border-color:#16a34a;background:#f0fdf4}.tx-step.error[_ngcontent-%COMP%]{border-color:#dc2626;background:#fef2f2}.tx-icon[_ngcontent-%COMP%]{font-size:1rem}.tx-text[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:.68rem;color:#0f172a}.viz-status[_ngcontent-%COMP%]{background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:12px 16px;text-align:center;font-family:JetBrains Mono,monospace;font-size:.78rem;color:#334155;margin-bottom:20px}.viz-controls[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;gap:10px}.btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:7px;padding:10px 18px;border-radius:10px;font-size:.78rem;font-weight:600;border:none;cursor:pointer;transition:all .2s}.btn[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:not-allowed}.btn-indigo[_ngcontent-%COMP%]{background:#4f46e5;color:#fff}.btn-red[_ngcontent-%COMP%]{background:#dc2626;color:#fff}.btn-gray[_ngcontent-%COMP%]{background:#e2e8f0;color:#334155}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-card[_ngcontent-%COMP%]:hover{box-shadow:0 4px 12px #0000000f}.op-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}.op-desc[_ngcontent-%COMP%]{font-size:.78rem;color:#64748b;line-height:1.55;margin:0}.use-cases[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.use-case[_ngcontent-%COMP%]{display:flex;gap:16px;padding:20px;border-radius:14px;border:1px solid}.use-case.indigo[_ngcontent-%COMP%]{background:#eef2ff;border-color:#c7d2fe}.use-case.blue[_ngcontent-%COMP%]{background:#eff6ff;border-color:#bfdbfe}.use-case.purple[_ngcontent-%COMP%]{background:#faf5ff;border-color:#d8b4fe}.use-num[_ngcontent-%COMP%]{width:34px;height:34px;min-width:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:.78rem;font-weight:800}.indigo-bg[_ngcontent-%COMP%]{background:#4f46e5}.blue-bg[_ngcontent-%COMP%]{background:#3b82f6}.purple-bg[_ngcontent-%COMP%]{background:#8b5cf6}.use-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 4px}.use-desc[_ngcontent-%COMP%]{font-size:.78rem;line-height:1.55;margin:0;color:#334155}.use-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#0000000f;padding:1px 5px;border-radius:4px;font-family:JetBrains Mono,monospace;font-size:.72rem}"],changeDetection:0})};export{E as SpringDataComponent};
