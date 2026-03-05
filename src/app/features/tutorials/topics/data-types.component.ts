import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-data-types',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout
      title="Primitive Data Types"
      subtitle="The building blocks of every Java program. Master the 8 primitive types, wrapper classes, autoboxing, and the common traps that trip up developers."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #1e3a5f, #2563eb)">

      <!-- Section 1: The 8 Primitives -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="book-open" [size]="28" css="icon-blue" /> The 8 Primitive Types
        </h2>
        <div class="prose">
          <p>
            Java has exactly <strong>8 primitive types</strong>. Unlike objects, primitives are stored directly on the
            stack — they hold a raw value, not a reference. They are the fastest and most memory-efficient way to store data.
          </p>
        </div>

        <div class="types-grid">
          @for (t of primitiveTypes; track t.name) {
            <div class="type-card" [class.highlighted]="selectedType() === t.name" (click)="selectType(t.name)">
              <div class="type-header" [style.background]="t.color + '18'" [style.border-color]="t.color + '40'">
                <span class="type-name" [style.color]="t.color">{{ t.name }}</span>
                <span class="type-size">{{ t.size }}</span>
              </div>
              <div class="type-body">
                <div class="type-range">{{ t.range }}</div>
                <div class="type-default">default: <code>{{ t.defaultVal }}</code></div>
                <div class="type-example"><code>{{ t.example }}</code></div>
              </div>
            </div>
          }
        </div>
        <app-code-block [code]="codeDeclarations" />
      </section>

      <!-- Section 2: Interactive Overflow Visualizer -->
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title">
            <app-icon name="play" [size]="22" css="icon-blue" /> Type Overflow Visualizer
          </h3>
          <p class="viz-desc">
            A <code>byte</code> can hold values from <strong>-128 to 127</strong>.
            Click the buttons to see what happens when you exceed its maximum!
          </p>

          <div class="overflow-display">
            <div class="overflow-value" [class.overflow-warn]="byteValue() === -128">
              {{ byteValue() }}
            </div>
            <div class="overflow-binary">Binary: <code>{{ toBinary(byteValue()) }}</code></div>
            <div class="overflow-status" [class.warn]="overflowMsg() !== ''">{{ overflowMsg() || 'Value within range' }}</div>
          </div>

          <div class="overflow-range">
            <span class="range-label">MIN: -128</span>
            <div class="range-bar">
              <div class="range-fill" [style.width.%]="rangePercent()"></div>
            </div>
            <span class="range-label">MAX: 127</span>
          </div>

          <div class="viz-controls">
            <button (click)="incrementByte()" class="btn btn-blue">
              <app-icon name="arrow-up" [size]="16" /> Increment +1
            </button>
            <button (click)="decrementByte()" class="btn btn-outline">
              <app-icon name="arrow-down" [size]="16" /> Decrement -1
            </button>
            <button (click)="jumpToMax()" class="btn btn-gold">
              Jump to MAX (127)
            </button>
            <button (click)="resetByte()" class="btn btn-outline">
              <app-icon name="refresh-cw" [size]="16" /> Reset
            </button>
          </div>
        </div>
      </section>

      <!-- Section 3: Wrapper Classes & Autoboxing -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="box" [size]="28" css="icon-blue" /> Wrapper Classes & Autoboxing
        </h2>
        <div class="prose">
          <p>
            Every primitive has a corresponding <strong>wrapper class</strong> in <code>java.lang</code>. Wrappers are needed
            because Java generics and collections only work with objects.
          </p>
          <ul>
            <li><strong>Autoboxing:</strong> Compiler automatically converts <code>int → Integer</code> when an object is required.</li>
            <li><strong>Unboxing:</strong> Compiler automatically converts <code>Integer → int</code> when a primitive is required.</li>
            <li><strong>The Cache Trap:</strong> <code>Integer</code> caches values from <strong>-128 to 127</strong>. Outside this range, <code>==</code> returns <code>false</code> even for equal values!</li>
          </ul>
          <app-code-block [code]="codeWrappers" />
        </div>

        <div class="wrapper-table">
          <div class="table-header">
            <span>Primitive</span><span>Wrapper</span><span>Useful Methods</span>
          </div>
          @for (w of wrapperPairs; track w.primitive) {
            <div class="table-row">
              <code class="prim">{{ w.primitive }}</code>
              <code class="wrap">{{ w.wrapper }}</code>
              <span class="methods">{{ w.methods }}</span>
            </div>
          }
        </div>
      </section>

      <!-- Section 4: Type Promotion -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="arrow-right" [size]="28" css="icon-blue" /> Type Promotion Rules
        </h2>
        <div class="prose">
          <p>Java automatically promotes smaller types to larger ones in expressions. This prevents data loss but can surprise beginners.</p>
          <ul>
            <li><code>byte + byte</code> → result is <strong>int</strong> (not byte!)</li>
            <li><code>int * long</code> → result is <strong>long</strong></li>
            <li><code>int / int</code> → result is <strong>int</strong> (integer division — decimal truncated)</li>
            <li><code>int + double</code> → result is <strong>double</strong></li>
          </ul>
          <app-code-block [code]="codePromotion" />
        </div>
      </section>

      <!-- Section 5: Interview Tips -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="briefcase" [size]="28" css="icon-blue" /> Interview Tips
        </h2>
        <div class="tips-list">
          <div class="tip-card">
            <div class="tip-num">1</div>
            <div>
              <h4 class="tip-title">int vs Integer in Collections</h4>
              <p class="tip-desc">You cannot use primitives as generic type parameters. <code>List&lt;int&gt;</code> is a compile error. Use <code>List&lt;Integer&gt;</code> instead. Java autoboxes automatically.</p>
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-num">2</div>
            <div>
              <h4 class="tip-title">Use long for IDs and Timestamps</h4>
              <p class="tip-desc"><code>int</code> maxes out at ~2.1 billion. Database row IDs and Unix timestamps easily exceed this. Always use <code>long</code> for these values.</p>
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-num">3</div>
            <div>
              <h4 class="tip-title">Never Use float/double for Money</h4>
              <p class="tip-desc"><code>0.1 + 0.2</code> in floating-point is <code>0.30000000000000004</code>. Use <code>BigDecimal</code> for financial calculations that require exact decimal precision.</p>
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-num">4</div>
            <div>
              <h4 class="tip-title">Integer Cache Gotcha</h4>
              <p class="tip-desc"><code>Integer a = 127; Integer b = 127; a == b</code> is <code>true</code> (cached). But <code>Integer x = 200; Integer y = 200; x == y</code> is <code>false</code> (different objects). Always use <code>.equals()</code>!</p>
            </div>
          </div>
        </div>
      </section>

    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; }
    .section-heading {
      display: flex; align-items: center; gap: 12px;
      font-size: 1.4rem; font-weight: 800; color: #1B1B1B;
      margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #D6DDD2;
    }
    .icon-blue { color: #2563eb; }

    .prose { font-size: 0.9rem; color: #52665A; line-height: 1.75; }
    .prose p { margin: 0 0 14px; }
    .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; }
    .prose li { margin-bottom: 8px; }
    .prose strong { color: #1B1B1B; font-weight: 700; }
    .prose code {
      background: #dbeafe; padding: 2px 7px; border-radius: 5px;
      font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #1d4ed8;
    }

    /* Primitives Grid */
    .types-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
      gap: 12px; margin-bottom: 24px;
    }
    .type-card {
      border-radius: 14px; border: 1px solid #e2e8f0;
      overflow: hidden; cursor: pointer;
      transition: all 0.2s; background: #fff;
    }
    .type-card:hover, .type-card.highlighted {
      box-shadow: 0 4px 16px rgba(37,99,235,0.1);
      border-color: #93c5fd; transform: translateY(-2px);
    }
    .type-header {
      display: flex; justify-content: space-between; align-items: center;
      padding: 10px 14px; border-bottom: 1px solid;
    }
    .type-name { font-family: 'JetBrains Mono', monospace; font-size: 0.9rem; font-weight: 800; }
    .type-size { font-size: 0.65rem; font-weight: 700; color: #64748b; }
    .type-body { padding: 12px 14px; display: flex; flex-direction: column; gap: 6px; }
    .type-range { font-size: 0.7rem; color: #475569; line-height: 1.4; }
    .type-default { font-size: 0.7rem; color: #64748b; }
    .type-example { font-size: 0.72rem; }
    .type-body code {
      background: #f1f5f9; padding: 2px 6px; border-radius: 4px;
      font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; color: #334155;
    }

    /* Overflow Visualizer */
    .viz-card {
      background: #fff; border-radius: 20px; border: 1px solid #D6DDD2;
      box-shadow: 0 4px 16px rgba(0,0,0,0.04); padding: 28px 24px;
    }
    .viz-title {
      display: flex; align-items: center; gap: 10px;
      font-size: 1.15rem; font-weight: 700; color: #1B1B1B; margin: 0 0 8px;
    }
    .viz-desc { font-size: 0.85rem; color: #52665A; margin: 0 0 24px; line-height: 1.6; }
    .viz-desc code {
      background: #dbeafe; padding: 2px 6px; border-radius: 4px;
      font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #1d4ed8;
    }

    .overflow-display {
      display: flex; flex-direction: column; align-items: center;
      gap: 8px; margin-bottom: 20px;
    }
    .overflow-value {
      font-family: 'JetBrains Mono', monospace; font-size: 3.5rem; font-weight: 900;
      color: #1d4ed8; line-height: 1; transition: all 0.3s;
    }
    .overflow-value.overflow-warn { color: #dc2626; animation: shake 0.4s ease; }
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      25% { transform: translateX(-8px); }
      75% { transform: translateX(8px); }
    }
    .overflow-binary { font-size: 0.8rem; color: #64748b; }
    .overflow-binary code {
      background: #f1f5f9; padding: 2px 8px; border-radius: 5px;
      font-family: 'JetBrains Mono', monospace; color: #334155; font-size: 0.8rem;
    }
    .overflow-status {
      font-size: 0.82rem; font-weight: 700; color: #059669;
      padding: 6px 16px; border-radius: 20px; background: #d1fae5;
      transition: all 0.3s;
    }
    .overflow-status.warn { background: #fee2e2; color: #dc2626; }

    .overflow-range {
      display: flex; align-items: center; gap: 12px; margin-bottom: 20px;
    }
    .range-label { font-size: 0.7rem; font-weight: 700; color: #64748b; white-space: nowrap; }
    .range-bar {
      flex: 1; height: 8px; background: #e2e8f0; border-radius: 4px; overflow: hidden;
    }
    .range-fill { height: 100%; background: linear-gradient(90deg, #2563eb, #60a5fa); border-radius: 4px; transition: width 0.3s; }

    .viz-controls { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; }
    .btn {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 12px 20px; border-radius: 12px; font-size: 0.8rem; font-weight: 700;
      border: none; cursor: pointer; transition: all 0.2s;
    }
    .btn:disabled { opacity: 0.5; cursor: not-allowed; }
    .btn-blue { background: #2563eb; color: #fff; }
    .btn-blue:hover { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(37,99,235,0.3); }
    .btn-gold { background: #DAA520; color: #081C15; }
    .btn-gold:hover { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(218,165,32,0.2); }
    .btn-outline { background: #fff; color: #52665A; border: 1px solid #D6DDD2; }
    .btn-outline:hover { background: #F5F7F2; border-color: #B5C4B1; }

    /* Wrapper Table */
    .wrapper-table {
      border: 1px solid #e2e8f0; border-radius: 14px; overflow: hidden; margin-top: 20px;
    }
    .table-header {
      display: grid; grid-template-columns: 1fr 1.2fr 2fr;
      background: #1e3a5f; color: #fff;
      padding: 12px 16px; font-size: 0.72rem; font-weight: 700; text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .table-row {
      display: grid; grid-template-columns: 1fr 1.2fr 2fr;
      padding: 11px 16px; font-size: 0.82rem; border-top: 1px solid #e2e8f0;
      align-items: center; transition: background 0.15s;
    }
    .table-row:hover { background: #f8fafc; }
    .prim { color: #2563eb; font-family: 'JetBrains Mono', monospace; font-weight: 700; font-size: 0.78rem; }
    .wrap { color: #0891b2; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; }
    .methods { color: #52665A; font-size: 0.75rem; }

    /* Tips */
    .tips-list { display: flex; flex-direction: column; gap: 12px; }
    .tip-card {
      display: flex; gap: 16px; padding: 20px 24px;
      border-radius: 16px; border: 1px solid #D6DDD2; background: #fff; transition: all 0.2s;
    }
    .tip-card:hover { border-color: #93c5fd; box-shadow: 0 4px 12px rgba(37,99,235,0.06); }
    .tip-num {
      width: 36px; height: 36px; min-width: 36px; border-radius: 10px;
      display: flex; align-items: center; justify-content: center;
      background: #2563eb; color: #fff; font-size: 0.85rem; font-weight: 800;
    }
    .tip-title { font-size: 0.95rem; font-weight: 700; color: #1B1B1B; margin: 0 0 6px; }
    .tip-desc { font-size: 0.82rem; color: #52665A; line-height: 1.55; margin: 0; }
    .tip-desc code {
      background: #dbeafe; padding: 2px 5px; border-radius: 4px;
      font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: #1d4ed8;
    }
  `
})
export class DataTypesComponent {
  selectedType = signal('');

  primitiveTypes = [
    { name: 'byte',    size: '1 byte',  color: '#2563eb', range: '-128 to 127',                         defaultVal: '0',     example: 'byte b = 100;' },
    { name: 'short',   size: '2 bytes', color: '#7c3aed', range: '-32,768 to 32,767',                   defaultVal: '0',     example: 'short s = 1000;' },
    { name: 'int',     size: '4 bytes', color: '#059669', range: '-2.1B to 2.1B',                       defaultVal: '0',     example: 'int i = 42;' },
    { name: 'long',    size: '8 bytes', color: '#d97706', range: '-9.2Q to 9.2Q',                       defaultVal: '0L',    example: 'long l = 99L;' },
    { name: 'float',   size: '4 bytes', color: '#dc2626', range: '±3.4e38 (~7 digits)',                 defaultVal: '0.0f',  example: 'float f = 3.14f;' },
    { name: 'double',  size: '8 bytes', color: '#0891b2', range: '±1.8e308 (~15 digits)',               defaultVal: '0.0d',  example: 'double d = 3.14;' },
    { name: 'char',    size: '2 bytes', color: '#be185d', range: '0 to 65,535 (Unicode)',               defaultVal: "\\u0000", example: "char c = 'A';" },
    { name: 'boolean', size: '1 bit',   color: '#16a34a', range: 'true or false',                       defaultVal: 'false', example: 'boolean ok = true;' },
  ];

  wrapperPairs = [
    { primitive: 'byte',    wrapper: 'Byte',      methods: 'parseByte(), byteValue()' },
    { primitive: 'short',   wrapper: 'Short',     methods: 'parseShort(), shortValue()' },
    { primitive: 'int',     wrapper: 'Integer',   methods: 'parseInt(), valueOf(), toBinaryString()' },
    { primitive: 'long',    wrapper: 'Long',      methods: 'parseLong(), MAX_VALUE, MIN_VALUE' },
    { primitive: 'float',   wrapper: 'Float',     methods: 'parseFloat(), isNaN(), isInfinite()' },
    { primitive: 'double',  wrapper: 'Double',    methods: 'parseDouble(), compare(), isNaN()' },
    { primitive: 'char',    wrapper: 'Character', methods: 'isDigit(), isLetter(), toUpperCase()' },
    { primitive: 'boolean', wrapper: 'Boolean',   methods: 'parseBoolean(), valueOf()' },
  ];

  byteValue = signal(0);
  overflowMsg = signal('');

  selectType(name: string) { this.selectedType.set(name); }

  toBinary(val: number): string {
    const unsigned = val < 0 ? (256 + val) : val;
    return unsigned.toString(2).padStart(8, '0');
  }

  rangePercent(): number {
    return ((this.byteValue() + 128) / 255) * 100;
  }

  incrementByte() {
    const next = this.byteValue() + 1;
    if (next > 127) {
      this.byteValue.set(-128);
      this.overflowMsg.set('Overflow! 127 + 1 wraps around to -128');
    } else {
      this.byteValue.set(next);
      this.overflowMsg.set('');
    }
  }

  decrementByte() {
    const next = this.byteValue() - 1;
    if (next < -128) {
      this.byteValue.set(127);
      this.overflowMsg.set('Underflow! -128 - 1 wraps around to 127');
    } else {
      this.byteValue.set(next);
      this.overflowMsg.set('');
    }
  }

  jumpToMax() { this.byteValue.set(127); this.overflowMsg.set('At maximum value — one more increment causes overflow!'); }
  resetByte() { this.byteValue.set(0); this.overflowMsg.set(''); }

  codeDeclarations = `// Integer types
byte  b = 127;
short s = 32_767;          // underscores for readability
int   i = 2_147_483_647;
long  l = 9_223_372_036_854_775_807L; // L suffix required

// Floating-point types
float  f = 3.14f;          // f suffix required
double d = 3.141592653589793;

// Other types
char    c    = 'A';        // Unicode character
boolean flag = true;

// Hex and binary literals
int hex = 0xFF;            // 255
int bin = 0b1010_1010;     // 170`;

  codeWrappers = `// Autoboxing: int → Integer
Integer boxed = 42;                       // compiler writes Integer.valueOf(42)

// Unboxing: Integer → int
int unboxed = boxed;                      // compiler writes boxed.intValue()

// The Integer cache trap!
Integer a = 127;
Integer b = 127;
System.out.println(a == b);              // true  ✅ (cached, same object)

Integer x = 200;
Integer y = 200;
System.out.println(x == y);             // false ❌ (different objects!)
System.out.println(x.equals(y));        // true  ✅ (always use equals)

// Useful wrapper methods
int parsed  = Integer.parseInt("42");    // String → int
String bin  = Integer.toBinaryString(255); // "11111111"
int max     = Integer.MAX_VALUE;         // 2147483647
int min     = Integer.MIN_VALUE;         // -2147483648`;

  codePromotion = `// byte + byte → int (not byte!)
byte b1 = 10, b2 = 20;
// byte result = b1 + b2;   // compile error — result is int
int result = b1 + b2;       // correct: 30

// int / int → int (truncates decimal!)
int a = 7, b = 2;
int wrong   = a / b;         // 3  ← decimal is lost!
double right = (double) a / b; // 3.5 ← explicit cast first

// Promotion chain: smaller → larger
int i = 100;
long l = i;      // int → long (widening, implicit)
double d = l;    // long → double (widening, implicit)`;
}
