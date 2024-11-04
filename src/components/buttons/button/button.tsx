import { ButtonHTMLAttributes, ReactNode, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import ChevronLeftIcon from '@/assets/icons/chevron-left.svg';
import { Loader } from '@/components/loader';

import {
  ButtonSize,
  ButtonVariant,
  buttonSizeClass,
  buttonSvgVariantClass,
  buttonVariantClass,
} from './button.constant';

export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  isLoading?: boolean;
  inline?: boolean;
} & (
    | {
        text?: undefined;
        children: ReactNode;
      }
    | {
        text?: string;
        children?: undefined;
      }
  );

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, className, variant = 'primary', size = 'base', inline = false, text, isLoading, disabled, ...props },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type='button'
        {...props}
        className={twMerge(
          'typo-control group relative inline-flex w-auto select-none items-center justify-center gap-3 rounded-[14px] px-4 transition-all duration-300',
          disabled && 'pointer-events-none opacity-50',
          buttonSizeClass[size],
          buttonVariantClass[variant],
          inline && 'h-auto',
          className,
        )}
      >
        {isLoading ? (
          <Loader className='aspect-square h-[40%] w-auto' />
        ) : children ? (
          children
        ) : (
          <>
            {text}
            <ChevronLeftIcon
              className={twMerge(
                'transition-transform duration-300 group-hover:translate-x-1',
                buttonSvgVariantClass[variant],
              )}
            />
          </>
        )}
      </button>
    );
  },
);

Button.displayName = 'Button';
