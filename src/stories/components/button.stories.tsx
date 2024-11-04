import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/buttons/button';

const meta: Meta<typeof Button> = {
  title: 'components/button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  args: {
    text: 'Basic button',
  },
};

export const Children: Story = {
  args: {
    children: 'Basic button',
  },
};
