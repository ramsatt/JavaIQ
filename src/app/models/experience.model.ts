export interface InterviewRound {
  roundNumber: number;
  type: string;
  questions: string[];
  duration: string;
  feedback?: string;
}

export interface InterviewExperience {
  id: string;
  company: string;
  companyLogo?: string;
  role: string;
  date: string;
  rounds: InterviewRound[];
  outcome: 'selected' | 'rejected' | 'pending';
  tips: string[];
  difficulty: 'easy' | 'medium' | 'hard';
  author: string;
  tags: string[];
}
