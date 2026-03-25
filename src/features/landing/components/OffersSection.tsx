import { Container } from "@/core/components/Container";
import { SectionHeading } from "@/core/components/SectionHeading";
import { OfferCard } from "./OfferCard";
import offerImage1 from "@/core/assets/offerImage1.png";
import offerImage2 from "@/core/assets/offerImage2.png";
import offerImage3 from "@/core/assets/offerImage3.png";
import offerImage4 from "@/core/assets/offerImage4.png";
import offerImage5 from "@/core/assets/offerImage5.png";
import dotMap from "@/core/assets/Dot Map.png";

export const OffersSection = () => {
  const offers = [
    {
      title: "Next Gen",
      price: "5 000",
      imageUrl: offerImage2.src,
      variant: 'nextgen' as const,
      features: [
        "Étudiantes et jeunes diplômées.", // Idéal pour
        "Accès panels & plénières",
        "Accès ateliers standards",
        "Networking"
      ],
    },
    {
      title: "Talent / Startup", // Displayed as TALENT / STARTUP
      price: "10 000",
      variant: 'startup' as const,
      imageUrl: offerImage3.src,
      features: [
        "Entrepreneures et professionnelles", // Idéal pour
        "Accès panels & ateliers",
        "Accès networking qualifié",
        "Accès opportunités investisseurs"
      ],
    },
    {
      title: "VIP",
      price: "35 000",
      variant: 'vip' as const,
      imageUrl: offerImage5.src,
      features: [
        "Dirigeantes, décideuses, partenaires", // Idéal pour
        "Accès lounge VIP",
        "Tables rondes exclusives",
        "Networking premium",
        "Accès prioritaire"
      ],
    },

  ];

  return (
    <section id="offres" className="bg-white">
      {/* Header Section */}
      <div className="bg-[#da291c] text-white py-20 relative overflow-hidden bg-gradient-to-b from-[#da291c] to-[#a61c12]">
        <div className="absolute inset-0 z-0 opacity-40">
          <img src={dotMap.src} alt="" className="w-full h-full object-cover md:object-contain object-center scale-150 md:scale-100 mix-blend-overlay" />
        </div>
        
        <Container className="relative z-10 text-center flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase text-white leading-[1.1] tracking-tight mb-8 whitespace-nowrap">
            <span className="relative inline-block mr-4">
              CHOISISSEZ
              <span className="absolute -bottom-1 md:-bottom-2 right-0 w-32 md:w-56 h-1 md:h-1.5 bg-white" />
            </span>
            VOTRE PASS
          </h2>
          <p className="text-xl md:text-3xl font-medium text-white mb-4">
            Trois façons de vivre l'expérience <span className="font-black">F-UNION</span>
          </p>
        </Container>
      </div>

      {/* Cards Section */}
      <div className="py-20">
        <Container className="flex flex-col items-center">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full items-stretch">


          <div className="flex flex-col gap-6">

            <div className="w-full h-64 rounded-[2rem] overflow-hidden bg-[#e5e7eb] relative">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-bold text-xs">
                < img src={offerImage1.src} alt="offerImage 1" className="w-full h-full object-cover" />
              </div>
            </div>


            <div className="w-full flex-1">
              <OfferCard {...offers[0]} />
            </div>
          </div>


          <div className="flex flex-col gap-6">

            <div className="w-full flex-1">
              <OfferCard {...offers[1]} />
            </div>


            <div className="w-full h-64 rounded-[2rem] overflow-hidden bg-[#e5e7eb] relative">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-bold text-xs">
                < img src={offerImage4.src} alt="offerImage 1" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="w-full h-full">
              <OfferCard {...offers[2]} />
            </div>
          </div>

        </div>
      </Container>
      </div>
    </section>
  );
};
