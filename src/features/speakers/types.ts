export interface SpeakerSessionLink {
  id: string;
  title: string;
  href: string;
}

export interface SpeakerProfile {
  id: string;
  name: string;
  role: string;
  company?: string;
  description: string;
  imageUrl: string;
  bio: string;
  sessions: SpeakerSessionLink[];
}
