import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-dp-composite',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="Composite" subtitle="Compose objects into tree structures. Treat individual objects and compositions uniformly through a common interface." badge="DESIGN PATTERNS" gradient="linear-gradient(135deg, #4338ca, #818cf8)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-indigo" /> What is Composite?</h2>
        <img src="/assets/images/topics/dp-composite.png" alt="Composite Pattern Visualized" class="topic-hero-image" />
        <div class="prose">
          <p>The <strong>Composite</strong> pattern lets clients treat individual objects (leaves) and compositions (branches) uniformly. Both implement the same interface, so clients don't need to distinguish between them.</p>
          <p>Classic use cases: file system (files + folders), UI component trees, org charts, XML/HTML DOM, menu structures.</p>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-purple" /> Implementations</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Component Interface</h3><app-code-block [code]="codeComponent" /></div>
          <div class="op-card"><h3 class="op-title">Leaf & Composite</h3><app-code-block [code]="codeLeaf" /></div>
          <div class="op-card"><h3 class="op-title">Building the Tree</h3><app-code-block [code]="codeTree" /></div>
          <div class="op-card"><h3 class="op-title">Real-World: Swing/JavaFX</h3><app-code-block [code]="codeReal" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-indigo { color: #4f46e5; } .icon-purple { color: #7c3aed; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class DpCompositeComponent {
  codeIntro = `// File system: treat File and Directory uniformly
// fileSystem.getSize() — works on both File AND Directory
//   File.getSize()       → returns its own size
//   Directory.getSize()  → sums children recursively`;

  codeComponent = `// Component — common interface for leaf and composite
interface FileSystemItem {
    String getName();
    long getSize();
    void print(String indent);
}`;

  codeLeaf = `// Leaf — no children
class File implements FileSystemItem {
    private final String name;
    private final long size;

    File(String name, long size) {
        this.name = name; this.size = size;
    }

    public String getName() { return name; }
    public long getSize()   { return size; }
    public void print(String indent) {
        System.out.println(indent + "📄 " + name + " (" + size + " bytes)");
    }
}

// Composite — has children
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
        System.out.println(indent + "📁 " + name);
        children.forEach(c -> c.print(indent + "  "));
    }
}`;

  codeTree = `// Build the tree
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
// 📁 root
//   📁 src
//     📄 Main.java (1200 bytes)
//     📄 Service.java (3400 bytes)
//   📁 test
//     📄 MainTest.java (800 bytes)
//   📄 pom.xml (600 bytes)

System.out.println("Total: " + root.getSize()); // 6000`;

  codeReal = `// Swing UI is a classic Composite
JPanel panel = new JPanel();       // Composite
JButton btn   = new JButton("OK"); // Leaf
JLabel  label = new JLabel("Hi");  // Leaf
JPanel  inner = new JPanel();      // Composite

inner.add(label);  // Composite.add(Leaf)
panel.add(inner);  // Composite.add(Composite)
panel.add(btn);    // Composite.add(Leaf)

// Component.repaint() works on both JPanel and JButton
panel.repaint();   // recursively repaints the whole tree

// Spring: ApplicationContext is a Composite of BeanDefinitions`;
}
