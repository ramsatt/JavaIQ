import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-text-blocks',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout
      title="Text Blocks"
      subtitle="Write clean multi-line strings with Java 15+ text blocks. No more escape sequences for JSON, SQL, HTML, or XML embedded in Java code."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #064e3b, #10b981)">

      <section class="section">
        <h2 class="section-heading"><app-icon name="alert-triangle" [size]="28" css="icon-emerald" /> The Problem with String Concatenation</h2>
        <div class="prose">
          <p>Before text blocks, embedding multi-line content in Java strings was painful. Every newline required an explicit <code>\\n</code>, every quote needed escaping with <code>\\"</code>, and every line had to be joined with <code>+</code>. The result was brittle, unreadable code that was nearly impossible to diff or maintain.</p>
          <p>Consider embedding a simple JSON payload — the old way looked like this:</p>
          <app-code-block [code]="code1" />
        </div>
      </section>

      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-emerald" /> Text Block Syntax (Java 15+)</h2>
        <div class="prose">
          <p>Text blocks use a triple-quote delimiter <code>"""</code>. The opening <code>"""</code> must be followed by a newline — content begins on the next line. The closing <code>"""</code> position controls indentation stripping. Java automatically removes incidental whitespace.</p>
          <app-code-block [code]="code2" />
        </div>
      </section>

      <section class="section">
        <h2 class="section-heading"><app-icon name="align-left" [size]="28" css="icon-emerald" /> Indentation and Incidental Whitespace</h2>
        <div class="prose">
          <p>The compiler calculates the <strong>common leading whitespace</strong> across all non-blank lines (and optionally the closing <code>"""</code>). This is called <em>incidental whitespace</em> and it is stripped automatically. Moving the closing <code>"""</code> to the left adds intentional indentation to the result.</p>
          <app-code-block [code]="code3" />
        </div>
      </section>

      <section class="section">
        <h2 class="section-heading"><app-icon name="terminal" [size]="28" css="icon-emerald" /> Escape Sequences in Text Blocks</h2>
        <div class="prose">
          <p>Standard escape sequences like <code>\\n</code> and <code>\\t</code> still work inside text blocks. Java 15 introduced two new escape sequences specifically for text blocks: <code>\\&lt;line-terminator&gt;</code> (line continuation — suppresses the newline) and <code>\\s</code> (explicit space — prevents trailing whitespace trimming).</p>
          <app-code-block [code]="code4" />
        </div>
      </section>

      <section class="section">
        <h2 class="section-heading"><app-icon name="layers" [size]="28" css="icon-emerald" /> String Methods for Text Blocks</h2>
        <div class="prose">
          <p>Java added three <code>String</code> methods that complement text blocks. <code>indent(n)</code> adds or removes leading spaces. <code>stripIndent()</code> removes incidental whitespace programmatically. <code>translateEscapes()</code> processes escape sequences in strings obtained at runtime (e.g., from config files).</p>
          <app-code-block [code]="code5" />
        </div>
      </section>

      <section class="section">
        <h2 class="section-heading"><app-icon name="briefcase" [size]="28" css="icon-emerald" /> Interview Tips</h2>
        <div class="tips-list">
          <div class="tip-card">
            <div class="tip-num">1</div>
            <div>
              <h4 class="tip-title">Opening Triple-Quote Placement</h4>
              <p class="tip-desc">The opening <code>"""</code> must be on the same line as the assignment with content starting on the <em>next</em> line. Placing content on the same line as <code>"""</code> is a compile error. The closing <code>"""</code> can be on its own line or on the last content line.</p>
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-num">2</div>
            <div>
              <h4 class="tip-title">Incidental Whitespace Rules</h4>
              <p class="tip-desc">Common leading whitespace is determined by the <em>least-indented</em> non-blank content line, or by the closing <code>"""</code> if it is placed to the left of all content lines. This lets you control final indentation without touching content.</p>
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-num">3</div>
            <div>
              <h4 class="tip-title">Text Blocks Are Still String</h4>
              <p class="tip-desc">A text block is simply a <code>String</code> — same type, same methods, same pool interning rules. There is no new type. At compile time the text block is folded into a regular string literal, so there is zero runtime overhead.</p>
            </div>
          </div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; }
    .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #1B1B1B; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #D6DDD2; }
    .icon-emerald { color: #10b981; }
    .prose { font-size: 0.9rem; color: #52665A; line-height: 1.75; }
    .prose p { margin: 0 0 14px; }
    .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; }
    .prose li { margin-bottom: 8px; }
    .prose strong { color: #1B1B1B; font-weight: 700; }
    .prose em { font-style: italic; }
    .prose code { background: #ecfdf5; padding: 2px 7px; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #064e3b; }
    .tips-list { display: flex; flex-direction: column; gap: 12px; }
    .tip-card { display: flex; gap: 16px; padding: 20px 24px; border-radius: 16px; border: 1px solid #D6DDD2; background: #fff; }
    .tip-num { width: 36px; height: 36px; min-width: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; background: #10b981; color: #fff; font-size: 0.85rem; font-weight: 800; }
    .tip-title { font-size: 0.95rem; font-weight: 700; color: #1B1B1B; margin: 0 0 6px; }
    .tip-desc { font-size: 0.82rem; color: #52665A; line-height: 1.55; margin: 0; }
    .tip-desc code { background: #ecfdf5; padding: 2px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: #064e3b; }
  `
})
export class TextBlocksComponent {
  code1 = `// Java 14 and earlier — the painful old way
String json = "{\\n" +
    "  \\"name\\": \\"Alice\\",\\n" +
    "  \\"age\\": 30,\\n" +
    "  \\"roles\\": [\\"admin\\", \\"user\\"],\\n" +
    "  \\"active\\": true\\n" +
    "}";

// Embedded SQL was just as bad
String sql = "SELECT u.id, u.name, o.total\\n" +
    "FROM users u\\n" +
    "JOIN orders o ON u.id = o.user_id\\n" +
    "WHERE u.active = true\\n" +
    "ORDER BY o.total DESC\\n" +
    "LIMIT 10";

// Problems:
// - Easy to miss a \\n or misplace a quote
// - Hard to read and diff in version control
// - Copy-paste from IDE / DB tool breaks immediately`;

  code2 = `// Java 15+ — text block for JSON (much cleaner)
String json = """
        {
          "name": "Alice",
          "age": 30,
          "roles": ["admin", "user"],
          "active": true
        }
        """;

// SQL query — reads exactly like the real query
String sql = """
        SELECT u.id, u.name, o.total
        FROM   users u
        JOIN   orders o ON u.id = o.user_id
        WHERE  u.active = true
        ORDER BY o.total DESC
        LIMIT  10
        """;

// HTML snippet — no escaping needed
String html = """
        <div class="card">
          <h2>Hello, %s!</h2>
          <p>Welcome back.</p>
        </div>
        """.formatted("Alice");

System.out.println(json);
System.out.println(sql);
System.out.println(html);`;

  code3 = `// The closing """ position controls indentation

