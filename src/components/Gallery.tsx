'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FadeIn } from '@/components/ui/FadeIn';
import { Divider } from '@/components/ui/Divider';
import { galleryImages, type GalleryImage } from '@/config/gallery';
import { siteConfig } from '@/config/site';

type Tab = 'maxqueencute' | 'ruri';

function PlaceholderContent({ label, index }: { label: string; index: number }) {
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center gap-2"
      role="img"
      aria-label={`${label} ネイルデザイン ${index + 1}（Coming Soon）`}
    >
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, #FDE8EE 0%, #FDF2F4 50%, #FADADD 100%)' }}
        aria-hidden="true"
      />
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="relative z-10">
        <path
          d="M12 2 L13.5 8 L20 8 L14.5 11.5 L16.5 18 L12 14 L7.5 18 L9.5 11.5 L4 8 L10.5 8 Z"
          stroke="#C4B5DB"
          strokeWidth="0.8"
          fill="none"
        />
      </svg>
      <span className="font-script text-lg relative z-10" style={{ color: 'rgba(139,34,82,0.35)' }}>
        Coming Soon
      </span>
    </div>
  );
}

function GalleryItem({ image, index, label }: { image: GalleryImage; index: number; label: string }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative aspect-square overflow-hidden">
      {/* Corner bracket overlay */}
      <div className="absolute inset-0 pointer-events-none z-10" aria-hidden="true">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
          <rect x="1" y="1" width="98" height="98" stroke="#C4B5DB" strokeWidth="0.5" />
          <path d="M1 12 L1 1 L12 1" stroke="#B8945F" strokeWidth="1" fill="none" />
          <path d="M88 1 L99 1 L99 12" stroke="#B8945F" strokeWidth="1" fill="none" />
          <path d="M1 88 L1 99 L12 99" stroke="#B8945F" strokeWidth="1" fill="none" />
          <path d="M88 99 L99 99 L99 88" stroke="#B8945F" strokeWidth="1" fill="none" />
        </svg>
      </div>

      {hasError ? (
        <PlaceholderContent label={label} index={index} />
      ) : (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 33vw"
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
}

type GalleryGridProps = {
  salon: Tab;
  salonLabel: string;
  instagramUrl: string;
  instagramHandle: string;
};

function GalleryGrid({ salon, salonLabel, instagramUrl, instagramHandle }: GalleryGridProps) {
  const images = galleryImages.filter((img) => img.salon === salon);

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-6">
        {images.map((image, i) => (
          <FadeIn key={image.id} delay={i * 0.06}>
            <GalleryItem image={image} index={i} label={salonLabel} />
          </FadeIn>
        ))}
      </div>
      <p className="font-jp text-xs text-center" style={{ color: 'rgba(107,78,78,0.5)' }}>
        ※ 施術写真は順次追加予定です。{' '}
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-gold-light transition-colors"
          aria-label={`${salonLabel}をInstagramでフォロー`}
        >
          {instagramHandle}
        </a>
        でも随時公開中。
      </p>
    </div>
  );
}

export function Gallery() {
  const [activeTab, setActiveTab] = useState<Tab>('maxqueencute');

  return (
    <section
      id="gallery"
      className="relative py-12 md:py-16 px-4"
      style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #FDF2F4 100%)' }}
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
            className="font-script text-5xl md:text-6xl text-center leading-tight mb-12"
            style={{ color: '#3D2B2B' }}
          >
            ギャラリー
          </h2>
        </FadeIn>

        {/* Tabs */}
        <FadeIn delay={0.1}>
          <div
            className="flex border-b border-gold-light/30 mb-10"
            role="tablist"
            aria-label="店舗切り替え"
          >
            {([
              { id: 'maxqueencute' as Tab, label: 'MaxQueenCute 2F' },
              { id: 'ruri' as Tab, label: 'Nail salon Ruri 1F' },
            ] as const).map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={`gallery-panel-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 font-serif-display text-base md:text-xl tracking-wider py-3 px-4 transition-all ${
                  activeTab === tab.id
                    ? 'border-b-2 border-gold-light -mb-px'
                    : 'hover:opacity-80'
                }`}
                style={{
                  color:
                    activeTab === tab.id ? '#9C7A1A' : 'rgba(107,78,78,0.5)',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* MaxQueenCute panel */}
        <div
          id="gallery-panel-maxqueencute"
          role="tabpanel"
          aria-labelledby="gallery-tab-maxqueencute"
          className={activeTab === 'maxqueencute' ? 'block' : 'hidden'}
        >
          <GalleryGrid
            salon="maxqueencute"
            salonLabel="MaxQueenCute"
            instagramUrl={siteConfig.salons.maxqueencute.instagramUrl}
            instagramHandle={siteConfig.salons.maxqueencute.instagramHandle}
          />
        </div>

        {/* Ruri panel */}
        <div
          id="gallery-panel-ruri"
          role="tabpanel"
          aria-labelledby="gallery-tab-ruri"
          className={activeTab === 'ruri' ? 'block' : 'hidden'}
        >
          <GalleryGrid
            salon="ruri"
            salonLabel="Nail salon Ruri"
            instagramUrl={siteConfig.salons.ruri.instagramUrl}
            instagramHandle={siteConfig.salons.ruri.instagramHandle}
          />
        </div>
      </div>

      <Divider className="max-w-xs mx-auto" />
    </section>
  );
}
