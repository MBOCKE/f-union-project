"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Calendar, Upload } from "lucide-react";

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  roleTitle?: string;
}

export const ApplicationModal = ({ isOpen, onClose, roleTitle }: ApplicationModalProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Record<string, any>>({});

  // Reset form data and step when modal is closed
  useEffect(() => {
    if (!isOpen) {
      setStep(1);
      setFormData({});
    }
  }, [isOpen]);

  if (!isOpen) return null;

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
              {step === 1 && "Start Your Journey With Us"}
              {step === 2 && "Your Professional Experience"}
              {step === 3 && "Verify Identity & Agree to Terms"}
            </h2>

            <p className="mt-1 text-xs text-gray-500">
              {step === 1 && "Complete your personal details to start joining our team."}
              {step === 2 && "Share your professional experience by completing the information below."}
              {step === 3 && "Upload your identity documents and agree to our terms."}
            </p>
          </div>

          <div className="mt-4 flex flex-col md:flex-row justify-between gap-2 border-b border-gray-200 pb-0 text-xs">
            {[
              { num: 1, label: "1. Personal Information" },
              { num: 2, label: "2. Professional Information" },
              { num: 3, label: "3. Identity Verification" },
            ].map((s) => (
              <div
                key={s.num}
                className={`flex-1 border-b-2 pb-2 font-semibold transition-colors ${
                  step === s.num
                    ? "border-black text-black"
                    : "border-transparent text-gray-400"
                }`}
              >
                {s.label}
              </div>
            ))}
          </div>

          <div className="mt-4 grid gap-5 md:grid-cols-[1fr_2.5fr]">
            <div className="hidden md:block h-full min-h-[250px] w-full rounded-xl bg-gray-100"></div>

            <div className="flex flex-col justify-between">
              <div className="grid gap-x-4 gap-y-3 sm:grid-cols-2">
                {step === 1 && (
                  <>
                    <InputField label="First Name" placeholder="Enter first name" value={formData.firstName} onChange={(v: string) => handleChange("firstName", v)} />
                    <InputField label="Last Name" placeholder="Enter last name" value={formData.lastName} onChange={(v: string) => handleChange("lastName", v)} />
                    <InputField label="Email Address" placeholder="Enter email address" type="email" value={formData.email} onChange={(v: string) => handleChange("email", v)} />
                    <InputField label="Phone Number" placeholder="Enter phone number" type="tel" value={formData.phone} onChange={(v: string) => handleChange("phone", v)} />
                    <InputField label="Date of Birth" placeholder="Enter date of birth" type="date" value={formData.dob} onChange={(v: string) => handleChange("dob", v)} />
                    <SelectField label="Country" placeholder="Select country" value={formData.country} onChange={(v: string) => handleChange("country", v)} />
                    <InputField label="City of Domicile" placeholder="Enter city of domicile" value={formData.city} onChange={(v: string) => handleChange("city", v)} />
                    <InputField label="Address" placeholder="Enter address" value={formData.address} onChange={(v: string) => handleChange("address", v)} />
                  </>
                )}

                {step === 2 && (
                  <>
                    <InputField label="Exp. in Relevant Industry" placeholder="Enter number of years" value={formData.expIndustry} onChange={(v: string) => handleChange("expIndustry", v)} />
                    <SelectField label="Role Specialization" placeholder="Select specialization" value={formData.roleSpecialization} onChange={(v: string) => handleChange("roleSpecialization", v)} />
                    <InputField label="Professional License (Optional)" placeholder="Enter license number" value={formData.license} onChange={(v: string) => handleChange("license", v)} />
                    <InputField label="Previous Company Name" placeholder="Enter company name" value={formData.prevCompany} onChange={(v: string) => handleChange("prevCompany", v)} />
                    <InputField label="Position at Previous Company" placeholder="Enter position" value={formData.prevPosition} onChange={(v: string) => handleChange("prevPosition", v)} />
                    <SelectField label="Preferred Operational Areas" placeholder="Select areas" value={formData.prefAreas} onChange={(v: string) => handleChange("prefAreas", v)} />
                    <InputField label="Specialized Skills" placeholder="Enter your specialty" value={formData.specSkills} onChange={(v: string) => handleChange("specSkills", v)} />
                    <InputField label="Exp. with Large Projects" placeholder="Enter experience" value={formData.expLargeProjects} onChange={(v: string) => handleChange("expLargeProjects", v)} />
                  </>
                )}

                {step === 3 && (
                  <>
                    <UploadField label="Upload Identity Document" placeholder="Upload File" value={formData.idDoc} onChange={(f: File) => handleChange("idDoc", f)} />
                    <UploadField label="Upload Professional License" placeholder="Upload File" value={formData.licenseDoc} onChange={(f: File) => handleChange("licenseDoc", f)} />
                    <UploadField label="Upload Proof of Address" placeholder="Upload File" value={formData.addressDoc} onChange={(f: File) => handleChange("addressDoc", f)} />
                    <SelectField label="Data Authenticity Statement" placeholder="Select answer" value={formData.authStatement} onChange={(v: string) => handleChange("authStatement", v)} />
                    <SelectField label="Agree to Terms and Conditions" placeholder="Select answer" value={formData.terms} onChange={(v: string) => handleChange("terms", v)} />
                    <SelectField label="Agree with Privacy Policy" placeholder="Select answer" value={formData.privacy} onChange={(v: string) => handleChange("privacy", v)} />
                    <SelectField label="Agree to Comply with Local Law" placeholder="Select answer" value={formData.compliance} onChange={(v: string) => handleChange("compliance", v)} />
                    <UploadField label="Upload Agreement Documents" placeholder="Upload File" value={formData.agreementDoc} onChange={(f: File) => handleChange("agreementDoc", f)} />
                  </>
                )}
              </div>

              <div className="mt-5 flex gap-3">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="w-24 rounded-lg bg-gray-100 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-200"
                  >
                    Back
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => {
                    if (step < 3) setStep(step + 1);
                    else onClose();
                  }}
                  className="flex-1 rounded-lg bg-[#222222] py-2.5 text-sm font-semibold text-white transition-colors hover:bg-black"
                >
                  {step === 3 ? "Submit" : "Continue"}
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

