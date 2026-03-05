import {
  CodeBlockComponent,
  IconComponent,
  TutorialLayoutComponent
} from "./chunk-MLPCG66Y.js";
import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-VBTVL2BZ.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/encapsulation.component.ts
var _forTrack0 = ($index, $item) => $item.name;
function EncapsulationComponent_For_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "span", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 46);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 47);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(f_r1.modifier);
    \u0275\u0275classProp("targeted", f_r1.name === ctx_r1.targetField());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r1.modifier);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", f_r1.name, ": ", f_r1.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r1.icon);
  }
}
function EncapsulationComponent_For_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "span", 49);
    \u0275\u0275text(2, "public");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 46);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", m_r3.name === ctx_r1.activeMethod());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", m_r3.name, "()");
  }
}
var EncapsulationComponent = class _EncapsulationComponent {
  fields = signal([
    { name: "balance", type: "double", modifier: "private", icon: "\u{1F512}" },
    { name: "accountId", type: "String", modifier: "private", icon: "\u{1F512}" },
    { name: "ownerName", type: "String", modifier: "protected", icon: "\u{1F511}" }
  ], ...ngDevMode ? [{ debugName: "fields" }] : []);
  methods = signal([
    { name: "getBalance" },
    { name: "deposit" },
    { name: "withdraw" }
  ], ...ngDevMode ? [{ debugName: "methods" }] : []);
  targetField = signal("", ...ngDevMode ? [{ debugName: "targetField" }] : []);
  activeMethod = signal("", ...ngDevMode ? [{ debugName: "activeMethod" }] : []);
  callerAction = signal("account.???", ...ngDevMode ? [{ debugName: "callerAction" }] : []);
  accessDenied = signal(false, ...ngDevMode ? [{ debugName: "accessDenied" }] : []);
  accessAllowed = signal(false, ...ngDevMode ? [{ debugName: "accessAllowed" }] : []);
  status = signal("Fields are private (\u{1F512}). External code must use public methods.", ...ngDevMode ? [{ debugName: "status" }] : []);
  isAnimating = signal(false, ...ngDevMode ? [{ debugName: "isAnimating" }] : []);
  codeModifiers = `// Access Modifier Visibility
// \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
// \u2502 Modifier  \u2502 Class \u2502 Package \u2502 Subclass \u2502 World \u2502
// \u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
// \u2502 private   \u2502  \u2705   \u2502   \u274C    \u2502    \u274C    \u2502  \u274C   \u2502
// \u2502 default   \u2502  \u2705   \u2502   \u2705    \u2502    \u274C    \u2502  \u274C   \u2502
// \u2502 protected \u2502  \u2705   \u2502   \u2705    \u2502    \u2705    \u2502  \u274C   \u2502
// \u2502 public    \u2502  \u2705   \u2502   \u2705    \u2502    \u2705    \u2502  \u2705   \u2502
// \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518`;
  codeBasic = `public class BankAccount {
    private double balance; // hidden!

    public double getBalance() {
        return balance;
    }

    public void deposit(double amount) {
        if (amount <= 0)
            throw new IllegalArgumentException(
                "Amount must be positive");
        this.balance += amount;
    }
}`;
  codeImmutable = `public final class Money {
    private final double amount;
    private final String currency;

    public Money(double amount, String currency) {
        this.amount = amount;
        this.currency = currency;
    }

    // Only getters \u2014 no setters!
    public double getAmount() { return amount; }
    public String getCurrency() { return currency; }
}`;
  codeDefensive = `public class Team {
    private final List<String> members;

    public Team(List<String> members) {
        // Defensive copy on input
        this.members = new ArrayList<>(members);
    }

    public List<String> getMembers() {
        // Defensive copy on output
        return Collections.unmodifiableList(members);
    }
}`;
  codeRecord = `// Java 16+ Record \u2014 encapsulation built in!
public record Point(int x, int y) {
    // Compiler generates:
    // - private final fields
    // - public getters x(), y()
    // - equals(), hashCode(), toString()
}

Point p = new Point(3, 5);
p.x(); // 3 \u2014 getter, not field access`;
  sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }
  async tryDirectAccess() {
    if (this.isAnimating())
      return;
    this.isAnimating.set(true);
    this.accessAllowed.set(false);
    this.activeMethod.set("");
    this.callerAction.set("account.balance = 1000000;");
    this.targetField.set("balance");
    this.status.set("Trying to access private field directly...");
    await this.sleep(1200);
    this.accessDenied.set(true);
    this.status.set("\u274C COMPILE ERROR: balance has private access in BankAccount");
    await this.sleep(1500);
    this.callerAction.set('account.accountId = "HACK";');
    this.targetField.set("accountId");
    this.status.set("Trying another private field...");
    await this.sleep(1200);
    this.status.set("\u274C BLOCKED! Private fields cannot be accessed from outside the class.");
    this.isAnimating.set(false);
  }
  async tryGetterSetter() {
    if (this.isAnimating())
      return;
    this.isAnimating.set(true);
    this.accessDenied.set(false);
    this.targetField.set("");
    this.callerAction.set("account.deposit(500.0);");
    this.activeMethod.set("deposit");
    this.status.set("Calling public deposit() method...");
    await this.sleep(1200);
    this.accessAllowed.set(true);
    this.status.set("\u2705 deposit() validates amount > 0, then updates balance safely.");
    await this.sleep(1200);
    this.callerAction.set("account.getBalance();");
    this.activeMethod.set("getBalance");
    this.status.set("\u2705 getBalance() returns the value \u2014 read-only access to private data!");
    await this.sleep(1200);
    this.status.set("Encapsulation ensures data integrity through controlled access! \u2705");
    this.isAnimating.set(false);
  }
  resetDemo() {
    this.targetField.set("");
    this.activeMethod.set("");
    this.callerAction.set("account.???");
    this.accessDenied.set(false);
    this.accessAllowed.set(false);
    this.status.set("Fields are private (\u{1F512}). External code must use public methods.");
    this.isAnimating.set(false);
  }
  static \u0275fac = function EncapsulationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EncapsulationComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EncapsulationComponent, selectors: [["app-topic-encapsulation"]], decls: 131, vars: 25, consts: [["title", "Encapsulation", "subtitle", "Protect your data. Learn how access modifiers, getters/setters, and information hiding create robust, maintainable Java classes.", "badge", "CORE JAVA", "gradient", "linear-gradient(135deg, #059669, #34d399)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-emerald", 3, "size"], [1, "prose"], [1, "sub-heading"], [3, "code"], [1, "viz-card"], [1, "viz-title"], ["name", "play", "css", "icon-emerald", 3, "size"], [1, "access-demo"], [1, "class-box"], [1, "class-label"], [1, "fields-container"], [1, "field-item", 3, "class", "targeted"], [1, "methods-container"], [1, "method-item", 3, "active"], [1, "caller-box"], [1, "caller-label"], [1, "caller-action"], [1, "viz-status"], [1, "viz-controls"], [1, "btn", "btn-red", 3, "click", "disabled"], ["name", "shield", 3, "size"], [1, "btn", "btn-emerald", 3, "click", "disabled"], ["name", "check-circle", 3, "size"], [1, "btn", "btn-gray", 3, "click", "disabled"], ["name", "refresh-cw", 3, "size"], ["name", "code", "css", "icon-teal", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"], ["name", "arrow-right", "css", "icon-teal", 3, "size"], [1, "op-desc"], ["name", "briefcase", "css", "icon-emerald", 3, "size"], [1, "use-cases"], [1, "use-case", "emerald"], [1, "use-num", "emerald-bg"], [1, "use-title"], [1, "use-desc"], [1, "use-case", "blue"], [1, "use-num", "blue-bg"], [1, "use-case", "purple"], [1, "use-num", "purple-bg"], [1, "field-item"], [1, "modifier-badge"], [1, "field-name"], [1, "field-icon"], [1, "method-item"], [1, "modifier-badge", "public"]], template: function EncapsulationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " What is Encapsulation? ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p")(7, "strong");
      \u0275\u0275text(8, "Encapsulation");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, " is the bundling of data (fields) and the methods that operate on that data into a single unit (class), while restricting direct access to internal details. It's like a capsule \u2014 the contents are protected. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "ul")(11, "li")(12, "strong");
      \u0275\u0275text(13, "private fields:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(14, " Data is hidden from outside classes.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "li")(16, "strong");
      \u0275\u0275text(17, "public getters/setters:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(18, " Controlled access with validation logic.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "li")(20, "strong");
      \u0275\u0275text(21, "Immutability:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(22, " Only provide getters \u2014 no setters \u2014 for read-only objects.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "h4", 5);
      \u0275\u0275text(24, "Access Modifiers Overview");
      \u0275\u0275elementEnd();
      \u0275\u0275element(25, "app-code-block", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "section", 1)(27, "div", 7)(28, "h3", 8);
      \u0275\u0275element(29, "app-icon", 9);
      \u0275\u0275text(30, " Access Control Visualizer ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 10)(32, "div", 11)(33, "span", 12);
      \u0275\u0275text(34, "BankAccount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 13);
      \u0275\u0275repeaterCreate(36, EncapsulationComponent_For_37_Template, 7, 8, "div", 14, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 15);
      \u0275\u0275repeaterCreate(39, EncapsulationComponent_For_40_Template, 5, 3, "div", 16, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 17)(42, "span", 18);
      \u0275\u0275text(43, "External Code");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "span", 19);
      \u0275\u0275text(45);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(46, "div", 20);
      \u0275\u0275text(47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 21)(49, "button", 22);
      \u0275\u0275listener("click", function EncapsulationComponent_Template_button_click_49_listener() {
        return ctx.tryDirectAccess();
      });
      \u0275\u0275element(50, "app-icon", 23);
      \u0275\u0275text(51, " Try Direct Access ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "button", 24);
      \u0275\u0275listener("click", function EncapsulationComponent_Template_button_click_52_listener() {
        return ctx.tryGetterSetter();
      });
      \u0275\u0275element(53, "app-icon", 25);
      \u0275\u0275text(54, " Use Getter/Setter ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "button", 26);
      \u0275\u0275listener("click", function EncapsulationComponent_Template_button_click_55_listener() {
        return ctx.resetDemo();
      });
      \u0275\u0275element(56, "app-icon", 27);
      \u0275\u0275text(57, " Reset ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(58, "section", 1)(59, "h2", 2);
      \u0275\u0275element(60, "app-icon", 28);
      \u0275\u0275text(61, " Encapsulation Patterns ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "div", 29)(63, "div", 30)(64, "h3", 31);
      \u0275\u0275element(65, "app-icon", 32);
      \u0275\u0275text(66, " Basic Encapsulation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "p", 33);
      \u0275\u0275text(68, "Private fields + public getters/setters with validation.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(69, "app-code-block", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "div", 30)(71, "h3", 31);
      \u0275\u0275element(72, "app-icon", 32);
      \u0275\u0275text(73, " Immutable Objects");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "p", 33);
      \u0275\u0275text(75, "No setters, final fields \u2014 object state cannot change after creation.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(76, "app-code-block", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "div", 30)(78, "h3", 31);
      \u0275\u0275element(79, "app-icon", 32);
      \u0275\u0275text(80, " Defensive Copying");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "p", 33);
      \u0275\u0275text(82, "Prevent mutation of internal collections by returning copies.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(83, "app-code-block", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "div", 30)(85, "h3", 31);
      \u0275\u0275element(86, "app-icon", 32);
      \u0275\u0275text(87, " Records (Java 16+)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "p", 33);
      \u0275\u0275text(89, "Compact syntax for immutable data carriers with built-in encapsulation.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(90, "app-code-block", 6);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(91, "section", 1)(92, "h2", 2);
      \u0275\u0275element(93, "app-icon", 34);
      \u0275\u0275text(94, " Real-Time Use Cases ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "div", 35)(96, "div", 36)(97, "div", 37);
      \u0275\u0275text(98, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "div")(100, "h4", 38);
      \u0275\u0275text(101, "Banking Systems");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "p", 39);
      \u0275\u0275text(103, "Account balance is ");
      \u0275\u0275elementStart(104, "code");
      \u0275\u0275text(105, "private");
      \u0275\u0275elementEnd();
      \u0275\u0275text(106, ". Deposits/withdrawals go through methods with validation \u2014 preventing negative balances or overdrafts.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(107, "div", 40)(108, "div", 41);
      \u0275\u0275text(109, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "div")(111, "h4", 38);
      \u0275\u0275text(112, "JPA Entity Classes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "p", 39);
      \u0275\u0275text(114, "Fields are ");
      \u0275\u0275elementStart(115, "code");
      \u0275\u0275text(116, "private");
      \u0275\u0275elementEnd();
      \u0275\u0275text(117, " with getters/setters. Hibernate accesses them via reflection, but your application code can't break invariants.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(118, "div", 42)(119, "div", 43);
      \u0275\u0275text(120, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "div")(122, "h4", 38);
      \u0275\u0275text(123, "Thread-Safe Wrappers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "p", 39)(125, "code");
      \u0275\u0275text(126, "Collections.synchronizedList()");
      \u0275\u0275elementEnd();
      \u0275\u0275text(127, " wraps an ");
      \u0275\u0275elementStart(128, "code");
      \u0275\u0275text(129, "ArrayList");
      \u0275\u0275elementEnd();
      \u0275\u0275text(130, " \u2014 the internal list is private, and all access is synchronized through public methods.");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(22);
      \u0275\u0275property("code", ctx.codeModifiers);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 22);
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.fields());
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.methods());
      \u0275\u0275advance(2);
      \u0275\u0275classProp("denied", ctx.accessDenied())("allowed", ctx.accessAllowed());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.callerAction());
      \u0275\u0275advance(2);
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
      \u0275\u0275property("code", ctx.codeBasic);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeImmutable);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeDefensive);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeRecord);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ['\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-emerald[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.icon-teal[_ngcontent-%COMP%] {\n  color: #0d9488;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 700;\n}\n.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #059669;\n}\n.sub-heading[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 24px 0 8px;\n}\n.viz-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);\n  padding: 28px 24px;\n}\n.viz-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.access-demo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.class-box[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border: 2px solid #86efac;\n  border-radius: 16px;\n  padding: 20px;\n  width: 100%;\n  max-width: 360px;\n}\n.class-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.95rem;\n  font-weight: 800;\n  color: #0f172a;\n  font-family: "JetBrains Mono", monospace;\n  text-align: center;\n  margin-bottom: 12px;\n}\n.fields-container[_ngcontent-%COMP%], \n.methods-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 10px;\n}\n.field-item[_ngcontent-%COMP%], \n.method-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 10px;\n  background: #fff;\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n  font-size: 0.7rem;\n  font-family: "JetBrains Mono", monospace;\n  transition: all 0.3s;\n}\n.field-item.targeted[_ngcontent-%COMP%] {\n  border-color: #dc2626;\n  background: #fef2f2;\n}\n.method-item.active[_ngcontent-%COMP%] {\n  border-color: #059669;\n  background: #ecfdf5;\n}\n.modifier-badge[_ngcontent-%COMP%] {\n  font-size: 0.55rem;\n  font-weight: 700;\n  padding: 2px 6px;\n  border-radius: 4px;\n  text-transform: uppercase;\n}\n.modifier-badge.public[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.field-item.private[_ngcontent-%COMP%]   .modifier-badge[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.field-item.protected[_ngcontent-%COMP%]   .modifier-badge[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.field-name[_ngcontent-%COMP%] {\n  flex: 1;\n  color: #334155;\n}\n.field-icon[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.caller-box[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 2px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 16px 20px;\n  text-align: center;\n  width: 100%;\n  max-width: 360px;\n  transition: all 0.3s;\n}\n.caller-box.denied[_ngcontent-%COMP%] {\n  border-color: #dc2626;\n  background: #fef2f2;\n}\n.caller-box.allowed[_ngcontent-%COMP%] {\n  border-color: #059669;\n  background: #ecfdf5;\n}\n.caller-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.58rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  color: #94a3b8;\n  margin-bottom: 6px;\n}\n.caller-action[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-family: "JetBrains Mono", monospace;\n  color: #334155;\n}\n.viz-status[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n  margin-bottom: 20px;\n}\n.viz-controls[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-emerald[_ngcontent-%COMP%] {\n  background: #059669;\n  color: #fff;\n}\n.btn-emerald[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #047857;\n}\n.btn-red[_ngcontent-%COMP%] {\n  background: #dc2626;\n  color: #fff;\n}\n.btn-red[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #b91c1c;\n}\n.btn-gray[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #334155;\n}\n.btn-gray[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #cbd5e1;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.op-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.op-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n.use-cases[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.use-case[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 14px;\n  border: 1px solid;\n}\n.use-case.emerald[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  border-color: #86efac;\n}\n.use-case.blue[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.use-case.purple[_ngcontent-%COMP%] {\n  background: #faf5ff;\n  border-color: #d8b4fe;\n}\n.use-num[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.emerald-bg[_ngcontent-%COMP%] {\n  background: #059669;\n}\n.blue-bg[_ngcontent-%COMP%] {\n  background: #3b82f6;\n}\n.purple-bg[_ngcontent-%COMP%] {\n  background: #8b5cf6;\n}\n.use-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.use-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  line-height: 1.55;\n  margin: 0;\n  color: #334155;\n}\n.use-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.06);\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.72rem;\n}\n/*# sourceMappingURL=encapsulation.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EncapsulationComponent, [{
    type: Component,
    args: [{ selector: "app-topic-encapsulation", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout
      title="Encapsulation"
      subtitle="Protect your data. Learn how access modifiers, getters/setters, and information hiding create robust, maintainable Java classes."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #059669, #34d399)">

      <section class="section">
        <h2 class="section-heading">
          <app-icon name="book-open" [size]="28" css="icon-emerald" /> What is Encapsulation?
        </h2>
        <div class="prose">
          <p>
            <strong>Encapsulation</strong> is the bundling of data (fields) and the methods that operate on that data into a single unit (class), while restricting direct access to internal details. It's like a capsule \u2014 the contents are protected.
          </p>
          <ul>
            <li><strong>private fields:</strong> Data is hidden from outside classes.</li>
            <li><strong>public getters/setters:</strong> Controlled access with validation logic.</li>
            <li><strong>Immutability:</strong> Only provide getters \u2014 no setters \u2014 for read-only objects.</li>
          </ul>
          <h4 class="sub-heading">Access Modifiers Overview</h4>
          <app-code-block [code]="codeModifiers" />
        </div>
      </section>

      <!-- Interactive Visualizer -->
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title">
            <app-icon name="play" [size]="22" css="icon-emerald" /> Access Control Visualizer
          </h3>

          <div class="access-demo">
            <div class="class-box">
              <span class="class-label">BankAccount</span>
              <div class="fields-container">
                @for (f of fields(); track f.name) {
                  <div class="field-item" [class]="f.modifier" [class.targeted]="f.name === targetField()">
                    <span class="modifier-badge">{{ f.modifier }}</span>
                    <span class="field-name">{{ f.name }}: {{ f.type }}</span>
                    <span class="field-icon">{{ f.icon }}</span>
                  </div>
                }
              </div>
              <div class="methods-container">
                @for (m of methods(); track m.name) {
                  <div class="method-item" [class.active]="m.name === activeMethod()">
                    <span class="modifier-badge public">public</span>
                    <span class="field-name">{{ m.name }}()</span>
                  </div>
                }
              </div>
            </div>

            <div class="caller-box" [class.denied]="accessDenied()" [class.allowed]="accessAllowed()">
              <span class="caller-label">External Code</span>
              <span class="caller-action">{{ callerAction() }}</span>
            </div>
          </div>

          <div class="viz-status">{{ status() }}</div>

          <div class="viz-controls">
            <button (click)="tryDirectAccess()" [disabled]="isAnimating()" class="btn btn-red">
              <app-icon name="shield" [size]="16" /> Try Direct Access
            </button>
            <button (click)="tryGetterSetter()" [disabled]="isAnimating()" class="btn btn-emerald">
              <app-icon name="check-circle" [size]="16" /> Use Getter/Setter
            </button>
            <button (click)="resetDemo()" [disabled]="isAnimating()" class="btn btn-gray">
              <app-icon name="refresh-cw" [size]="16" /> Reset
            </button>
          </div>
        </div>
      </section>

      <!-- Key Concepts -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="code" [size]="28" css="icon-teal" /> Encapsulation Patterns
        </h2>
        <div class="op-grid">
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-teal" /> Basic Encapsulation</h3>
            <p class="op-desc">Private fields + public getters/setters with validation.</p>
            <app-code-block [code]="codeBasic" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-teal" /> Immutable Objects</h3>
            <p class="op-desc">No setters, final fields \u2014 object state cannot change after creation.</p>
            <app-code-block [code]="codeImmutable" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-teal" /> Defensive Copying</h3>
            <p class="op-desc">Prevent mutation of internal collections by returning copies.</p>
            <app-code-block [code]="codeDefensive" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-teal" /> Records (Java 16+)</h3>
            <p class="op-desc">Compact syntax for immutable data carriers with built-in encapsulation.</p>
            <app-code-block [code]="codeRecord" />
          </div>
        </div>
      </section>

      <!-- Use Cases -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="briefcase" [size]="28" css="icon-emerald" /> Real-Time Use Cases
        </h2>
        <div class="use-cases">
          <div class="use-case emerald">
            <div class="use-num emerald-bg">1</div>
            <div>
              <h4 class="use-title">Banking Systems</h4>
              <p class="use-desc">Account balance is <code>private</code>. Deposits/withdrawals go through methods with validation \u2014 preventing negative balances or overdrafts.</p>
            </div>
          </div>
          <div class="use-case blue">
            <div class="use-num blue-bg">2</div>
            <div>
              <h4 class="use-title">JPA Entity Classes</h4>
              <p class="use-desc">Fields are <code>private</code> with getters/setters. Hibernate accesses them via reflection, but your application code can't break invariants.</p>
            </div>
          </div>
          <div class="use-case purple">
            <div class="use-num purple-bg">3</div>
            <div>
              <h4 class="use-title">Thread-Safe Wrappers</h4>
              <p class="use-desc"><code>Collections.synchronizedList()</code> wraps an <code>ArrayList</code> \u2014 the internal list is private, and all access is synchronized through public methods.</p>
            </div>
          </div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ['/* angular:styles/component:css;125414fbd3a0d10888341d858086e4c25518caf0921848e51a030d86c1600461;/Users/sathishkumarramalingam/projects/JavaIQ/.claude/worktrees/goofy-haibt/src/app/features/tutorials/topics/encapsulation.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-emerald {\n  color: #059669;\n}\n.icon-teal {\n  color: #0d9488;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.prose ul {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose li {\n  margin-bottom: 8px;\n}\n.prose strong {\n  color: #0f172a;\n  font-weight: 700;\n}\n.prose code {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #059669;\n}\n.sub-heading {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 24px 0 8px;\n}\n.viz-card {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);\n  padding: 28px 24px;\n}\n.viz-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.access-demo {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.class-box {\n  background: #f0fdf4;\n  border: 2px solid #86efac;\n  border-radius: 16px;\n  padding: 20px;\n  width: 100%;\n  max-width: 360px;\n}\n.class-label {\n  display: block;\n  font-size: 0.95rem;\n  font-weight: 800;\n  color: #0f172a;\n  font-family: "JetBrains Mono", monospace;\n  text-align: center;\n  margin-bottom: 12px;\n}\n.fields-container,\n.methods-container {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 10px;\n}\n.field-item,\n.method-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 10px;\n  background: #fff;\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n  font-size: 0.7rem;\n  font-family: "JetBrains Mono", monospace;\n  transition: all 0.3s;\n}\n.field-item.targeted {\n  border-color: #dc2626;\n  background: #fef2f2;\n}\n.method-item.active {\n  border-color: #059669;\n  background: #ecfdf5;\n}\n.modifier-badge {\n  font-size: 0.55rem;\n  font-weight: 700;\n  padding: 2px 6px;\n  border-radius: 4px;\n  text-transform: uppercase;\n}\n.modifier-badge.public {\n  background: #dcfce7;\n  color: #166534;\n}\n.field-item.private .modifier-badge {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.field-item.protected .modifier-badge {\n  background: #fef3c7;\n  color: #92400e;\n}\n.field-name {\n  flex: 1;\n  color: #334155;\n}\n.field-icon {\n  font-size: 0.8rem;\n}\n.caller-box {\n  background: #f8fafc;\n  border: 2px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 16px 20px;\n  text-align: center;\n  width: 100%;\n  max-width: 360px;\n  transition: all 0.3s;\n}\n.caller-box.denied {\n  border-color: #dc2626;\n  background: #fef2f2;\n}\n.caller-box.allowed {\n  border-color: #059669;\n  background: #ecfdf5;\n}\n.caller-label {\n  display: block;\n  font-size: 0.58rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  color: #94a3b8;\n  margin-bottom: 6px;\n}\n.caller-action {\n  font-size: 0.72rem;\n  font-family: "JetBrains Mono", monospace;\n  color: #334155;\n}\n.viz-status {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n  margin-bottom: 20px;\n}\n.viz-controls {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-emerald {\n  background: #059669;\n  color: #fff;\n}\n.btn-emerald:hover:not(:disabled) {\n  background: #047857;\n}\n.btn-red {\n  background: #dc2626;\n  color: #fff;\n}\n.btn-red:hover:not(:disabled) {\n  background: #b91c1c;\n}\n.btn-gray {\n  background: #e2e8f0;\n  color: #334155;\n}\n.btn-gray:hover:not(:disabled) {\n  background: #cbd5e1;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.op-card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.op-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc {\n  font-size: 0.78rem;\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n.use-cases {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.use-case {\n  display: flex;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 14px;\n  border: 1px solid;\n}\n.use-case.emerald {\n  background: #ecfdf5;\n  border-color: #86efac;\n}\n.use-case.blue {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.use-case.purple {\n  background: #faf5ff;\n  border-color: #d8b4fe;\n}\n.use-num {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.emerald-bg {\n  background: #059669;\n}\n.blue-bg {\n  background: #3b82f6;\n}\n.purple-bg {\n  background: #8b5cf6;\n}\n.use-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.use-desc {\n  font-size: 0.78rem;\n  line-height: 1.55;\n  margin: 0;\n  color: #334155;\n}\n.use-desc code {\n  background: rgba(0, 0, 0, 0.06);\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.72rem;\n}\n/*# sourceMappingURL=encapsulation.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EncapsulationComponent, { className: "EncapsulationComponent", filePath: "src/app/features/tutorials/topics/encapsulation.component.ts", lineNumber: 213 });
})();
export {
  EncapsulationComponent
};
//# sourceMappingURL=chunk-UWOIQVMX.js.map
