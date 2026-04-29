export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  salon: 'maxqueencute' | 'ruri';
};

// 後で差し替え: /public/gallery/ に画像を配置してください
export const galleryImages: GalleryImage[] = [
  { id: 'g1', src: '/gallery/01.jpg', alt: 'ネイルデザイン1', salon: 'maxqueencute' },
  { id: 'g2', src: '/gallery/02.jpg', alt: 'ネイルデザイン2', salon: 'maxqueencute' },
  { id: 'g3', src: '/gallery/03.jpg', alt: 'ネイルデザイン3', salon: 'maxqueencute' },
  { id: 'g4', src: '/gallery/04.jpg', alt: 'ネイルデザイン4', salon: 'ruri' },
  { id: 'g5', src: '/gallery/05.jpg', alt: 'ネイルデザイン5', salon: 'ruri' },
  { id: 'g6', src: '/gallery/06.jpg', alt: 'ネイルデザイン6', salon: 'maxqueencute' },
  { id: 'g7', src: '/gallery/07.jpg', alt: 'ネイルデザイン7', salon: 'ruri' },
  { id: 'g8', src: '/gallery/08.jpg', alt: 'ネイルデザイン8', salon: 'maxqueencute' },
  { id: 'g9', src: '/gallery/09.jpg', alt: 'ネイルデザイン9', salon: 'ruri' },
];
