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
            className="font-jp text-3xl md:text-5xl text-text-primary text-center leading-snug mb-4 font-light tracking-wide"
          >
            同じ建物に、2つのサロン。
          </h2>
          <p className="font-jp text-sm text-text-secondary/60 text-center tracking-widest mb-16">
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
                  <h3 className="font-script text-4xl md:text-5xl text-text-primary leading-tight mb-3">
                    {siteConfig.salons.maxqueencute.name}
                  </h3>
                  <p className="font-jp text-sm text-accent-dark/80 mb-1 tracking-wide">
                    {siteConfig.salons.maxqueencute.tagline}
                  </p>
                  <p className="font-serif-display text-xs tracking-widest text-text-secondary/50 mb-8">
                    Owner: {siteConfig.salons.maxqueencute.owner}
                  </p>

                  <ul className="space-y-3 mb-8" role="list">
                    {mqcFeatures.map((f) => (
                      <li key={f.label} className="flex items-start gap-2.5 font-jp text-sm text-text-secondary leading-relaxed">
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

                  <h3 className="font-script text-4xl md:text-5xl text-text-primary leading-tight mb-3">
                    {siteConfig.salons.ruri.name}
                  </h3>
                  <p className="font-jp text-sm text-gold-dark/80 mb-1 tracking-wide">
                    {siteConfig.salons.ruri.tagline}
                  </p>
                  <p className="font-serif-display text-xs tracking-widest text-text-secondary/50 mb-8">
                    Nail Artist: {siteConfig.salons.ruri.staff}
                  </p>

                  <ul className="space-y-3 mb-8" role="list">
                    {ruriFeatures.map((f) => (
                      <li key={f.label} className="flex items-start gap-2.5 font-jp text-sm text-text-secondary leading-relaxed">
                        <span className="text-gold-light mt-1 flex-shrink-0 text-xs" aria-hidden="true">◆</span>
                        {f.label}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-3">
                  <Button href="#menu-ruri"                                            variant="outline"  className="w-full justify-center text-xs">メニューを見る</Button>
                  <Button href={siteConfig.reservation.hpbUrl} target="_blank" rel="noopener noreferrer" variant="primary" className="w-full justify-center text-xs">ホットペッパーで予約</Button>
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
