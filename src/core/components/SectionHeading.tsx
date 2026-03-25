
interface SectionHeadingProps {
  hashtag: string;
  title?: string;
  subtitle?: string;
  light?: boolean; // For dark backgrounds
  centered?: boolean;
}

export const SectionHeading = ({ hashtag, title, subtitle, light, centered = true }: SectionHeadingProps) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      <span className="text-3xl md:text-4xl font-black text-summit-purple block mb-2 uppercase">
        # {hashtag}
      </span>
      {title && (
        <h2 className={`text-2xl md:text-3xl font-bold uppercase ${light ? 'text-white' : 'text-summit-dark'}`}>
          {title}
        </h2>
      )}
      {subtitle && (
        <p className={`mt-4 text-lg ${light ? 'text-white/80' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};