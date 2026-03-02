import{a as c,b as l,c as m}from"./chunk-FZG5ZG77.js";import{Hb as t,Ma as n,Xa as p,mb as a,nb as i,ob as e,pb as r}from"./chunk-5DVJCJ5O.js";import"./chunk-NWJ5J3BN.js";var g=class s{codeIntro=`@Entity
@Table(name = "users")
public class User {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @Column(unique = true)
    private String email;
    private int age;
    // getters, setters
}

// Just define the interface \u2014 Spring does the rest!
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    List<User> findByAgeGreaterThan(int age);
    boolean existsByEmail(String email);
}`;codeQuery=`public interface UserRepository extends JpaRepository<User, Long> {
    // Derived query methods (Spring parses the name!)
    List<User> findByNameContainingIgnoreCase(String name);
    List<User> findByAgeBetween(int min, int max);
    List<User> findByNameAndEmail(String name, String email);
    Optional<User> findFirstByOrderByCreatedAtDesc();
    long countByAgeGreaterThan(int age);
    void deleteByEmail(String email);

    // Pagination + sorting built in
    Page<User> findByAge(int age, Pageable pageable);
    List<User> findTop5ByOrderByCreatedAtDesc();
}`;codeCustom=`// JPQL
@Query("SELECT u FROM User u WHERE u.age > :age AND u.name LIKE %:name%")
List<User> searchUsers(@Param("age") int age, @Param("name") String name);

// Native SQL
@Query(value = "SELECT * FROM users WHERE email LIKE %?1%", nativeQuery = true)
List<User> findByEmailPattern(String pattern);

// Modifying queries
@Modifying @Transactional
@Query("UPDATE User u SET u.active = false WHERE u.lastLogin < :date")
int deactivateInactiveUsers(@Param("date") LocalDate date);`;codeRelation=`@Entity
public class Order {
    @Id @GeneratedValue
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    private List<OrderItem> items = new ArrayList<>();
}

@Entity
public class OrderItem {
    @Id @GeneratedValue
    private Long id;
    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order;
    private String productName;
    private int quantity;
}`;codeAudit=`// Enable auditing
@Configuration @EnableJpaAuditing
public class JpaConfig {}

@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public abstract class Auditable {
    @CreatedDate
    private LocalDateTime createdAt;
    @LastModifiedDate
    private LocalDateTime updatedAt;
    @CreatedBy
    private String createdBy;
    @LastModifiedBy
    private String updatedBy;
}

// Your entity extends it
@Entity
public class User extends Auditable {
    // createdAt, updatedAt auto-populated!
}`;static \u0275fac=function(d){return new(d||s)};static \u0275cmp=p({type:s,selectors:[["app-topic-sb-data-jpa"]],decls:33,vars:7,consts:[["title","Spring Data JPA","subtitle","Database access simplified. Repositories, query methods, projections, auditing, and specifications.","badge","SPRING BOOT","gradient","linear-gradient(135deg, #4338ca, #818cf8)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-indigo",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-purple",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(d,o){d&1&&(i(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),r(3,"app-icon",3),t(4," Spring Data JPA"),e(),i(5,"div",4)(6,"p"),t(7,"Define an interface, Spring generates the implementation. "),i(8,"strong"),t(9,"No boilerplate"),e(),t(10," \u2014 just method names that become queries."),e(),r(11,"app-code-block",5),e()(),i(12,"section",1)(13,"h2",2),r(14,"app-icon",6),t(15," Patterns"),e(),i(16,"div",7)(17,"div",8)(18,"h3",9),t(19,"Query Methods"),e(),r(20,"app-code-block",5),e(),i(21,"div",8)(22,"h3",9),t(23,"Custom Queries"),e(),r(24,"app-code-block",5),e(),i(25,"div",8)(26,"h3",9),t(27,"Relationships"),e(),r(28,"app-code-block",5),e(),i(29,"div",8)(30,"h3",9),t(31,"Auditing"),e(),r(32,"app-code-block",5),e()()()()),d&2&&(n(3),a("size",28),n(8),a("code",o.codeIntro),n(3),a("size",28),n(6),a("code",o.codeQuery),n(4),a("code",o.codeCustom),n(4),a("code",o.codeRelation),n(4),a("code",o.codeAudit))},dependencies:[c,l,m],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.icon-purple[_ngcontent-%COMP%]{color:#7c3aed}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{g as SbDataJpaComponent};
