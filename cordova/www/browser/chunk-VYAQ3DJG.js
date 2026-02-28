import{a as s,b as m}from"./chunk-AMVNOPTI.js";import{a as c}from"./chunk-SI5PESLS.js";import{$a as r,Ja as d,ab as a,bb as e,cb as i,ub as t,ya as n}from"./chunk-WGYJYFZL.js";import"./chunk-NWJ5J3BN.js";var g=class l{codeIntro=`// Your code expects MediaPlayer interface
// Third-party library has AdvancedPlayer
// Adapter bridges the gap!`;codeObject=`// Target interface (what client expects)
interface MediaPlayer {
    void play(String filename);
}

// Adaptee (incompatible third-party)
class VlcPlayer {
    void playVlc(String file) { /* VLC-specific */ }
}

// Adapter (bridges the gap)
class VlcAdapter implements MediaPlayer {
    private final VlcPlayer vlc = new VlcPlayer();

    public void play(String filename) {
        vlc.playVlc(filename);  // delegates to adaptee
    }
}

// Client code \u2014 works with any MediaPlayer
MediaPlayer player = new VlcAdapter();
player.play("movie.vlc");`;codeApi=`// Adapting external payment APIs
interface PaymentGateway {
    PaymentResult charge(Money amount, CardInfo card);
}

// Stripe adapter
class StripeAdapter implements PaymentGateway {
    private final StripeClient stripe;
    public PaymentResult charge(Money amount, CardInfo card) {
        StripeCharge charge = stripe.createCharge(
            amount.toCents(), card.getToken());
        return new PaymentResult(charge.getId(), charge.getStatus());
    }
}

// PayPal adapter
class PayPalAdapter implements PaymentGateway {
    private final PayPalSdk paypal;
    public PaymentResult charge(Money amount, CardInfo card) {
        PayPalResponse resp = paypal.processPayment(
            amount.toDecimal(), card.toPayPalSource());
        return new PaymentResult(resp.txId(), resp.state());
    }
}`;codeFunctional=`// Functional adapter with lambdas
// Adapt Comparator to our SortStrategy
interface SortStrategy<T> { int compare(T a, T b); }

// Adapt existing Comparator
SortStrategy<User> strategy = (a, b) -> Comparator.comparing(User::name).compare(a, b);

// Method reference as adapter
Function<String, Integer> adapter = Integer::parseInt;

// Adapting Supplier to Callable
Supplier<String> supplier = () -> "hello";
Callable<String> callable = supplier::get;  // adapter!`;codeJdk=`// Adapter in Java SDK:
// Arrays.asList() \u2014 adapts array to List
String[] arr = {"a", "b", "c"};
List<String> list = Arrays.asList(arr);

// InputStreamReader \u2014 adapts byte stream to char stream
Reader reader = new InputStreamReader(
    new FileInputStream("file.txt"), StandardCharsets.UTF_8);

// Collections.enumeration() \u2014 adapts Iterator to Enumeration
Enumeration<String> e = Collections.enumeration(list);`;static \u0275fac=function(p){return new(p||l)};static \u0275cmp=d({type:l,selectors:[["app-topic-dp-adapter"]],decls:33,vars:7,consts:[["title","Adapter","subtitle","Make incompatible interfaces work together. Class adapter, object adapter, and real-world examples.","badge","DESIGN PATTERNS","gradient","linear-gradient(135deg, #0369a1, #38bdf8)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-sky",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(p,o){p&1&&(a(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),i(3,"app-icon",3),t(4," Adapter"),e(),a(5,"div",4)(6,"p"),t(7,"The "),a(8,"strong"),t(9,"Adapter"),e(),t(10," converts one interface into another that clients expect. It's a bridge between incompatible interfaces."),e(),i(11,"app-code-block",5),e()(),a(12,"section",1)(13,"h2",2),i(14,"app-icon",6),t(15," Examples"),e(),a(16,"div",7)(17,"div",8)(18,"h3",9),t(19,"Object Adapter"),e(),i(20,"app-code-block",5),e(),a(21,"div",8)(22,"h3",9),t(23,"API Integration"),e(),i(24,"app-code-block",5),e(),a(25,"div",8)(26,"h3",9),t(27,"Functional"),e(),i(28,"app-code-block",5),e(),a(29,"div",8)(30,"h3",9),t(31,"Java SDK"),e(),i(32,"app-code-block",5),e()()()()),p&2&&(n(3),r("size",28),n(8),r("code",o.codeIntro),n(3),r("size",28),n(6),r("code",o.codeObject),n(4),r("code",o.codeApi),n(4),r("code",o.codeFunctional),n(4),r("code",o.codeJdk))},dependencies:[c,s,m],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-sky[_ngcontent-%COMP%]{color:#0284c7}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{g as DpAdapterComponent};
