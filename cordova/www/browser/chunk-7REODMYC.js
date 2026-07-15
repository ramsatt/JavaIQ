import{a as s,b as d,c as m}from"./chunk-IN5CYMS5.js";import"./chunk-IS4X7JQG.js";import"./chunk-7SFQX2NP.js";import"./chunk-JTAKQG6P.js";import{P as n,S as l,ba as a,ca as o,da as e,ea as i,wa as t}from"./chunk-UO6CZCBJ.js";import"./chunk-JKY3FJOK.js";import"./chunk-36LMHX4H.js";import"./chunk-QSPX3XV4.js";import"./chunk-CFQFX75D.js";import"./chunk-5AR3GM6G.js";import"./chunk-DGLFGWVP.js";import"./chunk-OQOWVL3R.js";import"./chunk-VSDHJBUA.js";import"./chunk-4WFVMWDK.js";import"./chunk-M2X7KQLB.js";import"./chunk-DVVH2KKN.js";import"./chunk-NV3QH4JK.js";import"./chunk-2DGDOVBR.js";import"./chunk-OZYWYLNK.js";import"./chunk-42C7ZIID.js";import"./chunk-NWJ5J3BN.js";var g=class p{codeIntro=`// Without factory: client knows ALL implementations
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

Notification n = factories.get("email").apply(config);`;static \u0275fac=function(r){return new(r||p)};static \u0275cmp=l({type:p,selectors:[["app-topic-dp-factory"]],decls:34,vars:7,consts:[["title","Factory Method","subtitle","Delegate object creation. Factory method, abstract factory, and Spring's FactoryBean.","badge","DESIGN PATTERNS","gradient","linear-gradient(135deg, #166534, #4ade80)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-green",3,"size"],["src","/assets/images/topics/dp-factory.png","alt","Factory Pattern Visualized",1,"topic-hero-image"],[1,"prose"],[3,"code"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(r,c){r&1&&(o(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),i(3,"app-icon",3),t(4," Factory"),e(),i(5,"img",4),o(6,"div",5)(7,"p"),t(8,"The "),o(9,"strong"),t(10,"Factory Method"),e(),t(11," pattern delegates object creation to subclasses or factory classes, decoupling clients from concrete implementations."),e(),i(12,"app-code-block",6),e()(),o(13,"section",1)(14,"h2",2),i(15,"app-icon",7),t(16," Patterns"),e(),o(17,"div",8)(18,"div",9)(19,"h3",10),t(20,"Simple Factory"),e(),i(21,"app-code-block",6),e(),o(22,"div",9)(23,"h3",10),t(24,"Factory Method"),e(),i(25,"app-code-block",6),e(),o(26,"div",9)(27,"h3",10),t(28,"Abstract Factory"),e(),i(29,"app-code-block",6),e(),o(30,"div",9)(31,"h3",10),t(32,"Functional Factory"),e(),i(33,"app-code-block",6),e()()()()),r&2&&(n(3),a("size",28),n(9),a("code",c.codeIntro),n(3),a("size",28),n(6),a("code",c.codeSimple),n(4),a("code",c.codeMethod),n(4),a("code",c.codeAbstract),n(4),a("code",c.codeFunctional))},dependencies:[s,d,m],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-green[_ngcontent-%COMP%]{color:#16a34a}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{g as DpFactoryComponent};
