// @ts-ignore
import { useArgs } from '@storybook/preview-api';
import type { Meta } from '@storybook/react';
import { StoryFn } from '@storybook/react';

import { InputWithSelect } from '@/components/form-elements/input-with-select';

const meta: Meta<typeof InputWithSelect> = {
  title: 'components/form elements/input with select',
  component: InputWithSelect,
  tags: ['autodocs'],
};

export default meta;
const Template: StoryFn<typeof InputWithSelect> = (args) => {
  const [_, updateArgs] = useArgs();

  return (
    <InputWithSelect
      {...args}
      placeholder='Your input...'
      onChange={(e) => updateArgs({ value: e.target.value })}
      onSelectChange={(value) => updateArgs({ selectValue: value })}
    />
  );
};

export const Basic = Template.bind({});
Basic.args = {
  options: [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ],
};
