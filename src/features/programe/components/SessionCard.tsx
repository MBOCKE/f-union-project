import { Session, Speaker } from "../types";

const LocationIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" style={{ fill: '#0F2E4C', flexShrink: 0 }}>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
  </svg>
);

const ClockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" style={{ fill: '#0F2E4C', flexShrink: 0 }}>
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
  </svg>
);

interface SpeakerInfoProps {
  speaker: Speaker;
}

const SpeakerItem = ({ speaker }: SpeakerInfoProps) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', minWidth: '180px' }}>
    <div 
      style={{ 
        width: '52px', 
        height: '52px', 
        borderRadius: '50%', 
        overflow: 'hidden', 
        flexShrink: 0, 
        backgroundColor: '#F0F2F5',
        border: '1px solid #F0F2F5'
      }}
    >
      <img 
        src={speaker.imageUrl || "https://via.placeholder.com/150"} 
        alt={speaker.name} 
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <span style={{ fontWeight: 800, color: '#0F2E4C', fontSize: '16px', lineHeight: '1.2' }}>
        {speaker.name}
      </span>
      <span style={{ color: '#5E7184', fontSize: '14px', fontWeight: 500 }}>
        {speaker.gender || speaker.role}
      </span>
    </div>
  </div>
);

interface SessionCardProps {
  session: Session;
}

export const SessionCard = ({ session }: SessionCardProps) => {
  return (
    <div className="py-12" style={{ 
      paddingTop: '60px', 
      paddingBottom: '40px', 
      borderBottom: '1.5px solid #F0F0F0', 
    }}>
      {/* Main Layout Flex Container: Force Horizontal Layout */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'flex-start',
        gap: '20px',
        width: '100%'
      }}>
        
        {/* LEFT: Session Info (Title + Details) */}
        <div style={{ flex: '1', maxWidth: '60%' }}>
          <h3 style={{ 
            fontSize: 'max(24px, 2.5rem)', 
            fontWeight: 900, 
            color: '#3B0B0B', 
            marginBottom: '32px', 
            lineHeight: '1.05',
            letterSpacing: '-0.03em',
            margin: '0 0 32px 0',
            fontFamily: 'inherit'
          }}>
            {session.title}
          </h3>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '30px', marginTop: 'auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <LocationIcon />
              <span style={{ color: '#0F2E4C', fontWeight: 700, fontSize: '18px' }}>{session.hall}</span>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <ClockIcon />
              <span style={{ color: '#0F2E4C', fontWeight: 700, fontSize: '18px', textTransform: 'uppercase' }}>
                {session.startTime} - {session.endTime}
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT: Speakers Section */}
        <div style={{ 
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: session.speakers.length > 1 ? 'repeat(2, 1fr)' : '1fr', 
            gap: '30px 40px',
            alignItems: 'center'
          }}>
            {session.speakers.map((speaker) => (
              <SpeakerItem key={speaker.id} speaker={speaker} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
