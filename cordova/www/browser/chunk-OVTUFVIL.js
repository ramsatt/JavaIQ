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
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-L6VISU4K.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/collections-map.component.ts
var _forTrack0 = ($index, $item) => $item.index;
var _forTrack1 = ($index, $item) => $item.key;
function CollectionsMapComponent_For_45_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "span", 43);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 44);
    \u0275\u0275text(4, "\u2192");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 45);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("highlight", entry_r1.key === ctx_r1.activeKey());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r1.key);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(entry_r1.value);
  }
}
function CollectionsMapComponent_For_45_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1, "empty");
    \u0275\u0275elementEnd();
  }
}
function CollectionsMapComponent_For_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "span", 38);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 39);
    \u0275\u0275repeaterCreate(4, CollectionsMapComponent_For_45_For_5_Template, 7, 4, "div", 40, _forTrack1);
    \u0275\u0275conditionalCreate(6, CollectionsMapComponent_For_45_Conditional_6_Template, 2, 0, "span", 41);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const bucket_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", bucket_r3.index === ctx_r1.activeBucket());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(bucket_r3.index);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(bucket_r3.entries);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(bucket_r3.entries.length === 0 ? 6 : -1);
  }
}
var CollectionsMapComponent = class _CollectionsMapComponent {
  defaultBuckets = () => [
    { index: 0, entries: [{ key: "apple", value: "3" }] },
    { index: 1, entries: [] },
    { index: 2, entries: [{ key: "banana", value: "5" }] },
    { index: 3, entries: [{ key: "cherry", value: "2" }] },
    { index: 4, entries: [] }
  ];
  buckets = signal(this.defaultBuckets(), ...ngDevMode ? [{ debugName: "buckets" }] : []);
  activeBucket = signal(-1, ...ngDevMode ? [{ debugName: "activeBucket" }] : []);
  activeKey = signal("", ...ngDevMode ? [{ debugName: "activeKey" }] : []);
  status = signal("HashMap stores entries in buckets based on key.hashCode() % capacity.", ...ngDevMode ? [{ debugName: "status" }] : []);
  isAnimating = signal(false, ...ngDevMode ? [{ debugName: "isAnimating" }] : []);
  codeCreating = `// HashMap \u2014 most common
Map<String, Integer> map = new HashMap<>();
map.put("apple", 3);

// TreeMap \u2014 sorted keys
Map<String, Integer> sorted = new TreeMap<>(map);

// HashSet \u2014 unique elements
Set<String> set = new HashSet<>();
set.add("Java"); set.add("Java"); // still 1 element
set.size(); // 1`;
  codeMapOps = `map.put("key", 42);       // add/update
map.get("key");            // 42
map.getOrDefault("x", 0); // 0
map.remove("key");         // removes entry
map.containsKey("key");    // false
map.containsValue(42);    // false
map.size();                // 0`;
  codeSetOps = `Set<String> a = Set.of("A","B","C");
Set<String> b = Set.of("B","C","D");

// Union
Set<String> union = new HashSet<>(a);
union.addAll(b);     // [A, B, C, D]

// Intersection
Set<String> inter = new HashSet<>(a);
inter.retainAll(b);  // [B, C]

// Difference
Set<String> diff = new HashSet<>(a);
diff.removeAll(b);   // [A]`;
  codeIterate = `// Map iteration
for (Map.Entry<K,V> e : map.entrySet()) {
    e.getKey(); e.getValue();
}

// forEach
map.forEach((k, v) ->
    System.out.println(k + "=" + v));

// Keys only / Values only
for (String key : map.keySet()) { ... }
for (int val : map.values()) { ... }`;
  codeModern = `// getOrDefault
int count = map.getOrDefault("x", 0);

// computeIfAbsent \u2014 lazy init
map.computeIfAbsent("key",
    k -> expensiveCompute(k));

// merge \u2014 word count in one line!
map.merge(word, 1, Integer::sum);

// putIfAbsent
map.putIfAbsent("key", defaultVal);`;
  sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }
  async demoPut() {
    if (this.isAnimating())
      return;
    this.isAnimating.set(true);
    this.status.set('put("grape", 7) \u2192 hashCode("grape") % 5 = 1');
    this.activeBucket.set(1);
    await this.sleep(1200);
    this.buckets.update((b) => b.map((bk, i) => i === 1 ? __spreadProps(__spreadValues({}, bk), { entries: [{ key: "grape", value: "7" }] }) : bk));
    this.activeKey.set("grape");
    this.status.set('Bucket 1 now contains {"grape" \u2192 7}. O(1) insertion! \u2705');
    this.isAnimating.set(false);
  }
  async demoGet() {
    if (this.isAnimating())
      return;
    this.isAnimating.set(true);
    this.activeKey.set("");
    this.status.set('get("banana") \u2192 hashCode("banana") % 5 = 2');
    this.activeBucket.set(2);
    await this.sleep(1e3);
    this.activeKey.set("banana");
    this.status.set('Found in bucket 2: "banana" \u2192 5. O(1) lookup! \u2705');
    this.isAnimating.set(false);
  }
  async demoCollision() {
    if (this.isAnimating())
      return;
    this.isAnimating.set(true);
    this.status.set("Two keys hash to the SAME bucket (collision)...");
    this.activeBucket.set(0);
    await this.sleep(1e3);
    this.buckets.update((b) => b.map((bk, i) => i === 0 ? __spreadProps(__spreadValues({}, bk), { entries: [...bk.entries, { key: "apricot", value: "4" }] }) : bk));
    this.activeKey.set("apricot");
    this.status.set("Bucket 0 now has a chain: apple \u2192 apricot. Linked list within bucket! \u26A0\uFE0F");
    await this.sleep(1500);
    this.status.set("Too many collisions \u2192 O(n) lookup. Java 8+ converts chains to red-black trees at 8 entries.");
    this.isAnimating.set(false);
  }
  resetDemo() {
    this.buckets.set(this.defaultBuckets());
    this.activeBucket.set(-1);
    this.activeKey.set("");
    this.status.set("HashMap stores entries in buckets based on key.hashCode() % capacity.");
    this.isAnimating.set(false);
  }
  static \u0275fac = function CollectionsMapComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CollectionsMapComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollectionsMapComponent, selectors: [["app-topic-collections-map"]], decls: 131, vars: 22, consts: [["title", "Collections: Map & Set", "subtitle", "Key-value pairs and unique elements. Master HashMap, TreeMap, HashSet, and their performance characteristics.", "badge", "CORE JAVA", "gradient", "linear-gradient(135deg, #9333ea, #c084fc)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-purple", 3, "size"], [1, "prose"], [3, "code"], [1, "viz-card"], [1, "viz-title"], ["name", "play", "css", "icon-purple", 3, "size"], [1, "bucket-grid"], [1, "bucket", 3, "active"], [1, "viz-status"], [1, "viz-controls"], [1, "btn", "btn-purple", 3, "click", "disabled"], ["name", "play", 3, "size"], [1, "btn", "btn-blue", 3, "click", "disabled"], ["name", "search", 3, "size"], [1, "btn", "btn-amber", 3, "click", "disabled"], ["name", "alert-triangle", 3, "size"], [1, "btn", "btn-gray", 3, "click", "disabled"], ["name", "refresh-cw", 3, "size"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"], ["name", "arrow-right", "css", "icon-indigo", 3, "size"], [1, "op-desc"], ["name", "briefcase", "css", "icon-purple", 3, "size"], [1, "use-cases"], [1, "use-case", "purple"], [1, "use-num", "purple-bg"], [1, "use-title"], [1, "use-desc"], [1, "use-case", "blue"], [1, "use-num", "blue-bg"], [1, "use-case", "teal"], [1, "use-num", "teal-bg"], [1, "bucket"], [1, "bucket-idx"], [1, "bucket-entries"], [1, "entry", 3, "highlight"], [1, "empty"], [1, "entry"], [1, "entry-key"], [1, "entry-sep"], [1, "entry-val"]], template: function CollectionsMapComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Map & Set Interfaces ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7, "A ");
      \u0275\u0275elementStart(8, "strong");
      \u0275\u0275text(9, "Map");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " stores key-value pairs where each key is unique. A ");
      \u0275\u0275elementStart(11, "strong");
      \u0275\u0275text(12, "Set");
      \u0275\u0275elementEnd();
      \u0275\u0275text(13, " stores unique elements with no duplicates.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "ul")(15, "li")(16, "strong");
      \u0275\u0275text(17, "HashMap:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(18, " O(1) average for get/put. No ordering. Allows one ");
      \u0275\u0275elementStart(19, "code");
      \u0275\u0275text(20, "null");
      \u0275\u0275elementEnd();
      \u0275\u0275text(21, " key.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "li")(23, "strong");
      \u0275\u0275text(24, "TreeMap:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(25, " O(log n) \u2014 sorted by key. Implements ");
      \u0275\u0275elementStart(26, "code");
      \u0275\u0275text(27, "NavigableMap");
      \u0275\u0275elementEnd();
      \u0275\u0275text(28, ".");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "li")(30, "strong");
      \u0275\u0275text(31, "LinkedHashMap:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(32, " O(1) \u2014 maintains insertion order.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "li")(34, "strong");
      \u0275\u0275text(35, "HashSet:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(36, " Backed by a HashMap internally. O(1) add/contains.");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(37, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "section", 1)(39, "div", 6)(40, "h3", 7);
      \u0275\u0275element(41, "app-icon", 8);
      \u0275\u0275text(42, " HashMap Bucket Visualizer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 9);
      \u0275\u0275repeaterCreate(44, CollectionsMapComponent_For_45_Template, 7, 4, "div", 10, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 11);
      \u0275\u0275text(47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 12)(49, "button", 13);
      \u0275\u0275listener("click", function CollectionsMapComponent_Template_button_click_49_listener() {
        return ctx.demoPut();
      });
      \u0275\u0275element(50, "app-icon", 14);
      \u0275\u0275text(51, ' put("grape", 7)');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "button", 15);
      \u0275\u0275listener("click", function CollectionsMapComponent_Template_button_click_52_listener() {
        return ctx.demoGet();
      });
      \u0275\u0275element(53, "app-icon", 16);
      \u0275\u0275text(54, ' get("banana")');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "button", 17);
      \u0275\u0275listener("click", function CollectionsMapComponent_Template_button_click_55_listener() {
        return ctx.demoCollision();
      });
      \u0275\u0275element(56, "app-icon", 18);
      \u0275\u0275text(57, " Show Collision");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "button", 19);
      \u0275\u0275listener("click", function CollectionsMapComponent_Template_button_click_58_listener() {
        return ctx.resetDemo();
      });
      \u0275\u0275element(59, "app-icon", 20);
      \u0275\u0275text(60, " Reset");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(61, "section", 1)(62, "h2", 2);
      \u0275\u0275element(63, "app-icon", 21);
      \u0275\u0275text(64, " Operations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "div", 22)(66, "div", 23)(67, "h3", 24);
      \u0275\u0275element(68, "app-icon", 25);
      \u0275\u0275text(69, " Map Operations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "p", 26);
      \u0275\u0275text(71, "Put, get, remove, and iterate over key-value pairs.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(72, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "div", 23)(74, "h3", 24);
      \u0275\u0275element(75, "app-icon", 25);
      \u0275\u0275text(76, " Set Operations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "p", 26);
      \u0275\u0275text(78, "Add unique elements, check membership, and set algebra.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(79, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "div", 23)(81, "h3", 24);
      \u0275\u0275element(82, "app-icon", 25);
      \u0275\u0275text(83, " Iteration Patterns");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "p", 26);
      \u0275\u0275text(85, "Multiple ways to traverse Maps and Sets.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(86, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "div", 23)(88, "h3", 24);
      \u0275\u0275element(89, "app-icon", 25);
      \u0275\u0275text(90, " Java 8+ Methods");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "p", 26);
      \u0275\u0275text(92, "Modern helpers like getOrDefault, computeIfAbsent, merge.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(93, "app-code-block", 5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(94, "section", 1)(95, "h2", 2);
      \u0275\u0275element(96, "app-icon", 27);
      \u0275\u0275text(97, " Real-Time Use Cases");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "div", 28)(99, "div", 29)(100, "div", 30);
      \u0275\u0275text(101, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "div")(103, "h4", 31);
      \u0275\u0275text(104, "Caching (HashMap)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "p", 32);
      \u0275\u0275text(106, "In-memory caches like Caffeine/Guava use ");
      \u0275\u0275elementStart(107, "code");
      \u0275\u0275text(108, "ConcurrentHashMap");
      \u0275\u0275elementEnd();
      \u0275\u0275text(109, " for O(1) lookups of frequently accessed data (user sessions, config values).");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(110, "div", 33)(111, "div", 34);
      \u0275\u0275text(112, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "div")(114, "h4", 31);
      \u0275\u0275text(115, "Deduplication (HashSet)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "p", 32);
      \u0275\u0275text(117, "Remove duplicates from API results or database rows by adding to a ");
      \u0275\u0275elementStart(118, "code");
      \u0275\u0275text(119, "HashSet");
      \u0275\u0275elementEnd();
      \u0275\u0275text(120, " \u2014 only unique elements survive.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(121, "div", 35)(122, "div", 36);
      \u0275\u0275text(123, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "div")(125, "h4", 31);
      \u0275\u0275text(126, "Word Frequency Counter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "p", 32)(128, "code");
      \u0275\u0275text(129, "map.merge(word, 1, Integer::sum)");
      \u0275\u0275elementEnd();
      \u0275\u0275text(130, " \u2014 one line to count word occurrences in large text files or log analysis.");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(34);
      \u0275\u0275property("code", ctx.codeCreating);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 22);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.buckets());
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
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isAnimating());
      \u0275\u0275advance();
      \u0275\u0275property("size", 16);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(5);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeMapOps);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeSetOps);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeIterate);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeModern);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ['\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-purple[_ngcontent-%COMP%] {\n  color: #9333ea;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 700;\n}\n.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #9333ea;\n}\n.viz-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);\n  padding: 28px 24px;\n}\n.viz-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.bucket-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 20px;\n}\n.bucket[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 8px 12px;\n  border-radius: 10px;\n  border: 2px solid #e2e8f0;\n  background: #fff;\n  transition: all 0.3s;\n}\n.bucket.active[_ngcontent-%COMP%] {\n  border-color: #9333ea;\n  background: #faf5ff;\n}\n.bucket-idx[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  min-width: 28px;\n  background: #f1f5f9;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.6rem;\n  font-weight: 800;\n  color: #94a3b8;\n  font-family: "JetBrains Mono", monospace;\n}\n.bucket-entries[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  flex: 1;\n}\n.entry[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n  font-size: 0.68rem;\n  font-family: "JetBrains Mono", monospace;\n  transition: all 0.3s;\n}\n.entry.highlight[_ngcontent-%COMP%] {\n  background: #faf5ff;\n  border-color: #9333ea;\n}\n.entry-key[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #9333ea;\n}\n.entry-sep[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.entry-val[_ngcontent-%COMP%] {\n  color: #0f172a;\n}\n.empty[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  color: #cbd5e1;\n  padding: 4px 0;\n}\n.viz-status[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n  margin-bottom: 20px;\n}\n.viz-controls[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-purple[_ngcontent-%COMP%] {\n  background: #9333ea;\n  color: #fff;\n}\n.btn-purple[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #7e22ce;\n}\n.btn-blue[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #fff;\n}\n.btn-blue[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n.btn-amber[_ngcontent-%COMP%] {\n  background: #d97706;\n  color: #fff;\n}\n.btn-amber[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #b45309;\n}\n.btn-gray[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #334155;\n}\n.btn-gray[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #cbd5e1;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.op-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.op-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n.use-cases[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.use-case[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 14px;\n  border: 1px solid;\n}\n.use-case.purple[_ngcontent-%COMP%] {\n  background: #faf5ff;\n  border-color: #d8b4fe;\n}\n.use-case.blue[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.use-case.teal[_ngcontent-%COMP%] {\n  background: #f0fdfa;\n  border-color: #99f6e4;\n}\n.use-num[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.purple-bg[_ngcontent-%COMP%] {\n  background: #9333ea;\n}\n.blue-bg[_ngcontent-%COMP%] {\n  background: #3b82f6;\n}\n.teal-bg[_ngcontent-%COMP%] {\n  background: #14b8a6;\n}\n.use-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.use-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  line-height: 1.55;\n  margin: 0;\n  color: #334155;\n}\n.use-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.06);\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.72rem;\n}\n/*# sourceMappingURL=collections-map.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollectionsMapComponent, [{
    type: Component,
    args: [{ selector: "app-topic-collections-map", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout
      title="Collections: Map & Set"
      subtitle="Key-value pairs and unique elements. Master HashMap, TreeMap, HashSet, and their performance characteristics."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #9333ea, #c084fc)">

      <section class="section">
        <h2 class="section-heading">
          <app-icon name="book-open" [size]="28" css="icon-purple" /> Map & Set Interfaces
        </h2>
        <div class="prose">
          <p>A <strong>Map</strong> stores key-value pairs where each key is unique. A <strong>Set</strong> stores unique elements with no duplicates.</p>
          <ul>
            <li><strong>HashMap:</strong> O(1) average for get/put. No ordering. Allows one <code>null</code> key.</li>
            <li><strong>TreeMap:</strong> O(log n) \u2014 sorted by key. Implements <code>NavigableMap</code>.</li>
            <li><strong>LinkedHashMap:</strong> O(1) \u2014 maintains insertion order.</li>
            <li><strong>HashSet:</strong> Backed by a HashMap internally. O(1) add/contains.</li>
          </ul>
          <app-code-block [code]="codeCreating" />
        </div>
      </section>

      <!-- Interactive Visualizer -->
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title"><app-icon name="play" [size]="22" css="icon-purple" /> HashMap Bucket Visualizer</h3>
          <div class="bucket-grid">
            @for (bucket of buckets(); track bucket.index) {
              <div class="bucket" [class.active]="bucket.index === activeBucket()">
                <span class="bucket-idx">{{ bucket.index }}</span>
                <div class="bucket-entries">
                  @for (entry of bucket.entries; track entry.key) {
                    <div class="entry" [class.highlight]="entry.key === activeKey()">
                      <span class="entry-key">{{ entry.key }}</span>
                      <span class="entry-sep">\u2192</span>
                      <span class="entry-val">{{ entry.value }}</span>
                    </div>
                  }
                  @if (bucket.entries.length === 0) {
                    <span class="empty">empty</span>
                  }
                </div>
              </div>
            }
          </div>
          <div class="viz-status">{{ status() }}</div>
          <div class="viz-controls">
            <button (click)="demoPut()" [disabled]="isAnimating()" class="btn btn-purple"><app-icon name="play" [size]="16" /> put("grape", 7)</button>
            <button (click)="demoGet()" [disabled]="isAnimating()" class="btn btn-blue"><app-icon name="search" [size]="16" /> get("banana")</button>
            <button (click)="demoCollision()" [disabled]="isAnimating()" class="btn btn-amber"><app-icon name="alert-triangle" [size]="16" /> Show Collision</button>
            <button (click)="resetDemo()" [disabled]="isAnimating()" class="btn btn-gray"><app-icon name="refresh-cw" [size]="16" /> Reset</button>
          </div>
        </div>
      </section>

      <!-- Key Concepts -->
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Operations</h2>
        <div class="op-grid">
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Map Operations</h3>
            <p class="op-desc">Put, get, remove, and iterate over key-value pairs.</p>
            <app-code-block [code]="codeMapOps" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Set Operations</h3>
            <p class="op-desc">Add unique elements, check membership, and set algebra.</p>
            <app-code-block [code]="codeSetOps" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Iteration Patterns</h3>
            <p class="op-desc">Multiple ways to traverse Maps and Sets.</p>
            <app-code-block [code]="codeIterate" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Java 8+ Methods</h3>
            <p class="op-desc">Modern helpers like getOrDefault, computeIfAbsent, merge.</p>
            <app-code-block [code]="codeModern" />
          </div>
        </div>
      </section>

      <!-- Use Cases -->
      <section class="section">
        <h2 class="section-heading"><app-icon name="briefcase" [size]="28" css="icon-purple" /> Real-Time Use Cases</h2>
        <div class="use-cases">
          <div class="use-case purple"><div class="use-num purple-bg">1</div><div><h4 class="use-title">Caching (HashMap)</h4><p class="use-desc">In-memory caches like Caffeine/Guava use <code>ConcurrentHashMap</code> for O(1) lookups of frequently accessed data (user sessions, config values).</p></div></div>
          <div class="use-case blue"><div class="use-num blue-bg">2</div><div><h4 class="use-title">Deduplication (HashSet)</h4><p class="use-desc">Remove duplicates from API results or database rows by adding to a <code>HashSet</code> \u2014 only unique elements survive.</p></div></div>
          <div class="use-case teal"><div class="use-num teal-bg">3</div><div><h4 class="use-title">Word Frequency Counter</h4><p class="use-desc"><code>map.merge(word, 1, Integer::sum)</code> \u2014 one line to count word occurrences in large text files or log analysis.</p></div></div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ['/* angular:styles/component:css;57451080cc23bd9f2afeede05aa3568cfea5153c083309511e9110a8feb20083;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/features/tutorials/topics/collections-map.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-purple {\n  color: #9333ea;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.prose ul {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose li {\n  margin-bottom: 8px;\n}\n.prose strong {\n  color: #0f172a;\n  font-weight: 700;\n}\n.prose code {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #9333ea;\n}\n.viz-card {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);\n  padding: 28px 24px;\n}\n.viz-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.bucket-grid {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 20px;\n}\n.bucket {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 8px 12px;\n  border-radius: 10px;\n  border: 2px solid #e2e8f0;\n  background: #fff;\n  transition: all 0.3s;\n}\n.bucket.active {\n  border-color: #9333ea;\n  background: #faf5ff;\n}\n.bucket-idx {\n  width: 28px;\n  height: 28px;\n  min-width: 28px;\n  background: #f1f5f9;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.6rem;\n  font-weight: 800;\n  color: #94a3b8;\n  font-family: "JetBrains Mono", monospace;\n}\n.bucket-entries {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  flex: 1;\n}\n.entry {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n  font-size: 0.68rem;\n  font-family: "JetBrains Mono", monospace;\n  transition: all 0.3s;\n}\n.entry.highlight {\n  background: #faf5ff;\n  border-color: #9333ea;\n}\n.entry-key {\n  font-weight: 700;\n  color: #9333ea;\n}\n.entry-sep {\n  color: #94a3b8;\n}\n.entry-val {\n  color: #0f172a;\n}\n.empty {\n  font-size: 0.6rem;\n  color: #cbd5e1;\n  padding: 4px 0;\n}\n.viz-status {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n  margin-bottom: 20px;\n}\n.viz-controls {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-purple {\n  background: #9333ea;\n  color: #fff;\n}\n.btn-purple:hover:not(:disabled) {\n  background: #7e22ce;\n}\n.btn-blue {\n  background: #2563eb;\n  color: #fff;\n}\n.btn-blue:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n.btn-amber {\n  background: #d97706;\n  color: #fff;\n}\n.btn-amber:hover:not(:disabled) {\n  background: #b45309;\n}\n.btn-gray {\n  background: #e2e8f0;\n  color: #334155;\n}\n.btn-gray:hover:not(:disabled) {\n  background: #cbd5e1;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.op-card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.op-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc {\n  font-size: 0.78rem;\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n.use-cases {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.use-case {\n  display: flex;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 14px;\n  border: 1px solid;\n}\n.use-case.purple {\n  background: #faf5ff;\n  border-color: #d8b4fe;\n}\n.use-case.blue {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.use-case.teal {\n  background: #f0fdfa;\n  border-color: #99f6e4;\n}\n.use-num {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.purple-bg {\n  background: #9333ea;\n}\n.blue-bg {\n  background: #3b82f6;\n}\n.teal-bg {\n  background: #14b8a6;\n}\n.use-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.use-desc {\n  font-size: 0.78rem;\n  line-height: 1.55;\n  margin: 0;\n  color: #334155;\n}\n.use-desc code {\n  background: rgba(0, 0, 0, 0.06);\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.72rem;\n}\n/*# sourceMappingURL=collections-map.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollectionsMapComponent, { className: "CollectionsMapComponent", filePath: "src/app/features/tutorials/topics/collections-map.component.ts", lineNumber: 153 });
})();
export {
  CollectionsMapComponent
};
//# sourceMappingURL=chunk-OVTUFVIL.js.map
