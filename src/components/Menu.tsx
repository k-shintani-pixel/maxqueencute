'use client';

import { useState } from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { Frame } from '@/components/ui/Frame';
import { Button } from '@/components/ui/Button';
import { Divider } from '@/components/ui/Divider';
import { menuConfig } from '@/config/menu';
import { siteConfig } from '@/config/site';

type Tab = 'maxqueencute' | 'ruri';

function formatPrice(price: number): string {
  return `¥${price.toLocaleString('ja-JP')}`;
}

type MenuItem = (typeof menuConfig)[number];

function MenuCard({ item }: { item: MenuItem }) {
  const hasBadge = 'badge' in item && item.badge;
  const hasUnit = 'unit' in item && item.unit;
  const hasPriceNote = 'priceNote' in item && item.priceNote;

  return (
    <Frame variant="default" className="p-5 md:p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          {hasBadge && (
            <span className="inline-flex items-center gap-1 border border-gold-light px-2 py-0.5 mb-2">
              <span className="font-serif-display text-xs tracking-widest text-gold-light">
                {item.badge}
              </span>
            </span>
          )}
          <p className="font-jp text-sm md:text-base leading-relaxed" style={{ color: '#2A1F14' }}>{item.name}</p>
          {hasUnit && (
            <p className="font-serif-display text-xs mt-1 tracking-wide" style={{ color: 'rgba(90,69,53,0.6)' }}>
              {item.unit}
            </p>
          )}
        </div>
        <div className="flex-shrink-0 text-right">
          <p className="font-serif-display text-lg md:text-xl text-gold-dark font-medium tracking-wide">
            {formatPrice(item.price)}
            {hasPriceNote && <span className="text-sm">{item.priceNote}</span>}
          </p>
          <p className="font-serif-display text-xs mt-0.5" style={{ color: 'rgba(90,69,53,0.5)' }}>
            約{item.durationMin}分
          </p>
        </div>
      </div>
    </Frame>
  );
}

function MenuSection({ salon, label }: { salon: Tab; label: string }) {
  const items = menuConfig.filter((m) => m.salon === salon);
  const categories = [...new Set(items.map((m) => m.category))];

  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <h3 className="font-script text-3xl md:text-4xl" style={{ color: '#2A1F14' }}>{label}</h3>
        <div className="flex-1 h-px bg-gold-light/30" aria-hidden="true" />
      </div>

      {categories.map((cat) => (
        <div key={cat} className="mb-8">
          <p className="font-serif-display text-xs tracking-[0.4em] uppercase mb-4 pb-2 border-b border-secondary/20" style={{ color: 'rgba(90,69,53,0.6)' }}>
            {cat}
          </p>
          <div className="space-y-4">
            {items
              .filter((m) => m.category === cat)
              .map((item) => (
                <FadeIn key={item.id} delay={0.05}>
                  <MenuCard item={item} />
                </FadeIn>
              ))}
          </div>
        </div>
      ))}

      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <Button
          href={siteConfig.reservation.hpbUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          className="justify-center"
        >
          ホットペッパーで予約
        </Button>
        {salon === 'ruri' && (
          <Button
            href={siteConfig.reservation.lineOfficialUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            className="justify-center gap-2"
            aria-label="LINEでお問い合わせ（Nail salon Ruri）"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
            </svg>
            LINEで問い合わせ
          </Button>
        )}
      </div>
    </div>
  );
}

export function Menu() {
  const [activeTab, setActiveTab] = useState<Tab>('maxqueencute');

  return (
    <section
      id="menu"
      className="relative py-24 md:py-40 px-4"
      style={{ background: 'linear-gradient(180deg, #F0E9DC 0%, #FAF6F0 100%)' }}
      aria-labelledby="menu-heading"
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <FadeIn>
          <p className="font-serif-display text-xs tracking-[0.5em] text-gold-light uppercase text-center mb-4">
            Menu &amp; Price
          </p>
          <h2
            id="menu-heading"
            className="font-script text-5xl md:text-6xl text-center leading-tight mb-12"
            style={{ color: '#2A1F14' }}
          >
            メニュー・料金
          </h2>
        </FadeIn>

        {/* Tabs */}
        <FadeIn delay={0.1}>
          <div className="flex border-b border-gold-light/30 mb-10" role="tablist" aria-label="店舗切り替え">
            {([
              { id: 'maxqueencute' as Tab, label: 'MaxQueenCute 2F' },
              { id: 'ruri' as Tab, label: 'Nail salon Ruri 1F' },
            ] as const).map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={`panel-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 font-serif-display text-xs md:text-sm tracking-widest py-3 px-4 transition-all ${
                  activeTab === tab.id
                    ? 'text-gold-dark border-b-2 border-gold-light -mb-px'
                    : 'text-ink-sub/50 hover:text-ink-sub'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* MaxQueenCute panel */}
        <div
          id="panel-maxqueencute"
          role="tabpanel"
          aria-labelledby="tab-maxqueencute"
          className={activeTab === 'maxqueencute' ? 'block' : 'hidden'}
        >
          {/* Anchor for internal link from Salons */}
          <span id="menu-mqc" className="-mt-32 pt-32 block" aria-hidden="true" />
          <MenuSection salon="maxqueencute" label="MaxQueenCute" />
        </div>

        {/* Ruri panel */}
        <div
          id="panel-ruri"
          role="tabpanel"
          aria-labelledby="tab-ruri"
          className={activeTab === 'ruri' ? 'block' : 'hidden'}
        >
          {/* Anchor for internal link from Salons */}
          <span id="menu-ruri" className="-mt-32 pt-32 block" aria-hidden="true" />
          <MenuSection salon="ruri" label="Nail salon Ruri" />
        </div>

        {/* HPB common note */}
        <FadeIn delay={0.2}>
          <p className="font-jp text-xs text-center mt-8" style={{ color: 'rgba(90,69,53,0.5)' }}>
            ※ 予約はホットペッパービューティーより承ります（両店舗共通の予約ページ）
          </p>
        </FadeIn>
      </div>

      <Divider className="max-w-xs mx-auto" />
    </section>
  );
}
