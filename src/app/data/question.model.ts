export interface Question {
  id: number;
  category: 'Core Java' | 'Spring Boot' | 'Hibernate' | 'Spring Reactive' | 'Microservices' | 'Multithreading' | 'Reactive Programming' | 'Coding Questions';
  question: string;
  answer: string;
  asked_metadata: string;
  code?: string;
}
