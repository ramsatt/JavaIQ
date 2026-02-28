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
  ɵɵclassMap,
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
} from "./chunk-6OY2Y3BE.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/arrays.component.ts
function ArraysComponent_For_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "span", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const val_r1 = ctx.$implicit;
    const \u0275$index_71_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("idx:", \u0275$index_71_r2);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.getBoxClass(\u0275$index_71_r2));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(val_r1);
  }
}
var ArraysComponent = class _ArraysComponent {
  // Visualizer State
  array = signal([10, 24, 8, 45, 12, 7], ...ngDevMode ? [{ debugName: "array" }] : []);
  activeIndex = signal(-1, ...ngDevMode ? [{ debugName: "activeIndex" }] : []);
  foundIndex = signal(-1, ...ngDevMode ? [{ debugName: "foundIndex" }] : []);
  status = signal("Ready. Choose an operation below.", ...ngDevMode ? [{ debugName: "status" }] : []);
  isAnimating = signal(false, ...ngDevMode ? [{ debugName: "isAnimating" }] : []);
  // Code Snippets
  codeDeclaring = `// 1. Declaration and instantiation with size
int[] numbers = new int[5];

// 2. Initialization
numbers[0] = 10;
numbers[1] = 20;

// 3. All-in-one declaration
String[] fruits = {"Apple", "Banana", "Cherry"};`;
  codeTraversal = `for (int i = 0; i < arr.length; i++) {
    System.out.println(arr[i]);
}

// Enhanced for-loop
for (int num : arr) {
    System.out.println(num);
}`;
  codeUpdating = `// Update existing index
arr[2] = 99;

// To add beyond capacity, create a
// new, larger array and copy over.`;
  codeSearching = `int target = 45;
int foundIndex = -1;

for (int i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
        foundIndex = i;
        break;
    }
}`;
  codeSorting = `import java.util.Arrays;

int[] nums = {5, 2, 8, 1};
Arrays.sort(nums);
// nums is now {1, 2, 5, 8}`;
  // Visualizer Methods
  getBoxClass(idx) {
    if (this.foundIndex() === idx)
      return "viz-box found";
    if (this.activeIndex() === idx)
      return "viz-box active";
    return "viz-box default";
  }
  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  resetVisual() {
    this.activeIndex.set(-1);
    this.foundIndex.set(-1);
    this.status.set("Ready. Choose an operation below.");
    this.isAnimating.set(false);
  }
  async handleLinearSearch() {
    if (this.isAnimating())
      return;
    this.isAnimating.set(true);
    this.activeIndex.set(-1);
    this.foundIndex.set(-1);
    this.status.set("Searching for element 45...");
    const arr = this.array();
    for (let i = 0; i < arr.length; i++) {
      this.activeIndex.set(i);
      await this.sleep(800);
      if (arr[i] === 45) {
        this.foundIndex.set(i);
        this.status.set(`Element 45 found at index ${i}!`);
        this.isAnimating.set(false);
        return;
      }
    }
    this.status.set("Element 45 not found.");
    this.activeIndex.set(-1);
    this.isAnimating.set(false);
  }
  async handleUpdate() {
    if (this.isAnimating())
      return;
    this.isAnimating.set(true);
    this.activeIndex.set(-1);
    this.foundIndex.set(-1);
    this.status.set("Locating index 2...");
    this.activeIndex.set(2);
    await this.sleep(1e3);
    this.status.set("Updating value at index 2 to 99...");
    this.array.update((prev) => {
      const a = [...prev];
      a[2] = 99;
      return a;
    });
    this.foundIndex.set(2);
    await this.sleep(1e3);
    this.status.set("Update complete!");
    this.activeIndex.set(-1);
    this.isAnimating.set(false);
  }
  handleResetArray() {
    this.array.set([10, 24, 8, 45, 12, 7]);
    this.resetVisual();
  }
  static \u0275fac = function ArraysComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ArraysComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ArraysComponent, selectors: [["app-topic-arrays"]], decls: 127, vars: 20, consts: [["title", "Mastering Java Arrays", "subtitle", "Everything you need to know about Java's most fundamental data structure. Learn the concepts, see the code, and interact with live animations.", "badge", "CORE JAVA", "gradient", "linear-gradient(135deg, #1e40af, #6366f1)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-blue", 3, "size"], [1, "prose"], [1, "sub-heading"], [3, "code"], [1, "viz-card"], [1, "viz-title"], ["name", "play", "css", "icon-blue", 3, "size"], [1, "viz-array"], [1, "viz-cell"], [1, "viz-status"], [1, "viz-controls"], [1, "btn", "btn-blue", 3, "click", "disabled"], ["name", "search", 3, "size"], [1, "btn", "btn-purple", 3, "click", "disabled"], ["name", "edit-3", 3, "size"], [1, "btn", "btn-gray", 3, "click", "disabled"], ["name", "refresh-cw", 3, "size"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"], ["name", "arrow-right", "css", "icon-indigo", 3, "size"], [1, "op-desc"], ["name", "briefcase", "css", "icon-teal", 3, "size"], [1, "use-cases"], [1, "use-case", "teal"], [1, "use-num", "teal-bg"], [1, "use-title"], [1, "use-desc"], [1, "use-case", "blue"], [1, "use-num", "blue-bg"], [1, "use-case", "purple"], [1, "use-num", "purple-bg"], [1, "viz-idx"]], template: function ArraysComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " What is a Java Array? ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7, " In Java, an ");
      \u0275\u0275elementStart(8, "strong");
      \u0275\u0275text(9, "Array");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " is a container object that holds a fixed number of values of a single type. The length of an array is established when the array is created. After creation, its length is fixed. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "ul")(12, "li")(13, "strong");
      \u0275\u0275text(14, "Zero-Indexed:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(15, " The first element is accessed using index ");
      \u0275\u0275elementStart(16, "code");
      \u0275\u0275text(17, "0");
      \u0275\u0275elementEnd();
      \u0275\u0275text(18, ", the second with ");
      \u0275\u0275elementStart(19, "code");
      \u0275\u0275text(20, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275text(21, ", and so on.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "li")(23, "strong");
      \u0275\u0275text(24, "Contiguous Memory:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(25, " Elements are stored in contiguous memory locations, making retrieval incredibly fast.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "li")(27, "strong");
      \u0275\u0275text(28, "Strongly Typed:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(29, " You cannot store a ");
      \u0275\u0275elementStart(30, "code");
      \u0275\u0275text(31, "String");
      \u0275\u0275elementEnd();
      \u0275\u0275text(32, " in an ");
      \u0275\u0275elementStart(33, "code");
      \u0275\u0275text(34, "int");
      \u0275\u0275elementEnd();
      \u0275\u0275text(35, " array.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "h4", 5);
      \u0275\u0275text(37, "Declaring and Initializing");
      \u0275\u0275elementEnd();
      \u0275\u0275element(38, "app-code-block", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "section", 1)(40, "div", 7)(41, "h3", 8);
      \u0275\u0275element(42, "app-icon", 9);
      \u0275\u0275text(43, " Interactive Array Visualizer ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 10);
      \u0275\u0275repeaterCreate(45, ArraysComponent_For_46_Template, 5, 4, "div", 11, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 12);
      \u0275\u0275text(48);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "div", 13)(50, "button", 14);
      \u0275\u0275listener("click", function ArraysComponent_Template_button_click_50_listener() {
        return ctx.handleLinearSearch();
      });
      \u0275\u0275element(51, "app-icon", 15);
      \u0275\u0275text(52, " Search for 45 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "button", 16);
      \u0275\u0275listener("click", function ArraysComponent_Template_button_click_53_listener() {
        return ctx.handleUpdate();
      });
      \u0275\u0275element(54, "app-icon", 17);
      \u0275\u0275text(55, " Update [2] \u2192 99 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "button", 18);
      \u0275\u0275listener("click", function ArraysComponent_Template_button_click_56_listener() {
        return ctx.handleResetArray();
      });
      \u0275\u0275element(57, "app-icon", 19);
      \u0275\u0275text(58, " Reset ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(59, "section", 1)(60, "h2", 2);
      \u0275\u0275element(61, "app-icon", 20);
      \u0275\u0275text(62, " Array Operations ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "div", 21)(64, "div", 22)(65, "h3", 23);
      \u0275\u0275element(66, "app-icon", 24);
      \u0275\u0275text(67, " Traversal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "p", 25);
      \u0275\u0275text(69, "Visiting every element in the array exactly once, usually to print or modify them.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(70, "app-code-block", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "div", 22)(72, "h3", 23);
      \u0275\u0275element(73, "app-icon", 24);
      \u0275\u0275text(74, " Insertion / Updating");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "p", 25);
      \u0275\u0275text(76, 'Arrays have fixed sizes, so "inserting" usually means updating an existing index or creating a larger array.');
      \u0275\u0275elementEnd();
      \u0275\u0275element(77, "app-code-block", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "div", 22)(79, "h3", 23);
      \u0275\u0275element(80, "app-icon", 24);
      \u0275\u0275text(81, " Searching");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "p", 25);
      \u0275\u0275text(83, "Finding the location of a specific element. Linear search checks one by one.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(84, "app-code-block", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "div", 22)(86, "h3", 23);
      \u0275\u0275element(87, "app-icon", 24);
      \u0275\u0275text(88, " Sorting");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "p", 25);
      \u0275\u0275text(90, "Rearranging elements in ascending or descending order using built-in utilities.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(91, "app-code-block", 6);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(92, "section", 1)(93, "h2", 2);
      \u0275\u0275element(94, "app-icon", 26);
      \u0275\u0275text(95, " Real-Time Use Cases ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "div", 27)(97, "div", 28)(98, "div", 29);
      \u0275\u0275text(99, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "div")(101, "h4", 30);
      \u0275\u0275text(102, "Leaderboards & High Scores");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "p", 31);
      \u0275\u0275text(104, 'A fixed-size array is perfect for maintaining a "Top 10" leaderboard. Sorting and updating are extremely fast.');
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(105, "div", 32)(106, "div", 33);
      \u0275\u0275text(107, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "div")(109, "h4", 30);
      \u0275\u0275text(110, "Pixel Data in Images (2D Arrays)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "p", 31);
      \u0275\u0275text(112, "Screens are represented as 2D arrays (");
      \u0275\u0275elementStart(113, "code");
      \u0275\u0275text(114, "int[][] pixels = new int[1920][1080];");
      \u0275\u0275elementEnd();
      \u0275\u0275text(115, "). Each index corresponds to an X/Y coordinate.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(116, "div", 34)(117, "div", 35);
      \u0275\u0275text(118, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "div")(120, "h4", 30);
      \u0275\u0275text(121, "Data Buffers for Audio/Video");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "p", 31);
      \u0275\u0275text(123, "Data is read in fixed chunks into a ");
      \u0275\u0275elementStart(124, "code");
      \u0275\u0275text(125, "byte[] buffer");
      \u0275\u0275elementEnd();
      \u0275\u0275text(126, " to process it efficiently without overwhelming system memory.");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(35);
      \u0275\u0275property("code", ctx.codeDeclaring);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 22);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.array());
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
      \u0275\u0275property("code", ctx.codeTraversal);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeUpdating);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeSearching);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeSorting);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ['\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-blue[_ngcontent-%COMP%] {\n  color: #2563eb;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.icon-teal[_ngcontent-%COMP%] {\n  color: #0d9488;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 700;\n}\n.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #4f46e5;\n}\n.sub-heading[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 24px 0 8px;\n}\n.viz-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);\n  padding: 28px 24px;\n}\n.viz-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.viz-array[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n  min-height: 90px;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.viz-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.viz-idx[_ngcontent-%COMP%] {\n  font-size: 0.58rem;\n  color: #94a3b8;\n  margin-bottom: 4px;\n  font-family: "JetBrains Mono", monospace;\n}\n.viz-box[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 12px;\n  font-size: 1.05rem;\n  font-weight: 800;\n  transition: all 0.3s ease;\n}\n.viz-box.default[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #1e40af;\n  border: 2px solid #bfdbfe;\n}\n.viz-box.active[_ngcontent-%COMP%] {\n  background: #fef08a;\n  color: #854d0e;\n  border: 2px solid #fbbf24;\n  transform: scale(1.1);\n  box-shadow: 0 4px 12px rgba(251, 191, 36, 0.3);\n}\n.viz-box.found[_ngcontent-%COMP%] {\n  background: #22c55e;\n  color: #fff;\n  border: 2px solid #16a34a;\n  transform: scale(1.1);\n  box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);\n}\n.viz-status[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n  margin-bottom: 20px;\n}\n.viz-controls[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-blue[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #fff;\n}\n.btn-blue[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n.btn-purple[_ngcontent-%COMP%] {\n  background: #7c3aed;\n  color: #fff;\n}\n.btn-purple[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #6d28d9;\n}\n.btn-gray[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #334155;\n}\n.btn-gray[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #cbd5e1;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  transition: box-shadow 0.2s;\n}\n.op-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.op-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n.use-cases[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.use-case[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 14px;\n  border: 1px solid;\n}\n.use-case.teal[_ngcontent-%COMP%] {\n  background: #f0fdfa;\n  border-color: #99f6e4;\n}\n.use-case.blue[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.use-case.purple[_ngcontent-%COMP%] {\n  background: #faf5ff;\n  border-color: #d8b4fe;\n}\n.use-num[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.teal-bg[_ngcontent-%COMP%] {\n  background: #14b8a6;\n}\n.blue-bg[_ngcontent-%COMP%] {\n  background: #3b82f6;\n}\n.purple-bg[_ngcontent-%COMP%] {\n  background: #8b5cf6;\n}\n.use-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.use-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  line-height: 1.55;\n  margin: 0;\n}\n.use-case.teal[_ngcontent-%COMP%]   .use-desc[_ngcontent-%COMP%] {\n  color: #134e4a;\n}\n.use-case.blue[_ngcontent-%COMP%]   .use-desc[_ngcontent-%COMP%] {\n  color: #1e3a5f;\n}\n.use-case.purple[_ngcontent-%COMP%]   .use-desc[_ngcontent-%COMP%] {\n  color: #3b0764;\n}\n.use-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.06);\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.72rem;\n}\n/*# sourceMappingURL=arrays.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArraysComponent, [{
    type: Component,
    args: [{ selector: "app-topic-arrays", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout
      title="Mastering Java Arrays"
      subtitle="Everything you need to know about Java's most fundamental data structure. Learn the concepts, see the code, and interact with live animations."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #1e40af, #6366f1)">

      <!-- Section 1: Concept -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="book-open" [size]="28" css="icon-blue" /> What is a Java Array?
        </h2>
        <div class="prose">
          <p>
            In Java, an <strong>Array</strong> is a container object that holds a fixed number of values of a single type. The length of an array is established when the array is created. After creation, its length is fixed.
          </p>
          <ul>
            <li><strong>Zero-Indexed:</strong> The first element is accessed using index <code>0</code>, the second with <code>1</code>, and so on.</li>
            <li><strong>Contiguous Memory:</strong> Elements are stored in contiguous memory locations, making retrieval incredibly fast.</li>
            <li><strong>Strongly Typed:</strong> You cannot store a <code>String</code> in an <code>int</code> array.</li>
          </ul>

          <h4 class="sub-heading">Declaring and Initializing</h4>
          <app-code-block [code]="codeDeclaring" />
        </div>
      </section>

      <!-- Section 2: Interactive Visualizer -->
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title">
            <app-icon name="play" [size]="22" css="icon-blue" /> Interactive Array Visualizer
          </h3>

          <!-- Array Display -->
          <div class="viz-array">
            @for (val of array(); track idx; let idx = $index) {
              <div class="viz-cell">
                <span class="viz-idx">idx:{{ idx }}</span>
                <div [class]="getBoxClass(idx)">{{ val }}</div>
              </div>
            }
          </div>

          <!-- Status -->
          <div class="viz-status">{{ status() }}</div>

          <!-- Controls -->
          <div class="viz-controls">
            <button (click)="handleLinearSearch()" [disabled]="isAnimating()" class="btn btn-blue">
              <app-icon name="search" [size]="16" /> Search for 45
            </button>
            <button (click)="handleUpdate()" [disabled]="isAnimating()" class="btn btn-purple">
              <app-icon name="edit-3" [size]="16" /> Update [2] \u2192 99
            </button>
            <button (click)="handleResetArray()" [disabled]="isAnimating()" class="btn btn-gray">
              <app-icon name="refresh-cw" [size]="16" /> Reset
            </button>
          </div>
        </div>
      </section>

      <!-- Section 3: Operations -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="code" [size]="28" css="icon-indigo" /> Array Operations
        </h2>
        <div class="op-grid">
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Traversal</h3>
            <p class="op-desc">Visiting every element in the array exactly once, usually to print or modify them.</p>
            <app-code-block [code]="codeTraversal" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Insertion / Updating</h3>
            <p class="op-desc">Arrays have fixed sizes, so "inserting" usually means updating an existing index or creating a larger array.</p>
            <app-code-block [code]="codeUpdating" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Searching</h3>
            <p class="op-desc">Finding the location of a specific element. Linear search checks one by one.</p>
            <app-code-block [code]="codeSearching" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Sorting</h3>
            <p class="op-desc">Rearranging elements in ascending or descending order using built-in utilities.</p>
            <app-code-block [code]="codeSorting" />
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
              <h4 class="use-title">Leaderboards & High Scores</h4>
              <p class="use-desc">A fixed-size array is perfect for maintaining a "Top 10" leaderboard. Sorting and updating are extremely fast.</p>
            </div>
          </div>
          <div class="use-case blue">
            <div class="use-num blue-bg">2</div>
            <div>
              <h4 class="use-title">Pixel Data in Images (2D Arrays)</h4>
              <p class="use-desc">Screens are represented as 2D arrays (<code>int[][] pixels = new int[1920][1080];</code>). Each index corresponds to an X/Y coordinate.</p>
            </div>
          </div>
          <div class="use-case purple">
            <div class="use-num purple-bg">3</div>
            <div>
              <h4 class="use-title">Data Buffers for Audio/Video</h4>
              <p class="use-desc">Data is read in fixed chunks into a <code>byte[] buffer</code> to process it efficiently without overwhelming system memory.</p>
            </div>
          </div>
        </div>
      </section>

    </app-tutorial-layout>
  `, styles: ['/* angular:styles/component:css;ac65ecdec9c978522ebe37d258b01d18ab4c220d8c06b66a57d2416f032ad0b9;D:/A21/JavaIQ/src/app/features/tutorials/topics/arrays.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-blue {\n  color: #2563eb;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.icon-teal {\n  color: #0d9488;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.prose ul {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose li {\n  margin-bottom: 8px;\n}\n.prose strong {\n  color: #0f172a;\n  font-weight: 700;\n}\n.prose code {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #4f46e5;\n}\n.sub-heading {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 24px 0 8px;\n}\n.viz-card {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);\n  padding: 28px 24px;\n}\n.viz-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.viz-array {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n  min-height: 90px;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.viz-cell {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.viz-idx {\n  font-size: 0.58rem;\n  color: #94a3b8;\n  margin-bottom: 4px;\n  font-family: "JetBrains Mono", monospace;\n}\n.viz-box {\n  width: 52px;\n  height: 52px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 12px;\n  font-size: 1.05rem;\n  font-weight: 800;\n  transition: all 0.3s ease;\n}\n.viz-box.default {\n  background: #eff6ff;\n  color: #1e40af;\n  border: 2px solid #bfdbfe;\n}\n.viz-box.active {\n  background: #fef08a;\n  color: #854d0e;\n  border: 2px solid #fbbf24;\n  transform: scale(1.1);\n  box-shadow: 0 4px 12px rgba(251, 191, 36, 0.3);\n}\n.viz-box.found {\n  background: #22c55e;\n  color: #fff;\n  border: 2px solid #16a34a;\n  transform: scale(1.1);\n  box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);\n}\n.viz-status {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n  margin-bottom: 20px;\n}\n.viz-controls {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-blue {\n  background: #2563eb;\n  color: #fff;\n}\n.btn-blue:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n.btn-purple {\n  background: #7c3aed;\n  color: #fff;\n}\n.btn-purple:hover:not(:disabled) {\n  background: #6d28d9;\n}\n.btn-gray {\n  background: #e2e8f0;\n  color: #334155;\n}\n.btn-gray:hover:not(:disabled) {\n  background: #cbd5e1;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  transition: box-shadow 0.2s;\n}\n.op-card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.op-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc {\n  font-size: 0.78rem;\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n.use-cases {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.use-case {\n  display: flex;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 14px;\n  border: 1px solid;\n}\n.use-case.teal {\n  background: #f0fdfa;\n  border-color: #99f6e4;\n}\n.use-case.blue {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.use-case.purple {\n  background: #faf5ff;\n  border-color: #d8b4fe;\n}\n.use-num {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.teal-bg {\n  background: #14b8a6;\n}\n.blue-bg {\n  background: #3b82f6;\n}\n.purple-bg {\n  background: #8b5cf6;\n}\n.use-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.use-desc {\n  font-size: 0.78rem;\n  line-height: 1.55;\n  margin: 0;\n}\n.use-case.teal .use-desc {\n  color: #134e4a;\n}\n.use-case.blue .use-desc {\n  color: #1e3a5f;\n}\n.use-case.purple .use-desc {\n  color: #3b0764;\n}\n.use-desc code {\n  background: rgba(0, 0, 0, 0.06);\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.72rem;\n}\n/*# sourceMappingURL=arrays.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ArraysComponent, { className: "ArraysComponent", filePath: "src/app/features/tutorials/topics/arrays.component.ts", lineNumber: 305 });
})();
export {
  ArraysComponent
};
//# sourceMappingURL=chunk-SUVMQHKO.js.map
