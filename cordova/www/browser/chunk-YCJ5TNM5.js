import{a as s,b as c,c as m}from"./chunk-6QA53VVD.js";import{Fb as r,Ka as t,Va as l,kb as n,lb as i,mb as e,nb as o}from"./chunk-RGVQRHF6.js";import"./chunk-NWJ5J3BN.js";var u=class p{codeIntro=`@Entity
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
}`;codeId=`// AUTO \u2014 provider picks strategy
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
private OrderItemId id;`;codeColumn=`// Basic column mapping
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
private Status status;`;codeEmbed=`// Reusable value object (no own table)
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
}`;codeConverter=`// Custom type conversion
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
private Map<String, Object> metadata;`;static \u0275fac=function(d){return new(d||p)};static \u0275cmp=l({type:p,selectors:[["app-topic-hib-entities"]],decls:30,vars:7,consts:[["title","Entity Mapping","subtitle","Map Java classes to tables. @Entity, @Table, @Column, ID strategies, embeddables, and converters.","badge","HIBERNATE & JPA","gradient","linear-gradient(135deg, #166534, #4ade80)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-green",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(d,a){d&1&&(i(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),o(3,"app-icon",3),r(4," Entity Mapping"),e(),i(5,"div",4)(6,"p"),r(7,"JPA annotations define how Java objects map to database tables and columns."),e(),o(8,"app-code-block",5),e()(),i(9,"section",1)(10,"h2",2),o(11,"app-icon",6),r(12," Patterns"),e(),i(13,"div",7)(14,"div",8)(15,"h3",9),r(16,"ID Strategies"),e(),o(17,"app-code-block",5),e(),i(18,"div",8)(19,"h3",9),r(20,"Column Mapping"),e(),o(21,"app-code-block",5),e(),i(22,"div",8)(23,"h3",9),r(24,"Embeddables"),e(),o(25,"app-code-block",5),e(),i(26,"div",8)(27,"h3",9),r(28,"Converters"),e(),o(29,"app-code-block",5),e()()()()),d&2&&(t(3),n("size",28),t(5),n("code",a.codeIntro),t(3),n("size",28),t(6),n("code",a.codeId),t(4),n("code",a.codeColumn),t(4),n("code",a.codeEmbed),t(4),n("code",a.codeConverter))},dependencies:[s,c,m],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-green[_ngcontent-%COMP%]{color:#16a34a}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{u as HibEntitiesComponent};
