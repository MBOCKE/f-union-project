import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/core/components/Container";
import dotMap from "@/core/assets/Dot Map.png";

const benefits = [
  "Une expérience terrain sur un événement panafricain à fort impact",
  "Une lettre de recommandation personnalisée signée de la CEO",
  "Un accès gratuit au Sommet F-UNION 2027 à Douala",
  "L'intégration au réseau F-UNION",
];

const stats = [
  ["15", "postes ouverts"],
  ["7", "mois de mission"],
  ["2-8 h", "par semaine"],
];

export const RecruitmentSection = () => {
  return (
    <section id="recrutement" className="bg-[#f9fafb]">
      <div className="bg-[#2d0a54] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img src={dotMap.src} alt="" className="w-full h-full object-cover object-center scale-125 md:scale-100 mix-blend-overlay" />
        </div>
        <Container className="relative z-10 text-center flex flex-col items-center justify-center">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.28em] text-[#d9c8ff]">
            F-UNION Africa Summit 2027
          </p>
          <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black mb-6 tracking-tight drop-shadow-md">
            REJOIGNEZ LA TEAM
          </h2>
          <p className="text-xl md:text-2xl lg:text-[1.35rem] font-bold text-white max-w-3xl px-4 leading-snug">
            15 missions bénévoles pour construire un événement panafricain à fort impact, à Douala et à distance.
          </p>

        </Container>
      </div>

      <Container className="pt-16 pb-16">
        <h3 className="text-center text-2xl md:text-3xl font-black text-summit-dark mb-10">
          Une mission utile, une expérience qui compte.
        </h3>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="rounded-2xl border border-[#eadff9] bg-white p-6"
            >
              <CheckCircle2 className="h-7 w-7 text-[#845ec2]" />
              <p className="mt-4 font-bold leading-relaxed text-summit-dark">
                {benefit}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/recrutement" prefetch={false}>
            <span className="bg-[#2d0a54] text-white px-10 py-3 rounded-full font-bold text-sm tracking-wide shadow-lg hover:bg-[#40157a] transition-colors inline-flex items-center justify-center">
              Voir les postes
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
};
