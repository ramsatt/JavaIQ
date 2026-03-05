import {
  Injectable,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-L6VISU4K.js";

// src/app/alert.service.ts
var AlertService = class _AlertService {
  alertState = signal(null, ...ngDevMode ? [{ debugName: "alertState" }] : []);
  resolveCallback;
  get alert() {
    return this.alertState();
  }
  showAlert(options) {
    this.alertState.set(options);
    return new Promise((resolve) => {
      this.resolveCallback = resolve;
    });
  }
  confirm(message, title = "Confirm") {
    return this.showAlert({
      title,
      message,
      showCancel: true,
      confirmText: "Yes",
      cancelText: "No",
      type: "info"
    });
  }
  alertInfo(message, title = "Information") {
    return this.showAlert({
      title,
      message,
      showCancel: false,
      confirmText: "OK",
      type: "info"
    });
  }
  onConfirm() {
    this.alertState.set(null);
    if (this.resolveCallback)
      this.resolveCallback(true);
  }
  onCancel() {
    this.alertState.set(null);
    if (this.resolveCallback)
      this.resolveCallback(false);
  }
  static \u0275fac = function AlertService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AlertService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AlertService, factory: _AlertService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlertService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  AlertService
};
//# sourceMappingURL=chunk-ZI6SYS5B.js.map
