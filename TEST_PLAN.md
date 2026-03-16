# JavaIQ — Test Plan

**Version:** 1.3.0
**Platform:** iOS / Android / Web (PWA)
**Test Types:** Functional · UI/UX · Regression · Dark/Light Mode · Ad Gate · Gamification

---

## Table of Contents

1. [Onboarding & Authentication](#1-onboarding--authentication)
2. [Dashboard](#2-dashboard)
3. [Tutorial Learning](#3-tutorial-learning)
4. [Interview Questions](#4-interview-questions)
5. [Coding Questions](#5-coding-questions)
6. [Daily Challenge](#6-daily-challenge)
7. [Mock Interview](#7-mock-interview)
8. [Assessments / Quizzes](#8-assessments--quizzes)
9. [Study Plan](#9-study-plan)
10. [Review Queue](#10-review-queue)
11. [Bookmarks](#11-bookmarks)
12. [Leaderboard](#12-leaderboard)
13. [Achievements](#13-achievements)
14. [Progress Page](#14-progress-page)
15. [Notifications](#15-notifications)
16. [Settings & Profile](#16-settings--profile)
17. [Ad Gate & Monetization](#17-ad-gate--monetization)
18. [Gamification System](#18-gamification-system)
19. [Dark / Light Mode](#19-dark--light-mode)
20. [Navigation & Routing](#20-navigation--routing)
21. [Offline & Connectivity](#21-offline--connectivity)
22. [Performance](#22-performance)

---

## 1. Onboarding & Authentication

### 1.1 First Launch
| # | Test Case | Steps | Expected Result | Priority |
|---|-----------|-------|-----------------|----------|
| 1.1.1 | First-time onboarding shown | Clear app data, launch app | Redirected to `/onboarding`, carousel displayed | P0 |
| 1.1.2 | Onboarding carousel navigation | Swipe / tap Next through 4 slides | All 4 slides display correctly, progress indicators update | P0 |
| 1.1.3 | Onboarding goal selection | Reach goal selection step, tap a goal | Goal highlighted, Next enabled | P0 |
| 1.1.4 | Skip onboarding on return | Complete onboarding, restart app | Lands directly on `/dashboard` (no onboarding repeat) | P0 |
| 1.1.5 | Onboarding text visible in light mode | Enable light mode, open onboarding | All slide text readable, no invisible text | P1 |
| 1.1.6 | Onboarding text visible in dark mode | Enable dark mode, open onboarding | All slide text readable, no invisible text | P1 |

### 1.2 Google Sign-In
| # | Test Case | Steps | Expected Result | Priority |
|---|-----------|-------|-----------------|----------|
| 1.2.1 | Google Sign-In success | Tap "Sign In with Google", complete OAuth | Redirected to `/profile-setup` (first time) or `/dashboard` | P0 |
| 1.2.2 | Google Sign-In cancel | Tap "Sign In with Google", cancel OAuth | Stays on sign-in / onboarding, no crash | P0 |
| 1.2.3 | Returning user skips profile setup | Sign in with account that has `profileSetup: true` | Goes directly to `/dashboard` | P0 |
| 1.2.4 | Profile setup saved | Complete profile setup (goal + experience) | Data persisted; not shown again on next login | P0 |
| 1.2.5 | Sign out | Settings → Sign Out → Confirm | Session cleared, redirected to onboarding/sign-in | P0 |
| 1.2.6 | Sign out cancel | Settings → Sign Out → Cancel | Stays in settings, user still logged in | P1 |

---

## 2. Dashboard

### 2.1 Layout & Content
| # | Test Case | Steps | Expected Result | Priority |
|---|-----------|-------|-----------------|----------|
| 2.1.1 | Dashboard loads for logged-in user | Sign in, navigate to `/dashboard` | Hero banner with user name, stats strip, all widgets visible | P0 |
| 2.1.2 | Greeting changes by time of day | Open app morning / afternoon / evening | "Good morning", "Good afternoon", "Good evening" displayed correctly | P1 |
| 2.1.3 | Stats strip shows correct values | Complete some questions, open dashboard | Total XP, Day Streak, and Progress % match actual data | P0 |
| 2.1.4 | Overall progress percentage | Mark topics/questions as complete | Percentage updates correctly | P0 |
| 2.1.5 | Learning Path — locked categories | Fresh account | Categories beyond first are locked (🔒 shown) | P0 |
| 2.1.6 | Learning Path — unlocked category navigation | Tap an unlocked category | Navigates to correct tutorial course | P0 |
| 2.1.7 | View All Modules toggle | Tap "View all N modules" | All categories revealed; "Show less" collapses back to 3 | P1 |

### 2.2 Widgets
| # | Test Case | Steps | Expected Result | Priority |
|---|-----------|-------|-----------------|----------|
| 2.2.1 | Streak card shows current streak | Open dashboard | Streak count and level badge visible, milestone bar correct | P0 |
| 2.2.2 | Daily Goal card — uncompleted tasks | Fresh day, open dashboard | All 3 tasks unchecked (0/3 done) | P0 |
| 2.2.3 | Daily Goal card — task completion updates | Complete challenge, read 2 topics, answer QOTD | Checkboxes fill in, count updates to 3/3 | P0 |
| 2.2.4 | QOTD card — question displayed | Open dashboard | Question text visible, "Reveal Answer & Earn 15 XP" button shown | P0 |
| 2.2.5 | QOTD card — reveal answer | Tap "Reveal Answer & Earn 15 XP" | Answer revealed, +15 XP awarded, "Answered ✓" chip appears | P0 |
| 2.2.6 | QOTD — already answered today | Answer QOTD, reopen dashboard | Shows "Answered ✓" state, button not shown | P0 |
| 2.2.7 | Continue Learning card — first topic | Fresh account | Shows Core Java Masterclass, Next: JVM Architecture | P0 |
| 2.2.8 | Continue Learning card — advances after topic done | Mark a topic complete | Next incomplete topic shown | P1 |
| 2.2.9 | Achievements shortcut | Tap Achievements row | Navigates to `/achievements` | P1 |
| 2.2.10 | Today's Focus — Daily Challenge | Challenge not done today | Shows Daily Challenge focus card | P0 |
| 2.2.11 | Today's Focus — Review Queue | Challenge done, wrong answers exist | Shows Review Queue focus card | P1 |
| 2.2.12 | Today's Focus — Study Plan | Challenge done, no wrong answers, plan has tasks | Shows Study Plan focus card | P1 |
| 2.2.13 | Today's Focus — All done | All tasks complete | Shows "All done for today!" state | P1 |

### 2.3 Quick Actions
| # | Test Case | Steps | Expected Result | Priority |
|---|-----------|-------|-----------------|----------|
| 2.3.1 | Mock Interview tile | Tap "Mock Interview" | Navigates to `/mock-interview` | P1 |
| 2.3.2 | Study Plan tile | Tap "Study Plan" | Navigates to `/study-plan` | P1 |
| 2.3.3 | My Progress tile | Tap "My Progress" | Navigates to `/progress` | P1 |
| 2.3.4 | Saved tile | Tap "Saved" | Navigates to `/bookmarks` | P1 |
| 2.3.5 | Leaderboard tile | Tap "Leaderboard" | Navigates to `/leaderboard` | P1 |

---

## 3. Tutorial Learning

### 3.1 Course List
| # | Test Case | Steps | Expected Result | Priority |
|---|-----------|-------|-----------------|----------|
| 3.1.1 | All courses visible | Navigate to `/tutorials` | All 7 courses listed (Core Java, Spring, Spring Boot, Hibernate, Microservices, Multithreading, Design Patterns) | P0 |
| 3.1.2 | Course detail opens | Tap a course | Navigates to `/tutorials/:slug`, topic list shown | P0 |
| 3.1.3 | Topic count correct | Open any course | Topic count matches `COURSE_TOPICS` data (e.g. Core Java = 47 topics) | P1 |

### 3.2 Topic Viewing
| # | Test Case | Steps | Expected Result | Priority |
|---|-----------|-------|-----------------|----------|
| 3.2.1 | First topic loads | Tap first topic in Core Java | Topic component renders with title, content sections, Interview Tips | P0 |
| 3.2.2 | Ad gate on locked topic | Tap a non-first topic (not completed, not unlocked) | Ad gate triggered (reward ad on mobile / confirm dialog on web) | P0 |
| 3.2.3 | Second visit shows interstitial | Unlock a topic, revisit it | Interstitial ad shown instead of reward ad | P1 |
| 3.2.4 | Ad declined — navigate back | Decline ad on topic open | User redirected to course syllabus, not stuck | P0 |
| 3.2.5 | Topic breadcrumb / back navigation | Open topic, tap back | Returns to course detail (`/tutorials/:slug`) | P0 |
| 3.2.6 | Mark Complete button | Read topic, tap "Mark Complete" | Topic marked, +2 XP awarded, auto-navigates to next topic after delay | P0 |
| 3.2.7 | Navigation — Next Topic | Tap next topic button | Loads next topic in sequence | P0 |
| 3.2.8 | Navigation — Previous Topic | Tap previous topic button | Loads previous topic in sequence | P0 |
| 3.2.9 | Last topic in course — no "Next" | Open last topic | Next button hidden or disabled | P1 |
| 3.2.10 | Code blocks render correctly | Open any topic with code examples | Code blocks displayed in monospace, readable | P0 |
| 3.2.11 | Last visited tracking | Open a topic | `notif_last_visited` updated in localStorage with correct courseSlug, topicSlug, title | P1 |
| 3.2.12 | Topic not found | Navigate to `/tutorials/core-java/nonexistent` | "Not Found" state shown, no crash | P1 |

---

## 4. Interview Questions

### 4.1 Category List
| # | Test Case | Steps | Expected Result | Priority |
|---|-----------|-------|-----------------|----------|
| 4.1.1 | Categories load | Navigate to `/interview-questions` | All question categories listed | P0 |
| 4.1.2 | Category navigation | Tap a category | Opens `/interview-questions/:category` | P0 |

### 4.2 Question List & Detail
| # | Test Case | Steps | Expected Result | Priority |
|---|-----------|-------|-----------------|----------|
| 4.2.1 | Questions list visible | Open any category | Question list rendered, titles readable | P0 |
| 4.2.2 | Reveal answer | Tap a question, tap Reveal | Answer displayed, XP awarded | P0 |
| 4.2.3 | Bookmark question | Tap bookmark icon on a question | Question saved to bookmarks, icon fills | P1 |
| 4.2.4 | Already-answered question state | Reveal question, revisit | Shows previously-revealed state | P1 |
| 4.2.5 | Wrong answer tracking | Mark answer as "Didn't Know" | Question added to review queue | P1 |

---

## 5. Coding Questions

### 5.1 Category List
| # | Test Case | Steps | Expected Result | Priority |
|---|-----------|-------|-----------------|----------|
| 5.1.1 | Categories load | Navigate to `/coding-questions` | All coding categories listed (Arrays & Strings, Linked Lists, etc.) | P0 |
| 5.1.2 | Category card navigation | Tap a category | Opens `/coding-questions/:id` | P0 |

### 5.2 Problem Detail
| # | Test Case | Steps | Expected Result | Priority |
|---|-----------|-------|-----------------|----------|
| 5.2.1 | Hero section full-width | Open any coding category | Hero banner spans full screen width, no side margins | P0 |
| 5.2.2 | Problem list renders | Open category (e.g. Arrays & Strings) | All problems listed with title, difficulty badge, company chips | P0 |
| 5.2.3 | Problem title readable (light mode) | Light mode, open category | Problem titles in dark color, fully readable | P0 |
| 5.2.4 | Problem title readable (dark mode) | Dark mode, open category | Problem titles in light color, fully readable | P0 |
| 5.2.5 | Difficulty badge — EASY | Find an Easy problem | Green badge shown | P1 |
| 5.2.6 | Difficulty badge — MEDIUM | Find a Medium problem | Amber/orange badge shown | P1 |
| 5.2.7 | Difficulty badge — HARD | Find a Hard problem | Red badge shown | P1 |
| 5.2.8 | Company chips readable | Open category (light mode) | Company names (Amazon, Google, etc.) visible in dark text | P0 |
| 5.2.9 | Ad gate on problem expand | Tap a problem not yet unlocked | Reward ad shown (mobile) or confirm dialog (web) | P0 |
| 5.2.10 | Problem expands after unlock | Unlock a problem | Problem statement, code solution, complexity all shown | P0 |
| 5.2.11 | Problem Statement text visible | Expand a problem (light mode) | Description text readable in dark color | P0 |
| 5.2.12 | Code block renders | Expand a problem | Code block shown with dark background, monospace font | P0 |
| 5.2.13 | Copy button | Tap "Copy" in code header | Code copied to clipboard (or copy action triggered) | P1 |
| 5.2.14 | Time/Space Complexity labels visible | Expand a problem (light mode) | "TIME COMPLEXITY" and "SPACE COMPLEXITY" labels in purple, readable | P0 |
| 5.2.15 | Complexity values visible | Expand a problem (light mode) | O(N) / O(1) values in dark readable color | P0 |
| 5.2.16 | Collapse expanded problem | Tap expanded problem header | Problem collapses, content hidden | P1 |
| 5.2.17 | Back navigation | Tap back button | Returns to `/coding-questions` | P0 |

---

## 6. Daily Challenge

| # | Test Case | Steps | Expected Result | Priority |
|---|-----------|-------|-----------------|----------|
| 6.1 | Challenge loads 5 questions | Navigate to `/daily-challenge` (not done today) | 5 questions displayed | P0 |
| 6.2 | Reveal answer — correct | Tap reveal, tap "Got it!" | +20 XP (2× multiplier), question marked correct | P0 |
| 6.3 | Reveal answer — incorrect | Tap reveal, tap "Didn't know" | Question added to review queue, no XP | P0 |
| 6.4 | Complete all 5 questions | Answer all 5 | Score shown (X/5), total XP earned displayed | P0 |
| 6.5 | Already completed today | Complete challenge, reopen | Shows "Completed" state with countdown to next reset | P0 |
| 6.6 | Midnight reset | Wait for midnight (or simulate) | Challenge resets, fresh 5 questions available | P0 |
| 6.7 | Countdown timer accuracy | Open completed challenge | HH:MM:SS countdown ticking down to midnight | P1 |
| 6.8 | Share result | Complete challenge, tap Share | Share sheet opens with result content | P2 |
| 6.9 | Streak increments after first challenge | Complete challenge (streak was 0) | Streak becomes 1 (or increments by 1) | P0 |
| 6.10 | XP reflected in header / dashboard | Complete challenge | Dashboard XP total updated | P0 |

---

## 7. Mock Interview

| # | Test Case | Steps | Expected Result | Priority |
|---|-----------|-------|-----------------|----------|
| 7.1 | Mock interview loads | Navigate to `/mock-interview` | Interview mode initializes with timer and first question | P0 |
| 7.2 | Timer counts down | Start mock interview | Timer visible and decrementing | P0 |
| 7.3 | Navigate between questions | Tap Next / Previous | Questions advance/retreat correctly | P0 |
| 7.4 | Time up | Let timer reach 0 | Auto-submits or shows time-up state gracefully | P1 |
| 7.5 | Submit interview | Answer all questions, submit | Results / score shown | P0 |
| 7.6 | XP awarded on completion | Complete mock interview | XP added to total | P1 |

---

## 8. Assessments / Quizzes

| # | Test Case | Steps | Expected Result | Priority |
|---|-----------|-------|-----------------|----------|
| 8.1 | Assessment list loads | Navigate to `/assessments` | All available assessments listed | P0 |
| 8.2 | Start quiz | Tap an assessment | `/assessments/:id` loads with first question | P0 |
| 8.3 | Multiple-choice selection | Tap an answer option | Option highlighted/selected | P0 |
| 8.4 | Submit quiz | Answer all questions, submit | Navigates to `/assessments/:id/result` | P0 |
| 8.5 | Results page — score displayed | After submission | Score (X/Y) and breakdown shown | P0 |
| 8.6 | Achievement: First Pass (≥70%) | Score 70%+ on a quiz | "First Pass" achievement unlocked | P1 |
| 8.7 | Achievement: Perfect Score (100%) | Score 100% on a quiz | "Perfect Score" achievement unlocked | P1 |
| 8.8 | Wrong answers tracked | Get answers wrong | Questions added to review queue | P1 |

---

## 9. Study Plan

| # | Test Case | Steps | Expected Result | Priority |
|---|-----------|-------|-----------------|----------|
| 9.1 | Study plan generates | Navigate to `/study-plan` | Daily tasks listed based on user goal | P0 |
| 9.2 | Mark task as done | Tap a task checkbox | Task checked, progress updates | P0 |
| 9.3 | Plan adapts to learning goal | Change goal in settings, reopen plan | Tasks reflect new goal | P1 |
| 9.4 | All tasks completed | Complete all today's tasks | Completion state shown | P1 |
| 9.5 | Dashboard Today's Focus — Study Plan | Challenge done, plan has tasks | Study plan focus card shown on dashboard | P1 |

---

## 10. Review Queue

| # | Test Case | Steps | Expected Result | Priority |
|---|-----------|-------|-----------------|----------|
| 10.1 | Review queue populates | Get questions wrong in challenge/quiz | Questions appear in `/review` | P0 |
| 10.2 | Re-attempt question | Navigate to review, reveal a question | Question shown with chance to re-attempt | P0 |
| 10.3 | Correct re-attempt clears from queue | Mark re-attempted question correct | Question removed from review queue | P0 |
| 10.4 | Empty review queue state | No wrong answers | Empty state message shown | P1 |
| 10.5 | Review count badge | Have wrong answers, open dashboard | Review count shown in Today's Focus card description | P1 |

---

## 11. Bookmarks

| # | Test Case | Steps | Expected Result | Priority |
|---|-----------|-------|-----------------|----------|
| 11.1 | Bookmark a question | Tap bookmark icon on any question | Question saved to bookmarks | P0 |
| 11.2 | Bookmarks list shows saved items | Navigate to `/bookmarks` | All bookmarked questions listed | P0 |
| 11.3 | Remove bookmark | Tap filled bookmark icon | Question removed from bookmarks | P0 |
| 11.4 | Empty bookmarks state | No bookmarks saved | Empty state message displayed | P1 |
| 11.5 | Bookmark persists across sessions | Bookmark a question, restart app | Question still bookmarked | P0 |

---

## 12. Leaderboard

| # | Test Case | Steps | Expected Result | Priority |
|---|-----------|-------|-----------------|----------|
| 12.1 | Leaderboard loads | Navigate to `/leaderboard` | Top users displayed with rank, name, XP | P0 |
| 12.2 | Current user highlighted | Open leaderboard (signed in) | Own rank/row highlighted | P1 |
| 12.3 | Tab switching (All-time / Monthly / Weekly) | Tap each tab | List updates to respective timeframe | P1 |
| 12.4 | Top 10 achievement | Be in top 10 | "Top 10" achievement unlocked | P2 |
| 12.5 | Leaderboard updates after XP gain | Earn XP, open leaderboard | Position reflects current XP | P1 |

---

## 13. Achievements

| # | Test Case | Steps | Expected Result | Priority |
|---|-----------|-------|-----------------|----------|
| 13.1 | Achievement gallery loads | Navigate to `/achievements` | All 13 achievements listed (locked/unlocked) | P0 |
| 13.2 | Locked achievements shown with lock UI | Fresh account | Locked achievements greyed out | P1 |
| 13.3 | Unlocked achievement displayed | Unlock an achievement | Achievement card shows icon, title, unlock date | P0 |
| 13.4 | 7-Day Warrior unlock | Maintain 7-day streak | Achievement unlocked, notification/toast shown | P1 |
| 13.5 | Quick Learner unlock | Complete required number of topics | Achievement triggers | P1 |
| 13.6 | Achievements count in dashboard | Unlock achievements | Achievements shortcut chip updates (e.g. "3 / 13") | P1 |
| 13.7 | Rarity tiers displayed | View achievement gallery | Common / Rare / Epic / Legendary tiers labeled | P2 |

---

## 14. Progress Page

| # | Test Case | Steps | Expected Result | Priority |
|---|-----------|-------|-----------------|----------|
| 14.1 | Progress page loads | Navigate to `/progress` | Charts / stats displayed without crash | P0 |
| 14.2 | Overall completion percentage | Complete some topics | Percentage matches dashboard stats | P0 |
| 14.3 | Per-category progress | Complete topics in a category | Category bar/chart updates | P1 |
| 14.4 | XP history displayed | Earn XP over multiple sessions | XP progression shown | P1 |
| 14.5 | Streak statistics | Use app for multiple days | Current streak, best streak displayed | P1 |

---

## 15. Notifications

### 15.1 Permission
| # | Test Case | Steps | Expected Result | Priority |
|---|-----------|-------|-----------------|----------|
| 15.1.1 | Permission requested lazily | First XP gain after sign-in | Notification permission dialog shown (mobile only) | P0 |
| 15.1.2 | Permission not requested on cold open | Restart app without activity | No permission dialog on startup | P0 |
| 15.1.3 | Permission grant schedules reminder | Grant permission | Daily reminder scheduled for selected time | P0 |
| 15.1.4 | Permission deny — graceful handling | Deny notification permission | App continues normally, no crash | P0 |

### 15.2 Scheduling
| # | Test Case | Steps | Expected Result | Priority |
|---|-----------|-------|-----------------|----------|
| 15.2.1 | Reminder scheduled for tomorrow | Grant permission, earn XP | Notification fires at scheduled time next day | P1 |
| 15.2.2 | Context-aware message — last visited | Read a topic, check scheduled notification | Notification body references that topic title | P1 |
| 15.2.3 | Context-aware message — streak | No last-visited, streak > 1 | Notification mentions streak count | P2 |
| 15.2.4 | Default message — fresh user | No last-visited, no streak | Default "Ready to level up?" message | P2 |
| 15.2.5 | Tap notification deep-link | Tap notification with last-visited topic | App opens to that specific tutorial topic | P1 |
| 15.2.6 | Tap notification — no last-visited | Tap notification (generic) | App opens to `/tutorials` | P1 |

### 15.3 Settings
| # | Test Case | Steps | Expected Result | Priority |
|---|-----------|-------|-----------------|----------|
| 15.3.1 | Toggle notifications off | Settings → Notifications → toggle off | Existing reminder cancelled | P0 |
| 15.3.2 | Toggle notifications on | Settings → Notifications → toggle on | Permission requested (if not granted), reminder re-scheduled | P0 |
| 15.3.3 | Change reminder time | Select 8am / 12pm / 6pm / 9pm | Reminder rescheduled for new time | P1 |
| 15.3.4 | Reminder time picker hidden when disabled | Disable notifications | Time picker chips hidden | P1 |

---

## 16. Settings & Profile

| # | Test Case | Steps | Expected Result | Priority |
|---|-----------|-------|-----------------|----------|
| 16.1 | Settings page loads | Navigate to `/settings` | Account, Appearance, Goal, Notifications, About sections visible | P0 |
| 16.2 | User name and email shown | Open settings (logged in) | Correct display name and email from Firebase | P0 |
| 16.3 | Avatar initials generated | Open settings | Initials avatar shown if no profile photo | P1 |
| 16.4 | Dark mode toggle | Toggle dark mode | Theme switches immediately, persisted on restart | P0 |
| 16.5 | Light mode toggle | Toggle light mode | Theme switches immediately, persisted on restart | P0 |
| 16.6 | Goal change | Tap different goal option | Goal updates in UI and persists | P1 |
| 16.7 | App version displayed | Open settings, scroll to About | v1.3.0 (or current version) shown | P2 |
| 16.8 | Privacy Policy link | Tap "Privacy Policy" | Opens external browser to javaiq.app/privacy | P2 |
| 16.9 | About JavaIQ link | Tap "About JavaIQ" | Navigates to `/about` | P2 |
| 16.10 | Sign out confirmation dialog | Tap Sign Out | Confirmation dialog shown before logout | P0 |

---

## 17. Ad Gate & Monetization

| # | Test Case | Steps | Expected Result | Priority |
|---|-----------|-------|-----------------|----------|
| 17.1 | Reward ad — first unlock | Tap a locked topic/problem | Reward ad plays (mobile) or confirm dialog (web) | P0 |
| 17.2 | Content unlocked after reward ad | Watch full reward ad, grant reward | Content accessible, lock icon removed | P0 |
| 17.3 | Reward ad declined — no unlock | Dismiss reward ad without earning | Content stays locked, navigated back | P0 |
| 17.4 | Interstitial ad — return visit | Unlock a topic, visit again | Interstitial ad shown (not reward) | P1 |
| 17.5 | Interstitial frequency cap | Navigate multiple times rapidly | Interstitial not shown within 5-minute cooldown | P1 |
| 17.6 | Interstitial after topic complete | Tap "Mark Complete" | Interstitial may show (post-completion hook) | P1 |
| 17.7 | Banner ad visible (mobile) | Open any content page | Banner ad shown at bottom | P1 |
| 17.8 | Banner ad height offset | Banner ad loads | Page content shifted up to avoid overlap | P1 |
| 17.9 | Unlocked items persist session | Unlock topic, navigate away and back | Topic still unlocked within same session | P0 |
| 17.10 | Visited items persist across sessions | Unlock topic, restart app | Second visit still shows interstitial (not reward) | P1 |
| 17.11 | No ads on web (graceful skip) | Open in browser | Ad calls silently skipped, no errors | P0 |

---

## 18. Gamification System

### 18.1 XP & Levels
| # | Test Case | Steps | Expected Result | Priority |
|---|-----------|-------|-----------------|----------|
| 18.1.1 | XP awarded on reveal | Reveal an interview question | +10 XP awarded, header XP updates | P0 |
| 18.1.2 | XP awarded on topic complete | Mark a tutorial topic complete | +2 XP awarded | P0 |
| 18.1.3 | XP awarded on QOTD answer | Answer Question of the Day | +15 XP awarded | P0 |
| 18.1.4 | XP awarded on daily challenge correct | Get answer correct in challenge | +20 XP (2× multiplier) | P0 |
| 18.1.5 | Level up when XP threshold reached | Accumulate XP to cross level threshold | Level increments, progress bar resets | P1 |
| 18.1.6 | XP persists across sessions | Earn XP, restart app | XP total unchanged | P0 |
| 18.1.7 | XP synced to Firestore | Earn XP (logged in) | `gamification/{uid}` updated in Firestore | P1 |

### 18.2 Streaks
| # | Test Case | Steps | Expected Result | Priority |
|---|-----------|-------|-----------------|----------|
| 18.2.1 | Streak increments on first daily activity | Open app, earn first XP of the day | Streak increments by 1 | P0 |
| 18.2.2 | Streak does not increment twice same day | Earn XP multiple times same day | Streak stays the same (only increments once per day) | P0 |
| 18.2.3 | Streak resets after missed day | Skip a day, then open app | Streak resets to 1 (or 0) | P0 |
| 18.2.4 | Best streak preserved | Reach streak of 10, then reset | Best streak remains 10 | P1 |
| 18.2.5 | Streak milestone — 7-Day Warrior | Reach 7-day streak | Milestone achievement unlocked | P1 |
| 18.2.6 | Streak card progress bar | View streak card | Milestone progress bar fills proportionally | P1 |

---

## 19. Dark / Light Mode

| # | Test Case | Steps | Expected Result | Priority |
|---|-----------|-------|-----------------|----------|
| 19.1 | Dashboard — light mode | Switch to light mode, open dashboard | All text readable, no invisible text on white/light cards | P0 |
| 19.2 | Dashboard — dark mode | Switch to dark mode, open dashboard | All text readable, card backgrounds are dark | P0 |
| 19.3 | QOTD card — dark mode background | Dark mode, open dashboard | QOTD card has dark background (`#0d1a10`) not white | P0 |
| 19.4 | Daily Goal card — dark mode background | Dark mode, open dashboard | Goal card has dark background | P0 |
| 19.5 | Continue Learning card — dark mode | Dark mode, open dashboard | Card has dark background, all text readable | P0 |
| 19.6 | Coding questions — light mode card text | Light mode, open coding category | Problem titles, company chips, descriptions all readable | P0 |
| 19.7 | Coding questions — dark mode card text | Dark mode, open coding category | All text light and readable on dark backgrounds | P0 |
| 19.8 | Coding questions hero — always dark | Light mode, open coding category | Hero banner is dark green (not light/white) | P0 |
| 19.9 | Tutorial topic — light mode | Light mode, open a tutorial topic | Section headings, prose, code readable | P0 |
| 19.10 | Tutorial topic — dark mode | Dark mode, open a tutorial topic | All text readable on dark background | P0 |
| 19.11 | Theme persists on restart | Set dark mode, restart app | Opens in dark mode | P0 |
| 19.12 | System preference respected on first launch | No saved preference, device in dark mode | App opens in dark mode | P1 |
| 19.13 | Expanded problem details — light mode | Light mode, expand a coding problem | Problem statement, complexity values all in dark readable colors | P0 |
| 19.14 | Expanded problem details — dark mode | Dark mode, expand a coding problem | Problem statement, complexity values in light readable colors | P0 |

---

## 20. Navigation & Routing

| # | Test Case | Steps | Expected Result | Priority |
|---|-----------|-------|-----------------|----------|
| 20.1 | Bottom navigation bar — all tabs | Tap each bottom nav tab | Correct page loads for each | P0 |
| 20.2 | Back button — Android | Navigate deep, tap Android back | Previous page in stack loaded | P0 |
| 20.3 | Back button — ion-back-button | Navigate to detail page, tap back button | Returns to list/parent page | P0 |
| 20.4 | Deep link from notification | Tap notification with topic deep-link | App opens at correct tutorial topic | P1 |
| 20.5 | Side menu navigation | Open side menu, tap a nav item | Correct page loads, menu closes | P1 |
| 20.6 | Root redirect | Navigate to `/` | Redirected to `/dashboard` | P1 |
| 20.7 | Unknown route | Navigate to `/nonexistent-route` | Handled gracefully (redirect or 404 state) | P2 |

---

## 21. Offline & Connectivity

| # | Test Case | Steps | Expected Result | Priority |
|---|-----------|-------|-----------------|----------|
| 21.1 | App opens offline | Disable network, open app | App loads using cached data, offline indicator shown | P1 |
| 21.2 | Earning XP offline | Disable network, complete a challenge | XP updates locally; syncs to Firestore when reconnected | P1 |
| 21.3 | Reconnect sync | Go offline, earn XP, reconnect | Firestore updated with locally-earned XP | P1 |
| 21.4 | Content loads offline | Cache tutorials, go offline, open tutorial | Content renders from cache | P2 |
| 21.5 | Offline toast/banner | Go offline | Connectivity notice shown | P2 |

---

## 22. Performance

| # | Test Case | Steps | Expected Result | Priority |
|---|-----------|-------|-----------------|----------|
| 22.1 | Dashboard initial load time | Cold launch app | Dashboard interactive within 3 seconds | P0 |
| 22.2 | Tutorial topic load (lazy) | Tap a topic for first time | Topic loads within 2 seconds (lazy chunk) | P1 |
| 22.3 | Scroll performance — long topic | Open a long tutorial topic | Scrolling at 60fps, no jank | P1 |
| 22.4 | Coding category scroll | Open category with many problems | List scrolls smoothly | P1 |
| 22.5 | Memory — multiple topic navigations | Navigate through 10+ topics | No significant memory growth, no crash | P1 |
| 22.6 | Animation smoothness | Open expanded card, navigate transitions | Animations complete at 60fps | P2 |

---

## Test Environment Matrix

| Environment | Platform | Priority |
|---|---|---|
| iOS 16+ (real device) | Native Capacitor | P0 |
| Android 10+ (real device) | Native Capacitor | P0 |
| iOS Simulator | Capacitor | P1 |
| Android Emulator | Capacitor | P1 |
| Chrome (macOS) | Web/PWA | P1 |
| Safari (macOS) | Web/PWA | P2 |
| Chrome (Android) | Web/PWA | P2 |

---

## Bug Severity Definitions

| Severity | Definition |
|---|---|
| **Critical** | App crash, data loss, auth failure, core flow broken |
| **High** | Feature broken, invisible text, ad gate not working |
| **Medium** | UI glitch, wrong color in one mode, minor logic error |
| **Low** | Cosmetic issue, minor alignment, typo |

---

## Test Priority Definitions

| Priority | Definition |
|---|---|
| **P0** | Must pass before any release |
| **P1** | Should pass; fix before release if feasible |
| **P2** | Nice to have; can defer to next release |

---

*Last updated: 2026-03-16*
