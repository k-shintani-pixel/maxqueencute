export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  salon: 'maxqueencute' | 'ruri';
};

// 後で差し替え: /public/gallery/ に画像を配置してください
export const galleryImages: GalleryImage[] = [
  { id: 'mqc1', src: '/gallery/mqc-01.jpg', alt: 'MaxQueenCute ネイルデザイン1', salon: 'maxqueencute' },
  { id: 'mqc2', src: '/gallery/mqc-02.jpg', alt: 'MaxQueenCute ネイルデザイン2', salon: 'maxqueencute' },
  { id: 'mqc3', src: '/gallery/mqc-03.jpg', alt: 'MaxQueenCute ネイルデザイン3', salon: 'maxqueencute' },
  { id: 'mqc4', src: '/gallery/mqc-04.jpg', alt: 'MaxQueenCute ネイルデザイン4', salon: 'maxqueencute' },
  { id: 'mqc5', src: '/gallery/mqc-05.jpg', alt: 'MaxQueenCute ネイルデザイン5', salon: 'maxqueencute' },
  { id: 'mqc6', src: '/gallery/mqc-06.jpg', alt: 'MaxQueenCute ネイルデザイン6', salon: 'maxqueencute' },
  { id: 'ruri1', src: '/gallery/ruri-01.jpg', alt: 'Nail salon Ruri ネイルデザイン1', salon: 'ruri' },
  { id: 'ruri2', src: '/gallery/ruri-02.jpg', alt: 'Nail salon Ruri ネイルデザイン2', salon: 'ruri' },
  { id: 'ruri3', src: '/gallery/ruri-03.jpg', alt: 'Nail salon Ruri ネイルデザイン3', salon: 'ruri' },
  { id: 'ruri4', src: '/gallery/ruri-04.jpg', alt: 'Nail salon Ruri ネイルデザイン4', salon: 'ruri' },
  { id: 'ruri5', src: '/gallery/ruri-05.jpg', alt: 'Nail salon Ruri ネイルデザイン5', salon: 'ruri' },
  { id: 'ruri6', src: '/gallery/ruri-06.jpg', alt: 'Nail salon Ruri ネイルデザイン6', salon: 'ruri' },
];
