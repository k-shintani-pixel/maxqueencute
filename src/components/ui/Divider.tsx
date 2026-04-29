type Props = {
  className?: string;
  variant?: 'diamond' | 'star';
  /** light for dark section backgrounds */
  tone?: 'default' | 'light';
};

export function Divider({ className = '', variant = 'diamond', tone = 'default' }: Props) {
  const gold = tone === 'light' ? 'rgba(212,175,55,0.55)' : '#D4AF37';
  const goldFill = tone === 'light' ? 'rgba(212,175,55,0.7)' : '#D4AF37';

  return (
    <div className={`flex items-center justify-center my-8 md:my-10 ${className}`} aria-hidden="true">
      <svg width="220" height="22" viewBox="0 0 220 22" fill="none">
        {/* Left line — gradient fade */}
        <defs>
          <linearGradient id={`lg-l-${tone}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={gold} stopOpacity="0" />
            <stop offset="100%" stopColor={gold} stopOpacity="1" />
          </linearGradient>
          <linearGradient id={`lg-r-${tone}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={gold} stopOpacity="1" />
            <stop offset="100%" stopColor={gold} stopOpacity="0" />
          </linearGradient>
        </defs>
        <line x1="0"   y1="11" x2="86" y2="11" stroke={`url(#lg-l-${tone})`} strokeWidth="0.6" />
        {/* Left diamond */}
        <path d="M88 11 L93 7 L98 11 L93 15 Z" fill="none" stroke={gold} strokeWidth="0.8" />
        {/* Centre motif */}
        {variant === 'star' ? (
          <path d="M110 11 L112 6.5 L116 5 L112 3.5 L110 -1 L108 3.5 L104 5 L108 6.5 Z M110 11 L112 15.5 L116 17 L112 18.5 L110 23 L108 18.5 L104 17 L108 15.5 Z" fill={goldFill} opacity="0.8" />
        ) : (
          <>
            <path d="M108 11 L110 6 L112 11 L110 16 Z" fill="none" stroke={gold} strokeWidth="0.7" />
            <path d="M110 11 L115 7 L120 11 L115 15 Z" fill={goldFill} />
            <path d="M118 11 L120 6 L122 11 L120 16 Z" fill="none" stroke={gold} strokeWidth="0.7" />
          </>
        )}
        {/* Right diamond */}
        <path d="M122 11 L127 7 L132 11 L127 15 Z" fill="none" stroke={gold} strokeWidth="0.8" />
        {/* Right line */}
        <line x1="134" y1="11" x2="220" y2="11" stroke={`url(#lg-r-${tone})`} strokeWidth="0.6" />
      </svg>
    </div>
  );
}
