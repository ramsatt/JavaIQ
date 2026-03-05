import {
  AdGateService
} from "./chunk-JEJRJ2G2.js";
import {
  DataService
} from "./chunk-CTHSCSLP.js";
import "./chunk-QFFHBMTJ.js";
import "./chunk-4DYJ5SOT.js";
import "./chunk-ZI6SYS5B.js";
import "./chunk-YU6DDDO5.js";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar
} from "./chunk-PWZS7QID.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-CSRIGHDB.js";
import "./chunk-CSKJ3OEL.js";
import "./chunk-T5LCTCQ6.js";
import "./chunk-3W5KDKG7.js";
import "./chunk-QYTOD3XC.js";
import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  ViewContainerRef,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-L6VISU4K.js";
import "./chunk-PUOSPVYE.js";
import "./chunk-YDDVKQH4.js";
import "./chunk-URDQGTEH.js";
import "./chunk-3KNZXPVP.js";
import "./chunk-DZBRP4UD.js";
import "./chunk-7GPIVXJN.js";
import "./chunk-CEAAMTO4.js";
import "./chunk-256GWCFY.js";
import "./chunk-5EU4VLVR.js";
import "./chunk-GZ5BDCOT.js";
import "./chunk-HUY7ESWV.js";
import "./chunk-GXFEW35R.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topic-router.component.ts
var _c0 = ["outlet"];
var _c1 = (a0) => ["/tutorials", a0];
var _c2 = (a0, a1) => ["/tutorials", a0, a1];
function TopicRouterComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "div", 15);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Preparing your tutorial...");
    \u0275\u0275elementEnd()();
  }
}
function TopicRouterComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 16);
    \u0275\u0275text(2, "\u{1F6A7}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Coming Soon");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "We're currently crafting this tutorial chapter for you. Stay tuned!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 17);
    \u0275\u0275element(8, "i", 18);
    \u0275\u0275text(9, " Back to Course ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c1, ctx_r0.courseSlug()));
  }
}
function TopicRouterComponent_Conditional_17_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 22);
    \u0275\u0275element(1, "i", 27);
    \u0275\u0275elementStart(2, "span", 28);
    \u0275\u0275text(3, "Previous");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction2(1, _c2, ctx_r0.courseSlug(), ctx_r0.prevTopicSlug()));
  }
}
function TopicRouterComponent_Conditional_17_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 23);
    \u0275\u0275element(1, "i", 29);
    \u0275\u0275elementStart(2, "span", 28);
    \u0275\u0275text(3, "Syllabus");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c1, ctx_r0.courseSlug()));
  }
}
function TopicRouterComponent_Conditional_17_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275element(1, "i", 30);
    \u0275\u0275text(2, " Completed! ");
    \u0275\u0275elementEnd();
  }
}
function TopicRouterComponent_Conditional_17_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function TopicRouterComponent_Conditional_17_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.markComplete());
    });
    \u0275\u0275element(1, "i", 32);
    \u0275\u0275text(2, " Mark Done ");
    \u0275\u0275elementEnd();
  }
}
function TopicRouterComponent_Conditional_17_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 26)(1, "span", 28);
    \u0275\u0275text(2, "Next");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "i", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction2(1, _c2, ctx_r0.courseSlug(), ctx_r0.nextTopicSlug()));
  }
}
function TopicRouterComponent_Conditional_17_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 26)(1, "span", 28);
    \u0275\u0275text(2, "Done!");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "i", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c1, ctx_r0.courseSlug()));
  }
}
function TopicRouterComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 19);
    \u0275\u0275element(2, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 21);
    \u0275\u0275conditionalCreate(4, TopicRouterComponent_Conditional_17_Conditional_4_Template, 4, 4, "a", 22)(5, TopicRouterComponent_Conditional_17_Conditional_5_Template, 4, 3, "a", 23);
    \u0275\u0275conditionalCreate(6, TopicRouterComponent_Conditional_17_Conditional_6_Template, 3, 0, "button", 24)(7, TopicRouterComponent_Conditional_17_Conditional_7_Template, 3, 0, "button", 25);
    \u0275\u0275conditionalCreate(8, TopicRouterComponent_Conditional_17_Conditional_8_Template, 4, 4, "a", 26)(9, TopicRouterComponent_Conditional_17_Conditional_9_Template, 4, 3, "a", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.courseProgress(), "%");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.prevTopicSlug() ? 4 : 5);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.isCurrentComplete() ? 6 : 7);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.nextTopicSlug() ? 8 : 9);
  }
}
var TOPIC_MAP = {
  "core-java": {
    "arrays": () => import("./chunk-URWL3I4T.js").then((m) => m.ArraysComponent),
    "strings": () => import("./chunk-JTEMEH2V.js").then((m) => m.StringsComponent),
    "oop-classes": () => import("./chunk-LBLV2Y7N.js").then((m) => m.OopClassesComponent),
    "inheritance": () => import("./chunk-7SHN36JK.js").then((m) => m.InheritanceComponent),
    "polymorphism": () => import("./chunk-GVMWK4IA.js").then((m) => m.PolymorphismComponent),
    "abstraction": () => import("./chunk-PC6LSSU4.js").then((m) => m.AbstractionComponent),
    "encapsulation": () => import("./chunk-4MBPASMB.js").then((m) => m.EncapsulationComponent),
    "exceptions": () => import("./chunk-UMAAPALK.js").then((m) => m.ExceptionsComponent),
    "collections-list": () => import("./chunk-EGKJSQBB.js").then((m) => m.CollectionsListComponent),
    "collections-map": () => import("./chunk-OVTUFVIL.js").then((m) => m.CollectionsMapComponent),
    "generics": () => import("./chunk-GSHTYFFW.js").then((m) => m.GenericsComponent),
    "streams": () => import("./chunk-IPK3JZ6M.js").then((m) => m.StreamsComponent),
    "lambdas": () => import("./chunk-3TPCGCAA.js").then((m) => m.LambdasComponent),
    "records-sealed": () => import("./chunk-CV7TWVD3.js").then((m) => m.RecordsSealedComponent),
    "io-files": () => import("./chunk-IPBGIYBM.js").then((m) => m.IoFilesComponent)
  },
  "spring-framework": {
    "spring-ioc": () => import("./chunk-CPHP6ZCY.js").then((m) => m.SpringIocComponent),
    "spring-di": () => import("./chunk-XILQZYKL.js").then((m) => m.SpringDiComponent),
    "spring-beans": () => import("./chunk-EXAABT6N.js").then((m) => m.SpringBeansComponent),
    "spring-aop": () => import("./chunk-3Z55VA3M.js").then((m) => m.SpringAopComponent),
    "spring-mvc": () => import("./chunk-IHBYWDKI.js").then((m) => m.SpringMvcComponent),
    "spring-rest": () => import("./chunk-TLGW33WT.js").then((m) => m.SpringRestComponent),
    "spring-data": () => import("./chunk-TI2PS2DK.js").then((m) => m.SpringDataComponent),
    "spring-security": () => import("./chunk-JUVH4XJY.js").then((m) => m.SpringSecurityComponent),
    "spring-config": () => import("./chunk-LY6NANKI.js").then((m) => m.SpringConfigComponent),
    "spring-testing": () => import("./chunk-RGTIWXQZ.js").then((m) => m.SpringTestingComponent),
    "spring-events": () => import("./chunk-TU75UGSU.js").then((m) => m.SpringEventsComponent),
    "spring-caching": () => import("./chunk-WWIP56X2.js").then((m) => m.SpringCachingComponent)
  },
  "spring-boot": {
    "sb-auto-config": () => import("./chunk-S3DQFFFZ.js").then((m) => m.SbAutoConfigComponent),
    "sb-starters": () => import("./chunk-BTNYRVCK.js").then((m) => m.SbStartersComponent),
    "sb-properties": () => import("./chunk-NSDFWDXS.js").then((m) => m.SbPropertiesComponent),
    "sb-devtools": () => import("./chunk-3JNIDBMZ.js").then((m) => m.SbDevtoolsComponent),
    "sb-actuator": () => import("./chunk-6KOZIGK6.js").then((m) => m.SbActuatorComponent),
    "sb-logging": () => import("./chunk-L5WY4LKG.js").then((m) => m.SbLoggingComponent),
    "sb-rest-api": () => import("./chunk-MWHUVXYI.js").then((m) => m.SbRestApiComponent),
    "sb-validation": () => import("./chunk-HY2CZRK3.js").then((m) => m.SbValidationComponent),
    "sb-exception": () => import("./chunk-HUH2IOSD.js").then((m) => m.SbExceptionComponent),
    "sb-data-jpa": () => import("./chunk-CZW7KCS6.js").then((m) => m.SbDataJpaComponent),
    "sb-security": () => import("./chunk-4I2JVUWW.js").then((m) => m.SbSecurityComponent),
    "sb-testing": () => import("./chunk-E7SI3FW7.js").then((m) => m.SbTestingComponent),
    "sb-profiles": () => import("./chunk-JOQPDYM2.js").then((m) => m.SbProfilesComponent),
    "sb-docker": () => import("./chunk-WIC22FDJ.js").then((m) => m.SbDockerComponent),
    "sb-caching": () => import("./chunk-E6YDSRGO.js").then((m) => m.SbCachingComponent),
    "sb-scheduling": () => import("./chunk-GPDOTIUA.js").then((m) => m.SbSchedulingComponent),
    "sb-events": () => import("./chunk-Y65EYBVG.js").then((m) => m.SbEventsComponent),
    "sb-deploy": () => import("./chunk-EJMIUP7I.js").then((m) => m.SbDeployComponent)
  },
  "hibernate": {
    "hib-orm": () => import("./chunk-B5SZ5QNQ.js").then((m) => m.HibOrmComponent),
    "hib-entities": () => import("./chunk-746MWJSA.js").then((m) => m.HibEntitiesComponent),
    "hib-relations": () => import("./chunk-555OTOZU.js").then((m) => m.HibRelationsComponent),
    "hib-jpql": () => import("./chunk-2RYV5QDD.js").then((m) => m.HibJpqlComponent),
    "hib-criteria": () => import("./chunk-YK4JHIA2.js").then((m) => m.HibCriteriaComponent),
    "hib-caching": () => import("./chunk-ICCLM6TP.js").then((m) => m.HibCachingComponent),
    "hib-transactions": () => import("./chunk-GIOXD7MR.js").then((m) => m.HibTransactionsComponent),
    "hib-performance": () => import("./chunk-AQKTIVMI.js").then((m) => m.HibPerformanceComponent),
    "hib-inheritance": () => import("./chunk-GW4JRVRL.js").then((m) => m.HibInheritanceComponent),
    "hib-auditing": () => import("./chunk-MZ2XAHDR.js").then((m) => m.HibAuditingComponent)
  },
  "microservices": {
    "ms-intro": () => import("./chunk-7NFJRGR2.js").then((m) => m.MsIntroComponent),
    "ms-discovery": () => import("./chunk-4H3K4TBN.js").then((m) => m.MsDiscoveryComponent),
    "ms-gateway": () => import("./chunk-IBMRKRKQ.js").then((m) => m.MsGatewayComponent),
    "ms-config": () => import("./chunk-V7ZGQZMR.js").then((m) => m.MsConfigComponent),
    "ms-circuit": () => import("./chunk-JIQJTYUT.js").then((m) => m.MsCircuitComponent),
    "ms-loadbalance": () => import("./chunk-E5MXNTSV.js").then((m) => m.MsLoadbalanceComponent),
    "ms-communication": () => import("./chunk-DFUXFCK4.js").then((m) => m.MsCommunicationComponent),
    "ms-events": () => import("./chunk-U7RYR4SE.js").then((m) => m.MsEventsComponent),
    "ms-saga": () => import("./chunk-NC4VXICI.js").then((m) => m.MsSagaComponent),
    "ms-cqrs": () => import("./chunk-34RA7U45.js").then((m) => m.MsCqrsComponent),
    "ms-tracing": () => import("./chunk-VIMN4SGR.js").then((m) => m.MsTracingComponent),
    "ms-docker": () => import("./chunk-VKRQDOWO.js").then((m) => m.MsDockerComponent),
    "ms-k8s": () => import("./chunk-MU7PVG44.js").then((m) => m.MsK8sComponent),
    "ms-security": () => import("./chunk-EO5JCLDT.js").then((m) => m.MsSecurityComponent)
  },
  "multithreading": {
    "mt-threads": () => import("./chunk-OVMYOXTI.js").then((m) => m.MtThreadsComponent),
    "mt-sync": () => import("./chunk-LP5MJOO7.js").then((m) => m.MtSyncComponent),
    "mt-executors": () => import("./chunk-ESUJBTDP.js").then((m) => m.MtExecutorsComponent),
    "mt-future": () => import("./chunk-ABOBUF2M.js").then((m) => m.MtFutureComponent),
    "mt-collections": () => import("./chunk-TQPNBQUT.js").then((m) => m.MtCollectionsComponent),
    "mt-locks": () => import("./chunk-MFNO4VWW.js").then((m) => m.MtLocksComponent),
    "mt-atomic": () => import("./chunk-Z332UTV3.js").then((m) => m.MtAtomicComponent),
    "mt-virtual": () => import("./chunk-GQ7QORM6.js").then((m) => m.MtVirtualComponent)
  },
  "design-patterns": {
    "dp-singleton": () => import("./chunk-FKTQOZRY.js").then((m) => m.DpSingletonComponent),
    "dp-factory": () => import("./chunk-JTFTD66B.js").then((m) => m.DpFactoryComponent),
    "dp-builder": () => import("./chunk-VOVDKNNV.js").then((m) => m.DpBuilderComponent),
    "dp-observer": () => import("./chunk-DBR5OVVK.js").then((m) => m.DpObserverComponent),
    "dp-strategy": () => import("./chunk-KXZN737Q.js").then((m) => m.DpStrategyComponent),
    "dp-decorator": () => import("./chunk-BBJNZSH3.js").then((m) => m.DpDecoratorComponent),
    "dp-adapter": () => import("./chunk-AO5QIWOR.js").then((m) => m.DpAdapterComponent),
    "dp-proxy": () => import("./chunk-DIGBIPQ6.js").then((m) => m.DpProxyComponent),
    "dp-template": () => import("./chunk-7CHUKZMU.js").then((m) => m.DpTemplateComponent),
    "dp-command": () => import("./chunk-YFN3M7WE.js").then((m) => m.DpCommandComponent),
    "dp-chain": () => import("./chunk-G3I6BISK.js").then((m) => m.DpChainComponent),
    "dp-state": () => import("./chunk-JKUZERWE.js").then((m) => m.DpStateComponent)
  }
};
var TOPIC_ORDER = Object.fromEntries(Object.entries(TOPIC_MAP).map(([course, topics]) => [course, Object.keys(topics)]));
var TopicRouterComponent = class _TopicRouterComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  vcr = inject(ViewContainerRef);
  dataService = inject(DataService);
  adGate = inject(AdGateService);
  courseSlug = signal("", ...ngDevMode ? [{ debugName: "courseSlug" }] : []);
  topicSlug = signal("", ...ngDevMode ? [{ debugName: "topicSlug" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  notFound = signal(false, ...ngDevMode ? [{ debugName: "notFound" }] : []);
  outlet;
  // ── Navigation computed values ──
  topicSlugs = computed(() => TOPIC_ORDER[this.courseSlug()] ?? [], ...ngDevMode ? [{ debugName: "topicSlugs" }] : []);
  topicIndex = computed(() => this.topicSlugs().indexOf(this.topicSlug()), ...ngDevMode ? [{ debugName: "topicIndex" }] : []);
  totalTopics = computed(() => this.topicSlugs().length, ...ngDevMode ? [{ debugName: "totalTopics" }] : []);
  prevTopicSlug = computed(() => {
    const i = this.topicIndex();
    return i > 0 ? this.topicSlugs()[i - 1] : null;
  }, ...ngDevMode ? [{ debugName: "prevTopicSlug" }] : []);
  nextTopicSlug = computed(() => {
    const i = this.topicIndex();
    const slugs = this.topicSlugs();
    return i < slugs.length - 1 ? slugs[i + 1] : null;
  }, ...ngDevMode ? [{ debugName: "nextTopicSlug" }] : []);
  // ── Progress computed values ──
  isCurrentComplete = computed(() => {
    this.dataService.completedTopicIds();
    return this.dataService.isTopicComplete(`${this.courseSlug()}::${this.topicSlug()}`);
  }, ...ngDevMode ? [{ debugName: "isCurrentComplete" }] : []);
  courseProgress = computed(() => {
    this.dataService.completedTopicIds();
    return this.dataService.getCourseProgress(this.courseSlug(), this.totalTopics());
  }, ...ngDevMode ? [{ debugName: "courseProgress" }] : []);
  async markComplete() {
    const topicId = `${this.courseSlug()}::${this.topicSlug()}`;
    await this.dataService.markTopicComplete(topicId);
    await this.dataService.addPoints(2);
    await this.adGate.onContentCompleted();
    const next = this.nextTopicSlug();
    if (next) {
      setTimeout(() => {
        this.router.navigate(["/tutorials", this.courseSlug(), next]);
      }, 600);
    }
  }
  ngOnInit() {
    this.route.paramMap.subscribe(async (params) => {
      const slug = params.get("slug") ?? "";
      const topic = params.get("topic") ?? "";
      this.courseSlug.set(slug);
      this.topicSlug.set(topic);
      const courseTopics = TOPIC_MAP[slug];
      const loader = courseTopics?.[topic];
      if (!loader) {
        this.loading.set(false);
        this.notFound.set(true);
        return;
      }
      const topicId = `${slug}::${topic}`;
      if (!this.dataService.isTopicComplete(topicId) && !this.adGate.isItemUnlocked(topicId)) {
        const allowed = await this.adGate.unlockItemWithAd(topicId, "this topic");
        if (!allowed) {
          this.router.navigate(["/tutorials", slug]);
          return;
        }
      }
      this.loading.set(true);
      this.notFound.set(false);
      try {
        const component = await loader();
        this.outlet.clear();
        this.outlet.createComponent(component);
        this.loading.set(false);
      } catch {
        this.loading.set(false);
        this.notFound.set(true);
      }
    });
  }
  static \u0275fac = function TopicRouterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TopicRouterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TopicRouterComponent, selectors: [["app-topic-router"]], viewQuery: function TopicRouterComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 7, ViewContainerRef);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.outlet = _t.first);
    }
  }, hostAttrs: [1, "ion-page"], decls: 19, vars: 9, consts: [["outlet", ""], ["translucent", "true", 1, "ion-no-border"], [1, "topic-toolbar"], ["slot", "start"], ["text", "", "color", "light", 3, "defaultHref"], [1, "topic-toolbar-title"], [1, "toolbar-course"], [1, "toolbar-sep"], [1, "toolbar-topic-idx"], [2, "height", "100%", 3, "scrollY", "scrollEvents"], [1, "loading"], [1, "tutorial-scroll-container"], [1, "not-found"], [1, "nav-bar"], [2, "height", "calc(120px + var(--admob-banner-height, 0px))", "display", "block"], [1, "spinner"], [1, "not-found-icon"], [1, "back-link", 3, "routerLink"], [1, "fa-solid", "fa-arrow-left"], [1, "progress-strip"], [1, "progress-fill"], [1, "nav-row"], [1, "nav-btn", "nav-prev", 3, "routerLink"], [1, "nav-btn", "nav-prev", "disabled", 3, "routerLink"], ["disabled", "", 1, "complete-btn", "complete-btn-done"], [1, "complete-btn"], [1, "nav-btn", "nav-next", 3, "routerLink"], [1, "fa-solid", "fa-arrow-left", "nav-btn-icon"], [1, "nav-btn-label"], [1, "fa-solid", "fa-th-list", "nav-btn-icon"], [1, "fa-solid", "fa-circle-check", "complete-icon"], [1, "complete-btn", 3, "click"], [1, "fa-regular", "fa-circle-check", "complete-icon"], [1, "fa-solid", "fa-arrow-right", "nav-btn-icon"], [1, "fa-solid", "fa-flag-checkered", "nav-btn-icon"]], template: function TopicRouterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-header", 1)(1, "ion-toolbar", 2)(2, "ion-buttons", 3);
      \u0275\u0275element(3, "ion-back-button", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "ion-title", 5)(5, "span", 6);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span", 7);
      \u0275\u0275text(8, "\u203A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span", 8);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(11, "ion-content", 9);
      \u0275\u0275conditionalCreate(12, TopicRouterComponent_Conditional_12_Template, 4, 0, "div", 10);
      \u0275\u0275elementStart(13, "div", 11);
      \u0275\u0275element(14, "div", null, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(16, TopicRouterComponent_Conditional_16_Template, 10, 3, "div", 12);
      \u0275\u0275conditionalCreate(17, TopicRouterComponent_Conditional_17_Template, 10, 5, "div", 13);
      \u0275\u0275element(18, "div", 14);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("defaultHref", "/tutorials/" + ctx.courseSlug());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.courseSlug());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate2("", ctx.topicIndex() + 1, "/", ctx.totalTopics());
      \u0275\u0275advance();
      \u0275\u0275property("scrollY", true)("scrollEvents", true);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 12 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.notFound() ? 16 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading() && !ctx.notFound() ? 17 : -1);
    }
  }, dependencies: [RouterLink, IonContent, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle], styles: ["\n\n.topic-toolbar[_ngcontent-%COMP%] {\n  --background: #0b1120;\n  --color: white;\n  --border-style: none;\n}\n.topic-toolbar-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.78rem !important;\n  font-weight: 600;\n  color: #94a3b8;\n  text-transform: capitalize;\n}\n.toolbar-sep[_ngcontent-%COMP%] {\n  opacity: 0.4;\n}\n.toolbar-topic-idx[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.7rem;\n}\n.tutorial-scroll-container[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: auto;\n  padding-bottom: 40px;\n}\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 70vh;\n  gap: 20px;\n  color: #64748b;\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid rgba(255, 255, 255, 0.06);\n  border-top-color: #10b981;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.75s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.not-found[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 100px 32px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.not-found-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 24px;\n}\n.not-found[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 800;\n  color: #e2e8f0;\n  margin: 0 0 12px;\n}\n.not-found[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #64748b;\n  line-height: 1.6;\n  margin: 0 0 32px;\n  max-width: 280px;\n}\n.back-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.85rem;\n  color: #10b981;\n  text-decoration: none;\n  font-weight: 700;\n  padding: 12px 24px;\n  background: rgba(16, 185, 129, 0.12);\n  border: 1px solid rgba(16, 185, 129, 0.25);\n  border-radius: 14px;\n  transition: transform 0.2s;\n}\n.back-link[_ngcontent-%COMP%]:active {\n  transform: scale(0.96);\n}\n.nav-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: var(--admob-banner-height, 0px);\n  left: 0;\n  right: 0;\n  z-index: 100;\n  background: rgba(11, 17, 32, 0.96);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border-top: 1px solid rgba(255, 255, 255, 0.07);\n  padding-bottom: env(safe-area-inset-bottom, 0);\n}\n.progress-strip[_ngcontent-%COMP%] {\n  height: 3px;\n  background: rgba(255, 255, 255, 0.05);\n  overflow: hidden;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #10b981,\n      #34d399);\n  transition: width 0.5s ease;\n}\n.nav-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  padding: 10px 16px;\n}\n.nav-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 14px;\n  border-radius: 12px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-decoration: none;\n  color: #94a3b8;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  transition: all 0.2s ease;\n  min-width: 80px;\n  outline: none;\n}\n.nav-btn[_ngcontent-%COMP%]:hover {\n  color: #e2e8f0;\n  background: rgba(255, 255, 255, 0.08);\n}\n.nav-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.96);\n}\n.nav-btn.disabled[_ngcontent-%COMP%] {\n  opacity: 0.45;\n  pointer-events: none;\n}\n.nav-btn-icon[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n}\n.nav-prev[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n.nav-next[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.complete-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 11px 18px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.01em;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  background: rgba(16, 185, 129, 0.15);\n  color: #34d399;\n  border: 1px solid rgba(16, 185, 129, 0.3);\n  flex: 1;\n  justify-content: center;\n  max-width: 160px;\n}\n.complete-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(16, 185, 129, 0.25);\n  transform: scale(1.02);\n}\n.complete-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n}\n.complete-btn-done[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.08) !important;\n  color: #10b981 !important;\n  border-color: rgba(16, 185, 129, 0.2) !important;\n  cursor: default !important;\n}\n.complete-icon[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .topic-toolbar[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .topic-toolbar[_ngcontent-%COMP%] {\n  --background: #1B4332;\n  --color: white;\n}\n/*# sourceMappingURL=topic-router.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TopicRouterComponent, [{
    type: Component,
    args: [{ selector: "app-topic-router", changeDetection: ChangeDetectionStrategy.OnPush, imports: [RouterLink, IonContent, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle], host: { "class": "ion-page" }, template: `
    <ion-header translucent="true" class="ion-no-border">
      <ion-toolbar class="topic-toolbar">
        <ion-buttons slot="start">
          <ion-back-button [defaultHref]="'/tutorials/' + courseSlug()" text="" color="light" />
        </ion-buttons>
        <ion-title class="topic-toolbar-title">
          <span class="toolbar-course">{{ courseSlug() }}</span>
          <span class="toolbar-sep">\u203A</span>
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
          <div class="not-found-icon">\u{1F6A7}</div>
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
  `, styles: ["/* angular:styles/component:css;d6ca4685d2fd1b842c24a46346ee9d2489cdb863b553ef5c6e2fafbb4e8d6a80;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/features/tutorials/topic-router.component.ts */\n.topic-toolbar {\n  --background: #0b1120;\n  --color: white;\n  --border-style: none;\n}\n.topic-toolbar-title {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.78rem !important;\n  font-weight: 600;\n  color: #94a3b8;\n  text-transform: capitalize;\n}\n.toolbar-sep {\n  opacity: 0.4;\n}\n.toolbar-topic-idx {\n  color: #64748b;\n  font-size: 0.7rem;\n}\n.tutorial-scroll-container {\n  display: block;\n  width: 100%;\n  height: auto;\n  padding-bottom: 40px;\n}\n.loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 70vh;\n  gap: 20px;\n  color: #64748b;\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n.spinner {\n  width: 36px;\n  height: 36px;\n  border: 3px solid rgba(255, 255, 255, 0.06);\n  border-top-color: #10b981;\n  border-radius: 50%;\n  animation: spin 0.75s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.not-found {\n  text-align: center;\n  padding: 100px 32px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.not-found-icon {\n  font-size: 3rem;\n  margin-bottom: 24px;\n}\n.not-found h2 {\n  font-size: 1.6rem;\n  font-weight: 800;\n  color: #e2e8f0;\n  margin: 0 0 12px;\n}\n.not-found p {\n  font-size: 0.9rem;\n  color: #64748b;\n  line-height: 1.6;\n  margin: 0 0 32px;\n  max-width: 280px;\n}\n.back-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.85rem;\n  color: #10b981;\n  text-decoration: none;\n  font-weight: 700;\n  padding: 12px 24px;\n  background: rgba(16, 185, 129, 0.12);\n  border: 1px solid rgba(16, 185, 129, 0.25);\n  border-radius: 14px;\n  transition: transform 0.2s;\n}\n.back-link:active {\n  transform: scale(0.96);\n}\n.nav-bar {\n  position: fixed;\n  bottom: var(--admob-banner-height, 0px);\n  left: 0;\n  right: 0;\n  z-index: 100;\n  background: rgba(11, 17, 32, 0.96);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border-top: 1px solid rgba(255, 255, 255, 0.07);\n  padding-bottom: env(safe-area-inset-bottom, 0);\n}\n.progress-strip {\n  height: 3px;\n  background: rgba(255, 255, 255, 0.05);\n  overflow: hidden;\n}\n.progress-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #10b981,\n      #34d399);\n  transition: width 0.5s ease;\n}\n.nav-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  padding: 10px 16px;\n}\n.nav-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 14px;\n  border-radius: 12px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-decoration: none;\n  color: #94a3b8;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  transition: all 0.2s ease;\n  min-width: 80px;\n  outline: none;\n}\n.nav-btn:hover {\n  color: #e2e8f0;\n  background: rgba(255, 255, 255, 0.08);\n}\n.nav-btn:active {\n  transform: scale(0.96);\n}\n.nav-btn.disabled {\n  opacity: 0.45;\n  pointer-events: none;\n}\n.nav-btn-icon {\n  font-size: 0.65rem;\n}\n.nav-prev {\n  justify-content: flex-start;\n}\n.nav-next {\n  justify-content: flex-end;\n}\n.complete-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 11px 18px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.01em;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  background: rgba(16, 185, 129, 0.15);\n  color: #34d399;\n  border: 1px solid rgba(16, 185, 129, 0.3);\n  flex: 1;\n  justify-content: center;\n  max-width: 160px;\n}\n.complete-btn:hover {\n  background: rgba(16, 185, 129, 0.25);\n  transform: scale(1.02);\n}\n.complete-btn:active {\n  transform: scale(0.97);\n}\n.complete-btn-done {\n  background: rgba(16, 185, 129, 0.08) !important;\n  color: #10b981 !important;\n  border-color: rgba(16, 185, 129, 0.2) !important;\n  cursor: default !important;\n}\n.complete-icon {\n  font-size: 0.85rem;\n}\n:host-context(html:not(.dark)) .topic-toolbar {\n  --background: #1B4332;\n  --color: white;\n}\n/*# sourceMappingURL=topic-router.component.css.map */\n"] }]
  }], null, { outlet: [{
    type: ViewChild,
    args: ["outlet", { read: ViewContainerRef, static: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TopicRouterComponent, { className: "TopicRouterComponent", filePath: "src/app/features/tutorials/topic-router.component.ts", lineNumber: 394 });
})();
export {
  TopicRouterComponent
};
//# sourceMappingURL=chunk-XBRMNJAZ.js.map
