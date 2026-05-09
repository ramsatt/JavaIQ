import{a as p,b as d,c as m}from"./chunk-3MUY7VVQ.js";import{$a as o,Ba as n,Ka as s,ab as i,bb as e,cb as r,yb as t}from"./chunk-YTAFWVC7.js";import"./chunk-NWJ5J3BN.js";var g=class l{codeIntro=`// Without Flyweight: 1 million tree objects \xD7 1 KB each = 1 GB RAM
// With Flyweight:    shared TreeType (color, texture) + lightweight position

// Intrinsic state  = shared, immutable (stored in flyweight)
// Extrinsic state  = unique per instance (passed by client)`;codeFlyweight=`// Flyweight interface
interface CharacterFlyweight {
    void render(int x, int y, String color); // x,y,color = extrinsic
}`;codeConcrete=`// Concrete Flyweight \u2014 stores intrinsic state only
class Character implements CharacterFlyweight {
    private final char symbol;   // intrinsic: shared
    private final String font;   // intrinsic: shared
    private final int size;      // intrinsic: shared

    Character(char symbol, String font, int size) {
        this.symbol = symbol;
        this.font   = font;
        this.size   = size;
    }

    @Override
    public void render(int x, int y, String color) {
        // extrinsic state (x, y, color) passed in at render time
        System.out.printf("'%c' [%s %dpx] at (%d,%d) in %s%n",
            symbol, font, size, x, y, color);
    }
}`;codeFactory=`// Flyweight Factory \u2014 cache and reuse instances
class CharacterFactory {
    private final Map<String, CharacterFlyweight> pool = new HashMap<>();

    public CharacterFlyweight get(char symbol, String font, int size) {
        String key = symbol + font + size;
        return pool.computeIfAbsent(key,
            k -> new Character(symbol, font, size));
    }

    public int poolSize() { return pool.size(); }
}

// Client \u2014 only stores extrinsic state
CharacterFactory factory = new CharacterFactory();
// Render 10,000 'A' chars \u2014 only ONE Character object created
for (int i = 0; i < 10_000; i++) {
    factory.get('A', "Arial", 12).render(i, 0, "black");
}
System.out.println(factory.poolSize()); // 1`;codeReal=`// Java's built-in Flyweight examples:

// 1. String Pool
String a = "hello";
String b = "hello";
System.out.println(a == b); // true \u2014 same object from pool

// 2. Integer Cache (-128 to 127)
Integer x = 127;
Integer y = 127;
System.out.println(x == y); // true \u2014 cached

Integer p = 200;
Integer q = 200;
System.out.println(p == q); // false \u2014 not cached

// 3. Boolean.TRUE / Boolean.FALSE
// 4. Enum constants (each enum value is a singleton flyweight)`;static \u0275fac=function(c){return new(c||l)};static \u0275cmp=s({type:l,selectors:[["app-topic-dp-flyweight"]],decls:41,vars:7,consts:[["title","Flyweight","subtitle","Share fine-grained objects to reduce memory. Separate intrinsic (shared) state from extrinsic (context) state.","badge","DESIGN PATTERNS","gradient","linear-gradient(135deg, #4338ca, #818cf8)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-indigo",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-purple",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(c,a){c&1&&(i(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),r(3,"app-icon",3),t(4," What is Flyweight?"),e(),i(5,"div",4)(6,"p"),t(7,"The "),i(8,"strong"),t(9,"Flyweight"),e(),t(10," pattern reduces memory usage by sharing common state across many fine-grained objects. Split object state into "),i(11,"em"),t(12,"intrinsic"),e(),t(13," (shared, immutable) and "),i(14,"em"),t(15,"extrinsic"),e(),t(16," (context-specific, passed in)."),e(),i(17,"p"),t(18,"Classic use cases: rendering thousands of characters in a text editor, particles in a game engine, tree objects in a forest simulation."),e(),r(19,"app-code-block",5),e()(),i(20,"section",1)(21,"h2",2),r(22,"app-icon",6),t(23," Implementations"),e(),i(24,"div",7)(25,"div",8)(26,"h3",9),t(27,"Flyweight Interface"),e(),r(28,"app-code-block",5),e(),i(29,"div",8)(30,"h3",9),t(31,"Concrete Flyweight"),e(),r(32,"app-code-block",5),e(),i(33,"div",8)(34,"h3",9),t(35,"Flyweight Factory"),e(),r(36,"app-code-block",5),e(),i(37,"div",8)(38,"h3",9),t(39,"Real-World: String Pool"),e(),r(40,"app-code-block",5),e()()()()),c&2&&(n(3),o("size",28),n(16),o("code",a.codeIntro),n(3),o("size",28),n(6),o("code",a.codeFlyweight),n(4),o("code",a.codeConcrete),n(4),o("code",a.codeFactory),n(4),o("code",a.codeReal))},dependencies:[p,d,m],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.icon-purple[_ngcontent-%COMP%]{color:#7c3aed}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{g as DpFlyweightComponent};
