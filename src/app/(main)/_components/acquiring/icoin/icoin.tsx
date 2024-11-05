'use client';

import { useState } from 'react';

import { Bank } from '@/app/(main)/_components/acquiring/icoin/bank';
import { Crypto } from '@/app/(main)/_components/acquiring/icoin/crypto';
import BankIcon from '@/assets/icons/bank.svg';
import CryptoIcon from '@/assets/icons/crypto.svg';
import { Tab, TabList, TabPanel } from '@/components/tabs';

enum IcoinTab {
  Crypto,
  Bank,
}

export const Icoin = ({ onSubmit }: { onSubmit: () => void }) => {
  const [tab, setTab] = useState<IcoinTab>(IcoinTab.Crypto);

  return (
    <div>
      <TabList value={tab} onChange={setTab}>
        <Tab value={IcoinTab.Crypto}>
          <CryptoIcon /> Crypto
        </Tab>
        <Tab value={IcoinTab.Bank}>
          <BankIcon /> Bank transfer
        </Tab>
      </TabList>

      <div className='px-8 pb-4 pt-7'>
        <TabPanel value={tab} active={IcoinTab.Crypto}>
          <Crypto onSubmit={onSubmit} />
        </TabPanel>
        <TabPanel value={tab} active={IcoinTab.Bank}>
          <Bank onSubmit={onSubmit} />
        </TabPanel>
      </div>

      <div className='border-t border-primary/20 p-8'>
        <p className='text-base leading-[1] text-primary'>Transaction details</p>

        <p className='mt-3 flex items-center justify-between leading-[1]'>
          <span className='text-white'>iCoin amount</span>
          <span>24,000,000</span>
        </p>
      </div>
    </div>
  );
};
