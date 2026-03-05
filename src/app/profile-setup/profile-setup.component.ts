import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';
import { Firestore, doc, setDoc, serverTimestamp } from '@angular/fire/firestore';
import { AuthService } from '../auth.service';

interface Goal {
  id: string;
  label: string;
  emoji: string;
  description: string;
}

const GOALS: Goal[] = [
  { id: 'crack-faang', label: 'Crack FAANG', emoji: '🚀', description: 'Targeting top-tier companies' },
  { id: 'switch-job',  label: 'Switch Job',   emoji: '💼', description: 'Looking for a better opportunity' },
  { id: 'fresher',     label: 'First Job',     emoji: '🎓', description: 'New to the industry' },
  { id: 'upskill',     label: 'Upskill',       emoji: '📈', description: 'Grow in current role' },
];

const YOE_OPTIONS = ['< 1 year', '1–2 years', '3–5 years', '5–8 years', '8+ years'];

@Component({
  selector: 'app-profile-setup',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonContent],
  template: `
    <ion-content class="ps-content" [scrollY]="true">
      <div class="ps-wrap">

        <div class="ps-header">
          <div class="ps-emoji">👋</div>
          <h1 class="ps-title">Welcome, <span class="ps-name">{{ userName() }}</span>!</h1>
          <p class="ps-sub">Tell us a bit about yourself so we can personalise your experience</p>
        </div>

        <!-- Goal -->
        <div class="ps-section">
          <label class="ps-label">What's your primary goal?</label>
          <div class="goal-grid">
            @for (g of goals; track g.id) {
              <button class="goal-card" [class.goal-active]="selectedGoal() === g.id" (click)="selectedGoal.set(g.id)">
                <span class="goal-emoji">{{ g.emoji }}</span>
                <span class="goal-label">{{ g.label }}</span>
                <span class="goal-desc">{{ g.description }}</span>
              </button>
            }
          </div>
        </div>

        <!-- YOE -->
        <div class="ps-section">
          <label class="ps-label">Years of Java experience</label>
          <div class="yoe-row">
            @for (y of yoeOptions; track y) {
              <button class="yoe-chip" [class.yoe-active]="selectedYoe() === y" (click)="selectedYoe.set(y)">
                {{ y }}
              </button>
            }
          </div>
        </div>

        <!-- CTA -->
        <button class="ps-submit" [disabled]="!canSubmit()" (click)="submit()">
          @if (saving()) {
            <span class="ps-spinner"></span>
          } @else {
            <i class="fa-solid fa-check"></i>
          }
          Let's Go
        </button>

        <button class="ps-skip" (click)="skip()">Skip for now</button>

      </div>
    </ion-content>
  `,
  styles: `
    .ps-content { --background: #0b1120; }

    .ps-wrap {
      max-width: 480px;
      margin: 0 auto;
      padding: 48px 24px 80px;
    }

    .ps-header { text-align: center; margin-bottom: 36px; }
    .ps-emoji { font-size: 3rem; margin-bottom: 16px; }
    .ps-title {
      font-size: 1.6rem; font-weight: 900; color: #e2e8f0;
      letter-spacing: -0.03em; margin: 0 0 8px;
    }
    .ps-name {
      background: linear-gradient(135deg, #10b981, #34d399);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .ps-sub { font-size: 0.82rem; color: #64748b; margin: 0; line-height: 1.6; }

    .ps-section { margin-bottom: 28px; }
    .ps-label {
      display: block;
      font-size: 0.7rem; font-weight: 700;
      text-transform: uppercase; letter-spacing: 0.1em;
      color: #475569; margin-bottom: 12px;
    }

    /* Goal Grid */
    .goal-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }
    .goal-card {
      display: flex; flex-direction: column; align-items: center;
      gap: 4px;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 16px;
      padding: 18px 12px;
      cursor: pointer;
      transition: all 0.2s;
      color: inherit;
    }
    .goal-card:hover { background: rgba(255,255,255,0.06); }
    .goal-active {
      background: rgba(16,185,129,0.1) !important;
      border-color: rgba(16,185,129,0.35) !important;
    }
    .goal-emoji { font-size: 1.8rem; margin-bottom: 4px; }
    .goal-label { font-size: 0.82rem; font-weight: 700; color: #e2e8f0; }
    .goal-desc { font-size: 0.62rem; color: #64748b; text-align: center; line-height: 1.4; }

    /* YOE chips */
    .yoe-row { display: flex; flex-wrap: wrap; gap: 8px; }
    .yoe-chip {
      padding: 8px 16px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 10px;
      font-size: 0.75rem; font-weight: 600; color: #94a3b8;
      cursor: pointer; transition: all 0.2s;
    }
    .yoe-chip:hover { background: rgba(255,255,255,0.07); }
    .yoe-active {
      background: rgba(99,102,241,0.12) !important;
      border-color: rgba(99,102,241,0.35) !important;
      color: #818cf8 !important;
    }

    /* Submit */
    .ps-submit {
      width: 100%;
      padding: 14px;
      background: linear-gradient(135deg, #10b981, #059669);
      border: none; border-radius: 14px;
      color: white; font-size: 0.9rem; font-weight: 700;
      display: flex; align-items: center; justify-content: center; gap: 8px;
      cursor: pointer; transition: all 0.2s;
      box-shadow: 0 4px 20px rgba(16,185,129,0.3);
      margin-bottom: 12px;
    }
    .ps-submit:disabled { opacity: 0.45; cursor: not-allowed; box-shadow: none; }
    .ps-submit:not(:disabled):hover { box-shadow: 0 6px 28px rgba(16,185,129,0.4); transform: translateY(-1px); }

    .ps-spinner {
      width: 16px; height: 16px;
      border: 2px solid rgba(255,255,255,0.3);
      border-top-color: white;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }

    .ps-skip {
      width: 100%; padding: 12px;
      background: none; border: none;
      color: #475569; font-size: 0.78rem; font-weight: 600;
      cursor: pointer;
    }
    .ps-skip:hover { color: #64748b; }
  `
})
export class ProfileSetupComponent {
  private router = inject(Router);
  private firestore = inject(Firestore);
  private authService = inject(AuthService);

  readonly goals = GOALS;
  readonly yoeOptions = YOE_OPTIONS;

  selectedGoal = signal<string>('');
  selectedYoe = signal<string>('');
  saving = signal(false);

  userName = signal(this.authService.user()?.displayName?.split(' ')[0] ?? 'there');

  canSubmit = () => !!this.selectedGoal() && !!this.selectedYoe();

  async submit() {
    if (!this.canSubmit()) return;
    this.saving.set(true);

    const user = this.authService.user();
    if (user) {
      const ref = doc(this.firestore, `users/${user.uid}`);
      await setDoc(ref, {
        goal: this.selectedGoal(),
        yearsOfExperience: this.selectedYoe(),
        profileSetup: true,
        displayName: user.displayName || 'Anonymous',
        lastUpdated: serverTimestamp()
      }, { merge: true });
    }

    this.saving.set(false);
    this.router.navigate(['/tutorials'], { replaceUrl: true });
  }

  skip() {
    this.router.navigate(['/tutorials'], { replaceUrl: true });
  }
}
