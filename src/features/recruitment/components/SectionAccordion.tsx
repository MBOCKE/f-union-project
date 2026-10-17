"use client";

import { ChevronDown } from "lucide-react";
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
}: SectionAccordionProps) => {
  return (
    <details
      id={section.id}
      open={defaultOpen || undefined}
      className="group mx-auto w-full max-w-6xl scroll-mt-24 border-t-2 border-[#845ec2] py-3 first:border-t-0"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-slate-800 marker:hidden [&::-webkit-details-marker]:hidden">
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-bold sm:text-xl">{section.label}</h3>
          <ul className="mt-2 flex flex-wrap gap-2">
            {roles.map((role) => (
              <li
                key={role.slug}
                className="rounded-full border border-[#d8c5ee] bg-white/80 px-3 py-1 text-xs font-semibold leading-snug text-[#6f45aa] sm:text-sm"
              >
                {role.title}
              </li>
            ))}
          </ul>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-[#d8c5ee] bg-white px-3 py-2 text-xs font-bold text-[#6f45aa] sm:text-sm">
          <span>Voir les postes</span>
          <ChevronDown
            aria-hidden="true"
            className="h-4 w-4 transition-transform duration-200 group-open:rotate-180"
          />
        </span>
      </summary>

      <div className="mt-3 border-t border-[#d8c5ee] pt-3">
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
};

export default SectionAccordion;
