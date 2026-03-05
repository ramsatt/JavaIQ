import {
  addIcons
} from "./chunk-B2BVUSCA.js";
import {
  AchievementService
} from "./chunk-44FD6GSA.js";
import "./chunk-7TOJMDEE.js";
import "./chunk-CTHSCSLP.js";
import "./chunk-QFFHBMTJ.js";
import {
  AdMobService,
  environment
} from "./chunk-4DYJ5SOT.js";
import {
  ScreenTrackingService,
  getAnalytics,
  provideAnalytics
} from "./chunk-BJOCJFQ2.js";
import {
  ThemeService
} from "./chunk-I4GECOKO.js";
import {
  AlertService
} from "./chunk-ZI6SYS5B.js";
import "./chunk-KHYVC3NX.js";
import {
  getAuth,
  getFirestore,
  initializeApp,
  provideAuth,
  provideFirebaseApp,
  provideFirestore,
  toSignal
} from "./chunk-YU6DDDO5.js";
import {
  IonApp,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonRouterOutlet,
  IonToggle,
  MenuController,
  provideIonicAngular
} from "./chunk-PWZS7QID.js";
import {
  CommonModule,
  NavigationEnd,
  NgClass,
  NgIf,
  Router,
  RouterLink,
  RouterLinkActive,
  bootstrapApplication,
  provideRouter,
  withHashLocation
} from "./chunk-CSRIGHDB.js";
import "./chunk-CSKJ3OEL.js";
import "./chunk-T5LCTCQ6.js";
import "./chunk-3W5KDKG7.js";
import "./chunk-QYTOD3XC.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ErrorHandler,
  Injectable,
  NgZone,
  computed,
  effect,
  filter,
  inject,
  map,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
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

