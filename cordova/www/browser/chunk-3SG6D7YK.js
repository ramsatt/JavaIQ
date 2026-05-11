import{a as l,b as s,c as m}from"./chunk-VPQEQBVO.js";import{Ba as n,Ka as c,ab as i,bb as o,cb as e,db as a,zb as t}from"./chunk-QMXD7TGL.js";import"./chunk-NWJ5J3BN.js";var f=class p{codeIntro=`// Problem: complex home theater setup
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
// \u2705 Connection, exception handling, resource cleanup \u2014 all hidden`;static \u0275fac=function(d){return new(d||p)};static \u0275cmp=c({type:p,selectors:[["app-topic-dp-facade"]],decls:38,vars:7,consts:[["title","Facade","subtitle","Provide a simplified interface to a complex subsystem. Hide complexity behind a single, easy-to-use entry point.","badge","DESIGN PATTERNS","gradient","linear-gradient(135deg, #4338ca, #818cf8)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-indigo",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-purple",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(d,r){d&1&&(o(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),a(3,"app-icon",3),t(4," What is Facade?"),e(),o(5,"div",4)(6,"p"),t(7,"The "),o(8,"strong"),t(9,"Facade"),e(),t(10," pattern provides a unified, simplified interface to a set of interfaces in a subsystem. It doesn't hide subsystem classes \u2014 clients can still use them directly \u2014 but it offers a convenient high-level interface."),e(),o(11,"p"),t(12,"Common in: Spring's "),o(13,"code"),t(14,"JdbcTemplate"),e(),t(15,", SLF4J logging facade, home theater systems, compiler pipelines."),e(),a(16,"app-code-block",5),e()(),o(17,"section",1)(18,"h2",2),a(19,"app-icon",6),t(20," Implementations"),e(),o(21,"div",7)(22,"div",8)(23,"h3",9),t(24,"Subsystem Classes"),e(),a(25,"app-code-block",5),e(),o(26,"div",8)(27,"h3",9),t(28,"Facade Class"),e(),a(29,"app-code-block",5),e(),o(30,"div",8)(31,"h3",9),t(32,"Client Code"),e(),a(33,"app-code-block",5),e(),o(34,"div",8)(35,"h3",9),t(36,"Spring Example"),e(),a(37,"app-code-block",5),e()()()()),d&2&&(n(3),i("size",28),n(13),i("code",r.codeIntro),n(3),i("size",28),n(6),i("code",r.codeSubsystem),n(4),i("code",r.codeFacade),n(4),i("code",r.codeClient),n(4),i("code",r.codeSpring))},dependencies:[l,s,m],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.icon-purple[_ngcontent-%COMP%]{color:#7c3aed}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f1f5f9;padding:2px 6px;border-radius:4px;font-size:.8rem;color:#4338ca}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{f as DpFacadeComponent};
