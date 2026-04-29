# MaxQueenCute / Nail salon Ruri — 公式サイト

千葉県浦安市高洲のネイルサロン「MaxQueenCute」「Nail salon Ruri」とスクール「Ruri Nail Method」の公式サイトです。

## 技術スタック

- Next.js 16 (App Router) + TypeScript strict mode
- Tailwind CSS v4（CSS-based設定）
- Framer Motion（スクロールアニメーション）
- next/font（Italianno, Cormorant Garamond, Noto Serif JP）

## 開発

```bash
npm run dev   # 開発サーバー起動（http://localhost:3000）
npm run build # 本番ビルド
npm run lint  # ESLint
```

---

## プレースホルダー置換場所一覧

| 項目 | ファイル | 変数/コメント |
|------|---------|-------------|
| Google Maps埋め込み | `src/config/site.ts` | `mapEmbedUrl: '[GOOGLE_MAPS_EMBED_URL]'` |
| Google Maps iframeコード | `src/components/Access.tsx` | コメント内のiframeテンプレート |
| Instagram埋め込みコード | `src/components/InstagramFeed.tsx` | `{/* ここにSnapWidget等のコードを貼り付け */}` |
| ギャラリー画像 | `public/gallery/01.jpg〜09.jpg` | プレースホルダーSVGを実写真に差し替え |
| OGP画像 | `public/og-image.png` | 1200×630px の実画像に差し替え |
| Vercel URL | `src/app/layout.tsx` | `metadataBase: new URL('https://maxqueencute.vercel.app')` |
| HPBリンク | `src/config/site.ts` | `reservation.hpbUrl`（現在設定済み） |
| LINEリンク | `src/config/site.ts` | `reservation.lineOfficialUrl`（現在設定済み） |
| コンセプト文章 | `src/components/Concept.tsx` | "仮テキスト"を差し替え |
| favicon | `src/app/favicon.ico` | 実際のfaviconに差し替え |

---

## Phase 2: AIコンシェルジュ追加手順

### 準備済みのディレクトリ

```
src/components/concierge/   # チャットUIコンポーネント
src/lib/concierge/          # APIクライアント・型定義
src/app/api/concierge/      # APIエンドポイント
```

詳細は `src/components/concierge/README.md` を参照。

### 実装手順概要

1. **APIエンドポイント作成** — `src/app/api/concierge/route.ts`
   - Claude API（`claude-sonnet-4-6`等）を呼び出す
   - `src/config/menu.ts` の `menuConfig` でメニュー情報をシステムプロンプトに注入
   - スタッフ振り分けは `staffConfig` を参照

2. **チャットUIコンポーネント作成** — `src/components/concierge/ConciergeWidget.tsx`
   - モーダルまたはスライドインのチャットウィジェット

3. **ReservationCTA切り替え** — `src/components/ReservationCTA.tsx`
   - HPBボタンをコンシェルジュ起動ボタンに差し替え（コンポーネントが独立済みのため1ファイル変更で完了）

### メニューデータの活用

`src/config/menu.ts` の型定義はPhase 1（メニュー表示）とPhase 2（AI振り分け）の両方に対応：

```typescript
// Phase 2でのシステムプロンプト生成例
const menuContext = menuConfig.map(m =>
  `${m.name}: ¥${m.price}（${m.durationMin}分）— ${staffConfig[m.staff].displayName}担当`
).join('\n');
```
