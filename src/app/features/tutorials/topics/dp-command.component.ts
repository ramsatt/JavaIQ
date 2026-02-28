import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-dp-command',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
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
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-red { color: #dc2626; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class DpCommandComponent {
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

// Invoker — decoupled from concrete commands
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
  codeMacro = `// Macro command — execute multiple commands as one
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
}
