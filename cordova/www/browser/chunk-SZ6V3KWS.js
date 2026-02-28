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
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-6OY2Y3BE.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/streams.component.ts
var _forTrack0 = ($index, $item) => $item.val;
var _forTrack1 = ($index, $item) => $item.name;
function StreamsComponent_For_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275classProp("faded", item_r1.faded);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1.val);
  }
}
function StreamsComponent_For_38_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r2);
  }
}
function StreamsComponent_For_38_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1, "...");
    \u0275\u0275elementEnd();
  }
}
function StreamsComponent_For_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275text(1, "\u2192");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 10)(3, "span", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 12);
    \u0275\u0275repeaterCreate(6, StreamsComponent_For_38_For_7_Template, 2, 1, "span", 39, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(8, StreamsComponent_For_38_Conditional_8_Template, 2, 0, "span", 40);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const stage_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", stage_r3.active);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stage_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(stage_r3.items);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(stage_r3.items.length === 0 ? 8 : -1);
  }
}
var StreamsComponent = class _StreamsComponent {
  defaultSource = () => [
    { val: "3", faded: false },
    { val: "12", faded: false },
    { val: "7", faded: false },
    { val: "18", faded: false },
    { val: "5", faded: false },
    { val: "21", faded: false },
    { val: "9", faded: false },
    { val: "14", faded: false }
  ];
  sourceItems = signal(this.defaultSource(), ...ngDevMode ? [{ debugName: "sourceItems" }] : []);
  stages = signal([], ...ngDevMode ? [{ debugName: "stages" }] : []);
  status = signal("Numbers: [3, 12, 7, 18, 5, 21, 9, 14]. Click a pipeline to run!", ...ngDevMode ? [{ debugName: "status" }] : []);
  isAnimating = signal(false, ...ngDevMode ? [{ debugName: "isAnimating" }] : []);
  codeIntro = `List<Integer> nums = List.of(3, 12, 7, 18, 5, 21, 9, 14);

List<Integer> result = nums.stream()  // source
    .filter(n -> n > 10)               // intermediate
    .map(n -> n * 2)                   // intermediate
    .sorted()                          // intermediate
    .toList();                         // terminal

// result: [24, 28, 36, 42]`;
  codeIntermediate = `stream
  .filter(n -> n > 10)    // keep if true
  .map(n -> n * 2)         // transform each
  .flatMap(Collection::stream) // flatten
  .sorted()                // natural order
  .distinct()              // remove dupes
  .limit(5)               // take first 5
  .skip(2)                // skip first 2
  .peek(System.out::println); // debug`;
  codeTerminal = `// Trigger execution
long count = stream.count();
Optional<T> first = stream.findFirst();
boolean any = stream.anyMatch(predicate);

// Reduce
int sum = stream.reduce(0, Integer::sum);

// forEach (side effects)
stream.forEach(System.out::println);

// toArray
int[] arr = stream.toArray();`;
  codeCollectors = `// To List
List<String> list = stream.toList();

// To Set
Set<String> set = stream.collect(toSet());

// To Map
Map<String, Integer> map = users.stream()
    .collect(toMap(User::name, User::age));

// Grouping
Map<String, List<User>> byCity =
    users.stream()
         .collect(groupingBy(User::city));

// Joining
String csv = stream.collect(joining(", "));`;
  codeParallel = `// Convert to parallel
List<Integer> result = nums.parallelStream()
    .filter(n -> n > 10)
    .map(n -> n * 2)
    .toList();

// \u26A0\uFE0F Rules for parallel streams:
// 1. Stateless operations only
// 2. No shared mutable state
// 3. Use for large datasets (>10K)
// 4. Order may not be preserved`;
  sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }
  async runPipeline() {
    if (this.isAnimating())
      return;
    this.isAnimating.set(true);
    this.sourceItems.set(this.defaultSource());
    this.stages.set([
      { name: "filter(>10)", items: [], active: false },
      { name: "map(\xD72)", items: [], active: false },
      { name: "toList()", items: [], active: false }
    ]);
    this.status.set(".filter(n -> n > 10) \u2014 keeping only numbers greater than 10...");
    this.stages.update((s) => s.map((st, i) => i === 0 ? __spreadProps(__spreadValues({}, st), { active: true }) : st));
    await this.sleep(1e3);
    this.sourceItems.update((items) => items.map((i) => __spreadProps(__spreadValues({}, i), { faded: +i.val <= 10 })));
    this.stages.update((s) => s.map((st, i) => i === 0 ? __spreadProps(__spreadValues({}, st), { items: ["12", "18", "21", "14"], active: false }) : st));
    await this.sleep(800);
    this.status.set(".map(n -> n * 2) \u2014 doubling each remaining value...");
    this.stages.update((s) => s.map((st, i) => i === 1 ? __spreadProps(__spreadValues({}, st), { active: true }) : st));
    await this.sleep(1e3);
    this.stages.update((s) => s.map((st, i) => i === 1 ? __spreadProps(__spreadValues({}, st), { items: ["24", "36", "42", "28"], active: false }) : st));
    await this.sleep(800);
    this.status.set(".toList() \u2014 terminal operation! Collecting results...");
    this.stages.update((s) => s.map((st, i) => i === 2 ? __spreadProps(__spreadValues({}, st), { active: true }) : st));
    await this.sleep(800);
    this.stages.update((s) => s.map((st, i) => i === 2 ? __spreadProps(__spreadValues({}, st), { items: ["24", "28", "36", "42"], active: false }) : st));
    this.status.set("Result: [24, 28, 36, 42] \u2014 entire pipeline ran lazily! \u2705");
    this.isAnimating.set(false);
  }
  async runReduce() {
    if (this.isAnimating())
      return;
    this.isAnimating.set(true);
    this.sourceItems.set(this.defaultSource());
    this.stages.set([
      { name: "filter(>10)", items: [], active: false },
      { name: "reduce(sum)", items: [], active: false }
    ]);
    this.status.set(".filter(n -> n > 10) \u2014 keeping values > 10...");
    this.stages.update((s) => s.map((st, i) => i === 0 ? __spreadProps(__spreadValues({}, st), { active: true }) : st));
    await this.sleep(1e3);
    this.sourceItems.update((items) => items.map((i) => __spreadProps(__spreadValues({}, i), { faded: +i.val <= 10 })));
    this.stages.update((s) => s.map((st, i) => i === 0 ? __spreadProps(__spreadValues({}, st), { items: ["12", "18", "21", "14"], active: false }) : st));
    await this.sleep(800);
    this.status.set(".reduce(0, Integer::sum) \u2014 accumulating: 0+12+18+21+14...");
    this.stages.update((s) => s.map((st, i) => i === 1 ? __spreadProps(__spreadValues({}, st), { active: true }) : st));
    await this.sleep(1200);
    this.stages.update((s) => s.map((st, i) => i === 1 ? __spreadProps(__spreadValues({}, st), { items: ["65"], active: false }) : st));
    this.status.set("reduce() returns a single value: 65 (12+18+21+14) \u2705");
    this.isAnimating.set(false);
  }
  resetDemo() {
    this.sourceItems.set(this.defaultSource());
    this.stages.set([]);
    this.status.set("Numbers: [3, 12, 7, 18, 5, 21, 9, 14]. Click a pipeline to run!");
    this.isAnimating.set(false);
  }
  static \u0275fac = function StreamsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StreamsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StreamsComponent, selectors: [["app-topic-streams"]], decls: 120, vars: 20, consts: [["title", "Streams API", "subtitle", "Functional-style data pipelines. Learn to filter, map, reduce, and collect data with Java's powerful Stream API.", "badge", "CORE JAVA", "gradient", "linear-gradient(135deg, #0f766e, #2dd4bf)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-teal", 3, "size"], [1, "prose"], [3, "code"], [1, "viz-card"], [1, "viz-title"], ["name", "play", "css", "icon-teal", 3, "size"], [1, "pipeline"], [1, "pipe-stage"], [1, "stage-label"], [1, "stage-items"], [1, "pipe-item", 3, "faded"], [1, "viz-status"], [1, "viz-controls"], [1, "btn", "btn-teal", 3, "click", "disabled"], ["name", "play", 3, "size"], [1, "btn", "btn-amber", 3, "click", "disabled"], [1, "btn", "btn-gray", 3, "click", "disabled"], ["name", "refresh-cw", 3, "size"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"], ["name", "arrow-right", "css", "icon-indigo", 3, "size"], [1, "op-desc"], ["name", "briefcase", "css", "icon-teal", 3, "size"], [1, "use-cases"], [1, "use-case", "teal"], [1, "use-num", "teal-bg"], [1, "use-title"], [1, "use-desc"], [1, "use-case", "blue"], [1, "use-num", "blue-bg"], [1, "use-case", "purple"], [1, "use-num", "purple-bg"], [1, "pipe-item"], [1, "pipe-arrow"], [1, "pipe-item", "result"], [1, "pipe-wait"]], template: function StreamsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " What are Streams?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7, "A ");
      \u0275\u0275elementStart(8, "strong");
      \u0275\u0275text(9, "Stream");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " is a sequence of elements that supports functional-style operations. Streams don't store data \u2014 they process data from a source (collection, array, I/O) through a pipeline of operations.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "ul")(12, "li")(13, "strong");
      \u0275\u0275text(14, "Lazy:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(15, " Intermediate operations are not executed until a terminal operation is called.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "li")(17, "strong");
      \u0275\u0275text(18, "Once-use:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(19, " A stream can only be consumed once.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "li")(21, "strong");
      \u0275\u0275text(22, "Pipeline:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(23, " source \u2192 intermediate ops \u2192 terminal op.");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(24, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "section", 1)(26, "div", 6)(27, "h3", 7);
      \u0275\u0275element(28, "app-icon", 8);
      \u0275\u0275text(29, " Stream Pipeline Visualizer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 9)(31, "div", 10)(32, "span", 11);
      \u0275\u0275text(33, "SOURCE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 12);
      \u0275\u0275repeaterCreate(35, StreamsComponent_For_36_Template, 2, 3, "span", 13, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275repeaterCreate(37, StreamsComponent_For_38_Template, 9, 4, null, null, _forTrack1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 14);
      \u0275\u0275text(40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 15)(42, "button", 16);
      \u0275\u0275listener("click", function StreamsComponent_Template_button_click_42_listener() {
        return ctx.runPipeline();
      });
      \u0275\u0275element(43, "app-icon", 17);
      \u0275\u0275text(44, " Run Filter\u2192Map\u2192Collect");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "button", 18);
      \u0275\u0275listener("click", function StreamsComponent_Template_button_click_45_listener() {
        return ctx.runReduce();
      });
      \u0275\u0275element(46, "app-icon", 17);
      \u0275\u0275text(47, " Run Filter\u2192Reduce");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "button", 19);
      \u0275\u0275listener("click", function StreamsComponent_Template_button_click_48_listener() {
        return ctx.resetDemo();
      });
      \u0275\u0275element(49, "app-icon", 20);
      \u0275\u0275text(50, " Reset");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(51, "section", 1)(52, "h2", 2);
      \u0275\u0275element(53, "app-icon", 21);
      \u0275\u0275text(54, " Stream Operations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 22)(56, "div", 23)(57, "h3", 24);
      \u0275\u0275element(58, "app-icon", 25);
      \u0275\u0275text(59, " Intermediate Ops");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "p", 26);
      \u0275\u0275text(61, "Filter, map, flatMap, sorted, distinct, peek \u2014 lazy, return a Stream.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(62, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "div", 23)(64, "h3", 24);
      \u0275\u0275element(65, "app-icon", 25);
      \u0275\u0275text(66, " Terminal Ops");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "p", 26);
      \u0275\u0275text(68, "collect, reduce, forEach, count, findFirst \u2014 trigger execution.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(69, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "div", 23)(71, "h3", 24);
      \u0275\u0275element(72, "app-icon", 25);
      \u0275\u0275text(73, " Collectors");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "p", 26);
      \u0275\u0275text(75, "Transform streams into Lists, Maps, Sets, grouped results.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(76, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "div", 23)(78, "h3", 24);
      \u0275\u0275element(79, "app-icon", 25);
      \u0275\u0275text(80, " Parallel Streams");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "p", 26);
      \u0275\u0275text(82, "Leverage multi-core CPUs for data-parallel processing.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(83, "app-code-block", 5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(84, "section", 1)(85, "h2", 2);
      \u0275\u0275element(86, "app-icon", 27);
      \u0275\u0275text(87, " Real-Time Use Cases");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "div", 28)(89, "div", 29)(90, "div", 30);
      \u0275\u0275text(91, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "div")(93, "h4", 31);
      \u0275\u0275text(94, "REST API Data Transformation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "p", 32);
      \u0275\u0275text(96, "Fetch entities from database, ");
      \u0275\u0275elementStart(97, "code");
      \u0275\u0275text(98, "stream().filter(...).map(dto).toList()");
      \u0275\u0275elementEnd();
      \u0275\u0275text(99, " \u2014 transform and return DTOs in one clean pipeline.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(100, "div", 33)(101, "div", 34);
      \u0275\u0275text(102, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "div")(104, "h4", 31);
      \u0275\u0275text(105, "Log Analysis");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "p", 32)(107, "code");
      \u0275\u0275text(108, 'Files.lines(path).filter(l -> l.contains("ERROR")).count()');
      \u0275\u0275elementEnd();
      \u0275\u0275text(109, " \u2014 process millions of log lines lazily without loading all into memory.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(110, "div", 35)(111, "div", 36);
      \u0275\u0275text(112, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "div")(114, "h4", 31);
      \u0275\u0275text(115, "Batch Processing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "p", 32)(117, "code");
      \u0275\u0275text(118, "parallelStream()");
      \u0275\u0275elementEnd();
      \u0275\u0275text(119, " processes large datasets across CPU cores \u2014 ideal for CSV imports, data migrations, and ETL pipelines.");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(21);
      \u0275\u0275property("code", ctx.codeIntro);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 22);
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.sourceItems());
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.stages());
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
      \u0275\u0275property("code", ctx.codeIntermediate);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeTerminal);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeCollectors);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeParallel);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ['\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-teal[_ngcontent-%COMP%] {\n  color: #0d9488;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 700;\n}\n.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #0d9488;\n}\n.viz-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);\n  padding: 28px 24px;\n}\n.viz-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.pipeline[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  overflow-x: auto;\n  padding-bottom: 8px;\n  margin-bottom: 20px;\n}\n.pipe-stage[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  border-radius: 12px;\n  border: 2px solid #e2e8f0;\n  min-width: 100px;\n  text-align: center;\n  transition: all 0.3s;\n  background: #fff;\n}\n.pipe-stage.active[_ngcontent-%COMP%] {\n  border-color: #0d9488;\n  background: #f0fdfa;\n}\n.stage-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.5rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  color: #94a3b8;\n  margin-bottom: 8px;\n}\n.stage-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n  justify-content: center;\n}\n.pipe-item[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border-radius: 6px;\n  font-size: 0.68rem;\n  font-weight: 700;\n  font-family: "JetBrains Mono", monospace;\n  background: #e0f2fe;\n  color: #0369a1;\n  transition: all 0.3s;\n}\n.pipe-item.faded[_ngcontent-%COMP%] {\n  opacity: 0.3;\n  background: #f1f5f9;\n  color: #94a3b8;\n  text-decoration: line-through;\n}\n.pipe-item.result[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.pipe-arrow[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: #94a3b8;\n  font-weight: 700;\n  align-self: center;\n  padding-top: 20px;\n}\n.pipe-wait[_ngcontent-%COMP%] {\n  font-size: 0.62rem;\n  color: #cbd5e1;\n}\n.viz-status[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n  margin-bottom: 20px;\n}\n.viz-controls[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-teal[_ngcontent-%COMP%] {\n  background: #0d9488;\n  color: #fff;\n}\n.btn-teal[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #0f766e;\n}\n.btn-amber[_ngcontent-%COMP%] {\n  background: #d97706;\n  color: #fff;\n}\n.btn-amber[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #b45309;\n}\n.btn-gray[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #334155;\n}\n.btn-gray[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #cbd5e1;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.op-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.op-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n.use-cases[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.use-case[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 14px;\n  border: 1px solid;\n}\n.use-case.teal[_ngcontent-%COMP%] {\n  background: #f0fdfa;\n  border-color: #99f6e4;\n}\n.use-case.blue[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.use-case.purple[_ngcontent-%COMP%] {\n  background: #faf5ff;\n  border-color: #d8b4fe;\n}\n.use-num[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.teal-bg[_ngcontent-%COMP%] {\n  background: #0d9488;\n}\n.blue-bg[_ngcontent-%COMP%] {\n  background: #3b82f6;\n}\n.purple-bg[_ngcontent-%COMP%] {\n  background: #8b5cf6;\n}\n.use-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.use-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  line-height: 1.55;\n  margin: 0;\n  color: #334155;\n}\n.use-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.06);\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.72rem;\n}\n/*# sourceMappingURL=streams.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StreamsComponent, [{
    type: Component,
    args: [{ selector: "app-topic-streams", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout
      title="Streams API"
      subtitle="Functional-style data pipelines. Learn to filter, map, reduce, and collect data with Java's powerful Stream API."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #0f766e, #2dd4bf)">

      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-teal" /> What are Streams?</h2>
        <div class="prose">
          <p>A <strong>Stream</strong> is a sequence of elements that supports functional-style operations. Streams don't store data \u2014 they process data from a source (collection, array, I/O) through a pipeline of operations.</p>
          <ul>
            <li><strong>Lazy:</strong> Intermediate operations are not executed until a terminal operation is called.</li>
            <li><strong>Once-use:</strong> A stream can only be consumed once.</li>
            <li><strong>Pipeline:</strong> source \u2192 intermediate ops \u2192 terminal op.</li>
          </ul>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>

      <!-- Interactive Visualizer -->
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title"><app-icon name="play" [size]="22" css="icon-teal" /> Stream Pipeline Visualizer</h3>
          <div class="pipeline">
            <div class="pipe-stage">
              <span class="stage-label">SOURCE</span>
              <div class="stage-items">
                @for (item of sourceItems(); track item.val) {
                  <span class="pipe-item" [class.faded]="item.faded">{{ item.val }}</span>
                }
              </div>
            </div>
            @for (stage of stages(); track stage.name) {
              <div class="pipe-arrow">\u2192</div>
              <div class="pipe-stage" [class.active]="stage.active">
                <span class="stage-label">{{ stage.name }}</span>
                <div class="stage-items">
                  @for (item of stage.items; track item) {
                    <span class="pipe-item result">{{ item }}</span>
                  }
                  @if (stage.items.length === 0) {
                    <span class="pipe-wait">...</span>
                  }
                </div>
              </div>
            }
          </div>
          <div class="viz-status">{{ status() }}</div>
          <div class="viz-controls">
            <button (click)="runPipeline()" [disabled]="isAnimating()" class="btn btn-teal"><app-icon name="play" [size]="16" /> Run Filter\u2192Map\u2192Collect</button>
            <button (click)="runReduce()" [disabled]="isAnimating()" class="btn btn-amber"><app-icon name="play" [size]="16" /> Run Filter\u2192Reduce</button>
            <button (click)="resetDemo()" [disabled]="isAnimating()" class="btn btn-gray"><app-icon name="refresh-cw" [size]="16" /> Reset</button>
          </div>
        </div>
      </section>

      <!-- Key Concepts -->
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Stream Operations</h2>
        <div class="op-grid">
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Intermediate Ops</h3>
            <p class="op-desc">Filter, map, flatMap, sorted, distinct, peek \u2014 lazy, return a Stream.</p>
            <app-code-block [code]="codeIntermediate" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Terminal Ops</h3>
            <p class="op-desc">collect, reduce, forEach, count, findFirst \u2014 trigger execution.</p>
            <app-code-block [code]="codeTerminal" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Collectors</h3>
            <p class="op-desc">Transform streams into Lists, Maps, Sets, grouped results.</p>
            <app-code-block [code]="codeCollectors" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Parallel Streams</h3>
            <p class="op-desc">Leverage multi-core CPUs for data-parallel processing.</p>
            <app-code-block [code]="codeParallel" />
          </div>
        </div>
      </section>

      <!-- Use Cases -->
      <section class="section">
        <h2 class="section-heading"><app-icon name="briefcase" [size]="28" css="icon-teal" /> Real-Time Use Cases</h2>
        <div class="use-cases">
          <div class="use-case teal"><div class="use-num teal-bg">1</div><div><h4 class="use-title">REST API Data Transformation</h4><p class="use-desc">Fetch entities from database, <code>stream().filter(...).map(dto).toList()</code> \u2014 transform and return DTOs in one clean pipeline.</p></div></div>
          <div class="use-case blue"><div class="use-num blue-bg">2</div><div><h4 class="use-title">Log Analysis</h4><p class="use-desc"><code>Files.lines(path).filter(l -> l.contains("ERROR")).count()</code> \u2014 process millions of log lines lazily without loading all into memory.</p></div></div>
          <div class="use-case purple"><div class="use-num purple-bg">3</div><div><h4 class="use-title">Batch Processing</h4><p class="use-desc"><code>parallelStream()</code> processes large datasets across CPU cores \u2014 ideal for CSV imports, data migrations, and ETL pipelines.</p></div></div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ['/* angular:styles/component:css;d3930d07885c2424bbbae09182e4f887e0ed62f5dd3326f2009b726772618da5;D:/A21/JavaIQ/src/app/features/tutorials/topics/streams.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-teal {\n  color: #0d9488;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.prose ul {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose li {\n  margin-bottom: 8px;\n}\n.prose strong {\n  color: #0f172a;\n  font-weight: 700;\n}\n.prose code {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #0d9488;\n}\n.viz-card {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);\n  padding: 28px 24px;\n}\n.viz-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.pipeline {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  overflow-x: auto;\n  padding-bottom: 8px;\n  margin-bottom: 20px;\n}\n.pipe-stage {\n  padding: 12px 14px;\n  border-radius: 12px;\n  border: 2px solid #e2e8f0;\n  min-width: 100px;\n  text-align: center;\n  transition: all 0.3s;\n  background: #fff;\n}\n.pipe-stage.active {\n  border-color: #0d9488;\n  background: #f0fdfa;\n}\n.stage-label {\n  display: block;\n  font-size: 0.5rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  color: #94a3b8;\n  margin-bottom: 8px;\n}\n.stage-items {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n  justify-content: center;\n}\n.pipe-item {\n  padding: 4px 8px;\n  border-radius: 6px;\n  font-size: 0.68rem;\n  font-weight: 700;\n  font-family: "JetBrains Mono", monospace;\n  background: #e0f2fe;\n  color: #0369a1;\n  transition: all 0.3s;\n}\n.pipe-item.faded {\n  opacity: 0.3;\n  background: #f1f5f9;\n  color: #94a3b8;\n  text-decoration: line-through;\n}\n.pipe-item.result {\n  background: #d1fae5;\n  color: #065f46;\n}\n.pipe-arrow {\n  font-size: 1.2rem;\n  color: #94a3b8;\n  font-weight: 700;\n  align-self: center;\n  padding-top: 20px;\n}\n.pipe-wait {\n  font-size: 0.62rem;\n  color: #cbd5e1;\n}\n.viz-status {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n  margin-bottom: 20px;\n}\n.viz-controls {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-teal {\n  background: #0d9488;\n  color: #fff;\n}\n.btn-teal:hover:not(:disabled) {\n  background: #0f766e;\n}\n.btn-amber {\n  background: #d97706;\n  color: #fff;\n}\n.btn-amber:hover:not(:disabled) {\n  background: #b45309;\n}\n.btn-gray {\n  background: #e2e8f0;\n  color: #334155;\n}\n.btn-gray:hover:not(:disabled) {\n  background: #cbd5e1;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.op-card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.op-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc {\n  font-size: 0.78rem;\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n.use-cases {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.use-case {\n  display: flex;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 14px;\n  border: 1px solid;\n}\n.use-case.teal {\n  background: #f0fdfa;\n  border-color: #99f6e4;\n}\n.use-case.blue {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.use-case.purple {\n  background: #faf5ff;\n  border-color: #d8b4fe;\n}\n.use-num {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.teal-bg {\n  background: #0d9488;\n}\n.blue-bg {\n  background: #3b82f6;\n}\n.purple-bg {\n  background: #8b5cf6;\n}\n.use-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.use-desc {\n  font-size: 0.78rem;\n  line-height: 1.55;\n  margin: 0;\n  color: #334155;\n}\n.use-desc code {\n  background: rgba(0, 0, 0, 0.06);\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.72rem;\n}\n/*# sourceMappingURL=streams.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StreamsComponent, { className: "StreamsComponent", filePath: "src/app/features/tutorials/topics/streams.component.ts", lineNumber: 154 });
})();
export {
  StreamsComponent
};
//# sourceMappingURL=chunk-SZ6V3KWS.js.map
