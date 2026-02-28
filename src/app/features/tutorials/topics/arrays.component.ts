import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-arrays',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
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
              <app-icon name="edit-3" [size]="16" /> Update [2] → 99
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
  `,
  styles: `
    /* Sections */
    .section { margin-bottom: 48px; }
    .section-heading {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 1.4rem;
      font-weight: 800;
      color: #0f172a;
      margin: 0 0 20px;
      padding-bottom: 14px;
      border-bottom: 1px solid #e2e8f0;
    }

    /* Icon colors */
    .icon-blue { color: #2563eb; }
    .icon-indigo { color: #4f46e5; }
    .icon-teal { color: #0d9488; }

    /* Prose */
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; }
    .prose p { margin: 0 0 14px; }
    .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; }
    .prose li { margin-bottom: 8px; }
    .prose strong { color: #0f172a; font-weight: 700; }
    .prose code {
      background: #f1f5f9;
      padding: 2px 7px;
      border-radius: 5px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.8rem;
      color: #4f46e5;
    }
    .sub-heading { font-size: 1rem; font-weight: 700; color: #0f172a; margin: 24px 0 8px; }

    /* Visualizer */
    .viz-card {
      background: #fff;
      border-radius: 18px;
      border: 1px solid #e2e8f0;
      box-shadow: 0 4px 16px rgba(0,0,0,0.05);
      padding: 28px 24px;
    }
    .viz-title {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 1.15rem;
      font-weight: 700;
      color: #0f172a;
      margin: 0 0 24px;
    }
    .viz-array {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
      min-height: 90px;
      align-items: center;
      margin-bottom: 20px;
    }
    .viz-cell { display: flex; flex-direction: column; align-items: center; }
    .viz-idx { font-size: 0.58rem; color: #94a3b8; margin-bottom: 4px; font-family: 'JetBrains Mono', monospace; }

    .viz-box {
      width: 52px;
      height: 52px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 12px;
      font-size: 1.05rem;
      font-weight: 800;
      transition: all 0.3s ease;
    }
    .viz-box.default { background: #eff6ff; color: #1e40af; border: 2px solid #bfdbfe; }
    .viz-box.active { background: #fef08a; color: #854d0e; border: 2px solid #fbbf24; transform: scale(1.1); box-shadow: 0 4px 12px rgba(251,191,36,0.3); }
    .viz-box.found { background: #22c55e; color: #fff; border: 2px solid #16a34a; transform: scale(1.1); box-shadow: 0 4px 12px rgba(34,197,94,0.3); }

    .viz-status {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 10px;
      padding: 12px 16px;
      text-align: center;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.78rem;
      color: #334155;
      margin-bottom: 20px;
    }
    .viz-controls { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; }

    .btn {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      padding: 10px 18px;
      border-radius: 10px;
      font-size: 0.78rem;
      font-weight: 600;
      border: none;
      cursor: pointer;
      transition: all 0.2s;
    }
    .btn:disabled { opacity: 0.5; cursor: not-allowed; }
    .btn-blue { background: #2563eb; color: #fff; }
    .btn-blue:hover:not(:disabled) { background: #1d4ed8; }
    .btn-purple { background: #7c3aed; color: #fff; }
    .btn-purple:hover:not(:disabled) { background: #6d28d9; }
    .btn-gray { background: #e2e8f0; color: #334155; }
    .btn-gray:hover:not(:disabled) { background: #cbd5e1; }

    /* Operations Grid */
    .op-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 16px;
    }
    .op-card {
      background: #fff;
      padding: 22px 20px;
      border-radius: 14px;
      border: 1px solid #e2e8f0;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
      transition: box-shadow 0.2s;
    }
    .op-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.06); }
    .op-title { display: flex; align-items: center; gap: 8px; font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
    .op-desc { font-size: 0.78rem; color: #64748b; line-height: 1.55; margin: 0; }

    /* Use Cases */
    .use-cases { display: flex; flex-direction: column; gap: 12px; }
    .use-case {
      display: flex;
      gap: 16px;
      padding: 20px;
      border-radius: 14px;
      border: 1px solid;
    }
    .use-case.teal { background: #f0fdfa; border-color: #99f6e4; }
    .use-case.blue { background: #eff6ff; border-color: #bfdbfe; }
    .use-case.purple { background: #faf5ff; border-color: #d8b4fe; }
    .use-num {
      width: 34px;
      height: 34px;
      min-width: 34px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 0.78rem;
      font-weight: 800;
    }
    .teal-bg { background: #14b8a6; }
    .blue-bg { background: #3b82f6; }
    .purple-bg { background: #8b5cf6; }
    .use-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 4px; }
    .use-desc { font-size: 0.78rem; line-height: 1.55; margin: 0; }
    .use-case.teal .use-desc { color: #134e4a; }
    .use-case.blue .use-desc { color: #1e3a5f; }
    .use-case.purple .use-desc { color: #3b0764; }
    .use-desc code {
      background: rgba(0,0,0,0.06);
      padding: 1px 5px;
      border-radius: 4px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.72rem;
    }
  `
})
export class ArraysComponent {
  // Visualizer State
  array = signal<number[]>([10, 24, 8, 45, 12, 7]);
  activeIndex = signal(-1);
  foundIndex = signal(-1);
  status = signal('Ready. Choose an operation below.');
  isAnimating = signal(false);

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
  getBoxClass(idx: number): string {
    if (this.foundIndex() === idx) return 'viz-box found';
    if (this.activeIndex() === idx) return 'viz-box active';
    return 'viz-box default';
  }

  private sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private resetVisual() {
    this.activeIndex.set(-1);
    this.foundIndex.set(-1);
    this.status.set('Ready. Choose an operation below.');
    this.isAnimating.set(false);
  }

  async handleLinearSearch() {
    if (this.isAnimating()) return;
    this.isAnimating.set(true);
    this.activeIndex.set(-1);
    this.foundIndex.set(-1);
    this.status.set('Searching for element 45...');

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
    this.status.set('Element 45 not found.');
    this.activeIndex.set(-1);
    this.isAnimating.set(false);
  }

  async handleUpdate() {
    if (this.isAnimating()) return;
    this.isAnimating.set(true);
    this.activeIndex.set(-1);
    this.foundIndex.set(-1);
    this.status.set('Locating index 2...');
    this.activeIndex.set(2);
    await this.sleep(1000);
    this.status.set('Updating value at index 2 to 99...');
    this.array.update(prev => { const a = [...prev]; a[2] = 99; return a; });
    this.foundIndex.set(2);
    await this.sleep(1000);
    this.status.set('Update complete!');
    this.activeIndex.set(-1);
    this.isAnimating.set(false);
  }

  handleResetArray() {
    this.array.set([10, 24, 8, 45, 12, 7]);
    this.resetVisual();
  }
}
