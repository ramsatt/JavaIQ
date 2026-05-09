import{a as d,b as p,c as m}from"./chunk-3MUY7VVQ.js";import{$a as o,Ba as i,Ka as c,ab as n,bb as t,cb as r,yb as e}from"./chunk-YTAFWVC7.js";import"./chunk-NWJ5J3BN.js";var u=class a{code1=`// ---- OLD WAY: try-finally \u2014 verbose and error-prone ----
BufferedReader reader = null;
try {
    reader = new BufferedReader(new FileReader("data.txt"));
    String line = reader.readLine();
    processLine(line);
    // If processLine() throws, we fall into finally
} catch (IOException e) {
    System.err.println("Read error: " + e.getMessage());
} finally {
    // Must null-check \u2014 constructor may have failed before assignment
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
// Four levels of nesting just to handle two resources safely!`;code2=`// ---- JAVA 7+: try-with-resources \u2014 clean and safe ----
try (BufferedReader reader = new BufferedReader(new FileReader("data.txt"))) {
    String line;
    while ((line = reader.readLine()) != null) {
        processLine(line);
    }
} catch (IOException e) {
    System.err.println("Error: " + e.getMessage());
}
// reader.close() is guaranteed to be called \u2014 compiler inserts it

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

// Without catch/finally \u2014 just the resource declaration is enough:
try (var stream = Files.newInputStream(Path.of("data.bin"))) {
    return stream.readAllBytes();
}
// FileInputStream is closed automatically, exception propagates normally

// Java 9+: effectively-final variable can be used as resource
BufferedReader br = new BufferedReader(new FileReader("data.txt"));
try (br) {   // no re-declaration needed if br is effectively final
    return br.readLine();
}`;code3=`// ---- Custom AutoCloseable resource ----
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
        if (!closed) {                // idempotent \u2014 safe to call multiple times
            closed = true;
            connection.close();
            System.out.println("Connection closed: " + url);
        }
    }
}

// Usage \u2014 connection guaranteed to close even if query() throws
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
//   Connection closed: jdbc:postgresql://localhost/mydb`;code4=`// ---- Multiple resources \u2014 opened L\u2192R, closed R\u2192L ----
try (
    FileInputStream  src  = new FileInputStream("input.txt");   // opened 1st
    FileOutputStream dest = new FileOutputStream("output.txt")  // opened 2nd
) {
    src.transferTo(dest);
}
// dest.close() called first, then src.close() \u2014 reverse order

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
              // then close() is called \u2192 throws "R1: close() exception"
} catch (Exception e) {
    System.out.println("Primary:    " + e.getMessage());
    // Primary:    R1: body exception  \u2190 body exception is primary

    for (Throwable suppressed : e.getSuppressed()) {
        System.out.println("Suppressed: " + suppressed.getMessage());
        // Suppressed: R1: close() exception  \u2190 not lost!
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
}`;static \u0275fac=function(s){return new(s||a)};static \u0275cmp=c({type:a,selectors:[["app-topic-try-resources"]],decls:180,vars:9,consts:[["title","Try-with-Resources & AutoCloseable","subtitle","Eliminate resource leaks with try-with-resources. Implement AutoCloseable for custom resources. Handle suppressed exceptions and multi-resource blocks.","badge","CORE JAVA","gradient","linear-gradient(135deg, #7f1d1d, #ef4444)"],[1,"section"],[1,"section-heading"],["name","alert-circle","css","icon-red",3,"size"],[1,"prose"],[3,"code"],["name","shield-check","css","icon-red",3,"size"],["name","package","css","icon-red",3,"size"],["name","layers","css","icon-red",3,"size"],["name","briefcase","css","icon-red",3,"size"],[1,"tips-list"],[1,"tip-card"],[1,"tip-num"],[1,"tip-title"],[1,"tip-desc"]],template:function(s,l){s&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),r(3,"app-icon",3),e(4," The Resource Leak Problem "),t(),n(5,"div",4)(6,"p"),e(7," Before Java 7, resources (files, sockets, database connections) had to be closed in "),n(8,"code"),e(9,"finally"),t(),e(10," blocks. This approach was verbose and dangerously error-prone: "),t(),n(11,"ul")(12,"li"),e(13,"If the resource constructor throws, the variable is "),n(14,"code"),e(15,"null"),t(),e(16," \u2014 you must null-check before closing."),t(),n(17,"li"),e(18,"If both the body "),n(19,"em"),e(20,"and"),t(),n(21,"code"),e(22,"close()"),t(),e(23," throw, the body exception is silently swallowed by the finally exception."),t(),n(24,"li"),e(25,"Nested resources require nested "),n(26,"code"),e(27,"try/finally"),t(),e(28," blocks \u2014 deeply unreadable code."),t(),n(29,"li"),e(30,"Developers often forget the "),n(31,"code"),e(32,"finally"),t(),e(33," block entirely, causing silent resource leaks."),t()(),r(34,"app-code-block",5),t()(),n(35,"section",1)(36,"h2",2),r(37,"app-icon",6),e(38," Try-with-Resources (Java 7+) "),t(),n(39,"div",4)(40,"p"),e(41," Java 7 introduced "),n(42,"strong"),e(43,"try-with-resources"),t(),e(44,": declare resources in the "),n(45,"code"),e(46,"try"),t(),e(47," header and the compiler guarantees "),n(48,"code"),e(49,"close()"),t(),e(50," is called \u2014 even if an exception is thrown \u2014 using a hidden "),n(51,"code"),e(52,"finally"),t(),e(53," block. The resource must implement "),n(54,"code"),e(55,"AutoCloseable"),t(),e(56,". "),t(),n(57,"ul")(58,"li"),e(59,"No null checks needed \u2014 if the constructor throws, the variable was never assigned."),t(),n(60,"li"),e(61,"Body exceptions are never swallowed \u2014 they stay primary; close exceptions become suppressed."),t(),n(62,"li"),e(63,"Code is dramatically shorter and safer."),t()(),r(64,"app-code-block",5),t()(),n(65,"section",1)(66,"h2",2),r(67,"app-icon",7),e(68," Implementing AutoCloseable "),t(),n(69,"div",4)(70,"p"),e(71," Any class that holds an external resource should implement "),n(72,"code"),e(73,"AutoCloseable"),t(),e(74," (one method: "),n(75,"code"),e(76,"void close() throws Exception"),t(),e(77,"). This allows instances to be used in try-with-resources. "),t(),n(78,"p")(79,"strong"),e(80,"Best practice"),t(),e(81,": make "),n(82,"code"),e(83,"close()"),t(),e(84," idempotent \u2014 calling it multiple times should be safe. Log or handle errors inside "),n(85,"code"),e(86,"close()"),t(),e(87," rather than letting them propagate unless you have a good reason. "),t(),r(88,"app-code-block",5),t()(),n(89,"section",1)(90,"h2",2),r(91,"app-icon",8),e(92," Multiple Resources & Suppressed Exceptions "),t(),n(93,"div",4)(94,"p"),e(95," You can declare multiple resources in one "),n(96,"code"),e(97,"try"),t(),e(98," header, separated by semicolons. They are opened left-to-right and "),n(99,"strong"),e(100,"closed in reverse order"),t(),e(101," (last opened = first closed). "),t(),n(102,"p")(103,"strong"),e(104,"Suppressed exceptions"),t(),e(105,": if both the try body and a "),n(106,"code"),e(107,"close()"),t(),e(108," call throw, Java preserves the body exception as the primary thrown exception and "),n(109,"em"),e(110,"attaches"),t(),e(111," the close() exception as a suppressed exception. Retrieve them via "),n(112,"code"),e(113,"Throwable.getSuppressed()"),t(),e(114,". This is the opposite of old-style "),n(115,"code"),e(116,"finally"),t(),e(117," which would silently discard the body exception. "),t(),r(118,"app-code-block",5),t()(),n(119,"section",1)(120,"h2",2),r(121,"app-icon",9),e(122," Interview Tips "),t(),n(123,"div",10)(124,"div",11)(125,"div",12),e(126,"1"),t(),n(127,"div")(128,"h4",13),e(129,"Closing Order in Multiple Resources"),t(),n(130,"p",14),e(131,"Resources in "),n(132,"code"),e(133,"try (A a = ...; B b = ...; C c = ...)"),t(),e(134," are closed in "),n(135,"strong"),e(136,"reverse declaration order"),t(),e(137,": C first, then B, then A. This mirrors stack unwinding and ensures that inner resources (which may depend on outer ones) are released before their dependencies."),t()()(),n(138,"div",11)(139,"div",12),e(140,"2"),t(),n(141,"div")(142,"h4",13),e(143,"Suppressed Exceptions \u2014 Primary Is Preserved"),t(),n(144,"p",14),e(145,"In old "),n(146,"code"),e(147,"try/finally"),t(),e(148,", if the body throws E1 and "),n(149,"code"),e(150,"close()"),t(),e(151," throws E2, E2 propagates and E1 is lost forever. With try-with-resources, E1 propagates and E2 is attached as "),n(152,"code"),e(153,"getSuppressed()[0]"),t(),e(154," \u2014 no information is lost. This is a major improvement for debugging."),t()()(),n(155,"div",11)(156,"div",12),e(157,"3"),t(),n(158,"div")(159,"h4",13),e(160,"AutoCloseable vs Closeable"),t(),n(161,"p",14)(162,"code"),e(163,"AutoCloseable"),t(),e(164," (Java 7) declares "),n(165,"code"),e(166,"close() throws Exception"),t(),e(167,". "),n(168,"code"),e(169,"Closeable"),t(),e(170," (Java 5, extends AutoCloseable since Java 7) declares "),n(171,"code"),e(172,"close() throws IOException"),t(),e(173," \u2014 a narrower checked exception. I/O classes implement "),n(174,"code"),e(175,"Closeable"),t(),e(176,". For custom non-I/O resources, implement "),n(177,"code"),e(178,"AutoCloseable"),t(),e(179," directly and narrow the exception type where possible."),t()()()()()()),s&2&&(i(3),o("size",28),i(31),o("code",l.code1),i(3),o("size",28),i(27),o("code",l.code2),i(3),o("size",28),i(21),o("code",l.code3),i(3),o("size",28),i(27),o("code",l.code4),i(3),o("size",28))},dependencies:[d,p,m],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#1b1b1b;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #D6DDD2}.icon-red[_ngcontent-%COMP%]{color:#ef4444}.prose[_ngcontent-%COMP%]{font-size:.9rem;color:#52665a;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:14px 0;padding-left:22px;list-style:disc}.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:8px}.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#1b1b1b;font-weight:700}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#fef2f2;padding:2px 7px;border-radius:5px;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#991b1b}.tips-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.tip-card[_ngcontent-%COMP%]{display:flex;gap:16px;padding:20px 24px;border-radius:16px;border:1px solid #D6DDD2;background:#fff}.tip-num[_ngcontent-%COMP%]{width:36px;height:36px;min-width:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:#ef4444;color:#fff;font-size:.85rem;font-weight:800}.tip-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#1b1b1b;margin:0 0 6px}.tip-desc[_ngcontent-%COMP%]{font-size:.82rem;color:#52665a;line-height:1.55;margin:0}.tip-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#fef2f2;padding:2px 5px;border-radius:4px;font-family:JetBrains Mono,monospace;font-size:.75rem;color:#991b1b}"],changeDetection:0})};export{u as TryResourcesComponent};
