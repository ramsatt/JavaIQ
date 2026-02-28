import { Component, ChangeDetectionStrategy, inject, signal, ViewContainerRef, ViewChild, Type, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonIcon } from '@ionic/angular/standalone';

// Lazy import map for all topic components
const TOPIC_MAP: Record<string, Record<string, () => Promise<Type<unknown>>>> = {
  'core-java': {
    'arrays': () => import('./topics/arrays.component').then(m => m.ArraysComponent),
    'strings': () => import('./topics/strings.component').then(m => m.StringsComponent),
    'oop-classes': () => import('./topics/oop-classes.component').then(m => m.OopClassesComponent),
    'inheritance': () => import('./topics/inheritance.component').then(m => m.InheritanceComponent),
    'polymorphism': () => import('./topics/polymorphism.component').then(m => m.PolymorphismComponent),
    'abstraction': () => import('./topics/abstraction.component').then(m => m.AbstractionComponent),
    'encapsulation': () => import('./topics/encapsulation.component').then(m => m.EncapsulationComponent),
    'exceptions': () => import('./topics/exceptions.component').then(m => m.ExceptionsComponent),
    'collections-list': () => import('./topics/collections-list.component').then(m => m.CollectionsListComponent),
    'collections-map': () => import('./topics/collections-map.component').then(m => m.CollectionsMapComponent),
    'generics': () => import('./topics/generics.component').then(m => m.GenericsComponent),
    'streams': () => import('./topics/streams.component').then(m => m.StreamsComponent),
    'lambdas': () => import('./topics/lambdas.component').then(m => m.LambdasComponent),
    'records-sealed': () => import('./topics/records-sealed.component').then(m => m.RecordsSealedComponent),
    'io-files': () => import('./topics/io-files.component').then(m => m.IoFilesComponent),
  },
  'spring-framework': {
    'spring-ioc': () => import('./topics/spring-ioc.component').then(m => m.SpringIocComponent),
    'spring-di': () => import('./topics/spring-di.component').then(m => m.SpringDiComponent),
    'spring-beans': () => import('./topics/spring-beans.component').then(m => m.SpringBeansComponent),
    'spring-aop': () => import('./topics/spring-aop.component').then(m => m.SpringAopComponent),
    'spring-mvc': () => import('./topics/spring-mvc.component').then(m => m.SpringMvcComponent),
    'spring-rest': () => import('./topics/spring-rest.component').then(m => m.SpringRestComponent),
    'spring-data': () => import('./topics/spring-data.component').then(m => m.SpringDataComponent),
    'spring-security': () => import('./topics/spring-security.component').then(m => m.SpringSecurityComponent),
    'spring-config': () => import('./topics/spring-config.component').then(m => m.SpringConfigComponent),
    'spring-testing': () => import('./topics/spring-testing.component').then(m => m.SpringTestingComponent),
    'spring-events': () => import('./topics/spring-events.component').then(m => m.SpringEventsComponent),
    'spring-caching': () => import('./topics/spring-caching.component').then(m => m.SpringCachingComponent),
  },
  'spring-boot': {
    'sb-auto-config': () => import('./topics/sb-auto-config.component').then(m => m.SbAutoConfigComponent),
    'sb-starters': () => import('./topics/sb-starters.component').then(m => m.SbStartersComponent),
    'sb-properties': () => import('./topics/sb-properties.component').then(m => m.SbPropertiesComponent),
    'sb-devtools': () => import('./topics/sb-devtools.component').then(m => m.SbDevtoolsComponent),
    'sb-actuator': () => import('./topics/sb-actuator.component').then(m => m.SbActuatorComponent),
    'sb-logging': () => import('./topics/sb-logging.component').then(m => m.SbLoggingComponent),
    'sb-rest-api': () => import('./topics/sb-rest-api.component').then(m => m.SbRestApiComponent),
    'sb-validation': () => import('./topics/sb-validation.component').then(m => m.SbValidationComponent),
    'sb-exception': () => import('./topics/sb-exception.component').then(m => m.SbExceptionComponent),
    'sb-data-jpa': () => import('./topics/sb-data-jpa.component').then(m => m.SbDataJpaComponent),
    'sb-security': () => import('./topics/sb-security.component').then(m => m.SbSecurityComponent),
    'sb-testing': () => import('./topics/sb-testing.component').then(m => m.SbTestingComponent),
    'sb-profiles': () => import('./topics/sb-profiles.component').then(m => m.SbProfilesComponent),
    'sb-docker': () => import('./topics/sb-docker.component').then(m => m.SbDockerComponent),
    'sb-caching': () => import('./topics/sb-caching.component').then(m => m.SbCachingComponent),
    'sb-scheduling': () => import('./topics/sb-scheduling.component').then(m => m.SbSchedulingComponent),
    'sb-events': () => import('./topics/sb-events.component').then(m => m.SbEventsComponent),
    'sb-deploy': () => import('./topics/sb-deploy.component').then(m => m.SbDeployComponent),
  },
  'hibernate': {
    'hib-orm': () => import('./topics/hib-orm.component').then(m => m.HibOrmComponent),
    'hib-entities': () => import('./topics/hib-entities.component').then(m => m.HibEntitiesComponent),
    'hib-relations': () => import('./topics/hib-relations.component').then(m => m.HibRelationsComponent),
    'hib-jpql': () => import('./topics/hib-jpql.component').then(m => m.HibJpqlComponent),
    'hib-criteria': () => import('./topics/hib-criteria.component').then(m => m.HibCriteriaComponent),
    'hib-caching': () => import('./topics/hib-caching.component').then(m => m.HibCachingComponent),
    'hib-transactions': () => import('./topics/hib-transactions.component').then(m => m.HibTransactionsComponent),
    'hib-performance': () => import('./topics/hib-performance.component').then(m => m.HibPerformanceComponent),
    'hib-inheritance': () => import('./topics/hib-inheritance.component').then(m => m.HibInheritanceComponent),
    'hib-auditing': () => import('./topics/hib-auditing.component').then(m => m.HibAuditingComponent),
  },
  'microservices': {
    'ms-intro': () => import('./topics/ms-intro.component').then(m => m.MsIntroComponent),
    'ms-discovery': () => import('./topics/ms-discovery.component').then(m => m.MsDiscoveryComponent),
    'ms-gateway': () => import('./topics/ms-gateway.component').then(m => m.MsGatewayComponent),
    'ms-config': () => import('./topics/ms-config.component').then(m => m.MsConfigComponent),
    'ms-circuit': () => import('./topics/ms-circuit.component').then(m => m.MsCircuitComponent),
    'ms-loadbalance': () => import('./topics/ms-loadbalance.component').then(m => m.MsLoadbalanceComponent),
    'ms-communication': () => import('./topics/ms-communication.component').then(m => m.MsCommunicationComponent),
    'ms-events': () => import('./topics/ms-events.component').then(m => m.MsEventsComponent),
    'ms-saga': () => import('./topics/ms-saga.component').then(m => m.MsSagaComponent),
    'ms-cqrs': () => import('./topics/ms-cqrs.component').then(m => m.MsCqrsComponent),
    'ms-tracing': () => import('./topics/ms-tracing.component').then(m => m.MsTracingComponent),
    'ms-docker': () => import('./topics/ms-docker.component').then(m => m.MsDockerComponent),
    'ms-k8s': () => import('./topics/ms-k8s.component').then(m => m.MsK8sComponent),
    'ms-security': () => import('./topics/ms-security.component').then(m => m.MsSecurityComponent),
  },
  'multithreading': {
    'mt-threads': () => import('./topics/mt-threads.component').then(m => m.MtThreadsComponent),
    'mt-sync': () => import('./topics/mt-sync.component').then(m => m.MtSyncComponent),
    'mt-executors': () => import('./topics/mt-executors.component').then(m => m.MtExecutorsComponent),
    'mt-future': () => import('./topics/mt-future.component').then(m => m.MtFutureComponent),
    'mt-collections': () => import('./topics/mt-collections.component').then(m => m.MtCollectionsComponent),
    'mt-locks': () => import('./topics/mt-locks.component').then(m => m.MtLocksComponent),
    'mt-atomic': () => import('./topics/mt-atomic.component').then(m => m.MtAtomicComponent),
    'mt-virtual': () => import('./topics/mt-virtual.component').then(m => m.MtVirtualComponent),
  },
  'design-patterns': {
    'dp-singleton': () => import('./topics/dp-singleton.component').then(m => m.DpSingletonComponent),
    'dp-factory': () => import('./topics/dp-factory.component').then(m => m.DpFactoryComponent),
    'dp-builder': () => import('./topics/dp-builder.component').then(m => m.DpBuilderComponent),
    'dp-observer': () => import('./topics/dp-observer.component').then(m => m.DpObserverComponent),
    'dp-strategy': () => import('./topics/dp-strategy.component').then(m => m.DpStrategyComponent),
    'dp-decorator': () => import('./topics/dp-decorator.component').then(m => m.DpDecoratorComponent),
    'dp-adapter': () => import('./topics/dp-adapter.component').then(m => m.DpAdapterComponent),
    'dp-proxy': () => import('./topics/dp-proxy.component').then(m => m.DpProxyComponent),
    'dp-template': () => import('./topics/dp-template.component').then(m => m.DpTemplateComponent),
    'dp-command': () => import('./topics/dp-command.component').then(m => m.DpCommandComponent),
    'dp-chain': () => import('./topics/dp-chain.component').then(m => m.DpChainComponent),
    'dp-state': () => import('./topics/dp-state.component').then(m => m.DpStateComponent),
  }
};

