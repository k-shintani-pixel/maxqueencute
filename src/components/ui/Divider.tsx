type Props = {
  className?: string;
  variant?: 'diamond' | 'flower';
};

export function Divider({ className = '', variant = 'diamond' }: Props) {
  return (
    <div className={`flex items-center justify-center my-10 md:my-14 ${className}`} aria-hidden="true">
      <svg width="200" height="20" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Left line */}
        <line x1="0" y1="10" x2="80" y2="10" stroke="#B8945F" strokeWidth="0.5" />
        {/* Left diamond */}
        <path d="M80 10 L86 6 L92 10 L86 14 Z" fill="none" stroke="#B8945F" strokeWidth="0.7" />

        {/* Center motif */}
        {variant === 'diamond' ? (
          <path d="M96 10 L100 5 L104 10 L100 15 Z" fill="#B8945F" />
        ) : (
          <>
            <circle cx="100" cy="10" r="3" fill="#B8945F" />
            <path d="M100 4 L100 6 M100 14 L100 16 M94 10 L96 10 M104 10 L106 10" stroke="#B8945F" strokeWidth="0.8" />
          </>
        )}

        {/* Right diamond */}
        <path d="M108 10 L114 6 L120 10 L114 14 Z" fill="none" stroke="#B8945F" strokeWidth="0.7" />
        {/* Right line */}
        <line x1="120" y1="10" x2="200" y2="10" stroke="#B8945F" strokeWidth="0.5" />
      </svg>
    </div>
  );
}
