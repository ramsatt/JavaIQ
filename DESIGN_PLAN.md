# JavaIQ — Enterprise-Level UI/UX Design Plan

> Deep analysis of every screen with actionable redesign recommendations.
> Current state assessed from source code as of March 2026.

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Global Design System](#global-design-system)
3. [Screen-by-Screen Analysis](#screen-by-screen-analysis)
   - [01 Onboarding](#01-onboarding)
   - [02 Dashboard (Home)](#02-dashboard-home)
   - [03 Challenge (Game Screen)](#03-challenge-game-screen)
   - [04 Daily Challenge](#04-daily-challenge)
   - [05 Leaderboard](#05-leaderboard)
   - [06 Achievement Gallery](#06-achievement-gallery)
   - [07 Settings](#07-settings)
   - [08 Assessments List](#08-assessments-list)
   - [09 Tutorials List & Detail](#09-tutorials-list--detail)
   - [10 Interview Questions](#10-interview-questions)
   - [11 Coding Questions](#11-coding-questions)
   - [12 Mock Interview](#12-mock-interview)
   - [13 Study Plan](#13-study-plan)
   - [14 Progress](#14-progress)
   - [15 Review Queue](#15-review-queue)
   - [16 Bookmarks](#16-bookmarks)
   - [17 Profile / Account](#17-profile--account)
4. [Navigation Architecture](#navigation-architecture)
5. [Accessibility (A11y) Standards](#accessibility-a11y-standards)
6. [Motion & Animation System](#motion--animation-system)
7. [Implementation Priority](#implementation-priority)

---

## Executive Summary

JavaIQ is a gamified Java interview-prep mobile app (Ionic/Angular/Capacitor). The current UI shows strong feature breadth but suffers from several enterprise-level problems:

| Problem | Impact |
|---|---|
| No shared design token system — colors hardcoded in 20+ files | Every color change requires touching dozens of files |
| Inconsistent navigation patterns — 3 different back-button styles | Users disoriented moving between screens |
| No persistent bottom navigation | No at-a-glance sense of "where am I" |
| Font sizes as small as 0.55rem (< 8px on most devices) | WCAG AA failure, poor legibility |
| Emojis as primary UI icons | Non-scalable, inaccessible, platform-inconsistent |
| No skeleton screens — only spinners | Feels slower than it is |
| Screens have completely different design languages | App feels like 5 different products |
| Dashboard is one massive scroll — no hierarchy | Users miss key actions |
| Zero empty states and zero error states designed | App feels broken during failures |
| Challenge screen uses a different dark green theme from the rest | Jarring context switch |

---

## Global Design System

Before touching individual screens, establish a shared foundation.

### Color Tokens

```
// Primary brand
--color-brand-primary:    #10B981   (Emerald-500)
--color-brand-secondary:  #059669   (Emerald-600)
--color-brand-glow:       rgba(16,185,129,0.18)

// Semantic
--color-xp:               #F59E0B   (Amber-400)
--color-xp-glow:          rgba(245,158,11,0.18)
--color-danger:           #EF4444
--color-warning:          #F97316
--color-success:          #10B981
--color-info:             #38BDF8

// Rarity
--color-rarity-common:    #6B7280
--color-rarity-rare:      #3B82F6
--color-rarity-epic:      #8B5CF6
--color-rarity-legendary: #D4A853

// Surfaces (Dark mode — default)
--surface-base:           #080F0A   (app background)
--surface-card:           rgba(255,255,255,0.04)
--surface-card-hover:     rgba(255,255,255,0.07)
--surface-elevated:       #111A13
--surface-sheet:          #162018

// Borders
--border-subtle:          rgba(255,255,255,0.07)
--border-default:         rgba(255,255,255,0.11)
--border-strong:          rgba(255,255,255,0.20)
--border-brand:           rgba(16,185,129,0.40)

// Text
--text-primary:           #E8F0EA
--text-secondary:         #94A3B8
--text-muted:             #4B5E55
--text-inverse:           #0A0F0B
```

### Typography Scale

All font sizes below are **minimum** sizes. Use `clamp()` for responsive scaling.

```
--text-xs:    0.75rem   (12px) — labels, chips, metadata
--text-sm:    0.875rem  (14px) — body, descriptions
--text-base:  1rem      (16px) — default body
--text-lg:    1.125rem  (18px) — card titles
--text-xl:    1.25rem   (20px) — section titles
--text-2xl:   1.5rem    (24px) — page titles
--text-3xl:   1.875rem  (30px) — hero numbers
--text-4xl:   2.25rem   (36px) — hero headings
```

**Current problem**: Many labels are at 0.55rem–0.65rem. Minimum legible size is 0.75rem (12px). Fix immediately.

### Spacing Scale

```
--space-1:  4px
--space-2:  8px
--space-3:  12px
--space-4:  16px
--space-5:  20px
--space-6:  24px
--space-8:  32px
--space-10: 40px
--space-12: 48px
--space-16: 64px
```

### Icon System

Replace all emoji usage with a single icon library (Phosphor Icons or keep Bootstrap Icons). Emojis for decorative/celebratory moments only (result screens, achievement unlocks).

### Elevation System

```
Elevation 0:  No shadow — flat, inline elements
Elevation 1:  0 1px 3px rgba(0,0,0,0.3)  — cards at rest
Elevation 2:  0 4px 16px rgba(0,0,0,0.4) — cards hovered, modals
Elevation 3:  0 8px 32px rgba(0,0,0,0.5) — floating sheets, drawers
```

### Border Radius Scale

```
--radius-sm:   8px   — chips, badges
--radius-md:   12px  — buttons, inputs
--radius-lg:   16px  — cards
--radius-xl:   20px  — large cards, panels
--radius-2xl:  24px  — sheets, modals
--radius-full: 9999px — pills
```

---

## Screen-by-Screen Analysis

---

### 01 Onboarding

**Current State**
- 4 slides with gradient backgrounds + emoji + title + body + pills
- Goal selection 2x2 grid
- Dots navigation + Skip/Next buttons

**Problems**
- Slides use 4 different gradient color schemes — inconsistent
- `ob-emoji` at 4rem is the only visual focal point — weak for enterprise feel
- "Skip" appears before users see the value proposition — kills conversion
- Goal cards have no progress indicator after selection (just border color change)
- No swipe gesture — only tap navigation
- The "Skip for now" on goal screen silently skips without confirming intent

**Enterprise Redesign**

```
Layout: Full-bleed illustrated slides (consider Lottie animations instead of static emoji)

Slide structure (each slide):
  [Top 55%]  Hero illustration / animation — full bleed, no padding
  [Bottom 45%] White/dark surface rising from bottom (card sheet)
               - Category badge (pill)
               - Headline (text-4xl, bold)
               - Body (text-sm, muted)
               - Feature pills row

Progress: Segmented bar at top (not dots) — shows "3 of 4" clearly
          Bar fills progressively, brand green

Navigation:
  - Remove "Skip" from slides 1-3. Only show on slide 4 as ghost text
  - Primary CTA: large full-width button pinned to bottom, safe area aware
  - Swipe gesture enabled (touch/drag left-right)

Goal Screen:
  - Show as a bottom sheet that slides up over the last slide
  - Cards: full-width rows (not 2x2 grid) with radio selection pattern
    [emoji icon] [label] [description]  [radio indicator]
  - Animate selection with checkmark + border pulse
  - "Start Learning" button only enables after selection
  - Remove "Skip for now" — require goal selection (can be changed in Settings)

Accessibility: All slides must have aria-live announcements on slide change
```

---

### 02 Dashboard (Home)

**Current State**
One long scroll containing: header, hero banner (XP/level), today's focus card, 5 quick action tiles, learning path (timeline list), achievements row, streak + goal side-by-side, QOTD card, continue learning card.

**Problems**
- 8+ distinct sections in one scroll — cognitive overload
- Quick action tiles use small text with emoji icons, cramped at 5 in a row
- Learning path as a full vertical timeline takes enormous vertical space
- Streak card + daily goal side-by-side creates very small card faces
- No visual hierarchy — everything feels equal importance
- `overallPct` computed value exists but is not prominently displayed
- Avatar tap = logout — extremely dangerous UX (zero confirmation)
- Header "wordmark + streak badge + search + avatar" is crowded
- No pull-to-refresh
- Greeting only uses first name but layout allows "Welcome back, Learner" fallback which looks unpolished

**Enterprise Redesign**

```
HEADER (fixed, 56px height + safe area):
  Left:  [Menu icon]  [JavaIQ PRO wordmark]
  Right: [Search icon]  [Streak badge - fire + number]  [Avatar]

  - Avatar tap -> Profile sheet (not logout directly)
  - Streak badge animates (pulse) if streak > 0
  - Header uses blur/frosted glass effect on scroll

HERO SECTION (scrolls away):
  Full-width card with dark gradient
  Row 1: "Good morning, Sathish" (time-aware greeting)
  Row 2: Level badge + XP bar (full width, prominent)
          [Lv. 12]  [━━━━━━━━━━░░░░]  [1,240 / 1,500 XP]
  Row 3: 3 micro-stats in a row:
          [Today streak: 7] | [Questions: 342] | [Rank: #23]

TODAY'S FOCUS (non-negotiable — always visible):
  Single highlighted card with colored left border
  - Icon + category label + action description + CTA arrow
  - If completed: show green "All done" state with confetti micro-animation
  - Priority: Daily Challenge > Review Queue > Study Plan > Explore

QUICK ACTIONS (horizontal scroll, 5 tiles):
  Each tile: 64x64px  [icon 24px]  [label 11px]
  - Mock Interview | Study Plan | Progress | Saved | Leaderboard
  - Add "Review" tile if review count > 0 (dynamic)
  - Use proper icons, not emoji

LEARNING PATH (collapsed/summary):
  Show only: current module + 2 upcoming modules
  Each module row: [colored dot]  [name]  [progress bar]  [% or locked]
  "View All" link expands to full timeline or navigates to dedicated screen

  Rationale: The full timeline takes 60-70% of the current dashboard scroll.
  Pushing it to its own screen recovers critical above-fold real estate.

DAILY WIDGETS (bottom of scroll):
  Horizontal 2-column:
    Left:  Streak card (days + flame animation)
    Right: Daily Goal progress (ring chart)
  Then: QOTD card (collapsible — tap to expand)
  Then: Continue Learning (last viewed content)

ACHIEVEMENTS (inline row, not dedicated section):
  Small horizontal strip: [medal] X/Y unlocked [→]
  Tapping goes to Achievement Gallery

OVERALL:
  Remove: section duplication (both streak widget and streak badge in header)
  Add: Pull-to-refresh
  Add: Skeleton screens for all data-dependent sections
  Add: Empty states for new users (no progress data yet)
```

---

### 03 Challenge (Game Screen)

**Current State**
- HUD: back/quit + question counter + combo badge + XP earned
- Timer bar (red at < 30%)
- Question card (category badge + text + optional code block)
- Answer reveal + Got It / Needs Review rating
- Result screen: stars + XP breakdown + level progress + share + continue

**Problems**
- The "glass-panel" design language is completely different from the rest of the app
- No visual indication of which category is being practiced in the HUD
- Combo badge only appears in center HUD when combo > 1 — easy to miss
- Code block uses a pre/code element with no syntax highlighting or copy button
- "Got It / Needs Review" buttons are important decisions — they're too similarly styled
- Result screen "Continue" button uses `quitGame()` method — confusing naming
- Stars earned (1-3) have no explanation of what they mean
- No animation on correct/incorrect answer
- Timer bar uses simple width transition — no urgency pulse at low time

**Enterprise Redesign**

```
GAME HUD:
  Left:   [X quit] [Category pill — e.g., "Core Java"]
  Center: [Question 3/15 — shown as segmented dots]
  Right:  [Streak flame + combo] [XP earned]

  - Quit requires confirmation modal (prevent accidental exits)
  - Category pill uses category color from design system

TIMER BAR:
  - Full-width, 4px height, at very top of content (below HUD)
  - Green -> Amber -> Red color transition (not just red at 30%)
  - Pulse animation when under 10 seconds
  - Optional: vibration haptic at 10s warning (Capacitor Haptics)

QUESTION CARD:
  - Remove category badge from card (it's in HUD now — avoid duplication)
  - Question text: text-lg minimum, line-height 1.6
  - Code block: syntax highlighted (Prism.js or Shiki), scrollable horizontally,
    "Copy" button top-right, monospace font (JetBrains Mono or Fira Code)
  - Card uses elevation-1 shadow, subtle left border in category color
  - Card entry: slide-up animation (not just appear)

ANSWER REVEAL:
  - "Show Answer" CTA: large, full-width, brand green
  - When answer reveals, card expands with smooth height animation
  - Answer text section: light green tinted background, left border
  - "Asked at Google, Amazon" metadata: styled as company chips with logos

RATING BUTTONS (Got It / Needs Review):
  - Stack vertically (not side by side) for larger tap targets on mobile
  - "Got It!": solid green, full width, checkmark icon, prominent
  - "Needs Review": outlined red, full width, X icon
  - Add subtle haptic feedback on tap (Capacitor Haptics)
  - Swipe gestures: swipe right = Got It, swipe left = Needs Review
    (like Duolingo/Tinder pattern — natural for mobile)

XP POPUP:
  - Current popup is a small div — make it a prominent floating badge
  - Animate: fade-up + scale-in from the rating button area
  - Show combo multiplier with visual breakdown: "+10 base × 2x combo = +20 XP"

RESULT SCREEN:
  - Confetti particle burst on 3-star result (use canvas-confetti library)
  - Stars animate in one by one with scale + glow
  - XP summary table: clean rows with animated count-up numbers
  - Level bar: show before/after positions with animated fill
  - Primary CTA: "Continue Learning" (not "Continue" — be explicit)
  - Secondary CTAs: "Try Again" | "Share Result"
  - If course complete: full-screen celebration moment before showing result card
    (3 seconds of confetti + trophy animation)

STAR EXPLANATION:
  Add small tooltip/info:
    1 star = < 50% correct
    2 stars = 50-89% correct
    3 stars = 90%+ correct
```

---

### 04 Daily Challenge

**Current State**
- Simple linear flow: date badge + progress ring + question card + reveal + vote
- Result card: score + XP + streak + share
- "Already done" state with countdown

**Problems**
- Design language is inconsistent with Challenge screen (different amber vs general dark theme)
- No visual distinction between "Daily Challenge" and regular "Challenge" mode
- Progress indicator is just "1/5" text — not visual enough
- "Already done" card is centered in page with lots of dead space
- Countdown timer only shows hours/minutes, not updating in real-time
- No celebration animation on completion
- Back button text says "defaultHref='/tutorials'" — should go to dashboard

**Enterprise Redesign**

```
IDENTITY:
  Daily Challenge gets a consistent amber/gold theme throughout:
    - Top gradient band: dark amber (#92400E -> #1C0A00)
    - Badge: fire icon + "Daily Challenge" + date
    - Primary color: #F59E0B (Amber) consistently

HEADER SECTION:
  Full-width colored header (not toolbar):
    [fire icon] DAILY CHALLENGE  |  2x XP BONUS
    Today: Thursday, March 5
    Resets in: 14:22:07 (real-time countdown, prominent)

PROGRESS:
  - 5 dot indicators (filled/empty/current) at top of content area
  - Current dot pulses
  - Completed dots: checkmark icon inside

QUESTION CARD:
  - Same design as Challenge screen for consistency
  - Amber left border instead of category color
  - "Bonus XP" chip on the card: "+20 XP if correct"

ALREADY DONE STATE:
  - Full-screen state (not a card in center)
  - Large fire icon + streak number prominently displayed
  - "You completed today's challenge!" headline
  - Streak calendar (last 7 days shown as colored dots)
  - Real-time countdown to next challenge (HH:MM:SS, updates every second)
  - Action: "Review Missed Questions" | "Back to Learning"

COMPLETION STATE:
  - Score ring chart (circular progress, amber colored)
  - Score: "4/5" in center of ring
  - XP earned with 2x bonus callout
  - Streak continuation message
  - Calendar heatmap (7 days) below — today's dot just turned amber
  - Share result as image (branded card with score + streak)
```

---

### 05 Leaderboard

**Current State**
- Period tabs (All Time / This Month / This Week)
- Podium (top 3) with bars + avatars
- List (rank 4+) with avatar + name + XP
- "Your rank" callout at bottom if outside top 20

**Problems**
- Inline styles in component (not using shared CSS classes/variables)
- Podium bars are decorative but the bar heights don't feel proportional
- User's own rank shown at bottom — user has to scroll all the way down
- No XP trend indicator (up/down arrows showing rank change)
- No filtering by friends or region (future feature gap)
- Podium avatars at 52px/62px feel small for a celebration moment
- Loading state is just a spinner — no skeleton layout
- "Global Java Champions" subtitle feels generic

**Enterprise Redesign**

```
HEADER:
  [Back] Leaderboard
         "Top Java Developers This Week"  (dynamic subtitle based on period)

PERIOD SELECTOR:
  - Segmented control (not pills) — 3 equal segments
  - Smooth slide transition between periods
  - Show brief animation when switching periods (list fades + slides)

PODIUM (redesigned):
  - Much larger avatars: #1 = 88px, #2 = 72px, #3 = 64px
  - Gold ring on #1 avatar with glow effect
  - Podium bars: animated height growth on load
  - Bar heights reflect actual XP ratio (proportional, not fixed 60/44/32)
  - Crown icon above #1 with particle sparkle
  - Name truncation: max 10 chars, show full on tap (tooltip)
  - XP formatted: "12.4K XP" for large numbers

MY POSITION (always visible — sticky at bottom):
  Sticky bar that appears if user is not in visible list:
  [Your rank #47]  [Avatar]  [Name]  [12,340 XP]  [-> View in list]

  If user IS visible in list, highlight their row with gold left border +
  "You" chip (current implementation is good)

LIST (rank 4+):
  - Skeleton: 8 placeholder rows on load (gray shimmer)
  - Row: [rank] [avatar] [name + you chip] [XP] [delta badge: +2 / -5 / =]
  - Delta badge: green up arrow, red down arrow, or dash for no change
  - Tapping a row: shows mini profile sheet (name, avatar, XP, rank, joined date)

FILTERS (future phase):
  - "Friends" tab (requires social graph)
  - "Company" tab if user has set company in profile
```

---

### 06 Achievement Gallery

**Current State**
- 2-column grid of badge cards
- Each card: icon + rarity label + name + description + unlock date + share button
- Locked badges: grayscale + 50% opacity + lock overlay
- Green header with overall progress bar

**Problems**
- 2-column grid makes locked badges look like "half the app is broken"
- No rarity section groupings (common/rare/epic/legendary mixed)
- Share button is a small button at bottom of card — hard to reach
- Progress bar at top is 4px — nearly invisible
- No recent achievement highlight (most recently unlocked)
- Locked badges show no progress toward unlocking ("Answer 50 questions: 23/50")

**Enterprise Redesign**

```
HEADER:
  [Back] My Achievements
         [Progress ring: 12/34 unlocked, 35%]

  Recent unlock: if unlocked in last 7 days, show hero card at top
    "Recently Unlocked: Java Warrior  (3 days ago)"
    Large icon + gold glow + rarity label

FILTER TABS:
  All | Unlocked (12) | Locked (22)
  OR
  All | Common | Rare | Epic | Legendary

SECTION HEADERS (grouped by rarity):
  LEGENDARY (2 unlocked, 1 locked)
  EPIC (3 unlocked, 2 locked)
  RARE (5 unlocked, ...)
  COMMON (...)

BADGE CARD (redesigned — full width, not 2-column):
  [icon wrap 56px]  [name + rarity chip]                [share / locked]
                    [description]
                    [progress bar if locked: 23/50 answered]
                    [unlock date if unlocked]

  Unlocked card: solid border in rarity color, icon glows
  Locked card: desaturated but shows progress toward unlock

  Full-width cards are more readable and allow space for progress bars

SHARE:
  Tap card -> expands to full detail sheet
  Share from sheet with branded card image (not just text)

UNLOCK ANIMATION:
  When user navigates here right after unlocking:
  - Animate the unlocked card with scale + color transition
  - Play unlock sound (optional, respects system silent mode)
```

---

### 07 Settings

**Current State**
- Account section (avatar initial + name + email)
- Dark Mode toggle
- Learning Goal picker (2x2 grid)
- Daily Reminder toggle + time picker chips
- Privacy Policy + About links + version
- Sign Out button

**Problems**
- Account avatar shows only first letter of name — not photo even when signed in with Google (should show photo)
- No account management options (edit display name, delete account)
- Version "1.3.0" is hardcoded in template — not dynamic
- "About JavaIQ" duplicates what could be in About screen
- No subscription/PRO management section
- Notification time picker only offers 4 options — too limiting
- No data export or reset progress option

**Enterprise Redesign**

```
ACCOUNT SECTION (expanded):
  [Google photo or initial avatar]
  [Display Name]  [email]  [edit icon]

  Row: "PRO Member" badge + expiry date (or "Upgrade to PRO" CTA)

PROFILE:
  - Tap avatar: photo options (change, remove)
  - Tap name: edit display name inline
  - Show: Member since date, goal, total XP, total questions answered (read-only stats)

LEARNING:
  - Goal: full-width selector (not in-card 2x2 grid)
  - Daily target: questions per day slider (5 / 10 / 15 / 20)
  - Study mode: Casual / Standard / Intense (affects daily challenge count)

NOTIFICATIONS:
  - Toggle + custom time (native time picker, not 4 chips)
  - Streak reminder toggle (separate from daily reminder)
  - Achievement unlocked notifications toggle

APPEARANCE:
  - Dark / Light / System toggle (3 options, not binary)

DATA & PRIVACY:
  - Export my data (downloads JSON)
  - Reset progress (with confirmation dialog)
  - Delete account (with confirmation + email verification)
  - Privacy Policy | Terms of Service

ABOUT:
  - App version (dynamic, from environment)
  - Rate the App (native store review)
  - Share JavaIQ (referral link)
  - Contact Support

SIGN OUT:
  - Keep at very bottom
  - Confirmation modal must mention "your progress is synced to cloud"
```

---

### 08 Assessments List

**Current State**
- Hero section with glow orbs + badge + title + stats (quizzes/questions/total time)
- Difficulty filter pills
- Card list with icon + title + category + difficulty badge + description + meta chips

**Problems**
- "Start Quiz" hint only appears on hover — mobile users never see it
- No indicator of whether user has already taken a quiz or their best score
- Filter pills have inconsistent active state styling (CSS custom property with color-mix — not supported everywhere)
- Hero stats are static/hardcoded (not dynamic from data)
- Cards have 3px accent top border — too subtle
- Difficulty badges use very small text (0.55rem)

**Enterprise Redesign**

```
HERO:
  - Keep the dark gradient hero
  - Add: "Your Average Score: 78%" if assessments completed
  - Stats: animate count-up on scroll-into-view

COMPLETED STATE INDICATORS:
  Each card shows one of:
  - [Not taken] — default card with "Start" CTA
  - [Score: 85%] — green chip at top-right of card + "Retake" CTA
  - [In Progress] — amber chip + "Continue" CTA (if partial data saved)

CARD REDESIGN:
  - Remove 3px top accent, use colored icon background as the accent
  - Difficulty badge: minimum 12px text, color-coded background (current is good, just too small)
  - Time estimate: show "~15 min" (with tilde for approximate)
  - "Start Quiz" is a full-width button at bottom of card (visible, not hover-only)
  - Card shows: Title | Category | Difficulty badge | Q count | Time | Score (if taken) | CTA

FILTER:
  - Segmented control instead of pills (more consistent with other screens)
  - Add "Completed" filter to show only taken assessments

SORT:
  - Add sort option: Difficulty | Duration | Category | Recently Added
```

---

### 09 Tutorials List & Detail

**Current State**
- Tutorial list with course cards (Spring Boot, Core Java, etc.)
- Tutorial detail: chapter list
- Topic pages: content components with explanations + code blocks

**Problems** (inferred from routes and code structure)
- Tutorial topic components are individual TypeScript files — content not CMS-driven
- No reading progress within a topic (no scroll position saved)
- No estimated reading time on topic cards
- Chapter completion is tracked but not visually shown on the list screen
- No search within a tutorial

**Enterprise Redesign**

```
TUTORIAL LIST:
  - Course cards with: cover image/gradient | category label | title |
    chapter count | estimated total time | your progress (%)
  - "New" badge on recently added courses
  - Filter: All | In Progress | Completed | Not Started

TUTORIAL DETAIL (chapter list):
  - Course overview section: description + what you'll learn (3-4 bullets)
  - Chapter list: [check icon if done] [chapter name] [~5 min read]
  - Sticky "Continue Learning" button: jumps to next incomplete chapter
  - Progress: "8/14 chapters complete" with visual bar

TOPIC / CONTENT PAGE:
  - Reading progress bar at top (like Medium)
  - Estimated reading time in header ("8 min read")
  - Code blocks: syntax highlighted, copy button, filename label
  - "Mark as Read" explicit button at bottom (in addition to auto-tracking)
  - Previous / Next chapter navigation (bottom of page)
  - Bookmark icon in header
  - Offline note: "Available offline" indicator
```

---

### 10 Interview Questions

**Current State**
- Category list (iq-list)
- Questions within category (iq-category)
- Question detail (iq-detail)

**Problems** (inferred from routes)
- 3 levels of navigation for a single question — high tap cost
- No quick-answer preview on list items
- No difficulty or asked-at metadata on list view

**Enterprise Redesign**

```
IQ LIST (category level):
  - Category cards with: icon | name | question count | your progress

IQ CATEGORY:
  - Section header: category name + progress bar + question count
  - List item shows: [question text (truncated 2 lines)] [difficulty chip] [bookmark icon]
  - Filter bar: All | Not seen | Bookmarked | Answered
  - Tapping a question: slides in a bottom sheet (not full navigation)
    Bottom sheet shows: full question + answer (with expand)
    Sheet actions: [Got It] [Review Later] [Bookmark] [Navigate Full Screen]

IQ DETAIL (full screen):
  - Question text (large, text-lg)
  - Company chips ("Asked at: Google, Amazon") with real company logos
  - Answer accordion (tap to expand)
  - Related questions section (3 cards at bottom)
  - Swipe left/right to navigate prev/next question in category
```

---

### 11 Coding Questions

**Current State**
- List of LeetCode-style coding problems
- Detail with problem description + code solution

**Problems**
- Code editor is likely a static display — no interactive execution
- No difficulty color coding visible from list
- No filter by topic (arrays, strings, trees, etc.)

**Enterprise Redesign**

```
LIST:
  - Difficulty color indicator (left border or dot): Easy=green, Medium=amber, Hard=red
  - Tags: [Array] [Two Pointers] [HashMap] visible as chips
  - Completion checkmark if solved
  - Filter: Difficulty | Topic tag | Status (solved/unsolved)

DETAIL:
  - Split view if screen width allows (> 600px): problem left, code right
  - Code view: syntax highlighted, monospace, scrollable
  - "Hint" button: reveals hints progressively (1 of 3)
  - "Solution" button: full solution with explanation + complexity analysis
  - "Similar Problems" section at bottom
  - Copy code button
```

---

### 12 Mock Interview

**Current State**
- Route exists, component exists but not analyzed in detail

**Enterprise Redesign**

```
ENTRY SCREEN:
  - Interview type selector: Technical | Behavioral | Mixed
  - Duration: 15 min | 30 min | 45 min
  - Difficulty: Junior | Mid-level | Senior | Staff
  - Topic focus: Core Java | Spring Boot | System Design | Algorithms

INTERVIEW SCREEN:
  - Interviewer avatar (illustrated, not real photo)
  - Questions delivered one at a time (not all shown upfront)
  - Timer: countdown per question + session total
  - "Think time" buffer: 30 seconds before answer expected
  - Self-rating after each answer: 1-5 stars

END SCREEN:
  - Score breakdown by category
  - Weak areas highlighted
  - "Areas to improve" linked to relevant tutorial topics
  - Save session to history

HISTORY:
  - List of past mock interviews
  - Score trend chart (line graph over time)
```

---

### 13 Study Plan

**Current State**
- Route exists, service exists (study-plan.service.ts with todayTasks())
- Dashboard references study plan tasks

**Enterprise Redesign**

```
PLAN OVERVIEW:
  - Goal-based plan (set during onboarding)
  - Week view: Mon-Sun with tasks per day
  - Today is highlighted and expanded by default
  - Weekly completion ring chart at top

TASK ITEM:
  - Type icon: [book = tutorial] [lightning = challenge] [quiz icon = assessment]
  - Task name + estimated time
  - Status: [not started] | [in progress] | [completed]
  - Tap: deep link directly to the task content

CUSTOMIZATION:
  - Drag-to-reorder tasks within a day
  - Add custom task (freeform text or pick from content library)
  - Skip task (with reason: "Already know this")

AI ADAPTATION (future):
  - "Plan adjusted based on your weak areas" notification
  - Auto-add review tasks for missed questions
```

---

### 14 Progress

**Current State**
- Route exists, service implied by dashboard using it

**Enterprise Redesign**

```
OVERVIEW:
  - Total XP + Level displayed prominently
  - Overall completion: large ring chart (questions answered / total)
  - Streak history: calendar heatmap (GitHub-style, last 90 days)

BY CATEGORY:
  - Horizontal bar chart per category (proficiency %)
  - Tap a bar to drill into category stats

TIME STATS:
  - Questions per day (last 14 days) — bar chart
  - Best day of the week (when you study most)
  - Average session length

MILESTONES:
  - Timeline of key milestones: "First question answered", "Level 5 reached", etc.
  - Linked to achievements

EXPORT:
  - "Share my progress" — generates a branded card image (good for LinkedIn)
```

---

### 15 Review Queue

**Current State**
- Route exists, WrongAnswerService tracks missed questions
- Dashboard shows review count badge

**Enterprise Redesign**

```
ENTRY SCREEN:
  - Count of questions needing review
  - Last reviewed: "3 days ago"
  - Estimated time: "~8 minutes for 12 questions"
  - [Start Review] primary CTA

REVIEW SCREEN (same flow as challenge):
  - Amber/warning theme to distinguish from regular practice
  - Shows which category the missed question is from
  - After answering correctly: "Cleared from review queue"
  - After missing again: "Will review again in 2 days" (spaced repetition)

SPACED REPETITION:
  - Implement SM-2 algorithm or simple intervals: 1 day, 3 days, 7 days
  - Questions due today vs. upcoming schedule

COMPLETION:
  - "Review queue clear!" celebration state
  - Next review date shown: "Nothing due until March 9"
```

---

### 16 Bookmarks

**Current State**
- Route exists

**Enterprise Redesign**

```
LIST:
  - Grouped by content type: Questions | Tutorials | Coding Problems
  - Each item shows: title + source category + date bookmarked
  - Swipe to delete (left swipe reveals delete action)

EMPTY STATE:
  - Illustrated empty state (not just text)
  - CTA: "Start bookmarking questions while studying"

QUICK ACCESS:
  - From any question detail screen: bookmark icon in header (tap to add/remove)
  - Visual confirmation toast when bookmarked/removed
```

---

### 17 Profile / Account

**Current State**
- Account info in Settings only — no dedicated Profile screen

**Enterprise Redesign**

```
PROFILE SCREEN (new, accessible from Dashboard avatar tap):
  - Full-width cover area with user's learning stats
  - Avatar (large, 80px) with edit option
  - Display name + member since + goal label
  - Stats strip: Total XP | Level | Questions Answered | Streak Record
  - Achievements showcase: last 3 unlocked badges
  - Learning streak calendar (last 30 days)
  - [Edit Profile] [Share Profile] [Settings]

PUBLIC PROFILE (future):
  - Shareable link: javaiq.app/@username
  - Shows public stats + top achievements
```

---

## Navigation Architecture

### Current Problems

The app currently uses 3 different navigation patterns:
1. `ion-menu-button` (hamburger) — Dashboard, Settings, Assessments, Tutorials
2. `ion-back-button` (native back) — Daily Challenge
3. Custom back button HTML element — Leaderboard, Achievements

This creates an inconsistent experience. Users don't know where "back" will take them.

### Recommended: Bottom Tab Navigation (Primary) + Stack (Secondary)

```
BOTTOM TAB BAR (persistent — always visible):
  [Home/Dash]  [Learn]  [Practice]  [Progress]  [Profile]

  HOME:      Dashboard
  LEARN:     Tutorials list
  PRACTICE:  Challenge / Assessment / Daily Challenge selection hub
  PROGRESS:  Progress + Leaderboard + Achievements
  PROFILE:   Profile + Settings

SIDE DRAWER (remove or repurpose):
  - Remove the hamburger menu entirely
  - Move all navigation into the bottom tab bar
  - The drawer added complexity without clear benefit

STACK NAVIGATION (within each tab):
  Each tab has its own navigation stack:
  LEARN tab:  Tutorials -> Tutorial Detail -> Topic
  PRACTICE:   Practice Hub -> Challenge -> Result

  Back arrows are consistent (always top-left, same style)

HEADER PATTERN (consistent across all screens):
  Simple screens (list views):
    [Back or Menu]  [Page Title]  [Optional action icon]

  Full-screen game/challenge screens:
    [X close with confirmation]  [Progress]  [XP/Combo]

  Remove: wordmark from inner screens (only on Dashboard)
```

---

## Accessibility (A11y) Standards

### WCAG 2.1 AA Minimum Requirements

| Requirement | Current Status | Fix |
|---|---|---|
| Color contrast 4.5:1 for text | FAIL — many muted colors at 2:1-3:1 | Update muted text from #64748b to #8896a4 on dark |
| Touch targets 44x44px minimum | FAIL — many chips, dots at 24-30px | Increase all interactive elements |
| Font size 12px minimum (0.75rem) | FAIL — 0.55rem, 0.6rem used extensively | Enforce --text-xs as minimum |
| Focus visible indicator | Unknown — no focus styles visible in code | Add focus-visible ring to all interactive elements |
| Screen reader labels | FAIL — icon-only buttons have no aria-label | Add aria-label to all icon buttons |
| Color not sole indicator | PARTIAL — difficulty uses color + text label | Ensure all states have text/icon supplement |
| Reduced motion support | FAIL — all animations fire unconditionally | Wrap all animations in @media (prefers-reduced-motion: no-preference) |

### Specific Fixes

```css
/* Focus ring — add to global styles */
:focus-visible {
  outline: 2px solid var(--color-brand-primary);
  outline-offset: 2px;
  border-radius: 4px;
}

/* Minimum touch targets */
.touchable {
  min-height: 44px;
  min-width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Motion & Animation System

### Principles

1. **Purposeful** — every animation communicates something (progress, success, transition)
2. **Fast** — duration 150ms-350ms for UI transitions; never > 600ms for page transitions
3. **Interruptible** — user can navigate away mid-animation
4. **Respectful** — honor `prefers-reduced-motion`

### Standard Durations

```
--duration-instant:  100ms  — hover states, toggles
--duration-fast:     200ms  — button press, chip selection
--duration-normal:   300ms  — card transitions, panel reveals
--duration-slow:     450ms  — page transitions, slide animations
--duration-dramatic: 600ms  — achievement unlocks, level-ups only
```

### Standard Easings

```
--ease-standard:    cubic-bezier(0.4, 0, 0.2, 1)  — most transitions
--ease-decelerate:  cubic-bezier(0, 0, 0.2, 1)    — elements entering screen
--ease-accelerate:  cubic-bezier(0.4, 0, 1, 1)    — elements leaving screen
--ease-spring:      cubic-bezier(0.34, 1.56, 0.64, 1) — celebratory moments
```

### Key Micro-Interactions

| Trigger | Animation |
|---|---|
| Question card entry | Slide up + fade in (ease-decelerate, 300ms) |
| Answer reveal | Card height expand + answer fade in |
| Correct answer ("Got It") | Card border flashes green + XP popup slides up |
| Wrong answer ("Needs Review") | Card border flashes red + subtle shake (10px, 200ms) |
| Level up | Full-screen flash + level badge scales + confetti |
| Achievement unlock | Badge slides in from top + bounces + glows |
| Streak milestone | Streak number count-up + fire emoji grows |
| Tab switch (bottom nav) | Content fades + selected icon scales slightly |
| Pull to refresh | Spring bounce + spinner |

---

## Implementation Priority

### Phase 1 — Foundation (Weeks 1-2)
1. Create global design tokens CSS file (variables)
2. Fix all font sizes below 0.75rem
3. Add consistent bottom tab navigation
4. Fix avatar tap -> confirmation before logout
5. Add skeleton screens to Dashboard and Leaderboard

### Phase 2 — Screen Upgrades (Weeks 3-5)
6. Redesign Dashboard (collapse learning path, add time-aware greeting)
7. Add progress indicators to Assessment cards (previous scores)
8. Fix Leaderboard (sticky "my rank" bar, delta badges, skeleton)
9. Upgrade Achievement Gallery (full-width cards, progress bars for locked)
10. Add pull-to-refresh everywhere

### Phase 3 — Game Experience (Weeks 6-7)
11. Code block syntax highlighting (Prism.js)
12. Swipe gestures on Challenge screen (swipe to rate)
13. Haptic feedback (Capacitor Haptics)
14. Confetti animation on 3-star results
15. XP popup redesign

### Phase 4 — Accessibility (Week 8)
16. Add `aria-label` to all icon-only buttons
17. Implement `focus-visible` ring styles
18. Wrap all animations in `prefers-reduced-motion`
19. Increase all touch targets to 44px minimum
20. Audit color contrast ratios

### Phase 5 — New Screens (Weeks 9-12)
21. Dedicated Profile screen
22. Study Plan UI (week view + task management)
23. Progress analytics dashboard (charts)
24. Review Queue with spaced repetition UI
25. Mock Interview full flow

---

## Quick Wins (Can ship in < 1 day each)

| Fix | Why it matters |
|---|---|
| Min font size: replace all `0.5x`rem with `0.75rem` | Immediately improves legibility for all users |
| Add `aria-label` to icon buttons | Screen reader users can navigate |
| Avatar tap -> profile sheet (not logout) | Prevents accidental sign-outs |
| "Continue" button -> "Continue Learning" label | Reduces cognitive ambiguity |
| Back button: standardize to one pattern | Navigation coherence |
| Leaderboard: sticky "my rank" bar | Users don't have to scroll to find themselves |
| Daily Challenge back button -> `/dashboard` (not `/tutorials`) | Correct navigation flow |
| Version number: read from `environment.ts` (not hardcoded) | Easy maintenance |
| Remove `0.45` opacity on locked category emoji — use 0.5 min | Legibility |
| Assessment cards: show "Start Quiz" button always visible (not hover-only) | Mobile users can't hover |
