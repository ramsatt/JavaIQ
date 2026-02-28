import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-collections-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout
      title="Collections: List"
      subtitle="ArrayList vs LinkedList — understand when to use each. Learn about dynamic sizing, performance trade-offs, and common operations."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #0369a1, #38bdf8)">

      <section class="section">
        <h2 class="section-heading">
          <app-icon name="book-open" [size]="28" css="icon-sky" /> What is the List Interface?
        </h2>
        <div class="prose">
          <p>
            <strong>List</strong> is an ordered collection that allows duplicates. Unlike arrays, Lists are <strong>dynamically sized</strong> — they grow and shrink automatically. The two main implementations are:
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
                      <span class="ll-arrow">→</span>
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
              <tr><td>get(index)</td><td class="fast">O(1) ⚡</td><td class="slow">O(n)</td></tr>
              <tr><td>add(end)</td><td class="fast">O(1)*</td><td class="fast">O(1) ⚡</td></tr>
              <tr><td>add(index)</td><td class="slow">O(n)</td><td class="fast">O(1)**</td></tr>
              <tr><td>remove(index)</td><td class="slow">O(n)</td><td class="fast">O(1)**</td></tr>
              <tr><td>contains()</td><td class="slow">O(n)</td><td class="slow">O(n)</td></tr>
              <tr><td>Memory</td><td class="fast">Compact</td><td class="slow">Node overhead</td></tr>
            </tbody>
          </table>
          <p class="perf-footnote">* Amortized — occasional resize. ** O(1) once at the node, O(n) to find it.</p>
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
  `,
  styles: `
    .section { margin-bottom: 48px; }
    .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; }
    .icon-sky { color: #0284c7; }
    .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; }
    .prose p { margin: 0 0 14px; }
    .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; }
    .prose li { margin-bottom: 8px; }
    .prose strong { color: #0f172a; font-weight: 700; }
    .prose code { background: #f1f5f9; padding: 2px 7px; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #0284c7; }
    .sub-heading { font-size: 1rem; font-weight: 700; color: #0f172a; margin: 24px 0 8px; }

    .viz-card { background: #fff; border-radius: 18px; border: 1px solid #e2e8f0; box-shadow: 0 4px 16px rgba(0,0,0,0.05); padding: 28px 24px; }
    .viz-title { display: flex; align-items: center; gap: 10px; font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0 0 24px; }

    .dual-viz { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px; }
    .viz-half { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; }
    .viz-label { display: block; font-size: 0.58rem; font-weight: 700; letter-spacing: 0.1em; color: #94a3b8; margin-bottom: 12px; text-align: center; }
    .array-viz { display: flex; flex-wrap: wrap; gap: 6px; justify-content: center; min-height: 50px; }
    .arr-cell { width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; border-radius: 8px; font-size: 0.78rem; font-weight: 700; background: #e0f2fe; color: #0369a1; border: 2px solid #7dd3fc; transition: all 0.3s; font-family: 'JetBrains Mono', monospace; }
    .arr-cell.active { background: #fef08a; color: #854d0e; border-color: #fbbf24; transform: scale(1.1); }
    .arr-cell.inserted { background: #bbf7d0; color: #166534; border-color: #4ade80; transform: scale(1.1); }
    .linked-viz { display: flex; flex-wrap: wrap; gap: 2px; justify-content: center; min-height: 50px; align-items: center; }
    .ll-node { display: flex; align-items: center; gap: 2px; }
    .ll-val { width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; border-radius: 8px; font-size: 0.78rem; font-weight: 700; background: #fae8ff; color: #7e22ce; border: 2px solid #d8b4fe; transition: all 0.3s; font-family: 'JetBrains Mono', monospace; }
    .ll-node.active .ll-val { background: #fef08a; color: #854d0e; border-color: #fbbf24; transform: scale(1.1); }
    .ll-node.inserted .ll-val { background: #bbf7d0; color: #166534; border-color: #4ade80; transform: scale(1.1); }
    .ll-arrow { font-size: 0.7rem; color: #94a3b8; font-weight: 700; }
    .perf-note { display: block; text-align: center; font-size: 0.6rem; color: #94a3b8; margin-top: 8px; font-family: 'JetBrains Mono', monospace; min-height: 16px; }

    .viz-status { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px 16px; text-align: center; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; color: #334155; margin-bottom: 20px; }
    .viz-controls { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; }
    .btn { display: inline-flex; align-items: center; gap: 7px; padding: 10px 18px; border-radius: 10px; font-size: 0.78rem; font-weight: 600; border: none; cursor: pointer; transition: all 0.2s; }
    .btn:disabled { opacity: 0.5; cursor: not-allowed; }
    .btn-sky { background: #0284c7; color: #fff; }
    .btn-sky:hover:not(:disabled) { background: #0369a1; }
    .btn-purple { background: #7c3aed; color: #fff; }
    .btn-purple:hover:not(:disabled) { background: #6d28d9; }
    .btn-amber { background: #d97706; color: #fff; }
    .btn-amber:hover:not(:disabled) { background: #b45309; }
    .btn-gray { background: #e2e8f0; color: #334155; }
    .btn-gray:hover:not(:disabled) { background: #cbd5e1; }

    .perf-table-wrap { overflow-x: auto; }
    .perf-table { width: 100%; border-collapse: collapse; font-size: 0.78rem; }
    .perf-table th { background: #f1f5f9; padding: 10px 14px; text-align: left; font-weight: 700; color: #0f172a; border-bottom: 2px solid #e2e8f0; }
    .perf-table td { padding: 10px 14px; border-bottom: 1px solid #f1f5f9; color: #334155; font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; }
    .perf-table .fast { color: #059669; font-weight: 700; }
    .perf-table .slow { color: #dc2626; }
    .perf-footnote { font-size: 0.62rem; color: #94a3b8; margin-top: 8px; }

    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; }
    .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,0.04); }
    .op-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.06); }
    .op-title { display: flex; align-items: center; gap: 8px; font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
    .op-desc { font-size: 0.78rem; color: #64748b; line-height: 1.55; margin: 0; }

    .use-cases { display: flex; flex-direction: column; gap: 12px; }
    .use-case { display: flex; gap: 16px; padding: 20px; border-radius: 14px; border: 1px solid; }
    .use-case.sky { background: #f0f9ff; border-color: #bae6fd; }
    .use-case.blue { background: #eff6ff; border-color: #bfdbfe; }
    .use-case.purple { background: #faf5ff; border-color: #d8b4fe; }
    .use-num { width: 34px; height: 34px; min-width: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 0.78rem; font-weight: 800; }
    .sky-bg { background: #0284c7; }
    .blue-bg { background: #3b82f6; }
    .purple-bg { background: #8b5cf6; }
    .use-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 4px; }
    .use-desc { font-size: 0.78rem; line-height: 1.55; margin: 0; color: #334155; }
    .use-desc code { background: rgba(0,0,0,0.06); padding: 1px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; }
  `
})
export class CollectionsListComponent {
  arrayList = signal([10, 20, 30, 40, 50]);
  linkedList = signal([10, 20, 30, 40, 50]);
  alActiveIdx = signal(-1);
  alInsertedIdx = signal(-1);
  llActiveIdx = signal(-1);
  llInsertedIdx = signal(-1);
  alNote = signal('');
  llNote = signal('');
  status = signal('Both start with the same elements. Watch how operations differ.');
  isAnimating = signal(false);

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

// List ↔ Array
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

  private sleep(ms: number): Promise<void> {
    return new Promise(r => setTimeout(r, ms));
  }

  private resetHighlights() {
    this.alActiveIdx.set(-1);
    this.alInsertedIdx.set(-1);
    this.llActiveIdx.set(-1);
    this.llInsertedIdx.set(-1);
    this.alNote.set('');
    this.llNote.set('');
  }

  async demoAdd() {
    if (this.isAnimating()) return;
    this.isAnimating.set(true);
    this.resetHighlights();

    this.status.set('Adding 60 to the end of both lists...');
    await this.sleep(800);

    this.arrayList.update(a => [...a, 60]);
    this.alInsertedIdx.set(this.arrayList().length - 1);
    this.alNote.set('O(1) — just append at end');
    this.status.set('ArrayList: appended to end. O(1) amortized.');
    await this.sleep(1000);

    this.linkedList.update(l => [...l, 60]);
    this.llInsertedIdx.set(this.linkedList().length - 1);
    this.llNote.set('O(1) — update tail pointer');
    this.status.set('Both: O(1) for end insertion. Equal performance here! ✅');
    this.isAnimating.set(false);
  }

  async demoInsertMiddle() {
    if (this.isAnimating()) return;
    this.isAnimating.set(true);
    this.resetHighlights();

    this.status.set('Inserting 99 at index 2...');
    await this.sleep(800);

    this.status.set('ArrayList: must shift elements [2..n] to the right → O(n)');
    for (let i = this.arrayList().length - 1; i >= 2; i--) {
      this.alActiveIdx.set(i);
      await this.sleep(300);
    }
    this.arrayList.update(a => { const b = [...a]; b.splice(2, 0, 99); return b; });
    this.alActiveIdx.set(-1);
    this.alInsertedIdx.set(2);
    this.alNote.set('O(n) — shifted elements');
    await this.sleep(800);

    this.status.set('LinkedList: update 2 pointers → O(1) at the node');
    this.llInsertedIdx.set(2);
    this.linkedList.update(l => { const b = [...l]; b.splice(2, 0, 99); return b; });
    this.llNote.set('O(1) — pointer update');
    await this.sleep(800);

    this.status.set('Middle insert: ArrayList O(n) shifts vs LinkedList O(1) pointer change ✅');
    this.isAnimating.set(false);
  }

  async demoGetByIndex() {
    if (this.isAnimating()) return;
    this.isAnimating.set(true);
    this.resetHighlights();

    this.status.set('Getting element at index 3...');
    await this.sleep(800);

    this.alActiveIdx.set(3);
    this.alNote.set('O(1) — direct array index');
    this.status.set('ArrayList: direct index access → O(1). Instant!');
    await this.sleep(1000);

    this.status.set('LinkedList: must traverse from head → node 0 → 1 → 2 → 3...');
    for (let i = 0; i <= 3; i++) {
      this.llActiveIdx.set(i);
      await this.sleep(400);
    }
    this.llNote.set('O(n) — traversed 4 nodes');
    this.status.set('Random access: ArrayList O(1) vs LinkedList O(n). ArrayList wins! ✅');
    this.isAnimating.set(false);
  }

  resetDemo() {
    this.arrayList.set([10, 20, 30, 40, 50]);
    this.linkedList.set([10, 20, 30, 40, 50]);
    this.resetHighlights();
    this.status.set('Both start with the same elements. Watch how operations differ.');
    this.isAnimating.set(false);
  }
}
