import {
  Component, ChangeDetectionStrategy, inject, signal, computed
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalController } from '@ionic/angular/standalone';
import { IonContent } from '@ionic/angular/standalone';
import { Firestore, collection, addDoc, serverTimestamp } from '@angular/fire/firestore';
import { AuthService } from '../../auth.service';

type Difficulty = 'easy' | 'medium' | 'hard';
type Result     = 'offer' | 'rejected' | 'pending' | 'withdrew';

@Component({
  selector: 'app-exp-submit',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormsModule, IonContent],
  template: `
    <ion-content class="sub-content">
      <div class="sub-wrap">

        <!-- Header -->
        <div class="sub-header">
          <h2 class="sub-title">Share Your Experience</h2>
          <p class="sub-sub">Help fellow Java developers by sharing your interview story</p>
          <button class="sub-close" (click)="dismiss()">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>

        @if (submitted()) {
          <!-- Success state -->
          <div class="success-wrap">
            <div class="success-icon-wrap">
              <i class="fa-solid fa-circle-check"></i>
            </div>
            <h3 class="success-title">Thank you!</h3>
            <p class="success-sub">
              Your experience has been submitted and will appear after a quick review.
              Community experiences help thousands of Java developers — we appreciate it!
            </p>
            <button class="sub-btn" (click)="dismiss()">Done</button>
          </div>
        } @else {
          <!-- Form -->
          <form class="sub-form" (ngSubmit)="submit()">

            <!-- Company -->
            <div class="field-group">
              <label class="field-label">Company *</label>
              <input class="field-input" [(ngModel)]="form.company" name="company"
                placeholder="e.g. Amazon, Google, Infosys…" maxlength="60" required />
            </div>

            <!-- Role -->
            <div class="field-group">
              <label class="field-label">Role Applied For *</label>
              <input class="field-input" [(ngModel)]="form.role" name="role"
                placeholder="e.g. SDE-2 (Java Backend)" maxlength="80" required />
            </div>

            <!-- YoE + Difficulty -->
            <div class="field-row">
              <div class="field-group field-half">
                <label class="field-label">Years of Experience</label>
                <input class="field-input" [(ngModel)]="form.yoe" name="yoe"
                  type="number" min="0" max="30" placeholder="0" />
              </div>
              <div class="field-group field-half">
                <label class="field-label">Difficulty</label>
                <div class="chip-row">
                  @for (d of difficultyOpts; track d.val) {
                    <button type="button" class="chip"
                      [class.chip-sel]="form.difficulty === d.val"
                      [style.--c]="d.color"
                      (click)="form.difficulty = d.val">{{ d.label }}</button>
                  }
                </div>
              </div>
            </div>

            <!-- Result -->
            <div class="field-group">
              <label class="field-label">Outcome *</label>
              <div class="chip-row">
                @for (r of resultOpts; track r.val) {
                  <button type="button" class="chip"
                    [class.chip-sel]="form.result === r.val"
                    [style.--c]="r.color"
                    (click)="form.result = r.val">{{ r.label }}</button>
                }
              </div>
            </div>

            <!-- Summary -->
            <div class="field-group">
              <label class="field-label">Summary * <span class="field-hint">(min 50 characters)</span></label>
              <textarea class="field-input field-textarea"
                [(ngModel)]="form.summary" name="summary"
                placeholder="Describe the overall process, atmosphere, difficulty level, what went well, what didn't…"
                rows="4" maxlength="2000" required></textarea>
              <span class="char-count" [class.char-warn]="form.summary.length < 50">
                {{ form.summary.length }} / 2000
              </span>
            </div>

            <!-- Rounds -->
            <div class="field-group">
              <label class="field-label">Interview Rounds</label>
              @for (round of form.rounds; track $index; let i = $index) {
                <div class="round-card">
                  <div class="round-head">
                    <span class="round-num">Round {{ i + 1 }}</span>
                    <button type="button" class="round-remove" (click)="removeRound(i)">
                      <i class="fa-solid fa-trash-can"></i>
                    </button>
                  </div>
                  <input class="field-input" [(ngModel)]="round.type" [name]="'rt' + i"
                    placeholder="Type (e.g. Technical, System Design, HR…)" maxlength="60" />
                  <textarea class="field-input field-textarea mt-6"
                    [(ngModel)]="round.description" [name]="'rd' + i"
                    placeholder="What happened in this round?" rows="2" maxlength="500"></textarea>
                  <input class="field-input mt-6" [(ngModel)]="round.questionsRaw" [name]="'rq' + i"
                    placeholder="Questions asked (comma-separated)" maxlength="500" />
                  <input class="field-input mt-6" [(ngModel)]="round.duration" [name]="'rdu' + i"
                    placeholder="Duration (e.g. 60 minutes)" maxlength="30" />
                </div>
              }
              <button type="button" class="add-round-btn" (click)="addRound()">
                <i class="fa-solid fa-plus"></i>
                Add Round
              </button>
            </div>

            <!-- Tags -->
            <div class="field-group">
              <label class="field-label">Tags <span class="field-hint">(comma-separated)</span></label>
              <input class="field-input" [(ngModel)]="form.tagsRaw" name="tags"
                placeholder="java, spring-boot, microservices, system-design…" maxlength="200" />
            </div>

            <!-- Tips -->
            <div class="field-group">
              <label class="field-label">Tips for Others</label>
              <textarea class="field-input field-textarea"
                [(ngModel)]="form.tipsRaw" name="tips"
                placeholder="What would you tell a candidate preparing for this company?"
                rows="3" maxlength="1000"></textarea>
            </div>

            @if (error()) {
              <p class="form-error">{{ error() }}</p>
            }

            <!-- Submit -->
            <button type="submit" class="sub-btn" [disabled]="submitting() || !canSubmit()">
              @if (submitting()) {
                <i class="fa-solid fa-spinner fa-spin"></i>
                Submitting…
              } @else {
                <i class="fa-solid fa-paper-plane"></i>
                Submit Experience
              }
            </button>

            <p class="disclaimer">
              By submitting, you agree your experience may be reviewed and published to help other developers.
              Personal information is not displayed.
            </p>
          </form>
        }

      </div>
    </ion-content>
  `,
  styles: `
    .sub-content { --background: #0b1120; }
    .sub-wrap {
      padding: 24px 20px 80px;
      max-width: 680px;
      margin: 0 auto;
    }

    /* Header */
    .sub-header {
      position: relative;
      margin-bottom: 28px;
    }
    .sub-title {
      font-size: 1.4rem; font-weight: 900;
      color: #e2e8f0; letter-spacing: -0.03em;
      margin: 0 0 6px;
    }
    .sub-sub { font-size: 0.78rem; color: #64748b; margin: 0; }
    .sub-close {
      position: absolute; top: 0; right: 0;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 8px; padding: 8px 10px;
      color: #64748b; font-size: 0.9rem; cursor: pointer;
      transition: all 0.2s;
    }
    .sub-close:hover { background: rgba(255,255,255,0.1); color: #e2e8f0; }

    /* Form */
    .sub-form { display: flex; flex-direction: column; gap: 20px; }
    .field-group { display: flex; flex-direction: column; gap: 6px; }
    .field-row { display: flex; gap: 16px; }
    .field-half { flex: 1; }
    .field-label {
      font-size: 0.72rem; font-weight: 700;
      text-transform: uppercase; letter-spacing: 0.08em;
      color: #64748b;
    }
    .field-hint { font-size: 0.65rem; font-weight: 500; text-transform: none; letter-spacing: 0; }
    .field-input {
      padding: 10px 14px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 10px;
      color: #e2e8f0; font-size: 0.85rem;
      transition: border-color 0.2s;
      width: 100%; box-sizing: border-box;
    }
    .field-input:focus { outline: none; border-color: #10b981; }
    .field-input::placeholder { color: #475569; }
    .field-textarea { resize: vertical; }
    .mt-6 { margin-top: 6px; }
    .char-count { font-size: 0.65rem; color: #475569; text-align: right; }
    .char-warn { color: #f59e0b; }

    /* Chips */
    .chip-row { display: flex; gap: 6px; flex-wrap: wrap; }
    .chip {
      padding: 5px 14px; border-radius: 20px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      color: #64748b; font-size: 0.72rem; font-weight: 600;
      cursor: pointer; transition: all 0.18s;
    }
    .chip:hover { border-color: var(--c, #10b981); color: var(--c, #10b981); }
    .chip-sel {
      background: rgba(from var(--c, #10b981) r g b / 0.15) !important;
      border-color: var(--c, #10b981) !important;
      color: var(--c, #10b981) !important;
    }

    /* Rounds */
    .round-card {
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 12px;
      padding: 14px;
      margin-top: 8px;
      display: flex; flex-direction: column; gap: 0;
    }
    .round-head {
      display: flex; align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;
    }
    .round-num { font-size: 0.72rem; font-weight: 700; color: #10b981; text-transform: uppercase; letter-spacing: 0.08em; }
    .round-remove {
      background: rgba(239,68,68,0.1); border: none;
      border-radius: 6px; padding: 4px 8px;
      color: #f87171; font-size: 0.72rem; cursor: pointer;
    }
    .add-round-btn {
      display: flex; align-items: center; gap: 8px;
      padding: 8px 16px; margin-top: 8px;
      background: rgba(16,185,129,0.08);
      border: 1px dashed rgba(16,185,129,0.3);
      border-radius: 10px; color: #10b981;
      font-size: 0.78rem; font-weight: 600; cursor: pointer;
      transition: all 0.2s; width: fit-content;
    }
    .add-round-btn:hover { background: rgba(16,185,129,0.15); }

    /* Error / Disclaimer */
    .form-error { font-size: 0.78rem; color: #f87171; margin: 0; }
    .disclaimer { font-size: 0.65rem; color: #475569; margin: 0; line-height: 1.5; }

    /* Submit button */
    .sub-btn {
      display: flex; align-items: center; justify-content: center; gap: 10px;
      padding: 14px 24px; border: none;
      background: linear-gradient(135deg, #10b981, #059669);
      border-radius: 12px; color: #fff;
      font-size: 0.9rem; font-weight: 700;
      cursor: pointer; transition: opacity 0.2s;
      box-shadow: 0 4px 14px rgba(16,185,129,0.3);
    }
    .sub-btn:hover { opacity: 0.88; }
    .sub-btn:disabled { opacity: 0.4; cursor: not-allowed; }

    /* Success */
    .success-wrap {
      display: flex; flex-direction: column;
      align-items: center; text-align: center;
      padding: 32px 16px;
      background: rgba(16,185,129,0.06);
      border: 1px solid rgba(16,185,129,0.2);
      border-radius: 18px;
    }
    .success-icon-wrap {
      width: 64px; height: 64px;
      border-radius: 50%;
      background: rgba(16,185,129,0.15);
      display: flex; align-items: center; justify-content: center;
      font-size: 1.8rem; color: #10b981; margin-bottom: 16px;
    }
    .success-title { font-size: 1.2rem; font-weight: 800; color: #e2e8f0; margin: 0 0 8px; }
    .success-sub { font-size: 0.8rem; color: #64748b; line-height: 1.6; margin: 0 0 24px; max-width: 380px; }

    /* Light Mode */
    :host-context(html:not(.dark)) .sub-content { --background: #F5F7F2; }
    :host-context(html:not(.dark)) .sub-title { color: #1B1B1B; }
    :host-context(html:not(.dark)) .field-input {
      background: #ffffff; border-color: #D6DDD2; color: #1B1B1B;
    }
    :host-context(html:not(.dark)) .field-input::placeholder { color: #8A9B8F; }
    :host-context(html:not(.dark)) .chip { background: #fff; border-color: #D6DDD2; color: #52665A; }
    :host-context(html:not(.dark)) .round-card { background: #fff; border-color: #D6DDD2; }
    :host-context(html:not(.dark)) .success-title { color: #1B1B1B; }
  `
})
export class ExpSubmitComponent {
  private modalCtrl = inject(ModalController);
  private firestore = inject(Firestore);
  private authSvc   = inject(AuthService);

