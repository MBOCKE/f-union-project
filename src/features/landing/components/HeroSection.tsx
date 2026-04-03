import { Container } from "@/core/components/Container";
import { Button } from "@/core/components/Button";
import heroImage from "@/core/assets/heroImage.png"

export const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex flex-col pb-16 bg-summit-dark overflow-hidden">

      <div className="absolute inset-0 z-0 bg-black">
        <img src={heroImage.src} alt="heroImage" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div className="absolute inset-y-0 right-0 w-[70%] bg-gradient-to-l from-[#3a2051]/40 to-transparent z-10"></div>
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-summit-dark via-summit-dark/90 to-transparent z-10"></div>
      </div>

      <Container className="relative z-20 flex-1 flex flex-col justify-center w-full mt-2">
        <div className="text-white max-w-4xl">
          <h2 className="text-[#845ec2] font-black uppercase text-xl md:text-2xl mb-4 leading-tight">
            # Next<br />
            Africa 2035
          </h2>

          <h1 className="text-5xl md:text-[5.5rem] font-black mb-8 leading-[1.05] tracking-tight">
            F-UNION AFRICA<br />
            SUMMIT 2026
          </h1>

          <p className="text-xl md:text-2xl text-[#b39ddb] font-medium mb-10 max-w-lg leading-snug">
            La visibilité comme levier de transformation économique.
          </p>

          <div className="flex gap-4 mb-10">
            <Button variant="purple" className="px-8 py-3 rounded-full font-bold text-sm bg-summit-dark border border-white/10 hover:bg-white/10">
              Reserver ma place
            </Button>
          </div>
        </div>
      </Container>


      <Container className="relative z-20 mt-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">

          {/* Location */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 flex items-center justify-center shrink-0">

              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
            <div className="font-bold text-lg leading-tight">
              Douala /<br />
              Cameroun
            </div>
          </div>

          {/* Date */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 flex items-center justify-center shrink-0">
              {/* SVG Icon Outline Sign/Date */}
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            </div>
            <div className="font-bold text-lg leading-tight">
              28 – 30<br />
              mai 2026
            </div>
          </div>

          {/* Price Info */}
          <div className="flex items-center gap-4">
            {/* Note: the design has a ticket icon here but it appears slightly cut off at the bottom, I'll use a standard ticket icon */}
            <div className="w-10 h-10 flex items-center justify-center shrink-0">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7V4h16v3c-1.1 0-2 .9-2 2s.9 2 2 2v3H4v-3c1.1 0 2-.9 2-2s-.9-2-2-2V7z"></path><line x1="9" y1="7" x2="9" y2="17"></line><line x1="15" y1="7" x2="15" y2="17"></line></svg>
            </div>
            <div className="font-bold text-lg leading-tight">
              Pass à partir de<br />
              5 000 FCFA
            </div>
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
