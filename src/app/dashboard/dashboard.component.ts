import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  private router = inject(Router);
  private dataService = inject(DataService);

  categories = [
    { name: 'Core Java', icon: 'bi-cup-hot', color: '#FF5252' },      /* Vibrant Red */
    { name: 'Spring Boot', icon: 'bi-flower1', color: '#69F0AE' },    /* Vibrant Green */
    { name: 'Microservices', icon: 'bi-diagram-3', color: '#40C4FF' }, /* Vibrant Blue */
    { name: 'Hibernate', icon: 'bi-database', color: '#E040FB' },     /* Vibrant Purple */
    { name: 'Spring Reactive', icon: 'bi-lightning', color: '#FFD740' }, /* Vibrant Yellow */
    { name: 'Multithreading', icon: 'bi-cpu', color: '#FF4081' },      /* Vibrant Pink */
    { name: 'Reactive Programming', icon: 'bi-broadcast', color: '#FF6E40' } /* Vibrant Orange */
  ];

  getQuestionCount(category: string): number {
    return this.dataService.getQuestions().filter(q => q.category === category).length;
  }

  navigateToCategory(category: string) {
    this.router.navigate(['/practice', category]);
  }

  startRandomQuiz() {
    this.router.navigate(['/practice', 'All']);
  }
}
