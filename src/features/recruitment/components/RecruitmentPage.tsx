"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Clapperboard,
  ChevronDown,
  ClipboardList,
  Clock3,
  Globe2,
  Handshake,
  Megaphone,
  MapPin,
  Mic2,
  Newspaper,
  Palette,
  Pencil,
  Search,
  Scale,
  ShoppingBag,
  Sparkles,
  Truck,
  Users,
  WalletCards,
} from "lucide-react";
import { Button } from "@/core/components/Button";
import { Container } from "@/core/components/Container";
import benevoleImage from "@/core/assets/image-benevole.jpeg";
import {
  recruitmentCategories,
  recruitmentRoles,
} from "../constants/roles";

const categoryStyles: Record<string, string> = {
  Opérationnel: "bg-[#fff0ed] text-[#b52b1e]",
  Communication: "bg-[#f2ecff] text-[#6840a5]",
  Stratégique: "bg-[#e8f5ff] text-[#126db1]",
  "Relations Extérieures": "bg-[#fff6dc] text-[#9a6b00]",
  "Contenu & Programme": "bg-[#e8f7f0] text-[#14734d]",
  "Expérience & Animation": "bg-[#f9eafa] text-[#8d3b9a]",
  Marketing: "bg-[#fff0f7] text-[#a22763]",
  Finance: "bg-[#edf7ff] text-[#14698b]",
  Créatif: "bg-[#f0efff] text-[#4b46a2]",
  "Juridique & Conformité": "bg-[#f3f3f3] text-[#363636]",
};

const roleIcons = {
  "coordinateur-summit": ClipboardList,
  "community-manager-animation": Megaphone,
  "community-manager-strategie-contenu": Pencil,
  "data-analyst": BarChart3,
  "relations-exterieures-business-dev": Handshake,
  "contenu-speakers": Mic2,
  "activations-experience": Sparkles,
  "marketing-offres": ShoppingBag,
  "relations-presse": Newspaper,
  "logistique-coordination-evenementielle": Truck,
  "finances-terrain-douala": WalletCards,
  "graphic-designer-creation-visuelle": Palette,
  "graphic-designer-motion-digital": Clapperboard,
  "responsable-juridique": Scale,
  "plaidoyer-cooperation-internationale": Globe2,
} as const;

import { ApplicationModal } from "./ApplicationModal";
import { RecruitmentRole } from "../types"; // Assuming this is where the type is

const faqs = [
  {
    question: "Les missions sont-elles rémunérées ?",
    answer:
      "Les missions proposées sont bénévoles. F-UNION prévoit en contrepartie une expérience terrain, une lettre de recommandation personnalisée, un accès gratuit au Sommet 2027 et l'intégration au réseau F-UNION.",
  },
  {
    question: "Faut-il être basé·e à Douala ?",
    answer:
      "Pas pour tous les postes. Plusieurs missions sont réalisables à distance avec une présence à Douala pendant les phases finales ou le Sommet. Les postes de terrain précisent lorsqu'une présence à Douala est requise.",
  },
  {
    question: "Quel est le niveau d'engagement demandé ?",
    answer:
      "L'engagement varie selon les postes, de 2 à 8 heures par semaine. Les périodes proches du Sommet peuvent demander davantage de disponibilité.",
  },
  {
    question: "Comment se déroule la sélection ?",
    answer:
      "Le processus prévu est simple : candidature, échange avec l'équipe, puis intégration au pôle correspondant. Le formulaire officiel sera relié à cette page dès validation de l'outil de candidature.",
  },
];

