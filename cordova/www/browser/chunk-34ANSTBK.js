import{a as C,b as O}from"./chunk-FDH3XGHK.js";import{a as _}from"./chunk-IWR5KZXO.js";import{Ba as n,Ma as u,Ya as b,Za as h,_a as x,ab as y,bb as v,cb as o,db as i,eb as t,fb as s,ka as d,mb as p,nb as w,ub as P,vb as f,xb as e,yb as m}from"./chunk-AMBX34QR.js";import"./chunk-NWJ5J3BN.js";function M(l,c){if(l&1&&(i(0,"span",41),e(1),t()),l&2){let r=c.$implicit,a=c.$index;P("animation-delay",a*150,"ms"),n(),m(r)}}function E(l,c){if(l&1&&(i(0,"div",14),y(1,M,2,3,"span",40,x),t()),l&2){let r=w();n(),v(r.flowBytes())}}var S=class l{sourceName=d("data.txt");destName=d("Program");activeBlock=d("");showFlow=d(!1);flowBytes=d([]);status=d("Java I/O reads bytes/chars from sources and writes to destinations.");isAnimating=d(!1);codeOverview=`// NIO.2 \u2014 Modern File API (preferred)
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
}`;codeRead=`// One-liner read
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
byte[] data = Files.readAllBytes(path);`;codeWrite=`// Write string
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
}`;codePath=`Path p = Path.of("src", "main", "App.java");
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
Files.delete(p);`;codeWalk=`// List directory contents
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
}`;sleep(c){return new Promise(r=>setTimeout(r,c))}async demoRead(){this.isAnimating()||(this.isAnimating.set(!0),this.showFlow.set(!1),this.sourceName.set("data.txt"),this.destName.set("Program"),this.activeBlock.set("source"),this.status.set("Opening data.txt for reading..."),await this.sleep(800),this.showFlow.set(!0),this.flowBytes.set(["H","e","l","l","o"]),this.status.set("Reading bytes: H \u2192 e \u2192 l \u2192 l \u2192 o"),await this.sleep(1200),this.activeBlock.set("dest"),this.status.set("All bytes transferred to Program memory. File closed automatically! \u2705"),this.isAnimating.set(!1))}async demoWrite(){this.isAnimating()||(this.isAnimating.set(!0),this.showFlow.set(!1),this.sourceName.set("Program"),this.destName.set("output.txt"),this.activeBlock.set("source"),this.status.set("Program generating data to write..."),await this.sleep(800),this.showFlow.set(!0),this.flowBytes.set(["W","r","i","t","e"]),this.status.set("Writing bytes: W \u2192 r \u2192 i \u2192 t \u2192 e"),await this.sleep(1200),this.activeBlock.set("dest"),this.status.set("Data written to output.txt. Buffered and flushed! \u2705"),this.isAnimating.set(!1))}async demoCopy(){this.isAnimating()||(this.isAnimating.set(!0),this.showFlow.set(!1),this.sourceName.set("source.txt"),this.destName.set("backup.txt"),this.activeBlock.set("source"),this.status.set("Files.copy(source, backup, REPLACE_EXISTING)..."),await this.sleep(800),this.showFlow.set(!0),this.flowBytes.set(["\u{1F4C4}","\u2192","\u{1F4C4}"]),this.status.set("NIO.2 copies efficiently \u2014 OS-level transfer when possible."),await this.sleep(1200),this.activeBlock.set("dest"),this.status.set("File copied! One line of code with Files.copy(). \u2705"),this.isAnimating.set(!1))}resetDemo(){this.sourceName.set("data.txt"),this.destName.set("Program"),this.activeBlock.set(""),this.showFlow.set(!1),this.flowBytes.set([]),this.status.set("Java I/O reads bytes/chars from sources and writes to destinations."),this.isAnimating.set(!1)}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=u({type:l,selectors:[["app-topic-io-files"]],decls:160,vars:29,consts:[["title","I/O & Files","subtitle","Read, write, and process files. Master Java's I/O streams, NIO.2 Path API, and modern file handling patterns.","badge","CORE JAVA","gradient","linear-gradient(135deg, #1e40af, #60a5fa)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-blue",3,"size"],[1,"prose"],[3,"code"],[1,"viz-card"],[1,"viz-title"],["name","play","css","icon-blue",3,"size"],[1,"io-demo"],[1,"io-source"],[1,"io-label"],[1,"io-name"],[1,"io-arrow"],[1,"flow-line"],[1,"io-dest"],[1,"viz-status"],[1,"viz-controls"],[1,"btn","btn-blue",3,"click","disabled"],["name","play",3,"size"],[1,"btn","btn-emerald",3,"click","disabled"],[1,"btn","btn-amber",3,"click","disabled"],[1,"btn","btn-gray",3,"click","disabled"],["name","refresh-cw",3,"size"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"],["name","arrow-right","css","icon-indigo",3,"size"],[1,"op-desc"],["name","briefcase","css","icon-blue",3,"size"],[1,"use-cases"],[1,"use-case","blue"],[1,"use-num","blue-bg"],[1,"use-title"],[1,"use-desc"],[1,"use-case","teal"],[1,"use-num","teal-bg"],[1,"use-case","purple"],[1,"use-num","purple-bg"],[1,"flow-byte",3,"animation-delay"],[1,"flow-byte"]],template:function(r,a){r&1&&(i(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),s(3,"app-icon",3),e(4," Java I/O Overview"),t(),i(5,"div",4)(6,"p"),e(7,"Java provides two I/O systems: the classic "),i(8,"strong"),e(9,"java.io"),t(),e(10," package and the modern "),i(11,"strong"),e(12,"java.nio"),t(),e(13," (NIO.2) package. NIO.2 is preferred for file operations."),t(),i(14,"ul")(15,"li")(16,"strong"),e(17,"Streams (I/O):"),t(),e(18," Byte streams ("),i(19,"code"),e(20,"InputStream"),t(),e(21,"/"),i(22,"code"),e(23,"OutputStream"),t(),e(24,") and character streams ("),i(25,"code"),e(26,"Reader"),t(),e(27,"/"),i(28,"code"),e(29,"Writer"),t(),e(30,")."),t(),i(31,"li")(32,"strong"),e(33,"Path API:"),t(),i(34,"code"),e(35,"Path"),t(),e(36," replaces "),i(37,"code"),e(38,"File"),t(),e(39," \u2014 immutable, more powerful."),t(),i(40,"li")(41,"strong"),e(42,"Files utility:"),t(),e(43," Static methods for reading, writing, copying, and walking directory trees."),t(),i(44,"li")(45,"strong"),e(46,"Try-with-resources:"),t(),e(47," Always use for automatic resource cleanup."),t()(),s(48,"app-code-block",5),t()(),i(49,"section",1)(50,"div",6)(51,"h3",7),s(52,"app-icon",8),e(53," I/O Stream Flow Visualizer"),t(),i(54,"div",9)(55,"div",10)(56,"span",11),e(57,"SOURCE"),t(),i(58,"span",12),e(59),t()(),i(60,"div",13),b(61,E,3,0,"div",14),t(),i(62,"div",15)(63,"span",11),e(64,"DESTINATION"),t(),i(65,"span",12),e(66),t()()(),i(67,"div",16),e(68),t(),i(69,"div",17)(70,"button",18),p("click",function(){return a.demoRead()}),s(71,"app-icon",19),e(72," Read File"),t(),i(73,"button",20),p("click",function(){return a.demoWrite()}),s(74,"app-icon",19),e(75," Write File"),t(),i(76,"button",21),p("click",function(){return a.demoCopy()}),s(77,"app-icon",19),e(78," Copy File"),t(),i(79,"button",22),p("click",function(){return a.resetDemo()}),s(80,"app-icon",23),e(81," Reset"),t()()()(),i(82,"section",1)(83,"h2",2),s(84,"app-icon",24),e(85," File Operations"),t(),i(86,"div",25)(87,"div",26)(88,"h3",27),s(89,"app-icon",28),e(90," Reading Files"),t(),i(91,"p",29),e(92,"Multiple ways to read \u2014 from simple one-liners to streaming."),t(),s(93,"app-code-block",5),t(),i(94,"div",26)(95,"h3",27),s(96,"app-icon",28),e(97," Writing Files"),t(),i(98,"p",29),e(99,"Write strings, bytes, or use buffered writers for efficiency."),t(),s(100,"app-code-block",5),t(),i(101,"div",26)(102,"h3",27),s(103,"app-icon",28),e(104," Path Operations"),t(),i(105,"p",29),e(106,"Create, resolve, normalize, and query paths."),t(),s(107,"app-code-block",5),t(),i(108,"div",26)(109,"h3",27),s(110,"app-icon",28),e(111," Directory Walking"),t(),i(112,"p",29),e(113,"List, walk, and search directory trees efficiently."),t(),s(114,"app-code-block",5),t()()(),i(115,"section",1)(116,"h2",2),s(117,"app-icon",30),e(118," Real-Time Use Cases"),t(),i(119,"div",31)(120,"div",32)(121,"div",33),e(122,"1"),t(),i(123,"div")(124,"h4",34),e(125,"Log File Processing"),t(),i(126,"p",35)(127,"code"),e(128,"Files.lines(path).filter(...).count()"),t(),e(129," \u2014 process massive log files lazily line-by-line without loading the entire file into memory."),t()()(),i(130,"div",36)(131,"div",37),e(132,"2"),t(),i(133,"div")(134,"h4",34),e(135,"Config File Management"),t(),i(136,"p",35)(137,"code"),e(138,"Properties"),t(),e(139," files, YAML, and JSON configs are read at startup using "),i(140,"code"),e(141,"Files.readString()"),t(),e(142," and parsed into configuration objects."),t()()(),i(143,"div",38)(144,"div",39),e(145,"3"),t(),i(146,"div")(147,"h4",34),e(148,"File Upload/Download APIs"),t(),i(149,"p",35),e(150,"Spring's "),i(151,"code"),e(152,"MultipartFile"),t(),e(153," writes uploads to disk with "),i(154,"code"),e(155,"Files.copy(input, target)"),t(),e(156,", and download endpoints stream files back with "),i(157,"code"),e(158,"InputStreamResource"),t(),e(159,"."),t()()()()()()),r&2&&(n(3),o("size",28),n(45),o("code",a.codeOverview),n(4),o("size",22),n(3),f("active",a.activeBlock()==="source"),n(4),m(a.sourceName()),n(2),h(a.showFlow()?61:-1),n(),f("active",a.activeBlock()==="dest"),n(4),m(a.destName()),n(2),m(a.status()),n(2),o("disabled",a.isAnimating()),n(),o("size",16),n(2),o("disabled",a.isAnimating()),n(),o("size",16),n(2),o("disabled",a.isAnimating()),n(),o("size",16),n(2),o("disabled",a.isAnimating()),n(),o("size",16),n(4),o("size",28),n(5),o("size",18),n(4),o("code",a.codeRead),n(3),o("size",18),n(4),o("code",a.codeWrite),n(3),o("size",18),n(4),o("code",a.codePath),n(3),o("size",18),n(4),o("code",a.codeWalk),n(3),o("size",28))},dependencies:[_,C,O],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-blue[_ngcontent-%COMP%]{color:#2563eb}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:14px 0;padding-left:22px;list-style:disc}.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:8px}.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#0f172a;font-weight:700}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f1f5f9;padding:2px 7px;border-radius:5px;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#2563eb}.viz-card[_ngcontent-%COMP%]{background:#fff;border-radius:18px;border:1px solid #e2e8f0;box-shadow:0 4px 16px #0000000d;padding:28px 24px}.viz-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;font-size:1.15rem;font-weight:700;color:#0f172a;margin:0 0 24px}.io-demo[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;margin-bottom:20px;justify-content:center}.io-source[_ngcontent-%COMP%], .io-dest[_ngcontent-%COMP%]{padding:16px 20px;border-radius:14px;border:2px solid #e2e8f0;text-align:center;min-width:120px;transition:all .3s}.io-source.active[_ngcontent-%COMP%]{border-color:#2563eb;background:#eff6ff}.io-dest.active[_ngcontent-%COMP%]{border-color:#059669;background:#ecfdf5}.io-label[_ngcontent-%COMP%]{display:block;font-size:.5rem;font-weight:700;letter-spacing:.12em;color:#94a3b8;margin-bottom:4px}.io-name[_ngcontent-%COMP%]{font-size:.72rem;font-weight:800;color:#0f172a;font-family:JetBrains Mono,monospace}.io-arrow[_ngcontent-%COMP%]{min-width:80px;display:flex;align-items:center;justify-content:center}.flow-line[_ngcontent-%COMP%]{display:flex;gap:4px}.flow-byte[_ngcontent-%COMP%]{width:18px;height:18px;border-radius:4px;background:#dbeafe;color:#1e40af;font-size:.5rem;font-weight:800;display:flex;align-items:center;justify-content:center;animation:_ngcontent-%COMP%_flowIn .3s ease-out forwards;font-family:JetBrains Mono,monospace}@keyframes _ngcontent-%COMP%_flowIn{0%{opacity:0;transform:translate(-8px)}to{opacity:1;transform:translate(0)}}.viz-status[_ngcontent-%COMP%]{background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:12px 16px;text-align:center;font-family:JetBrains Mono,monospace;font-size:.78rem;color:#334155;margin-bottom:20px}.viz-controls[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;gap:10px}.btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:7px;padding:10px 18px;border-radius:10px;font-size:.78rem;font-weight:600;border:none;cursor:pointer;transition:all .2s}.btn[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:not-allowed}.btn-blue[_ngcontent-%COMP%]{background:#2563eb;color:#fff}.btn-blue[_ngcontent-%COMP%]:hover:not(:disabled){background:#1d4ed8}.btn-emerald[_ngcontent-%COMP%]{background:#059669;color:#fff}.btn-emerald[_ngcontent-%COMP%]:hover:not(:disabled){background:#047857}.btn-amber[_ngcontent-%COMP%]{background:#d97706;color:#fff}.btn-amber[_ngcontent-%COMP%]:hover:not(:disabled){background:#b45309}.btn-gray[_ngcontent-%COMP%]{background:#e2e8f0;color:#334155}.btn-gray[_ngcontent-%COMP%]:hover:not(:disabled){background:#cbd5e1}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0;box-shadow:0 1px 3px #0000000a}.op-card[_ngcontent-%COMP%]:hover{box-shadow:0 4px 12px #0000000f}.op-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}.op-desc[_ngcontent-%COMP%]{font-size:.78rem;color:#64748b;line-height:1.55;margin:0}.use-cases[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.use-case[_ngcontent-%COMP%]{display:flex;gap:16px;padding:20px;border-radius:14px;border:1px solid}.use-case.blue[_ngcontent-%COMP%]{background:#eff6ff;border-color:#bfdbfe}.use-case.teal[_ngcontent-%COMP%]{background:#f0fdfa;border-color:#99f6e4}.use-case.purple[_ngcontent-%COMP%]{background:#faf5ff;border-color:#d8b4fe}.use-num[_ngcontent-%COMP%]{width:34px;height:34px;min-width:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:.78rem;font-weight:800}.blue-bg[_ngcontent-%COMP%]{background:#2563eb}.teal-bg[_ngcontent-%COMP%]{background:#14b8a6}.purple-bg[_ngcontent-%COMP%]{background:#8b5cf6}.use-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 4px}.use-desc[_ngcontent-%COMP%]{font-size:.78rem;line-height:1.55;margin:0;color:#334155}.use-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#0000000f;padding:1px 5px;border-radius:4px;font-family:JetBrains Mono,monospace;font-size:.72rem}"],changeDetection:0})};export{S as IoFilesComponent};
