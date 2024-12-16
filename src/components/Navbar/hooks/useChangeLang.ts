import { usePathname, useRouter } from '@/i18n/routing';
import { useLocale } from 'next-intl';

export const useChangeLang = () => {
  const path = usePathname();
  const router = useRouter();
  const locale = useLocale();

  return {
    locale,
    chnageLang: (locale: string): void => router.push(path, { locale }),
  };
};
