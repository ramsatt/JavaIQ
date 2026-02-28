import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-io-files',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
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
            <li><strong>Path API:</strong> <code>Path</code> replaces <code>File</code> — immutable, more powerful.</li>
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
            <p class="op-desc">Multiple ways to read — from simple one-liners to streaming.</p>
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
          <div class="use-case blue"><div class="use-num blue-bg">1</div><div><h4 class="use-title">Log File Processing</h4><p class="use-desc"><code>Files.lines(path).filter(...).count()</code> — process massive log files lazily line-by-line without loading the entire file into memory.</p></div></div>
          <div class="use-case teal"><div class="use-num teal-bg">2</div><div><h4 class="use-title">Config File Management</h4><p class="use-desc"><code>Properties</code> files, YAML, and JSON configs are read at startup using <code>Files.readString()</code> and parsed into configuration objects.</p></div></div>
          <div class="use-case purple"><div class="use-num purple-bg">3</div><div><h4 class="use-title">File Upload/Download APIs</h4><p class="use-desc">Spring's <code>MultipartFile</code> writes uploads to disk with <code>Files.copy(input, target)</code>, and download endpoints stream files back with <code>InputStreamResource</code>.</p></div></div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; }
    .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; }
    .icon-blue { color: #2563eb; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; }
    .prose p { margin: 0 0 14px; } .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; } .prose li { margin-bottom: 8px; }
    .prose strong { color: #0f172a; font-weight: 700; }
    .prose code { background: #f1f5f9; padding: 2px 7px; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #2563eb; }

    .viz-card { background: #fff; border-radius: 18px; border: 1px solid #e2e8f0; box-shadow: 0 4px 16px rgba(0,0,0,0.05); padding: 28px 24px; }
    .viz-title { display: flex; align-items: center; gap: 10px; font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0 0 24px; }

    .io-demo { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; justify-content: center; }
    .io-source, .io-dest { padding: 16px 20px; border-radius: 14px; border: 2px solid #e2e8f0; text-align: center; min-width: 120px; transition: all 0.3s; }
    .io-source.active { border-color: #2563eb; background: #eff6ff; }
    .io-dest.active { border-color: #059669; background: #ecfdf5; }
    .io-label { display: block; font-size: 0.5rem; font-weight: 700; letter-spacing: 0.12em; color: #94a3b8; margin-bottom: 4px; }
    .io-name { font-size: 0.72rem; font-weight: 800; color: #0f172a; font-family: 'JetBrains Mono', monospace; }
    .io-arrow { min-width: 80px; display: flex; align-items: center; justify-content: center; }
    .flow-line { display: flex; gap: 4px; }
    .flow-byte { width: 18px; height: 18px; border-radius: 4px; background: #dbeafe; color: #1e40af; font-size: 0.5rem; font-weight: 800; display: flex; align-items: center; justify-content: center; animation: flowIn 0.3s ease-out forwards; font-family: 'JetBrains Mono', monospace; }
    @keyframes flowIn { from { opacity: 0; transform: translateX(-8px); } to { opacity: 1; transform: translateX(0); } }

    .viz-status { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px 16px; text-align: center; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; color: #334155; margin-bottom: 20px; }
    .viz-controls { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; }
    .btn { display: inline-flex; align-items: center; gap: 7px; padding: 10px 18px; border-radius: 10px; font-size: 0.78rem; font-weight: 600; border: none; cursor: pointer; transition: all 0.2s; }
    .btn:disabled { opacity: 0.5; cursor: not-allowed; }
    .btn-blue { background: #2563eb; color: #fff; } .btn-blue:hover:not(:disabled) { background: #1d4ed8; }
    .btn-emerald { background: #059669; color: #fff; } .btn-emerald:hover:not(:disabled) { background: #047857; }
    .btn-amber { background: #d97706; color: #fff; } .btn-amber:hover:not(:disabled) { background: #b45309; }
    .btn-gray { background: #e2e8f0; color: #334155; } .btn-gray:hover:not(:disabled) { background: #cbd5e1; }

    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; }
    .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,0.04); }
    .op-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.06); }
    .op-title { display: flex; align-items: center; gap: 8px; font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
    .op-desc { font-size: 0.78rem; color: #64748b; line-height: 1.55; margin: 0; }

    .use-cases { display: flex; flex-direction: column; gap: 12px; }
    .use-case { display: flex; gap: 16px; padding: 20px; border-radius: 14px; border: 1px solid; }
    .use-case.blue { background: #eff6ff; border-color: #bfdbfe; }
    .use-case.teal { background: #f0fdfa; border-color: #99f6e4; }
    .use-case.purple { background: #faf5ff; border-color: #d8b4fe; }
    .use-num { width: 34px; height: 34px; min-width: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 0.78rem; font-weight: 800; }
    .blue-bg { background: #2563eb; } .teal-bg { background: #14b8a6; } .purple-bg { background: #8b5cf6; }
    .use-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 4px; }
    .use-desc { font-size: 0.78rem; line-height: 1.55; margin: 0; color: #334155; }
    .use-desc code { background: rgba(0,0,0,0.06); padding: 1px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; }
  `
})
export class IoFilesComponent {
  sourceName = signal('data.txt');
  destName = signal('Program');
  activeBlock = signal('');
  showFlow = signal(false);
  flowBytes = signal<string[]>([]);
  status = signal('Java I/O reads bytes/chars from sources and writes to destinations.');
  isAnimating = signal(false);

  codeOverview = `// NIO.2 — Modern File API (preferred)
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

  private sleep(ms: number): Promise<void> { return new Promise(r => setTimeout(r, ms)); }

  async demoRead() {
    if (this.isAnimating()) return;
    this.isAnimating.set(true);
    this.showFlow.set(false);

    this.sourceName.set('data.txt');
    this.destName.set('Program');
    this.activeBlock.set('source');
    this.status.set('Opening data.txt for reading...');
    await this.sleep(800);

    this.showFlow.set(true);
    this.flowBytes.set(['H', 'e', 'l', 'l', 'o']);
    this.status.set('Reading bytes: H → e → l → l → o');
    await this.sleep(1200);

    this.activeBlock.set('dest');
    this.status.set('All bytes transferred to Program memory. File closed automatically! ✅');
    this.isAnimating.set(false);
  }

  async demoWrite() {
    if (this.isAnimating()) return;
    this.isAnimating.set(true);
    this.showFlow.set(false);

    this.sourceName.set('Program');
    this.destName.set('output.txt');
    this.activeBlock.set('source');
    this.status.set('Program generating data to write...');
    await this.sleep(800);

    this.showFlow.set(true);
    this.flowBytes.set(['W', 'r', 'i', 't', 'e']);
    this.status.set('Writing bytes: W → r → i → t → e');
    await this.sleep(1200);

    this.activeBlock.set('dest');
    this.status.set('Data written to output.txt. Buffered and flushed! ✅');
    this.isAnimating.set(false);
  }

  async demoCopy() {
    if (this.isAnimating()) return;
    this.isAnimating.set(true);
    this.showFlow.set(false);

    this.sourceName.set('source.txt');
    this.destName.set('backup.txt');
    this.activeBlock.set('source');
    this.status.set('Files.copy(source, backup, REPLACE_EXISTING)...');
    await this.sleep(800);

    this.showFlow.set(true);
    this.flowBytes.set(['📄', '→', '📄']);
    this.status.set('NIO.2 copies efficiently — OS-level transfer when possible.');
    await this.sleep(1200);

    this.activeBlock.set('dest');
    this.status.set('File copied! One line of code with Files.copy(). ✅');
    this.isAnimating.set(false);
  }

  resetDemo() {
    this.sourceName.set('data.txt');
    this.destName.set('Program');
    this.activeBlock.set('');
    this.showFlow.set(false);
    this.flowBytes.set([]);
    this.status.set('Java I/O reads bytes/chars from sources and writes to destinations.');
    this.isAnimating.set(false);
  }
}
