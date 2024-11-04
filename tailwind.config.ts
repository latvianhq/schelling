import type { Config } from 'tailwindcss';

export const colors = {
  'page-bg': 'rgb(var(--color-page-bg))',
  primary: 'rgb(var(--color-primary))',
  'primary-darker': 'rgb(var(--color-primary-darker))',
  'primary-dark': 'rgb(var(--color-primary-dark))',
  secondary: 'rgb(var(--color-secondary))',
  'secondary-darker': 'rgb(var(--color-secondary-darker))',
  red: 'rgb(var(--color-red))',
} as const;

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors,
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          xl: '2.5rem',
        },
      },
    },
  },
  plugins: [],
};
export default config;
