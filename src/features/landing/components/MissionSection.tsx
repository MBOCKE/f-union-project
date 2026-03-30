import { Container } from "@/core/components/Container";
import { Button } from "@/core/components/Button";
import notremissionimage1 from "@/core/assets/notremissionimage1.png";
import notremissionimage2 from "@/core/assets/notremissionimage2.png";

export const MissionSection = () => {
  return (
    <section id="mission" className="py-24 bg-white">
      <Container className="max-w-6xl mx-auto px-4">
        {/* Top Header and Grid */}
        <div className="mb-16">
          <h2 className="text-[2.75rem] md:text-[3.5rem] font-bold leading-tight mb-12 tracking-tight">
            <span className="text-[#151f2e] border-b-[5px] border-[#2998e3] pb-1 mr-3 inline-block">
              Notre
            </span>
            <span className="text-[#2998e3]">Mission</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Content */}
            <div className="text-gray-600 space-y-6 text-sm md:text-base font-medium leading-relaxed max-w-lg pt-4">
              <p>
                Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus
                error sit voluptatem accusantium dolore mque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo invent. Sed ut perspiciatis unde omnis
                iste natus error sit.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo invent. Lorem ipsum dolor sit amet, onsectetur adipiscing
                cons ectetur nulla. Sed at ullamcorper risus. Teritatis et quasi architecto.
              </p>
            </div>

            {/* Right Content - Overlapping Images */}
            <div className="relative h-[380px] md:h-[480px] w-full mt-10 md:mt-0">
              <div className="absolute top-0 left-0 w-3/5 md:w-[60%] lg:w-[55%] aspect-video z-10 overflow-hidden transition-transform hover:scale-[1.02]">
                <img
                  src={notremissionimage1.src}
                  alt="Mission interaction"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-[25%] md:top-[20%] right-0 md:right-[5%] lg:right-[10%] w-[55%] md:w-[50%] aspect-[4/3] z-20 overflow-hidden border-[16px] border-white transition-transform hover:scale-[1.02]">
                <img
                  src={notremissionimage2.src}
                  alt="Mission event"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 mb-20 mt-12 w-full max-w-5xl mx-auto justify-items-center">
          {/* Stat 1 */}
          <div className="flex items-center gap-5 w-full max-w-[200px]">
            <div className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full bg-[#2998e3] text-white flex items-center justify-center shrink-0">
              {/* Users Icon */}
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 11a4 4 0 100-8 4 4 0 000 8zm-6.5-1a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM17.5 5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm-5.5 8c-3.59 0-10 1.8-10 5.4V21h20v-2.6c0-3.6-6.41-5.4-10-5.4z" /></svg>
            </div>
            <div className="flex flex-col">
              <div className="font-serif font-bold text-[3rem] leading-none text-[#333] mb-1">600</div>
              <div className="text-[0.65rem] font-medium text-gray-500 tracking-wider uppercase">Participantes</div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-5 w-full max-w-[200px]">
            <div className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full bg-[#2998e3] text-white flex items-center justify-center shrink-0">
              {/* Presenter/Speaker Icon */}
              <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9 8h18v-2c0-2.66-5.33-4-9-4s-9 1.34-9 4v2z" /></svg>
            </div>
            <div className="flex flex-col">
              <div className="font-serif font-bold text-[3rem] leading-none text-[#333] mb-1">30</div>
              <div className="text-[0.65rem] font-medium text-gray-500 tracking-wider uppercase">Intervenantes</div>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-5 w-full max-w-[200px]">
            <div className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full bg-[#2998e3] text-white flex items-center justify-center shrink-0">
              {/* Calendar Icon */}
              <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM5 8V6h14v2H5zM7 12h5v5H7v-5z" /></svg>
            </div>
            <div className="flex flex-col">
              <div className="font-serif font-bold text-[3rem] leading-none text-[#333] mb-1">3</div>
              <div className="text-[0.65rem] font-medium text-gray-500 tracking-wider uppercase">Jours</div>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="flex items-center gap-5 w-full max-w-[200px]">
            <div className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full bg-[#2998e3] text-white flex items-center justify-center shrink-0">
              {/* Globe Icon */}
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>
            </div>
            <div className="flex flex-col">
              <div className="font-serif font-bold text-[3rem] leading-none text-[#333] mb-1">1</div>
              <div className="text-[0.6rem] font-medium text-gray-500 tracking-wider uppercase mb-1 whitespace-nowrap">écosystème<br />stratégique</div>
            </div>
          </div>
        </div>
      </Container>

      {/* Full Width Blocks */}
      <Container className="max-w-6xl mx-auto px-4 mb-20">
        <div className="w-full flex-col md:flex-row flex mx-auto shadow-2xl rounded-sm overflow-hidden">
          {/* Block 1 */}
          <div className="flex-[1.2] bg-gradient-to-r from-[#2998e3] to-[#147ec1] flex items-center justify-center cursor-pointer hover:opacity-95 transition-opacity py-16 md:py-24">
            <span className="text-white font-bold text-xl md:text-2xl tracking-wide">Identifier</span>
          </div>

          {/* Block 2 */}
          <div className="flex-1 bg-[#0f172a] flex items-center justify-center cursor-pointer hover:bg-[#1e293b] transition-colors py-16 md:py-24">
            <span className="text-white font-bold text-xl md:text-2xl tracking-wide">Former</span>
          </div>

          {/* Block 3 */}
          <div className="flex-1 bg-[#2998e3] flex items-center justify-center cursor-pointer hover:bg-[#3ba2e8] transition-colors py-16 md:py-24">
            <span className="text-white font-bold text-xl md:text-2xl tracking-wide">Connecter</span>
          </div>

          {/* Block 4 */}
          <div className="flex-1 bg-[#010617] flex items-center justify-center cursor-pointer hover:bg-[#061122] transition-colors py-16 md:py-24">
            <span className="text-white font-bold text-xl md:text-2xl tracking-wide">Projeter</span>
          </div>
        </div>
      </Container>

      {/* Bottom CTA */}
      <div className="text-center pb-8">
        <Button variant="purple" className="px-12 py-5 rounded-full font-bold text-[15px] bg-[#111827] text-white hover:bg-[#1f2937] border-none shadow-lg tracking-wide uppercase">
          Reserver ma place
        </Button>
      </div>
    </section>
  );
};
