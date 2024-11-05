import type { Metadata } from 'next';
import Image from 'next/image';

import BgImage from '@/assets/images/bg.png';
import { ButtonManualOnboard } from '@/components/buttons/button-manual-onboard';
import { stratos } from '@/fonts';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${stratos.className}`}>
      <body className='typo-text relative flex min-h-screen w-screen flex-col overflow-x-hidden bg-page-bg font-medium antialiased'>
        {children}

        <Image className='-z-10 object-cover' fill src={BgImage} alt='planet' />
        <div className='absolute left-0 top-0 -z-10 aspect-square w-[326px] -translate-x-[20%] -translate-y-[40%] rounded-[50%] bg-[rgba(131,216,214,0.1)] blur-[200px]' />
        <ButtonManualOnboard />
      </body>
    </html>
  );
}
