import type { RecruitmentSection, RecruitmentSectionId } from "../types";

export const recruitmentSections: RecruitmentSection[] = [
  {
    id: "coordination",
    label: "Coordination et pilotage",
    description:
      "Un Summit réussi repose sur des équipes alignées et une capacité à anticiper les difficultés avant qu'elles ne deviennent des obstacles. Ces rôles orchestrent les pôles, suivent les engagements et maintiennent le cap jusqu'au jour J.",
    order: 1,
  },
  {
    id: "communication",
    label: "Communication et contenus",
    description:
      "Faire connaître le Summit, porter ses messages et faire grandir son influence demande une vision éditoriale claire et une présence média coordonnée. Ces rôles construisent la voix de F-UNION et la font rayonner auprès des bonnes audiences.",
    order: 2,
  },
  {
    id: "creation-visuelle",
    label: "Création visuelle",
    description:
      "Une identité forte permet à une initiative d'être reconnue et de marquer les esprits. Ces rôles donnent forme aux idées de F-UNION, du visuel statique au motion design, pour une communication cohérente et impactante.",
    order: 3,
  },
  {
    id: "donnees-strategie",
    label: "Données, stratégie et développement",
    description:
      "Piloter un projet ambitieux suppose de confronter les intuitions aux données et de construire des alliances solides. Ces rôles éclairent les décisions, ouvrent des partenariats et structurent les offres qui rendent le Summit possible.",
    order: 4,
  },
  {
    id: "programme",
    label: "Programme et participantes",
    description:
      "Un programme de qualité crée des rencontres entre les idées, les expériences et les perspectives qui font évoluer les pratiques. Ces rôles construisent le contenu du Summit et l'expérience vécue par les participantes.",
    order: 5,
  },
  {
    id: "logistique-finances",
    label: "Logistique et finances",
    description:
      "Derrière chaque événement fluide, il y a une organisation rigoureuse, des prestataires coordonnés et une gestion financière transparente. Ces rôles préparent les conditions matérielles et sécurisent les ressources du Summit.",
    order: 6,
  },
  {
    id: "juridique-plaidoyer",
    label: "Juridique, plaidoyer et coopération internationale",
    description:
      "Développer une initiative ambitieuse suppose des engagements clairs et une parole institutionnelle crédible. Ces rôles sécurisent les partenariats et positionnent F-UNION dans les espaces qui comptent.",
    order: 7,
  },
];

export function getSection(
  id: RecruitmentSectionId,
): RecruitmentSection | undefined {
  return recruitmentSections.find((section) => section.id === id);
}
