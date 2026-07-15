# Angular Application Architecture Plan
> Blueprint derived from the JavaIQ codebase (Angular 21 + Ionic, v1.6.0) — examples use Angular content

---

## 1. Architecture Overview

JavaIQ follows a **feature-slice architecture** — the app is divided into vertical slices (tutorials, assessments, interview questions, etc.), each owning its own components, services, and data. Cross-cutting concerns (auth, gamification, analytics) live as root-level singleton services. This pattern scales well because adding a new feature never touches another feature's files.

```text
src/app/
├── app.ts                     # Root bootstrap component
├── app.config.ts              # All providers (Firebase, Router, Ionic, i18n)
├── app.routes.ts              # Top-level lazy routes
│
├── core/                      # App-wide singleton services (one-per-app)
│   ├── auth.service.ts
│   ├── gamification.service.ts
│   ├── analytics.service.ts
│   ├── connectivity.service.ts
│   ├── offline-cache.service.ts
│   └── lang.service.ts
│
├── features/                  # Vertical feature slices
│   ├── tutorials/
│   ├── assessments/
│   ├── interview-questions/
│   ├── coding-questions/
│   ├── achievements/
│   ├── bookmarks/
│   ├── progress/
│   ├── review/
│   ├── study-plan/
│   └── settings/
│
├── shared/                    # Reusable presentational components
│   ├── tutorial-layout.component.ts
│   ├── code-block.component.ts
│   ├── icon.component.ts
│   ├── streak-card.component.ts
│   └── ...
│
├── data/                      # Static data & type definitions
│   ├── tutorials/
│   │   ├── index.ts           # Master registry (ALL_TUTORIALS, TUTORIAL_MAP)
│   │   └── <topic>.ts         # Per-topic data files
│   └── *.model.ts             # Shared TypeScript interfaces
│
└── models/                    # Shared domain interfaces
```

---

## 2. Tech Stack Choices

| Layer | Choice | Why |
|---|---|---|
| Framework | Angular 21 (standalone) | No NgModules overhead; tree-shakeable by default |
| UI Shell | Ionic Angular 8 | Pre-built mobile-optimised components, navigation stack, back button |
| Styling | Tailwind CSS 4 | Utility-first; avoids large component CSS bundles |
| Mobile | Capacitor 7 | Bridges web → native Android/iOS; plugin ecosystem |
| Backend | Firebase (Auth + Firestore) | Realtime, offline-capable, no server needed |
| State | Angular Signals | Built-in, zero deps, reactive without RxJS boilerplate |
| i18n | @ngx-translate | Runtime language switching without rebuilds |
| Syntax HL | PrismJS | Lightweight, extensible, tree-shakeable |
| Testing | Vitest (unit) + Playwright (e2e) | Fast Vite-native unit tests; real-browser e2e |

---

## 3. Angular Patterns (Non-Negotiable Conventions)

### 3.1 Standalone Components Only
No `NgModule`, no `declarations`. Every component declares its own `imports: []`.

```typescript
@Component({
  selector: 'app-my-feature',
  standalone: true,           // (default in Angular 19+, explicit for clarity)
  imports: [CommonModule, RouterLink, MySharedComponent],
  template: `...`
})
export class MyFeatureComponent {}
```

### 3.2 OnPush Change Detection Everywhere
Eliminates unnecessary CD cycles. Pair with signals or immutable data.

```typescript
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  ...
})
```

### 3.3 Signals for All Reactive State
No `BehaviorSubject` for new code. Signals are simpler, typed, and composable.

```typescript
@Injectable({ providedIn: 'root' })
export class MyService {
  count = signal(0);
  doubled = computed(() => this.count() * 2);

  increment() {
    this.count.update(n => n + 1);
  }
}
```

### 3.4 Lazy Loading via `loadComponent`
Every route loads its component chunk on-demand. Zero code is shipped for routes the user never visits.

```typescript
{
  path: 'tutorials/:slug',
  loadComponent: () =>
    import('./features/tutorials/tutorial-detail.component')
      .then(m => m.TutorialDetailComponent)
}
```

### 3.5 Inject() over Constructor Injection
Prefer `inject()` inside class body over constructor parameters.

```typescript
export class MyService {
  private http = inject(HttpClient);
  private router = inject(Router);
}
```

---

## 4. Application Bootstrap

### 4.1 `app.config.ts` — All Providers in One Place

```typescript
export const appConfig: ApplicationConfig = {
  providers: [
    // Error handling
    { provide: ErrorHandler, useClass: GlobalErrorHandler },

    // Change detection strategy
    provideZoneChangeDetection({ eventCoalescing: true }),

    // Router: hash URLs (for Capacitor), scroll restoration, preload all
    provideRouter(
      routes,
      withHashLocation(),
      withInMemoryScrolling({ scrollPositionRestoration: 'top' }),
      withPreloading(PreloadAllModules)
    ),

    // UI framework
    provideIonicAngular({ mode: 'md', navAnimation: undefined }),

    // Firebase
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideAnalytics(() => getAnalytics()),

    // HTTP (needed for i18n loader and API calls)
    provideHttpClient(),

    // i18n
    provideTranslateService({ defaultLanguage: 'en' }),
    ...provideTranslateHttpLoader({ prefix: '/i18n/', suffix: '.json' }),
  ]
};
```

**Key decisions:**
- `withHashLocation()` — required for Capacitor's file:// URL scheme on Android/iOS.
- `withPreloading(PreloadAllModules)` — silently preloads all lazy chunks after initial load, making subsequent nav instant.
- No `provideAnimations()` — Ionic provides its own animation layer.

---

## 5. Routing Architecture

### 5.1 Route Structure Pattern

```text
/                         → redirect to /dashboard
/dashboard                → DashboardComponent
/onboarding               → OnboardingComponent
/profile-setup            → ProfileSetupComponent

/tutorials                → TutorialListComponent (browse all modules)
/tutorials/:slug          → TutorialDetailComponent (chapter list)
/tutorials/:slug/:topic   → TopicRouterComponent (renders topic component)

/assessments              → AssessListComponent
/assessments/:id          → AssessQuizComponent
/assessments/:id/result   → AssessResultComponent

/interview-questions                  → IqListComponent
/interview-questions/:category        → IqCategoryComponent
/interview-questions/:category/:id    → IqDetailComponent

/coding-questions         → CqListComponent
/coding-questions/:id     → CqDetailComponent

/daily-challenge          → DailyChallengeComponent
/progress                 → ProgressComponent
/achievements             → AchievementGalleryComponent
/bookmarks                → BookmarksListComponent
/leaderboard              → LeaderboardComponent
/settings                 → SettingsComponent
/about                    → AboutComponent
/**                       → redirect to /dashboard
```

### 5.2 The Dynamic Topic Router Pattern

For content with many sub-pages (90+ topic components), avoid registering 90 routes. Instead, use a single `TopicRouterComponent` that dynamically imports and renders the right component using `ViewContainerRef`:

```typescript
// topic-router.component.ts
const TOPIC_MAP: Record<string, Record<string, () => Promise<Type<unknown>>>> = {
  'core-java': {
    'jvm-basics': () => import('./topics/jvm-basics.component').then(m => m.JvmBasicsComponent),
    'inheritance': () => import('./topics/inheritance.component').then(m => m.InheritanceComponent),
    // ...90+ entries
  },
  'spring-boot': {
    'dependency-injection': () => import('./topics/sb-di.component').then(m => m.SbDiComponent),
  }
};

@Component({ selector: 'app-topic-router', ... })
export class TopicRouterComponent implements OnInit {
  @ViewChild('outlet', { read: ViewContainerRef }) outlet!: ViewContainerRef;
  private route = inject(ActivatedRoute);

  async ngOnInit() {
    const { slug, topic } = this.route.snapshot.params;
    const loader = TOPIC_MAP[slug]?.[topic];
    if (!loader) { /* 404 */ return; }
    const ComponentClass = await loader();
    this.outlet.clear();
    this.outlet.createComponent(ComponentClass as Type<unknown>);
  }
}
```

This keeps `app.routes.ts` clean — one route covers all 90+ topics.

---

## 6. Feature Slice Structure

Each feature is a self-contained directory:

```text
features/assessments/
├── assess-list.component.ts       # Browse available quizzes
├── assess-quiz.component.ts       # Active quiz session
├── assess-result.component.ts     # Score + review
├── assess.service.ts              # Quiz state (signals)
└── assess-data.ts                 # Static question bank
```

**Rule:** A feature's components may only import from `shared/` and root services. Features never import from each other.

---

## 7. Course Registry & Data Layer

### 7.1 Three Parallel Data Structures

The tutorial system uses **three distinct data structures** that must all be kept in sync when adding content:

```text
data/course-topics.const.ts    → CourseTopic[]  — navigation slugs + durations (used by Detail + ContinueLearning)
data/tutorials/<name>.ts       → Tutorial/Chapter/ContentBlock  — actual lesson text (used by future server render)
features/tutorials/
  tutorial-list.component.ts   → TutorialCourse[]  — browse-page metadata (icon, difficulty, chapter count)
  tutorial-detail.component.ts → CourseData (courses map)  — chapter list with descriptions shown in the UI
```

Each targets a different consumer. They share the same `slug` as their primary key.

---

### 7.2 Complete Course Registry

An Angular learning app ships with 8 courses organized into 4 tracks:

| Slug | Title | Track | Difficulty | Topics | Est. Time |
| --- | --- | --- | --- | --- | --- |
| `angular-fundamentals` | Angular Fundamentals | core | beginner | 20 | 8h |
| `components-templates` | Components & Templates | core | beginner | 16 | 6h |
| `services-di` | Services & Dependency Injection | framework | intermediate | 12 | 5h |
| `routing-navigation` | Routing & Navigation | framework | intermediate | 10 | 4h |
| `rxjs` | RxJS & Observables | reactive | intermediate | 18 | 8h |
| `ngrx` | NgRx State Management | reactive | advanced | 14 | 7h |
| `angular-testing` | Testing Angular Apps | advanced | advanced | 12 | 6h |
| `performance` | Angular Performance | advanced | advanced | 10 | 5h |

