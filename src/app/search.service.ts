import { Injectable } from '@angular/core';
import { CORE_JAVA_QUESTIONS } from './data/core-java';
import { SPRING_BOOT_QUESTIONS } from './data/spring-boot';
import { HIBERNATE_QUESTIONS } from './data/hibernate';
import { SPRING_REACTIVE_QUESTIONS } from './data/spring-reactive';
import { MICROSERVICES_QUESTIONS } from './data/microservices';
import { MULTITHREADING_QUESTIONS } from './data/multithreading';
import { REACTIVE_PROGRAMMING_QUESTIONS } from './data/reactive-programming';
import { CODING_QUESTIONS } from './data/coding-questions';
import { LEETCODE_PROBLEMS } from './data/leetcode-problems';
import { ALL_TUTORIALS } from './data/tutorials/index';
import { CURATED_EXPERIENCES } from './data/experiences/curated-experiences';

export interface SearchResult {
  id: string;
  type: 'interview' | 'coding' | 'leetcode' | 'tutorial' | 'experience';
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  route: string[];
}

const RECENT_KEY = 'search_recent';
const MAX_RECENT = 5;

@Injectable({ providedIn: 'root' })
export class SearchService {
  private index: SearchResult[] = [];

  constructor() {
    this.buildIndex();
  }

  private buildIndex() {
    // Interview questions
    const allIq = [
      ...CORE_JAVA_QUESTIONS, ...SPRING_BOOT_QUESTIONS, ...HIBERNATE_QUESTIONS,
      ...SPRING_REACTIVE_QUESTIONS, ...MICROSERVICES_QUESTIONS,
      ...MULTITHREADING_QUESTIONS, ...REACTIVE_PROGRAMMING_QUESTIONS,
      ...CODING_QUESTIONS
    ];
    for (const q of allIq) {
      const slug = this.categoryToSlug(q.category);
      this.index.push({
        id: `iq-${q.id}`,
        type: 'interview',
        title: q.question,
        subtitle: q.category,
        icon: 'fa-solid fa-circle-question',
        color: '#6366f1',
        route: ['/interview-questions', slug, String(q.id)]
      });
    }

    // LeetCode problems
    for (const p of LEETCODE_PROBLEMS) {
      this.index.push({
        id: `lc-${p.number}`,
        type: 'leetcode',
        title: `${p.number}. ${p.title}`,
        subtitle: `${p.difficulty} · ${p.category}`,
        icon: 'fa-solid fa-trophy',
        color: '#f59e0b',
        route: ['/leetcode', String(p.number)]
      });
    }

    // Tutorials (chapters)
    for (const tut of ALL_TUTORIALS) {
      for (const ch of tut.chapters) {
        this.index.push({
          id: `tut-${tut.id}-${ch.id}`,
          type: 'tutorial',
          title: ch.title,
          subtitle: tut.title,
          icon: 'fa-solid fa-book-open',
          color: '#10b981',
          route: ['/tutorials', tut.id, ch.id]
        });
      }
    }

    // Experiences
    for (const exp of CURATED_EXPERIENCES) {
      this.index.push({
        id: `exp-${exp.id}`,
        type: 'experience',
        title: `${exp.company} — ${exp.role}`,
        subtitle: exp.result.charAt(0).toUpperCase() + exp.result.slice(1),
        icon: 'fa-solid fa-microphone-lines',
        color: '#10b981',
        route: ['/experiences', exp.id]
      });
    }
  }

  search(query: string): SearchResult[] {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return this.index
      .filter(r => r.title.toLowerCase().includes(q) || r.subtitle.toLowerCase().includes(q))
      .slice(0, 30);
  }

  getRecentSearches(): string[] {
    try {
      return JSON.parse(localStorage.getItem(RECENT_KEY) ?? '[]');
    } catch {
      return [];
    }
  }

  addRecentSearch(term: string) {
    if (!term.trim()) return;
    const list = this.getRecentSearches().filter(s => s !== term);
    list.unshift(term);
    localStorage.setItem(RECENT_KEY, JSON.stringify(list.slice(0, MAX_RECENT)));
  }

  clearRecentSearches() {
    localStorage.removeItem(RECENT_KEY);
  }

  private categoryToSlug(category: string): string {
    const map: Record<string, string> = {
      'Core Java': 'core-java',
      'Spring Boot': 'spring-boot',
      'Hibernate': 'hibernate',
      'Spring Reactive': 'spring-reactive',
      'Microservices': 'microservices',
      'Multithreading': 'multithreading',
      'Reactive Programming': 'reactive-prog',
      'Coding Questions': 'coding-patterns'
    };
    return map[category] ?? category.toLowerCase().replace(/\s+/g, '-');
  }
}
