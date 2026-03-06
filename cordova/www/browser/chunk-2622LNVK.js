import{a as h,b as x,c as v}from"./chunk-5NK5W44O.js";import{Gb as d,Pa as i,Qb as c,Tb as t,Ub as l,Wb as b,ab as f,na as p,sb as a,tb as n,ub as e,vb as r}from"./chunk-WSUICUG6.js";import"./chunk-NWJ5J3BN.js";var S=class u{activeStage=p(0);anon="";lambda="";methodRef="";status=p("See how verbose anonymous classes become concise lambdas and method references.");isAnimating=p(!1);codeIntro=`// Anonymous inner class (verbose)
Runnable r = new Runnable() {
    public void run() {
        System.out.println("Hello");
    }
};

// Lambda expression (concise!)
Runnable r = () -> System.out.println("Hello");

// Method reference (shortest)
Runnable r = System.out::println;`;codeCore=`// Predicate<T>: T -> boolean
Predicate<String> isLong = s -> s.length() > 5;

// Function<T,R>: T -> R
Function<String, Integer> len = String::length;

// Consumer<T>: T -> void
Consumer<String> print = System.out::println;

// Supplier<T>: () -> T
Supplier<List<String>> factory = ArrayList::new;

// BiFunction<T,U,R>: (T, U) -> R
BiFunction<Integer,Integer,Integer> add =
    Integer::sum;`;codeMethodRef=`// 1. Static method
Function<String,Integer> parse =
    Integer::parseInt;

// 2. Instance method of an object
Consumer<String> print =
    System.out::println;

// 3. Instance method of a type
Function<String,String> upper =
    String::toUpperCase;

// 4. Constructor
Supplier<ArrayList<String>> factory =
    ArrayList::new;`;codeComposition=`// Predicate composition
Predicate<Integer> even = n -> n % 2 == 0;
Predicate<Integer> positive = n -> n > 0;

Predicate<Integer> evenAndPos =
    even.and(positive);
Predicate<Integer> evenOrPos =
    even.or(positive);
Predicate<Integer> odd = even.negate();

// Function composition
Function<Integer,Integer> doubleIt = n -> n*2;
Function<Integer,Integer> addThree = n -> n+3;

// doubleIt first, then addThree
Function<Integer,Integer> pipeline =
    doubleIt.andThen(addThree);
pipeline.apply(5); // (5*2)+3 = 13`;codeClosure=`// Lambdas capture "effectively final" vars
String prefix = "Hello";
// prefix = "Hi"; \u2190 would break!

Function<String, String> greet =
    name -> prefix + " " + name;

greet.apply("World"); // "Hello World"

// \u26A0 Can't modify captured variables
// The following would NOT compile:
// int count = 0;
// forEach(x -> count++); \u2190 ERROR`;sleep(m){return new Promise(s=>setTimeout(s,m))}async showComparator(){this.isAnimating()||(this.isAnimating.set(!0),this.activeStage.set(0),this.anon=`Comparator<String> cmp =
  new Comparator<String>() {
    public int compare(String a, String b) {
      return a.compareTo(b);
    }
  };`,this.lambda=`Comparator<String> cmp =
  (a, b) -> a.compareTo(b);`,this.methodRef=`Comparator<String> cmp =
  String::compareTo;`,this.activeStage.set(1),this.status.set("Anonymous class: 6 lines of ceremony for one comparison..."),await this.sleep(1500),this.activeStage.set(2),this.status.set("Lambda: just (a, b) -> a.compareTo(b) \u2014 one expression!"),await this.sleep(1500),this.activeStage.set(3),this.status.set("Method reference: String::compareTo \u2014 maximum conciseness! \u2705"),this.isAnimating.set(!1))}async showPredicate(){this.isAnimating()||(this.isAnimating.set(!0),this.activeStage.set(0),this.anon=`Predicate<String> pred =
  new Predicate<String>() {
    public boolean test(String s) {
      return s.isEmpty();
    }
  };`,this.lambda=`Predicate<String> pred =
  s -> s.isEmpty();`,this.methodRef=`Predicate<String> pred =
  String::isEmpty;`,this.activeStage.set(1),this.status.set("Anonymous Predicate: verbose boilerplate..."),await this.sleep(1500),this.activeStage.set(2),this.status.set("Lambda: s -> s.isEmpty() \u2014 clean and readable!"),await this.sleep(1500),this.activeStage.set(3),this.status.set("Method reference: String::isEmpty \u2014 crystal clear! \u2705"),this.isAnimating.set(!1))}async showConsumer(){this.isAnimating()||(this.isAnimating.set(!0),this.activeStage.set(0),this.anon=`Consumer<String> con =
  new Consumer<String>() {
    public void accept(String s) {
      System.out.println(s);
    }
  };`,this.lambda=`Consumer<String> con =
  s -> System.out.println(s);`,this.methodRef=`Consumer<String> con =
  System.out::println;`,this.activeStage.set(1),this.status.set("Anonymous Consumer: so much code for a print..."),await this.sleep(1500),this.activeStage.set(2),this.status.set("Lambda: s -> System.out.println(s)"),await this.sleep(1500),this.activeStage.set(3),this.status.set("Method reference: System.out::println \u2014 elegant! \u2705"),this.isAnimating.set(!1))}resetDemo(){this.activeStage.set(0),this.anon="",this.lambda="",this.methodRef="",this.status.set("See how verbose anonymous classes become concise lambdas and method references."),this.isAnimating.set(!1)}static \u0275fac=function(s){return new(s||u)};static \u0275cmp=f({type:u,selectors:[["app-topic-lambdas"]],decls:141,vars:37,consts:[["title","Lambda Expressions","subtitle","Concise functional code. Master lambda syntax, method references, and functional interfaces for cleaner, more expressive Java.","badge","CORE JAVA","gradient","linear-gradient(135deg, #c2410c, #fb923c)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-orange",3,"size"],[1,"prose"],[3,"code"],[1,"viz-card"],[1,"viz-title"],["name","play","css","icon-orange",3,"size"],[1,"transform-demo"],[1,"code-stage"],[1,"stage-label"],[1,"stage-code"],[1,"transform-arrow"],[1,"viz-status"],[1,"viz-controls"],[1,"btn","btn-orange",3,"click","disabled"],["name","play",3,"size"],[1,"btn","btn-purple",3,"click","disabled"],[1,"btn","btn-teal",3,"click","disabled"],[1,"btn","btn-gray",3,"click","disabled"],["name","refresh-cw",3,"size"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"],["name","arrow-right","css","icon-indigo",3,"size"],[1,"op-desc"],["name","briefcase","css","icon-orange",3,"size"],[1,"use-cases"],[1,"use-case","orange"],[1,"use-num","orange-bg"],[1,"use-title"],[1,"use-desc"],[1,"use-case","blue"],[1,"use-num","blue-bg"],[1,"use-case","purple"],[1,"use-num","purple-bg"]],template:function(s,o){s&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),r(3,"app-icon",3),t(4," What are Lambdas?"),e(),n(5,"div",4)(6,"p"),t(7,"A "),n(8,"strong"),t(9,"lambda expression"),e(),t(10," is a concise way to represent an anonymous function \u2014 a function without a name. Introduced in Java 8, lambdas make code more readable and enable functional programming patterns."),e(),n(11,"ul")(12,"li")(13,"strong"),t(14,"Syntax:"),e(),n(15,"code"),t(16,"(parameters) -> expression"),e(),t(17," or "),n(18,"code"),t(19),e()(),n(20,"li")(21,"strong"),t(22,"Target:"),e(),t(23," Used wherever a functional interface (single abstract method) is expected."),e(),n(24,"li")(25,"strong"),t(26,"Method References:"),e(),n(27,"code"),t(28,"Class::method"),e(),t(29," \u2014 even shorter syntax for lambdas that just call a method."),e()(),r(30,"app-code-block",5),e()(),n(31,"section",1)(32,"div",6)(33,"h3",7),r(34,"app-icon",8),t(35," Lambda Transformation Visualizer"),e(),n(36,"div",9)(37,"div",10)(38,"span",11),t(39,"ANONYMOUS CLASS"),e(),n(40,"pre",12),t(41),e()(),n(42,"div",13)(43,"span"),t(44,"simplify \u2728"),e()(),n(45,"div",10)(46,"span",11),t(47,"LAMBDA"),e(),n(48,"pre",12),t(49),e()(),n(50,"div",13)(51,"span"),t(52,"simplify \u2728"),e()(),n(53,"div",10)(54,"span",11),t(55,"METHOD REFERENCE"),e(),n(56,"pre",12),t(57),e()()(),n(58,"div",14),t(59),e(),n(60,"div",15)(61,"button",16),d("click",function(){return o.showComparator()}),r(62,"app-icon",17),t(63," Comparator Example"),e(),n(64,"button",18),d("click",function(){return o.showPredicate()}),r(65,"app-icon",17),t(66," Predicate Example"),e(),n(67,"button",19),d("click",function(){return o.showConsumer()}),r(68,"app-icon",17),t(69," Consumer Example"),e(),n(70,"button",20),d("click",function(){return o.resetDemo()}),r(71,"app-icon",21),t(72," Reset"),e()()()(),n(73,"section",1)(74,"h2",2),r(75,"app-icon",22),t(76," Functional Interfaces"),e(),n(77,"div",23)(78,"div",24)(79,"h3",25),r(80,"app-icon",26),t(81," Core Interfaces"),e(),n(82,"p",27),t(83,"Predicate, Function, Consumer, Supplier \u2014 the big four."),e(),r(84,"app-code-block",5),e(),n(85,"div",24)(86,"h3",25),r(87,"app-icon",26),t(88," Method References"),e(),n(89,"p",27),t(90,"Four types of method references for maximum brevity."),e(),r(91,"app-code-block",5),e(),n(92,"div",24)(93,"h3",25),r(94,"app-icon",26),t(95," Composition"),e(),n(96,"p",27),t(97,"Chain functional interfaces with and, or, compose, andThen."),e(),r(98,"app-code-block",5),e(),n(99,"div",24)(100,"h3",25),r(101,"app-icon",26),t(102," Closures & Scope"),e(),n(103,"p",27),t(104,"Lambdas can capture effectively final local variables."),e(),r(105,"app-code-block",5),e()()(),n(106,"section",1)(107,"h2",2),r(108,"app-icon",28),t(109," Real-Time Use Cases"),e(),n(110,"div",29)(111,"div",30)(112,"div",31),t(113,"1"),e(),n(114,"div")(115,"h4",32),t(116,"Spring Bean Configuration"),e(),n(117,"p",33)(118,"code"),t(119,"@Bean Supplier<Executor> executor = () -> Executors.newFixedThreadPool(4);"),e(),t(120," \u2014 lambdas simplify bean factory methods."),e()()(),n(121,"div",34)(122,"div",35),t(123,"2"),e(),n(124,"div")(125,"h4",32),t(126,"Event Handlers"),e(),n(127,"p",33)(128,"code"),t(129,"button.setOnAction(e -> handleClick(e));"),e(),t(130," \u2014 no more bulky anonymous inner classes for GUI callbacks."),e()()(),n(131,"div",36)(132,"div",37),t(133,"3"),e(),n(134,"div")(135,"h4",32),t(136,"Collection Processing"),e(),n(137,"p",33)(138,"code"),t(139,"list.sort(Comparator.comparing(User::getName))"),e(),t(140," \u2014 lambdas and method references make collection operations one-liners."),e()()()()()()),s&2&&(i(3),a("size",28),i(16),b("(parameters) -> ","{"," statements; ","}"),i(11),a("code",o.codeIntro),i(4),a("size",22),i(3),c("active",o.activeStage()>=1),i(4),l(o.anon),i(),c("visible",o.activeStage()>=2),i(3),c("active",o.activeStage()>=2),i(4),l(o.lambda),i(),c("visible",o.activeStage()>=3),i(3),c("active",o.activeStage()>=3),i(4),l(o.methodRef),i(2),l(o.status()),i(2),a("disabled",o.isAnimating()),i(),a("size",16),i(2),a("disabled",o.isAnimating()),i(),a("size",16),i(2),a("disabled",o.isAnimating()),i(),a("size",16),i(2),a("disabled",o.isAnimating()),i(),a("size",16),i(4),a("size",28),i(5),a("size",18),i(4),a("code",o.codeCore),i(3),a("size",18),i(4),a("code",o.codeMethodRef),i(3),a("size",18),i(4),a("code",o.codeComposition),i(3),a("size",18),i(4),a("code",o.codeClosure),i(3),a("size",28))},dependencies:[h,x,v],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-orange[_ngcontent-%COMP%]{color:#ea580c}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:14px 0;padding-left:22px;list-style:disc}.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:8px}.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#0f172a;font-weight:700}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f1f5f9;padding:2px 7px;border-radius:5px;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#ea580c}.viz-card[_ngcontent-%COMP%]{background:#fff;border-radius:18px;border:1px solid #e2e8f0;box-shadow:0 4px 16px #0000000d;padding:28px 24px}.viz-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;font-size:1.15rem;font-weight:700;color:#0f172a;margin:0 0 24px}.transform-demo[_ngcontent-%COMP%]{margin-bottom:20px}.code-stage[_ngcontent-%COMP%]{padding:14px 16px;border-radius:12px;border:2px solid #e2e8f0;background:#fff;margin-bottom:8px;opacity:.4;transition:all .4s}.code-stage.active[_ngcontent-%COMP%]{opacity:1;border-color:#ea580c;background:#fff7ed}.stage-label[_ngcontent-%COMP%]{display:block;font-size:.5rem;font-weight:700;letter-spacing:.12em;color:#94a3b8;margin-bottom:6px}.stage-code[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:.68rem;color:#0f172a;line-height:1.6;margin:0;white-space:pre-wrap}.transform-arrow[_ngcontent-%COMP%]{text-align:center;font-size:.68rem;font-weight:700;color:#ea580c;padding:4px 0;opacity:0;transition:opacity .4s}.transform-arrow.visible[_ngcontent-%COMP%]{opacity:1}.viz-status[_ngcontent-%COMP%]{background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:12px 16px;text-align:center;font-family:JetBrains Mono,monospace;font-size:.78rem;color:#334155;margin-bottom:20px}.viz-controls[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;gap:10px}.btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:7px;padding:10px 18px;border-radius:10px;font-size:.78rem;font-weight:600;border:none;cursor:pointer;transition:all .2s}.btn[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:not-allowed}.btn-orange[_ngcontent-%COMP%]{background:#ea580c;color:#fff}.btn-orange[_ngcontent-%COMP%]:hover:not(:disabled){background:#c2410c}.btn-purple[_ngcontent-%COMP%]{background:#7c3aed;color:#fff}.btn-purple[_ngcontent-%COMP%]:hover:not(:disabled){background:#6d28d9}.btn-teal[_ngcontent-%COMP%]{background:#0d9488;color:#fff}.btn-teal[_ngcontent-%COMP%]:hover:not(:disabled){background:#0f766e}.btn-gray[_ngcontent-%COMP%]{background:#e2e8f0;color:#334155}.btn-gray[_ngcontent-%COMP%]:hover:not(:disabled){background:#cbd5e1}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0;box-shadow:0 1px 3px #0000000a}.op-card[_ngcontent-%COMP%]:hover{box-shadow:0 4px 12px #0000000f}.op-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}.op-desc[_ngcontent-%COMP%]{font-size:.78rem;color:#64748b;line-height:1.55;margin:0}.use-cases[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.use-case[_ngcontent-%COMP%]{display:flex;gap:16px;padding:20px;border-radius:14px;border:1px solid}.use-case.orange[_ngcontent-%COMP%]{background:#fff7ed;border-color:#fed7aa}.use-case.blue[_ngcontent-%COMP%]{background:#eff6ff;border-color:#bfdbfe}.use-case.purple[_ngcontent-%COMP%]{background:#faf5ff;border-color:#d8b4fe}.use-num[_ngcontent-%COMP%]{width:34px;height:34px;min-width:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:.78rem;font-weight:800}.orange-bg[_ngcontent-%COMP%]{background:#ea580c}.blue-bg[_ngcontent-%COMP%]{background:#3b82f6}.purple-bg[_ngcontent-%COMP%]{background:#8b5cf6}.use-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 4px}.use-desc[_ngcontent-%COMP%]{font-size:.78rem;line-height:1.55;margin:0;color:#334155}.use-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#0000000f;padding:1px 5px;border-radius:4px;font-family:JetBrains Mono,monospace;font-size:.72rem}"],changeDetection:0})};export{S as LambdasComponent};
