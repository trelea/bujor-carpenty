import Argument from '../Argument';
import Highlighter from '../Highlighter';
import Quality from '@/assets/picture-wooden-building-forest.png';
import Services from '@/assets/interior-design-zoom-calls-with-chair.png';
import FastDelivery from '@/assets/home-entrance-with-furniture-modern-decor.png';
import PersonalProjects from '@/assets/commercial-premises-shop-interior-visualization-3d-illustration-cg-render.png';
import { useTranslations } from 'next-intl';

export default function WhyUs() {
  const t = useTranslations('landing.why_us');
  return (
    <section className='py-10 md:py-16 xl:py-20'>
      <article className='px-4 lg:px-6 xl:px-20 flex flex-col gap-6 md:gap-14 xl:gap-20'>
        <div className='flex justify-center items-center'>
          <Highlighter
            title={t('title')}
            titleHighLighted={t('title_high')}
            desc={t.rich('desc', {
              br: (_) => <br />,
            })}
          />
        </div>

        <div className='flex flex-col gap-6 md:gap-10 lg:gap-16 xl:gap-24 2xl:gap-32'>
          <Argument
            title={t('section_1.title')}
            desc={[t('section_1.p1'), t('section_1.p2'), t('section_1.p3')]}
            img={Quality}
          />
          <Argument
            title={t('section_2.title')}
            desc={[t('section_2.p1'), t('section_2.p2')]}
            img={Services}
            invertSections
          />

          <Argument
            title={t('section_3.title')}
            desc={[t('section_3.p1'), t('section_3.p2')]}
            img={FastDelivery}
          />

          <Argument
            title={t('section_4.title')}
            desc={[t('section_4.p1'), t('section_4.p2')]}
            img={PersonalProjects}
            invertSections
          />
        </div>
      </article>
    </section>
  );
}
