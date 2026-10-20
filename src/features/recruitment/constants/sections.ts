import type { RecruitmentSection, RecruitmentSectionId } from "../types";

export const recruitmentSections: RecruitmentSection[] = [
  {
    id: "production-summit",
    label: "Direction de production Summit",
    description:
      "Ces missions coordonnent la production du Summit, son programme, son expérience sur place et le suivi de ses résultats.",
    order: 1,
  },
  {
    id: "revenus-partenariats",
    label: "Business Development Senior & Ticketing / Sales Manager",
    description:
      "Ces missions développent les partenariats et les offres de billetterie pour soutenir les revenus et la participation au Summit.",
    order: 2,
  },
  {
    id: "marque-audience",
    label: "Marque & Audience",
    description:
      "Ces missions développent l'identité de F-UNION, animent ses communautés et renforcent sa visibilité auprès des publics et des médias.",
    order: 3,
  },
  {
    id: "finance-conformite",
    label: "Finance & Conformité",
    description:
      "Ces missions assurent le suivi financier et contribuent à sécuriser les engagements et la conformité de F-UNION.",
    order: 4,
  },
  {
    id: "plaidoyer-cooperation",
    label: "Plaidoyer & Coopération",
    description:
      "Cette mission porte les positions de F-UNION et développe ses coopérations institutionnelles et internationales.",
    order: 5,
  },
];

export function getSection(
  id: RecruitmentSectionId,
): RecruitmentSection | undefined {
  return recruitmentSections.find((section) => section.id === id);
}
