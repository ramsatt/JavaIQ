import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-comparable-comparator',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout
      title="Comparable &amp; Comparator"
      subtitle="Define natural ordering with Comparable and flexible custom ordering with Comparator. Learn chaining, reversing, and sorting with the Streams API."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #4c1d95, #8b5cf6)">

      <section class="section">
        <h2 class="section-heading">
          <app-icon name="arrow-up-down" [size]="28" css="icon-violet" /> Comparable — Natural Ordering
        </h2>
        <div class="topic-hero-container">
          <img src="/assets/images/topics/comparable-comparator.png" alt="Comparable vs Comparator Visualized" class="topic-hero-image" />
        </div>
        <div class="prose">
          <p>
            <strong>Comparable&lt;T&gt;</strong> lets a class define its own <em>natural ordering</em> by implementing <code>compareTo(T other)</code>. The method must return:
          </p>
          <ul>
            <li><strong>Negative</strong> — <code>this</code> is less than <code>other</code></li>
            <li><strong>Zero</strong> — they are equal</li>
            <li><strong>Positive</strong> — <code>this</code> is greater than <code>other</code></li>
          </ul>
          <p>
            <code>Collections.sort()</code>, <code>Arrays.sort()</code>, <code>TreeSet</code>, and <code>TreeMap</code> all rely on this ordering automatically.
          </p>
          <app-code-block [code]="code1" />
        </div>
      </section>

      <section class="section">
        <h2 class="section-heading">
          <app-icon name="sliders" [size]="28" css="icon-violet" /> Comparator — Custom Ordering
        </h2>
        <div class="prose">
          <p>
            <strong>Comparator&lt;T&gt;</strong> is an external ordering strategy — it lives outside the class being sorted and can define multiple different orderings. The factory methods <code>Comparator.comparing()</code>, <code>.thenComparing()</code>, and <code>.reversed()</code> allow elegant chaining without anonymous classes.
          </p>
          <app-code-block [code]="code2" />
        </div>
      </section>

      <section class="section">
        <h2 class="section-heading">
          <app-icon name="filter" [size]="28" css="icon-violet" /> Sorting with Streams
        </h2>
        <div class="prose">
          <p>
            <code>.sorted()</code> on a stream uses the natural order (requires <code>Comparable</code>). Pass a <code>Comparator</code> to <code>.sorted(comparator)</code> for custom ordering. The original collection is <strong>never</strong> mutated.
          </p>
          <app-code-block [code]="code3" />
        </div>
      </section>

      <section class="section">
        <h2 class="section-heading">
          <app-icon name="code" [size]="28" css="icon-violet" /> Lambda Comparators
        </h2>
        <div class="prose">
          <p>
            Because <code>Comparator&lt;T&gt;</code> is a <strong>functional interface</strong>, you can express it as a lambda or method reference — no anonymous class boilerplate needed.
          </p>
          <app-code-block [code]="code4" />
        </div>
      </section>

      <section class="section">
        <h2 class="section-heading">
          <app-icon name="layers" [size]="28" css="icon-violet" /> TreeSet &amp; TreeMap Ordering
        </h2>
        <div class="prose">
          <p>
            <code>TreeSet</code> and <code>TreeMap</code> keep elements sorted at all times. They use <code>compareTo()</code> if no <code>Comparator</code> is provided. Always pass a <code>Comparator</code> to the constructor when sorting objects that do not implement <code>Comparable</code>.
          </p>
          <app-code-block [code]="code5" />
        </div>
      </section>

      <section class="section">
        <h2 class="section-heading">
          <app-icon name="briefcase" [size]="28" css="icon-violet" /> Interview Tips
        </h2>
        <div class="tips-list">
          <div class="tip-card">
            <div class="tip-num">1</div>
            <div>
              <h4 class="tip-title">Comparable vs Comparator</h4>
              <p class="tip-desc"><code>Comparable</code> defines one natural ordering inside the class (modify the class). <code>Comparator</code> defines ordering outside the class — you can have as many as you like without touching the original class.</p>
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-num">2</div>
            <div>
              <h4 class="tip-title">compareTo contract must be consistent with equals</h4>
              <p class="tip-desc">If <code>a.compareTo(b) == 0</code> then <code>a.equals(b)</code> should be <code>true</code>. Violating this causes surprising behaviour in <code>TreeSet</code> and <code>TreeMap</code> (they use <code>compareTo</code>, not <code>equals</code>, to check membership).</p>
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-num">3</div>
            <div>
              <h4 class="tip-title">Comparator.comparing chains</h4>
              <p class="tip-desc">Use <code>Comparator.comparing(Employee::getDept).thenComparing(Employee::getSalary).reversed()</code> instead of writing a custom class. It is type-safe, readable, and composed without boilerplate.</p>
            </div>
          </div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; }
    .topic-hero-container { text-align: center; margin: 24px 0; }
    .topic-hero-image { width: 100%; max-width: 650px; height: auto; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.12); border: 1px solid #D6DDD2; }
    .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #1B1B1B; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #D6DDD2; }
    .icon-violet { color: #8b5cf6; }
    .prose { font-size: 0.9rem; color: #52665A; line-height: 1.75; }
    .prose p { margin: 0 0 14px; }
    .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; }
    .prose li { margin-bottom: 8px; }
    .prose strong { color: #1B1B1B; font-weight: 700; }
    .prose code { background: #f5f3ff; padding: 2px 7px; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #4c1d95; }
    .tips-list { display: flex; flex-direction: column; gap: 12px; }
    .tip-card { display: flex; gap: 16px; padding: 20px 24px; border-radius: 16px; border: 1px solid #D6DDD2; background: #fff; }
    .tip-num { width: 36px; height: 36px; min-width: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; background: #8b5cf6; color: #fff; font-size: 0.85rem; font-weight: 800; }
    .tip-title { font-size: 0.95rem; font-weight: 700; color: #1B1B1B; margin: 0 0 6px; }
    .tip-desc { font-size: 0.82rem; color: #52665A; line-height: 1.55; margin: 0; }
    .tip-desc code { background: #f5f3ff; padding: 2px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: #4c1d95; }
  `
})
export class ComparableComparatorComponent {
  code1 = `// Employee with natural ordering by salary
public class Employee implements Comparable<Employee> {
    private final String name;
    private final double salary;
    private final String dept;

    public Employee(String name, double salary, String dept) {
        this.name = name; this.salary = salary; this.dept = dept;
    }
    public String getName()   { return name; }
    public double getSalary() { return salary; }
    public String getDept()   { return dept; }

    @Override
    public int compareTo(Employee other) {
        // negative → this < other, 0 → equal, positive → this > other
        return Double.compare(this.salary, other.salary);
    }
}

List<Employee> employees = new ArrayList<>(List.of(
    new Employee("Alice", 90_000, "Eng"),
    new Employee("Bob",   75_000, "HR"),
    new Employee("Carol", 95_000, "Eng")
));

Collections.sort(employees); // uses compareTo — sorted by salary ascending
// [Bob(75k), Alice(90k), Carol(95k)]

TreeSet<Employee> set = new TreeSet<>(employees); // keeps sorted order automatically`;

  code2 = `// Multiple Comparators — no changes to Employee class needed
Comparator<Employee> byName =
    Comparator.comparing(Employee::getName);

Comparator<Employee> bySalaryDesc =
    Comparator.comparing(Employee::getSalary).reversed();

Comparator<Employee> byDeptThenSalary =
    Comparator.comparing(Employee::getDept)
              .thenComparing(Employee::getSalary);

Comparator<Employee> byDeptThenSalaryDesc =
    Comparator.comparing(Employee::getDept)
              .thenComparing(Employee::getSalary)
              .reversed();

// Sort employees: Engineering first, then by salary desc within dept
employees.sort(
    Comparator.comparing(Employee::getDept)
              .thenComparing(Comparator.comparing(Employee::getSalary).reversed())
);

// Null-safe comparator
Comparator<String> nullSafe =
    Comparator.nullsFirst(Comparator.naturalOrder());`;

  code3 = `List<Employee> employees = List.of(
    new Employee("Alice", 90_000, "Eng"),
    new Employee("Bob",   75_000, "HR"),
    new Employee("Carol", 95_000, "Eng"),
    new Employee("Dave",  80_000, "HR")
);

// Natural order (requires Comparable)
List<Employee> bySalary = employees.stream()
    .sorted()
    .toList();

// Custom: sort by name ascending
List<Employee> byName = employees.stream()
    .sorted(Comparator.comparing(Employee::getName))
    .toList();

// Custom: sort by dept, then salary descending
List<Employee> complex = employees.stream()
    .sorted(Comparator.comparing(Employee::getDept)
                      .thenComparing(Comparator.comparing(Employee::getSalary).reversed()))
    .toList();

// Top earner
Optional<Employee> topEarner = employees.stream()
    .max(Comparator.comparing(Employee::getSalary));`;

  code4 = `// Lambda comparator — verbose form
Comparator<Employee> byName1 =
    (a, b) -> a.getName().compareTo(b.getName());

// Lambda comparator — using Integer.compare for numeric fields
Comparator<Employee> bySalary1 =
    (a, b) -> Double.compare(a.getSalary(), b.getSalary());

// Method reference comparator (cleanest)
Comparator<Employee> byName2 = Comparator.comparing(Employee::getName);

// Chained method references
Comparator<Employee> byDeptThenName =
    Comparator.comparing(Employee::getDept)
              .thenComparing(Employee::getName);

// Sort a list with a lambda
employees.sort((a, b) -> a.getName().compareTo(b.getName()));

// Arrays.sort with lambda (works for arrays too)
Employee[] arr = employees.toArray(new Employee[0]);
Arrays.sort(arr, Comparator.comparing(Employee::getSalary).reversed());`;

  code5 = `// TreeSet — sorted by natural order (compareTo)
TreeSet<Employee> byNaturalOrder = new TreeSet<>(employees);
// iterates in ascending salary order

// TreeSet — sorted by name using a Comparator
TreeSet<Employee> byName = new TreeSet<>(
    Comparator.comparing(Employee::getName)
);
byName.addAll(employees);

// TreeMap — keys kept sorted
TreeMap<String, Employee> byDeptMap = new TreeMap<>();
employees.forEach(e -> byDeptMap.put(e.getDept() + "_" + e.getName(), e));
// iterates alphabetically by key

// TreeMap with custom Comparator on key
TreeMap<Employee, String> empMap = new TreeMap<>(
    Comparator.comparing(Employee::getSalary)
);
employees.forEach(e -> empMap.put(e, e.getDept()));
// first entry = lowest salary
Employee lowestPaid = empMap.firstKey();
// last entry = highest salary
Employee highestPaid = empMap.lastKey();`;
}
