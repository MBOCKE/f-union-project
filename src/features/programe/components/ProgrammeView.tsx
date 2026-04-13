"use client";

import { useState, useMemo } from "react";
import { Container } from "@/core/components/Container";
import { Session } from "../types";
import { ProgrammeTabs } from "./ProgrammeTabs";
import { SessionCard } from "./SessionCard";

interface ProgrammeViewProps {
  sessions: Session[];
}

export const ProgrammeView = ({ sessions }: ProgrammeViewProps) => {
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
    <div className="bg-white py-20 pb-40">
      <Container>
        <div className="flex flex-col">
          {/* Room Selector Tabs */}
          <ProgrammeTabs 
            halls={halls} 
            activeHall={activeHall} 
            onHallChange={setActiveHall} 
          />

          {/* Sessions List */}
          <div className="flex flex-col">
            {filteredSessions.length > 0 ? (
              filteredSessions.map((session) => (
                <SessionCard key={session.id} session={session} />
              ))
            ) : (
              <div className="py-20 text-center">
                <p className="text-xl text-gray-500 italic">Aucune session prévue pour cette salle.</p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};
