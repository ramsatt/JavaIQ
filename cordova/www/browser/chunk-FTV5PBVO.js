import{a as p,b as s,c as l}from"./chunk-4EMTR65D.js";import{Ib as o,Na as t,Ya as r,nb as i,ob as n,pb as e,qb as a}from"./chunk-X3QUIMOS.js";import"./chunk-NWJ5J3BN.js";var u=class c{codeIntro=`// Without command: button directly calls action
// button.onClick(() -> editor.copy());  // tightly coupled

// With command: button triggers a Command object
// button.onClick(new CopyCommand(editor));
// Now you can: undo, queue, log, serialize commands`;codeClassic=`interface Command {
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
toolbar.click("save");`;codeUndo=`interface UndoableCommand {
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
}`;codeMacro=`// Macro command \u2014 execute multiple commands as one
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
deploy.execute();  // runs all 4`;codeFunctional=`// Java functional: Runnable IS a command!
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
history.push(text -> text.toUpperCase()); // uppercase`;static \u0275fac=function(m){return new(m||c)};static \u0275cmp=r({type:c,selectors:[["app-topic-dp-command"]],decls:33,vars:7,consts:[["title","Command","subtitle","Encapsulate requests as objects. Undo/redo, macro commands, and task queues.","badge","DESIGN PATTERNS","gradient","linear-gradient(135deg, #991b1b, #f87171)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-red",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(m,d){m&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),a(3,"app-icon",3),o(4," Command"),e(),n(5,"div",4)(6,"p"),o(7,"The "),n(8,"strong"),o(9,"Command"),e(),o(10," pattern encapsulates a request as an object, enabling undo, queue, log, and macro commands."),e(),a(11,"app-code-block",5),e()(),n(12,"section",1)(13,"h2",2),a(14,"app-icon",6),o(15," Examples"),e(),n(16,"div",7)(17,"div",8)(18,"h3",9),o(19,"Classic"),e(),a(20,"app-code-block",5),e(),n(21,"div",8)(22,"h3",9),o(23,"Undo/Redo"),e(),a(24,"app-code-block",5),e(),n(25,"div",8)(26,"h3",9),o(27,"Macro"),e(),a(28,"app-code-block",5),e(),n(29,"div",8)(30,"h3",9),o(31,"Functional"),e(),a(32,"app-code-block",5),e()()()()),m&2&&(t(3),i("size",28),t(8),i("code",d.codeIntro),t(3),i("size",28),t(6),i("code",d.codeClassic),t(4),i("code",d.codeUndo),t(4),i("code",d.codeMacro),t(4),i("code",d.codeFunctional))},dependencies:[p,s,l],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-red[_ngcontent-%COMP%]{color:#dc2626}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{u as DpCommandComponent};
