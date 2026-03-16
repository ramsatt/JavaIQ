import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-try-resources',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout
      title="Try-with-Resources &amp; AutoCloseable"
      subtitle="Eliminate resource leaks with try-with-resources. Implement AutoCloseable for custom resources. Handle suppressed exceptions and multi-resource blocks."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #7f1d1d, #ef4444)">

      <!-- Section 1: The Resource Leak Problem -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="alert-circle" [size]="28" css="icon-red" /> The Resource Leak Problem
        </h2>
        <div class="prose">
          <p>
            Before Java 7, resources (files, sockets, database connections) had to be closed in
            <code>finally</code> blocks. This approach was verbose and dangerously error-prone:
          </p>
          <ul>
            <li>If the resource constructor throws, the variable is <code>null</code> — you must null-check before closing.</li>
            <li>If both the body <em>and</em> <code>close()</code> throw, the body exception is silently swallowed by the finally exception.</li>
            <li>Nested resources require nested <code>try/finally</code> blocks — deeply unreadable code.</li>
            <li>Developers often forget the <code>finally</code> block entirely, causing silent resource leaks.</li>
          </ul>
          <app-code-block [code]="code1" />
        </div>
      </section>

      <!-- Section 2: Try-with-Resources -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="shield-check" [size]="28" css="icon-red" /> Try-with-Resources (Java 7+)
        </h2>
        <div class="prose">
          <p>
            Java 7 introduced <strong>try-with-resources</strong>: declare resources in the <code>try</code> header
            and the compiler guarantees <code>close()</code> is called — even if an exception is thrown — using a
            hidden <code>finally</code> block. The resource must implement <code>AutoCloseable</code>.
          </p>
          <ul>
            <li>No null checks needed — if the constructor throws, the variable was never assigned.</li>
            <li>Body exceptions are never swallowed — they stay primary; close exceptions become suppressed.</li>
            <li>Code is dramatically shorter and safer.</li>
          </ul>
          <app-code-block [code]="code2" />
        </div>
      </section>

      <!-- Section 3: Implementing AutoCloseable -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="package" [size]="28" css="icon-red" /> Implementing AutoCloseable
        </h2>
        <div class="prose">
          <p>
            Any class that holds an external resource should implement <code>AutoCloseable</code> (one method:
            <code>void close() throws Exception</code>). This allows instances to be used in try-with-resources.
          </p>
          <p>
            <strong>Best practice</strong>: make <code>close()</code> idempotent — calling it multiple times should be safe.
            Log or handle errors inside <code>close()</code> rather than letting them propagate unless you have a good reason.
          </p>
          <app-code-block [code]="code3" />
        </div>
      </section>

      <!-- Section 4: Multiple Resources & Suppressed Exceptions -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="layers" [size]="28" css="icon-red" /> Multiple Resources &amp; Suppressed Exceptions
        </h2>
        <div class="prose">
          <p>
            You can declare multiple resources in one <code>try</code> header, separated by semicolons.
            They are opened left-to-right and <strong>closed in reverse order</strong> (last opened = first closed).
          </p>
          <p>
            <strong>Suppressed exceptions</strong>: if both the try body and a <code>close()</code> call throw,
            Java preserves the body exception as the primary thrown exception and <em>attaches</em> the close()
            exception as a suppressed exception. Retrieve them via <code>Throwable.getSuppressed()</code>.
            This is the opposite of old-style <code>finally</code> which would silently discard the body exception.
          </p>
          <app-code-block [code]="code4" />
        </div>
      </section>

      <!-- Section 5: Interview Tips -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="briefcase" [size]="28" css="icon-red" /> Interview Tips
        </h2>
        <div class="tips-list">
          <div class="tip-card">
            <div class="tip-num">1</div>
            <div>
              <h4 class="tip-title">Closing Order in Multiple Resources</h4>
              <p class="tip-desc">Resources in <code>try (A a = ...; B b = ...; C c = ...)</code> are closed in <strong>reverse declaration order</strong>: C first, then B, then A. This mirrors stack unwinding and ensures that inner resources (which may depend on outer ones) are released before their dependencies.</p>
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-num">2</div>
            <div>
              <h4 class="tip-title">Suppressed Exceptions — Primary Is Preserved</h4>
              <p class="tip-desc">In old <code>try/finally</code>, if the body throws E1 and <code>close()</code> throws E2, E2 propagates and E1 is lost forever. With try-with-resources, E1 propagates and E2 is attached as <code>getSuppressed()[0]</code> — no information is lost. This is a major improvement for debugging.</p>
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-num">3</div>
            <div>
              <h4 class="tip-title">AutoCloseable vs Closeable</h4>
              <p class="tip-desc"><code>AutoCloseable</code> (Java 7) declares <code>close() throws Exception</code>. <code>Closeable</code> (Java 5, extends AutoCloseable since Java 7) declares <code>close() throws IOException</code> — a narrower checked exception. I/O classes implement <code>Closeable</code>. For custom non-I/O resources, implement <code>AutoCloseable</code> directly and narrow the exception type where possible.</p>
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
    .icon-red { color: #ef4444; }
    .prose { font-size: 0.9rem; color: #52665A; line-height: 1.75; }
    .prose p { margin: 0 0 14px; }
    .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; }
    .prose li { margin-bottom: 8px; }
    .prose strong { color: #1B1B1B; font-weight: 700; }
    .prose code {
      background: #fef2f2; padding: 2px 7px; border-radius: 5px;
      font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #991b1b;
    }
    .tips-list { display: flex; flex-direction: column; gap: 12px; }
    .tip-card { display: flex; gap: 16px; padding: 20px 24px; border-radius: 16px; border: 1px solid #D6DDD2; background: #fff; }
    .tip-num { width: 36px; height: 36px; min-width: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; background: #ef4444; color: #fff; font-size: 0.85rem; font-weight: 800; }
    .tip-title { font-size: 0.95rem; font-weight: 700; color: #1B1B1B; margin: 0 0 6px; }
    .tip-desc { font-size: 0.82rem; color: #52665A; line-height: 1.55; margin: 0; }
    .tip-desc code { background: #fef2f2; padding: 2px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: #991b1b; }
  `
})
export class TryResourcesComponent {

  code1 = `// ---- OLD WAY: try-finally — verbose and error-prone ----
BufferedReader reader = null;
try {
    reader = new BufferedReader(new FileReader("data.txt"));
    String line = reader.readLine();
    processLine(line);
    // If processLine() throws, we fall into finally
} catch (IOException e) {
    System.err.println("Read error: " + e.getMessage());
} finally {
    // Must null-check — constructor may have failed before assignment
    if (reader != null) {
        try {
            reader.close(); // close() itself can throw!
        } catch (IOException closeEx) {
            // If body already threw, this exception silently swallows the original!
            System.err.println("Close error: " + closeEx.getMessage());
        }
    }
}

// ---- Nested resources make it even worse ----
InputStream  in  = null;
OutputStream out = null;
try {
    in  = new FileInputStream("source.txt");
    out = new FileOutputStream("dest.txt");
    // copy data...
} finally {
    if (out != null) try { out.close(); } catch (IOException e) { /* swallowed */ }
    if (in  != null) try { in.close();  } catch (IOException e) { /* swallowed */ }
}
// Four levels of nesting just to handle two resources safely!`;

  code2 = `// ---- JAVA 7+: try-with-resources — clean and safe ----
try (BufferedReader reader = new BufferedReader(new FileReader("data.txt"))) {
    String line;
    while ((line = reader.readLine()) != null) {
        processLine(line);
    }
} catch (IOException e) {
    System.err.println("Error: " + e.getMessage());
}
// reader.close() is guaranteed to be called — compiler inserts it

// The compiler transforms the above into roughly:
//   BufferedReader reader = new BufferedReader(new FileReader("data.txt"));
//   Throwable primary = null;
//   try {
//       // body
//   } catch (Throwable t) {
//       primary = t; throw t;
//   } finally {
//       if (primary != null) {
//           try { reader.close(); }
//           catch (Throwable t) { primary.addSuppressed(t); }
//       } else { reader.close(); }
//   }

// Without catch/finally — just the resource declaration is enough:
try (var stream = Files.newInputStream(Path.of("data.bin"))) {
    return stream.readAllBytes();
}
// FileInputStream is closed automatically, exception propagates normally

// Java 9+: effectively-final variable can be used as resource
BufferedReader br = new BufferedReader(new FileReader("data.txt"));
try (br) {   // no re-declaration needed if br is effectively final
    return br.readLine();
}`;

  code3 = `// ---- Custom AutoCloseable resource ----
public class DatabaseConnection implements AutoCloseable {
    private final String url;
    private Connection connection;
    private boolean closed = false;

    public DatabaseConnection(String url) throws SQLException {
        this.url = url;
        this.connection = DriverManager.getConnection(url);
        System.out.println("Connection opened: " + url);
    }

    public ResultSet query(String sql) throws SQLException {
        if (closed) throw new IllegalStateException("Connection already closed");
        return connection.createStatement().executeQuery(sql);
    }

    @Override
    public void close() throws SQLException {
        if (!closed) {                // idempotent — safe to call multiple times
            closed = true;
            connection.close();
            System.out.println("Connection closed: " + url);
        }
    }
}

// Usage — connection guaranteed to close even if query() throws
try (DatabaseConnection db = new DatabaseConnection("jdbc:postgresql://localhost/mydb")) {
    ResultSet rs = db.query("SELECT * FROM users");
    while (rs.next()) {
        System.out.println(rs.getString("name"));
    }
} catch (SQLException e) {
    System.err.println("Database error: " + e.getMessage());
}
// Output:
//   Connection opened: jdbc:postgresql://localhost/mydb
//   ... rows ...
//   Connection closed: jdbc:postgresql://localhost/mydb`;

  code4 = `// ---- Multiple resources — opened L→R, closed R→L ----
try (
    FileInputStream  src  = new FileInputStream("input.txt");   // opened 1st
    FileOutputStream dest = new FileOutputStream("output.txt")  // opened 2nd
) {
    src.transferTo(dest);
}
// dest.close() called first, then src.close() — reverse order

// ---- Suppressed exceptions demo ----
public class BrokenResource implements AutoCloseable {
    private final String name;
    BrokenResource(String name) { this.name = name; }

    public void use() throws Exception {
        throw new Exception(name + ": body exception");
    }

    @Override
    public void close() throws Exception {
        throw new Exception(name + ": close() exception");
    }
}

try (BrokenResource r = new BrokenResource("R1")) {
    r.use();  // throws "R1: body exception"
              // then close() is called → throws "R1: close() exception"
} catch (Exception e) {
    System.out.println("Primary:    " + e.getMessage());
    // Primary:    R1: body exception  ← body exception is primary

    for (Throwable suppressed : e.getSuppressed()) {
        System.out.println("Suppressed: " + suppressed.getMessage());
        // Suppressed: R1: close() exception  ← not lost!
    }
}

// ---- Two resources, both close() throw ----
try (
    BrokenResource a = new BrokenResource("A");  // closed 2nd
    BrokenResource b = new BrokenResource("B")   // closed 1st
) {
    throw new Exception("body threw");
} catch (Exception e) {
    System.out.println(e.getMessage());                    // body threw
    System.out.println(e.getSuppressed()[0].getMessage()); // B: close() exception
    System.out.println(e.getSuppressed()[1].getMessage()); // A: close() exception
}`;
}
