import { HeroSection } from "@/features/landing/components/HeroSection";
import { Container } from "@/core/components/Container";
import { Button } from "@/core/components/Button";
import { PdfPreviewWrapper } from "@/features/communique/components/PdfPreviewWrapper";
import { DownloadButton } from "@/features/communique/components/DownloadButton";

// WordPress API Config
const WP_API_URL = 'https://beige-seahorse-542407.hostingersite.com/wp-json/wp/v2/media?mime_type=application/pdf';

async function getLatestPdf() {
  try {
    const res = await fetch(WP_API_URL, {
      next: { revalidate: 86400 } // Revalidate every 24 hours
    });

    if (!res.ok) {
      throw new Error(`WordPress API returned status ${res.status}`);
    }

    const data = await res.json();
    
    // Filter for actual PDFs and get the most recent one
    const pdfs = data.filter((item: any) => item.mime_type === 'application/pdf');
    
    if (pdfs.length === 0) return null;

    return {
      id: pdfs[0].id,
      title: pdfs[0].title.rendered,
      source_url: pdfs[0].source_url,
    };
  } catch (error) {
    console.error("Failed to fetch PDFs from WordPress:", error);
    return null;
  }
}

export default async function CommuniquePressePage() {
  const latestPdf = await getLatestPdf();

  // Fallback URL if API fails or no PDF found
  const fallbackUrl = "https://beige-seahorse-542407.hostingersite.com/wp-content/uploads/2026/04/COMMUNIQUE-DE-PRESSE-F-UNION.pdf";
  const pdfUrl = latestPdf?.source_url || fallbackUrl;

  return (
    <main className="bg-summit-dark min-h-screen">
      {/* Reusing the Hero Section */}
      <HeroSection />

      {/* Main Communique Section */}
      <section className="relative min-h-[90vh] py-20 flex items-center">
        <Container>
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Right side (Mobile Top): Text and Download Button */}
            <div className="text-white space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-black leading-tight text-white">
                  Communiqué de Presse <br />
                  <span className="text-[#845ec2]">F-UNION AFRICA 2026</span>
                </h2>
                <div className="w-20 h-1.5 bg-summit-red rounded-full"></div>
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="text-xl text-white/80 leading-relaxed italic">
                  "La visibilité comme levier de transformation économique."
                </p>
                <div className="space-y-4">
                  <p className="text-lg text-white/70 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  </p>
                  <p className="text-lg text-white/70 leading-relaxed">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <DownloadButton 
                  fileUrl={pdfUrl} 
                  fileName="COMMUNIQUE-DE-PRESSE-F-UNION.pdf" 
                />
              </div>
            </div>

            {/* Left side (Mobile Bottom): PDF Thumbnail Preview */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1 w-full lg:w-auto">
              {/* Dynamic PDF Thumbnail Component */}
              <PdfPreviewWrapper fileUrl={pdfUrl} />
            </div>

          </div>
        </Container>
      </section>
    </main>
  );
}
