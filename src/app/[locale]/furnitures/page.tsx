import BannerImg from '@/components/BannerImg';
import Highlighter from '@/components/Highlighter';
import image from '@/assets/modern-living-room-interior-design.png';

import img1 from '@/assets/image_1.png';
import img2 from '@/assets/image_2.png';
import img3 from '@/assets/image_3.png';
import img4 from '@/assets/image_4.png';
import img5 from '@/assets/image_5.png';
import img6 from '@/assets/image_6.png';
import img7 from '@/assets/image_7.png';
import Image from 'next/image';

import img8 from '@/assets/image_8.png';
import img9 from '@/assets/image_9.png';
import img10 from '@/assets/image_10.png';
import img11 from '@/assets/image_11.png';
import img12 from '@/assets/image_12.png';
import { useTranslations } from 'next-intl';

export default function Furnitures() {
  const t = useTranslations('furnitures');
  return (
    <div className='w-dvw bg-background'>
      <BannerImg src={image} title={t('main_title')} />

      <section className='py-10 md:py-16 xl:py-28'>
        <div className='flex justify-center items-center'>
          <Highlighter
            exagenrate
            title={t('title')}
            titleHighLighted={t('title_high')}
            desc={
              <>
                {t.rich('p1', {
                  b1: () => <br />,
                  b2: () => <br />,
                  b3: () => <br />,
                })}
              </>
            }
          />
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 py-14 px-4 lg:px-6 2xl:px-20'>
          <Image
            src={img1}
            alt=''
            className='col-span-2 aspect-square object-cover object-center'
            unoptimized
          />
          <Image
            src={img2}
            alt=''
            className='col-span-2 aspect-square object-cover object-center'
            unoptimized
          />
          <Image
            src={img3}
            alt=''
            className='col-span-2 aspect-square object-cover object-center'
            unoptimized
          />

          <Image
            src={img4}
            alt=''
            className='col-span-2 lg:col-span-3 aspect-square lg:aspect-auto object-cover object-center'
            unoptimized
          />
          <Image
            src={img5}
            alt=''
            className='col-span-2 lg:col-span-3 aspect-square lg:aspect-auto object-cover object-center'
            unoptimized
          />

          <Image
            src={img6}
            alt=''
            className='col-span-2 object-cover object-center'
            unoptimized
          />

          <Image
            src={img7}
            alt=''
            className='col-span-2 lg:col-span-4 aspect-square lg:aspect-auto object-contain object-top'
            unoptimized
          />
        </div>

        <div className='flex justify-center items-center'>
          <Highlighter
            exagenrate
            desc={
              <>
                {t.rich('p2', {
                  b1: () => <br />,
                  b2: () => <br />,
                })}
              </>
            }
          />
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 py-14 px-4 lg:px-6 2xl:px-20'>
          <Image
            src={img8}
            alt=''
            className='col-span-2 aspect-square object-cover object-center'
            unoptimized
          />
          <Image
            src={img9}
            alt=''
            className='col-span-2 aspect-square object-cover object-center'
            unoptimized
          />
          <Image
            src={img10}
            alt=''
            className='col-span-2 aspect-square object-cover object-center'
            unoptimized
          />

          <Image
            src={img11}
            alt=''
            className='col-span-2 lg:col-span-3 aspect-square lg:aspect-auto object-cover object-center'
            unoptimized
          />
          <Image
            src={img12}
            alt=''
            className='col-span-2 lg:col-span-3 aspect-square lg:aspect-auto object-contain object-top
            '
            unoptimized
          />
        </div>
      </section>
    </div>
  );
}
