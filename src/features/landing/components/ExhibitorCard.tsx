interface ExhibitorCardProps {
  title: string;
  subtitle: string;
  description: string;
}

export const ExhibitorCard = ({ title, subtitle, description }: ExhibitorCardProps) => {
  return (
    <div className="flex flex-col group cursor-pointer shadow-xl overflow-hidden rounded-sm transition-transform hover:-translate-y-1">


      <div className="w-full aspect-square bg-[#333333] relative flex items-center justify-center text-gray-500 text-xs">

        {/* <img src="/images/your-image.jpg" alt={title} className="w-full h-full object-cover" /> */}
      </div>

      {/* Bottom Red Info Box */}
      <div className="bg-[#ed2c20] p-8 text-white flex-1 flex flex-col justify-start pb-12">
        <h4 className="font-bold text-xl leading-tight">
          {title}
        </h4>
        <h5 className="font-bold text-xl mb-6 leading-tight">
          {subtitle}
        </h5>

        <p className="text-sm font-medium leading-relaxed opacity-90">
          {description}
        </p>
      </div>

    </div>
  );
};
