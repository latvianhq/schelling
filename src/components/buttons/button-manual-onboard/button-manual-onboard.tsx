import HandIcon from '@/assets/icons/hand.svg';
import { Button } from '@/components/buttons/button';

export const ButtonManualOnboard = () => {
  return (
    <Button variant='secondary' className='fixed bottom-10 right-8 w-[187px] gap-1 px-3 text-left !leading-[1]'>
      <HandIcon className='min-w-[23px]' /> Request to onboard manually
    </Button>
  );
};
