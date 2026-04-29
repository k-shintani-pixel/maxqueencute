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
          <p className="font-jp text-sm md:text-base text-text-primary leading-relaxed">{item.name}</p>
          {hasUnit && (
            <p className="font-serif-display text-xs text-text-secondary/60 mt-1 tracking-wide">
              {item.unit}
            </p>
          )}
        </div>
        <div className="flex-shrink-0 text-right">
          <p className="font-serif-display text-lg md:text-xl text-gold-dark font-medium tracking-wide">
            {formatPrice(item.price)}
            {hasPriceNote && <span className="text-sm">{item.priceNote}</span>}
          </p>
          <p className="font-serif-display text-xs text-text-secondary/50 mt-0.5">
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
        <h3 className="font-script text-3xl md:text-4xl text-text-primary">{label}</h3>
        <div className="flex-1 h-px bg-gold-light/30" aria-hidden="true" />
      </div>

      {categories.map((cat) => (
        <div key={cat} className="mb-8">
          <p className="font-serif-display text-xs tracking-[0.4em] text-text-secondary/60 uppercase mb-4 pb-2 border-b border-secondary/20">
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

      <div className="mt-6">
        <Button
          href={siteConfig.reservation.hpbUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          className="w-full md:w-auto justify-center"
        >
          ホットペッパーで予約
        </Button>
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
            className="font-script text-5xl md:text-6xl text-text-primary text-center leading-tight mb-12"
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
                    : 'text-text-secondary/50 hover:text-text-secondary'
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
          <p className="font-jp text-xs text-text-secondary/50 text-center mt-8">
            ※ 予約はホットペッパービューティーより承ります（両店舗共通の予約ページ）
          </p>
        </FadeIn>
      </div>

      <Divider className="max-w-xs mx-auto" />
    </section>
  );
}
