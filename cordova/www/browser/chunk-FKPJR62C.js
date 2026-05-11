import{a as p,b as d,c as m}from"./chunk-VPQEQBVO.js";import{Ba as n,Ka as c,ab as i,bb as r,cb as e,db as o,zb as t}from"./chunk-QMXD7TGL.js";import"./chunk-NWJ5J3BN.js";var u=class s{codeIntro=`// Client traverses without knowing the structure
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
list.stream().filter(s -> !s.isEmpty()).forEach(System.out::println);`;static \u0275fac=function(l){return new(l||s)};static \u0275cmp=c({type:s,selectors:[["app-topic-dp-iterator"]],decls:44,vars:7,consts:[["title","Iterator","subtitle","Provide a way to access elements of a collection sequentially without exposing its underlying structure.","badge","DESIGN PATTERNS","gradient","linear-gradient(135deg, #4338ca, #818cf8)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-indigo",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-purple",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(l,a){l&1&&(r(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),o(3,"app-icon",3),t(4," What is Iterator?"),e(),r(5,"div",4)(6,"p"),t(7,"The "),r(8,"strong"),t(9,"Iterator"),e(),t(10," pattern provides a standard way to traverse a collection without knowing whether it's a list, tree, graph, or custom data structure. The collection implements "),r(11,"code"),t(12,"Iterable"),e(),t(13,"; the iterator implements "),r(14,"code"),t(15,"Iterator"),e(),t(16,"."),e(),r(17,"p"),t(18,"Java bakes this pattern into the language \u2014 every "),r(19,"code"),t(20,"for-each"),e(),t(21," loop uses it under the hood."),e(),o(22,"app-code-block",5),e()(),r(23,"section",1)(24,"h2",2),o(25,"app-icon",6),t(26," Implementations"),e(),r(27,"div",7)(28,"div",8)(29,"h3",9),t(30,"Custom Iterator"),e(),o(31,"app-code-block",5),e(),r(32,"div",8)(33,"h3",9),t(34,"Iterable Collection"),e(),o(35,"app-code-block",5),e(),r(36,"div",8)(37,"h3",9),t(38,"Filtered Iterator"),e(),o(39,"app-code-block",5),e(),r(40,"div",8)(41,"h3",9),t(42,"Java Built-ins"),e(),o(43,"app-code-block",5),e()()()()),l&2&&(n(3),i("size",28),n(19),i("code",a.codeIntro),n(3),i("size",28),n(6),i("code",a.codeCustom),n(4),i("code",a.codeIterable),n(4),i("code",a.codeFiltered),n(4),i("code",a.codeBuiltin))},dependencies:[p,d,m],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.icon-purple[_ngcontent-%COMP%]{color:#7c3aed}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f1f5f9;padding:2px 6px;border-radius:4px;font-size:.8rem;color:#4338ca}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{u as DpIteratorComponent};
