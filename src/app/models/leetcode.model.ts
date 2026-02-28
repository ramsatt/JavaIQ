export interface LeetCodeQuestion {
  id: number;
  leetcodeNumber: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  description: string;
  javaSolution: string;
  approach: string;
  timeComplexity: string;
  spaceComplexity: string;
  link: string;
  tags: string[];
}
