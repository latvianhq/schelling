import LogoFullIcon from '@/assets/icons/logo-full.svg';
import { Button } from '@/components/buttons/button';
import { Divider } from '@/components/divider';
import { InputField } from '@/components/form-elements/input-field';

interface InviteScreenProps {
  onProceed: () => void;
}

export const InviteForm = ({ onProceed }: InviteScreenProps) => {
  return (
    <div className='mx-auto flex w-full max-w-[484px] flex-1 flex-col justify-center'>
      <LogoFullIcon className='mb-10 h-[40px] w-auto' />

      <form className='flex flex-col gap-4 rounded-[20px] bg-secondary px-7 py-8'>
        <InputField
          labelClassName='flex items-center justify-between'
          label={
            <>
              <span>Invite code</span>
              <span className='typo-text'>
                Don’t have a code?{' '}
                <a href='/' target='_blank' rel='noreferrer noopener' className='underline'>
                  Contact us
                </a>
              </span>
            </>
          }
        />

        <Button text='Proceed' onClick={onProceed} />
      </form>

      <Divider text='Already have an account?' />

      <Button variant='secondary' text='Sign in' />
    </div>
  );
};
