"use client";

import {
  CalendarDays,
  ChevronDown,
  Handshake,
  UsersRound,
} from "lucide-react";
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
  const featuredRole = roles[0];
  const otherRoleCount = Math.max(roles.length - 1, 0);

  return (
    <details
      id={section.id}
      open={defaultOpen || undefined}
      className="group mx-auto w-full max-w-6xl scroll-mt-24 border-t-2 border-[#845ec2] py-3 first:border-t-0"
    >
      <summary className="grid cursor-pointer list-none grid-cols-1 gap-y-3 text-slate-800 marker:hidden [&::-webkit-details-marker]:hidden">
        <div className="flex min-w-0 flex-wrap items-baseline justify-between gap-x-5 gap-y-2">
          <div className="flex min-w-0 flex-wrap items-baseline gap-x-5 gap-y-1">
            <h3 className="text-lg font-bold sm:text-xl">{section.label}</h3>
            {/* Temporarily hide the featured role title and its dot.
            {featuredRole && (
              <p className="flex items-baseline gap-2 text-sm font-semibold leading-snug text-[#6f45aa]">
                <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-[#845ec2]" />
                <span>{featuredRole.title}</span>
              </p>
            )}
            */}
          </div>

          <span className="inline-flex shrink-0 items-center gap-1.5 pt-1 text-sm font-bold text-[#6f45aa]">
            + {otherRoleCount} {otherRoleCount === 1 ? "autre" : "autres"}
            <ChevronDown
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-200 group-open:rotate-180"
            />
          </span>
        </div>

        {featuredRole && (
          <dl className="grid w-full grid-cols-2 gap-x-5 gap-y-3 sm:grid-cols-3">
            {[
              {
                label: "Durée",
                value: featuredRole.duration,
                Icon: CalendarDays,
              },
              {
                label: "Rattachement",
                value: featuredRole.manager,
                Icon: UsersRound,
              },
              {
                label: "Collaboration",
                value:
                  featuredRole.collaborators ||
                  roles[1]?.collaborators ||
                  "Non précisée",
                Icon: Handshake,
              },
            ].map(({ label, value, Icon }) => (
              <div key={label} className="flex min-w-0 items-start gap-2">
                <dt title={label} className="mt-0.5 shrink-0">
                  <Icon aria-hidden="true" className="h-4 w-4 text-[#845ec2]" />
                  <span className="sr-only">{label}</span>
                </dt>
                <dd className="min-w-0 text-xs font-medium leading-snug text-slate-800 sm:text-sm">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        )}

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
