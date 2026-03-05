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
  ɵɵtextInterpolate1
} from "./chunk-VBTVL2BZ.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/strings.component.ts
var _forTrack0 = ($index, $item) => $item.name;
var _forTrack1 = ($index, $item) => $item.address;
function StringsComponent_For_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "span", 42);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 43);
    \u0275\u0275text(4, "\u2192");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 44);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const v_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("highlight", v_r1.name === ctx_r1.highlighted());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(v_r1.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(v_r1.address);
  }
}
function StringsComponent_For_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "span", 46);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 47);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const obj_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", obj_r3.address === ctx_r1.activeAddr());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(obj_r3.address);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1('"', obj_r3.value, '"');
  }
}
var StringsComponent = class _StringsComponent {
  variables = signal([
    { name: "s1", address: "0x100" },
    { name: "s2", address: "0x100" }
  ], ...ngDevMode ? [{ debugName: "variables" }] : []);
  poolObjects = signal([
    { address: "0x100", value: "Hello" }
  ], ...ngDevMode ? [{ debugName: "poolObjects" }] : []);
  highlighted = signal("", ...ngDevMode ? [{ debugName: "highlighted" }] : []);
  activeAddr = signal("", ...ngDevMode ? [{ debugName: "activeAddr" }] : []);
  status = signal('s1 and s2 both reference the same "Hello" in the String Pool.', ...ngDevMode ? [{ debugName: "status" }] : []);
  isAnimating = signal(false, ...ngDevMode ? [{ debugName: "isAnimating" }] : []);
  codeCreating = `// String literal (uses String Pool)
String s1 = "Hello";
String s2 = "Hello"; // same reference as s1!

// Using new keyword (bypasses pool)
String s3 = new String("Hello"); // different object

// String.valueOf()
String num = String.valueOf(42); // "42"`;
  codeLength = `String s = "Hello World";
s.length();        // 11
s.charAt(0);       // 'H'
s.indexOf("World"); // 6
s.isEmpty();       // false`;
  codeCompare = `String a = "Hello";
String b = new String("Hello");

a == b;           // false (different refs)
a.equals(b);      // true  (same value)
a.equalsIgnoreCase("HELLO"); // true`;
  codeSubstring = `String s = "Hello World";
s.substring(0, 5);    // "Hello"
s.substring(6);       // "World"
s.split(" ");          // ["Hello", "World"]
s.replace("World", "Java"); // "Hello Java"`;
  codeSB = `StringBuilder sb = new StringBuilder();
sb.append("Hello");
sb.append(" ");
sb.append("World");
sb.insert(5, ",");  // "Hello, World"
sb.reverse();       // "dlroW ,olleH"
String result = sb.toString();`;
  sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }
  async demoImmutability() {
    if (this.isAnimating())
      return;
    this.isAnimating.set(true);
    this.status.set('Step 1: s1 = "Hello" \u2014 placed in String Pool...');
    this.highlighted.set("s1");
    this.activeAddr.set("0x100");
    await this.sleep(1200);
    this.status.set('Step 2: s1.concat(" World") \u2014 a NEW string is created...');
    this.poolObjects.update((p) => [...p, { address: "0x200", value: "Hello World" }]);
    this.activeAddr.set("0x200");
    await this.sleep(1500);
    this.status.set('Step 3: s1 still points to "Hello" \u2014 it was NOT modified!');
    this.activeAddr.set("0x100");
    this.highlighted.set("s1");
    await this.sleep(1500);
    this.variables.update((v) => [...v, { name: "s3", address: "0x200" }]);
    this.status.set('The concat result is a new object. s1 is still "Hello". Strings are immutable! \u2705');
    this.isAnimating.set(false);
  }
  async demoStringBuilder() {
    if (this.isAnimating())
      return;
    this.isAnimating.set(true);
    this.status.set("StringBuilder: mutable \u2014 modifies in place, no new objects...");
    this.poolObjects.set([{ address: "0x300", value: "" }]);
    this.variables.set([{ name: "sb", address: "0x300" }]);
    this.highlighted.set("sb");
    this.activeAddr.set("0x300");
    await this.sleep(1e3);
    const steps = ["H", "He", "Hel", "Hell", "Hello"];
    for (const s of steps) {
      this.poolObjects.set([{ address: "0x300", value: s }]);
      this.status.set(`sb.append('${s.slice(-1)}') \u2192 "${s}" (same object 0x300)`);
      await this.sleep(600);
    }
    this.status.set("StringBuilder mutates in place \u2014 1 object vs 5 with String concat! \u26A1");
    this.isAnimating.set(false);
  }
  resetDemo() {
    this.variables.set([
      { name: "s1", address: "0x100" },
      { name: "s2", address: "0x100" }
    ]);
    this.poolObjects.set([{ address: "0x100", value: "Hello" }]);
    this.highlighted.set("");
    this.activeAddr.set("");
    this.status.set('s1 and s2 both reference the same "Hello" in the String Pool.');
    this.isAnimating.set(false);
  }
  static \u0275fac = function StringsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StringsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StringsComponent, selectors: [["app-topic-strings"]], decls: 135, vars: 20, consts: [["title", "Strings & StringBuilder", "subtitle", "Understand string immutability, the string pool, and when to use StringBuilder for efficient manipulation.", "badge", "CORE JAVA", "gradient", "linear-gradient(135deg, #0f766e, #2dd4bf)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-teal", 3, "size"], [1, "prose"], [1, "sub-heading"], [3, "code"], [1, "viz-card"], [1, "viz-title"], ["name", "play", "css", "icon-teal", 3, "size"], [1, "pool-container"], [1, "pool-section"], [1, "pool-label"], [1, "var-list"], [1, "var-item", 3, "highlight"], [1, "pool-objects"], [1, "pool-obj", 3, "active"], [1, "viz-status"], [1, "viz-controls"], [1, "btn", "btn-teal", 3, "click", "disabled"], ["name", "play", 3, "size"], [1, "btn", "btn-purple", 3, "click", "disabled"], ["name", "zap", 3, "size"], [1, "btn", "btn-gray", 3, "click", "disabled"], ["name", "refresh-cw", 3, "size"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"], ["name", "arrow-right", "css", "icon-indigo", 3, "size"], [1, "op-desc"], ["name", "briefcase", "css", "icon-teal", 3, "size"], [1, "use-cases"], [1, "use-case", "teal"], [1, "use-num", "teal-bg"], [1, "use-title"], [1, "use-desc"], [1, "use-case", "blue"], [1, "use-num", "blue-bg"], [1, "use-case", "purple"], [1, "use-num", "purple-bg"], [1, "var-item"], [1, "var-name"], [1, "var-arrow"], [1, "var-addr"], [1, "pool-obj"], [1, "obj-addr"], [1, "obj-val"]], template: function StringsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " What are Strings in Java? ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7, " A ");
      \u0275\u0275elementStart(8, "strong");
      \u0275\u0275text(9, "String");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " in Java is an object that represents a sequence of characters. Strings are ");
      \u0275\u0275elementStart(11, "strong");
      \u0275\u0275text(12, "immutable");
      \u0275\u0275elementEnd();
      \u0275\u0275text(13, " \u2014 once created, their value cannot be changed. Any operation that appears to modify a String actually creates a new String object. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "ul")(15, "li")(16, "strong");
      \u0275\u0275text(17, "Immutable:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "code");
      \u0275\u0275text(19, '"Hello" + " World"');
      \u0275\u0275elementEnd();
      \u0275\u0275text(20, " creates a brand-new String \u2014 the original is untouched.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "li")(22, "strong");
      \u0275\u0275text(23, "String Pool:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(24, " Java caches string literals in a special memory area to save memory. Two identical literals point to the same object.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "li")(26, "strong");
      \u0275\u0275text(27, "StringBuilder:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(28, " For repeated modifications, use ");
      \u0275\u0275elementStart(29, "code");
      \u0275\u0275text(30, "StringBuilder");
      \u0275\u0275elementEnd();
      \u0275\u0275text(31, " \u2014 it's mutable and much faster.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "h4", 5);
      \u0275\u0275text(33, "Creating Strings");
      \u0275\u0275elementEnd();
      \u0275\u0275element(34, "app-code-block", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "section", 1)(36, "div", 7)(37, "h3", 8);
      \u0275\u0275element(38, "app-icon", 9);
      \u0275\u0275text(39, " String Pool Visualizer ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 10)(41, "div", 11)(42, "span", 12);
      \u0275\u0275text(43, "VARIABLES");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 13);
      \u0275\u0275repeaterCreate(45, StringsComponent_For_46_Template, 7, 4, "div", 14, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "div", 11)(48, "span", 12);
      \u0275\u0275text(49, "STRING POOL (HEAP)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "div", 15);
      \u0275\u0275repeaterCreate(51, StringsComponent_For_52_Template, 5, 4, "div", 16, _forTrack1);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(53, "div", 17);
      \u0275\u0275text(54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 18)(56, "button", 19);
      \u0275\u0275listener("click", function StringsComponent_Template_button_click_56_listener() {
        return ctx.demoImmutability();
      });
      \u0275\u0275element(57, "app-icon", 20);
      \u0275\u0275text(58, " Show Immutability ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "button", 21);
      \u0275\u0275listener("click", function StringsComponent_Template_button_click_59_listener() {
        return ctx.demoStringBuilder();
      });
      \u0275\u0275element(60, "app-icon", 22);
      \u0275\u0275text(61, " StringBuilder Demo ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "button", 23);
      \u0275\u0275listener("click", function StringsComponent_Template_button_click_62_listener() {
        return ctx.resetDemo();
      });
      \u0275\u0275element(63, "app-icon", 24);
      \u0275\u0275text(64, " Reset ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(65, "section", 1)(66, "h2", 2);
      \u0275\u0275element(67, "app-icon", 25);
      \u0275\u0275text(68, " Common String Methods ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "div", 26)(70, "div", 27)(71, "h3", 28);
      \u0275\u0275element(72, "app-icon", 29);
      \u0275\u0275text(73, " Length & Access");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "p", 30);
      \u0275\u0275text(75, "Get the length or access individual characters by index.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(76, "app-code-block", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "div", 27)(78, "h3", 28);
      \u0275\u0275element(79, "app-icon", 29);
      \u0275\u0275text(80, " Comparison");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "p", 30);
      \u0275\u0275text(82, "Compare strings by value (not reference) using equals().");
      \u0275\u0275elementEnd();
      \u0275\u0275element(83, "app-code-block", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "div", 27)(85, "h3", 28);
      \u0275\u0275element(86, "app-icon", 29);
      \u0275\u0275text(87, " Substring & Split");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "p", 30);
      \u0275\u0275text(89, "Extract portions of a string or split by delimiter.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(90, "app-code-block", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "div", 27)(92, "h3", 28);
      \u0275\u0275element(93, "app-icon", 29);
      \u0275\u0275text(94, " StringBuilder");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "p", 30);
      \u0275\u0275text(96, "Mutable string operations for performance-critical code.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(97, "app-code-block", 6);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(98, "section", 1)(99, "h2", 2);
      \u0275\u0275element(100, "app-icon", 31);
      \u0275\u0275text(101, " Real-Time Use Cases ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "div", 32)(103, "div", 33)(104, "div", 34);
      \u0275\u0275text(105, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "div")(107, "h4", 35);
      \u0275\u0275text(108, "API JSON Parsing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "p", 36);
      \u0275\u0275text(110, "REST APIs return JSON as strings. You parse, compare, and extract data from string payloads constantly in backend services.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(111, "div", 37)(112, "div", 38);
      \u0275\u0275text(113, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "div")(115, "h4", 35);
      \u0275\u0275text(116, "SQL Query Building");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "p", 36)(118, "code");
      \u0275\u0275text(119, "StringBuilder");
      \u0275\u0275elementEnd();
      \u0275\u0275text(120, " is essential for dynamic SQL queries, building WHERE clauses conditionally without creating hundreds of intermediate String objects.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(121, "div", 39)(122, "div", 40);
      \u0275\u0275text(123, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "div")(125, "h4", 35);
      \u0275\u0275text(126, "Log Message Formatting");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "p", 36);
      \u0275\u0275text(128, "High-throughput systems format millions of log lines per second. Using ");
      \u0275\u0275elementStart(129, "code");
      \u0275\u0275text(130, "String.format()");
      \u0275\u0275elementEnd();
      \u0275\u0275text(131, " or StringBuilder avoids the garbage collection overhead of ");
      \u0275\u0275elementStart(132, "code");
      \u0275\u0275text(133, "+");
      \u0275\u0275elementEnd();
      \u0275\u0275text(134, " concatenation.");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(31);
      \u0275\u0275property("code", ctx.codeCreating);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 22);
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.variables());
      \u0275\u0275advance(6);
      \u0275\u0275repeater(ctx.poolObjects());
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
      \u0275\u0275property("code", ctx.codeLength);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeCompare);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeSubstring);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeSB);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ['\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-teal[_ngcontent-%COMP%] {\n  color: #0d9488;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 700;\n}\n.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #0d9488;\n}\n.sub-heading[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 24px 0 8px;\n}\n.viz-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);\n  padding: 28px 24px;\n}\n.viz-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.pool-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.pool-section[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 16px;\n}\n.pool-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.58rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  color: #94a3b8;\n  margin-bottom: 12px;\n}\n.var-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.var-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  background: #fff;\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n  font-size: 0.75rem;\n  font-family: "JetBrains Mono", monospace;\n  transition: all 0.3s;\n}\n.var-item.highlight[_ngcontent-%COMP%] {\n  border-color: #0d9488;\n  background: #f0fdfa;\n}\n.var-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #0f172a;\n}\n.var-arrow[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.var-addr[_ngcontent-%COMP%] {\n  color: #0d9488;\n  font-size: 0.65rem;\n}\n.pool-objects[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.pool-obj[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px;\n  background: #fff;\n  border-radius: 8px;\n  border: 2px solid #e2e8f0;\n  transition: all 0.3s;\n}\n.pool-obj.active[_ngcontent-%COMP%] {\n  border-color: #0d9488;\n  background: #f0fdfa;\n  transform: scale(1.03);\n}\n.obj-addr[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  color: #94a3b8;\n  font-family: "JetBrains Mono", monospace;\n}\n.obj-val[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #0f172a;\n  font-family: "JetBrains Mono", monospace;\n}\n.viz-status[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n  margin-bottom: 20px;\n}\n.viz-controls[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-teal[_ngcontent-%COMP%] {\n  background: #0d9488;\n  color: #fff;\n}\n.btn-teal[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #0f766e;\n}\n.btn-purple[_ngcontent-%COMP%] {\n  background: #7c3aed;\n  color: #fff;\n}\n.btn-purple[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #6d28d9;\n}\n.btn-gray[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #334155;\n}\n.btn-gray[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #cbd5e1;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  transition: box-shadow 0.2s;\n}\n.op-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.op-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n.use-cases[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.use-case[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 14px;\n  border: 1px solid;\n}\n.use-case.teal[_ngcontent-%COMP%] {\n  background: #f0fdfa;\n  border-color: #99f6e4;\n}\n.use-case.blue[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.use-case.purple[_ngcontent-%COMP%] {\n  background: #faf5ff;\n  border-color: #d8b4fe;\n}\n.use-num[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.teal-bg[_ngcontent-%COMP%] {\n  background: #14b8a6;\n}\n.blue-bg[_ngcontent-%COMP%] {\n  background: #3b82f6;\n}\n.purple-bg[_ngcontent-%COMP%] {\n  background: #8b5cf6;\n}\n.use-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.use-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  line-height: 1.55;\n  margin: 0;\n  color: #334155;\n}\n.use-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.06);\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.72rem;\n}\n/*# sourceMappingURL=strings.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StringsComponent, [{
    type: Component,
    args: [{ selector: "app-topic-strings", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout
      title="Strings & StringBuilder"
      subtitle="Understand string immutability, the string pool, and when to use StringBuilder for efficient manipulation."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #0f766e, #2dd4bf)">

      <!-- Section 1: Concept -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="book-open" [size]="28" css="icon-teal" /> What are Strings in Java?
        </h2>
        <div class="prose">
          <p>
            A <strong>String</strong> in Java is an object that represents a sequence of characters. Strings are <strong>immutable</strong> \u2014 once created, their value cannot be changed. Any operation that appears to modify a String actually creates a new String object.
          </p>
          <ul>
            <li><strong>Immutable:</strong> <code>"Hello" + " World"</code> creates a brand-new String \u2014 the original is untouched.</li>
            <li><strong>String Pool:</strong> Java caches string literals in a special memory area to save memory. Two identical literals point to the same object.</li>
            <li><strong>StringBuilder:</strong> For repeated modifications, use <code>StringBuilder</code> \u2014 it's mutable and much faster.</li>
          </ul>
          <h4 class="sub-heading">Creating Strings</h4>
          <app-code-block [code]="codeCreating" />
        </div>
      </section>

      <!-- Section 2: Interactive Visualizer -->
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title">
            <app-icon name="play" [size]="22" css="icon-teal" /> String Pool Visualizer
          </h3>

          <div class="pool-container">
            <div class="pool-section">
              <span class="pool-label">VARIABLES</span>
              <div class="var-list">
                @for (v of variables(); track v.name) {
                  <div class="var-item" [class.highlight]="v.name === highlighted()">
                    <span class="var-name">{{ v.name }}</span>
                    <span class="var-arrow">\u2192</span>
                    <span class="var-addr">{{ v.address }}</span>
                  </div>
                }
              </div>
            </div>
            <div class="pool-section">
              <span class="pool-label">STRING POOL (HEAP)</span>
              <div class="pool-objects">
                @for (obj of poolObjects(); track obj.address) {
                  <div class="pool-obj" [class.active]="obj.address === activeAddr()">
                    <span class="obj-addr">{{ obj.address }}</span>
                    <span class="obj-val">"{{ obj.value }}"</span>
                  </div>
                }
              </div>
            </div>
          </div>

          <div class="viz-status">{{ status() }}</div>

          <div class="viz-controls">
            <button (click)="demoImmutability()" [disabled]="isAnimating()" class="btn btn-teal">
              <app-icon name="play" [size]="16" /> Show Immutability
            </button>
            <button (click)="demoStringBuilder()" [disabled]="isAnimating()" class="btn btn-purple">
              <app-icon name="zap" [size]="16" /> StringBuilder Demo
            </button>
            <button (click)="resetDemo()" [disabled]="isAnimating()" class="btn btn-gray">
              <app-icon name="refresh-cw" [size]="16" /> Reset
            </button>
          </div>
        </div>
      </section>

      <!-- Section 3: Operations -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="code" [size]="28" css="icon-indigo" /> Common String Methods
        </h2>
        <div class="op-grid">
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Length & Access</h3>
            <p class="op-desc">Get the length or access individual characters by index.</p>
            <app-code-block [code]="codeLength" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Comparison</h3>
            <p class="op-desc">Compare strings by value (not reference) using equals().</p>
            <app-code-block [code]="codeCompare" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Substring & Split</h3>
            <p class="op-desc">Extract portions of a string or split by delimiter.</p>
            <app-code-block [code]="codeSubstring" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> StringBuilder</h3>
            <p class="op-desc">Mutable string operations for performance-critical code.</p>
            <app-code-block [code]="codeSB" />
          </div>
        </div>
      </section>

      <!-- Section 4: Use Cases -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="briefcase" [size]="28" css="icon-teal" /> Real-Time Use Cases
        </h2>
        <div class="use-cases">
          <div class="use-case teal">
            <div class="use-num teal-bg">1</div>
            <div>
              <h4 class="use-title">API JSON Parsing</h4>
              <p class="use-desc">REST APIs return JSON as strings. You parse, compare, and extract data from string payloads constantly in backend services.</p>
            </div>
          </div>
          <div class="use-case blue">
            <div class="use-num blue-bg">2</div>
            <div>
              <h4 class="use-title">SQL Query Building</h4>
              <p class="use-desc"><code>StringBuilder</code> is essential for dynamic SQL queries, building WHERE clauses conditionally without creating hundreds of intermediate String objects.</p>
            </div>
          </div>
          <div class="use-case purple">
            <div class="use-num purple-bg">3</div>
            <div>
              <h4 class="use-title">Log Message Formatting</h4>
              <p class="use-desc">High-throughput systems format millions of log lines per second. Using <code>String.format()</code> or StringBuilder avoids the garbage collection overhead of <code>+</code> concatenation.</p>
            </div>
          </div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ['/* angular:styles/component:css;f587639ae5d8eed5a326f241fac168a82489d26c8802663ef7ca5caca7d89c8b;/Users/sathishkumarramalingam/projects/JavaIQ/.claude/worktrees/goofy-haibt/src/app/features/tutorials/topics/strings.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-teal {\n  color: #0d9488;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.prose ul {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose li {\n  margin-bottom: 8px;\n}\n.prose strong {\n  color: #0f172a;\n  font-weight: 700;\n}\n.prose code {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #0d9488;\n}\n.sub-heading {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 24px 0 8px;\n}\n.viz-card {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);\n  padding: 28px 24px;\n}\n.viz-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.pool-container {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.pool-section {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 16px;\n}\n.pool-label {\n  display: block;\n  font-size: 0.58rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  color: #94a3b8;\n  margin-bottom: 12px;\n}\n.var-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.var-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  background: #fff;\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n  font-size: 0.75rem;\n  font-family: "JetBrains Mono", monospace;\n  transition: all 0.3s;\n}\n.var-item.highlight {\n  border-color: #0d9488;\n  background: #f0fdfa;\n}\n.var-name {\n  font-weight: 700;\n  color: #0f172a;\n}\n.var-arrow {\n  color: #94a3b8;\n}\n.var-addr {\n  color: #0d9488;\n  font-size: 0.65rem;\n}\n.pool-objects {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.pool-obj {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px;\n  background: #fff;\n  border-radius: 8px;\n  border: 2px solid #e2e8f0;\n  transition: all 0.3s;\n}\n.pool-obj.active {\n  border-color: #0d9488;\n  background: #f0fdfa;\n  transform: scale(1.03);\n}\n.obj-addr {\n  font-size: 0.6rem;\n  color: #94a3b8;\n  font-family: "JetBrains Mono", monospace;\n}\n.obj-val {\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #0f172a;\n  font-family: "JetBrains Mono", monospace;\n}\n.viz-status {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n  margin-bottom: 20px;\n}\n.viz-controls {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-teal {\n  background: #0d9488;\n  color: #fff;\n}\n.btn-teal:hover:not(:disabled) {\n  background: #0f766e;\n}\n.btn-purple {\n  background: #7c3aed;\n  color: #fff;\n}\n.btn-purple:hover:not(:disabled) {\n  background: #6d28d9;\n}\n.btn-gray {\n  background: #e2e8f0;\n  color: #334155;\n}\n.btn-gray:hover:not(:disabled) {\n  background: #cbd5e1;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  transition: box-shadow 0.2s;\n}\n.op-card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.op-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc {\n  font-size: 0.78rem;\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n.use-cases {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.use-case {\n  display: flex;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 14px;\n  border: 1px solid;\n}\n.use-case.teal {\n  background: #f0fdfa;\n  border-color: #99f6e4;\n}\n.use-case.blue {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.use-case.purple {\n  background: #faf5ff;\n  border-color: #d8b4fe;\n}\n.use-num {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.teal-bg {\n  background: #14b8a6;\n}\n.blue-bg {\n  background: #3b82f6;\n}\n.purple-bg {\n  background: #8b5cf6;\n}\n.use-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.use-desc {\n  font-size: 0.78rem;\n  line-height: 1.55;\n  margin: 0;\n  color: #334155;\n}\n.use-desc code {\n  background: rgba(0, 0, 0, 0.06);\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.72rem;\n}\n/*# sourceMappingURL=strings.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StringsComponent, { className: "StringsComponent", filePath: "src/app/features/tutorials/topics/strings.component.ts", lineNumber: 208 });
})();
export {
  StringsComponent
};
//# sourceMappingURL=chunk-RT5SRG2L.js.map
