import { HTMLAttributes, ReactNode } from 'react';

import { ActiveTab } from '@/components/tabs/tabs.context';

interface TabPanelProps extends HTMLAttributes<HTMLDivElement> {
  value: ActiveTab;
  active: ActiveTab;
  children: ReactNode;
}

export const TabPanel = ({ value, active, children, ...props }: TabPanelProps) => {
  const isActive = active === value;

  return (
    <div role='tabpanel' hidden={!isActive} {...props}>
      {isActive ? children : null}
    </div>
  );
};
