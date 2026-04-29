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
        scrolled
          ? 'backdrop-blur-md shadow-sm border-b border-gold-light/10'
          : 'bg-transparent'
      }`}
      style={scrolled ? { background: 'rgba(61,10,30,0.82)' } : undefined}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-script text-2xl leading-none transition-colors duration-300"
          style={{ color: scrolled ? '#FDF2F4' : '#3D2B2B' }}
          aria-label="トップに戻る"
        >
          {siteConfig.salons.maxqueencute.name}
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="メインナビゲーション">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-serif-display text-xs tracking-widest uppercase transition-colors duration-300"
              style={{ color: scrolled ? 'rgba(250,246,240,0.65)' : '#6B4E4E' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#D4AF37'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = scrolled ? 'rgba(250,246,240,0.65)' : '#6B4E4E'; }}
            >
              {item.label}
            </a>
          ))}
          <a
            href={siteConfig.reservation.hpbUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold font-serif-display text-xs tracking-widest px-5 py-2 rounded-full"
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
          {(['rotate-45 translate-y-2', 'opacity-0', '-rotate-45 -translate-y-2'] as const).map((cls, i) => (
            <span
              key={i}
              className={`block w-5 h-px transition-all duration-300 ${menuOpen ? cls : ''}`}
              style={{ background: scrolled ? '#FDF2F4' : '#3D2B2B' }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden backdrop-blur-md border-t"
          style={{ background: 'rgba(61,10,30,0.94)', borderColor: 'rgba(212,175,55,0.2)' }}
        >
          <nav className="flex flex-col py-4" aria-label="モバイルナビゲーション">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-serif-display text-sm tracking-widest px-6 py-3 uppercase transition-colors duration-200"
                style={{ color: 'rgba(250,246,240,0.7)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#D4AF37'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(250,246,240,0.7)'; }}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={siteConfig.reservation.hpbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold font-serif-display text-sm tracking-widest mx-6 my-3 px-4 py-3 text-center rounded-full"
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
