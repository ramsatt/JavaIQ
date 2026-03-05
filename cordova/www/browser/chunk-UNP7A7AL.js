import{a as p,b as d,c as g}from"./chunk-4EMTR65D.js";import{Ib as n,Na as o,Ya as l,nb as i,ob as t,pb as e,qb as a}from"./chunk-X3QUIMOS.js";import"./chunk-NWJ5J3BN.js";var m=class s{codeIntro=`// Problem: Need exactly ONE instance
// Examples: Logger, ConfigManager, ConnectionPool
// Solution: Private constructor + static access

// \u274C Anti-pattern: global mutable state
// \u2705 Use DI (Spring @Component) instead when possible`;codeEnum=`// BEST approach: Enum singleton
public enum DatabasePool {
    INSTANCE;

    private final HikariDataSource ds;

    DatabasePool() {
        ds = new HikariDataSource();
        ds.setJdbcUrl("jdbc:postgresql://localhost/mydb");
    }

    public Connection getConnection() throws SQLException {
        return ds.getConnection();
    }
}

// Usage
Connection conn = DatabasePool.INSTANCE.getConnection();

// \u2705 Thread-safe, serialization-safe, reflection-safe`;codeLazy=`// Bill Pugh / Lazy Holder idiom
public class Logger {
    private Logger() {}

    private static class Holder {
        // loaded only when getInstance() is called
        static final Logger INSTANCE = new Logger();
    }

    public static Logger getInstance() {
        return Holder.INSTANCE;
    }
}

// \u2705 Thread-safe (class loading is thread-safe)
// \u2705 Lazy initialization
// \u2705 No synchronization overhead`;codeDouble=`// Double-checked locking (pre-Java 5 era)
public class Cache {
    private static volatile Cache instance;

    private Cache() {}

    public static Cache getInstance() {
        if (instance == null) {           // 1st check (no lock)
            synchronized (Cache.class) {
                if (instance == null) {    // 2nd check (with lock)
                    instance = new Cache();
                }
            }
        }
        return instance;
    }
}

// \u26A0\uFE0F volatile is REQUIRED (prevents instruction reordering)`;codeSpring=`// In Spring, just use @Component
@Service  // singleton by default!
public class UserService {
    // Spring manages the single instance
    // No manual singleton code needed
}

// Spring scopes:
// @Scope("singleton")  \u2014 default, one per container
// @Scope("prototype")  \u2014 new instance each injection
// @Scope("request")    \u2014 one per HTTP request
// @Scope("session")    \u2014 one per HTTP session`;static \u0275fac=function(r){return new(r||s)};static \u0275cmp=l({type:s,selectors:[["app-topic-dp-singleton"]],decls:33,vars:7,consts:[["title","Singleton","subtitle","Ensure a class has only one instance. Thread-safe approaches, enum singleton, and best practices.","badge","DESIGN PATTERNS","gradient","linear-gradient(135deg, #4338ca, #818cf8)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-indigo",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-purple",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(r,c){r&1&&(t(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),a(3,"app-icon",3),n(4," Singleton"),e(),t(5,"div",4)(6,"p"),n(7,"The "),t(8,"strong"),n(9,"Singleton"),e(),n(10," pattern ensures exactly one instance exists. Used for configuration, logging, connection pools, and caches."),e(),a(11,"app-code-block",5),e()(),t(12,"section",1)(13,"h2",2),a(14,"app-icon",6),n(15," Implementations"),e(),t(16,"div",7)(17,"div",8)(18,"h3",9),n(19,"Enum (Best!)"),e(),a(20,"app-code-block",5),e(),t(21,"div",8)(22,"h3",9),n(23,"Lazy Holder"),e(),a(24,"app-code-block",5),e(),t(25,"div",8)(26,"h3",9),n(27,"Double-Checked"),e(),a(28,"app-code-block",5),e(),t(29,"div",8)(30,"h3",9),n(31,"Spring Singleton"),e(),a(32,"app-code-block",5),e()()()()),r&2&&(o(3),i("size",28),o(8),i("code",c.codeIntro),o(3),i("size",28),o(6),i("code",c.codeEnum),o(4),i("code",c.codeLazy),o(4),i("code",c.codeDouble),o(4),i("code",c.codeSpring))},dependencies:[p,d,g],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.icon-purple[_ngcontent-%COMP%]{color:#7c3aed}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{m as DpSingletonComponent};
