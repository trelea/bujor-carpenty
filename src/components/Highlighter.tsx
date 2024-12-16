import { Red_Hat_Display, Poppins } from 'next/font/google';
import { title } from 'process';

const redHatDisplay = Red_Hat_Display({ subsets: ['latin'] });
const poppins = Poppins({ weight: '400', subsets: ['latin'] });

interface Props {
  title?: string;
  titleHighLighted?: string;
  desc?: React.ReactNode;
  exagenrate?: boolean;
}

export default function Highlighter({
  title,
  titleHighLighted,
  desc,
  exagenrate,
}: Props) {
  return (
    <div className='w-fit flex flex-col gap-1 md:gap-2 xl:gap-3 items-center'>
      {title && titleHighLighted && (
        <h1
          className={`text-3xl md:text-4xl xl:text-5xl font-extrabold text-foreground text-center ${redHatDisplay.className}`}
        >
          {title}{' '}
          <span className='bg-[#46442D] text-primary'>{titleHighLighted}</span>
        </h1>
      )}
      {desc && (
        <hr
          className={`h-[1px] w-1/2 bg-[#46442D] mt-3 ${
            exagenrate && 'mt-3 md:mt-8 xl:mt-16'
          }`}
        />
      )}

      <p
        className={`text-balance text-[#46442D] text-sm md:text-base xl:text-lg font-normal text-center ${poppins.className} px-2`}
      >
        {desc}
      </p>
    </div>
  );
}
