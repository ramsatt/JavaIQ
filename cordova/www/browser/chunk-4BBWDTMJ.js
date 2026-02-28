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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-6OY2Y3BE.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/io-files.component.ts
function IoFilesComponent_Conditional_61_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const byte_r1 = ctx.$implicit;
    const \u0275$index_98_r2 = ctx.$index;
    \u0275\u0275styleProp("animation-delay", \u0275$index_98_r2 * 150, "ms");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(byte_r1);
  }
}
function IoFilesComponent_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275repeaterCreate(1, IoFilesComponent_Conditional_61_For_2_Template, 2, 3, "span", 40, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.flowBytes());
  }
}
var IoFilesComponent = class _IoFilesComponent {
  sourceName = signal("data.txt", ...ngDevMode ? [{ debugName: "sourceName" }] : []);
  destName = signal("Program", ...ngDevMode ? [{ debugName: "destName" }] : []);
  activeBlock = signal("", ...ngDevMode ? [{ debugName: "activeBlock" }] : []);
  showFlow = signal(false, ...ngDevMode ? [{ debugName: "showFlow" }] : []);
  flowBytes = signal([], ...ngDevMode ? [{ debugName: "flowBytes" }] : []);
  status = signal("Java I/O reads bytes/chars from sources and writes to destinations.", ...ngDevMode ? [{ debugName: "status" }] : []);
  isAnimating = signal(false, ...ngDevMode ? [{ debugName: "isAnimating" }] : []);
  codeOverview = `// NIO.2 \u2014 Modern File API (preferred)
Path path = Path.of("data.txt");

// Read entire file as string
String content = Files.readString(path);

// Read all lines
List<String> lines = Files.readAllLines(path);

// Write string to file
Files.writeString(path, "Hello World");

// Always use try-with-resources!
try (var reader = Files.newBufferedReader(path)) {
    String line;
    while ((line = reader.readLine()) != null) {
        process(line);
    }
}`;
  codeRead = `// One-liner read
String text = Files.readString(Path.of("f.txt"));

// Read all lines
List<String> lines =
    Files.readAllLines(Path.of("f.txt"));

// Streaming (lazy, memory-efficient)
try (Stream<String> stream =
        Files.lines(Path.of("big.log"))) {
    long errors = stream
        .filter(l -> l.contains("ERROR"))
        .count();
}

// Read bytes
byte[] data = Files.readAllBytes(path);`;
  codeWrite = `// Write string
Files.writeString(path, "Hello World",
    StandardOpenOption.CREATE,
    StandardOpenOption.TRUNCATE_EXISTING);

// Write lines
Files.write(path, List.of("line1", "line2"));

// Append
Files.writeString(path, "more data",
    StandardOpenOption.APPEND);

// Buffered writer (efficient for large output)
try (var bw = Files.newBufferedWriter(path)) {
    bw.write("Hello");
    bw.newLine();
}`;
  codePath = `Path p = Path.of("src", "main", "App.java");
p.getFileName();    // App.java
p.getParent();      // src/main
p.toAbsolutePath(); // /home/.../src/main/App.java

// Resolve (join paths)
Path base = Path.of("/project");
Path full = base.resolve("src/App.java");
// /project/src/App.java

// File operations
Files.exists(p);
Files.isDirectory(p);
Files.size(p);          // bytes
Files.copy(src, dest, REPLACE_EXISTING);
Files.move(src, dest);
Files.delete(p);`;
  codeWalk = `// List directory contents
try (var entries = Files.list(dir)) {
    entries.forEach(System.out::println);
}

// Walk tree (recursive)
try (var walk = Files.walk(root)) {
    List<Path> javaFiles = walk
        .filter(p -> p.toString().endsWith(".java"))
        .toList();
}

// Find files matching a pattern
try (var found = Files.find(root, 10,
        (p, attr) -> attr.isRegularFile()
            && p.toString().endsWith(".log"))) {
    found.forEach(System.out::println);
}`;
  sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }
  async demoRead() {
    if (this.isAnimating())
      return;
    this.isAnimating.set(true);
    this.showFlow.set(false);
    this.sourceName.set("data.txt");
    this.destName.set("Program");
    this.activeBlock.set("source");
    this.status.set("Opening data.txt for reading...");
    await this.sleep(800);
    this.showFlow.set(true);
    this.flowBytes.set(["H", "e", "l", "l", "o"]);
    this.status.set("Reading bytes: H \u2192 e \u2192 l \u2192 l \u2192 o");
    await this.sleep(1200);
    this.activeBlock.set("dest");
    this.status.set("All bytes transferred to Program memory. File closed automatically! \u2705");
    this.isAnimating.set(false);
  }
  async demoWrite() {
    if (this.isAnimating())
      return;
    this.isAnimating.set(true);
    this.showFlow.set(false);
    this.sourceName.set("Program");
    this.destName.set("output.txt");
    this.activeBlock.set("source");
    this.status.set("Program generating data to write...");
    await this.sleep(800);
    this.showFlow.set(true);
    this.flowBytes.set(["W", "r", "i", "t", "e"]);
    this.status.set("Writing bytes: W \u2192 r \u2192 i \u2192 t \u2192 e");
    await this.sleep(1200);
    this.activeBlock.set("dest");
    this.status.set("Data written to output.txt. Buffered and flushed! \u2705");
    this.isAnimating.set(false);
  }
  async demoCopy() {
    if (this.isAnimating())
      return;
    this.isAnimating.set(true);
    this.showFlow.set(false);
    this.sourceName.set("source.txt");
    this.destName.set("backup.txt");
    this.activeBlock.set("source");
    this.status.set("Files.copy(source, backup, REPLACE_EXISTING)...");
    await this.sleep(800);
    this.showFlow.set(true);
    this.flowBytes.set(["\u{1F4C4}", "\u2192", "\u{1F4C4}"]);
    this.status.set("NIO.2 copies efficiently \u2014 OS-level transfer when possible.");
    await this.sleep(1200);
    this.activeBlock.set("dest");
    this.status.set("File copied! One line of code with Files.copy(). \u2705");
    this.isAnimating.set(false);
  }
  resetDemo() {
    this.sourceName.set("data.txt");
    this.destName.set("Program");
    this.activeBlock.set("");
    this.showFlow.set(false);
    this.flowBytes.set([]);
    this.status.set("Java I/O reads bytes/chars from sources and writes to destinations.");
    this.isAnimating.set(false);
  }
  static \u0275fac = function IoFilesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IoFilesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IoFilesComponent, selectors: [["app-topic-io-files"]], decls: 160, vars: 29, consts: [["title", "I/O & Files", "subtitle", "Read, write, and process files. Master Java's I/O streams, NIO.2 Path API, and modern file handling patterns.", "badge", "CORE JAVA", "gradient", "linear-gradient(135deg, #1e40af, #60a5fa)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-blue", 3, "size"], [1, "prose"], [3, "code"], [1, "viz-card"], [1, "viz-title"], ["name", "play", "css", "icon-blue", 3, "size"], [1, "io-demo"], [1, "io-source"], [1, "io-label"], [1, "io-name"], [1, "io-arrow"], [1, "flow-line"], [1, "io-dest"], [1, "viz-status"], [1, "viz-controls"], [1, "btn", "btn-blue", 3, "click", "disabled"], ["name", "play", 3, "size"], [1, "btn", "btn-emerald", 3, "click", "disabled"], [1, "btn", "btn-amber", 3, "click", "disabled"], [1, "btn", "btn-gray", 3, "click", "disabled"], ["name", "refresh-cw", 3, "size"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"], ["name", "arrow-right", "css", "icon-indigo", 3, "size"], [1, "op-desc"], ["name", "briefcase", "css", "icon-blue", 3, "size"], [1, "use-cases"], [1, "use-case", "blue"], [1, "use-num", "blue-bg"], [1, "use-title"], [1, "use-desc"], [1, "use-case", "teal"], [1, "use-num", "teal-bg"], [1, "use-case", "purple"], [1, "use-num", "purple-bg"], [1, "flow-byte", 3, "animation-delay"], [1, "flow-byte"]], template: function IoFilesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Java I/O Overview");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7, "Java provides two I/O systems: the classic ");
      \u0275\u0275elementStart(8, "strong");
      \u0275\u0275text(9, "java.io");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " package and the modern ");
      \u0275\u0275elementStart(11, "strong");
      \u0275\u0275text(12, "java.nio");
      \u0275\u0275elementEnd();
      \u0275\u0275text(13, " (NIO.2) package. NIO.2 is preferred for file operations.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "ul")(15, "li")(16, "strong");
      \u0275\u0275text(17, "Streams (I/O):");
      \u0275\u0275elementEnd();
      \u0275\u0275text(18, " Byte streams (");
      \u0275\u0275elementStart(19, "code");
      \u0275\u0275text(20, "InputStream");
      \u0275\u0275elementEnd();
      \u0275\u0275text(21, "/");
      \u0275\u0275elementStart(22, "code");
      \u0275\u0275text(23, "OutputStream");
      \u0275\u0275elementEnd();
      \u0275\u0275text(24, ") and character streams (");
      \u0275\u0275elementStart(25, "code");
      \u0275\u0275text(26, "Reader");
      \u0275\u0275elementEnd();
      \u0275\u0275text(27, "/");
      \u0275\u0275elementStart(28, "code");
      \u0275\u0275text(29, "Writer");
      \u0275\u0275elementEnd();
      \u0275\u0275text(30, ").");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "li")(32, "strong");
      \u0275\u0275text(33, "Path API:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "code");
      \u0275\u0275text(35, "Path");
      \u0275\u0275elementEnd();
      \u0275\u0275text(36, " replaces ");
      \u0275\u0275elementStart(37, "code");
      \u0275\u0275text(38, "File");
      \u0275\u0275elementEnd();
      \u0275\u0275text(39, " \u2014 immutable, more powerful.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "li")(41, "strong");
      \u0275\u0275text(42, "Files utility:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(43, " Static methods for reading, writing, copying, and walking directory trees.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "li")(45, "strong");
      \u0275\u0275text(46, "Try-with-resources:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(47, " Always use for automatic resource cleanup.");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(48, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "section", 1)(50, "div", 6)(51, "h3", 7);
      \u0275\u0275element(52, "app-icon", 8);
      \u0275\u0275text(53, " I/O Stream Flow Visualizer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "div", 9)(55, "div", 10)(56, "span", 11);
      \u0275\u0275text(57, "SOURCE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "span", 12);
      \u0275\u0275text(59);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "div", 13);
      \u0275\u0275conditionalCreate(61, IoFilesComponent_Conditional_61_Template, 3, 0, "div", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "div", 15)(63, "span", 11);
      \u0275\u0275text(64, "DESTINATION");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "span", 12);
      \u0275\u0275text(66);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(67, "div", 16);
      \u0275\u0275text(68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "div", 17)(70, "button", 18);
      \u0275\u0275listener("click", function IoFilesComponent_Template_button_click_70_listener() {
        return ctx.demoRead();
      });
      \u0275\u0275element(71, "app-icon", 19);
      \u0275\u0275text(72, " Read File");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "button", 20);
      \u0275\u0275listener("click", function IoFilesComponent_Template_button_click_73_listener() {
        return ctx.demoWrite();
      });
      \u0275\u0275element(74, "app-icon", 19);
      \u0275\u0275text(75, " Write File");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "button", 21);
      \u0275\u0275listener("click", function IoFilesComponent_Template_button_click_76_listener() {
        return ctx.demoCopy();
      });
      \u0275\u0275element(77, "app-icon", 19);
      \u0275\u0275text(78, " Copy File");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "button", 22);
      \u0275\u0275listener("click", function IoFilesComponent_Template_button_click_79_listener() {
        return ctx.resetDemo();
      });
      \u0275\u0275element(80, "app-icon", 23);
      \u0275\u0275text(81, " Reset");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(82, "section", 1)(83, "h2", 2);
      \u0275\u0275element(84, "app-icon", 24);
      \u0275\u0275text(85, " File Operations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "div", 25)(87, "div", 26)(88, "h3", 27);
      \u0275\u0275element(89, "app-icon", 28);
      \u0275\u0275text(90, " Reading Files");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "p", 29);
      \u0275\u0275text(92, "Multiple ways to read \u2014 from simple one-liners to streaming.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(93, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "div", 26)(95, "h3", 27);
      \u0275\u0275element(96, "app-icon", 28);
      \u0275\u0275text(97, " Writing Files");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "p", 29);
      \u0275\u0275text(99, "Write strings, bytes, or use buffered writers for efficiency.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(100, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "div", 26)(102, "h3", 27);
      \u0275\u0275element(103, "app-icon", 28);
      \u0275\u0275text(104, " Path Operations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "p", 29);
      \u0275\u0275text(106, "Create, resolve, normalize, and query paths.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(107, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "div", 26)(109, "h3", 27);
      \u0275\u0275element(110, "app-icon", 28);
      \u0275\u0275text(111, " Directory Walking");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "p", 29);
      \u0275\u0275text(113, "List, walk, and search directory trees efficiently.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(114, "app-code-block", 5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(115, "section", 1)(116, "h2", 2);
      \u0275\u0275element(117, "app-icon", 30);
      \u0275\u0275text(118, " Real-Time Use Cases");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "div", 31)(120, "div", 32)(121, "div", 33);
      \u0275\u0275text(122, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "div")(124, "h4", 34);
      \u0275\u0275text(125, "Log File Processing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "p", 35)(127, "code");
      \u0275\u0275text(128, "Files.lines(path).filter(...).count()");
      \u0275\u0275elementEnd();
      \u0275\u0275text(129, " \u2014 process massive log files lazily line-by-line without loading the entire file into memory.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(130, "div", 36)(131, "div", 37);
      \u0275\u0275text(132, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "div")(134, "h4", 34);
      \u0275\u0275text(135, "Config File Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "p", 35)(137, "code");
      \u0275\u0275text(138, "Properties");
      \u0275\u0275elementEnd();
      \u0275\u0275text(139, " files, YAML, and JSON configs are read at startup using ");
      \u0275\u0275elementStart(140, "code");
      \u0275\u0275text(141, "Files.readString()");
      \u0275\u0275elementEnd();
      \u0275\u0275text(142, " and parsed into configuration objects.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(143, "div", 38)(144, "div", 39);
      \u0275\u0275text(145, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "div")(147, "h4", 34);
      \u0275\u0275text(148, "File Upload/Download APIs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(149, "p", 35);
      \u0275\u0275text(150, "Spring's ");
      \u0275\u0275elementStart(151, "code");
      \u0275\u0275text(152, "MultipartFile");
      \u0275\u0275elementEnd();
      \u0275\u0275text(153, " writes uploads to disk with ");
      \u0275\u0275elementStart(154, "code");
      \u0275\u0275text(155, "Files.copy(input, target)");
      \u0275\u0275elementEnd();
      \u0275\u0275text(156, ", and download endpoints stream files back with ");
      \u0275\u0275elementStart(157, "code");
      \u0275\u0275text(158, "InputStreamResource");
      \u0275\u0275elementEnd();
      \u0275\u0275text(159, ".");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(45);
      \u0275\u0275property("code", ctx.codeOverview);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 22);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.activeBlock() === "source");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.sourceName());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showFlow() ? 61 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeBlock() === "dest");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.destName());
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
      \u0275\u0275property("code", ctx.codeRead);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeWrite);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codePath);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeWalk);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ['\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-blue[_ngcontent-%COMP%] {\n  color: #2563eb;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 700;\n}\n.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #2563eb;\n}\n.viz-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);\n  padding: 28px 24px;\n}\n.viz-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.io-demo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n  justify-content: center;\n}\n.io-source[_ngcontent-%COMP%], \n.io-dest[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  border-radius: 14px;\n  border: 2px solid #e2e8f0;\n  text-align: center;\n  min-width: 120px;\n  transition: all 0.3s;\n}\n.io-source.active[_ngcontent-%COMP%] {\n  border-color: #2563eb;\n  background: #eff6ff;\n}\n.io-dest.active[_ngcontent-%COMP%] {\n  border-color: #059669;\n  background: #ecfdf5;\n}\n.io-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.5rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  color: #94a3b8;\n  margin-bottom: 4px;\n}\n.io-name[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 800;\n  color: #0f172a;\n  font-family: "JetBrains Mono", monospace;\n}\n.io-arrow[_ngcontent-%COMP%] {\n  min-width: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.flow-line[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.flow-byte[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border-radius: 4px;\n  background: #dbeafe;\n  color: #1e40af;\n  font-size: 0.5rem;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: _ngcontent-%COMP%_flowIn 0.3s ease-out forwards;\n  font-family: "JetBrains Mono", monospace;\n}\n@keyframes _ngcontent-%COMP%_flowIn {\n  from {\n    opacity: 0;\n    transform: translateX(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.viz-status[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n  margin-bottom: 20px;\n}\n.viz-controls[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-blue[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #fff;\n}\n.btn-blue[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n.btn-emerald[_ngcontent-%COMP%] {\n  background: #059669;\n  color: #fff;\n}\n.btn-emerald[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #047857;\n}\n.btn-amber[_ngcontent-%COMP%] {\n  background: #d97706;\n  color: #fff;\n}\n.btn-amber[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #b45309;\n}\n.btn-gray[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #334155;\n}\n.btn-gray[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #cbd5e1;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.op-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.op-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n.use-cases[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.use-case[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 14px;\n  border: 1px solid;\n}\n.use-case.blue[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.use-case.teal[_ngcontent-%COMP%] {\n  background: #f0fdfa;\n  border-color: #99f6e4;\n}\n.use-case.purple[_ngcontent-%COMP%] {\n  background: #faf5ff;\n  border-color: #d8b4fe;\n}\n.use-num[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.blue-bg[_ngcontent-%COMP%] {\n  background: #2563eb;\n}\n.teal-bg[_ngcontent-%COMP%] {\n  background: #14b8a6;\n}\n.purple-bg[_ngcontent-%COMP%] {\n  background: #8b5cf6;\n}\n.use-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.use-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  line-height: 1.55;\n  margin: 0;\n  color: #334155;\n}\n.use-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.06);\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.72rem;\n}\n/*# sourceMappingURL=io-files.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IoFilesComponent, [{
    type: Component,
    args: [{ selector: "app-topic-io-files", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout
      title="I/O & Files"
      subtitle="Read, write, and process files. Master Java's I/O streams, NIO.2 Path API, and modern file handling patterns."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #1e40af, #60a5fa)">

      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-blue" /> Java I/O Overview</h2>
        <div class="prose">
          <p>Java provides two I/O systems: the classic <strong>java.io</strong> package and the modern <strong>java.nio</strong> (NIO.2) package. NIO.2 is preferred for file operations.</p>
          <ul>
            <li><strong>Streams (I/O):</strong> Byte streams (<code>InputStream</code>/<code>OutputStream</code>) and character streams (<code>Reader</code>/<code>Writer</code>).</li>
            <li><strong>Path API:</strong> <code>Path</code> replaces <code>File</code> \u2014 immutable, more powerful.</li>
            <li><strong>Files utility:</strong> Static methods for reading, writing, copying, and walking directory trees.</li>
            <li><strong>Try-with-resources:</strong> Always use for automatic resource cleanup.</li>
          </ul>
          <app-code-block [code]="codeOverview" />
        </div>
      </section>

      <!-- Interactive Visualizer -->
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title"><app-icon name="play" [size]="22" css="icon-blue" /> I/O Stream Flow Visualizer</h3>
          <div class="io-demo">
            <div class="io-source" [class.active]="activeBlock() === 'source'">
              <span class="io-label">SOURCE</span>
              <span class="io-name">{{ sourceName() }}</span>
            </div>
            <div class="io-arrow">
              @if (showFlow()) {
                <div class="flow-line">
                  @for (byte of flowBytes(); track idx; let idx = $index) {
                    <span class="flow-byte" [style.animation-delay.ms]="idx * 150">{{ byte }}</span>
                  }
                </div>
              }
            </div>
            <div class="io-dest" [class.active]="activeBlock() === 'dest'">
              <span class="io-label">DESTINATION</span>
              <span class="io-name">{{ destName() }}</span>
            </div>
          </div>
          <div class="viz-status">{{ status() }}</div>
          <div class="viz-controls">
            <button (click)="demoRead()" [disabled]="isAnimating()" class="btn btn-blue"><app-icon name="play" [size]="16" /> Read File</button>
            <button (click)="demoWrite()" [disabled]="isAnimating()" class="btn btn-emerald"><app-icon name="play" [size]="16" /> Write File</button>
            <button (click)="demoCopy()" [disabled]="isAnimating()" class="btn btn-amber"><app-icon name="play" [size]="16" /> Copy File</button>
            <button (click)="resetDemo()" [disabled]="isAnimating()" class="btn btn-gray"><app-icon name="refresh-cw" [size]="16" /> Reset</button>
          </div>
        </div>
      </section>

      <!-- Key Concepts -->
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> File Operations</h2>
        <div class="op-grid">
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Reading Files</h3>
            <p class="op-desc">Multiple ways to read \u2014 from simple one-liners to streaming.</p>
            <app-code-block [code]="codeRead" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Writing Files</h3>
            <p class="op-desc">Write strings, bytes, or use buffered writers for efficiency.</p>
            <app-code-block [code]="codeWrite" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Path Operations</h3>
            <p class="op-desc">Create, resolve, normalize, and query paths.</p>
            <app-code-block [code]="codePath" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Directory Walking</h3>
            <p class="op-desc">List, walk, and search directory trees efficiently.</p>
            <app-code-block [code]="codeWalk" />
          </div>
        </div>
      </section>

      <!-- Use Cases -->
      <section class="section">
        <h2 class="section-heading"><app-icon name="briefcase" [size]="28" css="icon-blue" /> Real-Time Use Cases</h2>
        <div class="use-cases">
          <div class="use-case blue"><div class="use-num blue-bg">1</div><div><h4 class="use-title">Log File Processing</h4><p class="use-desc"><code>Files.lines(path).filter(...).count()</code> \u2014 process massive log files lazily line-by-line without loading the entire file into memory.</p></div></div>
          <div class="use-case teal"><div class="use-num teal-bg">2</div><div><h4 class="use-title">Config File Management</h4><p class="use-desc"><code>Properties</code> files, YAML, and JSON configs are read at startup using <code>Files.readString()</code> and parsed into configuration objects.</p></div></div>
          <div class="use-case purple"><div class="use-num purple-bg">3</div><div><h4 class="use-title">File Upload/Download APIs</h4><p class="use-desc">Spring's <code>MultipartFile</code> writes uploads to disk with <code>Files.copy(input, target)</code>, and download endpoints stream files back with <code>InputStreamResource</code>.</p></div></div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ['/* angular:styles/component:css;d6d1c5cc27195ec4905e7861b3a0d63ef8b54e6c77dfed173f12473a6d576554;D:/A21/JavaIQ/src/app/features/tutorials/topics/io-files.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-blue {\n  color: #2563eb;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.prose ul {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose li {\n  margin-bottom: 8px;\n}\n.prose strong {\n  color: #0f172a;\n  font-weight: 700;\n}\n.prose code {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #2563eb;\n}\n.viz-card {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);\n  padding: 28px 24px;\n}\n.viz-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.io-demo {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n  justify-content: center;\n}\n.io-source,\n.io-dest {\n  padding: 16px 20px;\n  border-radius: 14px;\n  border: 2px solid #e2e8f0;\n  text-align: center;\n  min-width: 120px;\n  transition: all 0.3s;\n}\n.io-source.active {\n  border-color: #2563eb;\n  background: #eff6ff;\n}\n.io-dest.active {\n  border-color: #059669;\n  background: #ecfdf5;\n}\n.io-label {\n  display: block;\n  font-size: 0.5rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  color: #94a3b8;\n  margin-bottom: 4px;\n}\n.io-name {\n  font-size: 0.72rem;\n  font-weight: 800;\n  color: #0f172a;\n  font-family: "JetBrains Mono", monospace;\n}\n.io-arrow {\n  min-width: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.flow-line {\n  display: flex;\n  gap: 4px;\n}\n.flow-byte {\n  width: 18px;\n  height: 18px;\n  border-radius: 4px;\n  background: #dbeafe;\n  color: #1e40af;\n  font-size: 0.5rem;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: flowIn 0.3s ease-out forwards;\n  font-family: "JetBrains Mono", monospace;\n}\n@keyframes flowIn {\n  from {\n    opacity: 0;\n    transform: translateX(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.viz-status {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n  margin-bottom: 20px;\n}\n.viz-controls {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-blue {\n  background: #2563eb;\n  color: #fff;\n}\n.btn-blue:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n.btn-emerald {\n  background: #059669;\n  color: #fff;\n}\n.btn-emerald:hover:not(:disabled) {\n  background: #047857;\n}\n.btn-amber {\n  background: #d97706;\n  color: #fff;\n}\n.btn-amber:hover:not(:disabled) {\n  background: #b45309;\n}\n.btn-gray {\n  background: #e2e8f0;\n  color: #334155;\n}\n.btn-gray:hover:not(:disabled) {\n  background: #cbd5e1;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.op-card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.op-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc {\n  font-size: 0.78rem;\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n.use-cases {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.use-case {\n  display: flex;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 14px;\n  border: 1px solid;\n}\n.use-case.blue {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.use-case.teal {\n  background: #f0fdfa;\n  border-color: #99f6e4;\n}\n.use-case.purple {\n  background: #faf5ff;\n  border-color: #d8b4fe;\n}\n.use-num {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.blue-bg {\n  background: #2563eb;\n}\n.teal-bg {\n  background: #14b8a6;\n}\n.purple-bg {\n  background: #8b5cf6;\n}\n.use-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.use-desc {\n  font-size: 0.78rem;\n  line-height: 1.55;\n  margin: 0;\n  color: #334155;\n}\n.use-desc code {\n  background: rgba(0, 0, 0, 0.06);\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.72rem;\n}\n/*# sourceMappingURL=io-files.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IoFilesComponent, { className: "IoFilesComponent", filePath: "src/app/features/tutorials/topics/io-files.component.ts", lineNumber: 152 });
})();
export {
  IoFilesComponent
};
//# sourceMappingURL=chunk-4BBWDTMJ.js.map
