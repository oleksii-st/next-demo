import Image from 'next/image';
import React from 'react';

import { cn } from '@/utils/cn';

export const Hero = () => {
  return (
    <section className="my-5 sm:my-8">
      <div className="container">
        <div
          className={cn(
            'max-w-[500px] mx-auto flex flex-col gap-4',
            'sm:max-w-full sm:flex-row sm:gap-8 sm:items-center',
            'md:gap-14',
          )}
        >
          <div className="sm:w-[calc(50%-16px)]">
            <Image
              className="w-full rounded-full my-0"
              sizes="(min-width: 768px) 50vw, (min-width: 1440px) 692px, 100vw"
              src="/media/hero-samurai.png"
              alt="Samurai"
              width={414}
              height={414}
              loading="eager"
            />
          </div>

          <div className={cn('text-center', 'sm:text-left sm:w-[calc(50%-16px)]')}>
            <h1 className={cn('h1 mb-4', 'sm:md-8 sm:text-left')}>Just another hero</h1>
          </div>
        </div>
      </div>
    </section>
  );
};
