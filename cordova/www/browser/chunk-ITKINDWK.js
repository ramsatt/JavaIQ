import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar
} from "./chunk-PWZS7QID.js";
import "./chunk-CSRIGHDB.js";
import "./chunk-CSKJ3OEL.js";
import "./chunk-T5LCTCQ6.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate
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

// src/app/features/about/about.component.ts
var _forTrack0 = ($index, $item) => $item.name;
function AboutComponent_For_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275element(1, "i", 52);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    \u0275\u0275styleProp("--skill-color", skill_r1.color)("--skill-bg", skill_r1.bg);
    \u0275\u0275advance();
    \u0275\u0275classMap(skill_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(skill_r1.name);
  }
}
function AboutComponent_For_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 37)(1, "div", 53);
    \u0275\u0275element(2, "i", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 55)(4, "span", 56);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 57);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 58);
    \u0275\u0275element(9, "i", 59);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const project_r2 = ctx.$implicit;
    \u0275\u0275property("href", project_r2.url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", project_r2.iconBg);
    \u0275\u0275advance();
    \u0275\u0275classMap(project_r2.icon);
    \u0275\u0275styleProp("color", project_r2.color);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(project_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(project_r2.desc);
  }
}
var AboutComponent = class _AboutComponent {
  skills = [
    { name: "Java", icon: "fa-brands fa-java", color: "#f59e0b", bg: "rgba(245,158,11,0.1)" },
    { name: "Spring Boot", icon: "fa-solid fa-leaf", color: "#10b981", bg: "rgba(16,185,129,0.1)" },
    { name: "Angular", icon: "fa-brands fa-angular", color: "#e53e3e", bg: "rgba(229,62,62,0.1)" },
    { name: "Ionic", icon: "fa-solid fa-mobile-screen", color: "#3880ff", bg: "rgba(56,128,255,0.1)" },
    { name: "TypeScript", icon: "fa-solid fa-code", color: "#3178c6", bg: "rgba(49,120,198,0.1)" },
    { name: "Microservices", icon: "fa-solid fa-cubes", color: "#8b5cf6", bg: "rgba(139,92,246,0.1)" },
    { name: "Docker", icon: "fa-brands fa-docker", color: "#0ea5e9", bg: "rgba(14,165,233,0.1)" },
    { name: "Firebase", icon: "fa-solid fa-fire", color: "#f97316", bg: "rgba(249,115,22,0.1)" },
    { name: "React", icon: "fa-brands fa-react", color: "#06b6d4", bg: "rgba(6,182,212,0.1)" },
    { name: "SQL", icon: "fa-solid fa-database", color: "#6366f1", bg: "rgba(99,102,241,0.1)" }
  ];
  projects = [
    {
      name: "JavaIQ",
      desc: "Master Java interviews with curated questions & tutorials",
      icon: "fa-solid fa-mug-hot",
      color: "#10b981",
      iconBg: "rgba(16,185,129,0.12)",
      url: "https://github.com/ramsatt/JavaIQ"
    },
    {
      name: "AngularIQ",
      desc: "Angular learning platform with structured courses",
      icon: "fa-brands fa-angular",
      color: "#e53e3e",
      iconBg: "rgba(229,62,62,0.1)",
      url: "https://github.com/ramsatt/AngularIQ"
    },
    {
      name: "AiInterviewCoach",
      desc: "AI-powered interview coaching and feedback tool",
      icon: "fa-solid fa-robot",
      color: "#8b5cf6",
      iconBg: "rgba(139,92,246,0.1)",
      url: "https://github.com/ramsatt/AiInterviewCoach"
    },
    {
      name: "GeminiMuse",
      desc: "Creative AI project powered by Google Gemini",
      icon: "fa-solid fa-wand-magic-sparkles",
      color: "#f59e0b",
      iconBg: "rgba(245,158,11,0.1)",
      url: "https://github.com/ramsatt/geminimuse"
    }
  ];
  static \u0275fac = function AboutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AboutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutComponent, selectors: [["app-about"]], decls: 97, vars: 0, consts: [["translucent", "true", 1, "ion-no-border"], [1, "about-toolbar"], ["slot", "start"], ["color", "light"], [1, "about-brand"], [1, "brand-icon"], [1, "about-page-content"], [1, "page-wrapper"], [1, "hero-section"], [1, "hero-glow"], [1, "hero-badge"], [1, "avatar-wrap"], [1, "avatar-ring"], [1, "avatar-inner"], [1, "avatar-status"], [1, "dev-name"], [1, "dev-name-accent"], [1, "dev-title"], [1, "dev-meta"], [1, "meta-chip"], [1, "fa-solid", "fa-building", "meta-icon"], [1, "fa-solid", "fa-location-dot", "meta-icon"], [1, "stats-bar"], [1, "stat-item"], [1, "stat-value"], [1, "stat-label"], [1, "stat-divider"], [1, "section-card", "bio-card"], [1, "section-label"], [1, "fa-solid", "fa-user", "section-label-icon"], [1, "bio-text"], [1, "section-card"], [1, "fa-solid", "fa-code", "section-label-icon"], [1, "skills-grid"], [1, "skill-chip", 3, "--skill-color", "--skill-bg"], [1, "fa-solid", "fa-rocket", "section-label-icon"], [1, "projects-list"], ["target", "_blank", "rel", "noopener noreferrer", 1, "project-card", 3, "href"], [1, "section-card", "connect-card"], [1, "fa-solid", "fa-link", "section-label-icon"], [1, "connect-links"], ["href", "https://github.com/ramsatt", "target", "_blank", "rel", "noopener noreferrer", 1, "connect-btn", "github-btn"], [1, "fa-brands", "fa-github", "connect-icon"], [1, "connect-sub"], ["href", "https://www.linkedin.com/in/ramsatt/", "target", "_blank", "rel", "noopener noreferrer", 1, "connect-btn", "linkedin-btn"], [1, "fa-brands", "fa-linkedin", "connect-icon"], [1, "footer-note"], [1, "footer-app-badge"], [1, "footer-app-icon"], [1, "footer-app-name"], [1, "footer-app-sub"], [1, "skill-chip"], [1, "skill-icon"], [1, "project-icon-wrap"], [1, "project-icon"], [1, "project-info"], [1, "project-name"], [1, "project-desc"], [1, "project-arrow"], [1, "fa-solid", "fa-arrow-up-right-from-square"]], template: function AboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2);
      \u0275\u0275element(3, "ion-menu-button", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "ion-title", 4)(5, "span", 5);
      \u0275\u0275text(6, "\u2615");
      \u0275\u0275elementEnd();
      \u0275\u0275text(7, " JavaIQ ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "ion-content", 6)(9, "div", 7)(10, "div", 8);
      \u0275\u0275element(11, "div", 9);
      \u0275\u0275elementStart(12, "div", 10);
      \u0275\u0275text(13, "\u{1F468}\u200D\u{1F4BB} About the Developer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 11)(15, "div", 12)(16, "div", 13);
      \u0275\u0275text(17, "SR");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(18, "div", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "h1", 15);
      \u0275\u0275text(20, "Sathish Kumar");
      \u0275\u0275element(21, "br");
      \u0275\u0275elementStart(22, "span", 16);
      \u0275\u0275text(23, "Ramalingam");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "p", 17);
      \u0275\u0275text(25, "Associate Architect");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 18)(27, "span", 19);
      \u0275\u0275element(28, "i", 20);
      \u0275\u0275text(29, " Cognizant ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "span", 19);
      \u0275\u0275element(31, "i", 21);
      \u0275\u0275text(32, " Chennai, India ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(33, "div", 22)(34, "div", 23)(35, "span", 24);
      \u0275\u0275text(36, "10+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "span", 25);
      \u0275\u0275text(38, "Years Exp");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(39, "div", 26);
      \u0275\u0275elementStart(40, "div", 23)(41, "span", 24);
      \u0275\u0275text(42, "70+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "span", 25);
      \u0275\u0275text(44, "Repos");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(45, "div", 26);
      \u0275\u0275elementStart(46, "div", 23)(47, "span", 24);
      \u0275\u0275text(48, "132");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "span", 25);
      \u0275\u0275text(50, "Followers");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(51, "div", 27)(52, "div", 28);
      \u0275\u0275element(53, "i", 29);
      \u0275\u0275text(54, " About ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "p", 30);
      \u0275\u0275text(56, ' A results-driven, customer-focused, articulate and analytical software engineer who can think "out of the box". Passionate about building tools that help developers grow \u2014 JavaIQ is a product of that passion. ');
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "div", 31)(58, "div", 28);
      \u0275\u0275element(59, "i", 32);
      \u0275\u0275text(60, " Tech Stack ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "div", 33);
      \u0275\u0275repeaterCreate(62, AboutComponent_For_63_Template, 4, 7, "div", 34, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "div", 31)(65, "div", 28);
      \u0275\u0275element(66, "i", 35);
      \u0275\u0275text(67, " Projects ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "div", 36);
      \u0275\u0275repeaterCreate(69, AboutComponent_For_70_Template, 10, 9, "a", 37, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "div", 38)(72, "div", 28);
      \u0275\u0275element(73, "i", 39);
      \u0275\u0275text(74, " Connect ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "div", 40)(76, "a", 41);
      \u0275\u0275element(77, "i", 42);
      \u0275\u0275elementStart(78, "span");
      \u0275\u0275text(79, "GitHub");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "span", 43);
      \u0275\u0275text(81, "github.com/ramsatt");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "a", 44);
      \u0275\u0275element(83, "i", 45);
      \u0275\u0275elementStart(84, "span");
      \u0275\u0275text(85, "LinkedIn");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "span", 43);
      \u0275\u0275text(87, "linkedin.com/in/ramsatt");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(88, "div", 46)(89, "div", 47)(90, "span", 48);
      \u0275\u0275text(91, "\u2615");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "div")(93, "span", 49);
      \u0275\u0275text(94, "JavaIQ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "span", 50);
      \u0275\u0275text(96, "Built with \u2764\uFE0F for Java developers");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(62);
      \u0275\u0275repeater(ctx.skills);
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.projects);
    }
  }, dependencies: [IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton], styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap";\n\n\n\n.about-toolbar[_ngcontent-%COMP%] {\n  --background: #0b1120;\n  --color: white;\n  --border-style: none;\n}\n.about-brand[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-weight: 800;\n  font-size: 1.2rem;\n  letter-spacing: -0.02em;\n  color: white;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.brand-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.about-page-content[_ngcontent-%COMP%] {\n  --background: #0b1120;\n}\n.page-wrapper[_ngcontent-%COMP%] {\n  padding: 0 16px 100px;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.hero-section[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  padding: 40px 24px 56px;\n  margin: 0 -16px;\n  background: #0b1120;\n}\n.hero-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -20px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 280px;\n  height: 280px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(16, 185, 129, 0.12) 0%,\n      transparent 70%);\n  border-radius: 50%;\n  pointer-events: none;\n}\n.hero-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-family: "Inter", sans-serif;\n  font-size: 0.7rem;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: #10b981;\n  background: rgba(16, 185, 129, 0.12);\n  border: 1px solid rgba(16, 185, 129, 0.25);\n  border-radius: 100px;\n  padding: 5px 14px;\n  margin-bottom: 20px;\n}\n.avatar-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  margin-bottom: 16px;\n}\n.avatar-ring[_ngcontent-%COMP%] {\n  width: 84px;\n  height: 84px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #34d399,\n      #6ee7b7);\n  padding: 3px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.avatar-inner[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #1e293b,\n      #0f172a);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: "Inter", sans-serif;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #10b981;\n  letter-spacing: -0.02em;\n}\n.avatar-status[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 4px;\n  right: 4px;\n  width: 14px;\n  height: 14px;\n  background: #10b981;\n  border-radius: 50%;\n  border: 2px solid #0b1120;\n}\n.dev-name[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 1.7rem;\n  font-weight: 900;\n  color: #e2e8f0;\n  letter-spacing: -0.03em;\n  line-height: 1.2;\n  margin: 0 0 6px;\n}\n.dev-name-accent[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #34d399 50%,\n      #6ee7b7 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.dev-title[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 0.85rem;\n  color: #64748b;\n  font-weight: 600;\n  margin: 0 0 14px;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n.dev-meta[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.meta-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-family: "Inter", sans-serif;\n  font-size: 0.72rem;\n  font-weight: 500;\n  color: #94a3b8;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 100px;\n  padding: 4px 12px;\n}\n.meta-icon[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  color: #10b981;\n}\n.stats-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 16px;\n  padding: 18px 8px;\n  margin-bottom: 16px;\n  margin-top: -32px;\n  position: relative;\n  z-index: 2;\n}\n.stat-item[_ngcontent-%COMP%] {\n  text-align: center;\n  flex: 1;\n}\n.stat-value[_ngcontent-%COMP%] {\n  display: block;\n  font-family: "Inter", sans-serif;\n  font-size: 1.5rem;\n  font-weight: 800;\n  letter-spacing: -0.03em;\n  line-height: 1;\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #34d399);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.stat-label[_ngcontent-%COMP%] {\n  display: block;\n  font-family: "Inter", sans-serif;\n  font-size: 0.62rem;\n  font-weight: 600;\n  color: #64748b;\n  margin-top: 5px;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n.stat-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 28px;\n  background: rgba(255, 255, 255, 0.08);\n}\n.section-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 16px;\n  padding: 18px;\n  margin-bottom: 14px;\n}\n.section-label[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #64748b;\n  margin-bottom: 14px;\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n.section-label-icon[_ngcontent-%COMP%] {\n  color: #10b981;\n  font-size: 0.65rem;\n}\n.bio-text[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 0.88rem;\n  color: #94a3b8;\n  line-height: 1.65;\n  margin: 0;\n  font-weight: 400;\n}\n.skills-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.skill-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-family: "Inter", sans-serif;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--skill-color);\n  background: var(--skill-bg);\n  border-radius: 8px;\n  padding: 6px 12px;\n  border: 1px solid color-mix(in srgb, var(--skill-color) 25%, transparent);\n}\n.skill-icon[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.projects-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.project-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  background: rgba(255, 255, 255, 0.02);\n  border: 1px solid rgba(255, 255, 255, 0.05);\n  border-radius: 12px;\n  text-decoration: none;\n  color: inherit;\n  transition: all 0.2s ease;\n}\n.project-card[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.05);\n  border-color: rgba(255, 255, 255, 0.1);\n  transform: translateY(-1px);\n}\n.project-icon-wrap[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.project-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.project-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.project-name[_ngcontent-%COMP%] {\n  display: block;\n  font-family: "Inter", sans-serif;\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: #e2e8f0;\n  margin-bottom: 2px;\n}\n.project-desc[_ngcontent-%COMP%] {\n  display: block;\n  font-family: "Inter", sans-serif;\n  font-size: 0.72rem;\n  color: #64748b;\n  font-weight: 400;\n}\n.project-arrow[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 0.7rem;\n  color: #334155;\n}\n.project-card[_ngcontent-%COMP%]:hover   .project-arrow[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.connect-links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.connect-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 14px 16px;\n  border-radius: 12px;\n  text-decoration: none;\n  color: inherit;\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  transition: all 0.2s ease;\n}\n.connect-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n.github-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n}\n.github-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.08);\n  border-color: rgba(255, 255, 255, 0.15);\n}\n.linkedin-btn[_ngcontent-%COMP%] {\n  background: rgba(10, 102, 194, 0.08);\n  border-color: rgba(10, 102, 194, 0.2);\n}\n.linkedin-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(10, 102, 194, 0.14);\n  border-color: rgba(10, 102, 194, 0.35);\n}\n.connect-icon[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  flex-shrink: 0;\n}\n.github-btn[_ngcontent-%COMP%]   .connect-icon[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.linkedin-btn[_ngcontent-%COMP%]   .connect-icon[_ngcontent-%COMP%] {\n  color: #0a66c2;\n}\n.connect-btn[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:nth-child(2) {\n  flex: 1;\n  font-family: "Inter", sans-serif;\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: #e2e8f0;\n}\n.connect-sub[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 0.68rem;\n  color: #475569;\n  font-weight: 400;\n}\n.footer-note[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 24px 0 0;\n}\n.footer-app-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.footer-app-icon[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n}\n.footer-app-name[_ngcontent-%COMP%] {\n  display: block;\n  font-family: "Inter", sans-serif;\n  font-size: 0.88rem;\n  font-weight: 800;\n  color: #e2e8f0;\n  letter-spacing: -0.02em;\n}\n.footer-app-sub[_ngcontent-%COMP%] {\n  display: block;\n  font-family: "Inter", sans-serif;\n  font-size: 0.7rem;\n  color: #334155;\n  font-weight: 500;\n  margin-top: 2px;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .about-toolbar[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .about-toolbar[_ngcontent-%COMP%] {\n  --background: #1B4332;\n  --color: white;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .about-page-content[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .about-page-content[_ngcontent-%COMP%] {\n  --background: #F5F7F2;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .hero-section[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .hero-section[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1B4332 0%,\n      #2D6A4F 55%,\n      #40916C 100%);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .hero-glow[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .hero-glow[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.12) 0%,\n      transparent 70%);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .hero-badge[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .hero-badge[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9);\n  background: rgba(255, 255, 255, 0.15);\n  border-color: rgba(255, 255, 255, 0.3);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .dev-name[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .dev-name[_ngcontent-%COMP%] {\n  color: #ffffff;\n  -webkit-text-fill-color: #ffffff;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .dev-name-accent[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .dev-name-accent[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #86efac 0%,\n      #bbf7d0 60%,\n      #d1fae5 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .dev-title[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .dev-title[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .meta-chip[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .meta-chip[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.85);\n  background: rgba(255, 255, 255, 0.15);\n  border-color: rgba(255, 255, 255, 0.25);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .meta-icon[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .meta-icon[_ngcontent-%COMP%] {\n  color: #d1fae5;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .avatar-inner[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .avatar-inner[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1B4332,\n      #0f2419);\n  color: #86efac;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .avatar-status[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .avatar-status[_ngcontent-%COMP%] {\n  border-color: #40916C;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .stats-bar[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .stats-bar[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-color: #D6DDD2;\n  box-shadow: 0 4px 20px rgba(27, 67, 50, 0.15);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .stat-value[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1B4332,\n      #2D6A4F);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .stat-label[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  color: #52665A;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .stat-divider[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .stat-divider[_ngcontent-%COMP%] {\n  background: #D6DDD2;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .section-card[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .section-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-color: #D6DDD2;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .section-label[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .section-label[_ngcontent-%COMP%] {\n  color: #8A9B8F;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .section-label-icon[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .section-label-icon[_ngcontent-%COMP%] {\n  color: #1B4332;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .bio-text[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .bio-text[_ngcontent-%COMP%] {\n  color: #52665A;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .skill-chip[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .skill-chip[_ngcontent-%COMP%] {\n  border-color: color-mix(in srgb, var(--skill-color) 30%, #D6DDD2);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .project-card[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .project-card[_ngcontent-%COMP%] {\n  background: #F5F7F2;\n  border-color: #D6DDD2;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .project-card[_ngcontent-%COMP%]:hover, html:not(.dark)   [_nghost-%COMP%]   .project-card[_ngcontent-%COMP%]:hover {\n  background: #EDF2E7;\n  border-color: #B7CCBB;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .project-name[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .project-name[_ngcontent-%COMP%] {\n  color: #1B1B1B;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .project-desc[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .project-desc[_ngcontent-%COMP%] {\n  color: #8A9B8F;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .project-arrow[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .project-arrow[_ngcontent-%COMP%] {\n  color: #D6DDD2;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .project-card[_ngcontent-%COMP%]:hover   .project-arrow[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .project-card[_ngcontent-%COMP%]:hover   .project-arrow[_ngcontent-%COMP%] {\n  color: #1B4332;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .github-btn[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .github-btn[_ngcontent-%COMP%] {\n  background: #F5F7F2;\n  border-color: #D6DDD2;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .github-btn[_ngcontent-%COMP%]:hover, html:not(.dark)   [_nghost-%COMP%]   .github-btn[_ngcontent-%COMP%]:hover {\n  background: #EDF2E7;\n  border-color: #B7CCBB;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .github-btn[_ngcontent-%COMP%]   .connect-icon[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .github-btn[_ngcontent-%COMP%]   .connect-icon[_ngcontent-%COMP%] {\n  color: #1B1B1B;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .connect-btn[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:nth-child(2), html:not(.dark)   [_nghost-%COMP%]   .connect-btn[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:nth-child(2) {\n  color: #1B1B1B;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .connect-sub[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .connect-sub[_ngcontent-%COMP%] {\n  color: #8A9B8F;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .footer-app-name[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .footer-app-name[_ngcontent-%COMP%] {\n  color: #1B1B1B;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .footer-app-sub[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .footer-app-sub[_ngcontent-%COMP%] {\n  color: #8A9B8F;\n}\n/*# sourceMappingURL=about.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AboutComponent, [{
    type: Component,
    args: [{ selector: "app-about", imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton], template: `
    <ion-header class="ion-no-border" translucent="true">
      <ion-toolbar class="about-toolbar">
        <ion-buttons slot="start">
          <ion-menu-button color="light"></ion-menu-button>
        </ion-buttons>
        <ion-title class="about-brand">
          <span class="brand-icon">\u2615</span> JavaIQ
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="about-page-content">
      <div class="page-wrapper">

        <!-- Hero Section -->
        <div class="hero-section">
          <div class="hero-glow"></div>
          <div class="hero-badge">\u{1F468}\u200D\u{1F4BB} About the Developer</div>
          <div class="avatar-wrap">
            <div class="avatar-ring">
              <div class="avatar-inner">SR</div>
            </div>
            <div class="avatar-status"></div>
          </div>
          <h1 class="dev-name">Sathish Kumar<br><span class="dev-name-accent">Ramalingam</span></h1>
          <p class="dev-title">Associate Architect</p>
          <div class="dev-meta">
            <span class="meta-chip">
              <i class="fa-solid fa-building meta-icon"></i>
              Cognizant
            </span>
            <span class="meta-chip">
              <i class="fa-solid fa-location-dot meta-icon"></i>
              Chennai, India
            </span>
          </div>
        </div>

        <!-- Stats Row -->
        <div class="stats-bar">
          <div class="stat-item">
            <span class="stat-value">10+</span>
            <span class="stat-label">Years Exp</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-value">70+</span>
            <span class="stat-label">Repos</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-value">132</span>
            <span class="stat-label">Followers</span>
          </div>
        </div>

        <!-- Bio -->
        <div class="section-card bio-card">
          <div class="section-label">
            <i class="fa-solid fa-user section-label-icon"></i> About
          </div>
          <p class="bio-text">
            A results-driven, customer-focused, articulate and analytical software engineer
            who can think "out of the box". Passionate about building tools that help developers
            grow \u2014 JavaIQ is a product of that passion.
          </p>
        </div>

        <!-- Skills -->
        <div class="section-card">
          <div class="section-label">
            <i class="fa-solid fa-code section-label-icon"></i> Tech Stack
          </div>
          <div class="skills-grid">
            @for (skill of skills; track skill.name) {
              <div class="skill-chip" [style.--skill-color]="skill.color" [style.--skill-bg]="skill.bg">
                <i [class]="skill.icon" class="skill-icon"></i>
                <span>{{ skill.name }}</span>
              </div>
            }
          </div>
        </div>

        <!-- Projects -->
        <div class="section-card">
          <div class="section-label">
            <i class="fa-solid fa-rocket section-label-icon"></i> Projects
          </div>
          <div class="projects-list">
            @for (project of projects; track project.name) {
              <a [href]="project.url" target="_blank" rel="noopener noreferrer" class="project-card">
                <div class="project-icon-wrap" [style.background]="project.iconBg">
                  <i [class]="project.icon" class="project-icon" [style.color]="project.color"></i>
                </div>
                <div class="project-info">
                  <span class="project-name">{{ project.name }}</span>
                  <span class="project-desc">{{ project.desc }}</span>
                </div>
                <div class="project-arrow">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </div>
              </a>
            }
          </div>
        </div>

        <!-- Connect -->
        <div class="section-card connect-card">
          <div class="section-label">
            <i class="fa-solid fa-link section-label-icon"></i> Connect
          </div>
          <div class="connect-links">
            <a href="https://github.com/ramsatt" target="_blank" rel="noopener noreferrer" class="connect-btn github-btn">
              <i class="fa-brands fa-github connect-icon"></i>
              <span>GitHub</span>
              <span class="connect-sub">github.com/ramsatt</span>
            </a>
            <a href="https://www.linkedin.com/in/ramsatt/" target="_blank" rel="noopener noreferrer" class="connect-btn linkedin-btn">
              <i class="fa-brands fa-linkedin connect-icon"></i>
              <span>LinkedIn</span>
              <span class="connect-sub">linkedin.com/in/ramsatt</span>
            </a>
          </div>
        </div>

        <!-- Built with love -->
        <div class="footer-note">
          <div class="footer-app-badge">
            <span class="footer-app-icon">\u2615</span>
            <div>
              <span class="footer-app-name">JavaIQ</span>
              <span class="footer-app-sub">Built with \u2764\uFE0F for Java developers</span>
            </div>
          </div>
        </div>

      </div>
    </ion-content>
  `, styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap";\n\n/* angular:styles/component:css;af4e92a7fc08973c7e6115b8d694bfac17935ec78968f0251b5aad382da5d47a;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/features/about/about.component.ts */\n.about-toolbar {\n  --background: #0b1120;\n  --color: white;\n  --border-style: none;\n}\n.about-brand {\n  font-family: "Inter", sans-serif;\n  font-weight: 800;\n  font-size: 1.2rem;\n  letter-spacing: -0.02em;\n  color: white;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.brand-icon {\n  font-size: 1.1rem;\n}\n.about-page-content {\n  --background: #0b1120;\n}\n.page-wrapper {\n  padding: 0 16px 100px;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.hero-section {\n  position: relative;\n  text-align: center;\n  padding: 40px 24px 56px;\n  margin: 0 -16px;\n  background: #0b1120;\n}\n.hero-glow {\n  position: absolute;\n  top: -20px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 280px;\n  height: 280px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(16, 185, 129, 0.12) 0%,\n      transparent 70%);\n  border-radius: 50%;\n  pointer-events: none;\n}\n.hero-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-family: "Inter", sans-serif;\n  font-size: 0.7rem;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: #10b981;\n  background: rgba(16, 185, 129, 0.12);\n  border: 1px solid rgba(16, 185, 129, 0.25);\n  border-radius: 100px;\n  padding: 5px 14px;\n  margin-bottom: 20px;\n}\n.avatar-wrap {\n  position: relative;\n  display: inline-flex;\n  margin-bottom: 16px;\n}\n.avatar-ring {\n  width: 84px;\n  height: 84px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #34d399,\n      #6ee7b7);\n  padding: 3px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.avatar-inner {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #1e293b,\n      #0f172a);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: "Inter", sans-serif;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #10b981;\n  letter-spacing: -0.02em;\n}\n.avatar-status {\n  position: absolute;\n  bottom: 4px;\n  right: 4px;\n  width: 14px;\n  height: 14px;\n  background: #10b981;\n  border-radius: 50%;\n  border: 2px solid #0b1120;\n}\n.dev-name {\n  font-family: "Inter", sans-serif;\n  font-size: 1.7rem;\n  font-weight: 900;\n  color: #e2e8f0;\n  letter-spacing: -0.03em;\n  line-height: 1.2;\n  margin: 0 0 6px;\n}\n.dev-name-accent {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #34d399 50%,\n      #6ee7b7 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.dev-title {\n  font-family: "Inter", sans-serif;\n  font-size: 0.85rem;\n  color: #64748b;\n  font-weight: 600;\n  margin: 0 0 14px;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n.dev-meta {\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.meta-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-family: "Inter", sans-serif;\n  font-size: 0.72rem;\n  font-weight: 500;\n  color: #94a3b8;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 100px;\n  padding: 4px 12px;\n}\n.meta-icon {\n  font-size: 0.65rem;\n  color: #10b981;\n}\n.stats-bar {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 16px;\n  padding: 18px 8px;\n  margin-bottom: 16px;\n  margin-top: -32px;\n  position: relative;\n  z-index: 2;\n}\n.stat-item {\n  text-align: center;\n  flex: 1;\n}\n.stat-value {\n  display: block;\n  font-family: "Inter", sans-serif;\n  font-size: 1.5rem;\n  font-weight: 800;\n  letter-spacing: -0.03em;\n  line-height: 1;\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #34d399);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.stat-label {\n  display: block;\n  font-family: "Inter", sans-serif;\n  font-size: 0.62rem;\n  font-weight: 600;\n  color: #64748b;\n  margin-top: 5px;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n.stat-divider {\n  width: 1px;\n  height: 28px;\n  background: rgba(255, 255, 255, 0.08);\n}\n.section-card {\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 16px;\n  padding: 18px;\n  margin-bottom: 14px;\n}\n.section-label {\n  font-family: "Inter", sans-serif;\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #64748b;\n  margin-bottom: 14px;\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n.section-label-icon {\n  color: #10b981;\n  font-size: 0.65rem;\n}\n.bio-text {\n  font-family: "Inter", sans-serif;\n  font-size: 0.88rem;\n  color: #94a3b8;\n  line-height: 1.65;\n  margin: 0;\n  font-weight: 400;\n}\n.skills-grid {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.skill-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-family: "Inter", sans-serif;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--skill-color);\n  background: var(--skill-bg);\n  border-radius: 8px;\n  padding: 6px 12px;\n  border: 1px solid color-mix(in srgb, var(--skill-color) 25%, transparent);\n}\n.skill-icon {\n  font-size: 0.8rem;\n}\n.projects-list {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.project-card {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  background: rgba(255, 255, 255, 0.02);\n  border: 1px solid rgba(255, 255, 255, 0.05);\n  border-radius: 12px;\n  text-decoration: none;\n  color: inherit;\n  transition: all 0.2s ease;\n}\n.project-card:hover {\n  background: rgba(255, 255, 255, 0.05);\n  border-color: rgba(255, 255, 255, 0.1);\n  transform: translateY(-1px);\n}\n.project-icon-wrap {\n  flex-shrink: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.project-icon {\n  font-size: 1rem;\n}\n.project-info {\n  flex: 1;\n  min-width: 0;\n}\n.project-name {\n  display: block;\n  font-family: "Inter", sans-serif;\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: #e2e8f0;\n  margin-bottom: 2px;\n}\n.project-desc {\n  display: block;\n  font-family: "Inter", sans-serif;\n  font-size: 0.72rem;\n  color: #64748b;\n  font-weight: 400;\n}\n.project-arrow {\n  flex-shrink: 0;\n  font-size: 0.7rem;\n  color: #334155;\n}\n.project-card:hover .project-arrow {\n  color: #10b981;\n}\n.connect-links {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.connect-btn {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 14px 16px;\n  border-radius: 12px;\n  text-decoration: none;\n  color: inherit;\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  transition: all 0.2s ease;\n}\n.connect-btn:hover {\n  transform: translateY(-1px);\n}\n.github-btn {\n  background: rgba(255, 255, 255, 0.04);\n}\n.github-btn:hover {\n  background: rgba(255, 255, 255, 0.08);\n  border-color: rgba(255, 255, 255, 0.15);\n}\n.linkedin-btn {\n  background: rgba(10, 102, 194, 0.08);\n  border-color: rgba(10, 102, 194, 0.2);\n}\n.linkedin-btn:hover {\n  background: rgba(10, 102, 194, 0.14);\n  border-color: rgba(10, 102, 194, 0.35);\n}\n.connect-icon {\n  font-size: 1.4rem;\n  flex-shrink: 0;\n}\n.github-btn .connect-icon {\n  color: #e2e8f0;\n}\n.linkedin-btn .connect-icon {\n  color: #0a66c2;\n}\n.connect-btn > span:nth-child(2) {\n  flex: 1;\n  font-family: "Inter", sans-serif;\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: #e2e8f0;\n}\n.connect-sub {\n  font-family: "Inter", sans-serif;\n  font-size: 0.68rem;\n  color: #475569;\n  font-weight: 400;\n}\n.footer-note {\n  display: flex;\n  justify-content: center;\n  padding: 24px 0 0;\n}\n.footer-app-badge {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.footer-app-icon {\n  font-size: 1.6rem;\n}\n.footer-app-name {\n  display: block;\n  font-family: "Inter", sans-serif;\n  font-size: 0.88rem;\n  font-weight: 800;\n  color: #e2e8f0;\n  letter-spacing: -0.02em;\n}\n.footer-app-sub {\n  display: block;\n  font-family: "Inter", sans-serif;\n  font-size: 0.7rem;\n  color: #334155;\n  font-weight: 500;\n  margin-top: 2px;\n}\n:host-context(html:not(.dark)) .about-toolbar {\n  --background: #1B4332;\n  --color: white;\n}\n:host-context(html:not(.dark)) .about-page-content {\n  --background: #F5F7F2;\n}\n:host-context(html:not(.dark)) .hero-section {\n  background:\n    linear-gradient(\n      135deg,\n      #1B4332 0%,\n      #2D6A4F 55%,\n      #40916C 100%);\n}\n:host-context(html:not(.dark)) .hero-glow {\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.12) 0%,\n      transparent 70%);\n}\n:host-context(html:not(.dark)) .hero-badge {\n  color: rgba(255, 255, 255, 0.9);\n  background: rgba(255, 255, 255, 0.15);\n  border-color: rgba(255, 255, 255, 0.3);\n}\n:host-context(html:not(.dark)) .dev-name {\n  color: #ffffff;\n  -webkit-text-fill-color: #ffffff;\n}\n:host-context(html:not(.dark)) .dev-name-accent {\n  background:\n    linear-gradient(\n      135deg,\n      #86efac 0%,\n      #bbf7d0 60%,\n      #d1fae5 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n:host-context(html:not(.dark)) .dev-title {\n  color: rgba(255, 255, 255, 0.7);\n}\n:host-context(html:not(.dark)) .meta-chip {\n  color: rgba(255, 255, 255, 0.85);\n  background: rgba(255, 255, 255, 0.15);\n  border-color: rgba(255, 255, 255, 0.25);\n}\n:host-context(html:not(.dark)) .meta-icon {\n  color: #d1fae5;\n}\n:host-context(html:not(.dark)) .avatar-inner {\n  background:\n    linear-gradient(\n      135deg,\n      #1B4332,\n      #0f2419);\n  color: #86efac;\n}\n:host-context(html:not(.dark)) .avatar-status {\n  border-color: #40916C;\n}\n:host-context(html:not(.dark)) .stats-bar {\n  background: #ffffff;\n  border-color: #D6DDD2;\n  box-shadow: 0 4px 20px rgba(27, 67, 50, 0.15);\n}\n:host-context(html:not(.dark)) .stat-value {\n  background:\n    linear-gradient(\n      135deg,\n      #1B4332,\n      #2D6A4F);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n:host-context(html:not(.dark)) .stat-label {\n  color: #52665A;\n}\n:host-context(html:not(.dark)) .stat-divider {\n  background: #D6DDD2;\n}\n:host-context(html:not(.dark)) .section-card {\n  background: #ffffff;\n  border-color: #D6DDD2;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n:host-context(html:not(.dark)) .section-label {\n  color: #8A9B8F;\n}\n:host-context(html:not(.dark)) .section-label-icon {\n  color: #1B4332;\n}\n:host-context(html:not(.dark)) .bio-text {\n  color: #52665A;\n}\n:host-context(html:not(.dark)) .skill-chip {\n  border-color: color-mix(in srgb, var(--skill-color) 30%, #D6DDD2);\n}\n:host-context(html:not(.dark)) .project-card {\n  background: #F5F7F2;\n  border-color: #D6DDD2;\n}\n:host-context(html:not(.dark)) .project-card:hover {\n  background: #EDF2E7;\n  border-color: #B7CCBB;\n}\n:host-context(html:not(.dark)) .project-name {\n  color: #1B1B1B;\n}\n:host-context(html:not(.dark)) .project-desc {\n  color: #8A9B8F;\n}\n:host-context(html:not(.dark)) .project-arrow {\n  color: #D6DDD2;\n}\n:host-context(html:not(.dark)) .project-card:hover .project-arrow {\n  color: #1B4332;\n}\n:host-context(html:not(.dark)) .github-btn {\n  background: #F5F7F2;\n  border-color: #D6DDD2;\n}\n:host-context(html:not(.dark)) .github-btn:hover {\n  background: #EDF2E7;\n  border-color: #B7CCBB;\n}\n:host-context(html:not(.dark)) .github-btn .connect-icon {\n  color: #1B1B1B;\n}\n:host-context(html:not(.dark)) .connect-btn > span:nth-child(2) {\n  color: #1B1B1B;\n}\n:host-context(html:not(.dark)) .connect-sub {\n  color: #8A9B8F;\n}\n:host-context(html:not(.dark)) .footer-app-name {\n  color: #1B1B1B;\n}\n:host-context(html:not(.dark)) .footer-app-sub {\n  color: #8A9B8F;\n}\n/*# sourceMappingURL=about.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutComponent, { className: "AboutComponent", filePath: "src/app/features/about/about.component.ts", lineNumber: 617 });
})();
export {
  AboutComponent
};
//# sourceMappingURL=chunk-ITKINDWK.js.map
