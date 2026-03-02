import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, Question } from '../data.service';
import { AdMobService } from '../admob.service';
import { AlertService } from '../alert.service';
import { inject } from '@angular/core';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-java';

@Component({
  selector: 'app-flashcard-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flashcard-item.component.html',
  styleUrls: ['./flashcard-item.component.css']
})
export class FlashcardItemComponent implements OnChanges {
  @Input({ required: true }) question!: Question;
  @Output() answerShown = new EventEmitter<void>();

  private dataService = inject(DataService);
  private adMobService = inject(AdMobService);
  private alertService = inject(AlertService);

  showAnswer = false;
  cardGradient = 'linear-gradient(135deg, #1e293b 0%, #334155 100%)';

  private gradients = [
    'linear-gradient(135deg, #1e293b 0%, #334155 100%)', // Slate (Default)
    'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', // Blue
    'linear-gradient(135deg, #581c87 0%, #a855f7 100%)', // Purple
    'linear-gradient(135deg, #134e4a 0%, #14b8a6 100%)', // Teal
    'linear-gradient(135deg, #312e81 0%, #6366f1 100%)', // Indigo
    'linear-gradient(135deg, #881337 0%, #f43f5e 100%)'  // Rose
  ];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['question']) {
      this.showAnswer = this.isAlreadyRevealed();
      this.setRandomGradient();
    }
  }

  isAlreadyRevealed(): boolean {
    return this.dataService.revealedQuestionIds().has(this.question.id);
  }

  private setRandomGradient() {
    const index = Math.floor(Math.random() * this.gradients.length);
    this.cardGradient = this.gradients[index];
  }

  async toggleAnswer() {
    if (this.showAnswer) {
      this.showAnswer = false;
      return;
    }

    // If not revealed yet, try to spend point
    if (!this.isAlreadyRevealed()) {
      if (this.dataService.points() > 0) {
        // Optimistic UI: Update state immediately and flip card
        this.dataService.spendPoint(); // Don't await
        this.dataService.markAsRevealed(this.question.id); // Don't await
        this.reveal();
      } else {
        // Prompt for reward ad
        const watchAd = await this.alertService.confirm(
          'You have 0 points. Watch a short video to earn 10 points?',
          'Unlock Answer'
        );
        if (watchAd) {
          const success = await this.adMobService.showRewardAd();
          if (success) {
            await this.dataService.addPoints(10);
            // Auto-reveal after earning points
            this.dataService.spendPoint(); // Don't await
            this.dataService.markAsRevealed(this.question.id); // Don't await
            this.reveal();
          }
        }
      }
    } else {
      this.reveal();
    }
  }

  private reveal() {
    this.showAnswer = true;
    this.answerShown.emit();
    // Small delay to ensure @if has rendered the code block
    setTimeout(() => {
      if (typeof Prism !== 'undefined') {
        Prism.highlightAll();
      }
    }, 50);
  }

  get metadataChips(): string[] {
    if (!this.question || !this.question.asked_metadata) return [];
    return this.question.asked_metadata.split(',').map(s => s.trim());
  }

  private colors = ['chip-blue', 'chip-green', 'chip-purple', 'chip-orange', 'chip-pink', 'chip-teal'];

  getChipClass(text: string): string {
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
      hash = text.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % this.colors.length;
    return this.colors[index];
  }
}
