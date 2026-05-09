import{a as m,b as c,c as d}from"./chunk-3MUY7VVQ.js";import{$a as o,Ba as i,Ka as l,ab as n,bb as e,cb as r,yb as t}from"./chunk-YTAFWVC7.js";import"./chunk-NWJ5J3BN.js";var g=class p{codeIntro=`// File system: treat File and Directory uniformly
// fileSystem.getSize() \u2014 works on both File AND Directory
//   File.getSize()       \u2192 returns its own size
//   Directory.getSize()  \u2192 sums children recursively`;codeComponent=`// Component \u2014 common interface for leaf and composite
interface FileSystemItem {
    String getName();
    long getSize();
    void print(String indent);
}`;codeLeaf=`// Leaf \u2014 no children
class File implements FileSystemItem {
    private final String name;
    private final long size;

    File(String name, long size) {
        this.name = name; this.size = size;
    }

    public String getName() { return name; }
    public long getSize()   { return size; }
    public void print(String indent) {
        System.out.println(indent + "\u{1F4C4} " + name + " (" + size + " bytes)");
    }
}

// Composite \u2014 has children
class Directory implements FileSystemItem {
    private final String name;
    private final List<FileSystemItem> children = new ArrayList<>();

    Directory(String name) { this.name = name; }

    public void add(FileSystemItem item) { children.add(item); }

    public String getName() { return name; }
    public long getSize() {
        return children.stream().mapToLong(FileSystemItem::getSize).sum();
    }
    public void print(String indent) {
        System.out.println(indent + "\u{1F4C1} " + name);
        children.forEach(c -> c.print(indent + "  "));
    }
}`;codeTree=`// Build the tree
Directory root = new Directory("root");
Directory src  = new Directory("src");
Directory test = new Directory("test");

src.add(new File("Main.java",    1200));
src.add(new File("Service.java", 3400));
test.add(new File("MainTest.java", 800));

root.add(src);
root.add(test);
root.add(new File("pom.xml", 600));

root.print("");
// \u{1F4C1} root
//   \u{1F4C1} src
//     \u{1F4C4} Main.java (1200 bytes)
//     \u{1F4C4} Service.java (3400 bytes)
//   \u{1F4C1} test
//     \u{1F4C4} MainTest.java (800 bytes)
//   \u{1F4C4} pom.xml (600 bytes)

System.out.println("Total: " + root.getSize()); // 6000`;codeReal=`// Swing UI is a classic Composite
JPanel panel = new JPanel();       // Composite
JButton btn   = new JButton("OK"); // Leaf
JLabel  label = new JLabel("Hi");  // Leaf
JPanel  inner = new JPanel();      // Composite

inner.add(label);  // Composite.add(Leaf)
panel.add(inner);  // Composite.add(Composite)
panel.add(btn);    // Composite.add(Leaf)

// Component.repaint() works on both JPanel and JButton
panel.repaint();   // recursively repaints the whole tree

// Spring: ApplicationContext is a Composite of BeanDefinitions`;static \u0275fac=function(s){return new(s||p)};static \u0275cmp=l({type:p,selectors:[["app-topic-dp-composite"]],decls:35,vars:7,consts:[["title","Composite","subtitle","Compose objects into tree structures. Treat individual objects and compositions uniformly through a common interface.","badge","DESIGN PATTERNS","gradient","linear-gradient(135deg, #4338ca, #818cf8)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-indigo",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-purple",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(s,a){s&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),r(3,"app-icon",3),t(4," What is Composite?"),e(),n(5,"div",4)(6,"p"),t(7,"The "),n(8,"strong"),t(9,"Composite"),e(),t(10," pattern lets clients treat individual objects (leaves) and compositions (branches) uniformly. Both implement the same interface, so clients don't need to distinguish between them."),e(),n(11,"p"),t(12,"Classic use cases: file system (files + folders), UI component trees, org charts, XML/HTML DOM, menu structures."),e(),r(13,"app-code-block",5),e()(),n(14,"section",1)(15,"h2",2),r(16,"app-icon",6),t(17," Implementations"),e(),n(18,"div",7)(19,"div",8)(20,"h3",9),t(21,"Component Interface"),e(),r(22,"app-code-block",5),e(),n(23,"div",8)(24,"h3",9),t(25,"Leaf & Composite"),e(),r(26,"app-code-block",5),e(),n(27,"div",8)(28,"h3",9),t(29,"Building the Tree"),e(),r(30,"app-code-block",5),e(),n(31,"div",8)(32,"h3",9),t(33,"Real-World: Swing/JavaFX"),e(),r(34,"app-code-block",5),e()()()()),s&2&&(i(3),o("size",28),i(10),o("code",a.codeIntro),i(3),o("size",28),i(6),o("code",a.codeComponent),i(4),o("code",a.codeLeaf),i(4),o("code",a.codeTree),i(4),o("code",a.codeReal))},dependencies:[m,c,d],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.icon-purple[_ngcontent-%COMP%]{color:#7c3aed}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{g as DpCompositeComponent};
