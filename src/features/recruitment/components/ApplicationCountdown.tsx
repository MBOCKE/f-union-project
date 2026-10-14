"use client";

import { useEffect, useState } from "react";

type CountdownTime = {
  days: number;
  hours: number;
  minutes: number;
  expired: boolean;
};

const getCountdownTime = (): CountdownTime => {
  const deadline = new Date(2026, 9, 26, 23, 59, 59).getTime();
  const remaining = deadline - Date.now();

  if (remaining <= 0) {
    return { days: 0, hours: 0, minutes: 0, expired: true };
  }

  const totalMinutes = Math.floor(remaining / (1000 * 60));
  return {
    days: Math.floor(totalMinutes / (60 * 24)),
    hours: Math.floor((totalMinutes % (60 * 24)) / 60),
    minutes: totalMinutes % 60,
    expired: false,
  };
};

const timeUnits = [
  { key: "days", label: "Jours" },
  { key: "hours", label: "Heures" },
  { key: "minutes", label: "Minutes" },
] as const;

export const ApplicationCountdown = () => {
  const [countdown, setCountdown] = useState<CountdownTime | null>(null);

  useEffect(() => {
    const initialUpdate = window.setTimeout(
      () => setCountdown(getCountdownTime()),
      0,
    );
    const interval = window.setInterval(
      () => setCountdown(getCountdownTime()),
      1000,
    );

    return () => {
      window.clearTimeout(initialUpdate);
      window.clearInterval(interval);
    };
  }, []);

  return (
    <section
      aria-labelledby="application-countdown-heading"
      className="mx-auto mt-10 max-w-4xl rounded-2xl bg-white p-6 text-center shadow-md ring-1 ring-slate-200 sm:p-8"
    >
      <h3
        id="application-countdown-heading"
        className="text-xl font-black text-slate-800 sm:text-2xl"
      >
        Clôture des candidatures
      </h3>

      {countdown?.expired ? (
        <div className="mx-auto mt-5 max-w-2xl text-slate-600">
          <p className="text-lg font-bold text-slate-800">
            Les candidatures pour la Team F-UNION 2027 sont désormais closes.
          </p>
          <p className="mt-2 leading-relaxed">
            Merci infiniment pour votre intérêt et l&apos;enthousiasme que vous
            avez manifesté pour cette aventure. Nous vous invitons à rester
            connecté·e à F-UNION pour découvrir les prochaines opportunités.
          </p>
        </div>
      ) : (
        <>
          <div
            aria-live="polite"
            className="mt-6 grid grid-cols-3 gap-3 sm:gap-5"
          >
            {timeUnits.map(({ key, label }) => {
              const value = countdown?.[key] ?? 0;
              const formattedValue = String(value).padStart(2, "0");

              return (
                <div
                  key={key}
                  role="group"
                  aria-label={`${value} ${label.toLowerCase()} restants`}
                  className="rounded-2xl bg-slate-50 px-3 py-5 shadow-sm ring-1 ring-slate-100 sm:py-6"
                >
                  <div className="text-4xl font-black tabular-nums text-[#fd982e] sm:text-5xl">
                    {formattedValue}
                  </div>
                  <div className="mt-2 text-sm font-bold text-slate-600">
                    {label}
                  </div>
                </div>
              );
            })}
          </div>
          <p className="mt-5 text-sm font-semibold capitalize text-slate-500">
            26 octobre 2026
          </p>
        </>
      )}
    </section>
  );
};
