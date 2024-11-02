import { ComponentProps } from 'react';

import { cn } from '@/utils/cn';

export const ErrorMessage = ({ className, ...rest }: ComponentProps<'div'>) => {
  return (
    <div className={cn('my-auto', className)} {...rest}>
      <div className="container">
        <h1 className={cn('text-center mb-4 text-6xl')}>404</h1>

        <p className="text-center">Page not found</p>
      </div>
    </div>
  );
};
