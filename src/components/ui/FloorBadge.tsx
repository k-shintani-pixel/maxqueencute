type Props = {
  floor: '1F' | '2F';
  className?: string;
};

export function FloorBadge({ floor, className = '' }: Props) {
  const isSecondFloor = floor === '2F';

  return (
    <div
      className={`inline-flex items-center justify-center ${className}`}
      aria-label={`${isSecondFloor ? '2' : '1'}階`}
    >
      <span
        className="font-script text-4xl md:text-5xl leading-none"
        style={{ color: isSecondFloor ? '#7C6B95' : '#B8945F' }}
      >
        {floor}
      </span>
    </div>
  );
}
