export interface InterviewQuestion {
  id: number;
  category: string;
  subcategory?: string;
  question: string;
  answer: string;
  code?: string;
  difficulty: 'easy' | 'medium' | 'hard';
  askedAt: string;
  tags: string[];
}
