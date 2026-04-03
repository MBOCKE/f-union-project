import { Container } from "@/core/components/Container";
import { SectionHeading } from "@/core/components/SectionHeading";
import newWhyImage from "@/core/assets/newWhyImage.png"
export const WhySection = () => {
  return (
    <section id="vision" className="bg-[#1f5c8c] py-28 text-white relative overflow-hidden">


      <div className="absolute inset-0 z-0 text-center flex items-center justify-center opacity-30 text-xs">

        <img src={newWhyImage.src} alt="Background" className="w-full h-full object-cover" />
      </div>


      <div className="absolute inset-0 bg-blue-500/30 mix-blend-multiply z-10"></div>
      <div className="absolute inset-0 bg-[#1f5c8c]/30 z-10"></div>

      <Container className="relative z-20 text-center max-w-5xl mx-auto flex flex-col items-center px-4">


        <h2 className="text-3xl md:text-[2.6rem] lg:text-5xl font-black tracking-tight leading-tight mb-8 max-w-4xl text-white">
          {/* F-UNION — dark with underline */}
          <span className="relative inline-block font-black text-[#0d1f36]">
            F-UNION,
            <span className="absolute bottom-[-6px] left-0 w-10 h-[3px] bg-[#0d1f36] rounded-full" />
          </span>{" "}
          <span className="font-bold">la plateforme des femmes</span>
          <br />
          <span className="font-bold">qui façonnent </span>
          {/* l'Afrique — dark */}
          <span className="font-black text-[#0d1f36]">l&apos;Afrique</span>
        </h2>

        <p className="text-lg md:text-xl font-medium text-white max-w-2xl leading-relaxed">
          Un sommet panafricain qui connecte talents, entreprises et décideurs
          pour transformer la visibilité en{" "}
          <span className="font-bold">opportunités économiques.</span>
        </p>

      </Container>
    </section>
  );
};
