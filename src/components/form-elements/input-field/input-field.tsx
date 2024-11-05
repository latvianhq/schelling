'use client';

import { FocusEventHandler, InputHTMLAttributes, ReactNode, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { Loader } from '@/components/loader';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  value?: string | number;
  label?: ReactNode;
  error?: boolean;
  helperText?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  isLoading?: boolean;
  inputWrapperClassName?: string;
  labelClassName?: string;
}

export const InputField = ({
  startAdornment,
  endAdornment,
  value,
  label,
  error,
  helperText,
  disabled,
  onChange,
  onFocus,
  onBlur,
  onKeyDown,
  type,
  className,
  isLoading,
  inputWrapperClassName,
  labelClassName,
  ...rest
}: InputProps) => {
  const [active, setActive] = useState(false);
  const handleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
    setActive(false);
    onBlur?.(e);
  };

  const handleFocus: FocusEventHandler<HTMLInputElement> = (e) => {
    setActive(true);
    onFocus?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (type === 'number' && e.key !== 'Backspace' && e.key !== 'Delete' && (e.key < '0' || e.key > '9')) {
      e.preventDefault();
    }
    onKeyDown?.(e);
  };

  return (
    <div className={className}>
      {label && <label className={twMerge('mb-3 block leading-[1] text-white', labelClassName)}>{label}</label>}
      <div
        className={twMerge(
          'flex h-[54px] w-full items-center gap-2 rounded-xl border border-white/10 bg-secondary-darker px-5 py-0 font-normal text-white transition duration-300 hover:border-white/30',
          active && 'border-primary hover:border-primary/80',
          error && 'border-red text-red hover:border-red',
          disabled && 'cursor-not-allowed brightness-50 grayscale',
          inputWrapperClassName,
        )}
      >
        <AdornmentWrapper adornment={startAdornment} />
        <input
          className={twMerge(
            'flex-1 self-stretch bg-transparent placeholder-white/60 outline-0',
            disabled && 'cursor-not-allowed',
          )}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          {...rest}
        />
        {isLoading && <Loader className='aspect-square h-[40%] w-auto' />}
        <AdornmentWrapper adornment={endAdornment} />
      </div>
      {helperText && (
        <span className={twMerge('mt-1 flex items-center gap-2 text-red', error && 'text-red')}>{helperText}</span>
      )}
    </div>
  );
};

const AdornmentWrapper = ({ adornment }: { adornment: React.ReactNode }) => {
  return typeof adornment === 'string' || typeof adornment === 'number' ? (
    <span className='text-main-text'>{adornment}</span>
  ) : (
    adornment
  );
};
