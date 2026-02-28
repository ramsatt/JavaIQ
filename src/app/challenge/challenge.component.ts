import { Component, inject, OnInit, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService, Question } from '../data.service';
import { GamificationService } from '../gamification.service';

@Component({
  selector: 'app-challenge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private dataService = inject(DataService);
  public gameService = inject(GamificationService);

  // Game State
  challengeName = '';
  questions: Question[] = [];
  currentIndex = 0;
  isAnswerVisible = false;
  isGameFinished = false;

  // Stats
  score = 0; // Correct answers
  combo = 0;
  maxCombo = 0;
  earnedXp = 0;
  
  // Breakdown for results
  baseXp = 0;
  comboXp = 0;
  speedXp = 0;
  starsEarned = 0;

  // Temp Visuals
  timerProgress = 100;
  timerInterval: any;
  startTime = 0;
  
  showXpPopup = false;
  lastGainedXp = 0;
  lastGainedBonus = '';
  shakeScreen = false;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.challengeName = params.get('type') || '';
      this.startGame();
    });
  }

  startGame() {
    // Reset State
    this.currentIndex = 0;
    this.score = 0;
    this.combo = 0;
    this.earnedXp = 0;
    this.baseXp = 0;
    this.comboXp = 0;
    this.speedXp = 0;
    this.isGameFinished = false;

    // Load Questions
    const count = 10; 
    let all = this.dataService.getQuestions(this.challengeName);
    if (all.length === 0) all = this.dataService.getQuestions(); 

    // Filter unrevealed first
    const unrevealed = all.filter(q => !this.dataService.revealedQuestionIds().has(q.id));
    const revealed = all.filter(q => this.dataService.revealedQuestionIds().has(q.id));
    
    let selection: Question[] = [];

    if (unrevealed.length >= count) {
      // Pick 10 random new questions
      selection = unrevealed.sort(() => Math.random() - 0.5).slice(0, count);
    } else {
      // Take all new questions + fill with review questions
      const needed = count - unrevealed.length;
      const reviewSet = revealed.sort(() => Math.random() - 0.5).slice(0, needed);
      selection = [...unrevealed, ...reviewSet];
      // Shuffle the final mix so new ones aren't just at the front
      selection.sort(() => Math.random() - 0.5);
    }
    
    this.questions = selection;
    this.startQuestion();
  }

  startQuestion() {
    this.isAnswerVisible = false;
    this.timerProgress = 100;
    this.startTime = Date.now();
    
    clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      const elapsed = Date.now() - this.startTime;
      // 15 seconds per question? Or just for bonus?
      // Let's make the bar represent 10 seconds for "Speed" context, but answer time is unlimited
      // Logic: Bar depletes in 10s. Speed bonus if answered in < 5s (half bar).
      
      const MAX_TIME = 10000; 
      const remaining = Math.max(0, MAX_TIME - elapsed);
      this.timerProgress = (remaining / MAX_TIME) * 100;
      
      if (remaining === 0) clearInterval(this.timerInterval);
    }, 100);
  }

  revealAnswer() {
    this.isAnswerVisible = true;
    clearInterval(this.timerInterval); // Stop timer visual
  }

  submitResult(isCorrect: boolean) {
    if (isCorrect) {
      this.score++;
      this.combo++;
      if (this.combo > this.maxCombo) this.maxCombo = this.combo;
      
      // Calculate XP
      const timeTaken = Date.now() - this.startTime;
      const isSpeedy = timeTaken < 5000;
      
      let xp = 10; // Base
      this.baseXp += 10;
      
      let bonusText = '';
      
      if (this.combo > 1) {
        const bonus = 5; // Flat bonus for maintaining streak > 1
        xp += bonus;
        this.comboXp += bonus;
        bonusText = `${this.combo}x Combo!`;
      }
      
      if (isSpeedy) {
        const bonus = 5;
        xp += bonus;
        this.speedXp += bonus;
        bonusText = isSpeedy ? (bonusText ? 'Combo + Speed!' : 'Speed Bonus!') : bonusText;
      }

      this.earnedXp += xp;
      
      // Trigger Visuals
      this.triggerXpPopup(xp, bonusText);
      this.gameService.addXp(xp); // Award immediately or at end? Immediately feels better "ding"
      
      // Mark as revealed/learned in DataService
      this.dataService.markAsRevealed(this.questions[this.currentIndex].id);

    } else {
      this.combo = 0;
      this.baseXp += 2; // Pity XP for trying
      this.earnedXp += 2;
      this.gameService.addXp(2);
      this.triggerShake();
    }

    // Next
    setTimeout(() => {
      if (this.currentIndex < this.questions.length - 1) {
        this.currentIndex++;
        this.startQuestion();
      } else {
        this.finishGame();
      }
    }, 1000); // Delay to see popup
  }

  finishGame() {
    this.isGameFinished = true;
    
    // Calculate Stars
    const percentage = this.score / this.questions.length;
    if (percentage >= 1) this.starsEarned = 3;
    else if (percentage >= 0.7) this.starsEarned = 2;
    else if (percentage >= 0.4) this.starsEarned = 1;
    else this.starsEarned = 0;
    
    // Save to DataService maybe? 
    // DataService calculates stars based on *Total Progress*, not quiz performance.
    // So this star rating is just for the specific session result screen.
  }

  quitGame() {
    this.router.navigate(['/']);
  }

  triggerXpPopup(xp: number, text: string) {
    this.lastGainedXp = xp;
    this.lastGainedBonus = text;
    this.showXpPopup = true;
    setTimeout(() => this.showXpPopup = false, 1000);
  }

  triggerShake() {
    this.shakeScreen = true;
    setTimeout(() => this.shakeScreen = false, 500);
  }
}