  submitting = signal(false);
  submitted  = signal(false);
  error      = signal<string | null>(null);

  difficultyOpts = [
    { val: 'easy'   as Difficulty, label: 'Easy',   color: '#10b981' },
    { val: 'medium' as Difficulty, label: 'Medium', color: '#facc15' },
    { val: 'hard'   as Difficulty, label: 'Hard',   color: '#f87171' },
  ];

  resultOpts = [
    { val: 'offer'    as Result, label: 'Got Offer ✓', color: '#10b981' },
    { val: 'rejected' as Result, label: 'Rejected',    color: '#f87171' },
    { val: 'pending'  as Result, label: 'Pending',     color: '#facc15' },
    { val: 'withdrew' as Result, label: 'Withdrew',    color: '#94a3b8' },
  ];

  form = {
    company:    '',
    role:       '',
    yoe:        0,
    difficulty: 'medium' as Difficulty,
    result:     'pending' as Result,
    summary:    '',
    tagsRaw:    '',
    tipsRaw:    '',
    rounds:     [] as Array<{
      type: string;
      description: string;
      questionsRaw: string;
      duration: string;
    }>,
  };

  canSubmit = computed(() =>
    this.form.company.trim().length >= 2 &&
    this.form.role.trim().length >= 2 &&
    this.form.summary.trim().length >= 50 &&
    this.form.result !== undefined
  );

