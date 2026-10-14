"use client";

import { useState } from "react";

interface DownloadProgrammeProps {
  pdfUrl: string;
  pdfFileName: string;
}

export const DownloadProgramme = ({ pdfUrl, pdfFileName }: DownloadProgrammeProps) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      // Logic for download, similar to communique DownloadButton
      const apiUrl = pdfUrl;
      
      // If it's a relative path starting with /pdfs/, we assume it's in public/pdfs
      // We can use the existing /api/download if available or just direct link
      
      const a = document.createElement("a");
      a.href = apiUrl;
      a.download = pdfFileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      
    } catch (error) {
      console.error("Error during download:", error);
      window.open(pdfUrl, "_blank");
    } finally {
      setTimeout(() => setIsDownloading(false), 1500);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isDownloading}
      className={`group flex items-center gap-2 px-6 py-2 bg-transparent border-2 border-[#B150C5] text-[#B150C5] font-black uppercase text-[10px] md:text-xs tracking-wider transition-all duration-300 hover:bg-[#B150C5] hover:text-white active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-lg rounded-none`}
    >
      <svg
        className={`w-4 h-4 transition-transform duration-300 ${isDownloading ? "animate-bounce" : "group-hover:-translate-y-1"}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg>
      <span>
        {isDownloading ? "Téléchargement..." : "Télécharger le programme (PDF)"}
      </span>
    </button>
  );
};
