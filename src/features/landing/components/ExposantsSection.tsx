import { Container } from "@/core/components/Container";
import { ExhibitorCard } from "./ExhibitorCard";
import dotMap from "@/core/assets/Dot Map.png";

export const ExposantsSection = () => {
  const exposants = [
    {
      title: "Investment Room",
      subtitle: "Investisseurs & startups",
      description: "Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo invent."
    },
    {
      title: "Power Hub",
      subtitle: "Solutions énergétiques",
      description: "Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo invent."
    },
    {
      title: "Tech Valley",
      subtitle: "Incubateur technologies",
      description: "Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo invent."
    }
  ];

  return (
    <section id="exposants" className="bg-white">

      <div className="bg-[#da291c] text-white py-24 relative overflow-hidden bg-gradient-to-b from-[#da291c] to-[#a61c12]">


        <div className="absolute inset-0 z-0 opacity-40">
          <img src={dotMap.src} alt="" className="w-full h-full object-cover md:object-contain object-center scale-150 md:scale-100 mix-blend-overlay" />
        </div>

        <Container className="relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight drop-shadow-md">
            # Exposants
          </h2>
          <h3 className="text-2xl md:text-4xl font-black max-w-3xl mx-auto leading-tight drop-shadow-md">
            Un écosystème en action
          </h3>
        </Container>
      </div>


      <Container className="pt-16 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {exposants.map((exposant, index) => (
            <ExhibitorCard key={index} {...exposant} />
          ))}
        </div>

        <div className="mt-20 flex justify-center pb-10">
          <button className="bg-[#3b0909] text-white px-10 py-3 rounded-full font-bold text-sm tracking-wide shadow-lg hover:bg-black transition-colors">
            Voir plus
          </button>
        </div>
      </Container>
    </section>
  );
};
