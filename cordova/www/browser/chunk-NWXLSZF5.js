import{a as s,b as d,c}from"./chunk-VPQEQBVO.js";import{Ba as a,Ka as p,ab as i,bb as o,cb as t,db as n,zb as e}from"./chunk-QMXD7TGL.js";import"./chunk-NWJ5J3BN.js";var y=class l{code1=`// Employee with natural ordering by salary
public class Employee implements Comparable<Employee> {
    private final String name;
    private final double salary;
    private final String dept;

    public Employee(String name, double salary, String dept) {
        this.name = name; this.salary = salary; this.dept = dept;
    }
    public String getName()   { return name; }
    public double getSalary() { return salary; }
    public String getDept()   { return dept; }

    @Override
    public int compareTo(Employee other) {
        // negative \u2192 this < other, 0 \u2192 equal, positive \u2192 this > other
        return Double.compare(this.salary, other.salary);
    }
}

List<Employee> employees = new ArrayList<>(List.of(
    new Employee("Alice", 90_000, "Eng"),
    new Employee("Bob",   75_000, "HR"),
    new Employee("Carol", 95_000, "Eng")
));

Collections.sort(employees); // uses compareTo \u2014 sorted by salary ascending
// [Bob(75k), Alice(90k), Carol(95k)]

TreeSet<Employee> set = new TreeSet<>(employees); // keeps sorted order automatically`;code2=`// Multiple Comparators \u2014 no changes to Employee class needed
Comparator<Employee> byName =
    Comparator.comparing(Employee::getName);

Comparator<Employee> bySalaryDesc =
    Comparator.comparing(Employee::getSalary).reversed();

Comparator<Employee> byDeptThenSalary =
    Comparator.comparing(Employee::getDept)
              .thenComparing(Employee::getSalary);

Comparator<Employee> byDeptThenSalaryDesc =
    Comparator.comparing(Employee::getDept)
              .thenComparing(Employee::getSalary)
              .reversed();

// Sort employees: Engineering first, then by salary desc within dept
employees.sort(
    Comparator.comparing(Employee::getDept)
              .thenComparing(Comparator.comparing(Employee::getSalary).reversed())
);

// Null-safe comparator
Comparator<String> nullSafe =
    Comparator.nullsFirst(Comparator.naturalOrder());`;code3=`List<Employee> employees = List.of(
    new Employee("Alice", 90_000, "Eng"),
    new Employee("Bob",   75_000, "HR"),
    new Employee("Carol", 95_000, "Eng"),
    new Employee("Dave",  80_000, "HR")
);

// Natural order (requires Comparable)
List<Employee> bySalary = employees.stream()
    .sorted()
    .toList();

// Custom: sort by name ascending
List<Employee> byName = employees.stream()
    .sorted(Comparator.comparing(Employee::getName))
    .toList();

// Custom: sort by dept, then salary descending
List<Employee> complex = employees.stream()
    .sorted(Comparator.comparing(Employee::getDept)
                      .thenComparing(Comparator.comparing(Employee::getSalary).reversed()))
    .toList();

// Top earner
Optional<Employee> topEarner = employees.stream()
    .max(Comparator.comparing(Employee::getSalary));`;code4=`// Lambda comparator \u2014 verbose form
Comparator<Employee> byName1 =
    (a, b) -> a.getName().compareTo(b.getName());

// Lambda comparator \u2014 using Integer.compare for numeric fields
Comparator<Employee> bySalary1 =
    (a, b) -> Double.compare(a.getSalary(), b.getSalary());

// Method reference comparator (cleanest)
Comparator<Employee> byName2 = Comparator.comparing(Employee::getName);

// Chained method references
Comparator<Employee> byDeptThenName =
    Comparator.comparing(Employee::getDept)
              .thenComparing(Employee::getName);

// Sort a list with a lambda
employees.sort((a, b) -> a.getName().compareTo(b.getName()));

// Arrays.sort with lambda (works for arrays too)
Employee[] arr = employees.toArray(new Employee[0]);
Arrays.sort(arr, Comparator.comparing(Employee::getSalary).reversed());`;code5=`// TreeSet \u2014 sorted by natural order (compareTo)
TreeSet<Employee> byNaturalOrder = new TreeSet<>(employees);
// iterates in ascending salary order

// TreeSet \u2014 sorted by name using a Comparator
TreeSet<Employee> byName = new TreeSet<>(
    Comparator.comparing(Employee::getName)
);
byName.addAll(employees);

// TreeMap \u2014 keys kept sorted
TreeMap<String, Employee> byDeptMap = new TreeMap<>();
employees.forEach(e -> byDeptMap.put(e.getDept() + "_" + e.getName(), e));
// iterates alphabetically by key

// TreeMap with custom Comparator on key
TreeMap<Employee, String> empMap = new TreeMap<>(
    Comparator.comparing(Employee::getSalary)
);
employees.forEach(e -> empMap.put(e, e.getDept()));
// first entry = lowest salary
Employee lowestPaid = empMap.firstKey();
// last entry = highest salary
Employee highestPaid = empMap.lastKey();`;static \u0275fac=function(m){return new(m||l)};static \u0275cmp=p({type:l,selectors:[["app-topic-comparable-comparator"]],decls:191,vars:11,consts:[["title","Comparable & Comparator","subtitle","Define natural ordering with Comparable and flexible custom ordering with Comparator. Learn chaining, reversing, and sorting with the Streams API.","badge","CORE JAVA","gradient","linear-gradient(135deg, #4c1d95, #8b5cf6)"],[1,"section"],[1,"section-heading"],["name","arrow-up-down","css","icon-violet",3,"size"],[1,"prose"],[3,"code"],["name","sliders","css","icon-violet",3,"size"],["name","filter","css","icon-violet",3,"size"],["name","code","css","icon-violet",3,"size"],["name","layers","css","icon-violet",3,"size"],["name","briefcase","css","icon-violet",3,"size"],[1,"tips-list"],[1,"tip-card"],[1,"tip-num"],[1,"tip-title"],[1,"tip-desc"]],template:function(m,r){m&1&&(o(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),n(3,"app-icon",3),e(4," Comparable \u2014 Natural Ordering "),t(),o(5,"div",4)(6,"p")(7,"strong"),e(8,"Comparable<T>"),t(),e(9," lets a class define its own "),o(10,"em"),e(11,"natural ordering"),t(),e(12," by implementing "),o(13,"code"),e(14,"compareTo(T other)"),t(),e(15,". The method must return: "),t(),o(16,"ul")(17,"li")(18,"strong"),e(19,"Negative"),t(),e(20," \u2014 "),o(21,"code"),e(22,"this"),t(),e(23," is less than "),o(24,"code"),e(25,"other"),t()(),o(26,"li")(27,"strong"),e(28,"Zero"),t(),e(29," \u2014 they are equal"),t(),o(30,"li")(31,"strong"),e(32,"Positive"),t(),e(33," \u2014 "),o(34,"code"),e(35,"this"),t(),e(36," is greater than "),o(37,"code"),e(38,"other"),t()()(),o(39,"p")(40,"code"),e(41,"Collections.sort()"),t(),e(42,", "),o(43,"code"),e(44,"Arrays.sort()"),t(),e(45,", "),o(46,"code"),e(47,"TreeSet"),t(),e(48,", and "),o(49,"code"),e(50,"TreeMap"),t(),e(51," all rely on this ordering automatically. "),t(),n(52,"app-code-block",5),t()(),o(53,"section",1)(54,"h2",2),n(55,"app-icon",6),e(56," Comparator \u2014 Custom Ordering "),t(),o(57,"div",4)(58,"p")(59,"strong"),e(60,"Comparator<T>"),t(),e(61," is an external ordering strategy \u2014 it lives outside the class being sorted and can define multiple different orderings. The factory methods "),o(62,"code"),e(63,"Comparator.comparing()"),t(),e(64,", "),o(65,"code"),e(66,".thenComparing()"),t(),e(67,", and "),o(68,"code"),e(69,".reversed()"),t(),e(70," allow elegant chaining without anonymous classes. "),t(),n(71,"app-code-block",5),t()(),o(72,"section",1)(73,"h2",2),n(74,"app-icon",7),e(75," Sorting with Streams "),t(),o(76,"div",4)(77,"p")(78,"code"),e(79,".sorted()"),t(),e(80," on a stream uses the natural order (requires "),o(81,"code"),e(82,"Comparable"),t(),e(83,"). Pass a "),o(84,"code"),e(85,"Comparator"),t(),e(86," to "),o(87,"code"),e(88,".sorted(comparator)"),t(),e(89," for custom ordering. The original collection is "),o(90,"strong"),e(91,"never"),t(),e(92," mutated. "),t(),n(93,"app-code-block",5),t()(),o(94,"section",1)(95,"h2",2),n(96,"app-icon",8),e(97," Lambda Comparators "),t(),o(98,"div",4)(99,"p"),e(100," Because "),o(101,"code"),e(102,"Comparator<T>"),t(),e(103," is a "),o(104,"strong"),e(105,"functional interface"),t(),e(106,", you can express it as a lambda or method reference \u2014 no anonymous class boilerplate needed. "),t(),n(107,"app-code-block",5),t()(),o(108,"section",1)(109,"h2",2),n(110,"app-icon",9),e(111," TreeSet & TreeMap Ordering "),t(),o(112,"div",4)(113,"p")(114,"code"),e(115,"TreeSet"),t(),e(116," and "),o(117,"code"),e(118,"TreeMap"),t(),e(119," keep elements sorted at all times. They use "),o(120,"code"),e(121,"compareTo()"),t(),e(122," if no "),o(123,"code"),e(124,"Comparator"),t(),e(125," is provided. Always pass a "),o(126,"code"),e(127,"Comparator"),t(),e(128," to the constructor when sorting objects that do not implement "),o(129,"code"),e(130,"Comparable"),t(),e(131,". "),t(),n(132,"app-code-block",5),t()(),o(133,"section",1)(134,"h2",2),n(135,"app-icon",10),e(136," Interview Tips "),t(),o(137,"div",11)(138,"div",12)(139,"div",13),e(140,"1"),t(),o(141,"div")(142,"h4",14),e(143,"Comparable vs Comparator"),t(),o(144,"p",15)(145,"code"),e(146,"Comparable"),t(),e(147," defines one natural ordering inside the class (modify the class). "),o(148,"code"),e(149,"Comparator"),t(),e(150," defines ordering outside the class \u2014 you can have as many as you like without touching the original class."),t()()(),o(151,"div",12)(152,"div",13),e(153,"2"),t(),o(154,"div")(155,"h4",14),e(156,"compareTo contract must be consistent with equals"),t(),o(157,"p",15),e(158,"If "),o(159,"code"),e(160,"a.compareTo(b) == 0"),t(),e(161," then "),o(162,"code"),e(163,"a.equals(b)"),t(),e(164," should be "),o(165,"code"),e(166,"true"),t(),e(167,". Violating this causes surprising behaviour in "),o(168,"code"),e(169,"TreeSet"),t(),e(170," and "),o(171,"code"),e(172,"TreeMap"),t(),e(173," (they use "),o(174,"code"),e(175,"compareTo"),t(),e(176,", not "),o(177,"code"),e(178,"equals"),t(),e(179,", to check membership)."),t()()(),o(180,"div",12)(181,"div",13),e(182,"3"),t(),o(183,"div")(184,"h4",14),e(185,"Comparator.comparing chains"),t(),o(186,"p",15),e(187,"Use "),o(188,"code"),e(189,"Comparator.comparing(Employee::getDept).thenComparing(Employee::getSalary).reversed()"),t(),e(190," instead of writing a custom class. It is type-safe, readable, and composed without boilerplate."),t()()()()()()),m&2&&(a(3),i("size",28),a(49),i("code",r.code1),a(3),i("size",28),a(16),i("code",r.code2),a(3),i("size",28),a(19),i("code",r.code3),a(3),i("size",28),a(11),i("code",r.code4),a(3),i("size",28),a(22),i("code",r.code5),a(3),i("size",28))},dependencies:[s,d,c],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#1b1b1b;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #D6DDD2}.icon-violet[_ngcontent-%COMP%]{color:#8b5cf6}.prose[_ngcontent-%COMP%]{font-size:.9rem;color:#52665a;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:14px 0;padding-left:22px;list-style:disc}.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:8px}.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#1b1b1b;font-weight:700}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f5f3ff;padding:2px 7px;border-radius:5px;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#4c1d95}.tips-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.tip-card[_ngcontent-%COMP%]{display:flex;gap:16px;padding:20px 24px;border-radius:16px;border:1px solid #D6DDD2;background:#fff}.tip-num[_ngcontent-%COMP%]{width:36px;height:36px;min-width:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:#8b5cf6;color:#fff;font-size:.85rem;font-weight:800}.tip-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#1b1b1b;margin:0 0 6px}.tip-desc[_ngcontent-%COMP%]{font-size:.82rem;color:#52665a;line-height:1.55;margin:0}.tip-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f5f3ff;padding:2px 5px;border-radius:4px;font-family:JetBrains Mono,monospace;font-size:.75rem;color:#4c1d95}"],changeDetection:0})};export{y as ComparableComparatorComponent};
