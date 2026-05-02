import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | MaxQueenCute / Nail salon Ruri',
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <div className="bg-base min-h-screen py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <header className="mb-12 text-center">
          <p className="font-serif-display text-xs tracking-[0.3em] text-gray-400 uppercase mb-3">
            Legal
          </p>
          <h1 className="font-script text-4xl text-accent-light mb-2">Privacy Policy</h1>
          <p className="font-serif-jp text-sm text-gray-500">プライバシーポリシー</p>
        </header>

        <div className="space-y-10 font-serif-jp text-sm leading-loose text-gray-900">
          <section>
            <p>
              MaxQueenCute / Nail salon Ruri（以下「当サロン」）は、本ウェブサイト（以下「本サイト」）における個人情報の取り扱いについて、以下のとおり定めます。
            </p>
          </section>

          <section>
            <h2 className="font-serif-display text-xs tracking-widest text-accent-light uppercase mb-4">
              1. 収集する情報
            </h2>
            <p>本サイトでは、以下の情報を収集することがあります。</p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-gray-700">
              <li>アクセスログ（IPアドレス、ブラウザ種別、参照元URL、閲覧ページ等）</li>
              <li>Cookie およびこれに類する技術により収集される情報</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif-display text-xs tracking-widest text-accent-light uppercase mb-4">
              2. 利用目的
            </h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>本サイトの利用状況の分析・改善</li>
              <li>サービスに関する情報のご提供</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif-display text-xs tracking-widest text-accent-light uppercase mb-4">
              3. アクセス解析ツールについて
            </h2>
            <p>
              本サイトでは、Vercel, Inc. が提供するアクセス解析サービス「Vercel Analytics」を利用しています。Vercel Analytics はページビューや参照元などの統計情報を収集しますが、個人を特定する情報は収集しません。収集されるデータは Vercel のプライバシーポリシーに従って管理されます。
            </p>
          </section>

          <section>
            <h2 className="font-serif-display text-xs tracking-widest text-accent-light uppercase mb-4">
              4. 第三者提供
            </h2>
            <p>
              当サロンは、法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供しません。
            </p>
          </section>

          <section>
            <h2 className="font-serif-display text-xs tracking-widest text-accent-light uppercase mb-4">
              5. Cookie について
            </h2>
            <p>
              本サイトでは、Instagram の埋め込みコンテンツ表示のために Meta Platforms, Inc. のスクリプトを使用しています。これにより第三者 Cookie が設定される場合があります。ブラウザの設定により Cookie を無効にすることができますが、一部機能が正常に動作しない場合があります。
            </p>
          </section>

          <section>
            <h2 className="font-serif-display text-xs tracking-widest text-accent-light uppercase mb-4">
              6. プライバシーポリシーの変更
            </h2>
            <p>
              当サロンは、必要に応じて本ポリシーを変更することがあります。変更後のポリシーは本ページに掲載した時点で効力を生じます。
            </p>
          </section>

          <p className="text-xs text-gray-400 pt-4 border-t border-gray-200">
            制定日：2026年5月
          </p>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="font-serif-display text-xs tracking-widest text-gray-400 hover:text-accent-light transition-colors uppercase"
          >
            ← Back to Top
          </Link>
        </div>
      </div>
    </div>
  );
}
