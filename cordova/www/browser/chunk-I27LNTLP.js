import{a as s,b as d,c}from"./chunk-IN5CYMS5.js";import"./chunk-IS4X7JQG.js";import"./chunk-7SFQX2NP.js";import"./chunk-JTAKQG6P.js";import{P as i,S as p,ba as n,ca as o,da as t,ea as a,wa as e}from"./chunk-UO6CZCBJ.js";import"./chunk-JKY3FJOK.js";import"./chunk-36LMHX4H.js";import"./chunk-QSPX3XV4.js";import"./chunk-CFQFX75D.js";import"./chunk-5AR3GM6G.js";import"./chunk-DGLFGWVP.js";import"./chunk-OQOWVL3R.js";import"./chunk-VSDHJBUA.js";import"./chunk-4WFVMWDK.js";import"./chunk-M2X7KQLB.js";import"./chunk-DVVH2KKN.js";import"./chunk-NV3QH4JK.js";import"./chunk-2DGDOVBR.js";import"./chunk-OZYWYLNK.js";import"./chunk-42C7ZIID.js";import"./chunk-NWJ5J3BN.js";var g=class l{code1=`// Employee with natural ordering by salary
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
Employee highestPaid = empMap.lastKey();`;static \u0275fac=function(m){return new(m||l)};static \u0275cmp=p({type:l,selectors:[["app-topic-comparable-comparator"]],decls:193,vars:11,consts:[["title","Comparable & Comparator","subtitle","Define natural ordering with Comparable and flexible custom ordering with Comparator. Learn chaining, reversing, and sorting with the Streams API.","badge","CORE JAVA","gradient","linear-gradient(135deg, #4c1d95, #8b5cf6)"],[1,"section"],[1,"section-heading"],["name","arrow-up-down","css","icon-violet",3,"size"],[1,"topic-hero-container"],["src","/assets/images/topics/comparable-comparator.png","alt","Comparable vs Comparator Visualized",1,"topic-hero-image"],[1,"prose"],[3,"code"],["name","sliders","css","icon-violet",3,"size"],["name","filter","css","icon-violet",3,"size"],["name","code","css","icon-violet",3,"size"],["name","layers","css","icon-violet",3,"size"],["name","briefcase","css","icon-violet",3,"size"],[1,"tips-list"],[1,"tip-card"],[1,"tip-num"],[1,"tip-title"],[1,"tip-desc"]],template:function(m,r){m&1&&(o(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),a(3,"app-icon",3),e(4," Comparable \u2014 Natural Ordering "),t(),o(5,"div",4),a(6,"img",5),t(),o(7,"div",6)(8,"p")(9,"strong"),e(10,"Comparable<T>"),t(),e(11," lets a class define its own "),o(12,"em"),e(13,"natural ordering"),t(),e(14," by implementing "),o(15,"code"),e(16,"compareTo(T other)"),t(),e(17,". The method must return: "),t(),o(18,"ul")(19,"li")(20,"strong"),e(21,"Negative"),t(),e(22," \u2014 "),o(23,"code"),e(24,"this"),t(),e(25," is less than "),o(26,"code"),e(27,"other"),t()(),o(28,"li")(29,"strong"),e(30,"Zero"),t(),e(31," \u2014 they are equal"),t(),o(32,"li")(33,"strong"),e(34,"Positive"),t(),e(35," \u2014 "),o(36,"code"),e(37,"this"),t(),e(38," is greater than "),o(39,"code"),e(40,"other"),t()()(),o(41,"p")(42,"code"),e(43,"Collections.sort()"),t(),e(44,", "),o(45,"code"),e(46,"Arrays.sort()"),t(),e(47,", "),o(48,"code"),e(49,"TreeSet"),t(),e(50,", and "),o(51,"code"),e(52,"TreeMap"),t(),e(53," all rely on this ordering automatically. "),t(),a(54,"app-code-block",7),t()(),o(55,"section",1)(56,"h2",2),a(57,"app-icon",8),e(58," Comparator \u2014 Custom Ordering "),t(),o(59,"div",6)(60,"p")(61,"strong"),e(62,"Comparator<T>"),t(),e(63," is an external ordering strategy \u2014 it lives outside the class being sorted and can define multiple different orderings. The factory methods "),o(64,"code"),e(65,"Comparator.comparing()"),t(),e(66,", "),o(67,"code"),e(68,".thenComparing()"),t(),e(69,", and "),o(70,"code"),e(71,".reversed()"),t(),e(72," allow elegant chaining without anonymous classes. "),t(),a(73,"app-code-block",7),t()(),o(74,"section",1)(75,"h2",2),a(76,"app-icon",9),e(77," Sorting with Streams "),t(),o(78,"div",6)(79,"p")(80,"code"),e(81,".sorted()"),t(),e(82," on a stream uses the natural order (requires "),o(83,"code"),e(84,"Comparable"),t(),e(85,"). Pass a "),o(86,"code"),e(87,"Comparator"),t(),e(88," to "),o(89,"code"),e(90,".sorted(comparator)"),t(),e(91," for custom ordering. The original collection is "),o(92,"strong"),e(93,"never"),t(),e(94," mutated. "),t(),a(95,"app-code-block",7),t()(),o(96,"section",1)(97,"h2",2),a(98,"app-icon",10),e(99," Lambda Comparators "),t(),o(100,"div",6)(101,"p"),e(102," Because "),o(103,"code"),e(104,"Comparator<T>"),t(),e(105," is a "),o(106,"strong"),e(107,"functional interface"),t(),e(108,", you can express it as a lambda or method reference \u2014 no anonymous class boilerplate needed. "),t(),a(109,"app-code-block",7),t()(),o(110,"section",1)(111,"h2",2),a(112,"app-icon",11),e(113," TreeSet & TreeMap Ordering "),t(),o(114,"div",6)(115,"p")(116,"code"),e(117,"TreeSet"),t(),e(118," and "),o(119,"code"),e(120,"TreeMap"),t(),e(121," keep elements sorted at all times. They use "),o(122,"code"),e(123,"compareTo()"),t(),e(124," if no "),o(125,"code"),e(126,"Comparator"),t(),e(127," is provided. Always pass a "),o(128,"code"),e(129,"Comparator"),t(),e(130," to the constructor when sorting objects that do not implement "),o(131,"code"),e(132,"Comparable"),t(),e(133,". "),t(),a(134,"app-code-block",7),t()(),o(135,"section",1)(136,"h2",2),a(137,"app-icon",12),e(138," Interview Tips "),t(),o(139,"div",13)(140,"div",14)(141,"div",15),e(142,"1"),t(),o(143,"div")(144,"h4",16),e(145,"Comparable vs Comparator"),t(),o(146,"p",17)(147,"code"),e(148,"Comparable"),t(),e(149," defines one natural ordering inside the class (modify the class). "),o(150,"code"),e(151,"Comparator"),t(),e(152," defines ordering outside the class \u2014 you can have as many as you like without touching the original class."),t()()(),o(153,"div",14)(154,"div",15),e(155,"2"),t(),o(156,"div")(157,"h4",16),e(158,"compareTo contract must be consistent with equals"),t(),o(159,"p",17),e(160,"If "),o(161,"code"),e(162,"a.compareTo(b) == 0"),t(),e(163," then "),o(164,"code"),e(165,"a.equals(b)"),t(),e(166," should be "),o(167,"code"),e(168,"true"),t(),e(169,". Violating this causes surprising behaviour in "),o(170,"code"),e(171,"TreeSet"),t(),e(172," and "),o(173,"code"),e(174,"TreeMap"),t(),e(175," (they use "),o(176,"code"),e(177,"compareTo"),t(),e(178,", not "),o(179,"code"),e(180,"equals"),t(),e(181,", to check membership)."),t()()(),o(182,"div",14)(183,"div",15),e(184,"3"),t(),o(185,"div")(186,"h4",16),e(187,"Comparator.comparing chains"),t(),o(188,"p",17),e(189,"Use "),o(190,"code"),e(191,"Comparator.comparing(Employee::getDept).thenComparing(Employee::getSalary).reversed()"),t(),e(192," instead of writing a custom class. It is type-safe, readable, and composed without boilerplate."),t()()()()()()),m&2&&(i(3),n("size",28),i(51),n("code",r.code1),i(3),n("size",28),i(16),n("code",r.code2),i(3),n("size",28),i(19),n("code",r.code3),i(3),n("size",28),i(11),n("code",r.code4),i(3),n("size",28),i(22),n("code",r.code5),i(3),n("size",28))},dependencies:[s,d,c],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.topic-hero-container[_ngcontent-%COMP%]{text-align:center;margin:24px 0}.topic-hero-image[_ngcontent-%COMP%]{width:100%;max-width:650px;height:auto;border-radius:12px;box-shadow:0 8px 24px #0000001f;border:1px solid #D6DDD2}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#1b1b1b;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #D6DDD2}.icon-violet[_ngcontent-%COMP%]{color:#8b5cf6}.prose[_ngcontent-%COMP%]{font-size:.9rem;color:#52665a;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:14px 0;padding-left:22px;list-style:disc}.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:8px}.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#1b1b1b;font-weight:700}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f5f3ff;padding:2px 7px;border-radius:5px;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#4c1d95}.tips-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.tip-card[_ngcontent-%COMP%]{display:flex;gap:16px;padding:20px 24px;border-radius:16px;border:1px solid #D6DDD2;background:#fff}.tip-num[_ngcontent-%COMP%]{width:36px;height:36px;min-width:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:#8b5cf6;color:#fff;font-size:.85rem;font-weight:800}.tip-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#1b1b1b;margin:0 0 6px}.tip-desc[_ngcontent-%COMP%]{font-size:.82rem;color:#52665a;line-height:1.55;margin:0}.tip-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f5f3ff;padding:2px 5px;border-radius:4px;font-family:JetBrains Mono,monospace;font-size:.75rem;color:#4c1d95}"],changeDetection:0})};export{g as ComparableComparatorComponent};
