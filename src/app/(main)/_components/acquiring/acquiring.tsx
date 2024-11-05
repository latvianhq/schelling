'use client';

import { useState } from 'react';

import { Icoin } from '@/app/(main)/_components/acquiring/icoin';
import { Stake } from '@/app/(main)/_components/acquiring/stake';
import { Step } from '@/app/(main)/_components/acquiring/step';

enum ProgressStep {
  Icoin = 1,
  Stake = 2,
}

export const Acquiring = () => {
  const [step, setStep] = useState<ProgressStep>(ProgressStep.Icoin);

  const isIcoin = step === ProgressStep.Icoin;
  const isStake = step === ProgressStep.Stake;

  return (
    <div className=''>
      <div className='mb-5 flex'>
        <Step className='flex-1' step={ProgressStep.Icoin} title='Buy iCoin' isActive={isIcoin} />
        <Step className='flex-1' step={ProgressStep.Stake} title='Stake' isActive={isStake} />
      </div>

      <div className='rounded-[20px] border border-white/10 bg-secondary shadow-[0_11px_37px_0_rgba(0,0,0,0.4)]'>
        {isIcoin && <Icoin onSubmit={() => setStep(ProgressStep.Stake)} />}
        {isStake && <Stake />}
      </div>
    </div>
  );
};
