import { Component, inject, ViewChild, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, Question } from '../data.service';
import { AdMobService } from '../admob.service';
import { FlashcardItemComponent } from '../flashcard-item/flashcard-item.component';
import { QuizModalComponent } from '../quiz-modal/quiz-modal.component';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-flashcard-list',
  standalone: true,
  imports: [CommonModule, FormsModule, FlashcardItemComponent, QuizModalComponent],
  templateUrl: './flashcard-list.component.html',
  styleUrls: ['./flashcard-list.component.css']
})
export class FlashcardListComponent implements OnInit {
  private dataService = inject(DataService);
  private adMobService = inject(AdMobService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);
  private ngZone = inject(NgZone);
  
  allQuestions: Question[] = this.dataService.getQuestions();
  filteredQuestions: Question[] = [...this.allQuestions];
  
  categories = ['All', 'Core Java', 'Spring Boot', 'Hibernate', 'Spring Reactive', 'Microservices', 'Multithreading', 'Reactive Programming'];
  selectedCategory = 'All';
  
  questionsViewedCount = 0;
  currentQuestionIndex = 0;
  
  // Swipe logic
  touchStartX = 0;
  touchEndX = 0;
  
  animationState: 'idle' | 'slideOutLeft' | 'slideOutRight' | 'slideInRight' | 'slideInLeft' | 'preparing' = 'idle';

  @ViewChild(QuizModalComponent) quizModal!: QuizModalComponent;

  ngOnInit() {
    this.adMobService.showBanner();
    this.route.paramMap.subscribe(params => {
      const category = params.get('category');
      if (category) {
        this.selectedCategory = category;
        this.filterQuestions();
      }
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }

  filterQuestions() {
    if (this.selectedCategory === 'All') {
      this.filteredQuestions = [...this.allQuestions];
    } else {
      this.filteredQuestions = this.allQuestions.filter(q => q.category === this.selectedCategory);
    }
    this.currentQuestionIndex = 0; // Reset to first question on filter change
  }

  onAnswerShown() {
    this.questionsViewedCount++;
    if (this.questionsViewedCount >= 15) {
      this.quizModal.open();
    }
  }

  onQuizFinished() {
    this.questionsViewedCount = 0;
  }

  isLocked(): boolean {
    // Check if the current question index (in the filtered list) is locked
    // The lock is now based on the index WITHIN the current category view.
    return this.dataService.isQuestionLocked(this.selectedCategory, this.currentQuestionIndex);
  }

  async unlockQuestions() {
    const success = await this.adMobService.showRewardVideo();
    if (success) {
      this.ngZone.run(() => {
        this.dataService.unlockNextBatch(this.selectedCategory);
        this.cdr.detectChanges();
      });
    }
  }

  // Navigation
  nextQuestion() {
    if (this.animationState !== 'idle') return;
    
    // Allow moving to the next question even if it is locked, 
    // so the user can see the lock screen.
    if (this.currentQuestionIndex < this.filteredQuestions.length - 1) {
      this.animationState = 'slideOutLeft';
      
      setTimeout(() => {
        this.currentQuestionIndex++;
        this.cdr.detectChanges(); // Update data while invisible
        
        this.animationState = 'slideInRight';
        this.cdr.detectChanges(); // Trigger slide in
        
        setTimeout(() => {
          this.animationState = 'idle';
          this.cdr.detectChanges();
        }, 300);
      }, 300);
    }
  }

  prevQuestion() {
    if (this.animationState !== 'idle') return;

    if (this.currentQuestionIndex > 0) {
      this.animationState = 'slideOutRight';
      
      setTimeout(() => {
        this.currentQuestionIndex--;
        this.cdr.detectChanges(); // Update data while invisible
        
        this.animationState = 'slideInLeft';
        this.cdr.detectChanges(); // Trigger slide in
        
        setTimeout(() => {
          this.animationState = 'idle';
          this.cdr.detectChanges();
        }, 300);
      }, 300);
    }
  }

  // Swipe Handlers
  onTouchStart(e: TouchEvent) {
    this.touchStartX = e.changedTouches[0].screenX;
  }

  onTouchEnd(e: TouchEvent) {
    this.touchEndX = e.changedTouches[0].screenX;
    this.handleSwipe();
  }

  handleSwipe() {
    const threshold = 50;
    if (this.touchEndX < this.touchStartX - threshold) {
      this.nextQuestion(); // Swipe Left -> Next
    }
    if (this.touchEndX > this.touchStartX + threshold) {
      this.prevQuestion(); // Swipe Right -> Prev
    }
  }
}
