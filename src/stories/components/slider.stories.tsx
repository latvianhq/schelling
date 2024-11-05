import { useArgs } from '@storybook/preview-api';
import type { Meta } from '@storybook/react';
import { StoryFn } from '@storybook/react';

import { Slider } from '@/components/slider';

const meta: Meta<typeof Slider> = {
  title: 'components/slider',
  component: Slider,
  tags: ['autodocs'],
};

export default meta;
const Template: StoryFn<typeof Slider> = (args) => {
  const [_, updateArgs] = useArgs();

  return <Slider {...args} onChange={(value) => updateArgs({ value })} />;
};

export const Basic = Template.bind({});
