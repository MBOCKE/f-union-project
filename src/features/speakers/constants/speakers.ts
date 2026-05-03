import { SpeakerProfile } from "../types";
import AurelieChazai from "@/core/assets/aurelie-chazai.png";
import ChristianTchoupe from "@/core/assets/christian-tchoupe.png";
import ErikaWilson from "@/core/assets/erika-wilson.jpg";
import HonoreNkouel from "@/core/assets/honore-nkouel.jpeg";
import JocelyneNgassam from "@/core/assets/jocelyne-ngassam.jpg";
import ManuelaKAMADJOU from "@/core/assets/manuela-kamadjou.jpg";
import MeGaelleNGUE from "@/core/assets/me-gaelle-ngue.jpg";
import PechensDOUMBE from "@/core/assets/pechens-doumbe.jpg";
import PriscaHeuya from "@/core/assets/prisca-heuya.png";
import SantherMbacham from "@/core/assets/santher-mbacham.png";
import ThierryNtamack from "@/core/assets/thierry-ntamack.jpg";
import AnabelleKOUNG from "@/core/assets/anabelle-koung.jpeg";
import AurelieGuifo from "@/core/assets/aurelie-guifo.jpg";
import EdithNkenHOT from "@/core/assets/edithe-nken-hot.jpg";
import LindaNganko from "@/core/assets/linda-nganko.jpeg";