// node_modules/zone.js/fesm2015/zone.js
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var global = globalThis;
function __symbol__(name) {
  const symbolPrefix = global["__Zone_symbol_prefix"] || "__zone_symbol__";
  return symbolPrefix + name;
}
function initZone() {
  const performance = global["performance"];
  function mark(name) {
    performance && performance["mark"] && performance["mark"](name);
  }
  function performanceMeasure(name, label) {
    performance && performance["measure"] && performance["measure"](name, label);
  }
  mark("Zone");
  const _ZoneImpl = class _ZoneImpl2 {
    constructor(parent, zoneSpec) {
      __publicField(this, "_parent");
      __publicField(this, "_name");
      __publicField(this, "_properties");
      __publicField(this, "_zoneDelegate");
      this._parent = parent;
      this._name = zoneSpec ? zoneSpec.name || "unnamed" : "<root>";
      this._properties = zoneSpec && zoneSpec.properties || {};
      this._zoneDelegate = new _ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
    }
    static assertZonePatched() {
      if (global["Promise"] !== patches["ZoneAwarePromise"]) {
        throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)");
      }
    }
    static get root() {
      let zone = _ZoneImpl2.current;
      while (zone.parent) {
        zone = zone.parent;
      }
      return zone;
    }
    static get current() {
      return _currentZoneFrame.zone;
    }
    static get currentTask() {
      return _currentTask;
    }
    static __load_patch(name, fn, ignoreDuplicate = false) {
      if (patches.hasOwnProperty(name)) {
        const checkDuplicate = global[__symbol__("forceDuplicateZoneCheck")] === true;
        if (!ignoreDuplicate && checkDuplicate) {
          throw Error("Already loaded patch: " + name);
        }
      } else if (!global["__Zone_disable_" + name]) {
        const perfName = "Zone:" + name;
        mark(perfName);
        patches[name] = fn(global, _ZoneImpl2, _api);
        performanceMeasure(perfName, perfName);
      }
    }
    get parent() {
      return this._parent;
    }
    get name() {
      return this._name;
    }
    get(key) {
      const zone = this.getZoneWith(key);
      if (zone)
        return zone._properties[key];
    }
    getZoneWith(key) {
      let current = this;
      while (current) {
        if (current._properties.hasOwnProperty(key)) {
          return current;
        }
        current = current._parent;
      }
      return null;
    }
    fork(zoneSpec) {
      if (!zoneSpec)
        throw new Error("ZoneSpec required!");
      return this._zoneDelegate.fork(this, zoneSpec);
    }
    wrap(callback, source) {
      if (typeof callback !== "function") {
        throw new Error("Expecting function got: " + callback);
      }
      const _callback = this._zoneDelegate.intercept(this, callback, source);
      const zone = this;
      return function() {
        return zone.runGuarded(_callback, this, arguments, source);
      };
    }
    run(callback, applyThis, applyArgs, source) {
      _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
      try {
        return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
      } finally {
        _currentZoneFrame = _currentZoneFrame.parent;
      }
    }
    runGuarded(callback, applyThis = null, applyArgs, source) {
      _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
      try {
        try {
          return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
        } catch (error) {
          if (this._zoneDelegate.handleError(this, error)) {
            throw error;
          }
        }
      } finally {
        _currentZoneFrame = _currentZoneFrame.parent;
      }
    }
    runTask(task, applyThis, applyArgs) {
      if (task.zone != this) {
        throw new Error("A task can only be run in the zone of creation! (Creation: " + (task.zone || NO_ZONE).name + "; Execution: " + this.name + ")");
      }
      const zoneTask = task;
      const { type, data: { isPeriodic = false, isRefreshable = false } = {} } = task;
      if (task.state === notScheduled && (type === eventTask || type === macroTask)) {
        return;
      }
      const reEntryGuard = task.state != running;
      reEntryGuard && zoneTask._transitionTo(running, scheduled);
      const previousTask = _currentTask;
      _currentTask = zoneTask;
      _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
      try {
        if (type == macroTask && task.data && !isPeriodic && !isRefreshable) {
          task.cancelFn = void 0;
        }
        try {
          return this._zoneDelegate.invokeTask(this, zoneTask, applyThis, applyArgs);
        } catch (error) {
          if (this._zoneDelegate.handleError(this, error)) {
            throw error;
          }
        }
      } finally {
        const state = task.state;
        if (state !== notScheduled && state !== unknown) {
          if (type == eventTask || isPeriodic || isRefreshable && state === scheduling) {
            reEntryGuard && zoneTask._transitionTo(scheduled, running, scheduling);
          } else {
            const zoneDelegates = zoneTask._zoneDelegates;
            this._updateTaskCount(zoneTask, -1);
            reEntryGuard && zoneTask._transitionTo(notScheduled, running, notScheduled);
            if (isRefreshable) {
              zoneTask._zoneDelegates = zoneDelegates;
            }
          }
        }
        _currentZoneFrame = _currentZoneFrame.parent;
        _currentTask = previousTask;
      }
    }
    scheduleTask(task) {
      if (task.zone && task.zone !== this) {
        let newZone = this;
        while (newZone) {
          if (newZone === task.zone) {
            throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${task.zone.name}`);
          }
          newZone = newZone.parent;
        }
      }
      task._transitionTo(scheduling, notScheduled);
      const zoneDelegates = [];
      task._zoneDelegates = zoneDelegates;
      task._zone = this;
      try {
        task = this._zoneDelegate.scheduleTask(this, task);
      } catch (err) {
        task._transitionTo(unknown, scheduling, notScheduled);
        this._zoneDelegate.handleError(this, err);
        throw err;
      }
      if (task._zoneDelegates === zoneDelegates) {
        this._updateTaskCount(task, 1);
      }
      if (task.state == scheduling) {
        task._transitionTo(scheduled, scheduling);
      }
      return task;
    }
    scheduleMicroTask(source, callback, data, customSchedule) {
      return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, void 0));
    }
    scheduleMacroTask(source, callback, data, customSchedule, customCancel) {
      return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
    }
    scheduleEventTask(source, callback, data, customSchedule, customCancel) {
      return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
    }
    cancelTask(task) {
      if (task.zone != this)
        throw new Error("A task can only be cancelled in the zone of creation! (Creation: " + (task.zone || NO_ZONE).name + "; Execution: " + this.name + ")");
      if (task.state !== scheduled && task.state !== running) {
        return;
      }
      task._transitionTo(canceling, scheduled, running);
      try {
        this._zoneDelegate.cancelTask(this, task);
      } catch (err) {
        task._transitionTo(unknown, canceling);
        this._zoneDelegate.handleError(this, err);
        throw err;
      }
      this._updateTaskCount(task, -1);
      task._transitionTo(notScheduled, canceling);
      task.runCount = -1;
      return task;
    }
    _updateTaskCount(task, count) {
      const zoneDelegates = task._zoneDelegates;
      if (count == -1) {
        task._zoneDelegates = null;
      }
      for (let i = 0; i < zoneDelegates.length; i++) {
        zoneDelegates[i]._updateTaskCount(task.type, count);
      }
    }
  };
  __publicField(_ZoneImpl, "__symbol__", __symbol__);
  let ZoneImpl = _ZoneImpl;
  const DELEGATE_ZS = {
    name: "",
    onHasTask: (delegate, _, target, hasTaskState) => delegate.hasTask(target, hasTaskState),
    onScheduleTask: (delegate, _, target, task) => delegate.scheduleTask(target, task),
    onInvokeTask: (delegate, _, target, task, applyThis, applyArgs) => delegate.invokeTask(target, task, applyThis, applyArgs),
    onCancelTask: (delegate, _, target, task) => delegate.cancelTask(target, task)
  };
  class _ZoneDelegate {
    constructor(zone, parentDelegate, zoneSpec) {
      __publicField(this, "_zone");
      __publicField(this, "_taskCounts", {
        "microTask": 0,
        "macroTask": 0,
        "eventTask": 0
      });
      __publicField(this, "_parentDelegate");
      __publicField(this, "_forkDlgt");
      __publicField(this, "_forkZS");
      __publicField(this, "_forkCurrZone");
      __publicField(this, "_interceptDlgt");
      __publicField(this, "_interceptZS");
      __publicField(this, "_interceptCurrZone");
      __publicField(this, "_invokeDlgt");
      __publicField(this, "_invokeZS");
      __publicField(this, "_invokeCurrZone");
      __publicField(this, "_handleErrorDlgt");
      __publicField(this, "_handleErrorZS");
      __publicField(this, "_handleErrorCurrZone");
      __publicField(this, "_scheduleTaskDlgt");
      __publicField(this, "_scheduleTaskZS");
      __publicField(this, "_scheduleTaskCurrZone");
      __publicField(this, "_invokeTaskDlgt");
      __publicField(this, "_invokeTaskZS");
      __publicField(this, "_invokeTaskCurrZone");
      __publicField(this, "_cancelTaskDlgt");
      __publicField(this, "_cancelTaskZS");
      __publicField(this, "_cancelTaskCurrZone");
      __publicField(this, "_hasTaskDlgt");
      __publicField(this, "_hasTaskDlgtOwner");
      __publicField(this, "_hasTaskZS");
      __publicField(this, "_hasTaskCurrZone");
      this._zone = zone;
      this._parentDelegate = parentDelegate;
      this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
      this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
      this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this._zone : parentDelegate._forkCurrZone);
      this._interceptZS = zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
      this._interceptDlgt = zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
      this._interceptCurrZone = zoneSpec && (zoneSpec.onIntercept ? this._zone : parentDelegate._interceptCurrZone);
      this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
      this._invokeDlgt = zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
      this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this._zone : parentDelegate._invokeCurrZone);
      this._handleErrorZS = zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
      this._handleErrorDlgt = zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
      this._handleErrorCurrZone = zoneSpec && (zoneSpec.onHandleError ? this._zone : parentDelegate._handleErrorCurrZone);
      this._scheduleTaskZS = zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
      this._scheduleTaskDlgt = zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
      this._scheduleTaskCurrZone = zoneSpec && (zoneSpec.onScheduleTask ? this._zone : parentDelegate._scheduleTaskCurrZone);
      this._invokeTaskZS = zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
      this._invokeTaskDlgt = zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
      this._invokeTaskCurrZone = zoneSpec && (zoneSpec.onInvokeTask ? this._zone : parentDelegate._invokeTaskCurrZone);
      this._cancelTaskZS = zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
      this._cancelTaskDlgt = zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
      this._cancelTaskCurrZone = zoneSpec && (zoneSpec.onCancelTask ? this._zone : parentDelegate._cancelTaskCurrZone);
      this._hasTaskZS = null;
      this._hasTaskDlgt = null;
      this._hasTaskDlgtOwner = null;
      this._hasTaskCurrZone = null;
      const zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
      const parentHasTask = parentDelegate && parentDelegate._hasTaskZS;
      if (zoneSpecHasTask || parentHasTask) {
        this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
        this._hasTaskDlgt = parentDelegate;
        this._hasTaskDlgtOwner = this;
        this._hasTaskCurrZone = this._zone;
        if (!zoneSpec.onScheduleTask) {
          this._scheduleTaskZS = DELEGATE_ZS;
          this._scheduleTaskDlgt = parentDelegate;
          this._scheduleTaskCurrZone = this._zone;
        }
        if (!zoneSpec.onInvokeTask) {
          this._invokeTaskZS = DELEGATE_ZS;
          this._invokeTaskDlgt = parentDelegate;
          this._invokeTaskCurrZone = this._zone;
        }
        if (!zoneSpec.onCancelTask) {
          this._cancelTaskZS = DELEGATE_ZS;
          this._cancelTaskDlgt = parentDelegate;
          this._cancelTaskCurrZone = this._zone;
        }
      }
    }
    get zone() {
      return this._zone;
    }
    fork(targetZone, zoneSpec) {
      return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) : new ZoneImpl(targetZone, zoneSpec);
    }
    intercept(targetZone, callback, source) {
      return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) : callback;
    }
    invoke(targetZone, callback, applyThis, applyArgs, source) {
      return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) : callback.apply(applyThis, applyArgs);
    }
    handleError(targetZone, error) {
      return this._handleErrorZS ? this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) : true;
    }
    scheduleTask(targetZone, task) {
      let returnTask = task;
      if (this._scheduleTaskZS) {
        if (this._hasTaskZS) {
          returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
        }
        returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
        if (!returnTask)
          returnTask = task;
      } else {
        if (task.scheduleFn) {
          task.scheduleFn(task);
        } else if (task.type == microTask) {
          scheduleMicroTask(task);
        } else {
          throw new Error("Task is missing scheduleFn.");
        }
      }
      return returnTask;
    }
    invokeTask(targetZone, task, applyThis, applyArgs) {
      return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) : task.callback.apply(applyThis, applyArgs);
    }
    cancelTask(targetZone, task) {
      let value;
      if (this._cancelTaskZS) {
        value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
      } else {
        if (!task.cancelFn) {
          throw Error("Task is not cancelable");
        }
        value = task.cancelFn(task);
      }
      return value;
    }
    hasTask(targetZone, isEmpty) {
      try {
        this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
      } catch (err) {
        this.handleError(targetZone, err);
      }
    }
    _updateTaskCount(type, count) {
      const counts = this._taskCounts;
      const prev = counts[type];
      const next = counts[type] = prev + count;
      if (next < 0) {
        throw new Error("More tasks executed then were scheduled.");
      }
      if (prev == 0 || next == 0) {
        const isEmpty = {
          microTask: counts["microTask"] > 0,
          macroTask: counts["macroTask"] > 0,
          eventTask: counts["eventTask"] > 0,
          change: type
        };
        this.hasTask(this._zone, isEmpty);
      }
    }
  }
  class ZoneTask {
    constructor(type, source, callback, options, scheduleFn, cancelFn) {
      __publicField(this, "type");
      __publicField(this, "source");
      __publicField(this, "invoke");
      __publicField(this, "callback");
      __publicField(this, "data");
      __publicField(this, "scheduleFn");
      __publicField(this, "cancelFn");
      __publicField(this, "_zone", null);
      __publicField(this, "runCount", 0);
      __publicField(this, "_zoneDelegates", null);
      __publicField(this, "_state", "notScheduled");
      this.type = type;
      this.source = source;
      this.data = options;
      this.scheduleFn = scheduleFn;
      this.cancelFn = cancelFn;
      if (!callback) {
        throw new Error("callback is not defined");
      }
      this.callback = callback;
      const self2 = this;
      if (type === eventTask && options && options.useG) {
        this.invoke = ZoneTask.invokeTask;
      } else {
        this.invoke = function() {
          return ZoneTask.invokeTask.call(global, self2, this, arguments);
        };
      }
    }
    static invokeTask(task, target, args) {
      if (!task) {
        task = this;
      }
      _numberOfNestedTaskFrames++;
      try {
        task.runCount++;
        return task.zone.runTask(task, target, args);
      } finally {
        if (_numberOfNestedTaskFrames == 1) {
          drainMicroTaskQueue();
        }
        _numberOfNestedTaskFrames--;
      }
    }
    get zone() {
      return this._zone;
    }
    get state() {
      return this._state;
    }
    cancelScheduleRequest() {
      this._transitionTo(notScheduled, scheduling);
    }
    _transitionTo(toState, fromState1, fromState2) {
      if (this._state === fromState1 || this._state === fromState2) {
        this._state = toState;
        if (toState == notScheduled) {
          this._zoneDelegates = null;
        }
      } else {
        throw new Error(`${this.type} '${this.source}': can not transition to '${toState}', expecting state '${fromState1}'${fromState2 ? " or '" + fromState2 + "'" : ""}, was '${this._state}'.`);
      }
    }
    toString() {
      if (this.data && typeof this.data.handleId !== "undefined") {
        return this.data.handleId.toString();
      } else {
        return Object.prototype.toString.call(this);
      }
    }
    // add toJSON method to prevent cyclic error when
    // call JSON.stringify(zoneTask)
    toJSON() {
      return {
        type: this.type,
        state: this.state,
        source: this.source,
        zone: this.zone.name,
        runCount: this.runCount
      };
    }
  }
  const symbolSetTimeout = __symbol__("setTimeout");
  const symbolPromise = __symbol__("Promise");
  const symbolThen = __symbol__("then");
  let _microTaskQueue = [];
  let _isDrainingMicrotaskQueue = false;
  let nativeMicroTaskQueuePromise;
  function nativeScheduleMicroTask(func) {
    if (!nativeMicroTaskQueuePromise) {
      if (global[symbolPromise]) {
        nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
      }
    }
    if (nativeMicroTaskQueuePromise) {
      let nativeThen = nativeMicroTaskQueuePromise[symbolThen];
      if (!nativeThen) {
        nativeThen = nativeMicroTaskQueuePromise["then"];
      }
      nativeThen.call(nativeMicroTaskQueuePromise, func);
    } else {
      global[symbolSetTimeout](func, 0);
    }
  }
  function scheduleMicroTask(task) {
    if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
      nativeScheduleMicroTask(drainMicroTaskQueue);
    }
    task && _microTaskQueue.push(task);
  }
  function drainMicroTaskQueue() {
    if (!_isDrainingMicrotaskQueue) {
      _isDrainingMicrotaskQueue = true;
      while (_microTaskQueue.length) {
        const queue = _microTaskQueue;
        _microTaskQueue = [];
        for (let i = 0; i < queue.length; i++) {
          const task = queue[i];
          try {
            task.zone.runTask(task, null, null);
          } catch (error) {
            _api.onUnhandledError(error);
          }
        }
      }
      _api.microtaskDrainDone();
      _isDrainingMicrotaskQueue = false;
    }
  }
  const NO_ZONE = { name: "NO ZONE" };
  const notScheduled = "notScheduled", scheduling = "scheduling", scheduled = "scheduled", running = "running", canceling = "canceling", unknown = "unknown";
  const microTask = "microTask", macroTask = "macroTask", eventTask = "eventTask";
  const patches = {};
  const _api = {
    symbol: __symbol__,
    currentZoneFrame: () => _currentZoneFrame,
    onUnhandledError: noop,
    microtaskDrainDone: noop,
    scheduleMicroTask,
    showUncaughtError: () => !ZoneImpl[__symbol__("ignoreConsoleErrorUncaughtError")],
    patchEventTarget: () => [],
    patchOnProperties: noop,
    patchMethod: () => noop,
    bindArguments: () => [],
    patchThen: () => noop,
    patchMacroTask: () => noop,
    patchEventPrototype: () => noop,
    getGlobalObjects: () => void 0,
    ObjectDefineProperty: () => noop,
    ObjectGetOwnPropertyDescriptor: () => void 0,
    ObjectCreate: () => void 0,
    ArraySlice: () => [],
    patchClass: () => noop,
    wrapWithCurrentZone: () => noop,
    filterProperties: () => [],
    attachOriginToPatched: () => noop,
    _redefineProperty: () => noop,
    patchCallbacks: () => noop,
    nativeScheduleMicroTask
  };
  let _currentZoneFrame = { parent: null, zone: new ZoneImpl(null, null) };
  let _currentTask = null;
  let _numberOfNestedTaskFrames = 0;
  function noop() {
  }
  performanceMeasure("Zone", "Zone");
  return ZoneImpl;
}
function loadZone() {
  var _a;
  const global2 = globalThis;
  const checkDuplicate = global2[__symbol__("forceDuplicateZoneCheck")] === true;
  if (global2["Zone"] && (checkDuplicate || typeof global2["Zone"].__symbol__ !== "function")) {
    throw new Error("Zone already loaded.");
  }
  (_a = global2["Zone"]) != null ? _a : global2["Zone"] = initZone();
  return global2["Zone"];
}
var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ObjectDefineProperty = Object.defineProperty;
var ObjectGetPrototypeOf = Object.getPrototypeOf;
var ObjectCreate = Object.create;
var ArraySlice = Array.prototype.slice;
var ADD_EVENT_LISTENER_STR = "addEventListener";
var REMOVE_EVENT_LISTENER_STR = "removeEventListener";
var ZONE_SYMBOL_ADD_EVENT_LISTENER = __symbol__(ADD_EVENT_LISTENER_STR);
var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = __symbol__(REMOVE_EVENT_LISTENER_STR);
var TRUE_STR = "true";
var FALSE_STR = "false";
var ZONE_SYMBOL_PREFIX = __symbol__("");
function wrapWithCurrentZone(callback, source) {
  return Zone.current.wrap(callback, source);
}
function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
  return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
}
var zoneSymbol = __symbol__;
var isWindowExists = typeof window !== "undefined";
var internalWindow = isWindowExists ? window : void 0;
var _global = isWindowExists && internalWindow || globalThis;
var REMOVE_ATTRIBUTE = "removeAttribute";
function bindArguments(args, source) {
  for (let i = args.length - 1; i >= 0; i--) {
    if (typeof args[i] === "function") {
      args[i] = wrapWithCurrentZone(args[i], source + "_" + i);
    }
  }
  return args;
}
function patchPrototype(prototype, fnNames) {
  const source = prototype.constructor["name"];
  for (let i = 0; i < fnNames.length; i++) {
    const name = fnNames[i];
    const delegate = prototype[name];
    if (delegate) {
      const prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name);
      if (!isPropertyWritable(prototypeDesc)) {
        continue;
      }
      prototype[name] = ((delegate2) => {
        const patched = function() {
          return delegate2.apply(this, bindArguments(arguments, source + "." + name));
        };
        attachOriginToPatched(patched, delegate2);
        return patched;
      })(delegate);
    }
  }
}
function isPropertyWritable(propertyDesc) {
  if (!propertyDesc) {
    return true;
  }
  if (propertyDesc.writable === false) {
    return false;
  }
  return !(typeof propertyDesc.get === "function" && typeof propertyDesc.set === "undefined");
}
var isWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
var isNode = !("nw" in _global) && typeof _global.process !== "undefined" && _global.process.toString() === "[object process]";
var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow["HTMLElement"]);
var isMix = typeof _global.process !== "undefined" && _global.process.toString() === "[object process]" && !isWebWorker && !!(isWindowExists && internalWindow["HTMLElement"]);
var zoneSymbolEventNames = {};
var enableBeforeunloadSymbol = zoneSymbol("enable_beforeunload");
var wrapFn = function(event) {
  event = event || _global.event;
  if (!event) {
    return;
  }
  let eventNameSymbol = zoneSymbolEventNames[event.type];
  if (!eventNameSymbol) {
    eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol("ON_PROPERTY" + event.type);
  }
  const target = this || event.target || _global;
  const listener = target[eventNameSymbol];
  let result;
  if (isBrowser && target === internalWindow && event.type === "error") {
    const errorEvent = event;
    result = listener && listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);
    if (result === true) {
      event.preventDefault();
    }
  } else {
    result = listener && listener.apply(this, arguments);
    if (
      // https://github.com/angular/angular/issues/47579
      // https://www.w3.org/TR/2011/WD-html5-20110525/history.html#beforeunloadevent
      // This is the only specific case we should check for. The spec defines that the
      // `returnValue` attribute represents the message to show the user. When the event
      // is created, this attribute must be set to the empty string.
      event.type === "beforeunload" && // To prevent any breaking changes resulting from this change, given that
      // it was already causing a significant number of failures in G3, we have hidden
      // that behavior behind a global configuration flag. Consumers can enable this
      // flag explicitly if they want the `beforeunload` event to be handled as defined
      // in the specification.
      _global[enableBeforeunloadSymbol] && // The IDL event definition is `attribute DOMString returnValue`, so we check whether
      // `typeof result` is a string.
      typeof result === "string"
    ) {
      event.returnValue = result;
    } else if (result != void 0 && !result) {
      event.preventDefault();
    }
  }
  return result;
};
function patchProperty(obj, prop, prototype) {
  let desc = ObjectGetOwnPropertyDescriptor(obj, prop);
  if (!desc && prototype) {
    const prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);
    if (prototypeDesc) {
      desc = { enumerable: true, configurable: true };
    }
  }
  if (!desc || !desc.configurable) {
    return;
  }
  const onPropPatchedSymbol = zoneSymbol("on" + prop + "patched");
  if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
    return;
  }
  delete desc.writable;
  delete desc.value;
  const originalDescGet = desc.get;
  const originalDescSet = desc.set;
  const eventName = prop.slice(2);
  let eventNameSymbol = zoneSymbolEventNames[eventName];
  if (!eventNameSymbol) {
    eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol("ON_PROPERTY" + eventName);
  }
  desc.set = function(newValue) {
    let target = this;
    if (!target && obj === _global) {
      target = _global;
    }
    if (!target) {
      return;
    }
    const previousValue = target[eventNameSymbol];
    if (typeof previousValue === "function") {
      target.removeEventListener(eventName, wrapFn);
    }
    originalDescSet == null ? void 0 : originalDescSet.call(target, null);
    target[eventNameSymbol] = newValue;
    if (typeof newValue === "function") {
      target.addEventListener(eventName, wrapFn, false);
    }
  };
  desc.get = function() {
    let target = this;
    if (!target && obj === _global) {
      target = _global;
    }
    if (!target) {
      return null;
    }
    const listener = target[eventNameSymbol];
    if (listener) {
      return listener;
    } else if (originalDescGet) {
      let value = originalDescGet.call(this);
      if (value) {
        desc.set.call(this, value);
        if (typeof target[REMOVE_ATTRIBUTE] === "function") {
          target.removeAttribute(prop);
        }
        return value;
      }
    }
    return null;
  };
  ObjectDefineProperty(obj, prop, desc);
  obj[onPropPatchedSymbol] = true;
}
function patchOnProperties(obj, properties, prototype) {
  if (properties) {
    for (let i = 0; i < properties.length; i++) {
      patchProperty(obj, "on" + properties[i], prototype);
    }
  } else {
    const onProperties = [];
    for (const prop in obj) {
      if (prop.slice(0, 2) == "on") {
        onProperties.push(prop);
      }
    }
    for (let j = 0; j < onProperties.length; j++) {
      patchProperty(obj, onProperties[j], prototype);
    }
  }
}
var originalInstanceKey = zoneSymbol("originalInstance");
function patchClass(className) {
  const OriginalClass = _global[className];
  if (!OriginalClass)
    return;
  _global[zoneSymbol(className)] = OriginalClass;
  _global[className] = function() {
    const a = bindArguments(arguments, className);
    switch (a.length) {
      case 0:
        this[originalInstanceKey] = new OriginalClass();
        break;
      case 1:
        this[originalInstanceKey] = new OriginalClass(a[0]);
        break;
      case 2:
        this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
        break;
      case 3:
        this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
        break;
      case 4:
        this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
        break;
      default:
        throw new Error("Arg list too long.");
    }
  };
  attachOriginToPatched(_global[className], OriginalClass);
  const instance = new OriginalClass(function() {
  });
  let prop;
  for (prop in instance) {
    if (className === "XMLHttpRequest" && prop === "responseBlob")
      continue;
    (function(prop2) {
      if (typeof instance[prop2] === "function") {
        _global[className].prototype[prop2] = function() {
          return this[originalInstanceKey][prop2].apply(this[originalInstanceKey], arguments);
        };
      } else {
        ObjectDefineProperty(_global[className].prototype, prop2, {
          set: function(fn) {
            if (typeof fn === "function") {
              this[originalInstanceKey][prop2] = wrapWithCurrentZone(fn, className + "." + prop2);
              attachOriginToPatched(this[originalInstanceKey][prop2], fn);
            } else {
              this[originalInstanceKey][prop2] = fn;
            }
          },
          get: function() {
            return this[originalInstanceKey][prop2];
          }
        });
      }
    })(prop);
  }
  for (prop in OriginalClass) {
    if (prop !== "prototype" && OriginalClass.hasOwnProperty(prop)) {
      _global[className][prop] = OriginalClass[prop];
    }
  }
}
function copySymbolProperties(src, dest) {
  if (typeof Object.getOwnPropertySymbols !== "function") {
    return;
  }
  const symbols = Object.getOwnPropertySymbols(src);
  symbols.forEach((symbol) => {
    const desc = Object.getOwnPropertyDescriptor(src, symbol);
    Object.defineProperty(dest, symbol, {
      get: function() {
        return src[symbol];
      },
      set: function(value) {
        if (desc && (!desc.writable || typeof desc.set !== "function")) {
          return;
        }
        src[symbol] = value;
      },
      enumerable: desc ? desc.enumerable : true,
      configurable: desc ? desc.configurable : true
    });
  });
}
var shouldCopySymbolProperties = false;
function patchMethod(target, name, patchFn) {
  let proto = target;
  while (proto && !proto.hasOwnProperty(name)) {
    proto = ObjectGetPrototypeOf(proto);
  }
  if (!proto && target[name]) {
    proto = target;
  }
  const delegateName = zoneSymbol(name);
  let delegate = null;
  if (proto && (!(delegate = proto[delegateName]) || !proto.hasOwnProperty(delegateName))) {
    delegate = proto[delegateName] = proto[name];
    const desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);
    if (isPropertyWritable(desc)) {
      const patchDelegate = patchFn(delegate, delegateName, name);
      proto[name] = function() {
        return patchDelegate(this, arguments);
      };
      attachOriginToPatched(proto[name], delegate);
      if (shouldCopySymbolProperties) {
        copySymbolProperties(delegate, proto[name]);
      }
    }
  }
  return delegate;
}
function patchMacroTask(obj, funcName, metaCreator) {
  let setNative = null;
  function scheduleTask(task) {
    const data = task.data;
    data.args[data.cbIdx] = function() {
      task.invoke.apply(this, arguments);
    };
    setNative.apply(data.target, data.args);
    return task;
  }
  setNative = patchMethod(obj, funcName, (delegate) => function(self2, args) {
    const meta = metaCreator(self2, args);
    if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === "function") {
      return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
    } else {
      return delegate.apply(self2, args);
    }
  });
}
function attachOriginToPatched(patched, original) {
  patched[zoneSymbol("OriginalDelegate")] = original;
}
function isFunction(value) {
  return typeof value === "function";
}
function isNumber(value) {
  return typeof value === "number";
}
var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
  useG: true
};
var zoneSymbolEventNames2 = {};
var globalSources = {};
var EVENT_NAME_SYMBOL_REGX = new RegExp("^" + ZONE_SYMBOL_PREFIX + "(\\w+)(true|false)$");
var IMMEDIATE_PROPAGATION_SYMBOL = zoneSymbol("propagationStopped");
function prepareEventNames(eventName, eventNameToString) {
  const falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
  const trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
  const symbol = ZONE_SYMBOL_PREFIX + falseEventName;
  const symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
  zoneSymbolEventNames2[eventName] = {};
  zoneSymbolEventNames2[eventName][FALSE_STR] = symbol;
  zoneSymbolEventNames2[eventName][TRUE_STR] = symbolCapture;
}
function patchEventTarget(_global2, api, apis, patchOptions) {
  const ADD_EVENT_LISTENER = patchOptions && patchOptions.add || ADD_EVENT_LISTENER_STR;
  const REMOVE_EVENT_LISTENER = patchOptions && patchOptions.rm || REMOVE_EVENT_LISTENER_STR;
  const LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.listeners || "eventListeners";
  const REMOVE_ALL_LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.rmAll || "removeAllListeners";
  const zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
  const ADD_EVENT_LISTENER_SOURCE = "." + ADD_EVENT_LISTENER + ":";
  const PREPEND_EVENT_LISTENER = "prependListener";
  const PREPEND_EVENT_LISTENER_SOURCE = "." + PREPEND_EVENT_LISTENER + ":";
  const invokeTask = function(task, target, event) {
    if (task.isRemoved) {
      return;
    }
    const delegate = task.callback;
    if (typeof delegate === "object" && delegate.handleEvent) {
      task.callback = (event2) => delegate.handleEvent(event2);
      task.originalDelegate = delegate;
    }
    let error;
    try {
      task.invoke(task, target, [event]);
    } catch (err) {
      error = err;
    }
    const options = task.options;
    if (options && typeof options === "object" && options.once) {
      const delegate2 = task.originalDelegate ? task.originalDelegate : task.callback;
      target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate2, options);
    }
    return error;
  };
  function globalCallback(context, event, isCapture) {
    event = event || _global2.event;
    if (!event) {
      return;
    }
    const target = context || event.target || _global2;
    const tasks = target[zoneSymbolEventNames2[event.type][isCapture ? TRUE_STR : FALSE_STR]];
    if (tasks) {
      const errors = [];
      if (tasks.length === 1) {
        const err = invokeTask(tasks[0], target, event);
        err && errors.push(err);
      } else {
        const copyTasks = tasks.slice();
        for (let i = 0; i < copyTasks.length; i++) {
          if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
            break;
          }
          const err = invokeTask(copyTasks[i], target, event);
          err && errors.push(err);
        }
      }
      if (errors.length === 1) {
        throw errors[0];
      } else {
        for (let i = 0; i < errors.length; i++) {
          const err = errors[i];
          api.nativeScheduleMicroTask(() => {
            throw err;
          });
        }
      }
    }
  }
  const globalZoneAwareCallback = function(event) {
    return globalCallback(this, event, false);
  };
  const globalZoneAwareCaptureCallback = function(event) {
    return globalCallback(this, event, true);
  };
  function patchEventTargetMethods(obj, patchOptions2) {
    if (!obj) {
      return false;
    }
    let useGlobalCallback = true;
    if (patchOptions2 && patchOptions2.useG !== void 0) {
      useGlobalCallback = patchOptions2.useG;
    }
    const validateHandler = patchOptions2 && patchOptions2.vh;
    let checkDuplicate = true;
    if (patchOptions2 && patchOptions2.chkDup !== void 0) {
      checkDuplicate = patchOptions2.chkDup;
    }
    let returnTarget = false;
    if (patchOptions2 && patchOptions2.rt !== void 0) {
      returnTarget = patchOptions2.rt;
    }
    let proto = obj;
    while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
      proto = ObjectGetPrototypeOf(proto);
    }
    if (!proto && obj[ADD_EVENT_LISTENER]) {
      proto = obj;
    }
    if (!proto) {
      return false;
    }
    if (proto[zoneSymbolAddEventListener]) {
      return false;
    }
    const eventNameToString = patchOptions2 && patchOptions2.eventNameToString;
    const taskData = {};
    const nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
    const nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] = proto[REMOVE_EVENT_LISTENER];
    const nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] = proto[LISTENERS_EVENT_LISTENER];
    const nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] = proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
    let nativePrependEventListener;
    if (patchOptions2 && patchOptions2.prepend) {
      nativePrependEventListener = proto[zoneSymbol(patchOptions2.prepend)] = proto[patchOptions2.prepend];
    }
    function buildEventListenerOptions(options, passive) {
      if (!passive) {
        return options;
      }
      if (typeof options === "boolean") {
        return { capture: options, passive: true };
      }
      if (!options) {
        return { passive: true };
      }
      if (typeof options === "object" && options.passive !== false) {
        return __spreadProps(__spreadValues({}, options), { passive: true });
      }
      return options;
    }
    const customScheduleGlobal = function(task) {
      if (taskData.isExisting) {
        return;
      }
      return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
    };
    const customCancelGlobal = function(task) {
      if (!task.isRemoved) {
        const symbolEventNames = zoneSymbolEventNames2[task.eventName];
        let symbolEventName;
        if (symbolEventNames) {
          symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
        }
        const existingTasks = symbolEventName && task.target[symbolEventName];
        if (existingTasks) {
          for (let i = 0; i < existingTasks.length; i++) {
            const existingTask = existingTasks[i];
            if (existingTask === task) {
              existingTasks.splice(i, 1);
              task.isRemoved = true;
              if (task.removeAbortListener) {
                task.removeAbortListener();
                task.removeAbortListener = null;
              }
              if (existingTasks.length === 0) {
                task.allRemoved = true;
                task.target[symbolEventName] = null;
              }
              break;
            }
          }
        }
      }
      if (!task.allRemoved) {
        return;
      }
      return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
    };
    const customScheduleNonGlobal = function(task) {
      return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
    };
    const customSchedulePrepend = function(task) {
      return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
    };
    const customCancelNonGlobal = function(task) {
      return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
    };
    const customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
    const customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;
    const compareTaskCallbackVsDelegate = function(task, delegate) {
      const typeOfDelegate = typeof delegate;
      return typeOfDelegate === "function" && task.callback === delegate || typeOfDelegate === "object" && task.originalDelegate === delegate;
    };
    const compare = (patchOptions2 == null ? void 0 : patchOptions2.diff) || compareTaskCallbackVsDelegate;
    const unpatchedEvents = Zone[zoneSymbol("UNPATCHED_EVENTS")];
    const passiveEvents = _global2[zoneSymbol("PASSIVE_EVENTS")];
    function copyEventListenerOptions(options) {
      if (typeof options === "object" && options !== null) {
        const newOptions = __spreadValues({}, options);
        if (options.signal) {
          newOptions.signal = options.signal;
        }
        return newOptions;
      }
      return options;
    }
    const makeAddListener = function(nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget2 = false, prepend = false) {
      return function() {
        const target = this || _global2;
        let eventName = arguments[0];
        if (patchOptions2 && patchOptions2.transferEventName) {
          eventName = patchOptions2.transferEventName(eventName);
        }
        let delegate = arguments[1];
        if (!delegate) {
          return nativeListener.apply(this, arguments);
        }
        if (isNode && eventName === "uncaughtException") {
          return nativeListener.apply(this, arguments);
        }
        let isEventListenerObject = false;
        if (typeof delegate !== "function") {
          if (!delegate.handleEvent) {
            return nativeListener.apply(this, arguments);
          }
          isEventListenerObject = true;
        }
        if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
          return;
        }
        const passive = !!passiveEvents && passiveEvents.indexOf(eventName) !== -1;
        const options = copyEventListenerOptions(buildEventListenerOptions(arguments[2], passive));
        const signal2 = options == null ? void 0 : options.signal;
        if (signal2 == null ? void 0 : signal2.aborted) {
          return;
        }
        if (unpatchedEvents) {
          for (let i = 0; i < unpatchedEvents.length; i++) {
            if (eventName === unpatchedEvents[i]) {
              if (passive) {
                return nativeListener.call(target, eventName, delegate, options);
              } else {
                return nativeListener.apply(this, arguments);
              }
            }
          }
        }
        const capture = !options ? false : typeof options === "boolean" ? true : options.capture;
        const once = options && typeof options === "object" ? options.once : false;
        const zone = Zone.current;
        let symbolEventNames = zoneSymbolEventNames2[eventName];
        if (!symbolEventNames) {
          prepareEventNames(eventName, eventNameToString);
          symbolEventNames = zoneSymbolEventNames2[eventName];
        }
        const symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
        let existingTasks = target[symbolEventName];
        let isExisting = false;
        if (existingTasks) {
          isExisting = true;
          if (checkDuplicate) {
            for (let i = 0; i < existingTasks.length; i++) {
              if (compare(existingTasks[i], delegate)) {
                return;
              }
            }
          }
        } else {
          existingTasks = target[symbolEventName] = [];
        }
        let source;
        const constructorName = target.constructor["name"];
        const targetSource = globalSources[constructorName];
        if (targetSource) {
          source = targetSource[eventName];
        }
        if (!source) {
          source = constructorName + addSource + (eventNameToString ? eventNameToString(eventName) : eventName);
        }
        taskData.options = options;
        if (once) {
          taskData.options.once = false;
        }
        taskData.target = target;
        taskData.capture = capture;
        taskData.eventName = eventName;
        taskData.isExisting = isExisting;
        const data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : void 0;
        if (data) {
          data.taskData = taskData;
        }
        if (signal2) {
          taskData.options.signal = void 0;
        }
        const task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
        if (signal2) {
          taskData.options.signal = signal2;
          const onAbort = () => task.zone.cancelTask(task);
          nativeListener.call(signal2, "abort", onAbort, { once: true });
          task.removeAbortListener = () => signal2.removeEventListener("abort", onAbort);
        }
        taskData.target = null;
        if (data) {
          data.taskData = null;
        }
        if (once) {
          taskData.options.once = true;
        }
        if (typeof task.options !== "boolean") {
          task.options = options;
        }
        task.target = target;
        task.capture = capture;
        task.eventName = eventName;
        if (isEventListenerObject) {
          task.originalDelegate = delegate;
        }
        if (!prepend) {
          existingTasks.push(task);
        } else {
          existingTasks.unshift(task);
        }
        if (returnTarget2) {
          return target;
        }
      };
    };
    proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);
    if (nativePrependEventListener) {
      proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
    }
    proto[REMOVE_EVENT_LISTENER] = function() {
      const target = this || _global2;
      let eventName = arguments[0];
      if (patchOptions2 && patchOptions2.transferEventName) {
        eventName = patchOptions2.transferEventName(eventName);
      }
      const options = arguments[2];
      const capture = !options ? false : typeof options === "boolean" ? true : options.capture;
      const delegate = arguments[1];
      if (!delegate) {
        return nativeRemoveEventListener.apply(this, arguments);
      }
      if (validateHandler && !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
        return;
      }
      const symbolEventNames = zoneSymbolEventNames2[eventName];
      let symbolEventName;
      if (symbolEventNames) {
        symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
      }
      const existingTasks = symbolEventName && target[symbolEventName];
      if (existingTasks) {
        for (let i = 0; i < existingTasks.length; i++) {
          const existingTask = existingTasks[i];
          if (compare(existingTask, delegate)) {
            existingTasks.splice(i, 1);
            existingTask.isRemoved = true;
            if (existingTasks.length === 0) {
              existingTask.allRemoved = true;
              target[symbolEventName] = null;
              if (!capture && typeof eventName === "string") {
                const onPropertySymbol = ZONE_SYMBOL_PREFIX + "ON_PROPERTY" + eventName;
                target[onPropertySymbol] = null;
              }
            }
            existingTask.zone.cancelTask(existingTask);
            if (returnTarget) {
              return target;
            }
            return;
          }
        }
      }
      return nativeRemoveEventListener.apply(this, arguments);
    };
    proto[LISTENERS_EVENT_LISTENER] = function() {
      const target = this || _global2;
      let eventName = arguments[0];
      if (patchOptions2 && patchOptions2.transferEventName) {
        eventName = patchOptions2.transferEventName(eventName);
      }
      const listeners = [];
      const tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);
      for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
        listeners.push(delegate);
      }
      return listeners;
    };
    proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function() {
      const target = this || _global2;
      let eventName = arguments[0];
      if (!eventName) {
        const keys = Object.keys(target);
        for (let i = 0; i < keys.length; i++) {
          const prop = keys[i];
          const match = EVENT_NAME_SYMBOL_REGX.exec(prop);
          let evtName = match && match[1];
          if (evtName && evtName !== "removeListener") {
            this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
          }
        }
        this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, "removeListener");
      } else {
        if (patchOptions2 && patchOptions2.transferEventName) {
          eventName = patchOptions2.transferEventName(eventName);
        }
        const symbolEventNames = zoneSymbolEventNames2[eventName];
        if (symbolEventNames) {
          const symbolEventName = symbolEventNames[FALSE_STR];
          const symbolCaptureEventName = symbolEventNames[TRUE_STR];
          const tasks = target[symbolEventName];
          const captureTasks = target[symbolCaptureEventName];
          if (tasks) {
            const removeTasks = tasks.slice();
            for (let i = 0; i < removeTasks.length; i++) {
              const task = removeTasks[i];
              let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
              this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
            }
          }
          if (captureTasks) {
            const removeTasks = captureTasks.slice();
            for (let i = 0; i < removeTasks.length; i++) {
              const task = removeTasks[i];
              let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
              this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
            }
          }
        }
      }
      if (returnTarget) {
        return this;
      }
    };
    attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
    attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);
    if (nativeRemoveAllListeners) {
      attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
    }
    if (nativeListeners) {
      attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
    }
    return true;
  }
  let results = [];
  for (let i = 0; i < apis.length; i++) {
    results[i] = patchEventTargetMethods(apis[i], patchOptions);
  }
  return results;
}
function findEventTasks(target, eventName) {
  if (!eventName) {
    const foundTasks = [];
    for (let prop in target) {
      const match = EVENT_NAME_SYMBOL_REGX.exec(prop);
      let evtName = match && match[1];
      if (evtName && (!eventName || evtName === eventName)) {
        const tasks = target[prop];
        if (tasks) {
          for (let i = 0; i < tasks.length; i++) {
            foundTasks.push(tasks[i]);
          }
        }
      }
    }
    return foundTasks;
  }
  let symbolEventName = zoneSymbolEventNames2[eventName];
  if (!symbolEventName) {
    prepareEventNames(eventName);
    symbolEventName = zoneSymbolEventNames2[eventName];
  }
  const captureFalseTasks = target[symbolEventName[FALSE_STR]];
  const captureTrueTasks = target[symbolEventName[TRUE_STR]];
  if (!captureFalseTasks) {
    return captureTrueTasks ? captureTrueTasks.slice() : [];
  } else {
    return captureTrueTasks ? captureFalseTasks.concat(captureTrueTasks) : captureFalseTasks.slice();
  }
}
function patchEventPrototype(global2, api) {
  const Event = global2["Event"];
  if (Event && Event.prototype) {
    api.patchMethod(Event.prototype, "stopImmediatePropagation", (delegate) => function(self2, args) {
      self2[IMMEDIATE_PROPAGATION_SYMBOL] = true;
      delegate && delegate.apply(self2, args);
    });
  }
}
function patchQueueMicrotask(global2, api) {
  api.patchMethod(global2, "queueMicrotask", (delegate) => {
    return function(self2, args) {
      Zone.current.scheduleMicroTask("queueMicrotask", args[0]);
    };
  });
}
var taskSymbol = zoneSymbol("zoneTask");
function patchTimer(window2, setName, cancelName, nameSuffix) {
  let setNative = null;
  let clearNative = null;
  setName += nameSuffix;
  cancelName += nameSuffix;
  const tasksByHandleId = {};
  function scheduleTask(task) {
    const data = task.data;
    data.args[0] = function() {
      return task.invoke.apply(this, arguments);
    };
    const handleOrId = setNative.apply(window2, data.args);
    if (isNumber(handleOrId)) {
      data.handleId = handleOrId;
    } else {
      data.handle = handleOrId;
      data.isRefreshable = isFunction(handleOrId.refresh);
    }
    return task;
  }
  function clearTask(task) {
    const { handle, handleId } = task.data;
    return clearNative.call(window2, handle != null ? handle : handleId);
  }
  setNative = patchMethod(window2, setName, (delegate) => function(self2, args) {
    var _a;
    if (isFunction(args[0])) {
      const options = {
        isRefreshable: false,
        isPeriodic: nameSuffix === "Interval",
        delay: nameSuffix === "Timeout" || nameSuffix === "Interval" ? args[1] || 0 : void 0,
        args
      };
      const callback = args[0];
      args[0] = function timer() {
        try {
          return callback.apply(this, arguments);
        } finally {
          const { handle: handle2, handleId: handleId2, isPeriodic: isPeriodic2, isRefreshable: isRefreshable2 } = options;
          if (!isPeriodic2 && !isRefreshable2) {
            if (handleId2) {
              delete tasksByHandleId[handleId2];
            } else if (handle2) {
              handle2[taskSymbol] = null;
            }
          }
        }
      };
      const task = scheduleMacroTaskWithCurrentZone(setName, args[0], options, scheduleTask, clearTask);
      if (!task) {
        return task;
      }
      const { handleId, handle, isRefreshable, isPeriodic } = task.data;
      if (handleId) {
        tasksByHandleId[handleId] = task;
      } else if (handle) {
        handle[taskSymbol] = task;
        if (isRefreshable && !isPeriodic) {
          const originalRefresh = handle.refresh;
          handle.refresh = function() {
            const { zone, state } = task;
            if (state === "notScheduled") {
              task._state = "scheduled";
              zone._updateTaskCount(task, 1);
            } else if (state === "running") {
              task._state = "scheduling";
            }
            return originalRefresh.call(this);
          };
        }
      }
      return (_a = handle != null ? handle : handleId) != null ? _a : task;
    } else {
      return delegate.apply(window2, args);
    }
  });
  clearNative = patchMethod(window2, cancelName, (delegate) => function(self2, args) {
    const id = args[0];
    let task;
    if (isNumber(id)) {
      task = tasksByHandleId[id];
      delete tasksByHandleId[id];
    } else {
      task = id == null ? void 0 : id[taskSymbol];
      if (task) {
        id[taskSymbol] = null;
      } else {
        task = id;
      }
    }
    if (task == null ? void 0 : task.type) {
      if (task.cancelFn) {
        task.zone.cancelTask(task);
      }
    } else {
      delegate.apply(window2, args);
    }
  });
}
function patchCustomElements(_global2, api) {
  const { isBrowser: isBrowser2, isMix: isMix2 } = api.getGlobalObjects();
  if (!isBrowser2 && !isMix2 || !_global2["customElements"] || !("customElements" in _global2)) {
    return;
  }
  const callbacks = [
    "connectedCallback",
    "disconnectedCallback",
    "adoptedCallback",
    "attributeChangedCallback",
    "formAssociatedCallback",
    "formDisabledCallback",
    "formResetCallback",
    "formStateRestoreCallback"
  ];
  api.patchCallbacks(api, _global2.customElements, "customElements", "define", callbacks);
}
function eventTargetPatch(_global2, api) {
  if (Zone[api.symbol("patchEventTarget")]) {
    return;
  }
  const { eventNames, zoneSymbolEventNames: zoneSymbolEventNames3, TRUE_STR: TRUE_STR2, FALSE_STR: FALSE_STR2, ZONE_SYMBOL_PREFIX: ZONE_SYMBOL_PREFIX2 } = api.getGlobalObjects();
  for (let i = 0; i < eventNames.length; i++) {
    const eventName = eventNames[i];
    const falseEventName = eventName + FALSE_STR2;
    const trueEventName = eventName + TRUE_STR2;
    const symbol = ZONE_SYMBOL_PREFIX2 + falseEventName;
    const symbolCapture = ZONE_SYMBOL_PREFIX2 + trueEventName;
    zoneSymbolEventNames3[eventName] = {};
    zoneSymbolEventNames3[eventName][FALSE_STR2] = symbol;
    zoneSymbolEventNames3[eventName][TRUE_STR2] = symbolCapture;
  }
  const EVENT_TARGET = _global2["EventTarget"];
  if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
    return;
  }
  api.patchEventTarget(_global2, api, [EVENT_TARGET && EVENT_TARGET.prototype]);
  return true;
}
function patchEvent(global2, api) {
  api.patchEventPrototype(global2, api);
}
function filterProperties(target, onProperties, ignoreProperties) {
  if (!ignoreProperties || ignoreProperties.length === 0) {
    return onProperties;
  }
  const tip = ignoreProperties.filter((ip) => ip.target === target);
  if (tip.length === 0) {
    return onProperties;
  }
  const targetIgnoreProperties = tip[0].ignoreProperties;
  return onProperties.filter((op) => targetIgnoreProperties.indexOf(op) === -1);
}
function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
  if (!target) {
    return;
  }
  const filteredProperties = filterProperties(target, onProperties, ignoreProperties);
  patchOnProperties(target, filteredProperties, prototype);
}
function getOnEventNames(target) {
  return Object.getOwnPropertyNames(target).filter((name) => name.startsWith("on") && name.length > 2).map((name) => name.substring(2));
}
function propertyDescriptorPatch(api, _global2) {
  if (isNode && !isMix) {
    return;
  }
  if (Zone[api.symbol("patchEvents")]) {
    return;
  }
  const ignoreProperties = _global2["__Zone_ignore_on_properties"];
  let patchTargets = [];
  if (isBrowser) {
    const internalWindow2 = window;
    patchTargets = patchTargets.concat([
      "Document",
      "SVGElement",
      "Element",
      "HTMLElement",
      "HTMLBodyElement",
      "HTMLMediaElement",
      "HTMLFrameSetElement",
      "HTMLFrameElement",
      "HTMLIFrameElement",
      "HTMLMarqueeElement",
      "Worker"
    ]);
    patchFilteredProperties(internalWindow2, getOnEventNames(internalWindow2), ignoreProperties, ObjectGetPrototypeOf(internalWindow2));
  }
  patchTargets = patchTargets.concat([
    "XMLHttpRequest",
    "XMLHttpRequestEventTarget",
    "IDBIndex",
    "IDBRequest",
    "IDBOpenDBRequest",
    "IDBDatabase",
    "IDBTransaction",
    "IDBCursor",
    "WebSocket"
  ]);
  for (let i = 0; i < patchTargets.length; i++) {
    const target = _global2[patchTargets[i]];
    (target == null ? void 0 : target.prototype) && patchFilteredProperties(target.prototype, getOnEventNames(target.prototype), ignoreProperties);
  }
}
function patchBrowser(Zone3) {
  Zone3.__load_patch("timers", (global2) => {
    const set = "set";
    const clear = "clear";
    patchTimer(global2, set, clear, "Timeout");
    patchTimer(global2, set, clear, "Interval");
    patchTimer(global2, set, clear, "Immediate");
  });
  Zone3.__load_patch("requestAnimationFrame", (global2) => {
    patchTimer(global2, "request", "cancel", "AnimationFrame");
    patchTimer(global2, "mozRequest", "mozCancel", "AnimationFrame");
    patchTimer(global2, "webkitRequest", "webkitCancel", "AnimationFrame");
  });
  Zone3.__load_patch("blocking", (global2, Zone4) => {
    const blockingMethods = ["alert", "prompt", "confirm"];
    for (let i = 0; i < blockingMethods.length; i++) {
      const name = blockingMethods[i];
      patchMethod(global2, name, (delegate, symbol, name2) => {
        return function(s, args) {
          return Zone4.current.run(delegate, global2, args, name2);
        };
      });
    }
  });
  Zone3.__load_patch("EventTarget", (global2, Zone4, api) => {
    patchEvent(global2, api);
    eventTargetPatch(global2, api);
    const XMLHttpRequestEventTarget = global2["XMLHttpRequestEventTarget"];
    if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
      api.patchEventTarget(global2, api, [XMLHttpRequestEventTarget.prototype]);
    }
  });
  Zone3.__load_patch("MutationObserver", (global2, Zone4, api) => {
    patchClass("MutationObserver");
    patchClass("WebKitMutationObserver");
  });
  Zone3.__load_patch("IntersectionObserver", (global2, Zone4, api) => {
    patchClass("IntersectionObserver");
  });
  Zone3.__load_patch("FileReader", (global2, Zone4, api) => {
    patchClass("FileReader");
  });
  Zone3.__load_patch("on_property", (global2, Zone4, api) => {
    propertyDescriptorPatch(api, global2);
  });
  Zone3.__load_patch("customElements", (global2, Zone4, api) => {
    patchCustomElements(global2, api);
  });
  Zone3.__load_patch("XHR", (global2, Zone4) => {
    patchXHR(global2);
    const XHR_TASK = zoneSymbol("xhrTask");
    const XHR_SYNC = zoneSymbol("xhrSync");
    const XHR_LISTENER = zoneSymbol("xhrListener");
    const XHR_SCHEDULED = zoneSymbol("xhrScheduled");
    const XHR_URL = zoneSymbol("xhrURL");
    const XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol("xhrErrorBeforeScheduled");
    function patchXHR(window2) {
      const XMLHttpRequest = window2["XMLHttpRequest"];
      if (!XMLHttpRequest) {
        return;
      }
      const XMLHttpRequestPrototype = XMLHttpRequest.prototype;
      function findPendingTask(target) {
        return target[XHR_TASK];
      }
      let oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
      let oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
      if (!oriAddListener) {
        const XMLHttpRequestEventTarget = window2["XMLHttpRequestEventTarget"];
        if (XMLHttpRequestEventTarget) {
          const XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
          oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
          oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
        }
      }
      const READY_STATE_CHANGE = "readystatechange";
      const SCHEDULED = "scheduled";
      function scheduleTask(task) {
        const data = task.data;
        const target = data.target;
        target[XHR_SCHEDULED] = false;
        target[XHR_ERROR_BEFORE_SCHEDULED] = false;
        const listener = target[XHR_LISTENER];
        if (!oriAddListener) {
          oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
          oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
        }
        if (listener) {
          oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
        }
        const newListener = target[XHR_LISTENER] = () => {
          if (target.readyState === target.DONE) {
            if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
              const loadTasks = target[Zone4.__symbol__("loadfalse")];
              if (target.status !== 0 && loadTasks && loadTasks.length > 0) {
                const oriInvoke = task.invoke;
                task.invoke = function() {
                  const loadTasks2 = target[Zone4.__symbol__("loadfalse")];
                  for (let i = 0; i < loadTasks2.length; i++) {
                    if (loadTasks2[i] === task) {
                      loadTasks2.splice(i, 1);
                    }
                  }
                  if (!data.aborted && task.state === SCHEDULED) {
                    oriInvoke.call(task);
                  }
                };
                loadTasks.push(task);
              } else {
                task.invoke();
              }
            } else if (!data.aborted && target[XHR_SCHEDULED] === false) {
              target[XHR_ERROR_BEFORE_SCHEDULED] = true;
            }
          }
        };
        oriAddListener.call(target, READY_STATE_CHANGE, newListener);
        const storedTask = target[XHR_TASK];
        if (!storedTask) {
          target[XHR_TASK] = task;
        }
        sendNative.apply(target, data.args);
        target[XHR_SCHEDULED] = true;
        return task;
      }
      function placeholderCallback() {
      }
      function clearTask(task) {
        const data = task.data;
        data.aborted = true;
        return abortNative.apply(data.target, data.args);
      }
      const openNative = patchMethod(XMLHttpRequestPrototype, "open", () => function(self2, args) {
        self2[XHR_SYNC] = args[2] == false;
        self2[XHR_URL] = args[1];
        return openNative.apply(self2, args);
      });
      const XMLHTTPREQUEST_SOURCE = "XMLHttpRequest.send";
      const fetchTaskAborting = zoneSymbol("fetchTaskAborting");
      const fetchTaskScheduling = zoneSymbol("fetchTaskScheduling");
      const sendNative = patchMethod(XMLHttpRequestPrototype, "send", () => function(self2, args) {
        if (Zone4.current[fetchTaskScheduling] === true) {
          return sendNative.apply(self2, args);
        }
        if (self2[XHR_SYNC]) {
          return sendNative.apply(self2, args);
        } else {
          const options = {
            target: self2,
            url: self2[XHR_URL],
            isPeriodic: false,
            args,
            aborted: false
          };
          const task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);
          if (self2 && self2[XHR_ERROR_BEFORE_SCHEDULED] === true && !options.aborted && task.state === SCHEDULED) {
            task.invoke();
          }
        }
      });
      const abortNative = patchMethod(XMLHttpRequestPrototype, "abort", () => function(self2, args) {
        const task = findPendingTask(self2);
        if (task && typeof task.type == "string") {
          if (task.cancelFn == null || task.data && task.data.aborted) {
            return;
          }
          task.zone.cancelTask(task);
        } else if (Zone4.current[fetchTaskAborting] === true) {
          return abortNative.apply(self2, args);
        }
      });
    }
  });
  Zone3.__load_patch("geolocation", (global2) => {
    if (global2["navigator"] && global2["navigator"].geolocation) {
      patchPrototype(global2["navigator"].geolocation, ["getCurrentPosition", "watchPosition"]);
    }
  });
  Zone3.__load_patch("PromiseRejectionEvent", (global2, Zone4) => {
    function findPromiseRejectionHandler(evtName) {
      return function(e) {
        const eventTasks = findEventTasks(global2, evtName);
        eventTasks.forEach((eventTask) => {
          const PromiseRejectionEvent = global2["PromiseRejectionEvent"];
          if (PromiseRejectionEvent) {
            const evt = new PromiseRejectionEvent(evtName, {
              promise: e.promise,
              reason: e.rejection
            });
            eventTask.invoke(evt);
          }
        });
      };
    }
    if (global2["PromiseRejectionEvent"]) {
      Zone4[zoneSymbol("unhandledPromiseRejectionHandler")] = findPromiseRejectionHandler("unhandledrejection");
      Zone4[zoneSymbol("rejectionHandledHandler")] = findPromiseRejectionHandler("rejectionhandled");
    }
  });
  Zone3.__load_patch("queueMicrotask", (global2, Zone4, api) => {
    patchQueueMicrotask(global2, api);
  });
}
function patchPromise(Zone3) {
  Zone3.__load_patch("ZoneAwarePromise", (global2, Zone4, api) => {
    const ObjectGetOwnPropertyDescriptor2 = Object.getOwnPropertyDescriptor;
    const ObjectDefineProperty2 = Object.defineProperty;
    function readableObjectToString(obj) {
      if (obj && obj.toString === Object.prototype.toString) {
        const className = obj.constructor && obj.constructor.name;
        return (className ? className : "") + ": " + JSON.stringify(obj);
      }
      return obj ? obj.toString() : Object.prototype.toString.call(obj);
    }
    const __symbol__2 = api.symbol;
    const _uncaughtPromiseErrors = [];
    const isDisableWrappingUncaughtPromiseRejection = global2[__symbol__2("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")] !== false;
    const symbolPromise = __symbol__2("Promise");
    const symbolThen = __symbol__2("then");
    const creationTrace = "__creationTrace__";
    api.onUnhandledError = (e) => {
      if (api.showUncaughtError()) {
        const rejection = e && e.rejection;
        if (rejection) {
          console.error("Unhandled Promise rejection:", rejection instanceof Error ? rejection.message : rejection, "; Zone:", e.zone.name, "; Task:", e.task && e.task.source, "; Value:", rejection, rejection instanceof Error ? rejection.stack : void 0);
        } else {
          console.error(e);
        }
      }
    };
    api.microtaskDrainDone = () => {
      while (_uncaughtPromiseErrors.length) {
        const uncaughtPromiseError = _uncaughtPromiseErrors.shift();
        try {
          uncaughtPromiseError.zone.runGuarded(() => {
            if (uncaughtPromiseError.throwOriginal) {
              throw uncaughtPromiseError.rejection;
            }
            throw uncaughtPromiseError;
          });
        } catch (error) {
          handleUnhandledRejection(error);
        }
      }
    };
    const UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__2("unhandledPromiseRejectionHandler");
    function handleUnhandledRejection(e) {
      api.onUnhandledError(e);
      try {
        const handler = Zone4[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
        if (typeof handler === "function") {
          handler.call(this, e);
        }
      } catch (err) {
      }
    }
    function isThenable(value) {
      return value && typeof value.then === "function";
    }
    function forwardResolution(value) {
      return value;
    }
    function forwardRejection(rejection) {
      return ZoneAwarePromise.reject(rejection);
    }
    const symbolState = __symbol__2("state");
    const symbolValue = __symbol__2("value");
    const symbolFinally = __symbol__2("finally");
    const symbolParentPromiseValue = __symbol__2("parentPromiseValue");
    const symbolParentPromiseState = __symbol__2("parentPromiseState");
    const source = "Promise.then";
    const UNRESOLVED = null;
    const RESOLVED = true;
    const REJECTED = false;
    const REJECTED_NO_CATCH = 0;
    function makeResolver(promise, state) {
      return (v) => {
        try {
          resolvePromise(promise, state, v);
        } catch (err) {
          resolvePromise(promise, false, err);
        }
      };
    }
    const once = function() {
      let wasCalled = false;
      return function wrapper(wrappedFunction) {
        return function() {
          if (wasCalled) {
            return;
          }
          wasCalled = true;
          wrappedFunction.apply(null, arguments);
        };
      };
    };
    const TYPE_ERROR = "Promise resolved with itself";
    const CURRENT_TASK_TRACE_SYMBOL = __symbol__2("currentTaskTrace");
    function resolvePromise(promise, state, value) {
      const onceWrapper = once();
      if (promise === value) {
        throw new TypeError(TYPE_ERROR);
      }
      if (promise[symbolState] === UNRESOLVED) {
        let then = null;
        try {
          if (typeof value === "object" || typeof value === "function") {
            then = value && value.then;
          }
        } catch (err) {
          onceWrapper(() => {
            resolvePromise(promise, false, err);
          })();
          return promise;
        }
        if (state !== REJECTED && value instanceof ZoneAwarePromise && value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) && value[symbolState] !== UNRESOLVED) {
          clearRejectedNoCatch(value);
          resolvePromise(promise, value[symbolState], value[symbolValue]);
        } else if (state !== REJECTED && typeof then === "function") {
          try {
            then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
          } catch (err) {
            onceWrapper(() => {
              resolvePromise(promise, false, err);
            })();
          }
        } else {
          promise[symbolState] = state;
          const queue = promise[symbolValue];
          promise[symbolValue] = value;
          if (promise[symbolFinally] === symbolFinally) {
            if (state === RESOLVED) {
              promise[symbolState] = promise[symbolParentPromiseState];
              promise[symbolValue] = promise[symbolParentPromiseValue];
            }
          }
          if (state === REJECTED && value instanceof Error) {
            const trace = Zone4.currentTask && Zone4.currentTask.data && Zone4.currentTask.data[creationTrace];
            if (trace) {
              ObjectDefineProperty2(value, CURRENT_TASK_TRACE_SYMBOL, {
                configurable: true,
                enumerable: false,
                writable: true,
                value: trace
              });
            }
          }
          for (let i = 0; i < queue.length; ) {
            scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
          }
          if (queue.length == 0 && state == REJECTED) {
            promise[symbolState] = REJECTED_NO_CATCH;
            let uncaughtPromiseError = value;
            try {
              throw new Error("Uncaught (in promise): " + readableObjectToString(value) + (value && value.stack ? "\n" + value.stack : ""));
            } catch (err) {
              uncaughtPromiseError = err;
            }
            if (isDisableWrappingUncaughtPromiseRejection) {
              uncaughtPromiseError.throwOriginal = true;
            }
            uncaughtPromiseError.rejection = value;
            uncaughtPromiseError.promise = promise;
            uncaughtPromiseError.zone = Zone4.current;
            uncaughtPromiseError.task = Zone4.currentTask;
            _uncaughtPromiseErrors.push(uncaughtPromiseError);
            api.scheduleMicroTask();
          }
        }
      }
      return promise;
    }
    const REJECTION_HANDLED_HANDLER = __symbol__2("rejectionHandledHandler");
    function clearRejectedNoCatch(promise) {
      if (promise[symbolState] === REJECTED_NO_CATCH) {
        try {
          const handler = Zone4[REJECTION_HANDLED_HANDLER];
          if (handler && typeof handler === "function") {
            handler.call(this, { rejection: promise[symbolValue], promise });
          }
        } catch (err) {
        }
        promise[symbolState] = REJECTED;
        for (let i = 0; i < _uncaughtPromiseErrors.length; i++) {
          if (promise === _uncaughtPromiseErrors[i].promise) {
            _uncaughtPromiseErrors.splice(i, 1);
          }
        }
      }
    }
    function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
      clearRejectedNoCatch(promise);
      const promiseState = promise[symbolState];
      const delegate = promiseState ? typeof onFulfilled === "function" ? onFulfilled : forwardResolution : typeof onRejected === "function" ? onRejected : forwardRejection;
      zone.scheduleMicroTask(source, () => {
        try {
          const parentPromiseValue = promise[symbolValue];
          const isFinallyPromise = !!chainPromise && symbolFinally === chainPromise[symbolFinally];
          if (isFinallyPromise) {
            chainPromise[symbolParentPromiseValue] = parentPromiseValue;
            chainPromise[symbolParentPromiseState] = promiseState;
          }
          const value = zone.run(delegate, void 0, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ? [] : [parentPromiseValue]);
          resolvePromise(chainPromise, true, value);
        } catch (error) {
          resolvePromise(chainPromise, false, error);
        }
      }, chainPromise);
    }
    const ZONE_AWARE_PROMISE_TO_STRING = "function ZoneAwarePromise() { [native code] }";
    const noop = function() {
    };
    const AggregateError = global2.AggregateError;
    class ZoneAwarePromise {
      static toString() {
        return ZONE_AWARE_PROMISE_TO_STRING;
      }
      static resolve(value) {
        if (value instanceof ZoneAwarePromise) {
          return value;
        }
        return resolvePromise(new this(null), RESOLVED, value);
      }
      static reject(error) {
        return resolvePromise(new this(null), REJECTED, error);
      }
      static withResolvers() {
        const result = {};
        result.promise = new ZoneAwarePromise((res, rej) => {
          result.resolve = res;
          result.reject = rej;
        });
        return result;
      }
      static any(values) {
        if (!values || typeof values[Symbol.iterator] !== "function") {
          return Promise.reject(new AggregateError([], "All promises were rejected"));
        }
        const promises = [];
        let count = 0;
        try {
          for (let v of values) {
            count++;
            promises.push(ZoneAwarePromise.resolve(v));
          }
        } catch (err) {
          return Promise.reject(new AggregateError([], "All promises were rejected"));
        }
        if (count === 0) {
          return Promise.reject(new AggregateError([], "All promises were rejected"));
        }
        let finished = false;
        const errors = [];
        return new ZoneAwarePromise((resolve, reject) => {
          for (let i = 0; i < promises.length; i++) {
            promises[i].then((v) => {
              if (finished) {
                return;
              }
              finished = true;
              resolve(v);
            }, (err) => {
              errors.push(err);
              count--;
              if (count === 0) {
                finished = true;
                reject(new AggregateError(errors, "All promises were rejected"));
              }
            });
          }
        });
      }
      static race(values) {
        let resolve;
        let reject;
        let promise = new this((res, rej) => {
          resolve = res;
          reject = rej;
        });
        function onResolve(value) {
          resolve(value);
        }
        function onReject(error) {
          reject(error);
        }
        for (let value of values) {
          if (!isThenable(value)) {
            value = this.resolve(value);
          }
          value.then(onResolve, onReject);
        }
        return promise;
      }
      static all(values) {
        return ZoneAwarePromise.allWithCallback(values);
      }
      static allSettled(values) {
        const P = this && this.prototype instanceof ZoneAwarePromise ? this : ZoneAwarePromise;
        return P.allWithCallback(values, {
          thenCallback: (value) => ({ status: "fulfilled", value }),
          errorCallback: (err) => ({ status: "rejected", reason: err })
        });
      }
      static allWithCallback(values, callback) {
        let resolve;
        let reject;
        let promise = new this((res, rej) => {
          resolve = res;
          reject = rej;
        });
        let unresolvedCount = 2;
        let valueIndex = 0;
        const resolvedValues = [];
        for (let value of values) {
          if (!isThenable(value)) {
            value = this.resolve(value);
          }
          const curValueIndex = valueIndex;
          try {
            value.then((value2) => {
              resolvedValues[curValueIndex] = callback ? callback.thenCallback(value2) : value2;
              unresolvedCount--;
              if (unresolvedCount === 0) {
                resolve(resolvedValues);
              }
            }, (err) => {
              if (!callback) {
                reject(err);
              } else {
                resolvedValues[curValueIndex] = callback.errorCallback(err);
                unresolvedCount--;
                if (unresolvedCount === 0) {
                  resolve(resolvedValues);
                }
              }
            });
          } catch (thenErr) {
            reject(thenErr);
          }
          unresolvedCount++;
          valueIndex++;
        }
        unresolvedCount -= 2;
        if (unresolvedCount === 0) {
          resolve(resolvedValues);
        }
        return promise;
      }
      constructor(executor) {
        const promise = this;
        if (!(promise instanceof ZoneAwarePromise)) {
          throw new Error("Must be an instanceof Promise.");
        }
        promise[symbolState] = UNRESOLVED;
        promise[symbolValue] = [];
        try {
          const onceWrapper = once();
          executor && executor(onceWrapper(makeResolver(promise, RESOLVED)), onceWrapper(makeResolver(promise, REJECTED)));
        } catch (error) {
          resolvePromise(promise, false, error);
        }
      }
      get [Symbol.toStringTag]() {
        return "Promise";
      }
      get [Symbol.species]() {
        return ZoneAwarePromise;
      }
      then(onFulfilled, onRejected) {
        var _a;
        let C = (_a = this.constructor) == null ? void 0 : _a[Symbol.species];
        if (!C || typeof C !== "function") {
          C = this.constructor || ZoneAwarePromise;
        }
        const chainPromise = new C(noop);
        const zone = Zone4.current;
        if (this[symbolState] == UNRESOLVED) {
          this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
        } else {
          scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
        }
        return chainPromise;
      }
      catch(onRejected) {
        return this.then(null, onRejected);
      }
      finally(onFinally) {
        var _a;
        let C = (_a = this.constructor) == null ? void 0 : _a[Symbol.species];
        if (!C || typeof C !== "function") {
          C = ZoneAwarePromise;
        }
        const chainPromise = new C(noop);
        chainPromise[symbolFinally] = symbolFinally;
        const zone = Zone4.current;
        if (this[symbolState] == UNRESOLVED) {
          this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
        } else {
          scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
        }
        return chainPromise;
      }
    }
    ZoneAwarePromise["resolve"] = ZoneAwarePromise.resolve;
    ZoneAwarePromise["reject"] = ZoneAwarePromise.reject;
    ZoneAwarePromise["race"] = ZoneAwarePromise.race;
    ZoneAwarePromise["all"] = ZoneAwarePromise.all;
    const NativePromise = global2[symbolPromise] = global2["Promise"];
    global2["Promise"] = ZoneAwarePromise;
    const symbolThenPatched = __symbol__2("thenPatched");
    function patchThen(Ctor) {
      const proto = Ctor.prototype;
      const prop = ObjectGetOwnPropertyDescriptor2(proto, "then");
      if (prop && (prop.writable === false || !prop.configurable)) {
        return;
      }
      const originalThen = proto.then;
      proto[symbolThen] = originalThen;
      Ctor.prototype.then = function(onResolve, onReject) {
        const wrapped = new ZoneAwarePromise((resolve, reject) => {
          originalThen.call(this, resolve, reject);
        });
        return wrapped.then(onResolve, onReject);
      };
      Ctor[symbolThenPatched] = true;
    }
    api.patchThen = patchThen;
    function zoneify(fn) {
      return function(self2, args) {
        let resultPromise = fn.apply(self2, args);
        if (resultPromise instanceof ZoneAwarePromise) {
          return resultPromise;
        }
        let ctor = resultPromise.constructor;
        if (!ctor[symbolThenPatched]) {
          patchThen(ctor);
        }
        return resultPromise;
      };
    }
    if (NativePromise) {
      patchThen(NativePromise);
      patchMethod(global2, "fetch", (delegate) => zoneify(delegate));
    }
    Promise[Zone4.__symbol__("uncaughtPromiseErrors")] = _uncaughtPromiseErrors;
    return ZoneAwarePromise;
  });
}
function patchToString(Zone3) {
  Zone3.__load_patch("toString", (global2) => {
    const originalFunctionToString = Function.prototype.toString;
    const ORIGINAL_DELEGATE_SYMBOL = zoneSymbol("OriginalDelegate");
    const PROMISE_SYMBOL = zoneSymbol("Promise");
    const ERROR_SYMBOL = zoneSymbol("Error");
    const newFunctionToString = function toString() {
      if (typeof this === "function") {
        const originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
        if (originalDelegate) {
          if (typeof originalDelegate === "function") {
            return originalFunctionToString.call(originalDelegate);
          } else {
            return Object.prototype.toString.call(originalDelegate);
          }
        }
        if (this === Promise) {
          const nativePromise = global2[PROMISE_SYMBOL];
          if (nativePromise) {
            return originalFunctionToString.call(nativePromise);
          }
        }
        if (this === Error) {
          const nativeError = global2[ERROR_SYMBOL];
          if (nativeError) {
            return originalFunctionToString.call(nativeError);
          }
        }
      }
      return originalFunctionToString.call(this);
    };
    newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
    Function.prototype.toString = newFunctionToString;
    const originalObjectToString = Object.prototype.toString;
    const PROMISE_OBJECT_TO_STRING = "[object Promise]";
    Object.prototype.toString = function() {
      if (typeof Promise === "function" && this instanceof Promise) {
        return PROMISE_OBJECT_TO_STRING;
      }
      return originalObjectToString.call(this);
    };
  });
}
function patchCallbacks(api, target, targetName, method, callbacks) {
  const symbol = Zone.__symbol__(method);
  if (target[symbol]) {
    return;
  }
  const nativeDelegate = target[symbol] = target[method];
  target[method] = function(name, opts, options) {
    if (opts && opts.prototype) {
      callbacks.forEach(function(callback) {
        const source = `${targetName}.${method}::` + callback;
        const prototype = opts.prototype;
        try {
          if (prototype.hasOwnProperty(callback)) {
            const descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);
            if (descriptor && descriptor.value) {
              descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);
              api._redefineProperty(opts.prototype, callback, descriptor);
            } else if (prototype[callback]) {
              prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
            }
          } else if (prototype[callback]) {
            prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
          }
        } catch (e) {
        }
      });
    }
    return nativeDelegate.call(target, name, opts, options);
  };
  api.attachOriginToPatched(target[method], nativeDelegate);
}
function patchUtil(Zone3) {
  Zone3.__load_patch("util", (global2, Zone4, api) => {
    const eventNames = getOnEventNames(global2);
    api.patchOnProperties = patchOnProperties;
    api.patchMethod = patchMethod;
    api.bindArguments = bindArguments;
    api.patchMacroTask = patchMacroTask;
    const SYMBOL_BLACK_LISTED_EVENTS = Zone4.__symbol__("BLACK_LISTED_EVENTS");
    const SYMBOL_UNPATCHED_EVENTS = Zone4.__symbol__("UNPATCHED_EVENTS");
    if (global2[SYMBOL_UNPATCHED_EVENTS]) {
      global2[SYMBOL_BLACK_LISTED_EVENTS] = global2[SYMBOL_UNPATCHED_EVENTS];
    }
    if (global2[SYMBOL_BLACK_LISTED_EVENTS]) {
      Zone4[SYMBOL_BLACK_LISTED_EVENTS] = Zone4[SYMBOL_UNPATCHED_EVENTS] = global2[SYMBOL_BLACK_LISTED_EVENTS];
    }
    api.patchEventPrototype = patchEventPrototype;
    api.patchEventTarget = patchEventTarget;
    api.ObjectDefineProperty = ObjectDefineProperty;
    api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
    api.ObjectCreate = ObjectCreate;
    api.ArraySlice = ArraySlice;
    api.patchClass = patchClass;
    api.wrapWithCurrentZone = wrapWithCurrentZone;
    api.filterProperties = filterProperties;
    api.attachOriginToPatched = attachOriginToPatched;
    api._redefineProperty = Object.defineProperty;
    api.patchCallbacks = patchCallbacks;
    api.getGlobalObjects = () => ({
      globalSources,
      zoneSymbolEventNames: zoneSymbolEventNames2,
      eventNames,
      isBrowser,
      isMix,
      isNode,
      TRUE_STR,
      FALSE_STR,
      ZONE_SYMBOL_PREFIX,
      ADD_EVENT_LISTENER_STR,
      REMOVE_EVENT_LISTENER_STR
    });
  });
}
function patchCommon(Zone3) {
  patchPromise(Zone3);
  patchToString(Zone3);
  patchUtil(Zone3);
}
var Zone2 = loadZone();
patchCommon(Zone2);
patchBrowser(Zone2);

// src/app/global-error-handler.ts
var GlobalErrorHandler = class _GlobalErrorHandler {
  alertService = inject(AlertService);
  zone = inject(NgZone);
  handleError(error) {
    const message = this.extractMessage(error);
    console.error("[GlobalErrorHandler]", error);
    if (this.isChunkError(message)) {
      const reloadKey = "chunk_reload_at";
      const last = localStorage.getItem(reloadKey);
      const now = Date.now();
      if (!last || now - parseInt(last, 10) > 3e4) {
        localStorage.setItem(reloadKey, String(now));
        window.location.reload();
      }
      return;
    }
    this.zone.run(() => {
      this.alertService.alertInfo("Something went wrong. Please try again or restart the app.", "Oops!").catch(() => {
      });
    });
  }
  extractMessage(error) {
    if (error instanceof Error)
      return error.message;
    if (typeof error === "string")
      return error;
    return String(error);
  }
  isChunkError(message) {
    return message.includes("ChunkLoadError") || message.includes("Loading chunk") || message.includes("Failed to fetch dynamically imported module");
  }
  static \u0275fac = function GlobalErrorHandler_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GlobalErrorHandler)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GlobalErrorHandler, factory: _GlobalErrorHandler.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GlobalErrorHandler, [{
    type: Injectable
  }], null, null);
})();

// src/app/app.routes.ts
var routes = [
  {
    path: "onboarding",
    loadComponent: () => import("./chunk-JYXIGM2O.js").then((m) => m.OnboardingComponent)
  },
  {
    path: "profile-setup",
    loadComponent: () => import("./chunk-IUCFT6KR.js").then((m) => m.ProfileSetupComponent)
  },
  {
    path: "settings",
    loadComponent: () => import("./chunk-FZ5HDZCK.js").then((m) => m.SettingsComponent)
  },
  {
    path: "tutorials/:slug/:topic",
    loadComponent: () => import("./chunk-XBRMNJAZ.js").then((m) => m.TopicRouterComponent)
  },
  {
    path: "tutorials",
    loadComponent: () => import("./chunk-XMCRFWGW.js").then((m) => m.TutorialListComponent)
  },
  {
    path: "tutorials/:slug",
    loadComponent: () => import("./chunk-TBE6F4UJ.js").then((m) => m.TutorialDetailComponent)
  },
  {
    path: "interview-questions",
    loadComponent: () => import("./chunk-VMQ7S6AC.js").then((m) => m.IqListComponent)
  },
  {
    path: "interview-questions/:category",
    loadComponent: () => import("./chunk-I3M3NM5H.js").then((m) => m.IqCategoryComponent)
  },
  {
    path: "interview-questions/:category/:id",
    loadComponent: () => import("./chunk-AKLBGPGS.js").then((m) => m.IqDetailComponent)
  },
  {
    path: "coding-questions",
    loadComponent: () => import("./chunk-6SLUMRVY.js").then((m) => m.CqListComponent)
  },
  {
    path: "coding-questions/:id",
    loadComponent: () => import("./chunk-OAPHCK6Q.js").then((m) => m.CqDetailComponent)
  },
  {
    path: "leetcode",
    loadComponent: () => import("./chunk-YBPB2LOL.js").then((m) => m.LcListComponent)
  },
  {
    path: "leetcode/:id",
    loadComponent: () => import("./chunk-GX6S6OXZ.js").then((m) => m.LcDetailComponent)
  },
  {
    path: "assessments",
    loadComponent: () => import("./chunk-6OZATK3L.js").then((m) => m.AssessListComponent)
  },
  {
    path: "assessments/:id",
    loadComponent: () => import("./chunk-64HHK3LQ.js").then((m) => m.AssessQuizComponent)
  },
  {
    path: "assessments/:id/result",
    loadComponent: () => import("./chunk-G3Y476AG.js").then((m) => m.AssessResultComponent)
  },
  {
    path: "experiences",
    loadComponent: () => import("./chunk-DTFBZNV5.js").then((m) => m.ExpListComponent)
  },
  {
    path: "experiences/:id",
    loadComponent: () => import("./chunk-BNSFMFZY.js").then((m) => m.ExpDetailComponent)
  },
  {
    path: "daily-challenge",
    loadComponent: () => import("./chunk-JGG5PFCU.js").then((m) => m.DailyChallengeComponent)
  },
  {
    path: "study-plan",
    loadComponent: () => import("./chunk-QG4ONR3V.js").then((m) => m.StudyPlanComponent)
  },
  {
    path: "mock-interview",
    loadComponent: () => import("./chunk-ZSBUZYBP.js").then((m) => m.MockInterviewComponent)
  },
  {
    path: "progress",
    loadComponent: () => import("./chunk-VB7PTNRG.js").then((m) => m.ProgressComponent)
  },
  {
    path: "review",
    loadComponent: () => import("./chunk-MGHSXSPV.js").then((m) => m.ReviewComponent)
  },
  {
    path: "bookmarks",
    loadComponent: () => import("./chunk-EWP2YUR2.js").then((m) => m.BookmarksListComponent)
  },
  {
    path: "leaderboard",
    loadComponent: () => import("./chunk-AFXUPKQW.js").then((m) => m.LeaderboardComponent)
  },
  {
    path: "about",
    loadComponent: () => import("./chunk-ITKINDWK.js").then((m) => m.AboutComponent)
  },
  {
    path: "achievements",
    loadComponent: () => import("./chunk-6SPHT2A6.js").then((m) => m.AchievementGalleryComponent)
  },
  {
    path: "dashboard",
    loadComponent: () => import("./chunk-M4IS4AKF.js").then((m) => m.DashboardComponent)
  },
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  { path: "**", redirectTo: "dashboard" }
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withHashLocation()),
    provideIonicAngular({ mode: "md" }),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideAnalytics(() => getAnalytics()),
    ScreenTrackingService
  ]
};

// node_modules/ionicons/icons/index.mjs
var barChartOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='M32 32v432a16 16 0 0 0 16 16h432' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><rect width='80' height='192' x='96' y='224' rx='20' ry='20' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><rect width='80' height='240' x='240' y='176' rx='20' ry='20' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><rect width='80' height='304' x='383.64' y='112' rx='20' ry='20' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var bookOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0 1 16 16v288a16 16 0 0 1-16 16c-128 0-177.45 25.81-208 64-30.37-38-80-64-208-64-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0 1 16-16c131.57.59 192 32.84 208 96M256 160v288' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var bookmarkOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='M352 48H160a48 48 0 0 0-48 48v368l144-128 144 128V96a48 48 0 0 0-48-48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var briefcaseOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><rect width='448' height='320' x='32' y='128' rx='48' ry='48' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path d='M144 128V96a32 32 0 0 1 32-32h160a32 32 0 0 1 32 32v32M480 240H32M320 240v24a8 8 0 0 1-8 8H200a8 8 0 0 1-8-8v-24' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var calendarOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><rect width='416' height='384' x='48' y='80' stroke-linejoin='round' rx='48' class='ionicon-fill-none ionicon-stroke-width'/><circle cx='296' cy='232' r='24'/><circle cx='376' cy='232' r='24'/><circle cx='296' cy='312' r='24'/><circle cx='376' cy='312' r='24'/><circle cx='136' cy='312' r='24'/><circle cx='216' cy='312' r='24'/><circle cx='136' cy='392' r='24'/><circle cx='216' cy='392' r='24'/><circle cx='296' cy='392' r='24'/><path stroke-linecap='round' stroke-linejoin='round' d='M128 48v32M384 48v32' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linejoin='round' d='M464 160H48' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var chatbubblesOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a34 34 0 0 1 2.1-3.1A162 162 0 0 0 464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 0 0-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.4 26.4 0 0 1 9.3-1.7 26 26 0 0 1 10.1 2l56.7 20.1a13.5 13.5 0 0 0 3.9 1 8 8 0 0 0 8-8 13 13 0 0 0-.5-2.7Z' stroke-linecap='round' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path d='M66.46 232a146.23 146.23 0 0 0 6.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 0 0 2.71 7.68A8.17 8.17 0 0 0 72 464a7.3 7.3 0 0 0 2.91-.6l56.21-22a15.7 15.7 0 0 1 12 .2c18.94 7.38 39.88 12 60.83 12A159.2 159.2 0 0 0 284 432.11' stroke-linecap='round' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var clipboardOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='M336 64h32a48 48 0 0 1 48 48v320a48 48 0 0 1-48 48H144a48 48 0 0 1-48-48V112a48 48 0 0 1 48-48h32' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><rect width='160' height='64' x='176' y='32' rx='26.13' ry='26.13' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var codeSlashOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='M160 368 32 256l128-112M352 368l128-112-128-112M304 96l-96 320' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var homeOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='M80 212v236a16 16 0 0 0 16 16h96V328a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v136h96a16 16 0 0 0 16-16V212' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path d='M480 256 266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var moonOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var peopleOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path d='M336 304c-65.17 0-127.84 32.37-143.54 95.41-2.08 8.34 3.15 16.59 11.72 16.59h263.65c8.57 0 13.77-8.25 11.72-16.59C463.85 335.36 401.18 304 336 304Z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path d='M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path d='M206 306c-18.05-8.27-37.93-11.45-59-11.45-52 0-102.1 25.85-114.65 76.2-1.65 6.66 2.53 13.25 9.37 13.25H154' stroke-linecap='round' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var personCircleOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48m126.42 327.25a4 4 0 0 1-6.14-.32 124.3 124.3 0 0 0-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.2 124.2 0 0 0-32.35 29.58 4 4 0 0 1-6.14.32A175.32 175.32 0 0 1 80 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 0 1-46.68 119.25'/><path d='M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144'/></svg>";
var refreshOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='M320 146s24.36-12-64-12a160 160 0 1 0 160 160' stroke-linecap='round' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path d='m256 58 80 80-80 80' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var ribbonOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><circle cx='256' cy='160' r='128' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path d='M143.65 227.82 48 400l86.86-.42a16 16 0 0 1 13.82 7.8L192 480l88.33-194.32' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path d='M366.54 224 464 400l-86.86-.42a16 16 0 0 0-13.82 7.8L320 480l-64-140.8' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><circle cx='256' cy='160' r='64' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var settingsOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='M262.29 192.31a64 64 0 1 0 57.4 57.4 64.13 64.13 0 0 0-57.4-57.4M416.39 256a154 154 0 0 1-1.53 20.79l45.21 35.46a10.81 10.81 0 0 1 2.45 13.75l-42.77 74a10.81 10.81 0 0 1-13.14 4.59l-44.9-18.08a16.11 16.11 0 0 0-15.17 1.75A164.5 164.5 0 0 1 325 400.8a15.94 15.94 0 0 0-8.82 12.14l-6.73 47.89a11.08 11.08 0 0 1-10.68 9.17h-85.54a11.11 11.11 0 0 1-10.69-8.87l-6.72-47.82a16.07 16.07 0 0 0-9-12.22 155 155 0 0 1-21.46-12.57 16 16 0 0 0-15.11-1.71l-44.89 18.07a10.81 10.81 0 0 1-13.14-4.58l-42.77-74a10.8 10.8 0 0 1 2.45-13.75l38.21-30a16.05 16.05 0 0 0 6-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 0 0-6.07-13.94l-38.19-30A10.81 10.81 0 0 1 49.48 186l42.77-74a10.81 10.81 0 0 1 13.14-4.59l44.9 18.08a16.11 16.11 0 0 0 15.17-1.75A164.5 164.5 0 0 1 187 111.2a15.94 15.94 0 0 0 8.82-12.14l6.73-47.89A11.08 11.08 0 0 1 213.23 42h85.54a11.11 11.11 0 0 1 10.69 8.87l6.72 47.82a16.07 16.07 0 0 0 9 12.22 155 155 0 0 1 21.46 12.57 16 16 0 0 0 15.11 1.71l44.89-18.07a10.81 10.81 0 0 1 13.14 4.58l42.77 74a10.8 10.8 0 0 1-2.45 13.75l-38.21 30a16.05 16.05 0 0 0-6.05 14.08c.33 4.14.55 8.3.55 12.47' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var sunnyOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94' stroke-linecap='round' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><circle cx='256' cy='256' r='80' stroke-linecap='round' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var trophyOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='M176 464h160M256 464V336M384 224c0-50.64-.08-134.63-.12-160a16 16 0 0 0-16-16l-223.79.26a16 16 0 0 0-16 15.95c0 30.58-.13 129.17-.13 159.79 0 64.28 83 112 128 112S384 288.28 384 224' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path d='M128 96H48v16c0 55.22 33.55 112 80 112M384 96h80v16c0 55.22-33.55 112-80 112' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";

// src/app/custom-alert/custom-alert.component.ts
function CustomAlertComponent_Conditional_0_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 4);
  }
}
function CustomAlertComponent_Conditional_0_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 5);
  }
}
function CustomAlertComponent_Conditional_0_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 6);
  }
}
function CustomAlertComponent_Conditional_0_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 7);
  }
}
function CustomAlertComponent_Conditional_0_h3_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const options_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(options_r3.title);
  }
}
function CustomAlertComponent_Conditional_0_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function CustomAlertComponent_Conditional_0_button_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const options_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", options_r3.cancelText || "Cancel", " ");
  }
}
function CustomAlertComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function CustomAlertComponent_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("click", function CustomAlertComponent_Conditional_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 3);
    \u0275\u0275conditionalCreate(3, CustomAlertComponent_Conditional_0_Case_3_Template, 1, 0, "i", 4)(4, CustomAlertComponent_Conditional_0_Case_4_Template, 1, 0, "i", 5)(5, CustomAlertComponent_Conditional_0_Case_5_Template, 1, 0, "i", 6)(6, CustomAlertComponent_Conditional_0_Case_6_Template, 1, 0, "i", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 8);
    \u0275\u0275template(8, CustomAlertComponent_Conditional_0_h3_8_Template, 2, 1, "h3", 9);
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 10);
    \u0275\u0275template(12, CustomAlertComponent_Conditional_0_button_12_Template, 2, 1, "button", 11);
    \u0275\u0275elementStart(13, "button", 12);
    \u0275\u0275listener("click", function CustomAlertComponent_Conditional_0_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onConfirm());
    });
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const options_r3 = ctx;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", options_r3.type || "info");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_3_0 = options_r3.type) === "success" ? 3 : tmp_3_0 === "error" ? 4 : tmp_3_0 === "warning" ? 5 : 6);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", options_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(options_r3.message);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", options_r3.showCancel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", options_r3.confirmText || "OK", " ");
  }
}
var CustomAlertComponent = class _CustomAlertComponent {
  alertService = inject(AlertService);
  onConfirm() {
    this.alertService.onConfirm();
  }
  onCancel() {
    this.alertService.onCancel();
  }
  static \u0275fac = function CustomAlertComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CustomAlertComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomAlertComponent, selectors: [["app-custom-alert"]], decls: 1, vars: 1, consts: [[1, "alert-overlay"], [1, "alert-overlay", 3, "click"], [1, "alert-card", 3, "click", "ngClass"], [1, "alert-icon"], [1, "bi", "bi-check-circle-fill"], [1, "bi", "bi-x-circle-fill"], [1, "bi", "bi-exclamation-triangle-fill"], [1, "bi", "bi-info-circle-fill"], [1, "alert-content"], [4, "ngIf"], [1, "alert-actions"], ["class", "btn-cancel", 3, "click", 4, "ngIf"], [1, "btn-confirm", 3, "click"], [1, "btn-cancel", 3, "click"]], template: function CustomAlertComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, CustomAlertComponent_Conditional_0_Template, 15, 6, "div", 0);
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional((tmp_0_0 = ctx.alertService.alert) ? 0 : -1, tmp_0_0);
    }
  }, dependencies: [CommonModule, NgClass, NgIf], styles: ["\n\n.alert-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.7);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease-out;\n}\n.alert-card[_ngcontent-%COMP%] {\n  background: rgba(30, 41, 59, 0.8);\n  -webkit-backdrop-filter: blur(16px);\n  backdrop-filter: blur(16px);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 24px;\n  padding: 30px;\n  width: 100%;\n  max-width: 400px;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);\n  text-align: center;\n  transform: scale(1);\n  animation: _ngcontent-%COMP%_popIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.alert-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 20px;\n}\n.info[_ngcontent-%COMP%]   .alert-icon[_ngcontent-%COMP%] {\n  color: #3b82f6;\n}\n.success[_ngcontent-%COMP%]   .alert-icon[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.warning[_ngcontent-%COMP%]   .alert-icon[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.error[_ngcontent-%COMP%]   .alert-icon[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.alert-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 10px 0;\n  color: white;\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n.alert-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 25px 0;\n  color: #94a3b8;\n  font-size: 1.1rem;\n  line-height: 1.6;\n}\n.alert-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  justify-content: center;\n}\nbutton[_ngcontent-%COMP%] {\n  padding: 12px 30px;\n  border-radius: 14px;\n  font-weight: 600;\n  font-size: 1rem;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-confirm[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  color: white;\n  box-shadow: 0 4px 14px rgba(59, 130, 246, 0.4);\n}\n.btn-confirm[_ngcontent-%COMP%]:hover {\n  background: #2563eb;\n  transform: translateY(-2px);\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  color: #94a3b8;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: white;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_popIn {\n  from {\n    transform: scale(0.8);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=custom-alert.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomAlertComponent, [{
    type: Component,
    args: [{ selector: "app-custom-alert", standalone: true, imports: [CommonModule], template: `
    @if (alertService.alert; as options) {
      <div class="alert-overlay" (click)="onCancel()">
        <div class="alert-card" (click)="$event.stopPropagation()" [ngClass]="options.type || 'info'">
          <div class="alert-icon">
            @switch (options.type) {
              @case ('success') { <i class="bi bi-check-circle-fill"></i> }
              @case ('error') { <i class="bi bi-x-circle-fill"></i> }
              @case ('warning') { <i class="bi bi-exclamation-triangle-fill"></i> }
              @default { <i class="bi bi-info-circle-fill"></i> }
            }
          </div>
          <div class="alert-content">
            <h3 *ngIf="options.title">{{ options.title }}</h3>
            <p>{{ options.message }}</p>
          </div>
          <div class="alert-actions">
            <button *ngIf="options.showCancel" class="btn-cancel" (click)="onCancel()">
              {{ options.cancelText || 'Cancel' }}
            </button>
            <button class="btn-confirm" (click)="onConfirm()">
              {{ options.confirmText || 'OK' }}
            </button>
          </div>
        </div>
      </div>
    }
  `, styles: ["/* angular:styles/component:css;a4809b1a509c8c9a2c51c3230fe1ca5933a523bef632fde8f8857057fc2976df;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/custom-alert/custom-alert.component.ts */\n.alert-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.7);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  animation: fadeIn 0.3s ease-out;\n}\n.alert-card {\n  background: rgba(30, 41, 59, 0.8);\n  -webkit-backdrop-filter: blur(16px);\n  backdrop-filter: blur(16px);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 24px;\n  padding: 30px;\n  width: 100%;\n  max-width: 400px;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);\n  text-align: center;\n  transform: scale(1);\n  animation: popIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.alert-icon {\n  font-size: 3rem;\n  margin-bottom: 20px;\n}\n.info .alert-icon {\n  color: #3b82f6;\n}\n.success .alert-icon {\n  color: #10b981;\n}\n.warning .alert-icon {\n  color: #f59e0b;\n}\n.error .alert-icon {\n  color: #ef4444;\n}\n.alert-content h3 {\n  margin: 0 0 10px 0;\n  color: white;\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n.alert-content p {\n  margin: 0 0 25px 0;\n  color: #94a3b8;\n  font-size: 1.1rem;\n  line-height: 1.6;\n}\n.alert-actions {\n  display: flex;\n  gap: 15px;\n  justify-content: center;\n}\nbutton {\n  padding: 12px 30px;\n  border-radius: 14px;\n  font-weight: 600;\n  font-size: 1rem;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-confirm {\n  background: #3b82f6;\n  color: white;\n  box-shadow: 0 4px 14px rgba(59, 130, 246, 0.4);\n}\n.btn-confirm:hover {\n  background: #2563eb;\n  transform: translateY(-2px);\n}\n.btn-cancel {\n  background: rgba(255, 255, 255, 0.05);\n  color: #94a3b8;\n}\n.btn-cancel:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: white;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes popIn {\n  from {\n    transform: scale(0.8);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=custom-alert.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomAlertComponent, { className: "CustomAlertComponent", filePath: "src/app/custom-alert/custom-alert.component.ts", lineNumber: 117 });
})();

// src/app/connectivity.service.ts
var ConnectivityService = class _ConnectivityService {
  isOnline = signal(navigator.onLine, ...ngDevMode ? [{ debugName: "isOnline" }] : []);
  queue = [];
  constructor() {
    window.addEventListener("online", () => {
      this.isOnline.set(true);
      this.flushQueue();
    });
    window.addEventListener("offline", () => this.isOnline.set(false));
  }
  /**
   * Run `op` immediately if online; otherwise enqueue it for when connectivity returns.
   */
  async enqueueOp(op) {
    if (this.isOnline()) {
      await op().catch((err) => console.warn("[ConnectivityService] Op failed:", err));
    } else {
      this.queue.push(op);
    }
  }
  async flushQueue() {
    const pending = [...this.queue];
    this.queue = [];
    for (const op of pending) {
      await op().catch((err) => console.warn("[ConnectivityService] Flush op failed:", err));
    }
  }
  static \u0275fac = function ConnectivityService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConnectivityService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ConnectivityService, factory: _ConnectivityService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConnectivityService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

// src/app/shared/achievement-toast.component.ts
function AchievementToastComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 1)(1, "div", 2);
    \u0275\u0275domElement(2, "i", 3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 4)(4, "span", 5);
    \u0275\u0275text(5, "Achievement Unlocked!");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "span", 6);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(8, "button", 7);
    \u0275\u0275domListener("click", function AchievementToastComponent_Conditional_0_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dismiss());
    });
    \u0275\u0275text(9, "\u2715");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("toast-enter", ctx_r1.visible());
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.achievement().icon);
    \u0275\u0275styleProp("color", ctx_r1.achievement().iconColor);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.achievement().title);
  }
}
var AchievementToastComponent = class _AchievementToastComponent {
  achSvc = inject(AchievementService);
  cdr = inject(ChangeDetectorRef);
  visible = signal(false, ...ngDevMode ? [{ debugName: "visible" }] : []);
  achievement = this.achSvc.justUnlocked;
  timer = null;
  constructor() {
    effect(() => {
      const a = this.achSvc.justUnlocked();
      if (a) {
        this.visible.set(true);
        this.cdr.markForCheck();
        if (this.timer)
          clearTimeout(this.timer);
        this.timer = setTimeout(() => this.dismiss(), 4e3);
      }
    });
  }
  dismiss() {
    this.visible.set(false);
    this.achSvc.clearJustUnlocked();
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }
  static \u0275fac = function AchievementToastComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AchievementToastComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AchievementToastComponent, selectors: [["app-achievement-toast"]], decls: 1, vars: 1, consts: [[1, "ach-toast", 3, "toast-enter"], [1, "ach-toast"], [1, "ach-icon-wrap"], [1, "bi"], [1, "ach-text"], [1, "ach-label"], [1, "ach-title"], [1, "ach-close", 3, "click"]], template: function AchievementToastComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, AchievementToastComponent_Conditional_0_Template, 10, 7, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.visible() ? 0 : -1);
    }
  }, styles: ["\n\n.ach-toast[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 20px;\n  right: 16px;\n  z-index: 99999;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #1a2332;\n  border: 1.5px solid rgba(212, 168, 83, 0.4);\n  border-radius: 16px;\n  padding: 12px 16px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);\n  min-width: 240px;\n  max-width: 320px;\n  animation: _ngcontent-%COMP%_slideIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    transform: translateX(120%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n.ach-icon-wrap[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.06);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.ach-icon-wrap[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\n.ach-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  flex: 1;\n}\n.ach-label[_ngcontent-%COMP%] {\n  font-size: 0.62rem;\n  font-weight: 800;\n  color: #d4a853;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n.ach-title[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: #e2e8f0;\n}\n.ach-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #64748b;\n  font-size: 0.8rem;\n  cursor: pointer;\n  padding: 0 0 0 4px;\n  flex-shrink: 0;\n}\n.ach-close[_ngcontent-%COMP%]:hover {\n  color: #94a3b8;\n}\n/*# sourceMappingURL=achievement-toast.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AchievementToastComponent, [{
    type: Component,
    args: [{ selector: "app-achievement-toast", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `
    @if (visible()) {
      <div class="ach-toast" [class.toast-enter]="visible()">
        <div class="ach-icon-wrap">
          <i class="bi" [class]="achievement()!.icon"
             [style.color]="achievement()!.iconColor"></i>
        </div>
        <div class="ach-text">
          <span class="ach-label">Achievement Unlocked!</span>
          <span class="ach-title">{{ achievement()!.title }}</span>
        </div>
        <button class="ach-close" (click)="dismiss()">\u2715</button>
      </div>
    }
  `, styles: ["/* angular:styles/component:css;ca28bfc67b5e06a6a42310abe9365aea6d41bf3ec9ad34bc66fe9477dad6602c;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/shared/achievement-toast.component.ts */\n.ach-toast {\n  position: fixed;\n  top: 20px;\n  right: 16px;\n  z-index: 99999;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #1a2332;\n  border: 1.5px solid rgba(212, 168, 83, 0.4);\n  border-radius: 16px;\n  padding: 12px 16px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);\n  min-width: 240px;\n  max-width: 320px;\n  animation: slideIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;\n}\n@keyframes slideIn {\n  from {\n    transform: translateX(120%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n.ach-icon-wrap {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.06);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.ach-icon-wrap .bi {\n  font-size: 1.3rem;\n}\n.ach-text {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  flex: 1;\n}\n.ach-label {\n  font-size: 0.62rem;\n  font-weight: 800;\n  color: #d4a853;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n.ach-title {\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: #e2e8f0;\n}\n.ach-close {\n  background: none;\n  border: none;\n  color: #64748b;\n  font-size: 0.8rem;\n  cursor: pointer;\n  padding: 0 0 0 4px;\n  flex-shrink: 0;\n}\n.ach-close:hover {\n  color: #94a3b8;\n}\n/*# sourceMappingURL=achievement-toast.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AchievementToastComponent, { className: "AchievementToastComponent", filePath: "src/app/shared/achievement-toast.component.ts", lineNumber: 97 });
})();

// src/app/shared/whats-new.component.ts
var _forTrack0 = ($index, $item) => $item.title;
function WhatsNewComponent_Conditional_0_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 8)(1, "span", 10);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 11)(4, "span", 12);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "span", 13);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const h_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(h_r3.emoji);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(h_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(h_r3.desc);
  }
}
function WhatsNewComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 0);
    \u0275\u0275domListener("click", function WhatsNewComponent_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dismiss());
    });
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(1, "div", 1);
    \u0275\u0275domElement(2, "div", 2);
    \u0275\u0275domElementStart(3, "div", 3)(4, "span", 4);
    \u0275\u0275text(5, "\u2728");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "div")(7, "h2", 5);
    \u0275\u0275text(8, "What's New in JavaIQ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "p", 6);
    \u0275\u0275text(10, "Version 1.3 \xB7 24-week journey complete");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(11, "div", 7);
    \u0275\u0275repeaterCreate(12, WhatsNewComponent_Conditional_0_For_13_Template, 8, 3, "div", 8, _forTrack0);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(14, "button", 9);
    \u0275\u0275domListener("click", function WhatsNewComponent_Conditional_0_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dismiss());
    });
    \u0275\u0275text(15, "Got it \u2014 Let's Go!");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275repeater(ctx_r1.highlights);
  }
}
var SEEN_KEY = "whats_new_seen_v1.3";
var HIGHLIGHTS = [
  { emoji: "\u{1F3AF}", title: "Mock Interview Mode", desc: "Timed flashcard sessions across any topic with XP rewards." },
  { emoji: "\u{1F4CA}", title: "Progress Dashboard", desc: "Category mastery bars, 7-day activity grid, and weak areas." },
  { emoji: "\u{1F501}", title: "Review Queue", desc: "Spaced-repetition flashcards for questions you've missed." },
  { emoji: "\u{1F4C5}", title: "Adaptive Study Plan", desc: "Goal-based daily tasks that evolve as your streak grows." },
  { emoji: "\u{1F3C5}", title: "Achievements & Badges", desc: "Unlock 10 milestones and share them with your network." },
  { emoji: "\u{1F4DC}", title: "Course Certificates", desc: "Print-ready certificates when you complete a category." },
  { emoji: "\u{1F514}", title: "Smart Reminders", desc: "Daily streak notifications at your chosen time." },
  { emoji: "\u{1F310}", title: "Offline Resilience", desc: "Writes queue and flush automatically when you're back online." }
];
var WhatsNewComponent = class _WhatsNewComponent {
  highlights = HIGHLIGHTS;
  visible = signal(false, ...ngDevMode ? [{ debugName: "visible" }] : []);
  constructor() {
    if (!localStorage.getItem(SEEN_KEY)) {
      setTimeout(() => this.visible.set(true), 1200);
    }
  }
  dismiss() {
    localStorage.setItem(SEEN_KEY, "1");
    this.visible.set(false);
  }
  static \u0275fac = function WhatsNewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WhatsNewComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WhatsNewComponent, selectors: [["app-whats-new"]], decls: 1, vars: 1, consts: [[1, "wn-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-label", "What's New", 1, "wn-sheet"], [1, "wn-handle"], [1, "wn-header"], [1, "wn-sparkle"], [1, "wn-title"], [1, "wn-version"], [1, "wn-list"], [1, "wn-item"], [1, "wn-btn", 3, "click"], [1, "wn-emoji"], [1, "wn-item-text"], [1, "wn-item-title"], [1, "wn-item-desc"]], template: function WhatsNewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, WhatsNewComponent_Conditional_0_Template, 16, 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.visible() ? 0 : -1);
    }
  }, dependencies: [CommonModule], styles: ["\n\n.wn-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.6);\n  backdrop-filter: blur(4px);\n  -webkit-backdrop-filter: blur(4px);\n  z-index: 9000;\n  animation: _ngcontent-%COMP%_fadein 0.25s ease;\n}\n.wn-sheet[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 9001;\n  background: #111827;\n  border-radius: 24px 24px 0 0;\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n  padding: 12px 20px 48px;\n  max-height: 88vh;\n  overflow-y: auto;\n  animation: _ngcontent-%COMP%_slideup 0.35s cubic-bezier(0.4, 0, 0.2, 1);\n}\n@keyframes _ngcontent-%COMP%_fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideup {\n  from {\n    transform: translateY(100%);\n  }\n  to {\n    transform: translateY(0);\n  }\n}\n.wn-handle[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 4px;\n  border-radius: 2px;\n  background: rgba(255, 255, 255, 0.12);\n  margin: 0 auto 20px;\n}\n.wn-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  margin-bottom: 20px;\n}\n.wn-sparkle[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.wn-title[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 900;\n  color: #e2e8f0;\n  letter-spacing: -0.02em;\n  margin: 0 0 4px;\n}\n.wn-version[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #64748b;\n  margin: 0;\n}\n.wn-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-bottom: 28px;\n}\n.wn-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n}\n.wn-emoji[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  flex-shrink: 0;\n  width: 32px;\n  text-align: center;\n  margin-top: 1px;\n}\n.wn-item-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.wn-item-title[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: #e2e8f0;\n}\n.wn-item-desc[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  color: #64748b;\n  line-height: 1.5;\n}\n.wn-btn[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 15px;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  border: none;\n  color: white;\n  font-size: 1rem;\n  font-weight: 700;\n  cursor: pointer;\n  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);\n  transition: all 0.2s;\n}\n.wn-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 28px rgba(99, 102, 241, 0.5);\n}\n/*# sourceMappingURL=whats-new.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WhatsNewComponent, [{
    type: Component,
    args: [{ selector: "app-whats-new", changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, imports: [CommonModule], template: `
    @if (visible()) {
      <!-- Backdrop -->
      <div class="wn-backdrop" (click)="dismiss()"></div>

      <!-- Sheet -->
      <div class="wn-sheet" role="dialog" aria-modal="true" aria-label="What's New">
        <div class="wn-handle"></div>

        <div class="wn-header">
          <span class="wn-sparkle">\u2728</span>
          <div>
            <h2 class="wn-title">What's New in JavaIQ</h2>
            <p class="wn-version">Version 1.3 \xB7 24-week journey complete</p>
          </div>
        </div>

        <div class="wn-list">
          @for (h of highlights; track h.title) {
            <div class="wn-item">
              <span class="wn-emoji">{{ h.emoji }}</span>
              <div class="wn-item-text">
                <span class="wn-item-title">{{ h.title }}</span>
                <span class="wn-item-desc">{{ h.desc }}</span>
              </div>
            </div>
          }
        </div>

        <button class="wn-btn" (click)="dismiss()">Got it \u2014 Let's Go!</button>
      </div>
    }
  `, styles: ["/* angular:styles/component:css;4a24e7364f475af083d96b5b2011ba8aacb88f707260a57163c635d482f9b0c0;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/shared/whats-new.component.ts */\n.wn-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.6);\n  backdrop-filter: blur(4px);\n  -webkit-backdrop-filter: blur(4px);\n  z-index: 9000;\n  animation: fadein 0.25s ease;\n}\n.wn-sheet {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 9001;\n  background: #111827;\n  border-radius: 24px 24px 0 0;\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n  padding: 12px 20px 48px;\n  max-height: 88vh;\n  overflow-y: auto;\n  animation: slideup 0.35s cubic-bezier(0.4, 0, 0.2, 1);\n}\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes slideup {\n  from {\n    transform: translateY(100%);\n  }\n  to {\n    transform: translateY(0);\n  }\n}\n.wn-handle {\n  width: 40px;\n  height: 4px;\n  border-radius: 2px;\n  background: rgba(255, 255, 255, 0.12);\n  margin: 0 auto 20px;\n}\n.wn-header {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  margin-bottom: 20px;\n}\n.wn-sparkle {\n  font-size: 2rem;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.wn-title {\n  font-size: 1.2rem;\n  font-weight: 900;\n  color: #e2e8f0;\n  letter-spacing: -0.02em;\n  margin: 0 0 4px;\n}\n.wn-version {\n  font-size: 0.72rem;\n  color: #64748b;\n  margin: 0;\n}\n.wn-list {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-bottom: 28px;\n}\n.wn-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n}\n.wn-emoji {\n  font-size: 1.4rem;\n  flex-shrink: 0;\n  width: 32px;\n  text-align: center;\n  margin-top: 1px;\n}\n.wn-item-text {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.wn-item-title {\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: #e2e8f0;\n}\n.wn-item-desc {\n  font-size: 0.74rem;\n  color: #64748b;\n  line-height: 1.5;\n}\n.wn-btn {\n  display: block;\n  width: 100%;\n  padding: 15px;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  border: none;\n  color: white;\n  font-size: 1rem;\n  font-weight: 700;\n  cursor: pointer;\n  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);\n  transition: all 0.2s;\n}\n.wn-btn:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 28px rgba(99, 102, 241, 0.5);\n}\n/*# sourceMappingURL=whats-new.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WhatsNewComponent, { className: "WhatsNewComponent", filePath: "src/app/shared/whats-new.component.ts", lineNumber: 123 });
})();

// src/app/app.component.ts
function AppComponent_Conditional_142_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275element(1, "i", 61);
    \u0275\u0275text(2, " You're offline. Progress will sync when connected. ");
    \u0275\u0275elementEnd();
  }
}
function AppComponent_Conditional_143_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nav", 60)(1, "a", 62);
    \u0275\u0275element(2, "i", 63);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Home");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "a", 64);
    \u0275\u0275element(6, "i", 65);
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "Learn");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "a", 66)(10, "div", 67);
    \u0275\u0275element(11, "i", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13, "Practice");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "a", 69);
    \u0275\u0275element(15, "i", 70);
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17, "Progress");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "button", 71);
    \u0275\u0275listener("click", function AppComponent_Conditional_143_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openMenu());
    });
    \u0275\u0275element(19, "i", 72);
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21, "More");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.isTab("/dashboard"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r1.isTab("/tutorials") || ctx_r1.isTab("/interview-questions") || ctx_r1.isTab("/coding-questions") || ctx_r1.isTab("/leetcode") || ctx_r1.isTab("/experiences"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r1.isTab("/daily-challenge") || ctx_r1.isTab("/assessments"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("active", ctx_r1.isTab("/progress") || ctx_r1.isTab("/leaderboard") || ctx_r1.isTab("/achievements"));
  }
}
var AppComponent = class _AppComponent {
  title = "JavaIQ";
  themeService = inject(ThemeService);
  connectivity = inject(ConnectivityService);
  adMobService = inject(AdMobService);
  router = inject(Router);
  menuCtrl = inject(MenuController);
  navUrl = toSignal(this.router.events.pipe(filter((e) => e instanceof NavigationEnd), map((e) => e.urlAfterRedirects)), { initialValue: this.router.url });
  showBottomNav = computed(() => {
    const url = this.navUrl() ?? "";
    return !url.startsWith("/onboarding") && !url.startsWith("/challenge/") && !url.startsWith("/certificate");
  }, ...ngDevMode ? [{ debugName: "showBottomNav" }] : []);
  isTab(path) {
    return (this.navUrl() ?? "").startsWith(path);
  }
  openMenu() {
    this.menuCtrl.open("main-menu");
  }
  constructor() {
    addIcons({
      bookOutline,
      chatbubblesOutline,
      codeSlashOutline,
      trophyOutline,
      clipboardOutline,
      peopleOutline,
      moonOutline,
      sunnyOutline,
      personCircleOutline,
      homeOutline,
      ribbonOutline,
      bookmarkOutline,
      settingsOutline,
      calendarOutline,
      briefcaseOutline,
      barChartOutline,
      refreshOutline
    });
    this.adMobService.showBanner();
    this.checkFirstLaunch();
    effect(() => {
      if (this.showBottomNav()) {
        document.documentElement.classList.add("has-bnav");
      } else {
        document.documentElement.classList.remove("has-bnav");
      }
    });
  }
  checkFirstLaunch() {
    if (!localStorage.getItem("onboarding_done")) {
      this.router.navigate(["/onboarding"], { replaceUrl: true });
    }
  }
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 147, vars: 5, consts: [["menuId", "main-menu", "contentId", "main-content", "type", "overlay"], [1, "ion-no-border"], [1, "menu-header"], [1, "header-glow", "header-glow-1"], [1, "header-glow", "header-glow-2"], [1, "header-bg"], [1, "header-inner"], [1, "header-logo"], [1, "profile-preview"], [1, "avatar"], [1, "profile-info"], [1, "user-name"], [1, "user-level"], [1, "menu-content"], [1, "menu-nav"], [1, "nav-label"], ["lines", "none", 1, "menu-list"], ["auto-hide", "false"], ["routerLink", "/dashboard", "routerLinkActive", "selected", "detail", "false", 1, "nav-item"], ["slot", "start", 1, "icon-box"], ["name", "home-outline"], [1, "active-indicator"], ["routerLink", "/tutorials", "routerLinkActive", "selected", "detail", "false", 1, "nav-item"], ["name", "book-outline"], ["routerLink", "/interview-questions", "routerLinkActive", "selected", "detail", "false", 1, "nav-item"], ["name", "chatbubbles-outline"], ["routerLink", "/coding-questions", "routerLinkActive", "selected", "detail", "false", 1, "nav-item"], ["name", "code-slash-outline"], ["routerLink", "/leetcode", "routerLinkActive", "selected", "detail", "false", 1, "nav-item"], ["name", "trophy-outline"], ["routerLink", "/assessments", "routerLinkActive", "selected", "detail", "false", 1, "nav-item"], ["name", "clipboard-outline"], ["routerLink", "/experiences", "routerLinkActive", "selected", "detail", "false", 1, "nav-item"], ["name", "people-outline"], ["routerLink", "/study-plan", "routerLinkActive", "selected", "detail", "false", 1, "nav-item"], ["name", "calendar-outline"], ["routerLink", "/mock-interview", "routerLinkActive", "selected", "detail", "false", 1, "nav-item"], ["name", "briefcase-outline"], ["routerLink", "/progress", "routerLinkActive", "selected", "detail", "false", 1, "nav-item"], ["name", "bar-chart-outline"], ["routerLink", "/review", "routerLinkActive", "selected", "detail", "false", 1, "nav-item"], ["name", "refresh-outline"], ["routerLink", "/bookmarks", "routerLinkActive", "selected", "detail", "false", 1, "nav-item"], ["name", "bookmark-outline"], ["routerLink", "/settings", "routerLinkActive", "selected", "detail", "false", 1, "nav-item"], ["name", "settings-outline"], ["routerLink", "/achievements", "routerLinkActive", "selected", "detail", "false", 1, "nav-item"], ["name", "ribbon-outline"], [1, "nav-divider"], ["routerLink", "/about", "routerLinkActive", "selected", "detail", "false", 1, "nav-item"], ["name", "person-circle-outline"], [1, "menu-footer"], [1, "theme-row"], [1, "theme-icon", 3, "name"], [1, "theme-label"], ["mode", "ios", 1, "theme-toggle", 3, "ionChange", "checked"], [1, "version"], [1, "footer-brand"], ["id", "main-content"], [1, "offline-banner"], ["role", "tablist", "aria-label", "Main navigation", 1, "bottom-nav"], [1, "bi", "bi-wifi-off"], ["routerLink", "/dashboard", "role", "tab", "aria-label", "Home", 1, "bnav-tab"], [1, "fa-solid", "fa-house"], ["routerLink", "/tutorials", "role", "tab", "aria-label", "Learn", 1, "bnav-tab"], [1, "fa-solid", "fa-book-open"], ["routerLink", "/daily-challenge", "role", "tab", "aria-label", "Practice", 1, "bnav-tab", "bnav-center"], [1, "bnav-center-pill"], [1, "fa-solid", "fa-bolt"], ["routerLink", "/progress", "role", "tab", "aria-label", "Progress", 1, "bnav-tab"], [1, "fa-solid", "fa-chart-simple"], ["role", "tab", "aria-label", "More options", 1, "bnav-tab", 3, "click"], [1, "fa-solid", "fa-bars"]], template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-app")(1, "ion-menu", 0)(2, "ion-header", 1)(3, "div", 2);
      \u0275\u0275element(4, "div", 3)(5, "div", 4)(6, "div", 5);
      \u0275\u0275elementStart(7, "div", 6)(8, "h1", 7);
      \u0275\u0275text(9, "JavaIQ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 8)(11, "div", 9);
      \u0275\u0275text(12, "\u2615");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 10)(14, "span", 11);
      \u0275\u0275text(15, "Java Learner");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "span", 12);
      \u0275\u0275text(17, "Beginner Explorer");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(18, "ion-content", 13)(19, "div", 14)(20, "span", 15);
      \u0275\u0275text(21, "LEARNING PATHS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "ion-list", 16)(23, "ion-menu-toggle", 17)(24, "ion-item", 18)(25, "div", 19);
      \u0275\u0275element(26, "ion-icon", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "ion-label");
      \u0275\u0275text(28, "Dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275element(29, "div", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "ion-menu-toggle", 17)(31, "ion-item", 22)(32, "div", 19);
      \u0275\u0275element(33, "ion-icon", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "ion-label");
      \u0275\u0275text(35, "Tutorials");
      \u0275\u0275elementEnd();
      \u0275\u0275element(36, "div", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "ion-menu-toggle", 17)(38, "ion-item", 24)(39, "div", 19);
      \u0275\u0275element(40, "ion-icon", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "ion-label");
      \u0275\u0275text(42, "Interview Questions");
      \u0275\u0275elementEnd();
      \u0275\u0275element(43, "div", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "ion-menu-toggle", 17)(45, "ion-item", 26)(46, "div", 19);
      \u0275\u0275element(47, "ion-icon", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "ion-label");
      \u0275\u0275text(49, "Coding Questions");
      \u0275\u0275elementEnd();
      \u0275\u0275element(50, "div", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "ion-menu-toggle", 17)(52, "ion-item", 28)(53, "div", 19);
      \u0275\u0275element(54, "ion-icon", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "ion-label");
      \u0275\u0275text(56, "LeetCode");
      \u0275\u0275elementEnd();
      \u0275\u0275element(57, "div", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "ion-menu-toggle", 17)(59, "ion-item", 30)(60, "div", 19);
      \u0275\u0275element(61, "ion-icon", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "ion-label");
      \u0275\u0275text(63, "Assessments");
      \u0275\u0275elementEnd();
      \u0275\u0275element(64, "div", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "ion-menu-toggle", 17)(66, "ion-item", 32)(67, "div", 19);
      \u0275\u0275element(68, "ion-icon", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "ion-label");
      \u0275\u0275text(70, "Interview Stories");
      \u0275\u0275elementEnd();
      \u0275\u0275element(71, "div", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "ion-menu-toggle", 17)(73, "ion-item", 34)(74, "div", 19);
      \u0275\u0275element(75, "ion-icon", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "ion-label");
      \u0275\u0275text(77, "Study Plan");
      \u0275\u0275elementEnd();
      \u0275\u0275element(78, "div", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "ion-menu-toggle", 17)(80, "ion-item", 36)(81, "div", 19);
      \u0275\u0275element(82, "ion-icon", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "ion-label");
      \u0275\u0275text(84, "Mock Interview");
      \u0275\u0275elementEnd();
      \u0275\u0275element(85, "div", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "ion-menu-toggle", 17)(87, "ion-item", 38)(88, "div", 19);
      \u0275\u0275element(89, "ion-icon", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "ion-label");
      \u0275\u0275text(91, "My Progress");
      \u0275\u0275elementEnd();
      \u0275\u0275element(92, "div", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "ion-menu-toggle", 17)(94, "ion-item", 40)(95, "div", 19);
      \u0275\u0275element(96, "ion-icon", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "ion-label");
      \u0275\u0275text(98, "Review Queue");
      \u0275\u0275elementEnd();
      \u0275\u0275element(99, "div", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(100, "ion-menu-toggle", 17)(101, "ion-item", 42)(102, "div", 19);
      \u0275\u0275element(103, "ion-icon", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "ion-label");
      \u0275\u0275text(105, "Saved");
      \u0275\u0275elementEnd();
      \u0275\u0275element(106, "div", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(107, "ion-menu-toggle", 17)(108, "ion-item", 44)(109, "div", 19);
      \u0275\u0275element(110, "ion-icon", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "ion-label");
      \u0275\u0275text(112, "Settings");
      \u0275\u0275elementEnd();
      \u0275\u0275element(113, "div", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(114, "ion-menu-toggle", 17)(115, "ion-item", 46)(116, "div", 19);
      \u0275\u0275element(117, "ion-icon", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "ion-label");
      \u0275\u0275text(119, "Achievements");
      \u0275\u0275elementEnd();
      \u0275\u0275element(120, "div", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(121, "div", 48);
      \u0275\u0275elementStart(122, "ion-menu-toggle", 17)(123, "ion-item", 49)(124, "div", 19);
      \u0275\u0275element(125, "ion-icon", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "ion-label");
      \u0275\u0275text(127, "About Developer");
      \u0275\u0275elementEnd();
      \u0275\u0275element(128, "div", 21);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(129, "ion-footer", 1)(130, "div", 51)(131, "div", 52);
      \u0275\u0275element(132, "ion-icon", 53);
      \u0275\u0275elementStart(133, "span", 54);
      \u0275\u0275text(134);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "ion-toggle", 55);
      \u0275\u0275listener("ionChange", function AppComponent_Template_ion_toggle_ionChange_135_listener() {
        return ctx.themeService.toggle();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(136, "span", 56);
      \u0275\u0275text(137, "v1.4.0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "span", 57);
      \u0275\u0275text(139, "Built with \u2764\uFE0F for Java developers");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(140, "div", 58);
      \u0275\u0275element(141, "ion-router-outlet");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(142, AppComponent_Conditional_142_Template, 3, 0, "div", 59);
      \u0275\u0275conditionalCreate(143, AppComponent_Conditional_143_Template, 22, 8, "nav", 60);
      \u0275\u0275element(144, "app-custom-alert")(145, "app-achievement-toast")(146, "app-whats-new");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(132);
      \u0275\u0275property("name", ctx.themeService.theme() === "dark" ? "moon-outline" : "sunny-outline");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.themeService.theme() === "dark" ? "Dark Mode" : "Light Mode");
      \u0275\u0275advance();
      \u0275\u0275property("checked", ctx.themeService.theme() === "dark");
      \u0275\u0275advance(7);
      \u0275\u0275conditional(!ctx.connectivity.isOnline() ? 142 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showBottomNav() ? 143 : -1);
    }
  }, dependencies: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    IonApp,
    IonRouterOutlet,
    IonMenu,
    IonHeader,
    IonContent,
    IonList,
    IonItem,
    IonIcon,
    IonLabel,
    IonMenuToggle,
    IonFooter,
    IonToggle,
    CustomAlertComponent,
    AchievementToastComponent,
    WhatsNewComponent
  ], styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap";\n\n\n\n#main-content[_ngcontent-%COMP%] {\n  height: 100%;\n}\nion-menu[_ngcontent-%COMP%]::part(container) {\n  background: #0b1120;\n  border-right: 1px solid rgba(255, 255, 255, 0.06);\n}\nion-menu[_ngcontent-%COMP%]::part(backdrop) {\n  background: rgba(0, 0, 0, 0.7);\n  backdrop-filter: blur(4px);\n  -webkit-backdrop-filter: blur(4px);\n}\n.menu-header[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 56px 20px 24px;\n  overflow: hidden;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n}\n.header-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      145deg,\n      #0b1120 0%,\n      #161b22 100%);\n  z-index: 0;\n}\n.header-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  filter: blur(40px);\n  z-index: 0;\n}\n.header-glow-1[_ngcontent-%COMP%] {\n  top: -40px;\n  right: -20px;\n  width: 150px;\n  height: 150px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(139, 92, 246, 0.15) 0%,\n      transparent 70%);\n}\n.header-glow-2[_ngcontent-%COMP%] {\n  bottom: -20px;\n  left: -20px;\n  width: 120px;\n  height: 120px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(16, 185, 129, 0.12) 0%,\n      transparent 70%);\n}\n.header-inner[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.header-logo[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 1.8rem;\n  font-weight: 900;\n  background:\n    linear-gradient(\n      135deg,\n      #8b5cf6 0%,\n      #a78bfa 50%,\n      #c4b5fd 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  margin: 0 0 20px;\n  letter-spacing: -0.04em;\n}\n.profile-preview[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 16px;\n  transition: all 0.2s ease;\n}\n.profile-preview[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  border-color: rgba(255, 255, 255, 0.1);\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  background: rgba(139, 92, 246, 0.15);\n  border: 1px solid rgba(139, 92, 246, 0.3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n}\n.profile-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #e2e8f0;\n}\n.user-level[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: #94a3b8;\n}\n.menu-content[_ngcontent-%COMP%] {\n  --background: #0b1120;\n}\n.menu-nav[_ngcontent-%COMP%] {\n  padding: 24px 16px;\n}\n.nav-label[_ngcontent-%COMP%] {\n  display: block;\n  font-family: "Inter", sans-serif;\n  font-size: 0.75rem;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  color: #64748b;\n  margin-bottom: 16px;\n  padding-left: 12px;\n}\n.menu-list[_ngcontent-%COMP%] {\n  background: transparent;\n}\n.nav-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: rgba(255, 255, 255, 0.06);\n  margin: 8px 12px;\n}\n.nav-item[_ngcontent-%COMP%] {\n  --background: transparent;\n  --padding-start: 12px;\n  --inner-padding-end: 12px;\n  --border-radius: 12px;\n  --color: #94a3b8;\n  margin-bottom: 6px;\n  font-family: "Inter", sans-serif;\n  font-weight: 600;\n  font-size: 0.9rem;\n  transition: all 0.2s;\n  position: relative;\n}\n.nav-item[_ngcontent-%COMP%]::part(native):hover {\n  background: rgba(255, 255, 255, 0.04);\n  color: #e2e8f0;\n}\n.icon-box[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 12px;\n  transition: all 0.2s;\n}\nion-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #64748b;\n  transition: all 0.2s;\n}\n.nav-item[_ngcontent-%COMP%]::part(native):hover   ion-icon[_ngcontent-%COMP%] {\n  color: #a78bfa;\n}\n.nav-item.selected[_ngcontent-%COMP%] {\n  --color: #e2e8f0;\n  --background: rgba(139,92,246,0.1);\n}\n.nav-item.selected[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%] {\n  background: rgba(139, 92, 246, 0.2);\n  border-color: rgba(139, 92, 246, 0.4);\n}\n.nav-item.selected[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #c4b5fd;\n}\n.active-indicator[_ngcontent-%COMP%] {\n  width: 3px;\n  height: 20px;\n  background: #8b5cf6;\n  border-radius: 4px;\n  position: absolute;\n  right: 0;\n  opacity: 0;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  transform: scaleY(0);\n}\n.nav-item.selected[_ngcontent-%COMP%]   .active-indicator[_ngcontent-%COMP%] {\n  opacity: 1;\n  right: 10px;\n  transform: scaleY(1);\n}\n.menu-footer[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: #0b1120;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n  align-items: center;\n  text-align: center;\n}\n.theme-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 10px 0 14px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n  margin-bottom: 10px;\n}\n.theme-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #94a3b8;\n  flex-shrink: 0;\n}\n.theme-label[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #94a3b8;\n  flex: 1;\n}\n.theme-toggle[_ngcontent-%COMP%] {\n  --background: #334155;\n  --background-checked: #8b5cf6;\n  --handle-background: #fff;\n  --handle-background-checked: #fff;\n  --border-radius: 12px;\n  --handle-border-radius: 10px;\n  --handle-spacing: 2px;\n  --handle-width: 18px;\n  --handle-height: 18px;\n  height: 22px;\n  min-height: unset;\n}\n.version[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #475569;\n}\n.footer-brand[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #64748b;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .menu-content[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .menu-content[_ngcontent-%COMP%] {\n  --background: #ffffff;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .menu-header[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .menu-header[_ngcontent-%COMP%] {\n  border-bottom-color: #D6DDD2;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .header-bg[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .header-bg[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      #ffffff 0%,\n      #F5F7F2 100%);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .header-glow-1[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .header-glow-1[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      circle,\n      rgba(27, 67, 50, 0.06) 0%,\n      transparent 70%);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .header-glow-2[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .header-glow-2[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      circle,\n      rgba(64, 145, 108, 0.05) 0%,\n      transparent 70%);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .header-logo[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .header-logo[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1B4332 0%,\n      #2D6A4F 50%,\n      #40916C 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .profile-preview[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .profile-preview[_ngcontent-%COMP%] {\n  background: rgba(27, 67, 50, 0.04);\n  border-color: #D6DDD2;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .profile-preview[_ngcontent-%COMP%]:hover, html:not(.dark)   [_nghost-%COMP%]   .profile-preview[_ngcontent-%COMP%]:hover {\n  background: rgba(27, 67, 50, 0.08);\n  border-color: #B7CCBB;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .avatar[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  background: rgba(27, 67, 50, 0.08);\n  border-color: rgba(27, 67, 50, 0.2);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .user-name[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  color: #1B1B1B;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .user-level[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .user-level[_ngcontent-%COMP%] {\n  color: #52665A;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .nav-label[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .nav-label[_ngcontent-%COMP%] {\n  color: #8A9B8F;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .nav-divider[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .nav-divider[_ngcontent-%COMP%] {\n  background: #E8EDE5;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .nav-item[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  --color: #52665A;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .nav-item[_ngcontent-%COMP%]::part(native):hover, html:not(.dark)   [_nghost-%COMP%]   .nav-item[_ngcontent-%COMP%]::part(native):hover {\n  background: rgba(27, 67, 50, 0.06);\n  color: #1B1B1B;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .nav-item[_ngcontent-%COMP%]::part(native):hover   ion-icon[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .nav-item[_ngcontent-%COMP%]::part(native):hover   ion-icon[_ngcontent-%COMP%] {\n  color: #1B4332;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .icon-box[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .icon-box[_ngcontent-%COMP%] {\n  background: rgba(27, 67, 50, 0.05);\n  border-color: #D6DDD2;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .icon-box[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .icon-box[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #8A9B8F;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .nav-item.selected[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .nav-item.selected[_ngcontent-%COMP%] {\n  --color: #1B4332;\n  --background: rgba(27,67,50,0.08);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .nav-item.selected[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .nav-item.selected[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%] {\n  background: rgba(27, 67, 50, 0.12);\n  border-color: rgba(27, 67, 50, 0.25);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .nav-item.selected[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .nav-item.selected[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #1B4332;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .active-indicator[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .active-indicator[_ngcontent-%COMP%] {\n  background: #1B4332;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .menu-footer[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .menu-footer[_ngcontent-%COMP%] {\n  background: #F5F7F2;\n  border-top-color: #D6DDD2;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .theme-row[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .theme-row[_ngcontent-%COMP%] {\n  border-bottom-color: #D6DDD2;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .theme-icon[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .theme-icon[_ngcontent-%COMP%] {\n  color: #1B4332;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .theme-label[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .theme-label[_ngcontent-%COMP%] {\n  color: #1B1B1B;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .theme-toggle[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .theme-toggle[_ngcontent-%COMP%] {\n  --background: #D6DDD2;\n  --background-checked: #1B4332;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .version[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .version[_ngcontent-%COMP%] {\n  color: #8A9B8F;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .footer-brand[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .footer-brand[_ngcontent-%COMP%] {\n  color: #52665A;\n}\n.offline-banner[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 99999;\n  background: #b45309;\n  color: #fff;\n  font-size: 0.875rem;\n  font-weight: 600;\n  text-align: center;\n  padding: 8px 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  letter-spacing: 0.01em;\n  animation: _ngcontent-%COMP%_slideDown 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    transform: translateY(-100%);\n  }\n  to {\n    transform: translateY(0);\n  }\n}\n.bottom-nav[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 200;\n  display: flex;\n  align-items: stretch;\n  height: calc(60px + env(safe-area-inset-bottom, 0px));\n  padding-bottom: env(safe-area-inset-bottom, 0px);\n  background: #ffffff;\n  border-top: 1px solid #D6DDD2;\n  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.06);\n}\n.bnav-tab[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 3px;\n  text-decoration: none;\n  color: #94A3B8;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-family: "Inter", sans-serif;\n  transition: color 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n  padding: 0;\n  position: relative;\n}\n.bnav-tab[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  line-height: 1;\n  transition: transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.bnav-tab[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 600;\n  letter-spacing: 0.01em;\n  line-height: 1;\n}\n.bnav-tab.active[_ngcontent-%COMP%] {\n  color: #1B4332;\n}\n.bnav-tab.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  transform: scale(1.12);\n}\n.bnav-tab.active[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 32px;\n  height: 2px;\n  background: #1B4332;\n  border-radius: 0 0 4px 4px;\n}\n.bnav-center[_ngcontent-%COMP%] {\n  position: relative;\n}\n.bnav-center-pill[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 32px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #1B4332,\n      #2D6A4F);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 12px rgba(27, 67, 50, 0.35);\n  transition: transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.15s ease;\n}\n.bnav-center-pill[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #ffffff !important;\n}\n.bnav-center.active[_ngcontent-%COMP%]   .bnav-center-pill[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2D6A4F,\n      #40916C);\n  box-shadow: 0 6px 16px rgba(27, 67, 50, 0.45);\n  transform: scale(1.05);\n}\n.bnav-center[_ngcontent-%COMP%]::after {\n  display: none;\n}\nhtml.dark[_nghost-%COMP%]   .bottom-nav[_ngcontent-%COMP%], html.dark   [_nghost-%COMP%]   .bottom-nav[_ngcontent-%COMP%] {\n  background: #0D1A10;\n  border-top-color: rgba(255, 255, 255, 0.07);\n  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.4);\n}\nhtml.dark[_nghost-%COMP%]   .bnav-tab[_ngcontent-%COMP%], html.dark   [_nghost-%COMP%]   .bnav-tab[_ngcontent-%COMP%] {\n  color: #4A6B55;\n}\nhtml.dark[_nghost-%COMP%]   .bnav-tab.active[_ngcontent-%COMP%], html.dark   [_nghost-%COMP%]   .bnav-tab.active[_ngcontent-%COMP%] {\n  color: #52B788;\n}\nhtml.dark[_nghost-%COMP%]   .bnav-tab.active[_ngcontent-%COMP%]::after, html.dark   [_nghost-%COMP%]   .bnav-tab.active[_ngcontent-%COMP%]::after {\n  background: #52B788;\n}\n/*# sourceMappingURL=app.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", standalone: true, imports: [
      CommonModule,
      RouterLink,
      RouterLinkActive,
      IonApp,
      IonRouterOutlet,
      IonMenu,
      IonHeader,
      IonContent,
      IonList,
      IonItem,
      IonIcon,
      IonLabel,
      IonMenuToggle,
      IonFooter,
      IonToggle,
      CustomAlertComponent,
      AchievementToastComponent,
      WhatsNewComponent
    ], template: `
    <ion-app>
      <ion-menu menuId="main-menu" contentId="main-content" type="overlay">
        <ion-header class="ion-no-border">
          <div class="menu-header">
            <div class="header-glow header-glow-1"></div>
            <div class="header-glow header-glow-2"></div>
            <div class="header-bg"></div>
            <div class="header-inner">
              <h1 class="header-logo">JavaIQ</h1>
              <div class="profile-preview">
                <div class="avatar">\u2615</div>
                <div class="profile-info">
                  <span class="user-name">Java Learner</span>
                  <span class="user-level">Beginner Explorer</span>
                </div>
              </div>
            </div>
          </div>
        </ion-header>

        <ion-content class="menu-content">
          <div class="menu-nav">
            <span class="nav-label">LEARNING PATHS</span>
            <ion-list lines="none" class="menu-list">
              <ion-menu-toggle auto-hide="false">
                <ion-item routerLink="/dashboard" routerLinkActive="selected" detail="false" class="nav-item">
                  <div slot="start" class="icon-box"><ion-icon name="home-outline"></ion-icon></div>
                  <ion-label>Dashboard</ion-label>
                  <div class="active-indicator"></div>
                </ion-item>
              </ion-menu-toggle>

              <ion-menu-toggle auto-hide="false">
                <ion-item routerLink="/tutorials" routerLinkActive="selected" detail="false" class="nav-item">
                  <div slot="start" class="icon-box"><ion-icon name="book-outline"></ion-icon></div>
                  <ion-label>Tutorials</ion-label>
                  <div class="active-indicator"></div>
                </ion-item>
              </ion-menu-toggle>

              <ion-menu-toggle auto-hide="false">
                <ion-item routerLink="/interview-questions" routerLinkActive="selected" detail="false" class="nav-item">
                  <div slot="start" class="icon-box"><ion-icon name="chatbubbles-outline"></ion-icon></div>
                  <ion-label>Interview Questions</ion-label>
                  <div class="active-indicator"></div>
                </ion-item>
              </ion-menu-toggle>

              <ion-menu-toggle auto-hide="false">
                <ion-item routerLink="/coding-questions" routerLinkActive="selected" detail="false" class="nav-item">
                  <div slot="start" class="icon-box"><ion-icon name="code-slash-outline"></ion-icon></div>
                  <ion-label>Coding Questions</ion-label>
                  <div class="active-indicator"></div>
                </ion-item>
              </ion-menu-toggle>

              <ion-menu-toggle auto-hide="false">
                <ion-item routerLink="/leetcode" routerLinkActive="selected" detail="false" class="nav-item">
                  <div slot="start" class="icon-box"><ion-icon name="trophy-outline"></ion-icon></div>
                  <ion-label>LeetCode</ion-label>
                  <div class="active-indicator"></div>
                </ion-item>
              </ion-menu-toggle>

              <ion-menu-toggle auto-hide="false">
                <ion-item routerLink="/assessments" routerLinkActive="selected" detail="false" class="nav-item">
                  <div slot="start" class="icon-box"><ion-icon name="clipboard-outline"></ion-icon></div>
                  <ion-label>Assessments</ion-label>
                  <div class="active-indicator"></div>
                </ion-item>
              </ion-menu-toggle>

              <ion-menu-toggle auto-hide="false">
                <ion-item routerLink="/experiences" routerLinkActive="selected" detail="false" class="nav-item">
                  <div slot="start" class="icon-box"><ion-icon name="people-outline"></ion-icon></div>
                  <ion-label>Interview Stories</ion-label>
                  <div class="active-indicator"></div>
                </ion-item>
              </ion-menu-toggle>

              <ion-menu-toggle auto-hide="false">
                <ion-item routerLink="/study-plan" routerLinkActive="selected" detail="false" class="nav-item">
                  <div slot="start" class="icon-box"><ion-icon name="calendar-outline"></ion-icon></div>
                  <ion-label>Study Plan</ion-label>
                  <div class="active-indicator"></div>
                </ion-item>
              </ion-menu-toggle>

              <ion-menu-toggle auto-hide="false">
                <ion-item routerLink="/mock-interview" routerLinkActive="selected" detail="false" class="nav-item">
                  <div slot="start" class="icon-box"><ion-icon name="briefcase-outline"></ion-icon></div>
                  <ion-label>Mock Interview</ion-label>
                  <div class="active-indicator"></div>
                </ion-item>
              </ion-menu-toggle>

              <ion-menu-toggle auto-hide="false">
                <ion-item routerLink="/progress" routerLinkActive="selected" detail="false" class="nav-item">
                  <div slot="start" class="icon-box"><ion-icon name="bar-chart-outline"></ion-icon></div>
                  <ion-label>My Progress</ion-label>
                  <div class="active-indicator"></div>
                </ion-item>
              </ion-menu-toggle>

              <ion-menu-toggle auto-hide="false">
                <ion-item routerLink="/review" routerLinkActive="selected" detail="false" class="nav-item">
                  <div slot="start" class="icon-box"><ion-icon name="refresh-outline"></ion-icon></div>
                  <ion-label>Review Queue</ion-label>
                  <div class="active-indicator"></div>
                </ion-item>
              </ion-menu-toggle>

              <ion-menu-toggle auto-hide="false">
                <ion-item routerLink="/bookmarks" routerLinkActive="selected" detail="false" class="nav-item">
                  <div slot="start" class="icon-box"><ion-icon name="bookmark-outline"></ion-icon></div>
                  <ion-label>Saved</ion-label>
                  <div class="active-indicator"></div>
                </ion-item>
              </ion-menu-toggle>

              <ion-menu-toggle auto-hide="false">
                <ion-item routerLink="/settings" routerLinkActive="selected" detail="false" class="nav-item">
                  <div slot="start" class="icon-box"><ion-icon name="settings-outline"></ion-icon></div>
                  <ion-label>Settings</ion-label>
                  <div class="active-indicator"></div>
                </ion-item>
              </ion-menu-toggle>

              <ion-menu-toggle auto-hide="false">
                <ion-item routerLink="/achievements" routerLinkActive="selected" detail="false" class="nav-item">
                  <div slot="start" class="icon-box"><ion-icon name="ribbon-outline"></ion-icon></div>
                  <ion-label>Achievements</ion-label>
                  <div class="active-indicator"></div>
                </ion-item>
              </ion-menu-toggle>

              <div class="nav-divider"></div>

              <ion-menu-toggle auto-hide="false">
                <ion-item routerLink="/about" routerLinkActive="selected" detail="false" class="nav-item">
                  <div slot="start" class="icon-box"><ion-icon name="person-circle-outline"></ion-icon></div>
                  <ion-label>About Developer</ion-label>
                  <div class="active-indicator"></div>
                </ion-item>
              </ion-menu-toggle>
            </ion-list>
          </div>
        </ion-content>

        <ion-footer class="ion-no-border">
          <div class="menu-footer">
            <div class="theme-row">
              <ion-icon [name]="themeService.theme() === 'dark' ? 'moon-outline' : 'sunny-outline'" class="theme-icon"></ion-icon>
              <span class="theme-label">{{ themeService.theme() === 'dark' ? 'Dark Mode' : 'Light Mode' }}</span>
              <ion-toggle
                [checked]="themeService.theme() === 'dark'"
                (ionChange)="themeService.toggle()"
                mode="ios"
                class="theme-toggle">
              </ion-toggle>
            </div>
            <span class="version">v1.4.0</span>
            <span class="footer-brand">Built with \u2764\uFE0F for Java developers</span>
          </div>
        </ion-footer>
      </ion-menu>

      <div id="main-content">
        <ion-router-outlet></ion-router-outlet>
      </div>

      <!-- Offline Banner -->
      @if (!connectivity.isOnline()) {
        <div class="offline-banner">
          <i class="bi bi-wifi-off"></i>
          You're offline. Progress will sync when connected.
        </div>
      }

      <!-- Bottom Navigation Bar -->
      @if (showBottomNav()) {
        <nav class="bottom-nav" role="tablist" aria-label="Main navigation">
          <a class="bnav-tab" [class.active]="isTab('/dashboard')"
             routerLink="/dashboard" role="tab" aria-label="Home">
            <i class="fa-solid fa-house"></i>
            <span>Home</span>
          </a>
          <a class="bnav-tab"
             [class.active]="isTab('/tutorials') || isTab('/interview-questions') || isTab('/coding-questions') || isTab('/leetcode') || isTab('/experiences')"
             routerLink="/tutorials" role="tab" aria-label="Learn">
            <i class="fa-solid fa-book-open"></i>
            <span>Learn</span>
          </a>
          <a class="bnav-tab bnav-center"
             [class.active]="isTab('/daily-challenge') || isTab('/assessments')"
             routerLink="/daily-challenge" role="tab" aria-label="Practice">
            <div class="bnav-center-pill">
              <i class="fa-solid fa-bolt"></i>
            </div>
            <span>Practice</span>
          </a>
          <a class="bnav-tab"
             [class.active]="isTab('/progress') || isTab('/leaderboard') || isTab('/achievements')"
             routerLink="/progress" role="tab" aria-label="Progress">
            <i class="fa-solid fa-chart-simple"></i>
            <span>Progress</span>
          </a>
          <button class="bnav-tab" (click)="openMenu()" role="tab" aria-label="More options">
            <i class="fa-solid fa-bars"></i>
            <span>More</span>
          </button>
        </nav>
      }

      <app-custom-alert></app-custom-alert>
      <app-achievement-toast></app-achievement-toast>
      <app-whats-new></app-whats-new>
    </ion-app>
  `, styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap";\n\n/* angular:styles/component:css;52345defb90bf4a6f074282c75072cf0061426bfca6f6ae23c7b3cf8ef485708;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/app.component.ts */\n#main-content {\n  height: 100%;\n}\nion-menu::part(container) {\n  background: #0b1120;\n  border-right: 1px solid rgba(255, 255, 255, 0.06);\n}\nion-menu::part(backdrop) {\n  background: rgba(0, 0, 0, 0.7);\n  backdrop-filter: blur(4px);\n  -webkit-backdrop-filter: blur(4px);\n}\n.menu-header {\n  position: relative;\n  padding: 56px 20px 24px;\n  overflow: hidden;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n}\n.header-bg {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      145deg,\n      #0b1120 0%,\n      #161b22 100%);\n  z-index: 0;\n}\n.header-glow {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  filter: blur(40px);\n  z-index: 0;\n}\n.header-glow-1 {\n  top: -40px;\n  right: -20px;\n  width: 150px;\n  height: 150px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(139, 92, 246, 0.15) 0%,\n      transparent 70%);\n}\n.header-glow-2 {\n  bottom: -20px;\n  left: -20px;\n  width: 120px;\n  height: 120px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(16, 185, 129, 0.12) 0%,\n      transparent 70%);\n}\n.header-inner {\n  position: relative;\n  z-index: 1;\n}\n.header-logo {\n  font-family: "Inter", sans-serif;\n  font-size: 1.8rem;\n  font-weight: 900;\n  background:\n    linear-gradient(\n      135deg,\n      #8b5cf6 0%,\n      #a78bfa 50%,\n      #c4b5fd 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  margin: 0 0 20px;\n  letter-spacing: -0.04em;\n}\n.profile-preview {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 16px;\n  transition: all 0.2s ease;\n}\n.profile-preview:hover {\n  background: rgba(255, 255, 255, 0.06);\n  border-color: rgba(255, 255, 255, 0.1);\n}\n.avatar {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  background: rgba(139, 92, 246, 0.15);\n  border: 1px solid rgba(139, 92, 246, 0.3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n}\n.profile-info {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.user-name {\n  font-family: "Inter", sans-serif;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #e2e8f0;\n}\n.user-level {\n  font-family: "Inter", sans-serif;\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: #94a3b8;\n}\n.menu-content {\n  --background: #0b1120;\n}\n.menu-nav {\n  padding: 24px 16px;\n}\n.nav-label {\n  display: block;\n  font-family: "Inter", sans-serif;\n  font-size: 0.75rem;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  color: #64748b;\n  margin-bottom: 16px;\n  padding-left: 12px;\n}\n.menu-list {\n  background: transparent;\n}\n.nav-divider {\n  height: 1px;\n  background: rgba(255, 255, 255, 0.06);\n  margin: 8px 12px;\n}\n.nav-item {\n  --background: transparent;\n  --padding-start: 12px;\n  --inner-padding-end: 12px;\n  --border-radius: 12px;\n  --color: #94a3b8;\n  margin-bottom: 6px;\n  font-family: "Inter", sans-serif;\n  font-weight: 600;\n  font-size: 0.9rem;\n  transition: all 0.2s;\n  position: relative;\n}\n.nav-item::part(native):hover {\n  background: rgba(255, 255, 255, 0.04);\n  color: #e2e8f0;\n}\n.icon-box {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 12px;\n  transition: all 0.2s;\n}\nion-icon {\n  font-size: 16px;\n  color: #64748b;\n  transition: all 0.2s;\n}\n.nav-item::part(native):hover ion-icon {\n  color: #a78bfa;\n}\n.nav-item.selected {\n  --color: #e2e8f0;\n  --background: rgba(139,92,246,0.1);\n}\n.nav-item.selected .icon-box {\n  background: rgba(139, 92, 246, 0.2);\n  border-color: rgba(139, 92, 246, 0.4);\n}\n.nav-item.selected ion-icon {\n  color: #c4b5fd;\n}\n.active-indicator {\n  width: 3px;\n  height: 20px;\n  background: #8b5cf6;\n  border-radius: 4px;\n  position: absolute;\n  right: 0;\n  opacity: 0;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  transform: scaleY(0);\n}\n.nav-item.selected .active-indicator {\n  opacity: 1;\n  right: 10px;\n  transform: scaleY(1);\n}\n.menu-footer {\n  padding: 20px;\n  background: #0b1120;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n  align-items: center;\n  text-align: center;\n}\n.theme-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 10px 0 14px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n  margin-bottom: 10px;\n}\n.theme-icon {\n  font-size: 1rem;\n  color: #94a3b8;\n  flex-shrink: 0;\n}\n.theme-label {\n  font-family: "Inter", sans-serif;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #94a3b8;\n  flex: 1;\n}\n.theme-toggle {\n  --background: #334155;\n  --background-checked: #8b5cf6;\n  --handle-background: #fff;\n  --handle-background-checked: #fff;\n  --border-radius: 12px;\n  --handle-border-radius: 10px;\n  --handle-spacing: 2px;\n  --handle-width: 18px;\n  --handle-height: 18px;\n  height: 22px;\n  min-height: unset;\n}\n.version {\n  font-family: "Inter", sans-serif;\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #475569;\n}\n.footer-brand {\n  font-family: "Inter", sans-serif;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #64748b;\n}\n:host-context(html:not(.dark)) .menu-content {\n  --background: #ffffff;\n}\n:host-context(html:not(.dark)) .menu-header {\n  border-bottom-color: #D6DDD2;\n}\n:host-context(html:not(.dark)) .header-bg {\n  background:\n    linear-gradient(\n      145deg,\n      #ffffff 0%,\n      #F5F7F2 100%);\n}\n:host-context(html:not(.dark)) .header-glow-1 {\n  background:\n    radial-gradient(\n      circle,\n      rgba(27, 67, 50, 0.06) 0%,\n      transparent 70%);\n}\n:host-context(html:not(.dark)) .header-glow-2 {\n  background:\n    radial-gradient(\n      circle,\n      rgba(64, 145, 108, 0.05) 0%,\n      transparent 70%);\n}\n:host-context(html:not(.dark)) .header-logo {\n  background:\n    linear-gradient(\n      135deg,\n      #1B4332 0%,\n      #2D6A4F 50%,\n      #40916C 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n:host-context(html:not(.dark)) .profile-preview {\n  background: rgba(27, 67, 50, 0.04);\n  border-color: #D6DDD2;\n}\n:host-context(html:not(.dark)) .profile-preview:hover {\n  background: rgba(27, 67, 50, 0.08);\n  border-color: #B7CCBB;\n}\n:host-context(html:not(.dark)) .avatar {\n  background: rgba(27, 67, 50, 0.08);\n  border-color: rgba(27, 67, 50, 0.2);\n}\n:host-context(html:not(.dark)) .user-name {\n  color: #1B1B1B;\n}\n:host-context(html:not(.dark)) .user-level {\n  color: #52665A;\n}\n:host-context(html:not(.dark)) .nav-label {\n  color: #8A9B8F;\n}\n:host-context(html:not(.dark)) .nav-divider {\n  background: #E8EDE5;\n}\n:host-context(html:not(.dark)) .nav-item {\n  --color: #52665A;\n}\n:host-context(html:not(.dark)) .nav-item::part(native):hover {\n  background: rgba(27, 67, 50, 0.06);\n  color: #1B1B1B;\n}\n:host-context(html:not(.dark)) .nav-item::part(native):hover ion-icon {\n  color: #1B4332;\n}\n:host-context(html:not(.dark)) .icon-box {\n  background: rgba(27, 67, 50, 0.05);\n  border-color: #D6DDD2;\n}\n:host-context(html:not(.dark)) .icon-box ion-icon {\n  color: #8A9B8F;\n}\n:host-context(html:not(.dark)) .nav-item.selected {\n  --color: #1B4332;\n  --background: rgba(27,67,50,0.08);\n}\n:host-context(html:not(.dark)) .nav-item.selected .icon-box {\n  background: rgba(27, 67, 50, 0.12);\n  border-color: rgba(27, 67, 50, 0.25);\n}\n:host-context(html:not(.dark)) .nav-item.selected .icon-box ion-icon {\n  color: #1B4332;\n}\n:host-context(html:not(.dark)) .active-indicator {\n  background: #1B4332;\n}\n:host-context(html:not(.dark)) .menu-footer {\n  background: #F5F7F2;\n  border-top-color: #D6DDD2;\n}\n:host-context(html:not(.dark)) .theme-row {\n  border-bottom-color: #D6DDD2;\n}\n:host-context(html:not(.dark)) .theme-icon {\n  color: #1B4332;\n}\n:host-context(html:not(.dark)) .theme-label {\n  color: #1B1B1B;\n}\n:host-context(html:not(.dark)) .theme-toggle {\n  --background: #D6DDD2;\n  --background-checked: #1B4332;\n}\n:host-context(html:not(.dark)) .version {\n  color: #8A9B8F;\n}\n:host-context(html:not(.dark)) .footer-brand {\n  color: #52665A;\n}\n.offline-banner {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 99999;\n  background: #b45309;\n  color: #fff;\n  font-size: 0.875rem;\n  font-weight: 600;\n  text-align: center;\n  padding: 8px 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  letter-spacing: 0.01em;\n  animation: slideDown 0.3s ease-out;\n}\n@keyframes slideDown {\n  from {\n    transform: translateY(-100%);\n  }\n  to {\n    transform: translateY(0);\n  }\n}\n.bottom-nav {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 200;\n  display: flex;\n  align-items: stretch;\n  height: calc(60px + env(safe-area-inset-bottom, 0px));\n  padding-bottom: env(safe-area-inset-bottom, 0px);\n  background: #ffffff;\n  border-top: 1px solid #D6DDD2;\n  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.06);\n}\n.bnav-tab {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 3px;\n  text-decoration: none;\n  color: #94A3B8;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-family: "Inter", sans-serif;\n  transition: color 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n  padding: 0;\n  position: relative;\n}\n.bnav-tab i {\n  font-size: 1.2rem;\n  line-height: 1;\n  transition: transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.bnav-tab span {\n  font-size: 0.65rem;\n  font-weight: 600;\n  letter-spacing: 0.01em;\n  line-height: 1;\n}\n.bnav-tab.active {\n  color: #1B4332;\n}\n.bnav-tab.active i {\n  transform: scale(1.12);\n}\n.bnav-tab.active::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 32px;\n  height: 2px;\n  background: #1B4332;\n  border-radius: 0 0 4px 4px;\n}\n.bnav-center {\n  position: relative;\n}\n.bnav-center-pill {\n  width: 44px;\n  height: 32px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #1B4332,\n      #2D6A4F);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 12px rgba(27, 67, 50, 0.35);\n  transition: transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.15s ease;\n}\n.bnav-center-pill i {\n  font-size: 1rem;\n  color: #ffffff !important;\n}\n.bnav-center.active .bnav-center-pill {\n  background:\n    linear-gradient(\n      135deg,\n      #2D6A4F,\n      #40916C);\n  box-shadow: 0 6px 16px rgba(27, 67, 50, 0.45);\n  transform: scale(1.05);\n}\n.bnav-center::after {\n  display: none;\n}\n:host-context(html.dark) .bottom-nav {\n  background: #0D1A10;\n  border-top-color: rgba(255, 255, 255, 0.07);\n  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.4);\n}\n:host-context(html.dark) .bnav-tab {\n  color: #4A6B55;\n}\n:host-context(html.dark) .bnav-tab.active {\n  color: #52B788;\n}\n:host-context(html.dark) .bnav-tab.active::after {\n  background: #52B788;\n}\n/*# sourceMappingURL=app.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 715 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
/*! Bundled license information:

zone.js/fesm2015/zone.js:
  (**
   * @license Angular
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
//# sourceMappingURL=main.js.map
