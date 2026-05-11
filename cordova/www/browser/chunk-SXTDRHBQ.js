import{a as m,b as c,c as p}from"./chunk-VPQEQBVO.js";import{Ba as n,Ka as d,ab as r,bb as i,cb as t,db as o,zb as e}from"./chunk-QMXD7TGL.js";import"./chunk-NWJ5J3BN.js";var x=class s{code1=`List<String> names = List.of("Alice", "Bob", "Carol");

// What you write:
for (String name : names) {
    System.out.println(name);
}

// What the compiler generates:
Iterator<String> it = names.iterator();
while (it.hasNext()) {
    String name = it.next();
    System.out.println(name);
}

// Iterable<T> \u2014 the contract your class must fulfill
public interface Iterable<T> {
    Iterator<T> iterator();
}

// Iterator<T> \u2014 the cursor that walks the sequence
public interface Iterator<T> {
    boolean hasNext();   // Is there a next element?
    T next();            // Return next and advance cursor
    default void remove() { throw new UnsupportedOperationException(); }
}`;code2=`List<Integer> numbers = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));

Iterator<Integer> it = numbers.iterator();

// Basic traversal
while (it.hasNext()) {
    Integer n = it.next();
    System.out.println(n);
}
// Calling next() after exhaustion:
// it.next(); // throws NoSuchElementException!

// Safe remove \u2014 delete even numbers during iteration
Iterator<Integer> it2 = numbers.iterator();
while (it2.hasNext()) {
    Integer n = it2.next();
    if (n % 2 == 0) {
        it2.remove(); // removes the element last returned by next()
    }
}
System.out.println(numbers); // [1, 3, 5]

// IllegalStateException example:
Iterator<Integer> bad = numbers.iterator();
// bad.remove(); // IllegalStateException \u2014 next() not called yet`;code3=`List<String> list = new ArrayList<>(Arrays.asList("a", "bb", "ccc", "d"));

// BAD \u2014 throws ConcurrentModificationException
for (String s : list) {
    if (s.length() == 1) {
        list.remove(s); // modCount changes \u2192 CME on next iteration!
    }
}

// FIX 1: Use Iterator.remove()
Iterator<String> it = list.iterator();
while (it.hasNext()) {
    if (it.next().length() == 1) {
        it.remove(); // safe \u2014 updates modCount internally
    }
}

// FIX 2: Collect then removeAll
List<String> toRemove = new ArrayList<>();
for (String s : list) {
    if (s.length() == 1) toRemove.add(s);
}
list.removeAll(toRemove);

// FIX 3: removeIf (Java 8+) \u2014 cleanest approach
list.removeIf(s -> s.length() == 1);
System.out.println(list); // [bb, ccc]

// Also safe: iterate over a copy
for (String s : new ArrayList<>(list)) {
    if (s.length() == 1) list.remove(s);
}`;code4=`// Custom class implementing Iterable<Integer>
public class NumberRange implements Iterable<Integer> {
    private final int start;
    private final int end;   // inclusive

    public NumberRange(int start, int end) {
        this.start = start;
        this.end   = end;
    }

    @Override
    public Iterator<Integer> iterator() {
        return new Iterator<>() {
            private int current = start;

            @Override
            public boolean hasNext() {
                return current <= end;
            }

            @Override
            public Integer next() {
                if (!hasNext()) throw new NoSuchElementException();
                return current++;
            }
        };
    }
}

// Now it works in for-each!
NumberRange range = new NumberRange(1, 5);
for (int n : range) {
    System.out.print(n + " "); // 1 2 3 4 5
}

// Can be iterated multiple times (each call to iterator() creates a new cursor)
for (int n : range) {
    System.out.print(n + " "); // 1 2 3 4 5  (again)
}`;code5=`List<String> words = new ArrayList<>(Arrays.asList("Java", "is", "great"));

// Forward traversal with ListIterator
ListIterator<String> lit = words.listIterator();
while (lit.hasNext()) {
    String w = lit.next();
    lit.set(w.toUpperCase()); // replace in place
}
System.out.println(words); // [JAVA, IS, GREAT]

// Backward traversal \u2014 start at the end
ListIterator<String> rev = words.listIterator(words.size());
while (rev.hasPrevious()) {
    System.out.print(rev.previous() + " "); // GREAT IS JAVA
}

// add() inserts before the element that would be returned by next()
ListIterator<String> ins = words.listIterator();
ins.next();          // moves past "JAVA"
ins.add("ROCKS");   // inserts after "JAVA"
System.out.println(words); // [JAVA, ROCKS, IS, GREAT]

// Useful methods:
// lit.nextIndex()     \u2014 index of element next() would return
// lit.previousIndex() \u2014 index of element previous() would return`;static \u0275fac=function(l){return new(l||s)};static \u0275cmp=d({type:s,selectors:[["app-topic-iterator-iterable"]],decls:222,vars:11,consts:[["title","Iterator & Iterable","subtitle","Understand how for-each works under the hood. Implement Iterable to make custom classes work with for-each, and use Iterator safely with remove().","badge","CORE JAVA","gradient","linear-gradient(135deg, #134e4a, #14b8a6)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-teal",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-teal",3,"size"],["name","alert-triangle","css","icon-teal",3,"size"],["name","layers","css","icon-teal",3,"size"],["name","repeat","css","icon-teal",3,"size"],["name","briefcase","css","icon-teal",3,"size"],[1,"tips-list"],[1,"tip-card"],[1,"tip-num"],[1,"tip-title"],[1,"tip-desc"]],template:function(l,a){l&1&&(i(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),o(3,"app-icon",3),e(4," The for-each Loop Under the Hood "),t(),i(5,"div",4)(6,"p"),e(7," The "),i(8,"code"),e(9,"for-each"),t(),e(10," loop (enhanced for loop) is syntactic sugar. The compiler rewrites it into an "),i(11,"strong"),e(12,"Iterator while-loop"),t(),e(13," at compile time. For this to work, the object must implement "),i(14,"code"),e(15,"Iterable<T>"),t(),e(16,", which has a single method: "),i(17,"code"),e(18,"iterator()"),t(),e(19," returning an "),i(20,"code"),e(21,"Iterator<T>"),t(),e(22,". "),t(),i(23,"ul")(24,"li")(25,"strong"),e(26,"Iterable<T>"),t(),e(27," \u2014 one method: "),i(28,"code"),e(29,"Iterator<T> iterator()"),t()(),i(30,"li")(31,"strong"),e(32,"Iterator<T>"),t(),e(33," \u2014 "),i(34,"code"),e(35,"boolean hasNext()"),t(),e(36,", "),i(37,"code"),e(38,"T next()"),t(),e(39,", optional "),i(40,"code"),e(41,"void remove()"),t()(),i(42,"li"),e(43,"Arrays also work with for-each but are NOT "),i(44,"code"),e(45,"Iterable"),t(),e(46," \u2014 the compiler handles them specially."),t()(),o(47,"app-code-block",5),t()(),i(48,"section",1)(49,"h2",2),o(50,"app-icon",6),e(51," Iterator Interface "),t(),i(52,"div",4)(53,"p")(54,"code"),e(55,"Iterator<T>"),t(),e(56," has three methods. "),i(57,"code"),e(58,"hasNext()"),t(),e(59," returns "),i(60,"code"),e(61,"true"),t(),e(62," if more elements remain. "),i(63,"code"),e(64,"next()"),t(),e(65," returns the next element and advances the cursor \u2014 throws "),i(66,"code"),e(67,"NoSuchElementException"),t(),e(68," if exhausted. "),i(69,"code"),e(70,"remove()"),t(),e(71," removes the last element returned by "),i(72,"code"),e(73,"next()"),t(),e(74," and throws "),i(75,"code"),e(76,"IllegalStateException"),t(),e(77," if "),i(78,"code"),e(79,"next()"),t(),e(80," was not called first. "),t(),o(81,"app-code-block",5),t()(),i(82,"section",1)(83,"h2",2),o(84,"app-icon",7),e(85," ConcurrentModificationException "),t(),i(86,"div",4)(87,"p"),e(88," Modifying a collection (add/remove) while iterating with "),i(89,"code"),e(90,"for-each"),t(),e(91," causes "),i(92,"code"),e(93,"ConcurrentModificationException"),t(),e(94,". The collection's internal "),i(95,"strong"),e(96,"modCount"),t(),e(97," is checked on every "),i(98,"code"),e(99,"next()"),t(),e(100," call. There are three safe approaches: use "),i(101,"code"),e(102,"Iterator.remove()"),t(),e(103,", collect items then call "),i(104,"code"),e(105,"removeAll()"),t(),e(106,", or use "),i(107,"code"),e(108,"removeIf()"),t(),e(109," (Java 8+). "),t(),o(110,"app-code-block",5),t()(),i(111,"section",1)(112,"h2",2),o(113,"app-icon",8),e(114," Implementing Iterable "),t(),i(115,"div",4)(116,"p"),e(117," Any class can be made compatible with "),i(118,"code"),e(119,"for-each"),t(),e(120," by implementing "),i(121,"code"),e(122,"Iterable<T>"),t(),e(123," and providing a custom "),i(124,"code"),e(125,"Iterator"),t(),e(126,". This is commonly used for custom data structures like ranges, trees, or domain objects that wrap a sequence. "),t(),o(127,"app-code-block",5),t()(),i(128,"section",1)(129,"h2",2),o(130,"app-icon",9),e(131," ListIterator "),t(),i(132,"div",4)(133,"p")(134,"code"),e(135,"ListIterator<E>"),t(),e(136," extends "),i(137,"code"),e(138,"Iterator"),t(),e(139," and is specific to "),i(140,"code"),e(141,"List"),t(),e(142,". It supports "),i(143,"strong"),e(144,"bidirectional traversal"),t(),e(145," with "),i(146,"code"),e(147,"hasPrevious()"),t(),e(148," and "),i(149,"code"),e(150,"previous()"),t(),e(151,", and allows "),i(152,"code"),e(153,"add()"),t(),e(154," and "),i(155,"code"),e(156,"set()"),t(),e(157," during iteration. "),t(),o(158,"app-code-block",5),t()(),i(159,"section",1)(160,"h2",2),o(161,"app-icon",10),e(162," Interview Tips "),t(),i(163,"div",11)(164,"div",12)(165,"div",13),e(166,"1"),t(),i(167,"div")(168,"h4",14),e(169,"ConcurrentModificationException"),t(),i(170,"p",15),e(171,"Never add or remove from a collection during a "),i(172,"code"),e(173,"for-each"),t(),e(174," loop \u2014 it uses "),i(175,"code"),e(176,"Iterator"),t(),e(177," internally and will throw CME. Use "),i(178,"code"),e(179,"Iterator.remove()"),t(),e(180," or "),i(181,"code"),e(182,"list.removeIf(predicate)"),t(),e(183," instead."),t()()(),i(184,"div",12)(185,"div",13),e(186,"2"),t(),i(187,"div")(188,"h4",14),e(189,"Fail-Fast vs Fail-Safe Iterators"),t(),i(190,"p",15)(191,"code"),e(192,"ArrayList"),t(),e(193," is "),i(194,"strong"),e(195,"fail-fast"),t(),e(196," \u2014 it throws CME on structural modification. "),i(197,"code"),e(198,"CopyOnWriteArrayList"),t(),e(199," is "),i(200,"strong"),e(201,"fail-safe"),t(),e(202," \u2014 it iterates over a snapshot of the data and never throws CME, at the cost of memory and stale reads."),t()()(),i(203,"div",12)(204,"div",13),e(205,"3"),t(),i(206,"div")(207,"h4",14),e(208,"Iterable vs Iterator"),t(),i(209,"p",15)(210,"code"),e(211,"Iterable"),t(),e(212," is a factory \u2014 it produces an "),i(213,"code"),e(214,"Iterator"),t(),e(215," each time "),i(216,"code"),e(217,"iterator()"),t(),e(218," is called, so it can be iterated multiple times. "),i(219,"code"),e(220,"Iterator"),t(),e(221," has state and is single-use \u2014 once exhausted, it cannot be reset."),t()()()()()()),l&2&&(n(3),r("size",28),n(44),r("code",a.code1),n(3),r("size",28),n(31),r("code",a.code2),n(3),r("size",28),n(26),r("code",a.code3),n(3),r("size",28),n(14),r("code",a.code4),n(3),r("size",28),n(28),r("code",a.code5),n(3),r("size",28))},dependencies:[m,c,p],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#1b1b1b;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #D6DDD2}.icon-teal[_ngcontent-%COMP%]{color:#14b8a6}.prose[_ngcontent-%COMP%]{font-size:.9rem;color:#52665a;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:14px 0;padding-left:22px;list-style:disc}.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:8px}.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#1b1b1b;font-weight:700}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f0fdfa;padding:2px 7px;border-radius:5px;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#134e4a}.tips-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.tip-card[_ngcontent-%COMP%]{display:flex;gap:16px;padding:20px 24px;border-radius:16px;border:1px solid #D6DDD2;background:#fff}.tip-num[_ngcontent-%COMP%]{width:36px;height:36px;min-width:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:#14b8a6;color:#fff;font-size:.85rem;font-weight:800}.tip-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#1b1b1b;margin:0 0 6px}.tip-desc[_ngcontent-%COMP%]{font-size:.82rem;color:#52665a;line-height:1.55;margin:0}.tip-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f0fdfa;padding:2px 5px;border-radius:4px;font-family:JetBrains Mono,monospace;font-size:.75rem;color:#134e4a}"],changeDetection:0})};export{x as IteratorIterableComponent};
