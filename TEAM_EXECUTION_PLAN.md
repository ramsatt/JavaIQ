# JavaIQ — Team Execution Plan

> **Document Version:** 1.0
> **Date:** March 2026
> **Reference:** PRODUCT_ROADMAP.md
> **Team Size:** 6 members (4 Full-Stack Devs + 1 Tech Lead + 1 Project Manager)
> **Timeline:** 24 Weeks (6 Months)

---

## Table of Contents

1. [Team Structure & Roles](#1-team-structure--roles)
2. [Working Model & Ceremonies](#2-working-model--ceremonies)
3. [Role Responsibilities — Full Detail](#3-role-responsibilities--full-detail)
4. [Sprint-by-Sprint Assignment Plan](#4-sprint-by-sprint-assignment-plan)
5. [Individual Workload Summary](#5-individual-workload-summary)
6. [Definition of Done](#6-definition-of-done)
7. [Risk Register](#7-risk-register)
8. [Communication & Tools](#8-communication--tools)
9. [Release & Deployment Process](#9-release--deployment-process)
10. [Team Performance Metrics](#10-team-performance-metrics)

---

## 1. Team Structure & Roles

```
┌──────────────────────────────────────────────────────────────┐
│                        PROJECT MANAGER                        │
│   Sprint planning · Delivery tracking · Stakeholder reports  │
└─────────────────────────┬────────────────────────────────────┘
                          │
┌─────────────────────────▼────────────────────────────────────┐
│                         TECH LEAD                             │
│   Architecture · Code review · Technical decisions · Mentoring│
└──────┬──────────────┬───────────────┬──────────────┬─────────┘
       │              │               │              │
  ┌────▼────┐    ┌────▼────┐    ┌────▼────┐    ┌────▼────┐
  │   DEV 1  │    │   DEV 2  │    │   DEV 3  │    │   DEV 4  │
  │ Frontend │    │ Firebase │    │ Features │    │ DevOps + │
  │ & UX     │    │ & Backend│    │ & Content│    │ Marketing│
  └──────────┘    └──────────┘    └──────────┘    └──────────┘
```

### Role Assignment

| ID | Role | Primary Responsibility | Secondary |
|---|---|---|---|
| **TL** | Tech Lead | Architecture, code review, technical decisions | Pair programming on complex tasks |
| **PM** | Project Manager | Sprint planning, tracking, stakeholder comms, ASO | QA coordination, content strategy |
| **D1** | Full-Stack Dev 1 | Frontend — Angular components, UI, animations, UX | Search, onboarding, gamification UI |
| **D2** | Full-Stack Dev 2 | Backend — Firebase, Firestore, Cloud Functions, Auth | Push notifications, premium/IAP |
| **D3** | Full-Stack Dev 3 | Features — new screens, assessments, simulator, community | Content migration, certificate sharing |
| **D4** | Full-Stack Dev 4 | DevOps + Mobile — Capacitor plugins, Android/iOS builds, Ad integration | Marketing automation, social content |

---

## 2. Working Model & Ceremonies

### Sprint Structure
- **Sprint Duration:** 2 weeks (10 working days)
- **Start Day:** Monday
- **Release Day:** Friday of Week 2 (every sprint produces a shippable build)

### Weekly Ceremonies

| Ceremony | When | Duration | Who | Purpose |
|---|---|---|---|---|
| Sprint Planning | Monday Week 1, 10 AM | 2 hours | All | Break stories into tasks, assign ownership, set sprint goal |
| Daily Standup | Every day, 9:30 AM | 15 min | All | What did I do? What will I do? Any blockers? |
| Mid-Sprint Sync | Wednesday Week 1, 3 PM | 30 min | TL + PM | Check velocity, surface risks early |
| Tech Sync | Tuesday + Thursday, 4 PM | 1 hour | TL + Devs | Architecture discussions, PR reviews, unblocking |
| Sprint Demo | Friday Week 2, 2 PM | 1 hour | All | Demo completed stories on real device |
| Sprint Retro | Friday Week 2, 3:30 PM | 45 min | All | What went well? What to improve? Action items |
| PM Report | Sunday every week | — | PM | Written status update: completed, in-progress, risks |

### Story Point Scale (Fibonacci)
| Points | Effort |
|---|---|
| 1 | < 2 hours — trivial change |
| 2 | Half day — simple, well-understood |
| 3 | 1 day — clear task, minimal unknowns |
| 5 | 2–3 days — moderate complexity |
| 8 | 4–5 days — complex, needs design |
| 13 | Full sprint — must be broken down further |

### Team Velocity Target
- Each developer: **10 story points per sprint**
- Total team capacity per sprint: **40 story points** (4 devs × 10 pts)
- TL contributes: **5 story points** (rest is reviews, architecture, mentoring)
- **Total sprint capacity: 45 story points**

---

## 3. Role Responsibilities — Full Detail

### Tech Lead (TL)

**Daily:**
- Review all PRs within 4 hours of submission
- Unblock developers stuck on technical issues
- Attend standup, guide technical direction

**Per Sprint:**
- Write technical design docs for complex stories (Search, Firebase migration, IAP)
- Ensure no PR merges without review
- Conduct code quality check at sprint end
- Identify tech debt and schedule it

**Overall (6 months):**
- Define and enforce coding standards (linting, formatting via Prettier already set up)
- Set up CI/CD pipeline (GitHub Actions — lint + build + test on every PR)
- Architect Firebase security rules for all new collections
- Lead Firebase Cloud Functions development (shared with D2)
- Final sign-off on every release build

**Ownership:**
- Firebase Security Rules
- CI/CD pipeline
- Technical documentation (architecture decisions)
- Performance budget enforcement

---

### Project Manager (PM)

**Daily:**
- Update task board (Jira/Notion) — move cards as work progresses
- Remove blockers (access, credentials, third-party accounts)
- Monitor daily standup notes for risks

**Per Sprint:**
- Sprint planning facilitation — story breakdown and point estimation
- Maintain sprint backlog and priority order
- Write sprint summary report for stakeholders
- Coordinate QA testing before release
- Manage App Store / Play Store developer accounts

**Overall (6 months):**
- Own ASO (App Store Optimization) — title, description, screenshots, keywords
- Coordinate marketing activities (social media scheduling, YouTube)
- Track all KPIs weekly (downloads, DAU, retention, revenue)
- Manage third-party accounts: RevenueCat, Firebase, AdMob, Google Play, Apple Developer
- Content strategy — identify new questions/topics to add each sprint
- Outreach for college partnerships (Sprint 12)

**Ownership:**
- Project board (Jira/Notion/Linear)
- App Store + Play Store console
- All third-party account credentials
- Weekly KPI dashboard
- Marketing calendar

---

### Dev 1 — Frontend & UX Specialist

**Core Skills Needed:** Angular 21, Ionic, Tailwind CSS, CSS animations, Angular Signals

**Sprint Ownership:**
- All new Angular UI components
- Dashboard, onboarding, modals, tooltips
- Search UI, bookmark UI
- Gamification visuals (XP popups, streak animations, daily challenge card)
- Dark/light mode consistency across new screens
- Accessibility (aria-labels, tap targets)

**Ongoing:**
- Owns `src/app/dashboard/`, `src/app/challenge/`, `src/app/shared/`
- Reviews all UI PRs for design consistency
- Maintains the design system (colors, spacing, component patterns)

---

### Dev 2 — Firebase & Backend Specialist

**Core Skills Needed:** Firebase (Firestore, Auth, Functions, Remote Config, FCM), Node.js, TypeScript

**Sprint Ownership:**
- All Firebase Cloud Functions
- Firestore schema design and security rules
- Push notification infrastructure (FCM)
- Firebase Remote Config integration
- RevenueCat integration (IAP backend)
- Firestore content migration scripts
- Gamification cloud sync
- Leaderboard Firestore queries

**Ongoing:**
- Owns `functions/` directory (Firebase Cloud Functions)
- Owns `src/environments/`, `src/app/auth.service.ts`, `src/app/gamification.service.ts`
- Weekly Firestore cost monitoring (prevent runaway reads)
- Firebase Security Rules — reviewed by TL before deploy

---

### Dev 3 — Features & Content Specialist

**Core Skills Needed:** Angular, Ionic, content authoring, assessment systems, form design

**Sprint Ownership:**
- New feature screens: Interview Simulator, Daily Challenge, Community Submissions
- Assessment system enhancements
- Certificate sharing (html2canvas integration)
- Experience submission form
- Bookmark system (service + UI)
- Content data migration support
- New question content authoring (coordinate with PM)

**Ongoing:**
- Owns `src/app/features/`, `src/app/data/`
- Maintains assessment data and question bank
- Writes and reviews new content entries before Firebase migration

---

### Dev 4 — Mobile, DevOps & Marketing Tech

**Core Skills Needed:** Capacitor, Android/iOS builds, Capacitor plugins, GitHub Actions, AdMob, social APIs

**Sprint Ownership:**
- All Capacitor plugin integrations (`@capacitor/push-notifications`, `@capacitor/share`, `@capacitor/browser`, `@capacitor/network`)
- Android and iOS build configuration
- AdMob frequency fix and reward ad improvements
- GitHub Actions CI/CD setup
- Firebase App Distribution (internal testing builds)
- In-app review (rating prompt) plugin
- Social sharing (WhatsApp, LinkedIn) integration
- YouTube Shorts screen recording setup
- Play Store + App Store release uploads

**Ongoing:**
- Owns `android/`, `ios/`, `capacitor.config.ts`
- Manages signing certificates (`javaiq-release-key.jks`)
- Every sprint: deliver a signed `.aab` for Play Store internal testing

---

## 4. Sprint-by-Sprint Assignment Plan

---

### SPRINT 1 — Critical Bug Fixes & Credibility (Week 1–2)

**Sprint Goal:** Fix all trust-breaking issues. Ship a credibility update to the store.
**Total Story Points:** 38

---

#### Story 1.1 — Diversify Interview Experience Results
**Points: 5 | Owner: D3 | Reviewer: TL**

| Day | Task | Who |
|---|---|---|
| Day 1 | Add 5 new experience entries with rejected/pending results to `exp-list.component.ts` | D3 |
| Day 2 | Update 3 existing entries from `offer` → `rejected`, 1 → `withdrew` | D3 |
| Day 3 | Add disclaimer text in hero section UI | D3 |
| Day 4 | PR review + QA on device | TL + PM |

---

#### Story 1.2 — Wire Up "Submit Experience" CTA
**Points: 3 | Owner: D4 | Reviewer: TL**

| Day | Task | Who |
|---|---|---|
| Day 1 | Create Google Form (Company, Role, YOE, Rounds, Result, Description) | PM |
| Day 1 | Add `@capacitor/browser` to project, update `package.json` | D4 |
| Day 2 | Wire CTA button → `Browser.open()` with Google Form URL | D4 |
| Day 3 | Test on Android + iOS | D4 |
| Day 3 | PR review | TL |

---

#### Story 1.3 — Fix Ad Frequency & Placement
**Points: 5 | Owner: D4 | Reviewer: TL**

| Day | Task | Who |
|---|---|---|
| Day 1 | Design frequency cap logic (5-min cooldown + session counter) | TL + D4 |
| Day 2 | Implement `canShowInterstitial()` in `admob.service.ts` | D4 |
| Day 3 | Add `lastInterstitialTime` tracker to localStorage | D4 |
| Day 4 | Add session counter — skip first 2 navigations | D4 |
| Day 5 | Test ad behavior end-to-end on real device | D4 + PM |
| Day 5 | PR review | TL |

---

#### Story 1.4 — Offline State Feedback
**Points: 3 | Owner: D2 | Reviewer: TL**

| Day | Task | Who |
|---|---|---|
| Day 1 | Install `@capacitor/network` | D2 |
| Day 2 | Create `connectivity.service.ts` with network change subscription | D2 |
| Day 3 | Create non-blocking toast component, show/hide on connect/disconnect | D2 |
| Day 4 | PR review + test in airplane mode | TL + PM |

---

#### Story 1.5 — Leaderboard Weekly/Monthly Tabs
**Points: 5 | Owner: D2 | Reviewer: TL**

| Day | Task | Who |
|---|---|---|
| Day 1 | Update `data.service.ts → getLeaderboard()` to accept period param | D2 |
| Day 2 | Add Firestore query with `lastUpdated` date filter | D2 |
| Day 3 | Update `leaderboard.component.ts` — add tabs UI (All / Monthly / Weekly) | D1 |
| Day 4 | Highlight current user row | D1 |
| Day 5 | PR review + QA | TL + PM |

---

#### Story 1.6 — Remove Dead Code & Fix Console Logs
**Points: 3 | Owner: TL | Reviewer: PM**

| Day | Task | Who |
|---|---|---|
| Day 1 | Audit + remove `console.log` from `admob.service.ts` and other services | TL |
| Day 2 | Investigate `quiz-modal`, `flashcard-item/list` — remove or route correctly | TL |
| Day 3 | Delete `src/sample.html` | TL |
| Day 3 | Add ESLint rule: no-console for production builds | TL |

---

#### Story 1.7 — CI/CD Pipeline Setup
**Points: 8 | Owner: D4 + TL | Reviewer: PM**

| Day | Task | Who |
|---|---|---|
| Day 1–2 | Set up GitHub Actions workflow: lint → build → vitest on every PR | D4 |
| Day 3 | Set up Firebase App Distribution for internal test builds | D4 |
| Day 4 | Configure signed Android build in CI (secrets for keystore) | D4 |
| Day 5 | TL review of full CI pipeline | TL |
| Day 6 | First automated build verified end-to-end | D4 + TL |

**GitHub Actions Workflow (`ci.yml`):**
```yaml
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - checkout
      - setup-node (v20)
      - npm ci
      - ng lint
      - ng build --configuration production
      - vitest run
      - cap sync android
      - Build signed AAB
      - Upload to Firebase App Distribution
```

---

#### Story 1.8 — Remove Hardcoded `isTesting: false` in AdMob
**Points: 3 | Owner: D4 | Reviewer: TL**

| Day | Task | Who |
|---|---|---|
| Day 1 | Add `environment.ts` flag: `adMobTesting: false` (prod), `true` (dev) | D4 |
| Day 2 | Replace all `isTesting: false` in `admob.service.ts` with `environment.adMobTesting` | D4 |
| Day 2 | PR review | TL |

---

**Sprint 1 PM Checklist:**
- [ ] Google Form created and URL shared with D4
- [ ] All 5 stories in "Done" column by Day 9
- [ ] PM does end-to-end QA on physical Android device Day 9
- [ ] Release notes written: *"Improved interview stories, performance fixes, ad experience improvements"*
- [ ] Play Store update submitted Day 10

---

### SPRINT 2 — Search & Discovery (Week 3–4)

**Sprint Goal:** Users can find any content in < 5 seconds.
**Total Story Points:** 42

---

#### Story 2.1 — Global Search (Core)
**Points: 13 | Broken into sub-tasks | Owner: D1 + D3 | Reviewer: TL**

Sub-tasks and ownership:

| Sub-task | Points | Owner | Days |
|---|---|---|---|
| Design `SearchResult` interface + `search.service.ts` with indexing | 3 | D1 | Day 1–2 |
| Build search index from all data sources in `data.service.ts` | 3 | D3 | Day 1–2 |
| Create `search-modal.component.ts` — input, results list, grouped by type | 5 | D1 | Day 3–5 |
| Wire search icon to all main screens, deep-link navigation from results | 2 | D1 | Day 6 |

| Day | Task | Who |
|---|---|---|
| Day 1 | D1: Define `SearchResult` interface. D3: Audit all data sources for indexing | D1, D3 |
| Day 2 | D1: `search.service.ts` with fuzzy filter logic. D3: Build aggregate index | D1, D3 |
| Day 3–4 | D1: Build search modal UI (Ionic modal, auto-focus input, results grouped) | D1 |
| Day 5 | D3: Integrate all data sources into search index, test 50+ queries | D3 |
| Day 6 | D1: Add search icon to dashboard top bar and tab screens | D1 |
| Day 7 | Recent searches localStorage (max 5 entries) | D1 |
| Day 7 | TL architecture review of service design | TL |
| Day 8 | QA: test 20 search queries across all categories | PM |
| Day 8 | PR review | TL |

---

#### Story 2.2 — Bookmark / Favorites System
**Points: 8 | Owner: D3 | Reviewer: TL + D1**

| Day | Task | Who |
|---|---|---|
| Day 1 | Create `bookmarks.service.ts` — signals, localStorage, Firestore sync | D3 |
| Day 2 | Add bookmark icon to `iq-detail`, `cq-detail`, `lc-detail`, `tutorial-detail` | D3 |
| Day 3 | Create `bookmarks-list.component.ts` — grouped by type | D3 |
| Day 4 | D1: UI polish on bookmark icon states (filled/unfilled animation) | D1 |
| Day 5 | D2: Firestore sync — `users/{uid}/bookmarks` collection | D2 |
| Day 6 | Add "Saved" entry to navigation menu | D1 |
| Day 7 | QA + PR review | TL + PM |

---

#### Story 2.3 — "New" Badge on Fresh Content
**Points: 3 | Owner: D3 | Reviewer: TL**

| Day | Task | Who |
|---|---|---|
| Day 1 | Add `addedOn` field to `Question` model and all question data files | D3 |
| Day 2 | Create `isNew` computed logic in list components | D3 |
| Day 3 | Add "NEW" badge chip CSS, apply to all list cards | D1 |
| Day 3 | PR review | TL |

---

#### Story 2.4 — Route Audit & Navigation Fixes
**Points: 5 | Owner: TL | Reviewer: PM**

*Observation: `dashboard` and `leaderboard` are not in `app.routes.ts` — they rely on Ionic menu navigation. This needs audit.*

| Day | Task | Who |
|---|---|---|
| Day 1 | TL audits all routes vs. components — document current navigation flow | TL |
| Day 2 | Add missing routes to `app.routes.ts` as needed | TL |
| Day 3 | Ensure deep linking works for push notifications (Sprint 4 dependency) | TL |
| Day 4 | Test all navigation paths end-to-end | PM |

---

#### Story 2.5 — Pull-to-Refresh on List Screens
**Points: 3 | Owner: D1 | Reviewer: TL**

| Day | Task | Who |
|---|---|---|
| Day 1 | Add `IonRefresher` to tutorial list, interview Q list, coding Q list | D1 |
| Day 2 | Wire refresher to clear cache and re-fetch from data service | D1 |
| Day 3 | PR review | TL |

---

**Sprint 2 PM Checklist:**
- [ ] Search tested against minimum 30 different query terms
- [ ] Bookmark sync tested: add on device A → appears on device B (same account)
- [ ] All new screens match existing dark theme
- [ ] Play Store update submitted with search as headline feature
- [ ] Announce search feature on LinkedIn page

---

### SPRINT 3 — Onboarding & First-Time Experience (Week 5–6)

**Sprint Goal:** Zero users bounce without understanding the app's value.
**Total Story Points:** 38

---

#### Story 3.1 — Onboarding Carousel
**Points: 8 | Owner: D1 | Reviewer: TL + PM**

| Day | Task | Who |
|---|---|---|
| Day 1 | PM: Write final copy for all 4 slides. TL: Design slide data structure | PM, TL |
| Day 2–3 | D1: Create `onboarding.component.ts` with Ionic slides/Swiper | D1 |
| Day 4 | D1: Animations — slide illustrations using CSS/SVG (no external assets needed) | D1 |
| Day 5 | D1: "Skip" always visible. "Get Started" on slide 4. Set localStorage flag | D1 |
| Day 6 | Wire onboarding check in `app.component.ts` → navigate to `/onboarding` if first launch | D1 |
| Day 7 | TL: Add `/onboarding` route outside tabs in `app.routes.ts` | TL |
| Day 8 | QA: Test first-launch flow on fresh Android + fresh iOS install | PM + D4 |
| Day 8 | PR review | TL |

---

#### Story 3.2 — Profile Setup After Google Login
**Points: 5 | Owner: D2 + D1 | Reviewer: TL**

| Day | Task | Who |
|---|---|---|
| Day 1 | D2: Firestore schema for `users/{uid}` — add `profileSetup`, `goal`, `yoe` fields | D2 |
| Day 2 | D2: Post-login check — if `profileSetup` missing → trigger profile setup | D2 |
| Day 3 | D1: Create `profile-setup.component.ts` — name, YOE dropdown, Goal selector | D1 |
| Day 4 | D2: On submit, write to Firestore + set `profileSetup: true` | D2 |
| Day 5 | D1: Dashboard greeting uses `goal` for personalized message | D1 |
| Day 6 | QA + PR review | TL + PM |

---

#### Story 3.3 — Contextual Feature Discovery Tooltips
**Points: 5 | Owner: D1 | Reviewer: TL**

| Day | Task | Who |
|---|---|---|
| Day 1 | Create `tooltip.service.ts` — tracks shown tooltips in localStorage | D1 |
| Day 2 | Create `<app-tooltip>` component — arrow overlay with dismiss button | D1 |
| Day 3 | Wire tooltip: Dashboard → first unlocked module card | D1 |
| Day 4 | Wire tooltip: Assessments → first assessment card | D1 |
| Day 5 | QA: verify tooltips never repeat | PM |

---

#### Story 3.4 — App Settings Screen
**Points: 5 | Owner: D3 | Reviewer: TL**

*This is needed before Sprint 4 (push notification opt-out).*

| Day | Task | Who |
|---|---|---|
| Day 1 | Create `settings.component.ts` with route `/settings` | D3 |
| Day 2 | Settings items: Notification Preferences, Theme (Dark/Light toggle), Account, About, Privacy Policy | D3 |
| Day 3 | Wire dark/light toggle to `theme.service.ts` | D3 |
| Day 4 | Wire logout confirmation | D3 |
| Day 5 | D4: Add Settings link to navigation menu/tab bar | D4 |
| Day 6 | QA + PR review | TL + PM |

---

#### Story 3.5 — Firebase Analytics Event Tracking Setup
**Points: 5 | Owner: D2 | Reviewer: TL**

*This must be set up before Sprint 4–5 so retention metrics are measurable.*

| Day | Task | Who |
|---|---|---|
| Day 1 | Install `@angular/fire` analytics module, configure in `app.config.ts` | D2 |
| Day 2 | Create `analytics.service.ts` — wrapper with typed event methods | D2 |
| Day 3 | Add events: `onboarding_started`, `onboarding_completed`, `onboarding_skipped` | D2 |
| Day 4 | Add events: `challenge_started`, `challenge_completed`, `daily_challenge_completed` | D2 |
| Day 5 | Add events: `search_performed`, `question_bookmarked`, `certificate_generated` | D2 |
| Day 6 | Verify events appear in Firebase DebugView | D2 + TL |
| Day 7 | PR review | TL |

---

#### Story 3.6 — Dead Code Cleanup (from Sprint 1 audit)
**Points: 3 | Owner: TL | Reviewer: PM**

| Day | Task | Who |
|---|---|---|
| Day 1 | Remove or properly route `quiz-modal`, `flashcard-item`, `flashcard-list` | TL |
| Day 2 | Verify tree-shaking removes unused components from bundle | TL |
| Day 3 | Confirm bundle size did not increase vs. Sprint 1 baseline | TL |

---

**Sprint 3 PM Checklist:**
- [ ] Onboarding tested on 3 different screen sizes
- [ ] Profile setup works for brand-new Google accounts
- [ ] Analytics events visible in Firebase console DebugView
- [ ] Settings screen has correct Privacy Policy link
- [ ] New screenshots captured with onboarding for store listing
- [ ] Play Store update submitted

---

### SPRINT 4 — Push Notifications & Streak Engine (Week 7–8)

**Sprint Goal:** Users receive daily reminders and never unknowingly break their streak.
**Total Story Points:** 40

---

#### Story 4.1 — Push Notification Infrastructure
**Points: 8 | Owner: D4 + D2 | Reviewer: TL**

| Day | Task | Who |
|---|---|---|
| Day 1 | D4: Install `@capacitor/push-notifications`, configure Android (`google-services.json`), iOS (`GoogleService-Info.plist`) | D4 |
| Day 2 | D2: Create `push-notification.service.ts` — `requestPermission()`, `registerToken()` | D2 |
| Day 3 | D2: Save FCM token to `users/{uid}.fcmToken` in Firestore | D2 |
| Day 4 | D1: Add permission request at end of onboarding with rationale dialog | D1 |
| Day 5 | D4: Handle notification tap — deep-link routing based on `data.route` payload | D4 |
| Day 6 | D2: Firestore Security Rule update — only owner can write own FCM token | D2 |
| Day 7 | End-to-end test: send test notification from Firebase Console → app opens correct screen | D4 + PM |
| Day 7 | PR review | TL |

---

#### Story 4.2 — Firebase Cloud Functions — Scheduled Notifications
**Points: 8 | Owner: D2 | Reviewer: TL**

| Day | Task | Who |
|---|---|---|
| Day 1 | D2: Initialize Firebase Functions project in `functions/` directory | D2 |
| Day 2 | D2: `sendDailyChallenge` — Cloud Scheduler cron at 9 AM IST, FCM to all users | D2 |
| Day 3 | D2: `sendStreakReminder` — Cloud Scheduler 8 PM IST, query users with no activity today | D2 |
| Day 4 | D2: `sendReEngagement` — trigger when `lastActiveDate` > 3 days ago | D2 |
| Day 5 | D2: `onLevelUp` — Firestore trigger on XP write, check level change, notify | D2 |
| Day 6 | TL: Review all functions for efficiency (avoid full collection scans) | TL |
| Day 7 | Deploy functions to Firebase. Test each notification type end-to-end | D2 + PM |
| Day 8 | PR review + security review of function permissions | TL |

**Cloud Function Structure:**
```
functions/
  src/
    notifications/
      daily-challenge.ts    → D2 (Day 2)
      streak-reminder.ts    → D2 (Day 3)
      re-engagement.ts      → D2 (Day 4)
      level-up.ts           → D2 (Day 5)
    index.ts
```

---

#### Story 4.3 — Streak Freeze Power-Up
**Points: 5 | Owner: D1 + D2 | Reviewer: TL**

| Day | Task | Who |
|---|---|---|
| Day 1 | D2: Add `streakShields` signal + logic to `gamification.service.ts` | D2 |
| Day 2 | D2: Award 1 shield at 7-day, 14-day, 30-day milestones | D2 |
| Day 3 | D2: Update `checkStreak()` — consume shield instead of resetting streak | D2 |
| Day 4 | D1: Add shield icon + count to dashboard header | D1 |
| Day 5 | D2: Sync `streakShields` to Firestore | D2 |
| Day 6 | D4: Wire reward ad → earn 1 shield (once per day) in `admob.service.ts` | D4 |
| Day 7 | QA: Simulate missed day with and without shield | PM |

---

#### Story 4.4 — Notification Opt-Out in Settings
**Points: 3 | Owner: D3 | Reviewer: TL**

| Day | Task | Who |
|---|---|---|
| Day 1 | Add toggle "Push Notifications" to Settings screen | D3 |
| Day 2 | On toggle off: save preference to Firestore `users/{uid}.notificationsEnabled: false` | D3 |
| Day 3 | Update Cloud Functions: skip users where `notificationsEnabled === false` | D2 |
| Day 4 | QA + PR review | TL + PM |

---

#### Story 4.5 — Weekly Summary Notification
**Points: 5 | Owner: D2 | Reviewer: TL**

| Day | Task | Who |
|---|---|---|
| Day 1 | Cloud Function `sendWeeklySummary` — runs Sunday 6 PM IST | D2 |
| Day 2 | Aggregate weekly stats per user from Firestore (XP earned, questions answered) | D2 |
| Day 3 | Compose personalized notification: *"This week: 45 questions, 380 XP! 📊"* | D2 |
| Day 4 | Test + PR review | TL |

---

**Sprint 4 PM Checklist:**
- [ ] Test push notifications on Android AND iOS physical devices (not simulator)
- [ ] Verify streak freeze works correctly when day is missed
- [ ] Confirm notification opt-out properly suppresses all notification types
- [ ] Monitor Firestore read costs after Cloud Functions go live
- [ ] Update Privacy Policy: mention push notification data usage

---

### SPRINT 5 — Daily Challenge Feature (Week 9–10)

**Sprint Goal:** Every user has a reason to open the app every morning.
**Total Story Points:** 38

---

#### Story 5.1 — Daily Challenge Service & Firebase Schema
**Points: 5 | Owner: D2 | Reviewer: TL**

| Day | Task | Who |
|---|---|---|
| Day 1 | D2: Create Firestore `daily_challenges/{YYYY-MM-DD}` collection | D2 |
| Day 2 | D2: Create `daily-challenge.service.ts` — `getTodayChallenge()`, `isCompletedToday()`, `markCompleted()` | D2 |
| Day 3 | D2: Pre-populate 90 days of daily challenges using Node.js seed script | D2 |
| Day 4 | TL: Review schema and caching strategy | TL |
| Day 4 | D2: Cache today's challenge in localStorage (avoid Firestore read on every open) | D2 |

---

#### Story 5.2 — Daily Challenge UI Component
**Points: 8 | Owner: D1 + D3 | Reviewer: TL**

| Day | Task | Who |
|---|---|---|
| Day 1–2 | D1: Design and build Daily Challenge card on dashboard (prominent position, above Learning Path) | D1 |
| Day 3 | D1: Countdown timer showing time until reset (updated every minute) | D1 |
| Day 4 | D1: "Done Today" state — show result summary on card if already completed | D1 |
| Day 5–6 | D3: Create `daily-challenge.component.ts` — extends ChallengeComponent with 5 questions + 2x XP | D3 |
| Day 7 | D3: Result screen shows daily challenge-specific XP (highlighted as 2x bonus) | D3 |
| Day 8 | Wire route `/daily-challenge` | TL |
| Day 9 | QA: simulate completing daily challenge, verify 2x XP, verify completion state persists | PM |

---

#### Story 5.3 — Daily Challenge Streak Counter
**Points: 5 | Owner: D2 + D1 | Reviewer: TL**

| Day | Task | Who |
|---|---|---|
| Day 1 | D2: Add `dailyChallengeStreak` signal to `gamification.service.ts` | D2 |
| Day 2 | D2: `updateDailyStreak()` — called on daily challenge completion | D2 |
| Day 3 | D2: Milestone rewards: 3-day badge (200 XP), 7-day (500 XP), 30-day (1000 XP + badge) | D2 |
| Day 4 | D1: Show daily challenge streak count on dashboard card | D1 |
| Day 5 | D2: Sync to Firestore | D2 |

---

#### Story 5.4 — Daily Challenge Admin Seeding Tool
**Points: 3 | Owner: D2 | Reviewer: TL**

| Day | Task | Who |
|---|---|---|
| Day 1 | D2: Write Node.js script to bulk-insert daily challenges into Firestore | D2 |
| Day 2 | PM: Uses admin panel (or Firebase console) to populate next quarter's challenges | PM |
| Day 3 | D2: Add Firebase Remote Config flag `daily_challenge_enabled` | D2 |

---

#### Story 5.5 — Analytics for Daily Challenge
**Points: 3 | Owner: D2 | Reviewer: TL**

| Day | Task | Who |
|---|---|---|
| Day 1 | Add Firebase Analytics events: `daily_challenge_started`, `daily_challenge_completed`, `daily_challenge_skipped` | D2 |
| Day 2 | Set up Firebase Dashboard card: "Daily Challenge Completion Rate" | PM |
| Day 3 | PR review | TL |

---

**Sprint 5 PM Checklist:**
- [ ] Daily challenge resets correctly at midnight IST (test with device time manipulation)
- [ ] 90 days of daily challenges pre-populated in Firestore before release
- [ ] 2x XP correctly applied and displayed
- [ ] Push notification from Sprint 4 correctly deep-links to `/daily-challenge`
- [ ] Store update with Daily Challenge as headline feature in release notes

---

### SPRINT 6 — Certificate Sharing & Viral Loop (Week 11–12)

**Sprint Goal:** Every certificate earned becomes a potential app download.
**Total Story Points:** 35

---

#### Story 6.1 — LinkedIn Certificate Share
**Points: 8 | Owner: D3 + D4 | Reviewer: TL**

| Day | Task | Who |
|---|---|---|
| Day 1 | D4: Install `@capacitor/share`, `html2canvas` | D4 |
| Day 2 | D3: Add `shareToLinkedIn()` method to `certificate.component.ts` | D3 |
| Day 3 | D3: Use `html2canvas` to capture `.cert-page` as PNG | D3 |
| Day 4 | D4: Save PNG to temp file via `@capacitor/filesystem` | D4 |
| Day 5 | D4: `Share.share()` with LinkedIn deep link + image | D4 |
| Day 6 | D3: Add "Add to LinkedIn" button below Print button in certificate modal | D3 |
| Day 7 | QA: test on Android + iOS, verify image quality | PM + D4 |
| Day 8 | PR review | TL |

---

#### Story 6.2 — WhatsApp Score Sharing After Challenge
**Points: 5 | Owner: D3 + D4 | Reviewer: TL**

| Day | Task | Who |
|---|---|---|
| Day 1 | D3: Create off-screen score card `div` in `challenge.component.html` | D3 |
| Day 2 | D3: `shareScore()` method — capture score card with `html2canvas` | D3 |
| Day 3 | D4: `Share.share()` with pre-filled text + image | D4 |
| Day 4 | D3: Add "Share Score" button to challenge results screen | D3 |
| Day 5 | QA: test sharing to WhatsApp and Telegram | PM |
| Day 6 | PR review | TL |

---

#### Story 6.3 — Referral Program
**Points: 8 | Owner: D2 + D1 | Reviewer: TL**

| Day | Task | Who |
|---|---|---|
| Day 1 | D2: Generate referral code on first login, save to `users/{uid}.referralCode` | D2 |
| Day 2 | D1: Add referral code section to onboarding step 4 (optional input) | D1 |
| Day 3 | D2: Firebase Function `processReferral` — validate code, award 500 XP to both users | D2 |
| Day 4 | D1: Create referral share UI — "Your code: SATHISH7K — Share & earn 500 XP" | D1 |
| Day 5 | D4: Wire share button → `Share.share()` with referral text + Play Store link | D4 |
| Day 6 | D1: Profile screen — show referral count: *"You've referred 3 friends 🎉"* | D1 |
| Day 7 | QA: end-to-end referral flow on 2 devices | PM |
| Day 8 | PR review | TL |

---

#### Story 6.4 — In-App Rating Prompt
**Points: 3 | Owner: D4 | Reviewer: TL**

| Day | Task | Who |
|---|---|---|
| Day 1 | D4: Install `@capacitor-community/app-review` plugin | D4 |
| Day 2 | D4: Create `review.service.ts` — track `challengesCompleted` counter, 90-day cooldown | D4 |
| Day 3 | D4: Trigger on 3rd, 10th, 25th challenge completion | D4 |
| Day 4 | QA: verify prompt appears at right moment, 90-day logic | PM |
| Day 4 | PR review | TL |

---

#### Story 6.5 — Firebase Dynamic Links for Referral + Sharing
**Points: 5 | Owner: D2 | Reviewer: TL**

| Day | Task | Who |
|---|---|---|
| Day 1 | D2: Set up Firebase Dynamic Links (short URLs that open app or Play Store) | D2 |
| Day 2 | D2: Generate dynamic link for referral: `javaiq.page.link/ref?code=SATHISH7K` | D2 |
| Day 3 | D2: Handle incoming dynamic link in `app.component.ts` → extract referral code | D2 |
| Day 4 | Test link on device without app installed → opens Play Store | D4 + PM |
| Day 5 | PR review | TL |

---

**Sprint 6 PM Checklist:**
- [ ] LinkedIn share tested — image quality is crisp (not pixelated)
- [ ] Referral system tested with 2 real Google accounts
- [ ] Score share card looks good on WhatsApp preview
- [ ] Rating prompt timing confirmed correct (after 3rd challenge, not during)
- [ ] Update store listing: mention LinkedIn certificates in description

---

### SPRINT 7 — Firebase-Backed Dynamic Content (Week 13–15)

**Sprint Goal:** Content can be updated live without app store releases.
**Duration:** 3 weeks (60 story points capacity)
**Total Story Points:** 55

---

#### Story 7.1 — Data Migration to Firestore
**Points: 13 | Owner: D3 + D2 | Reviewer: TL**

| Day | Task | Who |
|---|---|---|
| Day 1–2 | D3: Write migration script — reads all `.ts` question data, formats as Firestore documents | D3 |
| Day 3 | D2: Define final Firestore schema. TL reviews and approves | D2 + TL |
| Day 4 | D3: Run migration script — seed `questions` collection (all categories) | D3 |
| Day 5 | D2: Update `data.service.ts` — add `loadQuestions()` with 24h localStorage cache | D2 |
| Day 6 | D2: Ensure all existing signal-based APIs (`getQuestions()`, `getProgress()`) remain unchanged | D2 |
| Day 7–8 | TL: End-to-end test — verify app works identically with Firestore as data source | TL |
| Day 9 | D3: Migrate tutorials to `tutorials` collection | D3 |
| Day 10 | D3: Migrate assessments to `assessments` Firestore collection | D3 |
| Day 11 | PM: Verify all content present and correct in Firestore | PM |
| Day 12 | PR review + security rules review | TL |

---

#### Story 7.2 — Firebase Remote Config Integration
**Points: 5 | Owner: D2 | Reviewer: TL**

| Day | Task | Who |
|---|---|---|
| Day 1 | D2: Enable Remote Config. Create `remote-config.service.ts` | D2 |
| Day 2 | D2: Replace hardcoded values with Remote Config reads: ad frequency, XP bonuses, `daily_challenge_enabled` | D2 |
| Day 3 | D2: Add default values in code (fallback for offline) | D2 |
| Day 4 | Test: change Remote Config value in console → app reflects within 1 hour | D2 + PM |
| Day 5 | PR review | TL |

---

#### Story 7.3 — Admin Content Panel (Firebase Hosting)
**Points: 8 | Owner: D2 + TL | Reviewer: PM**

| Day | Task | Who |
|---|---|---|
| Day 1–2 | TL: Bootstrap simple Angular admin app in `/admin` subfolder | TL |
| Day 3 | D2: Firebase Auth — restrict access to admin email only | D2 |
| Day 4 | TL: Question add form (Category, Question, Answer, Code, Tags, Difficulty) | TL |
| Day 5 | TL: Question list view with edit/delete | TL |
| Day 6 | D2: Deploy admin app to Firebase Hosting at `admin.javaiq.app` | D2 |
| Day 7 | PM: Training session — PM learns to add content via admin panel | PM |
| Day 8 | PR review | TL |

---

#### Story 7.4 — Offline Content Strategy
**Points: 5 | Owner: D4 | Reviewer: TL**

| Day | Task | Who |
|---|---|---|
| Day 1 | D4: Upgrade localStorage cache to `@capacitor/preferences` API (more reliable on iOS) | D4 |
| Day 2 | D4: Pre-fetch and cache all questions on first app launch (background sync) | D4 |
| Day 3 | D1: Show "Content cached {date}" indicator on tutorial/question screens | D1 |
| Day 4 | D1: Show "Questions updated! Pull to see new content" banner when fresh data available | D1 |
| Day 5 | Test: Complete a challenge with airplane mode on | PM |

---

#### Story 7.5 — Company Tags on Questions
**Points: 8 | Owner: D3 | Reviewer: TL**

| Day | Task | Who |
|---|---|---|
| Day 1 | D3: Add `companies: string[]` field to `Question` model | D3 |
| Day 2–4 | D3: Tag all existing interview questions with relevant companies (batch update in Firestore) | D3 |
| Day 5 | D1: Add company filter chips to `iq-list.component.ts` | D1 |
| Day 6 | D2: Firestore query: filter questions by company tag | D2 |
| Day 7 | QA: filter by Amazon → verify only tagged questions appear | PM |
| Day 8 | PR review | TL |

---

#### Story 7.6 — "New Questions Added" Push Notification
**Points: 3 | Owner: D2 | Reviewer: TL**

| Day | Task | Who |
|---|---|---|
| Day 1 | D2: Firebase Function `onNewQuestionAdded` — triggers on Firestore write to `questions` collection | D2 |
| Day 2 | D2: Send FCM to all users: *"New [Category] questions added! Check them out 🔥"* | D2 |
| Day 3 | PR review | TL |

---

#### Story 7.7 — Performance Audit & Optimization
**Points: 5 | Owner: TL | Reviewer: PM**

| Day | Task | Who |
|---|---|---|
| Day 1 | TL: Measure cold start time before and after Firebase migration (ensure < 2s) | TL |
| Day 2 | TL: Audit Firestore read counts — ensure no unnecessary reads | TL |
| Day 3 | TL: Bundle size check — no increase from new dependencies | TL |
| Day 4 | TL: Lazy loading audit — all routes should be lazy-loaded (already implemented) | TL |
| Day 5 | Document performance baseline for future comparisons | TL |

---

**Sprint 7 PM Checklist:**
- [ ] ALL existing content confirmed present in Firestore before removing hardcoded data
- [ ] Admin panel access tested (PM can add a question end-to-end)
- [ ] Firestore costs reviewed in Firebase console — set budget alert at ₹500/month
- [ ] Cold start time measured on mid-range Android (< 2 seconds)
- [ ] Hardcoded question data files kept as backup (move to `/archive` folder, not deleted)

---

### SPRINT 8 — Premium Subscription Tier (Week 16–17)

**Sprint Goal:** First paying users onboarded. Revenue stream live.
**Total Story Points:** 42

---

#### Story 8.1 — RevenueCat Setup & IAP Configuration
**Points: 8 | Owner: D4 + D2 | Reviewer: TL**

| Day | Task | Who |
|---|---|---|
| Day 1 | PM: Create products in Google Play Console and App Store Connect (monthly + annual) | PM |
| Day 2 | D4: Set up RevenueCat account, link Play Store + App Store products | D4 |
| Day 3 | D4: Install `@revenuecat/purchases-capacitor` in project | D4 |
| Day 4 | D2: Create `subscription.service.ts` — `isPremium`, `purchasePro()`, `restorePurchases()` | D2 |
| Day 5 | D2: Sync premium status to `users/{uid}.isPremium` in Firestore | D2 |
| Day 6 | D4: RevenueCat webhook → Firebase Function to update Firestore on purchase/cancel | D4 |
| Day 7 | End-to-end test purchase with test account | D4 + PM |
| Day 8 | PR review | TL |

---

#### Story 8.2 — Premium Paywall Screen
**Points: 8 | Owner: D1 | Reviewer: TL + PM**

| Day | Task | Who |
|---|---|---|
| Day 1 | PM: Finalize feature comparison list (Free vs. Pro) and pricing copy | PM |
| Day 2–3 | D1: Create `paywall.component.ts` — full-screen modal, feature checklist, pricing cards | D1 |
| Day 4 | D1: Annual plan highlighted as "Best Value" badge. 7-day free trial prominent | D1 |
| Day 5 | D1: Wire "Subscribe" button → `subscription.service.purchasePro()` | D1 |
| Day 6 | D1: "Restore Purchase" button | D1 |
| Day 7 | D1: Add "Go Pro" trigger from: dashboard header, settings, ad-gate screens | D1 |
| Day 8 | QA: test purchase flow (use RevenueCat sandbox) | PM |
| Day 8 | PR review | TL |

---

#### Story 8.3 — Premium Feature Gating
**Points: 8 | Owner: D2 + D3 | Reviewer: TL**

| Day | Task | Who |
|---|---|---|
| Day 1 | D2: `isPremium` signal available globally via `subscription.service.ts` | D2 |
| Day 2 | D4: In `admob.service.ts` — skip all ads if `isPremium === true` | D4 |
| Day 3 | D3: Unlock all interview experiences for premium users (bypass ad-gate) | D3 |
| Day 4 | D3: Create `premium-questions` Firestore collection — exclusive question sets | D3 |
| Day 5 | D1: "Pro Member" badge on leaderboard row for premium users | D1 |
| Day 6 | D2: Offline pre-download for premium users — cache all content on Wi-Fi | D2 |
| Day 7 | QA: verify free user sees ads, premium user sees no ads | PM |
| Day 8 | PR review | TL |

---

#### Story 8.4 — Premium Analytics
**Points: 3 | Owner: D2 | Reviewer: TL**

| Day | Task | Who |
|---|---|---|
| Day 1 | Add analytics events: `paywall_viewed`, `purchase_initiated`, `purchase_completed`, `subscription_cancelled` | D2 |
| Day 2 | Set up RevenueCat dashboard — track MRR, conversion rate | PM |
| Day 3 | PR review | TL |

---

**Sprint 8 PM Checklist:**
- [ ] Products created in BOTH Google Play Console AND App Store Connect before dev starts
- [ ] 7-day free trial confirmed working in sandbox
- [ ] Restore purchase tested (uninstall → reinstall → restore)
- [ ] Legal: Terms of Service updated to include subscription terms
- [ ] Privacy Policy updated to mention RevenueCat
- [ ] Announce premium launch on LinkedIn

---

### SPRINT 9 — Interview Simulator Mode (Week 18–19)

**Sprint Goal:** The most shareable feature is live. Users can simulate real interviews.
**Total Story Points:** 38

---

#### Story 9.1 — Simulator Config Screen
**Points: 5 | Owner: D1 | Reviewer: TL**

| Day | Task | Who |
|---|---|---|
| Day 1 | D1: Create `simulator-config.component.ts` — company selector, role, duration | D1 |
| Day 2 | D1: Company logos/icons from existing `experiences` data | D1 |
| Day 3 | D2: `simulator.service.ts` — fetch company-tagged questions from Firestore | D2 |
| Day 4 | QA + PR review | TL + PM |

---

#### Story 9.2 — Simulator Core (Full-Screen, Countdown Timer)
**Points: 8 | Owner: D3 | Reviewer: TL**

| Day | Task | Who |
|---|---|---|
| Day 1–2 | D3: Create `simulator.component.ts` — full-screen, no tab bar, strict countdown timer | D3 |
| Day 3 | D3: MCQ format (4 options) using existing `AssessmentData` format | D3 |
| Day 4 | D3: No pause allowed. Timer runs continuously. Auto-submit on time expiry | D3 |
| Day 5 | D3: Question review after submission (correct answer highlighted) | D3 |
| Day 6 | D1: Full-screen immersive UI — dark background, prominent timer, stress feeling | D1 |
| Day 7 | QA: test 20-min, 30-min, 45-min sessions | PM |
| Day 8 | PR review | TL |

---

#### Story 9.3 — Simulator Results & Percentile
**Points: 8 | Owner: D3 + D2 | Reviewer: TL**

| Day | Task | Who |
|---|---|---|
| Day 1 | D3: Create `simulator-result.component.ts` — score, time taken, per-question breakdown | D3 |
| Day 2 | D2: Save result to `simulator_scores/{uid}/{sessionId}` Firestore | D2 |
| Day 3 | D2: Percentile calculation — compare score against all users for that company+role | D2 |
| Day 4 | D3: Show percentile: *"You scored better than 73% of candidates for Amazon SDE-2"* | D3 |
| Day 5 | D3: Share score card button → D4 implements share | D3 |
| Day 6 | D4: Score card image generation + share via `@capacitor/share` | D4 |
| Day 7 | QA: take full simulation, verify score + percentile + share | PM |
| Day 8 | PR review | TL |

---

#### Story 9.4 — Simulator Tab in Navigation
**Points: 3 | Owner: D1 | Reviewer: TL**

| Day | Task | Who |
|---|---|---|
| Day 1 | D1: Add "Simulate" tab to `tabs.component.ts` (replace least-used tab or add as 7th) | D1 |
| Day 2 | Wire route `/simulator` | TL |
| Day 3 | QA + PR review | TL + PM |

---

**Sprint 9 PM Checklist:**
- [ ] Simulator tested with 20-min session on mid-range Android (no lag)
- [ ] Percentile requires sufficient data — seed 100 sample scores in Firestore before launch
- [ ] Share card image quality verified on WhatsApp
- [ ] Analytics: `simulator_started`, `simulator_completed`, `simulator_score_shared` events added
- [ ] Write blog post / LinkedIn post announcing Interview Simulator

---

### SPRINT 10 — Community & User Submissions (Week 20–21)

**Sprint Goal:** Content grows beyond what the team can produce manually.
**Total Story Points:** 35

---

#### Story 10.1 — Native Experience Submission Form
**Points: 8 | Owner: D3 + D2 | Reviewer: TL**

| Day | Task | Who |
|---|---|---|
| Day 1 | D3: Create `submit-experience.component.ts` — native form (Company, Role, YOE, Date, Rounds, Result, Description) | D3 |
| Day 2 | D3: Form validation — minimum 200 chars description, all fields required | D3 |
| Day 3 | D2: Submit to `submissions/{uid}_{timestamp}` Firestore collection | D2 |
| Day 4 | D2: Firestore rule — only authenticated users can write submissions | D2 |
| Day 5 | D2: Firebase Function `onSubmissionApproved` — move to `experiences`, send 200 XP + in-app notification | D2 |
| Day 6 | PM: Admin panel — add submissions list with approve/reject buttons | PM (with TL) |
| Day 7 | Replace Google Form CTA (from Sprint 1.2) with native form link | D3 |
| Day 8 | QA: end-to-end submit → admin approve → appears in app → XP awarded | PM |

---

#### Story 10.2 — Comments on Interview Questions
**Points: 8 | Owner: D3 + D2 | Reviewer: TL**

| Day | Task | Who |
|---|---|---|
| Day 1 | D2: Firestore schema — `comments/{questionId}/messages` subcollection | D2 |
| Day 2 | D2: Security rules — auth required to write, anyone can read | D2 |
| Day 3 | D3: Create `comments.component.ts` — collapsible section, input, comments list | D3 |
| Day 4 | D3: Like button on comments — `users/{uid}/likedComments` Firestore | D3 |
| Day 5 | D3: Report button — writes to `reports` collection | D3 |
| Day 6 | D1: Wire into `iq-detail.component.ts` at bottom of page | D1 |
| Day 7 | QA: post, like, report — verify all interactions | PM |
| Day 8 | PR review | TL |

---

#### Story 10.3 — User Profiles & Public Pages
**Points: 5 | Owner: D1 + D2 | Reviewer: TL**

| Day | Task | Who |
|---|---|---|
| Day 1 | D1: Create `profile.component.ts` — XP, level, streak, badges, submitted stories count | D1 |
| Day 2 | D1: Show user's submitted experiences (approved ones) on their profile | D1 |
| Day 3 | D2: Public profile data in `users/{uid}` — only non-sensitive fields | D2 |
| Day 4 | D1: Profile accessible from leaderboard (tap a user's name) | D1 |
| Day 5 | QA + PR review | TL + PM |

---

#### Story 10.4 — Content Moderation Queue
**Points: 5 | Owner: D2 | Reviewer: TL**

| Day | Task | Who |
|---|---|---|
| Day 1 | D2: Admin panel — reports queue (flagged comments + submissions) | D2 |
| Day 2 | D2: Auto-hide comments with 3+ reports pending review | D2 |
| Day 3 | PM: Moderation workflow documented — response time SLA: 48 hours | PM |
| Day 4 | QA + PR review | TL |

---

**Sprint 10 PM Checklist:**
- [ ] Submission form tested by PM as a real user — is it intuitive?
- [ ] Moderation workflow documented and shared with team
- [ ] Firestore costs reviewed — comments collection can grow quickly
- [ ] Update Privacy Policy: mention user-generated content, moderation policy
- [ ] Post on LinkedIn: *"Now you can share your Java interview story on JavaIQ"*

---

### SPRINT 11 — ASO & Store Optimization (Week 22)

**Sprint Goal:** Maximize organic downloads through store discoverability.
**Duration:** 1 week
**Owner:** PM (primary) with D4 and D1 support

---

#### Story 11.1 — Play Store Listing Overhaul
**Points: 5 | Owner: PM | Reviewer: TL**

| Day | Task | Who |
|---|---|---|
| Day 1 | PM: Update App Name: `JavaIQ: Java Interview Prep` | PM |
| Day 1 | PM: Rewrite Short Description (80 chars max, keywords first) | PM |
| Day 2 | PM: Rewrite Full Description — 4000 chars, keyword-rich, structured | PM |
| Day 3 | D1 + PM: Create 7 new screenshots using current app build | D1 + PM |
| Day 4 | PM: Add feature graphic (1024x500) and promo video thumbnail | PM |
| Day 5 | PM: Submit update to Play Store | PM |

---

#### Story 11.2 — App Store (iOS) Listing Overhaul
**Points: 3 | Owner: PM | Reviewer: D4**

| Day | Task | Who |
|---|---|---|
| Day 1 | PM: Update App Store name, subtitle (30 chars), keywords field | PM |
| Day 2 | PM: 5 App Store screenshots (different aspect ratio from Play Store) | PM |
| Day 3 | D4: Submit iOS build via Xcode / Transporter. PM submit review | D4 + PM |

---

#### Story 11.3 — In-App Review Trigger
**Points: 3 | Owner: D4 | Reviewer: TL**

*(Refer to Story 6.4 — may already be complete. If done, skip.)*

| Day | Task | Who |
|---|---|---|
| Day 1 | Verify `@capacitor-community/app-review` working correctly | D4 |
| Day 2 | Monitor initial ratings after release. Respond to all reviews within 24h | PM |

---

#### Story 11.4 — Keyword Research & Competitor Analysis
**Points: 2 | Owner: PM**

| Day | Task | Who |
|---|---|---|
| Day 1 | PM: Use AppFollow / MobileAction (or free tools) to research top 20 keywords for Java interview apps | PM |
| Day 2 | PM: Analyze top 5 competitor listings — identify gaps in their descriptions | PM |
| Day 2 | PM: Update keyword strategy based on findings, apply to both stores | PM |

---

**Sprint 11 PM Checklist:**
- [ ] Both store listings updated and live
- [ ] Screenshots show the 3 most impressive features (Simulator, Leaderboard, Certificate)
- [ ] Respond to all existing reviews (positive and negative) — shows active maintenance
- [ ] Share store link on all social channels after listing update

---

### SPRINT 12 — Marketing Automation (Week 23–24)

**Sprint Goal:** Marketing engine runs with minimal manual effort each week.
**Total Story Points:** 30

---

#### Story 12.1 — Social Content Pipeline
**Points: 5 | Owner: PM + D4 | Reviewer: TL**

| Day | Task | Who |
|---|---|---|
| Day 1 | PM: Create Canva template — "Java Question of the Day" card (1080x1080) | PM |
| Day 2 | PM: Create 30-post content bank (questions + tips from app content) | PM |
| Day 3 | PM: Schedule 30 posts on Buffer/Hootsuite (LinkedIn + Twitter) | PM |
| Day 4 | D4: Set up automated daily tweet using GitHub Actions + Twitter API (optional — if budget allows) | D4 |
| Day 5 | PM: Create LinkedIn company page. First 3 posts live | PM |

---

#### Story 12.2 — YouTube Shorts Production
**Points: 5 | Owner: D4 + PM | Reviewer: N/A**

| Day | Task | Who |
|---|---|---|
| Day 1 | D4: Set up screen recording workflow — OBS or iOS screen record for clean app capture | D4 |
| Day 2 | PM: Script first 5 YouTube Shorts (topic list from roadmap Appendix B) | PM |
| Day 3–4 | D4: Record + edit first 5 Shorts (30 seconds each, captions added) | D4 |
| Day 5 | PM: Upload to YouTube channel. Schedule 3x/week cadence | PM |

---

#### Story 12.3 — Telegram Channel Setup
**Points: 3 | Owner: PM**

| Day | Task | Who |
|---|---|---|
| Day 1 | PM: Create Telegram channel "JavaIQ Daily" | PM |
| Day 2 | PM: Set up daily automated post — Java tip + "More on JavaIQ app" | PM |
| Day 3 | PM: Post channel link in 5 relevant Telegram developer groups | PM |

---

#### Story 12.4 — College Partnership Outreach
**Points: 5 | Owner: PM**

| Day | Task | Who |
|---|---|---|
| Day 1 | PM: Draft outreach email template for placement coordinators | PM |
| Day 2 | PM: Create list of 50 target colleges (IITs, NITs, top private colleges) | PM |
| Day 3–4 | PM: Send personalized emails to 25 colleges | PM |
| Day 5 | D2: Add `.edu` email verification for student accounts (ad-free) | D2 |
| Day 6 | D1: "Student" badge on profile and leaderboard | D1 |
| Day 7 | D2: College-specific leaderboard filter | D2 |

---

#### Story 12.5 — Reddit / Quora Content
**Points: 3 | Owner: PM**

| Day | Task | Who |
|---|---|---|
| Day 1 | PM: Write 3 Quora answers: "How to prepare for Java interviews at Amazon/Google/Flipkart" | PM |
| Day 2 | PM: Post resource thread on r/developersIndia and r/java (follow community rules, no spam) | PM |
| Day 3 | PM: Monitor responses, engage with comments | PM |

---

#### Story 12.6 — Weekly KPI Dashboard Setup
**Points: 3 | Owner: PM + D2**

| Day | Task | Who |
|---|---|---|
| Day 1 | D2: Set up Firebase Analytics custom dashboard with all KPI metrics | D2 |
| Day 2 | PM: Set up weekly automated report email from Firebase → PM + TL | PM |
| Day 3 | PM: Create simple Google Sheets KPI tracker with week-over-week charts | PM |

---

**Sprint 12 PM Checklist:**
- [ ] 30 social posts scheduled and going out automatically
- [ ] First 5 YouTube Shorts uploaded
- [ ] Telegram channel has first 100 subscribers
- [ ] At least 10 college replies received from outreach
- [ ] KPI dashboard reviewed — all metrics tracking correctly

---

## 5. Individual Workload Summary

### Dev 1 — Frontend & UX — 24-Week Overview

| Sprint | Primary Work | Effort |
|---|---|---|
| 1 | Leaderboard tabs UI | 2 days |
| 2 | Search modal UI, bookmark icon states, "New" badge CSS, pull-to-refresh | 8 days |
| 3 | Onboarding carousel (full ownership), tooltips, profile setup UI | 8 days |
| 4 | Push permission rationale dialog, streak shield UI | 3 days |
| 5 | Daily challenge card on dashboard, countdown timer | 5 days |
| 6 | Paywall screen, referral share UI, "Go Pro" button placements | 6 days |
| 7 | Company filter chips on Q list, offline indicator banner | 3 days |
| 8 | Paywall screen ownership | 8 days |
| 9 | Simulator full-screen UI, Simulator tab in nav | 4 days |
| 10 | Wire comments to detail page, public profile UI | 4 days |
| 11 | Store screenshots | 2 days |
| 12 | Student badge, college leaderboard filter UI | 2 days |

---

### Dev 2 — Firebase & Backend — 24-Week Overview

| Sprint | Primary Work | Effort |
|---|---|---|
| 1 | Offline connectivity service, leaderboard Firestore queries | 6 days |
| 2 | Bookmark Firestore sync | 3 days |
| 3 | Profile setup Firestore schema + post-login check, analytics setup | 8 days |
| 4 | FCM infrastructure, Cloud Functions (all 5 notification types), streak shields Firestore | 10 days |
| 5 | Daily challenge service, Firestore schema, seed script | 8 days |
| 6 | Firebase Dynamic Links, referral processing Function | 6 days |
| 7 | Data migration scripts, Remote Config, `data.service.ts` Firestore integration | 12 days |
| 8 | RevenueCat webhook integration, premium Firestore sync | 6 days |
| 9 | Simulator scores Firestore, percentile calculation | 5 days |
| 10 | Submission workflow, comments schema + rules, moderation | 8 days |
| 11 | — | — |
| 12 | Student account `.edu` verification, college leaderboard, KPI dashboard | 5 days |

---

### Dev 3 — Features & Content — 24-Week Overview

| Sprint | Primary Work | Effort |
|---|---|---|
| 1 | Experience entries diversification + disclaimer | 5 days |
| 2 | Search index from data sources, bookmark service + detail pages, `addedOn` field | 8 days |
| 3 | Settings screen | 5 days |
| 4 | Notification opt-out setting | 2 days |
| 5 | `daily-challenge.component.ts` (5 questions, 2x XP) | 6 days |
| 6 | LinkedIn certificate share method, WhatsApp score card | 6 days |
| 7 | Data migration script (questions + tutorials + assessments) | 10 days |
| 8 | Premium experience gating, premium question sets | 5 days |
| 9 | Simulator core component + results screen | 10 days |
| 10 | Experience submission form, comments component | 10 days |
| 11 | — | — |
| 12 | — | — |

---

### Dev 4 — Mobile, DevOps & Marketing — 24-Week Overview

| Sprint | Primary Work | Effort |
|---|---|---|
| 1 | Ad frequency fix, `@capacitor/browser` CTA, CI/CD pipeline, AdMob env fix | 10 days |
| 2 | — (support on route audit) | 2 days |
| 3 | Onboarding QA on iOS, settings link in nav | 3 days |
| 4 | Push notifications Capacitor setup (Android + iOS configs) | 5 days |
| 5 | — (support) | 2 days |
| 6 | html2canvas + share integration (LinkedIn, WhatsApp), in-app review plugin, dynamic links | 8 days |
| 7 | Capacitor Preferences offline caching, performance audit support | 5 days |
| 8 | RevenueCat Capacitor plugin setup, Play Store + App Store product setup | 6 days |
| 9 | Simulator score share card | 3 days |
| 10 | — (support) | 2 days |
| 11 | App Store submission (iOS build via Xcode) | 3 days |
| 12 | YouTube Shorts recording/editing, social automation, Telegram | 10 days |

---

### Tech Lead — 24-Week Overview

| Sprint | Primary Responsibilities |
|---|---|
| 1 | Dead code cleanup, console.log removal, CI/CD review, all PR reviews |
| 2 | Search service architecture review, route audit + fixes, PR reviews |
| 3 | Onboarding route setup, analytics architecture review, bundle size check |
| 4 | Cloud Functions architecture review, FCM deep link routing, PR reviews |
| 5 | Daily challenge Firestore schema review, caching strategy, PR reviews |
| 6 | Dynamic Links architecture, referral function review |
| 7 | Admin panel build, Firestore schema final approval, security rules, performance audit |
| 8 | RevenueCat integration review, Firestore premium gating review |
| 9 | Simulator timer + scoring review, percentile algorithm review |
| 10 | Comments moderation rules, submission workflow review |
| 11 | Final store build sign-off, keyword strategy review |
| 12 | KPI dashboard review, 6-month retrospective facilitation |

---

### Project Manager — 24-Week Overview

| Sprint | Primary Responsibilities |
|---|---|
| 1 | Google Form creation, Sprint 1 QA, Play Store update submission |
| 2 | Sprint 2 QA (30 search queries), LinkedIn announcement |
| 3 | Onboarding copy writing, Firebase Analytics DebugView verification |
| 4 | Push notification QA (physical devices), Privacy Policy update |
| 5 | Daily challenge 90-day content calendar, KPI tracking setup |
| 6 | LinkedIn share QA, referral end-to-end test, Terms of Service update |
| 7 | Firestore content verification, admin panel training, budget alert setup |
| 8 | IAP product creation (both stores), RevenueCat sandbox testing, legal updates |
| 9 | Simulator percentile seed data, blog post for simulator launch |
| 10 | Moderation workflow doc, submission QA, Privacy Policy update |
| 11 | ASO full listing rewrite, keyword research, screenshot creation |
| 12 | Social media scheduling, YouTube channel setup, college outreach, KPI dashboard |

---

## 6. Definition of Done

A story is **Done** when ALL of the following are true:

### Code
- [ ] Code committed and pushed to feature branch
- [ ] Branch name follows convention: `feature/JIRA-123-short-description`
- [ ] No TypeScript errors (`ng build --configuration production` passes)
- [ ] No ESLint errors (`ng lint` passes)
- [ ] PR raised against `main` with description and screenshots
- [ ] PR reviewed and approved by Tech Lead
- [ ] All review comments addressed

### Functionality
- [ ] Story's Acceptance Criteria are all checked and met
- [ ] Tested on physical Android device (minimum Samsung Galaxy mid-range)
- [ ] Tested on physical iOS device (minimum iPhone 12) — or iOS simulator if no device
- [ ] Edge cases handled: empty state, error state, offline state
- [ ] No console errors in browser DevTools or Logcat

### Design
- [ ] UI matches existing design system (colors, spacing, typography)
- [ ] Dark mode and light mode both look correct
- [ ] Tested on small screen (375px) and large screen (430px)
- [ ] Tap targets ≥ 44x44px on all interactive elements

### Analytics
- [ ] Relevant Firebase Analytics events are firing correctly (verified in DebugView)
- [ ] No personally identifiable information (PII) logged to analytics

### Release
- [ ] Merged to `main` via approved PR
- [ ] CI/CD pipeline passes on `main`
- [ ] Firebase App Distribution build deployed for PM sign-off
- [ ] PM has tested on device and given approval
- [ ] Story moved to "Done" on project board

---

## 7. Risk Register

| # | Risk | Probability | Impact | Owner | Mitigation |
|---|---|---|---|---|---|
| R1 | Apple App Store review delays Sprint 8 (IAP) | High | High | PM | Submit at Sprint start. Have Android live first. Appeal plan ready. |
| R2 | Firebase costs spike after content migration (Sprint 7) | Medium | High | TL + D2 | Set Firestore budget alert ₹500/month. Implement aggressive caching. Audit reads weekly. |
| R3 | RevenueCat integration takes longer than estimated | Medium | Medium | D4 | Start RevenueCat account setup in Sprint 6 (parallel). Use Sandbox extensively before production. |
| R4 | Push notification delivery rates low on Chinese Android OEMs (Xiaomi, OPPO, Vivo) | High | Medium | D4 | Test on Xiaomi device. Add battery optimization exempt guide in app. |
| R5 | html2canvas certificate capture fails on iOS (known WebKit issues) | Medium | Medium | D3 | Research html2canvas iOS alternatives. Have DOM-to-image fallback ready. |
| R6 | D2 (Firebase specialist) becomes unavailable | Low | Very High | TL | TL is backup for all Firebase work. Document all Cloud Function architecture before Sprint 4. |
| R7 | Sprint velocity drops below 35 points for 2+ consecutive sprints | Medium | High | PM | Flag in Day 5 mid-sprint sync. Descope lowest-priority stories. Never cut quality for speed. |
| R8 | Google Play policy violation (ad frequency) | Low | Very High | D4 | Refer to AdMob policies during Sprint 1 ad fix. TL reviews admob.service.ts before Sprint 1 release. |
| R9 | User-submitted experiences contain inappropriate content | Medium | Medium | PM | Moderation queue from Sprint 10. Manual review of all submissions before publish. |
| R10 | App Store search ranking doesn't improve after Sprint 11 ASO | Medium | Medium | PM | Run ASO A/B test (Google Play Experiments). Iterate keywords monthly. |

---

## 8. Communication & Tools

### Project Board
**Tool:** Jira (preferred) or Notion database
**Columns:** `Backlog → Sprint Ready → In Progress → In Review → QA → Done`
**Ticket Naming:** `JAVAIQ-[sprint]-[number]` e.g., `JAVAIQ-1-001`

### Communication
| Channel | Purpose | Response SLA |
|---|---|---|
| Slack `#dev-general` | Day-to-day dev discussion | 2 hours |
| Slack `#daily-standup` | Async standup updates | 9:30 AM daily |
| Slack `#releases` | Build notifications, deployment alerts | Immediate |
| Slack `#blockers` | Urgent blockers requiring immediate attention | 30 minutes |
| Email | External (stores, partners, colleges) | 24 hours |
| Google Meet | Ceremonies (planning, demo, retro) | As scheduled |

### Code Repository
- **Platform:** GitHub
- **Branching:** `main` (production) → `develop` → `feature/*`
- **Branch protection:** PRs require TL approval + CI pass before merge to `main`
- **Release tags:** `v1.1.0`, `v1.2.0` etc. — tagged on every Play Store submission

### Credentials & Access
| Resource | Owner | Backup |
|---|---|---|
| Firebase Console | PM | TL |
| Google Play Console | PM | D4 |
| Apple Developer Account | PM | D4 |
| AdMob Console | PM | D4 |
| RevenueCat Dashboard | PM | D4 |
| GitHub Repository | TL | PM |
| Android Keystore (`javaiq-release-key.jks`) | D4 | TL (secure copy) |
| Canva Brand Account | PM | — |

### Document Repository
All team documents stored in shared Google Drive:
```
JavaIQ Team Drive/
  Planning/
    PRODUCT_ROADMAP.md
    TEAM_EXECUTION_PLAN.md (this file)
  Sprints/
    Sprint-1-notes.md
    Sprint-2-notes.md
    ...
  Design/
    Figma link (if applicable)
    App screenshots/
  Legal/
    Privacy Policy.pdf
    Terms of Service.pdf
  Marketing/
    Canva templates/
    Social content bank/
    YouTube scripts/
```

---

## 9. Release & Deployment Process

### Every Sprint Release Checklist

**Day 8 (Thursday) — Code Freeze**
- [ ] All sprint stories merged to `main`
- [ ] `ng build --configuration production` passes cleanly
- [ ] `ng lint` passes with zero errors
- [ ] `vitest run` — all tests pass
- [ ] D4: `ng build && npx cap sync android && npx cap sync ios`
- [ ] D4: Build signed `.aab` (Android App Bundle)
- [ ] D4: Upload to Firebase App Distribution for internal testing

**Day 9 (Friday Morning) — Internal QA**
- [ ] PM installs from Firebase App Distribution
- [ ] PM runs QA checklist on physical Android device
- [ ] PM tests iOS on simulator (or physical device if available)
- [ ] PM checks all new features against acceptance criteria
- [ ] Any critical bug found → Dev fixes same day (Day 9 hotfix)

**Day 10 (Friday Afternoon) — Production Release**
- [ ] D4: Upload `.aab` to Google Play Console (Production track)
- [ ] PM: Write release notes (English, under 500 chars)
- [ ] PM: Submit for review (Play Store typically 1–3 days)
- [ ] D4: Upload `.ipa` to App Store Connect (if iOS changes)
- [ ] TL: Tag release in GitHub: `git tag v1.X.0 && git push --tags`
- [ ] Slack `#releases`: Announce deployment

### Version Numbering
- Format: `MAJOR.SPRINT.HOTFIX`
- Example: `v1.3.0` = Sprint 3 release. `v1.3.1` = hotfix after Sprint 3.
- Major version bump when premium is released (Sprint 8): `v2.0.0`

### Hotfix Process
If a critical bug is found post-release:
1. D4 + responsible Dev create `hotfix/JAVAIQ-XXX` branch from `main`
2. Fix implemented, tested locally within 4 hours
3. TL emergency review
4. Merge to `main`, tag `v1.X.1`
5. Submit expedited Play Store update (use "Emergency Fix" flag)

---

## 10. Team Performance Metrics

### Sprint Health Indicators

| Metric | Healthy | Warning | Action Needed |
|---|---|---|---|
| Sprint velocity | 40–45 pts | 35–39 pts | < 35 pts |
| Stories completed on time | ≥ 90% | 75–89% | < 75% |
| PR review turnaround | < 4 hours | 4–8 hours | > 8 hours |
| Blocker resolution | < 1 day | 1–2 days | > 2 days |
| Build failure rate | < 10% of PRs | 10–20% | > 20% |

### Individual Growth Tracking

At end of each sprint, TL conducts 1:1s with each dev (15 min):
- What did you learn this sprint?
- What was your biggest challenge?
- What would help you work faster?
- Any concerns about upcoming sprint?

### 6-Month Review Criteria

At end of Week 24, the team evaluates:
- [ ] All 12 sprints delivered (allow ±1 sprint slip)
- [ ] Play Store rating ≥ 4.5 ★
- [ ] Monthly Active Users ≥ 50,000
- [ ] Day-7 Retention ≥ 35%
- [ ] Premium subscribers ≥ 500
- [ ] Revenue positive (AdMob + Premium > hosting costs)

---

## Appendix — Quick Reference: Who Does What

| Feature | D1 (UI) | D2 (Firebase) | D3 (Features) | D4 (Mobile) | TL | PM |
|---|---|---|---|---|---|---|
| Search | UI/Modal | — | Data Index | — | Review | QA |
| Onboarding | Full owner | — | — | iOS test | Route setup | Copy + QA |
| Push Notifications | Permission UI | FCM + Functions | — | Capacitor plugin | Review | Device QA |
| Daily Challenge | Dashboard card | Firestore + seed | Challenge component | — | Review | Content calendar |
| LinkedIn Share | — | — | Certificate method | Share plugin | Review | QA |
| Premium / IAP | Paywall screen | RevenueCat sync | Feature gating | Plugin + stores | Review | Product setup |
| Interview Simulator | Full-screen UI | Score Firestore | Simulator component | Share card | Review | Seed data |
| Community Submissions | — | Submission backend | Submission form | — | Review | Moderation |
| ASO | Screenshots | — | — | iOS build | Keyword review | Full owner |
| Marketing | — | KPI dashboard | — | YouTube, Social | — | Full owner |

---

*This document is reviewed and updated at each sprint retrospective.*
*Last updated: March 2026 — Version 1.0*
