import Link from "next/link";
import { SpeakerProfile } from "@/features/speakers/types";

interface SpeakerModalProps {
  speaker: SpeakerProfile | null;
  onClose: () => void;
}

export const SpeakerModal = ({ speaker, onClose }: SpeakerModalProps) => {
  if (!speaker) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl overflow-hidden rounded-[2rem] bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full bg-white/90 p-2 text-[#0F2E4C] shadow-md transition hover:bg-white"
          aria-label="Close speaker profile"
        >
          &#10005;
        </button>

        <div className="grid gap-8 px-6 py-10 lg:grid-cols-[300px_minmax(0,1fr)] lg:px-10">
          <div className="space-y-6">
            <div className="overflow-hidden rounded-[2rem] bg-gray-100">
              <img src={speaker.imageUrl} alt={speaker.name} className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-[#845ec2]">Profil intervenant</p>
              <h2 className="mt-3 text-3xl font-black text-[#0F2E4C]">{speaker.name}</h2>
              <p className="mt-2 text-sm text-[#4B5668]">{speaker.role}</p>
              {speaker.company && <p className="text-sm text-[#6B7280]">{speaker.company}</p>}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[#0F2E4C]">À propos</h3>
              <p className="mt-4 text-sm leading-7 text-[#4B5668]">{speaker.bio}</p>
            </div>

            {speaker.sessions.length > 0 && (
              <div className="rounded-[1.5rem] border border-[#E8E8F0] bg-[#F8FAFC] p-6">
                <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-[#0F2E4C]">Panels</h4>
                <ul className="mt-4 space-y-3">
                  {speaker.sessions.map((session) => (
                    <li key={session.id}>
                      <Link
                        href={session.href}
                        className="block rounded-2xl border border-[#E8E8F0] bg-white px-4 py-3 text-sm font-semibold text-[#0F2E4C] shadow-sm transition hover:border-[#845ec2] hover:text-[#845ec2]"
                      >
                        {session.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
