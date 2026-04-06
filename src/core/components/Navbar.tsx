"use client";

import { useState } from 'react';
import { Container } from './Container';
import { Button } from './Button';
import Link from 'next/link';
import Funion_logo from '@/core/assets/Funion_logo.png'

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 left-0 w-full z-50 bg-white py-4 text-summit-dark shadow-sm">
      <Container className="flex items-center justify-between relative">
        <Link href="/" className="font-bold text-2xl flex items-center gap-2">
          <img src={Funion_logo.src} alt='F_Union' className='h-12 w-40 object-contain' />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 text-[15px] font-semibold">
          <Link href="#vision" className="text-[#333333] hover:text-summit-blue transition-colors uppercase tracking-wide">Vision</Link>
          <Link href="#programme" className="text-[#333333] hover:text-summit-blue transition-colors uppercase tracking-wide">Programme</Link>
          <Link href="#speakers" className="text-[#333333] hover:text-summit-blue transition-colors uppercase tracking-wide">Intervenant(e)s</Link>
          <Link href="#partenaires" className="text-[#333333] hover:text-summit-blue transition-colors uppercase tracking-wide">Partenaires</Link>
          <Link href="#contact" className="text-[#333333] hover:text-summit-blue transition-colors uppercase tracking-wide">Contact</Link>
        </div>

        <div className="flex items-center gap-4">
          {/* Desktop Button (Hidden on Mobile) */}
          <div className="hidden lg:block">
            <Button variant="navy" size="md" className="rounded-full text-xs font-bold px-6">
              Reserver ma place
            </Button>
          </div>

          {/* Mobile Menu Toggle (Visible ONLY on Mobile) */}
          <div className="lg:hidden">
            <button
              className="flex items-center p-2 text-summit-purple hover:text-summit-blue transition-colors focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Sidebar (Drawer) */}
      <div className={`fixed inset-0 z-[60] lg:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'visible' : 'invisible'}`}>
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={toggleMobileMenu}
        />

        {/* Sidebar content */}
        <div className={`absolute top-0 right-0 h-full w-[85%] max-w-[320px] bg-gradient-to-br from-[#2D0A54] via-[#3a2051] to-[#1a0a2e] shadow-2xl transform transition-transform duration-500 ease-out border-l border-white/10 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full">
            {/* Header with Close Button */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <img src={Funion_logo.src} alt='F_Union' className='h-8 w-24 object-contain brightness-0 invert' />
              <button
                onClick={toggleMobileMenu}
                className="text-white/70 hover:text-white transition-colors p-2 bg-white/5 rounded-full"
                aria-label="Close menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col py-10 px-8 gap-1 flex-grow overflow-y-auto">
              {[
                { href: "#vision", label: "Vision" },
                { href: "#programme", label: "Programme" },
                { href: "#speakers", label: "Intervenant(e)s" },
                { href: "#partenaires", label: "Partenaires" },
                { href: "#contact", label: "Contact" }
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={toggleMobileMenu}
                  className="text-[#b39ddb] hover:text-white transition-all duration-300 uppercase tracking-widest font-black text-sm py-5 border-b border-white/5 flex items-center justify-between group"
                >
                  <span className="relative">
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#845ec2] transition-all duration-300 group-hover:w-full" />
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#845ec2] transform group-hover:translate-x-2 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              ))}
            </div>

            {/* Footer / Brand Text */}
            <div className="p-8 mt-auto border-t border-white/10">
              <p className="text-[11px] text-white/60 uppercase tracking-[0.3em] font-bold text-center">
                © 2026 F-Union. Tous droits réservés.
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