// Example 1: closing """ at same indent as content
// → common indent stripped, result has NO leading spaces
String a = """
        line one
        line two
        """;   // <-- closing at column 8 → 8 spaces stripped
// a == "line one\\nline two\\n"

// Example 2: closing """ to the LEFT of content
// → result keeps the extra spaces (intentional indent)
String b = """
        line one
        line two
""";           // <-- closing at column 0 → 0 spaces stripped
// b == "        line one\\n        line two\\n"

// Example 3: add deliberate indentation with indent()
String c = """
        item A
        item B
        item C
        """.indent(4);
// each line now has 4 additional leading spaces

System.out.println("---a---\\n" + a);
System.out.println("---b---\\n" + b);
System.out.println("---c---\\n" + c);`;

  code4 = `// Standard escapes still work
String tab = """
        col1\\tcol2\\tcol3
        val1\\tval2\\tval3
        """;

// NEW in Java 15: line continuation (\\<newline>)
// Suppresses the newline — useful for long single-line strings
String oneLiner = """
        This is a very long string that \\
        continues on the next source line \\
        but produces no newlines at runtime.
        """;
// oneLiner == "This is a very long string that continues on the next source line but produces no newlines at runtime.\\n"

// NEW in Java 15: \\s (explicit space)
// Prevents trailing whitespace from being stripped
String padded = """
        RED   \\s
        GREEN \\s
        BLUE  \\s
        """;
// Each line ends with exactly one space after the word
// Without \\s, trailing spaces would be silently removed

System.out.println(oneLiner);
System.out.println(padded);`;

  code5 = `// indent(n) — add (positive) or remove (negative) leading spaces
String original = """
        Hello
        World
        """;

String indented = original.indent(4);
// "    Hello\\n    World\\n"

String dedented = "    Hello\\n    World\\n".indent(-2);
// "  Hello\\n  World\\n"

// stripIndent() — programmatically strip common leading whitespace
// Useful when building strings at runtime (not compile-time text blocks)
String runtime = "    line one\\n    line two\\n    line three\\n";
String stripped = runtime.stripIndent();
// "line one\\nline two\\nline three\\n"

// translateEscapes() — process \\n, \\t etc. from config / user input
// (Text blocks at compile-time don't need this — it's for runtime strings)
String fromConfig = "First line\\\\nSecond line\\\\tTabbed";
String translated = fromConfig.translateEscapes();
// "First line\\nSecond line\\tTabbed"
System.out.println(translated);

// Combining: load template from DB, strip indent, fill placeholders
String template = "    Dear {name},\\n    Your order {id} shipped.\\n";
String message = template.stripIndent()
                         .replace("{name}", "Alice")
                         .replace("{id}", "ORD-999");
System.out.println(message);`;
}
