'use client';

import { AnimatePresence } from 'framer-motion';
import { ReactNode, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import ChevronLeftIcon from '@/assets/icons/chevron-left.svg';
import { MotionUl } from '@/client/motion';
import { ButtonSize, buttonSizeClass } from '@/components/buttons/button/button.constant';
import { useOutsideClick } from '@/hooks/use-outside-click';

export interface Option {
  value: string;
  label: ReactNode;
}

export type ChangeHandler = (selected: Option['value']) => void;

export interface SelectProps {
  className?: string;
  valueClassName?: string;
  value?: string;
  size?: ButtonSize;
  options: Option[];
  onChange?: ChangeHandler;
  inline?: boolean;
  placeholder?: string;
}

export const Select = ({
  className,
  options,
  size = 'base',
  placeholder = 'Select...',
  value,
  onChange,
  inline,
  valueClassName,
}: SelectProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOptionClick = (value: Option['value']) => () => {
    handleClose();
    onChange?.(value);
  };

  useOutsideClick(rootRef, handleClose);

  const label = options.find((o) => o.value === value)?.label;

  return (
    <div ref={rootRef} className={twMerge('relative', buttonSizeClass[size], inline && 'h-auto', className)}>
      <div
        className={twMerge(
          'bg-secondary-darker z-10 flex h-full cursor-pointer items-center justify-between gap-3 rounded-xl border px-4 transition-all duration-300',
          isOpen ? 'border-white/20' : 'border-white/10 hover:border-white/20 active:border-white/30',
          label ? 'text-white' : 'text-white/60',
          valueClassName,
        )}
        onClick={toggleIsOpen}
      >
        <div>{label || placeholder}</div>

        <ChevronLeftIcon
          width={7}
          className={twMerge('text-primary/30 -rotate-90 transition-all duration-200', isOpen && 'rotate-90')}
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <MotionUl
            className='absolute inset-x-0 top-full rounded-xl border border-white/20 bg-[inherit]'
            initial={{ opacity: 0, marginTop: 40 }}
            animate={{ opacity: 1, marginTop: 12 }}
            exit={{ opacity: 0, marginTop: 40 }}
            transition={{ duration: 0.2 }}
          >
            {options.map((option) => (
              <li
                key={option.value}
                className={twMerge('cursor-pointer px-6 py-4 text-white transition-all duration-300')}
                onClick={handleOptionClick(option.value)}
              >
                {option.label}
              </li>
            ))}
          </MotionUl>
        )}
      </AnimatePresence>
    </div>
  );
};
