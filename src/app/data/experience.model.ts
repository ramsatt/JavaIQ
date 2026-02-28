export type ExperienceDifficulty = 'easy' | 'medium' | 'hard';
export type ExperienceResult = 'offer' | 'rejected' | 'pending' | 'withdrew';
export type ExperienceSource = 'curated' | 'community';

export interface InterviewRound {
  roundNumber: number;
  type: string;          // 'Phone Screen', 'Technical', 'System Design', 'HR', 'Onsite'
  description: string;
  questions: string[];
  duration?: string;     // e.g. '45 minutes', '1 hour'
}

export interface InterviewExperience {
  id: string;
  company: string;
  role: string;
  yearsOfExperience: number;
  difficulty: ExperienceDifficulty;
  result: ExperienceResult;
  source: ExperienceSource;
  rounds: InterviewRound[];
  summary: string;
  tips: string[];
  date: string;          // ISO date string e.g. '2024-11-01'
  tags: string[];        // e.g. ['spring-boot', 'microservices', 'system-design']
  // Firestore-only fields (undefined for curated):
  authorId?: string;     // Firebase UID
  authorName?: string;
  approved?: boolean;    // Moderation flag
  createdAt?: any;       // Firestore Timestamp
}
