import{a as v,b as h,c as C}from"./chunk-LDZEFRU3.js";import{$a as x,Bb as f,Mb as m,Ob as t,Pa as i,Pb as p,Qb as b,na as d,ob as u,pb as g,qb as a,rb as n,sb as e,tb as o}from"./chunk-AMIPRJ7H.js";import"./chunk-NWJ5J3BN.js";var S=(l,c)=>c.name;function M(l,c){if(l&1&&(n(0,"div",40)(1,"span",41),t(2),e(),n(3,"span",42),t(4),e(),n(5,"span",43),t(6,"manual"),e()()),l&2){let s=c.$implicit;m("manual",!s.auto),i(2),p((s.auto,"\u270D\uFE0F")),i(2),p(s.name)}}function _(l,c){if(l&1&&(n(0,"div",40)(1,"span",41),t(2),e(),n(3,"span",42),t(4),e(),n(5,"span",44),t(6),e()()),l&2){let s=c.$implicit;m("auto",s.auto),i(2),p(s.auto?"\u{1F916}":"\u270D\uFE0F"),i(2),p(s.name),i(),m("auto-badge",s.auto),i(),p(s.auto?"auto":"manual")}}var E=class l{activePanel=d("");classLines=d(50);recordLines=d(1);status=d("Records replace 50+ lines of boilerplate with a single declaration.");isAnimating=d(!1);classFeatures=d([{name:"private final fields",auto:!1},{name:"constructor",auto:!1},{name:"getters",auto:!1},{name:"equals()",auto:!1},{name:"hashCode()",auto:!1},{name:"toString()",auto:!1}]);recordFeatures=d([{name:"private final fields",auto:!0},{name:"constructor",auto:!0},{name:"accessors name(), age()",auto:!0},{name:"equals()",auto:!0},{name:"hashCode()",auto:!0},{name:"toString()",auto:!0}]);codeRecordIntro=`// Traditional class: ~50 lines
public class Point {
    private final int x;
    private final int y;
    public Point(int x, int y) { ... }
    public int getX() { ... }
    public int getY() { ... }
    public boolean equals(Object o) { ... }
    public int hashCode() { ... }
    public String toString() { ... }
}

// Record: 1 line!
public record Point(int x, int y) { }
// All of the above is auto-generated!`;codeSealed=`// Only these 3 can extend Shape
public sealed interface Shape
    permits Circle, Rectangle, Triangle { }

public record Circle(double r) implements Shape { }
public record Rectangle(double w, double h)
    implements Shape { }
public final class Triangle extends ... { }

// Compiler knows all subtypes!
// Switch must be exhaustive:
double area = switch (shape) {
    case Circle c    -> Math.PI * c.r() * c.r();
    case Rectangle r -> r.w() * r.h();
    case Triangle t  -> ...;
    // No default needed \u2014 all cases covered!
};`;codeRecordFeatures=`// Compact constructor (validation)
public record Age(int value) {
    public Age { // no params!
        if (value < 0)
            throw new IllegalArgumentException(
                "Age cannot be negative");
    }
}

// Records can implement interfaces
public record User(String name, int age)
    implements Comparable<User> {
    public int compareTo(User other) {
        return this.name.compareTo(other.name);
    }
}`;codeCombined=`// Sealed interface + Record subtypes
// = Algebraic Data Type (ADT)
sealed interface Result<T>
    permits Success, Failure {
}

record Success<T>(T value) implements Result<T> {}
record Failure<T>(String error) implements Result<T> {}

// Usage
Result<User> result = findUser(id);
switch (result) {
    case Success<User> s -> render(s.value());
    case Failure<User> f -> showError(f.error());
}`;codePattern=`// Pattern matching with records (Java 21)
sealed interface Expr permits Num, Add, Mul {}
record Num(int value) implements Expr {}
record Add(Expr a, Expr b) implements Expr {}
record Mul(Expr a, Expr b) implements Expr {}

int eval(Expr expr) {
    return switch (expr) {
        case Num(int v)       -> v;
        case Add(var a, var b) -> eval(a)+eval(b);
        case Mul(var a, var b) -> eval(a)*eval(b);
    };
}`;codeLocal=`// Local record inside a method
List<String> topUsers(List<User> users) {
    // Temporary grouping \u2014 no separate file
    record Scored(User user, double score) {}

    return users.stream()
        .map(u -> new Scored(u, calculate(u)))
        .sorted(comparing(Scored::score).reversed())
        .limit(10)
        .map(s -> s.user().name())
        .toList();
}`;sleep(c){return new Promise(s=>setTimeout(s,c))}async showComparison(){this.isAnimating()||(this.isAnimating.set(!0),this.activePanel.set("class"),this.status.set("Traditional class: 6 things you must write manually..."),await this.sleep(1500),this.activePanel.set("record"),this.status.set("Record: ALL 6 are auto-generated! Just declare the header. \u2705"),await this.sleep(1500),this.status.set("record Point(int x, int y) replaces ~50 lines. Modern Java FTW! \u{1F680}"),this.isAnimating.set(!1))}resetDemo(){this.activePanel.set(""),this.status.set("Records replace 50+ lines of boilerplate with a single declaration."),this.isAnimating.set(!1)}static \u0275fac=function(s){return new(s||l)};static \u0275cmp=x({type:l,selectors:[["app-topic-records-sealed"]],decls:172,vars:26,consts:[["title","Records & Sealed Classes","subtitle","Modern Java's power features. Immutable data carriers with Records and controlled hierarchies with Sealed Classes.","badge","CORE JAVA","gradient","linear-gradient(135deg, #7c3aed, #a78bfa)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-violet",3,"size"],[1,"prose"],[3,"code"],[1,"viz-card"],[1,"viz-title"],["name","play","css","icon-violet",3,"size"],[1,"compare-demo"],[1,"compare-panel"],[1,"panel-label"],[1,"line-counter"],[1,"panel-features"],[1,"feature",3,"manual"],[1,"compare-vs"],[1,"feature",3,"auto"],[1,"viz-status"],[1,"viz-controls"],[1,"btn","btn-violet",3,"click","disabled"],["name","play",3,"size"],[1,"btn","btn-gray",3,"click","disabled"],["name","refresh-cw",3,"size"],["name","book-open","css","icon-purple",3,"size"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"],["name","arrow-right","css","icon-indigo",3,"size"],[1,"op-desc"],["name","briefcase","css","icon-violet",3,"size"],[1,"use-cases"],[1,"use-case","violet"],[1,"use-num","violet-bg"],[1,"use-title"],[1,"use-desc"],[1,"use-case","blue"],[1,"use-num","blue-bg"],[1,"use-case","purple"],[1,"use-num","purple-bg"],[1,"feature"],[1,"f-icon"],[1,"f-name"],[1,"f-badge","manual-badge"],[1,"f-badge"]],template:function(s,r){s&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),o(3,"app-icon",3),t(4," What are Records?"),e(),n(5,"div",4)(6,"p")(7,"strong"),t(8,"Records"),e(),t(9," (Java 16+) are immutable data carriers \u2014 classes whose sole purpose is to hold data. The compiler auto-generates the constructor, getters, "),n(10,"code"),t(11,"equals()"),e(),t(12,", "),n(13,"code"),t(14,"hashCode()"),e(),t(15,", and "),n(16,"code"),t(17,"toString()"),e(),t(18,"."),e(),n(19,"ul")(20,"li")(21,"strong"),t(22,"Concise:"),e(),t(23," One line replaces 50+ lines of boilerplate."),e(),n(24,"li")(25,"strong"),t(26,"Immutable:"),e(),t(27," All fields are "),n(28,"code"),t(29,"final"),e(),t(30," \u2014 no setters."),e(),n(31,"li")(32,"strong"),t(33,"Transparent:"),e(),t(34," All state is in the record header."),e()(),o(35,"app-code-block",5),e()(),n(36,"section",1)(37,"div",6)(38,"h3",7),o(39,"app-icon",8),t(40," Record vs Class Comparison"),e(),n(41,"div",9)(42,"div",10)(43,"span",11),t(44,"TRADITIONAL CLASS"),e(),n(45,"div",12),t(46),e(),n(47,"div",13),u(48,M,7,4,"div",14,S),e()(),n(50,"div",15),t(51,"vs"),e(),n(52,"div",10)(53,"span",11),t(54,"RECORD"),e(),n(55,"div",12),t(56),e(),n(57,"div",13),u(58,_,7,7,"div",16,S),e()()(),n(60,"div",17),t(61),e(),n(62,"div",18)(63,"button",19),f("click",function(){return r.showComparison()}),o(64,"app-icon",20),t(65," Compare"),e(),n(66,"button",21),f("click",function(){return r.resetDemo()}),o(67,"app-icon",22),t(68," Reset"),e()()()(),n(69,"section",1)(70,"h2",2),o(71,"app-icon",23),t(72," Sealed Classes"),e(),n(73,"div",4)(74,"p")(75,"strong"),t(76,"Sealed Classes"),e(),t(77," (Java 17) restrict which classes can extend them. This enables exhaustive "),n(78,"code"),t(79,"switch"),e(),t(80," patterns and creates controlled hierarchies."),e(),n(81,"ul")(82,"li")(83,"strong"),t(84,"permits:"),e(),t(85," Explicitly lists allowed subclasses."),e(),n(86,"li")(87,"strong"),t(88,"Subclasses must be:"),e(),n(89,"code"),t(90,"final"),e(),t(91,", "),n(92,"code"),t(93,"sealed"),e(),t(94,", or "),n(95,"code"),t(96,"non-sealed"),e(),t(97,"."),e(),n(98,"li")(99,"strong"),t(100,"Pattern matching:"),e(),t(101," Compiler can verify all subtypes are handled."),e()(),o(102,"app-code-block",5),e()(),n(103,"section",1)(104,"h2",2),o(105,"app-icon",24),t(106," Patterns"),e(),n(107,"div",25)(108,"div",26)(109,"h3",27),o(110,"app-icon",28),t(111," Record Features"),e(),n(112,"p",29),t(113,"Custom constructors, methods, and implementing interfaces."),e(),o(114,"app-code-block",5),e(),n(115,"div",26)(116,"h3",27),o(117,"app-icon",28),t(118," Sealed + Records"),e(),n(119,"p",29),t(120,"Combine both for powerful algebraic data types."),e(),o(121,"app-code-block",5),e(),n(122,"div",26)(123,"h3",27),o(124,"app-icon",28),t(125," Pattern Matching"),e(),n(126,"p",29),t(127,"Exhaustive switch with sealed types and record deconstruction."),e(),o(128,"app-code-block",5),e(),n(129,"div",26)(130,"h3",27),o(131,"app-icon",28),t(132," Local Records"),e(),n(133,"p",29),t(134,"Define records inside methods for temporary data grouping."),e(),o(135,"app-code-block",5),e()()(),n(136,"section",1)(137,"h2",2),o(138,"app-icon",30),t(139," Real-Time Use Cases"),e(),n(140,"div",31)(141,"div",32)(142,"div",33),t(143,"1"),e(),n(144,"div")(145,"h4",34),t(146,"DTOs in REST APIs"),e(),n(147,"p",35),t(148,"Records are perfect for request/response DTOs: "),n(149,"code"),t(150,"record UserDTO(String name, String email)"),e(),t(151," \u2014 immutable, serializable, zero boilerplate."),e()()(),n(152,"div",36)(153,"div",37),t(154,"2"),e(),n(155,"div")(156,"h4",34),t(157,"Domain Events"),e(),n(158,"p",35)(159,"code"),t(160,"sealed interface DomainEvent permits UserCreated, OrderPlaced"),e(),t(161," \u2014 sealed types ensure event handlers cover ALL event types."),e()()(),n(162,"div",38)(163,"div",39),t(164,"3"),e(),n(165,"div")(166,"h4",34),t(167,"Result Types"),e(),n(168,"p",35)(169,"code"),t(170,"sealed interface Result permits Success, Failure"),e(),t(171," with records \u2014 functional error handling without exceptions."),e()()()()()()),s&2&&(i(3),a("size",28),i(32),a("code",r.codeRecordIntro),i(4),a("size",22),i(3),m("active",r.activePanel()==="class"),i(4),b("~",r.classLines()," lines"),i(2),g(r.classFeatures()),i(4),m("active",r.activePanel()==="record"),i(4),b("",r.recordLines()," line"),i(2),g(r.recordFeatures()),i(3),p(r.status()),i(2),a("disabled",r.isAnimating()),i(),a("size",16),i(2),a("disabled",r.isAnimating()),i(),a("size",16),i(4),a("size",28),i(31),a("code",r.codeSealed),i(3),a("size",28),i(5),a("size",18),i(4),a("code",r.codeRecordFeatures),i(3),a("size",18),i(4),a("code",r.codeCombined),i(3),a("size",18),i(4),a("code",r.codePattern),i(3),a("size",18),i(4),a("code",r.codeLocal),i(3),a("size",28))},dependencies:[v,h,C],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-violet[_ngcontent-%COMP%]{color:#7c3aed}.icon-purple[_ngcontent-%COMP%]{color:#9333ea}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:14px 0;padding-left:22px;list-style:disc}.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:8px}.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#0f172a;font-weight:700}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f1f5f9;padding:2px 7px;border-radius:5px;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#7c3aed}.viz-card[_ngcontent-%COMP%]{background:#fff;border-radius:18px;border:1px solid #e2e8f0;box-shadow:0 4px 16px #0000000d;padding:28px 24px}.viz-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;font-size:1.15rem;font-weight:700;color:#0f172a;margin:0 0 24px}.compare-demo[_ngcontent-%COMP%]{display:flex;align-items:stretch;gap:12px;margin-bottom:20px}.compare-panel[_ngcontent-%COMP%]{flex:1;padding:16px;border-radius:14px;border:2px solid #e2e8f0;transition:all .3s}.compare-panel.active[_ngcontent-%COMP%]{border-color:#7c3aed;background:#faf5ff}.panel-label[_ngcontent-%COMP%]{display:block;font-size:.5rem;font-weight:700;letter-spacing:.12em;color:#94a3b8;margin-bottom:6px}.line-counter[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:800;color:#0f172a;margin-bottom:12px;font-family:JetBrains Mono,monospace}.compare-vs[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:.78rem;font-weight:800;color:#94a3b8}.panel-features[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:5px}.feature[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;padding:5px 8px;border-radius:6px;font-size:.62rem;background:#f8fafc;border:1px solid #e2e8f0}.feature.auto[_ngcontent-%COMP%]{background:#f0fdf4;border-color:#86efac}.feature.manual[_ngcontent-%COMP%]{background:#fff7ed;border-color:#fed7aa}.f-icon[_ngcontent-%COMP%]{font-size:.7rem}.f-name[_ngcontent-%COMP%]{flex:1;font-family:JetBrains Mono,monospace;color:#334155}.f-badge[_ngcontent-%COMP%]{font-size:.5rem;font-weight:700;padding:1px 5px;border-radius:3px}.manual-badge[_ngcontent-%COMP%]{background:#fed7aa;color:#9a3412}.auto-badge[_ngcontent-%COMP%]{background:#bbf7d0;color:#166534}.viz-status[_ngcontent-%COMP%]{background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:12px 16px;text-align:center;font-family:JetBrains Mono,monospace;font-size:.78rem;color:#334155;margin-bottom:20px}.viz-controls[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;gap:10px}.btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:7px;padding:10px 18px;border-radius:10px;font-size:.78rem;font-weight:600;border:none;cursor:pointer;transition:all .2s}.btn[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:not-allowed}.btn-violet[_ngcontent-%COMP%]{background:#7c3aed;color:#fff}.btn-violet[_ngcontent-%COMP%]:hover:not(:disabled){background:#6d28d9}.btn-gray[_ngcontent-%COMP%]{background:#e2e8f0;color:#334155}.btn-gray[_ngcontent-%COMP%]:hover:not(:disabled){background:#cbd5e1}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0;box-shadow:0 1px 3px #0000000a}.op-card[_ngcontent-%COMP%]:hover{box-shadow:0 4px 12px #0000000f}.op-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}.op-desc[_ngcontent-%COMP%]{font-size:.78rem;color:#64748b;line-height:1.55;margin:0}.use-cases[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.use-case[_ngcontent-%COMP%]{display:flex;gap:16px;padding:20px;border-radius:14px;border:1px solid}.use-case.violet[_ngcontent-%COMP%]{background:#faf5ff;border-color:#d8b4fe}.use-case.blue[_ngcontent-%COMP%]{background:#eff6ff;border-color:#bfdbfe}.use-case.purple[_ngcontent-%COMP%]{background:#f5f3ff;border-color:#c4b5fd}.use-num[_ngcontent-%COMP%]{width:34px;height:34px;min-width:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:.78rem;font-weight:800}.violet-bg[_ngcontent-%COMP%]{background:#7c3aed}.blue-bg[_ngcontent-%COMP%]{background:#3b82f6}.purple-bg[_ngcontent-%COMP%]{background:#9333ea}.use-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 4px}.use-desc[_ngcontent-%COMP%]{font-size:.78rem;line-height:1.55;margin:0;color:#334155}.use-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#0000000f;padding:1px 5px;border-radius:4px;font-family:JetBrains Mono,monospace;font-size:.72rem}"],changeDetection:0})};export{E as RecordsSealedComponent};
