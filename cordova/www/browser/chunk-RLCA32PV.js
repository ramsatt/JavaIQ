import{a as p,b as d,c as g}from"./chunk-IN5CYMS5.js";import"./chunk-IS4X7JQG.js";import"./chunk-7SFQX2NP.js";import"./chunk-JTAKQG6P.js";import{P as i,S as l,ba as a,ca as t,da as e,ea as o,wa as n}from"./chunk-UO6CZCBJ.js";import"./chunk-JKY3FJOK.js";import"./chunk-36LMHX4H.js";import"./chunk-QSPX3XV4.js";import"./chunk-CFQFX75D.js";import"./chunk-5AR3GM6G.js";import"./chunk-DGLFGWVP.js";import"./chunk-OQOWVL3R.js";import"./chunk-VSDHJBUA.js";import"./chunk-4WFVMWDK.js";import"./chunk-M2X7KQLB.js";import"./chunk-DVVH2KKN.js";import"./chunk-NV3QH4JK.js";import"./chunk-2DGDOVBR.js";import"./chunk-OZYWYLNK.js";import"./chunk-42C7ZIID.js";import"./chunk-NWJ5J3BN.js";var m=class r{codeIntro=`// Problem: Need exactly ONE instance
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
// @Scope("session")    \u2014 one per HTTP session`;static \u0275fac=function(s){return new(s||r)};static \u0275cmp=l({type:r,selectors:[["app-topic-dp-singleton"]],decls:34,vars:7,consts:[["title","Singleton","subtitle","Ensure a class has only one instance. Thread-safe approaches, enum singleton, and best practices.","badge","DESIGN PATTERNS","gradient","linear-gradient(135deg, #4338ca, #818cf8)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-indigo",3,"size"],["src","/assets/images/topics/dp-singleton.png","alt","Singleton Pattern Visualized",1,"topic-hero-image"],[1,"prose"],[3,"code"],["name","code","css","icon-purple",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(s,c){s&1&&(t(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),o(3,"app-icon",3),n(4," Singleton"),e(),o(5,"img",4),t(6,"div",5)(7,"p"),n(8,"The "),t(9,"strong"),n(10,"Singleton"),e(),n(11," pattern ensures exactly one instance exists. Used for configuration, logging, connection pools, and caches."),e(),o(12,"app-code-block",6),e()(),t(13,"section",1)(14,"h2",2),o(15,"app-icon",7),n(16," Implementations"),e(),t(17,"div",8)(18,"div",9)(19,"h3",10),n(20,"Enum (Best!)"),e(),o(21,"app-code-block",6),e(),t(22,"div",9)(23,"h3",10),n(24,"Lazy Holder"),e(),o(25,"app-code-block",6),e(),t(26,"div",9)(27,"h3",10),n(28,"Double-Checked"),e(),o(29,"app-code-block",6),e(),t(30,"div",9)(31,"h3",10),n(32,"Spring Singleton"),e(),o(33,"app-code-block",6),e()()()()),s&2&&(i(3),a("size",28),i(9),a("code",c.codeIntro),i(3),a("size",28),i(6),a("code",c.codeEnum),i(4),a("code",c.codeLazy),i(4),a("code",c.codeDouble),i(4),a("code",c.codeSpring))},dependencies:[p,d,g],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.icon-purple[_ngcontent-%COMP%]{color:#7c3aed}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{m as DpSingletonComponent};