export const RecruitmentPage = () => {
  const [activeCategory, setActiveCategory] = useState("Tous les postes");
  const [search, setSearch] = useState("");
  const [selectedRole, setSelectedRole] = useState<any | null>(null);

  const filteredRoles = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return recruitmentRoles.filter((role) => {
      const matchesCategory =
        activeCategory === "Tous les postes" || role.category === activeCategory;
      const matchesSearch =
        !normalizedSearch ||
        [role.title, role.category, role.tagline, role.format]
          .join(" ")
          .toLowerCase()
          .includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <main className="bg-[#faf9ff] text-summit-dark">
      <section className="relative overflow-hidden bg-[#2d0a54] text-white">
        <div className="absolute inset-0 z-0 bg-black">
          <img src={benevoleImage.src} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="absolute inset-y-0 right-0 w-[70%] bg-gradient-to-l from-[#3a2051]/40 to-transparent z-10" />
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#2d0a54] via-[#2d0a54]/90 to-transparent z-10" />
        </div>

        <Container className="relative z-10 pb-12 pt-28 md:pb-16 md:pt-32">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.28em] text-[#d9c8ff]">
              F-UNION AFRICA SUMMIT 2027
            </p>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-tight md:text-7xl lg:text-[6.5rem]">
              Rejoignez la Team F-UNION 2027
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white/80 md:text-2xl">
              15 missions bénévoles pour construire un événement panafricain à
              fort impact, à Douala et à distance.
            </p>
          </div>

          <div className="mt-10 grid w-full max-w-none grid-cols-2 gap-4 sm:grid-cols-3">
            {[
              ["15", "postes ouverts"],
              ["7", "mois de mission"],
              ["2-8 h", "par semaine selon le poste"],
            ].map(([value, label]) => (
              <div
                key={label}
                className={`flex min-h-[112px] flex-col items-center justify-center rounded-2xl border border-white/15 bg-white/10 p-5 text-center backdrop-blur-sm ${
                  label === "par semaine selon le poste"
                    ? "col-span-2 sm:col-span-1"
                    : ""
                }`}
              >
                <div className="text-3xl font-black text-white">{value}</div>
                <div className="mt-1 text-sm font-semibold text-white/65">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f7f5fb] py-20 md:py-28" id="postes">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#845ec2]">
                Les postes ouverts
              </p>
              <h2 className="mt-4 text-4xl font-black leading-tight text-summit-dark md:text-5xl">
                Trouvez votre place dans l&apos;équipe.
              </h2>
            </div>
            <div className="flex items-center gap-3 rounded-full bg-white px-4 py-3 shadow-sm ring-1 ring-gray-200 lg:w-80">
              <Search className="h-5 w-5 shrink-0 text-gray-400" />
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Rechercher un poste"
                aria-label="Rechercher un poste"
                className="w-full bg-transparent text-sm font-medium outline-none placeholder:text-gray-400"
              />
            </div>
          </div>

          <div className="mt-10 md:hidden">
            <label
              htmlFor="recruitment-category"
              className="mb-2 block text-sm font-black text-summit-dark"
            >
              Filtrer par catégorie
            </label>
            <select
              id="recruitment-category"
              value={activeCategory}
              onChange={(event) => setActiveCategory(event.target.value)}
              className="w-full appearance-none rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm font-bold text-summit-dark shadow-sm outline-none focus:border-summit-purple focus:ring-2 focus:ring-summit-purple/20"
            >
              {recruitmentCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="hide-scrollbar mt-10 hidden gap-2 overflow-x-auto pb-2 md:flex">
            {recruitmentCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-bold transition-colors ${
                  activeCategory === category
                    ? "bg-summit-purple text-white"
                    : "bg-white text-gray-600 ring-1 ring-gray-200 hover:text-summit-purple"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {filteredRoles.length > 0 ? (
            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredRoles.map((role) => (
                <article
                  key={role.slug}
                  className="relative flex flex-col rounded-xl border border-gray-100 overflow-hidden shadow-sm group min-h-[420px]"
                >
                  {/* Full background image */}
                  <img 
                    src={require(`@/core/assets/photo library/photo_${recruitmentRoles.findIndex(r => r.slug === role.slug) + 40}_2026-10-07_15-51-00.jpg`).default.src} 
                    alt={role.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-0" 
                  />
                  
                  {/* Transparent top spacer */}
                  <div className="relative z-10 h-[220px] w-full shrink-0"></div>
                  
                  {/* Bottom section with white background provided by button shadow */}
                  <div className="relative z-10 flex flex-1 flex-col overflow-hidden">
                    <div className="relative z-30 flex flex-1 flex-col px-6 pt-6 pb-4 pointer-events-none">
                      <h3 className="text-lg font-bold leading-snug text-summit-dark pointer-events-auto">
                        {role.title}
                      </h3>
                      <p className="mt-2 text-sm text-gray-500 line-clamp-2 pointer-events-auto">
                        {role.tagline}
                      </p>
                    </div>
                    <div className="relative z-20 px-6 pb-6 text-center">
                      <button
                        type="button"
                        onClick={() => setSelectedRole(role)}
                        className="relative flex w-full items-center justify-center rounded-lg py-2.5 text-xs font-bold text-summit-dark transition-all hover:text-summit-purple"
                      >
                        {/* The solid white surrounding area filling the bottom half */}
                        <div 
                          className="absolute inset-0 rounded-lg pointer-events-none -z-20"
                          style={{ boxShadow: "0 0 0 9999px white" }}
                        ></div>
                        
                        {/* The glass effect for the hole itself */}
                        <div className="absolute inset-0 rounded-lg bg-white/20 backdrop-blur-sm border border-gray-200 pointer-events-none -z-10"></div>
                        
                        <span className="relative z-10 tracking-wide uppercase">Join Us</span>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-3xl bg-white p-12 text-center ring-1 ring-gray-200">
              <p className="text-lg font-bold text-summit-dark">
                Aucun poste ne correspond à votre recherche.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("Tous les postes");
                }}
                className="mt-4 font-bold text-[#6f45aa] hover:underline"
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28" id="candidater">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
              Comment candidater ?
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-summit-dark md:text-4xl">
              Trois étapes pour nous rejoindre.
            </h2>
            <p className="mt-4 text-sm text-gray-500">
              Le formulaire officiel sera relié à cette page dès que l&apos;outil
              de candidature et la date limite auront été confirmés.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              { title: "Candidature", description: "Choisissez le poste qui correspond le mieux à votre profil et partagez votre motivation.", Icon: ClipboardList, image: require("@/core/assets/photo library/photo_41_2026-10-07_15-51-00.jpg").default.src },
              { title: "Échange", description: "L’équipe échange avec vous sur vos expériences, vos disponibilités et votre manière de contribuer.", Icon: Users, image: require("@/core/assets/photo library/photo_44_2026-10-07_15-51-00.jpg").default.src },
              { title: "Intégration", description: "Vous rejoignez votre pôle et recevez les informations utiles pour démarrer votre mission.", Icon: Handshake, image: require("@/core/assets/photo library/photo_48_2026-10-07_15-51-00.jpg").default.src },
            ].map(({ title, description, Icon, image }) => (
              <div
                key={title}
                className="relative flex flex-col items-center text-center rounded-xl overflow-hidden shadow-sm min-h-[320px] justify-end p-8 group"
              >
                <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 z-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 z-10" />
                <div className="relative z-20 flex flex-col items-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md text-white border border-white/30">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/90">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f7f5fb] py-20 md:py-28" id="faq">
        <Container className="max-w-4xl">
          <div className="text-center">
            <Users className="mx-auto h-9 w-9 text-[#845ec2]" />
            <h2 className="mt-4 text-4xl font-black text-summit-dark md:text-5xl">
              Questions fréquentes
            </h2>
          </div>
          <div className="mt-10 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl bg-white px-6 py-5 shadow-sm ring-1 ring-black/5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-black text-summit-dark [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <ChevronDown className="h-5 w-5 shrink-0 text-[#845ec2] transition-transform group-open:rotate-180" />
                </summary>
                <p className="max-w-3xl pt-4 leading-relaxed text-gray-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section
        className="relative overflow-hidden py-16 text-white md:py-20"
        style={{ backgroundColor: "#982b8e" }}
      >
        {/* Decorative pink-pattern SVG background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <img
            src="/pink-pattern.svg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-left"
          />
        </div>

        <Container className="relative z-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-white/75">
              Team F-UNION 2027
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight md:text-5xl">
              Prêt·e à faire partie de l&apos;aventure ?
            </h2>
          </div>
          <Button href="#postes" variant="white" size="lg">
            Choisir une mission
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Container>
      </section>

      <ApplicationModal
        isOpen={!!selectedRole}
        onClose={() => setSelectedRole(null)}
        roleTitle={selectedRole?.title}
      />
    </main>
  );
};
