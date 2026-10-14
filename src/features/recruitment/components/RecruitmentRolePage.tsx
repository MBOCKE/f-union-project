"use client";

import Link from "next/link";
import { useState } from "react";
import type { ReactNode } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock3,
  FileText,
  MapPin,
  Users,
  XCircle,
} from "lucide-react";
import { Button } from "@/core/components/Button";
import { Container } from "@/core/components/Container";
import { ApplicationModal } from "./ApplicationModal";
import type { RecruitmentRole } from "../types";

type RecruitmentRolePageProps = {
  role: RecruitmentRole;
};

export const RecruitmentRolePage = ({ role }: RecruitmentRolePageProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="bg-[#faf9ff] text-summit-dark">
      <section className="bg-[#2d0a54] pb-16 pt-32 text-white md:pb-24 md:pt-40">
        <Container>
          <Link
            href="/recrutement#postes"
            className="inline-flex items-center text-sm font-bold text-white/75 transition-colors hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour aux postes ouverts
          </Link>
          <div className="mt-10 max-w-4xl">
            <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-black text-white">
              {role.category}
            </span>
            <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
              {role.title}
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-relaxed text-white/80 md:text-2xl">
              {role.tagline}
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-gray-200 bg-white py-8">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <MetaItem icon={<Users />} label="Rattaché·e à" value={role.manager} />
            <MetaItem icon={<Clock3 />} label="Durée" value={role.duration} />
            <MetaItem icon={<FileText />} label="Engagement" value={role.commitment} />
            <MetaItem icon={<MapPin />} label="Format" value={role.format} />
          </div>
        </Container>
      </section>

      <Container className="py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-[760px]">
            <section>
              <SectionTitle>En une phrase</SectionTitle>
              <p className="mt-5 text-justify text-xl leading-relaxed text-gray-700">
                {role.summary}
              </p>
            </section>

            <section className="mt-14">
              <SectionTitle>Ce que vous ferez concrètement</SectionTitle>
              <ul className="mt-6 space-y-4">
                {role.responsibilities.map((item) => (
                  <li key={item} className="flex gap-3 text-justify leading-relaxed text-gray-700">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#845ec2]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-14">
              <SectionTitle>Ce qu&apos;on recherche</SectionTitle>
              <ul className="mt-6 space-y-4">
                {role.profile.map((item) => (
                  <li key={item} className="flex gap-3 text-justify leading-relaxed text-gray-700">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#126db1]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {role.notFor && role.notFor.length > 0 && (
              <section className="mt-14">
                <SectionTitle>
                  Ce poste n&apos;est probablement pas pour vous si...
                </SectionTitle>
                <ul className="mt-6 space-y-4">
                  {role.notFor.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-justify leading-relaxed text-gray-700"
                    >
                      <XCircle className="mt-1 h-5 w-5 shrink-0 text-[#da291c]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl bg-[#2d0a54] p-7 text-white shadow-xl md:p-8">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#d9c8ff]">
                Ce que F-UNION vous apporte
              </p>
              <ul className="mt-6 space-y-4">
                {role.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3 text-sm leading-relaxed text-white/85">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#d9c8ff]" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              {role.note && (
                <p className="mt-7 border-t border-white/15 pt-6 text-sm leading-relaxed text-white/70">
                  {role.note}
                </p>
              )}
              <Button
                type="button"
                onClick={() => setIsModalOpen(true)}
                variant="white"
                size="lg"
                className="mt-8 w-full"
              >
                Candidater pour ce poste
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="rounded-3xl border border-[#eadff9] bg-white p-7">
              <p className="font-black text-summit-dark">Vous hésitez entre plusieurs rôles ?</p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Consultez les autres fiches ou écrivez à l&apos;équipe pour être orienté·e vers le pôle le plus adapté.
              </p>
              <Link
                href="/recrutement#postes"
                className="mt-5 inline-flex items-center font-black text-[#6f45aa] hover:text-[#2d0a54]"
              >
                Voir tous les postes
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </Container>
      <ApplicationModal
        key={isModalOpen ? role.slug : "closed"}
        isOpen={isModalOpen}
        role={role}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
};

const MetaItem = ({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) => (
  <div className="flex gap-3">
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f2ecff] text-[#6f45aa] [&>svg]:h-5 [&>svg]:w-5">
      {icon}
    </div>
    <div>
      <p className="text-xs font-black uppercase tracking-wide text-gray-400">{label}</p>
      <p className="mt-1 text-sm font-bold leading-relaxed text-summit-dark">{value}</p>
    </div>
  </div>
);

const SectionTitle = ({ children }: { children: ReactNode }) => (
  <h2 className="text-2xl font-black leading-tight text-summit-dark md:text-3xl">
    {children}
  </h2>
);
