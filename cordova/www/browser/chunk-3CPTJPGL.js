import{a as c,b as m,c as p}from"./chunk-IN5CYMS5.js";import"./chunk-IS4X7JQG.js";import"./chunk-7SFQX2NP.js";import"./chunk-JTAKQG6P.js";import{P as i,S as d,ba as o,ca as n,da as t,ea as l,wa as e}from"./chunk-UO6CZCBJ.js";import"./chunk-JKY3FJOK.js";import"./chunk-36LMHX4H.js";import"./chunk-QSPX3XV4.js";import"./chunk-CFQFX75D.js";import"./chunk-5AR3GM6G.js";import"./chunk-DGLFGWVP.js";import"./chunk-OQOWVL3R.js";import"./chunk-VSDHJBUA.js";import"./chunk-4WFVMWDK.js";import"./chunk-M2X7KQLB.js";import"./chunk-DVVH2KKN.js";import"./chunk-NV3QH4JK.js";import"./chunk-2DGDOVBR.js";import"./chunk-OZYWYLNK.js";import"./chunk-42C7ZIID.js";import"./chunk-NWJ5J3BN.js";var g=class s{code1=`// Java 14 and earlier \u2014 the painful old way
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
// - Copy-paste from IDE / DB tool breaks immediately`;code2=`// Java 15+ \u2014 text block for JSON (much cleaner)
String json = """
        {
          "name": "Alice",
          "age": 30,
          "roles": ["admin", "user"],
          "active": true
        }
        """;

// SQL query \u2014 reads exactly like the real query
String sql = """
        SELECT u.id, u.name, o.total
        FROM   users u
        JOIN   orders o ON u.id = o.user_id
        WHERE  u.active = true
        ORDER BY o.total DESC
        LIMIT  10
        """;

// HTML snippet \u2014 no escaping needed
String html = """
        <div class="card">
          <h2>Hello, %s!</h2>
          <p>Welcome back.</p>
        </div>
        """.formatted("Alice");

System.out.println(json);
System.out.println(sql);
System.out.println(html);`;code3=`// The closing """ position controls indentation

// Example 1: closing """ at same indent as content
// \u2192 common indent stripped, result has NO leading spaces
String a = """
        line one
        line two
        """;   // <-- closing at column 8 \u2192 8 spaces stripped
// a == "line one\\nline two\\n"

// Example 2: closing """ to the LEFT of content
// \u2192 result keeps the extra spaces (intentional indent)
String b = """
        line one
        line two
""";           // <-- closing at column 0 \u2192 0 spaces stripped
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
System.out.println("---c---\\n" + c);`;code4=`// Standard escapes still work
String tab = """
        col1\\tcol2\\tcol3
        val1\\tval2\\tval3
        """;

// NEW in Java 15: line continuation (\\<newline>)
// Suppresses the newline \u2014 useful for long single-line strings
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
System.out.println(padded);`;code5=`// indent(n) \u2014 add (positive) or remove (negative) leading spaces
String original = """
        Hello
        World
        """;

String indented = original.indent(4);
// "    Hello\\n    World\\n"

String dedented = "    Hello\\n    World\\n".indent(-2);
// "  Hello\\n  World\\n"

// stripIndent() \u2014 programmatically strip common leading whitespace
// Useful when building strings at runtime (not compile-time text blocks)
String runtime = "    line one\\n    line two\\n    line three\\n";
String stripped = runtime.stripIndent();
// "line one\\nline two\\nline three\\n"

// translateEscapes() \u2014 process \\n, \\t etc. from config / user input
// (Text blocks at compile-time don't need this \u2014 it's for runtime strings)
String fromConfig = "First line\\\\nSecond line\\\\tTabbed";
String translated = fromConfig.translateEscapes();
// "First line\\nSecond line\\tTabbed"
System.out.println(translated);

// Combining: load template from DB, strip indent, fill placeholders
String template = "    Dear {name},\\n    Your order {id} shipped.\\n";
String message = template.stripIndent()
                         .replace("{name}", "Alice")
                         .replace("{id}", "ORD-999");
System.out.println(message);`;static \u0275fac=function(r){return new(r||s)};static \u0275cmp=d({type:s,selectors:[["app-topic-text-blocks"]],decls:147,vars:11,consts:[["title","Text Blocks","subtitle","Write clean multi-line strings with Java 15+ text blocks. No more escape sequences for JSON, SQL, HTML, or XML embedded in Java code.","badge","CORE JAVA","gradient","linear-gradient(135deg, #064e3b, #10b981)"],[1,"section"],[1,"section-heading"],["name","alert-triangle","css","icon-emerald",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-emerald",3,"size"],["name","align-left","css","icon-emerald",3,"size"],["name","terminal","css","icon-emerald",3,"size"],["name","layers","css","icon-emerald",3,"size"],["name","briefcase","css","icon-emerald",3,"size"],[1,"tips-list"],[1,"tip-card"],[1,"tip-num"],[1,"tip-title"],[1,"tip-desc"]],template:function(r,a){r&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),l(3,"app-icon",3),e(4," The Problem with String Concatenation"),t(),n(5,"div",4)(6,"p"),e(7,"Before text blocks, embedding multi-line content in Java strings was painful. Every newline required an explicit "),n(8,"code"),e(9,"\\n"),t(),e(10,", every quote needed escaping with "),n(11,"code"),e(12,'\\"'),t(),e(13,", and every line had to be joined with "),n(14,"code"),e(15,"+"),t(),e(16,". The result was brittle, unreadable code that was nearly impossible to diff or maintain."),t(),n(17,"p"),e(18,"Consider embedding a simple JSON payload \u2014 the old way looked like this:"),t(),l(19,"app-code-block",5),t()(),n(20,"section",1)(21,"h2",2),l(22,"app-icon",6),e(23," Text Block Syntax (Java 15+)"),t(),n(24,"div",4)(25,"p"),e(26,"Text blocks use a triple-quote delimiter "),n(27,"code"),e(28,'"""'),t(),e(29,". The opening "),n(30,"code"),e(31,'"""'),t(),e(32," must be followed by a newline \u2014 content begins on the next line. The closing "),n(33,"code"),e(34,'"""'),t(),e(35," position controls indentation stripping. Java automatically removes incidental whitespace."),t(),l(36,"app-code-block",5),t()(),n(37,"section",1)(38,"h2",2),l(39,"app-icon",7),e(40," Indentation and Incidental Whitespace"),t(),n(41,"div",4)(42,"p"),e(43,"The compiler calculates the "),n(44,"strong"),e(45,"common leading whitespace"),t(),e(46," across all non-blank lines (and optionally the closing "),n(47,"code"),e(48,'"""'),t(),e(49,"). This is called "),n(50,"em"),e(51,"incidental whitespace"),t(),e(52," and it is stripped automatically. Moving the closing "),n(53,"code"),e(54,'"""'),t(),e(55," to the left adds intentional indentation to the result."),t(),l(56,"app-code-block",5),t()(),n(57,"section",1)(58,"h2",2),l(59,"app-icon",8),e(60," Escape Sequences in Text Blocks"),t(),n(61,"div",4)(62,"p"),e(63,"Standard escape sequences like "),n(64,"code"),e(65,"\\n"),t(),e(66," and "),n(67,"code"),e(68,"\\t"),t(),e(69," still work inside text blocks. Java 15 introduced two new escape sequences specifically for text blocks: "),n(70,"code"),e(71,"\\<line-terminator>"),t(),e(72," (line continuation \u2014 suppresses the newline) and "),n(73,"code"),e(74,"\\s"),t(),e(75," (explicit space \u2014 prevents trailing whitespace trimming)."),t(),l(76,"app-code-block",5),t()(),n(77,"section",1)(78,"h2",2),l(79,"app-icon",9),e(80," String Methods for Text Blocks"),t(),n(81,"div",4)(82,"p"),e(83,"Java added three "),n(84,"code"),e(85,"String"),t(),e(86," methods that complement text blocks. "),n(87,"code"),e(88,"indent(n)"),t(),e(89," adds or removes leading spaces. "),n(90,"code"),e(91,"stripIndent()"),t(),e(92," removes incidental whitespace programmatically. "),n(93,"code"),e(94,"translateEscapes()"),t(),e(95," processes escape sequences in strings obtained at runtime (e.g., from config files)."),t(),l(96,"app-code-block",5),t()(),n(97,"section",1)(98,"h2",2),l(99,"app-icon",10),e(100," Interview Tips"),t(),n(101,"div",11)(102,"div",12)(103,"div",13),e(104,"1"),t(),n(105,"div")(106,"h4",14),e(107,"Opening Triple-Quote Placement"),t(),n(108,"p",15),e(109,"The opening "),n(110,"code"),e(111,'"""'),t(),e(112," must be on the same line as the assignment with content starting on the "),n(113,"em"),e(114,"next"),t(),e(115," line. Placing content on the same line as "),n(116,"code"),e(117,'"""'),t(),e(118," is a compile error. The closing "),n(119,"code"),e(120,'"""'),t(),e(121," can be on its own line or on the last content line."),t()()(),n(122,"div",12)(123,"div",13),e(124,"2"),t(),n(125,"div")(126,"h4",14),e(127,"Incidental Whitespace Rules"),t(),n(128,"p",15),e(129,"Common leading whitespace is determined by the "),n(130,"em"),e(131,"least-indented"),t(),e(132," non-blank content line, or by the closing "),n(133,"code"),e(134,'"""'),t(),e(135," if it is placed to the left of all content lines. This lets you control final indentation without touching content."),t()()(),n(136,"div",12)(137,"div",13),e(138,"3"),t(),n(139,"div")(140,"h4",14),e(141,"Text Blocks Are Still String"),t(),n(142,"p",15),e(143,"A text block is simply a "),n(144,"code"),e(145,"String"),t(),e(146," \u2014 same type, same methods, same pool interning rules. There is no new type. At compile time the text block is folded into a regular string literal, so there is zero runtime overhead."),t()()()()()()),r&2&&(i(3),o("size",28),i(16),o("code",a.code1),i(3),o("size",28),i(14),o("code",a.code2),i(3),o("size",28),i(17),o("code",a.code3),i(3),o("size",28),i(17),o("code",a.code4),i(3),o("size",28),i(17),o("code",a.code5),i(3),o("size",28))},dependencies:[c,m,p],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#1b1b1b;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #D6DDD2}.icon-emerald[_ngcontent-%COMP%]{color:#10b981}.prose[_ngcontent-%COMP%]{font-size:.9rem;color:#52665a;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:14px 0;padding-left:22px;list-style:disc}.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:8px}.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#1b1b1b;font-weight:700}.prose[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{font-style:italic}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#ecfdf5;padding:2px 7px;border-radius:5px;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#064e3b}.tips-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.tip-card[_ngcontent-%COMP%]{display:flex;gap:16px;padding:20px 24px;border-radius:16px;border:1px solid #D6DDD2;background:#fff}.tip-num[_ngcontent-%COMP%]{width:36px;height:36px;min-width:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:#10b981;color:#fff;font-size:.85rem;font-weight:800}.tip-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#1b1b1b;margin:0 0 6px}.tip-desc[_ngcontent-%COMP%]{font-size:.82rem;color:#52665a;line-height:1.55;margin:0}.tip-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#ecfdf5;padding:2px 5px;border-radius:4px;font-family:JetBrains Mono,monospace;font-size:.75rem;color:#064e3b}"],changeDetection:0})};export{g as TextBlocksComponent};
