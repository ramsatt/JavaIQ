# JavaIQ — Product Roadmap & Implementation Plan

> **Document Version:** 1.0
> **Date:** March 2026
> **Owner:** Product Team
> **Stack:** Angular 21 + Ionic + Capacitor + Firebase + AdMob

---

## Table of Contents

1. [Vision & Goals](#1-vision--goals)
2. [Release Overview](#2-release-overview)
3. [Sprint 1 — Critical Bug Fixes & Credibility](#3-sprint-1--critical-bug-fixes--credibility)
4. [Sprint 2 — Search & Discovery](#4-sprint-2--search--discovery)
5. [Sprint 3 — Onboarding & First-Time Experience](#5-sprint-3--onboarding--first-time-experience)
6. [Sprint 4 — Push Notifications & Streak Engine](#6-sprint-4--push-notifications--streak-engine)
7. [Sprint 5 — Daily Challenge Feature](#7-sprint-5--daily-challenge-feature)
8. [Sprint 6 — Certificate Sharing & Viral Loop](#8-sprint-6--certificate-sharing--viral-loop)
9. [Sprint 7 — Firebase-Backed Dynamic Content](#9-sprint-7--firebase-backed-dynamic-content)
10. [Sprint 8 — Premium Subscription Tier](#10-sprint-8--premium-subscription-tier)
11. [Sprint 9 — Interview Simulator Mode](#11-sprint-9--interview-simulator-mode)
12. [Sprint 10 — Community & User Submissions](#12-sprint-10--community--user-submissions)
13. [Sprint 11 — ASO & Store Optimization](#13-sprint-11--aso--store-optimization)
14. [Sprint 12 — Marketing Automation](#14-sprint-12--marketing-automation)
15. [Non-Functional Requirements](#15-non-functional-requirements)
16. [Success Metrics & KPIs](#16-success-metrics--kpis)
17. [Tech Debt & Architecture Notes](#17-tech-debt--architecture-notes)

---

## 1. Vision & Goals

### Product Vision
> "Be the #1 mobile app for Java developers in India to prepare for and crack interviews at top product companies."

### 6-Month Goals
| Metric | Current (Estimated) | Target (6 months) |
|---|---|---|
| Play Store Rating | — | ≥ 4.5 ★ |
| Monthly Active Users | — | 50,000+ |
| Day-7 Retention | ~10% | ≥ 35% |
| Day-30 Retention | ~3% | ≥ 15% |
| Monthly Downloads | — | 10,000+ |
| Premium Subscribers | 0 | 500+ |

### Design Principles
- **Habit first:** Every feature must drive users back daily
- **Mobile first:** All UI designed for 375px–430px screens
- **Offline ready:** Core content must work without internet
- **Authentic:** Content must feel real, not curated perfection
- **Performant:** < 2s cold start, < 300ms navigation

---

## 2. Release Overview

```
Sprint 1  (Week 1–2)   → Critical Fixes & Credibility
Sprint 2  (Week 3–4)   → Search & Discovery
Sprint 3  (Week 5–6)   → Onboarding & FTU
Sprint 4  (Week 7–8)   → Push Notifications & Streak Engine
Sprint 5  (Week 9–10)  → Daily Challenge
Sprint 6  (Week 11–12) → Certificate Sharing & Viral Loop
Sprint 7  (Week 13–15) → Firebase Dynamic Content
Sprint 8  (Week 16–17) → Premium Subscription
Sprint 9  (Week 18–19) → Interview Simulator
Sprint 10 (Week 20–21) → Community Submissions
Sprint 11 (Week 22)    → ASO & Store Optimization
Sprint 12 (Week 23–24) → Marketing Automation
```

---

## 3. Sprint 1 — Critical Bug Fixes & Credibility

**Duration:** 2 weeks
**Goal:** Fix issues that damage trust and cause 1-star reviews

---

### Story 1.1 — Diversify Interview Experience Results

**Priority:** 🔴 Critical
**Estimated Effort:** 3 days

**Problem:**
All 12 interview experience cards show `result: 'offer'`. This is unrealistic and kills content credibility. Users immediately distrust the content.

**Acceptance Criteria:**
- [ ] At least 30% of experience cards show `result: 'rejected'`
- [ ] At least 10% show `result: 'pending'` or `result: 'withdrew'`
- [ ] Rejected stories include honest round-by-round breakdown
- [ ] Add 5 new experience entries (mix of results) to reach 17 total
- [ ] Add a disclaimer: *"Experiences are anonymized real submissions"*

**Implementation Steps:**
1. Edit `src/app/features/experiences/exp-list.component.ts`
2. Update existing entries: change at least 3 offers to `rejected`, 1 to `withdrew`
3. Add 5 new entries with varied results
4. Add the disclaimer text below the hero stats section

**New Entries to Add:**
```
- TCS (rejected, easy, 2 rounds, freshers)
- Paytm (rejected, medium, 3 rounds, 2y exp)
- Cognizant (offer, easy, 2 rounds, fresher)
- Wipro (withdrew, easy, 2 rounds, 3y exp)
- Myntra (pending, medium, 4 rounds, 3y exp)
```

---

### Story 1.2 — Wire Up "Submit Experience" CTA

**Priority:** 🔴 Critical
**Estimated Effort:** 1 day

**Problem:**
The "Submit Experience" button in `exp-list.component.ts` has no action. Clicking it does nothing, which feels broken.

**Acceptance Criteria:**
- [ ] Tapping "Submit Experience" opens a Google Form in the in-app browser
- [ ] Alternatively, shows a modal with a simple form (name, company, role, result, summary)
- [ ] Success message shown after submission: *"Thanks! We'll review and publish your story."*

**Implementation Steps (Quick Fix — Google Form approach):**
1. Create a Google Form with fields: Company, Role, YOE, Rounds, Result, Experience Summary
2. In `exp-list.component.ts`, inject `Browser` from `@capacitor/browser`
3. On CTA button click: `await Browser.open({ url: 'YOUR_GOOGLE_FORM_URL' })`
4. Add `@capacitor/browser` to `package.json` if not present

**Future (Sprint 10):** Replace with in-app native submission form backed by Firebase.

---

### Story 1.3 — Fix Ad Frequency & Placement

**Priority:** 🔴 Critical
**Estimated Effort:** 2 days

**Problem:**
Aggressive interstitial ads on every navigation trigger 1-star reviews. Users abandon apps that show too many ads.

**Acceptance Criteria:**
- [ ] Interstitial ads shown at most once every 5 minutes per session
- [ ] Interstitial shown only at natural exit points (after completing a challenge, leaving a tutorial)
- [ ] No interstitial on first launch or first 2 navigation actions
- [ ] Frequency cap tracked in `localStorage`

**Implementation Steps:**
1. In `admob.service.ts`, add a `lastInterstitialTime` tracker
2. Add method `canShowInterstitial(): boolean` — checks if 5 mins have elapsed
3. Wrap all `showInterstitial()` calls with this guard
4. Add session counter: skip first 2 navigations

---

### Story 1.4 — Offline State Feedback

**Priority:** 🟠 High
**Estimated Effort:** 1 day

**Problem:**
Firebase sync fails silently when offline. Users see stale data with no explanation.

**Acceptance Criteria:**
- [ ] A non-blocking toast/banner appears when device is offline: *"You're offline. Progress will sync when connected."*
- [ ] App still works fully offline for locally stored content
- [ ] Toast auto-dismisses when connection restores

**Implementation Steps:**
1. Create `connectivity.service.ts` — uses `Network` from `@capacitor/network`
2. Subscribe to network change events
3. Use existing `alert.service.ts` or a new `toast.service.ts` to show non-blocking notification
4. Wrap all Firebase calls with connectivity check

---

### Story 1.5 — Leaderboard Weekly/Monthly Tabs

**Priority:** 🟡 Medium
**Estimated Effort:** 1 day

**Problem:**
Leaderboard only shows "Top Points" (all-time). A new user can never compete, so they lose motivation.

**Acceptance Criteria:**
- [ ] Three tabs: `All Time` | `This Month` | `This Week`
- [ ] Weekly/Monthly filtered by `lastUpdated` Firestore field
- [ ] User's own rank highlighted in the list

**Implementation Steps:**
1. In `leaderboard.component.ts`, add `activeTab` signal with values `alltime | monthly | weekly`
2. In `data.service.ts → getLeaderboard()`, accept a `period` param
3. Firestore query: filter `lastUpdated` >= start of week/month
4. Highlight current user row with a distinct border color

---

**Sprint 1 Deliverable:** App store update with hotfixes. Write release notes emphasizing content improvements.

---

## 4. Sprint 2 — Search & Discovery

**Duration:** 2 weeks
**Goal:** Let users find any content instantly

---

### Story 2.1 — Global Search

**Priority:** 🔴 Critical
**Estimated Effort:** 5 days

**Problem:**
No search exists. With 200+ questions across 8 categories, users cannot find specific topics. This is the #1 missing feature in the app.

**Acceptance Criteria:**
- [ ] Search icon in the top bar on every main screen
- [ ] Search works across: Interview Questions, Tutorials, Coding Questions, LeetCode, Assessments
- [ ] Results grouped by category (e.g., "Interview Q (5)", "Tutorials (2)")
- [ ] Minimum 2 characters to trigger search
- [ ] Empty state shows suggested searches: *"Try: HashMap, Spring Boot, Streams"*
- [ ] Recent searches saved locally (max 5)
- [ ] Results appear within 200ms (client-side filter, no network call)

**Implementation Steps:**
1. Create `search.service.ts`
   - Aggregates all content from `data.service.ts` into a flat searchable index on app init
   - `search(query: string): SearchResult[]` — fuzzy match on question text, category, tags
2. Create `search-modal.component.ts` (Ionic modal)
   - Input field with auto-focus
   - Results list grouped by type
   - Tap result → navigate to detail page
3. Add search trigger button (magnifying glass icon) to:
   - `dashboard.component.html` top bar
   - `tabs.component.ts` (consider a Search tab)
4. Persist recent searches in `localStorage`

**Search Index Structure:**
```typescript
interface SearchResult {
  id: string | number;
  title: string;        // question text or tutorial title
  category: string;     // 'Core Java', 'Spring Boot', etc.
  type: 'interview' | 'tutorial' | 'coding' | 'leetcode' | 'assessment';
  route: string[];      // router.navigate() args
  preview: string;      // first 80 chars of answer
}
```

---

### Story 2.2 — Bookmark / Favorites System

**Priority:** 🟡 Medium
**Estimated Effort:** 3 days

**Problem:**
Users cannot save questions for later review. This removes a key reason to return.

**Acceptance Criteria:**
- [ ] Bookmark icon (🔖) on every question detail page
- [ ] Bookmarks saved to `localStorage` (offline-first) and synced to Firestore if logged in
- [ ] Dedicated "Saved" tab or section on dashboard showing all bookmarked items
- [ ] Bookmark count shown as a badge on the tab
- [ ] Remove bookmark with confirmation

**Implementation Steps:**
1. Create `bookmarks.service.ts`
   - `bookmarks = signal<BookmarkedItem[]>([])`
   - `toggleBookmark(item)`, `isBookmarked(id)`, `loadBookmarks()`, `saveBookmarks()`
   - Sync to `users/{uid}/bookmarks` Firestore collection
2. Add bookmark icon to:
   - `iq-detail.component.ts` (Interview Questions)
   - `cq-detail.component.ts` (Coding Questions)
   - `lc-detail.component.ts` (LeetCode)
   - `tutorial-detail.component.ts`
3. Create `bookmarks-list.component.ts` — grouped by type
4. Add "Saved" entry to navigation (sidebar or tab)

---

### Story 2.3 — "New" Badge on Fresh Content

**Priority:** 🟡 Medium
**Estimated Effort:** 1 day

**Problem:**
Users who have seen all content have no signal when new content is added. The app feels static.

**Acceptance Criteria:**
- [ ] Questions added in the last 30 days show a "NEW" badge on list cards
- [ ] Tutorial topics added in the last 30 days show a green dot indicator
- [ ] "New Content" count shown on the dashboard hero card

**Implementation Steps:**
1. Add `addedOn: string` (ISO date) field to `Question` model and all question data files
2. In list components, compute `isNew = (Date.now() - addedOn) < 30 days`
3. Render a `<span class="new-badge">NEW</span>` chip on cards where `isNew` is true
4. Dashboard hero card: count and display `newCount` questions added this week

---

**Sprint 2 Deliverable:** Search live. Bookmark system functional. Release update to stores.

---

## 5. Sprint 3 — Onboarding & First-Time Experience

**Duration:** 2 weeks
**Goal:** Ensure every new user understands the app's value within the first 60 seconds

---

### Story 3.1 — Onboarding Carousel (First Launch Only)

**Priority:** 🔴 Critical
**Estimated Effort:** 4 days

**Problem:**
New users land directly on the Tutorials list with zero context. Gamification, certificates, and challenge mode are completely hidden.

**Acceptance Criteria:**
- [ ] 4-slide onboarding shown only on first app launch
- [ ] Skip button always visible
- [ ] "Get Started" CTA on final slide
- [ ] Onboarding never shown again after completion (flag in `localStorage`)
- [ ] Each slide has a visual illustration, headline, and 1-line description

**Slides Content:**

| Slide | Headline | Description | Visual |
|---|---|---|---|
| 1 | "Crack Your Java Interview" | "200+ questions from Amazon, Google & Flipkart — organized by topic" | Question card animation |
| 2 | "Learn by Playing" | "Earn XP, build streaks, climb the leaderboard — make prep fun" | XP popup + combo animation |
| 3 | "Real Interview Stories" | "Learn from developers who cracked FAANG. See every round, every question." | Experience card |
| 4 | "Earn Certificates" | "Complete courses and assessments. Get a certificate to share on LinkedIn." | Certificate preview |

**Implementation Steps:**
1. Create `onboarding.component.ts` with Ionic slides (SwiperJS)
2. Check `localStorage.getItem('onboarding_done')` in `app.component.ts`
3. If not set, navigate to `/onboarding` before main app
4. On "Get Started": set flag, navigate to `/` (dashboard)
5. Add route `/onboarding` to `app.routes.ts` (outside tabs)

---

### Story 3.2 — User Profile Setup After Google Login

**Priority:** 🟠 High
**Estimated Effort:** 2 days

**Problem:**
After Google login, users go straight to the dashboard. There is no personalization step.

**Acceptance Criteria:**
- [ ] After first-time Google login, show a one-time profile setup screen
- [ ] Fields: Display Name (pre-filled from Google), Years of Experience (dropdown: Fresher / 1-2y / 3-5y / 5y+), Goal (Get into FAANG / Switch Jobs / Fresher Placement)
- [ ] Data saved to `users/{uid}` Firestore document
- [ ] Goal selection influences dashboard greeting message
- [ ] This screen shown only once (check `users/{uid}.profileSetup` in Firestore)

**Implementation Steps:**
1. Create `profile-setup.component.ts` (full-screen modal or route)
2. After `authService.loginWithGoogle()` resolves, check Firestore for `profileSetup` flag
3. If missing, navigate to `/profile-setup`
4. On submit, write to `users/{uid}` and set `profileSetup: true`
5. Store `goal` and `yoe` locally for personalized dashboard messaging

---

### Story 3.3 — Contextual Feature Discovery Tooltips

**Priority:** 🟡 Medium
**Estimated Effort:** 2 days

**Problem:**
Challenge Mode, Certificates, and Interview Stories are not discoverable from the main navigation.

**Acceptance Criteria:**
- [ ] First time user visits Dashboard, a tooltip highlights "Learning Path → tap a module to start the Challenge"
- [ ] First time user visits Assessments, a tooltip shows "Complete to earn a Certificate"
- [ ] Tooltips are dismissable and never repeat
- [ ] Max 1 tooltip per screen, per session

**Implementation Steps:**
1. Create `tooltip.service.ts` — manages which tooltips have been shown (localStorage flags)
2. Create a simple `<app-tooltip>` component — arrow-pointing overlay with text and dismiss button
3. Wire tooltips to:
   - Dashboard: highlight first unlocked module card
   - Assessments list: highlight first assessment card

---

**Sprint 3 Deliverable:** Full onboarding flow live. Profile setup active. Store update with screenshots of onboarding.

---

## 6. Sprint 4 — Push Notifications & Streak Engine

**Duration:** 2 weeks
**Goal:** Bring users back every day

---

### Story 4.1 — Push Notification Infrastructure

**Priority:** 🔴 Critical
**Estimated Effort:** 4 days

**Problem:**
Without push notifications, streak-based retention is impossible. Users simply forget the app.

**Acceptance Criteria:**
- [ ] Push notification permission requested after onboarding (not on first launch)
- [ ] FCM (Firebase Cloud Messaging) token saved to `users/{uid}.fcmToken` in Firestore
- [ ] Notification permission prompt includes rationale: *"Get daily Java tips and streak reminders"*
- [ ] Users can opt out from Settings
- [ ] Notifications work on both Android and iOS

**Implementation Steps:**
1. Add `@capacitor/push-notifications` to `package.json`
2. Create `push-notification.service.ts`
   - `requestPermission()` — called after onboarding completes
   - `registerToken()` — saves FCM token to Firestore
   - `handleNotificationTap()` — deep links to correct screen
3. Android: add `google-services.json` to `android/app/`
4. iOS: add `GoogleService-Info.plist` to `ios/App/App/`
5. Firebase Cloud Functions (Node.js) for server-side scheduling

---

### Story 4.2 — Scheduled Notification Types

**Priority:** 🔴 Critical
**Estimated Effort:** 3 days (Firebase Functions)

**Notification Schedule:**

| Type | Trigger | Message | Deep Link |
|---|---|---|---|
| Streak Reminder | Daily at 8 PM if no activity | "🔥 Your {N}-day streak ends tonight! Do today's challenge." | `/challenge/CoreJava` |
| Daily Challenge | Daily at 9 AM | "☕ Today's Java question is ready. Can you answer it?" | `/daily-challenge` |
| Streak Milestone | When streak hits 3, 7, 14, 30 | "🏆 Incredible! You've hit a {N}-day streak!" | `/leaderboard` |
| Level Up | On level change | "⚡ You reached Level {N}! Keep going." | `/` |
| Weekly Summary | Every Sunday 6 PM | "📊 This week: {N} questions, {XP} XP earned. Great job!" | `/` |
| Re-engagement | No activity for 3 days | "Miss us? 👋 New questions added. Come back and keep your streak." | `/` |

**Implementation Steps:**
1. Create Firebase Cloud Function `sendScheduledNotifications` (runs on Cloud Scheduler — daily cron)
2. Function queries Firestore for users where `lastActiveDate` is yesterday → sends streak reminder
3. Function sends daily challenge notification to ALL users at 9 AM IST
4. Level-up notification: trigger on Firestore write to `gamification/{uid}.xp` using `onDocumentUpdated`
5. Re-engagement: Cloud Scheduler checks `lastActiveDate` — if 3+ days ago, send re-engagement

**Firebase Cloud Function Structure:**
```
functions/
  src/
    notifications/
      streak-reminder.ts
      daily-challenge.ts
      level-up.ts
      re-engagement.ts
    index.ts
```

---

### Story 4.3 — Streak Freeze Power-Up

**Priority:** 🟡 Medium
**Estimated Effort:** 2 days

**Problem:**
Users who break their streak due to busy days feel demotivated and often stop using the app. Duolingo solved this with "Streak Freeze."

**Acceptance Criteria:**
- [ ] Users can hold a maximum of 2 "Streak Shields"
- [ ] One shield is awarded for every 7-day streak milestone
- [ ] On day with no activity, if user has a shield: streak is preserved, one shield consumed
- [ ] Shield usage shown in streak history
- [ ] Shield icon visible on dashboard next to streak counter
- [ ] Can also earn shields by watching a reward ad (1 shield per ad, once per day)

**Implementation Steps:**
1. Add `streakShields = signal<number>(0)` to `gamification.service.ts`
2. In `checkStreak()`: if streak would break and shields > 0, decrement shields instead
3. Award 1 shield at 7-day, 14-day, 30-day milestones (check in `updateStreak()`)
4. Add shield count to Firestore sync
5. Add `<span class="shield-count">🛡️ {{ gameService.shields() }}</span>` to dashboard header

---

**Sprint 4 Deliverable:** Push notifications live. Streak Freeze functional. Day-7 retention should measurably improve.

---

## 7. Sprint 5 — Daily Challenge Feature

**Duration:** 2 weeks
**Goal:** Give users a reason to open the app every single day

---

### Story 5.1 — Daily Challenge System

**Priority:** 🔴 Critical
**Estimated Effort:** 6 days

**Problem:**
There is no designated daily content. Users who have completed all modules have no reason to return.

**Acceptance Criteria:**
- [ ] One "Daily Challenge" available per calendar day (resets at midnight IST)
- [ ] Challenge is 5 questions (not 10) — lighter commitment, higher completion rate
- [ ] Questions rotate through all categories — no repeats within 30 days
- [ ] 2x XP bonus for completing the daily challenge
- [ ] Completion status shown on dashboard: ✅ Done today / ⏳ Not done yet
- [ ] Countdown timer showing time until next challenge resets
- [ ] Daily Challenge question list stored in Firestore (editable without app update)
- [ ] If user already completed today: show result summary and share button

**Implementation Steps:**
1. Create `daily-challenge.service.ts`
   - `getTodayChallenge()` — queries Firestore `daily_challenges/{YYYY-MM-DD}`
   - `markCompleted(score, xp)` — writes to `users/{uid}/daily_completions/{date}`
   - `isCompletedToday(): boolean`
2. Create `daily-challenge.component.ts` — reuses `ChallengeComponent` logic with 5 questions and 2x XP multiplier
3. Add route `/daily-challenge` to `app.routes.ts`
4. Add "Daily Challenge" card to dashboard hero section — prominent, above the learning path
5. Firebase Admin Script: pre-populate `daily_challenges` collection for 90 days ahead
6. Add daily challenge completion to streak update logic

**Dashboard Daily Challenge Card:**
```
┌─────────────────────────────────────────┐
│  ⚡ DAILY CHALLENGE           2x XP 🔥  │
│  "Core Java — Streams & Lambdas"         │
│  5 questions • Resets in 14h 32m         │
│                                          │
│  [▶ Start Challenge]      ✅ Done Today  │
└─────────────────────────────────────────┘
```

---

### Story 5.2 — Daily Challenge Streak (Separate from Main Streak)

**Priority:** 🟡 Medium
**Estimated Effort:** 2 days

**Acceptance Criteria:**
- [ ] Separate "Daily Challenge Streak" counter — how many consecutive days the Daily Challenge was completed
- [ ] Milestone rewards: 3-day (Badge), 7-day (200 XP bonus), 30-day (Exclusive badge + 1000 XP)
- [ ] Badge displayed on user profile/dashboard

**Implementation Steps:**
1. Add `dailyStreak = signal<number>(0)` and `lastDailyChallengeDate` to `gamification.service.ts`
2. On daily challenge completion, call `updateDailyStreak()`
3. Check milestones and trigger reward alerts

---

**Sprint 5 Deliverable:** Daily Challenge live. This is the most impactful retention feature. Monitor DAU closely after release.

---

## 8. Sprint 6 — Certificate Sharing & Viral Loop

**Duration:** 2 weeks
**Goal:** Turn every certificate into a free advertisement

---

### Story 6.1 — LinkedIn Share Integration

**Priority:** 🟠 High
**Estimated Effort:** 4 days

**Problem:**
Certificates are print-only. LinkedIn sharing is the most powerful free marketing channel for developers.

**Acceptance Criteria:**
- [ ] "Share on LinkedIn" button on the certificate modal
- [ ] Generates a shareable image (PNG) of the certificate
- [ ] Pre-filled LinkedIn post text: *"I just completed [Course Name] on JavaIQ! 🎓 #Java #SpringBoot #JavaDeveloper"*
- [ ] Also adds certificate to LinkedIn's "Licenses & Certifications" section via LinkedIn Deep Link
- [ ] Fallback: copy sharable text + image to clipboard if LinkedIn not installed

**Implementation Steps:**
1. Install `@capacitor/share` and `html2canvas` (or equivalent Canvas API)
2. In `certificate.component.ts`, add `shareToLinkedIn()` method:
   - Use `html2canvas` to capture `.cert-page` as PNG blob
   - Save PNG to device via `@capacitor/filesystem`
   - Call `Share.share()` with LinkedIn deep link URL and image
3. LinkedIn Add to Profile URL format:
   ```
   https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME
     &name=[Certificate Name]
     &organizationName=JavaIQ
     &certUrl=[App Store URL]
   ```
4. Add share button below "Print / Save as PDF" in certificate modal

---

### Story 6.2 — WhatsApp Score Sharing (Interview Simulator Preview)

**Priority:** 🟡 Medium
**Estimated Effort:** 2 days

**Acceptance Criteria:**
- [ ] After completing a challenge, show "Share your score" option
- [ ] Generates a score card image: Score, Category, Stars earned, App name
- [ ] Share via `@capacitor/share` (WhatsApp, Telegram, etc.)
- [ ] Share text: *"I scored {score}/10 in Core Java on JavaIQ! 💪 Can you beat me? [Play Store link]"*

**Implementation Steps:**
1. In `challenge.component.ts` results screen, add "Share Score" button
2. Create `score-card` div (hidden, off-screen) for html2canvas capture
3. Capture and share using `@capacitor/share`
4. Include Play Store URL in share text (dynamic link via Firebase Dynamic Links)

---

### Story 6.3 — Referral Program

**Priority:** 🟡 Medium
**Estimated Effort:** 3 days

**Acceptance Criteria:**
- [ ] Each logged-in user gets a unique referral code (e.g., `SATHISH7K`)
- [ ] Share referral: "Invite a friend, both get 500 XP!"
- [ ] On new user signup with referral code: both users credited 500 XP
- [ ] Referral count shown on user profile: "You've referred {N} friends 🎉"
- [ ] Referral tracked in Firestore: `referrals/{referralCode}`

**Implementation Steps:**
1. On first Google login, generate referral code: `displayName.split(' ')[0] + random4digits`
2. Save to `users/{uid}.referralCode` in Firestore
3. During onboarding (Step 4), add optional "Enter referral code" input
4. Firebase Function `processReferral`: validates code, awards 500 XP to both users
5. Add referral share button to profile/settings screen

---

**Sprint 6 Deliverable:** LinkedIn sharing live. This is the primary organic growth driver for professional developers.

---

## 9. Sprint 7 — Firebase-Backed Dynamic Content

**Duration:** 3 weeks
**Goal:** Enable content updates without app store releases

---

### Story 7.1 — Migrate Questions to Firestore

**Priority:** 🟠 High
**Estimated Effort:** 8 days

**Problem:**
All 200+ questions are hardcoded in `.ts` files. Adding new content requires a full app release (2–7 days review cycle). This makes content feel stale.

**Acceptance Criteria:**
- [ ] All interview questions migrated to Firestore collection `questions`
- [ ] All tutorials migrated to `tutorials` collection
- [ ] App fetches content from Firestore on first launch and caches locally
- [ ] Content refreshes in background every 24 hours (or on pull-to-refresh)
- [ ] Offline: app uses cached content with "Content cached {date}" indicator
- [ ] Admin can add new questions via Firebase Console without app update

**Firestore Schema:**
```
questions/
  {questionId}/
    id: number
    category: string          // 'Core Java' | 'Spring Boot' | ...
    type: string              // 'interview' | 'coding' | 'leetcode'
    question: string
    answer: string
    code: string | null
    tags: string[]
    difficulty: string        // 'easy' | 'medium' | 'hard'
    addedOn: Timestamp
    isActive: boolean

daily_challenges/
  {YYYY-MM-DD}/
    questions: string[]       // array of question IDs
    category: string
    title: string

tutorials/
  {tutorialId}/
    slug: string
    title: string
    category: string
    topics: Topic[]
    addedOn: Timestamp
```

**Implementation Steps:**
1. Write a one-time Node.js migration script to seed all existing hardcoded data into Firestore
2. Update `data.service.ts`:
   - Add `loadQuestions()` method — fetches from Firestore, saves to `localStorage` cache
   - Add `getCachedQuestions()` — returns from cache if fresh (< 24h old)
   - Existing signal-based APIs remain unchanged (consumers unaffected)
3. Add pull-to-refresh (`IonRefresher`) to interview questions list and tutorial list
4. Show last-synced timestamp: *"Questions updated 2 hours ago"*
5. Firestore security rules: read-only for all users, write restricted to admin

---

### Story 7.2 — Content Admin Panel (Simple Firebase Console Workflow)

**Priority:** 🟡 Medium
**Estimated Effort:** 3 days

**Acceptance Criteria:**
- [ ] Document the Firestore schema clearly so non-developer team members can add questions via Firebase Console
- [ ] Create a simple internal web form (Firebase Hosting) for content editors
- [ ] New question goes live immediately to all users (no app update required)
- [ ] "Content Update Available" notification can be triggered manually

**Implementation Steps:**
1. Create a simple Angular web app (admin panel) hosted on Firebase Hosting
2. Protected by Firebase Auth (admin email only)
3. Form fields: Category, Question, Answer, Code (optional), Tags, Difficulty
4. On submit: writes to Firestore `questions` collection
5. Optional: trigger FCM notification to all users: *"New questions added! Check them out"*

---

### Story 7.3 — Remote Config for Feature Flags

**Priority:** 🟡 Medium
**Estimated Effort:** 2 days

**Acceptance Criteria:**
- [ ] Feature flags controlled via Firebase Remote Config (no code changes needed)
- [ ] Flags: `show_premium_banner`, `ad_frequency_minutes`, `daily_challenge_enabled`, `referral_bonus_xp`
- [ ] App reads Remote Config on launch and respects flag values
- [ ] Changes take effect within 1 hour (no app update)

**Implementation Steps:**
1. Enable Firebase Remote Config in project
2. Create `remote-config.service.ts` — fetches and caches config
3. Replace hardcoded values (ad frequency, XP amounts) with Remote Config reads
4. Default values in code for offline fallback

---

**Sprint 7 Deliverable:** Content can be updated live. This fundamentally changes the product's ability to stay fresh.

---

## 10. Sprint 8 — Premium Subscription Tier

**Duration:** 2 weeks
**Goal:** Generate sustainable revenue beyond ad income

---

### Story 8.1 — Premium Plan Design

**Priority:** 🟠 High
**Estimated Effort:** 2 days (Design + Planning)

**Pricing (Suggested):**
| Plan | Price | Features |
|---|---|---|
| Free | ₹0 | All questions (with ads), 3 experience stories free, basic assessments |
| Pro Monthly | ₹99/month | Ad-free, all experiences unlocked, offline mode, priority new content |
| Pro Annual | ₹699/year | All Pro features + exclusive premium questions + LinkedIn certificate badge |

**Premium Features (Gate these):**
- [ ] Ad-free experience (no banner, no interstitial — reward ads remain as opt-in)
- [ ] All interview experiences unlocked (currently ad-gated)
- [ ] Offline mode — pre-download all content
- [ ] Premium question sets: *"FAANG-only questions"*, *"System Design deep dives"*
- [ ] Profile badge: *"Pro Member"* on leaderboard
- [ ] Early access to new features

---

### Story 8.2 — In-App Purchase Implementation

**Priority:** 🟠 High
**Estimated Effort:** 6 days

**Acceptance Criteria:**
- [ ] In-app purchase via Google Play Billing (Android) and StoreKit (iOS)
- [ ] Use `@ionic-native/in-app-purchase-2` or `capacitor-purchases` (RevenueCat recommended)
- [ ] Purchase state synced to Firebase (`users/{uid}.isPremium: true`)
- [ ] Premium state persists across devices (restore purchases)
- [ ] Graceful downgrade if subscription lapses

**Implementation Steps:**
1. Set up RevenueCat account — it handles both Play Store and App Store IAP
2. Install `@revenuecat/purchases-capacitor`
3. Create `subscription.service.ts`
   - `isPremium = signal<boolean>(false)`
   - `purchasePro()`, `restorePurchases()`
   - Sync status to Firebase on login
4. Create `premium.component.ts` — paywall modal showing features + pricing
5. Add "Go Pro" button to: dashboard header, settings, ad-gate screens
6. Remove ads for premium users in `admob.service.ts` (check `isPremium` before showing)

---

### Story 8.3 — Premium Paywall Screen

**Priority:** 🟠 High
**Estimated Effort:** 2 days

**Acceptance Criteria:**
- [ ] Beautiful paywall screen with feature comparison
- [ ] Social proof: *"Join 2,000+ Java developers going Pro"* (update dynamically)
- [ ] 7-day free trial option
- [ ] Annual plan highlighted as "Best Value"
- [ ] One-tap restore purchase

**Implementation Steps:**
1. Create `paywall.component.ts` — full-screen modal
2. Design: dark background, gold accents (matches app theme)
3. Feature checklist comparing Free vs. Pro
4. RevenueCat offering displayed with real prices (localized automatically)
5. Add deep link to paywall from any ad-gated content

---

**Sprint 8 Deliverable:** Premium tier live. Begin tracking conversion rate (target: 1% of MAU).

---

## 11. Sprint 9 — Interview Simulator Mode

**Duration:** 2 weeks
**Goal:** Create a shareable, competitive feature that drives word-of-mouth

---

### Story 9.1 — Interview Simulator

**Priority:** 🟡 Medium
**Estimated Effort:** 6 days

**Concept:**
A timed mock interview experience. 10 questions. Strict timer. No peeking at answers. Final score with detailed breakdown. Shareable result card.

**Acceptance Criteria:**
- [ ] Accessible from: new "Simulate" tab or from dashboard
- [ ] User selects: Company (Amazon/Google/etc.), Role (SDE-1/SDE-2), Duration (20/30/45 min)
- [ ] Questions pulled based on company tags from the question bank
- [ ] Timer counts down — no pause allowed (simulates real pressure)
- [ ] Questions are MCQ format (4 options) unlike flashcard challenge mode
- [ ] Final screen: Score, Time taken, Percentile rank (vs. other users), Question-by-question review
- [ ] Shareable score card image (WhatsApp/LinkedIn)
- [ ] Scores saved to Firebase for leaderboard filtering by company

**MCQ Question Requirement:**
This requires all questions to have MCQ options. Phase 1: use existing Assessment questions. Phase 2: add MCQ options to all interview questions (Firebase content migration).

**Implementation Steps:**
1. Create `simulator-config.component.ts` — company + role + duration selector
2. Create `simulator.component.ts` — full-screen, no tab bar, countdown timer
3. Reuse existing `AssessmentData` MCQ format
4. Create `simulator-result.component.ts` — score, breakdown, percentile, share
5. Firestore: save simulator results to `simulator_scores/{uid}/{sessionId}`
6. Percentile computation: Cloud Function or client-side against cached score distribution

---

### Story 9.2 — Company-Specific Question Tags

**Priority:** 🟡 Medium
**Estimated Effort:** 3 days

**Acceptance Criteria:**
- [ ] All questions tagged with companies that are known to ask them
- [ ] Example: `HashMap` question tagged `[Amazon, Google, Microsoft]`
- [ ] Simulator uses company tags to curate relevant question sets
- [ ] Browsing: filter Interview Questions by company

**Implementation Steps:**
1. Add `companies: string[]` field to `Question` model
2. Update all existing question data with company tags (batch update in Firestore admin)
3. Update filter UI in `iq-list.component.ts` — add company filter chips

---

**Sprint 9 Deliverable:** Interview Simulator live. This is highly shareable content — each simulation result shared = organic downloads.

---

## 12. Sprint 10 — Community & User Submissions

**Duration:** 2 weeks
**Goal:** Enable user-generated content for infinite content scaling

---

### Story 10.1 — Native Experience Submission Form

**Priority:** 🟠 High
**Estimated Effort:** 5 days

**Acceptance Criteria:**
- [ ] Replace Google Form CTA with native in-app submission form
- [ ] Fields: Company, Role, Years of Experience, Interview Date, Rounds count, Result, Difficulty, Tags, Round-by-round description (rich text or multi-paragraph)
- [ ] Login required to submit
- [ ] Submission goes to `submissions` Firestore collection with `status: 'pending'`
- [ ] User sees: *"Thanks! Our team will review your story within 48 hours."*
- [ ] Admin can approve/reject from admin panel → approved stories move to `experiences` collection
- [ ] Submitter gets in-app notification + 200 XP when their story is published

**Implementation Steps:**
1. Create `submit-experience.component.ts` (route: `/experiences/submit`)
2. Form with validation — minimum 200 characters for description
3. Submit writes to `submissions/{uid}_{timestamp}` in Firestore
4. Admin panel: submissions list with approve/reject buttons
5. Firebase Function `onSubmissionApproved` — moves to experiences, sends notification + XP

---

### Story 10.2 — Comments & Discussion on Questions

**Priority:** 🟢 Nice-to-have
**Estimated Effort:** 4 days

**Acceptance Criteria:**
- [ ] Users can comment on any interview question (login required)
- [ ] Comments show: user avatar, name, comment text, timestamp, like count
- [ ] Users can like comments
- [ ] Newest/most-liked comments shown first
- [ ] Report button for inappropriate content

**Implementation Steps:**
1. Firestore: `comments/{questionId}/messages` subcollection
2. Create `comments.component.ts` — collapsible section at bottom of question detail
3. Moderation: flagged comments queued in admin panel

---

**Sprint 10 Deliverable:** Community submissions live. Content growth no longer dependent solely on the product team.

---

## 13. Sprint 11 — ASO & Store Optimization

**Duration:** 1 week
**Goal:** Maximize organic discovery on Play Store and App Store

---

### Story 11.1 — App Store Listing Overhaul

**Priority:** 🔴 Critical
**Estimated Effort:** 3 days

**Play Store Listing Updates:**

| Field | Current | Proposed |
|---|---|---|
| App Name | JavaIQ | JavaIQ: Java Interview Prep |
| Short Description | (unknown) | "Crack Java interviews at Amazon, Google & Flipkart with quizzes, real stories & certificates." |
| Category | Education | Education |
| Content Rating | Everyone | Everyone |

**Keyword Targets (weave into description):**
```
java interview questions
spring boot interview prep
core java mcq quiz
java developer certification
microservices interview questions
java coding problems
sde interview preparation
java flashcards app
hibernate interview questions
```

**Full Description Structure:**
```
Line 1: Bold hook — "The #1 Java interview prep app for SDE-1 & SDE-2 roles"
Lines 2-5: Feature bullets with emojis
Lines 6-10: Social proof + content stats
Lines 11-15: Company list (Amazon, Google, Flipkart, Microsoft...)
Lines 16-20: Call to action
```

**Screenshots (7 required for Play Store):**
1. Dashboard with XP, streak, and learning path
2. Challenge Mode — question with timer and combo
3. Interview Experience card (Amazon/Google story)
4. Leaderboard top 3
5. Assessment with MCQ and timer
6. Certificate preview
7. Search results screen

**App Icon Update:**
- Current: `bi-journal-code` style minimal icon
- Proposed: Bold "J" with Java coffee cup + graduation cap. Bright on dark background. Readable at 48x48px.

---

### Story 11.2 — In-App Rating Prompt

**Priority:** 🟠 High
**Estimated Effort:** 1 day

**Acceptance Criteria:**
- [ ] Rating prompt shown after user completes their 3rd challenge session (high satisfaction moment)
- [ ] Uses native in-app review API (Google Play In-App Review + StoreKit on iOS)
- [ ] Never shown more than once every 90 days
- [ ] Never shown immediately after an ad

**Implementation Steps:**
1. Install `@capacitor-community/app-review` plugin
2. Create `review.service.ts` — tracks `challengesCompleted` counter in localStorage
3. Trigger on 3rd, 10th, 25th challenge completion
4. Check 90-day cooldown before showing

---

**Sprint 11 Deliverable:** Updated store listings live. New screenshots uploaded. Rating prompt active.

---

## 14. Sprint 12 — Marketing Automation

**Duration:** 2 weeks
**Goal:** Set up repeatable, low-effort marketing channels

---

### Story 12.1 — Social Content Templates

**Priority:** 🟡 Medium
**Estimated Effort:** 3 days

**Create a bank of 30 social media posts for LinkedIn/Twitter/Reddit:**

**Post Types:**
1. "Java Interview Question of the Day" — question image + answer reveal in comments
2. "Did you know?" Java tip (from tutorial content)
3. "X developers got offers at [Company] using these topics" (from experience data)
4. "Challenge: Can you answer this in 5 seconds?" (speed bonus mechanic)
5. App feature spotlight (one feature per week)

**Channels:**
- LinkedIn Page: 3 posts/week
- Twitter/X: Daily (auto-scheduled)
- Reddit (r/developersIndia, r/java): 2 posts/week (manual, community guidelines)
- Telegram channel: Daily tip (link to app)

**Implementation:**
1. Create a Canva template for "Question of the Day" posts
2. Use Buffer or Hootsuite for scheduling
3. Repurpose app content — pull questions directly from the app and format for social

---

### Story 12.2 — YouTube Shorts Content Plan

**Priority:** 🟡 Medium
**Estimated Effort:** 4 days

**30-second Short Format:**
```
0-3s:  Hook — "Can you answer this Amazon Java question?"
3-15s: Show the question (on screen)
15-20s: "Think about it..." (suspense)
20-28s: Answer reveal with explanation
28-30s: "Follow JavaIQ for daily Java interview prep"
```

**Topics for first 10 Shorts:**
1. What is HashMap vs HashTable?
2. Explain SOLID principles in 30 seconds
3. What happens when you call new Object() in Java?
4. Difference between Comparable and Comparator
5. What is a Memory Leak in Java?
6. Explain @Transactional in Spring Boot
7. What is the String Pool?
8. Explain the Factory Design Pattern
9. Java 8 Stream — findFirst vs findAny
10. What is the difference between == and .equals()?

**Production:**
- Screen recording of the app + voice over
- No video crew needed — phone + screen recorder
- Upload 3x/week for first month

---

### Story 12.3 — College Partnership Program

**Priority:** 🟡 Medium
**Estimated Effort:** 3 days (outreach)

**Target:** Engineering college placement cells in India (IITs, NITs, tier-2 colleges)

**Offer:**
- Free "JavaIQ for Campus" version — removes ads for students with `.edu` email
- Placement coordinators get shareable referral link
- "Top student from [College]" badge on leaderboard
- College leaderboard — compete within your college

**Outreach Plan:**
1. Draft email template to placement coordinators
2. Target 50 colleges in Month 3
3. Create `college` field in user profile — verified via `.edu` email domain
4. College-specific leaderboard filter

---

**Sprint 12 Deliverable:** Marketing engine running. Social content scheduled. YouTube channel active.

---

## 15. Non-Functional Requirements

### Performance
- [ ] Cold start time < 2 seconds on mid-range Android (Snapdragon 680)
- [ ] Navigation transitions < 300ms
- [ ] Firestore reads cached — no loading spinner on repeat visits
- [ ] Images/assets lazy-loaded
- [ ] Bundle size < 5MB initial download

### Accessibility
- [ ] All interactive elements have `aria-label`
- [ ] Minimum tap target size 44x44px
- [ ] Color contrast ratio ≥ 4.5:1 for all text
- [ ] Screen reader compatible (VoiceOver + TalkBack)
- [ ] Font size respects system accessibility settings

### Security
- [ ] All Firestore reads/writes validated by Security Rules
- [ ] No sensitive data (XP, premium status) writable by client without auth
- [ ] API keys not exposed in client bundle (use environment.ts + `.gitignore`)
- [ ] AdMob publisher ID not hardcoded in source (use Remote Config)
- [ ] User data GDPR/DPDP compliant — privacy policy updated

### Testing
- [ ] Unit tests for `gamification.service.ts` (XP calculation, streak logic)
- [ ] Unit tests for `data.service.ts` (filtering, search)
- [ ] E2E test: onboarding flow, challenge flow, assessment + certificate flow
- [ ] Manual QA on: Samsung Galaxy A32, iPhone 13, Pixel 6a before each release

---

## 16. Success Metrics & KPIs

### Monthly Tracking Dashboard

| Metric | Tool | Target |
|---|---|---|
| Daily Active Users (DAU) | Firebase Analytics | +20% MoM |
| Day-7 Retention | Firebase Analytics | ≥ 35% |
| Day-30 Retention | Firebase Analytics | ≥ 15% |
| Average Session Length | Firebase Analytics | ≥ 8 minutes |
| Challenge Completion Rate | Custom Firebase Event | ≥ 70% |
| Daily Challenge Completion | Custom Firebase Event | ≥ 40% of DAU |
| Push Notification Open Rate | FCM Console | ≥ 20% |
| Leaderboard Views / DAU | Firebase Analytics | ≥ 30% |
| Play Store Rating | Play Console | ≥ 4.5 ★ |
| Ad Revenue (eCPM) | AdMob Console | Track MoM |
| Premium Conversion Rate | RevenueCat | ≥ 1% of MAU |
| LinkedIn Shares / Week | Manual + Firebase Events | ≥ 50/week |
| Referral Installs | Firebase Dynamic Links | ≥ 10% of new installs |

### Firebase Analytics Events to Implement

```typescript
// Challenge events
logEvent('challenge_started', { category, questionCount })
logEvent('challenge_completed', { category, score, xpEarned, stars })
logEvent('daily_challenge_completed', { score, xpEarned })

// Engagement events
logEvent('search_performed', { query, resultCount })
logEvent('question_bookmarked', { questionId, category })
logEvent('certificate_generated', { type, title })
logEvent('certificate_shared_linkedin')
logEvent('score_shared_whatsapp', { score, category })

// Monetization events
logEvent('paywall_viewed', { source })
logEvent('purchase_initiated', { plan })
logEvent('purchase_completed', { plan, price })
logEvent('ad_watched_reward', { context })

// Onboarding events
logEvent('onboarding_started')
logEvent('onboarding_completed', { slidesViewed })
logEvent('onboarding_skipped', { atSlide })
```

---

## 17. Tech Debt & Architecture Notes

### Immediate Tech Debt to Address

| Issue | Priority | Sprint |
|---|---|---|
| All content hardcoded in `.ts` files | Critical | Sprint 7 |
| No error boundary / global error handler | High | Sprint 1 |
| `console.log` statements in production code (admob.service.ts) | Medium | Sprint 1 |
| `quiz-modal` component exists but not in routes — dead code? | Medium | Sprint 1 |
| `flashcard-item` and `flashcard-list` exist but not in routes | Medium | Sprint 2 |
| `sample.html` in `src/` root — should be removed | Low | Sprint 1 |
| No environment-based AdMob ID switching (`isTesting` hardcoded `false`) | High | Sprint 1 |
| `leaderboard` and `dashboard` not in `app.routes.ts` — routing may rely on Ionic menu | Medium | Sprint 2 |

### Architecture Decisions

**State Management:**
Current Angular Signals approach is correct for this app size. Do not introduce NgRx — overkill. Continue with signals.

**Content Caching Strategy:**
```
Priority 1 (immediate): localStorage cache with 24h TTL
Priority 2 (Sprint 7): Capacitor Preferences API (more reliable than localStorage on iOS)
Priority 3 (Sprint 9): SQLite via @capacitor-community/sqlite for complex queries
```

**Ad Strategy — Long Term:**
As premium subscribers grow, reduce ad frequency for free users proportionally. Target: free users see max 3 ads/session at steady state.

**Monorepo Consideration:**
If admin panel (Sprint 7.2) grows significantly, consider an Nx monorepo to share models and services between the app and admin panel.

---

## Appendix A — Sprint Dependency Map

```
Sprint 1 (Fixes)
    └── Sprint 2 (Search) — depends on stable routing
         └── Sprint 3 (Onboarding)
              └── Sprint 4 (Push Notifications) — depends on onboarding completion hook
                   └── Sprint 5 (Daily Challenge) — depends on Push + Firebase
                        └── Sprint 6 (Sharing / Viral) — depends on Challenge results screen
Sprint 7 (Firebase Content) — can run parallel to Sprint 4-6
    └── Sprint 9 (Simulator) — needs Firebase questions + company tags
Sprint 8 (Premium) — can run after Sprint 1 fixes (needs stable app)
Sprint 10 (Community) — depends on Sprint 7 Firebase infrastructure
Sprint 11 (ASO) — can run any time after Sprint 3 (needs screenshots with onboarding)
Sprint 12 (Marketing) — can start immediately, parallel to any sprint
```

---

## Appendix B — Content Expansion Backlog

### New Topics to Add (Post Sprint 7)
- [ ] DSA in Java: Arrays, LinkedList, Trees, Graphs, Sorting (HIGH demand)
- [ ] System Design questions: Rate Limiter, URL Shortener, Notification Service
- [ ] Java 17/21 features: Records, Sealed Classes, Pattern Matching
- [ ] Kotlin basics (Android developers)
- [ ] SQL & JPA query optimization
- [ ] Docker + Kubernetes basics for Java developers
- [ ] AWS fundamentals for Java backend engineers
- [ ] CI/CD: Jenkins, GitHub Actions for Java projects

### New Companies to Add in Experiences
- [ ] Atlassian, Razorpay, Meesho, Groww, CRED, ShareChat, Juspay

---

*Document maintained by Product Team. Update after each sprint retrospective.*
