import { type HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'salon' | 'gallery' | 'light';
};

export function Frame({ children, className = '', variant = 'default', style, ...rest }: Props) {
  const borderColor =
    variant === 'salon'
      ? '#B8945F'
      : variant === 'gallery'
        ? '#C4B5DB'
        : variant === 'light'
          ? '#C4B5DB'
          : '#B8945F';

  return (
    <div className={`relative ${className}`} style={style} {...rest}>
      {/* Corner decorations */}
      <svg
        className="absolute top-0 left-0 w-12 h-12 pointer-events-none"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
      >
        <path d="M4 44 L4 4 L44 4" stroke={borderColor} strokeWidth="1" fill="none" />
        <path d="M4 4 L12 4 M4 4 L4 12" stroke={borderColor} strokeWidth="0.5" fill="none" />
        <circle cx="4" cy="4" r="2" fill={borderColor} />
      </svg>
      <svg
        className="absolute top-0 right-0 w-12 h-12 pointer-events-none"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
      >
        <path d="M44 44 L44 4 L4 4" stroke={borderColor} strokeWidth="1" fill="none" />
        <path d="M44 4 L36 4 M44 4 L44 12" stroke={borderColor} strokeWidth="0.5" fill="none" />
        <circle cx="44" cy="4" r="2" fill={borderColor} />
      </svg>
      <svg
        className="absolute bottom-0 left-0 w-12 h-12 pointer-events-none"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
      >
        <path d="M4 4 L4 44 L44 44" stroke={borderColor} strokeWidth="1" fill="none" />
        <path d="M4 44 L12 44 M4 44 L4 36" stroke={borderColor} strokeWidth="0.5" fill="none" />
        <circle cx="4" cy="44" r="2" fill={borderColor} />
      </svg>
      <svg
        className="absolute bottom-0 right-0 w-12 h-12 pointer-events-none"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
      >
        <path d="M44 4 L44 44 L4 44" stroke={borderColor} strokeWidth="1" fill="none" />
        <path d="M44 44 L36 44 M44 44 L44 36" stroke={borderColor} strokeWidth="0.5" fill="none" />
        <circle cx="44" cy="44" r="2" fill={borderColor} />
      </svg>

      {/* Inner border */}
      <div
        className="absolute inset-3 pointer-events-none"
        style={{ border: `0.5px solid ${borderColor}`, opacity: 0.4 }}
      />

      {/* Content */}
      <div className="relative">{children}</div>
    </div>
  );
}
