import { Red_Hat_Display } from 'next/font/google';
import Image, { StaticImageData } from 'next/image';

const rhd = Red_Hat_Display({ weight: '600', subsets: ['latin'] });

export default function BannerImg({
  src,
  title,
}: {
  src: StaticImageData;
  title: string;
}) {
  return (
    <section className={`relative w-full ${rhd.className}`}>
      <Image
        src={src}
        alt={title}
        className='min-h-96 object-cover'
        loading='lazy'
      />
      <div className='absolute top-0 right-0 left-0 bottom-0 flex justify-center items-end pb-32 md:pb-36 2xl:pb-60 h-full w-full'>
        <h1 className='text-balance text-center text-primary text-xl md:text-3xl xl:text-5xl font-semibold tracking-[5px] md:tracking-[10px] xl:tracking-[15px]'>
          {title}
        </h1>
      </div>
    </section>
  );
}
