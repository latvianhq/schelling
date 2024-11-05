import GoogleIcon from '@/assets/icons/google.svg';
import LogoSparkleIcon from '@/assets/icons/logo-sparkle.svg';
import LogIcon from '@/assets/icons/logo.svg';
import { Button } from '@/components/buttons/button';
import { Divider } from '@/components/divider';
import { InputField } from '@/components/form-elements/input-field';

export const EnterForm = () => {
  return (
    <div className='relative z-0 mx-auto flex w-full max-w-[484px] flex-1 flex-col justify-center overflow-hidden rounded-[20px] bg-secondary px-7 py-8'>
      <div className='absolute left-1/2 top-0 -z-10 -translate-x-1/2 -translate-y-[56%]'>
        <div className='absolute bottom-0 left-1/2 -z-10 aspect-square w-[200px] -translate-x-1/2 rounded-[50%] bg-[rgba(106,162,162,0.2)] blur-2xl' />

        <LogIcon className='h-auto w-[170px] opacity-10' />
      </div>

      <LogoSparkleIcon className='self-center' />

      <h1 className='typo-title mt-3 text-center'>Welcome to iCoin</h1>

      <p className='text-center'>The following information is required for account creation</p>

      <form className='mt-10 flex flex-col gap-4'>
        <InputField label='Your full name' />
        <InputField label='Your email' />

        <Button text='Enter Schelling' />

        <Divider className='my-1' text='Or sign in with' />

        <Button variant='secondary'>
          <GoogleIcon /> Continue with Google
        </Button>
      </form>
    </div>
  );
};
