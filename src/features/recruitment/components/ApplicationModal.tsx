"use client";

import { useState, useEffect } from "react";
import { Upload } from "lucide-react";
import type { RecruitmentRole } from "../types";

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  role?: RecruitmentRole | null;
}

export const ApplicationModal = ({ isOpen, onClose, role }: ApplicationModalProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Record<string, any>>({});

  useEffect(() => {
    if (!isOpen) {
      setStep(1);
      setFormData({});
    }
  }, [isOpen]);

  if (!isOpen || !role) return null;

  const handleChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[850px] rounded-2xl bg-white shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition hover:bg-gray-200"
        >
          &#10005;
        </button>

        <div className="max-h-[95vh] overflow-y-auto px-6 py-5 md:px-8" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mt-2 text-xl font-bold tracking-tight text-gray-900 md:text-2xl">
              {step === 1 && "Mission"}
              {step === 2 && "Profil"}
              {step === 3 && "Vos informations"}
            </h2>

            <p className="mt-1 text-xs text-gray-500">
              {step === 1 && "Découvrez votre contribution et les missions du poste."}
              {step === 2 && "Découvrez le profil recherché et l'engagement attendu."}
              {step === 3 && "Découvrez les bénéfices et renseignez vos informations."}
            </p>
          </div>

          <div className="mt-4 flex flex-col md:flex-row justify-between gap-2 border-b border-gray-200 pb-0 text-xs">
            {[
              { num: 1, label: "1. Mission" },
              { num: 2, label: "2. Profil" },
              { num: 3, label: "3. Informations" },
            ].map((s) => (
              <button
                type="button"
                key={s.num}
                onClick={() => setStep(s.num)}
                aria-current={step === s.num ? "step" : undefined}
                className={`flex-1 cursor-pointer border-b-2 pb-2 text-left font-semibold transition-colors hover:text-black ${
                  step === s.num
                    ? "border-black text-black"
                    : "border-transparent text-gray-400"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          <div className="mt-4 grid gap-5 md:grid-cols-[1fr_2.5fr]">
            <div className="hidden md:block h-full min-h-[250px] w-full rounded-xl bg-gray-100 overflow-hidden">
              <img 
                src={step === 1 ? require("@/core/assets/photo library/photo_50_2026-10-07_15-51-00.jpg").default.src : step === 2 ? require("@/core/assets/photo library/photo_51_2026-10-07_15-51-00.jpg").default.src : require("@/core/assets/photo library/photo_52_2026-10-07_15-51-00.jpg").default.src} 
                alt="Application step" 
                className="w-full h-full object-cover" 
              />
            </div>

            <div className="flex flex-col justify-between">
              <div className="h-full flex flex-col gap-4">
                {step === 1 && (
                  <div className="space-y-4 text-sm text-gray-700">
                    <div>
                      <h4 className="mb-2 font-bold text-gray-900">Votre contribution</h4>
                      <p className="text-justify leading-relaxed">{role.summary}</p>
                    </div>
                    <div>
                      <h4 className="mb-2 font-bold text-gray-900">Concrètement, votre mission</h4>
                      <ul className="list-disc space-y-1 pl-4 text-justify">
                        {role.responsibilities.map((responsibility) => (
                          <li key={responsibility}>{responsibility}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4 text-sm text-gray-700">
                    <div>
                      <h4 className="mb-2 font-bold text-gray-900">Le profil que nous recherchons</h4>
                      <ul className="list-disc space-y-1 pl-4 text-justify">
                        {role.profile.map((profileItem) => (
                          <li key={profileItem}>{profileItem}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-2 font-bold text-gray-900">Votre engagement</h4>
                      <ul className="list-disc space-y-1 pl-4 text-justify">
                        {role.engagement.map((engagementItem) => (
                          <li key={engagementItem}>{engagementItem}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-4">
                    <div className="text-sm text-gray-700">
                      <h4 className="mb-2 font-bold text-gray-900">
                        Ce que cette expérience peut vous apporter
                      </h4>
                      <ul className="list-disc space-y-1 pl-4 text-justify">
                        {role.benefits.map((benefit) => (
                          <li key={benefit}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="grid gap-x-4 gap-y-3 sm:grid-cols-2">
                      <InputField label="Prénom" placeholder="Entrez votre prénom" value={formData.firstName} onChange={(v: string) => handleChange("firstName", v)} required />
                      <InputField label="Nom" placeholder="Entrez votre nom" value={formData.lastName} onChange={(v: string) => handleChange("lastName", v)} required />
                      <InputField label="Email" placeholder="Entrez votre email" type="email" value={formData.email} onChange={(v: string) => handleChange("email", v)} required />
                      <InputField label="Téléphone" placeholder="Entrez votre téléphone" type="tel" value={formData.phone} onChange={(v: string) => handleChange("phone", v)} />
                      <UploadField label="CV (PDF)" placeholder="Uploader votre CV" value={formData.cv} onChange={(f: File) => handleChange("cv", f)} />
                      <div className="sm:col-span-2 flex flex-col gap-1">
                        <label className="text-[11px] font-bold text-gray-900">Motivations</label>
                        <textarea
                          placeholder="Parlez-nous brièvement de ce qui vous motive..."
                          value={formData.motivations || ""}
                          onChange={(e) => handleChange("motivations", e.target.value)}
                          required
                          className="w-full rounded-md border border-gray-200 px-3 py-2 text-xs outline-none transition-colors focus:border-gray-400 placeholder:text-gray-400 min-h-[60px]"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-5 flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    if (step < 3) setStep(step + 1);
                    else onClose();
                  }}
                  className="w-full rounded-lg bg-[#222222] py-2.5 text-sm font-semibold text-white transition-colors hover:bg-black sm:w-auto sm:min-w-40"
                >
                  {step === 3 ? "Postuler" : "Continuer"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

type InputFieldProps = {
  label: string;
  placeholder: string;
  type?: string;
  icon?: React.ReactNode;
  value?: string;
  onChange?: (value: string) => void;
  required?: boolean;
};

const InputField = ({
  label,
  placeholder,
  type = "text",
  icon,
  value,
  onChange,
  required = false,
}: InputFieldProps) => (
  <div className="flex flex-col gap-1">
    <label className="text-[11px] font-bold text-gray-900">{label}</label>
    <div className="relative flex items-center">
      <input
        type={type}
        placeholder={placeholder}
        value={value || ""}
        required={required}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full rounded-md border border-gray-200 px-3 py-2 text-xs outline-none transition-colors focus:border-gray-400 placeholder:text-gray-400"
      />
      {icon && <div className="absolute right-3 pointer-events-none">{icon}</div>}
    </div>
  </div>
);

type UploadFieldProps = {
  label: string;
  placeholder: string;
  value?: File | null;
  onChange?: (file: File) => void;
};

const UploadField = ({ label, placeholder, value, onChange }: UploadFieldProps) => (
  <div className="flex flex-col gap-1">
    <label className="text-[11px] font-bold text-gray-900">{label}</label>
    <div className="relative flex items-center">
      <label className="w-full rounded-md border border-gray-200 px-3 py-2 text-xs text-gray-400 flex justify-between items-center cursor-pointer hover:border-gray-300">
        <span className="truncate pr-2">{value ? value.name : placeholder}</span>
        <Upload className="h-3.5 w-3.5 text-gray-400 shrink-0" />
        <input
          type="file"
          accept=".pdf"
          className="hidden"
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 0) {
              onChange?.(e.target.files[0]);
            }
          }}
        />
      </label>
    </div>
  </div>
);
