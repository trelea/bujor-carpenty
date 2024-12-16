import Image, { StaticImageData } from 'next/image';
import { Button } from './ui/button';
import { Poppins, Red_Hat_Display } from 'next/font/google';
import { useTranslations } from 'next-intl';

const poppins = Poppins({ weight: '400', subsets: ['latin'] });
const rhd = Red_Hat_Display({ subsets: ['latin'] });

interface Props {
  title: string;
  desc: string[];
  img: StaticImageData;
  invertSections?: boolean;
}

export default function Argument({ title, desc, img, invertSections }: Props) {
  const t = useTranslations('landing.why_us');
  return (
    <div
      className={`flex flex-col-reverse lg:flex-row ${
        invertSections && 'lg:flex-row-reverse'
      } gap-6 text-start text-balance w-full items-start`}
    >
      <div className='flex flex-col gap-3 md:gap-5 xl:gap-7 lg:w-1/2 2xl:w-2/5'>
        <h1
          className={`font-semibold text-xl md:text-2xl xl:text-3xl text-foreground ${rhd.className}`}
        >
          {title}
        </h1>
        {desc.map((d: string) => (
          <p
            key={d}
            className={`text-foreground font-normal text-sm md:text-base xl:text-lg ${poppins.className}`}
          >
            {d}
          </p>
        ))}
        <Button
          className={`h-fit w-fit m-0 p-0 bg-transparent shadow-none border rounded-none font-semibold text-sm md:text-base xl:text-lg py-2 md:py-3 px-4 md:px-8 text-[#46442D] hover:bg-transparent hover:underline ${rhd.className} tracking-[5px]`}
        >
          {t('btn')}
        </Button>
      </div>
      <Image
        src={img}
        alt={img.blurDataURL as string}
        className='lg:w-1/2 2xl:w-3/5 object-contain'
      />
    </div>
  );
}
