import Image, { StaticImageData } from 'next/image';
import { Button } from './ui/button';
import { Red_Hat_Display } from 'next/font/google';

const rhd = Red_Hat_Display({ subsets: ['latin'] });

interface Props {
  title: string;
  img: StaticImageData;
  className?: string;
  btnText: string;
}

export default function Banner({ title, img, className, btnText }: Props) {
  return (
    <section className={`relative ${rhd.className} ${className}`}>
      <Image
        src={img}
        alt={img.blurDataURL as string}
        className='min-h-60 object-cover w-screen'
      />
      <div className='w-full h-full absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center gap-3 md:gap-6 xl:gap-11'>
          <h1 className='font-semibold text-2xl md:text-4xl xl:text-6xl tracking-[14px] text-background text-balance text-center'>
            {title}
          </h1>
          <hr className='bg-background h-[2px] w-1/2' />
          <Button className='m-0 p-0 rounded-none text-[#46442D] font-semibold text-base md:text-lg xl:text-xl tracking-[5px] h-fit py-2 px-4 lg:py-3 lg:px-6'>
            {btnText}
          </Button>
        </div>
      </div>
    </section>
  );
}
