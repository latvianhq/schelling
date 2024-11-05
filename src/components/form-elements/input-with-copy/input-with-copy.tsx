import { twMerge } from 'tailwind-merge';

import { ButtonCopy } from '@/components/buttons/button-copy';
import { InputField, InputProps } from '@/components/form-elements/input-field';

export const InputWithCopy = (props: InputProps) => {
  return (
    <InputField
      {...props}
      endAdornment={
        <ButtonCopy className={twMerge('h-[80%] rounded-md', props.className)} text={props.value?.toString()} />
      }
    />
  );
};
