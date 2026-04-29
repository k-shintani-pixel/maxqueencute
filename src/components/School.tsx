import { FadeIn } from '@/components/ui/FadeIn';
import { Frame } from '@/components/ui/Frame';
import { Button } from '@/components/ui/Button';
import { Divider } from '@/components/ui/Divider';
import { InstagramEmbed } from '@/components/ui/InstagramEmbed';
import { siteConfig } from '@/config/site';
import { InstagramIcon } from '@/components/ui/InstagramIcon';

type Course = {
  title: string;
  detail: string;
  note?: string;
  isSpecial?: boolean;
};

const courses: Course[] = [
  {
    title: '3か月コース',
    detail: '全12回',
    note: '基礎から実践まで、体系的に学ぶ標準コース',
  },
  {
    title: '4か月コース',
    detail: '全15回',
    note: 'より丁寧に・深く技術を習得したい方へ',
  },
  {
    title: '夏季限定 特別募集',
    detail: '最大3名まで・モニター価格',
    note: '※ 説明会参加者のみへのご案内',
    isSpecial: true,
  },
];

export function School() {
  return (
    <section
      id="school"
      className="relative py-24 md:py-40 px-4 bg-base"
      aria-labelledby="school-heading"
    >
      {/* Decorative background text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span className="font-script text-[16vw] leading-none opacity-[0.03]" style={{ color: '#2A1F14' }}>
          School
        </span>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <FadeIn>
          <p className="font-serif-display text-xs tracking-[0.5em] text-gold-light uppercase text-center mb-4">
            Nail School
          </p>
          <h2
            id="school-heading"
            className="font-script text-5xl md:text-7xl text-center leading-tight mb-4"
            style={{ color: '#2A1F14' }}
          >
            {siteConfig.school.name}
          </h2>
          <p className="font-jp text-sm text-center tracking-wide mb-4" style={{ color: '#5A4535' }}>
            代表講師：{siteConfig.school.representative}
          </p>
          <p className="font-jp text-sm text-center max-w-xl mx-auto mb-16 leading-loose" style={{ color: 'rgba(90,69,53,0.7)' }}>
            {siteConfig.school.description}
            <br />
            技術を、愛を、次の世代へ。
          </p>
        </FadeIn>

        {/* Courses */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {courses.map((course, i) => (
            <FadeIn key={course.title} delay={i * 0.1}>
              <Frame
                variant={course.isSpecial ? 'light' : 'default'}
                className={`p-6 md:p-8 h-full ${course.isSpecial ? 'border-accent-light' : ''}`}
                style={course.isSpecial ? { background: 'linear-gradient(135deg, #FAF6F0 0%, #F5EFFA 100%)' } : {}}
              >
                {course.isSpecial && (
                  <div className="flex items-center gap-1.5 mb-4">
                    <span className="text-accent-dark text-xs" aria-hidden="true">✦</span>
                    <span className="font-serif-display text-xs tracking-widest text-accent-dark uppercase">
                      Special
                    </span>
                    <span className="text-accent-dark text-xs" aria-hidden="true">✦</span>
                  </div>
                )}
                <h3 className="font-serif-display text-base md:text-lg tracking-wider mb-2" style={{ color: '#2A1F14' }}>
                  {course.title}
                </h3>
                <p className="font-script text-2xl text-gold-light mb-3">{course.detail}</p>
                {course.note && (
                  <p className="font-jp text-xs leading-relaxed" style={{ color: 'rgba(90,69,53,0.6)' }}>{course.note}</p>
                )}
              </Frame>
            </FadeIn>
          ))}
        </div>

        {/* Instagram embed */}
        <FadeIn delay={0.2}>
          <div className="mb-16">
            <p className="font-serif-display text-xs tracking-[0.5em] text-gold-light uppercase text-center mb-8">
              スクールの様子
            </p>
            <InstagramEmbed
              postUrl="https://www.instagram.com/p/DXse8qqExXP/"
              className="flex justify-center"
            />
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.3}>
          <div className="text-center">
            <Frame variant="light" className="inline-block px-8 md:px-16 py-8 md:py-10">
              <p className="font-jp text-sm md:text-base leading-loose mb-6" style={{ color: '#2A1F14' }}>
                ご興味のある方は、LINEまたはInstagramより
                <br />
                お気軽にメッセージをお寄せください。
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  href={siteConfig.reservation.lineOfficialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  className="gap-2"
                  aria-label="LINEでお問い合わせ"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                  </svg>
                  LINEでお問い合わせ
                </Button>
                <Button
                  href={siteConfig.salons.maxqueencute.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  className="gap-2"
                  aria-label="Instagramでお問い合わせ"
                >
                  <InstagramIcon size={16} aria-hidden={true} />
                  Instagramで見る
                </Button>
              </div>
            </Frame>
          </div>
        </FadeIn>
      </div>

      <Divider className="max-w-xs mx-auto" />
    </section>
  );
}
