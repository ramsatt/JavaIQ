import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-dp-adapter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
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
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-sky { color: #0284c7; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class DpAdapterComponent {
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

// Client code — works with any MediaPlayer
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
// Arrays.asList() — adapts array to List
String[] arr = {"a", "b", "c"};
List<String> list = Arrays.asList(arr);

// InputStreamReader — adapts byte stream to char stream
Reader reader = new InputStreamReader(
    new FileInputStream("file.txt"), StandardCharsets.UTF_8);

// Collections.enumeration() — adapts Iterator to Enumeration
Enumeration<String> e = Collections.enumeration(list);`;
}
