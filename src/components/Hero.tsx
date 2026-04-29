'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="ファーストビュー"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(160deg, #C4B5DB 0%, #E8DEFA 25%, #FAF6F0 55%, #F0E9DC 100%)',
        }}
        aria-hidden="true"
      />

      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 80%, #C4B5DB22 0%, transparent 50%), radial-gradient(circle at 80% 20%, #B8945F11 0%, transparent 50%)',
        }}
        aria-hidden="true"
      />

      {/* Decorative outer border SVG */}
      <div className="absolute inset-4 md:inset-8 pointer-events-none" aria-hidden="true">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.5" y="0.5" width="99" height="99" stroke="#B8945F" strokeWidth="0.2" fill="none" />
          <rect x="2" y="2" width="96" height="96" stroke="#B8945F" strokeWidth="0.1" fill="none" />
          {/* Corner flourishes */}
          <path d="M0.5 10 L0.5 0.5 L10 0.5" stroke="#B8945F" strokeWidth="0.4" fill="none" />
          <path d="M90 0.5 L99.5 0.5 L99.5 10" stroke="#B8945F" strokeWidth="0.4" fill="none" />
          <path d="M0.5 90 L0.5 99.5 L10 99.5" stroke="#B8945F" strokeWidth="0.4" fill="none" />
          <path d="M90 99.5 L99.5 99.5 L99.5 90" stroke="#B8945F" strokeWidth="0.4" fill="none" />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-8">
        {/* MaxQueenCute */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h1 className="font-script text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-text-primary leading-none">
            {siteConfig.salons.maxqueencute.name}
          </h1>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center gap-3 my-4"
          aria-hidden="true"
        >
          <span className="w-16 h-px bg-gold-light block" />
          <span className="font-serif-display text-gold-light text-xs tracking-widest">×</span>
          <span className="w-16 h-px bg-gold-light block" />
        </motion.div>

        {/* Nail salon Ruri */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="font-script text-4xl sm:text-5xl md:text-6xl text-text-secondary leading-none">
            {siteConfig.salons.ruri.name}
          </p>
        </motion.div>

        {/* School name */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-4"
        >
          <p className="font-serif-display text-xs md:text-sm tracking-[0.4em] text-text-secondary/70 uppercase">
            {siteConfig.school.name}
          </p>
        </motion.div>

        {/* Divider ornament */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="my-6 md:my-8"
          aria-hidden="true"
        >
          <svg width="120" height="16" viewBox="0 0 120 16" fill="none">
            <line x1="0" y1="8" x2="48" y2="8" stroke="#B8945F" strokeWidth="0.5" />
            <path d="M54 8 L58 4 L62 8 L58 12 Z" fill="#B8945F" />
            <path d="M48 8 L52 5 L56 8 L52 11 Z" fill="none" stroke="#B8945F" strokeWidth="0.7" />
            <path d="M64 8 L68 5 L72 8 L68 11 Z" fill="none" stroke="#B8945F" strokeWidth="0.7" />
            <line x1="72" y1="8" x2="120" y2="8" stroke="#B8945F" strokeWidth="0.5" />
          </svg>
        </motion.div>

        {/* Catchphrase */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-jp text-base md:text-lg text-text-primary tracking-widest leading-loose"
        >
          {siteConfig.catchphrase}
        </motion.p>

        {/* Location */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="font-serif-display text-xs tracking-[0.3em] text-text-secondary/60 mt-4 uppercase"
        >
          Urayasu, Chiba
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="font-serif-display text-xs tracking-[0.3em] text-text-secondary/50 uppercase">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
            <line x1="8" y1="0" x2="8" y2="18" stroke="#B8945F" strokeWidth="0.8" />
            <path d="M2 12 L8 20 L14 12" stroke="#B8945F" strokeWidth="0.8" fill="none" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
