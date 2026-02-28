export type ContentBlockType =
  | 'paragraph'
  | 'heading'
  | 'subheading'
  | 'code'
  | 'note'
  | 'tip'
  | 'warning'
  | 'bullet-list'
  | 'numbered-list'
  | 'divider';

export interface ContentBlock {
  type: ContentBlockType;
  content: string;
  language?: string;   // for 'code' blocks: 'java', 'xml', 'yaml', 'bash'
  items?: string[];    // for 'bullet-list' and 'numbered-list'
}

export interface Chapter {
  id: string;              // e.g. 'java-fundamentals-ch1'
  title: string;
  description: string;
  estimatedMinutes: number;
  blocks: ContentBlock[];
}

export interface Tutorial {
  id: string;              // e.g. 'java-fundamentals'
  title: string;
  description: string;
  icon: string;            // Bootstrap icon class e.g. 'bi-cup-hot'
  color: string;           // Accent hex color e.g. '#FF5252'
  chapters: Chapter[];
}
