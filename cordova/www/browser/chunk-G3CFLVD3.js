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
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-6OY2Y3BE.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/records-sealed.component.ts
var _forTrack0 = ($index, $item) => $item.name;
function RecordsSealedComponent_For_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "span", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 42);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 43);
    \u0275\u0275text(6, "manual");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r1 = ctx.$implicit;
    \u0275\u0275classProp("manual", !f_r1.auto);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r1.auto ? "\u270D\uFE0F" : "\u270D\uFE0F");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r1.name);
  }
}
function RecordsSealedComponent_For_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "span", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 42);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 44);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r2 = ctx.$implicit;
    \u0275\u0275classProp("auto", f_r2.auto);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r2.auto ? "\u{1F916}" : "\u270D\uFE0F");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r2.name);
    \u0275\u0275advance();
    \u0275\u0275classProp("auto-badge", f_r2.auto);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r2.auto ? "auto" : "manual");
  }
}
var RecordsSealedComponent = class _RecordsSealedComponent {
  activePanel = signal("", ...ngDevMode ? [{ debugName: "activePanel" }] : []);
  classLines = signal(50, ...ngDevMode ? [{ debugName: "classLines" }] : []);
  recordLines = signal(1, ...ngDevMode ? [{ debugName: "recordLines" }] : []);
  status = signal("Records replace 50+ lines of boilerplate with a single declaration.", ...ngDevMode ? [{ debugName: "status" }] : []);
  isAnimating = signal(false, ...ngDevMode ? [{ debugName: "isAnimating" }] : []);
  classFeatures = signal([
    { name: "private final fields", auto: false },
    { name: "constructor", auto: false },
    { name: "getters", auto: false },
    { name: "equals()", auto: false },
    { name: "hashCode()", auto: false },
    { name: "toString()", auto: false }
  ], ...ngDevMode ? [{ debugName: "classFeatures" }] : []);
  recordFeatures = signal([
    { name: "private final fields", auto: true },
    { name: "constructor", auto: true },
    { name: "accessors name(), age()", auto: true },
    { name: "equals()", auto: true },
    { name: "hashCode()", auto: true },
    { name: "toString()", auto: true }
  ], ...ngDevMode ? [{ debugName: "recordFeatures" }] : []);
  codeRecordIntro = `// Traditional class: ~50 lines
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
// All of the above is auto-generated!`;
  codeSealed = `// Only these 3 can extend Shape
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
};`;
  codeRecordFeatures = `// Compact constructor (validation)
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
}`;
  codeCombined = `// Sealed interface + Record subtypes
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
}`;
  codePattern = `// Pattern matching with records (Java 21)
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
}`;
  codeLocal = `// Local record inside a method
List<String> topUsers(List<User> users) {
    // Temporary grouping \u2014 no separate file
    record Scored(User user, double score) {}

    return users.stream()
        .map(u -> new Scored(u, calculate(u)))
        .sorted(comparing(Scored::score).reversed())
        .limit(10)
        .map(s -> s.user().name())
        .toList();
}`;
  sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }
  async showComparison() {
    if (this.isAnimating())
      return;
    this.isAnimating.set(true);
    this.activePanel.set("class");
    this.status.set("Traditional class: 6 things you must write manually...");
    await this.sleep(1500);
    this.activePanel.set("record");
    this.status.set("Record: ALL 6 are auto-generated! Just declare the header. \u2705");
    await this.sleep(1500);
    this.status.set("record Point(int x, int y) replaces ~50 lines. Modern Java FTW! \u{1F680}");
    this.isAnimating.set(false);
  }
  resetDemo() {
    this.activePanel.set("");
    this.status.set("Records replace 50+ lines of boilerplate with a single declaration.");
    this.isAnimating.set(false);
  }
  static \u0275fac = function RecordsSealedComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RecordsSealedComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecordsSealedComponent, selectors: [["app-topic-records-sealed"]], decls: 172, vars: 26, consts: [["title", "Records & Sealed Classes", "subtitle", "Modern Java's power features. Immutable data carriers with Records and controlled hierarchies with Sealed Classes.", "badge", "CORE JAVA", "gradient", "linear-gradient(135deg, #7c3aed, #a78bfa)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-violet", 3, "size"], [1, "prose"], [3, "code"], [1, "viz-card"], [1, "viz-title"], ["name", "play", "css", "icon-violet", 3, "size"], [1, "compare-demo"], [1, "compare-panel"], [1, "panel-label"], [1, "line-counter"], [1, "panel-features"], [1, "feature", 3, "manual"], [1, "compare-vs"], [1, "feature", 3, "auto"], [1, "viz-status"], [1, "viz-controls"], [1, "btn", "btn-violet", 3, "click", "disabled"], ["name", "play", 3, "size"], [1, "btn", "btn-gray", 3, "click", "disabled"], ["name", "refresh-cw", 3, "size"], ["name", "book-open", "css", "icon-purple", 3, "size"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"], ["name", "arrow-right", "css", "icon-indigo", 3, "size"], [1, "op-desc"], ["name", "briefcase", "css", "icon-violet", 3, "size"], [1, "use-cases"], [1, "use-case", "violet"], [1, "use-num", "violet-bg"], [1, "use-title"], [1, "use-desc"], [1, "use-case", "blue"], [1, "use-num", "blue-bg"], [1, "use-case", "purple"], [1, "use-num", "purple-bg"], [1, "feature"], [1, "f-icon"], [1, "f-name"], [1, "f-badge", "manual-badge"], [1, "f-badge"]], template: function RecordsSealedComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " What are Records?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p")(7, "strong");
      \u0275\u0275text(8, "Records");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, " (Java 16+) are immutable data carriers \u2014 classes whose sole purpose is to hold data. The compiler auto-generates the constructor, getters, ");
      \u0275\u0275elementStart(10, "code");
      \u0275\u0275text(11, "equals()");
      \u0275\u0275elementEnd();
      \u0275\u0275text(12, ", ");
      \u0275\u0275elementStart(13, "code");
      \u0275\u0275text(14, "hashCode()");
      \u0275\u0275elementEnd();
      \u0275\u0275text(15, ", and ");
      \u0275\u0275elementStart(16, "code");
      \u0275\u0275text(17, "toString()");
      \u0275\u0275elementEnd();
      \u0275\u0275text(18, ".");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "ul")(20, "li")(21, "strong");
      \u0275\u0275text(22, "Concise:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(23, " One line replaces 50+ lines of boilerplate.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "li")(25, "strong");
      \u0275\u0275text(26, "Immutable:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(27, " All fields are ");
      \u0275\u0275elementStart(28, "code");
      \u0275\u0275text(29, "final");
      \u0275\u0275elementEnd();
      \u0275\u0275text(30, " \u2014 no setters.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "li")(32, "strong");
      \u0275\u0275text(33, "Transparent:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(34, " All state is in the record header.");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(35, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "section", 1)(37, "div", 6)(38, "h3", 7);
      \u0275\u0275element(39, "app-icon", 8);
      \u0275\u0275text(40, " Record vs Class Comparison");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 9)(42, "div", 10)(43, "span", 11);
      \u0275\u0275text(44, "TRADITIONAL CLASS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div", 12);
      \u0275\u0275text(46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 13);
      \u0275\u0275repeaterCreate(48, RecordsSealedComponent_For_49_Template, 7, 4, "div", 14, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "div", 15);
      \u0275\u0275text(51, "vs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "div", 10)(53, "span", 11);
      \u0275\u0275text(54, "RECORD");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 12);
      \u0275\u0275text(56);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "div", 13);
      \u0275\u0275repeaterCreate(58, RecordsSealedComponent_For_59_Template, 7, 7, "div", 16, _forTrack0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(60, "div", 17);
      \u0275\u0275text(61);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "div", 18)(63, "button", 19);
      \u0275\u0275listener("click", function RecordsSealedComponent_Template_button_click_63_listener() {
        return ctx.showComparison();
      });
      \u0275\u0275element(64, "app-icon", 20);
      \u0275\u0275text(65, " Compare");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "button", 21);
      \u0275\u0275listener("click", function RecordsSealedComponent_Template_button_click_66_listener() {
        return ctx.resetDemo();
      });
      \u0275\u0275element(67, "app-icon", 22);
      \u0275\u0275text(68, " Reset");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(69, "section", 1)(70, "h2", 2);
      \u0275\u0275element(71, "app-icon", 23);
      \u0275\u0275text(72, " Sealed Classes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "div", 4)(74, "p")(75, "strong");
      \u0275\u0275text(76, "Sealed Classes");
      \u0275\u0275elementEnd();
      \u0275\u0275text(77, " (Java 17) restrict which classes can extend them. This enables exhaustive ");
      \u0275\u0275elementStart(78, "code");
      \u0275\u0275text(79, "switch");
      \u0275\u0275elementEnd();
      \u0275\u0275text(80, " patterns and creates controlled hierarchies.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "ul")(82, "li")(83, "strong");
      \u0275\u0275text(84, "permits:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(85, " Explicitly lists allowed subclasses.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "li")(87, "strong");
      \u0275\u0275text(88, "Subclasses must be:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "code");
      \u0275\u0275text(90, "final");
      \u0275\u0275elementEnd();
      \u0275\u0275text(91, ", ");
      \u0275\u0275elementStart(92, "code");
      \u0275\u0275text(93, "sealed");
      \u0275\u0275elementEnd();
      \u0275\u0275text(94, ", or ");
      \u0275\u0275elementStart(95, "code");
      \u0275\u0275text(96, "non-sealed");
      \u0275\u0275elementEnd();
      \u0275\u0275text(97, ".");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "li")(99, "strong");
      \u0275\u0275text(100, "Pattern matching:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(101, " Compiler can verify all subtypes are handled.");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(102, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(103, "section", 1)(104, "h2", 2);
      \u0275\u0275element(105, "app-icon", 24);
      \u0275\u0275text(106, " Patterns");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "div", 25)(108, "div", 26)(109, "h3", 27);
      \u0275\u0275element(110, "app-icon", 28);
      \u0275\u0275text(111, " Record Features");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "p", 29);
      \u0275\u0275text(113, "Custom constructors, methods, and implementing interfaces.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(114, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "div", 26)(116, "h3", 27);
      \u0275\u0275element(117, "app-icon", 28);
      \u0275\u0275text(118, " Sealed + Records");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "p", 29);
      \u0275\u0275text(120, "Combine both for powerful algebraic data types.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(121, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "div", 26)(123, "h3", 27);
      \u0275\u0275element(124, "app-icon", 28);
      \u0275\u0275text(125, " Pattern Matching");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "p", 29);
      \u0275\u0275text(127, "Exhaustive switch with sealed types and record deconstruction.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(128, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "div", 26)(130, "h3", 27);
      \u0275\u0275element(131, "app-icon", 28);
      \u0275\u0275text(132, " Local Records");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "p", 29);
      \u0275\u0275text(134, "Define records inside methods for temporary data grouping.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(135, "app-code-block", 5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(136, "section", 1)(137, "h2", 2);
      \u0275\u0275element(138, "app-icon", 30);
      \u0275\u0275text(139, " Real-Time Use Cases");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "div", 31)(141, "div", 32)(142, "div", 33);
      \u0275\u0275text(143, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "div")(145, "h4", 34);
      \u0275\u0275text(146, "DTOs in REST APIs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "p", 35);
      \u0275\u0275text(148, "Records are perfect for request/response DTOs: ");
      \u0275\u0275elementStart(149, "code");
      \u0275\u0275text(150, "record UserDTO(String name, String email)");
      \u0275\u0275elementEnd();
      \u0275\u0275text(151, " \u2014 immutable, serializable, zero boilerplate.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(152, "div", 36)(153, "div", 37);
      \u0275\u0275text(154, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "div")(156, "h4", 34);
      \u0275\u0275text(157, "Domain Events");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(158, "p", 35)(159, "code");
      \u0275\u0275text(160, "sealed interface DomainEvent permits UserCreated, OrderPlaced");
      \u0275\u0275elementEnd();
      \u0275\u0275text(161, " \u2014 sealed types ensure event handlers cover ALL event types.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(162, "div", 38)(163, "div", 39);
      \u0275\u0275text(164, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(165, "div")(166, "h4", 34);
      \u0275\u0275text(167, "Result Types");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(168, "p", 35)(169, "code");
      \u0275\u0275text(170, "sealed interface Result permits Success, Failure");
      \u0275\u0275elementEnd();
      \u0275\u0275text(171, " with records \u2014 functional error handling without exceptions.");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(32);
      \u0275\u0275property("code", ctx.codeRecordIntro);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 22);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.activePanel() === "class");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("~", ctx.classLines(), " lines");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.classFeatures());
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.activePanel() === "record");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", ctx.recordLines(), " line");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.recordFeatures());
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
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(31);
      \u0275\u0275property("code", ctx.codeSealed);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(5);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeRecordFeatures);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeCombined);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codePattern);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeLocal);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ['\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-violet[_ngcontent-%COMP%] {\n  color: #7c3aed;\n}\n.icon-purple[_ngcontent-%COMP%] {\n  color: #9333ea;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 700;\n}\n.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #7c3aed;\n}\n.viz-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);\n  padding: 28px 24px;\n}\n.viz-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.compare-demo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.compare-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 16px;\n  border-radius: 14px;\n  border: 2px solid #e2e8f0;\n  transition: all 0.3s;\n}\n.compare-panel.active[_ngcontent-%COMP%] {\n  border-color: #7c3aed;\n  background: #faf5ff;\n}\n.panel-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.5rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  color: #94a3b8;\n  margin-bottom: 6px;\n}\n.line-counter[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin-bottom: 12px;\n  font-family: "JetBrains Mono", monospace;\n}\n.compare-vs[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 0.78rem;\n  font-weight: 800;\n  color: #94a3b8;\n}\n.panel-features[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.feature[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 8px;\n  border-radius: 6px;\n  font-size: 0.62rem;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n}\n.feature.auto[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border-color: #86efac;\n}\n.feature.manual[_ngcontent-%COMP%] {\n  background: #fff7ed;\n  border-color: #fed7aa;\n}\n.f-icon[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n}\n.f-name[_ngcontent-%COMP%] {\n  flex: 1;\n  font-family: "JetBrains Mono", monospace;\n  color: #334155;\n}\n.f-badge[_ngcontent-%COMP%] {\n  font-size: 0.5rem;\n  font-weight: 700;\n  padding: 1px 5px;\n  border-radius: 3px;\n}\n.manual-badge[_ngcontent-%COMP%] {\n  background: #fed7aa;\n  color: #9a3412;\n}\n.auto-badge[_ngcontent-%COMP%] {\n  background: #bbf7d0;\n  color: #166534;\n}\n.viz-status[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n  margin-bottom: 20px;\n}\n.viz-controls[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-violet[_ngcontent-%COMP%] {\n  background: #7c3aed;\n  color: #fff;\n}\n.btn-violet[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #6d28d9;\n}\n.btn-gray[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #334155;\n}\n.btn-gray[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #cbd5e1;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.op-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.op-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n.use-cases[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.use-case[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 14px;\n  border: 1px solid;\n}\n.use-case.violet[_ngcontent-%COMP%] {\n  background: #faf5ff;\n  border-color: #d8b4fe;\n}\n.use-case.blue[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.use-case.purple[_ngcontent-%COMP%] {\n  background: #f5f3ff;\n  border-color: #c4b5fd;\n}\n.use-num[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.violet-bg[_ngcontent-%COMP%] {\n  background: #7c3aed;\n}\n.blue-bg[_ngcontent-%COMP%] {\n  background: #3b82f6;\n}\n.purple-bg[_ngcontent-%COMP%] {\n  background: #9333ea;\n}\n.use-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.use-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  line-height: 1.55;\n  margin: 0;\n  color: #334155;\n}\n.use-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.06);\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.72rem;\n}\n/*# sourceMappingURL=records-sealed.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecordsSealedComponent, [{
    type: Component,
    args: [{ selector: "app-topic-records-sealed", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout
      title="Records & Sealed Classes"
      subtitle="Modern Java's power features. Immutable data carriers with Records and controlled hierarchies with Sealed Classes."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #7c3aed, #a78bfa)">

      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-violet" /> What are Records?</h2>
        <div class="prose">
          <p><strong>Records</strong> (Java 16+) are immutable data carriers \u2014 classes whose sole purpose is to hold data. The compiler auto-generates the constructor, getters, <code>equals()</code>, <code>hashCode()</code>, and <code>toString()</code>.</p>
          <ul>
            <li><strong>Concise:</strong> One line replaces 50+ lines of boilerplate.</li>
            <li><strong>Immutable:</strong> All fields are <code>final</code> \u2014 no setters.</li>
            <li><strong>Transparent:</strong> All state is in the record header.</li>
          </ul>
          <app-code-block [code]="codeRecordIntro" />
        </div>
      </section>

      <!-- Interactive Visualizer -->
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title"><app-icon name="play" [size]="22" css="icon-violet" /> Record vs Class Comparison</h3>
          <div class="compare-demo">
            <div class="compare-panel" [class.active]="activePanel() === 'class'">
              <span class="panel-label">TRADITIONAL CLASS</span>
              <div class="line-counter">~{{ classLines() }} lines</div>
              <div class="panel-features">
                @for (f of classFeatures(); track f.name) {
                  <div class="feature" [class.manual]="!f.auto">
                    <span class="f-icon">{{ f.auto ? '\u270D\uFE0F' : '\u270D\uFE0F' }}</span>
                    <span class="f-name">{{ f.name }}</span>
                    <span class="f-badge manual-badge">manual</span>
                  </div>
                }
              </div>
            </div>
            <div class="compare-vs">vs</div>
            <div class="compare-panel" [class.active]="activePanel() === 'record'">
              <span class="panel-label">RECORD</span>
              <div class="line-counter">{{ recordLines() }} line</div>
              <div class="panel-features">
                @for (f of recordFeatures(); track f.name) {
                  <div class="feature" [class.auto]="f.auto">
                    <span class="f-icon">{{ f.auto ? '\u{1F916}' : '\u270D\uFE0F' }}</span>
                    <span class="f-name">{{ f.name }}</span>
                    <span class="f-badge" [class.auto-badge]="f.auto">{{ f.auto ? 'auto' : 'manual' }}</span>
                  </div>
                }
              </div>
            </div>
          </div>
          <div class="viz-status">{{ status() }}</div>
          <div class="viz-controls">
            <button (click)="showComparison()" [disabled]="isAnimating()" class="btn btn-violet"><app-icon name="play" [size]="16" /> Compare</button>
            <button (click)="resetDemo()" [disabled]="isAnimating()" class="btn btn-gray"><app-icon name="refresh-cw" [size]="16" /> Reset</button>
          </div>
        </div>
      </section>

      <!-- Sealed Classes -->
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-purple" /> Sealed Classes</h2>
        <div class="prose">
          <p><strong>Sealed Classes</strong> (Java 17) restrict which classes can extend them. This enables exhaustive <code>switch</code> patterns and creates controlled hierarchies.</p>
          <ul>
            <li><strong>permits:</strong> Explicitly lists allowed subclasses.</li>
            <li><strong>Subclasses must be:</strong> <code>final</code>, <code>sealed</code>, or <code>non-sealed</code>.</li>
            <li><strong>Pattern matching:</strong> Compiler can verify all subtypes are handled.</li>
          </ul>
          <app-code-block [code]="codeSealed" />
        </div>
      </section>

      <!-- Key Concepts -->
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Patterns</h2>
        <div class="op-grid">
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Record Features</h3>
            <p class="op-desc">Custom constructors, methods, and implementing interfaces.</p>
            <app-code-block [code]="codeRecordFeatures" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Sealed + Records</h3>
            <p class="op-desc">Combine both for powerful algebraic data types.</p>
            <app-code-block [code]="codeCombined" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Pattern Matching</h3>
            <p class="op-desc">Exhaustive switch with sealed types and record deconstruction.</p>
            <app-code-block [code]="codePattern" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Local Records</h3>
            <p class="op-desc">Define records inside methods for temporary data grouping.</p>
            <app-code-block [code]="codeLocal" />
          </div>
        </div>
      </section>

      <!-- Use Cases -->
      <section class="section">
        <h2 class="section-heading"><app-icon name="briefcase" [size]="28" css="icon-violet" /> Real-Time Use Cases</h2>
        <div class="use-cases">
          <div class="use-case violet"><div class="use-num violet-bg">1</div><div><h4 class="use-title">DTOs in REST APIs</h4><p class="use-desc">Records are perfect for request/response DTOs: <code>record UserDTO(String name, String email)</code> \u2014 immutable, serializable, zero boilerplate.</p></div></div>
          <div class="use-case blue"><div class="use-num blue-bg">2</div><div><h4 class="use-title">Domain Events</h4><p class="use-desc"><code>sealed interface DomainEvent permits UserCreated, OrderPlaced</code> \u2014 sealed types ensure event handlers cover ALL event types.</p></div></div>
          <div class="use-case purple"><div class="use-num purple-bg">3</div><div><h4 class="use-title">Result Types</h4><p class="use-desc"><code>sealed interface Result permits Success, Failure</code> with records \u2014 functional error handling without exceptions.</p></div></div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ['/* angular:styles/component:css;1bb072431e6e110d0b664a6b4982bf6e3de9baeea28034845623ac249c6e8bb5;D:/A21/JavaIQ/src/app/features/tutorials/topics/records-sealed.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-violet {\n  color: #7c3aed;\n}\n.icon-purple {\n  color: #9333ea;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.prose ul {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose li {\n  margin-bottom: 8px;\n}\n.prose strong {\n  color: #0f172a;\n  font-weight: 700;\n}\n.prose code {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #7c3aed;\n}\n.viz-card {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);\n  padding: 28px 24px;\n}\n.viz-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.compare-demo {\n  display: flex;\n  align-items: stretch;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.compare-panel {\n  flex: 1;\n  padding: 16px;\n  border-radius: 14px;\n  border: 2px solid #e2e8f0;\n  transition: all 0.3s;\n}\n.compare-panel.active {\n  border-color: #7c3aed;\n  background: #faf5ff;\n}\n.panel-label {\n  display: block;\n  font-size: 0.5rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  color: #94a3b8;\n  margin-bottom: 6px;\n}\n.line-counter {\n  font-size: 1.2rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin-bottom: 12px;\n  font-family: "JetBrains Mono", monospace;\n}\n.compare-vs {\n  display: flex;\n  align-items: center;\n  font-size: 0.78rem;\n  font-weight: 800;\n  color: #94a3b8;\n}\n.panel-features {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.feature {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 8px;\n  border-radius: 6px;\n  font-size: 0.62rem;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n}\n.feature.auto {\n  background: #f0fdf4;\n  border-color: #86efac;\n}\n.feature.manual {\n  background: #fff7ed;\n  border-color: #fed7aa;\n}\n.f-icon {\n  font-size: 0.7rem;\n}\n.f-name {\n  flex: 1;\n  font-family: "JetBrains Mono", monospace;\n  color: #334155;\n}\n.f-badge {\n  font-size: 0.5rem;\n  font-weight: 700;\n  padding: 1px 5px;\n  border-radius: 3px;\n}\n.manual-badge {\n  background: #fed7aa;\n  color: #9a3412;\n}\n.auto-badge {\n  background: #bbf7d0;\n  color: #166534;\n}\n.viz-status {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n  margin-bottom: 20px;\n}\n.viz-controls {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-violet {\n  background: #7c3aed;\n  color: #fff;\n}\n.btn-violet:hover:not(:disabled) {\n  background: #6d28d9;\n}\n.btn-gray {\n  background: #e2e8f0;\n  color: #334155;\n}\n.btn-gray:hover:not(:disabled) {\n  background: #cbd5e1;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.op-card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.op-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc {\n  font-size: 0.78rem;\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n.use-cases {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.use-case {\n  display: flex;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 14px;\n  border: 1px solid;\n}\n.use-case.violet {\n  background: #faf5ff;\n  border-color: #d8b4fe;\n}\n.use-case.blue {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.use-case.purple {\n  background: #f5f3ff;\n  border-color: #c4b5fd;\n}\n.use-num {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.violet-bg {\n  background: #7c3aed;\n}\n.blue-bg {\n  background: #3b82f6;\n}\n.purple-bg {\n  background: #9333ea;\n}\n.use-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.use-desc {\n  font-size: 0.78rem;\n  line-height: 1.55;\n  margin: 0;\n  color: #334155;\n}\n.use-desc code {\n  background: rgba(0, 0, 0, 0.06);\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.72rem;\n}\n/*# sourceMappingURL=records-sealed.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecordsSealedComponent, { className: "RecordsSealedComponent", filePath: "src/app/features/tutorials/topics/records-sealed.component.ts", lineNumber: 176 });
})();
export {
  RecordsSealedComponent
};
//# sourceMappingURL=chunk-G3CFLVD3.js.map
