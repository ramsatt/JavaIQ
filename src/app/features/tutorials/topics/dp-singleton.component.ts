import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-dp-singleton',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="Singleton" subtitle="Ensure a class has only one instance. Thread-safe approaches, enum singleton, and best practices." badge="DESIGN PATTERNS" gradient="linear-gradient(135deg, #4338ca, #818cf8)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-indigo" /> Singleton</h2>
        <div class="prose"><p>The <strong>Singleton</strong> pattern ensures exactly one instance exists. Used for configuration, logging, connection pools, and caches.</p><app-code-block [code]="codeIntro" /></div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-purple" /> Implementations</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Enum (Best!)</h3><app-code-block [code]="codeEnum" /></div>
          <div class="op-card"><h3 class="op-title">Lazy Holder</h3><app-code-block [code]="codeLazy" /></div>
          <div class="op-card"><h3 class="op-title">Double-Checked</h3><app-code-block [code]="codeDouble" /></div>
          <div class="op-card"><h3 class="op-title">Spring Singleton</h3><app-code-block [code]="codeSpring" /></div>
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
export class DpSingletonComponent {
  codeIntro = `// Problem: Need exactly ONE instance
// Examples: Logger, ConfigManager, ConnectionPool
// Solution: Private constructor + static access

// ❌ Anti-pattern: global mutable state
// ✅ Use DI (Spring @Component) instead when possible`;
  codeEnum = `// BEST approach: Enum singleton
public enum DatabasePool {
    INSTANCE;

    private final HikariDataSource ds;

    DatabasePool() {
        ds = new HikariDataSource();
        ds.setJdbcUrl("jdbc:postgresql://localhost/mydb");
    }

    public Connection getConnection() throws SQLException {
        return ds.getConnection();
    }
}

// Usage
Connection conn = DatabasePool.INSTANCE.getConnection();

// ✅ Thread-safe, serialization-safe, reflection-safe`;
  codeLazy = `// Bill Pugh / Lazy Holder idiom
public class Logger {
    private Logger() {}

    private static class Holder {
        // loaded only when getInstance() is called
        static final Logger INSTANCE = new Logger();
    }

    public static Logger getInstance() {
        return Holder.INSTANCE;
    }
}

// ✅ Thread-safe (class loading is thread-safe)
// ✅ Lazy initialization
// ✅ No synchronization overhead`;
  codeDouble = `// Double-checked locking (pre-Java 5 era)
public class Cache {
    private static volatile Cache instance;

    private Cache() {}

    public static Cache getInstance() {
        if (instance == null) {           // 1st check (no lock)
            synchronized (Cache.class) {
                if (instance == null) {    // 2nd check (with lock)
                    instance = new Cache();
                }
            }
        }
        return instance;
    }
}

// ⚠️ volatile is REQUIRED (prevents instruction reordering)`;
  codeSpring = `// In Spring, just use @Component
@Service  // singleton by default!
public class UserService {
    // Spring manages the single instance
    // No manual singleton code needed
}

// Spring scopes:
// @Scope("singleton")  — default, one per container
// @Scope("prototype")  — new instance each injection
// @Scope("request")    — one per HTTP request
// @Scope("session")    — one per HTTP session`;
}
