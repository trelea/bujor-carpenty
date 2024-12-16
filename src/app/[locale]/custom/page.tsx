import BannerImg from '@/components/BannerImg';
import Highlighter from '@/components/Highlighter';
import Info from '@/components/Info';
import image from '@/assets/minimalist-interior-design.png';
import Image from 'next/image';
import img2804 from '@/assets/IMG_2804.png';
import imgimg from '@/assets/image.png';
import img0161 from '@/assets/IMG_0161.png';
import img2618 from '@/assets/IMG_2618.png';
import img1183 from '@/assets/IMG_1183__.png';
import img0171 from '@/assets/IMG_0171.png';
import img2510 from '@/assets/IMG_2510.png';
import img1169 from '@/assets/IMG_1169.png';
import { useTranslations } from 'next-intl';

export default function Custom() {
  const t = useTranslations('custom');
  return (
    <div className='w-dvw bg-background'>
      <BannerImg src={image} title={t('main_title')} />
      <Info
        desc={[
          <>
            {t.rich('desc', {
              b: (_) => <b>{_}</b>,
            })}
          </>,
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
            src={img2804}
            alt=''
            className='col-span-2 shadow-xl aspect-square object-cover object-center border border-foreground/25'
            unoptimized
          />
          <Image
            src={imgimg}
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
            src={img2618}
            alt=''
            className='col-span-2 lg:col-span-3 shadow-xl aspect-square lg:aspect-auto object-cover object-center border border-foreground/25'
            unoptimized
          />
          <Image
            src={img1183}
            alt=''
            className='col-span-2 lg:col-span-3 shadow-xl aspect-square lg:aspect-auto object-cover object-center border border-foreground/25'
            unoptimized
          />

          <Image
            src={img0171}
            alt=''
            className='col-span-2 aspect-square lg:col-span-4 lg:aspect-auto shadow-xl object-cover object-center border border-foreground/25'
            unoptimized
          />

          <Image
            src={img2510}
            alt=''
            className='col-span-2 shadow-xl aspect-square object-cover object-center border border-foreground/25'
            unoptimized
          />

          <Image
            src={img1169}
            alt=''
            className='col-span-2 shadow-xl aspect-square object-cover object-center border border-foreground/25'
            unoptimized
          />
        </div>
      </section>
    </div>
  );
}
