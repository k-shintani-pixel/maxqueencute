type Props = {
  floor: '1F' | '2F';
  className?: string;
};

export function FloorBadge({ floor, className = '' }: Props) {
  const isSecond = floor === '2F';
  const color = isSecond ? '#8A6AAB' : '#D4AF37';

  return (
    <div className={`inline-flex items-center justify-center ${className}`} aria-label={`${isSecond ? '2' : '1'}階`}>
      <span className="font-script text-4xl md:text-5xl leading-none" style={{ color }}>
        {floor}
      </span>
    </div>
  );
}
