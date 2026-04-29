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
        <span className="font-script text-[16vw] leading-none opacity-[0.03]" style={{ color: '#3D2B2B' }}>
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
            style={{ color: '#3D2B2B' }}
          >
            {siteConfig.school.name}
          </h2>
          <p className="font-jp text-sm text-center tracking-wide mb-4" style={{ color: '#6B4E4E' }}>
            代表講師：{siteConfig.school.representative}
          </p>
          <p className="font-jp text-sm text-center max-w-xl mx-auto mb-16 leading-loose" style={{ color: 'rgba(107,78,78,0.7)' }}>
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
                style={course.isSpecial ? { background: 'linear-gradient(135deg, #FDF2F4 0%, #FADADD 100%)' } : {}}
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
                <h3 className="font-serif-display text-base md:text-lg tracking-wider mb-2" style={{ color: '#3D2B2B' }}>
                  {course.title}
                </h3>
                <p className="font-script text-2xl text-gold-light mb-3">{course.detail}</p>
                {course.note && (
                  <p className="font-jp text-xs leading-relaxed" style={{ color: 'rgba(107,78,78,0.6)' }}>{course.note}</p>
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
              imageOnly
            />
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.3}>
          <div className="text-center">
            <Frame variant="light" className="inline-block px-8 md:px-16 py-8 md:py-10">
              <p className="font-jp text-sm md:text-base leading-loose mb-6" style={{ color: '#3D2B2B' }}>
                ご興味のある方は、Instagramより
                <br />
                お気軽にメッセージをお寄せください。
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
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
