import Image from 'next/image';
import Banner from '../Banner';
import Highlighter from '../Highlighter';
import DesignPersonalizat from '@/assets/DesignPersonalizat.png';
import AboutUsBg from '@/assets/aboutus.png';
import { Poppins } from 'next/font/google';
import { useTranslations } from 'next-intl';

const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export default function AboutUs() {
  const t = useTranslations('landing');
  return (
    <section className='py-10 md:py-16 xl:py-24 bg-primary'>
      <Banner
        img={DesignPersonalizat}
        title={t('banner_1.title')}
        btnText={t('banner_1.btn')}
      />

      <article className='px-4 lg:px-6 xl:px-20 flex flex-col gap-6 md:gap-14 xl:gap-20 mt-10 lg:mt-16 xl:mt-24'>
        <div className='flex justify-center items-center'>
          <Highlighter
            title={t('about_us.title')}
            titleHighLighted={t('about_us.title_high')}
            desc={t.rich('about_us.desc', {
              br: (_) => <br />,
            })}
          />
        </div>

        <div className='flex flex-col lg:flex-row gap-5 w-full'>
          <Image
            src={AboutUsBg}
            alt={`${t('about_us.title')} ${t('about_us.title_high')}`}
            className='object-contain lg:flex-1 lg:w-1/2 xl:flex-auto xl:w-fit'
          />

          <div
            className={`text-black font-medium text-sm md:text-base xl:text-lg space-y-6 text-balance lg:flex-1 lg:w-1/2 xl:flex-auto xl:w-fit ${poppins.className}`}
          >
            <p>
              {t.rich('about_us.p1', {
                b1: (_) => <b>{_}</b>,
                b2: (_) => <b>{_}</b>,
              })}
            </p>
            <p>
              {t.rich('about_us.p2', {
                b: (_) => <b>{_}</b>,
              })}
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}
