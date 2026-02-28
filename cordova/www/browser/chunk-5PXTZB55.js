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

// src/app/features/tutorials/topics/hib-entities.component.ts
var HibEntitiesComponent = class _HibEntitiesComponent {
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
  codeId = `// AUTO \u2014 provider picks strategy
@Id @GeneratedValue(strategy = GenerationType.AUTO)
private Long id;

// IDENTITY \u2014 DB auto-increment (MySQL)
@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;

// SEQUENCE \u2014 DB sequence (PostgreSQL)
@Id @GeneratedValue(strategy = GenerationType.SEQUENCE,
    generator = "user_seq")
@SequenceGenerator(name = "user_seq",
    sequenceName = "user_sequence", allocationSize = 50)
private Long id;

// UUID \u2014 universally unique
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
  static \u0275fac = function HibEntitiesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HibEntitiesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HibEntitiesComponent, selectors: [["app-topic-hib-entities"]], decls: 30, vars: 7, consts: [["title", "Entity Mapping", "subtitle", "Map Java classes to tables. @Entity, @Table, @Column, ID strategies, embeddables, and converters.", "badge", "HIBERNATE & JPA", "gradient", "linear-gradient(135deg, #166534, #4ade80)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-green", 3, "size"], [1, "prose"], [3, "code"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"]], template: function HibEntitiesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Entity Mapping");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7, "JPA annotations define how Java objects map to database tables and columns.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "section", 1)(10, "h2", 2);
      \u0275\u0275element(11, "app-icon", 6);
      \u0275\u0275text(12, " Patterns");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 7)(14, "div", 8)(15, "h3", 9);
      \u0275\u0275text(16, "ID Strategies");
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 8)(19, "h3", 9);
      \u0275\u0275text(20, "Column Mapping");
      \u0275\u0275elementEnd();
      \u0275\u0275element(21, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 8)(23, "h3", 9);
      \u0275\u0275text(24, "Embeddables");
      \u0275\u0275elementEnd();
      \u0275\u0275element(25, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 8)(27, "h3", 9);
      \u0275\u0275text(28, "Converters");
      \u0275\u0275elementEnd();
      \u0275\u0275element(29, "app-code-block", 5);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(5);
      \u0275\u0275property("code", ctx.codeIntro);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(6);
      \u0275\u0275property("code", ctx.codeId);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeColumn);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeEmbed);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeConverter);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ["\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-green[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=hib-entities.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HibEntitiesComponent, [{
    type: Component,
    args: [{ selector: "app-topic-hib-entities", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
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
  `, styles: ["/* angular:styles/component:css;a030b821bab9f37561f03b8eb96b0a16bdbab24720355473efed47a43a37bfb9;D:/A21/JavaIQ/src/app/features/tutorials/topics/hib-entities.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-green {\n  color: #16a34a;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=hib-entities.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HibEntitiesComponent, { className: "HibEntitiesComponent", filePath: "src/app/features/tutorials/topics/hib-entities.component.ts", lineNumber: 36 });
})();
export {
  HibEntitiesComponent
};
//# sourceMappingURL=chunk-5PXTZB55.js.map