**Track membership** is a flat lookup map used by the filter chips on the course list page:

```typescript
const TRACK_MAP: Record<string, string> = {
  'angular-fundamentals': 'core',
  'components-templates': 'core',
  'services-di':          'framework',
  'routing-navigation':   'framework',
  'rxjs':                 'reactive',
  'ngrx':                 'reactive',
  'angular-testing':      'advanced',
  'performance':          'advanced',
};
```

---

### 7.3 `CourseEntry` — Navigation Data (`course-topics.const.ts`)

This is the **single source of truth for topic slugs and durations**. It is consumed by:

- `TutorialDetailComponent` — builds the curriculum list.
- `ContinueLearningCardComponent` — finds the next unread topic.

```typescript
export interface CourseTopic {
  slug: string;      // e.g. 'jvm-basics' — matches both the route param and the topic component
  title: string;     // display name in the curriculum list
  duration: string;  // e.g. '30 min' — shown in the topic card
}

export interface CourseEntry {
  slug: string;        // matches the route segment /tutorials/:slug
  title: string;
  badge: string;       // chip label e.g. 'CORE JAVA'
  themeColor: string;  // hex accent used for the hero glow and progress bar
  topics: CourseTopic[];
}
```

**Example entry (abridged):**

```typescript
{
  slug: 'angular-fundamentals',
  title: 'Angular Fundamentals',
  badge: 'ANGULAR',
  themeColor: '#dd0031',
  topics: [
    { slug: 'angular-overview',      title: 'What is Angular?',            duration: '20 min' },
    { slug: 'project-structure',     title: 'Project Structure',           duration: '25 min' },
    { slug: 'components-basics',     title: 'Components Basics',           duration: '35 min' },
    { slug: 'data-binding',          title: 'Data Binding',                duration: '30 min' },
    { slug: 'directives',            title: 'Built-in Directives',         duration: '30 min' },
    { slug: 'pipes',                 title: 'Pipes & Transformations',     duration: '25 min' },
    { slug: 'forms-template',        title: 'Template-Driven Forms',       duration: '35 min' },
    { slug: 'forms-reactive',        title: 'Reactive Forms',              duration: '40 min' },
    // ... more topics
  ]
}
```

All 8 courses live in a single exported `COURSE_TOPICS: CourseEntry[]` array in `data/course-topics.const.ts`.

---

### 7.4 `TutorialCourse` — Browse-Page Metadata (`tutorial-list.component.ts`)

The course list component owns a `courses: TutorialCourse[]` array inlined in the component class. This holds display-only metadata — no topic slugs.

```typescript
interface TutorialCourse {
  slug: string;
  title: string;
  description: string;         // 1–2 sentence summary shown on the card
  faIcon: string;              // Font Awesome class e.g. 'fa-solid fa-mug-hot'
  accentColor: string;         // hex — used for icon tint
  iconBg: string;              // rgba — icon background bubble
  chapterCount: number;        // total topics; used to compute progress %
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;       // e.g. '15h'
}
```

**Example:**

```typescript
{
  slug: 'angular-fundamentals',
  title: 'Angular Fundamentals',
  description: 'Components, templates, data binding, directives, pipes, and reactive forms — from zero to confident.',
  faIcon: 'fa-brands fa-angular',
  accentColor: '#dd0031',
  iconBg: 'rgba(221,0,49,0.12)',
  chapterCount: 20,
  difficulty: 'beginner',
  estimatedTime: '8h'
}
```

---

### 7.5 `CourseData` — Chapter-Detail Map (`tutorial-detail.component.ts`)

`TutorialDetailComponent` contains an inline `private courses` map that holds the **full topic list with descriptions** for the curriculum view. Topics here have a `description` field that `CourseTopic` does not.

```typescript
interface Topic {
  slug: string;
  title: string;
  description: string;   // 1-line description shown under topic title in the curriculum card
  iconName: string;      // Lucide icon name for the topic row (unused in current UI, kept for extensibility)
  duration: string;
}

interface CourseData {
  badge: string;
  title: string;
  subtitle: string;      // full subtitle shown in the hero
  estimatedTime: string;
  topics: Topic[];
  themeColor: string;
}
```

**When a slug isn't in the map**, the component falls back gracefully:
```typescript
this.courseData.set(this.courses[slug] ?? {
  badge: slug.toUpperCase(),
  title: slug.replace(/-/g, ' '),
  subtitle: 'Course content coming soon.',
  estimatedTime: 'TBD',
  themeColor: '#8b5cf6',
  topics: []
});
```

---

### 7.6 `Tutorial` / `Chapter` / `ContentBlock` — Lesson Content Model

This is the **authoring data model** — the format in which lesson text is written.

```typescript
// data/tutorial.model.ts

export type ContentBlockType =
  | 'paragraph'
  | 'heading'
  | 'subheading'
  | 'code'
  | 'note'
  | 'tip'
  | 'warning'
  | 'bullet-list'
  | 'numbered-list'
  | 'divider';

export interface ContentBlock {
  type: ContentBlockType;
  content: string;         // main text; for lists this is the section heading
  language?: string;       // 'java' | 'xml' | 'yaml' | 'bash' | 'json' — for 'code' blocks only
  items?: string[];        // list items — for 'bullet-list' and 'numbered-list' only
}

export interface Chapter {
  id: string;              // e.g. 'spring-boot-ch1' — must be unique within the tutorial
  title: string;
  description: string;
  estimatedMinutes: number;
  blocks: ContentBlock[];
}

export interface Tutorial {
  id: string;              // matches the route slug e.g. 'spring-boot'
  title: string;
  description: string;
  icon: string;            // Bootstrap icon class e.g. 'bi-rocket-takeoff'
  color: string;           // accent hex e.g. '#40C4FF'
  chapters: Chapter[];
}
```

**Full chapter example** (from `angular-fundamentals.ts`):

```typescript
{
  id: 'angular-fundamentals-ch1',
  title: 'Components Deep Dive',
  description: 'How @Component works, its metadata, and the component lifecycle.',
  estimatedMinutes: 30,
  blocks: [
    { type: 'heading', content: 'Angular Components' },
    {
      type: 'paragraph',
      content: 'A component is the fundamental building block of every Angular application. It combines a TypeScript class, an HTML template, and optional CSS styles into a self-contained UI unit.'
    },
    { type: 'subheading', content: '@Component Decorator Breakdown' },
    {
      type: 'code', language: 'typescript',
      content: `@Component({
  selector: 'app-user-card',          // custom HTML tag
  standalone: true,                   // no NgModule needed
  imports: [CommonModule, RouterLink], // direct dependencies
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: \`
    <div class="card">
      <h2>{{ user().name }}</h2>
      <p>{{ user().email }}</p>
    </div>
  \`,
})
export class UserCardComponent {
  user = input.required<User>();      // Signal-based input (Angular 17+)
}`
    },
    {
      type: 'numbered-list',
      content: 'Component lifecycle hooks — in order:',
      items: [
        'ngOnChanges  — called when input properties change',
        'ngOnInit     — called once after first ngOnChanges',
        'ngDoCheck    — called during every CD run',
        'ngAfterViewInit — called after the view is initialized',
        'ngOnDestroy  — called just before the component is removed'
      ]
    },
    {
      type: 'tip',
      content: 'Prefer OnPush change detection + signals on every component — Angular only re-checks the template when a signal it reads emits a new value.'
    },
    {
      type: 'warning',
      content: 'Never subscribe to observables inside ngOnInit without unsubscribing in ngOnDestroy. Use the async pipe or takeUntilDestroyed() instead.'
    }
  ]
}
```

**ContentBlock type reference:**

| Type | Renders as | Extra fields |
|---|---|---|
| `paragraph` | `<p>` body text | — |
| `heading` | `<h2>` section title | — |
| `subheading` | `<h3>` sub-section | — |
| `code` | PrismJS highlighted block | `language` |
| `note` | Info callout (blue) | — |
| `tip` | Success callout (green) | — |
| `warning` | Warning callout (amber) | — |
| `bullet-list` | `<ul>` with `items[]` | `items` |
| `numbered-list` | `<ol>` with `items[]` | `items` |
| `divider` | `<hr>` separator | — |

---

### 7.7 Master Tutorial Registry (`data/tutorials/index.ts`)

```typescript
import { ANGULAR_FUNDAMENTALS_TUTORIAL } from './angular-fundamentals';
import { COMPONENTS_TEMPLATES_TUTORIAL } from './components-templates';
import { RXJS_TUTORIAL }                 from './rxjs';

export const ALL_TUTORIALS: Tutorial[] = [
  ANGULAR_FUNDAMENTALS_TUTORIAL,
  COMPONENTS_TEMPLATES_TUTORIAL,
  RXJS_TUTORIAL,
];

// Lookup by route slug
export const TUTORIAL_MAP: Record<string, Tutorial> = {
  'angular-fundamentals': ANGULAR_FUNDAMENTALS_TUTORIAL,
  'components-templates': COMPONENTS_TEMPLATES_TUTORIAL,
  'rxjs':                 RXJS_TUTORIAL,
};
```

Each tutorial data file exports a single named constant:
```typescript
// data/tutorials/rxjs.ts
export const RXJS_TUTORIAL: Tutorial = {
  id: 'rxjs',
  title: 'RxJS & Observables',
  description: 'Master reactive programming — Observables, operators, subjects, and real-world Angular patterns.',
  icon: 'bi-lightning-charge',
  color: '#b7178c',
  chapters: [ /* ... */ ]
};
```

---

### 7.8 Progress Tracking — Completion Key Pattern

Topic completion is stored as a flat `Set<string>` in `DataService`:

```typescript
completedTopicIds = signal<Set<string>>(new Set());
```

The key format is: **`courseSlug::topicSlug`**

```typescript
// Writing a completion:
dataService.markTopicComplete('angular-fundamentals::components-basics');

// Reading:
dataService.isTopicComplete('angular-fundamentals::components-basics');  // true/false

