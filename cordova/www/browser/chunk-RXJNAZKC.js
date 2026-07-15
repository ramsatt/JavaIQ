import{a as c,b as m,c as p}from"./chunk-IN5CYMS5.js";import"./chunk-IS4X7JQG.js";import"./chunk-7SFQX2NP.js";import"./chunk-JTAKQG6P.js";import{P as n,S as d,ba as a,ca as i,da as t,ea as r,wa as e}from"./chunk-UO6CZCBJ.js";import"./chunk-JKY3FJOK.js";import"./chunk-36LMHX4H.js";import"./chunk-QSPX3XV4.js";import"./chunk-CFQFX75D.js";import"./chunk-5AR3GM6G.js";import"./chunk-DGLFGWVP.js";import"./chunk-OQOWVL3R.js";import"./chunk-VSDHJBUA.js";import"./chunk-4WFVMWDK.js";import"./chunk-M2X7KQLB.js";import"./chunk-DVVH2KKN.js";import"./chunk-NV3QH4JK.js";import"./chunk-2DGDOVBR.js";import"./chunk-OZYWYLNK.js";import"./chunk-42C7ZIID.js";import"./chunk-NWJ5J3BN.js";var u=class l{code1=`import java.io.*;

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
}`;code2=`import java.io.Serializable;

// GOOD: explicit serialVersionUID
public class Order implements Serializable {
    private static final long serialVersionUID = 1L;

    private String orderId;
    private double total;

    public Order(String orderId, double total) {
        this.orderId = orderId; this.total = total;
    }
}

// BAD: no serialVersionUID \u2014 JVM auto-generates one
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
    private String status; // new field \u2014 safe to add with same UID
}`;code3=`import java.io.Serializable;

public class User implements Serializable {
    private static final long serialVersionUID = 1L;

    private String username;
    private String email;

    // transient: excluded from serialization
    private transient String password;

    // transient: derived / cached \u2014 no need to persist
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

System.out.println(loaded.getPassword()); // null \u2014 transient field not saved
System.out.println(loaded.getUsername()); // "alice" \u2014 normal field preserved`;code4=`import java.io.*;
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
}`;code5=`// Java Serializable \u2014 avoid for new code
public class PersonSerial implements Serializable {
    private static final long serialVersionUID = 1L;
    private String name;
    private int age;
}

// \u2500\u2500\u2500 Modern Alternative 1: Jackson JSON \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
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

// \u2500\u2500\u2500 Modern Alternative 2: write/read JSON file \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
mapper.writeValue(new File("person.json"), p);
Person fromFile = mapper.readValue(new File("person.json"), Person.class);

// \u2500\u2500\u2500 Why prefer JSON / Protobuf \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
// 1. No deserialization gadget-chain attacks
// 2. Human-readable (JSON) or compact (Protobuf)
// 3. Language-agnostic \u2014 works with Python, Go, JavaScript
// 4. Easier schema evolution with @JsonIgnoreProperties(ignoreUnknown=true)`;static \u0275fac=function(s){return new(s||l)};static \u0275cmp=d({type:l,selectors:[["app-topic-serialization"]],decls:143,vars:11,consts:[["title","Serialization & Deserialization","subtitle","Convert Java objects to byte streams and back. Learn Serializable, serialVersionUID, transient, custom readObject/writeObject, and modern alternatives.","badge","CORE JAVA","gradient","linear-gradient(135deg, #064e3b, #34d399)"],[1,"section"],[1,"section-heading"],["name","package","css","icon-emerald",3,"size"],[1,"prose"],[3,"code"],["name","hash","css","icon-emerald",3,"size"],["name","eye-off","css","icon-emerald",3,"size"],["name","settings","css","icon-emerald",3,"size"],["name","alert-triangle","css","icon-emerald",3,"size"],["name","briefcase","css","icon-emerald",3,"size"],[1,"tips-list"],[1,"tip-card"],[1,"tip-num"],[1,"tip-title"],[1,"tip-desc"]],template:function(s,o){s&1&&(i(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),r(3,"app-icon",3),e(4," What Is Serialization? "),t(),i(5,"div",4)(6,"p")(7,"strong"),e(8,"Serialization"),t(),e(9," converts a live Java object into a byte stream so it can be saved to disk, sent over a network, or stored in a database. "),i(10,"strong"),e(11,"Deserialization"),t(),e(12," reconstructs the object from the byte stream. A class opts in by implementing "),i(13,"code"),e(14,"java.io.Serializable"),t(),e(15,", which is a "),i(16,"em"),e(17,"marker interface"),t(),e(18," \u2014 no methods to implement. "),t(),r(19,"app-code-block",5),t()(),i(20,"section",1)(21,"h2",2),r(22,"app-icon",6),e(23," serialVersionUID "),t(),i(24,"div",4)(25,"p")(26,"code"),e(27,"serialVersionUID"),t(),e(28," is a version stamp. When deserializing, Java checks whether the "),i(29,"code"),e(30,"serialVersionUID"),t(),e(31," in the byte stream matches the one in the current class definition. If they differ, an "),i(32,"code"),e(33,"InvalidClassException"),t(),e(34," is thrown. Always declare it explicitly \u2014 otherwise the JVM computes one automatically and any change to the class (even adding a field) will change it. "),t(),r(35,"app-code-block",5),t()(),i(36,"section",1)(37,"h2",2),r(38,"app-icon",7),e(39," transient Keyword "),t(),i(40,"div",4)(41,"p"),e(42," Mark a field "),i(43,"code"),e(44,"transient"),t(),e(45," to exclude it from serialization. Use it for passwords, session tokens, cached/derived values, or non-serializable fields. After deserialization, "),i(46,"code"),e(47,"transient"),t(),e(48," fields hold the "),i(49,"strong"),e(50,"default value"),t(),e(51," for their type ("),i(52,"code"),e(53,"null"),t(),e(54," for objects, "),i(55,"code"),e(56,"0"),t(),e(57," for primitives). "),t(),r(58,"app-code-block",5),t()(),i(59,"section",1)(60,"h2",2),r(61,"app-icon",8),e(62," Custom Serialization "),t(),i(63,"div",4)(64,"p"),e(65," Provide private "),i(66,"code"),e(67,"writeObject(ObjectOutputStream)"),t(),e(68," and "),i(69,"code"),e(70,"readObject(ObjectInputStream)"),t(),e(71," methods to take full control. This is useful for encrypting sensitive data, compressing large fields, or handling version migration. "),t(),r(72,"app-code-block",5),t()(),i(73,"section",1)(74,"h2",2),r(75,"app-icon",9),e(76," Modern Alternatives "),t(),i(77,"div",4)(78,"p"),e(79," Java's built-in serialization has well-documented security vulnerabilities \u2014 deserializing untrusted data can trigger remote code execution. Modern best practices prefer: "),t(),i(80,"ul")(81,"li")(82,"strong"),e(83,"JSON"),t(),e(84," via Jackson or Gson \u2014 human-readable, cross-language"),t(),i(85,"li")(86,"strong"),e(87,"Protocol Buffers"),t(),e(88," \u2014 compact binary, schema-driven, fast"),t(),i(89,"li")(90,"strong"),e(91,"Java Records"),t(),e(92," with a JSON library \u2014 clean DTO pattern"),t()(),r(93,"app-code-block",5),t()(),i(94,"section",1)(95,"h2",2),r(96,"app-icon",10),e(97," Interview Tips "),t(),i(98,"div",11)(99,"div",12)(100,"div",13),e(101,"1"),t(),i(102,"div")(103,"h4",14),e(104,"serialVersionUID importance"),t(),i(105,"p",15),e(106,"Without an explicit "),i(107,"code"),e(108,"serialVersionUID"),t(),e(109,", the JVM auto-generates one from the class structure. Adding even a single field changes the UID, causing "),i(110,"code"),e(111,"InvalidClassException"),t(),e(112," when deserializing old data. Always declare it explicitly."),t()()(),i(113,"div",12)(114,"div",13),e(115,"2"),t(),i(116,"div")(117,"h4",14),e(118,"transient fields after deserialization"),t(),i(119,"p",15)(120,"code"),e(121,"transient"),t(),e(122," fields are always "),i(123,"code"),e(124,"null"),t(),e(125," (or 0 / false for primitives) after deserialization. If you need a "),i(126,"code"),e(127,"transient"),t(),e(128," field to be re-initialised, do it in "),i(129,"code"),e(130,"readObject()"),t(),e(131," or use lazy initialisation in the getter."),t()()(),i(132,"div",12)(133,"div",13),e(134,"3"),t(),i(135,"div")(136,"h4",14),e(137,"Security risks"),t(),i(138,"p",15),e(139,"Never deserialize data from untrusted sources using Java's native serialization \u2014 it is a well-known attack vector (gadget chains). Use JSON (Jackson) or Protocol Buffers instead. If you must use Java serialization, use "),i(140,"code"),e(141,"ObjectInputFilter"),t(),e(142," to allowlist safe classes."),t()()()()()()),s&2&&(n(3),a("size",28),n(16),a("code",o.code1),n(3),a("size",28),n(13),a("code",o.code2),n(3),a("size",28),n(20),a("code",o.code3),n(3),a("size",28),n(11),a("code",o.code4),n(3),a("size",28),n(18),a("code",o.code5),n(3),a("size",28))},dependencies:[c,m,p],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#1b1b1b;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #D6DDD2}.icon-emerald[_ngcontent-%COMP%]{color:#34d399}.prose[_ngcontent-%COMP%]{font-size:.9rem;color:#52665a;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:14px 0;padding-left:22px;list-style:disc}.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:8px}.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#1b1b1b;font-weight:700}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#ecfdf5;padding:2px 7px;border-radius:5px;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#065f46}.tips-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.tip-card[_ngcontent-%COMP%]{display:flex;gap:16px;padding:20px 24px;border-radius:16px;border:1px solid #D6DDD2;background:#fff}.tip-num[_ngcontent-%COMP%]{width:36px;height:36px;min-width:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:#34d399;color:#fff;font-size:.85rem;font-weight:800}.tip-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#1b1b1b;margin:0 0 6px}.tip-desc[_ngcontent-%COMP%]{font-size:.82rem;color:#52665a;line-height:1.55;margin:0}.tip-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#ecfdf5;padding:2px 5px;border-radius:4px;font-family:JetBrains Mono,monospace;font-size:.75rem;color:#065f46}"],changeDetection:0})};export{u as SerializationComponent};
