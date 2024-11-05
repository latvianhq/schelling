import { Causes } from '@/app/(main)/_components/acquiring/stake/causes';
import { Button } from '@/components/buttons/button';

export const Stake = () => {
  return (
    <div className=''>
      <div className='border-b border-primary/20 px-8 pb-6 pt-8'>
        <p className='typo-base'>Commit compute to a cause you believe in</p>
        <p>Upon issuance, your acquired iCoin will be staked towards the following causes.</p>
      </div>

      <div className='flex flex-col px-8 py-6'>
        <Causes className='mb-20' />

        <Button text='Confirm staking' />
      </div>
    </div>
  );
};
