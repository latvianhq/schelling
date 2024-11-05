import { ButtonHTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

import { ActiveTab, useTabs } from '@/components/tabs/tabs.context';

export interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  value: ActiveTab;
  children?: ReactNode;
  className?: string;
}

export const Tab = ({ children, value, className, ...props }: TabProps) => {
  const { activeTab, onChange } = useTabs();

  const isActive = activeTab === value;

  const handleClick = () => {
    if (value !== undefined) onChange(value);
  };

  return (
    <button
      type='button'
      role='tab'
      aria-selected={isActive}
      tabIndex={isActive ? 0 : -1}
      className={twMerge(
        'typo-primary relative flex flex-1 cursor-pointer items-center justify-center gap-2 text-ellipsis p-2 px-2 py-4 text-primary transition duration-300 after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:rounded-sm after:border after:border-solid after:border-white after:border-opacity-35 after:bg-primary after:opacity-0 after:transition after:duration-500',
        isActive && 'after:opacity-100',
        className,
      )}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};
