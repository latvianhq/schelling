// @ts-ignore
import { useArgs } from '@storybook/preview-api';
import type { Meta } from '@storybook/react';
import { StoryFn } from '@storybook/react';

import { InputField } from '@/components/form-elements/input-field';

const meta: Meta<typeof InputField> = {
  title: 'components/form elements/input field',
  component: InputField,
  tags: ['autodocs'],
};

export default meta;
const Template: StoryFn<typeof InputField> = (args) => {
  const [_, updateArgs] = useArgs();

  return <InputField {...args} placeholder='Your input...' onChange={(e) => updateArgs({ value: e.target.value })} />;
};

export const Basic = Template.bind({});
