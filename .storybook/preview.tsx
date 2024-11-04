import type { Preview } from '@storybook/react';

import '@/styles/globals.css';

import { stratos } from '../src/fonts';

const preview: Preview = {
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className={`${stratos.className} font-medium`}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'light', value: '#d7d7d7' },
        { name: 'dark', value: 'rgba(7, 24, 24, 1)' },
      ],
    },
    nextjs: {
      appDirectory: true,
    },
  },
};

export default preview;
