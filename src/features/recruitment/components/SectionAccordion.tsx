"use client";

import { ChevronRight } from "lucide-react";
import RecruitmentRoleCard from "./RecruitmentRoleCard";
import type { RecruitmentRole, RecruitmentSection } from "../types";

type SectionAccordionProps = {
  section: RecruitmentSection;
  roles: RecruitmentRole[];
  onApply: (role: RecruitmentRole) => void;
  defaultOpen?: boolean;
};

const SectionAccordion = ({
  section,
  roles,
  onApply,
  defaultOpen = false,
}: SectionAccordionProps) => (
  <details
    id={section.id}
    open={defaultOpen || undefined}
    className="group scroll-mt-24 rounded-2xl border border-slate-200 bg-white shadow-sm transition-colors duration-200 [&[open]]:border-[#fd982e]"
  >
    <summary className="flex cursor-pointer list-none items-center gap-4 rounded-2xl px-5 py-5 text-slate-800 marker:hidden transition-colors hover:text-slate-950 [&::-webkit-details-marker]:hidden sm:px-7">
      <span className="flex-1 text-left text-lg font-bold sm:text-xl">
        {section.label}
      </span>
      <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-[#fd982e]">
        {roles.length} {roles.length === 1 ? "poste" : "postes"}
      </span>
      <ChevronRight
        aria-hidden="true"
        className="h-5 w-5 shrink-0 text-[#fd982e] transition-transform duration-200 group-open:rotate-90"
      />
    </summary>

    <div className="border-t border-slate-100 px-5 pb-6 pt-5 sm:px-7">
      <p className="mb-6 max-w-4xl text-sm leading-relaxed text-slate-500 sm:text-base">
        {section.description}
      </p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {roles.map((role) => (
          <RecruitmentRoleCard
            key={role.slug}
            role={role}
            onApply={onApply}
          />
        ))}
      </div>
    </div>
  </details>
);

export default SectionAccordion;
