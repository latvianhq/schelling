import { twMerge } from 'tailwind-merge';

import { InputField, InputProps } from '@/components/form-elements/input-field';
import { Select, SelectProps } from '@/components/form-elements/select';

interface SelectInputProps extends InputProps, Pick<SelectProps, 'options'> {
  selectValue?: SelectProps['value'];
  onSelectChange?: SelectProps['onChange'];
}

export const InputWithSelect = ({ selectValue, onSelectChange, options, ...props }: SelectInputProps) => {
  return (
    <InputField
      {...props}
      inputWrapperClassName={twMerge(props.inputWrapperClassName, 'pl-0')}
      startAdornment={
        <Select
          inline
          value={selectValue}
          onChange={onSelectChange}
          options={options}
          className='mr-1 !h-[calc(100%-2px)]'
          valueClassName={twMerge(
            'border-y-0 rounded-none border-l-0 bg-transparent pl-5 border-r-[1px] border-primary/20',
          )}
        />
      }
    />
  );
};
