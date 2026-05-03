"use client";

import { useState, useMemo } from "react";
import { Container } from "@/core/components/Container";
import { Session } from "../types";
import { SpeakerProfile } from "@/features/speakers/types";
import { ProgrammeTabs } from "./ProgrammeTabs";
import { SessionCard } from "./SessionCard";
import { GoogleFormSection } from "./GoogleFormSection";

interface ProgrammeViewProps {
  sessions: Session[];
  googleFormUrl?: string;
  speakerProfiles?: SpeakerProfile[];
  onSpeakerClick?: (speaker: SpeakerProfile) => void;
}

export const ProgrammeView = ({ sessions, googleFormUrl, speakerProfiles = [], onSpeakerClick }: ProgrammeViewProps) => {
  const [activeHall, setActiveHall] = useState("Toutes les salles");

  const halls = useMemo(() => {
    const uniqueHalls = Array.from(new Set(sessions.map((s) => s.hall)));
    return uniqueHalls.sort();
  }, [sessions]);

  const filteredSessions = useMemo(() => {
    if (activeHall === "Toutes les salles") return sessions;
    return sessions.filter((s) => s.hall === activeHall);
  }, [sessions, activeHall]);

  return (
    <div className="bg-white py-10 md:py-20 pb-0">
      <Container>
        <div className="flex flex-col">
          {/* Room Selector Tabs */}
          <ProgrammeTabs 
            halls={halls} 
            activeHall={activeHall} 
            onHallChange={setActiveHall} 
          />

          {/* Sessions List */}
          <div className="flex flex-col mb-20">
            {filteredSessions.length > 0 ? (
              filteredSessions.map((session) => (
                <SessionCard
                  key={session.id}
                  session={session}
                  speakerProfiles={speakerProfiles}
                  onSpeakerClick={onSpeakerClick}
                />
              ))
            ) : (
              <div className="py-20 text-center">
                <p className="text-xl text-gray-500 italic">Aucune session prévue pour cette salle.</p>
              </div>
            )}
          </div>
        </div>
      </Container>
      
      {googleFormUrl && <GoogleFormSection formUrl={googleFormUrl} />}
    </div>
  );
};
