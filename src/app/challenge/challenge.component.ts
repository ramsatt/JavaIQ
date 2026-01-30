import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService, Question } from '../data.service';

@Component({
  selector: 'app-challenge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="challenge-container">
      <header class="challenge-header">
        <button (click)="goBack()" class="back-btn">
          <i class="bi bi-arrow-left"></i>
        </button>
        <h1>{{ challengeName }}</h1>
        <div class="progress-info">
          {{ currentIndex + 1 }} / {{ questions.length }}
        </div>
      </header>

      <div class="quiz-viewer">
        @if (questions.length > 0) {
          <div class="quiz-card">
            <!-- Question Side -->
            <div class="card-content">
              <span class="category-badge">{{ questions[currentIndex].category }}</span>
              <h2 class="question-text">{{ questions[currentIndex].question }}</h2>
              
              @if (questions[currentIndex].code) {
                <pre class="code-block"><code>{{ questions[currentIndex].code }}</code></pre>
              }

              @if (isAnswerVisible) {
                <div class="answer-section">
                  <div class="divider"></div>
                  <h3 class="answer-label">Answer:</h3>
                  <p class="answer-text">{{ questions[currentIndex].answer }}</p>
                </div>
              }
            </div>

            <!-- Actions -->
            <div class="actions-area">
              @if (!isAnswerVisible) {
                <button class="btn-reveal" (click)="revealAnswer()">
                  <i class="bi bi-eye"></i> Reveal Answer
                </button>
              } @else {
                <div class="rating-buttons">
                  <button class="btn-rate wrong" (click)="rateAnswer(false)">
                    <i class="bi bi-x-lg"></i> Didn't Know
                  </button>
                  <button class="btn-rate correct" (click)="rateAnswer(true)">
                    <i class="bi bi-check-lg"></i> Knew It
                  </button>
                </div>
              }
            </div>
          </div>
        } @else {
          <div class="complete-state">
            <div class="score-circle">
              <svg width="120" height="120">
                <circle cx="60" cy="60" r="54" stroke="rgba(255,255,255,0.1)" stroke-width="8" fill="none"/>
                <circle cx="60" cy="60" r="54" 
                  [attr.stroke]="getScoreColor()" 
                  stroke-width="8" fill="none"
                  [style.stroke-dasharray]="339.292"
                  [style.stroke-dashoffset]="339.292 - (339.292 * (score / totalQuestions))"
                  transform="rotate(-90 60 60)"/>
              </svg>
              <div class="score-text">
                <span class="score-value">{{ score }}/{{ totalQuestions }}</span>
              </div>
            </div>
            
            <h2>Challenge Complete!</h2>
            <p>You earned {{ earnedPoints }} points</p>
            
            <button (click)="goBack()" class="finish-btn">Done</button>
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .challenge-container {
      height: 100vh;
      background: #0f172a;
      color: white;
      padding: 20px;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
    .challenge-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }
    .back-btn {
      background: rgba(255,255,255,0.1);
      border: none;
      color: white;
      width: 40px;
      height: 40px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    .progress-info {
      font-family: monospace;
      background: rgba(255,255,255,0.1);
      padding: 5px 12px;
      border-radius: 15px;
    }
    .quiz-viewer {
      flex: 1;
      display: flex;
      flex-direction: column;
      max-width: 600px;
      margin: 0 auto;
      width: 100%;
    }
    .quiz-card {
      background: #1e293b;
      border-radius: 20px;
      padding: 24px;
      flex: 1;
      display: flex;
      flex-direction: column;
      border: 1px solid rgba(255,255,255,0.05);
      overflow-y: auto;
    }
    .card-content {
      flex: 1;
      overflow-y: auto;
    }
    .category-badge {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #94a3b8;
      background: rgba(255,255,255,0.05);
      padding: 4px 8px;
      border-radius: 4px;
    }
    .question-text {
      margin: 16px 0;
      font-size: 1.25rem;
      line-height: 1.5;
    }
    .code-block {
      background: #0f172a;
      padding: 16px;
      border-radius: 12px;
      overflow-x: auto;
      border: 1px solid rgba(255,255,255,0.1);
      margin: 16px 0;
      font-size: 0.9rem;
      font-family: 'Fira Code', monospace;
    }
    .divider {
      height: 1px;
      background: rgba(255,255,255,0.1);
      margin: 24px 0;
    }
    .answer-label {
      color: #94a3b8;
      font-size: 0.9rem;
      margin-bottom: 8px;
    }
    .answer-text {
      color: #e2e8f0;
      line-height: 1.6;
      white-space: pre-wrap;
    }
    .actions-area {
      margin-top: 24px;
      padding-top: 20px;
      border-top: 1px solid rgba(255,255,255,0.05);
    }
    .btn-reveal {
      width: 100%;
      padding: 16px;
      background: #3b82f6;
      color: white;
      border: none;
      border-radius: 12px;
      font-weight: 600;
      font-size: 1rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      transition: background 0.2s;
    }
    .btn-reveal:active { background: #2563eb; }
    
    .rating-buttons {
      display: flex;
      gap: 12px;
    }
    .btn-rate {
      flex: 1;
      padding: 16px;
      border: none;
      border-radius: 12px;
      font-weight: bold;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      font-size: 1rem;
    }
    .wrong { background: #ef4444; color: white; }
    .correct { background: #22c55e; color: white; }
    
    .complete-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      text-align: center;
    }
    .score-circle {
      position: relative;
      margin-bottom: 24px;
    }
    .score-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 2rem;
      font-weight: bold;
    }
    .finish-btn {
      background: white;
      color: #0f172a;
      border: none;
      padding: 12px 40px;
      border-radius: 25px;
      font-weight: 700;
      font-size: 1.1rem;
      margin-top: 30px;
      cursor: pointer;
    }
  `]
})
export class ChallengeComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private dataService = inject(DataService);

  challengeName = '';
  questions: Question[] = [];
  currentIndex = 0;
  isAnswerVisible = false;
  
  score = 0;
  totalQuestions = 0;
  earnedPoints = 0;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.challengeName = params.get('type') || '';
      this.loadQuestions();
    });
  }

  loadQuestions() {
    let count = 3;
    if (this.challengeName.includes('Weekly')) count = 5;
    if (this.challengeName.includes('Monthly')) count = 10;

    const all = this.dataService.getQuestions();
    // Shuffle and pick
    this.questions = [...all]
      .sort(() => Math.random() - 0.5)
      .slice(0, count);
    
    this.totalQuestions = this.questions.length;
    this.currentIndex = 0;
    this.score = 0;
    this.isAnswerVisible = false;
  }

  revealAnswer() {
    this.isAnswerVisible = true;
  }

  rateAnswer(isCorrect: boolean) {
    if (isCorrect) {
      this.score++;
    }

    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
      this.isAnswerVisible = false;
    } else {
      this.finishChallenge();
    }
  }

  async finishChallenge() {
    // 10 pts per correct answer + 20 bonus for completion
    this.earnedPoints = (this.score * 10) + 20;
    await this.dataService.addPoints(this.earnedPoints);
    this.questions = []; // Trigger complete view
  }

  getScoreColor() {
    const percentage = this.score / this.totalQuestions;
    if (percentage >= 0.8) return '#22c55e'; // Green
    if (percentage >= 0.5) return '#eab308'; // Yellow
    return '#ef4444'; // Red
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
