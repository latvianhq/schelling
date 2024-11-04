// @ts-ignore
import { useArgs } from '@storybook/preview-api';
import type { Meta } from '@storybook/react';
import { StoryFn } from '@storybook/react';

import { Select } from '@/components/form-elements/select';

const meta: Meta<typeof Select> = {
  title: 'components/form elements/select',
  component: Select,
  tags: ['autodocs'],
};

export default meta;
const Template: StoryFn<typeof Select> = (args) => {
  const [_, updateArgs] = useArgs();

  return <Select {...args} placeholder='Choose option...' onChange={(value) => updateArgs({ value })} />;
};

export const Basic = Template.bind({});
Basic.args = {
  options: [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ],
};
