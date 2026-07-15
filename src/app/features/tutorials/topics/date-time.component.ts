import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-date-time',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout
      title="Date & Time API"
      subtitle="Master the modern java.time package (Java 8+). Work with LocalDate, LocalTime, LocalDateTime, ZonedDateTime, Duration, Period, and DateTimeFormatter."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #1c1917, #f97316)">

      <!-- Section 1: Why the New API? -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="book-open" [size]="28" css="icon-orange" /> Why the New API?
        </h2>
        <div class="topic-hero-container">
          <img src="/assets/images/topics/date-time.png" alt="Date Time Visualized" class="topic-hero-image" />
        </div>
        <div class="prose">
          <p>
            <code>java.util.Date</code> and <code>Calendar</code> (Java 1.0 / 1.1) were notoriously broken: mutable,
            not thread-safe, months were 0-indexed (January = 0), and the API was confusing. Java 8 introduced
            <strong>java.time</strong> (JSR-310): immutable, thread-safe, ISO-8601 by default, and cleanly designed.
          </p>
          <ul>
            <li><strong>LocalDate</strong> — date only, no time, no timezone (e.g., <code>2024-03-15</code>)</li>
            <li><strong>LocalTime</strong> — time only, no date, no timezone (e.g., <code>14:30:00</code>)</li>
            <li><strong>LocalDateTime</strong> — date + time, no timezone</li>
            <li><strong>ZonedDateTime</strong> — date + time + timezone (e.g., <code>2024-03-15T14:30:00+05:30[Asia/Kolkata]</code>)</li>
            <li><strong>Instant</strong> — a point on the UTC timeline (nanosecond precision), ideal for logging/timestamps</li>
          </ul>
          <app-code-block [code]="code1" />
        </div>
      </section>

      <!-- Section 2: LocalDate, LocalTime, LocalDateTime -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="calendar" [size]="28" css="icon-orange" /> LocalDate, LocalTime, LocalDateTime
        </h2>
        <div class="prose">
          <p>
            All <code>java.time</code> objects are <strong>immutable</strong> — every plus/minus operation returns a
            <em>new</em> object. Use factory methods <code>now()</code>, <code>of(...)</code>, and <code>parse()</code>
            to create instances. Months are 1-indexed (March = 3, not 2).
          </p>
          <app-code-block [code]="code2" />
        </div>
      </section>

      <!-- Section 3: ZonedDateTime & Instant -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="globe" [size]="28" css="icon-orange" /> ZonedDateTime & Instant
        </h2>
        <div class="prose">
          <p>
            <code>ZonedDateTime</code> pairs a <code>LocalDateTime</code> with a <code>ZoneId</code> (e.g.,
            <code>"America/New_York"</code>). It handles DST transitions automatically.
            <code>Instant</code> is always UTC — perfect for storing event times in databases or logs.
          </p>
          <app-code-block [code]="code3" />
        </div>
      </section>

      <!-- Section 4: Duration & Period -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="clock" [size]="28" css="icon-orange" /> Duration & Period
        </h2>
        <div class="prose">
          <p>
            <strong>Duration</strong> measures time-based amounts: hours, minutes, seconds, nanoseconds.
            <strong>Period</strong> measures date-based amounts: years, months, days. Use
            <code>between()</code> to compute the gap between two dates or times.
          </p>
          <app-code-block [code]="code4" />
        </div>
      </section>

      <!-- Section 5: DateTimeFormatter -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="type" [size]="28" css="icon-orange" /> DateTimeFormatter
        </h2>
        <div class="prose">
          <p>
            <code>DateTimeFormatter</code> handles both formatting (date → string) and parsing (string → date).
            It is <strong>immutable and thread-safe</strong>, unlike the old <code>SimpleDateFormat</code>.
            Use <code>ofPattern()</code> for custom formats or the predefined ISO constants.
          </p>
          <app-code-block [code]="code5" />
        </div>
      </section>

      <!-- Section 6: Interview Tips -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="briefcase" [size]="28" css="icon-orange" /> Interview Tips
        </h2>
        <div class="tips-list">
          <div class="tip-card">
            <div class="tip-num">1</div>
            <div>
              <h4 class="tip-title">Immutability</h4>
              <p class="tip-desc">All <code>java.time</code> objects are immutable — <code>date.plusDays(7)</code> does NOT modify <code>date</code>; it returns a new object. Always capture the return value: <code>LocalDate next = date.plusDays(7);</code></p>
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-num">2</div>
            <div>
              <h4 class="tip-title">LocalDate vs Instant</h4>
              <p class="tip-desc">Use <code>LocalDate</code> for business dates (birthdays, deadlines) where timezone doesn't matter. Use <code>Instant</code> for machine timestamps (audit logs, event times) — it's always UTC and unambiguous across timezones.</p>
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-num">3</div>
            <div>
              <h4 class="tip-title">Legacy Date Conversion</h4>
              <p class="tip-desc">Bridge between old and new APIs with: <code>date.toInstant()</code> to go from <code>java.util.Date</code> to <code>Instant</code>, and <code>Date.from(instant)</code> to go back. Use <code>instant.atZone(ZoneId.systemDefault()).toLocalDate()</code> for a <code>LocalDate</code>.</p>
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
      background: #fff7ed; padding: 2px 7px; border-radius: 5px;
      font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #7c2d12;
    }
    .tips-list { display: flex; flex-direction: column; gap: 12px; }
    .tip-card { display: flex; gap: 16px; padding: 20px 24px; border-radius: 16px; border: 1px solid #D6DDD2; background: #fff; }
    .tip-num { width: 36px; height: 36px; min-width: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; background: #f97316; color: #fff; font-size: 0.85rem; font-weight: 800; }
    .tip-title { font-size: 0.95rem; font-weight: 700; color: #1B1B1B; margin: 0 0 6px; }
    .tip-desc { font-size: 0.82rem; color: #52665A; line-height: 1.55; margin: 0; }
    .tip-desc code { background: #fff7ed; padding: 2px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: #7c2d12; }
  `
})
export class DateTimeComponent {

  code1 = `// Old, broken API (avoid!)
Date date = new Date(2024, 2, 15); // Year is offset from 1900, month is 0-indexed!
// 2024 means year 3924; month 2 means March. Confusing and error-prone.

Calendar cal = Calendar.getInstance();
cal.set(2024, Calendar.MARCH, 15); // Slightly better but mutable & not thread-safe

// Modern API (Java 8+)
import java.time.*;

LocalDate    ld  = LocalDate.now();           // 2024-03-15 (no time, no TZ)
LocalTime    lt  = LocalTime.now();           // 14:30:45.123
LocalDateTime ldt = LocalDateTime.now();      // 2024-03-15T14:30:45.123
ZonedDateTime zdt = ZonedDateTime.now();      // 2024-03-15T14:30:45.123+05:30[Asia/Kolkata]
Instant       ins = Instant.now();            // 2024-03-15T09:00:45.123Z (always UTC)`;

  code2 = `// Creating LocalDate
LocalDate today    = LocalDate.now();
LocalDate birthday = LocalDate.of(1990, 6, 15);  // months are 1-indexed!
LocalDate parsed   = LocalDate.parse("2024-03-15"); // ISO-8601 default

// Arithmetic — all return NEW objects (immutable)
LocalDate nextWeek  = today.plusDays(7);
LocalDate lastMonth = today.minusMonths(1);
LocalDate nextYear  = today.plusYears(1);

// Querying
System.out.println(today.getDayOfWeek());   // FRIDAY
System.out.println(today.getDayOfMonth());  // 15
System.out.println(today.getMonth());       // MARCH
System.out.println(today.isLeapYear());     // false

// Comparisons
boolean after  = nextWeek.isAfter(today);  // true
boolean before = lastMonth.isBefore(today); // true
boolean equal  = today.isEqual(LocalDate.now()); // true

// LocalTime
LocalTime start = LocalTime.of(9, 0);
LocalTime end   = LocalTime.of(17, 30);
LocalTime lunch = LocalTime.parse("12:30:00");

// LocalDateTime — combining date and time
LocalDateTime meeting = LocalDateTime.of(today, LocalTime.of(14, 0));
LocalDateTime dt2     = LocalDateTime.of(2024, 3, 15, 14, 30, 0);`;

  code3 = `import java.time.*;

// ZonedDateTime — date, time, and timezone
ZonedDateTime nyTime  = ZonedDateTime.now(ZoneId.of("America/New_York"));
ZonedDateTime ukTime  = ZonedDateTime.now(ZoneId.of("Europe/London"));
ZonedDateTime istTime = ZonedDateTime.now(ZoneId.of("Asia/Kolkata"));

System.out.println(nyTime);  // 2024-03-15T10:00:00-04:00[America/New_York]
System.out.println(istTime); // 2024-03-15T19:30:00+05:30[Asia/Kolkata]

// Converting between zones (same instant, different wall-clock time)
ZonedDateTime converted = nyTime.withZoneSameInstant(ZoneId.of("Asia/Kolkata"));

// Instant — nanosecond precision point on the UTC timeline
Instant now = Instant.now();
System.out.println(now); // 2024-03-15T14:00:00.000Z

// Convert Instant → ZonedDateTime
ZonedDateTime fromInstant = now.atZone(ZoneId.of("America/New_York"));

// Convert ZonedDateTime → Instant
Instant toInstant = istTime.toInstant();

// List all available zone IDs
ZoneId.getAvailableZoneIds().stream()
    .filter(z -> z.startsWith("America"))
    .sorted()
    .limit(5)
    .forEach(System.out::println);

// Legacy interop
java.util.Date legacyDate = new java.util.Date();
Instant fromLegacy = legacyDate.toInstant();
java.util.Date backToLegacy = java.util.Date.from(Instant.now());`;

  code4 = `import java.time.*;

// Duration — time-based (hours, minutes, seconds, nanos)
LocalTime start = LocalTime.of(9, 0);
LocalTime end   = LocalTime.of(17, 30);
Duration workDay = Duration.between(start, end);

System.out.println(workDay.toHours());   // 8
System.out.println(workDay.toMinutes()); // 510
System.out.println(workDay.getSeconds());// 30600

// Building Duration directly
Duration twoHours     = Duration.ofHours(2);
Duration ninetyMins   = Duration.ofMinutes(90);
Duration oneAndHalf   = Duration.ofHours(1).plusMinutes(30);

// Period — date-based (years, months, days)
LocalDate birthDate = LocalDate.of(1990, 6, 15);
LocalDate today     = LocalDate.of(2024, 3, 15);
Period age = Period.between(birthDate, today);

System.out.println(age.getYears());  // 33
System.out.println(age.getMonths()); // 9
System.out.println(age.getDays());   // 0

// Building Period directly
Period threeMonths = Period.ofMonths(3);
Period oneYear     = Period.ofYears(1);

// Using with date arithmetic
LocalDate future = today.plus(Period.of(1, 6, 0)); // +1 year 6 months
LocalDateTime future2 = LocalDateTime.now().plus(Duration.ofHours(48));

// ChronoUnit for simple counts
long daysBetween = ChronoUnit.DAYS.between(birthDate, today);   // 12,326
long hoursBetween = ChronoUnit.HOURS.between(start, end);       // 8`;

  code5 = `import java.time.*;
import java.time.format.*;

// ofPattern — custom format
DateTimeFormatter ukFormat  = DateTimeFormatter.ofPattern("dd/MM/yyyy");
DateTimeFormatter usFormat  = DateTimeFormatter.ofPattern("MM-dd-yyyy");
DateTimeFormatter dtFormat  = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm");
DateTimeFormatter fullFormat = DateTimeFormatter.ofPattern("EEEE, d MMMM yyyy"); // Locale-sensitive!

LocalDate date = LocalDate.of(2024, 3, 15);
System.out.println(date.format(ukFormat));   // 15/03/2024
System.out.println(date.format(usFormat));   // 03-15-2024
System.out.println(date.format(fullFormat)); // Friday, 15 March 2024

// Parsing — string → date
LocalDate parsed  = LocalDate.parse("15/03/2024", ukFormat);
LocalDate parsed2 = LocalDate.parse("03-15-2024", usFormat);

LocalDateTime dt   = LocalDateTime.of(date, LocalTime.of(14, 30));
String formatted   = dt.format(dtFormat); // "15/03/2024 14:30"
LocalDateTime back = LocalDateTime.parse("15/03/2024 14:30", dtFormat);

// Predefined ISO formatters (no format string needed)
LocalDate iso = LocalDate.parse("2024-03-15");                    // ISO_LOCAL_DATE
ZonedDateTime ziso = ZonedDateTime.parse("2024-03-15T14:30:00+05:30[Asia/Kolkata]");

String isoStr = LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME);

// Locale-aware formatting
DateTimeFormatter localised = DateTimeFormatter
    .ofPattern("d MMMM yyyy", java.util.Locale.FRENCH);
System.out.println(date.format(localised)); // 15 mars 2024

// DateTimeFormatterBuilder for complex patterns
DateTimeFormatter custom = new DateTimeFormatterBuilder()
    .appendPattern("yyyy-MM-dd")
    .optionalStart()
    .appendPattern("'T'HH:mm:ss")
    .optionalEnd()
    .toFormatter();`;
}
