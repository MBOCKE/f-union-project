import { Container } from './Container';
import { Button } from './Button';
import Link from 'next/link';
import Funion_logo from '@/core/assets/Funion_logo.png'

export const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 w-full z-50 bg-white py-4 text-summit-dark shadow-sm">
      <Container className="flex items-center justify-between">
        <Link href="/" className="font-bold text-2xl flex items-center gap-2">
          <img src={Funion_logo.src} alt='F_Union' className='h-12 w-40' />
        </Link>

        <div className="hidden md:flex items-center gap-8 text-[15px] font-semibold">
          <Link href="#vision" className="text-[#333333] hover:text-summit-blue transition-colors uppercase tracking-wide">Vision</Link>
          <Link href="#programme" className="text-[#333333] hover:text-summit-blue transition-colors uppercase tracking-wide">Programme</Link>
          <Link href="#speakers" className="text-[#333333] hover:text-summit-blue transition-colors uppercase tracking-wide">Intervenant(e)s</Link>
          <Link href="#pass" className="text-[#333333] hover:text-summit-blue transition-colors uppercase tracking-wide">Pass</Link>
          <Link href="#partenaires" className="text-[#333333] hover:text-summit-blue transition-colors uppercase tracking-wide">Partenaires</Link>
          <Link href="#contact" className="text-[#333333] hover:text-summit-blue transition-colors uppercase tracking-wide">Contact</Link>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="navy" size="md" className="hidden md:inline-flex rounded-full text-xs font-bold px-6">
            Reserver ma place
          </Button>
        </div>
      </Container>
    </nav>
  );
};
