import { FadeIn } from '@/components/ui/FadeIn';
import { Divider } from '@/components/ui/Divider';
import { galleryImages } from '@/config/gallery';

function GalleryPlaceholder({ index }: { index: number }) {
  return (
    <div className="relative aspect-square overflow-hidden" role="img" aria-label={`ネイルデザイン ${index + 1}（Coming Soon）`}>
      {/* Outer border */}
      <div className="absolute inset-0 pointer-events-none z-10" aria-hidden="true">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
          <rect x="1" y="1" width="98" height="98" stroke="#C4B5DB" strokeWidth="0.5" />
          <path d="M1 12 L1 1 L12 1" stroke="#B8945F" strokeWidth="1" fill="none" />
          <path d="M88 1 L99 1 L99 12" stroke="#B8945F" strokeWidth="1" fill="none" />
          <path d="M1 88 L1 99 L12 99" stroke="#B8945F" strokeWidth="1" fill="none" />
          <path d="M88 99 L99 99 L99 88" stroke="#B8945F" strokeWidth="1" fill="none" />
        </svg>
      </div>

      {/* Placeholder background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #EDE0FA 0%, #F5F0FF 50%, #E8DAFA 100%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 2 L13.5 8 L20 8 L14.5 11.5 L16.5 18 L12 14 L7.5 18 L9.5 11.5 L4 8 L10.5 8 Z" stroke="#C4B5DB" strokeWidth="0.8" fill="none" />
        </svg>
        <span className="font-script text-lg text-accent-dark/50">Coming Soon</span>
      </div>
    </div>
  );
}

export function Gallery() {
  return (
    <section
      id="gallery"
      className="relative py-24 md:py-40 px-4"
      style={{ background: 'linear-gradient(180deg, #FAF6F0 0%, #F0E9DC 100%)' }}
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <FadeIn>
          <p className="font-serif-display text-xs tracking-[0.5em] text-gold-light uppercase text-center mb-4">
            Gallery
          </p>
          <h2
            id="gallery-heading"
            className="font-script text-5xl md:text-6xl text-text-primary text-center leading-tight mb-4"
          >
            ギャラリー
          </h2>
          <p className="font-jp text-xs text-text-secondary/50 text-center mb-12">
            ※ 施術写真は順次追加予定です。{' '}
            <a
              href="https://www.instagram.com/maxqueencute"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-gold-light transition-colors"
              aria-label="InstagramでMaxQueenCuteをフォロー"
            >
              Instagram
            </a>
            でも随時公開中。
          </p>
        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, i) => (
            <FadeIn key={image.id} delay={i * 0.06}>
              <GalleryPlaceholder index={i} />
            </FadeIn>
          ))}
        </div>
      </div>

      <Divider className="max-w-xs mx-auto" />
    </section>
  );
}
