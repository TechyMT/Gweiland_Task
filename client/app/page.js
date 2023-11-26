import Image from 'next/image';
import HeroSection from './components/HeroSection';
import Slide from './components/Slide';


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
