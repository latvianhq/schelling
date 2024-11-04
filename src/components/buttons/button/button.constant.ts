export type ButtonSize = 'base';
export type ButtonVariant = 'primary' | 'secondary' | 'assistive';

export const buttonSizeClass: Record<ButtonSize, string> = {
  base: 'h-[36px] text-sm md:h-[54px] md:text-base',
};
export const buttonVariantClass: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-secondary-darker border border-white/10 hover:bg-primary-darker active:bg-primary-dark',
  secondary: 'bg-primary/10 text-primary border border-primary hover:bg-primary/20 active:bg-primary/30',
  assistive: 'bg-primary/10 text-primary hover:bg-primary/20 active:bg-primary/30',
};
export const buttonSvgVariantClass: Record<ButtonVariant, string> = {
  primary: 'text-secondary-darker opacity-30',
  secondary: 'text-primary opacity-30',
  assistive: 'text-primary opacity-30',
};