// Counting completed topics in a course:
dataService.getCourseCompletedCount('angular-fundamentals');   // number
dataService.getCourseProgress('angular-fundamentals', 20);     // 0–100 %
```

This flat key approach means:

- No nested objects to update — `Set.add()` is atomic.
- A single signal covers all courses — no per-course signals needed.
- The key is stable even if topic order changes.

Persistence: `completedTopicIds` syncs to `Firestore users/{uid}.completedTopicIds` on every change (via `effect()`) and is merged (union) on login so cross-device progress is preserved.

---

## 8. Service Architecture

### 8.1 Core Service Responsibilities

| Service | Responsibility |
|---|---|
| `AuthService` | Firebase auth, Google SSO, platform-aware (web vs native) |
| `GamificationService` | XP, levels, streaks, cloud sync, paywall triggers |
| `DataService` | Reads progress/bookmarks, writes to Firestore |
| `AnalyticsService` | Event tracking (Firebase Analytics) |
| `ConnectivityService` | Online/offline detection |
| `OfflineCacheService` | Caches responses to localStorage for offline use |
| `AdGateService` | Controls when ads show, tracks ad views |
| `PurchaseService` | RevenueCat IAP, Pro status, paywall presentation |
| `BookmarksService` | Persists bookmarked items locally + cloud |
| `SpacedRepetitionService` | Review scheduling algorithm |

### 8.2 Gamification Service Design

The `GamificationService` is the most complex core service. Key design points:

**Dual persistence (local + cloud):**

```text
localStorage (instant, offline)
    ↕ sync on auth + addXp()
Firestore gamification/{uid} (authoritative)
```

**Signals for reactive UI:**
```typescript
xp = signal<number>(0);
streak = signal<number>(0);
level = computed(() => Math.floor(Math.sqrt(this.xp() / 100)) + 1);
levelProgress = computed(() => { /* % into current level */ });
```

**Level formula (logarithmic scaling):**
- XP to reach level N = `(N-1)² × 100`
- Level 1 = 0 XP, Level 2 = 100, Level 5 = 1600, Level 10 = 8100

**Streak freeze mechanic:**
- Free tier: 1 freeze/week (refills on ISO week change).
- Pro tier: 7 freezes/week (effectively unlimited).
- On startup: if `diffDays === 2` and `streakFreezes > 0`, auto-apply freeze.

**Soft paywall triggers:**
- Level 10 milestone → show paywall.
- 7-day streak → show paywall.

---

## 9. Authentication Flow

```text
App Start
    │
    ├─ Native (Capacitor)?
    │       │
    │       ├─ FirebaseAuthentication.getCurrentUser() → restore session
    │       └─ addListener('authStateChange') → reactive updates
    │
    └─ Web?
            └─ firebase user() observable → user signal

Sign In (Google)
    │
    ├─ Native → FirebaseAuthentication.signInWithGoogle()
    └─ Web   → signInWithPopup(GoogleAuthProvider)

After sign in:
    → purchaseService.identifyUser(uid)
    → checkProfileSetup(uid)
        ├─ Profile exists? → go to dashboard
        └─ No profile?    → go to /profile-setup
