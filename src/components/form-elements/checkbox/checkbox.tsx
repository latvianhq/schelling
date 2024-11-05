import { ChangeEventHandler, ComponentPropsWithoutRef, memo } from 'react';
import { twMerge } from 'tailwind-merge';

import CheckIcon from '@/assets/icons/check.svg';

export type CheckboxProps = Omit<ComponentPropsWithoutRef<'div'>, 'onChange'> & {
  className?: string;
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  readOnly?: boolean;
  disabled?: boolean;
};

export const Checkbox = memo<CheckboxProps>((props) => {
  const { className, checked, onChange, readOnly, disabled, ...rest } = props;

  return (
    <div
      className={twMerge(
        'relative h-6 w-6 cursor-pointer overflow-hidden rounded-md border border-white/10 bg-page-bg text-primary text-transparent transition-colors duration-300',
        checked && 'border-primary bg-primary/10',
        disabled ? 'pointer-events-none grayscale' : 'hover:bg-primary/20',
        className,
      )}
      {...rest}
    >
      <input
        className={twMerge(
          'absolute left-0 top-0 z-[1] m-0 h-full w-full cursor-pointer p-0 opacity-0',
          disabled && 'pointer-events-none',
        )}
        type='checkbox'
        onChange={onChange}
        checked={checked}
        readOnly={readOnly}
        disabled={disabled}
      />
      <CheckIcon
        className={twMerge(
          'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[30%] transform text-primary opacity-0 transition-opacity duration-200',
          checked && 'opacity-100',
        )}
      />
    </div>
  );
});

Checkbox.displayName = 'Checkbox';
