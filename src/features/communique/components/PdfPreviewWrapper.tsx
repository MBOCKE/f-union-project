"use client"

import dynamic from "next/dynamic";

// Dynamically import the PdfThumbnail component with SSR disabled
const PdfThumbnail = dynamic(
  () => import("./PdfThumbnail").then((mod) => mod.PdfThumbnail),
  { 
    ssr: false,
    loading: () => (
      <div className="h-[80vh] w-[60vh] animate-pulse bg-white/10 flex items-center justify-center text-white/50 rounded-lg border border-white/5">
        Chargement de l'aperçu PDF...
      </div>
    )
  }
);

interface PdfPreviewWrapperProps {
  fileUrl: string;
}

export const PdfPreviewWrapper = ({ fileUrl }: PdfPreviewWrapperProps) => {
  return <PdfThumbnail fileUrl={fileUrl} />;
};
