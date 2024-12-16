'use server';
import Image from 'next/image';
import logo from '@/assets/Logo.png';
import { Link } from '@/i18n/routing';
import SelectNavbar from './Select';
import SelectLang from './SelectLang';
import { Poppins } from 'next/font/google';
import { getLocale, getTranslations } from 'next-intl/server';
import SheetNavigation from './SheetNavigation';

const poppins = Poppins({ weight: '300', subsets: ['latin'] });

export default async function Navbar() {
  const t = await getTranslations('navbar');
  const locale = await getLocale();

  return (
    <nav
      className={`w-full backdrop-blur-[1px] fixed top-0 left-0 right-0 flex flex-row justify-between items-center bg-gradient-to-b from-black/90 to-transparent py-7 px-4 lg:px-6 2xl:py-4 2xl:px-20 text-white z-50 shadow-sm ${poppins.className}`}
    >
      <section className='flex-1 flex justify-start'>
        <ul className='hidden xl:flex font-light text-base items-center gap-14'>
          <li className='hover:underline hover:cursor-pointer'>
            <Link href={`/cupboards`} locale={locale}>
              {t('cupboards')}
            </Link>
          </li>
          <li className='hover:underline hover:cursor-pointer'>
            <Link href={'/kitchens'} locale={locale}>
              {t('kitchens')}
            </Link>
          </li>
          <li className='hover:underline hover:cursor-pointer'>
            <SelectNavbar />
          </li>
        </ul>

        <SheetNavigation locale={locale} />
      </section>

      <section className='flex-1 flex justify-center'>
        <Link href={'/'} locale={locale}>
          <Image
            src={logo}
            alt='Bujor Carpentry Logo'
            className='h-20 md:h-24 xl:h-28 object-contain'
            unoptimized
          />
        </Link>
      </section>

      <section className='flex-1 flex justify-end'>
        <ul className='font-light text-base flex items-center gap-14'>
          <li className='hidden xl:flex hover:underline hover:cursor-pointer'>
            <Link href={'/projects'} locale={locale}>
              {t('projects')}
            </Link>
          </li>
          <li className='hidden xl:flex hover:underline hover:cursor-pointer'>
            <Link href={'/contacts'} locale={locale}>
              {t('contacts')}
            </Link>
          </li>
          <li className='hover:underline hover:cursor-pointer'>
            <SelectLang />
          </li>
        </ul>
      </section>
    </nav>
  );
}
