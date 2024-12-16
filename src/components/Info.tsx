import { Poppins } from 'next/font/google';
import React from 'react';

const poppins = Poppins({ subsets: ['latin'], weight: '400' });

export default function Info({ desc }: { desc: React.ReactNode[] }) {
  return (
    <div className='pt-10 md:pt-16 xl:pt-28 px-4 md:px-12 xl:px-20 flex flex-col gap-6'>
      {desc.map((text, _: number) => (
        <p
          key={_}
          className={`font-light text-sm md:text-base xl:text-lg text-foreground text-balance ${poppins.className}`}
        >
          {text}
        </p>
      ))}
    </div>
  );
}
