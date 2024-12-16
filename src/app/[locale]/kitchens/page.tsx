import BannerImg from '@/components/BannerImg';
import Info from '@/components/Info';
import image from '@/assets/photorealistic-wooden-house-interior-with-timber-decor-furnishings 1.png';
import Highlighter from '@/components/Highlighter';
import img0378 from '@/assets/IMG_0378.png';
import img2539 from '@/assets/IMG_2539.png';
import img0464 from '@/assets/IMG_0464__.png';
import img2618 from '@/assets/IMG_2618.png';
import img2617 from '@/assets/IMG_2617.png';
import img2553 from '@/assets/IMG_2553.png';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Kitchens() {
  const t = useTranslations('kitchens');
  return (
    <div className='w-dvw bg-background'>
      <BannerImg src={image} title={t('main_title')} />
      <Info
        desc={[
          <>
            {t.rich('desc1', {
              b: (_) => <b className='font-semibold'>{_}</b>,
            })}
          </>,
          <>{t('desc2')}</>,
        ]}
      />
      <section className='py-10 md:py-16 xl:py-28'>
        <div className='flex justify-center items-center'>
          <Highlighter
            exagenrate
            title={t('title')}
            titleHighLighted={t('title_high')}
            desc={
              <>
                {t.rich('p', {
                  b1: () => <br />,
                  b2: () => <br />,
                })}
              </>
            }
          />
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 xl:gap-6 py-14 px-4 lg:px-6 2xl:px-20'>
          <Image
            src={img0378}
            alt=''
            className='col-span-2 shadow-xl aspect-square object-cover object-center border border-foreground/25'
            unoptimized
          />
          <Image
            src={img2539}
            alt=''
            className='col-span-2 shadow-xl aspect-square object-cover object-center border border-foreground/25'
            unoptimized
          />
          <Image
            src={img0464}
            alt=''
            className='col-span-2 shadow-xl aspect-square object-cover object-center border border-foreground/25'
            unoptimized
          />

          <Image
            src={img2618}
            alt=''
            className='col-span-2 lg:col-span-3 shadow-xl aspect-square lg:aspect-auto object-cover object-center border border-foreground/25'
            unoptimized
          />
          <Image
            src={img2617}
            alt=''
            className='col-span-2 lg:col-span-3 shadow-xl aspect-square lg:aspect-auto object-cover object-center border border-foreground/25'
            unoptimized
          />

          <Image
            src={img2553}
            alt=''
            className='col-span-2 shadow-xl aspect-square object-cover object-center border border-foreground/25'
            unoptimized
          />
        </div>
      </section>
    </div>
  );
}