```

---

## 10. Topic Component Pattern

Every content page follows an identical skeleton. This uniformity makes adding content fast and keeps the codebase consistent.

```typescript
@Component({
  selector: 'app-topic-change-detection',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout
      title="Change Detection"
      subtitle="Understand how Angular decides when and what to re-render — and how to make it fast."
      badge="ANGULAR CORE"
      gradient="linear-gradient(135deg, #dd0031 0%, #c3002f 100%)">

      <section class="section">
        <h2 class="section-heading">
          <app-icon name="zap" [size]="28" css="icon-red" /> Default vs OnPush
        </h2>
        <div class="prose">
          <p>
            Angular runs change detection from the root downward every time an event fires.
            With <code>OnPush</code> the component is only checked when its
            <strong>signal emits</strong> or an <strong>input reference changes</strong>.
          </p>
          <app-code-block language="typescript" [code]="cdExample" />
        </div>
      </section>

      <section class="section">
        <h2 class="section-heading">
          <app-icon name="cpu" [size]="28" css="icon-purple" /> Signals & Computed
        </h2>
        <div class="prose">
          <app-code-block language="typescript" [code]="signalExample" />
        </div>
      </section>

    </app-tutorial-layout>
  `,
  styles: ``
})
export class ChangeDetectionComponent {
  cdExample = `
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: \`<p>{{ count() }}</p>\`
})
export class CounterComponent {
  count = input.required<number>();
}`;

  signalExample = `
const price = signal(100);
const tax   = signal(0.1);
const total = computed(() => price() * (1 + tax()));

price.set(200);
console.log(total()); // 220 — recomputed automatically`;
}
```

**File naming convention:** `<prefix>-<slug>.component.ts`

| Prefix | Domain |
|---|---|
| (none) | Angular Fundamentals |
| `rx-` | RxJS |
| `ng-` | NgRx State Management |
| `rt-` | Routing & Navigation |
| `tst-` | Testing |
| `pf-` | Performance |

---

## 11. Shared Component Library

These components are used across all features:

| Component | Purpose |
|---|---|
| `TutorialLayoutComponent` | Full-page wrapper with header, gradient banner, scroll |
| `CodeBlockComponent` | PrismJS syntax-highlighted code display |
| `IconComponent` | Bootstrap Icons renderer |
| `StreakCardComponent` | Shows current streak + flame |
| `AchievementToastComponent` | XP/level-up pop-up toast |
| `PaywallModalComponent` | IAP upgrade screen |
| `InlineAdComponent` | AdMob inline banner |
| `TopicNavComponent` | Prev/Next navigation between topics |
| `AppHeaderComponent` | Shared top navigation bar |

---

## 12. State Management Strategy

No external state management library (no NgRx, no Akita). The app uses:

| Concern | Approach |
|---|---|
| Global persistent state | Root `@Injectable({ providedIn: 'root' })` services with `signal()` |
| Feature-local state | Component-level signals or simple properties |
| Server state | Direct Firestore calls in services (no caching library) |
| Async state | `async/await` in services; template-facing values via signals |
| Cross-component comms | Inject the shared service — never EventEmitter chains |

**Golden rule:** Templates read from signals. Services write to signals. Components never talk to each other directly.

---

## 13. Offline & Performance Strategy

### Offline
- `ConnectivityService` detects `navigator.onLine` + `window online/offline` events.
- `OfflineCacheService` stores last-fetched API payloads in `localStorage`.
- All static content (tutorials, questions) is bundled — fully offline capable.
- Firestore's built-in persistence provides read access to cached data while offline.

### Performance
- **Preload all modules** (`PreloadAllModules`) after first paint.
- **OnPush** everywhere — Angular only checks component when inputs change or signal emits.
- **Static data as TS constants** — no JSON parsing, no HTTP round-trips.
- **Dynamic component loading** (`ViewContainerRef.createComponent`) — topic components loaded on demand, not upfront.
- **Hash routing** — avoids server-side routing config for Capacitor builds.

---

## 14. Monetization Architecture

### 14.1 Two Revenue Streams
1. **In-App Purchases** via RevenueCat (`PurchaseService`)
   - Pro subscription: 1.5× XP multiplier, unlimited streak freezes, no ads.
   - Paywall triggered at natural milestones (Level 10, 7-day streak).
2. **AdMob** (`AdMobService`, `AdGateService`)
   - Banner ads for free users.
   - `AdGateService` tracks how many topics a user has seen; shows ad every N chapters.

### 14.2 Pro Status Check Pattern
```typescript
// In any service or component:
if (this.purchaseSvc.isProOrTrial()) {
  // premium path
} else {
  // free path + potential paywall trigger
}
```

---

## 15. Internationalization (i18n)

- `@ngx-translate` with HTTP loader reads `/i18n/{lang}.json` at runtime.
- Default language: `en`.
- Language preference persisted in `localStorage` via `LangService`.
- Translation keys used in templates: `{{ 'KEY' | translate }}`.

---

## 16. Testing Strategy

| Type | Tool | What to test |
|---|---|---|
| Unit | Vitest | Services (business logic, signal transformations) |
| Component | Vitest + Angular TestBed | Shared components (layout, code block) |
| e2e | Playwright | Critical user flows (quiz flow, tutorial navigation, auth) |

Run commands:
```bash
npm test          # Vitest in watch mode
npm run e2e       # Playwright headless
npm run e2e:ui    # Playwright with visual debugger
```

---

## 17. Step-by-Step: Building a New App with This Architecture

### Phase 1 — Project Scaffold
```bash
ng new my-app --standalone --routing --style=css
npm install @ionic/angular @angular/fire firebase tailwindcss
npm install @capacitor/core @capacitor/cli @capacitor/android
npx cap init
```

### Phase 2 — Configure Providers (`app.config.ts`)
- Set up Firebase providers.
- Set up Ionic standalone provider.
- Configure router with `withHashLocation()` and `withPreloading()`.
- Add `ErrorHandler` override.

### Phase 3 — Define Domain Models (`models/` + `data/`)
- Write TypeScript interfaces for every entity.
- Create static data files for content.
- Create a master index registry.

### Phase 4 — Core Services (`core/`)
- `AuthService` — Google SSO, platform detection.
- `GamificationService` — XP/streak/level signals + localStorage + Firestore sync.
- `ConnectivityService` — online/offline detection.

### Phase 5 — Shared Component Library (`shared/`)
- `TutorialLayoutComponent` — page wrapper.
- `CodeBlockComponent` — syntax highlighting.
- Toast, header, nav components.

### Phase 6 — Feature Slices (`features/`)
For each feature:
1. Create `features/<name>/` directory.
2. Write list/detail/form components.
3. Write feature service with `signal()`-based state.
4. Register lazy route in `app.routes.ts`.

### Phase 7 — Content Components
- Create `features/tutorials/topics/` directory.
- Write one component per topic following the canonical template.
- Register in `TopicRouterComponent`'s `TOPIC_MAP`.
- Add chapter metadata to the tutorial data file.

### Phase 8 — Gamification
- Hook `GamificationService.addXp()` into quiz results, tutorial completions.
- Add streak tracking on any "daily activity" event.
- Build `AchievementToastComponent` to surface XP gain to the user.

### Phase 9 — Monetization (optional)
- Integrate RevenueCat for subscriptions.
- Add AdMob for free-tier ad display.
- Gate Pro features behind `purchaseSvc.isProOrTrial()`.

### Phase 10 — Mobile Build
```bash
npm run build
npx cap sync android
npx cap run android
```

---

## 18. Adding New Content (Day-to-Day Workflow)

### Add a New Topic (e.g. "Signals" inside Angular Fundamentals)

1. Create `src/app/features/tutorials/topics/signals.component.ts` following the canonical template:

   ```typescript
   @Component({
     selector: 'app-topic-signals',
     changeDetection: ChangeDetectionStrategy.OnPush,
     imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
     template: `
       <app-tutorial-layout
         title="Signals"
         subtitle="Angular's built-in reactive primitive — fine-grained, synchronous, zero-dependency state."
         badge="ANGULAR CORE"
         gradient="linear-gradient(135deg, #dd0031 0%, #a80024 100%)">
         <!-- sections here -->
       </app-tutorial-layout>
     `,
     styles: ``
   })
   export class SignalsComponent { }
   ```

2. Add the lazy import to `TOPIC_MAP` in `topic-router.component.ts`:

   ```typescript
   'angular-fundamentals': {
     // ...existing topics
     'signals': () => import('./topics/signals.component').then(m => m.SignalsComponent),
   }
   ```

3. Add the `CourseTopic` entry to `COURSE_TOPICS` in `data/course-topics.const.ts`:

   ```typescript
   { slug: 'signals', title: 'Angular Signals', duration: '35 min' }
   ```

4. Add the `Chapter` with `blocks[]` to the matching tutorial data file (`angular-fundamentals.ts`).

### Add a New Course (e.g. "Angular Animations")

1. Create `src/app/data/tutorials/animations.ts` exporting a `Tutorial` constant.
2. Import it and add to `ALL_TUTORIALS` and `TUTORIAL_MAP` in `data/tutorials/index.ts`.
3. Add a `CourseEntry` block to `COURSE_TOPICS` in `data/course-topics.const.ts`.
4. Add a `TutorialCourse` entry to the `courses` array in `tutorial-list.component.ts`.
5. Add a `CourseData` entry to the `private courses` map in `tutorial-detail.component.ts`.
6. Create topic components for each chapter (step 1 above).

### Add a New Quiz (e.g. "RxJS Operators" assessment)

1. Add `QuizQuestion[]` entries to `assess-data.ts`:

   ```typescript
   {
     id: 'rxjs-q1',
     question: 'Which operator transforms each emitted value into a new Observable and merges them?',
     options: ['switchMap', 'mergeMap', 'concatMap', 'exhaustMap'],
     ans: 1,  // index of correct answer
     explanation: 'mergeMap subscribes to each inner Observable concurrently without cancelling previous ones.'
   }
   ```

2. Add an assessment entry with the question IDs and passing threshold.
3. The existing `assess-list`, `assess-quiz`, `assess-result` components render it automatically.

---

## 19. Code Style Checklist

- [ ] `ChangeDetectionStrategy.OnPush` on every component.
- [ ] `signal()` / `computed()` for reactive state — no `BehaviorSubject`.
- [ ] `inject()` in class body — no constructor injection.
- [ ] `loadComponent` on every route — no eager imports in routes.
- [ ] TypeScript strict mode — no `any`.
- [ ] `const` over `let` everywhere.
- [ ] No comments that describe *what* the code does — only *why*.
- [ ] No cross-feature imports — features only import from `shared/` and `core/`.
- [ ] Prettier enforced: `printWidth: 100`, `singleQuote: true`.

---

## 20. File Naming Conventions

| Pattern | Example |
|---|---|
| Feature component | `<feature>-<action>.component.ts` |
| Feature service | `<feature>.service.ts` |
| Topic component | `<prefix>-<slug>.component.ts` |
| Data file | `<domain>.ts` (no `.model.`) |
| Model/Interface file | `<domain>.model.ts` |
| Data index | `index.ts` (one per data directory) |
| Route guard | `<name>.guard.ts` |
| Pipe | `<name>.pipe.ts` |

---

*This document reflects the architecture of JavaIQ v1.6.0 and is intended as a reusable blueprint for Angular + Ionic applications following the same patterns.*

---

## Part II — UI/UX Design Plan

---

## 21. Design Principles

| Principle | What it means in practice |
| --- | --- |
| **Light-first, glass-accented** | Default theme is bright white cards on a soft mint-green page background. Dark mode is a full inversion to navy surfaces — both modes must pass WCAG AA contrast. |
| **Vivid green identity** | Electric green (`#00C853`) is the single brand accent: CTAs, highlight text, active states, achievement indicators. It must never appear as a background on text smaller than 18px. |
| **Glassmorphism depth** | Cards float on the page with `backdrop-filter: blur(12px)` + soft box-shadow + `rgba(255,255,255,0.72)` fill. No hard borders — depth comes from blur and shadow, not outlines. |
| **3D illustration language** | Onboarding and hero sections use abstract geometric illustrations (floating spheres, rings, gradient meshes) in the brand green palette. Never use flat icons alone for hero moments. |
| **Navy as anchor** | Dark navy (`#0D1B2A`) grounds every screen. Used for body text, secondary action buttons, dark cards ("Total Received" style), and the always-dark header. |
| **Density-aware** | Mobile gets compact cards (padding-y 14–16px). Tablet and desktop progressively breathe out. Never waste space on small screens. |
| **Semantic color** | Green = success/mastery, amber = caution/in-progress, red = error/missed, blue = informational. Vivid green (`#00C853`) is brand only — never repurpose it as a semantic success color in the same view. Use `--color-success` (`#10B981`) for that. |
| **Motion has purpose** | Transitions signal state changes — not decoration. Entry = decelerate. Exit = accelerate. Spring easing only for achievements and level-ups. |
| **Offline first** | All static content and progress render from local cache — no loading spinner for data the user already has. |

### 21.1 Visual Style Reference

The design language is derived from modern fintech/productivity app aesthetics:

| Element | Style |
| --- | --- |
| Page background | Soft mint `#F0FBF4` — not pure white, not gray |
| Card surface | Pure white `#FFFFFF` with `box-shadow: 0 4px 20px rgba(0,0,0,0.06)` |
| Glass overlay | `rgba(255,255,255,0.72)` + `backdrop-filter: blur(12px)` — modals, drawers |
| Primary CTA | Solid vivid green `#00C853` pill, white text, full width on mobile |
| Secondary CTA | Dark navy `#0D1B2A` pill, white icon/text |
| Hero card | Dark forest green gradient (`#1B4332 → #2D6A4F`) with abstract blob/glow overlay |
| Onboarding illustration | Abstract 3D geometric shapes (spheres, rings, grid lines) in brand green palette |
| Bar / progress charts | Translucent mint fill `rgba(0,200,83,0.25)` on `rgba(0,0,0,0.04)` track |
| Border radius | Cards `24px`, modals `28px`, buttons `9999px` (full pill), chips `9999px` |
| Typography accent | Key headline words use `color: #00C853` inline — "all features", course name |

---

## 22. Color System

### 22.1 Brand Palette (Primitive Tokens)

These are the raw palette values. Components never reference them directly — they always use semantic tokens.

#### Vivid Green Scale (Primary Brand)

| Token | Hex | Usage |
| --- | --- | --- |
| `--brand-50` | `#E8F5E9` | page background tint, shape fills |
| `--brand-100` | `#C8E6C9` | hover state on light surface |
| `--brand-200` | `#A5D6A7` | bar chart fill, illustration accent |
| `--brand-300` | `#81C784` | hover / mid accent |
| `--brand-400` | `#66BB6A` | active chip, toggle on |
| `--brand-500` | `#4CAF50` | mid-brand (rarely used directly) |
| `--brand-600` | `#00C853` | **primary CTA, highlight text, badges** |
| `--brand-700` | `#00B248` | CTA hover / pressed state |
| `--brand-800` | `#007E33` | dark card accent, deep illustration |
| `--brand-900` | `#004D1A` | deepest green — hero gradient start |

#### Dark Forest Scale (Hero Cards)

Used for the "credit card" style hero element, dark stat cards, and the always-dark header.

| Token | Hex | Usage |
| --- | --- | --- |
| `--forest-400` | `#2D6A4F` | hero card highlight / gradient end |
| `--forest-500` | `#1B4332` | hero card gradient mid |
| `--forest-600` | `#143A2B` | hero card gradient start |
| `--forest-700` | `#0C2318` | deep shadow on hero card |

#### Navy Scale (Text & Secondary Surfaces)

| Token | Hex | Usage |
| --- | --- | --- |
| `--navy-50` | `#E8ECF2` | faint nav background |
| `--navy-100` | `#C5CDD8` | subtle borders |
| `--navy-200` | `#8FA3B8` | tertiary text |
| `--navy-300` | `#607892` | secondary text (dark mode) |
| `--navy-400` | `#3D5270` | disabled elements |
| `--navy-500` | `#1A2D4A` | icons, secondary buttons |
| `--navy-600` | `#0D1B2A` | **primary text, social buttons, dark cards** |
| `--navy-700` | `#091423` | header hover, tab bar |
| `--navy-800` | `#060E1A` | darkest surface (dark mode page) |
| `--navy-900` | `#030812` | deepest background (dark mode) |

#### Gold Accent Scale — XP, achievements, Pro features only

| Token | Hex | Usage |
| --- | --- | --- |
| `--gold-300` | `#F5C84A` | shimmer highlight |
| `--gold-400` | `#EFC870` | level-up glow |
| `--gold-500` | `#D4A853` | XP bar, certificate accents |
| `--gold-600` | `#C89432` | PRO badge text, reward borders |

---

### 22.2 Semantic Tokens (Light Mode / Dark Mode)

Components only use semantic tokens via `var()`. The dark mode switch overrides these on `html.dark`.

#### Surfaces

| Token | Light | Dark |
| --- | --- | --- |
| `--surface-page` | `#F0FBF4` *(soft mint)* | `#060E14` |
| `--surface-card` | `#FFFFFF` | `#0D1B2A` |
| `--surface-elevated` | `#E8F5E9` | `#112236` |
| `--surface-glass` | `rgba(255,255,255,0.72)` | `rgba(13,27,42,0.80)` |
| `--surface-header` | `#0D1B2A` *(always dark)* | `#0D1B2A` *(unchanged)* |
| `--surface-hero-start` | `#143A2B` | `#0C2318` |
| `--surface-hero-mid` | `#1B4332` | `#143A2B` |
| `--surface-hero-end` | `#2D6A4F` | `#1B4332` |
| `--surface-dark-card` | `#0D1B2A` | `#060E14` |

> **Header rule:** `--surface-header` is `#0D1B2A` in both light and dark mode — it never changes. This keeps the top bar anchored and prevents jarring contrast flips when toggling themes.

#### Text

| Token | Light | Dark |
| --- | --- | --- |
| `--text-primary` | `#0D1B2A` | `#E8F0F8` |
| `--text-secondary` | `#546E7A` | `#7A9BB8` |
| `--text-tertiary` | `#8FA3B8` | `#4F6880` |
| `--text-disabled` | `#B0BEC5` | `#2D4560` |
| `--text-inverse` | `#FFFFFF` | `#FFFFFF` |
| `--text-accent` | `#00C853` | `#00C853` *(same both modes)* |

#### Borders

| Token | Light | Dark |
| --- | --- | --- |
| `--border-subtle` | `rgba(13,27,42,0.06)` | `rgba(255,255,255,0.05)` |
| `--border-default` | `rgba(13,27,42,0.10)` | `rgba(255,255,255,0.08)` |
| `--border-strong` | `rgba(13,27,42,0.18)` | `rgba(255,255,255,0.14)` |
| `--border-accent` | `rgba(0,200,83,0.35)` | `rgba(0,200,83,0.30)` |

#### Functional Colors (same in both modes)

| Token | Hex | Usage |
| --- | --- | --- |
| `--color-success` | `#10B981` | correct answers, completed states |
| `--color-warning` | `#F59E0B` | in-progress, time warnings |
| `--color-error` | `#EF4444` | wrong answers, failures |
| `--color-info` | `#3B82F6` | notes, informational callouts |

#### Glassmorphism Tokens

| Token | Value | Usage |
| --- | --- | --- |
| `--glass-bg` | `rgba(255,255,255,0.72)` | modal, drawer background |
| `--glass-blur` | `blur(12px)` | `backdrop-filter` value |
| `--glass-border` | `rgba(255,255,255,0.40)` | glass card border |
| `--glass-shadow` | `0 8px 32px rgba(0,0,0,0.10)` | glass card elevation |

---

### 22.3 Course Accent Colors

Each course has its own accent. Used for the hero glow, progress bar, topic number badge, and the colored keyword in the course title:

| Course Slug | Accent Hex | Name | Usage |
| --- | --- | --- | --- |
| `angular-fundamentals` | `#DD0031` | Angular Red | hero gradient, progress fill |
| `components-templates` | `#FF6D00` | Deep Orange | card accent, bar fill |
| `services-di` | `#0288D1` | Sky Blue | chip active, topic badge |
| `routing-navigation` | `#6200EA` | Deep Purple | hero glow, badge |
| `rxjs` | `#B7178C` | RxJS Magenta | hero gradient, fill |
| `ngrx` | `#8B5CF6` | Violet | bar fill, badge |
| `angular-testing` | `#10B981` | Emerald | progress bar, badge |
| `performance` | `#F59E0B` | Amber | hero glow, badge |

> Course accent colors coexist with the global `#00C853` vivid green — the accent is per-course, the brand green is app-wide UI chrome.

---

## 23. Typography System

Font stack: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
Code font: `'JetBrains Mono', 'Fira Code', monospace`

**Type Scale** (7 levels — every text in the app maps to exactly one of these):

| Level | Size | Weight | Line-height | Tracking | Usage |
| --- | --- | --- | --- | --- | --- |
| Display | `2.0rem` | 900 | 1.10 | `-0.04em` | Hero numbers, large XP counts |
| H1 | `1.5rem` | 900 | 1.20 | `-0.03em` | Page titles |
| H2 | `1.2rem` | 800 | 1.30 | `-0.02em` | Section titles |
| H3 | `1.0rem` | 700 | 1.40 | `-0.01em` | Card titles, topic names |
| Body | `0.875rem` | 500 | 1.60 | `0em` | Paragraph text, descriptions |
| Caption | `0.75rem` | 600 | 1.40 | `0em` | Meta text, durations, timestamps |
| Overline | `0.625rem` | 800 | 1.00 | `+0.10em` | Category badges, section labels (always uppercase) |

---

## 24. Spacing & Layout System

**Spacing Scale** — all gaps, paddings, and margins use this 4pt grid:

| Token | Value | Common use |
| --- | --- | --- |
| `--space-1` | `4px` | icon-to-label gaps |
| `--space-2` | `8px` | inner chip padding, tight card gaps |
| `--space-3` | `12px` | badge padding, list item gaps |
| `--space-4` | `16px` | default card padding-x, section gaps |
| `--space-5` | `20px` | hero inner padding |
| `--space-6` | `24px` | section spacing |
| `--space-8` | `32px` | large section breaks |
| `--space-10` | `40px` | hero top padding |
| `--space-12` | `48px` | page bottom padding |
| `--space-16` | `64px` | desktop hero padding |

**Border Radius Scale:**

| Token | Value | Used on |
| --- | --- | --- |
| `--radius-sm` | `8px` | diff tags, code inline, icon badges |
| `--radius-md` | `12px` | buttons, search input |
| `--radius-lg` | `16px` | course cards |
| `--radius-xl` | `20px` | filter chips, streak badge |
| `--radius-2xl` | `24px` | modal overlays |
| `--radius-full` | `9999px` | pill buttons, progress bars |

**Responsive Breakpoints:**

| Name | Min-width | Layout |
| --- | --- | --- |
| Mobile | `< 640px` | 1-column, 16px horizontal padding |
| Tablet | `≥ 640px` | 2-column cards, 24px padding |
| Desktop | `≥ 1024px` | 2–3 col cards, pinned sidebar, 40px padding |
| Wide | `≥ 1200px` | 3-column cards |
| Ultrawide | `≥ 1500px` | 4-column cards, 48–64px padding |

---

## 25. Component Design Library

### 25.1 Header

```text
┌──────────────────────────────────────────────────────┐
│ ≡  AngularIQ  PRO        🔍  🔥12  [avatar]          │
└──────────────────────────────────────────────────────┘
```

- Background: `--surface-header` (`#0D1B2A`) — **always dark navy** in both light and dark mode.
- Left: hamburger menu (hidden ≥ 1024px when sidebar is pinned) + wordmark.
- Wordmark: white text, `#00C853` vivid green on the "IQ" suffix, gold PRO badge if subscribed.
- Right: search icon button → opens search modal; streak badge (orange glow when > 0); user avatar.
- Height: `52px` + `env(safe-area-inset-top)` padding on iOS.

---

### 25.2 Hero Banner

Used on Dashboard, Tutorial List, Assessments, Progress pages.

```text
┌──────────────────────────────────────────────────────┐
│  ░░░░ ambient glow blob (radial-gradient pseudo)      │
│  ◉◉◉  abstract 3D shapes (illustration layer)        │
│                                                       │
│  👋 Hello, Sathish                                   │
│     "Keep up the streak!"                            │
│                                                       │
│  ▓▓▓▓▓▓▓▓▓▓░░░░░░  Level 7 · 1240 / 1600 XP        │
│                                                       │
└──────────────────────────────────────────────────────┘
```

- Background: dark forest green 3-stop diagonal: `--forest-600 → --forest-500 → --forest-400`.
- Two ambient radial glows via `::before` (vivid green `#00C853` at 15% opacity, top-right) and `::after` (gold `#D4A853` at 10%, bottom-left).
- Abstract geometric illustration (circles, rings, grid lines) rendered as SVG layer over the gradient — same visual language as the onboarding screen.
- XP bar: `height: 8px`, `border-radius: 9999px`, vivid green `#00C853` fill, animated shimmer (`background-size: 300% 100%`, infinite).
- On detail pages: hero shows course badge chip + title + subtitle + stat pills (chapters, time).
- Dashboard hero: user avatar + name + greeting line + XP bar + level badge.

---

### 25.3 Cards

**Course Card** (list page)

```text
┌────────────────────────────────────────────────┐
│  [icon]  Angular Fundamentals   [In Progress]  │
│          Components, templates, data binding…  │
│          ◐ Beginner · 20 ch. · 8h              │
│          ████████░░░░ 45%                      │
│                                          [▶]   │
└────────────────────────────────────────────────┘
```

- `background: #FFFFFF`, `border-radius: 24px`, `box-shadow: 0 4px 20px rgba(0,0,0,0.06)`.
- No border — depth comes from shadow alone (glassmorphism principle).
- Left accent stripe: `4px`, full height, course accent color.
- Status chip: "In Progress" (navy `#0D1B2A` + white text) / "Done" (vivid green `#00C853` + white) — only rendered when progress > 0.
- Progress bar: `height: 5px`, vivid green fill on `rgba(0,0,0,0.06)` track.
- Hover: `translateY(-3px)` + `box-shadow: 0 12px 32px rgba(0,0,0,0.10)`.
- Active: `scale(0.98)`.

**Stat / Summary Card** (dashboard — two side by side, like "Total Spent / Total Received")

```text
┌──────────────────┐  ┌──────────────────┐
│  Topics Done  ↗  │  │  XP Earned    ↙  │
│  June 2026        │  │  June 2026        │
│  [green bg]      │  │  [navy bg]        │
└──────────────────┘  └──────────────────┘
```

- Left card: `background: #00C853`, white text — primary metric.
- Right card: `background: #0D1B2A`, white text — secondary metric.
- Both: `border-radius: 20px`, icon arrow top-right, label + month sub-label.

**Topic Card** (detail/curriculum page)

```text
┌─────────────────────────────────────────────────┐
│ ▌  [7]  Data Binding                 15 min [▶] │
│    Two-way binding, interpolation, event binding│
└─────────────────────────────────────────────────┘
```

- `background: #FFFFFF`, `border-radius: 16px`, `box-shadow: 0 2px 8px rgba(0,0,0,0.05)`.
- Left `4px` vertical accent stripe — course accent color.
- Number badge: `32×32px`, `border-radius: 8px`, `background: rgba(0,200,83,0.12)`, `color: #00C853`.
- Completed state: badge becomes vivid green `#00C853` with white checkmark; title `opacity: 0.55`.
- Locked state: arrow replaced by lock icon; card `opacity: 0.50`.

---

### 25.4 Filter Chips

Horizontally scrollable row (mobile) / wrapping row (desktop).

```text
[ ◉ All ]  [ ◈ Angular ]  [ ⬡ Reactive ]  [ ⚡ Advanced ]
```

- Default: `background: rgba(13,27,42,0.06)`, `border: 1px solid rgba(13,27,42,0.10)`, text `--text-secondary`.
- Active: `background: rgba(0,200,83,0.12)`, `border-color: rgba(0,200,83,0.35)`, text `#00C853`, font-weight `600`.
- Dark mode default: `background: rgba(255,255,255,0.06)`, border `rgba(255,255,255,0.10)`.
- Height: `32px`, `border-radius: 9999px` (full pill).
- Transition: `all 0.15s ease`.

---

### 25.5 Badges & Chips

| Variant | Background | Text | Border-radius |
| --- | --- | --- | --- |
| Brand / page label | `rgba(0,200,83,0.12)` | `#00C853` | `9999px` |
| Percentage / stat badge | `#00C853` solid | `#FFFFFF` | `9999px` |
| Difficulty — Beginner | `rgba(16,185,129,0.12)` | `#10B981` | `8px` |
| Difficulty — Intermediate | `rgba(59,130,246,0.12)` | `#3B82F6` | `8px` |
| Difficulty — Advanced | `rgba(245,158,11,0.12)` | `#F59E0B` | `8px` |
| Status — In Progress | `#0D1B2A` | `#FFFFFF` | `9999px` |
| Status — Done | `#00C853` | `#FFFFFF` | `9999px` |
| PRO badge | `linear-gradient(135deg,#D4A853,#F5C84A)` | `#0A1F13` | `8px` |
| New / unread | `#00C853` solid small dot | — | `9999px` |

Font: overline scale (`0.625rem`, `800`, `+0.10em` tracking, uppercase).

---

### 25.6 Progress Bars

```text
████████████░░░░░░  65%
```

- Track: `height: 5–8px`, `border-radius: 9999px`, `background: rgba(0,200,83,0.10)` (light) / `rgba(255,255,255,0.06)` (dark).
- Fill: `border-radius: 9999px`, `background: #00C853` (global) or course accent (per-course), `transition: width 0.5s cubic-bezier(0.4,0,0.2,1)`.
- XP fill: animated shimmer — `background: linear-gradient(90deg, #00C853 0%, #00E676 50%, #00C853 100%)`, `background-size: 300% 100%`, `animation: shimmer 4s linear infinite`.
- Horizontal stat bars (Progress page, Dashboard stats): same style but `height: 8–10px`, `border-radius: 9999px`, translucent mint fill `rgba(0,200,83,0.30)` on near-invisible track.

---

### 25.7 Buttons

| Variant | Background | Text | Border-radius | Use |
| --- | --- | --- | --- | --- |
| Primary (CTA) | `#00C853` | `#FFFFFF` | `9999px` (pill) | "Get started", "Start Quiz", "Mark Complete" |
| Primary hover | `#00B248` | `#FFFFFF` | — | — |
| Primary pressed | `#007E33` `scale(0.97)` | — | — | — |
| Secondary (social) | `#0D1B2A` | `#FFFFFF` | `9999px` (pill) | Google, Apple sign-in |
| Icon action | `rgba(13,27,42,0.08)` | `#0D1B2A` | `9999px` | Send, Card, More quick-actions |
| Icon action dark | `rgba(255,255,255,0.10)` | `#FFFFFF` | `9999px` | Header icon buttons |
| Ghost | transparent + border `rgba(13,27,42,0.16)` | `--text-primary` | `9999px` | "See all", "Full list" |
| Certificate | `linear-gradient(135deg,#D4A853,#F5C84A)` | `#0A1F13` | `9999px` | Course complete CTA |
| Danger | `rgba(239,68,68,0.10)` | `#EF4444` | `12px` | Destructive actions |

All buttons: minimum tap target `44×44px`. Primary CTA is full-width on mobile.

---

### 25.8 Code Block

- Background: `#1E293B` (dark slate) — same in both themes for syntax contrast.
- Font: JetBrains Mono, `0.82rem`, `500`.
- Border: `1px solid rgba(255,255,255,0.08)`, `border-radius: --radius-md`.
- Language label: top-right overline chip.
- Copy button: top-right icon, appears on hover.
- PrismJS theme: `prism-tomorrow`.

---

### 25.9 Content Callouts (note / tip / warning)

```text
┌──────────────────────────────────────────┐
│ 💡 TIP                                   │
│    Prefer OnPush + signals on every      │
│    component to cut CD overhead by ~80%  │
└──────────────────────────────────────────┘
```

| Type | Left border | Background | Icon |
| --- | --- | --- | --- |
| `note` | `#3B82F6` | `rgba(59,130,246,0.08)` | ℹ |
| `tip` | `#10B981` | `rgba(16,185,129,0.08)` | 💡 |
| `warning` | `#F59E0B` | `rgba(245,158,11,0.08)` | ⚠ |

- `border-left: 3px solid <color>`, `border-radius: 0 --radius-md --radius-md 0`.

---

### 25.10 Elevation & Shadows

| Token | Value | Used on |
| --- | --- | --- |
| `--shadow-1` | `0 2px 8px rgba(0,0,0,0.04)` | topic cards at rest |
| `--shadow-2` | `0 4px 20px rgba(0,0,0,0.06)` | course cards at rest |
| `--shadow-3` | `0 12px 32px rgba(0,0,0,0.10)` | card hover, quick-action buttons |
| `--shadow-4` | `0 20px 48px rgba(0,0,0,0.14)` | modals, drawers, bottom sheets |
| `--shadow-glass` | `0 8px 32px rgba(0,0,0,0.10)` | glassmorphism overlays |
| `--shadow-brand-sm` | `0 2px 12px rgba(0,200,83,0.18)` | active quick-action, chip active |
| `--shadow-brand-md` | `0 6px 24px rgba(0,200,83,0.25)` | primary CTA button glow |
| `--shadow-gold-glow` | `0 0 20px rgba(212,168,83,0.35)` | streak badge, XP fill, PRO badge |

> Light mode cards rely entirely on shadow for depth — no borders. This matches the image's clean white-card aesthetic where separation is implied by shadow, not outline.

---

## 26. Motion & Animation Tokens

| Token | Value | When to use |
| --- | --- | --- |
| `--duration-instant` | `80ms` | toggle/checkbox state flips |
| `--duration-fast` | `120ms` | button press, filter chip toggle |
| `--duration-normal` | `200ms` | card hover transforms, badge fades |
| `--duration-slow` | `350ms` | page transitions, modal open |
| `--duration-slower` | `500ms` | progress bar fill, XP bar update |
| `--ease-standard` | `cubic-bezier(0.4,0,0.2,1)` | most transitions |
| `--ease-decelerate` | `cubic-bezier(0,0,0.2,1)` | elements entering the screen |
| `--ease-accelerate` | `cubic-bezier(0.4,0,1,1)` | elements leaving the screen |
| `--ease-spring` | `cubic-bezier(0.34,1.56,0.64,1)` | achievement toasts, level-up only |

**Rules:**

- Never animate `width` or `height` directly — use `transform: scaleX()` or `max-height` tricks.
- `transform` and `opacity` only for 60fps on mobile.
- Spring easing is reserved for reward moments — overusing it degrades trust.
- Respect `prefers-reduced-motion`: wrap all non-essential animations in `@media (prefers-reduced-motion: no-preference)`.

---

## 27. Page-by-Page Design Plan

### 27.1 Onboarding (`/onboarding`)

**Purpose:** First-time user welcome. Single scroll, no navigation bar.

```text
┌──────────────────────────────────────┐
│         [App logo / wordmark]        │
│                                      │
│   Learn Angular.                     │
│   One topic a day.                   │
│                                      │
│  [illustration / lottie animation]   │
│                                      │
│   ● ○ ○   (3 slides)                │
│                                      │
│       [ Get Started →  ]             │
│    Already have account? Sign In     │
└──────────────────────────────────────┘
```

- Full-screen dark gradient background (`hero-start → hero-end`).
- 3 swipeable slides: What is it / How it works / What you get.
- Single primary CTA pill button (full-width on mobile).
- Skip link top-right for returning users.

---

### 27.2 Dashboard (`/dashboard`)

**Purpose:** Daily home base. Shows progress at a glance and surfaces today's action.

```text
┌──────────────────────────────────────┐
│  HEADER  (sticky)                    │
├──────────────────────────────────────┤
│  HERO BANNER                         │
│  👋 Hello, Sathish                   │
│  Level 7  ████████░░░ 1240 XP        │
├──────────────────────────────────────┤
│  TODAY'S FOCUS                       │
│  ┌────────────────────────────────┐  │
│  │ ⚡ Daily Challenge · +50 XP   │  │
│  └────────────────────────────────┘  │
├──────────────────────────────────────┤
│  🔥 Streak Card  (7 days)            │
│  Continue Learning Card              │
│  Daily Goal Card                     │
├──────────────────────────────────────┤
│  QUICK ACCESS GRID (2×2)             │
│  [Tutorials] [Assessments]           │
│  [Interview] [Progress]              │
├──────────────────────────────────────┤
│  TAB BAR (mobile)                    │
└──────────────────────────────────────┘
```

**Layout rules:**

- Max-width `640px`, centered, `padding: 0 16px`.
- Hero banner: dark gradient, ambient glows, XP bar with shimmer animation.
- Today's Focus Card: single dynamically-chosen card (Daily Challenge → Review Queue → Study Plan → fallback "Explore Tutorials").
- Quick Access Grid: `2×2` responsive grid of shortcut cards.
- Desktop: sidebar pinned left (250px), dashboard content fills remaining width.

---

### 27.3 Tutorial List (`/tutorials`)

**Purpose:** Browse and choose a course.

```text
┌──────────────────────────────────────┐
│  HERO  Angular Tutorials             │
│  8 courses · 112 chapters · 62h      │
│  [ 🔍 Search courses and topics… ]  │
├──────────────────────────────────────┤
│  [All] [Core] [Reactive] [Advanced]  │  ← Topic filter row
│  [◉ All] [◐ Beginner] [● Int] [▲ Adv]│  ← Difficulty filter row
├──────────────────────────────────────┤
│  3 / 8 courses                 Clear │
├──────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  │
│  │ [icon] Course│  │ [icon] Course│  │
│  │ desc…        │  │ desc…        │  │
│  │ ◐ · 20ch · 8h│  │ ● · 18ch · 8h│  │
│  │ ████████ 45% │  │              │  │
│  └──────────────┘  └──────────────┘  │
│  ... (grid continues)                │
└──────────────────────────────────────┘
```

**Layout rules:**

- Hero: slim (20–24px padding), search bar inline below title.
- Two filter rows: topic track (horizontal scroll) + difficulty; stacked vertically.
- Results bar shows `n / total courses` + "Clear filters" button.
- Cards: `1 col` mobile → `2 col` tablet → `3 col` desktop → `4 col` wide.
- Sort: in-progress first → not-started → completed.

---

### 27.4 Tutorial Detail (`/tutorials/:slug`)

**Purpose:** Show the full curriculum for one course with completion state.

```text
┌──────────────────────────────────────┐
│  ← back    AngularIQ                 │
├──────────────────────────────────────┤
│  HERO (full-width, dark gradient)    │
│  [ANGULAR badge]                     │
│  Angular Fundamentals                │
│  From zero to confident Angular dev  │
│                                      │
│  📖 20 Chapters    ⏱ 8 hours        │
│                                      │
│  ████████████░░░  8 / 20 completed   │
│  (certificate button if 100%)        │
├──────────────────────────────────────┤
│  CURRICULUM  ·  20 Topics            │
│  ┌───────────────────────────────┐   │
│  │▌ ✓ 1  Data Binding   15m Done│   │
│  │▌   2  Directives     20m  ▶  │   │
│  │▌ 🔒 3  Pipes         25m  🔒 │   │
│  └───────────────────────────────┘   │
└──────────────────────────────────────┘
```

**Layout rules:**

- Back button always visible (mobile toolbar).
- Hero: gradient uses `themeColor` as glow source; badge chip + title (H1) + subtitle (Body) + stat pills.
- Progress bar appears only when `completedCount > 0`.
- Certificate button appears when `progress === 100%` — gold gradient pill.
- Curriculum list: cards with vertical accent stripe, number badge, title, description (2-line clamp), duration, status.
- Desktop: hero 2-column grid (title/subtitle left, stat pills right); curriculum list 2–3 column grid.

---

### 27.5 Topic Page (`/tutorials/:slug/:topic`)

**Purpose:** Full-screen lesson content.

```text
┌──────────────────────────────────────┐
│  ← back                              │
├──────────────────────────────────────┤
│  HERO                                │
│  [ANGULAR CORE]                      │
│  Change Detection                    │
│  Understand how Angular decides…     │
├──────────────────────────────────────┤
│  CONTENT                             │
│  [inline ad — free users]            │
│                                      │
│  ## Default vs OnPush                │
│  <paragraph>                         │
│  <code block>                        │
│  <note callout>                      │
│                                      │
│  ## Interactive Demo (optional)      │
│  <visualizer card>                   │
│  [ Run ] [ Reset ]                   │
│                                      │
│  [inline ad — free users]            │
│                                      │
│  ← Prev Topic    Mark Complete ✓    Next → │
└──────────────────────────────────────┘
```

**Layout rules:**

- `TutorialLayoutComponent` wraps all content — provides hero + scroll + ad slots.
- Hero: `padding: clamp(40px,8vw,80px)` vertical, centered, text white on gradient.
- Content: `max-width: 720px`, centered, `padding: 0 clamp(16px,5vw,48px)`.
- Interactive visualizer (optional): dark card with controls, signals-driven.
- Bottom nav: prev/next topic + "Mark Complete" button (calls `DataService.markTopicComplete()`).
- On completion: triggers `GamificationService.addXp()` and shows `AchievementToastComponent`.

---

### 27.6 Assessments List (`/assessments`)

**Purpose:** Browse available quizzes, show personal stats for returning users.

```text
┌──────────────────────────────────────┐
│  HERO                                │
│  Assess Your Knowledge               │
│  8 Quizzes · Instant feedback        │
│  ┌──────────┐  ┌──────────┐         │
│  │ 8 Quizzes│  │  12m avg │         │
│  └──────────┘  └──────────┘         │
│  [ Start with Angular Basics → ]     │
├──────────────────────────────────────┤
│  Filters: [All] [Beginner] [Passed]  │
├──────────────────────────────────────┤
│  ┌────────────────────────────────┐  │
│  │ [icon]  Angular Basics  [New] │  │
│  │  Beginner · 15 Qs · 10 min   │  │
│  └────────────────────────────────┘  │
│  ... more cards                      │
└──────────────────────────────────────┘
```

**Returning user:** hero replaces catalog stats with personal stats (X/8 completed, avg score %).

---

### 27.7 Quiz Screen (`/assessments/:id`)

**Three phases — Start → Quiz → Result — rendered in the same component.**

**Start screen:**

```text
┌──────────────────────────────────────┐
│  ← back                              │
│                                      │
│     [course icon]                    │
│     intermediate                     │
│     RxJS Operators Quiz              │
│  "One correct answer per question"   │
│                                      │
│  ┌──────┬──────────┬────────────┐    │
│  │ 15 Qs│  10 min  │  ∞ retakes │    │
│  └──────┴──────────┴────────────┘    │
│                                      │
│  Tips:  ○ Read carefully             │
│         ○ Eliminate wrong answers    │
│                                      │
│       [ Start Quiz → ]               │
└──────────────────────────────────────┘
```

**Active quiz:**

```text
┌──────────────────────────────────────┐
│  ←   5 / 15  ████████░░░░░  [ 8:42] │
├──────────────────────────────────────┤
│                                      │
│  Q5. Which operator cancels the      │
│  previous inner Observable when a    │
│  new value arrives?                  │
│                                      │
│  ○  mergeMap                         │
│  ○  concatMap                        │
│  ● switchMap          ← selected     │
│  ○  exhaustMap                       │
│                                      │
│       [ Next Question → ]            │
└──────────────────────────────────────┘
```

- Progress bar + question counter + countdown timer in toolbar.
- Timer turns amber `≤ 60s`, red `≤ 30s`.
- Selected answer: filled circle, `accentColor` border, lighter background.
- After answer chosen: reveal correct/incorrect with color feedback.

**Result screen:**

```text
┌──────────────────────────────────────┐
│   🏆  Score: 80%  — PASSED           │
│   12 / 15 correct · 6m 23s           │
│                                      │
│  ████████████░░░  Personal best: 80% │
│                                      │
│  [ View Answers ]  [ Retake Quiz ]   │
│  [ Share Result ]                    │
└──────────────────────────────────────┘
```

---

### 27.8 Progress Page (`/progress`)

**Purpose:** Visual breakdown of mastery across all courses and categories.

```text
┌──────────────────────────────────────┐
│  ← My Progress                       │
│  Answered 340 / 500 questions        │
├──────────────────────────────────────┤
│  OVERALL RING  (68%)                 │
│  XP: 3,240  Level 7  Streak: 12      │
├──────────────────────────────────────┤
│  BY CATEGORY                         │
│  Angular Fundamentals   ████░  80%   │
│  RxJS                   ██░░░  40%   │
│  NgRx                   █░░░░  20%   │
│  …                                   │
├──────────────────────────────────────┤
│  ACHIEVEMENTS  (3 unlocked)          │
│  [badge] [badge] [badge] [locked]…   │
└──────────────────────────────────────┘
```

- Category bars: semantic color (green ≥ 75%, amber 25–74%, red < 25%).
- Ring chart: CSS conic-gradient centered with level + percentage label inside.

---

### 27.9 Settings (`/settings`)

**Purpose:** Account, preferences, subscription.

Sections (accordion rows):

1. **Account** — avatar, display name, email, Sign Out.
2. **Theme** — system / light / dark toggle chips.
3. **Goal** — FAANG / Switch Jobs / First Job / Upskill.
4. **Reminders** — push notification time picker.
5. **Language** — locale switcher.
6. **Subscription** — Pro plan card + upgrade CTA (if free).
7. **About** — version, privacy policy, terms.

---

### 27.10 Sidebar Navigation (Desktop ≥ 1024px)

The hamburger menu collapses into a **pinned left sidebar** at desktop width.

```text
┌────────────┐
│  AngularIQ │  ← wordmark
│            │
│  Dashboard │  ← active item has accent left border
│  Tutorials │
│  Assess    │
│  Interview │
│  Progress  │
│  ─────     │
│  Settings  │
│            │
│  🔥 12     │  ← streak pill at bottom
│  [avatar]  │
└────────────┘
```

- Width: `240px`, `background: #0D1B2A` (dark navy, same as header — always dark).
- Nav items: `padding: 10px 16px`, `border-radius: 12px`, hover = `rgba(0,200,83,0.08)`.
- Active item: left `3px solid #00C853` border + text `#00C853` + background `rgba(0,200,83,0.12)`.
- Bottom user section: avatar + name + streak pill, separated by a subtle divider `rgba(255,255,255,0.08)`.

---

## 28. Dark Mode Strategy

The theme is controlled by a `ThemeService` that writes a class to `<html>`:

```typescript
// theme.service.ts
type ThemePreference = 'system' | 'light' | 'dark';

applyTheme(pref: ThemePreference) {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = pref === 'dark' || (pref === 'system' && prefersDark);
  document.documentElement.classList.toggle('dark', isDark);
  localStorage.setItem('theme', pref);
}
```

**Light mode base tokens** (defined in `:root`):

```css
:root {
  --surface-page:     #F0FBF4;   /* soft mint background */
  --surface-card:     #FFFFFF;
  --surface-elevated: #E8F5E9;
  --surface-glass:    rgba(255,255,255,0.72);
  --surface-header:   #0D1B2A;   /* always dark navy — never changes */
  --surface-dark-card:#0D1B2A;

  --text-primary:     #0D1B2A;
  --text-secondary:   #546E7A;
  --text-tertiary:    #8FA3B8;
  --text-accent:      #00C853;

  --border-subtle:    rgba(13,27,42,0.06);
  --border-default:   rgba(13,27,42,0.10);
  --border-accent:    rgba(0,200,83,0.35);

  --shadow-2:         0 4px 20px rgba(0,0,0,0.06);
  --shadow-brand-md:  0 6px 24px rgba(0,200,83,0.25);
}
```

**Dark mode overrides** on `html.dark`:

```css
html.dark {
  --surface-page:     #060E14;
  --surface-card:     #0D1B2A;
  --surface-elevated: #112236;
  --surface-glass:    rgba(13,27,42,0.80);
  /* --surface-header stays #0D1B2A — no override needed */

  --text-primary:     #E8F0F8;
  --text-secondary:   #7A9BB8;
  --text-tertiary:    #4F6880;

  --border-subtle:    rgba(255,255,255,0.05);
  --border-default:   rgba(255,255,255,0.08);
  --border-accent:    rgba(0,200,83,0.30);

  --shadow-2:         0 4px 20px rgba(0,0,0,0.20);
}
```

**Vivid green `#00C853` is the same in both modes** — it has sufficient contrast against both white (`#FFFFFF`) and dark navy (`#0D1B2A`). No override needed for `--text-accent` or brand green fills.

**Always-dark elements:** Header, sidebar nav, dark stat cards, and hero card backgrounds use navy/forest tokens that don't change. These anchor the screen and prevent the full-inversion feel that makes dark mode look washed out.

**Component-level overrides** use `:host-context(html:not(.dark))` for anything that can't be expressed via a single token swap — rare edge cases only.

---

## 29. Accessibility Checklist

- [ ] All interactive elements meet **44×44px minimum touch target**.
- [ ] Color contrast: **WCAG AA** minimum — `4.5:1` for body text, `3:1` for large text and UI components.
- [ ] Vivid green `#00C853` on white `#FFFFFF` — ratio `3.15:1` (passes for large text ≥ 18px / bold ≥ 14px). Never use it for small body text on white.
- [ ] Every icon-only button has `aria-label`.
- [ ] Progress bars use `role="progressbar"` + `aria-valuenow` / `aria-valuemin` / `aria-valuemax`.
- [ ] Filter chips use `aria-pressed` to communicate toggle state.
- [ ] Course list has `role="list"` + `role="listitem"` on each card.
- [ ] Focus rings: visible `3px solid #00C853` outline on `:focus-visible`, never `:focus`.
- [ ] `prefers-reduced-motion`: all CSS animations wrapped — remove shimmer, `translateY`, and spring transitions when disabled.
- [ ] Screen reader skip link: `<a href="#main-content" class="sr-only">Skip to main content</a>` before the header.
- [ ] All code blocks have `tabindex="0"` so keyboard users can scroll them.
- [ ] Glassmorphism cards with `backdrop-filter` must have a solid fallback (`background: rgba(255,255,255,0.95)`) for browsers without support.

---

## 30. Theme Implementation Reference

### 30.1 `src/styles/tokens.css` — Full primitive + semantic token set

```css
/* ── Primitive Tokens ─────────────────────────────── */
:root {
  /* Vivid Green */
  --brand-50:  #E8F5E9;  --brand-100: #C8E6C9;
  --brand-200: #A5D6A7;  --brand-300: #81C784;
  --brand-400: #66BB6A;  --brand-500: #4CAF50;
  --brand-600: #00C853;  --brand-700: #00B248;
  --brand-800: #007E33;  --brand-900: #004D1A;

  /* Dark Forest (hero cards) */
  --forest-400: #2D6A4F; --forest-500: #1B4332;
  --forest-600: #143A2B; --forest-700: #0C2318;

  /* Navy (text + dark surfaces) */
  --navy-500: #1A2D4A;   --navy-600: #0D1B2A;
  --navy-700: #091423;   --navy-800: #060E1A;

  /* Gold (XP / Pro) */
  --gold-300: #F5C84A;  --gold-400: #EFC870;
  --gold-500: #D4A853;  --gold-600: #C89432;

  /* Spacing — 4pt grid */
  --space-1: 4px;   --space-2: 8px;   --space-3: 12px;
  --space-4: 16px;  --space-5: 20px;  --space-6: 24px;
  --space-8: 32px;  --space-10: 40px; --space-12: 48px;
  --space-16: 64px;

  /* Border radius */
  --radius-sm:   8px;    --radius-md:   12px;
  --radius-lg:   16px;   --radius-xl:   20px;
  --radius-2xl:  24px;   --radius-3xl:  28px;
  --radius-full: 9999px;

  /* Motion */
  --duration-instant: 80ms;   --duration-fast:   120ms;
  --duration-normal:  200ms;  --duration-slow:   350ms;
  --duration-slower:  500ms;
  --ease-standard:   cubic-bezier(0.4, 0, 0.2, 1);
  --ease-decelerate: cubic-bezier(0, 0, 0.2, 1);
  --ease-accelerate: cubic-bezier(0.4, 0, 1, 1);
  --ease-spring:     cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* ── Semantic Tokens — Light Mode (default) ───────── */
:root {
  --surface-page:      #F0FBF4;
  --surface-card:      #FFFFFF;
  --surface-elevated:  #E8F5E9;
  --surface-glass:     rgba(255, 255, 255, 0.72);
  --surface-header:    #0D1B2A;   /* always dark — no dark override */
  --surface-dark-card: #0D1B2A;
  --surface-hero-start: #143A2B;
  --surface-hero-mid:   #1B4332;
  --surface-hero-end:   #2D6A4F;

  --text-primary:   #0D1B2A;
  --text-secondary: #546E7A;
  --text-tertiary:  #8FA3B8;
  --text-disabled:  #B0BEC5;
  --text-inverse:   #FFFFFF;
  --text-accent:    #00C853;

  --border-subtle:  rgba(13, 27, 42, 0.06);
  --border-default: rgba(13, 27, 42, 0.10);
  --border-strong:  rgba(13, 27, 42, 0.18);
  --border-accent:  rgba(0, 200, 83, 0.35);

  --shadow-1:         0 2px 8px  rgba(0, 0, 0, 0.04);
  --shadow-2:         0 4px 20px rgba(0, 0, 0, 0.06);
  --shadow-3:         0 12px 32px rgba(0, 0, 0, 0.10);
  --shadow-4:         0 20px 48px rgba(0, 0, 0, 0.14);
  --shadow-glass:     0 8px 32px rgba(0, 0, 0, 0.10);
  --shadow-brand-sm:  0 2px 12px rgba(0, 200, 83, 0.18);
  --shadow-brand-md:  0 6px 24px rgba(0, 200, 83, 0.25);
  --shadow-gold-glow: 0 0 20px   rgba(212, 168, 83, 0.35);

  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-error:   #EF4444;
  --color-info:    #3B82F6;

  --glass-blur:   blur(12px);
  --glass-border: rgba(255, 255, 255, 0.40);
}

/* ── Semantic Tokens — Dark Mode override ─────────── */
html.dark {
  --surface-page:      #060E14;
  --surface-card:      #0D1B2A;
  --surface-elevated:  #112236;
  --surface-glass:     rgba(13, 27, 42, 0.80);
  /* --surface-header stays #0D1B2A — no override */

  --text-primary:   #E8F0F8;
  --text-secondary: #7A9BB8;
  --text-tertiary:  #4F6880;
  --text-disabled:  #2D4560;

  --border-subtle:  rgba(255, 255, 255, 0.05);
  --border-default: rgba(255, 255, 255, 0.08);
  --border-strong:  rgba(255, 255, 255, 0.14);
  --border-accent:  rgba(0, 200, 83, 0.30);

  --shadow-1: 0 2px 8px  rgba(0, 0, 0, 0.14);
  --shadow-2: 0 4px 20px rgba(0, 0, 0, 0.22);
  --shadow-3: 0 12px 32px rgba(0, 0, 0, 0.30);

  --glass-border: rgba(255, 255, 255, 0.10);
}
```

### 30.2 Key Color Contrast Checks

| Foreground | Background | Ratio | WCAG Level |
| --- | --- | --- | --- |
| `#00C853` on `#FFFFFF` | CTA label on white card | 3.15 : 1 | AA Large only (≥ 18px) |
| `#FFFFFF` on `#00C853` | White text on green button | 3.15 : 1 | AA Large only |
| `#0D1B2A` on `#F0FBF4` | Body text on page bg | 16.2 : 1 | AAA |
| `#0D1B2A` on `#FFFFFF` | Body text on card | 17.8 : 1 | AAA |
| `#FFFFFF` on `#0D1B2A` | White on navy button | 17.8 : 1 | AAA |
| `#E8F0F8` on `#0D1B2A` | Light text on dark card | 12.4 : 1 | AAA |
| `#00C853` on `#0D1B2A` | Green accent on dark | 5.11 : 1 | AA (all sizes) |

> Use vivid green `#00C853` as text only on `#0D1B2A` (dark) backgrounds at any size, or on white/light backgrounds at ≥ 18px / bold 14px.
