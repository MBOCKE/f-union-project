"use client"
import { Container } from "@/core/components/Container";
import { Button } from "@/core/components/Button";
import heroImage from "@/core/assets/heroImage.png"
import doualaLogo from "@/core/assets/doualaLogo.png"
import dateLogo from "@/core/assets/dateLogo.png"
import passLogo from "@/core/assets/passLogo.png"

export const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex flex-col pb-16 bg-summit-dark overflow-hidden">

      <div className="absolute inset-0 z-0 bg-black">
        <img src={heroImage.src} alt="heroImage" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div className="absolute inset-y-0 right-0 w-[70%] bg-gradient-to-l from-[#3a2051]/40 to-transparent z-10"></div>
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-summit-dark via-summit-dark/90 to-transparent z-10"></div>
      </div>

      <Container className="relative z-20 flex-1 flex flex-col justify-center w-full pt-32 pb-12">
        <div className="text-white max-w-4xl">
          <h2 className="text-[#845ec2] font-black uppercase text-xl md:text-2xl mb-4 leading-tight">
            #NextAfrica2035
          </h2>

          <h1 className="text-5xl md:text-[5.5rem] font-black  leading-[1.05] tracking-tight">
            F-UNION AFRICA<br />
          </h1>
          <h1 className="text-4xl md:text-[4.5rem] font-black mb-8 leading-[1.05] tracking-tight">
            SUMMIT 2026
          </h1>

          <p className="text-xl md:text-2xl text-[#b39ddb] font-medium mb-4 max-w-lg leading-snug">
            La visibilité comme levier de transformation économique.
          </p>

          <p className="text-lg md:text-xl text-white/90 font-medium mb-10 max-w-lg leading-snug">
            Construire l&apos;Afrique de 2035 en amplifiant le leadership{" "}
            <span className="text-[#b39ddb] font-bold">féminin.</span>
          </p>

        </div>
      </Container>


      <Container className="relative z-20 mt-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white items-center">

          {/* Location */}
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 flex items-center justify-center shrink-0">
              <img src={doualaLogo.src} alt="doualaLogo" className="w-6 h-full" />
            </div>
            <div className="font-bold text-sm md:text-lg leading-tight">
              Douala /<br />
              Cameroun
            </div>
          </div>

          {/* Date */}
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 flex items-center justify-center shrink-0">
              <img src={dateLogo.src} alt="dateLogo" className="w-full h-full object-cover" />
            </div>
            <div className="font-bold text-sm md:text-lg leading-tight">
              28 – 30<br />
              mai 2026
            </div>
          </div>

          {/* Price Info */}
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 flex items-center justify-center shrink-0">
              <img src={passLogo.src} alt="passLogo" className="w-full h-full object-cover" />
            </div>
            <div className="font-bold text-sm md:text-lg leading-tight">
              Pass à partir de<br />
              5 000 FCFA
            </div>
          </div>

          <div className="flex items-center justify-start md:justify-end">
            <button
              onClick={() => window.open("https://f-union.genuka.shop/en/collections", "_blank")}
              style={{ backgroundColor: "#ffffff", color: "#21004E" }}
              className="px-6 py-3 rounded-full font-bold text-xs shadow-md hover:bg-gray-100 transition-all active:scale-95 inline-flex items-center justify-center"
            >
              Réserver ma place
            </button>
          </div>

        </div>
      </Container>

      {/* Navigation Arrows (Left/Right) - Absolutely positioned */}
      {/* <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-summit-dark border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors z-30">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
      </button>

      <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-summit-purple flex items-center justify-center text-white hover:bg-summit-purple/80 transition-colors z-30">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </button> */}

    </section>
  );
};
