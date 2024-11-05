import BtcIcon from '@/assets/icons/btc.svg';
import EthIcon from '@/assets/icons/eth.svg';
import UsdcIcon from '@/assets/icons/usdc.svg';
import { Button } from '@/components/buttons/button';
import { InputWithCopy } from '@/components/form-elements/input-with-copy';
import { InputWithSelect } from '@/components/form-elements/input-with-select';

export const Crypto = ({ onSubmit }: { onSubmit: () => void }) => {
  return (
    <form onSubmit={onSubmit} className='flex flex-col gap-5'>
      <InputWithSelect
        label='Amount'
        selectValue='btc'
        options={[
          {
            value: 'btc',
            label: (
              <p className='flex items-center gap-1'>
                <BtcIcon /> BTC
              </p>
            ),
          },
          {
            value: 'eth',
            label: (
              <p className='flex items-center gap-1'>
                <EthIcon /> ETH
              </p>
            ),
          },
          {
            value: 'usdc',
            label: (
              <p className='flex items-center gap-1'>
                <UsdcIcon /> USDC
              </p>
            ),
          },
        ]}
      />

      <InputWithCopy
        labelClassName='flex-col'
        label={
          <>
            Deposit address <p className='typo-text mt-1'>Send the funds to the address below</p>
          </>
        }
      />

      <Button type='submit' text='Verify deposit' />

      <a href='/' target='_blank' className='text-center underline' rel='noreferrer noopener'>
        Terms of sale
      </a>
    </form>
  );
};
