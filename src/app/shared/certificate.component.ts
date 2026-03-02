import {
  Component, ChangeDetectionStrategy, input, output,
  signal, effect, ViewChild, ElementRef, AfterViewInit, inject
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-certificate',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule],
  template: `
    <!-- Modal backdrop -->
    <div class="cert-backdrop" [class.visible]="visible()" (click)="onBackdropClick($event)">
      <div class="cert-modal" role="dialog" aria-modal="true" aria-label="Certificate Preview">

        <!-- Modal toolbar (screen-only) -->
        <div class="modal-hdr no-print">
          <span class="modal-hdr-title">
            <i class="fa-solid fa-certificate modal-hdr-icon"></i>
            Certificate Preview
          </span>
          <button class="close-btn" (click)="closed.emit()" aria-label="Close">✕</button>
        </div>

        <!-- Name input row (screen-only) -->
        <div class="name-row no-print">
          <label class="name-label" for="certName">Your name on certificate</label>
          <input
            id="certName"
            class="name-input"
            type="text"
            [(ngModel)]="editableName"
            placeholder="Enter your full name"
            maxlength="60"
          />
        </div>

        <!-- Print button (screen-only) -->
        <button class="print-btn no-print" (click)="print()">
          <i class="fa-solid fa-print"></i>
          Print / Save as PDF
        </button>

        <!-- ═══════════════════════════════════════════════════ -->
        <!-- THE CERTIFICATE — this is what prints             -->
        <!-- ═══════════════════════════════════════════════════ -->
        <div class="cert-page">

          <!-- Decorative corner flourishes -->
          <div class="corner-tl"></div>
          <div class="corner-tr"></div>
          <div class="corner-bl"></div>
          <div class="corner-br"></div>

          <!-- Header band -->
          <div class="cert-header">
            <div class="cert-header-inner">
              <div class="cert-logo-row">
                <svg class="cert-logo-icon" viewBox="0 0 24 24" width="28" height="28" fill="none">
                  <circle cx="12" cy="12" r="10" fill="#d4a853" opacity="0.2"/>
                  <path d="M8 7h8M8 12h5M8 17h7" stroke="#d4a853" stroke-width="1.8" stroke-linecap="round"/>
                  <circle cx="17" cy="17" r="4" fill="#1B4332" stroke="#d4a853" stroke-width="1.2"/>
                  <path d="M15.5 17l1 1 2-2" stroke="#d4a853" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span class="cert-logo-text">JavaIQ</span>
              </div>
              <div class="cert-header-rule">
                <span class="cert-header-rule-line"></span>
                <span class="cert-header-rule-diamond">◆</span>
                <span class="cert-header-rule-line"></span>
              </div>
            </div>
          </div>

          <!-- Body -->
          <div class="cert-body">

            <!-- Certificate type title -->
            <div class="cert-type-title">
              {{ type() === 'course' ? 'CERTIFICATE OF COMPLETION' : 'CERTIFICATE OF ACHIEVEMENT' }}
            </div>

            <!-- Gold ornament rule -->
            <div class="cert-ornament">
              <span class="cert-ornament-line"></span>
              <span class="cert-ornament-star">✦</span>
              <span class="cert-ornament-line"></span>
            </div>

            <p class="cert-intro-text">This is to certify that</p>

            <!-- Recipient name -->
            <div class="cert-name">{{ editableName() || 'Java Developer' }}</div>

            <p class="cert-completed-text">
              @if (type() === 'course') {
                has successfully completed the course
              } @else {
                has successfully passed the assessment
              }
            </p>

            <!-- Course / Assessment title -->
            <div class="cert-course-title">{{ title() }}</div>

            <!-- Score pill — assessment only -->
            @if (score() !== null && score() !== undefined) {
              <div class="cert-score-pill">
                <i class="fa-solid fa-star cert-score-star"></i>
                Score: {{ score() }}%
              </div>
            }

            <!-- Category chip -->
            @if (category()) {
              <div class="cert-category-chip">{{ category() }}</div>
            }

            <!-- Date -->
            <div class="cert-date">{{ formattedDate }}</div>

          </div><!-- .cert-body -->

          <!-- Footer -->
          <div class="cert-footer">
            <!-- SVG Seal -->
            <svg class="cert-seal" width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
              <!-- Outer ring -->
              <circle cx="40" cy="40" r="38" fill="none" stroke="#1B4332" stroke-width="2"/>
              <!-- Inner gold ring -->
              <circle cx="40" cy="40" r="31" fill="none" stroke="#d4a853" stroke-width="1"/>
              <!-- 16-point starburst -->
              <polygon
                points="40,6 42,20 50,10 47,23 58,17 51,28 64,27 55,36 68,40 55,44 64,53 51,52 58,63 47,57 50,70 42,60 40,74 38,60 30,70 33,57 22,63 29,52 16,53 25,44 12,40 25,36 16,27 29,28 22,17 33,23 30,10 38,20"
                fill="#d4a853" opacity="0.18"/>
              <!-- Center circle -->
              <circle cx="40" cy="40" r="21" fill="#1B4332"/>
              <!-- JavaIQ text -->
              <text x="40" y="36" text-anchor="middle"
                    font-family="Inter, sans-serif" font-size="7.5"
                    font-weight="800" fill="#d4a853" letter-spacing="0.5">JavaIQ</text>
              <!-- Divider -->
              <line x1="28" y1="40" x2="52" y2="40" stroke="#d4a853" stroke-width="0.6" opacity="0.6"/>
              <!-- CERTIFIED text -->
              <text x="40" y="50" text-anchor="middle"
                    font-family="Inter, sans-serif" font-size="5"
                    font-weight="700" fill="rgba(212,168,83,0.85)" letter-spacing="1.2">CERTIFIED</text>
            </svg>

            <!-- Signature block -->
            <div class="cert-sig-block">
              <div class="cert-sig-name">JavaIQ Platform</div>
              <div class="cert-sig-line"></div>
              <div class="cert-sig-label">Authorized Signature</div>
            </div>
          </div><!-- .cert-footer -->

        </div><!-- .cert-page -->
      </div><!-- .cert-modal -->
    </div><!-- .cert-backdrop -->
  `,
  styles: `
    /* ═══════════════════════════════════════════════════════════
       SCREEN MODAL
    ═══════════════════════════════════════════════════════════ */
    .cert-backdrop {
      position: fixed;
      inset: 0;
      z-index: 9999;
      background: rgba(0, 0, 0, 0.72);
      backdrop-filter: blur(6px);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.25s ease;
      padding: 16px;
    }
    .cert-backdrop.visible {
      opacity: 1;
      pointer-events: all;
    }

    .cert-modal {
      background: #ffffff;
      border-radius: 20px;
      padding: 24px 24px 28px;
      max-width: 680px;
      width: 100%;
      max-height: 92vh;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 14px;
      box-shadow: 0 32px 80px rgba(0, 0, 0, 0.45);
    }
    :host-context(html.dark) .cert-modal {
      background: #1a2332;
    }

    /* Modal toolbar */
    .modal-hdr {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .modal-hdr-title {
      font-size: 0.92rem;
      font-weight: 700;
      color: #1B4332;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    :host-context(html.dark) .modal-hdr-title { color: #d4a853; }
    .modal-hdr-icon { color: #d4a853; }
    .close-btn {
      background: rgba(0,0,0,0.05);
      border: none;
      border-radius: 8px;
      width: 30px; height: 30px;
      cursor: pointer;
      font-size: 0.8rem;
      color: #64748b;
      display: flex; align-items: center; justify-content: center;
      transition: background 0.15s;
    }
    .close-btn:hover { background: rgba(0,0,0,0.12); color: #1B1B1B; }
    :host-context(html.dark) .close-btn { background: rgba(255,255,255,0.07); color: #94a3b8; }
    :host-context(html.dark) .close-btn:hover { background: rgba(255,255,255,0.13); color: #f1f5f9; }

    /* Name input */
    .name-row {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .name-label {
      font-size: 0.72rem;
      font-weight: 600;
      color: #52665A;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }
    :host-context(html.dark) .name-label { color: #8A9B8F; }
    .name-input {
      padding: 10px 14px;
      border: 1.5px solid #D6DDD2;
      border-radius: 10px;
      font-size: 0.9rem;
      font-weight: 600;
      color: #1B1B1B;
      background: #F5F7F2;
      outline: none;
      transition: border-color 0.15s;
      font-family: 'Inter', sans-serif;
    }
    .name-input:focus { border-color: #1B4332; background: #fff; }
    :host-context(html.dark) .name-input {
      background: rgba(255,255,255,0.06);
      border-color: rgba(255,255,255,0.12);
      color: #f1f5f9;
    }
    :host-context(html.dark) .name-input:focus { border-color: #40916C; }

    /* Print button */
    .print-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 12px 24px;
      border-radius: 12px;
      border: none;
      cursor: pointer;
      font-size: 0.88rem;
      font-weight: 700;
      background: linear-gradient(135deg, #1B4332, #2D6A4F);
      color: #d4a853;
      box-shadow: 0 4px 14px rgba(27, 67, 50, 0.4);
      transition: all 0.2s ease;
      letter-spacing: 0.02em;
      align-self: flex-start;
    }
    .print-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 22px rgba(27, 67, 50, 0.45);
    }

    /* ═══════════════════════════════════════════════════════════
       CERTIFICATE PAGE (screen display + print)
    ═══════════════════════════════════════════════════════════ */
    .cert-page {
      width: 595px;
      min-height: 842px;
      background: #fefef8;
      margin: 0 auto;
      position: relative;
      box-sizing: border-box;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      color: #1B1B1B;
      overflow: hidden;
      /* Outer dark-green border */
      border: 3.5px solid #1B4332;
      /* Gold inner rule via inset box-shadow */
      box-shadow:
        inset 0 0 0 8px #fefef8,
        inset 0 0 0 9.5px #d4a853,
        0 8px 40px rgba(0,0,0,0.18);
    }

    /* Diagonal watermark */
    .cert-page::before {
      content: 'JavaIQ';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(-30deg);
      font-size: 110px;
      font-weight: 900;
      color: rgba(27, 67, 50, 0.035);
      pointer-events: none;
      letter-spacing: -0.04em;
      white-space: nowrap;
      z-index: 0;
    }

    /* Corner flourishes */
    .corner-tl, .corner-tr, .corner-bl, .corner-br {
      position: absolute;
      width: 36px;
      height: 36px;
      z-index: 1;
    }
    .corner-tl { top: 18px; left: 18px; border-top: 2px solid #d4a853; border-left: 2px solid #d4a853; border-radius: 2px 0 0 0; }
    .corner-tr { top: 18px; right: 18px; border-top: 2px solid #d4a853; border-right: 2px solid #d4a853; border-radius: 0 2px 0 0; }
    .corner-bl { bottom: 18px; left: 18px; border-bottom: 2px solid #d4a853; border-left: 2px solid #d4a853; border-radius: 0 0 0 2px; }
    .corner-br { bottom: 18px; right: 18px; border-bottom: 2px solid #d4a853; border-right: 2px solid #d4a853; border-radius: 0 0 2px 0; }

    /* Header band */
    .cert-header {
      background: linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%);
      padding: 22px 44px 18px;
      position: relative;
      z-index: 1;
    }
    .cert-header-inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
    .cert-logo-row {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .cert-logo-icon { flex-shrink: 0; }
    .cert-logo-text {
      font-size: 26px;
      font-weight: 900;
      color: #d4a853;
      letter-spacing: -0.04em;
    }
    .cert-header-rule {
      display: flex;
      align-items: center;
      gap: 10px;
      width: 100%;
    }
    .cert-header-rule-line {
      flex: 1;
      height: 1px;
      background: linear-gradient(to right, transparent, rgba(212,168,83,0.5), transparent);
      display: block;
    }
    .cert-header-rule-diamond {
      color: #d4a853;
      font-size: 8px;
      opacity: 0.8;
    }

    /* Body */
    .cert-body {
      padding: 28px 56px 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      position: relative;
      z-index: 1;
    }

    .cert-type-title {
      font-size: 12.5px;
      font-weight: 800;
      letter-spacing: 0.24em;
      text-transform: uppercase;
      color: #d4a853;
      margin-bottom: 14px;
    }

    .cert-ornament {
      display: flex;
      align-items: center;
      gap: 10px;
      width: 200px;
      margin: 0 auto 20px;
    }
    .cert-ornament-line {
      flex: 1;
      height: 1px;
      background: linear-gradient(to right, transparent, #d4a853);
      display: block;
    }
    .cert-ornament-line:last-child {
      background: linear-gradient(to left, transparent, #d4a853);
    }
    .cert-ornament-star {
      font-size: 10px;
      color: #d4a853;
    }

    .cert-intro-text {
      font-size: 13px;
      font-style: italic;
      color: #52665A;
      margin: 0 0 10px;
      font-weight: 400;
    }

    .cert-name {
      font-size: 36px;
      font-weight: 800;
      color: #1B4332;
      letter-spacing: -0.025em;
      line-height: 1.15;
      margin: 0 0 10px;
      padding-bottom: 6px;
      border-bottom: 2px dashed rgba(27, 67, 50, 0.18);
      min-width: 200px;
      word-break: break-word;
    }

    .cert-completed-text {
      font-size: 13px;
      font-style: italic;
      color: #52665A;
      margin: 0 0 14px;
      font-weight: 400;
    }

    .cert-course-title {
      font-size: 22px;
      font-weight: 800;
      color: #1B4332;
      line-height: 1.3;
      margin: 0 0 18px;
      letter-spacing: -0.01em;
    }

    .cert-score-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: rgba(212, 168, 83, 0.1);
      border: 1.5px solid #d4a853;
      color: #a07828;
      font-size: 13px;
      font-weight: 700;
      padding: 5px 18px;
      border-radius: 50px;
      margin-bottom: 10px;
    }
    .cert-score-star { font-size: 10px; }

    .cert-category-chip {
      font-size: 9.5px;
      font-weight: 800;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      background: rgba(27, 67, 50, 0.07);
      color: #1B4332;
      border: 1px solid rgba(27, 67, 50, 0.18);
      padding: 4px 14px;
      border-radius: 20px;
      margin-bottom: 16px;
    }

    .cert-date {
      font-size: 11px;
      color: #8A9B8F;
      letter-spacing: 0.08em;
      font-weight: 600;
      margin-bottom: 0;
    }

    /* Footer */
    .cert-footer {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      padding: 0 52px 28px;
      position: relative;
      z-index: 1;
    }
    .cert-footer::before {
      content: '';
      position: absolute;
      top: 0; left: 52px; right: 52px;
      height: 1px;
      background: linear-gradient(to right, transparent, rgba(27,67,50,0.15), transparent);
    }

    .cert-seal { flex-shrink: 0; }

    .cert-sig-block {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
    }
    .cert-sig-name {
      font-size: 13px;
      font-weight: 700;
      color: #1B4332;
      letter-spacing: 0.03em;
    }
    .cert-sig-line {
      width: 160px;
      height: 1.5px;
      background: linear-gradient(to right, transparent, #1B4332, transparent);
    }
    .cert-sig-label {
      font-size: 9px;
      color: #8A9B8F;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      font-weight: 600;
    }

    /* ═══════════════════════════════════════════════════════════
       PRINT STYLES
       Strategy: visibility:hidden on body*, then visibility:visible
       on .cert-page children — works through Ionic's Shadow DOM
    ═══════════════════════════════════════════════════════════ */
    @media print {
      body * { visibility: hidden !important; }

      /* Show only the certificate and its children */
      app-certificate,
      .cert-backdrop,
      .cert-modal,
      .cert-page,
      .cert-page * { visibility: visible !important; }

      /* Pull cert-page to fill the printed page */
      .cert-page {
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        width: 210mm !important;
        min-height: 297mm !important;
        margin: 0 !important;
        border: 3.5px solid #1B4332 !important;
        box-shadow: inset 0 0 0 8px #fefef8, inset 0 0 0 9.5px #d4a853 !important;
        border-radius: 0 !important;
        overflow: visible !important;
        z-index: 99999 !important;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }

      /* Dashed name underline hidden at print */
      .cert-name { border-bottom: none !important; }

      /* Hide modal chrome */
      .no-print { visibility: hidden !important; }

      @page { size: A4 portrait; margin: 0; }
    }
  `
})
export class CertificateComponent implements AfterViewInit {
  type          = input.required<'course' | 'assessment'>();
  title         = input.required<string>();
  category      = input<string>('');
  score         = input<number | null>(null);
  recipientName = input<string>('Java Developer');
  visible       = input<boolean>(false);

  closed = output<void>();

  editableName = signal<string>('Java Developer');

  constructor() {
    // Sync editableName when recipientName input changes
    effect(() => {
      const name = this.recipientName();
      if (name) {
        this.editableName.set(name);
      }
    });
  }

  ngAfterViewInit(): void {
    // Ensure name is seeded on first render
    if (!this.editableName() || this.editableName() === 'Java Developer') {
      this.editableName.set(this.recipientName() || 'Java Developer');
    }
  }

  get formattedDate(): string {
    return new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  onBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('cert-backdrop')) {
      this.closed.emit();
    }
  }

  print(): void {
    window.print();
  }
}
