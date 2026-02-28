import {
  ActivatedRoute,
  RouterLink
} from "./chunk-Y2NGQL72.js";
import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  ViewContainerRef,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵtext,
  ɵɵviewQuery
} from "./chunk-6OY2Y3BE.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topic-router.component.ts
var _c0 = ["outlet"];
var _c1 = (a0) => ["/tutorials", a0];
function TopicRouterComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "div", 3);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading tutorial...");
    \u0275\u0275elementEnd()();
  }
}
function TopicRouterComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "h2");
    \u0275\u0275text(2, "\u{1F6A7} Coming Soon");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "This tutorial topic is being prepared.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 4);
    \u0275\u0275text(6, "\u2190 Back to Course");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c1, ctx_r0.courseSlug()));
  }
}
var TOPIC_MAP = {
  "core-java": {
    "arrays": () => import("./chunk-SUVMQHKO.js").then((m) => m.ArraysComponent),
    "strings": () => import("./chunk-JKEQREXG.js").then((m) => m.StringsComponent),
    "oop-classes": () => import("./chunk-JXMD57IV.js").then((m) => m.OopClassesComponent),
    "inheritance": () => import("./chunk-T4S5NYSG.js").then((m) => m.InheritanceComponent),
    "polymorphism": () => import("./chunk-EL7W4DI5.js").then((m) => m.PolymorphismComponent),
    "abstraction": () => import("./chunk-55XZNS3E.js").then((m) => m.AbstractionComponent),
    "encapsulation": () => import("./chunk-FO4ITJHI.js").then((m) => m.EncapsulationComponent),
    "exceptions": () => import("./chunk-PXBGFOEK.js").then((m) => m.ExceptionsComponent),
    "collections-list": () => import("./chunk-MIK7EYJ5.js").then((m) => m.CollectionsListComponent),
    "collections-map": () => import("./chunk-6FJHM7QG.js").then((m) => m.CollectionsMapComponent),
    "generics": () => import("./chunk-AQXF4BMX.js").then((m) => m.GenericsComponent),
    "streams": () => import("./chunk-SZ6V3KWS.js").then((m) => m.StreamsComponent),
    "lambdas": () => import("./chunk-QRJJRWTH.js").then((m) => m.LambdasComponent),
    "records-sealed": () => import("./chunk-G3CFLVD3.js").then((m) => m.RecordsSealedComponent),
    "io-files": () => import("./chunk-4BBWDTMJ.js").then((m) => m.IoFilesComponent)
  },
  "spring-framework": {
    "spring-ioc": () => import("./chunk-LDDNO3SK.js").then((m) => m.SpringIocComponent),
    "spring-di": () => import("./chunk-3MPUJ47L.js").then((m) => m.SpringDiComponent),
    "spring-beans": () => import("./chunk-272J5PTZ.js").then((m) => m.SpringBeansComponent),
    "spring-aop": () => import("./chunk-WXNWLTNZ.js").then((m) => m.SpringAopComponent),
    "spring-mvc": () => import("./chunk-N63KREKX.js").then((m) => m.SpringMvcComponent),
    "spring-rest": () => import("./chunk-2WHXUD5T.js").then((m) => m.SpringRestComponent),
    "spring-data": () => import("./chunk-YYWHGXHF.js").then((m) => m.SpringDataComponent),
    "spring-security": () => import("./chunk-H3MW3TXP.js").then((m) => m.SpringSecurityComponent),
    "spring-config": () => import("./chunk-EPTTESXA.js").then((m) => m.SpringConfigComponent),
    "spring-testing": () => import("./chunk-NJBBMVUY.js").then((m) => m.SpringTestingComponent),
    "spring-events": () => import("./chunk-WNPN6UUY.js").then((m) => m.SpringEventsComponent),
    "spring-caching": () => import("./chunk-F7I55PBN.js").then((m) => m.SpringCachingComponent)
  },
  "spring-boot": {
    "sb-auto-config": () => import("./chunk-UPUQI6RC.js").then((m) => m.SbAutoConfigComponent),
    "sb-starters": () => import("./chunk-QDA5JSLY.js").then((m) => m.SbStartersComponent),
    "sb-properties": () => import("./chunk-VSWIGADM.js").then((m) => m.SbPropertiesComponent),
    "sb-devtools": () => import("./chunk-QV2DLPNL.js").then((m) => m.SbDevtoolsComponent),
    "sb-actuator": () => import("./chunk-U46X3WFR.js").then((m) => m.SbActuatorComponent),
    "sb-logging": () => import("./chunk-BQE5IUEC.js").then((m) => m.SbLoggingComponent),
    "sb-rest-api": () => import("./chunk-QL3IORCA.js").then((m) => m.SbRestApiComponent),
    "sb-validation": () => import("./chunk-MVJ5NHL2.js").then((m) => m.SbValidationComponent),
    "sb-exception": () => import("./chunk-SLU3ITRA.js").then((m) => m.SbExceptionComponent),
    "sb-data-jpa": () => import("./chunk-UCFZTN7D.js").then((m) => m.SbDataJpaComponent),
    "sb-security": () => import("./chunk-GEWEXFKO.js").then((m) => m.SbSecurityComponent),
    "sb-testing": () => import("./chunk-K74PRDKX.js").then((m) => m.SbTestingComponent),
    "sb-profiles": () => import("./chunk-TYWLTPDP.js").then((m) => m.SbProfilesComponent),
    "sb-docker": () => import("./chunk-RYYTPJCR.js").then((m) => m.SbDockerComponent),
    "sb-caching": () => import("./chunk-X6JGC24A.js").then((m) => m.SbCachingComponent),
    "sb-scheduling": () => import("./chunk-5JJJVOBS.js").then((m) => m.SbSchedulingComponent),
    "sb-events": () => import("./chunk-O3KBDIQG.js").then((m) => m.SbEventsComponent),
    "sb-deploy": () => import("./chunk-RWJVAOPV.js").then((m) => m.SbDeployComponent)
  },
  "hibernate": {
    "hib-orm": () => import("./chunk-ZKZJUFSX.js").then((m) => m.HibOrmComponent),
    "hib-entities": () => import("./chunk-5PXTZB55.js").then((m) => m.HibEntitiesComponent),
    "hib-relations": () => import("./chunk-6B6WZ4SK.js").then((m) => m.HibRelationsComponent),
    "hib-jpql": () => import("./chunk-OXYSQ7F4.js").then((m) => m.HibJpqlComponent),
    "hib-criteria": () => import("./chunk-GC4ILNBA.js").then((m) => m.HibCriteriaComponent),
    "hib-caching": () => import("./chunk-WWXFWMVY.js").then((m) => m.HibCachingComponent),
    "hib-transactions": () => import("./chunk-3KHX4MRM.js").then((m) => m.HibTransactionsComponent),
    "hib-performance": () => import("./chunk-EAQE2AI6.js").then((m) => m.HibPerformanceComponent),
    "hib-inheritance": () => import("./chunk-3CAWSFNE.js").then((m) => m.HibInheritanceComponent),
    "hib-auditing": () => import("./chunk-3RMBQ2KS.js").then((m) => m.HibAuditingComponent)
  },
  "microservices": {
    "ms-intro": () => import("./chunk-2YEDSOWQ.js").then((m) => m.MsIntroComponent),
    "ms-discovery": () => import("./chunk-4PXBKQJ7.js").then((m) => m.MsDiscoveryComponent),
    "ms-gateway": () => import("./chunk-BH4ZGQDE.js").then((m) => m.MsGatewayComponent),
    "ms-config": () => import("./chunk-2AEK57K4.js").then((m) => m.MsConfigComponent),
    "ms-circuit": () => import("./chunk-QSV4HHWL.js").then((m) => m.MsCircuitComponent),
    "ms-loadbalance": () => import("./chunk-E3MCK2SU.js").then((m) => m.MsLoadbalanceComponent),
    "ms-communication": () => import("./chunk-UA2KJK6Q.js").then((m) => m.MsCommunicationComponent),
    "ms-events": () => import("./chunk-QTM3T4ZU.js").then((m) => m.MsEventsComponent),
    "ms-saga": () => import("./chunk-GFTQUT7V.js").then((m) => m.MsSagaComponent),
    "ms-cqrs": () => import("./chunk-UCK7XQQC.js").then((m) => m.MsCqrsComponent),
    "ms-tracing": () => import("./chunk-AINADYF7.js").then((m) => m.MsTracingComponent),
    "ms-docker": () => import("./chunk-HNQWTXM6.js").then((m) => m.MsDockerComponent),
    "ms-k8s": () => import("./chunk-WWBMI3VL.js").then((m) => m.MsK8sComponent),
    "ms-security": () => import("./chunk-756BMR5E.js").then((m) => m.MsSecurityComponent)
  },
  "multithreading": {
    "mt-threads": () => import("./chunk-6UPXLT2A.js").then((m) => m.MtThreadsComponent),
    "mt-sync": () => import("./chunk-ERJXWGPL.js").then((m) => m.MtSyncComponent),
    "mt-executors": () => import("./chunk-VVDSWKT4.js").then((m) => m.MtExecutorsComponent),
    "mt-future": () => import("./chunk-DJUODAQ6.js").then((m) => m.MtFutureComponent),
    "mt-collections": () => import("./chunk-2RGGYNC7.js").then((m) => m.MtCollectionsComponent),
    "mt-locks": () => import("./chunk-JNBYCHBH.js").then((m) => m.MtLocksComponent),
    "mt-atomic": () => import("./chunk-T5SJOOQM.js").then((m) => m.MtAtomicComponent),
    "mt-virtual": () => import("./chunk-5T32XJRH.js").then((m) => m.MtVirtualComponent)
  },
  "design-patterns": {
    "dp-singleton": () => import("./chunk-MXYFFZCT.js").then((m) => m.DpSingletonComponent),
    "dp-factory": () => import("./chunk-BWH4S3FG.js").then((m) => m.DpFactoryComponent),
    "dp-builder": () => import("./chunk-NC4376KY.js").then((m) => m.DpBuilderComponent),
    "dp-observer": () => import("./chunk-ZZWAN5PZ.js").then((m) => m.DpObserverComponent),
    "dp-strategy": () => import("./chunk-B3VGS2WK.js").then((m) => m.DpStrategyComponent),
    "dp-decorator": () => import("./chunk-G74QJT6U.js").then((m) => m.DpDecoratorComponent),
    "dp-adapter": () => import("./chunk-IRZ6PRXS.js").then((m) => m.DpAdapterComponent),
    "dp-proxy": () => import("./chunk-VVODBOGN.js").then((m) => m.DpProxyComponent),
    "dp-template": () => import("./chunk-DQOA5FWM.js").then((m) => m.DpTemplateComponent),
    "dp-command": () => import("./chunk-XYEYPI23.js").then((m) => m.DpCommandComponent),
    "dp-chain": () => import("./chunk-YPYITGDI.js").then((m) => m.DpChainComponent),
    "dp-state": () => import("./chunk-MG7XA7XC.js").then((m) => m.DpStateComponent)
  }
};
var TopicRouterComponent = class _TopicRouterComponent {
  route = inject(ActivatedRoute);
  vcr = inject(ViewContainerRef);
  courseSlug = signal("", ...ngDevMode ? [{ debugName: "courseSlug" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  notFound = signal(false, ...ngDevMode ? [{ debugName: "notFound" }] : []);
  outlet;
  ngOnInit() {
    this.route.paramMap.subscribe(async (params) => {
      const slug = params.get("slug") ?? "";
      const topic = params.get("topic") ?? "";
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
  }, decls: 4, vars: 2, consts: [["outlet", ""], [1, "loading"], [1, "not-found"], [1, "spinner"], [3, "routerLink"]], template: function TopicRouterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, TopicRouterComponent_Conditional_0_Template, 4, 0, "div", 1);
      \u0275\u0275conditionalCreate(1, TopicRouterComponent_Conditional_1_Template, 7, 3, "div", 2);
      \u0275\u0275element(2, "div", null, 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.loading() ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.notFound() ? 1 : -1);
    }
  }, dependencies: [RouterLink], styles: ["\n\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  gap: 16px;\n  color: #64748b;\n  font-size: 0.84rem;\n  font-weight: 500;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #e2e8f0;\n  border-top-color: #4f46e5;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.not-found[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 80px 20px;\n  color: #64748b;\n}\n.not-found[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.not-found[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  margin: 0 0 20px;\n}\n.not-found[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #4f46e5;\n  text-decoration: none;\n  font-weight: 600;\n}\n/*# sourceMappingURL=topic-router.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TopicRouterComponent, [{
    type: Component,
    args: [{ selector: "app-topic-router", changeDetection: ChangeDetectionStrategy.OnPush, imports: [RouterLink], template: `
    @if (loading()) {
      <div class="loading">
        <div class="spinner"></div>
        <span>Loading tutorial...</span>
      </div>
    }
    @if (notFound()) {
      <div class="not-found">
        <h2>\u{1F6A7} Coming Soon</h2>
        <p>This tutorial topic is being prepared.</p>
        <a [routerLink]="['/tutorials', courseSlug()]">\u2190 Back to Course</a>
      </div>
    }
    <div #outlet></div>
  `, styles: ["/* angular:styles/component:css;8bde6777dda33be6bfa74c16258d82340826c6391937e94d2053d43ffc6a366e;D:/A21/JavaIQ/src/app/features/tutorials/topic-router.component.ts */\n.loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  gap: 16px;\n  color: #64748b;\n  font-size: 0.84rem;\n  font-weight: 500;\n}\n.spinner {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #e2e8f0;\n  border-top-color: #4f46e5;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.not-found {\n  text-align: center;\n  padding: 80px 20px;\n  color: #64748b;\n}\n.not-found h2 {\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.not-found p {\n  font-size: 0.84rem;\n  margin: 0 0 20px;\n}\n.not-found a {\n  font-size: 0.78rem;\n  color: #4f46e5;\n  text-decoration: none;\n  font-weight: 600;\n}\n/*# sourceMappingURL=topic-router.component.css.map */\n"] }]
  }], null, { outlet: [{
    type: ViewChild,
    args: ["outlet", { read: ViewContainerRef, static: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TopicRouterComponent, { className: "TopicRouterComponent", filePath: "src/app/features/tutorials/topic-router.component.ts", lineNumber: 163 });
})();
export {
  TopicRouterComponent
};
//# sourceMappingURL=chunk-HHXQL4SZ.js.map
