import type { RecruitmentRole } from "../types";
import Image from "next/image";

import photo40 from "@/core/assets/photo library/photo_40_2026-10-07_15-51-00.jpg";
import photo41 from "@/core/assets/photo library/photo_41_2026-10-07_15-51-00.jpg";
import photo42 from "@/core/assets/photo library/photo_42_2026-10-07_15-51-00.jpg";
import photo43 from "@/core/assets/photo library/photo_43_2026-10-07_15-51-00.jpg";
import photo44 from "@/core/assets/photo library/photo_44_2026-10-07_15-51-00.jpg";
import photo45 from "@/core/assets/photo library/photo_45_2026-10-07_15-51-00.jpg";
import photo46 from "@/core/assets/photo library/photo_46_2026-10-07_15-51-00.jpg";
import photo47 from "@/core/assets/photo library/photo_47_2026-10-07_15-51-00.jpg";
import photo48 from "@/core/assets/photo library/photo_48_2026-10-07_15-51-00.jpg";
import photo49 from "@/core/assets/photo library/photo_49_2026-10-07_15-51-00.jpg";
import photo50 from "@/core/assets/photo library/photo_50_2026-10-07_15-51-00.jpg";
import photo51 from "@/core/assets/photo library/photo_51_2026-10-07_15-51-00.jpg";
import photo52 from "@/core/assets/photo library/photo_52_2026-10-07_15-51-00.jpg";
import photo53 from "@/core/assets/photo library/photo_53_2026-10-07_15-51-00.jpg";
import photo54 from "@/core/assets/photo library/photo_54_2026-10-07_15-51-00.jpg";

const roleImageMapping: Record<string, { src: string }> = {
  "coordinateur-operationnel-summit": photo40,
  "community-manager-animation": photo41,
  "community-manager-strategie-contenu": photo42,
  "responsable-juridique": photo43,
  "graphic-designer-creation-visuelle": photo44,
  "chef-projet-contenu-speakers": photo45,
  "charge-relations-presse": photo46,
  "chef-projet-marketing-offres": photo47,
  "chef-projet-activations-experience": photo48,
  "data-analyst": photo49,
  "charge-finances-douala": photo50,
  "charge-relations-exterieures": photo51,
  "graphic-designer-motion-digital": photo52,
  "responsable-logistique": photo53,
  "charge-plaidoyer-cooperation": photo54,
};

type RecruitmentRoleCardProps = {
  role: RecruitmentRole;
  onApply: (role: RecruitmentRole) => void;
};

const RecruitmentRoleCard = ({ role, onApply }: RecruitmentRoleCardProps) => (
  <article className="group relative flex min-h-[420px] flex-col overflow-hidden rounded-xl border border-gray-100 shadow-sm">
    <Image
      src={roleImageMapping[role.slug] ? roleImageMapping[role.slug].src : photo40}
      alt={role.title}
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      className="absolute inset-0 z-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
    />

    <div className="relative z-10 h-[220px] w-full shrink-0" />

    <div className="relative z-10 flex flex-1 flex-col overflow-hidden">
      <div className="pointer-events-none relative z-30 flex flex-1 flex-col px-6 pb-4 pt-6">
        <h3 className="pointer-events-auto text-lg font-bold leading-snug text-summit-dark">
          {role.title}
        </h3>
        <p className="pointer-events-auto mt-2 line-clamp-2 text-sm text-gray-500">
          {role.tagline}
        </p>
      </div>
      <div className="relative z-20 px-6 pb-6 text-center">
        <button
          type="button"
          onClick={() => onApply(role)}
          className="relative flex w-full items-center justify-center rounded-lg py-2.5 text-xs font-bold transition-all hover:scale-[1.02]"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-20 rounded-lg"
            style={{ boxShadow: "0 0 0 9999px white" }}
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 rounded-lg border border-summit-purple/20 bg-summit-purple/85 backdrop-blur-md"
          />
          <span className="relative z-10 tracking-wide text-white uppercase">
            Postuler
          </span>
        </button>
      </div>
    </div>
  </article>
);

export default RecruitmentRoleCard;
