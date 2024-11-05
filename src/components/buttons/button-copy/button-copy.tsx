'use client';

import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import CheckIcon from '@/assets/icons/check.svg';
import CopyIcon from '@/assets/icons/copy.svg';
import { Button } from '@/components/buttons/button';

export interface CopyButtonProps {
  text?: string;
  className?: string;
}

export const ButtonCopy = ({ className, text = '' }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <Button variant='assistive' inline className={twMerge('w-[90px] gap-1 px-2', className)} onClick={handleCopy}>
      {copied ? (
        <>
          <CheckIcon className='translate-y-[20%]' />
          Copied
        </>
      ) : (
        <>
          <CopyIcon />
          Copy
        </>
      )}
    </Button>
  );
};
