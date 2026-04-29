'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';

/* Gold accent used throughout Hero */
const GOLD = '#D4AF37';

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="ファーストビュー"
    >
      {/* ── Deep rose → blush → powder pink gradient ── */}
      <div
        className="absolute inset-0"
        style={{
          background: '#F8D0DF',
        }}
        aria-hidden="true"
      />

      {/* ── Marble-vein overlay ── */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: [
            'repeating-linear-gradient(108deg,transparent 0,transparent 55px,rgba(255,255,255,0.6) 55px,rgba(255,255,255,0.6) 56px)',
            'repeating-linear-gradient(75deg,transparent 0,transparent 95px,rgba(212,175,55,0.5) 95px,rgba(212,175,55,0.5) 96px)',
          ].join(','),
        }}
        aria-hidden="true"
      />

      {/* ── Radial glow accents ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: [
            'radial-gradient(ellipse 60% 40% at 15% 85%, rgba(212,175,55,0.12) 0%, transparent 60%)',
            'radial-gradient(ellipse 50% 35% at 85% 15%, rgba(240,189,208,0.2) 0%, transparent 60%)',
          ].join(','),
        }}
        aria-hidden="true"
      />

      {/* ── Decorative outer border ── */}
      <div className="absolute inset-4 md:inset-8 pointer-events-none" aria-hidden="true">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="none"
        >
          <rect x="0.5" y="0.5" width="99" height="99" stroke={GOLD} strokeWidth="0.2" opacity="0.7" />
          <rect x="2"   y="2"   width="96" height="96" stroke={GOLD} strokeWidth="0.1" opacity="0.4" />
          {/* Corner L-flourishes */}
          <path d="M0.5 12 L0.5 0.5 L12 0.5"   stroke={GOLD} strokeWidth="0.5" opacity="0.9" />
          <path d="M88 0.5 L99.5 0.5 L99.5 12" stroke={GOLD} strokeWidth="0.5" opacity="0.9" />
          <path d="M0.5 88 L0.5 99.5 L12 99.5"  stroke={GOLD} strokeWidth="0.5" opacity="0.9" />
          <path d="M88 99.5 L99.5 99.5 L99.5 88" stroke={GOLD} strokeWidth="0.5" opacity="0.9" />
        </svg>
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-8">

        {/* MaxQueenCute — white on dark section */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h1
            className="font-script leading-none"
            style={{
              fontSize: 'clamp(3.5rem, 10vw, 8rem)',
              color: GOLD,
              textShadow: `0 2px 16px rgba(255,255,255,0.7), 0 0 40px rgba(255,255,255,0.4)`,
            }}
          >
            {siteConfig.salons.maxqueencute.name}
          </h1>
        </motion.div>

        {/* Gold rule */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="flex items-center gap-4 my-4"
          aria-hidden="true"
        >
          <span className="block h-px w-20" style={{ background: `linear-gradient(90deg, transparent, ${GOLD})` }} />
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 0 L7.2 4.8 L12 6 L7.2 7.2 L6 12 L4.8 7.2 L0 6 L4.8 4.8 Z" fill={GOLD} />
          </svg>
          <span className="block h-px w-20" style={{ background: `linear-gradient(90deg, ${GOLD}, transparent)` }} />
        </motion.div>

        {/* Nail salon Ruri */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p
            className="font-script leading-none"
            style={{
              fontSize: 'clamp(2rem, 6vw, 5rem)',
              color: 'rgba(212,175,55,0.85)',
              textShadow: '0 2px 12px rgba(255,255,255,0.6)',
            }}
          >
            {siteConfig.salons.ruri.name}
          </p>
        </motion.div>

        {/* School name */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: 0.65 }}
          className="mt-5"
        >
          <div
            className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full"
            style={{
              border: '1px solid rgba(253,242,244,0.45)',
              background: 'rgba(253,242,244,0.12)',
            }}
          >
            <span style={{ color: 'rgba(253,242,244,0.7)', fontSize: '0.55rem' }} aria-hidden="true">✦</span>
            <p
              className="font-serif-display text-xs tracking-[0.4em] uppercase"
              style={{ color: 'rgba(61,43,43,0.75)' }}
            >
              {siteConfig.school.name}
            </p>
            <span style={{ color: 'rgba(253,242,244,0.7)', fontSize: '0.55rem' }} aria-hidden="true">✦</span>
          </div>
        </motion.div>

        {/* Ornament divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="my-7 md:my-9"
          aria-hidden="true"
        >
          <svg width="140" height="18" viewBox="0 0 140 18" fill="none">
            <line x1="0"   y1="9" x2="54" y2="9" stroke={GOLD} strokeWidth="0.5" opacity="0.7" />
            <path d="M58 9 L62 5 L66 9 L62 13 Z" fill="none" stroke={GOLD} strokeWidth="0.8" opacity="0.6" />
            <path d="M64 9 L70 4 L76 9 L70 14 Z" fill={GOLD} />
            <path d="M74 9 L78 5 L82 9 L78 13 Z" fill="none" stroke={GOLD} strokeWidth="0.8" opacity="0.6" />
            <line x1="86" y1="9" x2="140" y2="9" stroke={GOLD} strokeWidth="0.5" opacity="0.7" />
          </svg>
        </motion.div>

        {/* Catchphrase — Noto Serif JP */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-jp text-base md:text-lg tracking-[0.18em] leading-loose"
          style={{ color: 'rgba(250,246,240,0.88)' }}
        >
          {siteConfig.catchphrase}
        </motion.p>

        {/* Location */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="font-serif-display text-xs tracking-[0.35em] mt-4 uppercase"
          style={{ color: 'rgba(156,122,26,0.7)' }}
        >
          Urayasu, Chiba
        </motion.p>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.0 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="font-serif-display text-xs tracking-[0.35em] uppercase" style={{ color: 'rgba(156,122,26,0.65)' }}>
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 9, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="16" height="26" viewBox="0 0 16 26" fill="none">
            <line x1="8" y1="0" x2="8" y2="20" stroke={GOLD} strokeWidth="0.8" opacity="0.6" />
            <path d="M2 14 L8 22 L14 14" stroke={GOLD} strokeWidth="0.8" fill="none" opacity="0.6" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
