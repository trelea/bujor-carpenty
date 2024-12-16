import Image, { StaticImageData } from 'next/image';
import { Button } from '../ui/button';
import { Red_Hat_Display } from 'next/font/google';
import { useTranslations } from 'next-intl';

const rhd = Red_Hat_Display({ subsets: ['latin'] });

interface Props {
  src: StaticImageData;
  title: React.ReactNode;
}

export default function ProductCard({ src, title }: Props) {
  const t = useTranslations('landing.work');
  return (
    <article className={`bg-background shadow-lg ${rhd.className}`}>
      <Image src={src} alt={src.blurDataURL as string} />
      <div className='flex flex-col justify-center items-center py-5 md:py-7 xl:py-9 gap-4 md:gap-5 xl:gap-6'>
        <h1 className='text-foreground font-medium text-lg md:text-xl xl:text-2xl text-center text-balance'>
          {title}
        </h1>
        <Button className='h-fit w-fit m-0 p-0 shadow-none bg-transparent text-sm md:text-base xl:text-lg font-medium px-4 md:px-8 py-2 md:py-3 border rounded-none'>
          {t('btn')}
        </Button>
      </div>
    </article>
  );
}
