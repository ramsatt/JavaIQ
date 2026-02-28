import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-ms-events',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="Event-Driven Architecture" subtitle="Decouple services with events. Kafka, RabbitMQ, event sourcing, and publish/subscribe patterns." badge="MICROSERVICES" gradient="linear-gradient(135deg, #0369a1, #38bdf8)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-sky" /> Event-Driven</h2>
        <div class="prose"><p>Services publish events when state changes. Other services react asynchronously — <strong>loose coupling</strong>, <strong>high scalability</strong>.</p><app-code-block [code]="codeIntro" /></div>
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
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-sky { color: #0284c7; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class MsEventsComponent {
  codeIntro = `// Event-driven flow:
// 1. Order Service → publishes "OrderPlaced" event
// 2. Kafka/RabbitMQ → delivers to subscribers
// 3. Payment Service → processes payment
// 4. Inventory Service → reserves stock
// 5. Notification Service → sends email

// Benefits:
// ✅ Services are decoupled
// ✅ Each handles events at its own pace
// ✅ Easy to add new consumers`;
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
  codeRabbit = `// RabbitMQ — message broker
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
  codeStream = `// Spring Cloud Stream — broker-agnostic
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
}
