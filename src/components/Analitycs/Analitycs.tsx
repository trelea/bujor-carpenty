import Image, { StaticImageData } from 'next/image';
import Analitycs_ from '@/assets/analitycs.png';
import Satisfy from '@/assets/Satisfy.png';
import Experience from '@/assets/Experience.png';
import Clients from '@/assets/Clients.png';
import React from 'react';
import { Red_Hat_Display } from 'next/font/google';
import { useTranslations } from 'next-intl';

const rhd = Red_Hat_Display({ subsets: ['latin'] });

function Chart({
  src,
  title,
  inverse,
}: {
  src: StaticImageData;
  title: React.ReactNode;
  inverse?: boolean;
}) {
  return (
    <div
      className={`flex-1 flex flex-col ${
        inverse && 'max-w-sm:flex-col-reverse'
      } justify-center items-center gap-4`}
    >
      <h1
        className={`text-balance text-center font-semibold text-base md:text-lg xl:text-xl text-white ${rhd.className}`}
      >
        {title}
      </h1>
      <Image src={src} alt={src.blurDataURL as string} />
    </div>
  );
}

export default function Analitycs() {
  const t = useTranslations('landing.analityc');
  return (
    <section className='bg-background py-10 md:py-20 xl:py-32'>
      <div className='relative'>
        <Image
          src={Analitycs_}
          alt={Analitycs_.blurDataURL as string}
          className='object-cover min-h-80'
        />

        <div className='absolute top-0 right-0 left-0 bottom-0 h-full w-full bg-foreground/75'>
          <div className='flex justify-between h-full items-center px-6 sm:px-10 md:px-20 lg:px-44 xl:px-64 2xl:px-96 gap-10'>
            <Chart
              title={<>{t.rich('a1', { br: () => <br /> })}</>}
              src={Satisfy}
            />
            <Chart
              title={<>{t.rich('a2', { br: () => <br /> })}</>}
              src={Experience}
            />
            <Chart
              title={<>{t.rich('a3', { br: () => <br /> })}</>}
              src={Clients}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
