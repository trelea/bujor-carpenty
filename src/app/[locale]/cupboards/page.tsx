import BannerImg from '@/components/BannerImg';
import image from '@/assets/vacant-integrated-wardrobe-extravagant-residence.png';
import Info from '@/components/Info';
import Highlighter from '@/components/Highlighter';
import Image from 'next/image';
import img1283 from '@/assets/IMG_1283.png';
import img1282 from '@/assets/IMG_1282.png';
import img0161 from '@/assets/IMG_0161.png';
import img0451 from '@/assets/IMG_0451.png';
import img0464 from '@/assets/IMG_0464.png';
import img2437 from '@/assets/IMG_2437.png';
import { useTranslations } from 'next-intl';

export default function Cupboards() {
  const t = useTranslations('cupboards');
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
                  br: () => <br />,
                })}
              </>
            }
          />
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 xl:gap-6 py-14 px-4 lg:px-6 2xl:px-20'>
          <Image
            src={img1283}
            alt=''
            className='col-span-2 shadow-xl aspect-square object-cover object-center border border-foreground/25'
            unoptimized
          />
          <Image
            src={img1282}
            alt=''
            className='col-span-2 shadow-xl aspect-square object-cover object-center border border-foreground/25'
            unoptimized
          />
          <Image
            src={img0161}
            alt=''
            className='col-span-2 shadow-xl aspect-square object-cover object-center border border-foreground/25'
            unoptimized
          />

          <Image
            src={img0451}
            alt=''
            className='col-span-2 lg:col-span-3 shadow-xl aspect-square lg:aspect-auto object-cover object-center border border-foreground/25'
            unoptimized
          />
          <Image
            src={img0464}
            alt=''
            className='col-span-2 lg:col-span-3 shadow-xl aspect-square lg:aspect-auto object-cover object-center border border-foreground/25'
            unoptimized
          />

          <Image
            src={img2437}
            alt=''
            className='col-span-2 shadow-xl aspect-square object-cover object-center border border-foreground/25'
            unoptimized
          />
        </div>
      </section>
    </div>
  );
}
