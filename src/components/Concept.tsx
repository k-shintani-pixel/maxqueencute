import { FadeIn } from '@/components/ui/FadeIn';
import { Divider } from '@/components/ui/Divider';

export function Concept() {
  return (
    <section
      id="concept"
      className="relative py-28 md:py-44 px-4 overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, #F0E9DC 0%, #EEE5D6 40%, #FAF6F0 100%)',
      }}
      aria-labelledby="concept-heading"
    >
      {/* Marble texture overlay */}
      <div
        className="absolute inset-0 opacity-60 marble-section pointer-events-none"
        aria-hidden="true"
      />

      {/* Decorative background text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span className="font-script leading-none opacity-[0.04] text-text-primary whitespace-nowrap"
          style={{ fontSize: 'clamp(6rem, 18vw, 20rem)' }}>
          Philosophy
        </span>
      </div>

      <div className="relative max-w-3xl mx-auto">
        <FadeIn>
          <p
            id="concept-heading"
            className="font-serif-display text-xs tracking-[0.5em] uppercase text-center mb-6"
            style={{ color: '#D4AF37' }}
          >
            Our Concept
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-jp text-3xl md:text-5xl text-text-primary text-center leading-snug mb-12 font-light tracking-widest">
            10年後も、美しく。
          </h2>
        </FadeIn>

        {/* Asymmetric layout */}
        <div className="grid md:grid-cols-5 gap-8 md:gap-16 items-start">
          {/* Left gold rule */}
          <FadeIn delay={0.2} direction="right" className="hidden md:flex md:col-span-1 justify-center pt-4">
            <svg width="2" height="200" viewBox="0 0 2 200" fill="none" aria-hidden="true">
              <defs>
                <linearGradient id="vline" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%"   stopColor="#D4AF37" stopOpacity="0" />
                  <stop offset="25%"  stopColor="#D4AF37" stopOpacity="1" />
                  <stop offset="75%"  stopColor="#D4AF37" stopOpacity="1" />
                  <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                </linearGradient>
              </defs>
              <line x1="1" y1="0" x2="1" y2="200" stroke="url(#vline)" strokeWidth="0.8" />
              <circle cx="1" cy="50"  r="1.5" fill="#D4AF37" />
              <circle cx="1" cy="100" r="2"   fill="#D4AF37" />
              <circle cx="1" cy="150" r="1.5" fill="#D4AF37" />
            </svg>
          </FadeIn>

          {/* Text block */}
          <FadeIn delay={0.3} className="md:col-span-4">
            <div className="space-y-7">
              <p className="font-jp text-lg md:text-xl leading-[2.2] text-text-primary font-light tracking-wide">
                爪は、あなたの大切な一部。
              </p>
              <p className="font-jp text-sm md:text-base leading-[2.4] text-text-secondary">
                施しを重ねても、健やかであるために。
                長く愛され、長く美しい。
                私たちが大切にしてきた、ひとつの哲学です。
              </p>
              <p className="font-jp text-sm md:text-base leading-[2.4] text-text-secondary">
                技術は、時を超えて積み重なります。
                トレンドを追いながらも、爪そのものを守る。
                そのバランスを、私たちは誇りをもって届けています。
              </p>
              <p className="font-serif-display text-xs text-text-secondary/40 mt-8 italic tracking-wider">
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
