import {
  CodeBlockComponent,
  IconComponent,
  TutorialLayoutComponent
} from "./chunk-5ZPIB2CR.js";
import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-L6VISU4K.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/dp-adapter.component.ts
var DpAdapterComponent = class _DpAdapterComponent {
  codeIntro = `// Your code expects MediaPlayer interface
// Third-party library has AdvancedPlayer
// Adapter bridges the gap!`;
  codeObject = `// Target interface (what client expects)
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
player.play("movie.vlc");`;
  codeApi = `// Adapting external payment APIs
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
}`;
  codeFunctional = `// Functional adapter with lambdas
// Adapt Comparator to our SortStrategy
interface SortStrategy<T> { int compare(T a, T b); }

// Adapt existing Comparator
SortStrategy<User> strategy = (a, b) -> Comparator.comparing(User::name).compare(a, b);

// Method reference as adapter
Function<String, Integer> adapter = Integer::parseInt;

// Adapting Supplier to Callable
Supplier<String> supplier = () -> "hello";
Callable<String> callable = supplier::get;  // adapter!`;
  codeJdk = `// Adapter in Java SDK:
// Arrays.asList() \u2014 adapts array to List
String[] arr = {"a", "b", "c"};
List<String> list = Arrays.asList(arr);

// InputStreamReader \u2014 adapts byte stream to char stream
Reader reader = new InputStreamReader(
    new FileInputStream("file.txt"), StandardCharsets.UTF_8);

// Collections.enumeration() \u2014 adapts Iterator to Enumeration
Enumeration<String> e = Collections.enumeration(list);`;
  static \u0275fac = function DpAdapterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DpAdapterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DpAdapterComponent, selectors: [["app-topic-dp-adapter"]], decls: 33, vars: 7, consts: [["title", "Adapter", "subtitle", "Make incompatible interfaces work together. Class adapter, object adapter, and real-world examples.", "badge", "DESIGN PATTERNS", "gradient", "linear-gradient(135deg, #0369a1, #38bdf8)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-sky", 3, "size"], [1, "prose"], [3, "code"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"]], template: function DpAdapterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Adapter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7, "The ");
      \u0275\u0275elementStart(8, "strong");
      \u0275\u0275text(9, "Adapter");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " converts one interface into another that clients expect. It's a bridge between incompatible interfaces.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "section", 1)(13, "h2", 2);
      \u0275\u0275element(14, "app-icon", 6);
      \u0275\u0275text(15, " Examples");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 7)(17, "div", 8)(18, "h3", 9);
      \u0275\u0275text(19, "Object Adapter");
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 8)(22, "h3", 9);
      \u0275\u0275text(23, "API Integration");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 8)(26, "h3", 9);
      \u0275\u0275text(27, "Functional");
      \u0275\u0275elementEnd();
      \u0275\u0275element(28, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 8)(30, "h3", 9);
      \u0275\u0275text(31, "Java SDK");
      \u0275\u0275elementEnd();
      \u0275\u0275element(32, "app-code-block", 5);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(8);
      \u0275\u0275property("code", ctx.codeIntro);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(6);
      \u0275\u0275property("code", ctx.codeObject);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeApi);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeFunctional);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeJdk);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ["\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-sky[_ngcontent-%COMP%] {\n  color: #0284c7;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=dp-adapter.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DpAdapterComponent, [{
    type: Component,
    args: [{ selector: "app-topic-dp-adapter", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout title="Adapter" subtitle="Make incompatible interfaces work together. Class adapter, object adapter, and real-world examples." badge="DESIGN PATTERNS" gradient="linear-gradient(135deg, #0369a1, #38bdf8)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-sky" /> Adapter</h2>
        <div class="prose"><p>The <strong>Adapter</strong> converts one interface into another that clients expect. It's a bridge between incompatible interfaces.</p><app-code-block [code]="codeIntro" /></div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Examples</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Object Adapter</h3><app-code-block [code]="codeObject" /></div>
          <div class="op-card"><h3 class="op-title">API Integration</h3><app-code-block [code]="codeApi" /></div>
          <div class="op-card"><h3 class="op-title">Functional</h3><app-code-block [code]="codeFunctional" /></div>
          <div class="op-card"><h3 class="op-title">Java SDK</h3><app-code-block [code]="codeJdk" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ["/* angular:styles/component:css;6ca1b4b71322260936bbef9306106bf4c7066aeed781e2e1a31044135b225cc2;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/features/tutorials/topics/dp-adapter.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-sky {\n  color: #0284c7;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=dp-adapter.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DpAdapterComponent, { className: "DpAdapterComponent", filePath: "src/app/features/tutorials/topics/dp-adapter.component.ts", lineNumber: 33 });
})();
export {
  DpAdapterComponent
};
//# sourceMappingURL=chunk-AO5QIWOR.js.map
