import {
  CodeBlockComponent,
  TutorialLayoutComponent
} from "./chunk-ACGKXV3L.js";
import {
  IconComponent
} from "./chunk-GCMLYE3M.js";
import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-6OY2Y3BE.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/spring-data.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function SpringDataComponent_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "span", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 36);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r1 = ctx.$implicit;
    \u0275\u0275classMap(step_r1.state);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r1.text);
  }
}
var SpringDataComponent = class _SpringDataComponent {
  txSteps = signal([
    { id: 1, icon: "\u{1F504}", text: "Begin Transaction", state: "" },
    { id: 2, icon: "\u{1F4B0}", text: "Debit account A: -$500", state: "" },
    { id: 3, icon: "\u{1F4B0}", text: "Credit account B: +$500", state: "" },
    { id: 4, icon: "\u2705", text: "Commit / Rollback", state: "" }
  ], ...ngDevMode ? [{ debugName: "txSteps" }] : []);
  status = signal("@Transactional manages commit/rollback automatically.", ...ngDevMode ? [{ debugName: "status" }] : []);
  isAnimating = signal(false, ...ngDevMode ? [{ debugName: "isAnimating" }] : []);
  codeIntro = `// Without Spring (boilerplate nightmare)
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
    userRowMapper, 18);`;
  codeJdbc = `@Repository
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
}`;
  codeTx = `@Service
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
}`;
  codeDs = `# application.properties
spring.datasource.url=jdbc:mysql://localhost/mydb
spring.datasource.username=root
spring.datasource.password=secret
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# HikariCP pool settings
spring.datasource.hikari.maximum-pool-size=10
spring.datasource.hikari.minimum-idle=5
spring.datasource.hikari.connection-timeout=30000`;
  codeMapper = `// RowMapper \u2014 map each row to an object
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
    BeanPropertyRowMapper.newInstance(User.class);`;
  sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }
  async runSuccess() {
    if (this.isAnimating())
      return;
    this.isAnimating.set(true);
    const labels = ["Opening transaction...", "Debit $500 from Account A...", "Credit $500 to Account B...", "All operations succeeded \u2014 COMMIT! \u2705"];
    for (let i = 0; i < 4; i++) {
      this.txSteps.update((s) => s.map((st, j) => j === i ? __spreadProps(__spreadValues({}, st), { state: "active" }) : j < i ? __spreadProps(__spreadValues({}, st), { state: "done" }) : st));
      this.status.set(labels[i]);
      await this.sleep(900);
    }
    this.txSteps.update((s) => s.map((st) => __spreadProps(__spreadValues({}, st), { state: "done" })));
    this.isAnimating.set(false);
  }
  async runRollback() {
    if (this.isAnimating())
      return;
    this.isAnimating.set(true);
    this.txSteps.update((s) => s.map((st, j) => j === 0 ? __spreadProps(__spreadValues({}, st), { state: "active" }) : st));
    this.status.set("Opening transaction...");
    await this.sleep(800);
    this.txSteps.update((s) => s.map((st, j) => j === 0 ? __spreadProps(__spreadValues({}, st), { state: "done" }) : j === 1 ? __spreadProps(__spreadValues({}, st), { state: "active" }) : st));
    this.status.set("Debit $500 from Account A...");
    await this.sleep(800);
    this.txSteps.update((s) => s.map((st, j) => j < 2 ? __spreadProps(__spreadValues({}, st), { state: "done" }) : j === 2 ? __spreadProps(__spreadValues({}, st), { state: "error", text: "\u274C Credit failed! Insufficient funds" }) : st));
    this.status.set("Exception thrown! Starting rollback...");
    await this.sleep(1e3);
    this.txSteps.update((s) => s.map((st, j) => j === 3 ? __spreadProps(__spreadValues({}, st), { state: "error", text: "\u21A9\uFE0F ROLLBACK \u2014 all changes reversed" }) : st));
    this.status.set("Transaction rolled back. Account A debit reversed. Data consistent! \u2705");
    this.isAnimating.set(false);
  }
  resetDemo() {
    this.txSteps.set([{ id: 1, icon: "\u{1F504}", text: "Begin Transaction", state: "" }, { id: 2, icon: "\u{1F4B0}", text: "Debit account A: -$500", state: "" }, { id: 3, icon: "\u{1F4B0}", text: "Credit account B: +$500", state: "" }, { id: 4, icon: "\u2705", text: "Commit / Rollback", state: "" }]);
    this.status.set("@Transactional manages commit/rollback automatically.");
    this.isAnimating.set(false);
  }
  static \u0275fac = function SpringDataComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SpringDataComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SpringDataComponent, selectors: [["app-topic-spring-data"]], decls: 110, vars: 20, consts: [["title", "Spring Data Access", "subtitle", "Simplify database operations. Master JdbcTemplate, transactions, DataSource config, and Spring's data access exception hierarchy.", "badge", "SPRING FRAMEWORK", "gradient", "linear-gradient(135deg, #4338ca, #818cf8)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-indigo", 3, "size"], [1, "prose"], [3, "code"], [1, "viz-card"], [1, "viz-title"], ["name", "play", "css", "icon-indigo", 3, "size"], [1, "tx-demo"], [1, "tx-step", 3, "class"], [1, "viz-status"], [1, "viz-controls"], [1, "btn", "btn-indigo", 3, "click", "disabled"], ["name", "play", 3, "size"], [1, "btn", "btn-red", 3, "click", "disabled"], [1, "btn", "btn-gray", 3, "click", "disabled"], ["name", "refresh-cw", 3, "size"], ["name", "code", "css", "icon-purple", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"], ["name", "arrow-right", "css", "icon-purple", 3, "size"], [1, "op-desc"], ["name", "briefcase", "css", "icon-indigo", 3, "size"], [1, "use-cases"], [1, "use-case", "indigo"], [1, "use-num", "indigo-bg"], [1, "use-title"], [1, "use-desc"], [1, "use-case", "blue"], [1, "use-num", "blue-bg"], [1, "use-case", "purple"], [1, "use-num", "purple-bg"], [1, "tx-step"], [1, "tx-icon"], [1, "tx-text"]], template: function SpringDataComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Data Access in Spring");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7, "Spring provides a unified data access abstraction that simplifies working with JDBC, JPA, and other persistence technologies.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "ul")(9, "li")(10, "strong");
      \u0275\u0275text(11, "JdbcTemplate:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(12, " Eliminates boilerplate JDBC code (connections, statements, result sets).");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "li")(14, "strong");
      \u0275\u0275text(15, "@Transactional:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(16, " Declarative transaction management \u2014 commit or rollback automatically.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "li")(18, "strong");
      \u0275\u0275text(19, "DataAccessException:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(20, " Unified exception hierarchy \u2014 no more catching vendor-specific SQLExceptions.");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(21, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "section", 1)(23, "div", 6)(24, "h3", 7);
      \u0275\u0275element(25, "app-icon", 8);
      \u0275\u0275text(26, " Transaction Flow");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 9);
      \u0275\u0275repeaterCreate(28, SpringDataComponent_For_29_Template, 5, 4, "div", 10, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 11);
      \u0275\u0275text(31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 12)(33, "button", 13);
      \u0275\u0275listener("click", function SpringDataComponent_Template_button_click_33_listener() {
        return ctx.runSuccess();
      });
      \u0275\u0275element(34, "app-icon", 14);
      \u0275\u0275text(35, " Commit Flow");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "button", 15);
      \u0275\u0275listener("click", function SpringDataComponent_Template_button_click_36_listener() {
        return ctx.runRollback();
      });
      \u0275\u0275element(37, "app-icon", 14);
      \u0275\u0275text(38, " Rollback Flow");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "button", 16);
      \u0275\u0275listener("click", function SpringDataComponent_Template_button_click_39_listener() {
        return ctx.resetDemo();
      });
      \u0275\u0275element(40, "app-icon", 17);
      \u0275\u0275text(41, " Reset");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(42, "section", 1)(43, "h2", 2);
      \u0275\u0275element(44, "app-icon", 18);
      \u0275\u0275text(45, " Patterns");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 19)(47, "div", 20)(48, "h3", 21);
      \u0275\u0275element(49, "app-icon", 22);
      \u0275\u0275text(50, " JdbcTemplate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "p", 23);
      \u0275\u0275text(52, "Query, update, and batch operations without boilerplate.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(53, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "div", 20)(55, "h3", 21);
      \u0275\u0275element(56, "app-icon", 22);
      \u0275\u0275text(57, " Transactions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "p", 23);
      \u0275\u0275text(59, "Declarative transactions with @Transactional.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(60, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "div", 20)(62, "h3", 21);
      \u0275\u0275element(63, "app-icon", 22);
      \u0275\u0275text(64, " DataSource Config");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "p", 23);
      \u0275\u0275text(66, "Configure connection pools with HikariCP.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(67, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "div", 20)(69, "h3", 21);
      \u0275\u0275element(70, "app-icon", 22);
      \u0275\u0275text(71, " RowMapper");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "p", 23);
      \u0275\u0275text(73, "Map ResultSet rows to domain objects.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(74, "app-code-block", 5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(75, "section", 1)(76, "h2", 2);
      \u0275\u0275element(77, "app-icon", 24);
      \u0275\u0275text(78, " Real-Time Use Cases");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "div", 25)(80, "div", 26)(81, "div", 27);
      \u0275\u0275text(82, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "div")(84, "h4", 28);
      \u0275\u0275text(85, "Banking Transactions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "p", 29)(87, "code");
      \u0275\u0275text(88, "@Transactional");
      \u0275\u0275elementEnd();
      \u0275\u0275text(89, " ensures debit + credit either BOTH succeed or BOTH roll back \u2014 no partial state ever.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(90, "div", 30)(91, "div", 31);
      \u0275\u0275text(92, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "div")(94, "h4", 28);
      \u0275\u0275text(95, "Batch Data Import");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "p", 29)(97, "code");
      \u0275\u0275text(98, "JdbcTemplate.batchUpdate()");
      \u0275\u0275elementEnd();
      \u0275\u0275text(99, " processes thousands of CSV rows in a single transaction with prepared statements.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(100, "div", 32)(101, "div", 33);
      \u0275\u0275text(102, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "div")(104, "h4", 28);
      \u0275\u0275text(105, "Multi-DB Routing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "p", 29)(107, "code");
      \u0275\u0275text(108, "AbstractRoutingDataSource");
      \u0275\u0275elementEnd();
      \u0275\u0275text(109, " routes queries to read replicas for SELECTs and primary for writes \u2014 transparent to services.");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(18);
      \u0275\u0275property("code", ctx.codeIntro);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 22);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.txSteps());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.status());
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isAnimating());
      \u0275\u0275advance();
      \u0275\u0275property("size", 16);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isAnimating());
      \u0275\u0275advance();
      \u0275\u0275property("size", 16);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isAnimating());
      \u0275\u0275advance();
      \u0275\u0275property("size", 16);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(5);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeJdbc);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeTx);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeDs);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeMapper);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ['\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.icon-purple[_ngcontent-%COMP%] {\n  color: #7c3aed;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 700;\n}\n.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #4f46e5;\n}\n.viz-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);\n  padding: 28px 24px;\n}\n.viz-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.tx-demo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 20px;\n}\n.tx-step[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  border-radius: 10px;\n  border: 2px solid #e2e8f0;\n  transition: all 0.3s;\n}\n.tx-step.active[_ngcontent-%COMP%] {\n  border-color: #4f46e5;\n  background: #eef2ff;\n}\n.tx-step.done[_ngcontent-%COMP%] {\n  border-color: #16a34a;\n  background: #f0fdf4;\n}\n.tx-step.error[_ngcontent-%COMP%] {\n  border-color: #dc2626;\n  background: #fef2f2;\n}\n.tx-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.tx-text[_ngcontent-%COMP%] {\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.68rem;\n  color: #0f172a;\n}\n.viz-status[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n  margin-bottom: 20px;\n}\n.viz-controls[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-indigo[_ngcontent-%COMP%] {\n  background: #4f46e5;\n  color: #fff;\n}\n.btn-red[_ngcontent-%COMP%] {\n  background: #dc2626;\n  color: #fff;\n}\n.btn-gray[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #334155;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.op-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n.use-cases[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.use-case[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 14px;\n  border: 1px solid;\n}\n.use-case.indigo[_ngcontent-%COMP%] {\n  background: #eef2ff;\n  border-color: #c7d2fe;\n}\n.use-case.blue[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.use-case.purple[_ngcontent-%COMP%] {\n  background: #faf5ff;\n  border-color: #d8b4fe;\n}\n.use-num[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.indigo-bg[_ngcontent-%COMP%] {\n  background: #4f46e5;\n}\n.blue-bg[_ngcontent-%COMP%] {\n  background: #3b82f6;\n}\n.purple-bg[_ngcontent-%COMP%] {\n  background: #8b5cf6;\n}\n.use-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.use-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  line-height: 1.55;\n  margin: 0;\n  color: #334155;\n}\n.use-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.06);\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.72rem;\n}\n/*# sourceMappingURL=spring-data.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpringDataComponent, [{
    type: Component,
    args: [{ selector: "app-topic-spring-data", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout title="Spring Data Access" subtitle="Simplify database operations. Master JdbcTemplate, transactions, DataSource config, and Spring's data access exception hierarchy." badge="SPRING FRAMEWORK" gradient="linear-gradient(135deg, #4338ca, #818cf8)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-indigo" /> Data Access in Spring</h2>
        <div class="prose">
          <p>Spring provides a unified data access abstraction that simplifies working with JDBC, JPA, and other persistence technologies.</p>
          <ul>
            <li><strong>JdbcTemplate:</strong> Eliminates boilerplate JDBC code (connections, statements, result sets).</li>
            <li><strong>&#64;Transactional:</strong> Declarative transaction management \u2014 commit or rollback automatically.</li>
            <li><strong>DataAccessException:</strong> Unified exception hierarchy \u2014 no more catching vendor-specific SQLExceptions.</li>
          </ul>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title"><app-icon name="play" [size]="22" css="icon-indigo" /> Transaction Flow</h3>
          <div class="tx-demo">
            @for (step of txSteps(); track step.id) {
              <div class="tx-step" [class]="step.state"><span class="tx-icon">{{ step.icon }}</span><span class="tx-text">{{ step.text }}</span></div>
            }
          </div>
          <div class="viz-status">{{ status() }}</div>
          <div class="viz-controls">
            <button (click)="runSuccess()" [disabled]="isAnimating()" class="btn btn-indigo"><app-icon name="play" [size]="16" /> Commit Flow</button>
            <button (click)="runRollback()" [disabled]="isAnimating()" class="btn btn-red"><app-icon name="play" [size]="16" /> Rollback Flow</button>
            <button (click)="resetDemo()" [disabled]="isAnimating()" class="btn btn-gray"><app-icon name="refresh-cw" [size]="16" /> Reset</button>
          </div>
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-purple" /> Patterns</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-purple" /> JdbcTemplate</h3><p class="op-desc">Query, update, and batch operations without boilerplate.</p><app-code-block [code]="codeJdbc" /></div>
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-purple" /> Transactions</h3><p class="op-desc">Declarative transactions with &#64;Transactional.</p><app-code-block [code]="codeTx" /></div>
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-purple" /> DataSource Config</h3><p class="op-desc">Configure connection pools with HikariCP.</p><app-code-block [code]="codeDs" /></div>
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-purple" /> RowMapper</h3><p class="op-desc">Map ResultSet rows to domain objects.</p><app-code-block [code]="codeMapper" /></div>
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="briefcase" [size]="28" css="icon-indigo" /> Real-Time Use Cases</h2>
        <div class="use-cases">
          <div class="use-case indigo"><div class="use-num indigo-bg">1</div><div><h4 class="use-title">Banking Transactions</h4><p class="use-desc"><code>&#64;Transactional</code> ensures debit + credit either BOTH succeed or BOTH roll back \u2014 no partial state ever.</p></div></div>
          <div class="use-case blue"><div class="use-num blue-bg">2</div><div><h4 class="use-title">Batch Data Import</h4><p class="use-desc"><code>JdbcTemplate.batchUpdate()</code> processes thousands of CSV rows in a single transaction with prepared statements.</p></div></div>
          <div class="use-case purple"><div class="use-num purple-bg">3</div><div><h4 class="use-title">Multi-DB Routing</h4><p class="use-desc"><code>AbstractRoutingDataSource</code> routes queries to read replicas for SELECTs and primary for writes \u2014 transparent to services.</p></div></div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ['/* angular:styles/component:css;df3e644efd943b20bbd0c3da1a6616d21cf6b17c2a8c8bb0415c259e415606d7;D:/A21/JavaIQ/src/app/features/tutorials/topics/spring-data.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.icon-purple {\n  color: #7c3aed;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.prose ul {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose li {\n  margin-bottom: 8px;\n}\n.prose strong {\n  color: #0f172a;\n  font-weight: 700;\n}\n.prose code {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #4f46e5;\n}\n.viz-card {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);\n  padding: 28px 24px;\n}\n.viz-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.tx-demo {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 20px;\n}\n.tx-step {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  border-radius: 10px;\n  border: 2px solid #e2e8f0;\n  transition: all 0.3s;\n}\n.tx-step.active {\n  border-color: #4f46e5;\n  background: #eef2ff;\n}\n.tx-step.done {\n  border-color: #16a34a;\n  background: #f0fdf4;\n}\n.tx-step.error {\n  border-color: #dc2626;\n  background: #fef2f2;\n}\n.tx-icon {\n  font-size: 1rem;\n}\n.tx-text {\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.68rem;\n  color: #0f172a;\n}\n.viz-status {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n  margin-bottom: 20px;\n}\n.viz-controls {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-indigo {\n  background: #4f46e5;\n  color: #fff;\n}\n.btn-red {\n  background: #dc2626;\n  color: #fff;\n}\n.btn-gray {\n  background: #e2e8f0;\n  color: #334155;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.op-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc {\n  font-size: 0.78rem;\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n.use-cases {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.use-case {\n  display: flex;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 14px;\n  border: 1px solid;\n}\n.use-case.indigo {\n  background: #eef2ff;\n  border-color: #c7d2fe;\n}\n.use-case.blue {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.use-case.purple {\n  background: #faf5ff;\n  border-color: #d8b4fe;\n}\n.use-num {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.indigo-bg {\n  background: #4f46e5;\n}\n.blue-bg {\n  background: #3b82f6;\n}\n.purple-bg {\n  background: #8b5cf6;\n}\n.use-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.use-desc {\n  font-size: 0.78rem;\n  line-height: 1.55;\n  margin: 0;\n  color: #334155;\n}\n.use-desc code {\n  background: rgba(0, 0, 0, 0.06);\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.72rem;\n}\n/*# sourceMappingURL=spring-data.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpringDataComponent, { className: "SpringDataComponent", filePath: "src/app/features/tutorials/topics/spring-data.component.ts", lineNumber: 76 });
})();
export {
  SpringDataComponent
};
//# sourceMappingURL=chunk-YYWHGXHF.js.map
