import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Concept } from '@/components/Concept';
import { Salons } from '@/components/Salons';
import { Menu } from '@/components/Menu';
import { School } from '@/components/School';
import { Gallery } from '@/components/Gallery';
import { InstagramFeed } from '@/components/InstagramFeed';
import { Access } from '@/components/Access';
import { ReservationCTA } from '@/components/ReservationCTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Concept />
        <Salons />
        <Menu />
        <School />
        <Gallery />
        <InstagramFeed />
        <Access />
        <ReservationCTA />
      </main>
      <Footer />
    </>
  );
}
