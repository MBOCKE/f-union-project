import { Container } from './Container';
import { Button } from './Button';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent py-4 text-white">
      <Container className="flex items-center justify-between">
        <Link href="/" className="font-bold text-2xl flex items-center gap-2">
          {/* Using text for now since I don't have the logo asset */}
          <span className="text-summit-blue">F-</span>UNION
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="#pourquoi" className="hover:text-summit-blue transition-colors">POURQUOI F-UNION ?</Link>
          <Link href="#offres" className="hover:text-summit-blue transition-colors">NOS OFFRES</Link>
          <Link href="#speakers" className="hover:text-summit-blue transition-colors">SPEAKERS</Link>
          <Link href="#programme" className="hover:text-summit-blue transition-colors">PROGRAMME</Link>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm font-bold">FR ▼</span>
          <Button variant="outline" size="sm" className="hidden md:inline-flex">
            Devenir partenaire
          </Button>
        </div>
      </Container>
    </nav>
  );
};
