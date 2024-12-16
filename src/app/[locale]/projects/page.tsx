import BannerImg from '@/components/BannerImg';
import Highlighter from '@/components/Highlighter';
import Info from '@/components/Info';
import image from '@/assets/man-engraving-wood-outdoors.png';
import plan1 from '@/assets/plan1.png';
import plan2 from '@/assets/plan2.png';
import plan3 from '@/assets/plan3.png';
import plan4 from '@/assets/plan4.png';
import plan5 from '@/assets/plan5.png';
import plan6 from '@/assets/plan6.png';
import plan7 from '@/assets/plan7.png';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Projects() {
  const t = useTranslations('projects');
  return (
    <div className='w-dvw bg-background'>
      <BannerImg src={image} title={t('main_title')} />
      <Info
        desc={[
          <>
            {t.rich('desc1', {
              b: (_) => <b>{_}</b>,
            })}
          </>,
          <>
            {t.rich('desc2', {
              b: (_) => <b>{_}</b>,
            })}
          </>,
          <>
            {t.rich('desc3', {
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
          />
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6  py-14 px-4 lg:px-6 2xl:px-20'>
          <Image src={plan1} alt='' className='col-span-2' unoptimized />
          <Image src={plan2} alt='' className='col-span-2' unoptimized />
          <Image src={plan3} alt='' className='col-span-2' unoptimized />

          <Image
            src={plan4}
            alt=''
            className='col-span-2 lg:col-span-3 aspect-square lg:aspect-auto object-cover object-center'
            unoptimized
          />
          <Image
            src={plan5}
            alt=''
            className='col-span-2 lg:col-span-3 aspect-square lg:aspect-auto object-cover object-center sm:pr-2 lg:pr-0'
            unoptimized
          />

          <Image
            src={plan6}
            alt=''
            className='col-span-2 aspect-square lg:col-span-4 lg:aspect-auto object-cover object-center sm:pl-1 lg:pl-0'
            unoptimized
          />

          <Image
            src={plan7}
            alt=''
            className='col-span-2 aspect-square object-cover object-center'
            unoptimized
          />
        </div>
      </section>
    </div>
  );
}
