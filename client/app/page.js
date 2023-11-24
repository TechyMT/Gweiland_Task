import Image from 'next/image';
import HeroSection from './components/HeroSection';
import Slide from './components/Slide';
import SlideShowCards from './components/SlideShowCards';


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
