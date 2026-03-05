import{a as p,b as d,c as m}from"./chunk-4EMTR65D.js";import{Ib as o,Na as n,Ya as s,nb as i,ob as t,pb as e,qb as r}from"./chunk-X3QUIMOS.js";import"./chunk-NWJ5J3BN.js";var g=class l{codeIntro=`// Types of proxies:
// Virtual:    lazy loading (load on first access)
// Protection: access control (check permissions)
// Logging:    log method calls
// Caching:    cache results
// Remote:     represent a remote object locally`;codeVirtual=`// Lazy loading proxy
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
Image img = new ImageProxy("huge_photo.jpg");`;codeProtection=`// Access control proxy
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
}`;codeDynamic=`// Java Dynamic Proxy (runtime!)
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

proxy.getUser(1L);  // logged automatically!`;codeAop=`// Spring AOP = dynamic proxy magic!
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

// @Cacheable, @Async, @Retry \u2014 all use proxies!
// Spring uses JDK Dynamic Proxy (interfaces)
// or CGLIB (classes) to generate proxies`;static \u0275fac=function(c){return new(c||l)};static \u0275cmp=s({type:l,selectors:[["app-topic-dp-proxy"]],decls:33,vars:7,consts:[["title","Proxy","subtitle","Control object access. Virtual proxy, protection proxy, dynamic proxy, and Spring AOP.","badge","DESIGN PATTERNS","gradient","linear-gradient(135deg, #374151, #9ca3af)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-gray",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(c,a){c&1&&(t(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),r(3,"app-icon",3),o(4," Proxy"),e(),t(5,"div",4)(6,"p"),o(7,"The "),t(8,"strong"),o(9,"Proxy"),e(),o(10," pattern provides a surrogate to control access to an object. Used for caching, logging, security, and lazy loading."),e(),r(11,"app-code-block",5),e()(),t(12,"section",1)(13,"h2",2),r(14,"app-icon",6),o(15," Types"),e(),t(16,"div",7)(17,"div",8)(18,"h3",9),o(19,"Virtual Proxy"),e(),r(20,"app-code-block",5),e(),t(21,"div",8)(22,"h3",9),o(23,"Protection Proxy"),e(),r(24,"app-code-block",5),e(),t(25,"div",8)(26,"h3",9),o(27,"Dynamic Proxy"),e(),r(28,"app-code-block",5),e(),t(29,"div",8)(30,"h3",9),o(31,"Spring AOP"),e(),r(32,"app-code-block",5),e()()()()),c&2&&(n(3),i("size",28),n(8),i("code",a.codeIntro),n(3),i("size",28),n(6),i("code",a.codeVirtual),n(4),i("code",a.codeProtection),n(4),i("code",a.codeDynamic),n(4),i("code",a.codeAop))},dependencies:[p,d,m],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-gray[_ngcontent-%COMP%]{color:#475569}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{g as DpProxyComponent};
