# AIコンシェルジュ機能

AIコンシェルジュ機能を後で実装するためのディレクトリです。Phase 2で実装予定。

## Phase 2 実装方針

1. `/src/components/concierge/` に以下を追加
   - `ConciergeWidget.tsx` — チャットUI本体
   - `ConciergeButton.tsx` — 起動ボタン
   - `ConciergeBubble.tsx` — メッセージバブル

2. `/src/lib/concierge/` に以下を追加
   - `client.ts` — APIクライアント
   - `types.ts` — 型定義
   - `intent.ts` — 意図分類ロジック

3. `/src/app/api/concierge/` に以下を追加
   - `route.ts` — Claude API呼び出しエンドポイント

4. `ReservationCTA.tsx` を更新
   - HPBボタンをコンシェルジュ起動ボタンに切り替え

## メニューデータの活用

`/src/config/menu.ts` の `menuConfig` と `staffConfig` は
Phase 1のメニュー表示と Phase 2のAI振り分けの両方で使えるよう設計済みです。
