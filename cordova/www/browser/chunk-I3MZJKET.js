import {
  Injectable,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-L6VISU4K.js";

// src/app/features/assessments/assess.service.ts
var AssessService = class _AssessService {
  _answers = signal([], ...ngDevMode ? [{ debugName: "_answers" }] : []);
  _result = signal(null, ...ngDevMode ? [{ debugName: "_result" }] : []);
  answers = this._answers.asReadonly();
  result = this._result.asReadonly();
  startQuiz(questionCount) {
    this._answers.set(new Array(questionCount).fill(-1));
  }
  setAnswer(qIndex, optIndex) {
    this._answers.update((arr) => {
      const copy = [...arr];
      copy[qIndex] = optIndex;
      return copy;
    });
  }
  submitQuiz(quizId, title, category, questions, timeTaken) {
    const answers = this._answers();
    const correct = questions.reduce((sum, q, i) => sum + (answers[i] === q.ans ? 1 : 0), 0);
    const score = Math.round(correct / questions.length * 100);
    this._result.set({ quizId, title, category, score, correct, total: questions.length, timeTaken, answers: [...answers], questions });
  }
  clearResult() {
    this._result.set(null);
    this._answers.set([]);
  }
  static \u0275fac = function AssessService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AssessService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AssessService, factory: _AssessService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssessService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  AssessService
};
//# sourceMappingURL=chunk-I3MZJKET.js.map
