import { twMerge } from 'tailwind-merge';

interface StepProps {
  step: number;
  title: string;
  isActive?: boolean;
  className?: string;
}

export const Step = ({ step, title, isActive, className }: StepProps) => {
  return (
    <div
      className={twMerge(
        'flex items-center justify-center gap-2',
        isActive ? 'text-primary' : 'text-white/20',
        className,
      )}
    >
      <div
        className={twMerge(
          'flex aspect-square w-6 items-center justify-center rounded-md border',
          isActive ? 'border-primary bg-primary/10' : 'border-white/20 bg-white/5',
        )}
      >
        {step}
      </div>

      <span className={twMerge('typo-base', isActive ? 'text-primary' : 'text-white/20')}>{title}</span>
    </div>
  );
};
