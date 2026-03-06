import{a as s,b as d,c as m}from"./chunk-5NK5W44O.js";import{Pa as i,Tb as t,ab as l,sb as n,tb as o,ub as e,vb as a}from"./chunk-WSUICUG6.js";import"./chunk-NWJ5J3BN.js";var g=class p{codeIntro=`// Without factory: client knows ALL implementations
Payment p = new CreditCardPayment();  // tightly coupled!

// With factory: client only knows the interface
Payment p = PaymentFactory.create("credit");

// Real-world: JDBC DriverManager, DocumentBuilderFactory`;codeSimple=`// Simple Factory (static method)
public class NotificationFactory {
    public static Notification create(String type) {
        return switch (type) {
            case "email" -> new EmailNotification();
            case "sms"   -> new SmsNotification();
            case "push"  -> new PushNotification();
            default -> throw new IllegalArgumentException("Unknown: " + type);
        };
    }
}

// Usage
Notification n = NotificationFactory.create("email");
n.send("Hello!");`;codeMethod=`// Factory Method \u2014 subclasses decide what to create
public abstract class Document {
    public abstract Page createPage();  // factory method

    public void addPage() {
        Page page = createPage();  // delegates to subclass
        pages.add(page);
    }
}

public class Resume extends Document {
    public Page createPage() {
        return new SkillsPage();
    }
}

public class Report extends Document {
    public Page createPage() {
        return new ChartPage();
    }
}`;codeAbstract=`// Abstract Factory \u2014 family of related objects
public interface UIFactory {
    Button createButton();
    TextField createTextField();
    Checkbox createCheckbox();
}

public class DarkThemeFactory implements UIFactory {
    public Button createButton() { return new DarkButton(); }
    public TextField createTextField() { return new DarkTextField(); }
    public Checkbox createCheckbox() { return new DarkCheckbox(); }
}

public class LightThemeFactory implements UIFactory {
    public Button createButton() { return new LightButton(); }
    // ...
}`;codeFunctional=`// Modern Java: use Supplier/Function as factories
Map<String, Supplier<Notification>> factories = Map.of(
    "email", EmailNotification::new,
    "sms",   SmsNotification::new,
    "push",  PushNotification::new
);

Notification n = factories.get("email").get();

// With parameters:
Map<String, Function<Config, Notification>> factories = Map.of(
    "email", EmailNotification::new,
    "sms",   SmsNotification::new
);

Notification n = factories.get("email").apply(config);`;static \u0275fac=function(r){return new(r||p)};static \u0275cmp=l({type:p,selectors:[["app-topic-dp-factory"]],decls:33,vars:7,consts:[["title","Factory Method","subtitle","Delegate object creation. Factory method, abstract factory, and Spring's FactoryBean.","badge","DESIGN PATTERNS","gradient","linear-gradient(135deg, #166534, #4ade80)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-green",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(r,c){r&1&&(o(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),a(3,"app-icon",3),t(4," Factory"),e(),o(5,"div",4)(6,"p"),t(7,"The "),o(8,"strong"),t(9,"Factory Method"),e(),t(10," pattern delegates object creation to subclasses or factory classes, decoupling clients from concrete implementations."),e(),a(11,"app-code-block",5),e()(),o(12,"section",1)(13,"h2",2),a(14,"app-icon",6),t(15," Patterns"),e(),o(16,"div",7)(17,"div",8)(18,"h3",9),t(19,"Simple Factory"),e(),a(20,"app-code-block",5),e(),o(21,"div",8)(22,"h3",9),t(23,"Factory Method"),e(),a(24,"app-code-block",5),e(),o(25,"div",8)(26,"h3",9),t(27,"Abstract Factory"),e(),a(28,"app-code-block",5),e(),o(29,"div",8)(30,"h3",9),t(31,"Functional Factory"),e(),a(32,"app-code-block",5),e()()()()),r&2&&(i(3),n("size",28),i(8),n("code",c.codeIntro),i(3),n("size",28),i(6),n("code",c.codeSimple),i(4),n("code",c.codeMethod),i(4),n("code",c.codeAbstract),i(4),n("code",c.codeFunctional))},dependencies:[s,d,m],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-green[_ngcontent-%COMP%]{color:#16a34a}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{g as DpFactoryComponent};
