import Image from 'next/image';
import HomeHeroBg from '@/assets/BgPhoto.png';
import { Red_Hat_Display } from 'next/font/google';
import { useTranslations } from 'next-intl';

const redHatDisplay = Red_Hat_Display({ subsets: ['latin'] });

export default function HomeHero() {
  const t = useTranslations('landing');
  return (
    <section className={`relative ${redHatDisplay.className}`}>
      <Image
        src={HomeHeroBg}
        alt={`${t('hero_title')} ${t('hero_highlight')}`}
        className='object-cover object-top h-screen'
      />
      <div className='absolute left-0 bottom-0 ml-4 mb-64 lg:ml-6 lg:mb-80 2xl:ml-20 2xl:mb-48'>
        <h1 className='text-4xl lg:text-7xl 2xl:text-8xl font-bold text-balance text-background lg:leading-snug xl:leading-snug 2xl:leading-snug leading-snug'>
          {t('hero_title')}{' '}
          <span className='text-foreground bg-background'>
            {t('hero_highlight')}
          </span>
        </h1>
      </div>
    </section>
  );
}
