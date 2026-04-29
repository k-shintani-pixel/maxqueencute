/**
 * ReservationCTA — Phase 1: HPBへの誘導ボタンを表示
 *
 * Phase 2 でAIコンシェルジュを追加する場合:
 * このコンポーネントを差し替えるだけで、サイト全体の予約フローを切り替えられます。
 * /src/components/concierge/ に実装を追加し、ここから import してください。
 */

import { FadeIn } from '@/components/ui/FadeIn';
import { siteConfig } from '@/config/site';

export function ReservationCTA() {
  return (
    <section
      id="reservation"
      className="relative py-14 md:py-20 px-4 overflow-hidden"
      style={{
        background:
          'linear-gradient(160deg, #FFF5F8 0%, #FDE8EE 40%, #F8D0DF 75%, #FDE0EB 100%)',
      }}
      aria-labelledby="reservation-heading"
    >
      {/* Marble vein overlay */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: [
            'repeating-linear-gradient(108deg,transparent 0,transparent 55px,rgba(255,220,230,0.4) 55px,rgba(255,220,230,0.4) 56px)',
            'repeating-linear-gradient(72deg,transparent 0,transparent 90px,rgba(212,175,55,0.4) 90px,rgba(212,175,55,0.4) 91px)',
          ].join(','),
        }}
        aria-hidden="true"
      />

      {/* Decorative background text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-script leading-none whitespace-nowrap"
          style={{ fontSize: 'clamp(5rem, 20vw, 22rem)', color: 'rgba(212,175,55,0.06)' }}
        >
          Reserve
        </span>
      </div>

      <div className="relative max-w-2xl mx-auto text-center">

        {/* Eyebrow */}
        <FadeIn>
          <p className="font-serif-display text-xs tracking-[0.5em] uppercase mb-6" style={{ color: '#9C7A1A' }}>
            Reservation
          </p>
          <h2
            id="reservation-heading"
            className="font-script leading-tight mb-6"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', color: '#3D2B2B' }}
          >
            ご予約はこちら
          </h2>
          <p className="font-jp text-sm mb-14 leading-loose" style={{ color: 'rgba(61,43,43,0.7)' }}>
            24時間オンライン予約受付中
            <br />
            <span className="text-xs" style={{ color: 'rgba(61,43,43,0.5)' }}>両店舗共通の予約ページです</span>
          </p>
        </FadeIn>

        {/* Glass panel wrapping CTAs */}
        <FadeIn delay={0.1}>
          <div className="glass-card rounded-sm p-8 md:p-12 max-w-md mx-auto">
            {/* HPB Button — gold shimmer */}
            <a
              href={siteConfig.reservation.hpbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center justify-center gap-3 w-full font-serif-display text-sm md:text-base tracking-widest py-4 md:py-5 rounded-sm mb-4"
              aria-label="ホットペッパービューティーで予約する（新しいタブで開く）"
            >
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <circle cx="10" cy="10" r="8.5" stroke="white" strokeWidth="1" />
                <path d="M6 10 L10 6 L14 10 M10 6 L10 14" stroke="white" strokeWidth="1.2" />
              </svg>
              ホットペッパービューティーで予約
            </a>

          </div>
        </FadeIn>

        {/* Footer note */}
        <FadeIn delay={0.25}>
          <p className="font-jp text-xs mt-8" style={{ color: 'rgba(107,78,78,0.5)' }}>
            ご不明な点はInstagramよりお気軽にどうぞ。
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
