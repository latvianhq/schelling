import { twMerge } from 'tailwind-merge';

interface DividerProps {
  text?: string;
  className?: string;
}

export const Divider = ({ className, text }: DividerProps) => {
  return (
    <div className={twMerge('my-5 flex items-center gap-1', className)}>
      <hr className='flex-1 border-t border-white/10' />
      {text}
      <hr className='flex-1 border-t border-white/10' />
    </div>
  );
};
