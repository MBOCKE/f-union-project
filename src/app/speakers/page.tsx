"use client";

import { useState } from "react";
import { Container } from "@/core/components/Container";
import { SectionHeading } from "@/core/components/SectionHeading";
import { SpeakerProfileCard } from "@/features/speakers/components/SpeakerProfileCard";
import { SpeakerModal } from "@/features/speakers/components/SpeakerModal";
import { SPEAKER_PROFILES } from "@/features/speakers/constants/speakers";
import { SpeakerProfile } from "@/features/speakers/types";

export default function Page() {
  const [activeSpeaker, setActiveSpeaker] = useState<SpeakerProfile | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSpeakers = SPEAKER_PROFILES.filter((speaker) =>
    speaker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    speaker.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    speaker.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="bg-white pt-24 pb-24">
      <Container>
        <div className="mx-auto max-w-5xl text-center pb-16">
          <SectionHeading hashtag="Intervenants" title="Intervenant(e)s" subtitle="Découvrez les profils des speakers confirmés et accédez à leurs panels directement depuis leur fiche." />
        </div>

        <div className="mb-8 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Rechercher par nom, rôle ou description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-[2rem] border border-[#E8E8F0] bg-white px-6 py-4 text-[#0F2E4C] placeholder-[#5E7184] shadow-sm focus:border-[#845ec2] focus:outline-none focus:ring-2 focus:ring-[#845ec2]/20 transition-all"
          />
        </div>

        {filteredSpeakers.length === 0 ? (
          <p className="text-center text-[#5E7184] text-lg py-12">Aucun intervenant trouvé. Essayez un autre mot-clé.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredSpeakers.map((speaker) => (
              <SpeakerProfileCard
                key={speaker.id}
                speaker={speaker}
                onSelect={() => setActiveSpeaker(speaker)}
              />
            ))}
          </div>
        )}
        {filteredSpeakers.length !== SPEAKER_PROFILES.length && (
          <p className="text-center text-sm text-[#5E7184] mt-6">
            {filteredSpeakers.length} sur {SPEAKER_PROFILES.length} intervenant(s)
          </p>
        )}
      </Container>

      <SpeakerModal speaker={activeSpeaker} onClose={() => setActiveSpeaker(null)} />
    </main>
  );
}
