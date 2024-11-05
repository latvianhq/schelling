// @ts-ignore
import { Tabs } from '@storybook/components';
import { useArgs } from '@storybook/preview-api';
import type { Meta, StoryObj } from '@storybook/react';

import { Tab, TabList, TabPanel } from '@/components/tabs';

const meta: Meta<typeof Tabs> = {
  title: 'components/tabs',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TabList>;

export const Basic: Story = {
  argTypes: {
    value: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    value: 'tab1',
  },
  render: (args) => {
    const [{ value }, updateArgs] = useArgs<{ value: string }>();

    const handleChange = (value?: string) => {
      updateArgs({ value });
    };

    return (
      <div className='flex flex-col'>
        <TabList {...args} value={value} onChange={handleChange}>
          <Tab value='tab1'>Tab 1</Tab>
          <Tab value='tab2'>Tab 2</Tab>
        </TabList>
        <div className='py-4'>
          <TabPanel value='tab1' active={value}>
            Tab 1 content
          </TabPanel>
          <TabPanel value='tab2' active={value}>
            Tab 2 content
          </TabPanel>
        </div>
      </div>
    );
  },
};

export const NumberValue: Story = {
  argTypes: {
    value: {
      control: {
        type: 'number',
      },
    },
  },
  args: {
    value: 0,
  },
  render: (args) => {
    const [{ value }, updateArgs] = useArgs<{ value: number }>();

    const handleChange = (value?: number) => {
      updateArgs({ value });
    };

    return (
      <div className='flex flex-col'>
        <TabList {...args} value={value} onChange={handleChange}>
          <Tab value={0}>Tab 1</Tab>
          <Tab value={1}>Tab 2</Tab>
        </TabList>
        <div className='py-4'>
          <TabPanel value={0} active={value}>
            Tab 1 content
          </TabPanel>
          <TabPanel value={1} active={value}>
            Tab 2 content
          </TabPanel>
        </div>
      </div>
    );
  },
};
