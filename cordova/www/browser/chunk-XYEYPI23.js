import {
  CodeBlockComponent,
  TutorialLayoutComponent
} from "./chunk-ACGKXV3L.js";
import {
  IconComponent
} from "./chunk-GCMLYE3M.js";
import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-6OY2Y3BE.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/dp-command.component.ts
var DpCommandComponent = class _DpCommandComponent {
  codeIntro = `// Without command: button directly calls action
// button.onClick(() -> editor.copy());  // tightly coupled

// With command: button triggers a Command object
// button.onClick(new CopyCommand(editor));
// Now you can: undo, queue, log, serialize commands`;
  codeClassic = `interface Command {
    void execute();
}

class SaveCommand implements Command {
    private final Document doc;
    SaveCommand(Document doc) { this.doc = doc; }
    public void execute() { doc.save(); }
}

class PrintCommand implements Command {
    private final Document doc;
    PrintCommand(Document doc) { this.doc = doc; }
    public void execute() { doc.print(); }
}

// Invoker \u2014 decoupled from concrete commands
class Toolbar {
    private final Map<String, Command> commands = new HashMap<>();
    void register(String name, Command cmd) { commands.put(name, cmd); }
    void click(String name) { commands.get(name).execute(); }
}

toolbar.register("save", new SaveCommand(doc));
toolbar.click("save");`;
  codeUndo = `interface UndoableCommand {
    void execute();
    void undo();
}

class InsertTextCommand implements UndoableCommand {
    private final Editor editor;
    private final String text;
    private int position;

    public void execute() {
        position = editor.getCursorPosition();
        editor.insert(text);
    }
    public void undo() {
        editor.delete(position, text.length());
    }
}

// Command history
class CommandHistory {
    private final Deque<UndoableCommand> history = new ArrayDeque<>();
    void execute(UndoableCommand cmd) { cmd.execute(); history.push(cmd); }
    void undo() { if (!history.isEmpty()) history.pop().undo(); }
}`;
  codeMacro = `// Macro command \u2014 execute multiple commands as one
class MacroCommand implements Command {
    private final List<Command> commands;
    MacroCommand(Command... cmds) { commands = List.of(cmds); }
    public void execute() { commands.forEach(Command::execute); }
}

// "Deploy" = build + test + push + notify
Command deploy = new MacroCommand(
    new BuildCommand(),
    new TestCommand(),
    new PushCommand(),
    new NotifyCommand()
);
deploy.execute();  // runs all 4`;
  codeFunctional = `// Java functional: Runnable IS a command!
Deque<Runnable> commandQueue = new ArrayDeque<>();

commandQueue.add(() -> editor.copy());
commandQueue.add(() -> editor.paste());
commandQueue.add(() -> editor.save());

// Execute all queued commands
while (!commandQueue.isEmpty()) {
    commandQueue.poll().run();
}

// With undo: use Function<State, State>
Deque<Function<String, String>> history = new ArrayDeque<>();
history.push(text -> text + " world");  // append
history.push(text -> text.toUpperCase()); // uppercase`;
  static \u0275fac = function DpCommandComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DpCommandComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DpCommandComponent, selectors: [["app-topic-dp-command"]], decls: 33, vars: 7, consts: [["title", "Command", "subtitle", "Encapsulate requests as objects. Undo/redo, macro commands, and task queues.", "badge", "DESIGN PATTERNS", "gradient", "linear-gradient(135deg, #991b1b, #f87171)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-red", 3, "size"], [1, "prose"], [3, "code"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"]], template: function DpCommandComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Command");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7, "The ");
      \u0275\u0275elementStart(8, "strong");
      \u0275\u0275text(9, "Command");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " pattern encapsulates a request as an object, enabling undo, queue, log, and macro commands.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "section", 1)(13, "h2", 2);
      \u0275\u0275element(14, "app-icon", 6);
      \u0275\u0275text(15, " Examples");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 7)(17, "div", 8)(18, "h3", 9);
      \u0275\u0275text(19, "Classic");
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 8)(22, "h3", 9);
      \u0275\u0275text(23, "Undo/Redo");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 8)(26, "h3", 9);
      \u0275\u0275text(27, "Macro");
      \u0275\u0275elementEnd();
      \u0275\u0275element(28, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 8)(30, "h3", 9);
      \u0275\u0275text(31, "Functional");
      \u0275\u0275elementEnd();
      \u0275\u0275element(32, "app-code-block", 5);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(8);
      \u0275\u0275property("code", ctx.codeIntro);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(6);
      \u0275\u0275property("code", ctx.codeClassic);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeUndo);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeMacro);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeFunctional);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ["\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-red[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=dp-command.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DpCommandComponent, [{
    type: Component,
    args: [{ selector: "app-topic-dp-command", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout title="Command" subtitle="Encapsulate requests as objects. Undo/redo, macro commands, and task queues." badge="DESIGN PATTERNS" gradient="linear-gradient(135deg, #991b1b, #f87171)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-red" /> Command</h2>
        <div class="prose"><p>The <strong>Command</strong> pattern encapsulates a request as an object, enabling undo, queue, log, and macro commands.</p><app-code-block [code]="codeIntro" /></div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Examples</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Classic</h3><app-code-block [code]="codeClassic" /></div>
          <div class="op-card"><h3 class="op-title">Undo/Redo</h3><app-code-block [code]="codeUndo" /></div>
          <div class="op-card"><h3 class="op-title">Macro</h3><app-code-block [code]="codeMacro" /></div>
          <div class="op-card"><h3 class="op-title">Functional</h3><app-code-block [code]="codeFunctional" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ["/* angular:styles/component:css;1ee42a2cc863167e2d72aae7bff69d10566960b45c9f918822b56c174d26e297;D:/A21/JavaIQ/src/app/features/tutorials/topics/dp-command.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-red {\n  color: #dc2626;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=dp-command.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DpCommandComponent, { className: "DpCommandComponent", filePath: "src/app/features/tutorials/topics/dp-command.component.ts", lineNumber: 33 });
})();
export {
  DpCommandComponent
};
//# sourceMappingURL=chunk-XYEYPI23.js.map
