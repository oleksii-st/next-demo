import Link from 'next/link';
import React, { ComponentProps } from 'react';

import { SkipToMain } from '@/components/ui/SkipToMain';
import { cn } from '@/utils/cn';

export const Header = ({ className, ...rest }: ComponentProps<'header'>) => {
  return (
    <header className={cn('shadow-3xl sm:shadow-none', className)} {...rest}>
      <SkipToMain />
      <div className="container">
        <div className="flex justify-between items-center py-4">
          <Link
            href="/"
            className={cn(
              'font-bold text-2xl opacity-100 transition duration-300 text-[var(--headings-color)]',
              'hover:opacity-70',
            )}
          >
            NEXT_DEMO
          </Link>
        </div>
      </div>
    </header>
  );
};
