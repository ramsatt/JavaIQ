import * as admin from 'firebase-admin';

// Initialize Firebase Admin once
admin.initializeApp();

// Export all Cloud Functions
export { sendDailyChallenge } from './notifications/daily-challenge';
export { sendStreakReminder }  from './notifications/streak-reminder';
export { sendReEngagement }   from './notifications/re-engagement';
export { onLevelUp }          from './notifications/level-up';
export { sendWeeklySummary }  from './notifications/weekly-summary';
