import{a as p,b as d,c as m}from"./chunk-IN5CYMS5.js";import"./chunk-IS4X7JQG.js";import"./chunk-7SFQX2NP.js";import"./chunk-JTAKQG6P.js";import{P as i,S as c,ba as o,ca as r,da as e,ea as n,wa as t}from"./chunk-UO6CZCBJ.js";import"./chunk-JKY3FJOK.js";import"./chunk-36LMHX4H.js";import"./chunk-QSPX3XV4.js";import"./chunk-CFQFX75D.js";import"./chunk-5AR3GM6G.js";import"./chunk-DGLFGWVP.js";import"./chunk-OQOWVL3R.js";import"./chunk-VSDHJBUA.js";import"./chunk-4WFVMWDK.js";import"./chunk-M2X7KQLB.js";import"./chunk-DVVH2KKN.js";import"./chunk-NV3QH4JK.js";import"./chunk-2DGDOVBR.js";import"./chunk-OZYWYLNK.js";import"./chunk-42C7ZIID.js";import"./chunk-NWJ5J3BN.js";var u=class s{codeIntro=`// Client traverses without knowing the structure
for (Book book : library) {          // for-each
    System.out.println(book.title());
}
// Works whether library is backed by an array, linked list,
// binary tree, or database cursor \u2014 client doesn't care.`;codeCustom=`// Custom Iterator over a fixed array
class NumberIterator implements Iterator<Integer> {
    private final int[] data;
    private int cursor = 0;

    NumberIterator(int[] data) { this.data = data; }

    @Override
    public boolean hasNext() { return cursor < data.length; }

    @Override
    public Integer next() {
        if (!hasNext()) throw new NoSuchElementException();
        return data[cursor++];
    }
}

// Usage
Iterator<Integer> it = new NumberIterator(new int[]{1, 2, 3});
while (it.hasNext()) {
    System.out.println(it.next()); // 1  2  3
}`;codeIterable=`// Make a custom collection for-each compatible
class NumberRange implements Iterable<Integer> {
    private final int start, end;

    NumberRange(int start, int end) {
        this.start = start; this.end = end;
    }

    @Override
    public Iterator<Integer> iterator() {
        return new Iterator<>() {
            int current = start;
            public boolean hasNext() { return current <= end; }
            public Integer next()    { return current++; }
        };
    }
}

// Now it works with for-each
for (int n : new NumberRange(1, 5)) {
    System.out.print(n + " "); // 1 2 3 4 5
}`;codeFiltered=`// Iterator that filters on the fly
class EvenIterator implements Iterator<Integer> {
    private final Iterator<Integer> source;
    private Integer next;

    EvenIterator(Iterator<Integer> source) {
        this.source = source;
        advance();
    }

    private void advance() {
        next = null;
        while (source.hasNext()) {
            int val = source.next();
            if (val % 2 == 0) { next = val; break; }
        }
    }

    public boolean hasNext() { return next != null; }
    public Integer next() {
        Integer result = next;
        advance();
        return result;
    }
}

List<Integer> nums = List.of(1,2,3,4,5,6);
Iterator<Integer> evens = new EvenIterator(nums.iterator());
evens.forEachRemaining(System.out::println); // 2 4 6`;codeBuiltin=`// Java's built-in Iterator usage
List<String> list = new ArrayList<>(List.of("a","b","c"));
Iterator<String> it = list.iterator();

while (it.hasNext()) {
    String s = it.next();
    if (s.equals("b")) it.remove(); // safe removal during iteration
}
System.out.println(list); // [a, c]

// ListIterator \u2014 bidirectional
ListIterator<String> li = list.listIterator(list.size());
while (li.hasPrevious()) {
    System.out.print(li.previous() + " "); // c a (reverse)
}

// Streams use Spliterator internally (parallel-capable iterator)
list.stream().filter(s -> !s.isEmpty()).forEach(System.out::println);`;static \u0275fac=function(l){return new(l||s)};static \u0275cmp=c({type:s,selectors:[["app-topic-dp-iterator"]],decls:45,vars:7,consts:[["title","Iterator","subtitle","Provide a way to access elements of a collection sequentially without exposing its underlying structure.","badge","DESIGN PATTERNS","gradient","linear-gradient(135deg, #4338ca, #818cf8)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-indigo",3,"size"],["src","/assets/images/topics/dp-iterator.png","alt","Iterator Pattern Visualized",1,"topic-hero-image"],[1,"prose"],[3,"code"],["name","code","css","icon-purple",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(l,a){l&1&&(r(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),n(3,"app-icon",3),t(4," What is Iterator?"),e(),n(5,"img",4),r(6,"div",5)(7,"p"),t(8,"The "),r(9,"strong"),t(10,"Iterator"),e(),t(11," pattern provides a standard way to traverse a collection without knowing whether it's a list, tree, graph, or custom data structure. The collection implements "),r(12,"code"),t(13,"Iterable"),e(),t(14,"; the iterator implements "),r(15,"code"),t(16,"Iterator"),e(),t(17,"."),e(),r(18,"p"),t(19,"Java bakes this pattern into the language \u2014 every "),r(20,"code"),t(21,"for-each"),e(),t(22," loop uses it under the hood."),e(),n(23,"app-code-block",6),e()(),r(24,"section",1)(25,"h2",2),n(26,"app-icon",7),t(27," Implementations"),e(),r(28,"div",8)(29,"div",9)(30,"h3",10),t(31,"Custom Iterator"),e(),n(32,"app-code-block",6),e(),r(33,"div",9)(34,"h3",10),t(35,"Iterable Collection"),e(),n(36,"app-code-block",6),e(),r(37,"div",9)(38,"h3",10),t(39,"Filtered Iterator"),e(),n(40,"app-code-block",6),e(),r(41,"div",9)(42,"h3",10),t(43,"Java Built-ins"),e(),n(44,"app-code-block",6),e()()()()),l&2&&(i(3),o("size",28),i(20),o("code",a.codeIntro),i(3),o("size",28),i(6),o("code",a.codeCustom),i(4),o("code",a.codeIterable),i(4),o("code",a.codeFiltered),i(4),o("code",a.codeBuiltin))},dependencies:[p,d,m],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.icon-purple[_ngcontent-%COMP%]{color:#7c3aed}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f1f5f9;padding:2px 6px;border-radius:4px;font-size:.8rem;color:#4338ca}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{u as DpIteratorComponent};
