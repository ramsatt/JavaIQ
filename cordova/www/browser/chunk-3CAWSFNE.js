import {
  CodeBlockComponent,
  TutorialLayoutComponent
} from "./chunk-ACGKXV3L.js";
import {
  IconComponent
} from "./chunk-GCMLYE3M.js";
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
} from "./chunk-6OY2Y3BE.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/hib-inheritance.component.ts
var HibInheritanceComponent = class _HibInheritanceComponent {
  codeIntro = `// Strategy comparison:
// SINGLE_TABLE: \u26A1 Fastest queries, \u{1F615} nullable columns
// JOINED:       \u2705 Normalized,     \u{1F422} JOIN on queries
// TABLE_PER_CLASS: \u{1F6AB} No JOIN,     \u{1F615} polymorphic queries slow

// Choose SINGLE_TABLE for:
//   - Simple hierarchies, few subtypes
//   - Performance-critical reads

// Choose JOINED for:
//   - Complex hierarchies, data integrity
//   - Many subtype-specific columns`;
  codeSingle = `// ALL entities in ONE table
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
// \u26A0\uFE0F cardNumber is NULL for PayPal rows`;
  codeJoined = `// Each class gets its own table
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
//         trucks (vehicle_id, payloadCapacity)`;
  codeTablePerClass = `// Each concrete class has ALL columns
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
//         sms_notifications (id, message, sentAt, phoneNumber)`;
  codeMapped = `// NOT an entity \u2014 just shared fields
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
// No polymorphic queries possible`;
  static \u0275fac = function HibInheritanceComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HibInheritanceComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HibInheritanceComponent, selectors: [["app-topic-hib-inheritance"]], decls: 38, vars: 7, consts: [["title", "Inheritance Mapping", "subtitle", "Map class hierarchies to database tables. Single table, joined, and table-per-class strategies.", "badge", "HIBERNATE & JPA", "gradient", "linear-gradient(135deg, #374151, #9ca3af)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-gray", 3, "size"], [1, "prose"], [3, "code"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"], [1, "op-desc"]], template: function HibInheritanceComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Strategies");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7, "JPA supports three inheritance mapping strategies. Each has trade-offs in normalization, performance, and flexibility.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "section", 1)(10, "h2", 2);
      \u0275\u0275element(11, "app-icon", 6);
      \u0275\u0275text(12, " Strategies");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 7)(14, "div", 8)(15, "h3", 9);
      \u0275\u0275text(16, "Single Table");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "p", 10);
      \u0275\u0275text(18, "Best for simple hierarchies. All in ONE table with discriminator.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(19, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 8)(21, "h3", 9);
      \u0275\u0275text(22, "Joined");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "p", 10);
      \u0275\u0275text(24, "Normalized. Each class gets its own table.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(25, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 8)(27, "h3", 9);
      \u0275\u0275text(28, "Table Per Class");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "p", 10);
      \u0275\u0275text(30, "Each concrete class has a full table. No joins needed.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(31, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 8)(33, "h3", 9);
      \u0275\u0275text(34, "MappedSuperclass");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "p", 10);
      \u0275\u0275text(36, "Share fields without inheritance mapping.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(37, "app-code-block", 5);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(5);
      \u0275\u0275property("code", ctx.codeIntro);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(8);
      \u0275\u0275property("code", ctx.codeSingle);
      \u0275\u0275advance(6);
      \u0275\u0275property("code", ctx.codeJoined);
      \u0275\u0275advance(6);
      \u0275\u0275property("code", ctx.codeTablePerClass);
      \u0275\u0275advance(6);
      \u0275\u0275property("code", ctx.codeMapped);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ["\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-gray[_ngcontent-%COMP%] {\n  color: #475569;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #64748b;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=hib-inheritance.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HibInheritanceComponent, [{
    type: Component,
    args: [{ selector: "app-topic-hib-inheritance", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout title="Inheritance Mapping" subtitle="Map class hierarchies to database tables. Single table, joined, and table-per-class strategies." badge="HIBERNATE & JPA" gradient="linear-gradient(135deg, #374151, #9ca3af)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-gray" /> Strategies</h2>
        <div class="prose">
          <p>JPA supports three inheritance mapping strategies. Each has trade-offs in normalization, performance, and flexibility.</p>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Strategies</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Single Table</h3><p class="op-desc">Best for simple hierarchies. All in ONE table with discriminator.</p><app-code-block [code]="codeSingle" /></div>
          <div class="op-card"><h3 class="op-title">Joined</h3><p class="op-desc">Normalized. Each class gets its own table.</p><app-code-block [code]="codeJoined" /></div>
          <div class="op-card"><h3 class="op-title">Table Per Class</h3><p class="op-desc">Each concrete class has a full table. No joins needed.</p><app-code-block [code]="codeTablePerClass" /></div>
          <div class="op-card"><h3 class="op-title">MappedSuperclass</h3><p class="op-desc">Share fields without inheritance mapping.</p><app-code-block [code]="codeMapped" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ["/* angular:styles/component:css;930596077c71fa8078dafdb408608513eefe6e90c9e502f80cd58bc4aa95050e;D:/A21/JavaIQ/src/app/features/tutorials/topics/hib-inheritance.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-gray {\n  color: #475569;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc {\n  font-size: 0.78rem;\n  color: #64748b;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=hib-inheritance.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HibInheritanceComponent, { className: "HibInheritanceComponent", filePath: "src/app/features/tutorials/topics/hib-inheritance.component.ts", lineNumber: 36 });
})();
export {
  HibInheritanceComponent
};
//# sourceMappingURL=chunk-3CAWSFNE.js.map
