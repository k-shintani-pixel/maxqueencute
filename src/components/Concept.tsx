import { FadeIn } from '@/components/ui/FadeIn';
import { Divider } from '@/components/ui/Divider';

export function Concept() {
  return (
    <section
      id="concept"
      className="relative py-24 md:py-40 px-4 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FAF6F0 0%, #F0E9DC 100%)' }}
      aria-labelledby="concept-heading"
    >
      {/* Decorative background text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-script text-[18vw] md:text-[14vw] leading-none opacity-[0.035] text-text-primary whitespace-nowrap"
        >
          Philosophy
        </span>
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Eyebrow */}
        <FadeIn>
          <p
            id="concept-heading"
            className="font-serif-display text-xs tracking-[0.5em] text-gold-light uppercase text-center mb-6"
          >
            Our Concept
          </p>
        </FadeIn>

        {/* Main title */}
        <FadeIn delay={0.1}>
          <h2 className="font-script text-5xl md:text-7xl text-text-primary text-center leading-tight mb-10">
            10年後も、美しく。
          </h2>
        </FadeIn>

        {/* Asymmetric layout text block */}
        <div className="grid md:grid-cols-5 gap-8 md:gap-16 items-start">
          {/* Left decorative element */}
          <FadeIn delay={0.2} direction="right" className="hidden md:flex md:col-span-1 justify-center pt-8">
            <svg width="2" height="180" viewBox="0 0 2 180" fill="none" aria-hidden="true">
              <line x1="1" y1="0" x2="1" y2="180" stroke="#B8945F" strokeWidth="0.8" />
              <circle cx="1" cy="0" r="2" fill="#B8945F" />
              <circle cx="1" cy="90" r="1.5" fill="#B8945F" />
              <circle cx="1" cy="180" r="2" fill="#B8945F" />
            </svg>
          </FadeIn>

          {/* Text */}
          <FadeIn delay={0.3} className="md:col-span-4">
            <div className="space-y-6">
              <p className="font-jp text-base md:text-lg leading-[2.2] text-text-primary">
                爪は、あなたの大切な一部。
              </p>
              <p className="font-jp text-sm md:text-base leading-[2.2] text-text-secondary">
                施しを重ねても、健やかであるために。
                長く愛され、長く美しい。
                私たちが大切にしてきた、ひとつの哲学です。
              </p>
              <p className="font-jp text-sm md:text-base leading-[2.2] text-text-secondary">
                技術は、時を超えて積み重なります。
                トレンドを追いながらも、爪そのものを守る。
                そのバランスを、私たちは誇りをもって届けています。
              </p>
              <p className="font-jp text-xs md:text-sm leading-[2.2] text-text-secondary/70 mt-8 italic">
                ※ 文章は後日差し替え予定のサンプルテキストです。
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      <Divider className="max-w-xs mx-auto" />
    </section>
  );
}
