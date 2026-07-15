import{a as p,b as d,c as m}from"./chunk-IN5CYMS5.js";import"./chunk-IS4X7JQG.js";import"./chunk-7SFQX2NP.js";import"./chunk-JTAKQG6P.js";import{P as o,S as s,ba as r,ca as i,da as e,ea as n,wa as t}from"./chunk-UO6CZCBJ.js";import"./chunk-JKY3FJOK.js";import"./chunk-36LMHX4H.js";import"./chunk-QSPX3XV4.js";import"./chunk-CFQFX75D.js";import"./chunk-5AR3GM6G.js";import"./chunk-DGLFGWVP.js";import"./chunk-OQOWVL3R.js";import"./chunk-VSDHJBUA.js";import"./chunk-4WFVMWDK.js";import"./chunk-M2X7KQLB.js";import"./chunk-DVVH2KKN.js";import"./chunk-NV3QH4JK.js";import"./chunk-2DGDOVBR.js";import"./chunk-OZYWYLNK.js";import"./chunk-42C7ZIID.js";import"./chunk-NWJ5J3BN.js";var g=class l{codeIntro=`// Without Flyweight: 1 million tree objects \xD7 1 KB each = 1 GB RAM
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
// 4. Enum constants (each enum value is a singleton flyweight)`;static \u0275fac=function(c){return new(c||l)};static \u0275cmp=s({type:l,selectors:[["app-topic-dp-flyweight"]],decls:42,vars:7,consts:[["title","Flyweight","subtitle","Share fine-grained objects to reduce memory. Separate intrinsic (shared) state from extrinsic (context) state.","badge","DESIGN PATTERNS","gradient","linear-gradient(135deg, #4338ca, #818cf8)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-indigo",3,"size"],["src","/assets/images/topics/dp-flyweight.png","alt","Flyweight Pattern Visualized",1,"topic-hero-image"],[1,"prose"],[3,"code"],["name","code","css","icon-purple",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(c,a){c&1&&(i(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),n(3,"app-icon",3),t(4," What is Flyweight?"),e(),n(5,"img",4),i(6,"div",5)(7,"p"),t(8,"The "),i(9,"strong"),t(10,"Flyweight"),e(),t(11," pattern reduces memory usage by sharing common state across many fine-grained objects. Split object state into "),i(12,"em"),t(13,"intrinsic"),e(),t(14," (shared, immutable) and "),i(15,"em"),t(16,"extrinsic"),e(),t(17," (context-specific, passed in)."),e(),i(18,"p"),t(19,"Classic use cases: rendering thousands of characters in a text editor, particles in a game engine, tree objects in a forest simulation."),e(),n(20,"app-code-block",6),e()(),i(21,"section",1)(22,"h2",2),n(23,"app-icon",7),t(24," Implementations"),e(),i(25,"div",8)(26,"div",9)(27,"h3",10),t(28,"Flyweight Interface"),e(),n(29,"app-code-block",6),e(),i(30,"div",9)(31,"h3",10),t(32,"Concrete Flyweight"),e(),n(33,"app-code-block",6),e(),i(34,"div",9)(35,"h3",10),t(36,"Flyweight Factory"),e(),n(37,"app-code-block",6),e(),i(38,"div",9)(39,"h3",10),t(40,"Real-World: String Pool"),e(),n(41,"app-code-block",6),e()()()()),c&2&&(o(3),r("size",28),o(17),r("code",a.codeIntro),o(3),r("size",28),o(6),r("code",a.codeFlyweight),o(4),r("code",a.codeConcrete),o(4),r("code",a.codeFactory),o(4),r("code",a.codeReal))},dependencies:[p,d,m],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.icon-purple[_ngcontent-%COMP%]{color:#7c3aed}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{g as DpFlyweightComponent};