  addRound() {
    this.form.rounds.push({ type: '', description: '', questionsRaw: '', duration: '' });
  }

  removeRound(i: number) {
    this.form.rounds.splice(i, 1);
  }

  async submit() {
    if (!this.canSubmit() || this.submitting()) return;
    this.error.set(null);
    this.submitting.set(true);

    const user = this.authSvc.user();
    const tags = this.form.tagsRaw
      .split(',').map(t => t.trim().toLowerCase()).filter(Boolean);
    const tips = this.form.tipsRaw
      .split('\n').map(t => t.trim()).filter(Boolean);

    const rounds = this.form.rounds
      .filter(r => r.type.trim())
      .map((r, idx) => ({
        roundNumber: idx + 1,
        type: r.type.trim(),
        description: r.description.trim(),
        questions: r.questionsRaw.split(',').map(q => q.trim()).filter(Boolean),
        duration: r.duration.trim() || undefined,
      }));

    try {
      await addDoc(collection(this.firestore, 'experiences'), {
        company:          this.form.company.trim(),
        role:             this.form.role.trim(),
        yearsOfExperience: Number(this.form.yoe) || 0,
        difficulty:       this.form.difficulty,
        result:           this.form.result,
        source:           'community',
        approved:         false,          // Cloud Function auto-approves if quality gate passes
        summary:          this.form.summary.trim(),
        rounds,
        tags,
        tips,
        date:             new Date().toISOString().slice(0, 10),
        authorId:         user?.uid   ?? null,
        authorName:       user?.displayName ?? 'Anonymous',
        createdAt:        serverTimestamp(),
      });
      this.submitted.set(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Submission failed. Please try again.';
      this.error.set(msg);
    } finally {
      this.submitting.set(false);
    }
  }

  dismiss() { this.modalCtrl.dismiss(); }
}
