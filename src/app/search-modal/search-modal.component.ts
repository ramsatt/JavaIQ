import {
  Component, inject, signal, computed, ViewChild, ElementRef,
  AfterViewInit, ChangeDetectionStrategy
} from '@angular/core';
import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular/standalone';
import { SearchService, SearchResult } from '../search.service';

type ResultType = SearchResult['type'];

const TYPE_LABELS: Record<ResultType, string> = {
  interview: 'Interview Questions',
  coding: 'Coding Questions',
  leetcode: 'LeetCode',
  tutorial: 'Tutorials',
  experience: 'Experiences'
};

const TYPE_ORDER: ResultType[] = ['tutorial', 'interview', 'coding', 'leetcode', 'experience'];

@Component({
  selector: 'app-search-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonModal],
  template: `
    <ion-modal
      #modal
      [isOpen]="isOpen()"
      (didPresent)="onDidPresent()"
      (willDismiss)="close()"
      [breakpoints]="[0, 1]"
      initialBreakpoint="1"
      cssClass="search-modal">

      <ng-template>
        <div class="sm-wrap">

          <!-- Search Input Row -->
          <div class="sm-input-row">
            <i class="fa-solid fa-magnifying-glass sm-search-icon"></i>
            <input
              #searchInput
              class="sm-input"
              type="search"
              placeholder="Search tutorials, questions, problems..."
              autocomplete="off"
              [value]="query()"
              (input)="onInput($event)" />
            <button class="sm-cancel" (click)="close()">Cancel</button>
          </div>

          <div class="sm-body">

            <!-- Recent Searches -->
            @if (!query() && recentSearches().length > 0) {
              <div class="sm-section">
                <div class="sm-section-head">
                  <span class="sm-section-title">Recent</span>
                  <button class="sm-clear-btn" (click)="clearRecent()">Clear</button>
                </div>
                @for (term of recentSearches(); track term) {
                  <button class="sm-recent-item" (click)="setQuery(term)">
                    <i class="fa-solid fa-clock-rotate-left sm-recent-icon"></i>
                    <span>{{ term }}</span>
                  </button>
                }
              </div>
            }

            <!-- Empty query hint -->
            @if (!query() && recentSearches().length === 0) {
              <div class="sm-hint">
                <i class="fa-solid fa-magnifying-glass sm-hint-icon"></i>
                <p>Search across tutorials, interview questions, LeetCode problems and more</p>
              </div>
            }

            <!-- Results -->
            @if (query()) {
              @if (grouped().length === 0) {
                <div class="sm-hint">
                  <i class="fa-solid fa-face-frown sm-hint-icon"></i>
                  <p>No results for "{{ query() }}"</p>
                </div>
              } @else {
                @for (group of grouped(); track group.type) {
                  <div class="sm-section">
                    <div class="sm-section-head">
                      <span class="sm-section-title">{{ typeLabel(group.type) }}</span>
                      <span class="sm-section-count">{{ group.items.length }}</span>
                    </div>
                    @for (item of group.items; track item.id) {
                      <button class="sm-result-item" (click)="navigate(item)">
                        <div class="sm-result-icon" [style.background]="iconBg(item.color)">
                          <i [class]="item.icon" [style.color]="item.color"></i>
                        </div>
                        <div class="sm-result-info">
                          <span class="sm-result-title">{{ item.title }}</span>
                          <span class="sm-result-sub">{{ item.subtitle }}</span>
                        </div>
                        <i class="fa-solid fa-chevron-right sm-result-arrow"></i>
                      </button>
                    }
                  </div>
                }
              }
            }

          </div>
        </div>
      </ng-template>
    </ion-modal>
  `,
  styles: `
    :host { display: contents; }

    .sm-wrap {
      display: flex;
      flex-direction: column;
      height: 100%;
      background: #0b1120;
    }

    /* Input row */
    .sm-input-row {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 14px 16px 10px;
      border-bottom: 1px solid rgba(255,255,255,0.06);
      background: #0b1120;
    }
    .sm-search-icon {
      color: #475569;
      font-size: 0.9rem;
      flex-shrink: 0;
    }
    .sm-input {
      flex: 1;
      background: transparent;
      border: none;
      outline: none;
      color: #e2e8f0;
      font-size: 1rem;
      font-weight: 500;
      caret-color: #10b981;
    }
    .sm-input::placeholder { color: #475569; }
    .sm-input::-webkit-search-cancel-button { display: none; }
    .sm-cancel {
      background: none;
      border: none;
      color: #10b981;
      font-size: 0.82rem;
      font-weight: 600;
      cursor: pointer;
      padding: 4px 0;
      flex-shrink: 0;
    }

    /* Body scroll area */
    .sm-body {
      flex: 1;
      overflow-y: auto;
      padding: 8px 0 40px;
    }

    /* Sections */
    .sm-section { margin-bottom: 4px; }
    .sm-section-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 16px 6px;
    }
    .sm-section-title {
      font-size: 0.6rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #475569;
    }
    .sm-section-count {
      font-size: 0.6rem;
      font-weight: 600;
      color: #334155;
    }
    .sm-clear-btn {
      font-size: 0.65rem;
      font-weight: 600;
      color: #f87171;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
    }

    /* Recent items */
    .sm-recent-item {
      display: flex;
      align-items: center;
      gap: 12px;
      width: 100%;
      text-align: left;
      padding: 11px 16px;
      background: none;
      border: none;
      color: #94a3b8;
      font-size: 0.85rem;
      cursor: pointer;
      transition: background 0.15s;
    }
    .sm-recent-item:hover { background: rgba(255,255,255,0.03); }
    .sm-recent-icon { font-size: 0.7rem; color: #475569; flex-shrink: 0; }

    /* Result items */
    .sm-result-item {
      display: flex;
      align-items: center;
      gap: 12px;
      width: 100%;
      text-align: left;
      padding: 10px 16px;
      background: none;
      border: none;
      cursor: pointer;
      transition: background 0.15s;
    }
    .sm-result-item:hover { background: rgba(255,255,255,0.03); }
    .sm-result-item:active { background: rgba(255,255,255,0.05); }

    .sm-result-icon {
      flex-shrink: 0;
      width: 36px; height: 36px;
      border-radius: 10px;
      display: flex; align-items: center; justify-content: center;
      font-size: 0.8rem;
    }
    .sm-result-info {
      flex: 1;
      min-width: 0;
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .sm-result-title {
      font-size: 0.85rem;
      font-weight: 600;
      color: #e2e8f0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .sm-result-sub {
      font-size: 0.65rem;
      color: #64748b;
      font-weight: 500;
    }
    .sm-result-arrow {
      font-size: 0.6rem;
      color: #334155;
      flex-shrink: 0;
    }

    /* Hint / empty */
    .sm-hint {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 60px 24px 40px;
      text-align: center;
      gap: 12px;
    }
    .sm-hint-icon { font-size: 2rem; color: #334155; }
    .sm-hint p { font-size: 0.8rem; color: #475569; line-height: 1.6; margin: 0; }
  `
})
export class SearchModalComponent implements AfterViewInit {
  private searchService = inject(SearchService);
  private router = inject(Router);

