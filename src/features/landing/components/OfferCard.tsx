import Image from "next/image";
import { Button } from "@/core/components/Button";

interface OfferCardProps {
  title: string;
  price: string;
  features: string[];
  variant: 'startup' | 'nextgen' | 'vip';
  imageUrl?: string;
  isPopular?: boolean;
  priceColor?: string;
}

export const OfferCard = ({ title, price, features, variant, imageUrl, priceColor, isPopular }: OfferCardProps) => {
  // Define precise colors and styles for each variant from the design
  const styles = {
    nextgen: {
      bg: "bg-[#a63c33]",
      titleColor: "text-white",
      buttonBg: "bg-[#380400]",
      priceColor: "text-[#380400]",
      buttonText: "text-white",
      imageOverlay: "bg-gradient-to-t from-[#78201A] to-[#DE3B30]/60"
    },
    startup: {
      bg: "bg-[#4a2e87]",
      titleColor: "text-white",
      buttonBg: "bg-[#2E99DD]",
      priceColor: "text-[#BADBFF]",
      buttonText: "text-white",
      imageOverlay: "bg-[#024282]/85"
    },
    vip: {
      bg: "bg-[#185c96]",
      titleColor: "text-white",
      buttonBg: "bg-[#210250]", // Bright blue button
      priceColor: "text-[#21004E]",
      buttonText: "text-white",
      imageOverlay: "bg-gradient-to-t from-[#360978] to-[#8B5DD0]/60"
    },
  };

  const currentStyle = styles[variant];

  return (
    <div className={`rounded-[2rem] overflow-hidden flex flex-col relative w-full h-full shadow-lg ${currentStyle.bg}`}>


      <div className="absolute inset-0 z-0">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full text-white/30 text-xs flex items-center justify-center pt-10">
            [ Insert Image Here ]
          </div>
        )}
        <div className={`absolute inset-0 ${currentStyle.imageOverlay}`}></div>
      </div>


      <div className="relative z-10 p-8 flex-1 flex flex-col">


        {variant === 'vip' && <div className="flex-1 min-h-[100px]"></div>}

        <h4 className={`font-black mb-1 ${variant === 'vip' ? 'text-4xl' : 'text-3xl text-center md:text-left'} ${currentStyle.titleColor}`}>
          {title}
        </h4>

        <div className={`font-black tracking-tight mb-8 ${variant === 'vip' ? 'text-5xl' : 'text-[2.5rem] leading-none text-center md:text-left'} ${currentStyle.priceColor}`}>
          {price}<span className={`text-2xl md:text-3xl tracking-normal ml-1`}>FCFA</span>
        </div>

        <div className="mb-3 font-bold text-white text-lg">Idéal pour :</div>
        <ul className="mb-8 space-y-2 text-white font-medium">
          <li className="flex items-start gap-2">
            <span className="shrink-0 mt-1.5 w-1 h-1 rounded-full bg-white"></span>
            <span className="opacity-100">{features[0]}</span> {/* Taking first item as ideal pour in our mockup data structure for simplicity, or we can adjust props */}
          </li>
        </ul>

        <div className="mb-3 font-bold text-white text-lg">Inclut :</div>
        <ul className={`mb-10 space-y-2 text-white/90 font-medium ${variant !== 'vip' ? 'flex-1' : ''}`}>
          {features.slice(1).map((feature, i) => ( // Using remaining features for "Inclut :"
            <li key={i} className="flex items-start gap-2">
              <span className="shrink-0 mt-1.5 w-1 h-1 rounded-full bg-white/90"></span>
              <span className="opacity-100 leading-snug">{feature}</span>
            </li>
          ))}
        </ul>

        <button
          className={`w-full py-4 text-lg rounded-full font-bold transition-opacity hover:opacity-90 ${currentStyle.buttonBg} ${currentStyle.buttonText} mt-auto shadow-md`}
        >
          Acheter mon pass
        </button>
      </div>
    </div>
  );
};
