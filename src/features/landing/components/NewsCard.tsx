export const NewsCard = ({ date, text }: { date: string, text: string }) => {
  return (
    <div className="flex flex-col h-full bg-summit-dark group cursor-pointer hover:-translate-y-1 transition-transform">
      {/* Top Black Area (can be image placeholder) */}
      <div className="h-48 w-full bg-[#2A2A2A] group-hover:bg-[#333] transition-colors flex items-center justify-center">
         <span className="text-gray-600 opacity-50">Image Article</span>
      </div>
      
      {/* Bottom Red Area */}
      <div className="bg-summit-red text-white p-6 flex-1 flex flex-col justify-between group-hover:bg-red-600 transition-colors">
        <h4 className="font-bold text-sm mb-4 leading-tight">
          {text}
        </h4>
        <div className="text-xs font-bold mt-auto pt-4 relative">
           <span className="absolute -top-4 w-6 h-px bg-white/50 block"></span>
           {date}
        </div>
      </div>
    </div>
  );
};