  @ViewChild('searchInput') inputRef!: ElementRef<HTMLInputElement>;

  isOpen = signal(false);
  query = signal('');
  recentSearches = signal<string[]>([]);

  results = computed(() => this.searchService.search(this.query()));

  grouped = computed(() => {
    const map = new Map<ResultType, SearchResult[]>();
    for (const r of this.results()) {
      if (!map.has(r.type)) map.set(r.type, []);
      map.get(r.type)!.push(r);
    }
    return TYPE_ORDER
      .filter(t => map.has(t))
      .map(t => ({ type: t, items: map.get(t)! }));
  });

  ngAfterViewInit() {}

  open() {
    this.recentSearches.set(this.searchService.getRecentSearches());
    this.isOpen.set(true);
  }

  close() {
    this.isOpen.set(false);
    this.query.set('');
  }

  onDidPresent() {
    setTimeout(() => this.inputRef?.nativeElement?.focus(), 100);
  }

  onInput(e: Event) {
    this.query.set((e.target as HTMLInputElement).value);
  }

  setQuery(term: string) {
    this.query.set(term);
    if (this.inputRef?.nativeElement) {
      this.inputRef.nativeElement.value = term;
    }
  }

  clearRecent() {
    this.searchService.clearRecentSearches();
    this.recentSearches.set([]);
  }

  navigate(item: SearchResult) {
    this.searchService.addRecentSearch(this.query() || item.title);
    this.close();
    this.router.navigate(item.route);
  }

  typeLabel(type: ResultType): string {
    return TYPE_LABELS[type];
  }

  iconBg(color: string): string {
    return color + '1a';
  }
}
