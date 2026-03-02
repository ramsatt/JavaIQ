import{a as l,b as m,c as g}from"./chunk-FZG5ZG77.js";import{Hb as t,Ma as a,Xa as p,mb as n,nb as i,ob as e,pb as o}from"./chunk-5DVJCJ5O.js";import"./chunk-NWJ5J3BN.js";var d=class s{codeIntro=`// Without strategy: if-else or switch
BigDecimal calculate(Order o) {
    if (type.equals("express")) return base.multiply(1.5);
    else if (type.equals("overnight")) return base.multiply(2.0);
    // more and more branches...
}

// With strategy: each algorithm is a separate class
ShippingCalculator calc = new ExpressShipping();
BigDecimal cost = calc.calculate(order);`;codeClassic=`interface PaymentStrategy {
    void pay(BigDecimal amount);
}

class CreditCard implements PaymentStrategy {
    public void pay(BigDecimal amount) {
        // charge credit card
    }
}
class PayPal implements PaymentStrategy {
    public void pay(BigDecimal amount) {
        // PayPal API call
    }
}

// Context
class ShoppingCart {
    private PaymentStrategy strategy;
    public void setStrategy(PaymentStrategy s) { strategy = s; }
    public void checkout(BigDecimal total) { strategy.pay(total); }
}

cart.setStrategy(new CreditCard());
cart.checkout(total);`;codeFunctional=`// Java functional strategy (no classes needed!)
// Strategy = Function/Consumer/Predicate

Map<String, Function<BigDecimal, BigDecimal>> discounts = Map.of(
    "none",    price -> price,
    "student", price -> price.multiply(new BigDecimal("0.8")),
    "vip",     price -> price.multiply(new BigDecimal("0.7"))
);

BigDecimal finalPrice = discounts.get("student").apply(price);

// Sorting strategies
List<User> users = new ArrayList<>(userList);
users.sort(Comparator.comparing(User::name));
users.sort(Comparator.comparing(User::age).reversed());`;codeSpring=`// Spring DI-based strategy (auto-discovered!)
interface NotificationStrategy {
    String getType();
    void send(String message, String to);
}

@Component class EmailStrategy implements NotificationStrategy {
    public String getType() { return "email"; }
    public void send(String msg, String to) { /* email */ }
}
@Component class SmsStrategy implements NotificationStrategy {
    public String getType() { return "sms"; }
    public void send(String msg, String to) { /* sms */ }
}

@Service
class NotificationService {
    private final Map<String, NotificationStrategy> strategies;
    public NotificationService(List<NotificationStrategy> list) {
        strategies = list.stream().collect(
            Collectors.toMap(NotificationStrategy::getType, s -> s));
    }
    public void notify(String type, String msg, String to) {
        strategies.get(type).send(msg, to);
    }
}`;codeEnum=`// Enum strategy \u2014 compile-time safe
enum SortStrategy {
    BY_NAME  { Comparator<User> comparator() { return Comparator.comparing(User::name); } },
    BY_AGE   { Comparator<User> comparator() { return Comparator.comparing(User::age); } },
    BY_EMAIL { Comparator<User> comparator() { return Comparator.comparing(User::email); } };

    abstract Comparator<User> comparator();
}

users.sort(SortStrategy.BY_NAME.comparator());`;static \u0275fac=function(c){return new(c||s)};static \u0275cmp=p({type:s,selectors:[["app-topic-dp-strategy"]],decls:33,vars:7,consts:[["title","Strategy","subtitle","Interchangeable algorithms. Strategy interfaces, functional approach, and runtime switching.","badge","DESIGN PATTERNS","gradient","linear-gradient(135deg, #065f46, #34d399)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-emerald",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(c,r){c&1&&(i(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),o(3,"app-icon",3),t(4," Strategy"),e(),i(5,"div",4)(6,"p"),t(7,"The "),i(8,"strong"),t(9,"Strategy"),e(),t(10," pattern defines a family of algorithms, encapsulates each, and makes them interchangeable at runtime."),e(),o(11,"app-code-block",5),e()(),i(12,"section",1)(13,"h2",2),o(14,"app-icon",6),t(15," Implementations"),e(),i(16,"div",7)(17,"div",8)(18,"h3",9),t(19,"Classic"),e(),o(20,"app-code-block",5),e(),i(21,"div",8)(22,"h3",9),t(23,"Functional"),e(),o(24,"app-code-block",5),e(),i(25,"div",8)(26,"h3",9),t(27,"Spring DI"),e(),o(28,"app-code-block",5),e(),i(29,"div",8)(30,"h3",9),t(31,"Enum Strategy"),e(),o(32,"app-code-block",5),e()()()()),c&2&&(a(3),n("size",28),a(8),n("code",r.codeIntro),a(3),n("size",28),a(6),n("code",r.codeClassic),a(4),n("code",r.codeFunctional),a(4),n("code",r.codeSpring),a(4),n("code",r.codeEnum))},dependencies:[l,m,g],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-emerald[_ngcontent-%COMP%]{color:#059669}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{d as DpStrategyComponent};
