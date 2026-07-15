import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-dp-memento',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="Memento" subtitle="Capture and restore an object's internal state without violating encapsulation. The foundation of undo/redo and snapshotting." badge="DESIGN PATTERNS" gradient="linear-gradient(135deg, #4338ca, #818cf8)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-indigo" /> What is Memento?</h2>
        <img src="/assets/images/topics/dp-memento.png" alt="Memento Pattern Visualized" class="topic-hero-image" />
        <div class="prose">
          <p>The <strong>Memento</strong> pattern saves a snapshot of an object's state so it can be restored later — without exposing private internals to the outside world.</p>
          <p>Three roles: <em>Originator</em> (object whose state is saved), <em>Memento</em> (the snapshot), <em>Caretaker</em> (holds snapshots, doesn't read them).</p>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-purple" /> Implementations</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Originator & Memento</h3><app-code-block [code]="codeOriginator" /></div>
          <div class="op-card"><h3 class="op-title">Caretaker (Undo Stack)</h3><app-code-block [code]="codeCaretaker" /></div>
          <div class="op-card"><h3 class="op-title">Full Undo/Redo</h3><app-code-block [code]="codeUndoRedo" /></div>
          <div class="op-card"><h3 class="op-title">Real-World Examples</h3><app-code-block [code]="codeReal" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-indigo { color: #4f46e5; } .icon-purple { color: #7c3aed; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class DpMementoComponent {
  codeIntro = `// Text editor — save state before each change
editor.type("Hello");
editor.save();          // snapshot 1
editor.type(" World");
editor.save();          // snapshot 2
editor.type("!!!");
editor.undo();          // restore snapshot 2 → "Hello World"
editor.undo();          // restore snapshot 1 → "Hello"`;

  codeOriginator = `// Memento — opaque snapshot (immutable)
record EditorMemento(String text, int cursorPos) {}

// Originator — creates and restores mementos
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
}`;

  codeCaretaker = `// Caretaker — manages the undo stack
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

editor.restore(history.pop()); // undo → "Hello"
System.out.println(editor.getText()); // "Hello"`;

  codeUndoRedo = `// Full undo/redo with two stacks
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
}`;

  codeReal = `// Real-world Memento examples in Java ecosystem:

// 1. Java Serialization — serialise object state to bytes
ByteArrayOutputStream bos = new ByteArrayOutputStream();
ObjectOutputStream oos = new ObjectOutputStream(bos);
oos.writeObject(myObject);          // save (memento)
byte[] snapshot = bos.toByteArray();

// Restore
ObjectInputStream ois = new ObjectInputStream(
    new ByteArrayInputStream(snapshot));
MyObject restored = (MyObject) ois.readObject();

// 2. JPA / Hibernate — @Version for optimistic locking snapshots
// 3. Spring Statemachine — state history saved as mementos
// 4. Game save files — entire game world snapshot
// 5. Database UNDO log — Oracle/PostgreSQL undo tablespace`;
}
