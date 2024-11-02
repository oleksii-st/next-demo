import React, { ComponentProps } from 'react';

import { cn } from '@/utils/cn';

export const Footer = ({ className, ...rest }: ComponentProps<'footer'>) => {
  return (
    <footer className={cn('shadow-3xl sm:shadow-none', className)} {...rest}>
      <div className="container">
        <div className={cn('flex flex-col gap-4 py-8 text-md', 'sm:text:lg sm:py-6')}>
          <div className="text-center">Next demo</div>
        </div>
      </div>
    </footer>
  );
};
