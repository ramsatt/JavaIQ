import{a as s,b as c,c as p}from"./chunk-IN5CYMS5.js";import"./chunk-IS4X7JQG.js";import"./chunk-7SFQX2NP.js";import"./chunk-JTAKQG6P.js";import{P as i,S as d,ba as o,ca as n,da as t,ea as a,wa as e}from"./chunk-UO6CZCBJ.js";import"./chunk-JKY3FJOK.js";import"./chunk-36LMHX4H.js";import"./chunk-QSPX3XV4.js";import"./chunk-CFQFX75D.js";import"./chunk-5AR3GM6G.js";import"./chunk-DGLFGWVP.js";import"./chunk-OQOWVL3R.js";import"./chunk-VSDHJBUA.js";import"./chunk-4WFVMWDK.js";import"./chunk-M2X7KQLB.js";import"./chunk-DVVH2KKN.js";import"./chunk-NV3QH4JK.js";import"./chunk-2DGDOVBR.js";import"./chunk-OZYWYLNK.js";import"./chunk-42C7ZIID.js";import"./chunk-NWJ5J3BN.js";var u=class l{code1=`// Old, broken API (avoid!)
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
    .toFormatter();`;static \u0275fac=function(m){return new(m||l)};static \u0275cmp=d({type:l,selectors:[["app-topic-date-time"]],decls:196,vars:11,consts:[["title","Date & Time API","subtitle","Master the modern java.time package (Java 8+). Work with LocalDate, LocalTime, LocalDateTime, ZonedDateTime, Duration, Period, and DateTimeFormatter.","badge","CORE JAVA","gradient","linear-gradient(135deg, #1c1917, #f97316)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-orange",3,"size"],[1,"topic-hero-container"],["src","/assets/images/topics/date-time.png","alt","Date Time Visualized",1,"topic-hero-image"],[1,"prose"],[3,"code"],["name","calendar","css","icon-orange",3,"size"],["name","globe","css","icon-orange",3,"size"],["name","clock","css","icon-orange",3,"size"],["name","type","css","icon-orange",3,"size"],["name","briefcase","css","icon-orange",3,"size"],[1,"tips-list"],[1,"tip-card"],[1,"tip-num"],[1,"tip-title"],[1,"tip-desc"]],template:function(m,r){m&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),a(3,"app-icon",3),e(4," Why the New API? "),t(),n(5,"div",4),a(6,"img",5),t(),n(7,"div",6)(8,"p")(9,"code"),e(10,"java.util.Date"),t(),e(11," and "),n(12,"code"),e(13,"Calendar"),t(),e(14," (Java 1.0 / 1.1) were notoriously broken: mutable, not thread-safe, months were 0-indexed (January = 0), and the API was confusing. Java 8 introduced "),n(15,"strong"),e(16,"java.time"),t(),e(17," (JSR-310): immutable, thread-safe, ISO-8601 by default, and cleanly designed. "),t(),n(18,"ul")(19,"li")(20,"strong"),e(21,"LocalDate"),t(),e(22," \u2014 date only, no time, no timezone (e.g., "),n(23,"code"),e(24,"2024-03-15"),t(),e(25,")"),t(),n(26,"li")(27,"strong"),e(28,"LocalTime"),t(),e(29," \u2014 time only, no date, no timezone (e.g., "),n(30,"code"),e(31,"14:30:00"),t(),e(32,")"),t(),n(33,"li")(34,"strong"),e(35,"LocalDateTime"),t(),e(36," \u2014 date + time, no timezone"),t(),n(37,"li")(38,"strong"),e(39,"ZonedDateTime"),t(),e(40," \u2014 date + time + timezone (e.g., "),n(41,"code"),e(42,"2024-03-15T14:30:00+05:30[Asia/Kolkata]"),t(),e(43,")"),t(),n(44,"li")(45,"strong"),e(46,"Instant"),t(),e(47," \u2014 a point on the UTC timeline (nanosecond precision), ideal for logging/timestamps"),t()(),a(48,"app-code-block",7),t()(),n(49,"section",1)(50,"h2",2),a(51,"app-icon",8),e(52," LocalDate, LocalTime, LocalDateTime "),t(),n(53,"div",6)(54,"p"),e(55," All "),n(56,"code"),e(57,"java.time"),t(),e(58," objects are "),n(59,"strong"),e(60,"immutable"),t(),e(61," \u2014 every plus/minus operation returns a "),n(62,"em"),e(63,"new"),t(),e(64," object. Use factory methods "),n(65,"code"),e(66,"now()"),t(),e(67,", "),n(68,"code"),e(69,"of(...)"),t(),e(70,", and "),n(71,"code"),e(72,"parse()"),t(),e(73," to create instances. Months are 1-indexed (March = 3, not 2). "),t(),a(74,"app-code-block",7),t()(),n(75,"section",1)(76,"h2",2),a(77,"app-icon",9),e(78," ZonedDateTime & Instant "),t(),n(79,"div",6)(80,"p")(81,"code"),e(82,"ZonedDateTime"),t(),e(83," pairs a "),n(84,"code"),e(85,"LocalDateTime"),t(),e(86," with a "),n(87,"code"),e(88,"ZoneId"),t(),e(89," (e.g., "),n(90,"code"),e(91,'"America/New_York"'),t(),e(92,"). It handles DST transitions automatically. "),n(93,"code"),e(94,"Instant"),t(),e(95," is always UTC \u2014 perfect for storing event times in databases or logs. "),t(),a(96,"app-code-block",7),t()(),n(97,"section",1)(98,"h2",2),a(99,"app-icon",10),e(100," Duration & Period "),t(),n(101,"div",6)(102,"p")(103,"strong"),e(104,"Duration"),t(),e(105," measures time-based amounts: hours, minutes, seconds, nanoseconds. "),n(106,"strong"),e(107,"Period"),t(),e(108," measures date-based amounts: years, months, days. Use "),n(109,"code"),e(110,"between()"),t(),e(111," to compute the gap between two dates or times. "),t(),a(112,"app-code-block",7),t()(),n(113,"section",1)(114,"h2",2),a(115,"app-icon",11),e(116," DateTimeFormatter "),t(),n(117,"div",6)(118,"p")(119,"code"),e(120,"DateTimeFormatter"),t(),e(121," handles both formatting (date \u2192 string) and parsing (string \u2192 date). It is "),n(122,"strong"),e(123,"immutable and thread-safe"),t(),e(124,", unlike the old "),n(125,"code"),e(126,"SimpleDateFormat"),t(),e(127,". Use "),n(128,"code"),e(129,"ofPattern()"),t(),e(130," for custom formats or the predefined ISO constants. "),t(),a(131,"app-code-block",7),t()(),n(132,"section",1)(133,"h2",2),a(134,"app-icon",12),e(135," Interview Tips "),t(),n(136,"div",13)(137,"div",14)(138,"div",15),e(139,"1"),t(),n(140,"div")(141,"h4",16),e(142,"Immutability"),t(),n(143,"p",17),e(144,"All "),n(145,"code"),e(146,"java.time"),t(),e(147," objects are immutable \u2014 "),n(148,"code"),e(149,"date.plusDays(7)"),t(),e(150," does NOT modify "),n(151,"code"),e(152,"date"),t(),e(153,"; it returns a new object. Always capture the return value: "),n(154,"code"),e(155,"LocalDate next = date.plusDays(7);"),t()()()(),n(156,"div",14)(157,"div",15),e(158,"2"),t(),n(159,"div")(160,"h4",16),e(161,"LocalDate vs Instant"),t(),n(162,"p",17),e(163,"Use "),n(164,"code"),e(165,"LocalDate"),t(),e(166," for business dates (birthdays, deadlines) where timezone doesn't matter. Use "),n(167,"code"),e(168,"Instant"),t(),e(169," for machine timestamps (audit logs, event times) \u2014 it's always UTC and unambiguous across timezones."),t()()(),n(170,"div",14)(171,"div",15),e(172,"3"),t(),n(173,"div")(174,"h4",16),e(175,"Legacy Date Conversion"),t(),n(176,"p",17),e(177,"Bridge between old and new APIs with: "),n(178,"code"),e(179,"date.toInstant()"),t(),e(180," to go from "),n(181,"code"),e(182,"java.util.Date"),t(),e(183," to "),n(184,"code"),e(185,"Instant"),t(),e(186,", and "),n(187,"code"),e(188,"Date.from(instant)"),t(),e(189," to go back. Use "),n(190,"code"),e(191,"instant.atZone(ZoneId.systemDefault()).toLocalDate()"),t(),e(192," for a "),n(193,"code"),e(194,"LocalDate"),t(),e(195,"."),t()()()()()()),m&2&&(i(3),o("size",28),i(45),o("code",r.code1),i(3),o("size",28),i(23),o("code",r.code2),i(3),o("size",28),i(19),o("code",r.code3),i(3),o("size",28),i(13),o("code",r.code4),i(3),o("size",28),i(16),o("code",r.code5),i(3),o("size",28))},dependencies:[s,c,p],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.topic-hero-container[_ngcontent-%COMP%]{text-align:center;margin:24px 0}.topic-hero-image[_ngcontent-%COMP%]{width:100%;max-width:650px;height:auto;border-radius:12px;box-shadow:0 8px 24px #0000001f;border:1px solid #D6DDD2}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#1b1b1b;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #D6DDD2}.icon-orange[_ngcontent-%COMP%]{color:#f97316}.prose[_ngcontent-%COMP%]{font-size:.9rem;color:#52665a;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:14px 0;padding-left:22px;list-style:disc}.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:8px}.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#1b1b1b;font-weight:700}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#fff7ed;padding:2px 7px;border-radius:5px;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#7c2d12}.tips-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.tip-card[_ngcontent-%COMP%]{display:flex;gap:16px;padding:20px 24px;border-radius:16px;border:1px solid #D6DDD2;background:#fff}.tip-num[_ngcontent-%COMP%]{width:36px;height:36px;min-width:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:#f97316;color:#fff;font-size:.85rem;font-weight:800}.tip-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#1b1b1b;margin:0 0 6px}.tip-desc[_ngcontent-%COMP%]{font-size:.82rem;color:#52665a;line-height:1.55;margin:0}.tip-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#fff7ed;padding:2px 5px;border-radius:4px;font-family:JetBrains Mono,monospace;font-size:.75rem;color:#7c2d12}"],changeDetection:0})};export{u as DateTimeComponent};
