export const siteConfig = {
  brandName: 'MaxQueenCute / Nail salon Ruri',
  catchphrase: '10年続けても、爪が痛まないネイル。',

  salons: {
    maxqueencute: {
      name: 'MaxQueenCute',
      floor: '2F',
      tagline: '経験と技術が織りなす、上質なひととき',
      owner: '西本',
      instagramUrl: 'https://www.instagram.com/maxqueencute',
      instagramHandle: '@maxqueencute',
    },
    ruri: {
      name: 'Nail salon Ruri',
      floor: '1F',
      tagline: '新しい出会いを、お得な価格で',
      staff: 'あいり',
      instagramUrl: 'https://www.instagram.com/ruri2026.0108',
      instagramHandle: '@ruri2026.0108',
      isNewlyOpened: true,
    },
  },

  school: {
    name: 'Ruri Nail Method',
    representative: '西本',
    description: '長く美しい爪を育てる技術を、次の世代へ。',
  },

  access: {
    address: '千葉県浦安市高洲1-6-10',
    hours: '9:00 〜 18:30',
    closedDays: '年中無休',
    seats: '総数4席（ネイル4）',
    parking: '1台あり',
    payment: 'キャッシュレス決済のみ（現金不可）',
    paymentMethods: ['クレジットカード', 'PayPay', 'その他キャッシュレス各種'],
    notes: ['ポイント利用OK', '即時予約OK'],
    mapEmbedUrl: '[GOOGLE_MAPS_EMBED_URL]', // 後で差し替え
  },

  reservation: {
    hpbUrl: 'https://beauty.hotpepper.jp/kr/slnH000414809',
    lineOfficialUrl: 'https://lin.ee/8WRfXWj',
  },
} as const;
