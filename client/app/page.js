import Image from 'next/image';
import HeroSection from './components/HeroSection';
import Slide from './components/MarqueeSlide';
import Test from './components/Test';



export default function Home()
{
  return (
    <main className="">
      <div>
        <HeroSection />
        <Slide />

      </div>
    </main>
  );
}
