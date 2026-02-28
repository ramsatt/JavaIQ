import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-dp-proxy',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="Proxy" subtitle="Control object access. Virtual proxy, protection proxy, dynamic proxy, and Spring AOP." badge="DESIGN PATTERNS" gradient="linear-gradient(135deg, #374151, #9ca3af)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-gray" /> Proxy</h2>
        <div class="prose"><p>The <strong>Proxy</strong> pattern provides a surrogate to control access to an object. Used for caching, logging, security, and lazy loading.</p><app-code-block [code]="codeIntro" /></div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Types</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Virtual Proxy</h3><app-code-block [code]="codeVirtual" /></div>
          <div class="op-card"><h3 class="op-title">Protection Proxy</h3><app-code-block [code]="codeProtection" /></div>
          <div class="op-card"><h3 class="op-title">Dynamic Proxy</h3><app-code-block [code]="codeDynamic" /></div>
          <div class="op-card"><h3 class="op-title">Spring AOP</h3><app-code-block [code]="codeAop" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-gray { color: #475569; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class DpProxyComponent {
  codeIntro = `// Types of proxies:
// Virtual:    lazy loading (load on first access)
// Protection: access control (check permissions)
// Logging:    log method calls
// Caching:    cache results
// Remote:     represent a remote object locally`;
  codeVirtual = `// Lazy loading proxy
interface Image { void display(); }

class RealImage implements Image {
    RealImage(String file) { loadFromDisk(file); } // expensive!
    public void display() { /* render */ }
}

class ImageProxy implements Image {
    private RealImage real;
    private final String file;
    ImageProxy(String file) { this.file = file; } // cheap!
    public void display() {
        if (real == null) real = new RealImage(file); // load on demand
        real.display();
    }
}

// Only loads when display() is actually called
Image img = new ImageProxy("huge_photo.jpg");`;
  codeProtection = `// Access control proxy
interface Document {
    void read();
    void write(String content);
}

class SecureDocumentProxy implements Document {
    private final Document real;
    private final User user;

    public void read() {
        if (!user.hasPermission("READ"))
            throw new AccessDeniedException("No read access");
        real.read();
    }
    public void write(String content) {
        if (!user.hasPermission("WRITE"))
            throw new AccessDeniedException("No write access");
        real.write(content);
    }
}`;
  codeDynamic = `// Java Dynamic Proxy (runtime!)
UserService proxy = (UserService) Proxy.newProxyInstance(
    UserService.class.getClassLoader(),
    new Class[]{UserService.class},
    (proxyObj, method, args) -> {
        log.info("Calling: {}", method.getName());
        long start = System.nanoTime();
        Object result = method.invoke(realService, args);
        long elapsed = System.nanoTime() - start;
        log.info("{} took {}ms", method.getName(), elapsed / 1_000_000);
        return result;
    }
);

proxy.getUser(1L);  // logged automatically!`;
  codeAop = `// Spring AOP = dynamic proxy magic!
// @Transactional creates a proxy that:
// 1. Opens transaction before method
// 2. Calls real method
// 3. Commits on success / rollbacks on error

@Service
public class OrderService {
    @Transactional  // proxy wraps this method
    public void placeOrder(Order order) {
        orderRepo.save(order);
        paymentService.charge(order);
    }
}

// @Cacheable, @Async, @Retry — all use proxies!
// Spring uses JDK Dynamic Proxy (interfaces)
// or CGLIB (classes) to generate proxies`;
}
