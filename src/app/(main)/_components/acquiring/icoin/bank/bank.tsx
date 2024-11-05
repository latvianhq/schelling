import { Button } from '@/components/buttons/button';
import { InputField } from '@/components/form-elements/input-field';

export const Bank = ({ onSubmit }: { onSubmit: () => void }) => {
  return (
    <form onSubmit={onSubmit} className='flex flex-col gap-5'>
      <InputField startAdornment='$' label='Amount' />

      <Button type='submit' text='Generate invoice' />

      <a href='/' target='_blank' className='text-center underline' rel='noreferrer noopener'>
        Terms of sale
      </a>
    </form>
  );
};
