import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-enums',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout
      title="Enumerations (enum)"
      subtitle="Replace magic constants with type-safe, self-documenting enums. Learn enum fields, methods, EnumSet, EnumMap, and the singleton pattern."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #7c2d12, #f97316)">

      <!-- Section 1: What Is an Enum? -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="book-open" [size]="28" css="icon-orange" /> What Is an Enum?
        </h2>
        <div class="prose">
          <p>
            An <code>enum</code> is a special class whose instances are a <strong>fixed set of named constants</strong>.
            It replaces fragile <code>public static final int</code> constants with something the compiler can validate.
          </p>
          <ul>
            <li>All enums implicitly extend <code>java.lang.Enum</code> — you cannot extend anything else.</li>
            <li><code>values()</code> returns all constants as an array; <code>valueOf("NAME")</code> returns by name.</li>
            <li><code>name()</code> returns the constant's identifier string; <code>ordinal()</code> returns its position (0-based).</li>
            <li>Enums are implicitly <code>public static final</code> — they are singletons.</li>
          </ul>
          <app-code-block [code]="codeBasic" />
        </div>
      </section>

      <!-- Section 2: Interactive Planet Explorer -->
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title">
            <app-icon name="play" [size]="22" css="icon-orange" /> Planet Enum Explorer
          </h3>
          <p class="viz-desc">Click a planet to see its enum fields and computed surface weight. This is the classic Java enum example from the official docs.</p>

          <div class="planet-grid">
            @for (p of planets; track p.name) {
              <button class="planet-card" [class.planet-active]="selectedPlanet()?.name === p.name" (click)="selectPlanet(p)">
                <span class="planet-icon">{{ p.icon }}</span>
                <span class="planet-name">{{ p.name }}</span>
              </button>
            }
          </div>

          @if (selectedPlanet(); as planet) {
            <div class="planet-detail">
              <div class="planet-detail-header">
                <span class="planet-icon-lg">{{ planet.icon }}</span>
                <div>
                  <div class="planet-detail-name">{{ planet.name }}</div>
                  <div class="planet-detail-ordinal">ordinal = {{ planet.ordinal }}</div>
                </div>
              </div>
              <div class="planet-fields">
                <div class="field-row">
                  <span class="field-key">mass</span>
                  <span class="field-val">{{ planet.mass }}</span>
                </div>
                <div class="field-row">
                  <span class="field-key">radius</span>
                  <span class="field-val">{{ planet.radius }}</span>
                </div>
                <div class="field-row">
                  <span class="field-key">surfaceGravity()</span>
                  <span class="field-val accent">{{ planet.gravity }} m/s²</span>
                </div>
                <div class="field-row">
                  <span class="field-key">weight(75kg person)</span>
                  <span class="field-val accent">{{ planet.weight75 }} N</span>
                </div>
              </div>
            </div>
          }
        </div>
      </section>

      <!-- Section 3: Enums with Fields & Methods -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="code" [size]="28" css="icon-orange" /> Enums with Fields & Methods
        </h2>
        <div class="prose">
          <p>
            Enums can have <strong>constructors, fields, and methods</strong> — making each constant a rich object.
            The constructor is always <code>private</code> (implicitly or explicitly).
          </p>
          <app-code-block [code]="codeFields" />
        </div>
      </section>

      <!-- Section 4: Enums in switch -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="git-branch" [size]="28" css="icon-orange" /> Enums in switch
        </h2>
        <div class="prose">
          <p>Enums work perfectly with both classic <code>switch</code> statements and modern switch expressions. Switch expressions with sealed-like enums are exhaustive — the compiler catches missing cases.</p>
          <app-code-block [code]="codeSwitch" />
        </div>
      </section>

      <!-- Section 5: EnumSet & EnumMap -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="database" [size]="28" css="icon-orange" /> EnumSet & EnumMap
        </h2>
        <div class="prose">
          <p>
            These are specialised, high-performance collection types that only work with enums. They are dramatically
            faster than <code>HashSet</code> and <code>HashMap</code> for enum keys because they use compact bit-vector and array implementations.
          </p>
          <ul>
            <li><strong>EnumSet</strong>: Backed by a single <code>long</code> bitmask — O(1) for all operations.</li>
            <li><strong>EnumMap</strong>: Array-indexed by ordinal — no hashing, no collision.</li>
          </ul>
          <app-code-block [code]="codeEnumCollections" />
        </div>
      </section>

      <!-- Section 6: Singleton Pattern via Enum -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="shield" [size]="28" css="icon-orange" /> Singleton via Enum (Best Practice)
        </h2>
        <div class="prose">
          <p>
            Joshua Bloch (Effective Java) recommends enum for singletons. It's thread-safe, serialization-safe,
            and protected against reflection attacks — all for free.
          </p>
          <app-code-block [code]="codeSingleton" />
        </div>
      </section>

      <!-- Section 7: Interview Tips -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="briefcase" [size]="28" css="icon-orange" /> Interview Tips
        </h2>
        <div class="tips-list">
          <div class="tip-card">
            <div class="tip-num">1</div>
            <div>
              <h4 class="tip-title">enum vs static final int Constants</h4>
              <p class="tip-desc"><code>static final int STATUS_ACTIVE = 1</code> is error-prone — any <code>int</code> can be passed. An <code>enum Status &#123; ACTIVE &#125;</code> forces valid values at compile time. Enums win every time.</p>
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-num">2</div>
            <div>
              <h4 class="tip-title">ordinal() Is Fragile — Avoid It in Persistence</h4>
              <p class="tip-desc">If you store <code>ordinal()</code> in a database and later reorder the enum constants, all stored values become wrong. Persist <code>name()</code> or add an explicit code field instead.</p>
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-num">3</div>
            <div>
              <h4 class="tip-title">Abstract Methods per Constant</h4>
              <p class="tip-desc">Each constant can override an abstract method declared in the enum body. This is the <strong>strategy pattern</strong> built directly into the enum — no external classes needed.</p>
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
    .icon-orange { color: #f97316; }

    .prose { font-size: 0.9rem; color: #52665A; line-height: 1.75; }
    .prose p { margin: 0 0 14px; }
    .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; }
    .prose li { margin-bottom: 8px; }
    .prose strong { color: #1B1B1B; font-weight: 700; }
    .prose code {
      background: #ffedd5; padding: 2px 7px; border-radius: 5px;
      font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #c2410c;
    }

    /* Visualizer */
    .viz-card {
      background: #fff; border-radius: 20px; border: 1px solid #D6DDD2;
      box-shadow: 0 4px 16px rgba(0,0,0,0.04); padding: 28px 24px;
    }
    .viz-title { display: flex; align-items: center; gap: 10px; font-size: 1.15rem; font-weight: 700; color: #1B1B1B; margin: 0 0 8px; }
    .viz-desc { font-size: 0.85rem; color: #52665A; margin: 0 0 20px; line-height: 1.6; }

    .planet-grid { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 20px; }
    .planet-card {
      display: flex; flex-direction: column; align-items: center; gap: 4px;
      padding: 12px 16px; border-radius: 14px; border: 1px solid #e2e8f0;
      background: #fff; cursor: pointer; transition: all 0.2s; min-width: 80px;
    }
    .planet-card:hover { border-color: #f97316; box-shadow: 0 4px 12px rgba(249,115,22,0.1); }
    .planet-card.planet-active { background: #fff7ed; border-color: #f97316; box-shadow: 0 4px 16px rgba(249,115,22,0.15); }
    .planet-icon { font-size: 1.6rem; }
    .planet-name { font-size: 0.72rem; font-weight: 800; color: #1B1B1B; }

    .planet-detail {
      background: #fff7ed; border: 1px solid #fed7aa; border-radius: 16px; padding: 20px;
    }
    .planet-detail-header { display: flex; align-items: center; gap: 14px; margin-bottom: 16px; }
    .planet-icon-lg { font-size: 2.4rem; }
    .planet-detail-name { font-size: 1.1rem; font-weight: 800; color: #1B1B1B; }
    .planet-detail-ordinal { font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: #f97316; font-weight: 700; }
    .planet-fields { display: flex; flex-direction: column; gap: 8px; }
    .field-row { display: flex; justify-content: space-between; align-items: center; padding: 8px 12px; background: #fff; border-radius: 10px; border: 1px solid #fed7aa; }
    .field-key { font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; color: #64748b; font-weight: 600; }
    .field-val { font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: #1B1B1B; font-weight: 700; }
    .field-val.accent { color: #f97316; }

    /* Tips */
    .tips-list { display: flex; flex-direction: column; gap: 12px; }
    .tip-card { display: flex; gap: 16px; padding: 20px 24px; border-radius: 16px; border: 1px solid #D6DDD2; background: #fff; transition: all 0.2s; }
    .tip-card:hover { border-color: #fed7aa; box-shadow: 0 4px 12px rgba(249,115,22,0.06); }
    .tip-num { width: 36px; height: 36px; min-width: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; background: #f97316; color: #fff; font-size: 0.85rem; font-weight: 800; }
    .tip-title { font-size: 0.95rem; font-weight: 700; color: #1B1B1B; margin: 0 0 6px; }
    .tip-desc { font-size: 0.82rem; color: #52665A; line-height: 1.55; margin: 0; }
    .tip-desc code { background: #ffedd5; padding: 2px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: #c2410c; }
  `
})
export class EnumsComponent {
  planets = [
    { name: 'MERCURY', icon: '🪐', ordinal: 0, mass: '3.303e+23 kg', radius: '2.4397e6 m', gravity: '3.70', weight75: '277.5' },
    { name: 'VENUS',   icon: '🌕', ordinal: 1, mass: '4.869e+24 kg', radius: '6.0518e6 m', gravity: '8.87', weight75: '665.0' },
    { name: 'EARTH',   icon: '🌍', ordinal: 2, mass: '5.976e+24 kg', radius: '6.3781e6 m', gravity: '9.81', weight75: '735.8' },
    { name: 'MARS',    icon: '🔴', ordinal: 3, mass: '6.421e+23 kg', radius: '3.3972e6 m', gravity: '3.71', weight75: '278.3' },
    { name: 'JUPITER', icon: '🟠', ordinal: 4, mass: '1.899e+27 kg', radius: '7.1492e7 m', gravity: '23.1', weight75: '1735' },
    { name: 'SATURN',  icon: '💛', ordinal: 5, mass: '5.685e+26 kg', radius: '6.0268e7 m', gravity: '9.00', weight75: '674.9' },
    { name: 'URANUS',  icon: '🩵', ordinal: 6, mass: '8.683e+25 kg', radius: '2.5559e7 m', gravity: '8.69', weight75: '651.6' },
    { name: 'NEPTUNE', icon: '🔵', ordinal: 7, mass: '1.024e+26 kg', radius: '2.4746e7 m', gravity: '11.0', weight75: '825.0' },
  ];

  selectedPlanet = signal<typeof this.planets[0] | null>(null);
  selectPlanet(p: typeof this.planets[0]) { this.selectedPlanet.set(p); }

  codeBasic = `// Basic enum declaration
public enum Day {
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
}

// Using an enum
Day today = Day.WEDNESDAY;
System.out.println(today);           // WEDNESDAY
System.out.println(today.name());    // WEDNESDAY
System.out.println(today.ordinal()); // 2 (zero-based position)

// Iterate all values
for (Day d : Day.values()) {
    System.out.println(d.ordinal() + ": " + d);
}

// Parse from String
Day day = Day.valueOf("FRIDAY");   // Day.FRIDAY
// Day bad = Day.valueOf("friday"); // IllegalArgumentException — case-sensitive`;

  codeFields = `public enum Planet {
    MERCURY(3.303e+23, 2.4397e6),
    VENUS  (4.869e+24, 6.0518e6),
    EARTH  (5.976e+24, 6.37814e6);

    private final double mass;      // in kg
    private final double radius;    // in metres
    static final double G = 6.67300E-11;

    // Constructor is always private (implicitly or explicitly)
    Planet(double mass, double radius) {
        this.mass = mass;
        this.radius = radius;
    }

    public double surfaceGravity() {
        return G * mass / (radius * radius);
    }

    public double surfaceWeight(double otherMass) {
        return otherMass * surfaceGravity();
    }
}

// Usage
double earthWeight = 75.0;
for (Planet p : Planet.values()) {
    System.out.printf("Your weight on %s is %6.2f%n",
        p, p.surfaceWeight(earthWeight));
}

// Abstract method per constant — strategy pattern in an enum
public enum Operation {
    PLUS  { public double apply(double x, double y) { return x + y; } },
    MINUS { public double apply(double x, double y) { return x - y; } },
    TIMES { public double apply(double x, double y) { return x * y; } };

    public abstract double apply(double x, double y);
}`;

  codeSwitch = `Day day = Day.SATURDAY;

// Classic switch
switch (day) {
    case MONDAY: case TUESDAY: case WEDNESDAY:
    case THURSDAY: case FRIDAY:
        System.out.println("Work day"); break;
    case SATURDAY: case SUNDAY:
        System.out.println("Weekend");  break;
}

// Switch expression (Java 14+) — exhaustive, no default needed!
String type = switch (day) {
    case MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY -> "Weekday";
    case SATURDAY, SUNDAY                             -> "Weekend";
};

// Compute something per enum value
int hoursOfWork = switch (day) {
    case SATURDAY, SUNDAY -> 0;
    case FRIDAY           -> 6;
    default               -> 8;
};`;

  codeEnumCollections = `import java.util.EnumSet;
import java.util.EnumMap;

// EnumSet — backed by a bit vector, extremely fast
EnumSet<Day> weekend   = EnumSet.of(Day.SATURDAY, Day.SUNDAY);
EnumSet<Day> weekdays  = EnumSet.complementOf(weekend);
EnumSet<Day> allDays   = EnumSet.allOf(Day.class);
EnumSet<Day> none      = EnumSet.noneOf(Day.class);

boolean isSat = weekend.contains(Day.SATURDAY); // true — O(1)

// EnumMap — array-indexed by ordinal, no hashing overhead
EnumMap<Day, String> schedule = new EnumMap<>(Day.class);
schedule.put(Day.MONDAY, "Stand-up @ 9am");
schedule.put(Day.FRIDAY, "Retrospective @ 4pm");

System.out.println(schedule.get(Day.MONDAY)); // "Stand-up @ 9am"

// vs HashMap — EnumMap is ~4x faster for enum keys
// Map<Day, String> slow = new HashMap<>();  // works but slower`;

  codeSingleton = `// Enum singleton — thread-safe, serialization-safe, reflection-safe
public enum AppConfig {
    INSTANCE;

    private final String dbUrl = "jdbc:postgresql://localhost/mydb";
    private int maxConnections = 10;

    public String getDbUrl() { return dbUrl; }
    public int getMaxConnections() { return maxConnections; }
    public void setMaxConnections(int n) { this.maxConnections = n; }
}

// Usage — guaranteed single instance
AppConfig config = AppConfig.INSTANCE;
System.out.println(config.getDbUrl());

// This is impossible — enum protects against it:
// Reflection: Constructor.newInstance() → throws IllegalArgumentException
// Serialization: readResolve() is called automatically — same instance returned`;
}
