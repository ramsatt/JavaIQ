import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-dp-flyweight',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="Flyweight" subtitle="Share fine-grained objects to reduce memory. Separate intrinsic (shared) state from extrinsic (context) state." badge="DESIGN PATTERNS" gradient="linear-gradient(135deg, #4338ca, #818cf8)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-indigo" /> What is Flyweight?</h2>
        <div class="prose">
          <p>The <strong>Flyweight</strong> pattern reduces memory usage by sharing common state across many fine-grained objects. Split object state into <em>intrinsic</em> (shared, immutable) and <em>extrinsic</em> (context-specific, passed in).</p>
          <p>Classic use cases: rendering thousands of characters in a text editor, particles in a game engine, tree objects in a forest simulation.</p>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-purple" /> Implementations</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Flyweight Interface</h3><app-code-block [code]="codeFlyweight" /></div>
          <div class="op-card"><h3 class="op-title">Concrete Flyweight</h3><app-code-block [code]="codeConcrete" /></div>
          <div class="op-card"><h3 class="op-title">Flyweight Factory</h3><app-code-block [code]="codeFactory" /></div>
          <div class="op-card"><h3 class="op-title">Real-World: String Pool</h3><app-code-block [code]="codeReal" /></div>
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
export class DpFlyweightComponent {
  codeIntro = `// Without Flyweight: 1 million tree objects × 1 KB each = 1 GB RAM
// With Flyweight:    shared TreeType (color, texture) + lightweight position

// Intrinsic state  = shared, immutable (stored in flyweight)
// Extrinsic state  = unique per instance (passed by client)`;

  codeFlyweight = `// Flyweight interface
interface CharacterFlyweight {
    void render(int x, int y, String color); // x,y,color = extrinsic
}`;

  codeConcrete = `// Concrete Flyweight — stores intrinsic state only
class Character implements CharacterFlyweight {
    private final char symbol;   // intrinsic: shared
    private final String font;   // intrinsic: shared
    private final int size;      // intrinsic: shared

    Character(char symbol, String font, int size) {
        this.symbol = symbol;
        this.font   = font;
        this.size   = size;
    }

    @Override
    public void render(int x, int y, String color) {
        // extrinsic state (x, y, color) passed in at render time
        System.out.printf("'%c' [%s %dpx] at (%d,%d) in %s%n",
            symbol, font, size, x, y, color);
    }
}`;

  codeFactory = `// Flyweight Factory — cache and reuse instances
class CharacterFactory {
    private final Map<String, CharacterFlyweight> pool = new HashMap<>();

    public CharacterFlyweight get(char symbol, String font, int size) {
        String key = symbol + font + size;
        return pool.computeIfAbsent(key,
            k -> new Character(symbol, font, size));
    }

    public int poolSize() { return pool.size(); }
}

// Client — only stores extrinsic state
CharacterFactory factory = new CharacterFactory();
// Render 10,000 'A' chars — only ONE Character object created
for (int i = 0; i < 10_000; i++) {
    factory.get('A', "Arial", 12).render(i, 0, "black");
}
System.out.println(factory.poolSize()); // 1`;

  codeReal = `// Java's built-in Flyweight examples:

// 1. String Pool
String a = "hello";
String b = "hello";
System.out.println(a == b); // true — same object from pool

// 2. Integer Cache (-128 to 127)
Integer x = 127;
Integer y = 127;
System.out.println(x == y); // true — cached

Integer p = 200;
Integer q = 200;
System.out.println(p == q); // false — not cached

// 3. Boolean.TRUE / Boolean.FALSE
// 4. Enum constants (each enum value is a singleton flyweight)`;
}
