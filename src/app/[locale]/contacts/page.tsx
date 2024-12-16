import BannerImg from '@/components/BannerImg';
import image from '@/assets/male-carpenter-install-shelf-kitchen-cabinet.png';
import Highlighter from '@/components/Highlighter';
import Image from 'next/image';
import contacts from '@/assets/contacts.png';
import ContactForm from '@/components/Form/ContactForm';
import { Poppins } from 'next/font/google';
import { useTranslations } from 'next-intl';

const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export default function Contacts() {
  const t = useTranslations('contacts');
  return (
    <div className='w-dvw bg-background'>
      <BannerImg src={image} title={t('main_title')} />

      <section className='py-10 md:py-16 xl:py-28'>
        <div className='flex justify-center items-center'>
          <Highlighter
            exagenrate
            title={t('title')}
            titleHighLighted={t('title_high')}
          />
        </div>

        <div className='w-full flex flex-col md:flex-row gap-4 md:gap-6 px-4 lg:px-6 2xl:px-20 py-20'>
          <div className={`w-full md:w-2/3 ${poppins.className}`}>
            <ContactForm />
          </div>
          <div className='w-full md:w-1/3'>
            <Image
              src={contacts}
              alt=''
              className='shadow-2xl w-full h-72 sm:h-[500px] md:h-auto object-cover object-center'
            />
          </div>
        </div>
      </section>
    </div>
  );
}