@Component({
  selector: 'app-topic-router',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, IonContent, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonIcon],
  host: { 'class': 'ion-page' },
  template: `
    <ion-header translucent="true" class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button [defaultHref]="'/tutorials/' + courseSlug()" text="" color="light" />
        </ion-buttons>
        <ion-title class="brand-title">JavaIQ</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content [scrollY]="true" [scrollEvents]="true" style="height: 100%;">
      @if (loading()) {
        <div class="loading">
          <div class="spinner"></div>
          <span>Preparing your tutorial...</span>
        </div>
      }
      
      <div class="tutorial-scroll-container">
        <div #outlet></div>
      </div>

      @if (notFound()) {
        <div class="not-found">
          <div class="not-found-icon">🚧</div>
          <h2>Coming Soon</h2>
          <p>We're currently crafting this tutorial chapter for you. Stay tuned!</p>
          <a [routerLink]="['/tutorials', courseSlug()]" class="back-link">
            <ion-icon name="arrow-back-outline"></ion-icon>
            Back to Course
          </a>
        </div>
      }
      
      <div style="height: 120px; display: block;"></div>
    </ion-content>
  `,
  styles: `
    .tutorial-scroll-container {
      display: block;
      width: 100%;
      height: auto;
      padding-bottom: 40px;
    }

    /* Loading State */
    .loading {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 70vh;
      gap: 20px;
      color: #52665A;
      font-size: 0.9rem;
      font-weight: 600;
    }
    .spinner {
      width: 40px;
      height: 40px;
      border: 4px solid #D6DDD2;
      border-top-color: #1B4332;
      border-radius: 50%;
      animation: spin 0.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }

    /* Not Found / Coming Soon */
    .not-found {
      text-align: center;
      padding: 100px 32px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .not-found-icon { font-size: 3rem; margin-bottom: 24px; }
    .not-found h2 { font-size: 1.6rem; font-weight: 800; color: #1B1B1B; margin: 0 0 12px; }
    .not-found p { font-size: 0.9rem; color: #52665A; line-height: 1.6; margin: 0 0 32px; max-width: 280px; }
    
    .back-link {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 0.85rem;
      color: #1B4332;
      text-decoration: none;
      font-weight: 700;
      padding: 12px 24px;
      background: #D8F3DC;
      border-radius: 14px;
      transition: transform 0.2s;
    }
    .back-link:active { transform: scale(0.96); }
    .back-link ion-icon { font-size: 1.1rem; }
  `
})
export class TopicRouterComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private vcr = inject(ViewContainerRef);

  courseSlug = signal('');
  loading = signal(true);
  notFound = signal(false);

  @ViewChild('outlet', { read: ViewContainerRef, static: true })
  outlet!: ViewContainerRef;

  ngOnInit() {
    this.route.paramMap.subscribe(async params => {
      const slug = params.get('slug') ?? '';
      const topic = params.get('topic') ?? '';
      this.courseSlug.set(slug);

      const courseTopics = TOPIC_MAP[slug];
      const loader = courseTopics?.[topic];

      if (!loader) {
        this.loading.set(false);
        this.notFound.set(true);
        return;
      }

      try {
        const component = await loader();
        this.outlet.clear();
        this.outlet.createComponent(component as Type<unknown>);
        this.loading.set(false);
      } catch {
        this.loading.set(false);
        this.notFound.set(true);
      }
    });
  }
}
