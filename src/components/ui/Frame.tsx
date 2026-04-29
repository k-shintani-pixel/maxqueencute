import { type HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  className?: string;
  /** default: gold antique | salon: same | gallery: purple | light: soft purple | glass: glassmorphism */
  variant?: 'default' | 'salon' | 'gallery' | 'light' | 'glass';
};

const borderColors: Record<NonNullable<Props['variant']>, string> = {
  default: '#D4AF37',
  salon:   '#D4AF37',
  gallery: '#C4B5DB',
  light:   '#C4B5DB',
  glass:   'rgba(212,175,55,0.4)',
};

export function Frame({ children, className = '', variant = 'default', style, ...rest }: Props) {
  const bc = borderColors[variant];
  const isGlass = variant === 'glass';

  return (
    <div
      className={`relative rounded-2xl ${isGlass ? 'glass-card' : ''} ${className}`}
      style={style}
      {...rest}
    >
      {/* ── Corner decorations ── */}
      {/* Top-left */}
      <svg className="absolute top-0 left-0 w-10 h-10 pointer-events-none" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M3 37 L3 3 L37 3"  stroke={bc} strokeWidth="1"   fill="none" />
        <path d="M3 3 L10 3 M3 3 L3 10" stroke={bc} strokeWidth="0.5" fill="none" />
        <circle cx="3" cy="3" r="1.5" fill={bc} />
      </svg>
      {/* Top-right */}
      <svg className="absolute top-0 right-0 w-10 h-10 pointer-events-none" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M37 37 L37 3 L3 3"  stroke={bc} strokeWidth="1"   fill="none" />
        <path d="M37 3 L30 3 M37 3 L37 10" stroke={bc} strokeWidth="0.5" fill="none" />
        <circle cx="37" cy="3" r="1.5" fill={bc} />
      </svg>
      {/* Bottom-left */}
      <svg className="absolute bottom-0 left-0 w-10 h-10 pointer-events-none" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M3 3 L3 37 L37 37"  stroke={bc} strokeWidth="1"   fill="none" />
        <path d="M3 37 L10 37 M3 37 L3 30" stroke={bc} strokeWidth="0.5" fill="none" />
        <circle cx="3" cy="37" r="1.5" fill={bc} />
      </svg>
      {/* Bottom-right */}
      <svg className="absolute bottom-0 right-0 w-10 h-10 pointer-events-none" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M37 3 L37 37 L3 37"  stroke={bc} strokeWidth="1"   fill="none" />
        <path d="M37 37 L30 37 M37 37 L37 30" stroke={bc} strokeWidth="0.5" fill="none" />
        <circle cx="37" cy="37" r="1.5" fill={bc} />
      </svg>

      {/* ── Inner inset border ── */}
      <div
        className="absolute inset-3 pointer-events-none rounded-xl"
        style={{ border: `0.5px solid ${bc}`, opacity: isGlass ? 0.3 : 0.35 }}
      />

      {/* ── Content ── */}
      <div className="relative">{children}</div>
    </div>
  );
}
