import {
  CodeBlockComponent,
  IconComponent,
  TutorialLayoutComponent
} from "./chunk-5ZPIB2CR.js";
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-L6VISU4K.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/collections-list.component.ts
function CollectionsListComponent_For_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const \u0275$index_75_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.alActiveIdx() === \u0275$index_75_r2)("inserted", ctx_r2.alInsertedIdx() === \u0275$index_75_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r1, " ");
  }
}
function CollectionsListComponent_For_56_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1, "\u2192");
    \u0275\u0275elementEnd();
  }
}
function CollectionsListComponent_For_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "span", 51);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, CollectionsListComponent_For_56_Conditional_3_Template, 2, 0, "span", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const \u0275$index_89_r5 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.llActiveIdx() === \u0275$index_89_r5)("inserted", ctx_r2.llInsertedIdx() === \u0275$index_89_r5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_89_r5 < ctx_r2.linkedList().length - 1 ? 3 : -1);
  }
}
var CollectionsListComponent = class _CollectionsListComponent {
  arrayList = signal([10, 20, 30, 40, 50], ...ngDevMode ? [{ debugName: "arrayList" }] : []);
  linkedList = signal([10, 20, 30, 40, 50], ...ngDevMode ? [{ debugName: "linkedList" }] : []);
  alActiveIdx = signal(-1, ...ngDevMode ? [{ debugName: "alActiveIdx" }] : []);
  alInsertedIdx = signal(-1, ...ngDevMode ? [{ debugName: "alInsertedIdx" }] : []);
  llActiveIdx = signal(-1, ...ngDevMode ? [{ debugName: "llActiveIdx" }] : []);
  llInsertedIdx = signal(-1, ...ngDevMode ? [{ debugName: "llInsertedIdx" }] : []);
  alNote = signal("", ...ngDevMode ? [{ debugName: "alNote" }] : []);
  llNote = signal("", ...ngDevMode ? [{ debugName: "llNote" }] : []);
  status = signal("Both start with the same elements. Watch how operations differ.", ...ngDevMode ? [{ debugName: "status" }] : []);
  isAnimating = signal(false, ...ngDevMode ? [{ debugName: "isAnimating" }] : []);
  codeCreating = `// ArrayList (most common)
List<String> names = new ArrayList<>();
names.add("Alice");
names.add("Bob");

// LinkedList
List<Integer> nums = new LinkedList<>();

// Immutable List (Java 9+)
List<String> colors = List.of("Red", "Green");

// From array
String[] arr = {"A", "B", "C"};
List<String> list = Arrays.asList(arr);`;
  codeAddRemove = `List<String> list = new ArrayList<>();
list.add("Alice");           // append
list.add(0, "Bob");          // insert at 0
list.addAll(List.of("C","D")); // add all

list.remove("Bob");         // by value
list.remove(0);             // by index
list.clear();               // remove all`;
  codeSearch = `List<String> list = List.of("A","B","C","D");

list.get(2);              // "C"
list.contains("B");       // true
list.indexOf("C");        // 2
list.lastIndexOf("A");    // 0
list.isEmpty();           // false
list.size();              // 4`;
  codeSort = `List<Integer> nums = new ArrayList<>(
    List.of(5, 2, 8, 1, 4));

Collections.sort(nums);     // [1,2,4,5,8]
Collections.reverse(nums);   // [8,5,4,2,1]

// Custom comparator
nums.sort(Comparator.reverseOrder());

// List \u2194 Array
Integer[] arr = nums.toArray(new Integer[0]);
List<Integer> back = Arrays.asList(arr);`;
  codeIterate = `// Enhanced for-loop
for (String s : list) { ... }

// Iterator (safe removal)
Iterator<String> it = list.iterator();
while (it.hasNext()) {
    if (it.next().equals("X"))
        it.remove();
}

// forEach + lambda
list.forEach(s -> System.out.println(s));

// Stream
list.stream()
    .filter(s -> s.length() > 3)
    .toList();`;
  sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }
  resetHighlights() {
    this.alActiveIdx.set(-1);
    this.alInsertedIdx.set(-1);
    this.llActiveIdx.set(-1);
    this.llInsertedIdx.set(-1);
    this.alNote.set("");
    this.llNote.set("");
  }
  async demoAdd() {
    if (this.isAnimating())
      return;
    this.isAnimating.set(true);
    this.resetHighlights();
    this.status.set("Adding 60 to the end of both lists...");
    await this.sleep(800);
    this.arrayList.update((a) => [...a, 60]);
    this.alInsertedIdx.set(this.arrayList().length - 1);
    this.alNote.set("O(1) \u2014 just append at end");
    this.status.set("ArrayList: appended to end. O(1) amortized.");
    await this.sleep(1e3);
    this.linkedList.update((l) => [...l, 60]);
    this.llInsertedIdx.set(this.linkedList().length - 1);
    this.llNote.set("O(1) \u2014 update tail pointer");
    this.status.set("Both: O(1) for end insertion. Equal performance here! \u2705");
    this.isAnimating.set(false);
  }
  async demoInsertMiddle() {
    if (this.isAnimating())
      return;
    this.isAnimating.set(true);
    this.resetHighlights();
    this.status.set("Inserting 99 at index 2...");
    await this.sleep(800);
    this.status.set("ArrayList: must shift elements [2..n] to the right \u2192 O(n)");
    for (let i = this.arrayList().length - 1; i >= 2; i--) {
      this.alActiveIdx.set(i);
      await this.sleep(300);
    }
    this.arrayList.update((a) => {
      const b = [...a];
      b.splice(2, 0, 99);
      return b;
    });
    this.alActiveIdx.set(-1);
    this.alInsertedIdx.set(2);
    this.alNote.set("O(n) \u2014 shifted elements");
    await this.sleep(800);
    this.status.set("LinkedList: update 2 pointers \u2192 O(1) at the node");
    this.llInsertedIdx.set(2);
    this.linkedList.update((l) => {
      const b = [...l];
      b.splice(2, 0, 99);
      return b;
    });
    this.llNote.set("O(1) \u2014 pointer update");
    await this.sleep(800);
    this.status.set("Middle insert: ArrayList O(n) shifts vs LinkedList O(1) pointer change \u2705");
    this.isAnimating.set(false);
  }
  async demoGetByIndex() {
    if (this.isAnimating())
      return;
    this.isAnimating.set(true);
    this.resetHighlights();
    this.status.set("Getting element at index 3...");
    await this.sleep(800);
    this.alActiveIdx.set(3);
    this.alNote.set("O(1) \u2014 direct array index");
    this.status.set("ArrayList: direct index access \u2192 O(1). Instant!");
    await this.sleep(1e3);
    this.status.set("LinkedList: must traverse from head \u2192 node 0 \u2192 1 \u2192 2 \u2192 3...");
    for (let i = 0; i <= 3; i++) {
      this.llActiveIdx.set(i);
      await this.sleep(400);
    }
    this.llNote.set("O(n) \u2014 traversed 4 nodes");
    this.status.set("Random access: ArrayList O(1) vs LinkedList O(n). ArrayList wins! \u2705");
    this.isAnimating.set(false);
  }
  resetDemo() {
    this.arrayList.set([10, 20, 30, 40, 50]);
    this.linkedList.set([10, 20, 30, 40, 50]);
    this.resetHighlights();
    this.status.set("Both start with the same elements. Watch how operations differ.");
    this.isAnimating.set(false);
  }
  static \u0275fac = function CollectionsListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CollectionsListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollectionsListComponent, selectors: [["app-topic-collections-list"]], decls: 207, vars: 25, consts: [["title", "Collections: List", "subtitle", "ArrayList vs LinkedList \u2014 understand when to use each. Learn about dynamic sizing, performance trade-offs, and common operations.", "badge", "CORE JAVA", "gradient", "linear-gradient(135deg, #0369a1, #38bdf8)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-sky", 3, "size"], [1, "prose"], [1, "sub-heading"], [3, "code"], [1, "viz-card"], [1, "viz-title"], ["name", "play", "css", "icon-sky", 3, "size"], [1, "dual-viz"], [1, "viz-half"], [1, "viz-label"], [1, "array-viz"], [1, "arr-cell", 3, "active", "inserted"], [1, "perf-note"], [1, "linked-viz"], [1, "ll-node", 3, "active", "inserted"], [1, "viz-status"], [1, "viz-controls"], [1, "btn", "btn-sky", 3, "click", "disabled"], ["name", "play", 3, "size"], [1, "btn", "btn-purple", 3, "click", "disabled"], [1, "btn", "btn-amber", 3, "click", "disabled"], ["name", "search", 3, "size"], [1, "btn", "btn-gray", 3, "click", "disabled"], ["name", "refresh-cw", 3, "size"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"], ["name", "arrow-right", "css", "icon-indigo", 3, "size"], [1, "op-desc"], ["name", "zap", "css", "icon-sky", 3, "size"], [1, "perf-table-wrap"], [1, "perf-table"], [1, "fast"], [1, "slow"], [1, "perf-footnote"], ["name", "briefcase", "css", "icon-sky", 3, "size"], [1, "use-cases"], [1, "use-case", "sky"], [1, "use-num", "sky-bg"], [1, "use-title"], [1, "use-desc"], [1, "use-case", "blue"], [1, "use-num", "blue-bg"], [1, "use-case", "purple"], [1, "use-num", "purple-bg"], [1, "arr-cell"], [1, "ll-node"], [1, "ll-val"], [1, "ll-arrow"]], template: function CollectionsListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " What is the List Interface? ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p")(7, "strong");
      \u0275\u0275text(8, "List");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, " is an ordered collection that allows duplicates. Unlike arrays, Lists are ");
      \u0275\u0275elementStart(10, "strong");
      \u0275\u0275text(11, "dynamically sized");
      \u0275\u0275elementEnd();
      \u0275\u0275text(12, " \u2014 they grow and shrink automatically. The two main implementations are: ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "ul")(14, "li")(15, "strong");
      \u0275\u0275text(16, "ArrayList:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(17, " Backed by a resizable array. Fast random access ");
      \u0275\u0275elementStart(18, "code");
      \u0275\u0275text(19, "O(1)");
      \u0275\u0275elementEnd();
      \u0275\u0275text(20, ", slow insertion/deletion in the middle ");
      \u0275\u0275elementStart(21, "code");
      \u0275\u0275text(22, "O(n)");
      \u0275\u0275elementEnd();
      \u0275\u0275text(23, ".");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "li")(25, "strong");
      \u0275\u0275text(26, "LinkedList:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(27, " Doubly-linked nodes. Fast insertion/deletion at ends ");
      \u0275\u0275elementStart(28, "code");
      \u0275\u0275text(29, "O(1)");
      \u0275\u0275elementEnd();
      \u0275\u0275text(30, ", slow random access ");
      \u0275\u0275elementStart(31, "code");
      \u0275\u0275text(32, "O(n)");
      \u0275\u0275elementEnd();
      \u0275\u0275text(33, ".");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "h4", 5);
      \u0275\u0275text(35, "Creating Lists");
      \u0275\u0275elementEnd();
      \u0275\u0275element(36, "app-code-block", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "section", 1)(38, "div", 7)(39, "h3", 8);
      \u0275\u0275element(40, "app-icon", 9);
      \u0275\u0275text(41, " ArrayList vs LinkedList Visualizer ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 10)(43, "div", 11)(44, "span", 12);
      \u0275\u0275text(45, "ARRAYLIST");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 13);
      \u0275\u0275repeaterCreate(47, CollectionsListComponent_For_48_Template, 2, 5, "div", 14, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "span", 15);
      \u0275\u0275text(50);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div", 11)(52, "span", 12);
      \u0275\u0275text(53, "LINKEDLIST");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "div", 16);
      \u0275\u0275repeaterCreate(55, CollectionsListComponent_For_56_Template, 4, 6, "div", 17, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "span", 15);
      \u0275\u0275text(58);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(59, "div", 18);
      \u0275\u0275text(60);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "div", 19)(62, "button", 20);
      \u0275\u0275listener("click", function CollectionsListComponent_Template_button_click_62_listener() {
        return ctx.demoAdd();
      });
      \u0275\u0275element(63, "app-icon", 21);
      \u0275\u0275text(64, " Add Element ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "button", 22);
      \u0275\u0275listener("click", function CollectionsListComponent_Template_button_click_65_listener() {
        return ctx.demoInsertMiddle();
      });
      \u0275\u0275element(66, "app-icon", 21);
      \u0275\u0275text(67, " Insert at Index 2 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "button", 23);
      \u0275\u0275listener("click", function CollectionsListComponent_Template_button_click_68_listener() {
        return ctx.demoGetByIndex();
      });
      \u0275\u0275element(69, "app-icon", 24);
      \u0275\u0275text(70, " Get Index 3 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "button", 25);
      \u0275\u0275listener("click", function CollectionsListComponent_Template_button_click_71_listener() {
        return ctx.resetDemo();
      });
      \u0275\u0275element(72, "app-icon", 26);
      \u0275\u0275text(73, " Reset ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(74, "section", 1)(75, "h2", 2);
      \u0275\u0275element(76, "app-icon", 27);
      \u0275\u0275text(77, " List Operations ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "div", 28)(79, "div", 29)(80, "h3", 30);
      \u0275\u0275element(81, "app-icon", 31);
      \u0275\u0275text(82, " Add & Remove");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "p", 32);
      \u0275\u0275text(84, "Append, insert at index, and remove elements.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(85, "app-code-block", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "div", 29)(87, "h3", 30);
      \u0275\u0275element(88, "app-icon", 31);
      \u0275\u0275text(89, " Search & Access");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "p", 32);
      \u0275\u0275text(91, "Get by index, check existence, find position.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(92, "app-code-block", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "div", 29)(94, "h3", 30);
      \u0275\u0275element(95, "app-icon", 31);
      \u0275\u0275text(96, " Sort & Transform");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "p", 32);
      \u0275\u0275text(98, "Sort, reverse, and convert between Lists and arrays.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(99, "app-code-block", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "div", 29)(101, "h3", 30);
      \u0275\u0275element(102, "app-icon", 31);
      \u0275\u0275text(103, " Iteration Patterns");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "p", 32);
      \u0275\u0275text(105, "Multiple ways to traverse a List efficiently.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(106, "app-code-block", 6);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(107, "section", 1)(108, "h2", 2);
      \u0275\u0275element(109, "app-icon", 33);
      \u0275\u0275text(110, " Performance Comparison ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "div", 34)(112, "table", 35)(113, "thead")(114, "tr")(115, "th");
      \u0275\u0275text(116, "Operation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "th");
      \u0275\u0275text(118, "ArrayList");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "th");
      \u0275\u0275text(120, "LinkedList");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(121, "tbody")(122, "tr")(123, "td");
      \u0275\u0275text(124, "get(index)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "td", 36);
      \u0275\u0275text(126, "O(1) \u26A1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "td", 37);
      \u0275\u0275text(128, "O(n)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(129, "tr")(130, "td");
      \u0275\u0275text(131, "add(end)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "td", 36);
      \u0275\u0275text(133, "O(1)*");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "td", 36);
      \u0275\u0275text(135, "O(1) \u26A1");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(136, "tr")(137, "td");
      \u0275\u0275text(138, "add(index)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "td", 37);
      \u0275\u0275text(140, "O(n)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "td", 36);
      \u0275\u0275text(142, "O(1)**");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(143, "tr")(144, "td");
      \u0275\u0275text(145, "remove(index)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "td", 37);
      \u0275\u0275text(147, "O(n)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "td", 36);
      \u0275\u0275text(149, "O(1)**");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(150, "tr")(151, "td");
      \u0275\u0275text(152, "contains()");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "td", 37);
      \u0275\u0275text(154, "O(n)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "td", 37);
      \u0275\u0275text(156, "O(n)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(157, "tr")(158, "td");
      \u0275\u0275text(159, "Memory");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(160, "td", 36);
      \u0275\u0275text(161, "Compact");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(162, "td", 37);
      \u0275\u0275text(163, "Node overhead");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(164, "p", 38);
      \u0275\u0275text(165, "* Amortized \u2014 occasional resize. ** O(1) once at the node, O(n) to find it.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(166, "section", 1)(167, "h2", 2);
      \u0275\u0275element(168, "app-icon", 39);
      \u0275\u0275text(169, " Real-Time Use Cases ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "div", 40)(171, "div", 41)(172, "div", 42);
      \u0275\u0275text(173, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(174, "div")(175, "h4", 43);
      \u0275\u0275text(176, "Shopping Cart (ArrayList)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(177, "p", 44);
      \u0275\u0275text(178, "Users browse items by index and rarely insert in the middle. ");
      \u0275\u0275elementStart(179, "code");
      \u0275\u0275text(180, "ArrayList");
      \u0275\u0275elementEnd();
      \u0275\u0275text(181, "'s fast random access makes it the natural choice.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(182, "div", 45)(183, "div", 46);
      \u0275\u0275text(184, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(185, "div")(186, "h4", 43);
      \u0275\u0275text(187, "Undo History (LinkedList)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(188, "p", 44);
      \u0275\u0275text(189, "Each action is pushed to the front. Undo pops from the front. ");
      \u0275\u0275elementStart(190, "code");
      \u0275\u0275text(191, "LinkedList");
      \u0275\u0275elementEnd();
      \u0275\u0275text(192, "'s O(1) head operations are ideal.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(193, "div", 47)(194, "div", 48);
      \u0275\u0275text(195, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(196, "div")(197, "h4", 43);
      \u0275\u0275text(198, "Database Query Results");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(199, "p", 44);
      \u0275\u0275text(200, "JDBC's ");
      \u0275\u0275elementStart(201, "code");
      \u0275\u0275text(202, "ResultSet");
      \u0275\u0275elementEnd();
      \u0275\u0275text(203, " rows are often loaded into an ");
      \u0275\u0275elementStart(204, "code");
      \u0275\u0275text(205, "ArrayList");
      \u0275\u0275elementEnd();
      \u0275\u0275text(206, " for random access, pagination, and serialization to JSON.");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(33);
      \u0275\u0275property("code", ctx.codeCreating);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 22);
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.arrayList());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.alNote());
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.linkedList());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.llNote());
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
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isAnimating());
      \u0275\u0275advance();
      \u0275\u0275property("size", 16);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(5);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeAddRemove);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeSearch);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeSort);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeIterate);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(59);
      \u0275\u0275property("size", 28);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ['\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-sky[_ngcontent-%COMP%] {\n  color: #0284c7;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 700;\n}\n.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #0284c7;\n}\n.sub-heading[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 24px 0 8px;\n}\n.viz-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);\n  padding: 28px 24px;\n}\n.viz-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.dual-viz[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.viz-half[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 16px;\n}\n.viz-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.58rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  color: #94a3b8;\n  margin-bottom: 12px;\n  text-align: center;\n}\n.array-viz[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  justify-content: center;\n  min-height: 50px;\n}\n.arr-cell[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  font-size: 0.78rem;\n  font-weight: 700;\n  background: #e0f2fe;\n  color: #0369a1;\n  border: 2px solid #7dd3fc;\n  transition: all 0.3s;\n  font-family: "JetBrains Mono", monospace;\n}\n.arr-cell.active[_ngcontent-%COMP%] {\n  background: #fef08a;\n  color: #854d0e;\n  border-color: #fbbf24;\n  transform: scale(1.1);\n}\n.arr-cell.inserted[_ngcontent-%COMP%] {\n  background: #bbf7d0;\n  color: #166534;\n  border-color: #4ade80;\n  transform: scale(1.1);\n}\n.linked-viz[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 2px;\n  justify-content: center;\n  min-height: 50px;\n  align-items: center;\n}\n.ll-node[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n.ll-val[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  font-size: 0.78rem;\n  font-weight: 700;\n  background: #fae8ff;\n  color: #7e22ce;\n  border: 2px solid #d8b4fe;\n  transition: all 0.3s;\n  font-family: "JetBrains Mono", monospace;\n}\n.ll-node.active[_ngcontent-%COMP%]   .ll-val[_ngcontent-%COMP%] {\n  background: #fef08a;\n  color: #854d0e;\n  border-color: #fbbf24;\n  transform: scale(1.1);\n}\n.ll-node.inserted[_ngcontent-%COMP%]   .ll-val[_ngcontent-%COMP%] {\n  background: #bbf7d0;\n  color: #166534;\n  border-color: #4ade80;\n  transform: scale(1.1);\n}\n.ll-arrow[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #94a3b8;\n  font-weight: 700;\n}\n.perf-note[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  font-size: 0.6rem;\n  color: #94a3b8;\n  margin-top: 8px;\n  font-family: "JetBrains Mono", monospace;\n  min-height: 16px;\n}\n.viz-status[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n  margin-bottom: 20px;\n}\n.viz-controls[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-sky[_ngcontent-%COMP%] {\n  background: #0284c7;\n  color: #fff;\n}\n.btn-sky[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #0369a1;\n}\n.btn-purple[_ngcontent-%COMP%] {\n  background: #7c3aed;\n  color: #fff;\n}\n.btn-purple[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #6d28d9;\n}\n.btn-amber[_ngcontent-%COMP%] {\n  background: #d97706;\n  color: #fff;\n}\n.btn-amber[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #b45309;\n}\n.btn-gray[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #334155;\n}\n.btn-gray[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #cbd5e1;\n}\n.perf-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.perf-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.78rem;\n}\n.perf-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 10px 14px;\n  text-align: left;\n  font-weight: 700;\n  color: #0f172a;\n  border-bottom: 2px solid #e2e8f0;\n}\n.perf-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-bottom: 1px solid #f1f5f9;\n  color: #334155;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.72rem;\n}\n.perf-table[_ngcontent-%COMP%]   .fast[_ngcontent-%COMP%] {\n  color: #059669;\n  font-weight: 700;\n}\n.perf-table[_ngcontent-%COMP%]   .slow[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.perf-footnote[_ngcontent-%COMP%] {\n  font-size: 0.62rem;\n  color: #94a3b8;\n  margin-top: 8px;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.op-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.op-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n.use-cases[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.use-case[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 14px;\n  border: 1px solid;\n}\n.use-case.sky[_ngcontent-%COMP%] {\n  background: #f0f9ff;\n  border-color: #bae6fd;\n}\n.use-case.blue[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.use-case.purple[_ngcontent-%COMP%] {\n  background: #faf5ff;\n  border-color: #d8b4fe;\n}\n.use-num[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.sky-bg[_ngcontent-%COMP%] {\n  background: #0284c7;\n}\n.blue-bg[_ngcontent-%COMP%] {\n  background: #3b82f6;\n}\n.purple-bg[_ngcontent-%COMP%] {\n  background: #8b5cf6;\n}\n.use-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.use-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  line-height: 1.55;\n  margin: 0;\n  color: #334155;\n}\n.use-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.06);\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.72rem;\n}\n/*# sourceMappingURL=collections-list.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollectionsListComponent, [{
    type: Component,
    args: [{ selector: "app-topic-collections-list", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout
      title="Collections: List"
      subtitle="ArrayList vs LinkedList \u2014 understand when to use each. Learn about dynamic sizing, performance trade-offs, and common operations."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #0369a1, #38bdf8)">

      <section class="section">
        <h2 class="section-heading">
          <app-icon name="book-open" [size]="28" css="icon-sky" /> What is the List Interface?
        </h2>
        <div class="prose">
          <p>
            <strong>List</strong> is an ordered collection that allows duplicates. Unlike arrays, Lists are <strong>dynamically sized</strong> \u2014 they grow and shrink automatically. The two main implementations are:
          </p>
          <ul>
            <li><strong>ArrayList:</strong> Backed by a resizable array. Fast random access <code>O(1)</code>, slow insertion/deletion in the middle <code>O(n)</code>.</li>
            <li><strong>LinkedList:</strong> Doubly-linked nodes. Fast insertion/deletion at ends <code>O(1)</code>, slow random access <code>O(n)</code>.</li>
          </ul>
          <h4 class="sub-heading">Creating Lists</h4>
          <app-code-block [code]="codeCreating" />
        </div>
      </section>

      <!-- Interactive Visualizer -->
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title">
            <app-icon name="play" [size]="22" css="icon-sky" /> ArrayList vs LinkedList Visualizer
          </h3>

          <div class="dual-viz">
            <div class="viz-half">
              <span class="viz-label">ARRAYLIST</span>
              <div class="array-viz">
                @for (item of arrayList(); track idx; let idx = $index) {
                  <div class="arr-cell" [class.active]="alActiveIdx() === idx" [class.inserted]="alInsertedIdx() === idx">
                    {{ item }}
                  </div>
                }
              </div>
              <span class="perf-note">{{ alNote() }}</span>
            </div>
            <div class="viz-half">
              <span class="viz-label">LINKEDLIST</span>
              <div class="linked-viz">
                @for (item of linkedList(); track idx; let idx = $index) {
                  <div class="ll-node" [class.active]="llActiveIdx() === idx" [class.inserted]="llInsertedIdx() === idx">
                    <span class="ll-val">{{ item }}</span>
                    @if (idx < linkedList().length - 1) {
                      <span class="ll-arrow">\u2192</span>
                    }
                  </div>
                }
              </div>
              <span class="perf-note">{{ llNote() }}</span>
            </div>
          </div>

          <div class="viz-status">{{ status() }}</div>

          <div class="viz-controls">
            <button (click)="demoAdd()" [disabled]="isAnimating()" class="btn btn-sky">
              <app-icon name="play" [size]="16" /> Add Element
            </button>
            <button (click)="demoInsertMiddle()" [disabled]="isAnimating()" class="btn btn-purple">
              <app-icon name="play" [size]="16" /> Insert at Index 2
            </button>
            <button (click)="demoGetByIndex()" [disabled]="isAnimating()" class="btn btn-amber">
              <app-icon name="search" [size]="16" /> Get Index 3
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
          <app-icon name="code" [size]="28" css="icon-indigo" /> List Operations
        </h2>
        <div class="op-grid">
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Add & Remove</h3>
            <p class="op-desc">Append, insert at index, and remove elements.</p>
            <app-code-block [code]="codeAddRemove" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Search & Access</h3>
            <p class="op-desc">Get by index, check existence, find position.</p>
            <app-code-block [code]="codeSearch" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Sort & Transform</h3>
            <p class="op-desc">Sort, reverse, and convert between Lists and arrays.</p>
            <app-code-block [code]="codeSort" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Iteration Patterns</h3>
            <p class="op-desc">Multiple ways to traverse a List efficiently.</p>
            <app-code-block [code]="codeIterate" />
          </div>
        </div>
      </section>

      <!-- Performance Comparison -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="zap" [size]="28" css="icon-sky" /> Performance Comparison
        </h2>
        <div class="perf-table-wrap">
          <table class="perf-table">
            <thead>
              <tr>
                <th>Operation</th>
                <th>ArrayList</th>
                <th>LinkedList</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>get(index)</td><td class="fast">O(1) \u26A1</td><td class="slow">O(n)</td></tr>
              <tr><td>add(end)</td><td class="fast">O(1)*</td><td class="fast">O(1) \u26A1</td></tr>
              <tr><td>add(index)</td><td class="slow">O(n)</td><td class="fast">O(1)**</td></tr>
              <tr><td>remove(index)</td><td class="slow">O(n)</td><td class="fast">O(1)**</td></tr>
              <tr><td>contains()</td><td class="slow">O(n)</td><td class="slow">O(n)</td></tr>
              <tr><td>Memory</td><td class="fast">Compact</td><td class="slow">Node overhead</td></tr>
            </tbody>
          </table>
          <p class="perf-footnote">* Amortized \u2014 occasional resize. ** O(1) once at the node, O(n) to find it.</p>
        </div>
      </section>

      <!-- Use Cases -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="briefcase" [size]="28" css="icon-sky" /> Real-Time Use Cases
        </h2>
        <div class="use-cases">
          <div class="use-case sky">
            <div class="use-num sky-bg">1</div>
            <div>
              <h4 class="use-title">Shopping Cart (ArrayList)</h4>
              <p class="use-desc">Users browse items by index and rarely insert in the middle. <code>ArrayList</code>'s fast random access makes it the natural choice.</p>
            </div>
          </div>
          <div class="use-case blue">
            <div class="use-num blue-bg">2</div>
            <div>
              <h4 class="use-title">Undo History (LinkedList)</h4>
              <p class="use-desc">Each action is pushed to the front. Undo pops from the front. <code>LinkedList</code>'s O(1) head operations are ideal.</p>
            </div>
          </div>
          <div class="use-case purple">
            <div class="use-num purple-bg">3</div>
            <div>
              <h4 class="use-title">Database Query Results</h4>
              <p class="use-desc">JDBC's <code>ResultSet</code> rows are often loaded into an <code>ArrayList</code> for random access, pagination, and serialization to JSON.</p>
            </div>
          </div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ['/* angular:styles/component:css;3318aea72bae3a49126861278bcbfd72dc44fdc38b985499bbd93eafe9d48341;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/features/tutorials/topics/collections-list.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-sky {\n  color: #0284c7;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.prose ul {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose li {\n  margin-bottom: 8px;\n}\n.prose strong {\n  color: #0f172a;\n  font-weight: 700;\n}\n.prose code {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #0284c7;\n}\n.sub-heading {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 24px 0 8px;\n}\n.viz-card {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);\n  padding: 28px 24px;\n}\n.viz-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.dual-viz {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.viz-half {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 16px;\n}\n.viz-label {\n  display: block;\n  font-size: 0.58rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  color: #94a3b8;\n  margin-bottom: 12px;\n  text-align: center;\n}\n.array-viz {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  justify-content: center;\n  min-height: 50px;\n}\n.arr-cell {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  font-size: 0.78rem;\n  font-weight: 700;\n  background: #e0f2fe;\n  color: #0369a1;\n  border: 2px solid #7dd3fc;\n  transition: all 0.3s;\n  font-family: "JetBrains Mono", monospace;\n}\n.arr-cell.active {\n  background: #fef08a;\n  color: #854d0e;\n  border-color: #fbbf24;\n  transform: scale(1.1);\n}\n.arr-cell.inserted {\n  background: #bbf7d0;\n  color: #166534;\n  border-color: #4ade80;\n  transform: scale(1.1);\n}\n.linked-viz {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 2px;\n  justify-content: center;\n  min-height: 50px;\n  align-items: center;\n}\n.ll-node {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n.ll-val {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  font-size: 0.78rem;\n  font-weight: 700;\n  background: #fae8ff;\n  color: #7e22ce;\n  border: 2px solid #d8b4fe;\n  transition: all 0.3s;\n  font-family: "JetBrains Mono", monospace;\n}\n.ll-node.active .ll-val {\n  background: #fef08a;\n  color: #854d0e;\n  border-color: #fbbf24;\n  transform: scale(1.1);\n}\n.ll-node.inserted .ll-val {\n  background: #bbf7d0;\n  color: #166534;\n  border-color: #4ade80;\n  transform: scale(1.1);\n}\n.ll-arrow {\n  font-size: 0.7rem;\n  color: #94a3b8;\n  font-weight: 700;\n}\n.perf-note {\n  display: block;\n  text-align: center;\n  font-size: 0.6rem;\n  color: #94a3b8;\n  margin-top: 8px;\n  font-family: "JetBrains Mono", monospace;\n  min-height: 16px;\n}\n.viz-status {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n  margin-bottom: 20px;\n}\n.viz-controls {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-sky {\n  background: #0284c7;\n  color: #fff;\n}\n.btn-sky:hover:not(:disabled) {\n  background: #0369a1;\n}\n.btn-purple {\n  background: #7c3aed;\n  color: #fff;\n}\n.btn-purple:hover:not(:disabled) {\n  background: #6d28d9;\n}\n.btn-amber {\n  background: #d97706;\n  color: #fff;\n}\n.btn-amber:hover:not(:disabled) {\n  background: #b45309;\n}\n.btn-gray {\n  background: #e2e8f0;\n  color: #334155;\n}\n.btn-gray:hover:not(:disabled) {\n  background: #cbd5e1;\n}\n.perf-table-wrap {\n  overflow-x: auto;\n}\n.perf-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.78rem;\n}\n.perf-table th {\n  background: #f1f5f9;\n  padding: 10px 14px;\n  text-align: left;\n  font-weight: 700;\n  color: #0f172a;\n  border-bottom: 2px solid #e2e8f0;\n}\n.perf-table td {\n  padding: 10px 14px;\n  border-bottom: 1px solid #f1f5f9;\n  color: #334155;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.72rem;\n}\n.perf-table .fast {\n  color: #059669;\n  font-weight: 700;\n}\n.perf-table .slow {\n  color: #dc2626;\n}\n.perf-footnote {\n  font-size: 0.62rem;\n  color: #94a3b8;\n  margin-top: 8px;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.op-card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.op-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc {\n  font-size: 0.78rem;\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n.use-cases {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.use-case {\n  display: flex;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 14px;\n  border: 1px solid;\n}\n.use-case.sky {\n  background: #f0f9ff;\n  border-color: #bae6fd;\n}\n.use-case.blue {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.use-case.purple {\n  background: #faf5ff;\n  border-color: #d8b4fe;\n}\n.use-num {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.sky-bg {\n  background: #0284c7;\n}\n.blue-bg {\n  background: #3b82f6;\n}\n.purple-bg {\n  background: #8b5cf6;\n}\n.use-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.use-desc {\n  font-size: 0.78rem;\n  line-height: 1.55;\n  margin: 0;\n  color: #334155;\n}\n.use-desc code {\n  background: rgba(0, 0, 0, 0.06);\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.72rem;\n}\n/*# sourceMappingURL=collections-list.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollectionsListComponent, { className: "CollectionsListComponent", filePath: "src/app/features/tutorials/topics/collections-list.component.ts", lineNumber: 247 });
})();
export {
  CollectionsListComponent
};
//# sourceMappingURL=chunk-EGKJSQBB.js.map
