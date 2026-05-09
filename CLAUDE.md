# JavaIQ — Claude Code Guide

## Project Overview

JavaIQ (v1.5.0) is a gamified Java interview-prep app built with Angular 21 + Ionic. Users learn Java through structured tutorials, take quizzes, and earn XP/levels/streaks — think Duolingo for Java developers.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Angular 21 (standalone components, no NgModules) |
| UI | Ionic Angular 8, Tailwind CSS 4 |
| Mobile | Capacitor 7 (Android + iOS) |
| Backend | Firebase (Auth, Firestore) via `@angular/fire` |
| Monetization | RevenueCat (in-app purchases), AdMob |
| Syntax highlighting | PrismJS |
| Testing | Vitest (unit), Playwright (e2e) |

## Project Structure

```
src/app/
├── features/
│   ├── tutorials/
│   │   ├── tutorial-list.component.ts      # Browse all tutorials
│   │   ├── tutorial-detail.component.ts    # Chapter navigator
│   │   ├── topic-router.component.ts       # Routes slug → topic component
│   │   └── topics/                         # 90+ individual topic components
│   ├── assessments/
│   │   ├── assess-list.component.ts
│   │   ├── assess-quiz.component.ts
│   │   ├── assess-result.component.ts
│   │   ├── assess.service.ts               # Quiz state via Angular signals
│   │   └── assess-data.ts                  # Question bank
│   ├── interview-questions/
│   ├── coding-questions/
│   ├── leetcode/
│   ├── mock-interview/
│   ├── experiences/
│   ├── achievements/
│   ├── bookmarks/
│   ├── progress/
│   ├── review/
│   ├── study-plan/
│   └── settings/
├── data/
│   ├── tutorial.model.ts                   # Tutorial / Chapter / ContentBlock types
│   └── tutorials/
│       ├── index.ts                        # ALL_TUTORIALS array + TUTORIAL_MAP
│       ├── java-fundamentals.ts
│       ├── spring-framework.ts
│       └── spring-boot-tutorial.ts
├── models/                                 # Shared interfaces
│   ├── assessment.model.ts
│   ├── interview-question.model.ts
│   ├── coding-question.model.ts
│   └── tutorial.model.ts
└── shared/                                 # Reusable components (IconComponent, CodeBlockComponent, TutorialLayoutComponent)
```

## Key Conventions

### Angular Patterns
- **Standalone components only** — no NgModules, no `declarations`. Every component lists its own `imports: []`.
- **OnPush everywhere** — all topic components use `changeDetection: ChangeDetectionStrategy.OnPush`.
- **Signals** — use Angular `signal()` / `computed()` / `effect()` for reactive state. No BehaviorSubject for new code.
- **Template-only styles** — component styles are written inside the `styles` property, not in separate `.css` files (except legacy files).

### Topic Component Pattern
Every tutorial topic component follows this structure:
```typescript
@Component({
  selector: 'app-topic-<slug>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="..." subtitle="..." badge="CATEGORY" gradient="linear-gradient(...)">
      <!-- sections -->
    </app-tutorial-layout>
  `,
  styles: `...`
})
export class XxxComponent { ... }
```

File naming: `<prefix>-<slug>.component.ts`
Prefixes: `dp-` (design patterns), `sb-` (Spring Boot), `ms-` (microservices), `mt-` (multithreading), `hib-` (Hibernate)

### Adding a New Tutorial Topic
1. Create `src/app/features/tutorials/topics/<prefix>-<slug>.component.ts`
2. Register the route in `src/app/features/tutorials/topic-router.component.ts`
3. Add the chapter entry in the relevant tutorial data file under `src/app/data/tutorials/`

### Adding a New Tutorial Module
1. Create `src/app/data/tutorials/<name>.ts` exporting a `Tutorial` object
2. Import and add it to `ALL_TUTORIALS` and `TUTORIAL_MAP` in `src/app/data/tutorials/index.ts`

### Tutorial Data Model
```typescript
Tutorial { id, title, description, icon (Bootstrap icon), color (hex), chapters[] }
Chapter  { id, title, description, estimatedMinutes, blocks[] }
ContentBlock { type, content, language?, items? }
// types: 'paragraph' | 'heading' | 'subheading' | 'code' | 'note' | 'tip' | 'warning' | 'bullet-list' | 'numbered-list' | 'divider'
```

### Assessment / Quiz Model
- `QuizQuestion` lives in `assess-data.ts`; `ans` field is the index of the correct option
- `AssessService` manages quiz state with signals (`answers`, `result`)
- Score = `(correct / total) * 100` rounded

### Interview Question Model
```typescript
{ id, category, subcategory?, question, answer, code?, difficulty, askedAt, tags[] }
```

## Dev Commands

```bash
npm start                # ng serve — dev server at localhost:4200
npm run build            # production build → dist/
npm test                 # Vitest unit tests
npm run e2e              # Playwright e2e
npm run android:build    # ng build + cap sync android
npm run android:run      # run on Android device/emulator
```

## Gamification System (Project Ascension)

- **World Map**: 8 module nodes. Requires ≥1 star (30% score) to unlock next node.
- **XP & Levels**: Logarithmic scaling. Synced to Firebase.
- **Streaks**: Daily activity tracking.
- **Challenge Mode**: Combo multiplier for consecutive correct answers + speed bonus (<5s = +5 XP).
- **Stars**: 0–3 stars per module based on score.

## Code Style

- Prettier config in `package.json`: `printWidth: 100`, `singleQuote: true`, Angular HTML parser for templates.
- TypeScript strict mode — no implicit `any`.
- Prefer `const` over `let`. Avoid `var`.
- Java code samples in components use standard Java conventions (camelCase methods, PascalCase classes).
