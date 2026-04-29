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
};

function InstagramColumn({
  salonName,
  handle,
  instagramUrl,
  tagline,
  accentClass = 'text-accent-dark',
}: InstagramColumnProps) {
  return (
    <div className="flex flex-col">
      {/* Column header */}
      <div className="text-center mb-6">
        <p className="font-script text-3xl text-text-primary mb-1">{salonName}</p>
        <p className={`font-serif-display text-xs tracking-widest ${accentClass}`}>{handle}</p>
        <p className="font-jp text-xs text-text-secondary/60 mt-2">{tagline}</p>
      </div>

      {/* Embed placeholder */}
      <div
        className="flex-1 min-h-64 border border-accent-light/40 flex flex-col items-center justify-center gap-3 p-6 bg-secondary/30"
        aria-label={`${salonName} Instagramフィード（埋め込み予定）`}
      >
        <InstagramIcon size={32} className="text-accent-light" aria-hidden={true} />
        <p className="font-jp text-xs text-text-secondary/50 text-center leading-relaxed">
          {/* ここに SnapWidget 等の Instagram 埋め込みコードを貼り付けてください */}
          Instagramフィード埋め込みエリア
          <br />
          <span className="text-xs opacity-70">（SnapWidget等のコードをここに追加）</span>
        </p>
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
      className="relative py-24 md:py-40 px-4 bg-base"
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
            className="font-script text-5xl md:text-6xl text-text-primary text-center leading-tight mb-12"
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
            />
          </FadeIn>
          <FadeIn delay={0.2} direction="left">
            <InstagramColumn
              salonName={siteConfig.salons.ruri.name}
              handle={siteConfig.salons.ruri.instagramHandle}
              instagramUrl={siteConfig.salons.ruri.instagramUrl}
              tagline={siteConfig.salons.ruri.tagline}
              accentClass="text-gold-light"
            />
          </FadeIn>
        </div>
      </div>

      <Divider className="max-w-xs mx-auto" />
    </section>
  );
}