export const SPEAKER_PROFILES: SpeakerProfile[] = [
  {
    id: "aurelie-chazai",
    name: "Aurélie Chazai",
    role: "Avocate & Managing Partner",
    description: "Fondatrice de Chazai Wamba, spécialisée en droit financier, droit des affaires et fiscalité.",
    imageUrl: AurelieChazai.src,
    bio: "Aurélie Chazai est une avocate camerounaise inscrite aux Barreaux du Cameroun et de Paris. Elle est titulaire d’un master 2 recherche en droit financier et d’un master 2 professionnel en droit des affaires et fiscalité, obtenus à l’Université de Paris 1 Panthéon-Sorbonne. En novembre 2017, après avoir exercé au sein de plusieurs cabinets d’avocats internationaux de premier plan à Paris, elle fonde le cabinet d’avocats Chazai & Partners, devenu Chazai Wamba, dont elle est aujourd’hui Managing Partner.",
    sessions: [
      {
        id: "j2_s5",
        title: "Workshop : Scale Up Room",
        href: "/programme/jour2#j2_s5"
      }
    ]
  },
  {
    id: "santher-mbacham",
    name: "Santher Mbacham",
    role: "Communication Lead",
    company: "Camerounaises in Tech / MD Image Nation PR",
    description: "Experte en communication pour les technologies et les écosystèmes féminins.",
    imageUrl: SantherMbacham.src,
    bio: "Santher Mbacham est Communication Lead de Camerounaises in Tech et MD de Image Nation PR.",
    sessions: [
      {
        id: "j2_s4",
        title: "PANEL 1 : Faire carrière dans la tech et briser les plafonds de verre",
        href: "/programme/jour2#j2_s4"
      }
    ]
  },
  {
    id: "thierry-ntamack",
    name: "Thierry Ntamack",
    role: "Acteur, réalisateur & coach en prise de parole",
    description: "Acteur et réalisateur camerounais engagé dans la préparation média des dirigeants.",
    imageUrl: ThierryNtamack.src,
    bio: "Thierry Ntamack est un acteur, réalisateur, scénariste et producteur de cinéma camerounais, reconnu pour ses rôles dans des films comme Le Blanc d’Eyenga et La Patrie d’Abord. Formé aux arts du spectacle à l’Université de Yaoundé puis au Cours Florent, il accompagne aujourd’hui les dirigeants dans leur prise de parole en public.",
    sessions: [
      {
        id: "j2_s7",
        title: "Workshop préparation média",
        href: "/programme/jour2#j2_s7"
      }
    ]
  },
  {
    id: "edith-nken-hot",
    name: "Edithe Nken Hot",
    role: "Consultante en stratégie commerciale",
    description: "Consultante spécialisée en croissance commerciale et développement humain des entreprises.",
    imageUrl: EdithNkenHOT.src,
    bio: "Edithe Nken Hot est consultante spécialisée en croissance commerciale et développement humain des entreprises; directrice générale Univers Internes. Elle inspire, outille et accompagne les dirigeants et professionnels à transformer leurs objectifs en résultats concrets.",
    sessions: [
      {
        id: "j2_s8",
        title: "ATELIER VIP : Leadership Styling",
        href: "/programme/jour2#j2_s8"
      }
    ]
  },
  {
    id: "gaelle-ngue",
    name: "Gaëlle Ngue",
    role: "Avocate associée",
    description: "Avocate spécialiste du droit des affaires, de la gouvernance et de la conformité réglementaire.",
    imageUrl: MeGaelleNGUE.src,
    bio: "Gaëlle Ngue est avocate, membre du Barreau du Cameroun et du Barreau du Québec. Elle est l’associée gérante du cabinet Ngue & Associés, basé au Cameroun, dont la pratique est axée sur le droit des affaires, la gouvernance d’entreprise, le droit OHADA et la conformité réglementaire.",
    sessions: [
      {
        id: "j2_s8",
        title: "ATELIER VIP : Leadership Styling",
        href: "/programme/jour2#j2_s8"
      }
    ]
  },
  {
    id: "aurelie-guifo",
    name: "Aurélie Guifo",
    role: "Juriste & banquière",
    description: "Juriste de formation doublée d’une expérience bancaire, engagée dans l’accompagnement des jeunes femmes africaines.",
    imageUrl: AurelieGuifo.src,
    bio: "Juriste de formation et banquière avec plus de quinze ans d'expérience, Aurélie Guifo est passionnée d'afrochic et animée par la recherche du beau, de l'authentique et de l'harmonie. Elle met un accent particulier sur le mentorat et le développement des soft skills.",
    sessions: [
      {
        id: "j3_s4",
        title: "Réinventer sa carrière",
        href: "/programme/jour3#j3_s4"
      }
    ]
  },
  {
    id: "manuela-kamadjou",
    name: "Manuela Kamadjou",
    role: "Managing Director & lifestyle expert",
    description: "Managing Director de KEBE Group, consultante business et expert lifestyle.",
    imageUrl: ManuelaKAMADJOU.src,
    bio: "Manuela Kamadjou est Managing Director du groupe KEBE, consultante business et lifestyle industry expert.",
    sessions: [
      {
        id: "j3_s4",
        title: "Réinventer sa carrière",
        href: "/programme/jour3#j3_s4"
      }
    ]
  },
  {
    id: "linda-nganko",
    name: "Linda Loretta Nganko",
    role: "Experte RH",
    description: "Experte RH reconnue, fondatrice de 2LN Expertise et promotrice du leadership humain.",
    imageUrl: LindaNganko.src,
    bio: "Linda est une experte RH reconnue à l'échelle africaine, avec plus de 20 ans d'expérience RH, notamment au sein de MTN Cameroon et du Groupe Activa. Elle a fondé 2LN Expertise, un laboratoire RH proposant des outils et conseils pour les experts RH.",
    sessions: [
      {
        id: "j3_s4",
        title: "Réinventer sa carrière",
        href: "/programme/jour3#j3_s4"
      }
    ]
  },
  {
    id: "anabelle-koung",
    name: "Anabelle KOUNG",
    role: "Modératrice & innovatrice",
    description: "Responsable de l'innovation et de la stratégie, experte de la transformation des organisations.",
    imageUrl: AnabelleKOUNG.src,
    bio: "Anabelle Koung est une professionnelle de l’innovation et de la stratégie, évoluant au croisement de l’assurance, du développement de produits et de la transformation des organisations.",
    sessions: [
      {
        id: "j3_s4",
        title: "Réinventer sa carrière",
        href: "/programme/jour3#j3_s4"
      }
    ]
  },
  {
    id: "erika-wilson",
    name: "Erika Wilson",
    role: "Experte RSE",
    description: "Experte en responsabilité sociétale des entreprises, certifiée AFNOR et EDHEC.",
    imageUrl: ErikaWilson.src,
    bio: "Erika Wilson est experte en Responsabilité Sociétale des Entreprises, certifiée AFNOR et EDHEC Business School. Elle pilote des projets RSE et de communication institutionnelle à fort impact.",
    sessions: [
      {
        id: "j3_s5",
        title: "Table Ronde : Ce que les entreprises attendent des jeunes talents aujourd’hui",
        href: "/programme/jour3#j3_s5"
      }
    ]
  },
  {
    id: "honore-nkouel",
    name: "Honoré Nkouel",
    role: "Directeur RH Central Africa",
    description: "Expert RH et leader de la transformation des ressources humaines en Afrique centrale.",
    imageUrl: HonoreNkouel.src,
    bio: "Honoré NKOUEL est Expert RH et Directeur des Ressources Humaines pour l’Afrique centrale chez CFAO INFRASTRUCTURE. Fort de plus de 16 ans d’expérience, il incarne une nouvelle génération de DRH pragmatique et visionnaire.",
    sessions: [
      {
        id: "j3_s5",
        title: "Table Ronde : Ce que les entreprises attendent des jeunes talents aujourd’hui",
        href: "/programme/jour3#j3_s5"
      }
    ]
  },
  {
    id: "christian-tchoupe",
    name: "Christian Tchoupe",
    role: "Account Manager",
    description: "Expert en transformation digitale des institutions financières en Afrique centrale.",
    imageUrl: ChristianTchoupe.src,
    bio: "Christian Tchoupe est Account Manager chez SBS Software, où il accompagne des institutions financières majeures dans leurs projets de transformation digitale en Afrique centrale.",
    sessions: [
      {
        id: "j3_s5",
        title: "Table Ronde : Ce que les entreprises attendent des jeunes talents aujourd’hui",
        href: "/programme/jour3#j3_s5"
      }
    ]
  },
  {
    id: "pechens-pokossy-doumbe",
    name: "Pechens Pokossy Doumbe",
    role: "Pharmacienne & entrepreneure",
    description: "Docteure en pharmacie et créatrice de contenu santé, fondatrice d’AfrikMed.",
    imageUrl: PechensDOUMBE.src,
    bio: "Dr Pechens POKOSSY DOUMBE est pharmacienne, entrepreneure et créatrice de contenu. Elle est propriétaire de la Pharmacie du Centre à Douala et membre de la cohorte 2025 Enovation Factory.",
    sessions: [
      {
        id: "j3_s1",
        title: "1:1 MENTORAT",
        href: "/programme/jour3#j3_s1"
      }
    ]
  },
  {
    id: "prisca-heuya",
    name: "Prisca Heuya",
    role: "Fondatrice",
    company: "KEM Care",
    description: "Entrepreneure engagée dans la transformation des matières premières africaines en marques puissantes.",
    imageUrl: PriscaHeuya.src,
    bio: "Prisca HEUYA est entrepreneure camerounaise engagée dans la transformation des matières premières africaines en marques à forte valeur ajoutée. Fondatrice de Kem Care, elle développe des produits capillaires naturels à partir d'ingrédients locaux.",
    sessions: [
      {
        id: "j3_s9",
        title: "AFTER DARK CLOTURE : FLASH TALK",
        href: "/programme/jour3#j3_s9"
      }
    ]
  }
];

export const SPEAKER_PROFILE_MAP = SPEAKER_PROFILES.reduce<Record<string, SpeakerProfile>>((map, speaker) => {
  map[speaker.name.toLowerCase()] = speaker;
  return map;
}, {} as Record<string, SpeakerProfile>);
