import { InstagramIcon } from '@/components/ui/InstagramIcon';
import { siteConfig } from '@/config/site';

export function Footer() {
  return (
    <footer className="bg-ink text-base py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Salon names */}
        <div className="text-center mb-8">
          <p className="font-script text-3xl text-accent-light mb-1">
            {siteConfig.salons.maxqueencute.name}
          </p>
          <p className="font-script text-2xl text-accent-light/70 mb-1">
            {siteConfig.salons.ruri.name}
          </p>
          <p className="font-serif-display text-sm tracking-widest text-secondary/60 uppercase mt-3">
            {siteConfig.school.name}
          </p>
        </div>

        {/* Divider */}
        <div className="w-16 h-px bg-accent-light/30 mx-auto mb-8" />

        {/* SNS icons */}
        <div className="flex items-center justify-center gap-6 mb-8">
          <a
            href={siteConfig.salons.maxqueencute.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${siteConfig.salons.maxqueencute.name} Instagram`}
            className="flex flex-col items-center gap-1 text-secondary/60 hover:text-accent-light transition-colors group"
          >
            <InstagramIcon size={20} aria-hidden={true} />
            <span className="font-serif-display text-xs tracking-wide">MaxQueenCute</span>
          </a>
          <div className="w-px h-8 bg-accent-light/20" />
          <a
            href={siteConfig.salons.ruri.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${siteConfig.salons.ruri.name} Instagram`}
            className="flex flex-col items-center gap-1 text-secondary/60 hover:text-accent-light transition-colors group"
          >
            <InstagramIcon size={20} aria-hidden={true} />
            <span className="font-serif-display text-xs tracking-wide">Nail salon Ruri</span>
          </a>
        </div>

        {/* Links */}
        <div className="flex items-center justify-center gap-6 mb-8 flex-wrap">
          <a
            href="#"
            className="font-serif-display text-xs tracking-widest text-secondary/50 hover:text-accent-light transition-colors uppercase"
          >
            Privacy Policy
          </a>
          <span className="text-secondary/30">|</span>
          <a
            href="#"
            className="font-serif-display text-xs tracking-widest text-secondary/50 hover:text-accent-light transition-colors"
          >
            特定商取引法に基づく表記
          </a>
        </div>

        {/* Copyright */}
        <p className="font-serif-display text-xs tracking-widest text-secondary/40 text-center">
          © {new Date().getFullYear()} MaxQueenCute / Nail salon Ruri. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
