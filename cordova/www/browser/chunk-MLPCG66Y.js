import {
  ChangeDetectionStrategy,
  Component,
  Input,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵnamespaceSVG,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-VBTVL2BZ.js";

// src/app/shared/icon.component.ts
function IconComponent_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElement(0, "path", 5)(1, "path", 6);
  }
}
function IconComponent_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElement(0, "polyline", 7)(1, "polyline", 8);
  }
}
function IconComponent_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElement(0, "rect", 9)(1, "path", 10);
  }
}
function IconComponent_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElement(0, "polygon", 1);
  }
}
function IconComponent_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElement(0, "circle", 11)(1, "line", 12);
  }
}
function IconComponent_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElement(0, "polyline", 13)(1, "polyline", 14)(2, "path", 15);
  }
}
function IconComponent_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElement(0, "path", 16)(1, "path", 17);
  }
}
function IconComponent_Case_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElement(0, "line", 18)(1, "polyline", 19);
  }
}
function IconComponent_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElement(0, "path", 20)(1, "polyline", 21);
  }
}
function IconComponent_Case_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElement(0, "path", 22)(1, "line", 23)(2, "line", 24);
  }
}
function IconComponent_Case_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElement(0, "polygon", 25)(1, "polyline", 26)(2, "polyline", 27);
  }
}
function IconComponent_Case_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElement(0, "polyline", 28)(1, "line", 29);
  }
}
function IconComponent_Case_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElement(0, "ellipse", 30)(1, "path", 31)(2, "path", 32);
  }
}
function IconComponent_Case_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElement(0, "rect", 33)(1, "rect", 34)(2, "line", 35)(3, "line", 36)(4, "line", 37)(5, "line", 38)(6, "line", 39)(7, "line", 40)(8, "line", 41)(9, "line", 42);
  }
}
function IconComponent_Case_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElement(0, "line", 43)(1, "circle", 44)(2, "circle", 45)(3, "path", 46);
  }
}
function IconComponent_Case_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElement(0, "polygon", 2);
  }
}
function IconComponent_Case_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElement(0, "path", 3);
  }
}
function IconComponent_Case_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElement(0, "circle", 47)(1, "path", 48);
  }
}
function IconComponent_Case_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElement(0, "path", 49)(1, "polyline", 50)(2, "line", 51);
  }
}
function IconComponent_Case_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElement(0, "line", 52)(1, "line", 53)(2, "line", 54)(3, "line", 55)(4, "line", 56)(5, "line", 57);
  }
}
function IconComponent_Case_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElement(0, "polyline", 4);
  }
}
var IconComponent = class _IconComponent {
  name = input.required(...ngDevMode ? [{ debugName: "name" }] : []);
  size = input(24, ...ngDevMode ? [{ debugName: "size" }] : []);
  css = input("", ...ngDevMode ? [{ debugName: "css" }] : []);
  static \u0275fac = function IconComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IconComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IconComponent, selectors: [["app-icon"]], hostAttrs: [2, "display", "inline-flex", "align-items", "center", "justify-content", "center"], inputs: { name: [1, "name"], size: [1, "size"], css: [1, "css"] }, decls: 22, vars: 5, consts: [["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["points", "5 3 19 12 5 21 5 3"], ["points", "13 2 3 14 12 14 11 22 21 10 12 10 13 2"], ["d", "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"], ["points", "9 18 15 12 9 6"], ["d", "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"], ["d", "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"], ["points", "16 18 22 12 16 6"], ["points", "8 6 2 12 8 18"], ["x", "2", "y", "7", "width", "20", "height", "14", "rx", "2", "ry", "2"], ["d", "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"], ["cx", "11", "cy", "11", "r", "8"], ["x1", "21", "y1", "21", "x2", "16.65", "y2", "16.65"], ["points", "23 4 23 10 17 10"], ["points", "1 20 1 14 7 14"], ["d", "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"], ["d", "M12 20h9"], ["d", "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], ["points", "12 5 19 12 12 19"], ["d", "M22 11.08V12a10 10 0 1 1-5.93-9.14"], ["points", "22 4 12 14.01 9 11.01"], ["d", "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"], ["x1", "12", "y1", "9", "x2", "12", "y2", "13"], ["x1", "12", "y1", "17", "x2", "12.01", "y2", "17"], ["points", "12 2 2 7 12 12 22 7 12 2"], ["points", "2 17 12 22 22 17"], ["points", "2 12 12 17 22 12"], ["points", "4 17 10 11 4 5"], ["x1", "12", "y1", "19", "x2", "20", "y2", "19"], ["cx", "12", "cy", "5", "rx", "9", "ry", "3"], ["d", "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"], ["d", "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"], ["x", "4", "y", "4", "width", "16", "height", "16", "rx", "2", "ry", "2"], ["x", "9", "y", "9", "width", "6", "height", "6"], ["x1", "9", "y1", "1", "x2", "9", "y2", "4"], ["x1", "15", "y1", "1", "x2", "15", "y2", "4"], ["x1", "9", "y1", "20", "x2", "9", "y2", "23"], ["x1", "15", "y1", "20", "x2", "15", "y2", "23"], ["x1", "20", "y1", "9", "x2", "23", "y2", "9"], ["x1", "20", "y1", "14", "x2", "23", "y2", "14"], ["x1", "1", "y1", "9", "x2", "4", "y2", "9"], ["x1", "1", "y1", "14", "x2", "4", "y2", "14"], ["x1", "6", "y1", "3", "x2", "6", "y2", "15"], ["cx", "18", "cy", "6", "r", "3"], ["cx", "6", "cy", "18", "r", "3"], ["d", "M18 9a9 9 0 0 1-9 9"], ["cx", "12", "cy", "12", "r", "3"], ["d", "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"], ["d", "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"], ["points", "3.27 6.96 12 12.01 20.73 6.96"], ["x1", "12", "y1", "22.08", "x2", "12", "y2", "12"], ["x1", "8", "y1", "6", "x2", "21", "y2", "6"], ["x1", "8", "y1", "12", "x2", "21", "y2", "12"], ["x1", "8", "y1", "18", "x2", "21", "y2", "18"], ["x1", "3", "y1", "6", "x2", "3.01", "y2", "6"], ["x1", "3", "y1", "12", "x2", "3.01", "y2", "12"], ["x1", "3", "y1", "18", "x2", "3.01", "y2", "18"]], template: function IconComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(0, "svg", 0);
      \u0275\u0275conditionalCreate(1, IconComponent_Case_1_Template, 2, 0)(2, IconComponent_Case_2_Template, 2, 0)(3, IconComponent_Case_3_Template, 2, 0)(4, IconComponent_Case_4_Template, 1, 0, ":svg:polygon", 1)(5, IconComponent_Case_5_Template, 2, 0)(6, IconComponent_Case_6_Template, 3, 0)(7, IconComponent_Case_7_Template, 2, 0)(8, IconComponent_Case_8_Template, 2, 0)(9, IconComponent_Case_9_Template, 2, 0)(10, IconComponent_Case_10_Template, 3, 0)(11, IconComponent_Case_11_Template, 3, 0)(12, IconComponent_Case_12_Template, 2, 0)(13, IconComponent_Case_13_Template, 3, 0)(14, IconComponent_Case_14_Template, 10, 0)(15, IconComponent_Case_15_Template, 4, 0)(16, IconComponent_Case_16_Template, 1, 0, ":svg:polygon", 2)(17, IconComponent_Case_17_Template, 1, 0, ":svg:path", 3)(18, IconComponent_Case_18_Template, 2, 0)(19, IconComponent_Case_19_Template, 3, 0)(20, IconComponent_Case_20_Template, 6, 0)(21, IconComponent_Case_21_Template, 1, 0, ":svg:polyline", 4);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      let tmp_3_0;
      \u0275\u0275classMap(ctx.css());
      \u0275\u0275attribute("width", ctx.size())("height", ctx.size());
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_3_0 = ctx.name()) === "book-open" ? 1 : tmp_3_0 === "code" ? 2 : tmp_3_0 === "briefcase" ? 3 : tmp_3_0 === "play" ? 4 : tmp_3_0 === "search" ? 5 : tmp_3_0 === "refresh-cw" ? 6 : tmp_3_0 === "edit-3" ? 7 : tmp_3_0 === "arrow-right" ? 8 : tmp_3_0 === "check-circle" ? 9 : tmp_3_0 === "alert-triangle" ? 10 : tmp_3_0 === "layers" ? 11 : tmp_3_0 === "terminal" ? 12 : tmp_3_0 === "database" ? 13 : tmp_3_0 === "cpu" ? 14 : tmp_3_0 === "git-branch" ? 15 : tmp_3_0 === "zap" ? 16 : tmp_3_0 === "shield" ? 17 : tmp_3_0 === "settings" ? 18 : tmp_3_0 === "box" ? 19 : tmp_3_0 === "list" ? 20 : tmp_3_0 === "chevron-right" ? 21 : -1);
    }
  }, encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconComponent, [{
    type: Component,
    args: [{
      selector: "app-icon",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <svg xmlns="http://www.w3.org/2000/svg"
         [attr.width]="size()"
         [attr.height]="size()"
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         stroke-width="2"
         stroke-linecap="round"
         stroke-linejoin="round"
         [class]="css()">
      @switch (name()) {
        @case ('book-open') {
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
        }
        @case ('code') {
          <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
        }
        @case ('briefcase') {
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        }
        @case ('play') {
          <polygon points="5 3 19 12 5 21 5 3"/>
        }
        @case ('search') {
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        }
        @case ('refresh-cw') {
          <polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
        }
        @case ('edit-3') {
          <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
        }
        @case ('arrow-right') {
          <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
        }
        @case ('check-circle') {
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
        }
        @case ('alert-triangle') {
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
        }
        @case ('layers') {
          <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
        }
        @case ('terminal') {
          <polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>
        }
        @case ('database') {
          <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
        }
        @case ('cpu') {
          <rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>
        }
        @case ('git-branch') {
          <line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>
        }
        @case ('zap') {
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        }
        @case ('shield') {
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        }
        @case ('settings') {
          <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        }
        @case ('box') {
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
        }
        @case ('list') {
          <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>
        }
        @case ('chevron-right') {
          <polyline points="9 18 15 12 9 6"/>
        }
      }
    </svg>
  `,
      host: { style: "display: inline-flex; align-items: center; justify-content: center;" }
    }]
  }], null, { name: [{ type: Input, args: [{ isSignal: true, alias: "name", required: true }] }], size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false }] }], css: [{ type: Input, args: [{ isSignal: true, alias: "css", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IconComponent, { className: "IconComponent", filePath: "src/app/shared/icon.component.ts", lineNumber: 86 });
})();

// src/app/shared/code-block.component.ts
var CodeBlockComponent = class _CodeBlockComponent {
  code = input.required(...ngDevMode ? [{ debugName: "code" }] : []);
  static \u0275fac = function CodeBlockComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CodeBlockComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CodeBlockComponent, selectors: [["app-code-block"]], inputs: { code: [1, "code"] }, decls: 4, vars: 1, consts: [[1, "code-wrapper"]], template: function CodeBlockComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "pre")(2, "code");
      \u0275\u0275text(3);
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.code());
    }
  }, styles: ['\n\n.code-wrapper[_ngcontent-%COMP%] {\n  background: #1e293b;\n  color: #e2e8f0;\n  padding: 18px 20px;\n  border-radius: 14px;\n  overflow-x: auto;\n  margin: 16px 0;\n  font-family:\n    "JetBrains Mono",\n    "Fira Code",\n    monospace;\n  font-size: 0.78rem;\n  line-height: 1.7;\n  border: 1px solid #334155;\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15);\n}\npre[_ngcontent-%COMP%] {\n  margin: 0;\n}\ncode[_ngcontent-%COMP%] {\n  white-space: pre;\n}\n/*# sourceMappingURL=code-block.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CodeBlockComponent, [{
    type: Component,
    args: [{ selector: "app-code-block", changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <div class="code-wrapper">
      <pre><code>{{ code() }}</code></pre>
    </div>
  `, styles: ['/* angular:styles/component:css;6830c70c378b84086505ec109bd559823a7a63f7de55c0b544ee112f987175b0;/Users/sathishkumarramalingam/projects/JavaIQ/.claude/worktrees/goofy-haibt/src/app/shared/code-block.component.ts */\n.code-wrapper {\n  background: #1e293b;\n  color: #e2e8f0;\n  padding: 18px 20px;\n  border-radius: 14px;\n  overflow-x: auto;\n  margin: 16px 0;\n  font-family:\n    "JetBrains Mono",\n    "Fira Code",\n    monospace;\n  font-size: 0.78rem;\n  line-height: 1.7;\n  border: 1px solid #334155;\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15);\n}\npre {\n  margin: 0;\n}\ncode {\n  white-space: pre;\n}\n/*# sourceMappingURL=code-block.component.css.map */\n'] }]
  }], null, { code: [{ type: Input, args: [{ isSignal: true, alias: "code", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CodeBlockComponent, { className: "CodeBlockComponent", filePath: "src/app/shared/code-block.component.ts", lineNumber: 29 });
})();

// src/app/shared/tutorial-layout.component.ts
var _c0 = ["*"];
var TutorialLayoutComponent = class _TutorialLayoutComponent {
  badge = input("JAVA MASTERCLASS", ...ngDevMode ? [{ debugName: "badge" }] : []);
  title = input.required(...ngDevMode ? [{ debugName: "title" }] : []);
  subtitle = input("", ...ngDevMode ? [{ debugName: "subtitle" }] : []);
  gradient = input("linear-gradient(145deg, #081C15 0%, #1B4332 50%, #2D6A4F 100%)", ...ngDevMode ? [{ debugName: "gradient" }] : []);
  static \u0275fac = function TutorialLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TutorialLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TutorialLayoutComponent, selectors: [["app-tutorial-layout"]], inputs: { badge: [1, "badge"], title: [1, "title"], subtitle: [1, "subtitle"], gradient: [1, "gradient"] }, ngContentSelectors: _c0, decls: 17, vars: 5, consts: [[1, "tutorial-page"], [1, "hero"], [1, "hero-glow"], [1, "hero-inner"], [1, "hero-badge"], [1, "hero-title"], [1, "hero-subtitle"], [1, "content"], [1, "footer"], [1, "footer-logo"]], template: function TutorialLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275domElementStart(0, "div", 0)(1, "header", 1);
      \u0275\u0275domElement(2, "div", 2);
      \u0275\u0275domElementStart(3, "div", 3)(4, "span", 4);
      \u0275\u0275text(5);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "h1", 5);
      \u0275\u0275text(7);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(8, "p", 6);
      \u0275\u0275text(9);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(10, "main", 7);
      \u0275\u0275projection(11);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(12, "footer", 8)(13, "div", 9);
      \u0275\u0275text(14, "JavaIQ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(15, "p");
      \u0275\u0275text(16, "\xA9 2026 JavaIQ. Master your Java journey.");
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275styleProp("background", ctx.gradient());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.badge());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.title());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.subtitle());
    }
  }, styles: ["\n\n.tutorial-page[_ngcontent-%COMP%] {\n  min-height: 100%;\n  background: #fff;\n}\n.hero[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 64px 20px 52px;\n  color: #fff;\n  overflow: hidden;\n  text-align: center;\n}\n.hero-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -100px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 300px;\n  height: 300px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(218, 165, 32, 0.1) 0%,\n      transparent 70%);\n  filter: blur(60px);\n}\n.hero-inner[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  max-width: 680px;\n  margin: 0 auto;\n}\n.hero-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #DAA520;\n  color: #081C15;\n  padding: 4px 14px;\n  border-radius: 20px;\n  font-size: 0.62rem;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  margin-bottom: 20px;\n}\n.hero-title[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n  font-size: 2.2rem;\n  font-weight: 800;\n  letter-spacing: -0.04em;\n  line-height: 1;\n}\n.hero-subtitle[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  font-size: 0.95rem;\n  color: rgba(255, 255, 255, 0.8);\n  line-height: 1.55;\n  max-width: 500px;\n}\n.content[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin: 0 auto;\n  padding: 48px 20px 100px;\n}\n.footer[_ngcontent-%COMP%] {\n  background: #081C15;\n  color: #8A9B8F;\n  text-align: center;\n  padding: 48px 24px;\n}\n.footer-logo[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 800;\n  color: #DAA520;\n  margin-bottom: 8px;\n}\n.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n/*# sourceMappingURL=tutorial-layout.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TutorialLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-tutorial-layout", changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <div class="tutorial-page">
      <!-- Premium Hero Header -->
      <header class="hero" [style.background]="gradient()">
        <div class="hero-glow"></div>
        <div class="hero-inner">
          <span class="hero-badge">{{ badge() }}</span>
          <h1 class="hero-title">{{ title() }}</h1>
          <p class="hero-subtitle">{{ subtitle() }}</p>
        </div>
      </header>

      <!-- Content Slot -->
      <main class="content">
        <ng-content />
      </main>

      <!-- Footer -->
      <footer class="footer">
        <div class="footer-logo">JavaIQ</div>
        <p>\xA9 2026 JavaIQ. Master your Java journey.</p>
      </footer>
    </div>
  `, styles: ["/* angular:styles/component:css;eb480ad214460cbc32d03ecac2542e50b7a1ef462216b488424f1ce52fa414a9;/Users/sathishkumarramalingam/projects/JavaIQ/.claude/worktrees/goofy-haibt/src/app/shared/tutorial-layout.component.ts */\n.tutorial-page {\n  min-height: 100%;\n  background: #fff;\n}\n.hero {\n  position: relative;\n  padding: 64px 20px 52px;\n  color: #fff;\n  overflow: hidden;\n  text-align: center;\n}\n.hero-glow {\n  position: absolute;\n  top: -100px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 300px;\n  height: 300px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(218, 165, 32, 0.1) 0%,\n      transparent 70%);\n  filter: blur(60px);\n}\n.hero-inner {\n  position: relative;\n  z-index: 1;\n  max-width: 680px;\n  margin: 0 auto;\n}\n.hero-badge {\n  display: inline-block;\n  background: #DAA520;\n  color: #081C15;\n  padding: 4px 14px;\n  border-radius: 20px;\n  font-size: 0.62rem;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  margin-bottom: 20px;\n}\n.hero-title {\n  margin: 0 0 14px;\n  font-size: 2.2rem;\n  font-weight: 800;\n  letter-spacing: -0.04em;\n  line-height: 1;\n}\n.hero-subtitle {\n  margin: 0 auto;\n  font-size: 0.95rem;\n  color: rgba(255, 255, 255, 0.8);\n  line-height: 1.55;\n  max-width: 500px;\n}\n.content {\n  max-width: 720px;\n  margin: 0 auto;\n  padding: 48px 20px 100px;\n}\n.footer {\n  background: #081C15;\n  color: #8A9B8F;\n  text-align: center;\n  padding: 48px 24px;\n}\n.footer-logo {\n  font-size: 1.2rem;\n  font-weight: 800;\n  color: #DAA520;\n  margin-bottom: 8px;\n}\n.footer p {\n  margin: 0;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n/*# sourceMappingURL=tutorial-layout.component.css.map */\n"] }]
  }], null, { badge: [{ type: Input, args: [{ isSignal: true, alias: "badge", required: false }] }], title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: true }] }], subtitle: [{ type: Input, args: [{ isSignal: true, alias: "subtitle", required: false }] }], gradient: [{ type: Input, args: [{ isSignal: true, alias: "gradient", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TutorialLayoutComponent, { className: "TutorialLayoutComponent", filePath: "src/app/shared/tutorial-layout.component.ts", lineNumber: 99 });
})();

export {
  IconComponent,
  CodeBlockComponent,
  TutorialLayoutComponent
};
//# sourceMappingURL=chunk-MLPCG66Y.js.map
