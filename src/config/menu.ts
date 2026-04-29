export type Salon = 'maxqueencute' | 'ruri';
export type Staff = 'nishimoto' | 'airi';

export const staffConfig = {
  nishimoto: {
    displayName: '西本',
    salon: 'maxqueencute' as Salon,
    role: 'MaxQueenCute オーナー / Ruri Nail Method 代表講師',
  },
  airi: {
    displayName: 'あいり',
    salon: 'ruri' as Salon,
    role: 'Nail salon Ruri 担当ネイリスト',
  },
} as const;

export const menuConfig = [
  // MaxQueenCute
  {
    id: 'mqc-magnet-hand',
    salon: 'maxqueencute' as Salon,
    staff: 'nishimoto' as Staff,
    category: 'ジェル',
    name: '大人気No.1【enoi】マグネットワンカラーネイル（ハンド）',
    price: 8500,
    durationMin: 90,
  },
  {
    id: 'mqc-design-hand',
    salon: 'maxqueencute' as Salon,
    staff: 'nishimoto' as Staff,
    category: 'ジェル',
    name: '定額デザイン（カラー変更可、サンプル200種類から選択）',
    price: 10000,
    durationMin: 120,
  },
  {
    id: 'mqc-magnet-foot',
    salon: 'maxqueencute' as Salon,
    staff: 'nishimoto' as Staff,
    category: 'フット',
    name: '【enoi】マグネットワンカラー / ラメ（フット）',
    price: 8500,
    durationMin: 90,
  },
  {
    id: 'mqc-design-foot',
    salon: 'maxqueencute' as Salon,
    staff: 'nishimoto' as Staff,
    category: 'フット',
    name: '定額デザイン（サンプルから選択、フット）',
    price: 10000,
    durationMin: 120,
  },
  {
    id: 'mqc-curl',
    salon: 'maxqueencute' as Salon,
    staff: 'nishimoto' as Staff,
    category: 'その他',
    name: '巻き爪補正 B/Sケア',
    price: 4000,
    durationMin: 30,
    unit: '1本〜',
  },
  // Nail salon Ruri
  {
    id: 'ruri-onecolor',
    salon: 'ruri' as Salon,
    staff: 'airi' as Staff,
    category: 'Open記念価格',
    name: 'ワンカラーネイル',
    price: 4980,
    durationMin: 60,
    badge: 'Open記念価格',
  },
  {
    id: 'ruri-simple',
    salon: 'ruri' as Salon,
    staff: 'airi' as Staff,
    category: 'Open記念価格',
    name: '定額制シンプルプラン',
    price: 6500,
    durationMin: 90,
    badge: 'Open記念価格',
    priceNote: '〜',
  },
  {
    id: 'ruri-omakase',
    salon: 'ruri' as Salon,
    staff: 'airi' as Staff,
    category: 'Open記念価格',
    name: 'お任せデザイン（2回目以降のお客様限定）',
    price: 6500,
    durationMin: 90,
    badge: 'Open記念価格',
    priceNote: '〜',
  },
] as const;
