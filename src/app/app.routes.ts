import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'tutorials/:slug/:topic',
    loadComponent: () => import('./features/tutorials/topic-router.component').then(m => m.TopicRouterComponent)
  },
  {
    path: 'tutorials',
    loadComponent: () => import('./features/tutorials/tutorial-list.component').then(m => m.TutorialListComponent)
  },
  {
    path: 'tutorials/:slug',
    loadComponent: () => import('./features/tutorials/tutorial-detail.component').then(m => m.TutorialDetailComponent)
  },
  {
    path: 'interview-questions',
    loadComponent: () => import('./features/interview-questions/iq-list.component').then(m => m.IqListComponent)
  },
  {
    path: 'interview-questions/:category',
    loadComponent: () => import('./features/interview-questions/iq-category.component').then(m => m.IqCategoryComponent)
  },
  {
    path: 'interview-questions/:category/:id',
    loadComponent: () => import('./features/interview-questions/iq-detail.component').then(m => m.IqDetailComponent)
  },
  {
    path: 'coding-questions',
    loadComponent: () => import('./features/coding-questions/cq-list.component').then(m => m.CqListComponent)
  },
  {
    path: 'coding-questions/:id',
    loadComponent: () => import('./features/coding-questions/cq-detail.component').then(m => m.CqDetailComponent)
  },
  {
    path: 'leetcode',
    loadComponent: () => import('./features/leetcode/lc-list.component').then(m => m.LcListComponent)
  },
  {
    path: 'leetcode/:id',
    loadComponent: () => import('./features/leetcode/lc-detail.component').then(m => m.LcDetailComponent)
  },
  {
    path: 'assessments',
    loadComponent: () => import('./features/assessments/assess-list.component').then(m => m.AssessListComponent)
  },
  {
    path: 'assessments/:id',
    loadComponent: () => import('./features/assessments/assess-quiz.component').then(m => m.AssessQuizComponent)
  },
  {
    path: 'assessments/:id/result',
    loadComponent: () => import('./features/assessments/assess-result.component').then(m => m.AssessResultComponent)
  },
  {
    path: 'experiences',
    loadComponent: () => import('./features/experiences/exp-list.component').then(m => m.ExpListComponent)
  },
  {
    path: 'experiences/:id',
    loadComponent: () => import('./features/experiences/exp-detail.component').then(m => m.ExpDetailComponent)
  },
  {
    path: '',
    redirectTo: 'tutorials',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: 'tutorials' }
];
