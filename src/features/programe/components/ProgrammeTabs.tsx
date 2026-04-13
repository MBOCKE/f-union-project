"use client";

interface ProgrammeTabsProps {
  halls: string[];
  activeHall: string;
  onHallChange: (hall: string) => void;
}

export const ProgrammeTabs = ({ halls, activeHall, onHallChange }: ProgrammeTabsProps) => {
  const allHalls = ["Toutes les salles", ...halls.filter(h => h !== "Toutes les salles")];

  return (
    <div className="flex flex-wrap gap-4 mb-20 px-4 md:px-0" style={{ marginBottom: '80px' }}>
      {allHalls.map((hall) => {
        const isActive = activeHall === hall;
        return (
          <button
            key={hall}
            onClick={() => onHallChange(hall)}
            className="px-8 py-3 text-sm md:text-base font-bold uppercase transition-all duration-200 cursor-pointer active:scale-95 hover:scale-105"
            style={{
              backgroundColor: isActive ? '#3B0B0B' : '#E5E1E1',
              color: isActive ? '#FFFFFF' : '#3B0B0B',
              border: 'none',
              borderRadius: '0px'
            }}
          >
            {hall}
          </button>
        );
      })}
    </div>
  );
};
