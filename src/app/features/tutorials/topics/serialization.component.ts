import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-serialization',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout
      title="Serialization &amp; Deserialization"
      subtitle="Convert Java objects to byte streams and back. Learn Serializable, serialVersionUID, transient, custom readObject/writeObject, and modern alternatives."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #064e3b, #34d399)">

      <section class="section">
        <h2 class="section-heading">
          <app-icon name="package" [size]="28" css="icon-emerald" /> What Is Serialization?
        </h2>
        <div class="prose">
          <p>
            <strong>Serialization</strong> converts a live Java object into a byte stream so it can be saved to disk, sent over a network, or stored in a database. <strong>Deserialization</strong> reconstructs the object from the byte stream. A class opts in by implementing <code>java.io.Serializable</code>, which is a <em>marker interface</em> — no methods to implement.
          </p>
          <app-code-block [code]="code1" />
        </div>
      </section>

      <section class="section">
        <h2 class="section-heading">
          <app-icon name="hash" [size]="28" css="icon-emerald" /> serialVersionUID
        </h2>
        <div class="prose">
          <p>
            <code>serialVersionUID</code> is a version stamp. When deserializing, Java checks whether the <code>serialVersionUID</code> in the byte stream matches the one in the current class definition. If they differ, an <code>InvalidClassException</code> is thrown. Always declare it explicitly — otherwise the JVM computes one automatically and any change to the class (even adding a field) will change it.
          </p>
          <app-code-block [code]="code2" />
        </div>
      </section>

      <section class="section">
        <h2 class="section-heading">
          <app-icon name="eye-off" [size]="28" css="icon-emerald" /> transient Keyword
        </h2>
        <div class="prose">
          <p>
            Mark a field <code>transient</code> to exclude it from serialization. Use it for passwords, session tokens, cached/derived values, or non-serializable fields. After deserialization, <code>transient</code> fields hold the <strong>default value</strong> for their type (<code>null</code> for objects, <code>0</code> for primitives).
          </p>
          <app-code-block [code]="code3" />
        </div>
      </section>

      <section class="section">
        <h2 class="section-heading">
          <app-icon name="settings" [size]="28" css="icon-emerald" /> Custom Serialization
        </h2>
        <div class="prose">
          <p>
            Provide private <code>writeObject(ObjectOutputStream)</code> and <code>readObject(ObjectInputStream)</code> methods to take full control. This is useful for encrypting sensitive data, compressing large fields, or handling version migration.
          </p>
          <app-code-block [code]="code4" />
        </div>
      </section>

      <section class="section">
        <h2 class="section-heading">
          <app-icon name="alert-triangle" [size]="28" css="icon-emerald" /> Modern Alternatives
        </h2>
        <div class="prose">
          <p>
            Java's built-in serialization has well-documented security vulnerabilities — deserializing untrusted data can trigger remote code execution. Modern best practices prefer:
          </p>
          <ul>
            <li><strong>JSON</strong> via Jackson or Gson — human-readable, cross-language</li>
            <li><strong>Protocol Buffers</strong> — compact binary, schema-driven, fast</li>
            <li><strong>Java Records</strong> with a JSON library — clean DTO pattern</li>
          </ul>
          <app-code-block [code]="code5" />
        </div>
      </section>

      <section class="section">
        <h2 class="section-heading">
          <app-icon name="briefcase" [size]="28" css="icon-emerald" /> Interview Tips
        </h2>
        <div class="tips-list">
          <div class="tip-card">
            <div class="tip-num">1</div>
            <div>
              <h4 class="tip-title">serialVersionUID importance</h4>
              <p class="tip-desc">Without an explicit <code>serialVersionUID</code>, the JVM auto-generates one from the class structure. Adding even a single field changes the UID, causing <code>InvalidClassException</code> when deserializing old data. Always declare it explicitly.</p>
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-num">2</div>
            <div>
              <h4 class="tip-title">transient fields after deserialization</h4>
              <p class="tip-desc"><code>transient</code> fields are always <code>null</code> (or 0 / false for primitives) after deserialization. If you need a <code>transient</code> field to be re-initialised, do it in <code>readObject()</code> or use lazy initialisation in the getter.</p>
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-num">3</div>
            <div>
              <h4 class="tip-title">Security risks</h4>
              <p class="tip-desc">Never deserialize data from untrusted sources using Java's native serialization — it is a well-known attack vector (gadget chains). Use JSON (Jackson) or Protocol Buffers instead. If you must use Java serialization, use <code>ObjectInputFilter</code> to allowlist safe classes.</p>
            </div>
          </div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; }
    .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #1B1B1B; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #D6DDD2; }
    .icon-emerald { color: #34d399; }
    .prose { font-size: 0.9rem; color: #52665A; line-height: 1.75; }
    .prose p { margin: 0 0 14px; }
    .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; }
    .prose li { margin-bottom: 8px; }
    .prose strong { color: #1B1B1B; font-weight: 700; }
    .prose code { background: #ecfdf5; padding: 2px 7px; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #065f46; }
    .tips-list { display: flex; flex-direction: column; gap: 12px; }
    .tip-card { display: flex; gap: 16px; padding: 20px 24px; border-radius: 16px; border: 1px solid #D6DDD2; background: #fff; }
    .tip-num { width: 36px; height: 36px; min-width: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; background: #34d399; color: #fff; font-size: 0.85rem; font-weight: 800; }
    .tip-title { font-size: 0.95rem; font-weight: 700; color: #1B1B1B; margin: 0 0 6px; }
    .tip-desc { font-size: 0.82rem; color: #52665A; line-height: 1.55; margin: 0; }
    .tip-desc code { background: #ecfdf5; padding: 2px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: #065f46; }
  `
})
export class SerializationComponent {
  code1 = `import java.io.*;

// Step 1: implement the marker interface
public class Product implements Serializable {
    private String name;
    private double price;
    private int stock;

    public Product(String name, double price, int stock) {
        this.name = name; this.price = price; this.stock = stock;
    }
    // getters omitted for brevity
}

// Step 2: Serialize (write to file)
Product p = new Product("Laptop", 999.99, 50);
try (ObjectOutputStream oos =
        new ObjectOutputStream(new FileOutputStream("product.ser"))) {
    oos.writeObject(p);
    System.out.println("Serialized: " + p.getName());
}

// Step 3: Deserialize (read from file)
try (ObjectInputStream ois =
        new ObjectInputStream(new FileInputStream("product.ser"))) {
    Product loaded = (Product) ois.readObject();
    System.out.println("Loaded: " + loaded.getName() + " @ " + loaded.getPrice());
}`;

  code2 = `import java.io.Serializable;

// GOOD: explicit serialVersionUID
public class Order implements Serializable {
    private static final long serialVersionUID = 1L;

    private String orderId;
    private double total;

    public Order(String orderId, double total) {
        this.orderId = orderId; this.total = total;
    }
}

// BAD: no serialVersionUID — JVM auto-generates one
public class BadOrder implements Serializable {
    // No serialVersionUID declared!
    private String orderId;
    private double total;
    // Adding a new field (e.g. String status) will change the auto-generated
    // UID and cause InvalidClassException when deserializing old data
}

// Updating the UID when breaking change occurs
public class Order implements Serializable {
    // Bumped from 1L to 2L because we removed a field
    private static final long serialVersionUID = 2L;
    private String orderId;
    private double total;
    private String status; // new field — safe to add with same UID
}`;

  code3 = `import java.io.Serializable;

public class User implements Serializable {
    private static final long serialVersionUID = 1L;

    private String username;
    private String email;

    // transient: excluded from serialization
    private transient String password;

    // transient: derived / cached — no need to persist
    private transient int loginCount;

    public User(String username, String email, String password) {
        this.username = username;
        this.email    = email;
        this.password = password;
    }

    public String getPassword() { return password; }
}

// Demonstrate transient behaviour
User user = new User("alice", "alice@example.com", "secret123");

// Serialize
ByteArrayOutputStream baos = new ByteArrayOutputStream();
new ObjectOutputStream(baos).writeObject(user);

// Deserialize
User loaded = (User) new ObjectInputStream(
    new ByteArrayInputStream(baos.toByteArray())).readObject();

System.out.println(loaded.getPassword()); // null — transient field not saved
System.out.println(loaded.getUsername()); // "alice" — normal field preserved`;

  code4 = `import java.io.*;
import java.util.Base64;

public class SecureCredential implements Serializable {
    private static final long serialVersionUID = 1L;

    private String username;
    private transient String secret; // store raw in memory only

    // Custom serialization: encode before writing
    private void writeObject(ObjectOutputStream oos) throws IOException {
        oos.defaultWriteObject(); // write non-transient fields normally
        String encoded = Base64.getEncoder().encodeToString(secret.getBytes());
        oos.writeObject(encoded); // write transformed secret
    }

    // Custom deserialization: decode after reading
    private void readObject(ObjectInputStream ois)
            throws IOException, ClassNotFoundException {
        ois.defaultReadObject(); // read non-transient fields
        String encoded = (String) ois.readObject();
        this.secret = new String(Base64.getDecoder().decode(encoded));
    }

    public SecureCredential(String username, String secret) {
        this.username = username;
        this.secret   = secret;
    }

    public String getSecret() { return secret; }
}`;

  code5 = `// Java Serializable — avoid for new code
public class PersonSerial implements Serializable {
    private static final long serialVersionUID = 1L;
    private String name;
    private int age;
}

// ─── Modern Alternative 1: Jackson JSON ───────────────────────────
import com.fasterxml.jackson.databind.ObjectMapper;

record Person(String name, int age) {}

ObjectMapper mapper = new ObjectMapper();

// Serialize to JSON string
Person p = new Person("Alice", 30);
String json = mapper.writeValueAsString(p);
System.out.println(json); // {"name":"Alice","age":30}

// Deserialize from JSON string
Person loaded = mapper.readValue(json, Person.class);
System.out.println(loaded.name()); // "Alice"

// ─── Modern Alternative 2: write/read JSON file ────────────────────
mapper.writeValue(new File("person.json"), p);
Person fromFile = mapper.readValue(new File("person.json"), Person.class);

// ─── Why prefer JSON / Protobuf ────────────────────────────────────
// 1. No deserialization gadget-chain attacks
// 2. Human-readable (JSON) or compact (Protobuf)
// 3. Language-agnostic — works with Python, Go, JavaScript
// 4. Easier schema evolution with @JsonIgnoreProperties(ignoreUnknown=true)`;
}
