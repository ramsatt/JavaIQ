import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-encapsulation',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout
      title="Encapsulation"
      subtitle="Protect your data. Learn how access modifiers, getters/setters, and information hiding create robust, maintainable Java classes."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #059669, #34d399)">

      <section class="section">
        <h2 class="section-heading">
          <app-icon name="book-open" [size]="28" css="icon-emerald" /> What is Encapsulation?
        </h2>
        <div class="prose">
          <p>
            <strong>Encapsulation</strong> is the bundling of data (fields) and the methods that operate on that data into a single unit (class), while restricting direct access to internal details. It's like a capsule — the contents are protected.
          </p>
          <ul>
            <li><strong>private fields:</strong> Data is hidden from outside classes.</li>
            <li><strong>public getters/setters:</strong> Controlled access with validation logic.</li>
            <li><strong>Immutability:</strong> Only provide getters — no setters — for read-only objects.</li>
          </ul>
          <h4 class="sub-heading">Access Modifiers Overview</h4>
          <app-code-block [code]="codeModifiers" />
        </div>
      </section>

      <!-- Interactive Visualizer -->
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title">
            <app-icon name="play" [size]="22" css="icon-emerald" /> Access Control Visualizer
          </h3>

          <div class="access-demo">
            <div class="class-box">
              <span class="class-label">BankAccount</span>
              <div class="fields-container">
                @for (f of fields(); track f.name) {
                  <div class="field-item" [class]="f.modifier" [class.targeted]="f.name === targetField()">
                    <span class="modifier-badge">{{ f.modifier }}</span>
                    <span class="field-name">{{ f.name }}: {{ f.type }}</span>
                    <span class="field-icon">{{ f.icon }}</span>
                  </div>
                }
              </div>
              <div class="methods-container">
                @for (m of methods(); track m.name) {
                  <div class="method-item" [class.active]="m.name === activeMethod()">
                    <span class="modifier-badge public">public</span>
                    <span class="field-name">{{ m.name }}()</span>
                  </div>
                }
              </div>
            </div>

            <div class="caller-box" [class.denied]="accessDenied()" [class.allowed]="accessAllowed()">
              <span class="caller-label">External Code</span>
              <span class="caller-action">{{ callerAction() }}</span>
            </div>
          </div>

          <div class="viz-status">{{ status() }}</div>

          <div class="viz-controls">
            <button (click)="tryDirectAccess()" [disabled]="isAnimating()" class="btn btn-red">
              <app-icon name="shield" [size]="16" /> Try Direct Access
            </button>
            <button (click)="tryGetterSetter()" [disabled]="isAnimating()" class="btn btn-emerald">
              <app-icon name="check-circle" [size]="16" /> Use Getter/Setter
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
          <app-icon name="code" [size]="28" css="icon-teal" /> Encapsulation Patterns
        </h2>
        <div class="op-grid">
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-teal" /> Basic Encapsulation</h3>
            <p class="op-desc">Private fields + public getters/setters with validation.</p>
            <app-code-block [code]="codeBasic" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-teal" /> Immutable Objects</h3>
            <p class="op-desc">No setters, final fields — object state cannot change after creation.</p>
            <app-code-block [code]="codeImmutable" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-teal" /> Defensive Copying</h3>
            <p class="op-desc">Prevent mutation of internal collections by returning copies.</p>
            <app-code-block [code]="codeDefensive" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-teal" /> Records (Java 16+)</h3>
            <p class="op-desc">Compact syntax for immutable data carriers with built-in encapsulation.</p>
            <app-code-block [code]="codeRecord" />
          </div>
        </div>
      </section>

      <!-- Use Cases -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="briefcase" [size]="28" css="icon-emerald" /> Real-Time Use Cases
        </h2>
        <div class="use-cases">
          <div class="use-case emerald">
            <div class="use-num emerald-bg">1</div>
            <div>
              <h4 class="use-title">Banking Systems</h4>
              <p class="use-desc">Account balance is <code>private</code>. Deposits/withdrawals go through methods with validation — preventing negative balances or overdrafts.</p>
            </div>
          </div>
          <div class="use-case blue">
            <div class="use-num blue-bg">2</div>
            <div>
              <h4 class="use-title">JPA Entity Classes</h4>
              <p class="use-desc">Fields are <code>private</code> with getters/setters. Hibernate accesses them via reflection, but your application code can't break invariants.</p>
            </div>
          </div>
          <div class="use-case purple">
            <div class="use-num purple-bg">3</div>
            <div>
              <h4 class="use-title">Thread-Safe Wrappers</h4>
              <p class="use-desc"><code>Collections.synchronizedList()</code> wraps an <code>ArrayList</code> — the internal list is private, and all access is synchronized through public methods.</p>
            </div>
          </div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; }
    .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; }
    .icon-emerald { color: #059669; }
    .icon-teal { color: #0d9488; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; }
    .prose p { margin: 0 0 14px; }
    .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; }
    .prose li { margin-bottom: 8px; }
    .prose strong { color: #0f172a; font-weight: 700; }
    .prose code { background: #f1f5f9; padding: 2px 7px; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #059669; }
    .sub-heading { font-size: 1rem; font-weight: 700; color: #0f172a; margin: 24px 0 8px; }

    .viz-card { background: #fff; border-radius: 18px; border: 1px solid #e2e8f0; box-shadow: 0 4px 16px rgba(0,0,0,0.05); padding: 28px 24px; }
    .viz-title { display: flex; align-items: center; gap: 10px; font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0 0 24px; }

    .access-demo { display: flex; flex-direction: column; align-items: center; gap: 16px; margin-bottom: 20px; }
    .class-box { background: #f0fdf4; border: 2px solid #86efac; border-radius: 16px; padding: 20px; width: 100%; max-width: 360px; }
    .class-label { display: block; font-size: 0.95rem; font-weight: 800; color: #0f172a; font-family: 'JetBrains Mono', monospace; text-align: center; margin-bottom: 12px; }
    .fields-container, .methods-container { display: flex; flex-direction: column; gap: 6px; margin-bottom: 10px; }
    .field-item, .method-item { display: flex; align-items: center; gap: 8px; padding: 6px 10px; background: #fff; border-radius: 8px; border: 1px solid #e2e8f0; font-size: 0.7rem; font-family: 'JetBrains Mono', monospace; transition: all 0.3s; }
    .field-item.targeted { border-color: #dc2626; background: #fef2f2; }
    .method-item.active { border-color: #059669; background: #ecfdf5; }
    .modifier-badge { font-size: 0.55rem; font-weight: 700; padding: 2px 6px; border-radius: 4px; text-transform: uppercase; }
    .modifier-badge.public { background: #dcfce7; color: #166534; }
    .field-item.private .modifier-badge { background: #fee2e2; color: #991b1b; }
    .field-item.protected .modifier-badge { background: #fef3c7; color: #92400e; }
    .field-name { flex: 1; color: #334155; }
    .field-icon { font-size: 0.8rem; }

    .caller-box { background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 12px; padding: 16px 20px; text-align: center; width: 100%; max-width: 360px; transition: all 0.3s; }
    .caller-box.denied { border-color: #dc2626; background: #fef2f2; }
    .caller-box.allowed { border-color: #059669; background: #ecfdf5; }
    .caller-label { display: block; font-size: 0.58rem; font-weight: 700; letter-spacing: 0.1em; color: #94a3b8; margin-bottom: 6px; }
    .caller-action { font-size: 0.72rem; font-family: 'JetBrains Mono', monospace; color: #334155; }

    .viz-status { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px 16px; text-align: center; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; color: #334155; margin-bottom: 20px; }
    .viz-controls { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; }
    .btn { display: inline-flex; align-items: center; gap: 7px; padding: 10px 18px; border-radius: 10px; font-size: 0.78rem; font-weight: 600; border: none; cursor: pointer; transition: all 0.2s; }
    .btn:disabled { opacity: 0.5; cursor: not-allowed; }
    .btn-emerald { background: #059669; color: #fff; }
    .btn-emerald:hover:not(:disabled) { background: #047857; }
    .btn-red { background: #dc2626; color: #fff; }
    .btn-red:hover:not(:disabled) { background: #b91c1c; }
    .btn-gray { background: #e2e8f0; color: #334155; }
    .btn-gray:hover:not(:disabled) { background: #cbd5e1; }

    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; }
    .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,0.04); }
    .op-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.06); }
    .op-title { display: flex; align-items: center; gap: 8px; font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
    .op-desc { font-size: 0.78rem; color: #64748b; line-height: 1.55; margin: 0; }

    .use-cases { display: flex; flex-direction: column; gap: 12px; }
    .use-case { display: flex; gap: 16px; padding: 20px; border-radius: 14px; border: 1px solid; }
    .use-case.emerald { background: #ecfdf5; border-color: #86efac; }
    .use-case.blue { background: #eff6ff; border-color: #bfdbfe; }
    .use-case.purple { background: #faf5ff; border-color: #d8b4fe; }
    .use-num { width: 34px; height: 34px; min-width: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 0.78rem; font-weight: 800; }
    .emerald-bg { background: #059669; }
    .blue-bg { background: #3b82f6; }
    .purple-bg { background: #8b5cf6; }
    .use-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 4px; }
    .use-desc { font-size: 0.78rem; line-height: 1.55; margin: 0; color: #334155; }
    .use-desc code { background: rgba(0,0,0,0.06); padding: 1px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; }
  `
})
export class EncapsulationComponent {
  fields = signal([
    { name: 'balance', type: 'double', modifier: 'private', icon: '🔒' },
    { name: 'accountId', type: 'String', modifier: 'private', icon: '🔒' },
    { name: 'ownerName', type: 'String', modifier: 'protected', icon: '🔑' }
  ]);
  methods = signal([
    { name: 'getBalance' }, { name: 'deposit' }, { name: 'withdraw' }
  ]);
  targetField = signal('');
  activeMethod = signal('');
  callerAction = signal('account.???');
  accessDenied = signal(false);
  accessAllowed = signal(false);
  status = signal('Fields are private (🔒). External code must use public methods.');
  isAnimating = signal(false);

  codeModifiers = `// Access Modifier Visibility
// ┌───────────┬───────┬─────────┬──────────┬───────┐
// │ Modifier  │ Class │ Package │ Subclass │ World │
// ├───────────┼───────┼─────────┼──────────┼───────┤
// │ private   │  ✅   │   ❌    │    ❌    │  ❌   │
// │ default   │  ✅   │   ✅    │    ❌    │  ❌   │
// │ protected │  ✅   │   ✅    │    ✅    │  ❌   │
// │ public    │  ✅   │   ✅    │    ✅    │  ✅   │
// └───────────┴───────┴─────────┴──────────┴───────┘`;

  codeBasic = `public class BankAccount {
    private double balance; // hidden!

    public double getBalance() {
        return balance;
    }

    public void deposit(double amount) {
        if (amount <= 0)
            throw new IllegalArgumentException(
                "Amount must be positive");
        this.balance += amount;
    }
}`;

  codeImmutable = `public final class Money {
    private final double amount;
    private final String currency;

    public Money(double amount, String currency) {
        this.amount = amount;
        this.currency = currency;
    }

    // Only getters — no setters!
    public double getAmount() { return amount; }
    public String getCurrency() { return currency; }
}`;

  codeDefensive = `public class Team {
    private final List<String> members;

    public Team(List<String> members) {
        // Defensive copy on input
        this.members = new ArrayList<>(members);
    }

    public List<String> getMembers() {
        // Defensive copy on output
        return Collections.unmodifiableList(members);
    }
}`;

  codeRecord = `// Java 16+ Record — encapsulation built in!
public record Point(int x, int y) {
    // Compiler generates:
    // - private final fields
    // - public getters x(), y()
    // - equals(), hashCode(), toString()
}

Point p = new Point(3, 5);
p.x(); // 3 — getter, not field access`;

  private sleep(ms: number): Promise<void> {
    return new Promise(r => setTimeout(r, ms));
  }

  async tryDirectAccess() {
    if (this.isAnimating()) return;
    this.isAnimating.set(true);
    this.accessAllowed.set(false);
    this.activeMethod.set('');

    this.callerAction.set('account.balance = 1000000;');
    this.targetField.set('balance');
    this.status.set('Trying to access private field directly...');
    await this.sleep(1200);

    this.accessDenied.set(true);
    this.status.set('❌ COMPILE ERROR: balance has private access in BankAccount');
    await this.sleep(1500);

    this.callerAction.set('account.accountId = "HACK";');
    this.targetField.set('accountId');
    this.status.set('Trying another private field...');
    await this.sleep(1200);

    this.status.set('❌ BLOCKED! Private fields cannot be accessed from outside the class.');
    this.isAnimating.set(false);
  }

  async tryGetterSetter() {
    if (this.isAnimating()) return;
    this.isAnimating.set(true);
    this.accessDenied.set(false);
    this.targetField.set('');

    this.callerAction.set('account.deposit(500.0);');
    this.activeMethod.set('deposit');
    this.status.set('Calling public deposit() method...');
    await this.sleep(1200);

    this.accessAllowed.set(true);
    this.status.set('✅ deposit() validates amount > 0, then updates balance safely.');
    await this.sleep(1200);

    this.callerAction.set('account.getBalance();');
    this.activeMethod.set('getBalance');
    this.status.set('✅ getBalance() returns the value — read-only access to private data!');
    await this.sleep(1200);

    this.status.set('Encapsulation ensures data integrity through controlled access! ✅');
    this.isAnimating.set(false);
  }

  resetDemo() {
    this.targetField.set('');
    this.activeMethod.set('');
    this.callerAction.set('account.???');
    this.accessDenied.set(false);
    this.accessAllowed.set(false);
    this.status.set('Fields are private (🔒). External code must use public methods.');
    this.isAnimating.set(false);
  }
}
