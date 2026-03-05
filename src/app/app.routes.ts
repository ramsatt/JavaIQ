import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'onboarding',
    loadComponent: () => import('./onboarding/onboarding.component').then(m => m.OnboardingComponent)
  },
  {
    path: 'profile-setup',
    loadComponent: () => import('./profile-setup/profile-setup.component').then(m => m.ProfileSetupComponent)
  },
  {
    path: 'settings',
    loadComponent: () => import('./features/settings/settings.component').then(m => m.SettingsComponent)
  },
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
    path: 'daily-challenge',
    loadComponent: () => import('./daily-challenge/daily-challenge.component').then(m => m.DailyChallengeComponent)
  },
  {
    path: 'bookmarks',
    loadComponent: () => import('./features/bookmarks/bookmarks-list.component').then(m => m.BookmarksListComponent)
  },
  {
    path: 'leaderboard',
    loadComponent: () => import('./leaderboard/leaderboard.component').then(m => m.LeaderboardComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'achievements',
    loadComponent: () => import('./features/achievements/achievement-gallery.component').then(m => m.AchievementGalleryComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: 'dashboard' }
];
