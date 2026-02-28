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

// src/app/features/tutorials/topics/ms-events.component.ts
var MsEventsComponent = class _MsEventsComponent {
  codeIntro = `// Event-driven flow:
// 1. Order Service \u2192 publishes "OrderPlaced" event
// 2. Kafka/RabbitMQ \u2192 delivers to subscribers
// 3. Payment Service \u2192 processes payment
// 4. Inventory Service \u2192 reserves stock
// 5. Notification Service \u2192 sends email

// Benefits:
// \u2705 Services are decoupled
// \u2705 Each handles events at its own pace
// \u2705 Easy to add new consumers`;
  codeKafka = `// Kafka producer
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
      value-serializer: org.springframework.kafka.support.serializer.JsonSerializer`;
  codeConsumer = `// Kafka consumer (in payment-service)
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
        spring.json.trusted.packages: com.app.events`;
  codeRabbit = `// RabbitMQ \u2014 message broker
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
public void handle(OrderEvent event) { }`;
  codeStream = `// Spring Cloud Stream \u2014 broker-agnostic
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
          group: payment-group`;
  static \u0275fac = function MsEventsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MsEventsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MsEventsComponent, selectors: [["app-topic-ms-events"]], decls: 36, vars: 7, consts: [["title", "Event-Driven Architecture", "subtitle", "Decouple services with events. Kafka, RabbitMQ, event sourcing, and publish/subscribe patterns.", "badge", "MICROSERVICES", "gradient", "linear-gradient(135deg, #0369a1, #38bdf8)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-sky", 3, "size"], [1, "prose"], [3, "code"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"]], template: function MsEventsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Event-Driven");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7, "Services publish events when state changes. Other services react asynchronously \u2014 ");
      \u0275\u0275elementStart(8, "strong");
      \u0275\u0275text(9, "loose coupling");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, ", ");
      \u0275\u0275elementStart(11, "strong");
      \u0275\u0275text(12, "high scalability");
      \u0275\u0275elementEnd();
      \u0275\u0275text(13, ".");
      \u0275\u0275elementEnd();
      \u0275\u0275element(14, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "section", 1)(16, "h2", 2);
      \u0275\u0275element(17, "app-icon", 6);
      \u0275\u0275text(18, " Implementations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 7)(20, "div", 8)(21, "h3", 9);
      \u0275\u0275text(22, "Kafka Producer");
      \u0275\u0275elementEnd();
      \u0275\u0275element(23, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 8)(25, "h3", 9);
      \u0275\u0275text(26, "Kafka Consumer");
      \u0275\u0275elementEnd();
      \u0275\u0275element(27, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 8)(29, "h3", 9);
      \u0275\u0275text(30, "RabbitMQ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(31, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 8)(33, "h3", 9);
      \u0275\u0275text(34, "Spring Cloud Stream");
      \u0275\u0275elementEnd();
      \u0275\u0275element(35, "app-code-block", 5);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(11);
      \u0275\u0275property("code", ctx.codeIntro);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(6);
      \u0275\u0275property("code", ctx.codeKafka);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeConsumer);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeRabbit);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeStream);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ["\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-sky[_ngcontent-%COMP%] {\n  color: #0284c7;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=ms-events.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MsEventsComponent, [{
    type: Component,
    args: [{ selector: "app-topic-ms-events", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout title="Event-Driven Architecture" subtitle="Decouple services with events. Kafka, RabbitMQ, event sourcing, and publish/subscribe patterns." badge="MICROSERVICES" gradient="linear-gradient(135deg, #0369a1, #38bdf8)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-sky" /> Event-Driven</h2>
        <div class="prose"><p>Services publish events when state changes. Other services react asynchronously \u2014 <strong>loose coupling</strong>, <strong>high scalability</strong>.</p><app-code-block [code]="codeIntro" /></div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Implementations</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Kafka Producer</h3><app-code-block [code]="codeKafka" /></div>
          <div class="op-card"><h3 class="op-title">Kafka Consumer</h3><app-code-block [code]="codeConsumer" /></div>
          <div class="op-card"><h3 class="op-title">RabbitMQ</h3><app-code-block [code]="codeRabbit" /></div>
          <div class="op-card"><h3 class="op-title">Spring Cloud Stream</h3><app-code-block [code]="codeStream" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ["/* angular:styles/component:css;6ca1b4b71322260936bbef9306106bf4c7066aeed781e2e1a31044135b225cc2;D:/A21/JavaIQ/src/app/features/tutorials/topics/ms-events.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-sky {\n  color: #0284c7;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=ms-events.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MsEventsComponent, { className: "MsEventsComponent", filePath: "src/app/features/tutorials/topics/ms-events.component.ts", lineNumber: 33 });
})();
export {
  MsEventsComponent
};
//# sourceMappingURL=chunk-QTM3T4ZU.js.map
