import { Container } from "@/core/components/Container";
import { SectionHeading } from "@/core/components/SectionHeading";
import { SpeakerCard } from "./SpeakerCard";
import { Button } from "@/core/components/Button";
import dotMap from "@/core/assets/Dot Map.png";
import intervenant1 from "@/core/assets/intervenant1.png";
import intervenant2 from "@/core/assets/intervenant2.png";
import intervenant3 from "@/core/assets/intervenant3.png";
import intervenant4 from "@/core/assets/intervenant4.png";
import intervenant5 from "@/core/assets/intervenant5.png";
import intervenant6 from "@/core/assets/intervenant6.png";
import intervenant7 from "@/core/assets/intervenant7.png";
import intervenant8 from "@/core/assets/intervenant8.png";

export const SpeakersSection = () => {
  // Placeholder data for the speakers grid
  const speakers = [
    {
      name: "Amara Diallo",
      role: "CEO & Founder",
      company: "Fintech",
      imageUrl: intervenant1.src
    },
    {
      name: "Kwame Asante",
      role: "Investisseur",
      company: "Venture Capital",
      imageUrl: intervenant2.src
    },
    {
      name: "Chidi Okafor",
      role: "Lead Developer",
      company: "Blockchain",
      imageUrl: intervenant3.src
    },
    {
      name: "Tariq Hassan",
      role: "Consultant",
      company: "Transformation Digitale",
      imageUrl: intervenant4.src
    },
    {
      name: "Fatou Mensah",
      role: "CTO",
      company: "Tech & Innovation",
      imageUrl: intervenant5.src
    },
    {
      name: "Aisha Bello",
      role: "Directrice Marketing",
      company: "Marketing Digital",
      imageUrl: intervenant6.src
    },
    {
      name: "Nala Kabongo",
      role: "Fondatrice",
      company: "E-commerce",
      imageUrl: intervenant7.src
    },
    {
      name: "Zara Mbenge",
      role: "Data Scientist",
      company: "Intelligence Artificielle",
      imageUrl: intervenant8.src
    }
  ];

  return (
    <section id="speakers" className="bg-[#f9fafb]">

      <div className="bg-[#1b0a3d] text-white py-32 relative overflow-hidden">


        <div className="absolute inset-0 z-0 opacity-40">
          <img src={dotMap.src} alt="" className="w-full h-full object-cover md:object-contain object-center scale-150 md:scale-100 mix-blend-overlay" />
        </div>

        <Container className="relative z-10 text-center flex flex-col items-center justify-center">
          <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black mb-6 tracking-tight drop-shadow-md">
            ILS ONT PRIS LA PAROLE
          </h2>
          <p className="text-xl md:text-2xl lg:text-[1.35rem] font-bold text-white max-w-4xl px-4 leading-snug">
            Rencontre, Session d'échanges et Expériences conçues pour
            prolonger les discussions et transformer les idées en collaborations
            concrètes.
          </p>
        </Container>
      </div>


      <Container className="pt-16 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 gap-y-12">
          {speakers.map((speaker, index) => (
            <SpeakerCard key={index} {...speaker} />
          ))}
        </div>

        <div className="mt-20 flex justify-center pb-10">
          <button className="bg-[#1b0a3d] text-white px-10 py-3 rounded-full font-bold text-sm tracking-wide shadow-lg hover:bg-[#2b165d] transition-colors">
            All speakers
          </button>
        </div>
      </Container>
    </section>
  );
};
