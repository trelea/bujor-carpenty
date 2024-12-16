import Image from 'next/image';
import Logo from '@/assets/Logo-background.png';
import FooterImg from '@/assets/FooterPhoto.png';
import { CodeXml, Mail, Phone } from 'lucide-react';
import { Poppins } from 'next/font/google';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  return (
    <footer className={`bg-[#1E150C] text-background ${poppins.className}`}>
      <div className='flex py-10 px-4 lg:px-6 2xl:py-20 2xl:px-20 justify-between'>
        <div className='hidden md:flex flex-1 justify-start'>
          <div className='flex flex-col gap-6'>
            <Link href={'/'} locale={locale}>
              <Image src={Logo} alt='Logo' />
            </Link>
            <p className='text-balance font-normal text-sm lg:text-base 2xl:text-lg'>
              {t('text')}
            </p>
          </div>
        </div>

        <div className='flex flex-1 justify-start md:justify-center w-1/2'>
          <div className='flex flex-col gap-3 xl:gap-6'>
            <h1 className='font-medium text-lg'>{t('links.title')}</h1>
            <ul className='text-sm lg:text-base font-light flex flex-col gap-3'>
              <li className='hover:underline'>
                <Link href={'/cupboards'} locale={locale}>
                  {t('links.cupboards')}
                </Link>
              </li>
              <li className='hover:underline'>
                <Link href={'/kitchens'} locale={locale}>
                  {t('links.kitchens')}
                </Link>
              </li>
              <li className='hover:underline'>
                <Link href={'/projects'} locale={locale}>
                  {t('links.projects')}
                </Link>
              </li>
              <li className='hover:underline'>
                <Link href={'/contacts'} locale={locale}>
                  {t('links.personalize')}
                </Link>
              </li>
              <li className='hover:underline'>
                <Link href={'/'} locale={locale}>
                  {t('links.deposit')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='flex flex-1 justify-start md:justify-center w-1/2'>
          <div className='flex flex-col gap-3 xl:gap-6'>
            <h1 className='font-medium text-lg'>{t('contacts')}</h1>
            <ul className='font-normal text-sm lg:text-base 2xl:text-lg flex flex-col gap-3 break-words'>
              <li className='w-full'>
                <Link
                  href={`mailto:bujor.carpentry@gmail.com`}
                  className='flex gap-3 items-center'
                >
                  <Mail className='size-6 2x:size-8' />
                  <p className='hover:underline break-all'>
                    bujor.carpentry@gmail.com
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  href={`tel:+40 740 124 9683`}
                  className='flex gap-3 items-center'
                >
                  <Phone className='size-6 2xl:size-8' />
                  <p className='hover:underline'>+40 740 124 9683</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='hidden lg:flex lg:flex-1 justify-end'>
          <Image src={FooterImg} alt='Footer Image' className='object-cover' />
        </div>
      </div>

      <div className='text-xs md:text-sm md:justify-center md:gap-4 lg:text-base lg:gap-6 xl:gap-8 2xl:gap-10 border-t border-background flex items-center py-3 font-light justify-between px-4'>
        <p>© Copyright 2024 by Bujor Carpentry </p>
        <Link
          href={'https://devcompare.md'}
          className='flex items-center gap-1 hover:bg-background hover:text-emerald-700 p-1 px-2 rounded'
          target='_blank'
        >
          <CodeXml className='size-4 md:size-5' />
          Dev Compare
        </Link>
      </div>
    </footer>
  );
}
