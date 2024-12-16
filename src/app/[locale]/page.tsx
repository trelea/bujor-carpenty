import AboutUs from '@/components/AboutUs/AboutUs';
import Analitycs from '@/components/Analitycs/Analitycs';
import HomeHero from '@/components/HomeHero';
import WhyUs from '@/components/WhyUs/WhyUs';
import Work from '@/components/Work/Work';

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <AboutUs />
      <WhyUs />
      <Work />
      <Analitycs />
    </>
  );
}
