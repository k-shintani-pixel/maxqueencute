/**
 * ReservationCTA — Phase 1: HPBへの誘導ボタンを表示
 *
 * Phase 2 でAIコンシェルジュを追加する場合:
 * このコンポーネントを差し替えるだけで、サイト全体の予約フローを切り替えられます。
 * /src/components/concierge/ に実装を追加し、ここから import してください。
 */

import { FadeIn } from '@/components/ui/FadeIn';
import { siteConfig } from '@/config/site';

const LINE_SVG = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
  </svg>
);

export function ReservationCTA() {
  return (
    <section
      id="reservation"
      className="relative py-28 md:py-48 px-4 overflow-hidden"
      style={{
        background:
          'linear-gradient(160deg, #1C0A32 0%, #3A1C6A 30%, #6B4A9B 55%, #EDE6FA 78%, #FAF6F0 100%)',
      }}
      aria-labelledby="reservation-heading"
    >
      {/* Marble vein overlay */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: [
            'repeating-linear-gradient(108deg,transparent 0,transparent 55px,rgba(255,255,255,0.5) 55px,rgba(255,255,255,0.5) 56px)',
            'repeating-linear-gradient(72deg,transparent 0,transparent 90px,rgba(212,175,55,0.5) 90px,rgba(212,175,55,0.5) 91px)',
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
          <p className="font-serif-display text-xs tracking-[0.5em] uppercase mb-6" style={{ color: 'rgba(212,175,55,0.65)' }}>
            Reservation
          </p>
          <h2
            id="reservation-heading"
            className="font-script leading-tight mb-6"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', color: '#FAF6F0' }}
          >
            ご予約はこちら
          </h2>
          <p className="font-jp text-sm mb-14 leading-loose" style={{ color: 'rgba(250,246,240,0.7)' }}>
            24時間オンライン予約受付中
            <br />
            <span className="text-xs" style={{ color: 'rgba(250,246,240,0.45)' }}>両店舗共通の予約ページです</span>
          </p>
        </FadeIn>

        {/* Glass panel wrapping CTAs */}
        <FadeIn delay={0.1}>
          <div className="glass-card-dark rounded-sm p-8 md:p-12 max-w-md mx-auto">
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

            {/* LINE Button */}
            <a
              href={siteConfig.reservation.lineOfficialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-line-dark inline-flex items-center justify-center gap-3 w-full font-serif-display text-sm tracking-widest py-3 rounded-sm"
              aria-label="LINEでご相談・お問い合わせ（新しいタブで開く）"
            >
              {LINE_SVG}
              ご相談・お問い合わせはLINEで
            </a>
          </div>
        </FadeIn>

        {/* Footer note */}
        <FadeIn delay={0.25}>
          <p className="font-jp text-xs mt-8" style={{ color: 'rgba(212,175,55,0.4)' }}>
            ご不明な点はLINEまたはInstagramよりお気軽にどうぞ。
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
