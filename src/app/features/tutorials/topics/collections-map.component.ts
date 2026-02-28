import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-collections-map',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
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
            <li><strong>TreeMap:</strong> O(log n) — sorted by key. Implements <code>NavigableMap</code>.</li>
            <li><strong>LinkedHashMap:</strong> O(1) — maintains insertion order.</li>
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
                      <span class="entry-sep">→</span>
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
          <div class="use-case blue"><div class="use-num blue-bg">2</div><div><h4 class="use-title">Deduplication (HashSet)</h4><p class="use-desc">Remove duplicates from API results or database rows by adding to a <code>HashSet</code> — only unique elements survive.</p></div></div>
          <div class="use-case teal"><div class="use-num teal-bg">3</div><div><h4 class="use-title">Word Frequency Counter</h4><p class="use-desc"><code>map.merge(word, 1, Integer::sum)</code> — one line to count word occurrences in large text files or log analysis.</p></div></div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; }
    .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; }
    .icon-purple { color: #9333ea; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; }
    .prose p { margin: 0 0 14px; } .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; } .prose li { margin-bottom: 8px; }
    .prose strong { color: #0f172a; font-weight: 700; }
    .prose code { background: #f1f5f9; padding: 2px 7px; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #9333ea; }

    .viz-card { background: #fff; border-radius: 18px; border: 1px solid #e2e8f0; box-shadow: 0 4px 16px rgba(0,0,0,0.05); padding: 28px 24px; }
    .viz-title { display: flex; align-items: center; gap: 10px; font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0 0 24px; }

    .bucket-grid { display: flex; flex-direction: column; gap: 6px; margin-bottom: 20px; }
    .bucket { display: flex; align-items: flex-start; gap: 10px; padding: 8px 12px; border-radius: 10px; border: 2px solid #e2e8f0; background: #fff; transition: all 0.3s; }
    .bucket.active { border-color: #9333ea; background: #faf5ff; }
    .bucket-idx { width: 28px; height: 28px; min-width: 28px; background: #f1f5f9; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 0.6rem; font-weight: 800; color: #94a3b8; font-family: 'JetBrains Mono', monospace; }
    .bucket-entries { display: flex; flex-wrap: wrap; gap: 6px; flex: 1; }
    .entry { display: flex; align-items: center; gap: 4px; padding: 4px 10px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; font-size: 0.68rem; font-family: 'JetBrains Mono', monospace; transition: all 0.3s; }
    .entry.highlight { background: #faf5ff; border-color: #9333ea; }
    .entry-key { font-weight: 700; color: #9333ea; } .entry-sep { color: #94a3b8; } .entry-val { color: #0f172a; }
    .empty { font-size: 0.6rem; color: #cbd5e1; padding: 4px 0; }

    .viz-status { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px 16px; text-align: center; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; color: #334155; margin-bottom: 20px; }
    .viz-controls { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; }
    .btn { display: inline-flex; align-items: center; gap: 7px; padding: 10px 18px; border-radius: 10px; font-size: 0.78rem; font-weight: 600; border: none; cursor: pointer; transition: all 0.2s; }
    .btn:disabled { opacity: 0.5; cursor: not-allowed; }
    .btn-purple { background: #9333ea; color: #fff; } .btn-purple:hover:not(:disabled) { background: #7e22ce; }
    .btn-blue { background: #2563eb; color: #fff; } .btn-blue:hover:not(:disabled) { background: #1d4ed8; }
    .btn-amber { background: #d97706; color: #fff; } .btn-amber:hover:not(:disabled) { background: #b45309; }
    .btn-gray { background: #e2e8f0; color: #334155; } .btn-gray:hover:not(:disabled) { background: #cbd5e1; }

    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; }
    .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,0.04); }
    .op-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.06); }
    .op-title { display: flex; align-items: center; gap: 8px; font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
    .op-desc { font-size: 0.78rem; color: #64748b; line-height: 1.55; margin: 0; }

    .use-cases { display: flex; flex-direction: column; gap: 12px; }
    .use-case { display: flex; gap: 16px; padding: 20px; border-radius: 14px; border: 1px solid; }
    .use-case.purple { background: #faf5ff; border-color: #d8b4fe; }
    .use-case.blue { background: #eff6ff; border-color: #bfdbfe; }
    .use-case.teal { background: #f0fdfa; border-color: #99f6e4; }
    .use-num { width: 34px; height: 34px; min-width: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 0.78rem; font-weight: 800; }
    .purple-bg { background: #9333ea; } .blue-bg { background: #3b82f6; } .teal-bg { background: #14b8a6; }
    .use-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 4px; }
    .use-desc { font-size: 0.78rem; line-height: 1.55; margin: 0; color: #334155; }
    .use-desc code { background: rgba(0,0,0,0.06); padding: 1px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; }
  `
})
export class CollectionsMapComponent {
  private defaultBuckets = (): Bucket[] => [
    { index: 0, entries: [{ key: 'apple', value: '3' }] },
    { index: 1, entries: [] },
    { index: 2, entries: [{ key: 'banana', value: '5' }] },
    { index: 3, entries: [{ key: 'cherry', value: '2' }] },
    { index: 4, entries: [] },
  ];
  buckets = signal<Bucket[]>(this.defaultBuckets());
  activeBucket = signal(-1);
  activeKey = signal('');
  status = signal('HashMap stores entries in buckets based on key.hashCode() % capacity.');
  isAnimating = signal(false);

  codeCreating = `// HashMap — most common
Map<String, Integer> map = new HashMap<>();
map.put("apple", 3);

// TreeMap — sorted keys
Map<String, Integer> sorted = new TreeMap<>(map);

// HashSet — unique elements
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

// computeIfAbsent — lazy init
map.computeIfAbsent("key",
    k -> expensiveCompute(k));

// merge — word count in one line!
map.merge(word, 1, Integer::sum);

// putIfAbsent
map.putIfAbsent("key", defaultVal);`;

  private sleep(ms: number): Promise<void> { return new Promise(r => setTimeout(r, ms)); }

  async demoPut() {
    if (this.isAnimating()) return;
    this.isAnimating.set(true);
    this.status.set('put("grape", 7) → hashCode("grape") % 5 = 1');
    this.activeBucket.set(1);
    await this.sleep(1200);
    this.buckets.update(b => b.map((bk, i) => i === 1 ? { ...bk, entries: [{ key: 'grape', value: '7' }] } : bk));
    this.activeKey.set('grape');
    this.status.set('Bucket 1 now contains {"grape" → 7}. O(1) insertion! ✅');
    this.isAnimating.set(false);
  }

  async demoGet() {
    if (this.isAnimating()) return;
    this.isAnimating.set(true);
    this.activeKey.set('');
    this.status.set('get("banana") → hashCode("banana") % 5 = 2');
    this.activeBucket.set(2);
    await this.sleep(1000);
    this.activeKey.set('banana');
    this.status.set('Found in bucket 2: "banana" → 5. O(1) lookup! ✅');
    this.isAnimating.set(false);
  }

  async demoCollision() {
    if (this.isAnimating()) return;
    this.isAnimating.set(true);
    this.status.set('Two keys hash to the SAME bucket (collision)...');
    this.activeBucket.set(0);
    await this.sleep(1000);
    this.buckets.update(b => b.map((bk, i) => i === 0 ? { ...bk, entries: [...bk.entries, { key: 'apricot', value: '4' }] } : bk));
    this.activeKey.set('apricot');
    this.status.set('Bucket 0 now has a chain: apple → apricot. Linked list within bucket! ⚠️');
    await this.sleep(1500);
    this.status.set('Too many collisions → O(n) lookup. Java 8+ converts chains to red-black trees at 8 entries.');
    this.isAnimating.set(false);
  }

  resetDemo() {
    this.buckets.set(this.defaultBuckets());
    this.activeBucket.set(-1);
    this.activeKey.set('');
    this.status.set('HashMap stores entries in buckets based on key.hashCode() % capacity.');
    this.isAnimating.set(false);
  }
}
interface Bucket { index: number; entries: { key: string; value: string }[]; }
