import { FadeIn } from '@/components/ui/FadeIn';
import { Frame } from '@/components/ui/Frame';
import { FloorBadge } from '@/components/ui/FloorBadge';
import { Button } from '@/components/ui/Button';
import { Divider } from '@/components/ui/Divider';
import { siteConfig } from '@/config/site';

type SalonFeature = {
  label: string;
};

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
      className="relative py-24 md:py-40 px-4 bg-base"
      aria-labelledby="salons-heading"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <FadeIn>
          <p className="font-serif-display text-xs tracking-[0.5em] text-gold-light uppercase text-center mb-4">
            Our Salons
          </p>
          <h2
            id="salons-heading"
            className="font-script text-5xl md:text-6xl text-text-primary text-center leading-tight mb-4"
          >
            同じ建物に、2つのサロン。
          </h2>
          <p className="font-jp text-sm text-text-secondary/70 text-center tracking-wide mb-16">
            千葉県浦安市高洲1-6-10
          </p>
        </FadeIn>

        {/* Building illustration — simple vertical stack with floor labels */}
        <div className="flex flex-col gap-0 max-w-3xl mx-auto">
          {/* 2F: MaxQueenCute */}
          <FadeIn delay={0.1}>
            <Frame variant="salon" className="p-8 md:p-12 mb-0" style={{ background: 'linear-gradient(135deg, #FAF6F0 0%, #F5EFFA 100%)' }}>
              {/* Floor badge */}
              <div className="flex items-center gap-4 mb-6">
                <FloorBadge floor="2F" />
                <div className="flex-1 h-px bg-accent-dark/20" aria-hidden="true" />
                <span className="font-serif-display text-xs tracking-widest text-accent-dark uppercase">
                  {siteConfig.salons.maxqueencute.floor}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Left: salon info */}
                <div>
                  <h3 className="font-script text-4xl md:text-5xl text-text-primary leading-tight mb-3">
                    {siteConfig.salons.maxqueencute.name}
                  </h3>
                  <p className="font-jp text-sm text-accent-dark mb-1">
                    {siteConfig.salons.maxqueencute.tagline}
                  </p>
                  <p className="font-serif-display text-xs tracking-widest text-text-secondary/60 mb-6">
                    Owner: {siteConfig.salons.maxqueencute.owner}
                  </p>

                  <ul className="space-y-2 mb-8" role="list">
                    {mqcFeatures.map((f) => (
                      <li key={f.label} className="flex items-start gap-2 font-jp text-sm text-text-secondary">
                        <span className="text-gold-light mt-0.5 flex-shrink-0" aria-hidden="true">◇</span>
                        {f.label}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: buttons */}
                <div className="flex flex-col gap-3">
                  <Button
                    href="#menu-mqc"
                    variant="outline"
                    className="w-full justify-center"
                  >
                    メニューを見る
                  </Button>
                  <Button
                    href={siteConfig.reservation.hpbUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    className="w-full justify-center"
                  >
                    ホットペッパーで予約
                  </Button>
                </div>
              </div>
            </Frame>
          </FadeIn>

          {/* Floor connector */}
          <div className="flex justify-center" aria-hidden="true">
            <div
              className="w-px h-8 md:h-12"
              style={{ background: 'linear-gradient(180deg, #B8945F 0%, #7C6B95 100%)' }}
            />
          </div>

          {/* 1F: Nail salon Ruri */}
          <FadeIn delay={0.2}>
            <Frame variant="salon" className="p-8 md:p-12" style={{ background: 'linear-gradient(135deg, #FAF6F0 0%, #FAF3EC 100%)' }}>
              {/* Floor badge */}
              <div className="flex items-center gap-4 mb-6">
                <FloorBadge floor="1F" />
                <div className="flex-1 h-px bg-gold-light/20" aria-hidden="true" />
                <span className="font-serif-display text-xs tracking-widest text-gold-light uppercase">
                  {siteConfig.salons.ruri.floor}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Left: salon info */}
                <div>
                  {/* Open badge */}
                  <div className="inline-flex items-center gap-1.5 border border-gold-light px-3 py-1 mb-4">
                    <span className="text-gold-light" aria-hidden="true">✦</span>
                    <span className="font-serif-display text-xs tracking-widest text-gold-light uppercase">
                      Open 記念価格
                    </span>
                    <span className="text-gold-light" aria-hidden="true">✦</span>
                  </div>

                  <h3 className="font-script text-4xl md:text-5xl text-text-primary leading-tight mb-3">
                    {siteConfig.salons.ruri.name}
                  </h3>
                  <p className="font-jp text-sm text-gold-dark mb-1">
                    {siteConfig.salons.ruri.tagline}
                  </p>
                  <p className="font-serif-display text-xs tracking-widest text-text-secondary/60 mb-6">
                    Nail Artist: {siteConfig.salons.ruri.staff}
                  </p>

                  <ul className="space-y-2 mb-8" role="list">
                    {ruriFeatures.map((f) => (
                      <li key={f.label} className="flex items-start gap-2 font-jp text-sm text-text-secondary">
                        <span className="text-gold-light mt-0.5 flex-shrink-0" aria-hidden="true">◇</span>
                        {f.label}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: buttons */}
                <div className="flex flex-col gap-3">
                  <Button
                    href="#menu-ruri"
                    variant="outline"
                    className="w-full justify-center"
                  >
                    メニューを見る
                  </Button>
                  <Button
                    href={siteConfig.reservation.hpbUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    className="w-full justify-center"
                  >
                    ホットペッパーで予約
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
