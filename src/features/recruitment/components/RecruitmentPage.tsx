"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  Clock3,
  MapPin,
  Search,
  Users,
} from "lucide-react";
import { Button } from "@/core/components/Button";
import { Container } from "@/core/components/Container";
import dotMap from "@/core/assets/Dot Map.png";
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

const benefits = [
  "Une expérience terrain sur un événement panafricain à fort impact",
  "Une lettre de recommandation personnalisée signée de la CEO",
  "Un accès gratuit au Sommet F-UNION 2027 à Douala",
  "L'intégration au réseau F-UNION",
];

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
        <div className="absolute inset-0 opacity-25">
          <Image
            src={dotMap}
            alt=""
            fill
            className="object-cover object-center mix-blend-screen"
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(132,94,194,0.55),transparent_35%)]" />

        <Container className="relative z-10 pb-20 pt-36 md:pb-28 md:pt-44">
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
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="#postes" variant="white" size="lg">
                Découvrir les postes
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button href="#candidater" variant="outline" size="lg">
                Comment candidater ?
              </Button>
            </div>
          </div>

          <div className="mt-16 grid w-full max-w-none grid-cols-2 gap-4 sm:grid-cols-3">
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

      <section className="bg-white py-20 md:py-28" id="pourquoi">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#845ec2]">
                Pourquoi rejoindre F-UNION ?
              </p>
              <h2 className="mt-4 text-4xl font-black leading-tight text-summit-dark md:text-5xl">
                Une mission utile, une expérience qui compte.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
                Rejoindre la Team F-UNION, c&apos;est participer concrètement à la
                construction d&apos;un rendez-vous panafricain consacré au leadership
                féminin et aux opportunités économiques.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="rounded-2xl border border-[#eadff9] bg-[#fcfaff] p-6"
                >
                  <CheckCircle2 className="h-7 w-7 text-[#845ec2]" />
                  <p className="mt-5 font-bold leading-relaxed text-summit-dark">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
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
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredRoles.map((role) => (
                <article
                  key={role.slug}
                  className="group flex h-full flex-col rounded-[1.75rem] bg-white p-6 shadow-[0_12px_40px_rgba(45,10,84,0.07)] ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(45,10,84,0.14)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-black ${
                        categoryStyles[role.category] ||
                        "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {role.category}
                    </span>
                    <BriefcaseBusiness className="h-5 w-5 text-[#845ec2]" />
                  </div>
                  <h3 className="mt-6 text-2xl font-black leading-tight text-summit-dark">
                    {role.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">
                    {role.tagline}
                  </p>

                  <div className="mt-6 space-y-3 border-t border-gray-100 pt-5 text-sm text-gray-600">
                    <div className="flex items-start gap-3">
                      <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-[#845ec2]" />
                      <span>{role.commitment}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#845ec2]" />
                      <span>{role.format}</span>
                    </div>
                  </div>

                  <Link
                    href={`/recrutement/${role.slug}`}
                    className="mt-7 inline-flex items-center font-black text-[#6f45aa] transition-colors hover:text-[#2d0a54]"
                  >
                    Voir la fiche complète
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
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
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#845ec2]">
                Comment candidater ?
              </p>
              <h2 className="mt-4 text-4xl font-black leading-tight text-summit-dark md:text-5xl">
                Trois étapes pour nous rejoindre.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Le formulaire officiel sera relié à cette page dès que l&apos;outil
                de candidature et la date limite auront été confirmés.
              </p>
              <Button
                href="mailto:contact@f-union.org?subject=Candidature%20b%C3%A9n%C3%A9vole%20F-UNION%202027"
                variant="purple"
                size="lg"
                className="mt-8"
              >
                Contacter l&apos;équipe
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="space-y-4">
              {[
                ["01", "Candidature", "Choisissez le poste qui correspond le mieux à votre profil et partagez votre motivation."],
                ["02", "Échange", "L’équipe échange avec vous sur vos expériences, vos disponibilités et votre manière de contribuer."],
                ["03", "Intégration", "Vous rejoignez votre pôle et recevez les informations utiles pour démarrer votre mission."],
              ].map(([number, title, description]) => (
                <div
                  key={number}
                  className="flex gap-5 rounded-2xl border border-gray-200 bg-[#fcfbff] p-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-summit-purple text-sm font-black text-white">
                    {number}
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-summit-dark">
                      {title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-gray-600">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
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

      <section className="bg-[#da291c] py-16 text-white md:py-20">
        <Container className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
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
    </main>
  );
};
