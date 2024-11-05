import { Button } from '@/components/buttons/button';
import { LinkActive } from '@/components/layout/header/link-active';
import { Logo } from '@/components/logo';

export const Header = () => {
  return (
    <header className='container flex h-[68px] items-center justify-between gap-10 border-b-[1px] border-primary/20'>
      <Logo />

      <nav className='ml-auto flex self-stretch'>
        <ul className='flex gap-2'>
          <li className='flex'>
            <LinkActive href='/'>Acquire</LinkActive>
          </li>
          <li className='flex'>
            <LinkActive href='/my-staking'>My staking</LinkActive>
          </li>
        </ul>
      </nav>

      <Button className='w-[120px]' variant='secondary'>
        Log out
      </Button>
    </header>
  );
};
