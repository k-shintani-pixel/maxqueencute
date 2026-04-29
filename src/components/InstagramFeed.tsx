import { FadeIn } from '@/components/ui/FadeIn';
import { Divider } from '@/components/ui/Divider';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';
import { InstagramIcon } from '@/components/ui/InstagramIcon';

type InstagramColumnProps = {
  salonName: string;
  handle: string;
  instagramUrl: string;
  tagline: string;
  accentClass?: string;
  embedContent?: React.ReactNode;
};

function InstagramColumn({
  salonName,
  handle,
  instagramUrl,
  tagline,
  accentClass = 'text-accent-dark',
  embedContent,
}: InstagramColumnProps) {
  return (
    <div className="flex flex-col">
      {/* Column header */}
      <div className="text-center mb-6">
        <p className="font-script text-3xl text-ink mb-1">{salonName}</p>
        <p className={`font-serif-display text-xs tracking-widest ${accentClass}`}>{handle}</p>
        <p className="font-jp text-xs text-ink-sub/60 mt-2">{tagline}</p>
      </div>

      {/* Embed area */}
      <div className="flex-1">
        {embedContent ?? (
          <div
            className="min-h-64 border border-accent-light/40 flex flex-col items-center justify-center gap-3 p-6 bg-secondary/30"
            aria-label={`${salonName} Instagramフィード（埋め込み予定）`}
          >
            <InstagramIcon size={32} className="text-accent-light" aria-hidden={true} />
            <p className="font-jp text-xs text-ink-sub/50 text-center leading-relaxed">
              Instagramフィード埋め込みエリア
            </p>
          </div>
        )}
      </div>

      {/* Follow button */}
      <div className="mt-4">
        <Button
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="outline"
          className="w-full justify-center gap-2"
          aria-label={`${salonName}をInstagramでフォロー`}
        >
          <InstagramIcon size={14} aria-hidden={true} />
          Instagram でフォロー
        </Button>
      </div>
    </div>
  );
}

export function InstagramFeed() {
  return (
    <section
      id="instagram"
      className="relative py-12 md:py-16 px-4 bg-base"
      aria-labelledby="instagram-heading"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <FadeIn>
          <p className="font-serif-display text-xs tracking-[0.5em] text-gold-light uppercase text-center mb-4">
            Instagram
          </p>
          <h2
            id="instagram-heading"
            className="font-script text-5xl md:text-6xl text-ink text-center leading-tight mb-12"
          >
            Follow Us
          </h2>
        </FadeIn>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <FadeIn delay={0.1} direction="right">
            <InstagramColumn
              salonName={siteConfig.salons.maxqueencute.name}
              handle={siteConfig.salons.maxqueencute.instagramHandle}
              instagramUrl={siteConfig.salons.maxqueencute.instagramUrl}
              tagline={siteConfig.salons.maxqueencute.tagline}
              accentClass="text-accent-dark"
              embedContent={
                <div
                  className="elfsight-app-8b887de3-59fb-4c6c-ac99-b7a4992409c0"
                  data-elfsight-app-lazy
                />
              }
            />
          </FadeIn>
          <FadeIn delay={0.2} direction="left">
            <InstagramColumn
              salonName={siteConfig.salons.ruri.name}
              handle={siteConfig.salons.ruri.instagramHandle}
              instagramUrl={siteConfig.salons.ruri.instagramUrl}
              tagline={siteConfig.salons.ruri.tagline}
              accentClass="text-gold-light"
              embedContent={
                <div
                  className="elfsight-app-b75b054a-51bf-4ed1-922f-5eced02826a3"
                  data-elfsight-app-lazy
                />
              }
            />
          </FadeIn>
        </div>
      </div>

      <Divider className="max-w-xs mx-auto" />
    </section>
  );
}
