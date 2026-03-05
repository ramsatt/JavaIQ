import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgModel
} from "./chunk-PWZS7QID.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  effect,
  input,
  output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-L6VISU4K.js";

// src/app/shared/certificate.component.ts
function CertificateComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " has successfully completed the course ");
  }
}
function CertificateComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " has successfully passed the assessment ");
  }
}
function CertificateComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275element(1, "i", 53);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Score: ", ctx_r0.score(), "% ");
  }
}
function CertificateComponent_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.category());
  }
}
var CertificateComponent = class _CertificateComponent {
  type = input.required(...ngDevMode ? [{ debugName: "type" }] : []);
  title = input.required(...ngDevMode ? [{ debugName: "title" }] : []);
  category = input("", ...ngDevMode ? [{ debugName: "category" }] : []);
  score = input(null, ...ngDevMode ? [{ debugName: "score" }] : []);
  recipientName = input("Java Developer", ...ngDevMode ? [{ debugName: "recipientName" }] : []);
  visible = input(false, ...ngDevMode ? [{ debugName: "visible" }] : []);
  closed = output();
  editableName = signal("Java Developer", ...ngDevMode ? [{ debugName: "editableName" }] : []);
  constructor() {
    effect(() => {
      const name = this.recipientName();
      if (name) {
        this.editableName.set(name);
      }
    });
  }
  ngAfterViewInit() {
    if (!this.editableName() || this.editableName() === "Java Developer") {
      this.editableName.set(this.recipientName() || "Java Developer");
    }
  }
  get formattedDate() {
    return (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }
  onBackdropClick(event) {
    if (event.target.classList.contains("cert-backdrop")) {
      this.closed.emit();
    }
  }
  print() {
    window.print();
  }
  static \u0275fac = function CertificateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CertificateComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CertificateComponent, selectors: [["app-certificate"]], inputs: { type: [1, "type"], title: [1, "title"], category: [1, "category"], score: [1, "score"], recipientName: [1, "recipientName"], visible: [1, "visible"] }, outputs: { closed: "closed" }, decls: 73, vars: 10, consts: [[1, "cert-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-label", "Certificate Preview", 1, "cert-modal"], [1, "modal-hdr", "no-print"], [1, "modal-hdr-title"], [1, "fa-solid", "fa-certificate", "modal-hdr-icon"], ["aria-label", "Close", 1, "close-btn", 3, "click"], [1, "name-row", "no-print"], ["for", "certName", 1, "name-label"], ["id", "certName", "type", "text", "placeholder", "Enter your full name", "maxlength", "60", 1, "name-input", 3, "ngModelChange", "ngModel"], [1, "print-btn", "no-print", 3, "click"], [1, "fa-solid", "fa-print"], [1, "cert-page"], [1, "corner-tl"], [1, "corner-tr"], [1, "corner-bl"], [1, "corner-br"], [1, "cert-header"], [1, "cert-header-inner"], [1, "cert-logo-row"], ["viewBox", "0 0 24 24", "width", "28", "height", "28", "fill", "none", 1, "cert-logo-icon"], ["cx", "12", "cy", "12", "r", "10", "fill", "#d4a853", "opacity", "0.2"], ["d", "M8 7h8M8 12h5M8 17h7", "stroke", "#d4a853", "stroke-width", "1.8", "stroke-linecap", "round"], ["cx", "17", "cy", "17", "r", "4", "fill", "#1B4332", "stroke", "#d4a853", "stroke-width", "1.2"], ["d", "M15.5 17l1 1 2-2", "stroke", "#d4a853", "stroke-width", "1.1", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "cert-logo-text"], [1, "cert-header-rule"], [1, "cert-header-rule-line"], [1, "cert-header-rule-diamond"], [1, "cert-body"], [1, "cert-type-title"], [1, "cert-ornament"], [1, "cert-ornament-line"], [1, "cert-ornament-star"], [1, "cert-intro-text"], [1, "cert-name"], [1, "cert-completed-text"], [1, "cert-course-title"], [1, "cert-score-pill"], [1, "cert-category-chip"], [1, "cert-date"], [1, "cert-footer"], ["width", "80", "height", "80", "viewBox", "0 0 80 80", "xmlns", "http://www.w3.org/2000/svg", 1, "cert-seal"], ["cx", "40", "cy", "40", "r", "38", "fill", "none", "stroke", "#1B4332", "stroke-width", "2"], ["cx", "40", "cy", "40", "r", "31", "fill", "none", "stroke", "#d4a853", "stroke-width", "1"], ["points", "40,6 42,20 50,10 47,23 58,17 51,28 64,27 55,36 68,40 55,44 64,53 51,52 58,63 47,57 50,70 42,60 40,74 38,60 30,70 33,57 22,63 29,52 16,53 25,44 12,40 25,36 16,27 29,28 22,17 33,23 30,10 38,20", "fill", "#d4a853", "opacity", "0.18"], ["cx", "40", "cy", "40", "r", "21", "fill", "#1B4332"], ["x", "40", "y", "36", "text-anchor", "middle", "font-family", "Inter, sans-serif", "font-size", "7.5", "font-weight", "800", "fill", "#d4a853", "letter-spacing", "0.5"], ["x1", "28", "y1", "40", "x2", "52", "y2", "40", "stroke", "#d4a853", "stroke-width", "0.6", "opacity", "0.6"], ["x", "40", "y", "50", "text-anchor", "middle", "font-family", "Inter, sans-serif", "font-size", "5", "font-weight", "700", "fill", "rgba(212,168,83,0.85)", "letter-spacing", "1.2"], [1, "cert-sig-block"], [1, "cert-sig-name"], [1, "cert-sig-line"], [1, "cert-sig-label"], [1, "fa-solid", "fa-star", "cert-score-star"]], template: function CertificateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function CertificateComponent_Template_div_click_0_listener($event) {
        return ctx.onBackdropClick($event);
      });
      \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275element(4, "i", 4);
      \u0275\u0275text(5, " Certificate Preview ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "button", 5);
      \u0275\u0275listener("click", function CertificateComponent_Template_button_click_6_listener() {
        return ctx.closed.emit();
      });
      \u0275\u0275text(7, "\u2715");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 6)(9, "label", 7);
      \u0275\u0275text(10, "Your name on certificate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function CertificateComponent_Template_input_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.editableName, $event) || (ctx.editableName = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "button", 9);
      \u0275\u0275listener("click", function CertificateComponent_Template_button_click_12_listener() {
        return ctx.print();
      });
      \u0275\u0275element(13, "i", 10);
      \u0275\u0275text(14, " Print / Save as PDF ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 11);
      \u0275\u0275element(16, "div", 12)(17, "div", 13)(18, "div", 14)(19, "div", 15);
      \u0275\u0275elementStart(20, "div", 16)(21, "div", 17)(22, "div", 18);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(23, "svg", 19);
      \u0275\u0275element(24, "circle", 20)(25, "path", 21)(26, "circle", 22)(27, "path", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(28, "span", 24);
      \u0275\u0275text(29, "JavaIQ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 25);
      \u0275\u0275element(31, "span", 26);
      \u0275\u0275elementStart(32, "span", 27);
      \u0275\u0275text(33, "\u25C6");
      \u0275\u0275elementEnd();
      \u0275\u0275element(34, "span", 26);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "div", 28)(36, "div", 29);
      \u0275\u0275text(37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 30);
      \u0275\u0275element(39, "span", 31);
      \u0275\u0275elementStart(40, "span", 32);
      \u0275\u0275text(41, "\u2726");
      \u0275\u0275elementEnd();
      \u0275\u0275element(42, "span", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "p", 33);
      \u0275\u0275text(44, "This is to certify that");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div", 34);
      \u0275\u0275text(46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "p", 35);
      \u0275\u0275conditionalCreate(48, CertificateComponent_Conditional_48_Template, 1, 0)(49, CertificateComponent_Conditional_49_Template, 1, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "div", 36);
      \u0275\u0275text(51);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(52, CertificateComponent_Conditional_52_Template, 3, 1, "div", 37);
      \u0275\u0275conditionalCreate(53, CertificateComponent_Conditional_53_Template, 2, 1, "div", 38);
      \u0275\u0275elementStart(54, "div", 39);
      \u0275\u0275text(55);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "div", 40);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(57, "svg", 41);
      \u0275\u0275element(58, "circle", 42)(59, "circle", 43)(60, "polygon", 44)(61, "circle", 45);
      \u0275\u0275elementStart(62, "text", 46);
      \u0275\u0275text(63, "JavaIQ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(64, "line", 47);
      \u0275\u0275elementStart(65, "text", 48);
      \u0275\u0275text(66, "CERTIFIED");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(67, "div", 49)(68, "div", 50);
      \u0275\u0275text(69, "JavaIQ Platform");
      \u0275\u0275elementEnd();
      \u0275\u0275element(70, "div", 51);
      \u0275\u0275elementStart(71, "div", 52);
      \u0275\u0275text(72, "Authorized Signature");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("visible", ctx.visible());
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.editableName);
      \u0275\u0275advance(26);
      \u0275\u0275textInterpolate1(" ", ctx.type() === "course" ? "CERTIFICATE OF COMPLETION" : "CERTIFICATE OF ACHIEVEMENT", " ");
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.editableName() || "Java Developer");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.type() === "course" ? 48 : 49);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.title());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.score() !== null && ctx.score() !== void 0 ? 52 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.category() ? 53 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.formattedDate);
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, MaxLengthValidator, NgModel], styles: ['\n\n.cert-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 9999;\n  background: rgba(0, 0, 0, 0.72);\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.25s ease;\n  padding: 16px;\n}\n.cert-backdrop.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: all;\n}\n.cert-modal[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 20px;\n  padding: 24px 24px 28px;\n  max-width: 680px;\n  width: 100%;\n  max-height: 92vh;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  box-shadow: 0 32px 80px rgba(0, 0, 0, 0.45);\n}\nhtml.dark[_nghost-%COMP%]   .cert-modal[_ngcontent-%COMP%], html.dark   [_nghost-%COMP%]   .cert-modal[_ngcontent-%COMP%] {\n  background: #1a2332;\n}\n.modal-hdr[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.modal-hdr-title[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n  font-weight: 700;\n  color: #1B4332;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\nhtml.dark[_nghost-%COMP%]   .modal-hdr-title[_ngcontent-%COMP%], html.dark   [_nghost-%COMP%]   .modal-hdr-title[_ngcontent-%COMP%] {\n  color: #d4a853;\n}\n.modal-hdr-icon[_ngcontent-%COMP%] {\n  color: #d4a853;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.05);\n  border: none;\n  border-radius: 8px;\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  font-size: 0.8rem;\n  color: #64748b;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.15s;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.12);\n  color: #1B1B1B;\n}\nhtml.dark[_nghost-%COMP%]   .close-btn[_ngcontent-%COMP%], html.dark   [_nghost-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.07);\n  color: #94a3b8;\n}\nhtml.dark[_nghost-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover, html.dark   [_nghost-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.13);\n  color: #f1f5f9;\n}\n.name-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.name-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: #52665A;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\nhtml.dark[_nghost-%COMP%]   .name-label[_ngcontent-%COMP%], html.dark   [_nghost-%COMP%]   .name-label[_ngcontent-%COMP%] {\n  color: #8A9B8F;\n}\n.name-input[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border: 1.5px solid #D6DDD2;\n  border-radius: 10px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #1B1B1B;\n  background: #F5F7F2;\n  outline: none;\n  transition: border-color 0.15s;\n  font-family: "Inter", sans-serif;\n}\n.name-input[_ngcontent-%COMP%]:focus {\n  border-color: #1B4332;\n  background: #fff;\n}\nhtml.dark[_nghost-%COMP%]   .name-input[_ngcontent-%COMP%], html.dark   [_nghost-%COMP%]   .name-input[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  border-color: rgba(255, 255, 255, 0.12);\n  color: #f1f5f9;\n}\nhtml.dark[_nghost-%COMP%]   .name-input[_ngcontent-%COMP%]:focus, html.dark   [_nghost-%COMP%]   .name-input[_ngcontent-%COMP%]:focus {\n  border-color: #40916C;\n}\n.print-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 12px 24px;\n  border-radius: 12px;\n  border: none;\n  cursor: pointer;\n  font-size: 0.88rem;\n  font-weight: 700;\n  background:\n    linear-gradient(\n      135deg,\n      #1B4332,\n      #2D6A4F);\n  color: #d4a853;\n  box-shadow: 0 4px 14px rgba(27, 67, 50, 0.4);\n  transition: all 0.2s ease;\n  letter-spacing: 0.02em;\n  align-self: flex-start;\n}\n.print-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 22px rgba(27, 67, 50, 0.45);\n}\n.cert-page[_ngcontent-%COMP%] {\n  width: 595px;\n  min-height: 842px;\n  background: #fefef8;\n  margin: 0 auto;\n  position: relative;\n  box-sizing: border-box;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    sans-serif;\n  color: #1B1B1B;\n  overflow: hidden;\n  border: 3.5px solid #1B4332;\n  box-shadow:\n    inset 0 0 0 8px #fefef8,\n    inset 0 0 0 9.5px #d4a853,\n    0 8px 40px rgba(0, 0, 0, 0.18);\n}\n.cert-page[_ngcontent-%COMP%]::before {\n  content: "JavaIQ";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) rotate(-30deg);\n  font-size: 110px;\n  font-weight: 900;\n  color: rgba(27, 67, 50, 0.035);\n  pointer-events: none;\n  letter-spacing: -0.04em;\n  white-space: nowrap;\n  z-index: 0;\n}\n.corner-tl[_ngcontent-%COMP%], \n.corner-tr[_ngcontent-%COMP%], \n.corner-bl[_ngcontent-%COMP%], \n.corner-br[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 36px;\n  height: 36px;\n  z-index: 1;\n}\n.corner-tl[_ngcontent-%COMP%] {\n  top: 18px;\n  left: 18px;\n  border-top: 2px solid #d4a853;\n  border-left: 2px solid #d4a853;\n  border-radius: 2px 0 0 0;\n}\n.corner-tr[_ngcontent-%COMP%] {\n  top: 18px;\n  right: 18px;\n  border-top: 2px solid #d4a853;\n  border-right: 2px solid #d4a853;\n  border-radius: 0 2px 0 0;\n}\n.corner-bl[_ngcontent-%COMP%] {\n  bottom: 18px;\n  left: 18px;\n  border-bottom: 2px solid #d4a853;\n  border-left: 2px solid #d4a853;\n  border-radius: 0 0 0 2px;\n}\n.corner-br[_ngcontent-%COMP%] {\n  bottom: 18px;\n  right: 18px;\n  border-bottom: 2px solid #d4a853;\n  border-right: 2px solid #d4a853;\n  border-radius: 0 0 2px 0;\n}\n.cert-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1B4332 0%,\n      #2D6A4F 100%);\n  padding: 22px 44px 18px;\n  position: relative;\n  z-index: 1;\n}\n.cert-header-inner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n.cert-logo-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.cert-logo-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.cert-logo-text[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 900;\n  color: #d4a853;\n  letter-spacing: -0.04em;\n}\n.cert-header-rule[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n}\n.cert-header-rule-line[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 1px;\n  background:\n    linear-gradient(\n      to right,\n      transparent,\n      rgba(212, 168, 83, 0.5),\n      transparent);\n  display: block;\n}\n.cert-header-rule-diamond[_ngcontent-%COMP%] {\n  color: #d4a853;\n  font-size: 8px;\n  opacity: 0.8;\n}\n.cert-body[_ngcontent-%COMP%] {\n  padding: 28px 56px 24px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  position: relative;\n  z-index: 1;\n}\n.cert-type-title[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 800;\n  letter-spacing: 0.24em;\n  text-transform: uppercase;\n  color: #d4a853;\n  margin-bottom: 14px;\n}\n.cert-ornament[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 200px;\n  margin: 0 auto 20px;\n}\n.cert-ornament-line[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 1px;\n  background:\n    linear-gradient(\n      to right,\n      transparent,\n      #d4a853);\n  display: block;\n}\n.cert-ornament-line[_ngcontent-%COMP%]:last-child {\n  background:\n    linear-gradient(\n      to left,\n      transparent,\n      #d4a853);\n}\n.cert-ornament-star[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #d4a853;\n}\n.cert-intro-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-style: italic;\n  color: #52665A;\n  margin: 0 0 10px;\n  font-weight: 400;\n}\n.cert-name[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 800;\n  color: #1B4332;\n  letter-spacing: -0.025em;\n  line-height: 1.15;\n  margin: 0 0 10px;\n  padding-bottom: 6px;\n  border-bottom: 2px dashed rgba(27, 67, 50, 0.18);\n  min-width: 200px;\n  word-break: break-word;\n}\n.cert-completed-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-style: italic;\n  color: #52665A;\n  margin: 0 0 14px;\n  font-weight: 400;\n}\n.cert-course-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #1B4332;\n  line-height: 1.3;\n  margin: 0 0 18px;\n  letter-spacing: -0.01em;\n}\n.cert-score-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: rgba(212, 168, 83, 0.1);\n  border: 1.5px solid #d4a853;\n  color: #a07828;\n  font-size: 13px;\n  font-weight: 700;\n  padding: 5px 18px;\n  border-radius: 50px;\n  margin-bottom: 10px;\n}\n.cert-score-star[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.cert-category-chip[_ngcontent-%COMP%] {\n  font-size: 9.5px;\n  font-weight: 800;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n  background: rgba(27, 67, 50, 0.07);\n  color: #1B4332;\n  border: 1px solid rgba(27, 67, 50, 0.18);\n  padding: 4px 14px;\n  border-radius: 20px;\n  margin-bottom: 16px;\n}\n.cert-date[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #8A9B8F;\n  letter-spacing: 0.08em;\n  font-weight: 600;\n  margin-bottom: 0;\n}\n.cert-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  padding: 0 52px 28px;\n  position: relative;\n  z-index: 1;\n}\n.cert-footer[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 52px;\n  right: 52px;\n  height: 1px;\n  background:\n    linear-gradient(\n      to right,\n      transparent,\n      rgba(27, 67, 50, 0.15),\n      transparent);\n}\n.cert-seal[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.cert-sig-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n}\n.cert-sig-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1B4332;\n  letter-spacing: 0.03em;\n}\n.cert-sig-line[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 1.5px;\n  background:\n    linear-gradient(\n      to right,\n      transparent,\n      #1B4332,\n      transparent);\n}\n.cert-sig-label[_ngcontent-%COMP%] {\n  font-size: 9px;\n  color: #8A9B8F;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  font-weight: 600;\n}\n@media print {\n  body[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    visibility: hidden !important;\n  }\n  app-certificate[_ngcontent-%COMP%], \n   .cert-backdrop[_ngcontent-%COMP%], \n   .cert-modal[_ngcontent-%COMP%], \n   .cert-page[_ngcontent-%COMP%], \n   .cert-page[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    visibility: visible !important;\n  }\n  .cert-page[_ngcontent-%COMP%] {\n    position: fixed !important;\n    top: 0 !important;\n    left: 0 !important;\n    width: 210mm !important;\n    min-height: 297mm !important;\n    margin: 0 !important;\n    border: 3.5px solid #1B4332 !important;\n    box-shadow: inset 0 0 0 8px #fefef8, inset 0 0 0 9.5px #d4a853 !important;\n    border-radius: 0 !important;\n    overflow: visible !important;\n    z-index: 99999 !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .cert-name[_ngcontent-%COMP%] {\n    border-bottom: none !important;\n  }\n  .no-print[_ngcontent-%COMP%] {\n    visibility: hidden !important;\n  }\n  @page {\n    size: A4 portrait;\n    margin: 0;\n  }\n}\n/*# sourceMappingURL=certificate.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CertificateComponent, [{
    type: Component,
    args: [{ selector: "app-certificate", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [FormsModule], template: `
    <!-- Modal backdrop -->
    <div class="cert-backdrop" [class.visible]="visible()" (click)="onBackdropClick($event)">
      <div class="cert-modal" role="dialog" aria-modal="true" aria-label="Certificate Preview">

        <!-- Modal toolbar (screen-only) -->
        <div class="modal-hdr no-print">
          <span class="modal-hdr-title">
            <i class="fa-solid fa-certificate modal-hdr-icon"></i>
            Certificate Preview
          </span>
          <button class="close-btn" (click)="closed.emit()" aria-label="Close">\u2715</button>
        </div>

        <!-- Name input row (screen-only) -->
        <div class="name-row no-print">
          <label class="name-label" for="certName">Your name on certificate</label>
          <input
            id="certName"
            class="name-input"
            type="text"
            [(ngModel)]="editableName"
            placeholder="Enter your full name"
            maxlength="60"
          />
        </div>

        <!-- Print button (screen-only) -->
        <button class="print-btn no-print" (click)="print()">
          <i class="fa-solid fa-print"></i>
          Print / Save as PDF
        </button>

        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
        <!-- THE CERTIFICATE \u2014 this is what prints             -->
        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
        <div class="cert-page">

          <!-- Decorative corner flourishes -->
          <div class="corner-tl"></div>
          <div class="corner-tr"></div>
          <div class="corner-bl"></div>
          <div class="corner-br"></div>

          <!-- Header band -->
          <div class="cert-header">
            <div class="cert-header-inner">
              <div class="cert-logo-row">
                <svg class="cert-logo-icon" viewBox="0 0 24 24" width="28" height="28" fill="none">
                  <circle cx="12" cy="12" r="10" fill="#d4a853" opacity="0.2"/>
                  <path d="M8 7h8M8 12h5M8 17h7" stroke="#d4a853" stroke-width="1.8" stroke-linecap="round"/>
                  <circle cx="17" cy="17" r="4" fill="#1B4332" stroke="#d4a853" stroke-width="1.2"/>
                  <path d="M15.5 17l1 1 2-2" stroke="#d4a853" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span class="cert-logo-text">JavaIQ</span>
              </div>
              <div class="cert-header-rule">
                <span class="cert-header-rule-line"></span>
                <span class="cert-header-rule-diamond">\u25C6</span>
                <span class="cert-header-rule-line"></span>
              </div>
            </div>
          </div>

          <!-- Body -->
          <div class="cert-body">

            <!-- Certificate type title -->
            <div class="cert-type-title">
              {{ type() === 'course' ? 'CERTIFICATE OF COMPLETION' : 'CERTIFICATE OF ACHIEVEMENT' }}
            </div>

            <!-- Gold ornament rule -->
            <div class="cert-ornament">
              <span class="cert-ornament-line"></span>
              <span class="cert-ornament-star">\u2726</span>
              <span class="cert-ornament-line"></span>
            </div>

            <p class="cert-intro-text">This is to certify that</p>

            <!-- Recipient name -->
            <div class="cert-name">{{ editableName() || 'Java Developer' }}</div>

            <p class="cert-completed-text">
              @if (type() === 'course') {
                has successfully completed the course
              } @else {
                has successfully passed the assessment
              }
            </p>

            <!-- Course / Assessment title -->
            <div class="cert-course-title">{{ title() }}</div>

            <!-- Score pill \u2014 assessment only -->
            @if (score() !== null && score() !== undefined) {
              <div class="cert-score-pill">
                <i class="fa-solid fa-star cert-score-star"></i>
                Score: {{ score() }}%
              </div>
            }

            <!-- Category chip -->
            @if (category()) {
              <div class="cert-category-chip">{{ category() }}</div>
            }

            <!-- Date -->
            <div class="cert-date">{{ formattedDate }}</div>

          </div><!-- .cert-body -->

          <!-- Footer -->
          <div class="cert-footer">
            <!-- SVG Seal -->
            <svg class="cert-seal" width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
              <!-- Outer ring -->
              <circle cx="40" cy="40" r="38" fill="none" stroke="#1B4332" stroke-width="2"/>
              <!-- Inner gold ring -->
              <circle cx="40" cy="40" r="31" fill="none" stroke="#d4a853" stroke-width="1"/>
              <!-- 16-point starburst -->
              <polygon
                points="40,6 42,20 50,10 47,23 58,17 51,28 64,27 55,36 68,40 55,44 64,53 51,52 58,63 47,57 50,70 42,60 40,74 38,60 30,70 33,57 22,63 29,52 16,53 25,44 12,40 25,36 16,27 29,28 22,17 33,23 30,10 38,20"
                fill="#d4a853" opacity="0.18"/>
              <!-- Center circle -->
              <circle cx="40" cy="40" r="21" fill="#1B4332"/>
              <!-- JavaIQ text -->
              <text x="40" y="36" text-anchor="middle"
                    font-family="Inter, sans-serif" font-size="7.5"
                    font-weight="800" fill="#d4a853" letter-spacing="0.5">JavaIQ</text>
              <!-- Divider -->
              <line x1="28" y1="40" x2="52" y2="40" stroke="#d4a853" stroke-width="0.6" opacity="0.6"/>
              <!-- CERTIFIED text -->
              <text x="40" y="50" text-anchor="middle"
                    font-family="Inter, sans-serif" font-size="5"
                    font-weight="700" fill="rgba(212,168,83,0.85)" letter-spacing="1.2">CERTIFIED</text>
            </svg>

            <!-- Signature block -->
            <div class="cert-sig-block">
              <div class="cert-sig-name">JavaIQ Platform</div>
              <div class="cert-sig-line"></div>
              <div class="cert-sig-label">Authorized Signature</div>
            </div>
          </div><!-- .cert-footer -->

        </div><!-- .cert-page -->
      </div><!-- .cert-modal -->
    </div><!-- .cert-backdrop -->
  `, styles: ['/* angular:styles/component:css;e8b8ca873f935c3dab7c1348ceabdc72c61a21fc6b516fabbb2dab20ed63d08b;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/shared/certificate.component.ts */\n.cert-backdrop {\n  position: fixed;\n  inset: 0;\n  z-index: 9999;\n  background: rgba(0, 0, 0, 0.72);\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.25s ease;\n  padding: 16px;\n}\n.cert-backdrop.visible {\n  opacity: 1;\n  pointer-events: all;\n}\n.cert-modal {\n  background: #ffffff;\n  border-radius: 20px;\n  padding: 24px 24px 28px;\n  max-width: 680px;\n  width: 100%;\n  max-height: 92vh;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  box-shadow: 0 32px 80px rgba(0, 0, 0, 0.45);\n}\n:host-context(html.dark) .cert-modal {\n  background: #1a2332;\n}\n.modal-hdr {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.modal-hdr-title {\n  font-size: 0.92rem;\n  font-weight: 700;\n  color: #1B4332;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n:host-context(html.dark) .modal-hdr-title {\n  color: #d4a853;\n}\n.modal-hdr-icon {\n  color: #d4a853;\n}\n.close-btn {\n  background: rgba(0, 0, 0, 0.05);\n  border: none;\n  border-radius: 8px;\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  font-size: 0.8rem;\n  color: #64748b;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.15s;\n}\n.close-btn:hover {\n  background: rgba(0, 0, 0, 0.12);\n  color: #1B1B1B;\n}\n:host-context(html.dark) .close-btn {\n  background: rgba(255, 255, 255, 0.07);\n  color: #94a3b8;\n}\n:host-context(html.dark) .close-btn:hover {\n  background: rgba(255, 255, 255, 0.13);\n  color: #f1f5f9;\n}\n.name-row {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.name-label {\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: #52665A;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n:host-context(html.dark) .name-label {\n  color: #8A9B8F;\n}\n.name-input {\n  padding: 10px 14px;\n  border: 1.5px solid #D6DDD2;\n  border-radius: 10px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #1B1B1B;\n  background: #F5F7F2;\n  outline: none;\n  transition: border-color 0.15s;\n  font-family: "Inter", sans-serif;\n}\n.name-input:focus {\n  border-color: #1B4332;\n  background: #fff;\n}\n:host-context(html.dark) .name-input {\n  background: rgba(255, 255, 255, 0.06);\n  border-color: rgba(255, 255, 255, 0.12);\n  color: #f1f5f9;\n}\n:host-context(html.dark) .name-input:focus {\n  border-color: #40916C;\n}\n.print-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 12px 24px;\n  border-radius: 12px;\n  border: none;\n  cursor: pointer;\n  font-size: 0.88rem;\n  font-weight: 700;\n  background:\n    linear-gradient(\n      135deg,\n      #1B4332,\n      #2D6A4F);\n  color: #d4a853;\n  box-shadow: 0 4px 14px rgba(27, 67, 50, 0.4);\n  transition: all 0.2s ease;\n  letter-spacing: 0.02em;\n  align-self: flex-start;\n}\n.print-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 22px rgba(27, 67, 50, 0.45);\n}\n.cert-page {\n  width: 595px;\n  min-height: 842px;\n  background: #fefef8;\n  margin: 0 auto;\n  position: relative;\n  box-sizing: border-box;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    sans-serif;\n  color: #1B1B1B;\n  overflow: hidden;\n  border: 3.5px solid #1B4332;\n  box-shadow:\n    inset 0 0 0 8px #fefef8,\n    inset 0 0 0 9.5px #d4a853,\n    0 8px 40px rgba(0, 0, 0, 0.18);\n}\n.cert-page::before {\n  content: "JavaIQ";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) rotate(-30deg);\n  font-size: 110px;\n  font-weight: 900;\n  color: rgba(27, 67, 50, 0.035);\n  pointer-events: none;\n  letter-spacing: -0.04em;\n  white-space: nowrap;\n  z-index: 0;\n}\n.corner-tl,\n.corner-tr,\n.corner-bl,\n.corner-br {\n  position: absolute;\n  width: 36px;\n  height: 36px;\n  z-index: 1;\n}\n.corner-tl {\n  top: 18px;\n  left: 18px;\n  border-top: 2px solid #d4a853;\n  border-left: 2px solid #d4a853;\n  border-radius: 2px 0 0 0;\n}\n.corner-tr {\n  top: 18px;\n  right: 18px;\n  border-top: 2px solid #d4a853;\n  border-right: 2px solid #d4a853;\n  border-radius: 0 2px 0 0;\n}\n.corner-bl {\n  bottom: 18px;\n  left: 18px;\n  border-bottom: 2px solid #d4a853;\n  border-left: 2px solid #d4a853;\n  border-radius: 0 0 0 2px;\n}\n.corner-br {\n  bottom: 18px;\n  right: 18px;\n  border-bottom: 2px solid #d4a853;\n  border-right: 2px solid #d4a853;\n  border-radius: 0 0 2px 0;\n}\n.cert-header {\n  background:\n    linear-gradient(\n      135deg,\n      #1B4332 0%,\n      #2D6A4F 100%);\n  padding: 22px 44px 18px;\n  position: relative;\n  z-index: 1;\n}\n.cert-header-inner {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n.cert-logo-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.cert-logo-icon {\n  flex-shrink: 0;\n}\n.cert-logo-text {\n  font-size: 26px;\n  font-weight: 900;\n  color: #d4a853;\n  letter-spacing: -0.04em;\n}\n.cert-header-rule {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n}\n.cert-header-rule-line {\n  flex: 1;\n  height: 1px;\n  background:\n    linear-gradient(\n      to right,\n      transparent,\n      rgba(212, 168, 83, 0.5),\n      transparent);\n  display: block;\n}\n.cert-header-rule-diamond {\n  color: #d4a853;\n  font-size: 8px;\n  opacity: 0.8;\n}\n.cert-body {\n  padding: 28px 56px 24px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  position: relative;\n  z-index: 1;\n}\n.cert-type-title {\n  font-size: 12.5px;\n  font-weight: 800;\n  letter-spacing: 0.24em;\n  text-transform: uppercase;\n  color: #d4a853;\n  margin-bottom: 14px;\n}\n.cert-ornament {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 200px;\n  margin: 0 auto 20px;\n}\n.cert-ornament-line {\n  flex: 1;\n  height: 1px;\n  background:\n    linear-gradient(\n      to right,\n      transparent,\n      #d4a853);\n  display: block;\n}\n.cert-ornament-line:last-child {\n  background:\n    linear-gradient(\n      to left,\n      transparent,\n      #d4a853);\n}\n.cert-ornament-star {\n  font-size: 10px;\n  color: #d4a853;\n}\n.cert-intro-text {\n  font-size: 13px;\n  font-style: italic;\n  color: #52665A;\n  margin: 0 0 10px;\n  font-weight: 400;\n}\n.cert-name {\n  font-size: 36px;\n  font-weight: 800;\n  color: #1B4332;\n  letter-spacing: -0.025em;\n  line-height: 1.15;\n  margin: 0 0 10px;\n  padding-bottom: 6px;\n  border-bottom: 2px dashed rgba(27, 67, 50, 0.18);\n  min-width: 200px;\n  word-break: break-word;\n}\n.cert-completed-text {\n  font-size: 13px;\n  font-style: italic;\n  color: #52665A;\n  margin: 0 0 14px;\n  font-weight: 400;\n}\n.cert-course-title {\n  font-size: 22px;\n  font-weight: 800;\n  color: #1B4332;\n  line-height: 1.3;\n  margin: 0 0 18px;\n  letter-spacing: -0.01em;\n}\n.cert-score-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: rgba(212, 168, 83, 0.1);\n  border: 1.5px solid #d4a853;\n  color: #a07828;\n  font-size: 13px;\n  font-weight: 700;\n  padding: 5px 18px;\n  border-radius: 50px;\n  margin-bottom: 10px;\n}\n.cert-score-star {\n  font-size: 10px;\n}\n.cert-category-chip {\n  font-size: 9.5px;\n  font-weight: 800;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n  background: rgba(27, 67, 50, 0.07);\n  color: #1B4332;\n  border: 1px solid rgba(27, 67, 50, 0.18);\n  padding: 4px 14px;\n  border-radius: 20px;\n  margin-bottom: 16px;\n}\n.cert-date {\n  font-size: 11px;\n  color: #8A9B8F;\n  letter-spacing: 0.08em;\n  font-weight: 600;\n  margin-bottom: 0;\n}\n.cert-footer {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  padding: 0 52px 28px;\n  position: relative;\n  z-index: 1;\n}\n.cert-footer::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 52px;\n  right: 52px;\n  height: 1px;\n  background:\n    linear-gradient(\n      to right,\n      transparent,\n      rgba(27, 67, 50, 0.15),\n      transparent);\n}\n.cert-seal {\n  flex-shrink: 0;\n}\n.cert-sig-block {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n}\n.cert-sig-name {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1B4332;\n  letter-spacing: 0.03em;\n}\n.cert-sig-line {\n  width: 160px;\n  height: 1.5px;\n  background:\n    linear-gradient(\n      to right,\n      transparent,\n      #1B4332,\n      transparent);\n}\n.cert-sig-label {\n  font-size: 9px;\n  color: #8A9B8F;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  font-weight: 600;\n}\n@media print {\n  body * {\n    visibility: hidden !important;\n  }\n  app-certificate,\n  .cert-backdrop,\n  .cert-modal,\n  .cert-page,\n  .cert-page * {\n    visibility: visible !important;\n  }\n  .cert-page {\n    position: fixed !important;\n    top: 0 !important;\n    left: 0 !important;\n    width: 210mm !important;\n    min-height: 297mm !important;\n    margin: 0 !important;\n    border: 3.5px solid #1B4332 !important;\n    box-shadow: inset 0 0 0 8px #fefef8, inset 0 0 0 9.5px #d4a853 !important;\n    border-radius: 0 !important;\n    overflow: visible !important;\n    z-index: 99999 !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .cert-name {\n    border-bottom: none !important;\n  }\n  .no-print {\n    visibility: hidden !important;\n  }\n  @page {\n    size: A4 portrait;\n    margin: 0;\n  }\n}\n/*# sourceMappingURL=certificate.component.css.map */\n'] }]
  }], () => [], { type: [{ type: Input, args: [{ isSignal: true, alias: "type", required: true }] }], title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: true }] }], category: [{ type: Input, args: [{ isSignal: true, alias: "category", required: false }] }], score: [{ type: Input, args: [{ isSignal: true, alias: "score", required: false }] }], recipientName: [{ type: Input, args: [{ isSignal: true, alias: "recipientName", required: false }] }], visible: [{ type: Input, args: [{ isSignal: true, alias: "visible", required: false }] }], closed: [{ type: Output, args: ["closed"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CertificateComponent, { className: "CertificateComponent", filePath: "src/app/shared/certificate.component.ts", lineNumber: 586 });
})();

export {
  CertificateComponent
};
//# sourceMappingURL=chunk-PLLXPF33.js.map
