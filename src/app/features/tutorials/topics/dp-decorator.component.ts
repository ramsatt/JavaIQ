import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-dp-decorator',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="Decorator" subtitle="Extend behavior dynamically. Wrapping objects, I/O streams, and Spring interceptors." badge="DESIGN PATTERNS" gradient="linear-gradient(135deg, #6d28d9, #c084fc)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-violet" /> Decorator</h2>
        <div class="prose"><p>The <strong>Decorator</strong> wraps an object to add new behavior without modifying the original class. Decorators are composable.</p><app-code-block [code]="codeIntro" /></div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Examples</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Classic</h3><app-code-block [code]="codeClassic" /></div>
          <div class="op-card"><h3 class="op-title">Java I/O</h3><app-code-block [code]="codeIO" /></div>
          <div class="op-card"><h3 class="op-title">Functional</h3><app-code-block [code]="codeFunctional" /></div>
          <div class="op-card"><h3 class="op-title">Spring</h3><app-code-block [code]="codeSpring" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-violet { color: #7c3aed; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class DpDecoratorComponent {
  codeIntro = `// Coffee example:
// Base: Espresso ($2)
// + Milk ($0.50) → MilkDecorator wraps Espresso
// + Whip ($0.30) → WhipDecorator wraps MilkDecorator
// Total: $2.80

// Each decorator adds behavior WITHOUT modifying the original`;
  codeClassic = `interface DataSource {
    void writeData(String data);
    String readData();
}

class FileDataSource implements DataSource {
    public void writeData(String data) { /* write to file */ }
    public String readData() { return "raw data"; }
}

class EncryptionDecorator implements DataSource {
    private final DataSource wrapped;
    EncryptionDecorator(DataSource ds) { wrapped = ds; }
    public void writeData(String data) { wrapped.writeData(encrypt(data)); }
    public String readData() { return decrypt(wrapped.readData()); }
}

class CompressionDecorator implements DataSource {
    private final DataSource wrapped;
    CompressionDecorator(DataSource ds) { wrapped = ds; }
    public void writeData(String data) { wrapped.writeData(compress(data)); }
    public String readData() { return decompress(wrapped.readData()); }
}

// Compose!
DataSource ds = new CompressionDecorator(
    new EncryptionDecorator(new FileDataSource("data.txt")));`;
  codeIO = `// Java I/O is built on Decorator pattern!
InputStream is = new BufferedInputStream(              // buffer
    new GZIPInputStream(                               // decompress
        new FileInputStream("data.gz")));              // base

// Each wrapper adds a layer of functionality
// FileInputStream → reads bytes
// GZIPInputStream → decompresses
// BufferedInputStream → adds buffering`;
  codeFunctional = `// Function composition as decoration
Function<String, String> processor = Function.identity();
processor = processor
    .andThen(String::trim)
    .andThen(String::toLowerCase)
    .andThen(s -> s.replaceAll("\\\\s+", " "));

String result = processor.apply("  HELLO   WORLD  ");
// → "hello world"

// UnaryOperator composition
UnaryOperator<BigDecimal> pricing = UnaryOperator.identity();
pricing = pricing.andThen(p -> p.multiply(new BigDecimal("0.9")))  // 10% off
                 .andThen(p -> p.add(new BigDecimal("5")));        // + shipping`;
  codeSpring = `// Spring HandlerInterceptor (decorator for HTTP)
@Component
public class LoggingInterceptor implements HandlerInterceptor {
    public boolean preHandle(HttpServletRequest req, HttpServletResponse resp, Object h) {
        log.info("Request: {} {}", req.getMethod(), req.getRequestURI());
        return true;  // continue chain
    }
    public void afterCompletion(HttpServletRequest req, HttpServletResponse resp, Object h, Exception ex) {
        log.info("Response: {} in {}ms", resp.getStatus(), elapsed);
    }
}

// @Transactional is a decorator (wraps method with TX logic)
// @Cacheable is a decorator (wraps method with cache logic)`;
}
