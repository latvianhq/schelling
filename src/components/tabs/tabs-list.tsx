import { ProviderExoticComponent, ProviderProps, ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';

import { Tab } from '@/components/tabs/tab';
import { ActiveTab, TabsContext, TabsContextType } from '@/components/tabs/tabs.context';

interface TabListProps<T> {
  children: ReactElement<typeof Tab>[];
  className?: string;
  value: T;
  onChange: (value: T) => void;
}

export const TabList = <T extends ActiveTab = number>({ children, className, value, onChange }: TabListProps<T>) => {
  const Provider = TabsContext.Provider as unknown as ProviderExoticComponent<ProviderProps<TabsContextType<T>>>;

  return (
    <Provider value={{ activeTab: value, onChange }}>
      <div role='tablist' className={twMerge('flex border-b border-primary/20', className)}>
        {children}
      </div>
    </Provider>
  );
};
