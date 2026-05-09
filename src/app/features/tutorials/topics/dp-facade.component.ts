import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-dp-facade',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="Facade" subtitle="Provide a simplified interface to a complex subsystem. Hide complexity behind a single, easy-to-use entry point." badge="DESIGN PATTERNS" gradient="linear-gradient(135deg, #4338ca, #818cf8)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-indigo" /> What is Facade?</h2>
        <div class="prose">
          <p>The <strong>Facade</strong> pattern provides a unified, simplified interface to a set of interfaces in a subsystem. It doesn't hide subsystem classes — clients can still use them directly — but it offers a convenient high-level interface.</p>
          <p>Common in: Spring's <code>JdbcTemplate</code>, SLF4J logging facade, home theater systems, compiler pipelines.</p>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-purple" /> Implementations</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Subsystem Classes</h3><app-code-block [code]="codeSubsystem" /></div>
          <div class="op-card"><h3 class="op-title">Facade Class</h3><app-code-block [code]="codeFacade" /></div>
          <div class="op-card"><h3 class="op-title">Client Code</h3><app-code-block [code]="codeClient" /></div>
          <div class="op-card"><h3 class="op-title">Spring Example</h3><app-code-block [code]="codeSpring" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-indigo { color: #4f46e5; } .icon-purple { color: #7c3aed; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; } .prose code { background: #f1f5f9; padding: 2px 6px; border-radius: 4px; font-size: 0.8rem; color: #4338ca; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class DpFacadeComponent {
  codeIntro = `// Problem: complex home theater setup
// amplifier.on(); dvd.on(); projector.on();
// amplifier.setVolume(10); projector.setInput("DVD"); ...

// Facade: one call does it all
homeTheater.watchMovie("Inception");`;

  codeSubsystem = `// Complex subsystem classes
class Amplifier {
    void on()  { System.out.println("Amp on"); }
    void off() { System.out.println("Amp off"); }
    void setVolume(int v) { System.out.println("Volume: " + v); }
}

class DVDPlayer {
    void on()   { System.out.println("DVD on"); }
    void off()  { System.out.println("DVD off"); }
    void play(String movie) { System.out.println("Playing: " + movie); }
}

class Projector {
    void on()  { System.out.println("Projector on"); }
    void off() { System.out.println("Projector off"); }
    void wideScreenMode() { System.out.println("Wide screen"); }
}`;

  codeFacade = `// Facade — simplified interface
class HomeTheaterFacade {
    private final Amplifier amp;
    private final DVDPlayer  dvd;
    private final Projector  proj;

    HomeTheaterFacade(Amplifier amp, DVDPlayer dvd, Projector proj) {
        this.amp  = amp;
        this.dvd  = dvd;
        this.proj = proj;
    }

    void watchMovie(String movie) {
        amp.on();
        amp.setVolume(10);
        dvd.on();
        proj.on();
        proj.wideScreenMode();
        dvd.play(movie);
    }

    void endMovie() {
        dvd.off();
        proj.off();
        amp.off();
    }
}`;

  codeClient = `// Client — uses only the facade
HomeTheaterFacade homeTheater = new HomeTheaterFacade(
    new Amplifier(), new DVDPlayer(), new Projector()
);

homeTheater.watchMovie("Inception"); // 1 call vs 6 calls
homeTheater.endMovie();

// Client can still access subsystem directly if needed
// Facade doesn't lock you in`;

  codeSpring = `// Spring's JdbcTemplate IS a Facade over JDBC
// Without JdbcTemplate (raw JDBC):
Connection conn = dataSource.getConnection();
PreparedStatement ps = conn.prepareStatement("SELECT * FROM users WHERE id=?");
ps.setLong(1, id);
ResultSet rs = ps.executeQuery();
// ... iterate, map, close, handle exceptions ...

// With JdbcTemplate (Facade):
User user = jdbcTemplate.queryForObject(
    "SELECT * FROM users WHERE id=?",
    userRowMapper, id
);
// ✅ Connection, exception handling, resource cleanup — all hidden`;
}
