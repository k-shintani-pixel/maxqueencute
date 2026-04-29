import { FadeIn } from '@/components/ui/FadeIn';
import { Divider } from '@/components/ui/Divider';

/* 色を Tailwind クラスに依存せず直接指定（Tailwind v4 の --color-text-* クラス生成の不確実性を回避） */
const COLOR_PRIMARY   = '#3D2B2B';
const COLOR_SECONDARY = '#6B4E4E';

export function Concept() {
  return (
    <section
      id="concept"
      className="relative py-14 md:py-20 px-4 overflow-hidden"
      style={{
        /* ライトクリーム背景 + 大理石ベイン（オーバーレイdivなしでセクション自体に直接適用） */
        backgroundColor: '#FDF2F4',
        backgroundImage: [
          'linear-gradient(180deg, #FDF2F4 0%, #FAF0F3 40%, #FFFFFF 100%)',
          'repeating-linear-gradient(108deg, transparent 0, transparent 60px, rgba(255,255,255,0.18) 60px, rgba(255,255,255,0.18) 61px)',
          'repeating-linear-gradient(74deg,  transparent 0, transparent 100px, rgba(212,175,55,0.025) 100px, rgba(212,175,55,0.025) 101px)',
        ].join(', '),
      }}
      aria-labelledby="concept-heading"
    >
      {/* Decorative background text — 先に描画して確実にコンテンツの後ろに置く */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        style={{ zIndex: 0 }}
        aria-hidden="true"
      >
        <span
          className="font-script leading-none whitespace-nowrap"
          style={{ fontSize: 'clamp(6rem, 18vw, 20rem)', opacity: 0.04, color: COLOR_PRIMARY }}
        >
          Philosophy
        </span>
      </div>

      {/* コンテンツ — z-index: 1 で確実にデコレーション要素の前面に */}
      <div className="relative max-w-3xl mx-auto" style={{ zIndex: 1 }}>
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
          <h2
            className="font-jp text-3xl md:text-5xl text-center leading-snug mb-12 font-light tracking-widest"
            style={{ color: COLOR_PRIMARY }}
          >
            10年後も、美しく。
          </h2>
        </FadeIn>

        {/* Asymmetric layout */}
        <div className="grid md:grid-cols-5 gap-8 md:gap-16 items-start">
          {/* Left gold rule */}
          <FadeIn delay={0.2} direction="right" className="hidden md:flex md:col-span-1 justify-center pt-4">
            <svg width="2" height="200" viewBox="0 0 2 200" fill="none" aria-hidden="true">
              <defs>
                <linearGradient id="vline-concept" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%"   stopColor="#D4AF37" stopOpacity="0" />
                  <stop offset="25%"  stopColor="#D4AF37" stopOpacity="1" />
                  <stop offset="75%"  stopColor="#D4AF37" stopOpacity="1" />
                  <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                </linearGradient>
              </defs>
              <line x1="1" y1="0" x2="1" y2="200" stroke="url(#vline-concept)" strokeWidth="0.8" />
              <circle cx="1" cy="50"  r="1.5" fill="#D4AF37" />
              <circle cx="1" cy="100" r="2"   fill="#D4AF37" />
              <circle cx="1" cy="150" r="1.5" fill="#D4AF37" />
            </svg>
          </FadeIn>

          {/* Text block */}
          <FadeIn delay={0.25} className="md:col-span-4">
            <div className="space-y-7">
              <p
                className="font-jp text-lg md:text-xl leading-[2.2] font-light tracking-wide"
                style={{ color: COLOR_PRIMARY }}
              >
                爪は、あなたの大切な一部。
              </p>
              <p
                className="font-jp text-sm md:text-base leading-[2.4]"
                style={{ color: COLOR_SECONDARY }}
              >
                施しを重ねても、健やかであるために。
                長く愛され、長く美しい。
                私たちが大切にしてきた、ひとつの哲学です。
              </p>
              <p
                className="font-jp text-sm md:text-base leading-[2.4]"
                style={{ color: COLOR_SECONDARY }}
              >
                技術は、時を超えて積み重なります。
                トレンドを追いながらも、爪そのものを守る。
                そのバランスを、私たちは誇りをもって届けています。
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      <Divider className="max-w-xs mx-auto" />
    </section>
  );
}
