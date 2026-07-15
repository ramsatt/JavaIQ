import{a as s,b as l,c as m}from"./chunk-IN5CYMS5.js";import"./chunk-IS4X7JQG.js";import"./chunk-7SFQX2NP.js";import"./chunk-JTAKQG6P.js";import{P as i,S as c,ba as a,ca as o,da as e,ea as n,wa as t}from"./chunk-UO6CZCBJ.js";import"./chunk-JKY3FJOK.js";import"./chunk-36LMHX4H.js";import"./chunk-QSPX3XV4.js";import"./chunk-CFQFX75D.js";import"./chunk-5AR3GM6G.js";import"./chunk-DGLFGWVP.js";import"./chunk-OQOWVL3R.js";import"./chunk-VSDHJBUA.js";import"./chunk-4WFVMWDK.js";import"./chunk-M2X7KQLB.js";import"./chunk-DVVH2KKN.js";import"./chunk-NV3QH4JK.js";import"./chunk-2DGDOVBR.js";import"./chunk-OZYWYLNK.js";import"./chunk-42C7ZIID.js";import"./chunk-NWJ5J3BN.js";var f=class p{codeIntro=`// Problem: complex home theater setup
// amplifier.on(); dvd.on(); projector.on();
// amplifier.setVolume(10); projector.setInput("DVD"); ...

// Facade: one call does it all
homeTheater.watchMovie("Inception");`;codeSubsystem=`// Complex subsystem classes
class Amplifier {
    void on()  { System.out.println("Amp on"); }
    void off() { System.out.println("Amp off"); }
    void setVolume(int v) { System.out.println("Volume: " + v); }
}

class DVDPlayer {
    void on()   { System.out.println("DVD on"); }
    void off()  { System.out.println("DVD off"); }
    void play(String movie) { System.out.println("Playing: " + movie); }
}

class Projector {
    void on()  { System.out.println("Projector on"); }
    void off() { System.out.println("Projector off"); }
    void wideScreenMode() { System.out.println("Wide screen"); }
}`;codeFacade=`// Facade \u2014 simplified interface
class HomeTheaterFacade {
    private final Amplifier amp;
    private final DVDPlayer  dvd;
    private final Projector  proj;

    HomeTheaterFacade(Amplifier amp, DVDPlayer dvd, Projector proj) {
        this.amp  = amp;
        this.dvd  = dvd;
        this.proj = proj;
    }

    void watchMovie(String movie) {
        amp.on();
        amp.setVolume(10);
        dvd.on();
        proj.on();
        proj.wideScreenMode();
        dvd.play(movie);
    }

    void endMovie() {
        dvd.off();
        proj.off();
        amp.off();
    }
}`;codeClient=`// Client \u2014 uses only the facade
HomeTheaterFacade homeTheater = new HomeTheaterFacade(
    new Amplifier(), new DVDPlayer(), new Projector()
);

homeTheater.watchMovie("Inception"); // 1 call vs 6 calls
homeTheater.endMovie();

// Client can still access subsystem directly if needed
// Facade doesn't lock you in`;codeSpring=`// Spring's JdbcTemplate IS a Facade over JDBC
// Without JdbcTemplate (raw JDBC):
Connection conn = dataSource.getConnection();
PreparedStatement ps = conn.prepareStatement("SELECT * FROM users WHERE id=?");
ps.setLong(1, id);
ResultSet rs = ps.executeQuery();
// ... iterate, map, close, handle exceptions ...

// With JdbcTemplate (Facade):
User user = jdbcTemplate.queryForObject(
    "SELECT * FROM users WHERE id=?",
    userRowMapper, id
);
// \u2705 Connection, exception handling, resource cleanup \u2014 all hidden`;static \u0275fac=function(d){return new(d||p)};static \u0275cmp=c({type:p,selectors:[["app-topic-dp-facade"]],decls:39,vars:7,consts:[["title","Facade","subtitle","Provide a simplified interface to a complex subsystem. Hide complexity behind a single, easy-to-use entry point.","badge","DESIGN PATTERNS","gradient","linear-gradient(135deg, #4338ca, #818cf8)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-indigo",3,"size"],["src","/assets/images/topics/dp-facade.png","alt","Facade Pattern Visualized",1,"topic-hero-image"],[1,"prose"],[3,"code"],["name","code","css","icon-purple",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(d,r){d&1&&(o(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),n(3,"app-icon",3),t(4," What is Facade?"),e(),n(5,"img",4),o(6,"div",5)(7,"p"),t(8,"The "),o(9,"strong"),t(10,"Facade"),e(),t(11," pattern provides a unified, simplified interface to a set of interfaces in a subsystem. It doesn't hide subsystem classes \u2014 clients can still use them directly \u2014 but it offers a convenient high-level interface."),e(),o(12,"p"),t(13,"Common in: Spring's "),o(14,"code"),t(15,"JdbcTemplate"),e(),t(16,", SLF4J logging facade, home theater systems, compiler pipelines."),e(),n(17,"app-code-block",6),e()(),o(18,"section",1)(19,"h2",2),n(20,"app-icon",7),t(21," Implementations"),e(),o(22,"div",8)(23,"div",9)(24,"h3",10),t(25,"Subsystem Classes"),e(),n(26,"app-code-block",6),e(),o(27,"div",9)(28,"h3",10),t(29,"Facade Class"),e(),n(30,"app-code-block",6),e(),o(31,"div",9)(32,"h3",10),t(33,"Client Code"),e(),n(34,"app-code-block",6),e(),o(35,"div",9)(36,"h3",10),t(37,"Spring Example"),e(),n(38,"app-code-block",6),e()()()()),d&2&&(i(3),a("size",28),i(14),a("code",r.codeIntro),i(3),a("size",28),i(6),a("code",r.codeSubsystem),i(4),a("code",r.codeFacade),i(4),a("code",r.codeClient),i(4),a("code",r.codeSpring))},dependencies:[s,l,m],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.icon-purple[_ngcontent-%COMP%]{color:#7c3aed}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f1f5f9;padding:2px 6px;border-radius:4px;font-size:.8rem;color:#4338ca}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{f as DpFacadeComponent};
