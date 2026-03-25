
interface SpeakerCardProps {
  name: string;
  role: string;
  company: string;
  imageUrl: string;
}

export const SpeakerCard = ({ name, role, company, imageUrl }: SpeakerCardProps) => {
  return (
    <div className="flex flex-col items-center group cursor-pointer w-full">


      <div className="w-full aspect-square relative overflow-hidden bg-gray-200 mb-6 flex items-center justify-center text-gray-500 text-xs">
        <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
      </div>


      <h4 className="font-bold text-[#8c52ff] md:text-lg text-center mb-2 tracking-tight">
        {name}
      </h4>


      <div className="text-[#6b7280] text-[0.65rem] md:text-xs text-center font-medium leading-tight mb-5 h-8 flex flex-col justify-center">
        <span>{role}</span>
        <span>{company}</span>
      </div>


      <div className="flex items-center justify-center gap-6 text-[#9ca3af]">

        {/* Facebook */}
        <a href="#" className="hover:text-[#8c52ff] transition-colors">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"></path></svg>
        </a>

        {/* Twitter */}
        <a href="#" className="hover:text-[#8c52ff] transition-colors">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.954 4.569a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.061a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-1.299.172 4.868 4.868 0 0 1-.926-.089 4.936 4.936 0 0 0 4.604 3.417 9.868 9.868 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 0 0 2.46-2.548l-.047-.02z"></path></svg>
        </a>

        {/* Instagram */}
        <a href="#" className="hover:text-[#8c52ff] transition-colors">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.344 3.608 1.319.975.975 1.257 2.242 1.319 3.608.058 1.265.069 1.645.069 4.849s-.011 3.584-.069 4.849c-.062 1.366-.344 2.633-1.319 3.608-.975.975-2.242 1.257-3.608 1.319-1.265.058-1.645.069-4.849.069s-3.584-.011-4.849-.069c-1.366-.062-2.633-.344-3.608-1.319-.975-.975-1.257-2.242-1.319-3.608C2.174 15.584 2.163 15.204 2.163 12s.011-3.584.069-4.849c.062-1.366.344-2.633 1.319-3.608C4.526 2.568 5.792 2.286 7.158 2.224 8.423 2.166 8.803 2.163 12 2.163zm0-2.163C8.741 0 8.333.014 7.053.072 5.775.132 4.61.397 3.593 1.414 2.576 2.431 2.311 3.596 2.251 4.875 2.193 6.155 2.179 6.563 2.179 9.825s.014 3.67.072 4.95c.06 1.279.325 2.444 1.342 3.461 1.017 1.017 2.182 1.282 3.461 1.342 1.28.058 1.688.072 4.95.072s3.67-.014 4.95-.072c1.279-.06 2.444-.325 3.461-1.342 1.017-1.017 1.282-2.182 1.342-3.461.058-1.28.072-1.688.072-4.95s-.014-3.67-.072-4.95c-.06-1.279-.325-2.444-1.342-3.461-1.017-1.017-2.182-1.282-3.461-1.342C15.67.014 15.262 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm5.882-10.43a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"></path></svg>
        </a>
      </div>

    </div>
  );
};
