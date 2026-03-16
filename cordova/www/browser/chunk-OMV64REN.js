import{a as s,b as c,c as p}from"./chunk-J75GQJ3V.js";import{$a as t,Ia as d,Za as i,_a as n,ab as o,wb as e,za as a}from"./chunk-GF54RO5Y.js";import"./chunk-NWJ5J3BN.js";var u=class l{code1=`// Old, broken API (avoid!)
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
Instant       ins = Instant.now();            // 2024-03-15T09:00:45.123Z (always UTC)`;code2=`// Creating LocalDate
LocalDate today    = LocalDate.now();
LocalDate birthday = LocalDate.of(1990, 6, 15);  // months are 1-indexed!
LocalDate parsed   = LocalDate.parse("2024-03-15"); // ISO-8601 default

// Arithmetic \u2014 all return NEW objects (immutable)
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

// LocalDateTime \u2014 combining date and time
LocalDateTime meeting = LocalDateTime.of(today, LocalTime.of(14, 0));
LocalDateTime dt2     = LocalDateTime.of(2024, 3, 15, 14, 30, 0);`;code3=`import java.time.*;

// ZonedDateTime \u2014 date, time, and timezone
ZonedDateTime nyTime  = ZonedDateTime.now(ZoneId.of("America/New_York"));
ZonedDateTime ukTime  = ZonedDateTime.now(ZoneId.of("Europe/London"));
ZonedDateTime istTime = ZonedDateTime.now(ZoneId.of("Asia/Kolkata"));

System.out.println(nyTime);  // 2024-03-15T10:00:00-04:00[America/New_York]
System.out.println(istTime); // 2024-03-15T19:30:00+05:30[Asia/Kolkata]

// Converting between zones (same instant, different wall-clock time)
ZonedDateTime converted = nyTime.withZoneSameInstant(ZoneId.of("Asia/Kolkata"));

// Instant \u2014 nanosecond precision point on the UTC timeline
Instant now = Instant.now();
System.out.println(now); // 2024-03-15T14:00:00.000Z

// Convert Instant \u2192 ZonedDateTime
ZonedDateTime fromInstant = now.atZone(ZoneId.of("America/New_York"));

// Convert ZonedDateTime \u2192 Instant
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
java.util.Date backToLegacy = java.util.Date.from(Instant.now());`;code4=`import java.time.*;

// Duration \u2014 time-based (hours, minutes, seconds, nanos)
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

// Period \u2014 date-based (years, months, days)
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
long hoursBetween = ChronoUnit.HOURS.between(start, end);       // 8`;code5=`import java.time.*;
import java.time.format.*;

// ofPattern \u2014 custom format
DateTimeFormatter ukFormat  = DateTimeFormatter.ofPattern("dd/MM/yyyy");
DateTimeFormatter usFormat  = DateTimeFormatter.ofPattern("MM-dd-yyyy");
DateTimeFormatter dtFormat  = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm");
DateTimeFormatter fullFormat = DateTimeFormatter.ofPattern("EEEE, d MMMM yyyy"); // Locale-sensitive!

LocalDate date = LocalDate.of(2024, 3, 15);
System.out.println(date.format(ukFormat));   // 15/03/2024
System.out.println(date.format(usFormat));   // 03-15-2024
System.out.println(date.format(fullFormat)); // Friday, 15 March 2024

// Parsing \u2014 string \u2192 date
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
    .toFormatter();`;static \u0275fac=function(m){return new(m||l)};static \u0275cmp=d({type:l,selectors:[["app-topic-date-time"]],decls:194,vars:11,consts:[["title","Date & Time API","subtitle","Master the modern java.time package (Java 8+). Work with LocalDate, LocalTime, LocalDateTime, ZonedDateTime, Duration, Period, and DateTimeFormatter.","badge","CORE JAVA","gradient","linear-gradient(135deg, #1c1917, #f97316)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-orange",3,"size"],[1,"prose"],[3,"code"],["name","calendar","css","icon-orange",3,"size"],["name","globe","css","icon-orange",3,"size"],["name","clock","css","icon-orange",3,"size"],["name","type","css","icon-orange",3,"size"],["name","briefcase","css","icon-orange",3,"size"],[1,"tips-list"],[1,"tip-card"],[1,"tip-num"],[1,"tip-title"],[1,"tip-desc"]],template:function(m,r){m&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),o(3,"app-icon",3),e(4," Why the New API? "),t(),n(5,"div",4)(6,"p")(7,"code"),e(8,"java.util.Date"),t(),e(9," and "),n(10,"code"),e(11,"Calendar"),t(),e(12," (Java 1.0 / 1.1) were notoriously broken: mutable, not thread-safe, months were 0-indexed (January = 0), and the API was confusing. Java 8 introduced "),n(13,"strong"),e(14,"java.time"),t(),e(15," (JSR-310): immutable, thread-safe, ISO-8601 by default, and cleanly designed. "),t(),n(16,"ul")(17,"li")(18,"strong"),e(19,"LocalDate"),t(),e(20," \u2014 date only, no time, no timezone (e.g., "),n(21,"code"),e(22,"2024-03-15"),t(),e(23,")"),t(),n(24,"li")(25,"strong"),e(26,"LocalTime"),t(),e(27," \u2014 time only, no date, no timezone (e.g., "),n(28,"code"),e(29,"14:30:00"),t(),e(30,")"),t(),n(31,"li")(32,"strong"),e(33,"LocalDateTime"),t(),e(34," \u2014 date + time, no timezone"),t(),n(35,"li")(36,"strong"),e(37,"ZonedDateTime"),t(),e(38," \u2014 date + time + timezone (e.g., "),n(39,"code"),e(40,"2024-03-15T14:30:00+05:30[Asia/Kolkata]"),t(),e(41,")"),t(),n(42,"li")(43,"strong"),e(44,"Instant"),t(),e(45," \u2014 a point on the UTC timeline (nanosecond precision), ideal for logging/timestamps"),t()(),o(46,"app-code-block",5),t()(),n(47,"section",1)(48,"h2",2),o(49,"app-icon",6),e(50," LocalDate, LocalTime, LocalDateTime "),t(),n(51,"div",4)(52,"p"),e(53," All "),n(54,"code"),e(55,"java.time"),t(),e(56," objects are "),n(57,"strong"),e(58,"immutable"),t(),e(59," \u2014 every plus/minus operation returns a "),n(60,"em"),e(61,"new"),t(),e(62," object. Use factory methods "),n(63,"code"),e(64,"now()"),t(),e(65,", "),n(66,"code"),e(67,"of(...)"),t(),e(68,", and "),n(69,"code"),e(70,"parse()"),t(),e(71," to create instances. Months are 1-indexed (March = 3, not 2). "),t(),o(72,"app-code-block",5),t()(),n(73,"section",1)(74,"h2",2),o(75,"app-icon",7),e(76," ZonedDateTime & Instant "),t(),n(77,"div",4)(78,"p")(79,"code"),e(80,"ZonedDateTime"),t(),e(81," pairs a "),n(82,"code"),e(83,"LocalDateTime"),t(),e(84," with a "),n(85,"code"),e(86,"ZoneId"),t(),e(87," (e.g., "),n(88,"code"),e(89,'"America/New_York"'),t(),e(90,"). It handles DST transitions automatically. "),n(91,"code"),e(92,"Instant"),t(),e(93," is always UTC \u2014 perfect for storing event times in databases or logs. "),t(),o(94,"app-code-block",5),t()(),n(95,"section",1)(96,"h2",2),o(97,"app-icon",8),e(98," Duration & Period "),t(),n(99,"div",4)(100,"p")(101,"strong"),e(102,"Duration"),t(),e(103," measures time-based amounts: hours, minutes, seconds, nanoseconds. "),n(104,"strong"),e(105,"Period"),t(),e(106," measures date-based amounts: years, months, days. Use "),n(107,"code"),e(108,"between()"),t(),e(109," to compute the gap between two dates or times. "),t(),o(110,"app-code-block",5),t()(),n(111,"section",1)(112,"h2",2),o(113,"app-icon",9),e(114," DateTimeFormatter "),t(),n(115,"div",4)(116,"p")(117,"code"),e(118,"DateTimeFormatter"),t(),e(119," handles both formatting (date \u2192 string) and parsing (string \u2192 date). It is "),n(120,"strong"),e(121,"immutable and thread-safe"),t(),e(122,", unlike the old "),n(123,"code"),e(124,"SimpleDateFormat"),t(),e(125,". Use "),n(126,"code"),e(127,"ofPattern()"),t(),e(128," for custom formats or the predefined ISO constants. "),t(),o(129,"app-code-block",5),t()(),n(130,"section",1)(131,"h2",2),o(132,"app-icon",10),e(133," Interview Tips "),t(),n(134,"div",11)(135,"div",12)(136,"div",13),e(137,"1"),t(),n(138,"div")(139,"h4",14),e(140,"Immutability"),t(),n(141,"p",15),e(142,"All "),n(143,"code"),e(144,"java.time"),t(),e(145," objects are immutable \u2014 "),n(146,"code"),e(147,"date.plusDays(7)"),t(),e(148," does NOT modify "),n(149,"code"),e(150,"date"),t(),e(151,"; it returns a new object. Always capture the return value: "),n(152,"code"),e(153,"LocalDate next = date.plusDays(7);"),t()()()(),n(154,"div",12)(155,"div",13),e(156,"2"),t(),n(157,"div")(158,"h4",14),e(159,"LocalDate vs Instant"),t(),n(160,"p",15),e(161,"Use "),n(162,"code"),e(163,"LocalDate"),t(),e(164," for business dates (birthdays, deadlines) where timezone doesn't matter. Use "),n(165,"code"),e(166,"Instant"),t(),e(167," for machine timestamps (audit logs, event times) \u2014 it's always UTC and unambiguous across timezones."),t()()(),n(168,"div",12)(169,"div",13),e(170,"3"),t(),n(171,"div")(172,"h4",14),e(173,"Legacy Date Conversion"),t(),n(174,"p",15),e(175,"Bridge between old and new APIs with: "),n(176,"code"),e(177,"date.toInstant()"),t(),e(178," to go from "),n(179,"code"),e(180,"java.util.Date"),t(),e(181," to "),n(182,"code"),e(183,"Instant"),t(),e(184,", and "),n(185,"code"),e(186,"Date.from(instant)"),t(),e(187," to go back. Use "),n(188,"code"),e(189,"instant.atZone(ZoneId.systemDefault()).toLocalDate()"),t(),e(190," for a "),n(191,"code"),e(192,"LocalDate"),t(),e(193,"."),t()()()()()()),m&2&&(a(3),i("size",28),a(43),i("code",r.code1),a(3),i("size",28),a(23),i("code",r.code2),a(3),i("size",28),a(19),i("code",r.code3),a(3),i("size",28),a(13),i("code",r.code4),a(3),i("size",28),a(16),i("code",r.code5),a(3),i("size",28))},dependencies:[s,c,p],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#1b1b1b;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #D6DDD2}.icon-orange[_ngcontent-%COMP%]{color:#f97316}.prose[_ngcontent-%COMP%]{font-size:.9rem;color:#52665a;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:14px 0;padding-left:22px;list-style:disc}.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:8px}.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#1b1b1b;font-weight:700}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#fff7ed;padding:2px 7px;border-radius:5px;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#7c2d12}.tips-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.tip-card[_ngcontent-%COMP%]{display:flex;gap:16px;padding:20px 24px;border-radius:16px;border:1px solid #D6DDD2;background:#fff}.tip-num[_ngcontent-%COMP%]{width:36px;height:36px;min-width:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:#f97316;color:#fff;font-size:.85rem;font-weight:800}.tip-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#1b1b1b;margin:0 0 6px}.tip-desc[_ngcontent-%COMP%]{font-size:.82rem;color:#52665a;line-height:1.55;margin:0}.tip-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#fff7ed;padding:2px 5px;border-radius:4px;font-family:JetBrains Mono,monospace;font-size:.75rem;color:#7c2d12}"],changeDetection:0})};export{u as DateTimeComponent};
