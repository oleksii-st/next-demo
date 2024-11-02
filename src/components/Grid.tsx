import Image from 'next/image';
import React from 'react';

import { cn } from '@/utils/cn';

const images = [
  {
    src: '/media/grid-1.png',
    alt: 'Rabbit ninja',
  },
  {
    src: '/media/grid-2.png',
    alt: 'Squirrel ninja',
  },
  {
    src: '/media/grid-3.png',
    alt: 'Bunny ninja',
  },
  {
    src: '/media/grid-4.png',
    alt: 'Hamster ninja',
  },
  {
    src: '/media/grid-5.png',
    alt: 'Rabbit ninja',
  },
  {
    src: '/media/grid-6.png',
    alt: 'Hamster ninja',
  },
  {
    src: '/media/grid-7.png',
    alt: 'Kitten ninja',
  },
  {
    src: '/media/grid-8.png',
    alt: 'Mouse ninja',
  },
];

const GridItem = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className={cn('w-[calc(50%-12px)]', 'sm:w-[calc(25%-18px)]')}>
      <Image
        className={cn('m-0 w-full aspect-square rounded-2xl')}
        sizes={'(min-width: 576px) 342px, 500px'}
        src={src}
        width={500}
        height={500}
        alt={alt}
        loading="lazy"
      />
    </div>
  );
};

export const Grid = () => {
  return (
    <section className="my-5 sm:my-8">
      <div className="container">
        <h2>Grid</h2>

        <div className="flex gap-6 flex-wrap items-center">
          {images.map(({ src, alt }, index) => (
            <GridItem key={index} src={src} alt={alt} />
          ))}
        </div>
      </div>
    </section>
  );
};
