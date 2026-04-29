import { FadeIn } from '@/components/ui/FadeIn';
import { Frame } from '@/components/ui/Frame';
import { FloorBadge } from '@/components/ui/FloorBadge';
import { Button } from '@/components/ui/Button';
import { Divider } from '@/components/ui/Divider';
import { siteConfig } from '@/config/site';

type SalonFeature = { label: string };

const mqcFeatures: SalonFeature[] = [
  { label: '【enoi】マグネットネイルの専門技術' },
  { label: 'サンプル200種類以上の定額デザイン' },
  { label: '巻き爪補正（B/Sケア）対応' },
];

const ruriFeatures: SalonFeature[] = [
  { label: 'Open記念の特別価格でご提供' },
  { label: '親しみやすい空間でリラックスした施術' },
  { label: '2回目からのお任せデザイン対応' },
];

export function Salons() {
  return (
    <section
      id="salons"
      className="relative py-28 md:py-44 px-4 marble-section overflow-hidden"
      aria-labelledby="salons-heading"
    >
      {/* Soft radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(196,181,219,0.18) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Section header */}
        <FadeIn>
          <p className="font-serif-display text-xs tracking-[0.5em] text-gold-light uppercase text-center mb-4">
            Our Salons
          </p>
          <h2
            id="salons-heading"
            className="font-jp text-3xl md:text-5xl text-ink text-center leading-snug mb-4 font-light tracking-wide"
          >
            同じ建物に、2つのサロン。
          </h2>
          <p className="font-jp text-sm text-ink-sub/60 text-center tracking-widest mb-16">
            千葉県浦安市高洲 1-6-10
          </p>
        </FadeIn>

        <div className="flex flex-col max-w-3xl mx-auto">
          {/* 2F — MaxQueenCute */}
          <FadeIn delay={0.1}>
            <Frame
              variant="glass"
              className="p-8 md:p-14"
              style={{
                background: 'linear-gradient(135deg, rgba(250,246,240,0.72) 0%, rgba(245,239,250,0.60) 100%)',
              }}
            >
              <div className="flex items-center gap-4 mb-8">
                <FloorBadge floor="2F" />
                <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(212,175,55,0.4), transparent)' }} aria-hidden="true" />
                <span className="font-serif-display text-xs tracking-widest text-accent-dark uppercase">2nd Floor</span>
              </div>

              <div className="grid md:grid-cols-2 gap-10 items-start">
                <div>
                  <h3 className="font-script text-4xl md:text-5xl text-ink leading-tight mb-3">
                    {siteConfig.salons.maxqueencute.name}
                  </h3>
                  <p className="font-jp text-sm text-accent-dark/80 mb-1 tracking-wide">
                    {siteConfig.salons.maxqueencute.tagline}
                  </p>
                  <p className="font-serif-display text-xs tracking-widest text-ink-sub/50 mb-8">
                    Owner: {siteConfig.salons.maxqueencute.owner}
                  </p>

                  <ul className="space-y-3 mb-8" role="list">
                    {mqcFeatures.map((f) => (
                      <li key={f.label} className="flex items-start gap-2.5 font-jp text-sm text-ink-sub leading-relaxed">
                        <span className="text-gold-light mt-1 flex-shrink-0 text-xs" aria-hidden="true">◆</span>
                        {f.label}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-3">
                  <Button href="#menu-mqc"                                            variant="outline"  className="w-full justify-center text-xs">メニューを見る</Button>
                  <Button href={siteConfig.reservation.hpbUrl} target="_blank" rel="noopener noreferrer" variant="primary" className="w-full justify-center text-xs">ホットペッパーで予約</Button>
                </div>
              </div>
            </Frame>
          </FadeIn>

          {/* Floor connector */}
          <div className="flex justify-center py-1" aria-hidden="true">
            <div
              className="w-px h-10 md:h-14"
              style={{ background: 'linear-gradient(180deg, #D4AF37 0%, #8A6AAB 100%)' }}
            />
          </div>

          {/* 1F — Nail salon Ruri */}
          <FadeIn delay={0.2}>
            <Frame
              variant="glass"
              className="p-8 md:p-14"
              style={{
                background: 'linear-gradient(135deg, rgba(250,246,240,0.72) 0%, rgba(255,248,238,0.60) 100%)',
              }}
            >
              <div className="flex items-center gap-4 mb-8">
                <FloorBadge floor="1F" />
                <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(212,175,55,0.3), transparent)' }} aria-hidden="true" />
                <span className="font-serif-display text-xs tracking-widest text-gold-light uppercase">1st Floor</span>
              </div>

              <div className="grid md:grid-cols-2 gap-10 items-start">
                <div>
                  {/* Open badge */}
                  <div className="inline-flex items-center gap-1.5 border border-gold-light/60 px-3 py-1.5 mb-5 rounded-sm">
                    <span className="text-gold-light text-xs" aria-hidden="true">✦</span>
                    <span className="font-serif-display text-xs tracking-widest text-gold-mid uppercase">Open 記念価格</span>
                    <span className="text-gold-light text-xs" aria-hidden="true">✦</span>
                  </div>

                  <h3 className="font-script text-4xl md:text-5xl text-ink leading-tight mb-3">
                    {siteConfig.salons.ruri.name}
                  </h3>
                  <p className="font-jp text-sm text-gold-dark/80 mb-1 tracking-wide">
                    {siteConfig.salons.ruri.tagline}
                  </p>
                  <p className="font-serif-display text-xs tracking-widest text-ink-sub/50 mb-8">
                    Nail Artist: {siteConfig.salons.ruri.staff}
                  </p>

                  <ul className="space-y-3 mb-8" role="list">
                    {ruriFeatures.map((f) => (
                      <li key={f.label} className="flex items-start gap-2.5 font-jp text-sm text-ink-sub leading-relaxed">
                        <span className="text-gold-light mt-1 flex-shrink-0 text-xs" aria-hidden="true">◆</span>
                        {f.label}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-3">
                  <Button href="#menu-ruri" variant="outline" className="w-full justify-center text-xs">メニューを見る</Button>
                  <Button href={siteConfig.reservation.hpbUrl} target="_blank" rel="noopener noreferrer" variant="primary" className="w-full justify-center text-xs">ホットペッパーで予約</Button>
                  <Button href={siteConfig.reservation.lineOfficialUrl} target="_blank" rel="noopener noreferrer" variant="outline" className="w-full justify-center text-xs gap-2" aria-label="LINEでお問い合わせ（Nail salon Ruri）">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                    </svg>
                    LINEで問い合わせ
                  </Button>
                </div>
              </div>
            </Frame>
          </FadeIn>
        </div>
      </div>

      <Divider className="max-w-xs mx-auto" />
    </section>
  );
}
