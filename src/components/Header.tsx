'use client';

import { useState, useEffect } from 'react';
import { siteConfig } from '@/config/site';

const navItems = [
  { label: 'Concept', href: '#concept' },
  { label: 'Salons', href: '#salons' },
  { label: 'Menu', href: '#menu' },
  { label: 'School', href: '#school' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Access', href: '#access' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-base/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-script text-2xl text-text-primary leading-none" aria-label="トップに戻る">
          {siteConfig.salons.maxqueencute.name}
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="メインナビゲーション">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-serif-display text-xs tracking-widest text-text-secondary hover:text-gold-light transition-colors uppercase"
            >
              {item.label}
            </a>
          ))}
          <a
            href={siteConfig.reservation.hpbUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-serif-display text-xs tracking-widest border border-gold-light text-text-primary px-4 py-2 hover:bg-gold-light/10 transition-colors"
          >
            Reserve
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 min-h-[44px] min-w-[44px] items-center justify-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'メニューを閉じる' : 'メニューを開く'}
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-5 h-px bg-text-primary transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block w-5 h-px bg-text-primary transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-5 h-px bg-text-primary transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-base/98 backdrop-blur-sm border-t border-accent-light/30">
          <nav className="flex flex-col py-4" aria-label="モバイルナビゲーション">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-serif-display text-sm tracking-widest text-text-secondary hover:text-gold-light px-6 py-3 transition-colors uppercase"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={siteConfig.reservation.hpbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif-display text-sm tracking-widest text-text-primary border border-gold-light mx-6 my-2 px-4 py-3 text-center hover:bg-gold-light/10 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Reserve
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
