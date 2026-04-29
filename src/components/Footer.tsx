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
          <div className="w-px h-8 bg-accent-light/20" />
          <a
            href={siteConfig.reservation.lineOfficialUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LINE公式アカウント"
            className="flex flex-col items-center gap-1 text-secondary/60 hover:text-accent-light transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
            </svg>
            <span className="font-serif-display text-xs tracking-wide">LINE</span>
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
