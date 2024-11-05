'use client';

import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

import { MotionSpan } from '@/client/motion';

interface LinkActiveProps {
  href: string;
  activeClass?: string;
  children: React.ReactNode;
}

export const LinkActive = ({ href, activeClass = 'text-primary', children }: LinkActiveProps) => {
  const pathname = usePathname();
  const isActive = pathname === href.split('?')[0]; // remove query params and compare with pathname

  return (
    <Link
      href={href}
      className={twMerge(
        'relative flex flex-col justify-center px-2 transition duration-300',
        isActive ? activeClass : 'text-primary/50 hover:text-primary',
      )}
    >
      {children}
      <AnimatePresence>
        {isActive && (
          <MotionSpan
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='absolute inset-x-0 bottom-0 h-1 rounded-[0.15rem] border border-white border-opacity-35 bg-primary'
          />
        )}
      </AnimatePresence>
    </Link>
  );
};
