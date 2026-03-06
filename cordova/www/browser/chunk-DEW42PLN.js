import{a as M,b as w,c as A}from"./chunk-5NK5W44O.js";import{Cb as v,Gb as D,Ib as u,Pa as i,Qb as C,Tb as e,Ub as c,Vb as p,aa as g,ab as y,ba as x,mb as h,na as f,nb as E,qb as b,rb as S,sb as o,tb as n,ub as t,vb as l}from"./chunk-WSUICUG6.js";import"./chunk-NWJ5J3BN.js";var O=(s,d)=>d.name;function k(s,d){if(s&1){let a=v();n(0,"button",23),D("click",function(){let m=g(a).$implicit,P=u();return x(P.selectPlanet(m))}),n(1,"span",24),e(2),t(),n(3,"span",25),e(4),t()()}if(s&2){let a,r=d.$implicit,m=u();C("planet-active",((a=m.selectedPlanet())==null?null:a.name)===r.name),i(2),c(r.icon),i(2),c(r.name)}}function z(s,d){if(s&1&&(n(0,"div",12)(1,"div",26)(2,"span",27),e(3),t(),n(4,"div")(5,"div",28),e(6),t(),n(7,"div",29),e(8),t()()(),n(9,"div",30)(10,"div",31)(11,"span",32),e(12,"mass"),t(),n(13,"span",33),e(14),t()(),n(15,"div",31)(16,"span",32),e(17,"radius"),t(),n(18,"span",33),e(19),t()(),n(20,"div",31)(21,"span",32),e(22,"surfaceGravity()"),t(),n(23,"span",34),e(24),t()(),n(25,"div",31)(26,"span",32),e(27,"weight(75kg person)"),t(),n(28,"span",34),e(29),t()()()()),s&2){let a=d;i(3),c(a.icon),i(3),c(a.name),i(2),p("ordinal = ",a.ordinal),i(6),c(a.mass),i(5),c(a.radius),i(5),p("",a.gravity," m/s\xB2"),i(5),p("",a.weight75," N")}}var _=class s{planets=[{name:"MERCURY",icon:"\u{1FA90}",ordinal:0,mass:"3.303e+23 kg",radius:"2.4397e6 m",gravity:"3.70",weight75:"277.5"},{name:"VENUS",icon:"\u{1F315}",ordinal:1,mass:"4.869e+24 kg",radius:"6.0518e6 m",gravity:"8.87",weight75:"665.0"},{name:"EARTH",icon:"\u{1F30D}",ordinal:2,mass:"5.976e+24 kg",radius:"6.3781e6 m",gravity:"9.81",weight75:"735.8"},{name:"MARS",icon:"\u{1F534}",ordinal:3,mass:"6.421e+23 kg",radius:"3.3972e6 m",gravity:"3.71",weight75:"278.3"},{name:"JUPITER",icon:"\u{1F7E0}",ordinal:4,mass:"1.899e+27 kg",radius:"7.1492e7 m",gravity:"23.1",weight75:"1735"},{name:"SATURN",icon:"\u{1F49B}",ordinal:5,mass:"5.685e+26 kg",radius:"6.0268e7 m",gravity:"9.00",weight75:"674.9"},{name:"URANUS",icon:"\u{1FA75}",ordinal:6,mass:"8.683e+25 kg",radius:"2.5559e7 m",gravity:"8.69",weight75:"651.6"},{name:"NEPTUNE",icon:"\u{1F535}",ordinal:7,mass:"1.024e+26 kg",radius:"2.4746e7 m",gravity:"11.0",weight75:"825.0"}];selectedPlanet=f(null);selectPlanet(d){this.selectedPlanet.set(d)}codeBasic=`// Basic enum declaration
public enum Day {
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
}

// Using an enum
Day today = Day.WEDNESDAY;
System.out.println(today);           // WEDNESDAY
System.out.println(today.name());    // WEDNESDAY
System.out.println(today.ordinal()); // 2 (zero-based position)

// Iterate all values
for (Day d : Day.values()) {
    System.out.println(d.ordinal() + ": " + d);
}

// Parse from String
Day day = Day.valueOf("FRIDAY");   // Day.FRIDAY
// Day bad = Day.valueOf("friday"); // IllegalArgumentException \u2014 case-sensitive`;codeFields=`public enum Planet {
    MERCURY(3.303e+23, 2.4397e6),
    VENUS  (4.869e+24, 6.0518e6),
    EARTH  (5.976e+24, 6.37814e6);

    private final double mass;      // in kg
    private final double radius;    // in metres
    static final double G = 6.67300E-11;

    // Constructor is always private (implicitly or explicitly)
    Planet(double mass, double radius) {
        this.mass = mass;
        this.radius = radius;
    }

    public double surfaceGravity() {
        return G * mass / (radius * radius);
    }

    public double surfaceWeight(double otherMass) {
        return otherMass * surfaceGravity();
    }
}

// Usage
double earthWeight = 75.0;
for (Planet p : Planet.values()) {
    System.out.printf("Your weight on %s is %6.2f%n",
        p, p.surfaceWeight(earthWeight));
}

// Abstract method per constant \u2014 strategy pattern in an enum
public enum Operation {
    PLUS  { public double apply(double x, double y) { return x + y; } },
    MINUS { public double apply(double x, double y) { return x - y; } },
    TIMES { public double apply(double x, double y) { return x * y; } };

    public abstract double apply(double x, double y);
}`;codeSwitch=`Day day = Day.SATURDAY;

// Classic switch
switch (day) {
    case MONDAY: case TUESDAY: case WEDNESDAY:
    case THURSDAY: case FRIDAY:
        System.out.println("Work day"); break;
    case SATURDAY: case SUNDAY:
        System.out.println("Weekend");  break;
}

// Switch expression (Java 14+) \u2014 exhaustive, no default needed!
String type = switch (day) {
    case MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY -> "Weekday";
    case SATURDAY, SUNDAY                             -> "Weekend";
};

// Compute something per enum value
int hoursOfWork = switch (day) {
    case SATURDAY, SUNDAY -> 0;
    case FRIDAY           -> 6;
    default               -> 8;
};`;codeEnumCollections=`import java.util.EnumSet;
import java.util.EnumMap;

// EnumSet \u2014 backed by a bit vector, extremely fast
EnumSet<Day> weekend   = EnumSet.of(Day.SATURDAY, Day.SUNDAY);
EnumSet<Day> weekdays  = EnumSet.complementOf(weekend);
EnumSet<Day> allDays   = EnumSet.allOf(Day.class);
EnumSet<Day> none      = EnumSet.noneOf(Day.class);

boolean isSat = weekend.contains(Day.SATURDAY); // true \u2014 O(1)

// EnumMap \u2014 array-indexed by ordinal, no hashing overhead
EnumMap<Day, String> schedule = new EnumMap<>(Day.class);
schedule.put(Day.MONDAY, "Stand-up @ 9am");
schedule.put(Day.FRIDAY, "Retrospective @ 4pm");

System.out.println(schedule.get(Day.MONDAY)); // "Stand-up @ 9am"

// vs HashMap \u2014 EnumMap is ~4x faster for enum keys
// Map<Day, String> slow = new HashMap<>();  // works but slower`;codeSingleton=`// Enum singleton \u2014 thread-safe, serialization-safe, reflection-safe
public enum AppConfig {
    INSTANCE;

    private final String dbUrl = "jdbc:postgresql://localhost/mydb";
    private int maxConnections = 10;

    public String getDbUrl() { return dbUrl; }
    public int getMaxConnections() { return maxConnections; }
    public void setMaxConnections(int n) { this.maxConnections = n; }
}

// Usage \u2014 guaranteed single instance
AppConfig config = AppConfig.INSTANCE;
System.out.println(config.getDbUrl());

// This is impossible \u2014 enum protects against it:
// Reflection: Constructor.newInstance() \u2192 throws IllegalArgumentException
// Serialization: readResolve() is called automatically \u2014 same instance returned`;static \u0275fac=function(a){return new(a||s)};static \u0275cmp=y({type:s,selectors:[["app-topic-enums"]],decls:159,vars:13,consts:[["title","Enumerations (enum)","subtitle","Replace magic constants with type-safe, self-documenting enums. Learn enum fields, methods, EnumSet, EnumMap, and the singleton pattern.","badge","CORE JAVA","gradient","linear-gradient(135deg, #7c2d12, #f97316)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-orange",3,"size"],[1,"prose"],[3,"code"],[1,"viz-card"],[1,"viz-title"],["name","play","css","icon-orange",3,"size"],[1,"viz-desc"],[1,"planet-grid"],[1,"planet-card",3,"planet-active"],[1,"planet-detail"],["name","code","css","icon-orange",3,"size"],["name","git-branch","css","icon-orange",3,"size"],["name","database","css","icon-orange",3,"size"],["name","shield","css","icon-orange",3,"size"],["name","briefcase","css","icon-orange",3,"size"],[1,"tips-list"],[1,"tip-card"],[1,"tip-num"],[1,"tip-title"],[1,"tip-desc"],[1,"planet-card",3,"click"],[1,"planet-icon"],[1,"planet-name"],[1,"planet-detail-header"],[1,"planet-icon-lg"],[1,"planet-detail-name"],[1,"planet-detail-ordinal"],[1,"planet-fields"],[1,"field-row"],[1,"field-key"],[1,"field-val"],[1,"field-val","accent"]],template:function(a,r){if(a&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),l(3,"app-icon",3),e(4," What Is an Enum? "),t(),n(5,"div",4)(6,"p"),e(7," An "),n(8,"code"),e(9,"enum"),t(),e(10," is a special class whose instances are a "),n(11,"strong"),e(12,"fixed set of named constants"),t(),e(13,". It replaces fragile "),n(14,"code"),e(15,"public static final int"),t(),e(16," constants with something the compiler can validate. "),t(),n(17,"ul")(18,"li"),e(19,"All enums implicitly extend "),n(20,"code"),e(21,"java.lang.Enum"),t(),e(22," \u2014 you cannot extend anything else."),t(),n(23,"li")(24,"code"),e(25,"values()"),t(),e(26," returns all constants as an array; "),n(27,"code"),e(28,'valueOf("NAME")'),t(),e(29," returns by name."),t(),n(30,"li")(31,"code"),e(32,"name()"),t(),e(33," returns the constant's identifier string; "),n(34,"code"),e(35,"ordinal()"),t(),e(36," returns its position (0-based)."),t(),n(37,"li"),e(38,"Enums are implicitly "),n(39,"code"),e(40,"public static final"),t(),e(41," \u2014 they are singletons."),t()(),l(42,"app-code-block",5),t()(),n(43,"section",1)(44,"div",6)(45,"h3",7),l(46,"app-icon",8),e(47," Planet Enum Explorer "),t(),n(48,"p",9),e(49,"Click a planet to see its enum fields and computed surface weight. This is the classic Java enum example from the official docs."),t(),n(50,"div",10),b(51,k,5,4,"button",11,O),t(),h(53,z,30,7,"div",12),t()(),n(54,"section",1)(55,"h2",2),l(56,"app-icon",13),e(57," Enums with Fields & Methods "),t(),n(58,"div",4)(59,"p"),e(60," Enums can have "),n(61,"strong"),e(62,"constructors, fields, and methods"),t(),e(63," \u2014 making each constant a rich object. The constructor is always "),n(64,"code"),e(65,"private"),t(),e(66," (implicitly or explicitly). "),t(),l(67,"app-code-block",5),t()(),n(68,"section",1)(69,"h2",2),l(70,"app-icon",14),e(71," Enums in switch "),t(),n(72,"div",4)(73,"p"),e(74,"Enums work perfectly with both classic "),n(75,"code"),e(76,"switch"),t(),e(77," statements and modern switch expressions. Switch expressions with sealed-like enums are exhaustive \u2014 the compiler catches missing cases."),t(),l(78,"app-code-block",5),t()(),n(79,"section",1)(80,"h2",2),l(81,"app-icon",15),e(82," EnumSet & EnumMap "),t(),n(83,"div",4)(84,"p"),e(85," These are specialised, high-performance collection types that only work with enums. They are dramatically faster than "),n(86,"code"),e(87,"HashSet"),t(),e(88," and "),n(89,"code"),e(90,"HashMap"),t(),e(91," for enum keys because they use compact bit-vector and array implementations. "),t(),n(92,"ul")(93,"li")(94,"strong"),e(95,"EnumSet"),t(),e(96,": Backed by a single "),n(97,"code"),e(98,"long"),t(),e(99," bitmask \u2014 O(1) for all operations."),t(),n(100,"li")(101,"strong"),e(102,"EnumMap"),t(),e(103,": Array-indexed by ordinal \u2014 no hashing, no collision."),t()(),l(104,"app-code-block",5),t()(),n(105,"section",1)(106,"h2",2),l(107,"app-icon",16),e(108," Singleton via Enum (Best Practice) "),t(),n(109,"div",4)(110,"p"),e(111," Joshua Bloch (Effective Java) recommends enum for singletons. It's thread-safe, serialization-safe, and protected against reflection attacks \u2014 all for free. "),t(),l(112,"app-code-block",5),t()(),n(113,"section",1)(114,"h2",2),l(115,"app-icon",17),e(116," Interview Tips "),t(),n(117,"div",18)(118,"div",19)(119,"div",20),e(120,"1"),t(),n(121,"div")(122,"h4",21),e(123,"enum vs static final int Constants"),t(),n(124,"p",22)(125,"code"),e(126,"static final int STATUS_ACTIVE = 1"),t(),e(127," is error-prone \u2014 any "),n(128,"code"),e(129,"int"),t(),e(130," can be passed. An "),n(131,"code"),e(132,"enum Status { ACTIVE }"),t(),e(133," forces valid values at compile time. Enums win every time."),t()()(),n(134,"div",19)(135,"div",20),e(136,"2"),t(),n(137,"div")(138,"h4",21),e(139,"ordinal() Is Fragile \u2014 Avoid It in Persistence"),t(),n(140,"p",22),e(141,"If you store "),n(142,"code"),e(143,"ordinal()"),t(),e(144," in a database and later reorder the enum constants, all stored values become wrong. Persist "),n(145,"code"),e(146,"name()"),t(),e(147," or add an explicit code field instead."),t()()(),n(148,"div",19)(149,"div",20),e(150,"3"),t(),n(151,"div")(152,"h4",21),e(153,"Abstract Methods per Constant"),t(),n(154,"p",22),e(155,"Each constant can override an abstract method declared in the enum body. This is the "),n(156,"strong"),e(157,"strategy pattern"),t(),e(158," built directly into the enum \u2014 no external classes needed."),t()()()()()()),a&2){let m;i(3),o("size",28),i(39),o("code",r.codeBasic),i(4),o("size",22),i(5),S(r.planets),i(2),E((m=r.selectedPlanet())?53:-1,m),i(3),o("size",28),i(11),o("code",r.codeFields),i(3),o("size",28),i(8),o("code",r.codeSwitch),i(3),o("size",28),i(23),o("code",r.codeEnumCollections),i(3),o("size",28),i(5),o("code",r.codeSingleton),i(3),o("size",28)}},dependencies:[M,w,A],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#1b1b1b;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #D6DDD2}.icon-orange[_ngcontent-%COMP%]{color:#f97316}.prose[_ngcontent-%COMP%]{font-size:.9rem;color:#52665a;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:14px 0;padding-left:22px;list-style:disc}.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:8px}.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#1b1b1b;font-weight:700}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#ffedd5;padding:2px 7px;border-radius:5px;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#c2410c}.viz-card[_ngcontent-%COMP%]{background:#fff;border-radius:20px;border:1px solid #D6DDD2;box-shadow:0 4px 16px #0000000a;padding:28px 24px}.viz-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;font-size:1.15rem;font-weight:700;color:#1b1b1b;margin:0 0 8px}.viz-desc[_ngcontent-%COMP%]{font-size:.85rem;color:#52665a;margin:0 0 20px;line-height:1.6}.planet-grid[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:20px}.planet-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:4px;padding:12px 16px;border-radius:14px;border:1px solid #e2e8f0;background:#fff;cursor:pointer;transition:all .2s;min-width:80px}.planet-card[_ngcontent-%COMP%]:hover{border-color:#f97316;box-shadow:0 4px 12px #f973161a}.planet-card.planet-active[_ngcontent-%COMP%]{background:#fff7ed;border-color:#f97316;box-shadow:0 4px 16px #f9731626}.planet-icon[_ngcontent-%COMP%]{font-size:1.6rem}.planet-name[_ngcontent-%COMP%]{font-size:.72rem;font-weight:800;color:#1b1b1b}.planet-detail[_ngcontent-%COMP%]{background:#fff7ed;border:1px solid #fed7aa;border-radius:16px;padding:20px}.planet-detail-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:14px;margin-bottom:16px}.planet-icon-lg[_ngcontent-%COMP%]{font-size:2.4rem}.planet-detail-name[_ngcontent-%COMP%]{font-size:1.1rem;font-weight:800;color:#1b1b1b}.planet-detail-ordinal[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:.75rem;color:#f97316;font-weight:700}.planet-fields[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}.field-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:8px 12px;background:#fff;border-radius:10px;border:1px solid #fed7aa}.field-key[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:.78rem;color:#64748b;font-weight:600}.field-val[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:.82rem;color:#1b1b1b;font-weight:700}.field-val.accent[_ngcontent-%COMP%]{color:#f97316}.tips-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.tip-card[_ngcontent-%COMP%]{display:flex;gap:16px;padding:20px 24px;border-radius:16px;border:1px solid #D6DDD2;background:#fff;transition:all .2s}.tip-card[_ngcontent-%COMP%]:hover{border-color:#fed7aa;box-shadow:0 4px 12px #f973160f}.tip-num[_ngcontent-%COMP%]{width:36px;height:36px;min-width:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:#f97316;color:#fff;font-size:.85rem;font-weight:800}.tip-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#1b1b1b;margin:0 0 6px}.tip-desc[_ngcontent-%COMP%]{font-size:.82rem;color:#52665a;line-height:1.55;margin:0}.tip-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#ffedd5;padding:2px 5px;border-radius:4px;font-family:JetBrains Mono,monospace;font-size:.75rem;color:#c2410c}"],changeDetection:0})};export{_ as EnumsComponent};
