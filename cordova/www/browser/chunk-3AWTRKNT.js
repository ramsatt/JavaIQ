import{a as c,b as s,c as m}from"./chunk-IN5CYMS5.js";import"./chunk-IS4X7JQG.js";import"./chunk-7SFQX2NP.js";import"./chunk-JTAKQG6P.js";import{P as i,S as l,ba as r,ca as t,da as e,ea as n,wa as a}from"./chunk-UO6CZCBJ.js";import"./chunk-JKY3FJOK.js";import"./chunk-36LMHX4H.js";import"./chunk-QSPX3XV4.js";import"./chunk-CFQFX75D.js";import"./chunk-5AR3GM6G.js";import"./chunk-DGLFGWVP.js";import"./chunk-OQOWVL3R.js";import"./chunk-VSDHJBUA.js";import"./chunk-4WFVMWDK.js";import"./chunk-M2X7KQLB.js";import"./chunk-DVVH2KKN.js";import"./chunk-NV3QH4JK.js";import"./chunk-2DGDOVBR.js";import"./chunk-OZYWYLNK.js";import"./chunk-42C7ZIID.js";import"./chunk-NWJ5J3BN.js";var g=class d{codeIntro=`// Your code expects MediaPlayer interface
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
Enumeration<String> e = Collections.enumeration(list);`;static \u0275fac=function(p){return new(p||d)};static \u0275cmp=l({type:d,selectors:[["app-topic-dp-adapter"]],decls:35,vars:7,consts:[["title","Adapter","subtitle","Make incompatible interfaces work together. Class adapter, object adapter, and real-world examples.","badge","DESIGN PATTERNS","gradient","linear-gradient(135deg, #0369a1, #38bdf8)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-sky",3,"size"],[1,"topic-hero-container"],["src","/assets/images/topics/dp-adapter.png","alt","Adapter Pattern Visualized",1,"topic-hero-image"],[1,"prose"],[3,"code"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(p,o){p&1&&(t(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),n(3,"app-icon",3),a(4," Adapter"),e(),t(5,"div",4),n(6,"img",5),e(),t(7,"div",6)(8,"p"),a(9,"The "),t(10,"strong"),a(11,"Adapter"),e(),a(12," converts one interface into another that clients expect. It's a bridge between incompatible interfaces."),e(),n(13,"app-code-block",7),e()(),t(14,"section",1)(15,"h2",2),n(16,"app-icon",8),a(17," Examples"),e(),t(18,"div",9)(19,"div",10)(20,"h3",11),a(21,"Object Adapter"),e(),n(22,"app-code-block",7),e(),t(23,"div",10)(24,"h3",11),a(25,"API Integration"),e(),n(26,"app-code-block",7),e(),t(27,"div",10)(28,"h3",11),a(29,"Functional"),e(),n(30,"app-code-block",7),e(),t(31,"div",10)(32,"h3",11),a(33,"Java SDK"),e(),n(34,"app-code-block",7),e()()()()),p&2&&(i(3),r("size",28),i(10),r("code",o.codeIntro),i(3),r("size",28),i(6),r("code",o.codeObject),i(4),r("code",o.codeApi),i(4),r("code",o.codeFunctional),i(4),r("code",o.codeJdk))},dependencies:[c,s,m],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.topic-hero-container[_ngcontent-%COMP%]{text-align:center;margin:24px 0}.topic-hero-image[_ngcontent-%COMP%]{width:100%;max-width:650px;height:auto;border-radius:12px;box-shadow:0 8px 24px #0000001f;border:1px solid #e2e8f0}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-sky[_ngcontent-%COMP%]{color:#0284c7}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{g as DpAdapterComponent};
