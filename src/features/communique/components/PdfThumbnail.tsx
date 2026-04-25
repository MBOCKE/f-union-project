"use client"

import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Set the worker source for react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PdfThumbnailProps {
  fileUrl: string;
}

export const PdfThumbnail = ({ fileUrl }: PdfThumbnailProps) => {
  const [numPages, setNumPages] = useState<number | null>(null);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div className="relative overflow-hidden rounded-lg shadow-2xl border border-white/5 w-full max-w-full lg:w-fit h-auto lg:h-[80vh] flex justify-center bg-white/5">
      <Document
        file={fileUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={
          <div className="h-[80vh] w-[60vh] animate-pulse bg-white/10 flex items-center justify-center text-white/50">
            Chargement de l'aperçu...
          </div>
        }
        error={
          <div className="h-[80vh] w-[60vh] bg-red-900/20 flex items-center justify-center text-red-500 p-8 text-center border border-red-500/20">
            Impossible de charger l'aperçu du PDF. <br/> Veuillez vérifier le lien.
          </div>
        }
      >
        <Page 
          pageNumber={1} 
          height={typeof window !== 'undefined' ? window.innerHeight * 0.8 : 800} 
          renderTextLayer={false}
          renderAnnotationLayer={false}
          className="max-w-full"
        />
      </Document>
    </div>
  );
};
