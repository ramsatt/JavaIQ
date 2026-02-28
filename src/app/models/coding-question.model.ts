export interface CodingQuestion {
  id: number;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
  solution: string;
  explanation: string;
  timeComplexity: string;
  spaceComplexity: string;
  tags: string[];
  hints?: string[];
}
