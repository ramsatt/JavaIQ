import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-hib-entities',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="Entity Mapping" subtitle="Map Java classes to tables. @Entity, @Table, @Column, ID strategies, embeddables, and converters." badge="HIBERNATE & JPA" gradient="linear-gradient(135deg, #166534, #4ade80)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-green" /> Entity Mapping</h2>
        <div class="prose">
          <p>JPA annotations define how Java objects map to database tables and columns.</p>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Patterns</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">ID Strategies</h3><app-code-block [code]="codeId" /></div>
          <div class="op-card"><h3 class="op-title">Column Mapping</h3><app-code-block [code]="codeColumn" /></div>
          <div class="op-card"><h3 class="op-title">Embeddables</h3><app-code-block [code]="codeEmbed" /></div>
          <div class="op-card"><h3 class="op-title">Converters</h3><app-code-block [code]="codeConverter" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-green { color: #16a34a; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class HibEntitiesComponent {
  codeIntro = `@Entity
@Table(name = "products", indexes = {
    @Index(name = "idx_sku", columnList = "sku", unique = true)
})
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 200)
    private String name;

    @Column(unique = true, length = 50)
    private String sku;

    @Column(precision = 10, scale = 2)
    private BigDecimal price;

    @Enumerated(EnumType.STRING)
    private Category category;

    @Temporal(TemporalType.TIMESTAMP)
    private Date createdAt;

    @Transient  // NOT persisted
    private double discountedPrice;
}`;
  codeId = `// AUTO — provider picks strategy
@Id @GeneratedValue(strategy = GenerationType.AUTO)
private Long id;

// IDENTITY — DB auto-increment (MySQL)
@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;

// SEQUENCE — DB sequence (PostgreSQL)
@Id @GeneratedValue(strategy = GenerationType.SEQUENCE,
    generator = "user_seq")
@SequenceGenerator(name = "user_seq",
    sequenceName = "user_sequence", allocationSize = 50)
private Long id;

// UUID — universally unique
@Id @GeneratedValue(strategy = GenerationType.UUID)
private UUID id;

// Composite key
@EmbeddedId
private OrderItemId id;`;
  codeColumn = `// Basic column mapping
@Column(name = "full_name",     // DB column name
    nullable = false,           // NOT NULL
    length = 255,               // VARCHAR(255)
    unique = true,              // UNIQUE constraint
    insertable = true,          // include in INSERT
    updatable = false)          // exclude from UPDATE
private String name;

// Large objects
@Lob  // BLOB or CLOB
private byte[] profileImage;

@Lob
private String biography;  // TEXT/CLOB

// Enum mapping
@Enumerated(EnumType.STRING)  // stores "ACTIVE" not 0
private Status status;`;
  codeEmbed = `// Reusable value object (no own table)
@Embeddable
public class Address {
    private String street;
    private String city;
    @Column(length = 10)
    private String zipCode;
    private String country;
}

@Entity
public class User {
    @Id @GeneratedValue
    private Long id;
    private String name;

    @Embedded
    private Address homeAddress;

    @Embedded
    @AttributeOverrides({
        @AttributeOverride(name = "street", column = @Column(name = "work_street")),
        @AttributeOverride(name = "city", column = @Column(name = "work_city"))
    })
    private Address workAddress;
}`;
  codeConverter = `// Custom type conversion
@Converter(autoApply = true)
public class MoneyConverter
    implements AttributeConverter<Money, BigDecimal> {

    @Override
    public BigDecimal convertToDatabaseColumn(Money money) {
        return money.getAmount();
    }

    @Override
    public Money convertToEntityAttribute(BigDecimal value) {
        return new Money(value, Currency.USD);
    }
}

// JSON column
@Convert(converter = JsonConverter.class)
@Column(columnDefinition = "JSON")
private Map<String, Object> metadata;`;
}
