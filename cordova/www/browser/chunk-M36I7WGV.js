import{a as p,b as l,c as m}from"./chunk-6QA53VVD.js";import{Fb as t,Ka as r,Va as d,kb as i,lb as n,mb as e,nb as o}from"./chunk-RGVQRHF6.js";import"./chunk-NWJ5J3BN.js";var u=class c{codeIntro=`// Event-driven flow:
// 1. Order Service \u2192 publishes "OrderPlaced" event
// 2. Kafka/RabbitMQ \u2192 delivers to subscribers
// 3. Payment Service \u2192 processes payment
// 4. Inventory Service \u2192 reserves stock
// 5. Notification Service \u2192 sends email

// Benefits:
// \u2705 Services are decoupled
// \u2705 Each handles events at its own pace
// \u2705 Easy to add new consumers`;codeKafka=`// Kafka producer
@Service
public class OrderEventProducer {
    @Autowired KafkaTemplate<String, OrderEvent> kafka;

    public void publishOrderPlaced(Order order) {
        OrderEvent event = new OrderEvent(
            order.getId(), "PLACED", Instant.now());
        kafka.send("order-events", order.getId().toString(), event);
    }
}

# application.yml
spring:
  kafka:
    bootstrap-servers: localhost:9092
    producer:
      key-serializer: org.apache.kafka.common.serialization.StringSerializer
      value-serializer: org.springframework.kafka.support.serializer.JsonSerializer`;codeConsumer=`// Kafka consumer (in payment-service)
@Component
public class PaymentEventListener {
    @KafkaListener(topics = "order-events", groupId = "payment-group")
    public void handleOrderPlaced(OrderEvent event) {
        if ("PLACED".equals(event.getStatus())) {
            paymentService.processPayment(event.getOrderId());
        }
    }
}

# Consumer config
spring:
  kafka:
    consumer:
      group-id: payment-group
      auto-offset-reset: earliest
      value-deserializer: org.springframework.kafka.support.serializer.JsonDeserializer
      properties:
        spring.json.trusted.packages: com.app.events`;codeRabbit=`// RabbitMQ \u2014 message broker
@Configuration
public class RabbitConfig {
    @Bean TopicExchange orderExchange() {
        return new TopicExchange("order-exchange");
    }
    @Bean Queue paymentQueue() { return new Queue("payment-queue"); }
    @Bean Binding binding() {
        return BindingBuilder.bind(paymentQueue())
            .to(orderExchange()).with("order.placed");
    }
}

// Publish
rabbitTemplate.convertAndSend("order-exchange", "order.placed", event);

// Consume
@RabbitListener(queues = "payment-queue")
public void handle(OrderEvent event) { }`;codeStream=`// Spring Cloud Stream \u2014 broker-agnostic
// Works with Kafka, RabbitMQ, etc.

// Producer (functional style)
@Bean
public Supplier<OrderEvent> orderProducer() {
    return () -> new OrderEvent("PLACED");
}

// Consumer
@Bean
public Consumer<OrderEvent> orderConsumer() {
    return event -> paymentService.process(event);
}

# application.yml
spring:
  cloud:
    stream:
      bindings:
        orderProducer-out-0:
          destination: order-events
        orderConsumer-in-0:
          destination: order-events
          group: payment-group`;static \u0275fac=function(s){return new(s||c)};static \u0275cmp=d({type:c,selectors:[["app-topic-ms-events"]],decls:36,vars:7,consts:[["title","Event-Driven Architecture","subtitle","Decouple services with events. Kafka, RabbitMQ, event sourcing, and publish/subscribe patterns.","badge","MICROSERVICES","gradient","linear-gradient(135deg, #0369a1, #38bdf8)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-sky",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(s,a){s&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),o(3,"app-icon",3),t(4," Event-Driven"),e(),n(5,"div",4)(6,"p"),t(7,"Services publish events when state changes. Other services react asynchronously \u2014 "),n(8,"strong"),t(9,"loose coupling"),e(),t(10,", "),n(11,"strong"),t(12,"high scalability"),e(),t(13,"."),e(),o(14,"app-code-block",5),e()(),n(15,"section",1)(16,"h2",2),o(17,"app-icon",6),t(18," Implementations"),e(),n(19,"div",7)(20,"div",8)(21,"h3",9),t(22,"Kafka Producer"),e(),o(23,"app-code-block",5),e(),n(24,"div",8)(25,"h3",9),t(26,"Kafka Consumer"),e(),o(27,"app-code-block",5),e(),n(28,"div",8)(29,"h3",9),t(30,"RabbitMQ"),e(),o(31,"app-code-block",5),e(),n(32,"div",8)(33,"h3",9),t(34,"Spring Cloud Stream"),e(),o(35,"app-code-block",5),e()()()()),s&2&&(r(3),i("size",28),r(11),i("code",a.codeIntro),r(3),i("size",28),r(6),i("code",a.codeKafka),r(4),i("code",a.codeConsumer),r(4),i("code",a.codeRabbit),r(4),i("code",a.codeStream))},dependencies:[p,l,m],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-sky[_ngcontent-%COMP%]{color:#0284c7}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{u as MsEventsComponent};
