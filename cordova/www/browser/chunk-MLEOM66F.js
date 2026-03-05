import{a as p,b as d,c as m}from"./chunk-H4UXZOTD.js";import{$a as l,Pa as n,Rb as i,rb as a,sb as t,tb as e,ub as o}from"./chunk-QHT4LFPW.js";import"./chunk-NWJ5J3BN.js";var g=class c{codeIntro=`// Strategy comparison:
// SINGLE_TABLE: \u26A1 Fastest queries, \u{1F615} nullable columns
// JOINED:       \u2705 Normalized,     \u{1F422} JOIN on queries
// TABLE_PER_CLASS: \u{1F6AB} No JOIN,     \u{1F615} polymorphic queries slow

// Choose SINGLE_TABLE for:
//   - Simple hierarchies, few subtypes
//   - Performance-critical reads

// Choose JOINED for:
//   - Complex hierarchies, data integrity
//   - Many subtype-specific columns`;codeSingle=`// ALL entities in ONE table
@Entity @Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "payment_type")
public abstract class Payment {
    @Id @GeneratedValue private Long id;
    private BigDecimal amount;
}

@Entity @DiscriminatorValue("CREDIT")
public class CreditCardPayment extends Payment {
    private String cardNumber;
    private String expiryDate;
}

@Entity @DiscriminatorValue("PAYPAL")
public class PayPalPayment extends Payment {
    private String email;
}

// Table: payments (id, amount, payment_type, cardNumber, expiryDate, email)
// \u26A0\uFE0F cardNumber is NULL for PayPal rows`;codeJoined=`// Each class gets its own table
@Entity @Inheritance(strategy = InheritanceType.JOINED)
public abstract class Vehicle {
    @Id @GeneratedValue private Long id;
    private String make;
    private String model;
}

@Entity @PrimaryKeyJoinColumn(name = "vehicle_id")
public class Car extends Vehicle {
    private int doorCount;
    private String fuelType;
}

@Entity @PrimaryKeyJoinColumn(name = "vehicle_id")
public class Truck extends Vehicle {
    private double payloadCapacity;
}

// Tables: vehicles (id, make, model)
//         cars (vehicle_id, doorCount, fuelType)
//         trucks (vehicle_id, payloadCapacity)`;codeTablePerClass=`// Each concrete class has ALL columns
@Entity @Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public abstract class Notification {
    @Id @GeneratedValue private Long id;
    private String message;
    private LocalDateTime sentAt;
}

@Entity
public class EmailNotification extends Notification {
    private String toAddress;
    private String subject;
}

@Entity
public class SmsNotification extends Notification {
    private String phoneNumber;
}

// Tables: email_notifications (id, message, sentAt, toAddress, subject)
//         sms_notifications (id, message, sentAt, phoneNumber)`;codeMapped=`// NOT an entity \u2014 just shared fields
@MappedSuperclass
public abstract class BaseEntity {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @CreatedDate private LocalDateTime createdAt;
    @LastModifiedDate private LocalDateTime updatedAt;
    @Version private int version;
}

// Entities extend it (no inheritance table)
@Entity public class User extends BaseEntity { }
@Entity public class Product extends BaseEntity { }

// Each gets its own table WITH id, createdAt, etc.
// No polymorphic queries possible`;static \u0275fac=function(s){return new(s||c)};static \u0275cmp=l({type:c,selectors:[["app-topic-hib-inheritance"]],decls:38,vars:7,consts:[["title","Inheritance Mapping","subtitle","Map class hierarchies to database tables. Single table, joined, and table-per-class strategies.","badge","HIBERNATE & JPA","gradient","linear-gradient(135deg, #374151, #9ca3af)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-gray",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"],[1,"op-desc"]],template:function(s,r){s&1&&(t(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),o(3,"app-icon",3),i(4," Strategies"),e(),t(5,"div",4)(6,"p"),i(7,"JPA supports three inheritance mapping strategies. Each has trade-offs in normalization, performance, and flexibility."),e(),o(8,"app-code-block",5),e()(),t(9,"section",1)(10,"h2",2),o(11,"app-icon",6),i(12," Strategies"),e(),t(13,"div",7)(14,"div",8)(15,"h3",9),i(16,"Single Table"),e(),t(17,"p",10),i(18,"Best for simple hierarchies. All in ONE table with discriminator."),e(),o(19,"app-code-block",5),e(),t(20,"div",8)(21,"h3",9),i(22,"Joined"),e(),t(23,"p",10),i(24,"Normalized. Each class gets its own table."),e(),o(25,"app-code-block",5),e(),t(26,"div",8)(27,"h3",9),i(28,"Table Per Class"),e(),t(29,"p",10),i(30,"Each concrete class has a full table. No joins needed."),e(),o(31,"app-code-block",5),e(),t(32,"div",8)(33,"h3",9),i(34,"MappedSuperclass"),e(),t(35,"p",10),i(36,"Share fields without inheritance mapping."),e(),o(37,"app-code-block",5),e()()()()),s&2&&(n(3),a("size",28),n(5),a("code",r.codeIntro),n(3),a("size",28),n(8),a("code",r.codeSingle),n(6),a("code",r.codeJoined),n(6),a("code",r.codeTablePerClass),n(6),a("code",r.codeMapped))},dependencies:[p,d,m],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-gray[_ngcontent-%COMP%]{color:#475569}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}.op-desc[_ngcontent-%COMP%]{font-size:.78rem;color:#64748b;margin:0 0 8px}"],changeDetection:0})};export{g as HibInheritanceComponent};
