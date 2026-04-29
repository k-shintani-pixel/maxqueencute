import { type HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLElement> & {
  as?: 'section' | 'div' | 'article';
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function Section({ as: Tag = 'section', children, className = '', id, ...props }: Props) {
  return (
    <Tag
      id={id}
      className={`relative py-20 md:py-32 px-4 md:px-8 ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}

export function SectionTitle({
  children,
  subtitle,
  className = '',
}: {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={`text-center mb-12 md:mb-16 ${className}`}>
      <h2 className="font-script text-5xl md:text-6xl text-ink leading-tight">{children}</h2>
      {subtitle && (
        <p className="font-serif-display text-sm md:text-base tracking-[0.3em] text-ink-sub mt-3 uppercase">
          {subtitle}
        </p>
      )}
    </div>
  );
}