const InputField = ({ label, placeholder, type = "text", icon, value, onChange }: any) => (
  <div className="flex flex-col gap-1">
    <label className="text-[11px] font-bold text-gray-900">{label}</label>
    <div className="relative flex items-center">
      <input
        type={type}
        placeholder={placeholder}
        value={value || ""}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full rounded-md border border-gray-200 px-3 py-2 text-xs outline-none transition-colors focus:border-gray-400 placeholder:text-gray-400"
      />
      {icon && <div className="absolute right-3 pointer-events-none">{icon}</div>}
    </div>
  </div>
);

const SelectField = ({ label, placeholder, value, onChange }: any) => (
  <div className="flex flex-col gap-1">
    <label className="text-[11px] font-bold text-gray-900">{label}</label>
    <div className="relative flex items-center">
      <select
        value={value || ""}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full appearance-none rounded-md border border-gray-200 px-3 py-2 pr-8 text-xs outline-none transition-colors focus:border-gray-400 text-gray-500"
      >
        <option value="" disabled>{placeholder}</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
      </select>
      <div className="absolute right-2 pointer-events-none">
        <ChevronDown className="h-4 w-4 text-gray-400" />
      </div>
    </div>
  </div>
);

const UploadField = ({ label, placeholder, value, onChange }: any) => (
  <div className="flex flex-col gap-1">
    <label className="text-[11px] font-bold text-gray-900">{label}</label>
    <div className="relative flex items-center">
      <label className="w-full rounded-md border border-gray-200 px-3 py-2 text-xs text-gray-400 flex justify-between items-center cursor-pointer hover:border-gray-300">
        <span className="truncate pr-2">{value ? value.name : placeholder}</span>
        <Upload className="h-3.5 w-3.5 text-gray-400 shrink-0" />
        <input
          type="file"
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
