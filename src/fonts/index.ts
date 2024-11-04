import localFont from 'next/font/local';

export const stratos = localFont({
  display: 'swap',
  variable: '--font-stratos',
  src: [
    {
      path: './stratos-lc-web/StratosLCWeb-Medium.woff2',
      weight: '500',
    },
    {
      path: './stratos-lc-web/StratosLcWeb-Regular.woff2',
      weight: '400',
    },
  ],
});
