export type Language = 'pl' | 'en';

export type UserRole = 'parent' | 'relative' | 'specialist' | 'other';

export interface InterestFormData {
  name: string;
  email: string;
  role: UserRole;
  experience: string;
}

export type ProductProofTab = 'conversation' | 'pathway';

export type JourneyStepId = 'observations' | 'clarification' | 'pathway' | 'summary';

export interface JourneyStep {
  id: JourneyStepId;
  stepNumber: number;
  title: string;
  body: string;
  microcopy: string;
  previewType: 'chat' | 'clarify' | 'pathway' | 'summary';
}

export interface KnowledgeItem {
  id: string;
  title: string;
  body: string;
  action: string;
  sourceLabel?: string;
  iconName: string;
  category: string;
  previewData: {
    title: string;
    subtitle: string;
    badge: string;
    details: string[];
    source: string;
  };
}
