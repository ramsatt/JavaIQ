import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-streams',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout
      title="Streams API"
      subtitle="Functional-style data pipelines. Learn to filter, map, reduce, and collect data with Java's powerful Stream API."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #0f766e, #2dd4bf)">

      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-teal" /> What are Streams?</h2>
        <div class="prose">
          <p>A <strong>Stream</strong> is a sequence of elements that supports functional-style operations. Streams don't store data — they process data from a source (collection, array, I/O) through a pipeline of operations.</p>
          <ul>
            <li><strong>Lazy:</strong> Intermediate operations are not executed until a terminal operation is called.</li>
            <li><strong>Once-use:</strong> A stream can only be consumed once.</li>
            <li><strong>Pipeline:</strong> source → intermediate ops → terminal op.</li>
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
              <div class="pipe-arrow">→</div>
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
            <button (click)="runPipeline()" [disabled]="isAnimating()" class="btn btn-teal"><app-icon name="play" [size]="16" /> Run Filter→Map→Collect</button>
            <button (click)="runReduce()" [disabled]="isAnimating()" class="btn btn-amber"><app-icon name="play" [size]="16" /> Run Filter→Reduce</button>
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
            <p class="op-desc">Filter, map, flatMap, sorted, distinct, peek — lazy, return a Stream.</p>
            <app-code-block [code]="codeIntermediate" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Terminal Ops</h3>
            <p class="op-desc">collect, reduce, forEach, count, findFirst — trigger execution.</p>
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
          <div class="use-case teal"><div class="use-num teal-bg">1</div><div><h4 class="use-title">REST API Data Transformation</h4><p class="use-desc">Fetch entities from database, <code>stream().filter(...).map(dto).toList()</code> — transform and return DTOs in one clean pipeline.</p></div></div>
          <div class="use-case blue"><div class="use-num blue-bg">2</div><div><h4 class="use-title">Log Analysis</h4><p class="use-desc"><code>Files.lines(path).filter(l -> l.contains("ERROR")).count()</code> — process millions of log lines lazily without loading all into memory.</p></div></div>
          <div class="use-case purple"><div class="use-num purple-bg">3</div><div><h4 class="use-title">Batch Processing</h4><p class="use-desc"><code>parallelStream()</code> processes large datasets across CPU cores — ideal for CSV imports, data migrations, and ETL pipelines.</p></div></div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; }
    .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; }
    .icon-teal { color: #0d9488; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; }
    .prose p { margin: 0 0 14px; } .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; } .prose li { margin-bottom: 8px; }
    .prose strong { color: #0f172a; font-weight: 700; }
    .prose code { background: #f1f5f9; padding: 2px 7px; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #0d9488; }

    .viz-card { background: #fff; border-radius: 18px; border: 1px solid #e2e8f0; box-shadow: 0 4px 16px rgba(0,0,0,0.05); padding: 28px 24px; }
    .viz-title { display: flex; align-items: center; gap: 10px; font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0 0 24px; }

    .pipeline { display: flex; align-items: flex-start; gap: 8px; overflow-x: auto; padding-bottom: 8px; margin-bottom: 20px; }
    .pipe-stage { padding: 12px 14px; border-radius: 12px; border: 2px solid #e2e8f0; min-width: 100px; text-align: center; transition: all 0.3s; background: #fff; }
    .pipe-stage.active { border-color: #0d9488; background: #f0fdfa; }
    .stage-label { display: block; font-size: 0.5rem; font-weight: 700; letter-spacing: 0.12em; color: #94a3b8; margin-bottom: 8px; }
    .stage-items { display: flex; flex-wrap: wrap; gap: 4px; justify-content: center; }
    .pipe-item { padding: 4px 8px; border-radius: 6px; font-size: 0.68rem; font-weight: 700; font-family: 'JetBrains Mono', monospace; background: #e0f2fe; color: #0369a1; transition: all 0.3s; }
    .pipe-item.faded { opacity: 0.3; background: #f1f5f9; color: #94a3b8; text-decoration: line-through; }
    .pipe-item.result { background: #d1fae5; color: #065f46; }
    .pipe-arrow { font-size: 1.2rem; color: #94a3b8; font-weight: 700; align-self: center; padding-top: 20px; }
    .pipe-wait { font-size: 0.62rem; color: #cbd5e1; }

    .viz-status { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px 16px; text-align: center; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; color: #334155; margin-bottom: 20px; }
    .viz-controls { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; }
    .btn { display: inline-flex; align-items: center; gap: 7px; padding: 10px 18px; border-radius: 10px; font-size: 0.78rem; font-weight: 600; border: none; cursor: pointer; transition: all 0.2s; }
    .btn:disabled { opacity: 0.5; cursor: not-allowed; }
    .btn-teal { background: #0d9488; color: #fff; } .btn-teal:hover:not(:disabled) { background: #0f766e; }
    .btn-amber { background: #d97706; color: #fff; } .btn-amber:hover:not(:disabled) { background: #b45309; }
    .btn-gray { background: #e2e8f0; color: #334155; } .btn-gray:hover:not(:disabled) { background: #cbd5e1; }

    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; }
    .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,0.04); }
    .op-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.06); }
    .op-title { display: flex; align-items: center; gap: 8px; font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
    .op-desc { font-size: 0.78rem; color: #64748b; line-height: 1.55; margin: 0; }

    .use-cases { display: flex; flex-direction: column; gap: 12px; }
    .use-case { display: flex; gap: 16px; padding: 20px; border-radius: 14px; border: 1px solid; }
    .use-case.teal { background: #f0fdfa; border-color: #99f6e4; }
    .use-case.blue { background: #eff6ff; border-color: #bfdbfe; }
    .use-case.purple { background: #faf5ff; border-color: #d8b4fe; }
    .use-num { width: 34px; height: 34px; min-width: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 0.78rem; font-weight: 800; }
    .teal-bg { background: #0d9488; } .blue-bg { background: #3b82f6; } .purple-bg { background: #8b5cf6; }
    .use-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 4px; }
    .use-desc { font-size: 0.78rem; line-height: 1.55; margin: 0; color: #334155; }
    .use-desc code { background: rgba(0,0,0,0.06); padding: 1px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; }
  `
})
export class StreamsComponent {
  private defaultSource = (): { val: string; faded: boolean }[] => [
    { val: '3', faded: false }, { val: '12', faded: false }, { val: '7', faded: false },
    { val: '18', faded: false }, { val: '5', faded: false }, { val: '21', faded: false },
    { val: '9', faded: false }, { val: '14', faded: false }
  ];
  sourceItems = signal(this.defaultSource());
  stages = signal<{ name: string; items: string[]; active: boolean }[]>([]);
  status = signal('Numbers: [3, 12, 7, 18, 5, 21, 9, 14]. Click a pipeline to run!');
  isAnimating = signal(false);

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

// ⚠️ Rules for parallel streams:
// 1. Stateless operations only
// 2. No shared mutable state
// 3. Use for large datasets (>10K)
// 4. Order may not be preserved`;

  private sleep(ms: number): Promise<void> { return new Promise(r => setTimeout(r, ms)); }

  async runPipeline() {
    if (this.isAnimating()) return;
    this.isAnimating.set(true);
    this.sourceItems.set(this.defaultSource());
    this.stages.set([
      { name: 'filter(>10)', items: [], active: false },
      { name: 'map(×2)', items: [], active: false },
      { name: 'toList()', items: [], active: false }
    ]);

    this.status.set('.filter(n -> n > 10) — keeping only numbers greater than 10...');
    this.stages.update(s => s.map((st, i) => i === 0 ? { ...st, active: true } : st));
    await this.sleep(1000);
    this.sourceItems.update(items => items.map(i => ({ ...i, faded: +i.val <= 10 })));
    this.stages.update(s => s.map((st, i) => i === 0 ? { ...st, items: ['12', '18', '21', '14'], active: false } : st));
    await this.sleep(800);

    this.status.set('.map(n -> n * 2) — doubling each remaining value...');
    this.stages.update(s => s.map((st, i) => i === 1 ? { ...st, active: true } : st));
    await this.sleep(1000);
    this.stages.update(s => s.map((st, i) => i === 1 ? { ...st, items: ['24', '36', '42', '28'], active: false } : st));
    await this.sleep(800);

    this.status.set('.toList() — terminal operation! Collecting results...');
    this.stages.update(s => s.map((st, i) => i === 2 ? { ...st, active: true } : st));
    await this.sleep(800);
    this.stages.update(s => s.map((st, i) => i === 2 ? { ...st, items: ['24', '28', '36', '42'], active: false } : st));
    this.status.set('Result: [24, 28, 36, 42] — entire pipeline ran lazily! ✅');
    this.isAnimating.set(false);
  }

  async runReduce() {
    if (this.isAnimating()) return;
    this.isAnimating.set(true);
    this.sourceItems.set(this.defaultSource());
    this.stages.set([
      { name: 'filter(>10)', items: [], active: false },
      { name: 'reduce(sum)', items: [], active: false }
    ]);

    this.status.set('.filter(n -> n > 10) — keeping values > 10...');
    this.stages.update(s => s.map((st, i) => i === 0 ? { ...st, active: true } : st));
    await this.sleep(1000);
    this.sourceItems.update(items => items.map(i => ({ ...i, faded: +i.val <= 10 })));
    this.stages.update(s => s.map((st, i) => i === 0 ? { ...st, items: ['12', '18', '21', '14'], active: false } : st));
    await this.sleep(800);

    this.status.set('.reduce(0, Integer::sum) — accumulating: 0+12+18+21+14...');
    this.stages.update(s => s.map((st, i) => i === 1 ? { ...st, active: true } : st));
    await this.sleep(1200);
    this.stages.update(s => s.map((st, i) => i === 1 ? { ...st, items: ['65'], active: false } : st));
    this.status.set('reduce() returns a single value: 65 (12+18+21+14) ✅');
    this.isAnimating.set(false);
  }

  resetDemo() {
    this.sourceItems.set(this.defaultSource());
    this.stages.set([]);
    this.status.set('Numbers: [3, 12, 7, 18, 5, 21, 9, 14]. Click a pipeline to run!');
    this.isAnimating.set(false);
  }
}
