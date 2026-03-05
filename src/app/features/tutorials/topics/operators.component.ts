import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-operators',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout
      title="Java Operators"
      subtitle="From basic arithmetic to bitwise manipulation — master every operator Java offers and the precedence rules that govern them."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #3b0764, #7c3aed)">

      <!-- Section 1: Arithmetic & Assignment -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="book-open" [size]="28" css="icon-purple" /> Arithmetic Operators
        </h2>
        <div class="prose">
          <p>Arithmetic operators perform mathematical operations. The <strong>most common trap</strong> is integer division — <code>7 / 2</code> returns <code>3</code>, not <code>3.5</code>.</p>
          <ul>
            <li><code>+</code> — addition (also string concatenation)</li>
            <li><code>-</code> — subtraction</li>
            <li><code>*</code> — multiplication</li>
            <li><code>/</code> — division (truncates for integers)</li>
            <li><code>%</code> — modulo (remainder after division)</li>
            <li><code>++</code> / <code>--</code> — increment / decrement (prefix vs postfix matters!)</li>
          </ul>
          <app-code-block [code]="codeArithmetic" />
        </div>
      </section>

      <!-- Section 2: Interactive Bitwise Playground -->
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title">
            <app-icon name="play" [size]="22" css="icon-purple" /> Bitwise Operator Playground
          </h3>
          <p class="viz-desc">Enter two numbers (0–255) and pick a bitwise operation to see exactly which bits are affected.</p>

          <div class="bit-inputs">
            <div class="bit-input-group">
              <label class="bit-label">Value A</label>
              <input type="number" [value]="valA()" (input)="setA($event)" min="0" max="255" class="bit-input" />
              <div class="bit-row">
                @for (b of toBits(valA()); track $index) {
                  <div class="bit-cell" [class.bit-on]="b === '1'">{{ b }}</div>
                }
              </div>
              <div class="bit-decimal">= {{ valA() }}</div>
            </div>

            <div class="bit-ops">
              @for (op of bitwiseOps; track op.symbol) {
                <button class="op-btn" [class.op-active]="selectedOp() === op.symbol" (click)="selectOp(op.symbol)">
                  <span class="op-sym">{{ op.symbol }}</span>
                  <span class="op-name">{{ op.name }}</span>
                </button>
              }
            </div>

            <div class="bit-input-group">
              <label class="bit-label">Value B</label>
              <input type="number" [value]="valB()" (input)="setB($event)" min="0" max="255" class="bit-input" [disabled]="selectedOp() === '~' || selectedOp() === '<<' || selectedOp() === '>>'" />
              <div class="bit-row">
                @for (b of toBits(valB()); track $index) {
                  <div class="bit-cell" [class.bit-on]="b === '1'" [class.bit-disabled]="selectedOp() === '~' || selectedOp() === '<<' || selectedOp() === '>>'">{{ b }}</div>
                }
              </div>
              <div class="bit-decimal">= {{ valB() }}</div>
            </div>
          </div>

          <div class="bit-result-area">
            <div class="bit-result-label">Result: <code>{{ valA() }} {{ selectedOp() }} {{ needsB() ? valB() : '' }}</code></div>
            <div class="bit-row result-row">
              @for (b of toBits(computeResult()); track $index) {
                <div class="bit-cell result-bit" [class.bit-on]="b === '1'">{{ b }}</div>
              }
            </div>
            <div class="bit-decimal result-decimal">= {{ computeResult() }}</div>
          </div>

          <div class="op-explanation">{{ opExplanation() }}</div>
        </div>
      </section>

      <!-- Section 3: Logical & Relational -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="code" [size]="28" css="icon-purple" /> Logical & Relational Operators
        </h2>
        <div class="op-grid">
          <div class="op-card">
            <h3 class="op-title">Relational</h3>
            <p class="op-desc">Compare values: <code>==</code>, <code>!=</code>, <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code>. Return a <code>boolean</code>. Use <code>.equals()</code> for object comparison, not <code>==</code>.</p>
          </div>
          <div class="op-card">
            <h3 class="op-title">Short-Circuit AND <code>&amp;&amp;</code></h3>
            <p class="op-desc">Evaluates right side <strong>only if left is true</strong>. Safe pattern: <code>obj != null && obj.method()</code> — the null check prevents NPE.</p>
          </div>
          <div class="op-card">
            <h3 class="op-title">Short-Circuit OR <code>||</code></h3>
            <p class="op-desc">Evaluates right side <strong>only if left is false</strong>. Useful for default fallback: <code>name != null || (name = "default") != null</code>.</p>
          </div>
          <div class="op-card">
            <h3 class="op-title">Ternary <code>? :</code></h3>
            <p class="op-desc"><code>condition ? trueVal : falseVal</code> — a compact if-else expression. Great for simple assignments. Avoid nesting ternaries — readability suffers.</p>
          </div>
        </div>
        <app-code-block [code]="codeLogical" />
      </section>

      <!-- Section 4: Bitwise Use Cases -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="briefcase" [size]="28" css="icon-purple" /> Bitwise Operator Use Cases
        </h2>
        <div class="prose">
          <p>Bitwise operators work on individual bits and are used for high-performance flags, permissions, and compact state storage.</p>
        </div>
        <app-code-block [code]="codeBitwiseUseCases" />
      </section>

      <!-- Section 5: Precedence -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="list" [size]="28" css="icon-purple" /> Operator Precedence (Top Rules)
        </h2>
        <div class="prec-table">
          @for (row of precedenceRules; track row.level) {
            <div class="prec-row">
              <span class="prec-level">{{ row.level }}</span>
              <span class="prec-ops">{{ row.ops }}</span>
              <span class="prec-desc">{{ row.desc }}</span>
            </div>
          }
        </div>
        <div class="prose" style="margin-top:16px">
          <p><strong>Rule of thumb:</strong> When in doubt, use parentheses — they make intent explicit and override precedence.</p>
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
    .icon-purple { color: #7c3aed; }

    .prose { font-size: 0.9rem; color: #52665A; line-height: 1.75; }
    .prose p { margin: 0 0 14px; }
    .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; }
    .prose li { margin-bottom: 8px; }
    .prose strong { color: #1B1B1B; font-weight: 700; }
    .prose code {
      background: #ede9fe; padding: 2px 7px; border-radius: 5px;
      font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #6d28d9;
    }

    /* Viz */
    .viz-card {
      background: #fff; border-radius: 20px; border: 1px solid #D6DDD2;
      box-shadow: 0 4px 16px rgba(0,0,0,0.04); padding: 28px 24px;
    }
    .viz-title {
      display: flex; align-items: center; gap: 10px;
      font-size: 1.15rem; font-weight: 700; color: #1B1B1B; margin: 0 0 8px;
    }
    .viz-desc { font-size: 0.85rem; color: #52665A; margin: 0 0 24px; line-height: 1.6; }

    /* Bitwise playground */
    .bit-inputs {
      display: flex; align-items: flex-start; gap: 16px;
      flex-wrap: wrap; justify-content: center; margin-bottom: 24px;
    }
    .bit-input-group { display: flex; flex-direction: column; align-items: center; gap: 8px; }
    .bit-label { font-size: 0.7rem; font-weight: 800; color: #64748b; text-transform: uppercase; letter-spacing: 0.08em; }
    .bit-input {
      width: 80px; text-align: center; padding: 8px 12px;
      border: 2px solid #e2e8f0; border-radius: 10px;
      font-family: 'JetBrains Mono', monospace; font-size: 1rem; font-weight: 700; color: #1B1B1B;
      outline: none;
    }
    .bit-input:focus { border-color: #7c3aed; }
    .bit-input:disabled { opacity: 0.4; }
    .bit-row { display: flex; gap: 4px; }
    .bit-cell {
      width: 26px; height: 26px; border-radius: 6px;
      display: flex; align-items: center; justify-content: center;
      font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; font-weight: 800;
      background: #f1f5f9; color: #94a3b8; border: 1px solid #e2e8f0;
      transition: all 0.2s;
    }
    .bit-cell.bit-on { background: #7c3aed; color: #fff; border-color: #7c3aed; }
    .bit-cell.bit-disabled { opacity: 0.3; }
    .bit-decimal { font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #64748b; font-weight: 600; }

    .bit-ops { display: flex; flex-direction: column; gap: 6px; justify-content: center; }
    .op-btn {
      display: flex; flex-direction: column; align-items: center;
      padding: 8px 12px; border-radius: 10px; border: 1px solid #e2e8f0;
      cursor: pointer; background: #fff; transition: all 0.2s; gap: 2px;
    }
    .op-btn:hover { border-color: #7c3aed; }
    .op-btn.op-active { background: #7c3aed; border-color: #7c3aed; }
    .op-sym { font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; font-weight: 800; color: inherit; }
    .op-name { font-size: 0.6rem; font-weight: 700; color: inherit; opacity: 0.7; text-transform: uppercase; }
    .op-btn.op-active .op-sym, .op-btn.op-active .op-name { color: #fff; }

    .bit-result-area {
      display: flex; flex-direction: column; align-items: center; gap: 8px;
      padding: 16px; background: #faf5ff; border-radius: 14px;
      border: 1px solid #ddd6fe; margin-bottom: 16px;
    }
    .bit-result-label { font-size: 0.82rem; color: #6d28d9; font-weight: 700; }
    .bit-result-label code {
      background: #ede9fe; padding: 2px 8px; border-radius: 4px;
      font-family: 'JetBrains Mono', monospace; color: #5b21b6;
    }
    .result-row .bit-cell.bit-on { background: #059669; border-color: #059669; }
    .result-decimal { font-family: 'JetBrains Mono', monospace; font-size: 1.1rem; font-weight: 900; color: #059669; }
    .op-explanation {
      font-size: 0.82rem; color: #52665A; padding: 12px 16px;
      background: #f8fafc; border-radius: 10px; border: 1px solid #e2e8f0;
      line-height: 1.55;
    }

    /* Op Grid */
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 14px; }
    .op-card {
      background: #fff; padding: 20px; border-radius: 16px; border: 1px solid #D6DDD2;
      transition: all 0.2s;
    }
    .op-card:hover { border-color: #c4b5fd; box-shadow: 0 4px 12px rgba(124,58,237,0.06); }
    .op-title { font-size: 0.95rem; font-weight: 700; color: #1B1B1B; margin: 0 0 8px; }
    .op-title code {
      background: #ede9fe; padding: 2px 6px; border-radius: 4px;
      font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: #6d28d9;
    }
    .op-desc { font-size: 0.82rem; color: #52665A; line-height: 1.55; margin: 0; }
    .op-desc code {
      background: #ede9fe; padding: 2px 5px; border-radius: 4px;
      font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: #6d28d9;
    }

    /* Precedence */
    .prec-table { display: flex; flex-direction: column; border: 1px solid #e2e8f0; border-radius: 14px; overflow: hidden; }
    .prec-row {
      display: grid; grid-template-columns: 60px 1fr 2fr;
      padding: 12px 16px; border-top: 1px solid #e2e8f0; gap: 12px;
      align-items: center; font-size: 0.82rem; transition: background 0.15s;
    }
    .prec-row:first-child { border-top: none; background: #3b0764; color: #fff; font-weight: 700; font-size: 0.72rem; text-transform: uppercase; }
    .prec-row:not(:first-child):hover { background: #faf5ff; }
    .prec-level { font-weight: 800; color: #6d28d9; text-align: center; }
    .prec-row:first-child .prec-level { color: #fff; }
    .prec-ops { font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; color: #1B1B1B; font-weight: 700; }
    .prec-desc { color: #52665A; }
  `
})
export class OperatorsComponent {
  valA = signal(12);
  valB = signal(10);
  selectedOp = signal('&');

  bitwiseOps = [
    { symbol: '&',  name: 'AND' },
    { symbol: '|',  name: 'OR' },
    { symbol: '^',  name: 'XOR' },
    { symbol: '~',  name: 'NOT' },
    { symbol: '<<', name: 'L-Shift' },
    { symbol: '>>', name: 'R-Shift' },
  ];

  precedenceRules = [
    { level: 'Higher', ops: 'Operators', desc: 'Description' },
    { level: '1',  ops: '++ --  ~ !',              desc: 'Unary: post/pre-increment, bitwise NOT, logical NOT' },
    { level: '2',  ops: '*  /  %',                 desc: 'Multiplicative' },
    { level: '3',  ops: '+  -',                    desc: 'Additive (and string concatenation)' },
    { level: '4',  ops: '<<  >>  >>>',             desc: 'Bitwise shifts' },
    { level: '5',  ops: '<  >  <=  >=  instanceof', desc: 'Relational and type comparison' },
    { level: '6',  ops: '==  !=',                  desc: 'Equality' },
    { level: '7',  ops: '&  ^  |',                 desc: 'Bitwise AND, XOR, OR' },
    { level: '8',  ops: '&&  ||',                  desc: 'Logical AND, OR (short-circuit)' },
    { level: '9',  ops: '? :',                     desc: 'Ternary' },
    { level: '10', ops: '=  +=  -=  ...',          desc: 'Assignment (lowest precedence)' },
  ];

  setA(event: Event) {
    const v = parseInt((event.target as HTMLInputElement).value, 10);
    if (!isNaN(v)) this.valA.set(Math.max(0, Math.min(255, v)));
  }

  setB(event: Event) {
    const v = parseInt((event.target as HTMLInputElement).value, 10);
    if (!isNaN(v)) this.valB.set(Math.max(0, Math.min(255, v)));
  }

  selectOp(op: string) { this.selectedOp.set(op); }

  needsB(): boolean { return !['~', '<<', '>>'].includes(this.selectedOp()); }

  toBits(val: number): string[] {
    return val.toString(2).padStart(8, '0').split('');
  }

  computeResult(): number {
    const a = this.valA(), b = this.valB(), op = this.selectedOp();
    switch (op) {
      case '&':  return (a & b) & 0xFF;
      case '|':  return (a | b) & 0xFF;
      case '^':  return (a ^ b) & 0xFF;
      case '~':  return (~a) & 0xFF;
      case '<<': return (a << 1) & 0xFF;
      case '>>': return (a >> 1) & 0xFF;
      default:   return 0;
    }
  }

  opExplanation(): string {
    const a = this.valA(), b = this.valB(), op = this.selectedOp();
    switch (op) {
      case '&':  return `AND: A bit in the result is 1 only when BOTH corresponding bits in A and B are 1. ${a} & ${b} = ${this.computeResult()}`;
      case '|':  return `OR: A bit in the result is 1 when EITHER corresponding bit in A or B is 1. ${a} | ${b} = ${this.computeResult()}`;
      case '^':  return `XOR: A bit in the result is 1 when the bits in A and B are DIFFERENT. ${a} ^ ${b} = ${this.computeResult()}`;
      case '~':  return `NOT (bitwise complement): Each bit is flipped. ~${a} = ${this.computeResult()} (shown as unsigned 8-bit)`;
      case '<<': return `Left shift: Shift all bits of A one position to the left (multiply by 2). ${a} << 1 = ${this.computeResult()}`;
      case '>>': return `Right shift: Shift all bits of A one position to the right (divide by 2). ${a} >> 1 = ${this.computeResult()}`;
      default:   return '';
    }
  }

  codeArithmetic = `int a = 7, b = 2;

// Basic arithmetic
System.out.println(a + b);  // 9
System.out.println(a - b);  // 5
System.out.println(a * b);  // 14
System.out.println(a / b);  // 3  ← integer division (decimal truncated!)
System.out.println(a % b);  // 1  ← remainder

// Fix integer division
double result = (double) a / b; // 3.5

// Prefix vs Postfix — order matters!
int x = 5;
System.out.println(x++); // prints 5, THEN x becomes 6
System.out.println(++x); // x becomes 7, THEN prints 7

// String concatenation with +
System.out.println("Score: " + 100);          // "Score: 100"
System.out.println("1 + 2 = " + 1 + 2);      // "1 + 2 = 12" ← gotcha!
System.out.println("1 + 2 = " + (1 + 2));    // "1 + 2 = 3" ← correct`;

  codeLogical = `// Short-circuit AND — right side only evaluated if left is true
String s = null;
boolean safe = s != null && s.length() > 0; // no NullPointerException!

// Short-circuit OR — right side only evaluated if left is false
boolean hasAccess = isAdmin || hasPermission("READ");

// Ternary operator
int score = 75;
String grade = (score >= 90) ? "A" : (score >= 60) ? "B" : "C";

// Compound assignment operators
int n = 10;
n += 5;   // n = 15
n -= 3;   // n = 12
n *= 2;   // n = 24
n /= 4;   // n = 6
n %= 4;   // n = 2`;

  codeBitwiseUseCases = `// Permission flags — compact, fast
int READ  = 0b0001; // 1
int WRITE = 0b0010; // 2
int EXEC  = 0b0100; // 4

// Grant permissions
int userPerms = READ | WRITE;       // 0b0011 = 3

// Check permission
boolean canRead  = (userPerms & READ)  != 0; // true
boolean canExec  = (userPerms & EXEC)  != 0; // false

// Revoke permission
userPerms &= ~WRITE;                // removes WRITE bit
boolean canWrite = (userPerms & WRITE) != 0; // false

// Power of 2 using left shift (faster than Math.pow)
int pow2 = 1 << 10;   // 1024 (2^10)

// Fast even/odd check
boolean isEven = (n & 1) == 0;     // true if n is even`;
}
