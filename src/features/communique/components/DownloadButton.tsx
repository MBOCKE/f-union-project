"use client"

import { useState } from 'react';
import { Button } from '@/core/components/Button';

interface DownloadButtonProps {
  fileUrl: string;
  fileName: string;
}

export const DownloadButton = ({ fileUrl, fileName }: DownloadButtonProps) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const response = await fetch(fileUrl);
      if (!response.ok) throw new Error('Download failed');

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = fileName || 'Communique-F-Union.pdf';
      document.body.appendChild(a);
      a.click();

      // Cleanup
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error during download:', error);
      // Fallback: open in new tab if blob download fails (e.g. CORS)
      window.open(fileUrl, '_blank');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <Button
      variant="purple"
      size="md"
      disabled={isDownloading}
      className={`shadow-[0_0_15px_rgba(132,94,194,0.3)] hover:shadow-[0_0_20px_rgba(132,94,194,0.5)] transition-all ${isDownloading ? 'opacity-70 cursor-not-allowed' : ''}`}
      onClick={handleDownload}
    >
      <svg
        className={`w-5 h-5 mr-3 ${isDownloading ? 'animate-bounce' : ''}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
      {isDownloading ? 'Téléchargement...' : 'Télécharger le PDF'}
    </Button>
  );
};
