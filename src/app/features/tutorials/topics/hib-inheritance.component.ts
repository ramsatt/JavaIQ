import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-hib-inheritance',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
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
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-gray { color: #475569; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; } .op-desc { font-size: 0.78rem; color: #64748b; margin: 0 0 8px; }
  `
})
export class HibInheritanceComponent {
  codeIntro = `// Strategy comparison:
// SINGLE_TABLE: ⚡ Fastest queries, 😕 nullable columns
// JOINED:       ✅ Normalized,     🐢 JOIN on queries
// TABLE_PER_CLASS: 🚫 No JOIN,     😕 polymorphic queries slow

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
// ⚠️ cardNumber is NULL for PayPal rows`;
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
  codeMapped = `// NOT an entity — just shared fields
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
}
