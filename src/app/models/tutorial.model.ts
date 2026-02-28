export type TutorialCategory = 'java' | 'spring' | 'spring-boot' | 'hibernate' | 'microservices' | 'multithreading' | 'design-patterns';

export interface CodeExample {
  language: string;
  code: string;
  title?: string;
}

export interface Chapter {
  id: string;
  title: string;
  content: string;
  codeExamples?: CodeExample[];
  order: number;
}

export interface Tutorial {
  id: string;
  title: string;
  slug: string;
  category: TutorialCategory;
  description: string;
  chapters: Chapter[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
  icon: string;
  color: string;
}
