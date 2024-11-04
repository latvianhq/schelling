// @ts-ignore
import { useArgs } from '@storybook/preview-api';
import type { Meta } from '@storybook/react';
import { StoryFn } from '@storybook/react';

import { Checkbox } from '@/components/form-elements/checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'components/form elements/checkbox',
  component: Checkbox,
  tags: ['autodocs'],
};

export default meta;
const Template: StoryFn<typeof Checkbox> = (args) => {
  const [_, updateArgs] = useArgs();

  return <Checkbox {...args} onChange={(e) => updateArgs({ checked: e.target.checked })} />;
};

export const Basic = Template.bind({});
