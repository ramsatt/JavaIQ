/**
 * scripts/seed-daily-challenges.js
 *
 * Seeds 90 days of daily challenges into Firestore.
 *
 * Usage:
 *   node scripts/seed-daily-challenges.js [--start YYYY-MM-DD] [--days 90]
 *
 * Prerequisites:
 *   npm install firebase-admin
 *   Set GOOGLE_APPLICATION_CREDENTIALS env var to your service account JSON path,
 *   OR place serviceAccountKey.json in the project root.
 */

const admin = require('firebase-admin');
const path = require('path');

// ---------------------------------------------------------------------------
// Init Firebase Admin
// ---------------------------------------------------------------------------
let credential;
if (process.env.GOOGLE_APPLICATION_CREDENTIALS) {
  credential = admin.credential.applicationDefault();
} else {
  const keyPath = path.join(__dirname, '..', 'serviceAccountKey.json');
  credential = admin.credential.cert(require(keyPath));
}

admin.initializeApp({ credential });
const db = admin.firestore();

// ---------------------------------------------------------------------------
// Question pool (IDs only — must match the IDs in your data files)
// Extend this array with all question IDs from:
//   core-java.ts, spring-boot.ts, multithreading.ts, microservices.ts
// ---------------------------------------------------------------------------
const QUESTION_POOL = [
  // Core Java (1–50)
  ...Array.from({ length: 50 }, (_, i) => i + 1),
  // Spring Boot (101–150)
  ...Array.from({ length: 50 }, (_, i) => 101 + i),
  // Multithreading (201–250)
  ...Array.from({ length: 50 }, (_, i) => 201 + i),
  // Microservices (301–350)
  ...Array.from({ length: 50 }, (_, i) => 301 + i),
];

const CATEGORIES = ['Core Java', 'Spring Boot', 'Multithreading', 'Microservices', 'Mixed'];
const TITLES = [
  'Daily Java Challenge',
  'Java Deep Dive',
  'Spring Concepts',
  'Concurrency Quiz',
  'Microservices Mastery',
  'Java Interview Prep',
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function addDays(dateStr, days) {
  const d = new Date(dateStr);
  d.setDate(d.getDate() + days);
  return d.toISOString().split('T')[0];
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// ---------------------------------------------------------------------------
// Parse CLI args
// ---------------------------------------------------------------------------
const args = process.argv.slice(2);
let startDate = new Date().toISOString().split('T')[0];
let totalDays = 90;

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--start' && args[i + 1]) startDate = args[++i];
  if (args[i] === '--days' && args[i + 1]) totalDays = parseInt(args[++i], 10);
}

// ---------------------------------------------------------------------------
// Seed
// ---------------------------------------------------------------------------
async function seed() {
  console.log(`Seeding ${totalDays} days starting from ${startDate}...`);

  const batch = db.batch();
  let count = 0;

  for (let d = 0; d < totalDays; d++) {
    const date = addDays(startDate, d);
    const questionIds = shuffle(QUESTION_POOL).slice(0, 5);
    const category = pick(CATEGORIES);
    const title = pick(TITLES);

    const docRef = db.collection('daily_challenges').doc(date);
    batch.set(docRef, { date, questionIds, title, category }, { merge: false });
    count++;

    // Firestore batch limit is 500
    if (count % 490 === 0) {
      await batch.commit();
      console.log(`  Committed ${count} documents...`);
    }
  }

  await batch.commit();
  console.log(`Done. Seeded ${totalDays} documents into daily_challenges.`);
  process.exit(0);
}

seed().catch(err => {
  console.error('Seed failed:', err);
  process.exit(1);
});
