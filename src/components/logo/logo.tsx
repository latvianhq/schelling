import Link from 'next/link';

import LogoFullIcon from '@/assets/icons/logo-full.svg';

export const Logo = () => {
  return (
    <Link href='/'>
      <LogoFullIcon />
    </Link>
  );
};
