import Banner from '../Banner';
import WoodFurniture from '@/assets/BgWoodFurniture.png';
import Highlighter from '../Highlighter';
import { StaticImageData } from 'next/image';
import C1 from '@/assets/cards/IMG_0450.png';
import C2 from '@/assets/cards/IMG_2804.png';
import C3 from '@/assets/cards/IMG_2506.png';
import C4 from '@/assets/cards/IMG_2553.png';
import C5 from '@/assets/cards/IMG_1169.png';
import C6 from '@/assets/cards/IMG_0171.png';
import C7 from '@/assets/cards/IMG_2618.png';
import C8 from '@/assets/cards/IMG_1183.png';
import C9 from '@/assets/cards/IMG_0378.png';
import ProductCard from './ProductCard';
import { useTranslations } from 'next-intl';

interface CardType {
  img: StaticImageData;
  title: React.ReactNode;
}

export default function Work() {
  const t = useTranslations('landing');
  const ProductCards: CardType[] = [
    {
      title: (
        <>
          {t.rich('work.w1', {
            br: () => <br />,
          })}
        </>
      ),
      img: C1,
    },
    {
      title: (
        <>
          {t.rich('work.w2', {
            br: () => <br />,
          })}
        </>
      ),
      img: C2,
    },
    {
      title: (
        <>
          {t.rich('work.w3', {
            br: () => <br />,
          })}
        </>
      ),
      img: C3,
    },
    {
      title: (
        <>
          {t.rich('work.w4', {
            br: () => <br />,
          })}
        </>
      ),
      img: C4,
    },
    {
      title: (
        <>
          {t.rich('work.w5', {
            br: () => <br />,
          })}
        </>
      ),
      img: C5,
    },
    {
      title: (
        <>
          {t.rich('work.w6', {
            br: () => <br />,
          })}
        </>
      ),
      img: C6,
    },
    {
      title: (
        <>
          {t.rich('work.w7', {
            br: () => <br />,
          })}
        </>
      ),
      img: C7,
    },
    {
      title: (
        <>
          {t.rich('work.w8', {
            br: () => <br />,
          })}
        </>
      ),
      img: C8,
    },
    {
      title: (
        <>
          {t.rich('work.w9', {
            br: () => <br />,
          })}
        </>
      ),
      img: C9,
    },
  ];
  return (
    <>
      <Banner
        className='hidden lg:block'
        title={t('banner_2.title')}
        btnText={t('banner_2.btn')}
        img={WoodFurniture}
      />
      <section className='bg-primary px-4 lg:px-6 xl:px-20 py-10 md:py-16 xl:py-24 flex flex-col gap-6 md:gap-14 xl:gap-20'>
        <div className='flex justify-center items-center'>
          <Highlighter
            title={t('work.title')}
            titleHighLighted={t('work.title_high')}
            desc={t.rich('work.desc', {
              br: (_) => <br />,
            })}
          />
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {ProductCards.map((product, _: number) => (
            <ProductCard key={_} src={product.img} title={product.title} />
          ))}
        </div>
      </section>
    </>
  );
}
