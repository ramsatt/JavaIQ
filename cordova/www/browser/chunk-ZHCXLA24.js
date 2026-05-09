import{a as c,b as l,c as m}from"./chunk-3MUY7VVQ.js";import{$a as r,Ba as n,Ka as p,ab as o,bb as e,cb as i,yb as t}from"./chunk-YTAFWVC7.js";import"./chunk-NWJ5J3BN.js";var u=class d{codeIntro=`// Text editor \u2014 save state before each change
editor.type("Hello");
editor.save();          // snapshot 1
editor.type(" World");
editor.save();          // snapshot 2
editor.type("!!!");
editor.undo();          // restore snapshot 2 \u2192 "Hello World"
editor.undo();          // restore snapshot 1 \u2192 "Hello"`;codeOriginator=`// Memento \u2014 opaque snapshot (immutable)
record EditorMemento(String text, int cursorPos) {}

// Originator \u2014 creates and restores mementos
class TextEditor {
    private String text      = "";
    private int    cursorPos = 0;

    public void type(String chars) {
        text += chars;
        cursorPos = text.length();
    }

    public void delete(int count) {
        int end   = Math.min(cursorPos, text.length());
        int start = Math.max(0, end - count);
        text      = text.substring(0, start) + text.substring(end);
        cursorPos = start;
    }

    // Save snapshot
    public EditorMemento save() {
        return new EditorMemento(text, cursorPos);
    }

    // Restore snapshot
    public void restore(EditorMemento m) {
        this.text      = m.text();
        this.cursorPos = m.cursorPos();
    }

    public String getText() { return text; }
}`;codeCaretaker=`// Caretaker \u2014 manages the undo stack
class History {
    private final Deque<EditorMemento> undoStack = new ArrayDeque<>();

    public void push(EditorMemento memento) {
        undoStack.push(memento);
    }

    public EditorMemento pop() {
        if (undoStack.isEmpty())
            throw new IllegalStateException("Nothing to undo");
        return undoStack.pop();
    }

    public boolean canUndo() { return !undoStack.isEmpty(); }
}

// Usage
TextEditor editor  = new TextEditor();
History    history = new History();

history.push(editor.save());   // save initial state
editor.type("Hello");

history.push(editor.save());   // save after "Hello"
editor.type(" World");

editor.restore(history.pop()); // undo \u2192 "Hello"
System.out.println(editor.getText()); // "Hello"`;codeUndoRedo=`// Full undo/redo with two stacks
class UndoRedoManager {
    private final Deque<EditorMemento> undoStack = new ArrayDeque<>();
    private final Deque<EditorMemento> redoStack = new ArrayDeque<>();

    public void save(EditorMemento m) {
        undoStack.push(m);
        redoStack.clear(); // new action clears redo history
    }

    public EditorMemento undo(EditorMemento current) {
        if (undoStack.isEmpty()) return current;
        redoStack.push(current);
        return undoStack.pop();
    }

    public EditorMemento redo(EditorMemento current) {
        if (redoStack.isEmpty()) return current;
        undoStack.push(current);
        return redoStack.pop();
    }
}`;codeReal=`// Real-world Memento examples in Java ecosystem:

// 1. Java Serialization \u2014 serialise object state to bytes
ByteArrayOutputStream bos = new ByteArrayOutputStream();
ObjectOutputStream oos = new ObjectOutputStream(bos);
oos.writeObject(myObject);          // save (memento)
byte[] snapshot = bos.toByteArray();

// Restore
ObjectInputStream ois = new ObjectInputStream(
    new ByteArrayInputStream(snapshot));
MyObject restored = (MyObject) ois.readObject();

// 2. JPA / Hibernate \u2014 @Version for optimistic locking snapshots
// 3. Spring Statemachine \u2014 state history saved as mementos
// 4. Game save files \u2014 entire game world snapshot
// 5. Database UNDO log \u2014 Oracle/PostgreSQL undo tablespace`;static \u0275fac=function(s){return new(s||d)};static \u0275cmp=p({type:d,selectors:[["app-topic-dp-memento"]],decls:44,vars:7,consts:[["title","Memento","subtitle","Capture and restore an object's internal state without violating encapsulation. The foundation of undo/redo and snapshotting.","badge","DESIGN PATTERNS","gradient","linear-gradient(135deg, #4338ca, #818cf8)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-indigo",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-purple",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(s,a){s&1&&(o(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),i(3,"app-icon",3),t(4," What is Memento?"),e(),o(5,"div",4)(6,"p"),t(7,"The "),o(8,"strong"),t(9,"Memento"),e(),t(10," pattern saves a snapshot of an object's state so it can be restored later \u2014 without exposing private internals to the outside world."),e(),o(11,"p"),t(12,"Three roles: "),o(13,"em"),t(14,"Originator"),e(),t(15," (object whose state is saved), "),o(16,"em"),t(17,"Memento"),e(),t(18," (the snapshot), "),o(19,"em"),t(20,"Caretaker"),e(),t(21," (holds snapshots, doesn't read them)."),e(),i(22,"app-code-block",5),e()(),o(23,"section",1)(24,"h2",2),i(25,"app-icon",6),t(26," Implementations"),e(),o(27,"div",7)(28,"div",8)(29,"h3",9),t(30,"Originator & Memento"),e(),i(31,"app-code-block",5),e(),o(32,"div",8)(33,"h3",9),t(34,"Caretaker (Undo Stack)"),e(),i(35,"app-code-block",5),e(),o(36,"div",8)(37,"h3",9),t(38,"Full Undo/Redo"),e(),i(39,"app-code-block",5),e(),o(40,"div",8)(41,"h3",9),t(42,"Real-World Examples"),e(),i(43,"app-code-block",5),e()()()()),s&2&&(n(3),r("size",28),n(19),r("code",a.codeIntro),n(3),r("size",28),n(6),r("code",a.codeOriginator),n(4),r("code",a.codeCaretaker),n(4),r("code",a.codeUndoRedo),n(4),r("code",a.codeReal))},dependencies:[c,l,m],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.icon-purple[_ngcontent-%COMP%]{color:#7c3aed}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{u as DpMementoComponent};
