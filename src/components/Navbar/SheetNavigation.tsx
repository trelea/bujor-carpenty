'use client';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '../ui/sheet';
import { Link } from '@/i18n/routing';
import SelectNavbar from './Select';
import { useDebouncer } from './hooks/useDebouncer';
import { useTranslations } from 'next-intl';

export default function SheetNavigation({ locale }: { locale?: string }) {
  const t = useTranslations('navbar');
  const { open, setOpen, closeModal } = useDebouncer(100);
  return (
    <Sheet onOpenChange={setOpen} open={open}>
      <SheetTrigger asChild className='xl:hidden'>
        <Menu className='size-11' />
      </SheetTrigger>
      <SheetContent side={'left'} className='text-foreground'>
        <SheetTitle>{t('menu')}</SheetTitle>

        <ul className='flex flex-col font-light text-base gap-4 mt-10'>
          <li className='hover:underline hover:cursor-pointer'>
            <Link href={'/cupboards'} locale={locale} onClick={closeModal}>
              {t('cupboards')}
            </Link>
          </li>
          <li className='hover:underline hover:cursor-pointer'>
            <Link href={'/kitchens'} locale={locale} onClick={closeModal}>
              {t('kitchens')}
            </Link>
          </li>
          <li className='hover:underline hover:cursor-pointer'>
            <Link href={'/projects'} locale={locale} onClick={closeModal}>
              {t('projects')}
            </Link>
          </li>
          <li className='hover:underline hover:cursor-pointer'>
            <Link href={'/contacts'} locale={locale} onClick={closeModal}>
              {t('contacts')}
            </Link>
          </li>
          <li className='hover:underline hover:cursor-pointer'>
            <SelectNavbar black closeModal={closeModal} />
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}
