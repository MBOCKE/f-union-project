export type RecruitmentSectionId =
  | "coordination"
  | "communication"
  | "creation-visuelle"
  | "donnees-strategie"
  | "programme"
  | "logistique-finances"
  | "juridique-plaidoyer";

export interface RecruitmentSection {
  id: RecruitmentSectionId;
  label: string;
  description: string;
  order: number;
}

export type RecruitmentRole = {
  slug: string;
  title: string;
  category: string;
  sectionId: RecruitmentSectionId;
  tagline: string;
  manager: string;
  collaborators: string;
  duration: string;
  commitment: string;
  format: string;
  summary: string;
  responsibilities: string[];
  profile: string[];
  engagement: string[];
  benefits: string[];
  notFor?: string[];
  note?: string;
};

export type ApplicationFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  cv: File | null;
  motivations: string;
};
