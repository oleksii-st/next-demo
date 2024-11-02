import { ReactNode } from 'react';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { cn } from '@/utils/cn';

export const Layout = async ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <Header />
      <main
        className={cn(
          'prose prose-basic prose-code:text-[var(--code-inline-color)] prose-code:bg-[var(--code-inline-bg-color)] prose-code:before:content-none prose-code:after:content-none prose-code:px-0.5 prose-code:py-1 prose-h2:mt-0',
          'flex-auto flex flex-col max-w-full',
        )}
        id="main"
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};
