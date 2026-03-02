import{a as p,b as l,c as u}from"./chunk-FZG5ZG77.js";import{Hb as o,Ma as t,Xa as c,mb as i,nb as n,ob as e,pb as r}from"./chunk-5DVJCJ5O.js";import"./chunk-NWJ5J3BN.js";var m=class s{codeIntro=`// Two approaches:
// 1. JPA Auditing \u2014 timestamps + who (Spring Data)
// 2. Hibernate Envers \u2014 full version history

// JPA Auditing: auto-fills createdAt, updatedAt, createdBy
@Entity @EntityListeners(AuditingEntityListener.class)
public class User {
    @CreatedDate private LocalDateTime createdAt;
    @LastModifiedDate private LocalDateTime updatedAt;
    @CreatedBy private String createdBy;
    @LastModifiedBy private String updatedBy;
}`;codeJpa=`// Setup JPA Auditing
@Configuration @EnableJpaAuditing
public class AuditConfig {
    @Bean
    public AuditorAware<String> auditorProvider() {
        return () -> Optional.ofNullable(
            SecurityContextHolder.getContext()
                .getAuthentication().getName());
    }
}

// Base entity with audit fields
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public abstract class Auditable {
    @CreatedDate
    @Column(updatable = false)
    private LocalDateTime createdAt;

    @LastModifiedDate
    private LocalDateTime updatedAt;

    @CreatedBy @Column(updatable = false)
    private String createdBy;

    @LastModifiedBy
    private String updatedBy;
}`;codeEnvers=`// Setup Envers
<dependency>
    <groupId>org.hibernate.orm</groupId>
    <artifactId>hibernate-envers</artifactId>
</dependency>

// Mark entity as audited
@Entity @Audited
public class Product {
    @Id @GeneratedValue private Long id;
    private String name;
    private BigDecimal price;

    @NotAudited  // skip this field
    private String internalNotes;
}

// Envers auto-creates: products_AUD table
// Stores every INSERT, UPDATE, DELETE with revision number`;codeHistory=`// Query audit history
AuditReader reader = AuditReaderFactory.get(em);

// Get entity at specific revision
Product v1 = reader.find(Product.class, productId, revisionNumber);

// Get all revisions of an entity
List<Number> revisions = reader.getRevisions(Product.class, productId);

// Query by property at a point in time
List<Product> cheapProducts = reader.createQuery()
    .forEntitiesAtRevision(Product.class, revisionNumber)
    .add(AuditEntity.property("price").lt(new BigDecimal("50")))
    .getResultList();

// Get revision date
Date revDate = reader.getRevisionDate(revisionNumber);`;codeListener=`// Custom entity lifecycle callbacks
@Entity
@EntityListeners(UserActivityListener.class)
public class User { }

public class UserActivityListener {
    @PrePersist
    public void onPrePersist(User user) {
        log.info("Creating user: {}", user.getName());
    }

    @PostUpdate
    public void onPostUpdate(User user) {
        activityLog.record("USER_UPDATED", user.getId());
    }

    @PreRemove
    public void onPreRemove(User user) {
        log.warn("Deleting user: {}", user.getId());
    }
}`;static \u0275fac=function(d){return new(d||s)};static \u0275cmp=c({type:s,selectors:[["app-topic-hib-auditing"]],decls:30,vars:7,consts:[["title","Auditing & Envers","subtitle","Track entity changes automatically. JPA auditing, Hibernate Envers, and audit trail queries.","badge","HIBERNATE & JPA","gradient","linear-gradient(135deg, #166534, #4ade80)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-green",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(d,a){d&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),r(3,"app-icon",3),o(4," Auditing"),e(),n(5,"div",4)(6,"p"),o(7,"Track who changed what and when. JPA auditing for timestamps/user, Hibernate Envers for full version history."),e(),r(8,"app-code-block",5),e()(),n(9,"section",1)(10,"h2",2),r(11,"app-icon",6),o(12," Patterns"),e(),n(13,"div",7)(14,"div",8)(15,"h3",9),o(16,"JPA Auditing"),e(),r(17,"app-code-block",5),e(),n(18,"div",8)(19,"h3",9),o(20,"Hibernate Envers"),e(),r(21,"app-code-block",5),e(),n(22,"div",8)(23,"h3",9),o(24,"Querying History"),e(),r(25,"app-code-block",5),e(),n(26,"div",8)(27,"h3",9),o(28,"Custom Listener"),e(),r(29,"app-code-block",5),e()()()()),d&2&&(t(3),i("size",28),t(5),i("code",a.codeIntro),t(3),i("size",28),t(6),i("code",a.codeJpa),t(4),i("code",a.codeEnvers),t(4),i("code",a.codeHistory),t(4),i("code",a.codeListener))},dependencies:[p,l,u],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-green[_ngcontent-%COMP%]{color:#16a34a}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{m as HibAuditingComponent};
