import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question, DataService } from '../data.service';

interface QuizQuestion extends Question {
  options: string[];
  selectedAnswer?: string;
}

@Component({
  selector: 'app-quiz-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz-modal.component.html',
  styleUrls: ['./quiz-modal.component.css']
})
export class QuizModalComponent {
  @Input() allQuestions: Question[] = [];
  @Input() category: string = 'All';
  @Output() quizFinished = new EventEmitter<void>();

  private dataService = inject(DataService);

  isVisible = false;
  quizQuestions: QuizQuestion[] = [];
  currentQuestionIndex = 0;
  score = 0;
  showResults = false;

  open() {
    this.isVisible = true;
    this.startQuiz();
  }

  close() {
    this.isVisible = false;
    this.quizFinished.emit();
  }

  startQuiz() {
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.showResults = false;
    
    // 2. Filter questions for this category
    let categoryQuestions = this.allQuestions;
    if (this.category !== 'All') {
      categoryQuestions = this.allQuestions.filter(q => q.category === this.category);
    }

    const availableQuestions = categoryQuestions;
    
    const shuffled = [...availableQuestions].sort(() => 0.5 - Math.random());
    this.quizQuestions = shuffled.slice(0, 5).map(q => {
      // Generate options: correct answer + 3 random wrong answers
      const otherAnswers = this.allQuestions
        .filter(oq => oq.id !== q.id)
        .map(oq => oq.answer)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
      
      const options = [q.answer, ...otherAnswers].sort(() => 0.5 - Math.random());
      
      return {
        ...q,
        options,
        selectedAnswer: undefined
      };
    });
  }

  selectAnswer(option: string) {
    if (this.quizQuestions[this.currentQuestionIndex].selectedAnswer) return; // Prevent changing answer
    
    this.quizQuestions[this.currentQuestionIndex].selectedAnswer = option;
    if (option === this.quizQuestions[this.currentQuestionIndex].answer) {
      this.score++;
    }
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.quizQuestions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.showResults = true;
      if (this.score > 0) {
        this.dataService.addPoints(this.score * 5);
      }
    }
  }
}
