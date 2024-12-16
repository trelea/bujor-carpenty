import BannerImg from '@/components/BannerImg';
import Highlighter from '@/components/Highlighter';
import Info from '@/components/Info';
import image from '@/assets/minimalist-bookcase-with-open-shelves-isolated-white-studio-background.png';
import img0450 from '@/assets/IMG_0450.png';
import img1183 from '@/assets/IMG_1183.png';
import img0464 from '@/assets/IMG_0464__.png';
import img1283 from '@/assets/IMG_1283__.png';
import img1282 from '@/assets/IMG_1282__.png';
import Image from 'next/image';
import dulap_model from '@/assets/dulap_model.png';
import dulap_frumos from '@/assets/dulap_frumos.png';
import dulap_plan from '@/assets/dulap_plan.png';
import { useTranslations } from 'next-intl';

export default function Libraries() {
  const t = useTranslations('libraries');
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
                {t.rich('p1', {
                  br: () => <br />,
                })}
              </>
            }
          />
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 xl:gap-6 py-14 px-4 lg:px-6 2xl:px-20'>
          <Image
            src={img0450}
            alt=''
            className='col-span-2 shadow-xl aspect-square object-cover object-center border border-foreground/25'
            unoptimized
          />
          <Image
            src={img1183}
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
            src={img1283}
            alt=''
            className='col-span-2 lg:col-span-3 shadow-xl aspect-square lg:aspect-auto object-cover object-center border border-foreground/25'
            unoptimized
          />
          <Image
            src={img1282}
            alt=''
            className='col-span-2 lg:col-span-3 shadow-xl aspect-square lg:aspect-auto object-cover object-center border border-foreground/25'
            unoptimized
          />
        </div>

        <div className='flex justify-center items-center'>
          <Highlighter
            exagenrate
            desc={
              <>
                {t.rich('p2', {
                  br: () => <br />,
                })}
              </>
            }
          />
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 lg:px-6 2xl:px-20 py-14'>
          <Image src={dulap_model} alt='' unoptimized />
          <Image src={dulap_frumos} alt='' unoptimized />
          <Image src={dulap_plan} alt='' unoptimized />
        </div>
      </section>
    </div>
  );
}
