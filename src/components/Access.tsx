import { FadeIn } from '@/components/ui/FadeIn';
import { Frame } from '@/components/ui/Frame';
import { Divider } from '@/components/ui/Divider';
import { siteConfig } from '@/config/site';
import { MapPin, Clock, Car, CreditCard, CheckCircle } from 'lucide-react';

type InfoRow = {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
};

export function Access() {
  const { access } = siteConfig;

  const infoRows: InfoRow[] = [
    {
      icon: <MapPin size={16} aria-hidden="true" />,
      label: '住所',
      value: access.address,
    },
    {
      icon: <Clock size={16} aria-hidden="true" />,
      label: '営業時間',
      value: (
        <>
          {access.hours}
          <span className="ml-2 font-serif-display text-xs tracking-wide text-accent-dark">
            {access.closedDays}
          </span>
        </>
      ),
    },
    {
      icon: <Car size={16} aria-hidden="true" />,
      label: '駐車場',
      value: access.parking,
    },
    {
      icon: (
        <CreditCard size={16} aria-hidden="true" />
      ),
      label: 'お支払い',
      value: (
        <div>
          <span className="inline-block bg-ink text-base text-xs px-2 py-0.5 font-serif-display tracking-wider mb-2">
            現金不可
          </span>
          <p className="font-jp text-sm text-ink-sub">{access.payment}</p>
          <ul className="mt-1 space-y-0.5">
            {access.paymentMethods.map((method) => (
              <li key={method} className="font-jp text-xs text-ink-sub/60">
                ・{method}
              </li>
            ))}
          </ul>
        </div>
      ),
    },
  ];

  return (
    <section
      id="access"
      className="relative py-12 md:py-16 px-4"
      style={{ background: 'linear-gradient(180deg, #FDF2F4 0%, #FFFFFF 100%)' }}
      aria-labelledby="access-heading"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <FadeIn>
          <p className="font-serif-display text-xs tracking-[0.5em] text-gold-light uppercase text-center mb-4">
            Access
          </p>
          <h2
            id="access-heading"
            className="font-script text-5xl md:text-6xl text-ink text-center leading-tight mb-12"
          >
            アクセス
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Map */}
          <FadeIn delay={0.1} direction="right">
            <Frame variant="default" className="overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.509127398556!2d139.91295177436197!3d35.63982597260068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60187db5e324969b%3A0x96e9715b344bd1dc!2z44CSMjc5LTAwMjMg5Y2D6JGJ55yM5rWm5a6J5biC6auY5rSy77yR5LiB55uu77yW4oiS77yR77yQ!5e0!3m2!1sja!2sjp!4v1777463847408!5m2!1sja!2sjp"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MaxQueenCute / Nail salon Ruri へのアクセス"
              />
            </Frame>
          </FadeIn>

          {/* Info */}
          <FadeIn delay={0.2} direction="left">
            <Frame variant="default" className="p-6 md:p-8">
              {/* Notes badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {access.notes.map((note) => (
                  <span
                    key={note}
                    className="inline-flex items-center gap-1 border border-accent-dark/40 px-3 py-1"
                  >
                    <CheckCircle size={12} className="text-accent-dark" aria-hidden="true" />
                    <span className="font-serif-display text-xs tracking-wide text-accent-dark">
                      {note}
                    </span>
                  </span>
                ))}
              </div>

              <dl className="space-y-5">
                {infoRows.map((row) => (
                  <div key={row.label} className="flex gap-3">
                    <dt className="flex-shrink-0 flex items-start gap-2 pt-0.5 w-28">
                      <span className="text-gold-light">{row.icon}</span>
                      <span className="font-serif-display text-xs tracking-widest text-ink-sub/60 uppercase">
                        {row.label}
                      </span>
                    </dt>
                    <dd className="flex-1 font-jp text-sm text-ink">{row.value}</dd>
                  </div>
                ))}
              </dl>

            </Frame>
          </FadeIn>
        </div>
      </div>

      <Divider className="max-w-xs mx-auto" />
    </section>
  );
}
