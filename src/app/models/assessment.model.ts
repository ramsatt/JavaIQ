export interface AssessmentQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Assessment {
  id: string;
  title: string;
  category: string;
  description: string;
  questions: AssessmentQuestion[];
  timeLimit: number;
  passingScore: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  icon: string;
  color: string;
}
