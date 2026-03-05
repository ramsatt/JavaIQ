export interface Question {
  id: number;
  category: 'Core Java' | 'Spring Boot' | 'Hibernate' | 'Spring Reactive' | 'Microservices' | 'Multithreading' | 'Reactive Programming' | 'Coding Questions';
  question: string;
  answer: string;
  asked_metadata: string;
  code?: string;
  subConcepts?: { title: string; description: string; }[];
  useCases?: { icon: string; title: string; description: string; color: string; bg: string; }[];
  coreConceptDescription?: string;
  addedOn?: string;   // ISO date string e.g. '2025-03-01' — used for "NEW" badge
}
