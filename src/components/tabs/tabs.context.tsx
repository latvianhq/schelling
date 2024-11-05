import { Context, createContext, useContext } from 'react';

export type ActiveTab = string | number | undefined;

export type TabsContextType<T extends ActiveTab = number> = {
  activeTab?: T;
  onChange: (value: T) => void;
};

export const TabsContext = createContext<TabsContextType>({
  activeTab: undefined,
  onChange: () => {},
});

export const useTabs = <T extends string | number>() => {
  const context = useContext(TabsContext as unknown as Context<TabsContextType<T>>);

  if (!context) {
    throw new Error('useTabs must be used within a Provider');
  }

  return context;
};
