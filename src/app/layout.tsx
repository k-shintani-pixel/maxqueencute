import type { Metadata } from 'next';
import { Italianno, Cormorant_Garamond, Noto_Serif_JP } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const italianno = Italianno({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-italianno',
  display: 'swap',
});

const cormorantGaramond = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
});

const notoSerifJP = Noto_Serif_JP({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-noto-serif-jp',
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://maxqueencute.vercel.app'), // 後でVercelの実際のURLに差し替え
  title: 'MaxQueenCute / Nail salon Ruri | 千葉県浦安市のネイルサロン',
  description:
    '千葉県浦安市高洲のネイルサロン。1F「Nail salon Ruri」(Open記念価格 ¥4,980〜)、2F「MaxQueenCute」(マグネットネイル ¥8,500〜)。10年続けても爪が痛まないネイルをお届けします。',
  openGraph: {
    title: 'MaxQueenCute / Nail salon Ruri | 千葉県浦安市のネイルサロン',
    description:
      '千葉県浦安市高洲のネイルサロン。1F「Nail salon Ruri」(Open記念価格 ¥4,980〜)、2F「MaxQueenCute」(マグネットネイル ¥8,500〜)。10年続けても爪が痛まないネイルをお届けします。',
    type: 'website',
    locale: 'ja_JP',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MaxQueenCute / Nail salon Ruri',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MaxQueenCute / Nail salon Ruri | 千葉県浦安市のネイルサロン',
    description:
      '千葉県浦安市高洲のネイルサロン。1F「Nail salon Ruri」(Open記念価格 ¥4,980〜)、2F「MaxQueenCute」(マグネットネイル ¥8,500〜)。',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${italianno.variable} ${cormorantGaramond.variable} ${notoSerifJP.variable}`}
    >
      <body>
        {children}
        <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
