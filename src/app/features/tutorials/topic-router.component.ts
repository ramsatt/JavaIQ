import { Component, ChangeDetectionStrategy, inject, signal, ViewContainerRef, ViewChild, Type, OnInit, computed } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle } from '@ionic/angular/standalone';
import { DataService } from '../../data.service';
import { AdGateService } from '../../ad-gate.service';

// Lazy import map for all topic components
const TOPIC_MAP: Record<string, Record<string, () => Promise<Type<unknown>>>> = {
  'core-java': {
    'data-types':        () => import('./topics/data-types.component').then(m => m.DataTypesComponent),
    'variables-casting': () => import('./topics/variables-casting.component').then(m => m.VariablesCastingComponent),
    'operators':         () => import('./topics/operators.component').then(m => m.OperatorsComponent),
    'control-flow':      () => import('./topics/control-flow.component').then(m => m.ControlFlowComponent),
    'loops':             () => import('./topics/loops.component').then(m => m.LoopsComponent),
    'methods':           () => import('./topics/methods.component').then(m => m.MethodsComponent),
    'arrays': () => import('./topics/arrays.component').then(m => m.ArraysComponent),
    'strings': () => import('./topics/strings.component').then(m => m.StringsComponent),
    'oop-classes': () => import('./topics/oop-classes.component').then(m => m.OopClassesComponent),
    'inheritance': () => import('./topics/inheritance.component').then(m => m.InheritanceComponent),
    'polymorphism': () => import('./topics/polymorphism.component').then(m => m.PolymorphismComponent),
    'abstraction': () => import('./topics/abstraction.component').then(m => m.AbstractionComponent),
    'encapsulation': () => import('./topics/encapsulation.component').then(m => m.EncapsulationComponent),
    'enums':         () => import('./topics/enums.component').then(m => m.EnumsComponent),
    'nested-classes': () => import('./topics/nested-classes.component').then(m => m.NestedClassesComponent),
    'final-static':  () => import('./topics/final-static.component').then(m => m.FinalStaticComponent),
    'object-class':  () => import('./topics/object-class.component').then(m => m.ObjectClassComponent),
    'exceptions': () => import('./topics/exceptions.component').then(m => m.ExceptionsComponent),
    'collections-list': () => import('./topics/collections-list.component').then(m => m.CollectionsListComponent),
    'collections-map': () => import('./topics/collections-map.component').then(m => m.CollectionsMapComponent),
    'generics': () => import('./topics/generics.component').then(m => m.GenericsComponent),
    'streams': () => import('./topics/streams.component').then(m => m.StreamsComponent),
    'lambdas': () => import('./topics/lambdas.component').then(m => m.LambdasComponent),
    'functional-interfaces': () => import('./topics/functional-interfaces.component').then(m => m.FunctionalInterfacesComponent),
    'method-references': () => import('./topics/method-references.component').then(m => m.MethodReferencesComponent),
    'optional': () => import('./topics/optional.component').then(m => m.OptionalComponent),
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

// Flat list of topic slugs per course for prev/next navigation
const TOPIC_ORDER: Record<string, string[]> = Object.fromEntries(
  Object.entries(TOPIC_MAP).map(([course, topics]) => [course, Object.keys(topics)])
);

@Component({
  selector: 'app-topic-router',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, IonContent, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle],
  host: { 'class': 'ion-page' },
  template: `
    <ion-header translucent="true" class="ion-no-border">
      <ion-toolbar class="topic-toolbar">
        <ion-buttons slot="start">
          <ion-back-button [defaultHref]="'/tutorials/' + courseSlug()" text="" color="light" />
        </ion-buttons>
        <ion-title class="topic-toolbar-title">
          <span class="toolbar-course">{{ courseSlug() }}</span>
          <span class="toolbar-sep">›</span>
          <span class="toolbar-topic-idx">{{ topicIndex() + 1 }}/{{ totalTopics() }}</span>
        </ion-title>
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
            <i class="fa-solid fa-arrow-left"></i>
            Back to Course
          </a>
        </div>
      }

      @if (!loading() && !notFound()) {
        <!-- Nav + Complete bar -->
        <div class="nav-bar">

          <!-- Progress strip -->
          <div class="progress-strip">
            <div class="progress-fill" [style.width.%]="courseProgress()"></div>
          </div>

          <div class="nav-row">
            <!-- Prev -->
            @if (prevTopicSlug()) {
              <a class="nav-btn nav-prev" [routerLink]="['/tutorials', courseSlug(), prevTopicSlug()]">
                <i class="fa-solid fa-arrow-left nav-btn-icon"></i>
                <span class="nav-btn-label">Previous</span>
              </a>
            } @else {
              <a class="nav-btn nav-prev disabled" [routerLink]="['/tutorials', courseSlug()]">
                <i class="fa-solid fa-th-list nav-btn-icon"></i>
                <span class="nav-btn-label">Syllabus</span>
              </a>
            }

            <!-- Mark complete -->
            @if (isCurrentComplete()) {
              <button class="complete-btn complete-btn-done" disabled>
                <i class="fa-solid fa-circle-check complete-icon"></i>
                Completed!
              </button>
            } @else {
              <button class="complete-btn" (click)="markComplete()">
                <i class="fa-regular fa-circle-check complete-icon"></i>
                Mark Done
              </button>
            }

            <!-- Next -->
            @if (nextTopicSlug()) {
              <a class="nav-btn nav-next" [routerLink]="['/tutorials', courseSlug(), nextTopicSlug()]">
                <span class="nav-btn-label">Next</span>
                <i class="fa-solid fa-arrow-right nav-btn-icon"></i>
              </a>
            } @else {
              <a class="nav-btn nav-next" [routerLink]="['/tutorials', courseSlug()]">
                <span class="nav-btn-label">Done!</span>
                <i class="fa-solid fa-flag-checkered nav-btn-icon"></i>
              </a>
            }
          </div>
        </div>
      }

      <div style="height: calc(120px + var(--admob-banner-height, 0px)); display: block;"></div>
    </ion-content>
  `,
  styles: `
    /* ── Toolbar ── */
    .topic-toolbar {
      --background: #0b1120;
      --color: white;
      --border-style: none;
    }
    .topic-toolbar-title {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 0.78rem !important;
      font-weight: 600;
      color: #94a3b8;
      text-transform: capitalize;
    }
    .toolbar-sep { opacity: 0.4; }
    .toolbar-topic-idx { color: #64748b; font-size: 0.7rem; }

    /* ── Scroll container ── */
    .tutorial-scroll-container {
      display: block;
      width: 100%;
      height: auto;
      padding-bottom: 40px;
    }

    /* ── Loading ── */
    .loading {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 70vh;
      gap: 20px;
      color: #64748b;
      font-size: 0.9rem;
      font-weight: 600;
    }
    .spinner {
      width: 36px;
      height: 36px;
      border: 3px solid rgba(255,255,255,0.06);
      border-top-color: #10b981;
      border-radius: 50%;
      animation: spin 0.75s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }

    /* ── Not Found ── */
    .not-found {
      text-align: center;
      padding: 100px 32px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .not-found-icon { font-size: 3rem; margin-bottom: 24px; }
    .not-found h2 { font-size: 1.6rem; font-weight: 800; color: #e2e8f0; margin: 0 0 12px; }
    .not-found p { font-size: 0.9rem; color: #64748b; line-height: 1.6; margin: 0 0 32px; max-width: 280px; }
    .back-link {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 0.85rem;
      color: #10b981;
      text-decoration: none;
      font-weight: 700;
      padding: 12px 24px;
      background: rgba(16,185,129,0.12);
      border: 1px solid rgba(16,185,129,0.25);
      border-radius: 14px;
      transition: transform 0.2s;
    }
    .back-link:active { transform: scale(0.96); }

    /* ── Nav Bar (fixed above banner ad + safe-area) ── */
    .nav-bar {
      position: fixed;
      /* Sit above the AdMob banner. --admob-banner-height is set by AdMobService
         when the banner renders (0px on web, actual height on device). */
      bottom: var(--admob-banner-height, 0px);
      left: 0;
      right: 0;
      z-index: 100;
      background: rgba(11, 17, 32, 0.96);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-top: 1px solid rgba(255,255,255,0.07);
      padding-bottom: env(safe-area-inset-bottom, 0);
    }

    /* Progress strip along the top of the nav bar */
    .progress-strip {
      height: 3px;
      background: rgba(255,255,255,0.05);
      overflow: hidden;
    }
    .progress-fill {
      height: 100%;
      background: linear-gradient(90deg, #10b981, #34d399);
      transition: width 0.5s ease;
    }

    /* ── Nav Row ── */
    .nav-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      padding: 10px 16px;
    }

    /* ── Nav Buttons ── */
    .nav-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 10px 14px;
      border-radius: 12px;
      font-size: 0.72rem;
      font-weight: 700;
      text-decoration: none;
      color: #94a3b8;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.07);
      transition: all 0.2s ease;
      min-width: 80px;
      outline: none;
    }
    .nav-btn:hover { color: #e2e8f0; background: rgba(255,255,255,0.08); }
    .nav-btn:active { transform: scale(0.96); }
    .nav-btn.disabled { opacity: 0.45; pointer-events: none; }
    .nav-btn-icon { font-size: 0.65rem; }
    .nav-prev { justify-content: flex-start; }
    .nav-next { justify-content: flex-end; }

    /* ── Complete Button ── */
    .complete-btn {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      padding: 11px 18px;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.01em;
      border: none;
      cursor: pointer;
      transition: all 0.2s ease;
      background: rgba(16,185,129,0.15);
      color: #34d399;
      border: 1px solid rgba(16,185,129,0.3);
      flex: 1;
      justify-content: center;
      max-width: 160px;
    }
    .complete-btn:hover {
      background: rgba(16,185,129,0.25);
      transform: scale(1.02);
    }
    .complete-btn:active { transform: scale(0.97); }
    .complete-btn-done {
      background: rgba(16,185,129,0.08) !important;
      color: #10b981 !important;
      border-color: rgba(16,185,129,0.2) !important;
      cursor: default !important;
    }
    .complete-icon { font-size: 0.85rem; }

    /* ── Light Mode Overrides ── */
    :host-context(html:not(.dark)) .topic-toolbar {
      --background: #1B4332;
      --color: white;
    }
  `
})
export class TopicRouterComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private vcr = inject(ViewContainerRef);
  private dataService = inject(DataService);
  private adGate = inject(AdGateService);

  courseSlug = signal('');
  topicSlug = signal('');
  loading = signal(true);
  notFound = signal(false);

  @ViewChild('outlet', { read: ViewContainerRef, static: true })
  outlet!: ViewContainerRef;

  // ── Navigation computed values ──
  topicSlugs = computed(() => TOPIC_ORDER[this.courseSlug()] ?? []);
  topicIndex = computed(() => this.topicSlugs().indexOf(this.topicSlug()));
  totalTopics = computed(() => this.topicSlugs().length);
  prevTopicSlug = computed(() => {
    const i = this.topicIndex();
    return i > 0 ? this.topicSlugs()[i - 1] : null;
  });
  nextTopicSlug = computed(() => {
    const i = this.topicIndex();
    const slugs = this.topicSlugs();
    return i < slugs.length - 1 ? slugs[i + 1] : null;
  });

  // ── Progress computed values ──
  isCurrentComplete = computed(() => {
    this.dataService.completedTopicIds(); // track reactively
    return this.dataService.isTopicComplete(`${this.courseSlug()}::${this.topicSlug()}`);
  });
  courseProgress = computed(() => {
    this.dataService.completedTopicIds(); // track reactively
    return this.dataService.getCourseProgress(this.courseSlug(), this.totalTopics());
  });

  async markComplete() {
    const topicId = `${this.courseSlug()}::${this.topicSlug()}`;
    await this.dataService.markTopicComplete(topicId);
    await this.dataService.addPoints(2);

    // Show interstitial after completing a topic
    await this.adGate.onContentCompleted();

    // Auto-navigate to next after a short delay
    const next = this.nextTopicSlug();
    if (next) {
      setTimeout(() => {
        this.router.navigate(['/tutorials', this.courseSlug(), next]);
      }, 600);
    }
  }

  ngOnInit() {
    this.route.paramMap.subscribe(async params => {
      const slug = params.get('slug') ?? '';
      const topic = params.get('topic') ?? '';
      this.courseSlug.set(slug);
      this.topicSlug.set(topic);

      const courseTopics = TOPIC_MAP[slug];
      const loader = courseTopics?.[topic];

      if (!loader) {
        this.loading.set(false);
        this.notFound.set(true);
        return;
      }

      // ── Ad Gate: per-topic permanent unlock ──
      const topicId = `${slug}::${topic}`;
      if (!this.dataService.isTopicComplete(topicId) && !this.adGate.isItemUnlocked(topicId)) {
        const allowed = await this.adGate.unlockItemWithAd(topicId, 'this topic');
        if (!allowed) {
          // User denied the ad, send them back to the course syllabus
          this.router.navigate(['/tutorials', slug]);
          return;
        }
      }

      this.loading.set(true);
      this.notFound.set(false);
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
