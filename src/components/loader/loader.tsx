import { twMerge } from 'tailwind-merge';

import LoaderIcon from '@/assets/icons/loader.svg';

interface Props {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
  sm: 'h-6 w-6',
  md: 'h-12 w-12',
  lg: 'h-24 w-24',
};

export const Loader = ({ className, size = 'md' }: Props) => {
  return <LoaderIcon className={twMerge('inline-block h-12 w-12 animate-spin', sizeClasses[size], className)} />;
};
