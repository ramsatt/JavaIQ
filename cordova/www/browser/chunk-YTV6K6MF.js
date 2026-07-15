import{a as s,b as p,c as l}from"./chunk-IN5CYMS5.js";import"./chunk-IS4X7JQG.js";import"./chunk-7SFQX2NP.js";import"./chunk-JTAKQG6P.js";import{P as i,S as r,ba as a,ca as n,da as e,ea as t,wa as o}from"./chunk-UO6CZCBJ.js";import"./chunk-JKY3FJOK.js";import"./chunk-36LMHX4H.js";import"./chunk-QSPX3XV4.js";import"./chunk-CFQFX75D.js";import"./chunk-5AR3GM6G.js";import"./chunk-DGLFGWVP.js";import"./chunk-OQOWVL3R.js";import"./chunk-VSDHJBUA.js";import"./chunk-4WFVMWDK.js";import"./chunk-M2X7KQLB.js";import"./chunk-DVVH2KKN.js";import"./chunk-NV3QH4JK.js";import"./chunk-2DGDOVBR.js";import"./chunk-OZYWYLNK.js";import"./chunk-42C7ZIID.js";import"./chunk-NWJ5J3BN.js";var u=class c{codeIntro=`// Without command: button directly calls action
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
history.push(text -> text.toUpperCase()); // uppercase`;static \u0275fac=function(m){return new(m||c)};static \u0275cmp=r({type:c,selectors:[["app-topic-dp-command"]],decls:34,vars:7,consts:[["title","Command","subtitle","Encapsulate requests as objects. Undo/redo, macro commands, and task queues.","badge","DESIGN PATTERNS","gradient","linear-gradient(135deg, #991b1b, #f87171)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-red",3,"size"],["src","/assets/images/topics/dp-command.png","alt","Command Pattern Visualized",1,"topic-hero-image"],[1,"prose"],[3,"code"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(m,d){m&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),t(3,"app-icon",3),o(4," Command"),e(),t(5,"img",4),n(6,"div",5)(7,"p"),o(8,"The "),n(9,"strong"),o(10,"Command"),e(),o(11," pattern encapsulates a request as an object, enabling undo, queue, log, and macro commands."),e(),t(12,"app-code-block",6),e()(),n(13,"section",1)(14,"h2",2),t(15,"app-icon",7),o(16," Examples"),e(),n(17,"div",8)(18,"div",9)(19,"h3",10),o(20,"Classic"),e(),t(21,"app-code-block",6),e(),n(22,"div",9)(23,"h3",10),o(24,"Undo/Redo"),e(),t(25,"app-code-block",6),e(),n(26,"div",9)(27,"h3",10),o(28,"Macro"),e(),t(29,"app-code-block",6),e(),n(30,"div",9)(31,"h3",10),o(32,"Functional"),e(),t(33,"app-code-block",6),e()()()()),m&2&&(i(3),a("size",28),i(9),a("code",d.codeIntro),i(3),a("size",28),i(6),a("code",d.codeClassic),i(4),a("code",d.codeUndo),i(4),a("code",d.codeMacro),i(4),a("code",d.codeFunctional))},dependencies:[s,p,l],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-red[_ngcontent-%COMP%]{color:#dc2626}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{u as DpCommandComponent};
